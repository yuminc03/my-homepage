// 검색 색인을 빌드 때 한 벌 만든다 (결정은 PROGRESS.md 5-18)
// - 제목·요약·분류·태그에 더해 본문 텍스트까지 담는다. 목록 카드에 안 보이는 말로도 글을 찾기 위해서다
// - 브라우저가 이 JSON을 "검색 창을 처음 열 때" 한 번 내려받는다 → 첫 화면 비용은 0이다
// - 순서는 목록 페이지와 같다(content.ts의 헬퍼를 그대로 쓴다). 점수가 같은 결과가 최신 글 먼저 나온다
import { getProjects, getSeminars, getStudyPosts, projectHref, seminarHref, studyHref } from './content';
import { formatDay, formatMonth } from './date';
import { markdownToText } from './markdownText';
import type { SearchDoc } from './search';

/** 상세 화면에 보이는 글자만 색인에 넣는다. 사이에 줄바꿈을 두어 문단이 섞이지 않게 한다 */
const joinBody = (...parts: string[]): string => parts.filter(Boolean).join('\n');

export async function buildSearchIndex(): Promise<SearchDoc[]> {
	const [projects, posts, seminars] = await Promise.all([getProjects(), getStudyPosts(), getSeminars()]);

	const projectDocs = projects.map((project): SearchDoc => {
		const { title, summary, categories, tags, stack, role, platform, features } = project.data;
		return {
			collection: 'projects',
			href: projectHref(project),
			title,
			summary,
			meta: categories.join(' · '),
			keywords: [...tags, ...stack, role, platform].join(' '),
			// 주요 기능은 본문이 아니라 프런트매터에 있지만 상세 화면에는 함께 보이므로 색인에 넣는다
			body: joinBody(
				markdownToText(project.body),
				...features.map((feature) => `${feature.title}\n${feature.description}`),
			),
		};
	});

	const studyDocs = posts.map((post): SearchDoc => {
		const { title, summary, category, pubDate } = post.data;
		return {
			collection: 'study',
			href: studyHref(post),
			title,
			summary,
			meta: `${category} · ${formatDay(pubDate)}`,
			keywords: '',
			body: markdownToText(post.body),
		};
	});

	const seminarDocs = seminars.map((seminar): SearchDoc => {
		const { title, summary, date, location } = seminar.data;
		return {
			collection: 'seminars',
			href: seminarHref(seminar),
			title,
			summary,
			meta: `${formatMonth(date)} · ${location}`,
			keywords: '',
			body: markdownToText(seminar.body),
		};
	});

	return [...projectDocs, ...studyDocs, ...seminarDocs];
}
