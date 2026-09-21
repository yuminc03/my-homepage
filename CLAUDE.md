# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

- 자기소개와 그동안의 활동 이력을 기록하는 개인 홈페이지 프로젝트입니다. (`README.md` 기준)

## 현재 상태

- **새 채팅을 시작하면 먼저 `PROGRESS.md`를 읽는다.** 현재 상태, 지금 할 일, 확정된 결정, 시안 재게시 방법이 모두 정리된 단일 기준 문서다.
- 디자인 시안 단계입니다. `design/`에 Claude Design 캔버스용 `.dc.html` 시안(데스크톱·모바일·태블릿 각 7화면 + 모션 3장)과 `canvas.json`, 조립 결과물 `chu-yumin-portfolio.html`이 있습니다.
- 기술 스택은 **Astro + 일반 CSS + TypeScript + Markdown Content Collections**로 확정했습니다(2026-09-14, 근거는 `docs/tech-stack.md`, 요약은 `PROGRESS.md` 5-11).
- Astro 프로젝트를 저장소 루트에 생성했습니다. 공통 셸(메뉴바·Dock 자동 숨김·창·테마 버튼·시계)과 목록 페이지 틀 3개까지 `develop`에 병합·원격 push했고(2026-09-15), 홈(첫 화면·iPhone 목업·최근 기록)까지 구현해 `develop`에 병합·push했습니다(2026-09-16, 병합 `8c7568f`). 프로젝트 목록·상세는 브라우저 확인까지 마치고 `develop`에 병합·push했습니다(2026-09-18, 병합 `53f528e`). 스터디 목록·글(카드·필터·글 페이지·목차·코드 블록·읽는 시간)도 브라우저 확인까지 마치고 `develop`에 병합·push했습니다(2026-09-20, 병합 `4351c43`, 결정은 `PROGRESS.md` 5-15). 세미나 목록·행사 상세(타임라인·가로/세로 카드·표지 사진·사진 컴포넌트 3종)와 홈 최근 기록 링크 연결도 브라우저 확인까지 마치고 `develop`에 병합·push했습니다(2026-09-20, 병합 `8f704a4`, 결정은 `PROGRESS.md` 5-16). **페이지 전환 모션**(View Transitions·스크립트 재실행·전환 종류별 모션)도 브라우저 확인까지 마치고 `develop`에 병합·push했습니다(2026-09-20, 병합 `0cd15af`, 결정은 `PROGRESS.md` 5-17). **콘텐츠 검색**(빌드 때 만드는 JSON 색인 · `<dialog>` 검색 창 · ⌘K · 돋보기 버튼)도 브라우저 확인까지 마치고 `develop`에 병합·push했습니다(2026-09-21, 병합 `d81c5fc`, 결정은 `PROGRESS.md` 5-19). **여기까지로 계획한 화면·기능 구현은 모두 끝났습니다.** 이어서 **GitHub Actions 배포까지 마쳤습니다**(2026-09-21, 결정은 `PROGRESS.md` 5-20) — 저장소를 공개로 전환하고 Pages를 GitHub Actions 방식으로 켠 뒤 `develop` → `master` 병합 `ea31474`로 첫 배포에 성공했습니다. 사이트는 **https://yuminc03.github.io/my-homepage/ 에 실제로 떠 있습니다.** 다만 예시 글 3개가 모두 `draft: true`라 **공개된 글은 아직 없습니다.** 이어서 사이트 이름을 **`Lia.log`** 로 바꾸고 메뉴바 로고·파비콘(창 그림)을 추가했습니다(2026-09-21, 브랜치 `feature/site-name-favicon`, **`develop` 병합 전**, 결정은 `PROGRESS.md` 5-21). 다음 작업은 **대괄호 `[ ]` placeholder를 실제 콘텐츠로 채우는 일**이고(계획은 `PROGRESS.md` 2-6), 그 뒤 실기기 확인 → 마지막 개발 과정 설명 세션이 남았습니다.

## 명령어

