# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

- 자기소개와 그동안의 활동 이력을 기록하는 개인 홈페이지 프로젝트입니다. (`README.md` 기준)

## 현재 상태

- **새 채팅을 시작하면 먼저 `PROGRESS.md`를 읽는다.** 현재 상태, 지금 할 일, 확정된 결정, 시안 재게시 방법이 모두 정리된 단일 기준 문서다.
- 디자인 시안 단계입니다. `design/`에 Claude Design 캔버스용 `.dc.html` 시안(데스크톱·모바일·태블릿 각 7화면 + 모션 3장)과 `canvas.json`, 조립 결과물 `chu-yumin-portfolio.html`이 있습니다.
- 기술 스택은 **Astro + 일반 CSS + TypeScript + Markdown Content Collections**로 확정했습니다(2026-09-14, 근거는 `docs/tech-stack.md`, 요약은 `PROGRESS.md` 5-11).
- Astro 프로젝트를 저장소 루트에 생성했습니다. 공통 셸(메뉴바·Dock 자동 숨김·창·테마 버튼·시계)과 목록 페이지 틀 3개까지 `develop`에 병합·원격 push했고(2026-09-15), `feature/home-page`에서 홈(첫 화면·iPhone 목업·최근 기록)을 모두 구현했습니다(2026-09-16, 최근 기록 커밋과 `develop` 병합 대기). 다음은 프로젝트 → 스터디 → 세미나 목록·상세입니다. 배포 주소는 GitHub Pages 하위 경로 `https://yuminc03.github.io/my-homepage/`입니다.

## 명령어

- Node 24를 사용합니다(`.nvmrc`). 셸 기본 Node가 21이라 먼저 `source ~/.nvm/nvm.sh && nvm use`를 실행합니다. Astro 7은 Node 22.12 이상이 필요합니다.
- 설치: `npm install`
- 개발 서버: `npm run dev` → `http://localhost:4321/my-homepage/`
- 빌드: `npm run build` (결과물 `dist/`)
- 빌드 결과 미리보기: `npm run preview`
- Astro 7의 `preview` 서버는 백그라운드로 분리되어 계속 떠 있고 한 번에 하나만 실행됩니다. 이미 떠 있으면 다른 포트로 실행해도 "already running"만 출력하고 건너뜁니다. `pkill`로는 잡히지 않으니 `npx astro preview status` / `npx astro preview stop`으로 확인·종료합니다.
- 테스트·린트는 아직 설정하지 않았습니다.

## 아키텍처

