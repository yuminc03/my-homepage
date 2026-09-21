// 사이트의 "앱" 목록: 메뉴바·Dock·(모바일 홈) 앱 아이콘이 모두 이 데이터를 쓴다
// - 아이콘 그라디언트는 테마와 무관한 고정색이라 토큰으로 바꾸지 않는다(PROGRESS.md 7장)
// - icon은 24×24 viewBox 안에 들어갈 SVG 요소 문자열(직접 그린 선 아이콘, SF Symbols 사용 금지)

export type AppId = 'home' | 'projects' | 'study' | 'seminars';

export interface AppIconSpec {
	/** 아이콘 타일 바탕(그라디언트 또는 단색) */
	background: string;
	/** 선 색. 기본은 흰색 */
	stroke?: string;
	icon: string;
}

export interface Shortcut extends AppIconSpec {
	label: string;
	/** base를 붙이기 전 사이트 내부 경로 */
	href: string;
}

export interface App extends Shortcut {
	id: AppId;
	/** 창 타이틀 바와 페이지 제목 */
	title: string;
	description: string;
}

// 사이트 이름: 메뉴바 왼쪽 끝과 브라우저 탭 제목 끝에 붙는다. 사용자 닉네임(리아) + 기록(.log)
// 홈 인사말·코드 위젯의 실명(Chu Yumin)은 자기소개라 profile.ts에 그대로 둔다
export const SITE_NAME = 'Lia.log';

const gradient = (from: string, to: string) => `linear-gradient(145deg, ${from}, ${to})`;

const LILAC = gradient('oklch(70% 0.13 300)', 'oklch(58% 0.15 285)');

// 사이트 아이콘(창): 메뉴바 로고. public/favicon.svg가 같은 그림을 16진수 색으로 그린다(모양을 바꾸면 함께 고친다)
// 선 굵기는 파비콘과 같게 --glyph-stroke 1.875, 글리프는 타일과 같은 크기로 그려 창이 타일의 62.5%를 차지한다
export const BRAND: AppIconSpec = {
	background: LILAC,
	icon: '<rect x="4.5" y="5.75" width="15" height="12.5" rx="2.25"/><path d="M4.5 9.75h15"/>',
};

export const APPS: readonly App[] = [
	{
		id: 'home',
		label: '홈',
		title: SITE_NAME,
		description: 'iOS 개발자 Chu Yumin의 프로젝트·스터디·세미나 기록',
		href: '/',
		background: LILAC,
		icon: '<path d="M4 10.5 12 4l8 6.5V20H4z"/>',
	},
	{
		id: 'projects',
		label: '프로젝트',
		title: 'Projects',
		description: '직접 만들어온 앱과 프로젝트를 기록합니다.',
		href: '/projects/',
		background: gradient('oklch(76% 0.11 170)', 'oklch(64% 0.11 185)'),
		icon: '<path d="M3 7h6l2 2h10v9H3z"/>',
	},
	{
		id: 'study',
		label: '스터디 기록',
		title: 'Study Log',
		description: '공부하고 정리한 내용을 기록합니다.',
		href: '/study/',
		background: gradient('oklch(72% 0.12 340)', 'oklch(60% 0.14 320)'),
		icon: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/>',
	},
	{
		id: 'seminars',
		label: '세미나 기록',
		title: 'Seminars & Events',
		description: '참석한 세미나와 행사를 사진과 함께 기록합니다.',
		href: '/seminars/',
		background: gradient('oklch(78% 0.1 220)', 'oklch(64% 0.12 255)'),
		icon: '<path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
	},
];

// 연락처: 홈 About me의 GitHub·Email·LinkedIn 링크 영역으로 이동한다(PROGRESS.md 5-12)
export const CONTACT: Shortcut = {
	label: '연락처',
	href: '/#contact',
	background: gradient('oklch(74% 0.1 195)', 'oklch(62% 0.11 215)'),
	icon: '<path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/>',
};

// 코드 에디터(데스크톱 Dock 전용): 홈의 ProfileView.swift 창으로 이동한다
export const CODE_EDITOR: Shortcut = {
	label: '코드 에디터',
	href: '/#code',
	background: 'oklch(28% 0.022 290)',
	stroke: 'oklch(92% 0.012 290)',
	icon: '<path d="M8 6L3 12l5 6M16 6l5 6-5 6"/>',
};

export const getApp = (id: AppId): App => {
	const app = APPS.find((candidate) => candidate.id === id);
	if (!app) throw new Error(`알 수 없는 앱: ${id}`);
	return app;
};
