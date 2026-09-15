# 진행 상황
- 최종 업데이트: 2026-09-15
- 이 문서 하나만 읽으면 새 채팅에서 바로 이어서 작업할 수 있도록 정리한 단일 기준 문서다
- **현재 세션(2026-09-15)**: `feature/site-shell` 브랜치. Dock 자동 숨김 커밋 `e8eea35`. 데스크톱 메뉴바 시계 구현·검증 완료, **커밋 제안 후 사용자 확인 대기**. 커밋이 끝났으면 **2-1의 3-5 `develop` 병합**부터 시작한다

## 1. 한눈에 보기
- **무엇을 만드나**: iOS 개발자 Chu Yumin의 개인 홈페이지(자기소개·프로젝트·스터디 기록·세미나 기록)
- **지금 단계**: 디자인 시안 완료, 기술 스택 확정(Astro + 일반 CSS), **Astro 프로젝트 생성**(임시 홈 1장, 빌드 확인), **전역 토큰 CSS 이식**(`src/styles/tokens.css`), **콘텐츠 컬렉션 스키마**(프로젝트·스터디·세미나, MDX) — 여기까지 `develop` 병합. 지금은 **공통 셸**(테마 버튼·메뉴바·Dock·창) 구현 중
- **시안 진행도**
  - 데스크톱 7화면(홈·목록 3·상세 3) — 완료
  - 모바일 7화면(홈 화면 메타포) — 완료
  - 태블릿 7화면(모바일 확장형) — 완료
  - 모션 설계(토큰 보드 + 데스크톱·모바일 클릭 프로토타입) — 완료, `develop` 병합
  - 데스크톱 창 ✕ 닫기 버튼 — 채택(2026-09-14), 데스크톱 창 화면 6장에 반영, `develop` 병합
- **기술 스택**: Astro + 일반 CSS + TypeScript + Markdown Content Collections 확정(2026-09-14). 비교·약점·면접 질문은 `docs/tech-stack.md`
- **시안 캔버스**: https://claude.ai/code/artifact/48a3c34c-b882-4f13-8e2f-7e3668bdb7b1 (v22, 페이지 5개 · 아트보드 25장)
- **Git**: 시안·기술 스택 문서·`.claude/settings.json`(`92083d0`)이 `develop`에 반영되어 있다. `feature/astro-setup`(커밋 4개)을 `develop`에 병합 `004589b` → 브랜치 삭제(2026-09-14). 지금은 `feature/site-shell` 브랜치에서 작업 중(테마 버튼 `872ec4b`, 공통 셸 `20d40c8`, Dock 자동 숨김 `e8eea35` 커밋 완료. 시계는 커밋 대기). `master`·원격 push는 한 번도 하지 않았다
- **다음 단계**: (시계 커밋) → `develop` 병합. 그 뒤 페이지 구현, 콘텐츠 검색

## 2. 새 채팅에서 이어서 시작하기
### 2-1. 지금 바로 할 일
1. `git status`로 브랜치와 작업 트리를 확인한다. 커밋하지 않고 남겨 둔 파일은 없다(스크린샷은 사용자가 삭제, 설정 파일은 커밋함)
2. Node는 **nvm의 24**를 쓴다. 셸 기본값이 21.7.3이라 명령 전에 `source ~/.nvm/nvm.sh && nvm use`(`.nvmrc` = 24)를 먼저 실행한다. Astro 7은 Node 22.12 이상이 필요하다
   - `astro preview`는 백그라운드로 분리되는 단일 서버다. 검증 후 반드시 `npx astro preview stop`으로 끈다(`pkill`로 안 잡히고, 남아 있으면 다음 실행이 "already running"으로 건너뛴다)
   - 화면 확인은 headless Chrome `--screenshot`(시스템 다크는 `--force-dark-mode`)을 쓰되, Chrome이 저장 후 종료되지 않으므로 파일이 생기면 `pkill -f "user-data-dir=..."`로 끈다
   - 서버 없이 찍으려면 `dist/*.html`의 `"/my-homepage/` 경로를 `"file://<저장소>/dist/`로 바꾼 사본을 `--allow-file-access-from-files`로 연다
   - **모바일 폭은 `--window-size=390,...`로 찍으면 안 된다**(창 최소 폭 때문에 더 넓게 그려진 뒤 잘림). 폭 390px `<iframe>`에 페이지를 넣은 하네스 HTML을 600px 창으로 찍는다
   - macOS 화면 모드가 자동(밤=다크)이면 플래그 없이 찍어도 다크로 나온다. 라이트 확인은 사본의 `<html>`에 `data-theme="light"`를 넣어 찍는다
3. `feature/site-shell` 브랜치의 작업을 커밋 단위로 이어간다(각 커밋마다 제안 → 사용자 확인). 결정은 5-12
   1. 테마 전환 버튼 — `src/components/ThemeToggle.astro`, `BaseLayout` `<head>` 인라인 스크립트, body 바탕 전환. 빌드 확인, **커밋 완료**(사용자 확인)
   2. 셸: 앱 목록 데이터(홈·프로젝트·스터디 기록·세미나 기록 + 연락처) → `MenuBar`·`Dock`·`Window`(데스크톱 창 / 모바일·태블릿 시트) 컴포넌트 → `SiteLayout` → 목록 페이지 틀 3개(`/projects/`·`/study/`·`/seminars/`)와 활성 표시 — 작업 완료, 빌드(4페이지)·링크·활성 표시·너비별 스크린샷 확인, 사용자 확인 후 **커밋 완료**
   3. Dock 자동 숨김 — 작업 완료, 사용자 확인 후 **커밋 `e8eea35`**(2026-09-15). 구현 내용은 5-3
      - 확인: 빌드(4페이지), headless 동작 검사 16항목 통과(스크롤 방향·6px 누적 임계값·맨 위 48px·마우스 하단 영역 진입/이탈 600ms·영역 안 스크롤·터치 무시·키보드 포커스), 숨김 상태 스크린샷(데스크톱 창·모바일 창·모바일 홈의 힌트 막대)
      - 검사 방법(다시 할 때): `dist/projects/index.html` 사본에 높이 4000px 블록과 검사 스크립트를 넣고 `--dump-dom --virtual-time-budget`로 실행. **virtual time에서는 화면을 그리지 않아 `scroll` 이벤트와 `requestAnimationFrame`이 오지 않는다** → 사본의 `<head>` 맨 앞에서 rAF를 `setTimeout(16ms)`으로 바꾸고, `scrollTo()` 뒤 `scroll` 이벤트를 직접 보낸다. 마우스는 `new PointerEvent('pointermove', { pointerType: 'mouse', clientY })`
      - 사용자가 실제 브라우저에서 볼 것: 트랙패드 스크롤 느낌, 하단 hover, 동작 줄이기(macOS 손쉬운 사용 → 디스플레이 → 동작 줄이기). 지금 목록 창은 짧아 스크롤이 생기지 않으므로 페이지 구현 뒤 자연스럽게 확인된다
      - 상세 화면 "숨김 상태로 시작"(모바일·태블릿 시안)은 상세 페이지 구현 때 `Dock`에 prop으로 추가한다(`data-state` 초기값 + 스크립트의 `scrolledDown` 초기값)
   4. 데스크톱 메뉴바 시계 — 작업 완료(2026-09-15), **커밋 제안 후 사용자 확인 대기**. 구현 내용은 5-12
      - 확인: 빌드(4페이지), 표시 시각 = 시스템 시각, 분 경계 검사(`Date`를 13:59:59.5로 바꾼 사본: 시작 13:59 → 1초 뒤 14:00 → 61초 뒤 14:01), 스크린샷(데스크톱 다크·라이트는 테마 버튼 오른쪽 16px에 시계, 모바일 홈 메뉴바에는 없음)
   5. **끝나면 `develop` `--no-ff` 병합 → 브랜치 삭제 ← 다음에 할 일**(사용자 확인 후)
4. 그 뒤: 홈·목록·상세 페이지 구현 → 콘텐츠 검색(5-12) → 대괄호 `[ ]` placeholder 실제 콘텐츠 정리

### 2-2. 세션 시작 체크리스트 (매번)
1. `git status`, `git branch --show-current`로 브랜치와 작업 트리 확인
2. (시안 파일을 고칠 때만) `/design` 스킬을 실행해 스킬 경로(`seed-canvas.mjs`, `payload.template.html`)와 scratchpad 경로를 확인한다. 둘 다 세션마다 바뀐다
3. 캔버스를 `Artifact` `read`(위 URL)로 읽고 `seed-canvas.mjs --extract <저장된 파일> --to <빈 폴더>`로 꺼내 `design/` 파일과 비교한다. 사용자가 캔버스 GUI에서 저장했을 수 있으므로 다르면 추출본을 기준으로 작업한다
4. 재조립에 필요한 목업 이미지 `iphone-16-pro.png`는 원본이 삭제되었으므로 3번에서 추출한 폴더의 것을 쓴다

