// 콘텐츠 컬렉션 스키마: 필드는 시안 화면(design/*.dc.html)에 보이는 항목을 기준으로 정했다
// - 글 하나 = 파일 하나(또는 사진을 함께 두는 폴더 하나). 필드가 빠지거나 형식이 틀리면 빌드가 실패한다
// - draft: true인 글은 목록·상세 페이지에서 제외한다(페이지 구현 시 필터링)
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 폴더형 글(slug/index.md)은 폴더 이름을, 파일형 글(slug.md)은 파일 이름을 id(주소)로 쓴다
const generateId = ({ entry }: { entry: string }) => entry.replace(/(\/index)?\.mdx?$/, '');

// 프로젝트 목록 필터 칩. 한 프로젝트에 여러 개를 붙일 수 있다(예: iOS + Side Project)
export const PROJECT_CATEGORIES = ['iOS', 'Web', 'Side Project'] as const;

// 프로젝트: 목록 카드(이름·한 줄 소개·태그·분류) + 상세(요약 4칸·링크·스크린샷 띠·주요 기능)
// 본문 Markdown에는 소개 / 기술적으로 고민한 점 / 배운 점을 ## 소제목으로 쓴다
const projects = defineCollection({
	loader: glob({ pattern: '*/index.{md,mdx}', base: './src/content/projects', generateId }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			categories: z.array(z.enum(PROJECT_CATEGORIES)).min(1),
			tags: z.array(z.string()).default([]),
			icon: image(),
			startDate: z.coerce.date(),
			// 비워 두면 진행 중
			endDate: z.coerce.date().optional(),
			role: z.string(),
			stack: z.array(z.string()).min(1),
			platform: z.string(),
			links: z
				.object({
					appStore: z.url().optional(),
					github: z.url().optional(),
				})
				.default({}),
			screenshots: z.array(image()).default([]),
			// 상세의 FEATURE 01, 02…: 폰 화면과 설명을 좌우로 번갈아 배치한다
			features: z
				.array(
					z.object({
						title: z.string(),
						description: z.string(),
						image: image(),
					}),
				)
				.default([]),
			draft: z.boolean().default(false),
		}),
});

// 스터디 기록: 목록 카드(카테고리·제목·요약·날짜·읽는 시간) + 글 상세(본문·목차)
// 읽는 시간과 목차는 본문에서 계산하므로 필드로 두지 않는다
const study = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/study', generateId }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		// 필터 칩은 글에 쓰인 카테고리를 모아 만든다
		category: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

// 세미나 기록: 목록 카드(표지 사진·날짜·장소·이름·짧은 소감) + 행사 상세(글 흐름형)
// 본문은 MDX: 세션은 ## SESSION 01 · 발표자 / ### 세션 제목, 사진은 <Photo> · <PhotoPair> · <PhotoSide> 컴포넌트
// 세션 목록은 본문 소제목에서 자동으로 뽑으므로(src/lib/sessions.ts) 프런트매터에 적지 않는다(5-25)
const seminars = defineCollection({
	loader: glob({ pattern: '*/index.{md,mdx}', base: './src/content/seminars', generateId }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			location: z.string(),
			// 주최 기관·커뮤니티. 적으면 목록 카드와 상세 머리에 보이고, 두 곳 이상이면 목록에 주최별 필터 칩이 생긴다
			host: z.string().optional(),
			summary: z.string(),
			cover: image(),
			coverAlt: z.string(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { projects, study, seminars };
