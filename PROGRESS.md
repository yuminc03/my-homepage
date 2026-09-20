# 진행 상황
- 최종 업데이트: 2026-09-20
- 이 문서 하나만 읽으면 새 채팅에서 바로 이어서 작업할 수 있도록 정리한 단일 기준 문서다
- **마지막 세션 종료(2026-09-20)**: **세미나 목록·행사 상세를 구현했다**(브랜치 `feature/seminar-pages`). 미정이던 결정 3건(세션 라벨 표기 · 표지 사진 폭 · 라이트박스)을 사용자가 **확정**했고 근거는 5-16에 있다. 홈 최근 기록 카드·위젯 링크도 상세로 바꿔 남은 항목을 함께 끝냈다. 스크린샷(5폭 라이트/다크)·정렬·링크·Dock 검사까지 통과했고 **커밋 8개**(목록은 12장)를 `feature/seminar-pages`에 남겼다. **사용자 브라우저 확인도 통과했다(2026-09-20). 아직 `develop`에 병합하지 않았으므로 다음 할 일은 병합 → 브랜치 삭제 → push다.** **새 채팅은 2-1의 1(상태 확인)** 부터 시작한다

## 1. 한눈에 보기
- **무엇을 만드나**: iOS 개발자 Chu Yumin의 개인 홈페이지(자기소개·프로젝트·스터디 기록·세미나 기록)
- **지금 단계**: 디자인 시안 완료, 기술 스택 확정(Astro + 일반 CSS), **Astro 프로젝트 생성**(임시 홈 1장, 빌드 확인), **전역 토큰 CSS 이식**(`src/styles/tokens.css`), **콘텐츠 컬렉션 스키마**(프로젝트·스터디·세미나, MDX) , **공통 셸**(테마 버튼·메뉴바·Dock 자동 숨김·창·시계, 목록 틀 3개), **홈 페이지**(첫 화면·iPhone 목업·최근 기록), **프로젝트 목록·상세**(필터 칩·카드·상세 페이지) — 여기까지 `develop` 병합·원격 push 완료. **스터디 목록·글**(카드·필터·글 페이지·목차·코드 블록·읽는 시간)까지 `develop` 병합·push 완료(2026-09-20, 병합 `4351c43`, 결정은 5-15). **세미나 목록·행사 상세**(타임라인·가로/세로 카드·표지 사진·사진 컴포넌트 3종·홈 최근 기록 링크)는 `feature/seminar-pages`에 커밋·사용자 브라우저 확인까지 끝냈고 **병합만 남았다**(결정은 5-16)
- **시안 진행도**
  - 데스크톱 7화면(홈·목록 3·상세 3) — 완료
  - 모바일 7화면(홈 화면 메타포) — 완료
  - 태블릿 7화면(모바일 확장형) — 완료
  - 모션 설계(토큰 보드 + 데스크톱·모바일 클릭 프로토타입) — 완료, `develop` 병합
  - 데스크톱 창 ✕ 닫기 버튼 — 채택(2026-09-14), 데스크톱 창 화면 6장에 반영, `develop` 병합
- **기술 스택**: Astro + 일반 CSS + TypeScript + Markdown Content Collections 확정(2026-09-14). 비교·약점·면접 질문은 `docs/tech-stack.md`
- **시안 캔버스**: https://claude.ai/code/artifact/48a3c34c-b882-4f13-8e2f-7e3668bdb7b1 (v22, 페이지 5개 · 아트보드 25장)
- **Git**: 시안·기술 스택 문서·`.claude/settings.json`(`92083d0`)이 `develop`에 반영되어 있다. `feature/astro-setup`(커밋 4개)을 `develop`에 병합 `004589b` → 브랜치 삭제(2026-09-14). `feature/site-shell`(테마 버튼 `872ec4b`, 공통 셸 `20d40c8`, Dock 자동 숨김 `e8eea35`, 시계 `88e86ca`, 문서 `cfe9270`)을 `develop`에 병합 `0227fa3` → 브랜치 삭제(2026-09-15). `feature/home-page`(첫 화면 `9907ebe`, iPhone 목업 `6da0b04`, 문서 `f6741d5`, 최근 기록 `062e860`, 문서 `1f8cbb8`)를 `develop`에 병합 `8c7568f` → 브랜치 삭제 → push(2026-09-16), 뒤이어 문서 `a725134` push. `feature/project-pages`(기능 12 + 문서 3, 커밋 목록은 12장)를 `develop`에 병합 `53f528e` → 로컬·원격 브랜치 삭제 → push(2026-09-18). `feature/study-pages`(기능 9 + 문서 2, 커밋 목록은 12장)를 `develop`에 병합 `4351c43` → 브랜치 삭제 → push(2026-09-20). `feature/seminar-pages`(기능 7 + 문서 1, 커밋 목록은 12장, 2026-09-20)는 **커밋만 있고 아직 병합하지 않았다**. **원격**: `origin/develop` = 로컬 `develop`과 같음(2026-09-20 push), `origin/master` = `8bf0e7b`(로컬 `master`와 같음, 아직 건드리지 않았다). `develop` → `master` 병합은 아직 하지 않았다
- **다음 단계**: 홈 완료 → 프로젝트 목록·상세 완료(병합·push 완료) → 스터디 목록·글 완료(병합 `4351c43`, 5-15) → 세미나 목록·행사 상세 완료(커밋 완료, 5-16) + 홈 최근 기록 링크를 상세로(함께 끝냄) → **세미나 `develop` 병합·push** → 페이지 전환 모션(계획 2-6) → 콘텐츠 검색 → placeholder 정리 → 배포 → **마지막: 개발 과정 설명 세션**(2026-09-17 요청). 화면마다 `develop`에서 `feature/*` 브랜치를 새로 만든다

## 2. 새 채팅에서 이어서 시작하기
### 2-1. 지금 바로 할 일
1. `git status`로 브랜치와 작업 트리를 확인한다
   - 기대 상태: **`feature/seminar-pages` 브랜치**, 마지막 커밋은 문서(`docs:`) 커밋이다. 작업 트리 깨끗, 원격에는 올리지 않았다
   - `develop`에는 아직 병합하지 않았다. 원격: `origin/develop` = 병합 `4351c43`까지, `origin/master` = `8bf0e7b`
2. Node는 **nvm의 24**를 쓴다. 셸 기본값이 21.7.3이라 명령 전에 `source ~/.nvm/nvm.sh && nvm use`(`.nvmrc` = 24)를 먼저 실행한다. 검증 방법은 2-2
3. **다음 작업은 `feature/seminar-pages`를 `develop`에 병합하는 것이다**(사용자 브라우저 확인은 2026-09-20에 통과). `git switch develop` → `git merge --no-ff feature/seminar-pages` → 브랜치 삭제 → `git push origin develop`(사용자 확인 뒤). 병합 메시지는 `-m`을 문단마다 여러 번 쓴다(2-2)
4. 그 뒤 순서: **페이지 전환 모션**(계획 2-6) → 콘텐츠 검색(5-12) → 대괄호 `[ ]` placeholder 실제 콘텐츠 정리 → GitHub Actions 배포 → **마지막 단계: 개발 과정 설명 세션**(2026-09-17 사용자 요청). 화면마다 `develop`에서 `feature/*` 새 브랜치
   - 마지막 단계 내용: 사이트가 완성되면 사용자에게 개발 과정 전체를 설명한다. 쓰인 문법(Astro 컴포넌트·프런트매터·스코프 스타일·`light-dark()`·Content Collections·TypeScript 등), 핵심 기능별 구현 원리(테마·Dock 자동 숨김·필터·콘텐츠 헬퍼 등), 면접에서 나올 만한 질문과 답을 다룬다. 기술 선택 근거는 `docs/tech-stack.md`와 연결한다. 구현하면서 설명할 거리(원리·대안·트레이드오프)는 5장 결정 기록에 계속 남긴다

### 2-2. 검증 방법 (다시 쓰는 요령)
- **빌드**: `npm run build`(결과 `dist/`). `npx astro check`는 `@astrojs/check`가 없어 설치 질문에서 멈추므로 쓰지 않는다(쓰려면 사용자 확인 후 설치)
- **스크린샷**(headless Chrome, 서버 없이)
  - `dist/*.html` 사본에서 `"/my-homepage/`를 `"file://<저장소>/dist/`로 바꾸고(이미지 `srcset`의 ` /my-homepage/_astro/`도) `--allow-file-access-from-files`로 연다. 테마는 사본 `<html>`에 `data-theme="dark|light"`
  - Chrome은 저장 후 종료되지 않는다 → 파일이 생기면 `pkill -f "user-data-dir=<폴더>"`. 동시에 여러 장 찍을 때는 `--user-data-dir`을 각각 다르게
  - **모바일·태블릿 폭은 `--window-size=390,...`로 찍지 않는다**(창 최소 폭 때문에 넓게 그려짐). 320·390·768px `<iframe>`을 나란히 넣은 하네스 HTML을 넓은 창으로 찍는다. iframe 높이가 짧으면 고정 Dock이 내용 위에 겹쳐 보이는데 정상이다
  - 데스크톱은 1440(시안)·1180(최소 폭) 두 폭을 본다
- **화면 아래쪽(첫 화면 밖) 찍기**: virtual time에서는 스크롤한 뒤 화면이 제대로 그려지지 않아 `#recent` 같은 아래쪽 내용을 스크롤해 찍을 수 없다 → 사본에 `<style>.scene{display:none!important}</style>`를 넣어 아래 블록을 화면 맨 위에서 본다(`!important`가 없으면 Astro 스코프 스타일(`[data-astro-cid-*]`)이 더 강해 먹히지 않는다). 폭·여백은 감싼 칸이 정하므로 배치는 그대로다
- **동작 검사**(`--dump-dom --virtual-time-budget=<ms>`): 사본에 검사 스크립트를 넣고 결과를 `<pre id="log">`에 써서 DOM으로 읽는다. `--dump-dom`도 Chrome이 스스로 끝나지 않을 때가 있으니 결과를 파일로 받고 일정 시간 뒤 종료시킨다(스크린샷과 같은 방식). virtual time에서는 화면을 그리지 않아 **`scroll` 이벤트와 `requestAnimationFrame`이 오지 않는다** → `<head>` 맨 앞에서 rAF를 `setTimeout(16ms)`으로 바꾸고 `scrollTo()` 뒤 `scroll` 이벤트를 직접 보낸다. 마우스는 `new PointerEvent('pointermove', { pointerType: 'mouse', clientY })`, 시각은 `Date`를 감싼 가짜 클래스
- **`astro preview`** 는 백그라운드로 분리되는 단일 서버다. 쓰면 반드시 `npx astro preview stop`으로 끈다(`pkill`로 안 잡힘)
- **git**: `git commit -F -`(heredoc)는 되지만 `git merge -F -`는 `could not read file '-'`로 실패한다 → 병합 메시지는 `-m`을 문단마다 여러 번
- **채워진 상태 확인(2026-09-17 방식)**: 예시 글의 `draft`를 `false`로 바꾸고, 예시 폴더를 `tmp-a`·`tmp-b`처럼 복사해 `sed`로 제목·분류·날짜·링크·스크린샷 유무를 바꿔 여러 경우를 만든다. 빌드 결과 HTML을 파이썬 정규식으로 읽어 순서·링크를 확인하고 스크린샷을 찍은 뒤, `tmp-*` 폴더를 지우고 `draft: true`로 되돌린다(`git status`로 콘텐츠 폴더 변경이 없는지 확인)
- **긴 상세 페이지 스크린샷**: 데스크톱은 `--window-size=1440,3700`처럼 세로로 길게, 모바일·태블릿은 iframe 높이 3900px 하네스로 찍고 `sips -Z 2000`으로 줄여서 본다
- **Dock 동작 검사(상세)**: 사본 `<head>` 맨 앞에서 rAF를 `setTimeout(16ms)`으로 바꾸고 `</body>` 앞에 높이 4000px 빈 칸 + 검사 스크립트를 넣는다. `scrollTo(0, y)` 뒤 `scroll` 이벤트를 직접 보내 `data-state`를 확인(상세: 시작 hidden → y 30에서도 hidden → 위로 올리면 shown / 목록: 시작 shown)
- **Markdown 처리 방식을 바꿨다면 `node_modules/.astro`를 지우고 빌드한다**(2026-09-19). 콘텐츠 컬렉션의 렌더 결과가 캐시되어, `shikiConfig`·transformer를 고쳐도 글이 바뀌지 않으면 예전 HTML이 그대로 나온다. 페이지(`src/pages/*.md`)는 캐시를 타지 않아 증상이 헷갈린다
- **`astro preview`(localhost)로 확인하기**(2026-09-19, 클립보드·실제 주소가 필요할 때)
  - `navigator.clipboard`는 보안 컨텍스트에서만 있다 → `file://`에서는 복사 버튼을 확인할 수 없고 `http://localhost`에서는 된다
  - 테마는 `dist/`에 임시 페이지를 만들어 `localStorage.setItem('theme', …)`을 먼저 실행하게 한다(`dist/`는 git에 없어 지우면 그만이다)
  - 좁은 폭은 여전히 `--window-size=390`으로 찍지 않는다(창 최소 폭). `dist/`에 `<script>localStorage…</script><iframe src="/my-homepage/…" width="390" height="…">`만 있는 하네스를 만들고 `--window-size=410,…`으로 찍는다. 스크린샷·DOM 검사 스크립트는 scratchpad의 `shot.py`·`dump.py`로 만들어 썼다(세션이 끝나면 사라진다)
  - 끝나면 `npx astro preview stop`, `dist/tmp-*` 삭제