### 2-3. 작업 방식 규칙 (사용자·조직 규칙)
- 응답과 문서는 한국어. 영문 이름은 항상 `Chu Yumin`
- Git Flow: `develop`에서 `feature/*`(버그는 `bugfix/*`) 브랜치를 만들고, 끝나면 `develop`에 `--no-ff` 병합 후 브랜치 삭제
- 작업이 끝나면 Conventional Commits 메시지를 **제안만** 하고, 사용자가 확인한 뒤 커밋한다. 사용자 확인 없이 다음 작업으로 넘어가지 않는다
- 커밋은 최소 단위로 나누고 메시지에 변경 내용과 이유를 구체적으로 쓴다
- 작업이 끝나면 이 문서를 최신으로 갱신하고, 작업한 파일·영역을 구체적으로 설명한다
- 마크다운: 글머리 기호는 `-`, 헤더 바로 다음 줄에 본문(빈 줄 없음)
- 기술 스택을 정할 때는 선택 이유와 React·Next.js 등 대안 대비 장단점, 예상 면접 질문까지 정리한다

## 3. 프로젝트 개요
- 자기소개, 프로젝트 포트폴리오, 학습 기록, 세미나·행사 기록(사진 포함)을 모으는 개인 홈페이지
- 만드는 이유: 회사에 소속되지 않은 기간 동안의 활동을 보여줄 기록을 남기기 위해
- 반응형 필수(PC·태블릿·모바일)
- 내세울 정체성: **iOS 개발자**(Swift · SwiftUI · UIKit · Xcode)
- 면접에서 설명할 결과물이므로, 디자인·기술 선택마다 이유를 남긴다

## 4. 진행 기록 (단계별)
| 단계 | 내용 | 브랜치 | 결과 |
| --- | --- | --- | --- |
| 데스크톱 시안 | 데스크톱 메타포, 목록 4화면, 라이트/다크, Dock 자동 숨김, 색상 G, 테마 버튼, 상세 3화면 | `feature/design-*` 5개 | `develop` 병합(2026-09-13) |
| 모바일 | 홈 화면 메타포 7화면 + 다크 창 본문 | `feature/design-mobile` | 병합 `74c8149` |
| 데스크톱 다크 창 | 다크 모드에서 데스크톱 창 본문도 어둡게 | `feature/design-dark-windows` | 병합 |
| iPhone 목업 | 직접 그린 폰 23대를 iPhone 16 Pro 목업 이미지로 교체 | `feature/design-iphone-mockup` | 병합 `eceb50a` |
| 태블릿 핵심 | 홈·프로젝트 목록·프로젝트 상세 | `feature/design-tablet` | 병합 `2d280cd` |
| 코드 위젯 버그 | `import SwiftUI` 줄바꿈·`isReady` 표시 수정(데스크톱·모바일·태블릿) | `bugfix/profileview-code-widget` | 병합 `aa62f64` |
| 태블릿 나머지 | 스터디 기록·스터디 글·세미나 기록·행사 상세 | `feature/design-tablet-rest` | 병합 `c1e2f5c` |
| 모션 설계 | 토큰 보드 + 데스크톱·모바일 프로토타입 | `feature/design-motion` | 커밋 → `develop` 병합 → 브랜치 삭제(2026-09-14) |
| 데스크톱 ✕ 버튼 | 데스크톱 창 화면 6장 타이틀 바에 닫기 버튼 | `feature/design-motion` | 같은 브랜치에서 별도 커밋, 함께 병합 |
| 인수인계 문서 | `PROGRESS.md` 재정리, `CLAUDE.md` 현재 상태 갱신 | `feature/design-motion` | 같은 브랜치에서 별도 커밋, 함께 병합 |
| 기술 스택 확정 | Astro·Next.js·Vite + React SPA·순수 HTML 비교 → Astro + 일반 CSS 확정, `docs/tech-stack.md` 작성 | `feature/tech-stack` | 커밋 → `develop` 병합 → 브랜치 삭제(2026-09-14) |
| Claude 설정 | `.claude/settings.json`에 `Bash(bash -c ' *)` 허용(시안 재조립용) | `develop` 직접 | 커밋 `92083d0`(2026-09-14) |
| Astro 생성 | 최소 템플릿 기반, GitHub Pages 하위 경로(`base: '/my-homepage'`), Node 24 고정, 임시 홈 | `feature/astro-setup` | 커밋 `acbfd2f`(2026-09-14) |
| 토큰 이식 | 시안 토큰을 `light-dark()` 한 쌍으로 합쳐 `src/styles/tokens.css` 생성, 전역 스타일·공통 레이아웃 | `feature/astro-setup` | 사용자 Console 확인 후 커밋 `c5b875d`(2026-09-14) |
| MDX 통합 | `@astrojs/mdx` 설치(`astro add`, `@astrojs/markdown-satteri` 함께 추가), `integrations: [mdx()]` | `feature/astro-setup` | 커밋(2026-09-14) |
| 콘텐츠 스키마 | 프로젝트·스터디·세미나 컬렉션, 예시 글 3개, 검증 | `feature/astro-setup` | 커밋 `f949af1`(2026-09-14) |
| Astro 기반 병합 | Astro 생성·토큰·MDX·스키마 커밋 4개 | `feature/astro-setup` | `develop` 병합 `004589b` → 브랜치 삭제(2026-09-14) |
| 테마 전환 버튼 | `ThemeToggle` 컴포넌트, `<head>` 인라인 스크립트로 저장 테마 먼저 적용 | `feature/site-shell` | 커밋 `872ec4b`(2026-09-14) |
| 공통 셸 | 앱 데이터·`withBase`, `AppIcon`·`MenuBar`·`Dock`·`Window`·`PageHeading`, `SiteLayout`, 목록 틀 3개, 임시 홈(`#contact`·`#code`) | `feature/site-shell` | 사용자 확인 후 커밋 `20d40c8`(2026-09-14) |
| Dock 자동 숨김 | 스크롤 방향·마우스 하단 영역·키보드 포커스로 숨김/나타남, 힌트 막대, 동작 줄이기 페이드 | `feature/site-shell` | 검사 16항목 통과, 사용자 확인 후 커밋 `e8eea35`(2026-09-15) |
| 메뉴바 시계 | 데스크톱 메뉴바 테마 버튼 오른쪽에 현재 시각 `HH:MM`, 분 경계마다 갱신 | `feature/site-shell` | 분 경계 검사 통과, 커밋 대기(2026-09-15) |