- 스타일 계층: `src/layouts/BaseLayout.astro`가 `src/styles/tokens.css`(색·모션 토큰)와 `src/styles/global.css`(전역 기본)를 한 번 불러오고, 화면별 스타일은 각 컴포넌트의 스코프 `<style>`에서 토큰(`var(--…)`)만 참조합니다. 색 값을 컴포넌트에 직접 쓰지 않습니다(앱 아이콘 그라디언트·코드 에디터·iPhone 앱 화면처럼 테마와 무관한 고정색은 예외).
- 테마: 색 토큰은 `light-dark(라이트, 다크)` 한 쌍이고, `:root`의 `color-scheme`이 어느 쪽을 쓸지 정합니다. 기본은 시스템 설정, `<html data-theme="dark"|"light">`이면 그 테마로 고정합니다. 테마를 바꾸는 코드는 `data-theme`만 바꿉니다. 사용자 선택은 `src/components/ThemeToggle.astro`가 `localStorage('theme')`에 저장하고, `BaseLayout`의 `<head>` 인라인 스크립트가 첫 화면을 그리기 전에 다시 적용합니다(깜빡임 방지). 저장값이 없으면 속성을 붙이지 않아 시스템 설정을 따릅니다.
- 셸 원칙과 반응형 구간(모바일 `< 744px` · 태블릿 `744–1179px` · 데스크톱 `≥ 1180px`)은 `PROGRESS.md` 5-12. 동작이 없는 버튼·아이콘은 만들지 않습니다.
- 콘텐츠: `src/content.config.ts`가 `src/content/` 아래 세 컬렉션(`projects`·`study`·`seminars`)의 스키마를 정의합니다. 사진이 있는 글은 폴더(`slug/index.md(x)`)로 만들고 이미지를 옆에 둡니다. 화면에서 글을 읽을 때는 `getCollection()`을 직접 부르지 말고 `src/lib/content.ts`의 헬퍼(`getStudyPosts()`·`getSeminars()`)를 씁니다. 여기서 `draft: true`를 빼고 날짜 내림차순으로 정렬합니다. 날짜 표기는 `src/lib/date.ts`의 `formatDay`·`formatMonth`를 쓰고, 프런트매터 날짜는 UTC 자정으로 읽히므로 UTC 기준으로 꺼냅니다. 세미나 MDX 본문의 `Photo`·`PhotoPair`·`PhotoSide`는 상세 페이지가 `<Content components={{ ... }} />`로 넘겨야 렌더링됩니다. 필드 목록은 `PROGRESS.md` 5-10.
- `src/content/*/sample-*`는 스키마 검증과 새 글 복사용 예시(`draft: true`)입니다.
- 셸: 페이지는 `src/layouts/SiteLayout.astro`(→ `BaseLayout`)로 감쌉니다. `SiteLayout`이 글로우 바탕·`MenuBar`·`<main>`·`Dock`을 그리고, `active`(앱 id)로 메뉴·Dock 활성 표시를, `surface`(`desk` 홈 / `window` 창 화면)로 모바일 메뉴바 표시와 Dock 유리를 정합니다. 목록·상세 화면은 본문을 `Window`로 감쌉니다.
- 앱(홈·프로젝트·스터디 기록·세미나 기록)의 라벨·창 제목·설명·경로·아이콘은 `src/data/apps.ts`가 단일 기준이고, 메뉴바·Dock·페이지가 모두 여기서 읽습니다. 새 앱이나 바로가기는 이 파일에 추가합니다.
- 내부 링크는 `src/lib/url.ts`의 `withBase()`로 만듭니다.
- 홈(`src/pages/index.astro`): 자기소개 문구·기술·연락처는 `src/data/profile.ts`가 단일 기준입니다. 홈의 창/위젯은 `HomePanel`(목록·상세의 `Window`와 달리 ✕ 없음), 창 점은 `WindowDots`를 함께 씁니다. Astro는 부모의 스코프 스타일이 자식 컴포넌트 루트에 닿지 않으므로, 컴포넌트의 폭·위치는 페이지가 감싼 요소에서 정합니다. 최근 기록은 화면 형태가 달라 데스크톱 창(`RecentWindow`)과 모바일·태블릿 위젯(`RecentWidgets`)을 따로 두고, 페이지가 감싼 칸(`.recent-slot`·`.widgets-slot`)에서 폭으로 바꿔 끼웁니다. 카드·위젯 링크는 상세 페이지가 생기면 목록에서 상세로 바꿉니다.
- 페이지별 구조(목록·상세)가 생기면 이 섹션에 추가합니다.
- `astro.config.mjs`의 `base: '/my-homepage'` 때문에 내부 링크와 `public/` 에셋 경로는 `import.meta.env.BASE_URL`을 붙여 만들어야 합니다. `/`로 시작하는 절대 경로를 직접 쓰면 배포 후 404가 납니다.
- 시안 파일끼리의 관계: 각 `.dc.html`은 캔버스에서 독립 아트보드라 CSS를 공유할 수 없어, 테마 토큰(`.site` / `.site[data-theme="light"]`, `--win-*`)이 모든 화면 파일에 복제되어 있습니다. 시안 토큰을 바꿀 때는 모든 화면 파일을 함께 고치고(사이트 구현의 기준은 `src/styles/tokens.css`), `chu-yumin-portfolio.html`은 직접 편집하지 않고 재조립합니다(`PROGRESS.md` 11장).

## 코딩 가이드라인

- 커밋은 항상 최소 빌드 단위(정상적으로 빌드/동작하는 최소 변경 묶음)로 나누어 진행한다. 여러 기능이나 관심사를 하나의 커밋에 섞지 않는다.
- 커밋 메시지는 대충 쓰지 않는다. 변경 내용과 이유가 명확히 드러나도록 구체적으로 작성한다.
- 작업 완료 후에는 진행 상황을 기록하는 markdown 문서(예: 진행 상황/작업 로그 문서)를 항상 최신 버전으로 업데이트한다. 새로운 채팅에서 시작하더라도 이 문서만 보고 하던 작업을 바로 이어갈 수 있어야 한다.
- 코딩 작업 후에는 어떤 파일/영역을 작업했는지 최대한 구체적으로 설명한다.
- 작업을 진행하기 전에 지금 선택한 방법이 정말 최선의 방법인지 항상 고민한다.