- 배포: `master`에 push하면 `.github/workflows/deploy.yml`이 빌드해 GitHub Pages에 올립니다. **`develop`은 배포하지 않습니다** — 문서만 고칠 때는 `develop`에 두고, 실제로 사이트를 갱신할 때만 `develop` → `master` 병합을 합니다. 워크플로의 Node 버전은 `.nvmrc`에서 읽으므로 숫자를 따로 적지 않습니다. 근거는 `PROGRESS.md` 5-20.
- Node 24를 사용합니다(`.nvmrc`). 셸 기본 Node가 21이라 먼저 `source ~/.nvm/nvm.sh && nvm use`를 실행합니다. Astro 7은 Node 22.12 이상이 필요합니다.
- 설치: `npm install`
- 개발 서버: `npm run dev` → `http://localhost:4321/my-homepage/`
- 빌드: `npm run build` (결과물 `dist/`)
- 빌드 결과 미리보기: `npm run preview`
- Astro 7의 `preview` 서버는 백그라운드로 분리되어 계속 떠 있고 한 번에 하나만 실행됩니다. 이미 떠 있으면 다른 포트로 실행해도 "already running"만 출력하고 건너뜁니다. `pkill`로는 잡히지 않으니 `npx astro preview status` / `npx astro preview stop`으로 확인·종료합니다.
- 테스트·린트는 아직 설정하지 않았습니다.
- 저장소가 iCloud로 동기화되는 `~/Documents` 아래에 있어 `파일 2.확장자`·`폴더 2` 같은 사본이 생길 수 있습니다. 커밋하지 말고 원본과 비교한 뒤 지웁니다(`node_modules` 안이면 지우고 `npm ci`). `PROGRESS.md` 2-2 끝.

## 아키텍처