### 남은 일
- [x] 모션·✕·문서 커밋 → `develop` 병합 → 브랜치 삭제 (2026-09-14, 사용자 확인)
- [x] 기술 스택·콘텐츠 관리 방식 확정 (2026-09-14, 5-11)
- [x] `feature/tech-stack` 커밋 → `develop` 병합 → 브랜치 삭제 (2026-09-14, 사용자 확인)
- [x] 배포 주소 확정: GitHub Pages 하위 경로 `https://yuminc03.github.io/my-homepage/` (2026-09-14, 사용자 선택)
- [x] Astro 프로젝트 생성 커밋 (2026-09-14, 사용자 확인)
- [x] 전역 토큰 CSS 이식 커밋 (2026-09-14, 사용자 확인)
- [x] 테마 전환 스크립트·버튼(`<head>` 인라인 스크립트로 `localStorage` 값을 `data-theme`에 먼저 적용) (2026-09-14, 사용자 확인 후 커밋)
- [ ] 글꼴 로딩 방식 확정: 지금은 시안처럼 Google Fonts `<link>`. 자체 호스팅(서브셋)과 비교 — 화면 구현 때
- [x] 프로젝트 분류는 여러 개 가능, 세미나 사진 배치는 MDX 컴포넌트, 예시 글은 컬렉션마다 1개 `draft` (2026-09-14, 사용자 선택)
- [x] MDX 통합·콘텐츠 컬렉션 스키마 커밋 (2026-09-14, 사용자 확인)
- [x] `feature/astro-setup` → `develop` 병합 `004589b` → 브랜치 삭제 (2026-09-14, 사용자 확인)
- [x] 셸 미정 요소 결정: 연락처 = About me 링크로 이동, 검색 = 실제 콘텐츠 검색으로 구현, Dock 터미널 아이콘 제거, 시계 유지(데스크톱) (2026-09-14, 5-12)
- [x] 공통 셸(메뉴바·Dock·창·목록 틀) 커밋 (2026-09-14, 사용자 확인)
- [x] Dock 자동 숨김 커밋 `e8eea35` (2026-09-15, 사용자 확인)
- [ ] 데스크톱 메뉴바 시계 커밋 (2026-09-15 구현·검증 완료, 사용자 확인 대기)
- [ ] **`feature/site-shell` → `develop` 병합 → 브랜치 삭제** ← 다음
- [ ] 홈 화면 구현(데스크톱: 바로가기·About me·코드 에디터 창·iPhone 목업·스크롤 힌트·최근 기록 창 / 모바일·태블릿: 위젯·앱 아이콘 4개). 임시 홈의 `#contact`·`#code` 도착점과 연락처 강조를 실제 창으로 옮긴다
- [ ] 목록·상세 페이지 구현(프로젝트·스터디·세미나), 상세의 `← 목록` / ‹ 뒤로 링크를 `Window`에 추가
- [ ] 페이지 전환 모션(View Transitions `ClientRouter`, `transition:persist`로 메뉴바·Dock 유지)
- [ ] 콘텐츠 검색 기능 — 목록·상세 페이지 구현 뒤 별도 브랜치(방식은 5-12 추천안을 사용자와 확정)
- [ ] 화면 구현 때 함께: `draft` 제외 헬퍼, 스터디 읽는 시간 계산, 세미나 MDX 컴포넌트 `Photo`·`PhotoPair`·`PhotoSide`(상세 페이지에서 `<Content components={{ ... }} />`로 넘김), 목록 정렬(날짜 내림차순)
- [ ] 실제 글을 쓰면 예시 글 3개(`sample-*`)와 임시 이미지 삭제
- [ ] GitHub Actions로 GitHub Pages 자동 배포 설정(원격 push가 필요하므로 사용자 확인 후)
- [ ] 대괄호 `[ ]` placeholder를 실제 내용으로 교체 — 프로젝트 이름·소개·태그, 포스트 제목·요약·날짜, 세미나 이름·장소·소감, 연락처 링크(GitHub/Email/LinkedIn)
- [ ] 사이트 구현
- [ ] `develop` → `master` 병합·원격 push (사용자 확인 후)
- 선택 과제: `DirectionG.dc.html` 색 기준표의 미니 화면은 "창 본문은 항상 밝게" 시절 모습이다. 다시 쓸 일이 생기면 갱신

## 5. 확정된 결정
### 5-1. 공통 방향
- **데스크톱 OS 메타포**: 상단 유리 메뉴바가 네비게이션, 각 페이지는 창 안에 열리고 하단에 Dock
- 화면: 홈 / 프로젝트 / 스터디 기록 / 세미나 기록 + 각 상세(프로젝트 상세·스터디 글·행사)
- 홈: `About me` 창 + 코드 에디터 창(`ProfileView.swift`) + iPhone 목업, 스크롤하면 `최근 기록` 창. 홈에 프로젝트 그리드는 두지 않는다(프로젝트 수가 적음)
- "이력서"·"프로젝트 보기" 버튼은 넣지 않고 스크롤 힌트로 대체
- 문구: 인사말 `안녕하세요, iOS 개발자 Chu Yumin입니다.`가 상태 메시지보다 한 단계 크다. 좋아하는 문구 `기회가 주어지면 최선을 다하는 것이 아니라 최선을 다하고 있으면 기회가 주어지는 것이다.`
- 글자를 과하게 키우거나 이름을 앞세우지 않는다(사용자 취향)

### 5-2. 라이트/다크 모드
- 전환 대상: 바탕·글로우, 메뉴바·Dock 유리, 바탕 위 글자, **창 본문**(2026-09-14 변경. 처음에는 "창 본문은 항상 밝게"였으나 사용자 요청으로 다크에서 창도 어둡게)
- 모드와 무관하게 고정: iPhone 목업 안쪽 앱 화면과 테두리, 코드 에디터 창·코드 블록·코드 위젯
- 사진 자리·썸네일 파스텔 바탕은 다크에서 `.media::after` 반투명 막으로 덮는다(시안용 자리 표시에만 쓰고 실제 사진에는 쓰지 않는다)
- 테마 버튼: 메뉴바 오른쪽. 누르면 바뀔 모드의 아이콘(다크=해, 라이트=달), `aria-label` "라이트/다크 모드로 전환". 구현 시 첫 방문은 `prefers-color-scheme`, 선택값은 `localStorage`. 모바일은 누르는 영역 44px

### 5-3. Dock
- 자동 숨김: 처음엔 보임 → 아래로 스크롤하면 숨김 → 위로 스크롤하거나 마우스가 하단 영역에 들어오면 나타남. 스크롤로 숨은 상태에서 마우스로 불렀다면 벗어날 때 다시 숨김. 숨은 동안 하단 힌트 막대
- 모바일·태블릿은 hover가 없어 스크롤 규칙만. 목록 창 = 보임, 상세 창 = 숨김(힌트 막대)으로 그렸다
- 데스크톱 목록·상세 화면의 Dock은 시안에서 정적 블록이다. 구현 시 모든 화면에 홈과 같은 고정 + 자동 숨김 규칙을 쓴다
- 구현(2026-09-15, `src/components/Dock.astro` `<script>`)
  - 상태는 `.dock-zone`의 `data-state="shown|hidden"` 하나. 모양·모션은 CSS: 숨김은 `.dock`을 `translateY(calc(100% + 32px))` + opacity 0 + `pointer-events: none`(`var(--dur-dock)` `var(--ease-out)`, opacity 280ms), 힌트 막대 `.hint`가 나타남(모바일 44×5 · 태블릿 52×5 · 데스크톱 44×4px, 홈 `--dock-sep` / 창 화면 `--win-hint`). `prefers-reduced-motion`이면 이동 없이 `var(--dur-fast)` 페이드
  - 스크롤: `scroll`을 rAF로 한 프레임에 한 번 처리. 문서 범위로 자른 `scrollY`(iOS 바운스 제외)와 마지막 기준값의 차이가 6px 이상일 때만 방향 판단(느린 스크롤도 누적). 맨 위 48px 이내는 항상 보임. 아래로 = 즉시 숨김(마우스·키보드가 붙잡고 있으면 보인 채 "스크롤로 숨긴 상태"만 기록), 위로 = 나타남
  - 마우스: 시안처럼 투명 영역 요소를 깔면 창 본문 하단 클릭을 막으므로 **요소 없이 `pointermove`의 `clientY >= innerHeight - 112`로 판정**. `pointerType === 'mouse'`만 세서(`@media (hover)` 대신) 터치·펜은 스크롤 규칙만 따르고, 트랙패드 붙은 태블릿 같은 혼합 기기도 맞게 동작. 들어오면 나타남, 스크롤로 숨긴 상태였다면 벗어난 뒤(창 밖으로 나가는 `pointerleave` 포함) 600ms에 다시 숨김
  - 키보드: 숨은 Dock도 Tab으로 들어올 수 있고 `focusin`이면 나타남. 마우스 클릭으로 링크에 남는 포커스가 Dock을 붙잡지 않도록 `:focus-visible`일 때만 센다. Dock 밖으로 포커스가 나가면 마우스와 같은 규칙으로 다시 숨김
  - View Transitions(`ClientRouter`)를 넣으면 Dock이 `transition:persist`로 유지되므로 이 스크립트를 다시 실행할 필요는 없지만, 스크롤 기준값(`lastY`)은 페이지 전환 때 초기화해야 한다 → 전환 작업 때 `astro:page-load`에서 처리

