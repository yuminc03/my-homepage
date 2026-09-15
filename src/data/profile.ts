// 홈 About me에 보이는 자기소개. 인사말·좋아하는 문구·기술·연락처는 이 파일 한 곳에서 고친다
// - 줄 배열은 태블릿·데스크톱에서 줄을 나누는 위치다(모바일은 폭이 좁아 이어서 쓴다)
// - 연락처는 실제 주소가 있는 것만 둔다(동작 없는 링크 금지, PROGRESS.md 5-12)

export interface ProfileLink {
	label: string;
	href: string;
}

export const PROFILE = {
	// [첫 줄, 둘째 줄 앞, 둘째 줄 이름] — 폭이 아주 좁아 둘째 줄이 넘치면 이름 앞에서만 줄을 바꾼다
	greeting: ['안녕하세요,', 'iOS 개발자', 'Chu Yumin입니다.'],
	motto: ['기회가 주어지면 최선을 다하는 것이 아니라', '최선을 다하고 있으면 기회가 주어지는 것이다.'],
	skills: ['Swift', 'SwiftUI', 'UIKit', 'Xcode'],
	links: [
		{ label: 'GitHub', href: 'https://github.com/yuminc03' },
		{ label: 'Email', href: 'mailto:yuminc03@gmail.com' },
	] satisfies ProfileLink[],
} as const;
