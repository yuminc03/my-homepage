// 스터디 글의 "N분 소요" (2026-09-19 확정, 근거는 PROGRESS.md 5-15)
// - 공백을 뺀 글자 수를 분당 500자로 나누고 올림한다. 0분은 없으므로 최소 1분
// - 코드 블록도 글자 수에 넣는다. 코드는 줄이 짧아 글자 수가 적게 잡히는 대신 읽는 데 오래 걸려 서로 상쇄된다
// - 읽는 글자가 아닌 것(제목 #, 목록 기호, 링크 주소, 이미지, HTML·MDX 태그)은 빼고 센다

const CHARS_PER_MINUTE = 500;

/** 읽지 않는 기호를 걷어내고 공백을 없앤 본문 */
const readableText = (body: string) =>
	body
		// 코드 울타리 줄(``` 과 언어·title)은 빼고 코드 내용은 남긴다
		.replace(/^[ \t]*```.*$/gm, '')
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
		.replace(/\s+/g, '');

/** 분 단위 읽는 시간(최소 1분) */
export const readingMinutes = (body = ''): number =>
	Math.max(1, Math.ceil(readableText(body).length / CHARS_PER_MINUTE));

/** 시안 표기: "3분 소요" */
export const readingTime = (body = ''): string => `${readingMinutes(body)}분 소요`;
