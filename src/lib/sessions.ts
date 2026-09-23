// 세미나 본문의 소제목에서 세션 목록을 뽑는다 (결정은 PROGRESS.md 5-25)
// - 글쓴이가 세션을 프런트매터에 다시 적지 않게 하려는 것이다. 본문 한 벌이 유일한 기준이 된다
// - 규칙은 상세 화면 CSS가 이미 쓰는 것과 같다: ## 라벨 바로 뒤에 ###이 오면 세션 머리,
//   ###이 없는 ##(배운 점 · 소감)은 마무리 구획이라 세션이 아니다
// - 라벨은 "SESSION 01 · 발표자" 또는 "SESSION 01 · 발표자 · 14:00"처럼 ·로 칸을 나눈다
// - 상세 페이지(세션 한눈에 보기)와 목록 페이지(카드의 세션 수)가 함께 쓰는 순수 함수다
import type { MarkdownHeading } from 'astro';

export interface SeminarSession {
	/** 라벨에 적힌 번호("SESSION 01" → 1). 번호가 없으면 나온 순서대로 매긴다 */
	number: number;
	/** 발표자. 라벨에 번호만 있으면 없을 수 있다 */
	speaker?: string;
	/** 시간·트랙 등 세 번째 칸(선택) */
	note?: string;
	/** ### 줄에 적은 세션 제목 */
	title: string;
	/** 눌렀을 때 이동할 앵커 — 라벨(##)의 slug */
	slug: string;
}

/** "SESSION 01" · "Session 3" 같은 번호 칸 */
const NUMBER_LABEL = /^session\s*0*(\d+)$/i;

/** 소제목 목록(render()의 headings)에서 세션을 순서대로 뽑는다 */
export function getSeminarSessions(headings: MarkdownHeading[]): SeminarSession[] {
	const sessions: SeminarSession[] = [];

	for (const [index, label] of headings.entries()) {
		const heading = headings[index + 1];
		if (label.depth !== 2 || heading?.depth !== 3) continue;

		const parts = label.text
			.split('·')
			.map((part) => part.trim())
			.filter(Boolean);
		const numbered = NUMBER_LABEL.exec(parts[0] ?? '');
		// 번호 칸이 없으면 첫 칸부터 발표자다("## 고드름"처럼 번호 없이 쓸 수 있다)
		const rest = numbered ? parts.slice(1) : parts;

		sessions.push({
			number: numbered ? Number(numbered[1]) : sessions.length + 1,
			speaker: rest[0],
			note: rest[1],
			title: heading.text,
			slug: label.slug,
		});
	}

	return sessions;
}