- **커밋 나누기**: 작업을 한꺼번에 한 뒤 나눌 때는 최종 파일을 scratchpad에 복사해 두고 작업 트리를 되돌린 다음, 커밋 단위마다 파일을 다시 복사(한 파일에 두 변경이 섞였으면 중간 상태를 스크립트로 만든다) → 빌드 → 커밋. 끝나면 `cmp`로 최종 파일과 같은지 확인

### 2-3. 최근 세션에서 끝낸 일 (요약, 자세한 결정은 5장)
- 세미나 목록·행사 상세(`feature/seminar-pages`, 2026-09-20, 결정은 **5-16**, 커밋 8개 목록은 12장)
  - 창 여백을 `Window`가 `--win-pad`로 내보내게 바꾸고 `ScreenshotBand`가 그 값을 쓴다(창 폭 끝까지 넓히는 요소가 수치를 복제하지 않게)
  - 헬퍼: `seminarHref()`
  - 사진 MDX 컴포넌트 3종: `Photo`(한 장, 원본 비율) · `PhotoPair`(2장 나란히, 4:3) · `PhotoSide`(사진 옆 글, 모바일은 위아래)
  - 목록 `SeminarCard`: DOM 한 벌로 모바일 세로 카드 / 태블릿 가로 카드 / 데스크톱 타임라인. 데스크톱은 글 묶음을 `display: contents`로 풀어 날짜만 왼쪽 칸에 보내고, 세로선은 오른쪽 칸 세 줄의 `border-left`를 이어 만든다
  - 상세 `seminars/[slug].astro` + `SeminarCover`(읽기 폭보다 넓은 유일한 요소), 본문 세션 머리는 `## 라벨` + `### 제목` 한 쌍을 `:has()`로 구분
  - 홈 최근 기록(창·위젯) 링크를 목록 → **상세**로 바꿔 남은 항목을 함께 끝냈다(빈 상태만 목록으로 간다)
  - 확인: 임시 행사 3건으로 정렬·링크·Pager·Dock 시작 상태·5폭 라이트/다크 스크린샷 통과. `ScreenshotBand`(프로젝트 상세)도 여백 상쇄가 그대로인지 다시 확인
- 스터디 목록·글(`feature/study-pages` → `develop` 병합 `4351c43`, 2026-09-19~20, 결정은 **5-15**, 커밋 11개 목록은 12장)
  - 헬퍼: `readingTime.ts`(공백 뺀 글자 ÷ 500, 최소 1분) · `studyHref()`
  - 본문 스타일 공용화: `styles/prose.css`(+ `code-block.css`)로 빼고 `.prose-body`로 한정. 프로젝트 상세의 **문단 간격 버그**(같은 명시도의 `margin: 0`에 덮임)를 함께 고침
  - 코드 블록: `markdown.shikiConfig`의 **Shiki transformer**(`lib/codeBlock.ts`)로 파일 이름 머리줄·복사 버튼을 붙이고, 줄 번호는 CSS 카운터 + sticky. 색은 시안 팔레트로 만든 테마
  - 복사 버튼은 실제 동작(`CodeCopy.astro`, 클립보드를 쓸 수 있을 때만 `hidden` 해제). 스터디 글·프로젝트 상세가 함께 쓴다
  - 목차 `Toc.astro`: DOM 한 벌로 모바일·태블릿 접힘 상자 / 데스크톱 sticky 레일, 현재 항목은 스크롤할 때 위치를 다시 재서 표시
  - 화면: `StudyCard`(1열 행 카드) · 목록(칩 가나다 순·빈 상태) · 글(`[...slug]`, 머리·본문·목차·Pager·Dock 숨김 시작)
  - 뒤로 링크 필터 기억: 상세의 ‹ 링크가 직전 목록 필터로 돌아간다(사용자 확인 중 발견, 스터디·프로젝트 공통)
  - 확인: 임시 글 4개로 정렬·필터·복사·목차·코드 스크롤·Dock·5폭 라이트/다크까지 통과(결과는 5-15 끝). **사용자 브라우저 확인 통과(2026-09-20)** — 지적 1건(‹ 링크 필터)만 나와 고쳤다. 임시 글은 지우고 `sample-post`는 `draft: true`로 복구
- 프로젝트 목록·상세(`feature/project-pages`, 2026-09-17, 결정은 5-14, 커밋 목록은 12장)
  - 목록: `getProjects()`(진행 중 먼저 → 시작일 최신 순) · `FilterChips`(작은 스크립트, `?category=`) · `ProjectCard`(그라디언트 바탕 + iPhone 목업 + 앱 아이콘) · 카드가 상세로 연결
  - 상세: `projects/[slug].astro` + `Window` `back` · `Dock` `startHidden` · `TagList` · `Pager` · `ScreenshotBand` · `ProjectFeatures` · `ProjectArticle`(`lib/sections.ts`로 본문을 섹션·카드로 묶고 소개 뒤에 주요 기능 삽입)
  - 검증: 빌드(각 커밋 직전마다), 임시 글로 정렬·필터 동작 6항목·분류 1개일 때 칩 생략·빈 상태, 목록·상세 스크린샷 5폭 라이트/다크, Dock 숨김 시작 검사 12항목 모두 통과. 스크린샷에서 찾은 문제(320px 링크 버튼 넘침, 다크 코드 블록 경계) 수정
  - 사용자 요청으로 커밋을 **빌드되는 최소 단위**(컴포넌트마다 하나, 리팩터링 분리)로 다시 나눔. 사이트 완성 뒤 마지막 단계로 **개발 과정 설명 세션**을 하기로 함(2-1의 5)
  - **사용자 브라우저 확인 통과(2026-09-18)**: 임시 데이터 5건(진행 중 2·완료 3, 분류 iOS/Web/Side Project, 링크 2개·1개·없음, 스크린샷 있음·없음, 기능 3·2·1·0개)을 만들어 목록(필터 클릭·`?category=` 유지·뒤로 가기·hover·3+2 줄바꿈), 상세(링크 버튼 줄바꿈·스크린샷 띠 없는 경우·기능 0개인 경우·이전/다음·필터 유지), Dock 숨김 시작·불러내기, 테마 전환, 5폭을 모두 확인. **문제 없음**. 확인 뒤 임시 데이터는 삭제하고 `sample-project`는 `draft: true`로 복구
- 홈(`feature/home-page` → `develop` 병합 `8c7568f`, 2026-09-16, 결정은 5-13): 첫 화면 `9907ebe` · iPhone 목업 `6da0b04` · 최근 기록 `062e860`
- 공통 셸(`feature/site-shell` → `develop` 병합 `0227fa3`, 2026-09-15): 테마 버튼 · 메뉴바·Dock·창 · Dock 자동 숨김 · 시계
  - 실제 브라우저에서 아직 볼 것: Dock 트랙패드 스크롤 느낌·하단 hover·동작 줄이기
- 알려진 문제: 320px 폭에서 모바일 Dock(아이콘 5개)이 화면 폭과 거의 같다(작은 기기 대응은 나중에)

### 2-4. 세션 시작 체크리스트 (매번)
1. `git status`, `git branch --show-current`로 브랜치와 작업 트리 확인
2. (시안 파일을 고칠 때만) `/design` 스킬을 실행해 스킬 경로(`seed-canvas.mjs`, `payload.template.html`)와 scratchpad 경로를 확인한다. 둘 다 세션마다 바뀐다
3. 캔버스를 `Artifact` `read`(위 URL)로 읽고 `seed-canvas.mjs --extract <저장된 파일> --to <빈 폴더>`로 꺼내 `design/` 파일과 비교한다. 사용자가 캔버스 GUI에서 저장했을 수 있으므로 다르면 추출본을 기준으로 작업한다
4. 재조립에 필요한 목업 이미지 `iphone-16-pro.png`는 저장소의 `src/assets/iphone-16-pro.png`를 쓴다(2026-09-15 커밋, 캔버스 추출본과 같은 파일)

### 2-5. 작업 방식 규칙 (사용자·조직 규칙)
- 응답과 문서는 한국어. 영문 이름은 항상 `Chu Yumin`
- Git Flow: `develop`에서 `feature/*`(버그는 `bugfix/*`) 브랜치를 만들고, 끝나면 `develop`에 `--no-ff` 병합 후 브랜치 삭제
- 작업이 끝나면 Conventional Commits 메시지를 **제안만** 하고, 사용자가 확인한 뒤 커밋한다. 사용자 확인 없이 다음 작업으로 넘어가지 않는다
- 커밋은 최소 단위로 나누고 메시지에 변경 내용과 이유를 구체적으로 쓴다
  - **빌드되는 가장 작은 단위**(2026-09-17 사용자 재요청): 공용 컴포넌트는 하나씩, 동작을 바꾸지 않는 정리는 `refactor`로 따로, 페이지 → 링크 연결 순서(중간 커밋에 404 링크가 생기지 않게). 커밋 직전마다 `npm run build`
  - 한 단계에서 커밋 여러 개가 나오면 목록을 한꺼번에 제안하고, 사용자 확인 뒤 순서대로 커밋한다
- 작업이 끝나면 이 문서를 최신으로 갱신하고, 작업한 파일·영역을 구체적으로 설명한다
- 마크다운: 글머리 기호는 `-`, 헤더 바로 다음 줄에 본문(빈 줄 없음)
- 기술 스택을 정할 때는 선택 이유와 React·Next.js 등 대안 대비 장단점, 예상 면접 질문까지 정리한다

