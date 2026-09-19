// 코드 블록: 파일 이름 머리줄 + 복사 버튼 + 줄 번호 (시안 design/StudyPost.dc.html · Mobile · Tablet)
// - Astro 7의 Markdown 처리기는 Sätteri지만 구문 강조는 Shiki가 따로 한다. 그래서 unified/rehype 플러그인 대신
//   Shiki transformer를 쓸 수 있고, 울타리의 meta까지 그대로 받는다: ```swift title="Example.swift" (2026-09-19 확인)
// - transformer가 <pre>를 <figure class="code-block">으로 감싸고 머리줄을 붙인다. 줄 번호는 CSS 카운터가 그린다
//   (Shiki가 줄마다 <span class="line">을 남긴다 → src/styles/code-block.css)
// - 복사 버튼은 hidden으로 내보내고, 클립보드를 쓸 수 있을 때만 CodeCopy.astro의 스크립트가 보이게 한다
//   (동작하지 않는 버튼은 만들지 않는다 — CLAUDE.md)
// - 색은 테마와 무관한 고정색이다(PROGRESS.md 5-2). 시안의 oklch 값을 sRGB 16진수로 옮겼다(Shiki 테마는 16진수만 받는다)
import type { ShikiTransformer } from 'shiki';
import type { Element, ElementContent } from 'hast';

/** 시안 색 대응표: 라일락 키워드 · 민트 타입 · 블루 함수 · 앰버 문자열 */
export const CODE_THEME = {
	name: 'chu-lilac-dark',
	type: 'dark',
	colors: {
		'editor.background': '#14121B', // oklch(19% 0.018 290)
		'editor.foreground': '#D7D6E1', // oklch(88% 0.015 290)
	},
	tokenColors: [
		{ scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#868492' } },
		{
			scope: [
				'keyword',
				'storage',
				'storage.type',
				'storage.modifier',
				'variable.language',
				'entity.name.tag',
				'punctuation.definition.keyword',
				'keyword.operator.new',
			],
			settings: { foreground: '#BE9DF7' },
		},
		{
			scope: ['entity.name.type', 'entity.other.inherited-class', 'support.type', 'support.class', 'entity.name.class'],
			settings: { foreground: '#6CD5B3' },
		},
		{
			scope: ['entity.name.function', 'support.function', 'meta.function-call', 'variable.function'],
			settings: { foreground: '#6CCDEA' },
		},
		{ scope: ['string', 'constant.character', 'punctuation.definition.string'], settings: { foreground: '#E6BD77' } },
		{ scope: ['constant.numeric', 'constant.language', 'constant.other'], settings: { foreground: '#F2BF96' } },
	],
} as const;

const element = (tagName: string, properties: Element['properties'] = {}, children: ElementContent[] = []): Element => ({
	type: 'element',
	tagName,
	properties,
	children,
});

/** 24×24 선 아이콘(직접 그린 것, SF Symbols 사용 금지 — PROGRESS.md 7장) */
const icon = (className: string, paths: string[]): Element =>
	element(
		'svg',
		{
			className: [className],
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 1.8,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			'aria-hidden': 'true',
		},
		paths.map((d) => element('path', { d })),
	);

const copyButton = (): Element =>
	element('button', { type: 'button', className: ['code-copy'], 'data-code-copy': '', 'aria-label': '코드 복사', hidden: true }, [
		icon('code-copy-icon', ['M9 9h10v11H9z', 'M5 15V4h10']),
		icon('code-copy-done', ['M5 12.5l4.5 4.5L19 7.5']),
		element('span', { className: ['code-copy-label'] }, [{ type: 'text', value: '복사' }]),
	]);

/** ```swift title="Example.swift" 의 title 값 */
const fileNameOf = (meta: string): string | undefined => /(?:^|\s)title="([^"]+)"/.exec(meta)?.[1];

export const codeBlock = (): ShikiTransformer => ({
	name: 'chu-code-block',
	root(root) {
		const pre = root.children[0];
		if (!pre || pre.type !== 'element' || pre.tagName !== 'pre') return;

		// 파일 이름이 없으면 언어 이름을 머리줄에 쓴다(data-language는 이 시점에 아직 붙지 않아 options.lang을 본다).
		// 언어를 적지 않은 블록(plaintext)은 복사 버튼만 둔다
		const language = this.options.lang ?? '';
		const label = fileNameOf(this.options.meta?.__raw ?? '') ?? (language !== 'plaintext' ? language : '');

		const head = element('figcaption', { className: ['code-head'] }, [
			...(label ? [element('span', { className: ['code-file'] }, [{ type: 'text', value: label }])] : []),
			copyButton(),
		]);

		root.children = [element('figure', { className: ['code-block'] }, [head, pre])];
	},
});