### 5-4. 창과 상세 화면
- 상세는 같은 창 안에서 열리고 상단 `← 목록 이름` 링크(모바일·태블릿은 타이틀 바 ‹)로 돌아간다. 메뉴바·Dock 활성 표시는 목록과 같게 유지
- **데스크톱 창 ✕ 닫기 버튼 (2026-09-14 채택)**: 목록 3 + 상세 3 화면의 타이틀 바 오른쪽(28×28, 오른쪽·위 8px, 모서리 8px, `var(--win-icon)`, hover 시 `var(--win-press)` 바탕). 누르면 창이 닫히고 홈으로. 홈(`Main`)의 About me·코드·최근 기록 창은 홈 화면 자체라 넣지 않는다. 메뉴·Dock의 홈으로도 닫을 수 있다
- 프로젝트 상세(데스크톱): 읽기 폭 800px. 앱 아이콘 88px·이름 36px·한 줄 소개·태그 → 링크 버튼(App Store에서 보기 / GitHub, 로고 없이 글자 + 바깥 화살표) → 기간·역할·기술·플랫폼 요약 → 창 폭 스크린샷 띠 → 소개 → 주요 기능(폰·설명 좌우 번갈아) → 기술적으로 고민한 점 → 배운 점 → 이전/다음
- 스터디 글 상세(데스크톱): 본문 17px/1.85 + 오른쪽 목차 240px, Swift 코드 블록 → 이전/다음 글
- 행사 상세는 **글 흐름형**(사진 묶음형 A안은 커밋 `1769266`에 남음): 표지 사진 → 도입 → 세션별(`SESSION 01 · [발표자]`) 문단 사이 사진 → 배운 점·소감 → 이전/다음. 사진 배치 3종(넓게 1장 / 2장 나란히 / 사진 옆 글)을 세션마다 골라 쓴다

### 5-5. 색상 방향: G · 라일락 & 민트 (2026-09-13)
- 짙은 자두색 바탕 + 라일락(주 액센트: 링크·태그·활성 표시) + 민트(보조: 아이콘·코드 강조)
- 7개 후보 중 사용자가 "iOS 개발자라는 인식과 강한 개성"을 이유로 선택. 기술적 무게감이 가벼운 약점은 코드 에디터 창·iPhone 목업으로 보완. A~F 비교안은 커밋 `de7d440`에 남음

### 5-6. 모바일: 홈 화면 메타포 (390px)
- 홈: 유리 메뉴바 52px(로고·이름·테마 버튼, 시계 없음) → About me 위젯(인사말 24px) → 앱 아이콘 4개(62px: 프로젝트·스터디 기록·세미나 기록·연락처) → `ProfileView.swift` 코드 위젯 → 최근 스터디·세미나 위젯 → Dock(아이콘 48px)
- 창 시트: 아래에서 올라와 화면을 채움. 위 12px 틈, 모서리 22px, 타이틀 바 52px(창 점 · 제목 · ✕ = 홈으로, 상세는 왼쪽 ‹ = 목록으로)
- 가짜 상태 표시줄·시계 없음, 누르는 영역 44px 이상. 2단 배치는 위아래로 쌓고 이전/다음도 세로
- 화면별: 프로젝트 목록(카드 1열, 필터 칩 가로 스크롤) / 프로젝트 상세(링크 버튼 2칸, 요약 2×2, 스크린샷 띠 가로 스크롤, 기능은 폰 위·설명 아래) / 스터디 기록(카드 1열) / 스터디 글(목차는 제목 아래 접히는 상자, 코드 13px 가로 스크롤·줄 번호 sticky) / 세미나 기록(세로 카드: 사진 180px → 날짜·장소 → 이름 → 소감) / 행사 상세(글 흐름형, 사진 옆 글은 위아래로)

### 5-7. 태블릿: 모바일 확장형 (768px, 2026-09-14 사용자 선택)
- 데스크톱 축소형(메뉴바·창 여러 개)과 비교해 모바일 홈 화면을 넓히는 방식을 선택
- 홈: 메뉴바 56px → About me 위젯 폭 전체(인사말 30px) → 앱 아이콘 72px → 코드 위젯 | 최근 스터디·세미나 위젯 좌우 2단 → Dock(아이콘 56px)
- 창 시트: 위 16px 틈, 모서리 26px, 타이틀 바 56px. 누름(`:active`) 반응만
- 프로젝트 목록: 카드 2열, 필터 칩 줄바꿈 / 프로젝트 상세: 여백 48px(읽기 폭 672px), 요약 2×2, 스크린샷 띠 가로 스크롤, 기능은 폰·설명 좌우 번갈아, 이전/다음 2칸
- 스터디 기록: **카드 1열**(2열이면 제목·요약이 짧게 잘림) / 스터디 글: 읽기 폭 672px, **목차는 접히는 상자**(오른쪽 목차는 본문을 400px대로 좁힘), 코드 14px/23px
- 세미나 기록: **가로 카드 1열**(왼쪽 사진 250px · 오른쪽 글, 시간 순서가 위→아래) / 행사 상세: 표지 360px, 세션 03은 데스크톱처럼 사진 옆 글

### 5-8. iPhone 목업 이미지
- Apple Design Resources의 **iPhone 16 Pro** 목업 이미지를 쓴다(사용자가 준비·사용 조건 확인). 원본 `device_iPhone 16 Pro.png`는 git에 커밋하지 않고, 교체 후 사용자가 삭제했다. 캔버스 안에 `iphone-16-pro.png`로 들어 있어 `--extract`로 꺼낼 수 있다
- 이미지: 450×920 RGBA, 화면 부분 투명. 화면 영역 left 5.56% · top 2.61% · width 88.89% · height 94.78%, 모서리 13.75% / 6.3%. 위쪽 약 5.5%는 Dynamic Island
- 구조: 바깥 `position:relative; aspect-ratio:450 / 920; filter:drop-shadow(...)` > 화면 `position:absolute; left:5.56%; top:2.61%; width:88.89%; height:94.78%; border-radius:13.75% / 6.3%; overflow:hidden`(앱 화면 내용) + 맨 위 `<img src="iphone-16-pro.png" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">`
- 크기: 홈 206px(`rotate(3deg)`), 데스크톱 카드 150px(아래로 잘림), 데스크톱 상세 210/200px, 모바일 카드 128px·상세 170px, 태블릿 카드 150px·상세 190px
- 테마와 무관하게 그대로 쓴다

### 5-9. 모션 (2026-09-14 설계)
- 원칙
  - 빠르게 반응하고 감속 곡선으로 멈춘다. 300ms를 넘는 것은 화면 전체 전환뿐
  - 닫기는 열기의 약 60~70% 시간에 가속 곡선(ease-in)
  - 출발점을 보여준다: 데스크톱 창은 누른 바탕 아이콘·메뉴·Dock 쪽에서 커지고, 모바일 창은 아래에서, 상세는 오른쪽에서 들어온다
  - 기기의 "동작 줄이기"(`prefers-reduced-motion`)면 이동·확대를 짧은 페이드로 바꾸고 등장·반복 모션을 끈다
- 곡선: `--ease-out` `cubic-bezier(.2,.8,.2,1)`(기존 Dock 곡선을 기본으로) / `--ease-in` `(.4,0,1,1)` / `--ease-sheet` `(.32,.72,0,1)`
- 시간: 누름 120ms · 호버·포커스·데스크톱 창 닫기 200ms · 시트 닫기·뒤로 300ms · 데스크톱 창 열기 320ms · 상세 들어가기 360ms · Dock 380ms · 테마 400ms · 시트 열기 420ms · 콘텐츠 등장 480ms(+ 항목당 50ms, 최대 6개)
- 인터랙션별 값(요약. 전체 표는 `MotionSpec.dc.html`)
  - 누름: 아이콘 scale(.92~.94), 카드 scale(.985)
  - 데스크톱 창 열기: opacity 0→1, translateY(10px) scale(.95)→원래, `transform-origin` = 출발점 / 닫기: 반대로 200ms ease-in
  - 창 포커스 전환: z-index 즉시, 그림자 20/48 → 44/96, 뒤 창 제목 opacity .5
  - 모바일·태블릿 시트: translateY(100%)→0 420ms ease-sheet, 뒤의 홈은 scale(.94) + scrim .45
  - 상세 push: 상세 translateX(100%)→0, 목록 translateX(-24%) + opacity .4
  - 콘텐츠 등장: opacity 0→1, translateY(12px)→0. 스크롤 등장은 IntersectionObserver(threshold 0.15) 한 번만
  - 테마: 색 400ms, 버튼 아이콘 rotate(-90deg) scale(.6)→원래 350ms
- 구현 방침(기술 스택과 무관): CSS transition·@keyframes + custom property 토큰만. `transform`·`opacity`만 애니메이션(리플로우 없음), blur 값은 애니메이션하지 않음
- 태블릿은 모바일 값을 그대로 쓴다