### 2-6. 다음 작업: 페이지 전환 모션 (2026-09-20 작성, 브랜치 `feature/page-transitions`)
세미나 화면이 병합된 뒤에 시작한다. 모션 값은 **5-9**가 기준이고, 시안 프로토타입은 `design/MotionDesktop.dc.html`·`MotionMobile.dc.html`이다.

#### 무엇을 하나
- Astro의 View Transitions(`astro:transitions`의 `ClientRouter`)를 `BaseLayout`의 `<head>`에 넣어 페이지 이동을 화면 전환으로 바꾼다
- 메뉴바·Dock은 `transition:persist`로 유지해 전환 중에 깜빡이지 않게 한다
- 전환 모양: 목록 → 상세는 **오른쪽에서 들어오기**(상세 `translateX(100%)→0`, 목록 `translateX(-24%)` + opacity .4, `--dur-push` 360ms), 상세 → 목록은 반대로 `--dur-pop` 300ms. 모바일·태블릿 창 시트는 아래에서 올라온다(`--dur-sheet` 420ms, `--ease-sheet`)
- `prefers-reduced-motion`이면 이동 없이 짧은 페이드(`--dur-fast`)

#### 반드시 다시 실행해야 하는 스크립트 (전환하면 `<script>`가 다시 돌지 않는다)
- `Dock.astro`: `transition:persist`로 살아남으므로 다시 붙일 필요는 없지만 **스크롤 기준값(`lastY`)을 `astro:page-load`에서 초기화**해야 한다(5-3 마지막 줄). 상세로 가면 `startHidden`이라 초기 상태도 다시 정해야 한다
- `FilterChips.astro`(칩 동작·`?category=` 복원), `Toc.astro`(토글·현재 항목), `Window.astro`(‹ 뒤로 링크에 분류 붙이기), `CodeCopy.astro`(복사 버튼 `hidden` 풀기), `MenuClock.astro`(시계 타이머), `ThemeToggle.astro`(문서 위임 클릭이라 한 번만 붙이면 되는지 확인)
- 방법: 각 스크립트를 함수로 감싸고 `astro:page-load`에서 부른다(중복 등록을 막으려면 `document.addEventListener('astro:page-load', …)`를 모듈 최상위에서 한 번만 건다)

#### 확인할 것
- 전환 중 메뉴바·Dock이 유지되는지, Dock 자동 숨김이 새 페이지에서 다시 맞게 동작하는지
- 목록 → 상세 → 브라우저 뒤로 가기에서 필터(`?category=`)가 유지되는지
- 스크립트가 두 번 붙어 이벤트가 중복 실행되지 않는지(복사 버튼·목차 토글로 확인)
- `prefers-reduced-motion`에서 이동이 사라지는지
- 5폭 라이트/다크에서 전환 직후 화면이 깨지지 않는지

#### 커밋 순서 (빌드되는 가장 작은 단위, 2-5)
1. `ClientRouter` 도입 + 메뉴바·Dock `transition:persist`
2. 스크립트를 `astro:page-load`에서 다시 실행하도록 정리(컴포넌트마다 나눌 수 있으면 나눈다)
3. 전환 모션(목록 ↔ 상세 · 시트) 정의
4. 동작 줄이기 대응
- 각 커밋 **직전마다** `npm run build`

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
| 메뉴바 시계 | 데스크톱 메뉴바 테마 버튼 오른쪽에 현재 시각 `HH:MM`, 분 경계마다 갱신 | `feature/site-shell` | 분 경계 검사 통과, 사용자 확인 후 커밋 `88e86ca`(2026-09-15) |
| 공통 셸 병합 | 테마 버튼·공통 셸·Dock 자동 숨김·시계·문서 커밋 5개 | `feature/site-shell` | `develop` 병합 `0227fa3` → 브랜치 삭제 → `origin/develop` 첫 push(2026-09-15) |
| 홈 첫 화면 | 자기소개 데이터, 창 점·홈 창/위젯·코드 에디터 컴포넌트, 데스크톱 바로가기·About·코드 창 / 모바일·태블릿 위젯·앱 아이콘 | `feature/home-page` | 스크린샷 5폭 확인, 사용자 확인 후 커밋 `9907ebe`(2026-09-15) |
| 홈 iPhone 목업 | 목업 이미지 저장소 추가(`astro:assets` WebP), `PhoneMockup` 컴포넌트, 데스크톱 코드 창 오른쪽 아래에 가짜 앱 화면 목업 | `feature/home-page` | 스크린샷 확인, 사용자 확인 후 커밋 `6da0b04`(2026-09-15) |
| 홈 최근 기록 | 콘텐츠 헬퍼(`draft` 제외·최신 순)·날짜 형식, 데스크톱 최근 기록 창(스터디·세미나 3개씩)·스크롤 힌트, 모바일·태블릿 최근 위젯 2개, 태블릿 코드 \| 위젯 2단 | `feature/home-page` | 빌드·스크린샷 5폭·동작 검사 통과, 사용자 확인 후 커밋 `062e860` + 문서 `1f8cbb8`(2026-09-16) |
| 홈 병합 | 홈 커밋 5개(첫 화면·목업·최근 기록·문서 2) | `feature/home-page` | `develop` 병합 `8c7568f` → 브랜치 삭제 → `origin/develop` push(2026-09-16, 사용자 요청) |
| 프로젝트 헬퍼 | `getProjects()`: draft 제외, 진행 중 먼저 → 시작일 최신 순 | `feature/project-pages` | 커밋 `5c0c5f4`(2026-09-17) |
| 마지막 단계 추가 | 사이트 완성 뒤 개발 과정 설명 세션을 계획에 추가 | `feature/project-pages` | 문서 커밋 `119243c`(2026-09-17) |
| 프로젝트 목록 | `FilterChips`·`ProjectCard`·목록 페이지 1/2/3열·빈 상태, 전역 `[hidden]` 규칙 | `feature/project-pages` | 동작 검사 6항목·스크린샷 5폭 통과, 커밋 `aa35332`(2026-09-17) |
| 프로젝트 상세 | 창 ‹ 링크 · Dock 숨김 시작 · TagList·목업 스타일 정리 · Pager·ScreenshotBand·ProjectFeatures·ProjectArticle · 상세 페이지 · 카드 연결 | `feature/project-pages` | 스크린샷 5폭·Dock 검사 12항목 통과, 빌드 최소 단위 커밋 10개 `b855458`…`a83696f`(2026-09-17) |
| 프로젝트 push | 문서 갱신 후 기능 브랜치 원격 push | `feature/project-pages` | `origin/feature/project-pages`(2026-09-17, 사용자 요청) |
| 프로젝트 브라우저 확인 | 임시 데이터 5건으로 목록·상세·Dock·테마·5폭 확인, 미확정 결정 2건 확정 | `feature/project-pages` | 문제 없음, 문서 커밋 `8ffb68c`(2026-09-18) |
| 프로젝트 병합 | 기능 12 + 문서 3 커밋 | `feature/project-pages` | `develop` 병합 `53f528e` → 로컬·원격 브랜치 삭제 → push(2026-09-18, 사용자 요청) |
| 스터디 계획 정리 | 병합 결과 반영, 2-6에 시안 수치·재사용·결정할 것·커밋 순서 정리 | `develop` 직접 | 문서 커밋 `e32bb16`(2026-09-18) |
| 스터디 헬퍼 | 읽는 시간 계산(`readingTime.ts`)과 글 주소 `studyHref()` | `feature/study-pages` | 값 검사 통과(2026-09-19) |
| 문단 간격 버그 | 프로젝트 상세 문단 사이 1em이 같은 명시도의 `margin: 0`에 덮이던 문제 수정 | `feature/study-pages` | 계산값 17px 확인(2026-09-19) |
| 본문 스타일 공용화 | `styles/prose.css`(+`code-block.css`)로 분리, `.prose-body`로 한정, `--prose-gap` | `feature/study-pages` | 계산값 비교로 변화 없음 확인(2026-09-19) |
| 코드 블록 | Shiki transformer(파일 이름 머리줄·복사 버튼)·CSS 줄 번호·시안 색 테마·`CodeCopy` | `feature/study-pages` | 복사·sticky·가로 스크롤 검사 통과(2026-09-19) |
| 목차 | `Toc.astro`(모바일 접힘 상자 / 데스크톱 sticky 레일, 현재 항목 표시) | `feature/study-pages` | 토글·현재 항목 검사 통과(2026-09-20) |
| 스터디 목록 | `StudyCard`(1열 행 카드) + 목록 페이지(칩 가나다 순·빈 상태) | `feature/study-pages` | 정렬·필터 검사, 5폭 스크린샷(2026-09-20) |
| 스터디 글 | `[...slug]` 글 페이지(머리·본문·목차·Pager·Dock 숨김 시작) + 목록 연결 | `feature/study-pages` | 5폭 라이트/다크 스크린샷·Dock 검사(2026-09-20) |
| 뒤로 링크 필터 | 상세의 ‹ 링크가 직전 목록 필터로 돌아가게(세션 저장, 스터디·프로젝트 공통) | `feature/study-pages` | 사용자 확인 중 발견, 두 화면 검사 통과(2026-09-20) |
| 스터디 병합 | 기능 8 + 문서 2 + 뒤로 링크 1 = 커밋 11개 | `feature/study-pages` | `develop` 병합 `4351c43` → 브랜치 삭제 → push(2026-09-20) |
| 창 여백 토큰 | 창 본문 좌우 여백을 `Window`가 `--win-pad`로 내보내고 `ScreenshotBand`가 사용 | `feature/seminar-pages` | 프로젝트 상세 띠가 그대로인지 스크린샷 확인(2026-09-20) |
| 세미나 헬퍼 | 행사 주소 `seminarHref()` | `feature/seminar-pages` | 빌드 확인(2026-09-20) |
| 사진 컴포넌트 | `Photo`·`PhotoPair`·`PhotoSide`(MDX에서 쓰는 사진 배치 3종) | `feature/seminar-pages` | 상세 화면에서 3종 모두 렌더링 확인(2026-09-20) |
| 세미나 목록 | `SeminarCard`(모바일 세로 카드 / 태블릿 가로 카드 / 데스크톱 타임라인) + 목록 페이지·빈 상태 | `feature/seminar-pages` | 정렬·5폭 라이트/다크 스크린샷(2026-09-20) |
| 행사 상세 | `SeminarCover` + `[slug]` 페이지(머리·표지·세션 본문·Pager·Dock 숨김 시작), 목록 연결 | `feature/seminar-pages` | 5폭 스크린샷·Pager·Dock 검사(2026-09-20) |
| 홈 최근 기록 링크 | 최근 기록 창·위젯 카드를 목록 → 상세로(빈 상태만 목록) | `feature/seminar-pages` | 빌드 HTML에서 링크 확인(2026-09-20) |

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
- [x] 데스크톱 메뉴바 시계 커밋 `88e86ca` (2026-09-15, 사용자 확인)
- [x] `feature/site-shell` → `develop` 병합 `0227fa3` → 브랜치 삭제 → `develop` 원격 push (2026-09-15, 사용자 요청)
- [x] **홈 화면 구현**(데스크톱: 바로가기·About me·코드 에디터 창·iPhone 목업·스크롤 힌트·최근 기록 창 / 모바일·태블릿: 위젯·앱 아이콘 4개·최근 기록 위젯) — 첫 화면 `9907ebe` · iPhone 목업 `6da0b04` · 최근 기록 `062e860`(2026-09-16)
- [x] `feature/home-page` → `develop` 병합 `8c7568f` → 브랜치 삭제 → push (2026-09-16, 사용자 요청)
- [x] **프로젝트 목록·상세 구현**(`feature/project-pages`, 2026-09-17, 원격 push)
- [x] 프로젝트 목록·상세 브라우저 확인(2026-09-18, 문제 없음) — 미확정 결정 2건 확정(5-14)
- [x] `feature/project-pages` → `develop` 병합 `53f528e` → 로컬·원격 브랜치 삭제 → push (2026-09-18, 사용자 요청)
- [x] **스터디 목록·글 구현**(`feature/study-pages`, 2026-09-19~20, 결정은 5-15, 커밋 11개)
- [x] 스터디 목록·글 사용자 브라우저 확인(2026-09-20) — ‹ 링크 필터 문제 1건 발견·수정
- [x] `feature/study-pages` → `develop` 병합 `4351c43` → 브랜치 삭제 → push (2026-09-20, 사용자 요청)
- [x] **세미나 목록·행사 상세 구현**(`feature/seminar-pages`, 2026-09-20, 결정은 5-16, 커밋 8개)
- [x] 홈 최근 기록의 카드·위젯 링크를 목록에서 **상세로** 바꿈(빈 상태만 목록으로 간다, 2026-09-20)
- [x] 세미나 목록·행사 상세 사용자 브라우저 확인(2026-09-20, 임시 행사 3건으로 확인, 문제 없음)
- [ ] `feature/seminar-pages` → `develop` 병합 → 브랜치 삭제 → push ← 다음 할 일(사용자 확인 뒤)
- [ ] 실기기 확인(배포 직전에 묶어서): Dock 트랙패드 스크롤 느낌·하단 hover·"동작 줄이기" / 320px 폭에서 모바일 Dock이 화면 폭과 거의 같은 문제
- [ ] 페이지 전환 모션(View Transitions `ClientRouter`, `transition:persist`로 메뉴바·Dock 유지) — 계획은 **2-6**, 세미나 병합 뒤에 시작
- [ ] 콘텐츠 검색 기능 — 목록·상세 페이지 구현 뒤 별도 브랜치(방식은 5-12 추천안을 사용자와 확정)
- [x] `draft` 제외 헬퍼·목록 정렬(날짜 내림차순)·날짜 표기 — `src/lib/content.ts`·`src/lib/date.ts`(2026-09-16, 홈 최근 기록과 함께). 목록 페이지도 이 헬퍼만 쓴다
- [x] 스터디 글 코드 블록 결정: 복사 버튼은 실제 동작, 파일 이름은 울타리 meta + Shiki transformer (2026-09-19, 5-15)
- [x] 스터디 읽는 시간 계산·목차 (2026-09-19~20, 5-15)
- [x] 세미나 MDX 컴포넌트 `Photo`·`PhotoPair`·`PhotoSide`(상세 페이지가 `<Content components={{ ... }} />`로 넘김) (2026-09-20, 5-16)
- [x] 본문(Markdown) 스타일 공용화: `src/styles/prose.css`로 분리 (2026-09-19, 5-15)
- [ ] 실제 글을 쓰면 예시 글 3개(`sample-*`)와 임시 이미지 삭제
- [ ] GitHub Actions로 GitHub Pages 자동 배포 설정(원격 push가 필요하므로 사용자 확인 후)
- [ ] 대괄호 `[ ]` placeholder를 실제 내용으로 교체 — 프로젝트 이름·소개·태그, 포스트 제목·요약·날짜, 세미나 이름·장소·소감, 연락처 링크(GitHub/Email/LinkedIn)
- [ ] `develop` → `master` 병합·원격 push (사용자 확인 후)
- [ ] **마지막 단계: 개발 과정 설명 세션** — 사이트 완성 뒤 문법·핵심 기능·면접 예상 질문을 사용자에게 설명(2026-09-17 요청, 2-1의 5)
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
- 사이트용 사본은 **`src/assets/iphone-16-pro.png`로 저장소에 커밋**한다(2026-09-15 사용자 허용, 5-13). 원본과 같은 파일(md5 `cc0f7186…`)이며 빌드 때 WebP로 최적화된다. 컴포넌트는 `src/components/PhoneMockup.astro`

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

