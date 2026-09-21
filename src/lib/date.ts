// 화면에 쓰는 날짜 표기: 스터디 YYYY.MM.DD, 세미나 YYYY.MM (PROGRESS.md 2-1)
// - 프런트매터의 `2026-09-14`는 z.coerce.date()가 UTC 자정으로 읽는다. 지역 시간대로 꺼내면
//   UTC보다 늦은 곳(예: 아메리카 대륙)에서 하루 전 날짜가 나오므로 UTC 기준으로 꺼낸다

const pad = (value: number) => String(value).padStart(2, '0');

/** 2026.09.14 */
export const formatDay = (date: Date) =>
	`${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`;

/** 2026.09 */
export const formatMonth = (date: Date) => `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}`;