### 5-10. 콘텐츠 관리 방식 (2026-09-14 확정)
- **저장소의 Markdown 파일 + Astro Content Collections**. 글 하나 = 파일 하나라 git 기록이 활동 기록이 되고, 필드 검사·이미지 최적화·무료 정적 배포가 가능
- 컬렉션: 프로젝트·스터디·세미나 3개. 사진은 글 폴더 옆에 두고 `astro:assets`로 최적화
- 스키마 `src/content.config.ts` (2026-09-14 정의, 필드는 시안 화면 항목 기준. `z`는 `astro/zod`(zod v4), 이미지는 `image()`로 경로 검사)
  - 공통: 폴더형(`slug/index.md`)은 폴더 이름, 파일형(`slug.md`)은 파일 이름이 id(주소). `draft`(기본 false)
  - **projects** `src/content/projects/*/index.{md,mdx}`: `title`·`summary`·`categories`(`iOS`/`Web`/`Side Project` 중 1개 이상, 여러 개 가능)·`tags`·`icon`(이미지)·`startDate`·`endDate`(없으면 진행 중)·`role`·`stack`(1개 이상)·`platform`·`links.appStore`/`links.github`(URL)·`screenshots`(이미지 배열)·`features[]`(`title`·`description`·`image`). 본문은 `## 소개` / `## 기술적으로 고민한 점` / `## 배운 점`
  - **study** `src/content/study/**/*.{md,mdx}`: `title`·`summary`·`category`(자유 문자열, 필터 칩은 글에서 모아 만듦)·`pubDate`·`updatedDate`. 읽는 시간·목차는 본문에서 계산(`render()`의 `headings`)
  - **seminars** `src/content/seminars/*/index.{md,mdx}`: `title`·`date`·`location`·`summary`·`cover`(이미지)·`coverAlt`. 본문은 MDX: `## SESSION 01 · 발표자` + `### 세션 제목`, 사진은 `<Photo>`(넓게 1장) · `<PhotoPair>`(2장 나란히) · `<PhotoSide>`(사진 옆 글) — 이미지는 본문에서 `import`해 넘긴다
- 새 글 쓰기: `src/content/<컬렉션>/sample-*`를 복사해 이름을 바꾸고 `draft: false`로. 필드가 틀리면 `npm run build`(또는 `npx astro sync`)가 어떤 필드가 왜 틀렸는지 알려 주며 실패한다
- 브라우저에서 글을 쓰고 싶어지면 Keystatic·Decap CMS(git 기반), 사진이 많아지면 사진만 이미지 서비스로
- Firebase는 관리자 화면·인증을 직접 만들어야 하고 검색 노출·비용 면에서 과하다

### 5-11. 기술 스택 (2026-09-14 확정)
- 전체 비교표·약점·예상 면접 질문 7개는 **`docs/tech-stack.md`** 가 기준이다
- 결정: **Astro**(SSG) + **일반 CSS**(컴포넌트 스코프 `<style>` + 전역 토큰 파일) + **TypeScript** + Markdown Content Collections
- 페이지 전환: View Transitions(`ClientRouter`), 메뉴바·Dock은 `transition:persist`. 테마는 `<head>` 인라인 스크립트로 깜빡임 방지
- Astro를 고른 이유: 읽기 전용·사진 많음·링크로 공유되는 사이트라 SSG + 기본 JS 0KB + 콘텐츠 검사·이미지 최적화 내장이 가장 잘 맞는다
- 제외: Next.js(서버 기능 불필요, 복잡도·JS 비용), Vite + React SPA(링크 미리보기·검색 노출 약함), 순수 HTML/CSS/JS(공통 요소 복제·수동 목록 관리)
- Tailwind → 일반 CSS로 변경한 이유: 시안이 이미 토큰 기반 CSS라 그대로 이식할 수 있고, Astro 스코프 스타일이 스타일 충돌 문제를 이미 해결한다
- 감수하는 약점: MPA라 전환 연결이 SPA보다 까다로움, island 간 상태 공유 불편, React보다 작은 생태계, 수정 시 재빌드
- 배포: **GitHub Pages 하위 경로** `https://yuminc03.github.io/my-homepage/` (2026-09-14 확정). `astro.config.mjs`에 `site`·`base: '/my-homepage'`를 두고, **내부 링크와 `public/` 에셋 경로는 반드시 `import.meta.env.BASE_URL`을 붙여 만든다**(`/projects`처럼 슬래시로 시작하는 절대 경로를 직접 쓰면 배포 후 404)
- 패키지 매니저 npm, Node 24(`.nvmrc`), Astro 7.3.x (2026-09-14 확정)
- 테마 토큰 구조(2026-09-14): 시안의 두 블록(`.site` 다크 / `.site[data-theme="light"]`) 대신 **토큰 하나 = `light-dark(라이트, 다크)` 한 줄**. `:root{color-scheme: light dark}`이면 시스템 설정을 따르고, `:root[data-theme="dark"|"light"]`가 `color-scheme`만 바꿔 사용자 선택을 고정한다. 같은 값을 두 번 쓰지 않고도 JS 없이 첫 방문 시스템 테마가 적용된다(Asset Catalog의 Any/Dark 한 쌍과 같은 구조)
- 다시 검토할 조건: 여러 창 동시 표시·드래그 같은 앱형 UI, 로그인·댓글 같은 서버 기능이 필요해질 때

### 5-12. 사이트 셸 (2026-09-14 결정)
- 원칙: **누를 수 있어 보이는데 아무 일도 없는 요소는 만들지 않는다**. 시안에서 동작이 정해지지 않은 요소는 기능을 정하거나 뺀다
- 연락처(모바일 홈 앱 아이콘·Dock 메일 아이콘): **홈 About me의 GitHub·Email·LinkedIn 링크 영역으로 이동**(`/#contact`, 도착하면 강조). 모션 프로토타입에서는 `noop`이었다
- Dock `</>` 코드 에디터 아이콘(데스크톱): 홈으로 가서 코드 에디터 창을 앞으로(모션 프로토타입 `focusCode`)
- Dock 터미널 아이콘(데스크톱): **제거**(어느 시안에도 기능 없음)
- 메뉴바 검색 아이콘: **내 콘텐츠(프로젝트·스터디·세미나) 검색으로 구현**하기로 함(사용자 제안). 결과가 상세 페이지로 연결되어야 하므로 목록·상세 페이지 구현 뒤 별도 작업. 그전까지 아이콘은 두지 않는다
  - 추천안(확정 전): 빌드 때 컬렉션에서 제목·요약·태그·카테고리·본문 텍스트를 모은 JSON 색인을 만들고, 브라우저에서 부분 문자열로 찾는다. 한국어는 조사가 붙어 단어 단위 색인(Pagefind 등)에서 "스터디"로 "스터디를"을 놓칠 수 있는데, 부분 문자열 방식은 글 수가 적은 이 사이트에서 가볍고 정확하다. UI는 데스크톱 ⌘K / 메뉴바 아이콘으로 여는 가운데 검색 창
- 메뉴바 시계: **데스크톱에만** 실제 현재 시각(분 단위 갱신). 모바일·태블릿은 기기 상태 표시줄과 겹치므로 두지 않는다(시안 규칙)
  - 구현(2026-09-15, `src/components/MenuClock.astro`): `MenuBar`의 데스크톱 영역에 테마 버튼 · 시계 순서, 간격 16px(시안). `<time>` `12.5px`/500 `var(--ink)`
  - 시각은 **방문자 기기의 현지 시각** `HH:MM`(24시간). `Intl.DateTimeFormat('ko-KR', { hourCycle: 'h23' })`의 `formatToParts`에서 시·분만 꺼내 합친다(로케일 표기 "오전" 등이 섞이지 않게). `datetime` 속성도 같은 값
  - 갱신: `setInterval(60s)`은 조금씩 밀리고 절전·백그라운드 탭에서 늦어지므로, **매번 다음 분 경계까지 남은 시간을 새로 계산한 `setTimeout`**(+50ms 여유)으로 다시 건다. 탭이 다시 보이면(`visibilitychange`) 바로 맞춘다
  - JS 실행 전에는 비워 둔다(빌드 시각은 틀린 시각). 대신 `min-width: 4.4ch` + `tabular-nums`로 자리 폭을 미리 잡아, 시각이 채워질 때 테마 버튼이 밀리지 않고 분이 바뀌어도 폭이 흔들리지 않는다