### 5-13. 홈 구현 (2026-09-15 결정)
- 페이지 구현 순서: **홈 → 프로젝트 목록·상세 → 스터디 목록·글 → 세미나 목록·행사 상세**(사용자 선택). 홈은 커밋 3개: 첫 화면 → iPhone 목업 → 최근 기록
- 연락처: **GitHub(`https://github.com/yuminc03`)·Email(`mailto:yuminc03@gmail.com`)만**. LinkedIn은 주소가 생기면 `src/data/profile.ts`에 추가(사용자 선택)
- iPhone 목업 PNG: **저장소에 커밋해 사용**(사용자 선택, 사용 조건은 5-8)
- 최근 기록이 없을 때: 창·위젯 틀은 두고 **빈 상태 문구 + 목록 링크**(사용자 선택). 글이 생기면 자동으로 채워진다
- 코드 에디터 탭: **`ProfileView.swift` 하나만**(시안의 `AppRouter.swift` 탭은 동작이 없어 제거, 사용자 선택)
- 모바일·태블릿 앱 아이콘은 홈을 빼고 프로젝트·스터디 기록·세미나 기록·연락처(시안). 데스크톱 바로가기는 홈 포함 4개
- 구현 방식
  - 자기소개 문구·기술·연락처는 `src/data/profile.ts` 한 곳. 인사말은 `['안녕하세요,', 'iOS 개발자', 'Chu Yumin입니다.']`로 나눠 폭이 아주 좁으면 이름 앞에서만 줄을 바꾼다
  - 창 점은 `WindowDots`(크기 `--dot-size`·간격 `--dot-gap`, `tone` window/code) 하나를 `Window`·`HomePanel`이 함께 쓴다
  - 홈 창/위젯은 `HomePanel`(`tone` window/code). 데스크톱은 타이틀 바 44px·✕ 없음, 모바일·태블릿은 위젯(window 톤은 창 점·제목이 본문 위 한 줄, code 톤은 얇은 바)
  - **Astro는 부모의 스코프 스타일이 자식 컴포넌트 루트에 적용되지 않는다** → 폭·위치는 페이지가 감싼 `div`(`.about-slot`·`.code-slot`)에서 정한다
  - 데스크톱 배치: 시안의 1440px 절대 좌표 대신 그리드 `84px | 552fr | 620fr`(열 간격 40px), 무대 폭 `min(1328px, 100% - 64px)`, 코드 창 `margin-left: -72px`로 About 창을 32px 덮는다(`z-index` 3 > 2). 1180px까지 비율대로 줄어든다
  - 인사말 크기: `.about-slot`을 `container-type: inline-size`로 두고 `clamp(최소, calc((100cqi − 좌우 여백) / 13.4), 최대)`(모바일 19–24 · 태블릿 24–30 · 데스크톱 26–36px). 한국어는 `word-break: keep-all`
  - 코드 에디터: 줄 배열(토큰 `[종류, 글자]`)을 문자열 HTML로 만들어 `<pre>`에 `set:html`(템플릿 식은 공백이 합쳐질 수 있어서). `set:html` 안의 span에는 스코프 속성이 없어 색은 `:global(.kw)` 등으로 준다. 보이는 줄 수 모바일 8 · 태블릿 12 · 데스크톱 14(`max-height` = 줄 수 × 줄 높이), 파일 탭은 데스크톱만
  - `#contact`(About 연락처 줄)·`#code`(코드 창) 도착 시 1.6초 강조(`:target` 애니메이션)
  - 최근 기록(2026-09-16)
    - 콘텐츠는 `src/lib/content.ts`(`getStudyPosts()`·`getSeminars()`: `draft` 제외 + 최신 순)와 `src/lib/date.ts`(`formatDay` `YYYY.MM.DD` · `formatMonth` `YYYY.MM`)만 쓴다. 프런트매터 날짜는 **UTC 자정**으로 읽히므로 UTC 기준으로 꺼낸다(지역 시간대에 따라 하루 밀리는 것 방지)
    - 화면이 서로 달라 **컴포넌트를 둘로 나눴다**: 데스크톱 창 `RecentWindow`(스터디·세미나 3개씩, `HomePanel` 재사용) / 모바일·태블릿 위젯 `RecentWidgets`(각 1개). 페이지가 감싼 칸(`.recent-slot`·`.widgets-slot`)에서 폭·위치·표시 여부를 정한다(바로가기 `nav`와 앱 아이콘 `nav`를 폭으로 바꿔 끼우는 기존 방식과 같다)
    - 카드·위젯 전체가 링크다. 상세 페이지가 없어 목록(`/study/`·`/seminars/`)으로 보내고, 상세를 만들면 상세로 바꾼다
    - 빈 상태: 창은 점선 상자 + 문구(목록 링크는 열 머리의 "전체 보기 →"), 위젯은 문구 + "전체 보기 →"(위젯 자체가 링크). 320px에서 줄이 접히지 않도록 짧은 문구를 쓴다
    - 태블릿 배치: `.scene`을 2열 그리드로 바꿔 About·앱 아이콘은 두 칸을 다 쓰고(`grid-column: 1 / -1`) 아랫줄만 코드 위젯 | 최근 위젯으로 나눈다. 데스크톱에서는 세 칸을 한 줄에 놓도록 `grid-row: 1` + 칸 번호를 다시 지정한다
    - 스크롤 힌트는 `#recent`로 가는 링크이고 `scrollcue` 2.2s 무한 애니메이션을 쓴다. `prefers-reduced-motion`이면 애니메이션만 끈다
  - iPhone 목업(2026-09-15): `PhoneMockup`은 프레임 이미지와 투명한 화면 영역만 맡고 화면 안 내용은 slot으로 받는다(프로젝트 상세에서 실제 스크린샷에 재사용). 폭은 `--phone-width`, 기울기·그림자·위치는 부모. 홈은 `.code-slot` 안에 `position: absolute; top: 278px; right: -14px; rotate(3deg)`로 코드 창 오른쪽 아래에 걸치고 데스크톱에서만 보인다. 이미지는 `src/assets`에 두어 `<Image width={225} densities={[1, 2]}>`로 WebP 225·450px를 만든다. 목업 전체가 장식이라 `aria-hidden`

### 5-14. 프로젝트 목록·상세 구현 (2026-09-17 결정)
- **정렬**: 진행 중(`endDate` 없음)을 위로, 그 안에서 `startDate` 최신 순(사용자 선택). `getProjects()`에서 `Number(!b.endDate) - Number(!a.endDate) || 시작일 차이`
- **필터 방식**: 작은 클라이언트 스크립트(사용자 선택). 대안이던 `?category=` 페이지 링크는 정적 배포에서 분류마다 페이지를 만들어야 하고, `:has()` + radio는 JS가 없지만 칩 접근성 처리가 번거로웠다
  - `FilterChips.astro`: `<button aria-pressed>` 칩(전체 + 글에 실제로 쓰인 분류만, `PROJECT_CATEGORIES` 순서). 분류가 하나뿐이면 칩을 그리지 않는다
  - 규약: 페이지가 칩과 항목을 `[data-filter]`로 감싸고 항목에 `data-filter-item` + `data-categories="iOS|Side Project"`(`|` 구분, 분류 이름에 공백이 있어서). 맞지 않는 항목은 `hidden`
  - 선택은 `history.replaceState`로 `?category=`에 남겨 새로고침·상세에서 돌아오기에도 유지(방문 기록은 쌓지 않음). 사용자가 누를 때만 `aria-live`로 "N개 표시"
  - 전역 `[hidden] { display: none !important; }`(`global.css`): `hidden`의 숨김은 브라우저 기본 스타일이라 컴포넌트의 `display: flex`에 진다
  - 스크립트 없이도 전체 목록은 보인다. View Transitions를 넣으면 이 스크립트는 `astro:page-load`에서 다시 실행해야 한다
