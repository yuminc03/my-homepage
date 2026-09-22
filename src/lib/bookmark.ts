// 북마크 카드: 문단에 주소 하나만 쓰면 링크 미리보기 카드(제목·설명·주소·파비콘·썸네일)로 바꾼다
// - 대상: 링크 하나만 든 문단이면서 링크 글자가 주소 그대로인 것(맨 URL, <https://…>).
//   [글자](주소)는 쓴 사람이 글자를 고른 링크라 그대로 둔다 — 카드로 만들고 싶지 않은 주소는 이렇게 쓰면 된다
//   문장 속 링크, 목록 안 링크도 그대로다(목록 항목에는 <p>가 없다)
// - Astro 7의 Markdown 처리기 Sätteri의 hast 플러그인이다. visit가 Promise를 돌려주면 그 노드와 바꿔 끼우므로
//   빌드 중에 링크 정보를 가져올 수 있다(가져오기·캐시는 src/lib/linkPreview.ts). .md와 .mdx에 모두 적용된다
// - 스타일은 src/styles/prose.css의 .bookmark(본문 요소라 스코프 속성이 붙지 않는다)
import type { HastPluginDefinition } from 'satteri';
import type { Element, ElementContent } from 'hast';
import { getLinkPreview } from './linkPreview';

const element = (tagName: string, properties: Element['properties'] = {}, children: ElementContent[] = []): Element => ({
	type: 'element',
	tagName,
	properties,
	children,
});
const text = (value: string): ElementContent => ({ type: 'text', value });

/** 카드에 보여 줄 주소: 프로토콜과 끝 / 를 빼고, 한글 경로는 읽을 수 있게 푼다 */
function displayUrl(url: URL): string {
	const path = `${url.pathname}${url.search}`.replace(/\/$/, '');
	return safeDecodeURI(`${url.host}${path}`);
}

/** 링크 하나만 든 문단이면 그 주소를, 아니면 undefined */
function soleUrl(paragraph: Element, textContent: (node: Element) => string): string | undefined {
	const children = paragraph.children.filter((child) => !(child.type === 'text' && !child.value.trim()));
	const [link] = children;
	if (children.length !== 1 || link.type !== 'element' || link.tagName !== 'a') return undefined;
	const href = link.properties?.href;
	if (typeof href !== 'string' || !/^https?:\/\//.test(href)) return undefined;
	// 한글 주소는 href만 퍼센트 인코딩되고 링크 글자는 한글 그대로라, 푼 값과도 비교한다
	const label = textContent(link);
	return label === href || label === safeDecodeURI(href) ? href : undefined;
}

function safeDecodeURI(value: string): string {
	try {
		return decodeURI(value);
	} catch {
		return value;
	}
}

export async function renderBookmark(href: string): Promise<Element> {
	const url = new URL(href);
	const preview = await getLinkPreview(href);

	const textChildren: ElementContent[] = [element('span', { className: ['bookmark-title'] }, [text(preview?.title ?? url.host)])];
	if (preview?.description) {
		textChildren.push(element('span', { className: ['bookmark-desc'] }, [text(preview.description)]));
	}
	const urlLine: ElementContent[] = [];
	if (preview?.favicon) {
		urlLine.push(
			element('img', {
				className: ['bookmark-favicon'],
				src: preview.favicon,
				alt: '',
				width: 16,
				height: 16,
				loading: 'lazy',
				decoding: 'async',
				referrerPolicy: 'no-referrer',
			}),
		);
	}
	urlLine.push(element('span', { className: ['bookmark-url-text'] }, [text(displayUrl(url))]));
	textChildren.push(element('span', { className: ['bookmark-url'] }, urlLine));
	// 새 창으로 열린다는 것을 스크린 리더에도 알린다(프로젝트 상세 링크 버튼과 같은 방식)
	textChildren.push(element('span', { className: ['bookmark-sr'] }, [text('(새 창)')]));

	const cardChildren: ElementContent[] = [element('span', { className: ['bookmark-text'] }, textChildren)];
	if (preview?.image) {
		cardChildren.push(
			element('span', { className: ['bookmark-thumb'] }, [
				element('img', { src: preview.image, alt: '', loading: 'lazy', decoding: 'async', referrerPolicy: 'no-referrer' }),
			]),
		);
	}

	return element(
		'a',
		{ className: ['bookmark'], href, target: '_blank', rel: ['noopener', 'noreferrer'] },
		cardChildren,
	);
}

export function bookmarkCard(): HastPluginDefinition {
	return {
		name: 'bookmark-card',
		element: {
			filter: ['p'],
			visit(node, ctx) {
				const href = soleUrl(node, (child) => ctx.textContent(child));
				if (href) return renderBookmark(href);
			},
		},
	};
}
