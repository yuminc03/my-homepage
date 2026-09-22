// 북마크 카드에 쓸 링크 정보(제목·설명·썸네일·파비콘)를 빌드할 때 가져온다
// - 그 페이지의 <head>에서 OG 태그(og:title 등) → twitter: 태그 → <title>·description 순서로 읽는다
// - 한 번 가져온 결과는 src/data/link-previews.json에 저장해 커밋한다. 다음 빌드(배포 포함)는 네트워크 없이 같은 카드를 그리고,
//   상대 사이트가 바뀌거나 잠시 죽어도 카드가 흔들리지 않는다. 다시 가져오려면 그 주소의 항목을 지우고 빌드한다
// - 가져오지 못하면 null을 돌려주고 캐시에 남기지 않는다(카드는 주소만으로 그리고, 다음 빌드에서 다시 시도한다)
// - 썸네일·파비콘은 실제로 이미지가 오는지 확인한 것만 남긴다(깨진 그림을 그리지 않기 위해)
import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export interface LinkPreview {
	title?: string;
	description?: string;
	image?: string;
	favicon?: string;
}

// 빌드 도구가 이 파일을 다른 위치로 묶어도 경로가 흔들리지 않게 import.meta.url 대신 작업 폴더(저장소 루트) 기준으로 잡는다
const CACHE_PATH = resolve(process.cwd(), 'src/data/link-previews.json');
const TIMEOUT_MS = 8000;
const HEADERS = {
	'user-agent': 'Mozilla/5.0 (compatible; Lia.log-bookmark/1.0; +https://yuminc03.github.io/my-homepage/)',
	accept: 'text/html,application/xhtml+xml',
	'accept-language': 'ko,en;q=0.8',
};

let cache: Record<string, LinkPreview> | undefined;
// 같은 주소가 여러 글에 있거나 글이 동시에 렌더링돼도 한 번만 요청한다
const pending = new Map<string, Promise<LinkPreview | null>>();
// 파일 쓰기를 한 줄로 세워 동시에 쓰다 내용이 섞이지 않게 한다
let writing = Promise.resolve();

function loadCache(): Record<string, LinkPreview> {
	if (!cache) {
		try {
			cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
		} catch {
			cache = {};
		}
	}
	return cache!;
}

function saveCache() {
	const snapshot = loadCache();
	// 주소 순으로 정렬해 저장한다. 글을 추가할 때 diff가 한 덩어리로만 늘어난다
	const sorted = Object.fromEntries(Object.keys(snapshot).sort().map((url) => [url, snapshot[url]]));
	writing = writing.then(() => writeFile(CACHE_PATH, `${JSON.stringify(sorted, null, '\t')}\n`)).catch(() => {});
}

export function getLinkPreview(url: string): Promise<LinkPreview | null> {
	const cached = loadCache()[url];
	if (cached) return Promise.resolve(cached);

	let request = pending.get(url);
	if (!request) {
		request = fetchPreview(url).then((preview) => {
			if (preview) {
				loadCache()[url] = preview;
				saveCache();
			}
			return preview;
		});
		pending.set(url, request);
	}
	return request;
}

async function fetchPreview(url: string): Promise<LinkPreview | null> {
	try {
		const response = await fetch(url, { headers: HEADERS, redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT_MS) });
		if (!response.ok || !(response.headers.get('content-type') ?? '').includes('html')) {
			console.warn(`[bookmark] ${url} → ${response.status} ${response.headers.get('content-type') ?? ''}`);
			return null;
		}
		const html = decode(new Uint8Array(await response.arrayBuffer()), response.headers.get('content-type'));
		// 리다이렉트된 뒤의 주소를 기준으로 상대 경로(이미지·아이콘)를 푼다
		const base = response.url || url;
		const head = parseHead(html);

		const meta = (...keys: string[]) => keys.map((key) => head.meta.get(key)).find(Boolean);
		const [image, favicon] = await Promise.all([
			verifiedImage(absolute(meta('og:image', 'og:image:url', 'twitter:image', 'twitter:image:src'), base)),
			verifiedImage(absolute(head.icon, base) ?? new URL('/favicon.ico', base).href),
		]);

		const preview: LinkPreview = {
			title: meta('og:title', 'twitter:title') ?? head.title,
			description: meta('og:description', 'twitter:description', 'description'),
			image,
			favicon,
		};
		// 값이 비어 있는 칸은 저장하지 않는다(JSON을 짧게)
		return Object.fromEntries(Object.entries(preview).filter(([, value]) => value)) as LinkPreview;
	} catch (error) {
		console.warn(`[bookmark] ${url} → ${(error as Error).message}`);
		return null;
	}
}