- **목록 카드**(`ProjectCard.astro`): 썸네일 = 고정색 그라디언트(`tone` 0–3, 목록 순서로 돌아가며, 다크에서만 `--win-media-dim` 덮개) + 아래로 넘치는 `PhoneMockup`(첫 스크린샷 → 없으면 첫 기능 이미지 → 없으면 빈 화면) + 왼쪽 아래 앱 아이콘. 이름·소개·`TagList`. `href`가 있을 때만 `<a>`(없으면 `<article>`), 누름 scale(.985) · 데스크톱 hover 썸네일 -4px
  - 열 수·간격은 페이지의 `<ul class="grid">`가 정한다(모바일 1열 30px · 태블릿 2열 40/24 · 데스크톱 3열 40/32)
- **상세 페이지**(`src/pages/projects/[slug].astro`)
  - 주소는 콘텐츠 폴더 이름(`project.id`, `projectHref()`). 컬렉션 glob이 `*/index.md`라 id에 `/`가 없어 `[...slug]` 대신 `[slug]`
  - `getStaticPaths`에서 이전/다음을 props로 넘긴다. **이전 = 목록에서 바로 위 카드, 다음 = 바로 아래 카드**(2026-09-18 브라우저 확인으로 확정)
  - 읽기 폭: 모바일 창 여백 그대로 · 태블릿 `.column` 좌우 12px 추가(창 36 + 12 = 시안 48) · 데스크톱 `max-width: 800px` 가운데. 스크린샷 띠만 더 넓다
  - 머리: 아이콘 72/88/88px · 이름 24/30/36px · 소개 · 태그 → 링크 버튼(첫 링크가 진한 버튼: App Store가 있으면 App Store, GitHub만 있으면 GitHub. 새 창 + 스크린 리더용 "(새 창)") → 요약 `<dl>`(모바일·태블릿 2×2, 데스크톱 4칸, 칸 선은 칸의 왼쪽·아래 테두리). 기간은 `YYYY.MM – YYYY.MM` 또는 `– 진행 중`
  - 링크 버튼: 모바일은 칸을 똑같이 나누는 그리드(링크 하나면 한 칸 전체), **359px 이하에서는 한 줄에 하나씩**("App Store에서 보기"가 반 칸에 들어가지 않음), 태블릿·데스크톱은 글자 길이만큼
  - 뒤로: 데스크톱은 본문 맨 위 `‹ Projects` 링크, 모바일·태블릿은 `Window`의 `back` prop으로 타이틀 바 창 점 자리에 `‹`(44px, 액센트 색, 이름 "프로젝트 목록으로")
  - **Dock은 모든 폭에서 숨긴 채 시작**(`SiteLayout dockHidden` → `Dock startHidden`). 시안은 모바일·태블릿만 숨김이지만, 폭마다 초기 상태를 다르게 하면 첫 화면에서 깜빡일 수 있어 통일(2026-09-18 브라우저 확인으로 확정). 숨긴 채 시작하면 위로 스크롤해 한 번 나타나기 전까지는 "맨 위 48px면 항상 보임" 규칙을 끈다(읽기 시작하며 조금 스크롤할 때 튀어나오지 않게)
- **본문과 주요 기능 끼워 넣기**(`ProjectArticle.astro` + `src/lib/sections.ts`)
  - 시안 순서는 소개 → 주요 기능 → 기술적으로 고민한 점 → 배운 점인데 주요 기능은 프런트매터 데이터라 Markdown에 없다
  - Astro 7의 기본 Markdown 처리기는 **Sätteri**(`@astrojs/markdown-satteri`, unified/rehype가 아닌 자체 방문자 기반 플러그인 API)라 플러그인 대신 **`Astro.slots.render()`로 본문·features slot을 HTML 문자열로 만든 뒤 `(?=<h2[\s>])` 위치에서 나눈다**. `##` = `<section class="doc-section">`, 그 안의 `###` = `<div class="doc-card">`(묶음 `.doc-cards`), 첫 `##` 앞 내용 = `.doc-lead`. 첫 섹션 뒤에 주요 기능 HTML을 넣고 `set:html`
  - 안전한 이유: Markdown 제목은 본문 맨 바깥 단계에 나오고 코드 블록 속 `<h2`는 `&lt;h2`로 바뀐다. 제한: 인용문·목록 안 제목(`> ## 제목`)은 쓰지 않는다
  - 스타일은 `.prose :global(...)`로 주되 **`:is(.doc-lead, .doc-section)` 안으로 한정**(끼워 넣은 주요 기능의 자체 스타일을 덮지 않게). 섹션 간격은 `.prose`의 flex `gap` 40/48/56px. 문단 사이는 `> :not(h2) + *`에 1em(제목 바로 다음 요소는 제목 margin만), 카드가 제목 바로 아래면 `h2 + .doc-cards`에 4/6/8px 추가(시안 12→16 등). 코드 블록은 구문 강조 테마 색 + `--win-divider` 테두리(다크에서 경계가 안 보여서)
  - 명시도 주의: `.prose[cid] :is(...) :is(p, li)`와 `.doc-card :is(p, li)`가 같은 명시도라 **나중에 오는 규칙이 이긴다** → 미디어 쿼리마다 카드 규칙을 뒤에 두고 `line-height`도 다시 쓴다
- **공용 컴포넌트**
  - `TagList`: 카드·상세 공용 태그(`ul/li`, 12/12.5px, 데스크톱 간격 8px)
  - `PhoneMockup`: slot으로 받은 `img`를 `.screen > :global(img)`로 꽉 채우고 위 기준으로 자른다(slot 내용에는 부모 컴포넌트의 스코프 속성이 붙어 일반 선택자가 닿지 않음). 카드·스크린샷 띠·주요 기능이 함께 씀
  - `ScreenshotBand`: 모바일·태블릿은 창 본문 여백만큼 음수 margin(-20/-36px)으로 화면 끝까지, 바탕은 스크롤되지 않는 바깥 상자, 끝 여백은 `::after` 빈 칸(여백 − 간격), 폰 170/190px. 데스크톱은 둥근 띠 540px, `justify-content: safe center`, 양 끝 제외 폰 -20px, 폰 210px. 스크롤 목록에 `tabindex="0"`·이름. `Window` 본문 여백을 바꾸면 여기도 바꾼다
  - `ProjectFeatures`: DOM은 항상 폰 → 설명, 태블릿·데스크톱 짝수 번째는 그리드 칸 지정으로만 좌우를 바꾼다(읽는 순서 유지). 모바일은 카드 바탕 위 폰 170px
  - `Pager`: `prev`/`next`(`href`·`title`)와 라벨을 받는다. 모바일 세로, 태블릿·데스크톱 2칸(이전이 없으면 빈 칸). `rel="prev|next"`. 스터디 글·행사 상세에서 재사용
- **커밋 단위**(사용자 요청): 빌드되는 가장 작은 단위. 공용 컴포넌트마다 하나, `refactor` 분리, 상세 페이지 → 목록 카드 연결 순서(2-5)

### 5-15. 스터디 목록·글 구현 (2026-09-19 결정)
시작 전에 미뤄 두었던 5건(복사 버튼 · 파일 이름 머리줄 · 읽는 시간 · 칩 순서 · 본문 스타일 공용화)을 모두 정했다. 1·2는 실험 결과로, 3~5는 사용자가 선택했다.
- **코드 블록 파일 이름 머리줄 — Shiki transformer로 확정(계획 단계의 원안 폐기)**
  - 계획(옛 2-6)에는 "Astro 7 기본 처리기가 Sätteri라 플러그인을 못 쓰니 `Astro.slots.render()` 뒤 HTML 문자열을 손봐야 한다"고 적어 두었는데 **틀린 가정이었다**. 구문 강조는 Sätteri가 아니라 **Shiki**가 따로 하고, `markdown.shikiConfig.transformers`는 Astro 7에서 그대로 동작한다
  - 확인 방법: `src/pages/tmp-code.md`를 만들고 transformer에서 `this.options.meta.__raw`를 찍어 보니 ` ```swift title="Example.swift" `의 meta가 그대로 들어왔다. 언어는 `this.options.lang`으로 받는다(`data-language`는 transformer가 도는 시점에는 아직 붙지 않는다)
  - 구현 `src/lib/codeBlock.ts`: `root()` 훅에서 `<pre>`를 `<figure class="code-block">`으로 감싸고 `<figcaption>`(파일 이름 + 복사 버튼)을 붙인다. 파일 이름이 없으면 언어 이름을 쓰고, 언어도 없으면(plaintext) 버튼만 둔다
  - **줄 번호는 HTML을 건드리지 않는다**. Shiki가 줄마다 남기는 `<span class="line">`에 CSS 카운터(`::before`)로 그린다. 가로 스크롤에서도 왼쪽에 붙어 있도록 `position: sticky; left: 0` + 코드 바탕색
- **복사 버튼 — 실제로 동작하게 구현(사용자 선택)**
  - 버튼은 transformer가 `hidden`으로 내보내고, `CodeCopy.astro`의 스크립트가 `navigator.clipboard.writeText`를 쓸 수 있을 때만 `hidden`을 푼다. 동작하지 않는 버튼을 만들지 않으면서(CLAUDE.md) 스크립트·클립보드가 없는 환경에서도 머리줄은 그대로다
  - 복사할 코드는 `pre.textContent`다. 줄 번호는 `::before`라 DOM에 없어 코드만 깨끗하게 복사된다(검사에서 8줄 그대로 확인). 누르면 1.6초 동안 아이콘이 체크로 바뀌고 라벨 "복사됨" · `aria-label`도 "코드 복사됨"
  - 쓰는 화면: 스터디 글, 프로젝트 상세(본문에 코드가 들어갈 수 있어 함께 넣었다)
- **구문 강조 색**: 기본 `github-dark`는 팔레트와 맞지 않아 시안 색으로 만든 테마(`CODE_THEME`)를 쓴다. 라일락 키워드 · 민트 타입 · 블루 함수 · 앰버 문자열. Shiki 테마는 16진수만 받아 시안의 oklch를 sRGB로 변환해 넣었다(`#BE9DF7` `#6CD5B3` `#6CCDEA` `#E6BD77`, 바탕 `#14121B` = `oklch(19% 0.018 290)`)
- **읽는 시간 — 공백 뺀 전체 글자 ÷ 500, 올림, 최소 1분(사용자 선택)**
  - `src/lib/readingTime.ts`. 코드 블록도 글자 수에 넣는다(코드는 줄이 짧아 글자가 적게 잡히는 대신 읽는 데 오래 걸려 상쇄). 제목 `#`·목록 기호·링크 주소·이미지·HTML 태그는 빼고 센다
  - 분당 500자는 기술 글을 천천히 읽는 쪽으로 잡은 값이다(흔히 쓰는 500~700자의 아래쪽). 함수가 5줄로 끝나 유지보수가 쉽다
