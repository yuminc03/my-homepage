// 콘텐츠 검색: 색인 한 벌을 브라우저에서 훑는 순수 함수 묶음 (결정은 PROGRESS.md 5-18)
// - 왜 라이브러리(Fuse.js·Pagefind)를 쓰지 않나: 글이 수십 편 규모라 부분 문자열 훑기로 충분하고,
//   오타 교정이 없는 대신 한글 "스터디를 → 스터디"가 그냥 걸린다. 의존성과 번들도 늘지 않는다
// - DOM을 만지지 않는다. 강조는 조각 배열로 돌려주고, 요소로 만드는 일은 컴포넌트가 한다
//   (글 내용을 innerHTML로 이어 붙이면 본문의 <,& 가 HTML로 해석된다 — PROGRESS.md 2-6)
import { APPS, type AppId } from '../data/apps';
import { withBase } from './url';

/** 색인 주소. 만드는 쪽은 src/pages/search-index.json.ts이지만, 그 파일은 astro:content를 끌어와 브라우저에서 import할 수 없다 */
export const SEARCH_INDEX_URL = withBase('/search-index.json');

/** 색인에 담기는 컬렉션. 앱 id와 같은 값이라 묶음 제목을 apps.ts에서 그대로 읽는다 */
export type SearchCollection = Extract<AppId, 'projects' | 'study' | 'seminars'>;

/** 색인 항목 하나. 빌드 때 searchIndex.ts가 만들고 JSON으로 나간다 */
export interface SearchDoc {
	collection: SearchCollection;
	/** 상세 페이지 주소(base 포함). 결과를 누르면 목록이 아니라 여기로 간다 */
	href: string;
	title: string;
	summary: string;
	/** 결과 줄에 함께 보여 주는 보조 정보(분류·날짜·장소) */
	meta: string;
	/** 찾기만 되고 화면에는 그리지 않는 값(태그·기술·역할) */
	keywords: string;
	/** 마크다운 기호와 코드를 걷어낸 본문. 줄바꿈으로 문단이 나뉘어 있다 */
	body: string;
}

/** 강조용 조각. hit이면 일치한 글자 */
export interface HighlightPart {
	text: string;
	hit: boolean;
}

export interface SearchHit {
	doc: SearchDoc;
	title: HighlightPart[];
	/** 요약, 또는 요약에 없고 본문에서 걸렸으면 본문에서 잘라 온 줄 */
	snippet: HighlightPart[];
	/** snippet이 본문 발췌인지(화면에서 표시를 달리한다) */
	fromBody: boolean;
}

export interface SearchGroup {
	id: SearchCollection;
	/** 묶음 소제목(apps.ts의 앱 이름) */
	label: string;
	hits: SearchHit[];
}

/** 이 글자 수부터 찾는다. 1글자는 너무 많이 걸려 최근 글을 대신 보여 준다(5-18) */
export const MIN_QUERY_LENGTH = 2;

/** 본문에서 잘라 올 한 줄의 최대 글자 수 */
const SNIPPET_LENGTH = 120;

// 어느 칸에서 걸렸는지에 따른 점수. 제목이 가장 무겁고 본문이 가장 가볍다
const WEIGHTS = [
	{ field: 'title', weight: 6 },
	{ field: 'summary', weight: 3 },
	{ field: 'meta', weight: 3 },
	{ field: 'keywords', weight: 3 },
	{ field: 'body', weight: 1 },
] as const;

/** 입력을 찾을 낱말들로 나눈다. 공백이 여러 개여도 빈 낱말이 생기지 않는다 */
export const parseQuery = (raw: string): string[] => raw.trim().toLowerCase().split(/\s+/).filter(Boolean);

/** 찾기 시작할 만큼 입력했는지(공백은 한 칸으로 세어 MIN_QUERY_LENGTH와 견준다) */
export const isSearchable = (raw: string): boolean => parseQuery(raw).join(' ').length >= MIN_QUERY_LENGTH;

/** 글자 안에서 낱말들이 걸린 구간을 [시작, 끝)으로 모아 겹치는 것끼리 합친다 */
const matchRanges = (lower: string, terms: string[]): [number, number][] => {
	const found: [number, number][] = [];
	for (const term of terms) {
		for (let at = lower.indexOf(term); at >= 0; at = lower.indexOf(term, at + term.length)) {
			found.push([at, at + term.length]);
		}
	}
	found.sort((a, b) => a[0] - b[0]);

	const merged: [number, number][] = [];
	for (const [start, end] of found) {
		const last = merged.at(-1);
		if (last && start <= last[1]) last[1] = Math.max(last[1], end);
		else merged.push([start, end]);
	}
	return merged;
};