/** 응답 헤더나 <meta charset>의 문자 인코딩으로 읽는다(EUC-KR 같은 옛 한국어 사이트 대비) */
function decode(bytes: Uint8Array, contentType: string | null): string {
	const sniff = new TextDecoder('latin1').decode(bytes.subarray(0, 2048));
	const charset =
		/charset=["']?([\w-]+)/i.exec(contentType ?? '')?.[1] ?? /<meta[^>]+charset=["']?([\w-]+)/i.exec(sniff)?.[1] ?? 'utf-8';
	try {
		return new TextDecoder(charset).decode(bytes);
	} catch {
		return new TextDecoder('utf-8').decode(bytes);
	}
}

interface Head {
	title?: string;
	meta: Map<string, string>;
	icon?: string;
}

/** <head>의 <title>·<meta>·아이콘 <link>만 읽는다. HTML 전체를 파싱할 필요가 없어 정규식으로 충분하다 */
function parseHead(html: string): Head {
	const end = html.search(/<\/head>/i);
	const source = end === -1 ? html.slice(0, 500_000) : html.slice(0, end);

	const meta = new Map<string, string>();
	for (const [tag] of source.matchAll(/<meta\b[^>]*>/gi)) {
		const attrs = attributes(tag);
		const key = (attrs.property ?? attrs.name)?.toLowerCase();
		const content = attrs.content?.trim();
		// 같은 태그가 여러 번 나오면 첫 번째를 쓴다
		if (key && content && !meta.has(key)) meta.set(key, decodeEntities(content));
	}

	// 아이콘은 작은 것(icon) → shortcut icon → apple-touch-icon 순서로 고른다
	const icons = [...source.matchAll(/<link\b[^>]*>/gi)]
		.map(([tag]) => attributes(tag))
		.filter((attrs) => attrs.href && /\bicon\b/i.test(attrs.rel ?? ''));
	const rank = (rel = '') => (/^icon$/i.test(rel.trim()) ? 0 : /shortcut/i.test(rel) ? 1 : 2);
	const icon = icons.sort((a, b) => rank(a.rel) - rank(b.rel))[0]?.href;

	const title = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(source)?.[1];
	return {
		title: title ? decodeEntities(title.replace(/\s+/g, ' ').trim()) || undefined : undefined,
		meta,
		icon: icon ? decodeEntities(icon) : undefined,
	};
}

function attributes(tag: string): Record<string, string> {
	const attrs: Record<string, string> = {};
	for (const [, name, double, single, bare] of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
		attrs[name.toLowerCase()] = double ?? single ?? bare;
	}
	return attrs;
}

const NAMED_ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', middot: '·' };

function decodeEntities(text: string): string {
	return text.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (match, code: string) => {
		if (code[0] === '#') {
			const point = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
			return Number.isNaN(point) ? match : String.fromCodePoint(point);
		}
		return NAMED_ENTITIES[code.toLowerCase()] ?? match;
	});
}

function absolute(href: string | undefined, base: string): string | undefined {
	if (!href) return undefined;
	try {
		const url = new URL(href, base);
		return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
	} catch {
		return undefined;
	}
}

/** 주소가 실제로 이미지를 돌려주는지 확인한다. 본문은 받지 않고 끊는다 */
async function verifiedImage(url: string | undefined): Promise<string | undefined> {
	if (!url) return undefined;
	try {
		const response = await fetch(url, { headers: { 'user-agent': HEADERS['user-agent'] }, signal: AbortSignal.timeout(TIMEOUT_MS) });
		await response.body?.cancel();
		return response.ok && (response.headers.get('content-type') ?? '').startsWith('image/') ? url : undefined;
	} catch {
		return undefined;
	}
}