- **필터 칩 순서 — 가나다 순(사용자 선택)**: `localeCompare(a, b, 'ko')`. 글이 늘어도 칩 위치가 바뀌지 않아 사용자가 위치를 기억할 수 있다(글 수 많은 순은 글을 쓸 때마다 순서가 바뀐다). 한글 카테고리가 영문보다 앞에 온다
- **본문 스타일 공용화 — `src/styles/prose.css`로 분리(사용자 선택)**
  - 공통 요소(문단·목록·강조·링크·이미지·인라인 코드·인용)를 `.prose-body` 기준으로 옮기고, 쓰는 화면에서만 `import`한다. 코드 블록은 덩어리가 커서 `src/styles/code-block.css`로 한 번 더 나누고 `prose.css`가 `@import`한다
  - 표시 클래스: 프로젝트는 `sections.ts`가 만드는 `.doc-lead`·`.doc-section`에, 스터디 글은 본문 `<article>`에 `prose-body`를 붙인다. 프로젝트의 주요 기능(`ProjectFeatures`)은 이 밖에 있어 닿지 않는다
  - 공통 규칙의 명시도는 (0,1,1)로 낮다 → 프로젝트 카드(`.doc-card …`, (0,2,1))가 **순서와 상관없이** 이긴다. 5-14에 적어 둔 "명시도가 같아 순서가 이긴다"는 취약점이 사라졌다
  - 화면마다 다른 값은 커스텀 속성으로 연다: `--prose-gap`(문단 사이, 기본 1em · 스터디 글 1.25em = 시안 20~24px)
  - **함께 고친 버그**: 프로젝트 상세의 문단 사이 간격(`> :not(h2) + *`에 1em)이 뒤에 오는 `margin: 0`(같은 명시도)에 덮여 **실제로는 적용되지 않고 있었다**. 예시 글이 섹션마다 문단 하나라 브라우저 확인에서도 드러나지 않았다. 규칙 순서를 바꿔 고쳤고(문단↔문단 17px, 제목 다음 0px 확인), 공용 파일에도 같은 순서로 옮겼다
- **상세의 ‹ 뒤로 링크가 직전 필터로 돌아간다 (2026-09-20, 사용자 확인 중 발견 → 사용자 선택)**
  - 증상: 목록에서 분류를 걸러 두고 글을 연 뒤 창 안의 ‹ 링크로 돌아오면 전체 목록이 나왔다. 브라우저 뒤로 가기는 주소의 `?category=`로 유지되지만, ‹ 링크는 정적 목록 주소라 분류를 알 수 없었다. 프로젝트 상세도 같았다
  - 방식: `FilterChips`가 고른 분류를 `sessionStorage`에 목록 주소별로(`filter:<경로>`) 남기고, `Window`의 스크립트가 `data-back-link` 링크에 `?category=`를 붙인다. 목록을 전체로 열면 빈 값으로 덮어써 지난 선택이 남지 않는다
  - 주소에 쿼리를 실어 나르는 방법(카드 링크에 `?category=`)은 글 주소가 지저분해지고 같은 글이 여러 주소로 색인될 수 있어 쓰지 않았다. 저장소를 못 쓰거나 스크립트가 없으면 전과 같이 전체 목록으로 간다
- **화면 구현**
  - 목록(`src/pages/study/index.astro` · `StudyCard.astro`): 모든 폭에서 1열. 모바일·태블릿은 세로 쌓기(날짜 · 점 · 읽는 시간), 데스크톱은 왼쪽 글 / 오른쪽 날짜·읽는 시간. 요약은 모바일·태블릿에서 2줄 말줄임, 데스크톱은 `max-width: 800px`. 카드 간격 12/14/20px
  - 글(`src/pages/study/[...slug].astro`): 스터디 glob이 `**`라 id에 `/`가 들어갈 수 있어 **`[...slug]`**(프로젝트는 `[slug]`). 주소 헬퍼는 `studyHref()`
  - **목차(`Toc.astro`)는 DOM 한 벌**이다. 폭마다 목록을 두 벌 두면 스크린 리더가 목차를 두 번 읽는다 → 모바일·태블릿은 접히는 상자(버튼 + `aria-expanded`), 데스크톱은 같은 목록을 sticky 레일로 보여 주고 버튼을 숨긴다. 배치는 `.body`가 정한다(모바일 세로 흐름 / 데스크톱 `grid-area`로 본문 왼쪽·목차 오른쪽)
  - 목차 항목은 `##`(depth 2)만 모은다. `###`까지 넣으면 목록이 길어진다. 여는 버튼도 `hidden`으로 내보내고 스크립트가 살아 있을 때만 보여, 스크립트가 없으면 목차가 펼쳐진 채로 남는다
  - 현재 항목 표시는 IntersectionObserver 대신 **스크롤할 때마다 소제목 위치를 다시 재는 방식**(rAF 한 프레임에 한 번). 화면 위에서 100px을 지나간 마지막 소제목이 현재 항목이다. 창 크기·이미지 로딩으로 위치가 바뀌어도 맞는다
  - 글 화면 Dock은 프로젝트 상세와 같게 모든 폭에서 숨긴 채 시작(`dockHidden`), 목록은 보인 채 시작 — 검사로 확인
- **확인 결과(임시 글 4개: 카테고리 3종 · 코드 블록 있는 글/없는 글 · 소제목 0개 · 아주 긴 제목)**
  - 정렬 최신 순 ✓ · 칩 가나다 순(동시성 / 회고 / SwiftUI) ✓ · 필터 4→2→1→4 · `?category=` 유지 ✓
  - 복사 버튼: `hidden` 해제 ✓ · 줄 번호 없이 8줄 그대로 복사 ✓ · 표시·`aria-label` 바뀜 ✓
  - 목차: 토글 열고 닫기 ✓ · 데스크톱 현재 항목 0→1→2→0 ✓ · 소제목이 없으면 목차 자체가 없음 ✓
  - 코드: 줄 번호 sticky ✓ · 가로 스크롤 ✓ · 파일 이름 없으면 언어 이름 ✓ · 라이트/다크 모두 어두운 상자 ✓
  - 스크린샷 320·390·768·1180·1440 라이트/다크 ✓ · Dock 숨김 시작(글) / 보임 시작(목록) ✓

### 5-16. 세미나 목록·행사 상세 구현 (2026-09-20 결정)
계획(옛 2-6)에 미뤄 두었던 3건을 시작 전에 사용자가 모두 정했다. 구조는 프로젝트(5-14)·스터디(5-15)와 같지만 **사진이 주인공이고 본문이 MDX**라는 점이 다르다.
- **세션 머리 — `## 라벨` + `### 제목` 한 쌍(사용자 선택)**
  - 예시 글(`sample-seminar/index.mdx`)에 이미 쓰던 마크다운을 그대로 둔다. 새 컴포넌트나 프런트매터 필드를 만들지 않아 글 쓰는 규칙이 단순하다
  - 모양은 CSS가 가른다: `h2:has(+ h3)` = 작은 액센트 라벨(SESSION 01 · 발표자), `h2:not(:has(+ h3))` = 마무리 구획 제목(배운 점 · 소감, 위에 구분선). `h3` = 세션 제목(20/22/24px)
  - 대안으로 본 `<Session>` 컴포넌트는 상세 페이지가 넘길 컴포넌트가 4개로 늘고 글에 태그가 섞이며, 프런트매터 `sessions[]`는 문단·사진이 번갈아 나오는 글 흐름형과 맞지 않아 쓰지 않았다
  - 제목 바로 다음 요소는 `:is(h2, h3) + * { margin-top: 0 }`으로 흐름 간격을 더하지 않는다(제목의 `margin-bottom`만 쓴다)
- **표지 사진 폭 — `Window`가 `--win-pad`를 내보낸다(사용자 선택)**
  - 창 본문 좌우 여백(모바일 20 · 태블릿 36 · 데스크톱 48px)을 `.body`의 커스텀 속성으로 두고, 창 폭 끝까지 넓히는 요소가 `margin-inline: calc(var(--win-pad) * -1)`로 상쇄한다
  - 표지(`SeminarCover`)와 기존 `ScreenshotBand`가 함께 쓴다. 수치가 한 곳에만 남아 창 여백을 바꾸면 둘 다 따라온다(전에는 `ScreenshotBand`에 -20/-36px이 복제되어 있었다)
  - 데스크톱 표지는 창 본문 폭 전체(1144px)를 쓰는 둥근 사진이고 사진 설명만 읽기 폭 800px에 맞춘다. 모바일·태블릿은 모서리 없이 창 끝까지
- **사진 확대(라이트박스) — 넣지 않는다(사용자 선택)**: 시안에 없고 dialog·ESC·포커스 처리가 따라붙는다. 사진이 많아지면 별도 작업으로 뺀다
- **사진 컴포넌트 3종**(MDX에서 쓰고 상세 페이지가 `<Content components={{ Photo, PhotoPair, PhotoSide }} />`로 넘긴다)
  - `Photo`(한 장): 시안은 높이를 220/320/450px로 고정했지만 **원본 비율 그대로** 둔다. 한 장짜리 본문 사진은 잘라서 얻을 것이 없고 세로 사진이 들어오면 잘림이 크다
  - `PhotoPair`(2장 나란히) · `PhotoSide`(사진 옆 글): 칸 높이를 맞춰야 해서 **4:3으로 자른다**(`object-fit: cover`). `PhotoSide`는 DOM이 사진 → 글이라 모바일에서 쌓아도 읽는 순서가 그대로다
  - slot으로 받은 문단에는 부모 컴포넌트의 스코프 속성이 붙어 일반 선택자가 닿지 않으므로(`PhoneMockup`과 같은 제약) 문단 사이는 감싼 칸의 `gap`으로 띄운다
- **목록 카드 — DOM 한 벌로 세 모양**(`SeminarCard`)
  - 모바일 세로 카드 → 태블릿 가로 카드(사진 250px) → 데스크톱 타임라인으로 바뀐다. 홈의 최근 기록처럼 컴포넌트를 둘로 나누지 않은 것은 내용이 완전히 같아서다(링크가 둘로 늘지 않는다)
  - 데스크톱에서는 글 묶음 `.text`를 `display: contents`로 풀어 날짜·장소만 왼쪽 칸(150px)으로 보낸다
  - 타임라인 세로선은 오른쪽 칸 세 줄(사진·이름·소감)의 `border-left`가 이어진 것이다. 줄 사이를 `gap`으로 띄우면 선이 끊기므로 `padding-bottom`을 쓴다. 점은 사진 칸의 `::after`를 `left: -5px`에 두어 선 위에 걸친다
  - **찾은 문제**: 소감 2줄 말줄임(`-webkit-line-clamp`)이 **그리드 아이템에서는 높이가 잘리지 않아** 3줄이 보였다. `.text` 안(플렉스 아이템)으로 옮겨 해결했다(스터디 카드와 같은 구조). 데스크톱은 말줄임 없이 전부 보여 준다