- 반응형 구간(구현 기준): 모바일 `< 744px`(시안 390) · 태블릿 `744–1179px`(시안 768) · 데스크톱 `≥ 1180px`(시안 1440). 데스크톱 창은 `min(1240px, 100% - 좌우 여백)`으로 줄어든다
- 테마 버튼: `ThemeToggle.astro`(`size="desktop"` 28×22 / `size="touch"` 44×44). 누른 뒤에만 아이콘이 rotate(-90deg) scale(.6)→원래 350ms로 나타나고(페이지를 열 때는 움직이지 않음), `prefers-reduced-motion`이면 생략. 버튼 이름은 "누르면 무엇이 되는지"(라이트/다크 모드로 전환)이며 시스템 설정이 바뀌면 따라 바뀐다
- 셸 구현 규칙(2026-09-14)
  - 메뉴바: 데스크톱은 모든 화면, 모바일·태블릿은 홈에서만(목록·상세는 창 시트가 화면을 채움)
  - Dock: 모든 화면 하단 고정(`position: fixed`, iPhone 홈 인디케이터 영역 `safe-area-inset-bottom` 반영). 홈은 바탕 유리(`--glass`), 창 화면은 데스크톱 포함 창 위 유리(`--win-dock-*`). 시안의 데스크톱 목록 화면처럼 창 아래 정적 블록으로 두지 않는다(5-3)
  - 창 ✕·메뉴·Dock은 모두 `<a>` 링크(페이지 이동)이고 `aria-current="page"`로 활성 표시. CSS도 이 속성으로 스타일한다
  - 시트는 `overflow: clip`으로 모서리를 자른다(`hidden`은 스크롤 컨테이너가 되어 타이틀 바 `sticky`가 풀린다)
  - 창 화면 제목·설명·경로·아이콘은 `src/data/apps.ts` 한 곳에서 관리한다

## 6. 저작권 주의선
- macOS·Xcode의 실제 UI를 복제하지 않는다. Apple 로고, SF Symbols, 신호등 색(빨강·노랑·초록) 창 컨트롤, 실제 메뉴 구조를 쓰지 않는다
- 자체 팔레트와 직접 그린 SVG 아이콘을 쓴다. 창 컨트롤 점은 라일락 2개 + 민트 1개(장식이며 기능 없음). 닫기는 별도 ✕ 버튼으로 둔다
- 목업 이미지는 Apple Design Resources 것을 사용 조건 안에서만 쓴다

## 7. 디자인 시스템 (G · 라일락 & 민트)
- 폰트: Noto Sans KR(300/400/500/700/800/900), 코드는 `ui-monospace` 계열
- 중립색은 모두 색상각 290(자두색 기운)
- 라일락 주 액센트(라이트 창) `oklch(60% 0.15 295)`, 다크 창 `oklch(76% 0.12 295)`
- 앱 아이콘 그라디언트(메뉴바 로고·바로가기·Dock 공통, **그라디언트 안의 색은 테마 토큰으로 바꾸지 않는다**): 홈 `70% 0.13 300 → 58% 0.15 285` / 프로젝트 `76% 0.11 170 → 64% 0.11 185` / 스터디 `72% 0.12 340 → 60% 0.14 320` / 세미나 `78% 0.1 220 → 64% 0.12 255` / 연락처 `74% 0.1 195 → 62% 0.11 215`
- 코드 에디터(고정): 바탕 `oklch(19% 0.018 290)`, 키워드 `76% 0.13 300` / 타입 `80% 0.11 170` / 메서드·숫자 `80% 0.1 220` / 문자열 `82% 0.1 80`
- 유리 재질(메뉴바·Dock): `var(--glass)` + `blur(28px) saturate(180%)` + `inset 0 1px 0 var(--glass-hi)` + 그림자
- 토큰은 각 `.dc.html` `<helmet><style>`의 `.site`(다크 기본)와 `.site[data-theme="light"]`에 정의. 캔버스 아트보드끼리 CSS를 공유할 수 없어 **모든 화면 파일에 같은 토큰 줄이 복제**되어 있다(2026-09-14 확인: 화면 23장 모두 동일). 값을 바꿀 때는 모든 파일을 함께 수정한다
- **사이트 구현의 기준은 `src/styles/tokens.css`** 다(2026-09-14 이식). `design/Main.dc.html`·`MotionDesktop.dc.html`에서 스크립트로 변환해 만들었다(색 55쌍 `light-dark(라이트, 다크)` + 모션 15개). 이후 토큰을 바꾸면 `tokens.css`를 먼저 고치고, 시안에도 반영할지는 따로 정한다
- 변환 방법(스크립트는 scratchpad에 있어 사라짐): 두 블록을 `;`로 나눠 이름→값 맵으로 만들고, 이름 집합이 같은지 검사한 뒤 다크 순서대로 `--이름: light-dark(라이트값, 다크값);`을 쓰고 섹션 주석을 붙였다

### 7-1. 바탕·유리 토큰
| 토큰 | 용도 | 다크 | 라이트 |
| --- | --- | --- | --- |
| `--desk` | 바탕 | `oklch(18% 0.02 290)` | `oklch(96% 0.012 290)` |
| `--glow-a/b/c` | 블러 글로우 | `58% 0.13 300` / `60% 0.1 170` / `52% 0.12 300` | `86% 0.08 300` / `89% 0.07 170` / `90% 0.06 300` |
| `--glass` | 메뉴바·Dock 유리 | 흰색 `/ 0.10` | 흰색 `/ 0.55` |
| `--glass-line` | 유리 테두리 | 흰색 `/ 0.12` | `oklch(25% 0.022 290 / 0.08)` |
| `--glass-hi` | 유리 하이라이트 | 흰색 `/ 0.18` | 흰색 `/ 0.7` |
| `--ink-strong` · `--ink` · `--ink-muted` | 메뉴바 글자 | `97%` · `88%` · `82%` | `20%` · `32%` · `42%` |
| `--menu-active` | 활성 메뉴 배경 | 흰색 `/ 0.14` | `oklch(25% 0.022 290 / 0.08)` |
| `--label` · `--cue` | 바로가기 라벨 · 스크롤 힌트 | `90%` · `76%` | `28%` · `46%` |
| `--dock-sep` · `--dock-dot` | Dock 구분선 · 실행 점 | 흰색 `/ 0.16` · `90%` | `/ 0.14` · `35%` |
| `--win-line` · `--win-shadow` | 창 테두리 · 그림자 | 흰색 `/ 0.12` · `6% / 0.55` | `25% / 0.08` · `35% / 0.18` |

### 7-2. 창 본문 토큰 `--win-*` (다크 값, 라이트는 밝은 창 색)
- 바탕 `--win-bg` `23% 0.018 290`(라이트 `98% 0.006 290`) / 타이틀 바 `--win-bar` `27%`(라이트 `94%`) / 카드 `--win-card` `27%` / 구분선 `33%` / 칩 테두리 `38%`
- 글자 `--win-ink-strong` `95%` / `--win-ink` `85%` / `--win-ink-muted` `72%` / `--win-ink-sub` `66%` / 제목 `--win-title` `78%` / 아이콘 `--win-icon` `80%`
- `--win-accent` `76% 0.12 295`, 태그 `--win-tag-bg` `33% 0.05 295` / `--win-tag-ink` `84% 0.09 295`
- 채운 버튼·활성 칩 `--win-solid-bg` `93%` + 글자 `20%`(다크에서 밝게 반전)
- 창 점 `--win-ctrl-a/b/c` `62% 0.08 295` · `52% 0.06 295` · `56% 0.07 170`
- 누름 바탕 `--win-press` 흰색 `/ 0.08`, 힌트 막대 `--win-hint` 흰색 `/ 0.3`
- 창 위 Dock `--win-dock-glass` `26% 0.02 290 / 0.78`
- 사진 덮개 `--win-media-dim` `16% 0.02 290 / 0.6`(라이트 투명), 코드 블록 테두리 `--win-code-line` 흰색 `/ 0.08`(라이트 투명)

### 7-3. 모션 토큰
- `.site{--ease-out;--ease-in;--ease-sheet;--dur-press:120ms;--dur-fast:200ms;--dur-close:200ms;--dur-sheet-close:300ms;--dur-pop:300ms;--dur-window:320ms;--dur-push:360ms;--dur-dock:380ms;--dur-theme:400ms;--dur-sheet:420ms;--dur-reveal:480ms;--stagger:50ms}` — 시안에서는 `Motion*.dc.html`에만 들어 있다. 사이트에서는 `src/styles/tokens.css`의 `:root`로 옮겼다(2026-09-14)

## 8. 기술 스택 결정 기준 (2026-09-14 확정 → 5-11, `docs/tech-stack.md`)
- 확정할 때 남기기로 한 것(2026-09-14 사용자 요청) — 모두 `docs/tech-stack.md`에 작성함
  - 후보별 비교표: 렌더링 방식, JS 번들 크기, 콘텐츠 관리, 이미지 최적화, 창 전환 같은 인터랙션 구현 난이도, 링크 미리보기·검색 노출, 배포·비용, 학습 곡선, 생태계, 공통 요소 재사용
  - 고른 기술의 약점과 그 약점을 감수하는 이유
  - 예상 면접 질문과 답변 요지
