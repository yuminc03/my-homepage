// 마크다운·MDX 본문에서 "사람이 읽는 글자"만 남긴다
// - 읽는 시간 계산(readingTime.ts)과 검색 색인(searchIndex.ts)이 같은 일을 해야 해서 한곳에 모았다.
//   두 곳의 차이는 코드 블록 하나뿐이라 keepCode 옵션으로 가른다
// - 읽는 시간은 코드도 읽는 시간에 넣으므로 남기고(keepCode: true), 검색은 코드가 결과 문장에 섞이면
//   읽기 어렵고 색인만 커지므로 뺀다(기본값)
// - 줄 구조는 남긴다. 검색 결과에서 일치한 곳의 "그 줄"만 잘라 보여 주기 때문이다

interface Options {
	/** 코드 블록 안의 코드를 남길지. 울타리 줄(```)은 어느 쪽이든 뺀다 */
	keepCode?: boolean;
}

/** 울타리로 감싼 코드 블록 한 덩어리 */
const CODE_BLOCK = /^[ \t]*```[^\n]*\n[\s\S]*?^[ \t]*```[ \t]*$/gm;

/** 울타리 줄 하나(닫히지 않은 블록이 남았을 때를 위한 그물) */
const FENCE_LINE = /^[ \t]*```.*$/gm;

const stripCode = (body: string, keepCode: boolean) =>
	body.replace(CODE_BLOCK, (block) => (keepCode ? block.replace(FENCE_LINE, '') : '')).replace(FENCE_LINE, '');

/** 마크다운 기호를 걷어낸 본문 텍스트(줄 단위로 정리, 빈 줄 없음) */
export const markdownToText = (body = '', { keepCode = false }: Options = {}): string =>
	stripCode(body, keepCode)
		// MDX의 import·export 줄(세미나 글의 사진 불러오기)
		.replace(/^[ \t]*(?:import|export)[ \t].*$/gm, '')
		// HTML·MDX 태그
		.replace(/<[^>]*>/g, '')
		// 이미지: 설명과 주소 모두 뺀다
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		// 링크: 보이는 글자만 남기고 주소는 뺀다
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		// 줄 앞의 제목·목록·인용 기호
		.replace(/^[ \t]*(?:#{1,6}|[-*+]|\d+\.|>)[ \t]+/gm, '')
		// 강조·인라인 코드 기호
		.replace(/[*_`~]/g, '')
		.split('\n')
		.map((line) => line.replace(/[ \t]+/g, ' ').trim())
		.filter(Boolean)
		.join('\n');