/**
 * 일치한 글자를 따로 떼어 조각 배열로 만든다.
 * 소문자로 바꿔도 길이가 같은 글자(한글·영문)만 다루므로 원문 위치를 그대로 쓸 수 있다
 */
export const highlight = (text: string, terms: string[]): HighlightPart[] => {
	if (!text) return [];
	const ranges = terms.length ? matchRanges(text.toLowerCase(), terms) : [];
	if (!ranges.length) return [{ text, hit: false }];

	const parts: HighlightPart[] = [];
	let at = 0;
	for (const [start, end] of ranges) {
		if (start > at) parts.push({ text: text.slice(at, start), hit: false });
		parts.push({ text: text.slice(start, end), hit: true });
		at = end;
	}
	if (at < text.length) parts.push({ text: text.slice(at), hit: false });
	return parts;
};

/** 본문에서 낱말이 처음 걸린 줄을 잘라 온다. 줄이 길면 일치한 곳 앞뒤만 남기고 …를 붙인다 */
export const bodySnippet = (body: string, terms: string[]): string => {
	const lower = body.toLowerCase();
	const at = terms.reduce((best, term) => {
		const found = lower.indexOf(term);
		return found >= 0 && (best < 0 || found < best) ? found : best;
	}, -1);
	if (at < 0) return '';

	const lineStart = lower.lastIndexOf('\n', at) + 1;
	const lineEnd = lower.indexOf('\n', at);
	const line = body.slice(lineStart, lineEnd < 0 ? body.length : lineEnd);
	if (line.length <= SNIPPET_LENGTH) return line;

	// 일치한 글자가 앞쪽 1/3 지점에 오도록 창을 잡아 뒤 문맥을 더 보여 준다
	const from = Math.max(0, at - lineStart - Math.floor(SNIPPET_LENGTH / 3));
	const to = Math.min(line.length, from + SNIPPET_LENGTH);
	return `${from > 0 ? '…' : ''}${line.slice(from, to).trim()}${to < line.length ? '…' : ''}`;
};

/** 낱말 하나가 이 글에서 걸린 가장 무거운 칸의 점수. 0이면 어디에도 없다 */
const termScore = (doc: SearchDoc, term: string): number => {
	for (const { field, weight } of WEIGHTS) {
		if (doc[field].toLowerCase().includes(term)) return weight;
	}
	return 0;
};

/**
 * 낱말을 모두 가진 글만 점수 순으로 돌려준다(AND).
 * 점수가 같으면 색인 순서를 지킨다 — 색인은 목록 페이지와 같은 순서(최신 글 먼저)로 만든다
 */
export const searchDocs = (docs: readonly SearchDoc[], raw: string): SearchHit[] => {
	const terms = parseQuery(raw);
	if (!terms.length) return [];

	const scored: { hit: SearchHit; score: number; order: number }[] = [];
	docs.forEach((doc, order) => {
		let score = 0;
		for (const term of terms) {
			const termPoints = termScore(doc, term);
			if (!termPoints) return;
			score += termPoints;
		}

		const inSummary = terms.some((term) => doc.summary.toLowerCase().includes(term));
		const snippet = inSummary ? '' : bodySnippet(doc.body, terms);
		scored.push({
			score,
			order,
			hit: {
				doc,
				title: highlight(doc.title, terms),
				snippet: highlight(snippet || doc.summary, terms),
				fromBody: Boolean(snippet),
			},
		});
	});

	return scored.sort((a, b) => b.score - a.score || a.order - b.order).map(({ hit }) => hit);
};

/** 결과를 컬렉션별로 묶는다. 순서는 메뉴와 같고, 빈 묶음은 돌려주지 않는다(5-18) */
export const groupHits = (hits: readonly SearchHit[], limitPerGroup: number): SearchGroup[] =>
	APPS.filter((app): app is (typeof APPS)[number] & { id: SearchCollection } => app.id !== 'home')
		.map((app) => ({
			id: app.id,
			label: app.label,
			hits: hits.filter((hit) => hit.doc.collection === app.id).slice(0, limitPerGroup),
		}))
		.filter((group) => group.hits.length > 0);

/** 강조할 것이 없는 결과 한 줄(최근 글용) */
const plainHit = (doc: SearchDoc): SearchHit => ({
	doc,
	title: [{ text: doc.title, hit: false }],
	snippet: [{ text: doc.summary, hit: false }],
	fromBody: false,
});

/**
 * 아직 찾을 말이 없을 때 보여 줄 최근 글(5-18).
 * 색인 순서가 곧 목록 순서(최신 글 먼저)라 앞에서 몇 건씩 끊으면 된다.
 * 결과와 같은 모양으로 돌려주므로 화면도 같은 코드로 그린다
 */
export const recentGroups = (docs: readonly SearchDoc[], perGroup: number): SearchGroup[] =>
	groupHits(docs.map(plainHit), perGroup);