- 비교한 후보(사용자 선택): Astro · Next.js(React) · Vite + React SPA · 순수 HTML/CSS/JS
- 이후 스택 관련 결정(배포 호스팅 등)도 같은 기준으로 `docs/tech-stack.md` 7장 결정 기록에 추가한다

## 9. 시안 캔버스
- URL: https://claude.ai/code/artifact/48a3c34c-b882-4f13-8e2f-7e3668bdb7b1
- 게시 규칙: 새 세션에서는 반드시 `url`을 넘긴다(안 넘기면 새 캔버스가 생김). `contract: "0.1.31"`, favicon `💻`, `capabilities`는 넘기지 않는다(기존 선언 유지)
- 페이지와 배치(x 좌표)
  - `시안`(데스크톱): 윗줄 홈 0 / 프로젝트 1540 / 스터디 3080 / 세미나 4620, 각 목록 아래 상세. 메모 `theme-rule`·`dock-rule`·`detail-flow`
  - `색상 방향`: G 기준표 1장 + `direction-guide`
  - `모바일`: 홈 0 / 스터디 490 / 행사 상세 980 / 프로젝트 1470 / 프로젝트 상세 1960 / 스터디 글 2450 / 세미나 2940 / `mobile-rule` 3430
  - `태블릿`: 홈 0 / 프로젝트 868 / 프로젝트 상세 1736 / 스터디 2604 / 스터디 글 3472 / 세미나 4340 / 행사 상세 5208 / `tablet-rule` 6076
  - `모션`(열면 이 페이지부터): 토큰 보드 0 / 데스크톱 프로토타입 1332 / 모바일 프로토타입 2872(둘 다 `is_interactive: true`), `motion-guide` 메모(x 1332, y 1000)
- 조절 칩: 모든 화면 `theme`(dark/light), 데스크톱 홈 `dockPreview`(auto/shown/hidden), 모션 프로토타입 `motion`(system/full/reduced)
- 버전 기록
  - v1~v12: 일반 웹페이지 → iOS 정체성 → 데스크톱 메타포 → 라이트/다크·Dock → 색상 A~G 비교 → G 적용 → 테마 버튼 → 상세 화면들
  - v13~v16: 모바일 7화면, 모바일·데스크톱 다크 창 본문
  - v17: iPhone 16 Pro 목업 교체 / v18: 태블릿 핵심 3화면 / v19: 코드 위젯 버그 수정 / v20: 태블릿 나머지 4화면
  - v21: 모션 설계 / **v22: 데스크톱 창 ✕ 닫기 버튼(현재)**

## 10. 작업 파일
### 10-1. 화면 파일 (`design/`)
| 파일 | 크기 | 내용 |
| --- | --- | --- |
| `Main.dc.html` | 1440×1640 | 데스크톱 홈. 바로가기 4, About·코드 창, iPhone 목업, Dock 자동 숨김 로직, 최근 기록 창, 테마 버튼 |
| `Projects.dc.html` | 1440×1480 | 프로젝트 창(카드 6, 필터 칩, ✕) |
| `StudyLog.dc.html` | 1440×1760 | 스터디 기록 창(포스트 6, ✕) |
| `Seminars.dc.html` | 1440×2620 | 세미나 기록 창(타임라인 5, ✕) |
| `ProjectDetail.dc.html` | 1440×3560 | 프로젝트 상세(✕) |
| `StudyPost.dc.html` | 1440×1860 | 스터디 글 상세(오른쪽 목차, ✕) |
| `SeminarDetail.dc.html` | 1440×3640 | 행사 상세 글 흐름형(✕) |
| `DirectionG.dc.html` | 1232×720 | G 팔레트 기준표(옛 모습 남음) |
| `MobileHome` / `MobileProjects` / `MobileProjectDetail` / `MobileStudyLog` / `MobileStudyPost` / `MobileSeminars` / `MobileSeminarDetail` | 390×1080 / 1760 / 3300 / 1120 / 1900 / 1720 / 2760 | 모바일 7화면 |
| `TabletHome` / `TabletProjects` / `TabletProjectDetail` / `TabletStudyLog` / `TabletStudyPost` / `TabletSeminars` / `TabletSeminarDetail` | 768×1120 / 1280 / 3200 / 1600 / 1700 / 1440 / 2880 | 태블릿 7화면 |
| `MotionSpec.dc.html` | 1232×2600 | 모션 원칙·곡선·시간·인터랙션별 값 표·구현 메모 |
| `MotionDesktop.dc.html` | 1440×900 | 데스크톱 모션 프로토타입(창 열기/닫기·포커스·활성 표시·등장·테마) |
| `MotionMobile.dc.html` | 390×844 | 모바일 모션 프로토타입(시트·상세 push·Dock 숨김·등장·테마) |

### 10-2. 사이트 파일 (저장소 루트, Astro)
| 파일 | 내용 |
| --- | --- |
| `package.json` · `package-lock.json` | 이름 `my-homepage`, 의존성 `astro` ^7.3.2 · `@astrojs/mdx` ^8.0.1 · `@astrojs/markdown-satteri` ^0.4.1(MDX가 요구), 스크립트 `dev`·`build`·`preview`, `engines.node >=22.12.0` |
| `astro.config.mjs` | `site: 'https://yuminc03.github.io'`, `base: '/my-homepage'`, `integrations: [mdx()]` |
| `src/content.config.ts` | 콘텐츠 컬렉션 `projects`·`study`·`seminars` 스키마(5-10), `PROJECT_CATEGORIES` 내보내기, 폴더형/파일형 id 생성 |
| `src/content/projects/sample-project/` | 예시 프로젝트 `index.md`(`draft: true`) + 단색 임시 이미지 5장(아이콘·스크린샷 2·기능 2) |
| `src/content/study/sample-post.md` | 예시 스터디 글(`draft: true`, 인라인 코드·Swift 코드 블록) |
| `src/content/seminars/sample-seminar/` | 예시 행사 `index.mdx`(`draft: true`, 세션 3개·사진 컴포넌트 3종) + 단색 임시 이미지 5장(표지·사진 4) |
| `tsconfig.json` | `astro/tsconfigs/strict` 상속, `dist`·`design` 제외 |
| `.nvmrc` | `24` |
| `.gitignore` | `dist/`·`.astro/`·`node_modules/`·`.env`·`.DS_Store` 등(Astro 템플릿 그대로) |
| `.vscode/extensions.json` | Astro VS Code 확장 추천 |
| `src/pages/index.astro` | 셸 확인용 임시 홈(`SiteLayout` `surface="desk"`, About me 자리 + `#contact` 연락처 도착점(`:target` 강조) + `#code` 코드 에디터 도착점). 홈 화면 구현 때 교체 |
| `src/pages/projects/index.astro` · `study/index.astro` · `seminars/index.astro` | 목록 창 틀: `SiteLayout` + `Window` + `PageHeading`(제목·설명은 `apps.ts`). 목록 내용은 페이지 구현 때 |
| `src/layouts/SiteLayout.astro` | 공통 셸: 고정 글로우 바탕 3개 · `MenuBar` · `<main>` · `Dock`. props `active`(앱 id), `surface`(`desk` 홈 / `window` 창 화면), `title`·`description` |
| `src/data/apps.ts` | 앱 목록 `APPS`(홈·프로젝트·스터디 기록·세미나 기록: 라벨·창 제목·설명·경로·아이콘 바탕·SVG), `CONTACT`(`/#contact`), `CODE_EDITOR`(`/#code`, 데스크톱 Dock 전용), `getApp()` |
| `src/lib/url.ts` | `withBase(path)`: base(`/my-homepage`)를 붙인 내부 경로. 내부 링크는 모두 이것으로 만든다 |
| `src/components/AppIcon.astro` | 아이콘 타일. 크기는 부모의 CSS 변수(`--icon-size`·`--icon-radius`·`--glyph-size`·`--glyph-stroke`), `shadow` 옵션 |
| `src/components/MenuBar.astro` | 유리 메뉴바. 데스크톱 36px(로고·이름·메뉴 4개 `aria-current`·테마 버튼·시계) / 모바일 52px·태블릿 56px(홈에서만, 로고·이름·44px 테마 버튼) |
| `src/components/MenuClock.astro` | 데스크톱 메뉴바 시계. 기기 현지 시각 `HH:MM`, 분 경계마다 `setTimeout`으로 갱신, JS 전에는 빈 자리(폭 고정)(5-12) |
| `src/components/Dock.astro` | 하단 고정 Dock. 앱 4개 + 실행 점 · 구분선 · 코드 에디터(데스크톱) · 연락처. `surface` desk/window 유리. 크기 모바일 48 / 태블릿 56 / 데스크톱 52px. 자동 숨김 스크립트(`data-state`)·힌트 막대(5-3) |
| `src/components/Window.astro` | 창. 데스크톱: 최대 1240px 가운데 창(타이틀 바 44px, ✕ 28px) / 모바일·태블릿: 위 12·16px 틈 시트(타이틀 바 52·56px sticky, ✕ 44px). 본문 여백 20·36·48px, 아래는 Dock 자리만큼 비움 |
| `src/components/PageHeading.astro` | 목록 화면 큰 제목(30·34·44px)과 한 줄 설명 |
| `src/layouts/BaseLayout.astro` | 모든 페이지 공통 문서 뼈대: `lang="ko"`, 메타(title·description 기본값), Noto Sans KR `<link>`, `tokens.css`·`global.css` import, `<head>` 인라인 스크립트(저장된 테마를 첫 화면 전에 `data-theme`에 적용), `<slot />` |
| `src/components/ThemeToggle.astro` | 테마 전환 버튼(해/달 아이콘, `size` desktop/touch). 문서 위임 클릭 → `data-theme`·`localStorage('theme')` 저장, 버튼 이름 갱신, 누른 뒤 아이콘 애니메이션 |
| `src/styles/tokens.css` | 디자인 토큰. 모션 곡선 3·시간 12, 색 55쌍 `light-dark()`, `color-scheme` 3가지(`:root`·`[data-theme="dark"]`·`[data-theme="light"]`) |
| `src/styles/global.css` | 전역 기본: box-sizing, body 바탕 `--desk`·글자 `--ink`·글꼴, 링크 `--win-accent`(hover 전환은 모션 토큰), `img` 반응형, `.code` 고정폭 글꼴 |
- 템플릿에서 가져오지 않은 것: `README.md`·`AGENTS.md`(기존 README·`CLAUDE.md` 사용), `.vscode/launch.json`, 기본 Astro 파비콘(나중에 자체 아이콘으로 추가)

