// 콘텐츠 컬렉션을 화면에서 읽는 유일한 통로
// - draft: true인 글은 어떤 화면에도 내보내지 않는다(PROGRESS.md 5-10). 페이지마다 filter를 다시 쓰면 빠뜨리기 쉬워 여기로 모은다
// - 정렬은 항상 최신 글이 먼저(스터디 pubDate, 세미나 date). 홈의 최근 기록과 목록 페이지가 같은 순서를 쓴다
import { getCollection, type CollectionEntry } from 'astro:content';

/** 공개된 스터디 글, 최신 순 */
export async function getStudyPosts(): Promise<CollectionEntry<'study'>[]> {
	const posts = await getCollection('study', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** 공개된 세미나 기록, 최신 순 */
export async function getSeminars(): Promise<CollectionEntry<'seminars'>[]> {
	const seminars = await getCollection('seminars', ({ data }) => !data.draft);
	return seminars.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