- **표지 사진의 `alt`는 비운다**: 스키마에 설명이 `coverAlt` 하나뿐이라 같은 문장을 `figcaption`과 `alt`에 모두 넣으면 스크린 리더가 두 번 읽는다. 상세에서는 설명을 `figcaption`으로 보여 주고 `alt=""`, 목록 카드에는 `figcaption`이 없으므로 `alt={coverAlt}`를 준다
- **본문 흐름 간격**: `--prose-gap` 20/22/28px(문단·사진 공통). 시안은 자리마다 14~28px로 조금씩 다르지만 한 값으로 통일했다
- **확인 결과(임시 행사 3건: 날짜 3종 · 세션 1개와 3개 · 긴 제목 · 긴 소감)**
  - 목록 최신 순 ✓ · 카드 → 상세 링크 ✓ · 이전(더 최신)/다음 순서 ✓ · 빈 상태 문구 ✓
  - 사진 3종 배치 ✓(모바일 PhotoSide 쌓임 · 768px 좌우 배치) · 표지 창 폭 ✓ · 소감 구분선 ✓
  - Dock: 목록 `shown` / 상세 `hidden` + `data-start-hidden` ✓ · ‹ 뒤로 링크 ✓
  - 스크린샷 320·390·768·1180·1440 라이트/다크 ✓ · 프로젝트 상세 스크린샷 띠(여백 상쇄 리팩터링) 이상 없음 ✓

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
| `astro.config.mjs` | `site: 'https://yuminc03.github.io'`, `base: '/my-homepage'`, `integrations: [mdx()]`, `markdown.shikiConfig`(코드 블록 테마 + transformer, 5-15) |
| `src/content.config.ts` | 콘텐츠 컬렉션 `projects`·`study`·`seminars` 스키마(5-10), `PROJECT_CATEGORIES` 내보내기, 폴더형/파일형 id 생성 |
| `src/content/projects/sample-project/` | 예시 프로젝트 `index.md`(`draft: true`) + 단색 임시 이미지 5장(아이콘·스크린샷 2·기능 2) |
| `src/content/study/sample-post.md` | 예시 스터디 글(`draft: true`, 인라인 코드·Swift 코드 블록) |
| `src/content/seminars/sample-seminar/` | 예시 행사 `index.mdx`(`draft: true`, 세션 3개·사진 컴포넌트 3종) + 단색 임시 이미지 5장(표지·사진 4) |
| `tsconfig.json` | `astro/tsconfigs/strict` 상속, `dist`·`design` 제외 |
| `.nvmrc` | `24` |
| `.gitignore` | `dist/`·`.astro/`·`node_modules/`·`.env`·`.DS_Store` 등(Astro 템플릿 그대로) |
| `.vscode/extensions.json` | Astro VS Code 확장 추천 |
| `src/pages/index.astro` | 홈(5-13). 데스크톱: 바로가기 4 · About me 창 · 코드 에디터 창(겹침) · iPhone 목업 · 스크롤 힌트 · 최근 기록 창(`#recent`) / 모바일·태블릿: About 위젯 · 앱 아이콘 4 · 코드 위젯 · 최근 기록 위젯(태블릿은 코드 \| 위젯 2단). `#contact`·`#code` 도착 강조 |
| `src/data/profile.ts` | 자기소개 `PROFILE`: 인사말(3조각)·좋아하는 문구(2줄)·기술 4개·연락처(GitHub·Email) |
| `src/lib/content.ts` | 컬렉션 읽기 헬퍼 `getProjects()`(진행 중 먼저 → 시작일 최신 순)·`getStudyPosts()`·`getSeminars()`: `draft: true` 제외 + 날짜 내림차순. 주소 헬퍼 `projectHref()`·`studyHref()`·`seminarHref()`. 화면은 이 함수만 쓴다 |
| `src/lib/sections.ts` | 렌더링된 Markdown HTML을 `##` 섹션(`.doc-section`)·`###` 카드(`.doc-card`)·머리말(`lead`)로 나누는 `splitSections()`(5-14) |
| `src/pages/projects/[slug].astro` | 프로젝트 상세: 뒤로 링크·머리·태그·링크 버튼·요약 `<dl>` → `ScreenshotBand` → `ProjectArticle`(+`ProjectFeatures` slot) → `Pager`. Dock 숨김 시작(5-14) |
| `src/components/FilterChips.astro` | 목록 필터 칩 + 스크립트(`[data-filter]`·`data-filter-item`·`data-categories` 규약, `?category=`, `aria-live`). 고른 분류를 `sessionStorage`에 남겨 상세의 ‹ 링크가 돌아올 수 있게 한다(5-15). 모바일 가로 스크롤 / 태블릿·데스크톱 줄바꿈 |
| `src/components/ProjectCard.astro` | 프로젝트 목록 카드(그라디언트 썸네일·목업·아이콘·이름·소개·`TagList`). `tone`, `href` 있으면 링크 |
| `src/components/TagList.astro` | 태그 알약 목록(카드·상세 공용) |
| `src/components/ProjectArticle.astro` | 상세 본문: slot HTML을 섹션·카드로 묶고 소개 뒤에 features slot 삽입. 공통 Markdown 스타일은 `prose.css`, 여기에는 섹션 제목·`###` 카드만(5-15) |
| `src/components/ProjectFeatures.astro` | 주요 기능 FEATURE 01…: 모바일 폰 위·설명 아래 / 태블릿·데스크톱 좌우 번갈아 |
| `src/components/ScreenshotBand.astro` | 스크린샷 띠: 모바일·태블릿 화면 끝까지 가로 스크롤(`--win-pad`로 창 여백 상쇄) / 데스크톱 둥근 띠 가운데 |
| `src/components/Pager.astro` | 상세 이전/다음 링크(라벨 prop, 스터디·세미나 재사용) |
| `src/lib/date.ts` | 날짜 표기 `formatDay`(`YYYY.MM.DD`)·`formatMonth`(`YYYY.MM`). 프런트매터 날짜를 UTC 기준으로 꺼낸다 |
| `src/components/RecentWindow.astro` | 데스크톱 최근 기록 창: `HomePanel` 안에 스터디·세미나 2열(각 최대 3개, 카드 전체가 **상세** 링크, 열 머리 "전체 보기 →"만 목록), 빈 상태 점선 상자 |
| `src/components/RecentWidgets.astro` | 모바일·태블릿 최근 기록 위젯 2개(각 최신 1개, 위젯 전체가 **상세** 링크 · 빈 상태만 목록). 모바일 2열 168px, 태블릿 세로 2개(세미나는 썸네일 84px 가로 배치) |
| `src/pages/projects/index.astro` | 프로젝트 목록: `PageHeading` → `FilterChips`(분류 2개 이상일 때) → 카드 그리드 1/2/3열(카드는 상세 링크), 빈 상태 문구 |
| `src/pages/study/index.astro` | 스터디 목록: `PageHeading` → `FilterChips`(카테고리 2개 이상일 때, 가나다 순) → 행 카드 1열(글 링크), 빈 상태 문구 |
| `src/pages/study/[...slug].astro` | 스터디 글: 뒤로 링크·머리(카테고리·제목·날짜·읽는 시간) → 본문 \| 목차(데스크톱 2단) → `Pager`. Dock 숨김 시작. glob이 `**`라 rest 파라미터(5-15) |
| `src/pages/seminars/index.astro` | 세미나 목록: `PageHeading` → 행사 항목 1열(최신 순, 항목은 상세 링크), 빈 상태 문구. 분류가 없어 필터 칩을 두지 않는다 |
| `src/pages/seminars/[slug].astro` | 행사 상세: 뒤로 링크·머리(날짜·장소·이름) → `SeminarCover` → 본문(MDX, 사진 컴포넌트 3종을 `components`로 넘김) → `Pager`. Dock 숨김 시작(5-16) |
| `src/components/SeminarCard.astro` | 세미나 목록 항목. DOM 한 벌로 모바일 세로 카드 / 태블릿 가로 카드(사진 250px) / 데스크톱 타임라인(`display: contents` + 이어 붙인 `border-left`)(5-16) |
| `src/components/SeminarCover.astro` | 행사 상세 표지 사진. 모바일·태블릿은 `--win-pad`로 창 폭 끝까지, 데스크톱은 창 본문 폭 둥근 사진 + 읽기 폭 사진 설명 |
| `src/components/Photo.astro` | 본문 사진 1장(원본 비율). MDX `<Photo src alt caption>` |
| `src/components/PhotoPair.astro` | 본문 사진 2장 나란히(4:3으로 잘라 높이를 맞춘다). MDX `<PhotoPair a aAlt b bAlt caption>` |
| `src/components/PhotoSide.astro` | 사진 옆 글(모바일은 사진 위·글 아래). MDX `<PhotoSide src alt>문단들</PhotoSide>` |
| `src/components/StudyCard.astro` | 스터디 목록 행 카드(모든 폭 1열): 카테고리 태그·제목·요약(좁은 폭 2줄 말줄임)·날짜·읽는 시간. `href` 있으면 링크 |
| `src/components/Toc.astro` | 스터디 글 목차. DOM 한 벌로 모바일·태블릿 접히는 상자 / 데스크톱 sticky 레일, 현재 항목은 스크롤할 때 위치를 다시 재서 표시. `##`만 모음(5-15) |
| `src/components/CodeCopy.astro` | 코드 블록 복사 버튼 동작. 클립보드를 쓸 수 있을 때만 버튼의 `hidden`을 푼다. 코드 블록이 나올 수 있는 화면이 한 번 부른다 |
| `src/lib/readingTime.ts` | 읽는 시간 `readingMinutes()`·`readingTime()`(공백 뺀 글자 ÷ 500, 올림, 최소 1분. 기호·주소는 빼고 센다)(5-15) |
| `src/lib/codeBlock.ts` | 코드 블록 Shiki transformer(`<figure>`로 감싸고 파일 이름 머리줄·복사 버튼)와 시안 색 테마 `CODE_THEME`. `astro.config.mjs`가 쓴다(5-15) |
| `src/styles/prose.css` | Markdown 본문 공통 스타일(`.prose-body`): 문단·목록·강조·링크·이미지·인라인 코드·인용, 간격 변수 `--prose-gap`. `code-block.css`를 `@import` |
| `src/styles/code-block.css` | 코드 블록 모양: 머리줄·복사 버튼·줄 번호(CSS 카운터 + sticky)·폭별 글자 크기. 테마와 무관한 고정 어두운 색 |
| `src/layouts/SiteLayout.astro` | 공통 셸: 고정 글로우 바탕 3개 · `MenuBar` · `<main>` · `Dock`. props `active`(앱 id), `surface`(`desk` 홈 / `window` 창 화면), `title`·`description`, `dockHidden`(상세) |
| `src/data/apps.ts` | 앱 목록 `APPS`(홈·프로젝트·스터디 기록·세미나 기록: 라벨·창 제목·설명·경로·아이콘 바탕·SVG), `CONTACT`(`/#contact`), `CODE_EDITOR`(`/#code`, 데스크톱 Dock 전용), `getApp()` |
| `src/lib/url.ts` | `withBase(path)`: base(`/my-homepage`)를 붙인 내부 경로. 내부 링크는 모두 이것으로 만든다 |
| `src/components/AppIcon.astro` | 아이콘 타일. 크기는 부모의 CSS 변수(`--icon-size`·`--icon-radius`·`--glyph-size`·`--glyph-stroke`), `shadow` 옵션 |
| `src/components/MenuBar.astro` | 유리 메뉴바. 데스크톱 36px(로고·이름·메뉴 4개 `aria-current`·테마 버튼·시계) / 모바일 52px·태블릿 56px(홈에서만, 로고·이름·44px 테마 버튼) |
| `src/components/MenuClock.astro` | 데스크톱 메뉴바 시계. 기기 현지 시각 `HH:MM`, 분 경계마다 `setTimeout`으로 갱신, JS 전에는 빈 자리(폭 고정)(5-12) |
| `src/components/Dock.astro` | 하단 고정 Dock. 앱 4개 + 실행 점 · 구분선 · 코드 에디터(데스크톱) · 연락처. `surface` desk/window 유리. 크기 모바일 48 / 태블릿 56 / 데스크톱 52px. 자동 숨김 스크립트(`data-state`)·힌트 막대(5-3). `startHidden`이면 숨긴 채 시작(5-14) |
| `src/components/Window.astro` | 창. 데스크톱: 최대 1240px 가운데 창(타이틀 바 44px, ✕ 28px) / 모바일·태블릿: 위 12·16px 틈 시트(타이틀 바 52·56px sticky, ✕ 44px). 본문 여백 20·36·48px(`--win-pad`로 내보내 표지·스크린샷 띠가 상쇄에 쓴다), 아래는 Dock 자리만큼 비움. `back`(href·label)이면 모바일·태블릿 타이틀 바 창 점 자리에 ‹ 링크. `data-back-link` 링크에 직전 목록 필터를 붙이는 스크립트 포함(5-15) |
| `src/components/PageHeading.astro` | 목록 화면 큰 제목(30·34·44px)과 한 줄 설명 |
| `src/components/WindowDots.astro` | 창 점 3개(라일락 2 + 민트 1, 장식). 크기 `--dot-size`·간격 `--dot-gap`, `tone` window(테마 토큰)/code(고정색). `Window`·`HomePanel`이 사용 |
| `src/components/HomePanel.astro` | 홈 창/위젯. 데스크톱 타이틀 바 44px(✕ 없음) / 모바일·태블릿 위젯. `tone` window/code. 폭·위치는 부모가 감싼 요소에서 |
| `src/components/ProfileCode.astro` | `ProfileView.swift` 코드 에디터 내용: 파일 탭(데스크톱) · 줄 번호 · Swift 구문 색(고정색). 보이는 줄 8/12/14 |
| `src/components/PhoneMockup.astro` | iPhone 16 Pro 목업: 프레임 이미지(`<Image>` WebP 1x·2x) + 투명 화면 영역(slot, 넘긴 `img`는 꽉 채워 위 기준으로 자름). 폭 `--phone-width`(5-8) |
| `src/assets/iphone-16-pro.png` | Apple Design Resources iPhone 16 Pro 프레임(450×920 RGBA, 50KB). 사용자 허용으로 커밋(5-8) |
| `src/layouts/BaseLayout.astro` | 모든 페이지 공통 문서 뼈대: `lang="ko"`, 메타(title·description 기본값), Noto Sans KR `<link>`, `tokens.css`·`global.css` import, `<head>` 인라인 스크립트(저장된 테마를 첫 화면 전에 `data-theme`에 적용), `<slot />` |
| `src/components/ThemeToggle.astro` | 테마 전환 버튼(해/달 아이콘, `size` desktop/touch). 문서 위임 클릭 → `data-theme`·`localStorage('theme')` 저장, 버튼 이름 갱신, 누른 뒤 아이콘 애니메이션 |
| `src/styles/tokens.css` | 디자인 토큰. 모션 곡선 3·시간 12, 색 55쌍 `light-dark()`, `color-scheme` 3가지(`:root`·`[data-theme="dark"]`·`[data-theme="light"]`) |
| `src/styles/global.css` | 전역 기본: box-sizing, body 바탕 `--desk`·글자 `--ink`·글꼴, 링크 `--win-accent`(hover 전환은 모션 토큰), `img` 반응형, `[hidden]` 항상 숨김(필터용), `.code` 고정폭 글꼴 |
- 템플릿에서 가져오지 않은 것: `README.md`·`AGENTS.md`(기존 README·`CLAUDE.md` 사용), `.vscode/launch.json`, 기본 Astro 파비콘(나중에 자체 아이콘으로 추가)