### 10-3. 그 밖의 파일
- `docs/tech-stack.md` — 기술 스택 비교표·약점·예상 면접 질문·결정 기록
- `design/canvas.json` — 페이지·아트보드 배치·크기·메모·첫 화면
- `design/chu-yumin-portfolio.html` — 조립 결과물. **직접 편집하지 말고 항상 재조립**
- `스크린샷 2026-09-11 오후 11.52.51.png` — 참고한 데스크톱형 포트폴리오 사례
- scratchpad 생성 스크립트(세션이 끝나면 사라진다. 필요하면 같은 방식으로 다시 작성): `dark_windows.py`(창 색 토큰 변환), `iphone_mockup.py`(목업 교체), `tablet_rest.py`(태블릿 4화면), `motion.py`(모션 3장. `TabletProjects` 토큰 줄·`Main` 창·`MobileHome` 위젯을 가져와 조립하고 태그 짝·camelCase 버그를 검사)

## 11. 시안 수정·재게시 방법
1. 새 세션이면 2-2 체크리스트대로 캔버스를 읽고 추출해 비교한다
2. `design/*.dc.html` 또는 `canvas.json`을 수정한다. 새 화면은 기존 같은 기기 화면의 헬멧(토큰 줄)을 그대로 복사해 시작하고, 창 색은 처음부터 `var(--win-*)`로 쓴다
3. 재조립(`design/`에서, **zsh에서는 변수로 인자를 넘기면 나뉘지 않으므로 `bash -c` + 배열을 쓰거나 인자를 직접 적는다**)
   - `node "<스킬 경로>/seed-canvas.mjs" --template "<스킬 경로>/payload.template.html" --out chu-yumin-portfolio.html --title "Chu Yumin Portfolio" --artboard Main.dc.html --artboard Projects.dc.html --artboard StudyLog.dc.html --artboard Seminars.dc.html --artboard ProjectDetail.dc.html --artboard StudyPost.dc.html --artboard SeminarDetail.dc.html --artboard DirectionG.dc.html --artboard MobileHome.dc.html --artboard MobileStudyLog.dc.html --artboard MobileSeminarDetail.dc.html --artboard MobileProjects.dc.html --artboard MobileProjectDetail.dc.html --artboard MobileStudyPost.dc.html --artboard MobileSeminars.dc.html --artboard TabletHome.dc.html --artboard TabletProjects.dc.html --artboard TabletProjectDetail.dc.html --artboard TabletStudyLog.dc.html --artboard TabletStudyPost.dc.html --artboard TabletSeminars.dc.html --artboard TabletSeminarDetail.dc.html --artboard MotionSpec.dc.html --artboard MotionDesktop.dc.html --artboard MotionMobile.dc.html --image <추출 폴더 또는 scratchpad>/iphone-16-pro.png --canvas canvas.json`
   - `--out` 파일이 이미 있어도 덮어쓴다
4. 검사: `node "<스킬 경로>/seed-canvas.mjs" --check chu-yumin-portfolio.html` → `ok:`와 파일 27개(아트보드 25 + 이미지 + canvas.json) 확인
5. `Artifact`로 재게시(9장 게시 규칙)

### 11-1. 캔버스 편집기 주의사항 (실제로 겪은 버그)
- 코드 블록(`white-space:pre`)에서 태그 사이에 **줄바꿈만 있는 글자**(`</span>\n\n<span>`)는 사라진다 → 빈 줄은 `<br><br>`로 넣는다
- 글자 속 **camelCase 이름 + `=`**(`isReady =`)는 속성으로 오인돼 `sc-camel-is-ready`로 바뀐다 → 이름을 `<span>isReady</span>`로 감싼다
- 토큰 일괄 변환 시 **그라디언트 안의 색**까지 바꾸면 다크에서 앱 아이콘 색이 달라진다 → 그라디언트는 건드리지 않는다
- 프레임 높이는 내용 합계보다 5% 이상 여유를 둔다(잘리면 보이지 않음). 표처럼 줄바꿈이 많은 보드는 넉넉히
- 인터랙션은 `onClick="{{handler}}"`, 조건 표시는 `<sc-if value="{{bool}}">`, 상태 스타일은 `data-*="{{값}}"` + CSS 선택자로 만든다(`class`에 값 끼워 넣기는 쓰지 않았다)

## 12. 브랜치·커밋 기록
- 로컬 브랜치: `master`, `develop`, `feature/site-shell`(작업 중). 원격(`origin`)과 `master`에는 아직 반영하지 않았다
- `develop` 직접 커밋: `92083d0` `.claude/settings.json` 권한 추가(2026-09-14)
- 병합 후 삭제한 브랜치(순서대로): `feature/design-theme-dock`, `feature/design-color-direction`(`fab45e5`), `feature/design-theme-toggle`(`e610858`), `feature/design-detail-screens`(`bfcf341`), `feature/design-project-detail`(`0c7d2c9`), `feature/design-mobile`(`74c8149`), `feature/design-dark-windows`, `feature/design-iphone-mockup`(`eceb50a`), `feature/design-tablet`(`2d280cd`), `bugfix/profileview-code-widget`(`aa62f64`), `feature/design-tablet-rest`(`c1e2f5c`), `feature/design-motion`(모션 설계 · 데스크톱 창 ✕ 버튼 · 인수인계 문서, 2026-09-14), `feature/tech-stack`(기술 스택 결정 문서, 2026-09-14), `feature/astro-setup`(Astro 생성·토큰·MDX·스키마, 병합 `004589b`, 2026-09-14)
- 참고로 남겨 둔 비교안 커밋: 색상 A~F `de7d440`, 행사 상세 사진 묶음형 A `1769266`

## 13. 문서 관리 규칙
- 이 문서가 현재 상태의 단일 기준이다. 작업이 끝날 때마다 1장(한눈에 보기)·2-1(지금 할 일)·4장(진행 기록)을 먼저 갱신한다
- 결정이 확정되면 5장에 옮기고, 끝난 할 일은 4장 표로 옮긴다
- 사용자 취향·기준처럼 대화 밖에서도 유지할 내용은 Claude 메모리에도 저장되어 있다(디자인 취향, 기술 스택 결정 기준, 디자인 방향)
