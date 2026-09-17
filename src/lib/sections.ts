// 렌더링된 Markdown 본문 HTML을 제목 단위로 묶는다(프로젝트 상세)
// - ## 하나 = <section class="doc-section">, 그 안의 ### 하나 = <div class="doc-card">(시안의 "기술적으로 고민한 점" 카드)
// - Markdown 처리기(Astro 7 기본 Sätteri)의 플러그인 API에 기대지 않고, 처리가 끝난 HTML 문자열을 나눈다
//   Markdown이 만드는 제목은 항상 본문 맨 바깥 단계에 오고, 코드 블록 안의 "<h2"는 &lt;h2로 바뀌어 잘못 나뉘지 않는다
// - 제한: 인용문·목록 안에 제목을 쓰면(> ## 제목) 그 요소가 반으로 갈라진다. 프로젝트 글에서는 쓰지 않는다

export interface DocSections {
	/** 첫 ## 앞의 내용(없으면 빈 문자열) */
	lead: string;
	/** ## 마다 section으로 감싼 HTML */
	sections: string[];
}

/** <h2 ...> 또는 <h2>가 시작되는 자리마다 나눈다. 첫 조각이 제목으로 시작하지 않으면 머리말이다 */
function splitBefore(html: string, tag: 'h2' | 'h3'): { lead: string; parts: string[] } {
	const pieces = html.split(new RegExp(`(?=<${tag}[\\s>])`));
	const startsWithHeading = new RegExp(`^\\s*<${tag}[\\s>]`).test(pieces[0] ?? '');
	return startsWithHeading ? { lead: '', parts: pieces } : { lead: pieces[0] ?? '', parts: pieces.slice(1) };
}

function wrapCards(section: string): string {
	const { lead, parts } = splitBefore(section, 'h3');
	if (parts.length === 0) return section;
	const cards = parts.map((part) => `<div class="doc-card">${part}</div>`).join('');
	return `${lead}<div class="doc-cards">${cards}</div>`;
}

export function splitSections(html: string): DocSections {
	const { lead, parts } = splitBefore(html, 'h2');
	return {
		lead: lead.trim(),
		sections: parts.map((part) => `<section class="doc-section">${wrapCards(part)}</section>`),
	};
}