### 10-3. 그 밖의 파일
- `docs/tech-stack.md` — 기술 스택 비교표·약점·예상 면접 질문·결정 기록
- `design/canvas.json` — 페이지·아트보드 배치·크기·메모·첫 화면
- `design/chu-yumin-portfolio.html` — 조립 결과물. **직접 편집하지 말고 항상 재조립**
- `스크린샷 2026-09-11 오후 11.52.51.png` — 참고한 데스크톱형 포트폴리오 사례
- scratchpad 생성 스크립트(세션이 끝나면 사라진다. 필요하면 같은 방식으로 다시 작성): `dark_windows.py`(창 색 토큰 변환), `iphone_mockup.py`(목업 교체), `tablet_rest.py`(태블릿 4화면), `motion.py`(모션 3장. `TabletProjects` 토큰 줄·`Main` 창·`MobileHome` 위젯을 가져와 조립하고 태그 짝·camelCase 버그를 검사)

## 11. 시안 수정·재게시 방법
1. 새 세션이면 2-4 체크리스트대로 캔버스를 읽고 추출해 비교한다
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
- 로컬 브랜치: `master`, `develop`, **`feature/seminar-pages`(현재)**. 원격(`origin`, `https://github.com/yuminc03/my-homepage.git`): `master` `8bf0e7b`(로컬과 같음), `develop`(2026-09-20 push, `origin/develop` 추적, 로컬과 같음 — 마지막은 문서 커밋). 기능 브랜치는 남아 있지 않다. `develop` → `master` 병합은 아직 하지 않았다
- `feature/seminar-pages`(2026-09-20, `develop` `40837df`에서 분기, **아직 병합하지 않았다 — 사용자 브라우저 확인은 통과**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `f28a2fa` refactor: 창 본문 좌우 여백을 --win-pad 변수로 내보냄
  - `47136c4` feat: 행사 상세 주소 seminarHref 헬퍼 추가
  - `50fff4c` feat: 행사 본문 사진 컴포넌트 3종 추가
  - `9a76680` feat: 세미나 목록 카드와 목록 페이지 구현
  - `a792747` feat: 행사 상세 페이지와 표지 사진 컴포넌트 구현
  - `ebeadeb` feat: 세미나 목록 항목을 행사 상세로 연결
  - `5c64fd3` feat: 홈 최근 기록 카드·위젯을 상세 페이지로 연결
  - (이 커밋) docs: 세미나 목록·행사 상세 구현 기록과 다음 작업(페이지 전환 모션) 정리
- `feature/study-pages`(2026-09-19~20, `develop` `7a69180`에서 분기, **`develop` 병합 `4351c43`으로 완료, 브랜치 삭제**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `186134a` feat: 스터디 글 읽는 시간 계산과 글 주소 헬퍼 추가
  - `7a3a511` fix: 프로젝트 상세 본문 문단 사이 간격이 적용되지 않던 문제 수정
  - `0bb7ee2` refactor: Markdown 본문 공통 스타일을 prose.css로 분리
  - `9b6c6cf` feat: 코드 블록에 파일 이름 머리줄과 줄 번호, 복사 버튼 추가
  - `4cbc11a` feat: 스터디 글 목차 컴포넌트 추가
  - `6f615ee` feat: 스터디 목록 카드와 목록 페이지 구현
  - `7988a3f` feat: 스터디 글 페이지 구현
  - `be163d9` feat: 스터디 목록 카드를 글 페이지로 연결
  - `504e330` docs: 스터디 목록·글 구현 기록과 다음 작업(세미나) 정리
  - `150a1bf` feat: 상세 화면 ‹ 뒤로 링크가 직전 목록 필터로 돌아가게 함(사용자 확인 중 발견, 2026-09-20)
  - `1eb1430` docs: 뒤로 링크 필터 기억 결정 기록
- `feature/project-pages`(2026-09-17~18, `develop` `a725134`에서 분기, **`develop` 병합 `53f528e`로 완료, 로컬·원격 삭제**), 오래된 순
  - `5c0c5f4` feat: 프로젝트 목록용 getProjects 헬퍼 추가
  - `119243c` docs: 사이트 완성 뒤 마지막 단계로 개발 과정 설명 세션 추가
  - `aa35332` feat: 프로젝트 목록 필터 칩과 카드 구현
  - `b855458` feat: 창 타이틀 바에 목록으로 돌아가는 ‹ 링크 옵션 추가
  - `e7da41e` feat: Dock을 숨긴 채 시작하는 옵션 추가
  - `8b0dd87` refactor: 태그 목록을 TagList 컴포넌트로 분리
  - `e8e3a1c` refactor: 스크린샷 채우기 스타일을 PhoneMockup으로 옮김
  - `e6252b5` feat: 상세 화면 이전/다음 링크 Pager 컴포넌트 추가
  - `04803ad` feat: 프로젝트 상세 스크린샷 띠 컴포넌트 추가
  - `fd2df89` feat: 프로젝트 상세 주요 기능 컴포넌트 추가
  - `a70d531` feat: 프로젝트 본문을 섹션·카드로 묶고 주요 기능을 끼우는 ProjectArticle 추가
  - `60a35cf` feat: 프로젝트 상세 페이지 구현
  - `a83696f` feat: 프로젝트 목록 카드를 상세 페이지로 연결
  - `9744b81` docs: 프로젝트 목록·상세 구현 기록과 다음 작업(스터디) 정리
  - `8ffb68c` docs: 프로젝트 목록·상세 브라우저 확인 결과와 확정된 결정 2건 기록
- `develop` 직접 커밋: `92083d0` `.claude/settings.json` 권한 추가(2026-09-14), (이 문서 갱신) docs: 스터디 목록·글 작업 계획 정리(2026-09-18)
- 병합 후 삭제한 브랜치(순서대로, 마지막은 `feature/project-pages` 병합 `53f528e`·2026-09-18·원격까지 삭제): `feature/design-theme-dock`, `feature/design-color-direction`(`fab45e5`), `feature/design-theme-toggle`(`e610858`), `feature/design-detail-screens`(`bfcf341`), `feature/design-project-detail`(`0c7d2c9`), `feature/design-mobile`(`74c8149`), `feature/design-dark-windows`, `feature/design-iphone-mockup`(`eceb50a`), `feature/design-tablet`(`2d280cd`), `bugfix/profileview-code-widget`(`aa62f64`), `feature/design-tablet-rest`(`c1e2f5c`), `feature/design-motion`(모션 설계 · 데스크톱 창 ✕ 버튼 · 인수인계 문서, 2026-09-14), `feature/tech-stack`(기술 스택 결정 문서, 2026-09-14), `feature/astro-setup`(Astro 생성·토큰·MDX·스키마, 병합 `004589b`, 2026-09-14), `feature/site-shell`(테마 버튼·공통 셸·Dock 자동 숨김·시계, 병합 `0227fa3`, 2026-09-15), `feature/home-page`(홈 첫 화면·iPhone 목업·최근 기록, 커밋 5개, 병합 `8c7568f`, 2026-09-16), `feature/study-pages`(스터디 목록·글, 커밋 11개, 병합 `4351c43`, 2026-09-20)
- 참고로 남겨 둔 비교안 커밋: 색상 A~F `de7d440`, 행사 상세 사진 묶음형 A `1769266`

## 13. 문서 관리 규칙
- 이 문서가 현재 상태의 단일 기준이다. 작업이 끝날 때마다 1장(한눈에 보기)·2-1(지금 할 일)·4장(진행 기록)·12장(브랜치·커밋)을 먼저 갱신한다
- 다음 작업이 정해지면 2-1에는 "2-N을 따라간다" 한 줄만 두고, 시안 수치·재사용 목록·결정할 것·커밋 순서는 전용 절(예: 2-6 세미나)에 모은다. 새 채팅이 그 절만 읽고 시작할 수 있어야 한다
- 결정이 확정되면 5장에 옮기고, 끝난 할 일은 4장 표로 옮긴다
- 사용자 취향·기준처럼 대화 밖에서도 유지할 내용은 Claude 메모리에도 저장되어 있다(디자인 취향, 기술 스택 결정 기준, 디자인 방향, 마지막 단계 개발 과정 설명 세션)