- 스타일 계층: `src/layouts/BaseLayout.astro`가 `src/styles/tokens.css`(색·모션 토큰)와 `src/styles/global.css`(전역 기본)를 한 번 불러오고, 화면별 스타일은 각 컴포넌트의 스코프 `<style>`에서 토큰(`var(--…)`)만 참조합니다. Markdown이 만든 본문 요소만 예외로 `src/styles/prose.css`(+ 거기서 `@import`하는 `code-block.css`)를 쓰는 화면에서 `import`합니다 — Markdown 요소에는 스코프 속성이 붙지 않아 `:global`이 필요하고, 프로젝트 상세와 스터디 글이 같은 규칙을 복제하지 않기 위해서입니다. 적용 범위는 `.prose-body`(프로젝트는 `sections.ts`가 만드는 `.doc-lead`·`.doc-section`, 스터디 글은 본문 `<article>`)이고, 문단 사이 간격은 `--prose-gap`으로 화면마다 바꿉니다. 색 값을 컴포넌트에 직접 쓰지 않습니다(앱 아이콘 그라디언트·코드 에디터·iPhone 앱 화면처럼 테마와 무관한 고정색은 예외).
- 테마: 색 토큰은 `light-dark(라이트, 다크)` 한 쌍이고, `:root`의 `color-scheme`이 어느 쪽을 쓸지 정합니다. 기본은 시스템 설정, `<html data-theme="dark"|"light">`이면 그 테마로 고정합니다. 테마를 바꾸는 코드는 `data-theme`만 바꿉니다. 사용자 선택은 `src/components/ThemeToggle.astro`가 `localStorage('theme')`에 저장하고, `BaseLayout`의 `<head>` 인라인 스크립트가 첫 화면을 그리기 전에 다시 적용합니다(깜빡임 방지). 저장값이 없으면 속성을 붙이지 않아 시스템 설정을 따릅니다.
- 셸 원칙과 반응형 구간(모바일 `< 744px` · 태블릿 `744–1179px` · 데스크톱 `≥ 1180px`)은 `PROGRESS.md` 5-12. 동작이 없는 버튼·아이콘은 만들지 않습니다.
- 페이지 전환: `BaseLayout`이 `PageTransitions.astro`(= `ClientRouter` + 전환 종류 판별)를 넣습니다. **전환하면 `<body>`만 갈아 끼우고 컴포넌트 `<script>`는 다시 실행되지 않습니다** → 초기화는 반드시 `src/lib/pageInit.ts`의 `onEachPage(setUp)`으로 감싸고, window·document에 거는 이벤트에는 넘겨받은 `signal`을 붙입니다(안 붙이면 전환할 때마다 쌓입니다). `<html>`의 속성도 새 문서 것으로 통째로 바뀌므로 `data-theme`은 `BaseLayout`의 인라인 스크립트가 `astro:after-swap`에서 다시 붙입니다. 전환 종류(`open`·`close`·`push`·`pop`·`fade`)는 떠나는/가는 주소의 관계로 정하고 모션은 `src/styles/transitions.css`가 고릅니다. 전환 때 제자리에 두어야 하는 요소는 `transition:name`을 **컴포넌트 태그가 아니라 실제 HTML 요소**에 붙입니다(컴포넌트 태그에 붙이면 속성이 내려가지 않습니다). 근거는 `PROGRESS.md` 5-17.
- 콘텐츠: `src/content.config.ts`가 `src/content/` 아래 세 컬렉션(`projects`·`study`·`seminars`)의 스키마를 정의합니다. 사진이 있는 글은 폴더(`slug/index.md(x)`)로 만들고 이미지를 옆에 둡니다. 화면에서 글을 읽을 때는 `getCollection()`을 직접 부르지 말고 `src/lib/content.ts`의 헬퍼(`getStudyPosts()`·`getSeminars()`)를 씁니다. 여기서 `draft: true`를 빼고 날짜 내림차순으로 정렬합니다. 날짜 표기는 `src/lib/date.ts`의 `formatDay`·`formatMonth`를 쓰고, 프런트매터 날짜는 UTC 자정으로 읽히므로 UTC 기준으로 꺼냅니다. 세미나 MDX 본문의 `Photo`·`PhotoPair`·`PhotoSide`는 상세 페이지가 `<Content components={{ ... }} />`로 넘겨야 렌더링됩니다. 필드 목록은 `PROGRESS.md` 5-10.
- `src/content/*/sample-*`는 스키마 검증과 새 글 복사용 예시(`draft: true`)입니다.
- 셸: 페이지는 `src/layouts/SiteLayout.astro`(→ `BaseLayout`)로 감쌉니다. `SiteLayout`이 글로우 바탕·`MenuBar`·`<main>`·`Dock`을 그리고, `active`(앱 id)로 메뉴·Dock 활성 표시를, `surface`(`desk` 홈 / `window` 창 화면)로 모바일 메뉴바 표시와 Dock 유리를 정합니다. 목록·상세 화면은 본문을 `Window`로 감쌉니다.
- 앱(홈·프로젝트·스터디 기록·세미나 기록)의 라벨·창 제목·설명·경로·아이콘은 `src/data/apps.ts`가 단일 기준이고, 메뉴바·Dock·페이지가 모두 여기서 읽습니다. 새 앱이나 바로가기는 이 파일에 추가합니다.
- 사이트 이름(`Lia.log`)은 `apps.ts`의 `SITE_NAME` 하나이고, 탭 제목은 `SiteLayout`이 `글 제목 · 앱 라벨 · SITE_NAME`으로 조립합니다(상세 페이지는 `title={data.title}`만 넘깁니다). 실명 `Chu Yumin`은 자기소개(`profile.ts`·코드 위젯)와 `description` 메타에만 둡니다. 로고 그림은 `apps.ts`의 `BRAND`(메뉴바가 `AppIcon`으로 그림)이고 `public/favicon.svg`가 같은 모양을 16진수 색으로 그립니다 — **모양을 바꾸면 둘을 함께 고치고 `favicon.ico`·`apple-touch-icon.png`를 다시 만듭니다**(`PROGRESS.md` 5-21).
- 내부 링크는 `src/lib/url.ts`의 `withBase()`로 만듭니다.
- 홈(`src/pages/index.astro`): 자기소개 문구·기술·연락처는 `src/data/profile.ts`가 단일 기준입니다. 홈의 창/위젯은 `HomePanel`(목록·상세의 `Window`와 달리 ✕ 없음), 창 점은 `WindowDots`를 함께 씁니다. Astro는 부모의 스코프 스타일이 자식 컴포넌트 루트에 닿지 않으므로, 컴포넌트의 폭·위치는 페이지가 감싼 요소에서 정합니다. 최근 기록은 화면 형태가 달라 데스크톱 창(`RecentWindow`)과 모바일·태블릿 위젯(`RecentWidgets`)을 따로 두고, 페이지가 감싼 칸(`.recent-slot`·`.widgets-slot`)에서 폭으로 바꿔 끼웁니다. 카드·위젯 링크는 상세 페이지가 생기면 목록에서 상세로 바꿉니다.
- 목록 필터: `FilterChips`가 칩과 스크립트를 가진다. 페이지는 칩과 항목을 `[data-filter]`로 감싸고 항목에 `data-filter-item`·`data-categories="A|B"`를 붙인다. 숨김은 `hidden` 속성이고 `global.css`의 `[hidden]` 규칙이 컴포넌트 `display`보다 우선한다.
- 코드 블록: 구문 강조는 Sätteri가 아니라 **Shiki**가 하므로 `astro.config.mjs`의 `markdown.shikiConfig`에 **transformer**(`src/lib/codeBlock.ts`)를 붙일 수 있습니다. 여기서 울타리 meta(```` ```swift title="Example.swift" ````)를 읽어 `<pre>`를 `<figure class="code-block">`으로 감싸고 파일 이름 머리줄·복사 버튼을 만듭니다. 줄 번호는 HTML이 아니라 CSS 카운터(`.line::before`)로 그립니다. 색은 시안 팔레트로 만든 `CODE_THEME`(16진수만 가능). 복사 버튼은 `hidden`으로 나가고 `CodeCopy.astro`의 스크립트가 클립보드를 쓸 수 있을 때만 보이게 하므로, 코드가 나올 수 있는 화면은 `<CodeCopy />`를 넣어야 합니다.
- **Markdown 처리 방식을 바꿨다면 `node_modules/.astro`를 지우고 빌드합니다.** 콘텐츠 컬렉션의 렌더 결과가 캐시되어 예전 HTML이 그대로 나옵니다.
- 스터디: 목록 `src/pages/study/index.astro`(행 카드 `StudyCard`, 칩은 글에 쓰인 카테고리를 가나다 순으로), 글 `src/pages/study/[...slug].astro`(주소는 `studyHref()`, 컬렉션 glob이 `**`라 rest 파라미터). 읽는 시간은 `src/lib/readingTime.ts`(공백 뺀 글자 ÷ 500, 최소 1분). 목차 `Toc.astro`는 DOM 한 벌로 모바일·태블릿 접힘 상자 / 데스크톱 sticky 레일을 모두 그립니다(`##`만 모음).
- 상세 화면 공통: `Window`의 `back` prop(모바일·태블릿 타이틀 바 ‹). 뒤로 가는 링크에는 `data-back-link`를 붙인다 — `FilterChips`가 `sessionStorage`에 남긴 직전 분류를 `Window`의 스크립트가 `?category=`로 붙여 준다(데스크톱 ‹ 링크는 페이지가 두므로 거기에도 붙인다), `SiteLayout`의 `dockHidden`(Dock 숨김 시작), 맨 아래 `Pager`(이전/다음, 목록 순서 기준). 데스크톱 `‹ 목록` 링크는 페이지가 본문 위에 둔다.
- 프로젝트: 목록 `src/pages/projects/index.astro`(카드 `ProjectCard`), 상세 `src/pages/projects/[slug].astro`(주소는 `projectHref()`). 상세 본문은 `ProjectArticle`이 `Astro.slots.render()`로 Markdown과 `ProjectFeatures`를 HTML로 만든 뒤 `src/lib/sections.ts`로 `##` 섹션·`###` 카드로 묶고 첫 섹션 뒤에 주요 기능을 넣는다(Astro 7 기본 Markdown 처리기 Sätteri의 플러그인 API를 쓰지 않음). Markdown 요소 스타일은 `.prose :global(:is(.doc-lead, .doc-section) ...)`로 한정한다. 결정 근거는 `PROGRESS.md` 5-14.
- 세미나: 목록 `src/pages/seminars/index.astro`(항목 `SeminarCard` — DOM 한 벌로 모바일 세로 카드 / 태블릿 가로 카드 / 데스크톱 타임라인, 분류가 없어 필터 칩 없음), 상세 `src/pages/seminars/[slug].astro`(주소는 `seminarHref()`). 표지는 `SeminarCover`, 본문 사진은 `Photo`·`PhotoPair`·`PhotoSide`이고 상세 페이지가 `<Content components={{ ... }} />`로 넘긴다. 세션 머리는 `## 라벨` + `### 제목` 한 쌍이며 CSS `h2:has(+ h3)`로 라벨과 마무리 구획 제목을 가른다. 결정 근거는 `PROGRESS.md` 5-16.
- 검색: 색인은 `src/pages/search-index.json.ts`가 빌드 때 한 벌 만들고(내용은 `src/lib/searchIndex.ts`, `content.ts` 헬퍼를 그대로 써서 draft 제외·정렬을 복제하지 않는다), 브라우저는 `src/lib/search.ts`의 순수 함수로 훑는다. 화면은 `SearchPanel.astro`(`<dialog>` 모달, `SiteLayout`이 모든 화면에 하나)와 `SearchButton.astro`(돋보기)다. **버튼을 새로 두려면 `data-search-open`만 붙이면 된다** — 여는 처리는 `SearchPanel`이 문서 위임으로 한다. 색인은 창을 처음 열 때 한 번 받아 모듈 바깥에 캐시하므로 페이지를 옮겨도 다시 받지 않는다. 결과 요소는 스크립트가 만들어 스코프 속성이 없으므로 스타일을 `.results :global(...)`로 한정한다. 입력칸은 `type="text"`다(`type="search"`는 Esc를 가로채 값만 지운다). **`transition:name`이 붙은 메뉴바·Dock은 모달의 `::backdrop`보다 위에 그려지므로**, 창이 열린 동안 `transitions.css`가 그 둘을 직접 흐리게 한다. 근거는 `PROGRESS.md` 5-19.
- 창 폭 끝까지 넓히는 요소(표지 사진·스크린샷 띠)는 `Window`가 본문에 내보내는 `--win-pad`(모바일 20 · 태블릿 36 · 데스크톱 48px)를 `margin-inline: calc(var(--win-pad) * -1)`로 상쇄한다. 여백 수치를 컴포넌트에 복제하지 않는다.
- `PhoneMockup` slot에 `img`를 넘기면 화면을 꽉 채운다(카드·스크린샷 띠·주요 기능 공용). 태그는 `TagList`를 쓴다.
- 커밋은 빌드되는 가장 작은 단위로 나눈다(공용 컴포넌트마다 하나, `refactor` 분리, 커밋 직전 빌드).
- `astro.config.mjs`의 `base: '/my-homepage'` 때문에 내부 링크와 `public/` 에셋 경로는 `import.meta.env.BASE_URL`을 붙여 만들어야 합니다. `/`로 시작하는 절대 경로를 직접 쓰면 배포 후 404가 납니다.
- 시안 파일끼리의 관계: 각 `.dc.html`은 캔버스에서 독립 아트보드라 CSS를 공유할 수 없어, 테마 토큰(`.site` / `.site[data-theme="light"]`, `--win-*`)이 모든 화면 파일에 복제되어 있습니다. 시안 토큰을 바꿀 때는 모든 화면 파일을 함께 고치고(사이트 구현의 기준은 `src/styles/tokens.css`), `chu-yumin-portfolio.html`은 직접 편집하지 않고 재조립합니다(`PROGRESS.md` 11장).

## 코딩 가이드라인

- 커밋은 항상 최소 빌드 단위(정상적으로 빌드/동작하는 최소 변경 묶음)로 나누어 진행한다. 여러 기능이나 관심사를 하나의 커밋에 섞지 않는다.
- 커밋 메시지는 대충 쓰지 않는다. 변경 내용과 이유가 명확히 드러나도록 구체적으로 작성한다.
- 작업 완료 후에는 진행 상황을 기록하는 markdown 문서(예: 진행 상황/작업 로그 문서)를 항상 최신 버전으로 업데이트한다. 새로운 채팅에서 시작하더라도 이 문서만 보고 하던 작업을 바로 이어갈 수 있어야 한다.
- 코딩 작업 후에는 어떤 파일/영역을 작업했는지 최대한 구체적으로 설명한다.
- 작업을 진행하기 전에 지금 선택한 방법이 정말 최선의 방법인지 항상 고민한다.
