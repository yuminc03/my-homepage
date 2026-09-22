# 진행 상황
- 최종 업데이트: 2026-09-22
- 이 문서 하나만 읽으면 새 채팅에서 바로 이어서 작업할 수 있도록 정리한 단일 기준 문서다
- **마지막 세션(2026-09-22, 이어서 2)**: README를 커밋(`8e9805c`·`43f7a56`·`1f945ba`)해 `develop`에 병합 `5b8237c` → push하고, 사용자 요청으로 **Notion식 북마크 카드**를 만들었다(`feature/bookmark-card`, 결정은 **5-22**). 글에 **주소 하나만 한 문단으로 쓰면** 빌드할 때 그 페이지의 OG 태그를 읽어 제목·설명·주소·파비콘·썸네일 카드로 바꾼다(Sätteri hast 플러그인 `src/lib/bookmark.ts` + 가져오기·캐시 `src/lib/linkPreview.ts`, 캐시 `src/data/link-previews.json`은 커밋). 스터디(.md)·세미나(.mdx)에 임시 주소 8가지로 확인하고 되돌렸다. **사용자 확인·커밋 대기 중**(커밋 제안은 12장). 작업 중 `node_modules` 안 ` 2` 사본 144개를 발견해 지우고 `npm ci`
- **그 전 세션(2026-09-22, 이어서)**: 사용자 요청으로 콘텐츠를 더 넣기 전에 **`feature/real-content`를 `develop`에 병합 `6354a23` → 브랜치 삭제 → push**하고, `develop`에서 **`feature/readme`** 를 만들어 **README를 새로 썼다**(사이트 링크·스크린샷 3장·소개·주요 기능·기술 스택·시작하기·글 쓰기·배포·구조·문서·저작권). 스크린샷은 `docs/screenshots/`(데스크톱 홈 다크 · 프로젝트 상세 라이트 · 모바일 3화면 다크, 2배율로 찍어 가로 1600px로 줄임). **사용자 확인·커밋 대기 중**(커밋 제안은 12장). 사용자가 README를 `master`에서 바로 쓸지 물어 → Git Flow상 `develop`에서 `feature/*`로 쓰고, **README와 Pointer Quest를 `develop` → `master` 병합 한 번으로 함께 배포**하기로 했다(README만 `master`에 올려도 배포 워크플로가 돈다). 순서: README 병합 → `master` 배포 → 다음 콘텐츠
- **그 전 세션(2026-09-22)**: **실제 콘텐츠 채우기를 시작했다.** 브랜치 `feature/real-content`(`develop` `c63bdc4`에서 분기)에서 **첫 프로젝트 Pointer Quest**(`src/content/projects/pointer-quest/`)를 썼다 — 재료는 사용자가 준 [pointer-quest README](https://github.com/yuminc03/pointer-quest/blob/master/README.md)이고, 아이콘·스크린샷 5장은 그 저장소에서 받아 줄여 넣었다. 실제 프로젝트 글이 생겨 **`sample-project`(예시 글 + 임시 이미지 5장)를 지웠다**. 빌드와 1440 다크·390 다크·768 라이트 스크린샷으로 확인했다. 사용자 확인 뒤 커밋 3개를 마쳤다(12장). **`develop` 병합·배포는 아직**. 사용자가 ` 2` 사본 파일은 앞으로 보이면 묻지 않고 지우기로 했다(2-2 끝)
- **그 전 세션(2026-09-21, 이어서)**: **사이트 이름을 `Lia.log`(닉네임 리아 + 기록)로 바꾸고, 메뉴바 로고를 `CY` 글자에서 창 그림으로, 같은 그림으로 파비콘을 추가했다**(결정은 **5-21**). 브랜치 `feature/site-name-favicon`(커밋 3개 + 문서 1개, 12장)을 `develop`에 병합 `cc6040f` → 브랜치 삭제 → push하고, `develop` → `master` 병합 `398be50`으로 **배포까지 마쳤다**(run 35576351264 성공, 실제 주소에서 탭 제목·메뉴바·파비콘 3종 200 확인). 작업 중 저장소에 생기던 ` 2` 사본 파일의 원인이 **iCloud "데스크탑 및 문서" 동기화**임을 확인하고 모두 지웠다(2-2 끝). 콘텐츠 재료를 받는 형식은 2-6에 정리해 사용자에게 안내했다. **사용자가 콘텐츠는 조금 나중에 올리기 시작하겠다고 했다** — 새 채팅은 2-1의 1(상태 확인) 뒤, 사용자가 재료를 보내 주면 2-6을 따라간다. 지금 브랜치는 `develop`이고 작업 트리는 깨끗하며 `origin/develop`과 같다
- **그 전 세션(2026-09-21)**: **콘텐츠 검색을 끝내 병합하고, 이어서 사이트를 배포해 공개했다.** 먼저 검색부터 — 구현은 브랜치 `feature/content-search`(커밋 8개, 목록은 12장)에서 했다. 빌드 때 본문까지 담은 JSON 색인(`/search-index.json`)을 만들고, 검색 창을 처음 열 때 한 번 내려받아 브라우저에서 부분 문자열로 찾는다. 창은 `<dialog>` 모달이라 포커스 가두기·Esc·뒤 화면 잠금을 브라우저가 맡고, ⌘K(맥)·Ctrl+K와 돋보기 버튼(데스크톱은 메뉴바, 모바일·태블릿은 홈=메뉴바·목록/상세=창 타이틀 바)으로 연다. 결과는 컬렉션별로 묶고 일치 글자를 강조하며, 요약에 없으면 본문에서 잘라 온 줄을, 그것도 없으면 걸린 태그·기술을 보여 준다. 실시간 CDP 검사(열고 닫기 4경로·키보드 이동·전환 뒤 재동작·색인 1회 요청·브라우저 뒤로·색인 실패)와 5폭 라이트/다크 화면, **사용자 브라우저 확인**(임시 콘텐츠 7건, 지적 없음)을 모두 통과했다. 커밋 8개(목록은 12장) → 병합 `d81c5fc` → 기능 브랜치 삭제 → `origin/develop` push까지 끝났다. 결정과 근거는 **5-19**(방식 확정은 5-18). 이로써 **계획한 화면·기능 구현이 모두 끝났다.** 이어서 **GitHub Actions 배포까지 마쳤다**(2026-09-21): 저장소를 공개로 바꾸고 Pages를 GitHub Actions 방식으로 켠 뒤 `develop` → `master` 병합 `ea31474`를 push해 첫 배포에 성공했다. **사이트가 https://yuminc03.github.io/my-homepage/ 에 실제로 떠 있다**(결정은 5-20). 다만 **공개된 글은 아직 하나도 없다** — 예시 글 3개가 모두 `draft: true`라 목록이 빈 상태로 나온다. 다음은 대괄호 `[ ]` placeholder를 실제 콘텐츠로 채우는 일이고(2-6), 그 뒤 실기기 확인 → 마지막 개발 과정 설명 세션이다. (이 세션 뒤 사이트 이름·파비콘 작업이 이어졌다 — 바로 위 항목)

## 1. 한눈에 보기
- **무엇을 만드나**: iOS 개발자 Chu Yumin의 개인 홈페이지(자기소개·프로젝트·스터디 기록·세미나 기록). 사이트 이름은 **`Lia.log`**(2026-09-21, 5-21)
- **지금 단계**: 디자인 시안 완료, 기술 스택 확정(Astro + 일반 CSS), **Astro 프로젝트 생성**(임시 홈 1장, 빌드 확인), **전역 토큰 CSS 이식**(`src/styles/tokens.css`), **콘텐츠 컬렉션 스키마**(프로젝트·스터디·세미나, MDX) , **공통 셸**(테마 버튼·메뉴바·Dock 자동 숨김·창·시계, 목록 틀 3개), **홈 페이지**(첫 화면·iPhone 목업·최근 기록), **프로젝트 목록·상세**(필터 칩·카드·상세 페이지) — 여기까지 `develop` 병합·원격 push 완료. **스터디 목록·글**(카드·필터·글 페이지·목차·코드 블록·읽는 시간)까지 `develop` 병합·push 완료(2026-09-20, 병합 `4351c43`, 결정은 5-15). **세미나 목록·행사 상세**(타임라인·가로/세로 카드·표지 사진·사진 컴포넌트 3종·홈 최근 기록 링크)도 브라우저 확인까지 마치고 `develop`에 병합·push했다(2026-09-20, 병합 `8f704a4`, 결정은 5-16). **페이지 전환 모션**(View Transitions·스크립트 재실행·전환 종류별 모션)도 브라우저 확인까지 마치고 `develop`에 병합·push했다(2026-09-20, 병합 `0cd15af`, 결정은 5-17). **콘텐츠 검색**(빌드 색인 JSON·찾기 헬퍼·`<dialog>` 검색 창·⌘K·돋보기 버튼)도 브라우저 확인까지 마치고 `develop`에 병합·push했다(2026-09-21, 병합 `d81c5fc`, 결정은 5-19). **여기까지로 계획한 화면·기능은 모두 끝났다.** 이어서 **GitHub Actions 배포**를 붙이고 저장소를 공개로 전환해 `develop` → `master` 병합 `ea31474`로 첫 배포에 성공했다(2026-09-21, 결정은 5-20). 남은 것은 실제 콘텐츠 채우기다. 작업 계획은 2-6에 정리해 두었다
- **시안 진행도**
  - 데스크톱 7화면(홈·목록 3·상세 3) — 완료
  - 모바일 7화면(홈 화면 메타포) — 완료
  - 태블릿 7화면(모바일 확장형) — 완료
  - 모션 설계(토큰 보드 + 데스크톱·모바일 클릭 프로토타입) — 완료, `develop` 병합
  - 데스크톱 창 ✕ 닫기 버튼 — 채택(2026-09-14), 데스크톱 창 화면 6장에 반영, `develop` 병합
- **기술 스택**: Astro + 일반 CSS + TypeScript + Markdown Content Collections 확정(2026-09-14). 비교·약점·면접 질문은 `docs/tech-stack.md`
- **시안 캔버스**: https://claude.ai/code/artifact/48a3c34c-b882-4f13-8e2f-7e3668bdb7b1 (v22, 페이지 5개 · 아트보드 25장)
- **Git**: 시안·기술 스택 문서·`.claude/settings.json`(`92083d0`)이 `develop`에 반영되어 있다. `feature/astro-setup`(커밋 4개)을 `develop`에 병합 `004589b` → 브랜치 삭제(2026-09-14). `feature/site-shell`(테마 버튼 `872ec4b`, 공통 셸 `20d40c8`, Dock 자동 숨김 `e8eea35`, 시계 `88e86ca`, 문서 `cfe9270`)을 `develop`에 병합 `0227fa3` → 브랜치 삭제(2026-09-15). `feature/home-page`(첫 화면 `9907ebe`, iPhone 목업 `6da0b04`, 문서 `f6741d5`, 최근 기록 `062e860`, 문서 `1f8cbb8`)를 `develop`에 병합 `8c7568f` → 브랜치 삭제 → push(2026-09-16), 뒤이어 문서 `a725134` push. `feature/project-pages`(기능 12 + 문서 3, 커밋 목록은 12장)를 `develop`에 병합 `53f528e` → 로컬·원격 브랜치 삭제 → push(2026-09-18). `feature/study-pages`(기능 9 + 문서 2, 커밋 목록은 12장)를 `develop`에 병합 `4351c43` → 브랜치 삭제 → push(2026-09-20). `feature/seminar-pages`(기능 7 + 문서 1, 커밋 목록은 12장)를 `develop`에 병합 `8f704a4` → 브랜치 삭제 → push(2026-09-20). 이어서 `feature/page-transitions`(병합 `0cd15af`) · `feature/content-search`(병합 `d81c5fc`) · `feature/deploy`(병합 `36f0456`) · `feature/site-name-favicon`(병합 `cc6040f`)까지 병합·삭제했다. **원격**: `origin/develop` = 로컬 `develop`과 같음(2026-09-21 push), `origin/master` = `398be50`(로컬 `master`와 같음). `develop` → `master` 병합은 첫 배포 `ea31474`, Lia.log 배포 `398be50` 두 번 했다(12장)
- **다음 단계**: 홈 완료 → 프로젝트 목록·상세 완료(병합·push 완료) → 스터디 목록·글 완료(병합 `4351c43`, 5-15) → 세미나 목록·행사 상세 완료(병합 `8f704a4`, 5-16) + 홈 최근 기록 링크를 상세로(함께 끝냄) → 페이지 전환 모션 완료(병합 `0cd15af`, 5-17) → 콘텐츠 검색 완료(병합 `d81c5fc`, 5-19) → 배포 완료(`ea31474`, 5-20) → 사이트 이름 Lia.log·로고·파비콘 완료(`cc6040f`, 배포 `398be50`, 5-21) → **placeholder를 실제 콘텐츠로**(사용자가 재료를 준비하는 중) → 실기기 확인 → **마지막: 개발 과정 설명 세션**(2026-09-17 요청). 화면마다 `develop`에서 `feature/*` 브랜치를 새로 만든다

## 2. 새 채팅에서 이어서 시작하기
### 2-1. 지금 바로 할 일
1. `git status`로 브랜치와 작업 트리를 확인한다
   - 기대 상태: **`develop` 브랜치**, 마지막 커밋은 문서(`docs:`) 커밋이다. 작업 트리 깨끗, `origin/develop`과 같음
   - 기능 브랜치는 남아 있지 않다(`feature/site-name-favicon`도 병합 `cc6040f` 후 삭제). `origin/master` = `398be50`(Lia.log 배포)
   - ` 2`가 붙은 파일·폴더가 다시 보이면 iCloud 동기화 사본이다(2-2 끝). **묻지 않고 바로 지운다**(2026-09-22 사용자 결정)
   - **`master`에 push하면 배포가 돌아간다** — 실제 콘텐츠가 준비되면 `develop` → `master` 병합으로 다시 배포한다. 문서만 고칠 때는 `develop`에만 push한다
2. Node는 **nvm의 24**를 쓴다. 셸 기본값이 21.7.3이라 명령 전에 `source ~/.nvm/nvm.sh && nvm use`(`.nvmrc` = 24)를 먼저 실행한다. 검증 방법은 2-2
3. **지금은 북마크 카드(`feature/bookmark-card`, 5-22)를 마무리하는 중이다.** 사용자 확인 → 커밋 → `develop` 병합 → `develop` → `master` 병합으로 Pointer Quest·README와 함께 한 번에 배포한다. 그 뒤 **실제 콘텐츠 채우기(2-6)** 를 이어 간다 — 다음 재료가 오면 `develop`에서 `feature/real-content`를 다시 만든다(2026-09-22 Pointer Quest까지 병합 `6354a23`)
   - 그 전에 할 수 있는 선택 작업: 저장소를 iCloud 동기화 밖으로 옮기기(2-2 끝, 사용자 결정 필요)
4. 그 뒤 순서: 글이 쌓이면 `develop` → `master` 병합으로 배포 → 실기기 확인 → **마지막 단계: 개발 과정 설명 세션**(2026-09-17 사용자 요청)
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
- **실시간 브라우저 조종(CDP, 2026-09-21 도입)** — virtual time으로 볼 수 없는 것을 확인할 때 쓴다. 검색 창을 만들며 필요해졌고, 앞으로 모달·키보드·포커스가 걸린 기능은 이 방법이 낫다
  - **virtual time의 한계 2가지**: ① `<dialog>`의 `close` 이벤트가 오지 않는다(빈 `<dialog>`로도 재현) ② 스크립트로 만든 `KeyboardEvent`는 **신뢰된 입력이 아니라** Esc로 창이 닫히는 것 같은 브라우저 기본 동작이 일어나지 않는다
  - 방법: `--headless=new --remote-debugging-port=<포트>`로 Chrome을 띄우고 `http://127.0.0.1:<포트>/json/list`에서 page 타깃을 찾아 WebSocket으로 붙는다(Node 24에는 `WebSocket`이 내장이다). `Page.enable` · `Runtime.enable` 뒤 `Runtime.evaluate`(`awaitPromise: true`, `returnByValue: true`)로 페이지 안에서 async 함수를 돌리고 결과를 받는다
  - **`Emulation.setFocusEmulationEnabled { enabled: true }`를 반드시 켠다.** headless 창은 포커스를 갖지 못할 때가 있어, 켜지 않으면 `Input.dispatchKeyEvent`가 페이지에 닿지 않는다(증상: ⌘K를 보내도 아무 일도 없다)
  - 진짜 키 입력은 `Input.dispatchKeyEvent`(`keyDown`/`keyUp`, `key`·`code`·`windowsVirtualKeyCode`, modifiers는 Alt 1·Ctrl 2·Meta 4·Shift 8), 글자는 `Input.insertText`
  - **좁은 폭은 `Emulation.setDeviceMetricsOverride`로 바로 만든다** — 창 최소 폭 문제가 없어 320·390px iframe 하네스가 더 이상 필요 없다. `mobile` 값을 도중에 바꾸면 렌더러가 갈려 `Runtime.evaluate`가 응답하지 않으니 고정하고, 폭을 바꿀 때마다 `Page.navigate`로 다시 연다
  - 스크린샷은 `Page.captureScreenshot`, 명령마다 타임아웃(15초)을 두어야 응답이 없을 때 스크립트가 멈추지 않는다
  - 같은 출처 주의: `file://` 페이지에서 `http://localhost` iframe의 `contentWindow.document`는 교차 출처로 막힌다. 하네스 페이지는 `dist/`에 두어 같은 출처로 연다
- **` 2`가 붙은 사본 파일(2026-09-21 원인 확인)**: 저장소가 `~/Documents` 아래에 있고 macOS의 **iCloud "데스크탑 및 문서 폴더" 동기화**가 켜져 있다(`defaults read com.apple.finder FXICloudDriveDesktop` = 1). 동기화가 충돌을 만나면 `파일 2.확장자`·`폴더 2` 사본을 만든다. 이번에는 루트·`design/`·`src/` 파일 30개(세션 도중 스스로 사라짐), 빈 폴더 9개, `node_modules` 안 612개가 있었다. `.git` 안에는 없었다
  - 정리: 빈 폴더는 `rmdir`, `node_modules`는 통째로 지우고 `npm ci`(설치 스크립트 경고는 `fsevents` 하나뿐이고 무시해도 된다)
  - **2026-09-22 사용자 결정: ` 2` 사본은 원본과 내용이 달라도 묻지 않고 지운다**(원본은 git에 커밋된 쪽이 기준)
  - 근본 해결은 저장소를 iCloud 밖(예: `~/Developer/`)으로 옮기거나 동기화를 끄는 것이다. `.git` 안에 사본이 생기면 저장소가 깨질 수 있어 옮기는 편이 안전하다 — 사용자에게 제안만 했다

### 2-3. 최근 세션에서 끝낸 일 (요약, 자세한 결정은 5장)
- 북마크 카드(`feature/bookmark-card`, 2026-09-22, 커밋 대기, 결정은 **5-22**)
  - 쓰는 법: 글에 주소만 한 문단으로 쓴다(맨 URL 또는 `<https://…>`). `[글자](주소)`·문장 속 링크·목록 안 링크는 그대로 링크다
  - `src/lib/bookmark.ts`(Sätteri hast 플러그인, `astro.config.mjs`의 `markdown.processor: satteri({ hastPlugins: [bookmarkCard()] })`) · `src/lib/linkPreview.ts`(OG 읽기·이미지 확인·캐시) · `src/styles/prose.css`의 `.bookmark`
  - 확인: 빌드, 임시 주소 8가지(Apple 문서·GitHub·velog·한글 위키백과·없는 도메인·글자 링크·문장 속·목록 안), 스크린샷 320·390·768·1440 라이트/다크, 세미나 MDX에도 적용
- README 새로 작성(`feature/readme`, 2026-09-22, `develop` 병합 `5b8237c`)
  - 구성: 가운데 정렬 머리(이름·한 줄 소개·배지 4개·사이트 링크) → 스크린샷 3장 → 소개(앱 4개 표) → 주요 기능 7개 → 기술 스택 표 + 고른 이유 한 문단(`docs/tech-stack.md` 링크) → 시작하기(`nvm use`·명령 표) → 글 쓰기 → 배포(Git Flow) → 구조 → 문서 → 라이선스(`© 2026 Chu Yumin. All rights reserved.`, Pointer Quest README와 같은 표기)
  - 배지의 배포 상태는 `deploy.yml` 워크플로 배지라 저절로 갱신된다
  - 스크린샷 다시 찍는 법: `dist/*.html` 사본(2-2 방식)을 `--force-device-scale-factor=2`로 1440×900에서 찍고, 모바일은 390×844 iframe 3개 하네스(바탕 `#16131f`)를 1330×924로 찍은 뒤 `sips -Z 1600`. 글이 늘어 화면이 바뀌면 다시 찍는다
- 첫 실제 프로젝트 Pointer Quest(`feature/real-content`, 2026-09-22, 커밋 `30ce6e4`·`e8e6964`)
  - 재료: 사용자가 준 pointer-quest 저장소 README. 이미지는 그 저장소의 `docs/screenshots/raw/*.png`(1320×2868)와 기본 앱 아이콘(1024)을 받아 `sips`로 660×1434·512로 줄였다(가장 크게 보이는 폭이 190px × 2배라 충분하다)
  - 글: `src/content/projects/pointer-quest/index.md`. 분류 iOS + Side Project, 시작일은 저장소 생성일 2026-01-12, `1.1.0`을 개발 중이라 종료일을 비워 **진행 중**으로 둠. 주요 기능 3개(드래그 연결·개념 카드·플레이그라운드), 기술적으로 고민한 점 4개(레슨 데이터화·화살표 레이어·도식 단일 출처·색에만 기대지 않는 표기)
  - `sample-project` 삭제(2-6의 4단계). 이제 **새 프로젝트 글은 `pointer-quest/`를 복사해 쓴다**
  - 주의: 주요 기능 `description`은 Markdown이 아니라 일반 텍스트로 나온다(백틱이 그대로 보인다)
  - 확인: 빌드, 스크린샷 1440 다크(목록·상세·홈) / 390 다크(목록·상세) / 768 라이트(상세). 홈 최근 기록은 원래 스터디·세미나만 보여 주므로 프로젝트가 나오지 않는 게 맞다
- 사이트 이름·로고·파비콘(`feature/site-name-favicon` → `develop` 병합 `cc6040f` → `master` `398be50` 배포, 2026-09-21, 결정은 **5-21**)
  - 이름 `Lia.log`: `apps.ts`의 `SITE_NAME` 하나. 탭 제목은 `SiteLayout`이 `글 제목 · 앱 라벨 · SITE_NAME`으로 조립(상세 페이지 3곳의 `· Chu Yumin` 중복 제거). 실명은 자기소개와 `description` 메타에만 남김
  - 로고: `CY` 글자 → 창 그림 `BRAND`(`AppIcon`으로 그림). 홈 앱과 같은 그라디언트는 `LILAC` 상수
  - 파비콘: `public/favicon.svg`·`favicon.ico`(16·32)·`apple-touch-icon.png`(180) + `BaseLayout` 링크 3개. 후보 4개 중 사용자가 C. 창 선택
  - 확인: 빌드(커밋마다), 메뉴바 스크린샷 1440 라이트·다크 / 800 다크, 배포 run 35576351264 성공, 실제 주소에서 탭 제목·메뉴바·파비콘 3종 200
  - 함께 한 일: ` 2` 사본 파일 원인(iCloud 동기화) 확인·삭제·`npm ci`(2-2 끝), 콘텐츠 재료 형식 안내(2-6)
- 콘텐츠 검색(`feature/content-search` → `develop` 병합 `d81c5fc`, 2026-09-21, 결정은 **5-19**, 커밋 8개 목록은 12장)
  - 공용 헬퍼: `lib/markdownText.ts`(마크다운 → 본문 텍스트. 읽는 시간과 검색이 함께 쓰고 코드 블록만 `keepCode`로 가른다)
  - 색인: `pages/search-index.json.ts`(빌드 때 한 번) + `lib/searchIndex.ts`. `lib/content.ts` 헬퍼를 그대로 써서 draft 제외·정렬을 복제하지 않는다. 본문 전체를 담는다(임시 7건 기준 5.6KB / gzip 2.1KB)
  - 찾기: `lib/search.ts`(순수 함수). 낱말 AND, 걸린 칸의 무게로 정렬, 강조는 조각 배열로 돌려주고 요소는 컴포넌트가 만든다
  - 화면: `components/SearchPanel.astro`(`<dialog>` 모달, `SiteLayout`이 모든 화면에 하나) · `components/SearchButton.astro`(돋보기)
  - 셸 처리: 창이 열린 동안 메뉴바·Dock을 흐리게 한다(`styles/transitions.css`) — `transition:name`이 붙은 요소가 `::backdrop` 위에 그려지기 때문
  - 확인: 실시간 CDP로 열고 닫기 4경로·키보드·전환 뒤 재동작·색인 1회·브라우저 뒤로·색인 실패, 5폭 라이트/다크 화면. **사용자 브라우저 확인은 아직**
- 페이지 전환 모션(`feature/page-transitions` → `develop` 병합 `0cd15af`, 2026-09-20, 결정은 **5-17**, 커밋 6개 목록은 12장)
  - `ClientRouter`(`components/PageTransitions.astro`)를 `BaseLayout`에 넣어 링크 이동을 화면 전환으로 바꿨다
  - 전환 종류는 **두 주소의 관계**로 정한다(`astro:before-preparation`에서 `direction`을 바꿔 `<html data-astro-transition="…">`으로 내보냄): `open`·`close`·`push`·`pop`·`fade`. 모션은 `styles/transitions.css`
  - 스크립트 재실행: `lib/pageInit.ts`의 `onEachPage(setUp)` — 첫 화면에서 한 번, 그 뒤 `astro:after-swap`마다 다시. window·document에 건 이벤트는 `AbortSignal`로 끊는다. Dock·Toc·MenuClock·ThemeToggle·FilterChips·Window·CodeCopy가 쓴다
  - **전환하면 `<html>`의 속성이 새 문서 것으로 통째로 바뀌어 `data-theme`이 사라진다** → `BaseLayout`의 인라인 스크립트가 `astro:after-swap`에서 다시 붙인다
  - 메뉴바·Dock은 `transition:name`으로 본문 스냅샷에서 빼 제자리에 남긴다. 글로우는 일부러 빼지 않았다(화면 한 장이 통째로 넘어가야 해서)
  - 확인: 헤드리스 17항목 + **사용자 브라우저 확인** 통과(임시 콘텐츠 9건, 지적 없음). 전환 도중 화면은 헤드리스로 찍히지 않아 실제 브라우저에서만 볼 수 있었다(방법은 5-17 끝)
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

### 2-6. 다음 작업: 실제 콘텐츠 채우기 (2026-09-21 작성, 브랜치 `feature/real-content`)
화면과 기능은 모두 끝났다. 지금 사이트에 **공개된 글은 하나도 없다** — 예시 글 3개가 모두 `draft: true`라 목록은 빈 상태로 그려진다. 남은 일은 **사용자가 가진 실제 내용을 글로 옮기는 일**이라, 코드가 아니라 재료가 필요하다.

#### 확인된 사실
- `src/data/profile.ts`는 **이미 실제 내용이다**(인사말·문구·기술 4개·GitHub/Email). 대괄호가 남아 있지 않다
- 남은 대괄호 `[ ]`는 예시 글 3개뿐이다: `projects/sample-project/index.md`(15곳) · `seminars/sample-seminar/index.mdx`(22곳) · `study/sample-post.md`(12곳)
- 이 셋은 **스키마 검증과 새 글 복사용 틀**이다(5-10). 실제 글을 쓰면 지운다
- 임시 이미지 10장(프로젝트 5 · 세미나 5)도 실제 사진으로 바꾼다

#### 글 하나를 쓸 때 필요한 재료 (필드는 5-10, 스키마는 `src/content.config.ts`)
- **프로젝트**: 이름 · 한 줄 소개 · 분류(iOS/Web/Side Project) · 태그 · 앱 아이콘 · 시작일(진행 중이면 종료일 없음) · 역할 · 기술 스택 · 플랫폼 · 링크(App Store·GitHub, 있는 것만) · 스크린샷 · 주요 기능(제목·설명·폰 화면) · 본문(`## 소개` / `## 기술적으로 고민한 점` / `## 배운 점`)
- **스터디 글**: 제목 · 요약 · 카테고리(칩은 쓰인 카테고리를 모아 만든다) · 날짜 · 본문(`##` 소제목, 코드 블록은 ```` ```swift title="파일.swift" ````)
- **세미나**: 행사 이름 · 날짜 · 장소 · 짧은 소감 · 표지 사진(+설명) · 본문(`## SESSION 01 · 발표자` + `### 세션 제목` 한 쌍, 사진은 `<Photo>`·`<PhotoPair>`·`<PhotoSide>`)

#### 재료를 받는 형식 (2026-09-21 사용자에게 안내함)
- 글은 채팅에 편하게, 사진은 폴더(예: `~/Desktop/lia-log/프로젝트-앱이름/`)에 모아 경로만 받는다. Markdown 변환은 Claude가 한다. 없는 칸은 비워도 된다
- 컬렉션 하나씩, **프로젝트부터** 권했다
- 안내한 틀(위 필드와 같다)
  - 프로젝트: 이름 · 한 줄 소개 · 분류 · 태그 · 기간 · 역할 · 기술 스택 · 플랫폼 · 링크 · 주요 기능(이름+설명+화면, 0~3개) · 소개 · 기술적으로 고민한 점(문제→원인→해결→결과) · 배운 점 / 사진: 아이콘·스크린샷·기능 화면
  - 스터디: 제목 · 요약 · 카테고리 · 날짜 · 본문(코드는 파일 이름과 함께). 노션·블로그 원문을 붙여 줘도 된다고 했다
  - 세미나: 행사 이름 · 날짜 · 장소 · 짧은 소감 · 도입 · 세션(발표자/제목/내용, 사진 표시) · 배운 점·소감 / 사진: 표지 1장+설명, 세션별 사진

#### 순서
1. 사용자에게 재료를 받는다(컬렉션 하나씩 시작하는 편이 낫다)
2. 예시 폴더를 복사해 이름을 바꾸고 내용을 채운다 → `draft: false`
3. `npm run build` → `npm run dev`로 확인. 글이 생기면 **목록 정렬·필터 칩·Pager·홈 최근 기록·검색 결과가 모두 실제 내용으로 바뀌므로** 함께 본다
4. 각 컬렉션에 실제 글이 하나라도 생기면 그 컬렉션의 `sample-*`과 임시 이미지를 지운다
5. 커밋은 글 단위로 나눈다(`content:` 대신 `feat:` 또는 `docs:`가 아니라 실제 콘텐츠이므로 `content:`를 새로 쓰기보다 `feat: <컬렉션> 글 추가` 정도로 통일)

#### 진행 상황 (2026-09-22~)
- [x] 프로젝트 1: Pointer Quest(`projects/pointer-quest/`) + `sample-project` 삭제 — 커밋 완료, `develop` 병합·배포 전
- [ ] 다음 프로젝트·스터디 글·세미나는 재료가 오는 대로. 스터디·세미나의 `sample-*`은 그 컬렉션에 실제 글이 생길 때 지운다

#### 배포는 이미 되어 있다 (2026-09-21)
배포를 먼저 하기로 해 사이트가 이미 떠 있다(5-20, 최근 배포 `398be50`). 글을 쓰면 `develop`에서 확인 → `develop` → `master` 병합으로 올린다. 실제 주소에서 보면서 실기기 확인(남은 일)도 함께 할 수 있다.

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
| 세미나 병합 | 기능 7 + 문서 1 = 커밋 8개, 사용자 브라우저 확인 통과 | `feature/seminar-pages` | `develop` 병합 `8f704a4` → 브랜치 삭제 → push(2026-09-20) |
| 스크립트 재실행 | `lib/pageInit.ts`의 `onEachPage`로 컴포넌트 초기화를 감싸고 window·document 이벤트를 `AbortSignal`로 끊음(7개 컴포넌트) | `feature/page-transitions` | 목차 토글 1회 검사로 중복 등록 없음 확인(2026-09-20) |
| View Transitions | `ClientRouter`(`PageTransitions.astro`) 도입 + 전환 뒤 `data-theme` 복원 | `feature/page-transitions` | 전환 8회 동안 테마 유지 확인(2026-09-20) |
| 셸 고정 | 메뉴바·Dock에 `transition:name`을 주어 본문 스냅샷에서 제외 | `feature/page-transitions` | 빌드 HTML에서 `view-transition-name` 확인(2026-09-20) |
| 전환 모션 | 두 주소의 관계로 종류를 정하고(`push`·`pop`·`open`·`close`·`fade`) `styles/transitions.css`가 모션 선택 | `feature/page-transitions` | 종류 9가지 분류·CSS 파싱 확인(2026-09-20) |
| 전환 병합 | 기능 5 + 문서 1 = 커밋 6개, 사용자 브라우저 확인 통과 | `feature/page-transitions` | `develop` 병합 `0cd15af` → 브랜치 삭제 → push(2026-09-20) |
| 본문 텍스트 공용화 | 마크다운 → 읽는 글자 추출을 `lib/markdownText.ts`로 분리(`keepCode`로 코드 블록만 가름) | `feature/content-search` | 예시 글 3개로 읽는 시간 계산값 동일 확인, `b90396e`(2026-09-21) |
| 검색 색인·헬퍼 | 빌드 때 `/search-index.json`(본문 포함) + 찾기 헬퍼 `lib/search.ts`(화면 없음) | `feature/content-search` | 임시 7건으로 한글 부분 일치·대소문자·AND·2글자 문턱·묶음 검사, `b87ba8a`(2026-09-21) |
| 검색 창 | `<dialog>` 모달 `SearchPanel` + `SiteLayout` 연결 + ⌘K·Ctrl+K | `feature/content-search` | 실시간 CDP로 열고 닫기 4경로·키보드·전환 뒤 재동작·색인 1회, `1aa1fe7`(2026-09-21) |
| 셸 물러나기 | 창이 열린 동안 메뉴바·Dock을 흐리게(`transition:name`이 `::backdrop` 위에 그려지는 문제) | `feature/content-search` | 1440 라이트/다크 스크린샷으로 확인, `f77115f`(2026-09-21) |
| 돋보기 버튼 | `SearchButton` + 메뉴바(데스크톱·모바일 홈)·창 타이틀 바(모바일·태블릿) | `feature/content-search` | 5폭에서 한 곳에만 나오는 것·44px·제목 말줄임·포커스 복귀, `5a8e75e`(2026-09-21) |
| 검색 다듬기 | 걸린 태그·기술 보여 주기, "그 밖 N건", "불러오는 중…" | `feature/content-search` | 출처 3종·한도 낮춰 잘린 개수 일치 확인, `04e3022`(2026-09-21) |
| 검색 병합 | 기능 5 + 문서 3 = 커밋 8개, 사용자 브라우저 확인 통과 | `feature/content-search` | `develop` 병합 `d81c5fc` → 브랜치 삭제 → push(2026-09-21) |
| Pages 배포 설정 | `.github/workflows/deploy.yml`(master push에만, Node는 `.nvmrc`에서) | `feature/deploy` | 로컬 `npm ci` + 빌드로 CI와 같은 설치 확인, `54d0de2`(2026-09-21) |
| 저장소 공개 전환 | 무료 계정에서 Pages를 쓰려면 공개여야 한다. 비밀 값 없음 확인 | — | `gh repo edit --visibility public`(2026-09-21, 사용자 선택) |
| 첫 배포 | Pages를 GitHub Actions 방식으로 켜고 `develop` → `master` 병합 push | `master` | run 35572925109 성공, 5개 주소 200 확인, 병합 `ea31474`(2026-09-21) |
| 사이트 이름 | `Chu Yumin` → `Lia.log`(`SITE_NAME`), 탭 제목 조립을 `SiteLayout` 한곳으로 | `feature/site-name-favicon` | 빌드 결과 탭 제목·메뉴바 확인, `fbef4cb`(2026-09-21) |
| 메뉴바 로고 | `CY` 글자 → 창 그림(`BRAND` + `AppIcon`) | `feature/site-name-favicon` | 1440 라이트·다크, 800 다크 스크린샷, `15785f9`(2026-09-21) |
| 파비콘 | `public/favicon.svg`·`favicon.ico`(16·32)·`apple-touch-icon.png`(180) + `<head>` 링크 | `feature/site-name-favicon` | 후보 4개(반짝임·기록장·창·프롬프트) 중 사용자 선택 C, `f6894bb`(2026-09-21) |
| iCloud 사본 정리 | ` 2` 사본(빈 폴더 9 · `node_modules` 612) 삭제, `npm ci` | — | 원인 확인(2-2 끝), 남은 사본 0개(2026-09-21) |

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
- [x] `feature/seminar-pages` → `develop` 병합 `8f704a4` → 브랜치 삭제 → push (2026-09-20, 사용자 요청)
- [ ] 실기기 확인(이제 실제 주소에서 볼 수 있다 — https://yuminc03.github.io/my-homepage/): Dock 트랙패드 스크롤 느낌·하단 hover·"동작 줄이기" / 320px 폭에서 모바일 Dock이 화면 폭과 거의 같은 문제
- [x] **페이지 전환 모션 구현**(View Transitions `ClientRouter`, 메뉴바·Dock은 `transition:name`으로 제자리, 종류별 모션) — `feature/page-transitions`, 2026-09-20, 결정은 **5-17**
- [x] 페이지 전환 커밋 6개(`f3f2735`…, 12장, 2026-09-20)
- [x] 페이지 전환 사용자 브라우저 확인(2026-09-20, 임시 콘텐츠 9개로 확인, 문제 없음)
- [x] `feature/page-transitions` → `develop` 병합 `0cd15af` → 브랜치 삭제 → push (2026-09-20)
- [x] 콘텐츠 검색 방식 확정 4건(색인·여는 곳·결과 모양·입력 길이) — 2026-09-20 사용자 선택, 5-18
- [x] **콘텐츠 검색 기능 구현**(색인·헬퍼·검색 창·⌘K·돋보기·다듬기) — `feature/content-search`, 2026-09-21, 커밋 6개, 결정은 **5-19**
- [x] 콘텐츠 검색 사용자 브라우저 확인(2026-09-21, 임시 콘텐츠 7건으로 확인, 문제 없음)
- [x] `feature/content-search` → `develop` 병합 `d81c5fc` → 브랜치 삭제 → push (2026-09-21)
- [x] `draft` 제외 헬퍼·목록 정렬(날짜 내림차순)·날짜 표기 — `src/lib/content.ts`·`src/lib/date.ts`(2026-09-16, 홈 최근 기록과 함께). 목록 페이지도 이 헬퍼만 쓴다
- [x] 스터디 글 코드 블록 결정: 복사 버튼은 실제 동작, 파일 이름은 울타리 meta + Shiki transformer (2026-09-19, 5-15)
- [x] 스터디 읽는 시간 계산·목차 (2026-09-19~20, 5-15)
- [x] 세미나 MDX 컴포넌트 `Photo`·`PhotoPair`·`PhotoSide`(상세 페이지가 `<Content components={{ ... }} />`로 넘김) (2026-09-20, 5-16)
- [x] 본문(Markdown) 스타일 공용화: `src/styles/prose.css`로 분리 (2026-09-19, 5-15)
- [ ] **대괄호 `[ ]` placeholder를 실제 콘텐츠로** ← 다음 할 일(계획은 **2-6**). 남은 대괄호는 예시 글 3개뿐이고 `src/data/profile.ts`는 이미 실제 내용이다. 실제 글을 쓰면 예시 글 3개(`sample-*`)와 임시 이미지 10장을 삭제한다. **2026-09-22 프로젝트 Pointer Quest를 쓰고 `sample-project`를 지웠다**(남은 예시: 스터디·세미나)
- [x] GitHub Actions로 GitHub Pages 자동 배포 설정 + 저장소 공개 전환 + 첫 배포 성공 (2026-09-21, 5-20). 사이트: https://yuminc03.github.io/my-homepage/
- [x] 연락처 링크(GitHub·Email)는 `src/data/profile.ts`에 실제 주소로 들어가 있다(LinkedIn은 두지 않았다 — 동작 없는 링크 금지)
- [x] `develop` → `master` 병합 `ea31474`·push (2026-09-21, 첫 배포). 앞으로도 배포는 이 병합으로 한다
- [x] 사이트 이름 `Lia.log`·메뉴바 로고·파비콘 (2026-09-21, 5-21, 커밋 3개)
- [x] `feature/site-name-favicon` → `develop` 병합 `cc6040f` → 브랜치 삭제 → push, `develop` → `master` 병합 `398be50`으로 배포 (2026-09-21, 사용자 요청, run 35576351264 성공)
- [ ] (제안) 저장소를 iCloud 동기화 밖으로 옮기기 — ` 2` 사본이 `.git` 안에 생기면 저장소가 깨질 수 있다(2-2 끝)
- [ ] **마지막 단계: 개발 과정 설명 세션** — 사이트 완성 뒤 문법·핵심 기능·면접 예상 질문을 사용자에게 설명(2026-09-17 요청, 자세한 내용은 2-1의 4)
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
- 새 글 쓰기: `src/content/<컬렉션>/sample-*`를 복사해 이름을 바꾸고 `draft: false`로(프로젝트는 2026-09-22부터 실제 글 `pointer-quest/`를 복사한다). 필드가 틀리면 `npm run build`(또는 `npx astro sync`)가 어떤 필드가 왜 틀렸는지 알려 주며 실패한다
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
  - **확정(2026-09-20, 자세한 내용과 근거는 5-18)**: 빌드 때 컬렉션에서 제목·요약·태그·카테고리·본문 텍스트를 모은 JSON 색인을 만들고, 브라우저에서 부분 문자열로 찾는다. 한국어는 조사가 붙어 단어 단위 색인(Pagefind 등)에서 "스터디"로 "스터디를"을 놓칠 수 있는데, 부분 문자열 방식은 글 수가 적은 이 사이트에서 가볍고 정확하다. UI는 데스크톱 ⌘K / 메뉴바 아이콘으로 여는 가운데 검색 창
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

### 5-17. 페이지 전환 모션 구현 (2026-09-20 결정)
계획(옛 2-6)에서 세운 방침 두 가지가 **실제로는 맞지 않아 바꿨다**. 근거는 Astro 7.3.2의 `dist/transitions/router.js`·`swap-functions.js`를 직접 읽고 헤드리스로 확인한 결과다.
- **메뉴바·Dock은 `transition:persist`가 아니라 `transition:name`으로 고정한다(계획 변경)**
  - `transition:persist`는 요소를 **그대로 옮겨 온다** → 메뉴·Dock의 `aria-current="page"`(열린 앱 표시)가 이전 페이지 값으로 남는다. 활성 표시를 스크립트로 다시 칠해야 해서 오히려 손이 많이 간다
  - `transition:name`은 그 요소를 **본문 스냅샷에서 빼내** 따로 움직이게 한다. 본문이 옆으로 밀려도 셸은 제자리에 남고, 요소 자체는 새 페이지 것으로 갈아 끼워지므로 활성 표시가 저절로 맞는다. 전환은 Astro 기본 페이드(180ms)라 바탕 유리 ↔ 창 유리처럼 모양이 바뀔 때만 짧게 겹친다
  - **`transition:name`을 컴포넌트 태그(`<MenuBar transition:name="menubar" />`)에 붙이면 속성이 루트 요소로 내려가지 않는다**(빌드 결과에 `data-astro-transition-scope`가 없다). 각 컴포넌트 안의 실제 요소(`<header class="menubar">`·`<nav class="dock-zone">`)에 붙였다
  - 글로우(`SiteLayout`의 `.glow`)는 일부러 이름을 주지 않았다. 바탕까지 함께 밀려야 "화면 한 장이 통째로 넘어가는" OS 메타포가 되고, 이름을 주면 스냅샷이 본문 **위**로 올라가 블러 얼룩이 글자를 덮는다
- **스크립트 재실행은 `astro:page-load`가 아니라 `astro:after-swap`에서(계획 변경)**
  - `astro:page-load`는 **첫 화면에서 window의 `load` 뒤에** 온다(`router.js`의 `addEventListener('load', onPageLoad)`). 그 사이 목차가 펼쳐진 채 보였다가 접히는 식으로 초기 상태가 노출된다
  - `astro:after-swap`은 DOM을 갈아 끼운 직후, 새 화면을 그리기 전에 온다. 그래서 **첫 화면은 모듈이 실행될 때 바로 한 번, 그 뒤로는 `astro:after-swap`마다** 다시 부른다 → `src/lib/pageInit.ts`의 `onEachPage(setUp)`
  - window·document에 건 이벤트는 페이지를 옮겨도 살아남아 전환할 때마다 쌓인다 → `onEachPage`가 넘겨주는 `AbortSignal`을 `addEventListener`에 주어 다음 전환에서 한꺼번에 끊는다(요소 자신에게 건 이벤트는 요소가 통째로 바뀌므로 그냥 둔다)
  - 쓰는 곳: `Dock`(스크롤·포인터, 숨김 타이머) · `Toc`(스크롤) · `MenuClock`(분 경계 타이머·`visibilitychange`) · `ThemeToggle`(버튼 이름만 다시. 클릭은 문서 위임이라 한 번만 건다) · `FilterChips` · `Window`(‹ 링크) · `CodeCopy`
- **전환 뒤 테마가 풀리는 문제**: `swapRootAttributes()`가 `<html>`의 속성을 **모두 지우고** 새 문서 것으로 바꾼다. 새 문서에는 `data-theme`이 없으므로(빌드 시점에는 모르는 값) 전환할 때마다 시스템 테마로 돌아간다 → `BaseLayout`의 인라인 스크립트가 `astro:after-swap`에서 다시 붙인다. `<head>` 인라인 스크립트 자체는 전환 때 다시 실행되지 않지만, `document`에 건 리스너는 살아남는다
- **전환 종류는 기록(앞으로/뒤로)이 아니라 두 주소의 관계로 정한다**
  - `astro:before-preparation`에서 `event.direction`에 값을 넣으면 ClientRouter가 `<html data-astro-transition="그 값">`으로 달아 준다(`forward`/`back` 말고 아무 문자열이나 된다 — `router.js` 316행). CSS는 `[data-astro-transition='push']::view-transition-old(root)`처럼 그 값으로 고른다
  - 규칙(`components/PageTransitions.astro`): 홈 → 창 `open` · 창 → 홈 `close` · 목록 → 상세 `push` · 상세 → 목록 `pop` · 다른 앱으로 `fade`. 상세 ↔ 상세(맨 아래 이전/다음)는 깊이가 같아 주소로는 모르므로 **누른 링크의 `rel`**(`Pager`가 붙이는 `prev`/`next`)로 가른다
  - 브라우저 뒤로 가기도 같은 규칙을 탄다. 상세에서 뒤로 가면 주소 관계가 상세 → 목록이라 저절로 `pop`이 된다
  - 상세는 "구획 2개 이상"으로 본다(스터디 글은 폴더를 더 둘 수 있어 `/study/a/b/`가 될 수 있다)
- **모션은 `root` 한 장만 움직인다**(`src/styles/transitions.css`): 메뉴바·Dock이 스냅샷에서 빠져 있어 `root`는 사실상 본문 + 바탕이다. `push`는 새 화면 `translateX(100%)→0` · 옛 화면 `translateX(-24%)` + opacity .4(`--dur-push` 360ms), `pop`은 그 반대(`--dur-pop` 300ms). 모바일·태블릿 `open`은 `translateY(100%)→0`(`--dur-sheet` 420ms) + 홈 `scale(.94)`, 데스크톱 `open`은 `translateY(10px) scale(.95)` + 페이드(`--dur-window` 320ms). 닫기는 여는 시간의 약 70%에 `--ease-in`(5-9)
  - `pop`·`close`는 **나가는 화면이 위**에 있어야 그 아래에서 목록·홈이 드러난다 → `::view-transition-old(root) { z-index: 1 }`
  - `fade`는 규칙을 두지 않고 브라우저 기본 크로스 페이드를 쓴다
- **동작 줄이기는 Astro 기본을 따른다(계획 변경)**: `astro/components/viewtransitions.css`가 `prefers-reduced-motion`에서 모든 전환 애니메이션을 `animation: none !important`로 끈다. 계획의 "짧은 페이드"로 되돌리려면 `!important` 싸움을 해야 하는데, 이동도 페이드도 없이 곧바로 바뀌는 쪽이 "동작 줄이기"에 더 맞아 그대로 두었다
- **확인 결과(헤드리스, 임시 콘텐츠 6개 = 프로젝트·스터디·세미나 각 2개)**
  - 전환 종류 9가지 모두 의도대로: 목록→상세 `push` · 상세→목록 `pop` · 목록→홈 `close` · 홈→목록 `open` · 다음 글 `push` · 이전 글 `pop` · 다른 앱 `fade` · 브라우저 뒤로 `pop` · Dock 연락처(해시 링크) `close` + `#contact` 도착 ✓
  - 테마: 전환 10회 동안 `data-theme="dark"` 유지 ✓ / Dock: 목록 `shown` · 상세 `hidden` ✓ / 시계: 전환마다 다시 채워짐 ✓
  - 필터: `?category=`가 상세 ‹ 링크와 브라우저 뒤로 모두에서 유지되고 칩·카드가 다시 걸림 ✓ / 목차 토글 1회에 1번만 반응(중복 등록 없음) ✓ / 복사 버튼 `hidden` 풀림 ✓
  - CSS: 전환 규칙 12개가 브라우저에 그대로 파싱됨(`z-index`·데스크톱 미디어 쿼리 포함) ✓ · 빌드 HTML에 `view-transition-name: menubar`·`dock` ✓
  - 전환 **직후** 화면은 1440 라이트/다크에서 정상 ✓. **전환 도중 화면은 헤드리스로 찍히지 않았다**(가상 시계에서 애니메이션을 멈춰 세우면 스크린샷이 나오지 않고, 멈추지 않으면 끝난 뒤에 찍힌다) → 사용자 브라우저 확인 항목(2-6)
  - 검사 방법(다시 쓸 때): `astro preview`를 띄우고 `dist`의 시작 페이지 `<head>` 맨 앞에 검사 스크립트를 끼운다. 전환은 `document.startViewTransition = undefined`로 끄고 `<meta name="astro-view-transitions-fallback">`을 `swap`으로 바꿔야 한다(가상 시계에서는 View Transition도 fallback 애니메이션도 끝나지 않는다). 메타는 전환마다 새 문서 것으로 바뀌므로 `astro:after-swap`에서 매번 다시 바꾼다. `data-astro-transition`은 전환이 끝나면 지워지므로 `astro:after-swap`에서 붙잡아 둔다
  - **CSSOM으로 규칙을 셀 때 주의**: 요즘 Chrome은 일반 `CSSStyleRule`에도 (비어 있는) `cssRules`가 있어, `if (rule.cssRules) 재귀`를 먼저 두면 모든 규칙을 건너뛴다. `selectorText`를 먼저 본다

### 5-18. 콘텐츠 검색 (2026-09-20 결정)
구현 전에 사용자가 4가지를 모두 정했다. 5-12에 추천안으로만 적어 두었던 검색 방식이 이 결정으로 확정됐다.
- **색인 — 빌드 때 만드는 JSON 한 벌에 본문까지 담고, 브라우저에서 부분 문자열로 찾는다(사용자 선택)**
  - 담을 것: 제목·요약·태그·분류 + **본문 텍스트**. "본문에서 SwiftData를 다룬 글"처럼 내용으로도 찾을 수 있어야 해서다
  - 부분 문자열로 찾는 이유: 한국어는 조사가 붙어(`스터디를`) 단어 단위 색인이 `스터디`를 놓친다. 글 수가 적은 이 사이트에서는 부분 문자열이 가볍고 정확하다
  - 대안으로 본 Pagefind는 의존성이 늘고 같은 조사 문제를 안는다. 제목·요약만 담는 안은 가볍지만 내용으로 찾을 수 없어 뺐다
  - **감수하는 약점**: 글이 늘면 색인 파일이 커진다. 검색 창을 **처음 열 때 내려받고**(첫 화면 비용 0) 그 뒤로는 재사용한다. 색인이 부담스러워지면 그때 본문을 빼거나 앞부분만 담는다
- **여는 곳 — 창 타이틀 바의 돋보기(사용자 선택)**
  - 모바일·태블릿 창 화면에는 메뉴바가 없어(시트가 화면을 채운다) 타이틀 바가 유일하게 모든 화면에 있는 자리다. 목록·상세 어디서나 한 번에 닿는다
  - 타이틀 바는 `[‹ 또는 창 점] [제목] [돋보기] [✕]`가 된다. 지금 grid는 `80px | 1fr | 80px`(모바일) · `100px | 1fr | 100px`(태블릿)이고 오른쪽 칸에 ✕ 하나뿐이라, **오른쪽 칸 폭을 44px만큼 늘리고 가운데 제목 칸이 줄어드는 것을 확인해야 한다**(긴 제목 말줄임)
  - 홈에서는 메뉴바의 테마 버튼 옆에 둔다. 데스크톱은 메뉴바에만 두고 타이틀 바는 지금 그대로 둔다(시안의 검색 아이콘 자리)
  - 대안: 목록 화면 위 검색 칸은 상세에서 못 쓰고 필터 칩과 겹쳐 목록 머리가 무거워진다. Dock 추가는 아이콘이 6개가 되어 320px에서 화면 폭을 넘길 위험이 있다(알려진 문제, 2-3)
- **결과 — 컬렉션별로 묶고 일치한 글자를 강조한다(사용자 선택)**
  - 프로젝트 · 스터디 기록 · 세미나 기록으로 묶고 묶음마다 소제목. 결과가 없는 묶음은 그리지 않는다
  - 찾은 글자는 라일락(`--win-accent` 계열)으로 강조한다. **본문에서 걸렸으면 그 앞뒤 한 줄을 함께 보여 준다** — 제목·요약에 없는 말이 왜 걸렸는지 알 수 있어야 해서다(본문을 색인에 담기로 한 결정과 짝이다)
  - 강조는 문자열을 직접 이어 붙이지 말고 찾은 조각을 나눠 요소로 만든다(글 내용이 HTML로 해석되지 않게)
- **2글자부터 찾는다(사용자 선택)**
  - `아`·`a` 한 글자에 거의 모든 글이 걸려 목록을 다시 보는 것과 같아지는 것을 막는다
  - 1글자 이하일 때는 "두 글자 이상 입력하세요" 같은 안내 대신 **최근 글을 조용히 보여 준다**(빈 화면을 만들지 않는다). 몇 개를 보여 줄지는 구현하면서 정한다
  - 치는 대로 좁혀지고(Enter를 기다리지 않는다), 입력이 빠를 때 화면이 덜컹거리지 않게 한 프레임에 한 번만 다시 그린다

### 5-19. 콘텐츠 검색 구현 (2026-09-21 결정)
방식 4가지는 5-18에서 정해 두었고, 여기에는 **구현하면서 정한 것과 만든 뒤에야 알게 된 것**을 적는다.
- **검색 창은 `<dialog>`의 `showModal()`로 만든다**
  - 한 줄로 네 가지가 따라온다: top layer로 올라가 메뉴바(z-index 80)·Dock(60) 위에 뜨고, 뒤 화면이 눌리지 않고(inert), Tab이 창 밖으로 새지 않고, Esc로 닫힌다. 직접 만들면 넷을 모두 손으로 써야 한다
  - 뒷정리(입력·결과 비우기, 스크롤 잠금 해제, 포커스 돌려주기)는 **`close` 이벤트 한 곳**에 모았다. Esc·backdrop·닫기 버튼·`astro:before-preparation` 어느 경로로 닫혀도 여기를 지난다
  - **입력칸은 `type="search"`가 아니라 `type="text"`다.** search 입력칸은 Esc를 가로채 **값만 지우고 창을 닫지 않는다**(브라우저마다 다르다). Esc는 언제나 창을 닫아야 해서 text로 두고 모바일 키보드 확인 키만 `enterkeyhint="search"`로 맞췄다
  - 여는 버튼을 `open(from)`으로 **명시적으로 기억한다**. 맥 사파리·파이어폭스는 버튼을 눌러도 포커스를 주지 않아, `document.activeElement`만 보면 닫을 때 포커스가 `<body>`로 돌아간다
- **`transition:name`이 붙은 요소는 모달의 `::backdrop`보다 위에 그려진다(만든 뒤 발견)**
  - 증상: 뒤 화면은 흐려지는데 메뉴바·Dock만 또렷하게 남아, 누를 수도 없으면서 살아 있는 것처럼 보였다
  - **열릴 때 `view-transition-name: none`으로 바꾸는 방법은 듣지 않는다.** 계산값은 바뀌지만 이미 올라간 합성 레이어가 내려오지 않아 그대로 위에 그려진다(Chrome 153에서 확인)
  - 그래서 그리는 순서를 다투지 않고, 창이 열린 동안 셸을 직접 `opacity: .4` + `blur(6px)`로 물러나게 했다(`styles/transitions.css`). 순서가 반대인 브라우저에서도 결과가 같아 안전하다
- **색인**
  - 본문은 **전체를 담는다**. 임시 7건 기준 5.6KB(gzip 2.1KB), 글 하나당 800B·gzip 300B다. 앞부분만 자르면 글 뒤쪽을 못 찾는 손해가 더 크다. 5-18의 "부담스러워지면 그때 자른다"는 그대로 남겨 둔다
  - 만드는 곳은 엔드포인트 `src/pages/search-index.json.ts`(정적 빌드라 빌드 때 한 번 돌고 파일로 남는다) + `lib/searchIndex.ts`. `lib/content.ts` 헬퍼를 그대로 써서 draft 제외·정렬 규칙을 복제하지 않는다
  - **색인 주소 상수는 `lib/search.ts`에 둔다.** 엔드포인트 파일은 `astro:content`를 끌어와 브라우저가 import할 수 없다
  - 프로젝트는 프런트매터의 **주요 기능(제목·설명)** 도 본문에 붙인다. 상세 화면에 보이는 글자이기 때문이다
  - 코드 블록은 색인에서 뺀다(결과 문장이 지저분해지고 색인만 커진다). 읽는 시간은 코드도 세므로, 공용 헬퍼 `lib/markdownText.ts`에서 `keepCode` 옵션으로 갈랐다
- **찾기 규칙(`lib/search.ts`, 순수 함수)**
  - 낱말을 공백으로 나눠 **모두 가진 글만**(AND) 고른다. 공백이 여러 개여도 빈 낱말이 생기지 않는다
  - 점수는 걸린 칸의 무게 합: 제목 6 · 요약/분류/태그 3 · 본문 1. 같으면 색인 순서(= 목록 순서, 최신 글 먼저)를 지킨다. **묶음 순서는 점수와 무관하게 메뉴 순서**(프로젝트 → 스터디 → 세미나)라 점수는 묶음 안에서만 의미가 있다
  - 결과 줄은 **요약 → 본문 발췌 → 걸린 태그·기술** 순으로 고른다. 태그·기술은 화면에 없는 값이라, 여기서만 걸리면 강조가 하나도 없어 왜 나왔는지 알 수 없었다(다듬기에서 고침)
  - 강조는 `{ text, hit }` 조각 배열로 돌려주고 요소는 컴포넌트가 만든다. 소문자로 바꿔도 길이가 같은 글자(한글·영문)만 다루므로 원문 위치를 그대로 쓸 수 있다
  - 묶음마다 5건까지 그리고 넘으면 "그 밖 N건". 안내 줄의 전체 건수와 어긋나지 않게 한다
- **전환과의 관계**: 창은 페이지를 옮기지 않으므로 전환(5-17)과 겹치지 않는다. 결과를 누르면 전환이 시작되므로 `astro:before-preparation`에서 창을 닫는다. 스크립트는 `onEachPage`로 감싸고, 색인은 **모듈 바깥**에 캐시해 페이지를 옮겨도 다시 받지 않는다(전환 뒤에도 요청 1회 확인)
- **결과 요소는 스크립트가 만들어 Astro 스코프 속성이 붙지 않는다** → 스타일을 `.results :global(...)`로 한정했다(Markdown 본문에 `prose.css`를 쓰는 것과 같은 이유)
- **확인 결과(임시 콘텐츠 7건 = 프로젝트 2 · 스터디 3 · 세미나 2)**
  - 찾기: 한글 부분 일치(`마이그레이`) · 조사 붙은 본문(`개발자` → `개발자들이`) · 대소문자 무시(`swiftui`/`SWIFTUI`) · 공백 여러 개 · AND(`위젯 아스트로` 0건) · 숨은 칸(`WidgetKit`·날짜) · 2글자 문턱 ✓
  - 창: ⌘K 열기·토글 · Esc · 닫기 버튼 · backdrop 클릭 — 네 경로 모두 뒷정리까지 ✓ / 창이 열린 동안 바깥 링크로 포커스가 새지 않음 ✓ / 닫으면 열었던 자리로 포커스 복귀 ✓
  - 이동: ↓↓ 첫·둘째 결과 → ↑↑ 입력칸 복귀 → Enter로 상세 도착, 창 닫힘·스크롤 잠금 해제 ✓ / 브라우저 뒤로 와도 창은 닫힌 상태 ✓ / 옮긴 페이지에서 ⌘K 다시 동작, **색인 요청 총 1회** ✓
  - 실패: 색인을 받지 못하면 안내를 띄우고 다시 열면 재시도 ✓
  - 화면: 320·390·768·1180·1440 × 라이트/다크 ✓ / 빈 결과 · 1글자(최근 글) · 태그에서만 걸린 결과 ✓
  - **사용자 브라우저 확인 통과(2026-09-21)** — 임시 콘텐츠 7건으로 여는 길 4가지, 찾기 6가지(`swift`·`마이그레이`·`위젯 습관`·`widgetkit`·없는 말·한 글자), 키보드만으로 열기→이동→선택→뒤로, 셸이 물러나는 정도까지 확인했고 **지적 사항 없음**. 확인 뒤 임시 콘텐츠는 삭제했고 예시 글 `sample-*`은 `draft: true` 그대로다

### 5-20. GitHub Pages 배포 (2026-09-21 결정)
- **저장소를 공개로 전환했다(사용자 선택)**. GitHub Pages는 무료 계정에서 **공개 저장소만** 지원하고, 비공개로 쓰려면 Pro 이상이 필요하다. 전환 전에 비밀 값이 없는지 확인했다(개인 정보는 `profile.ts`의 이메일뿐이고 포트폴리오 연락처로 의도한 값이다). 대안으로 본 Cloudflare Pages는 비공개도 무료지만 주소가 바뀌고 `base: '/my-homepage'`를 없애야 해서(5-11 결정 변경) 택하지 않았다
- **`master`에 push할 때만 배포한다**(`.github/workflows/deploy.yml`). Git Flow에서 `master`가 공개된 상태이고 `develop`은 통합용이다. 문서만 고칠 때는 `develop`에 두어 배포가 돌지 않게 한다. 손수 돌리려면 `workflow_dispatch`
- **Node 버전을 워크플로에 적지 않는다**: `node-version-file: .nvmrc`로 읽어 한 곳에서만 정한다. Astro 공식 `withastro/action`은 기본이 Node 20이라 Astro 7의 요구 사항(22.12+)을 맞추지 못해 쓰지 않고 단계(`checkout` → `setup-node` → `npm ci` → `npm run build` → `upload-pages-artifact` → `deploy-pages`)를 직접 썼다
- Pages는 API로 켰다: `gh api -X POST repos/:owner/:repo/pages -f build_type=workflow`. **브랜치 배포 방식이 아니라 "GitHub Actions" 방식**이어야 이 워크플로가 동작한다
- `concurrency`는 `cancel-in-progress: false`다. 진행 중인 배포를 끊으면 사이트가 반쯤 올라간 상태로 남을 수 있다
- **확인 결과(2026-09-21)**: 첫 배포 성공(run 35572925109). `/`·`/projects/`·`/study/`·`/seminars/`·`/search-index.json` 모두 200, 홈 제목·검색 창·돋보기·`base` 경로 에셋 10개 정상, 실제 화면 스크린샷 확인. **공개된 글이 없어 색인은 `[]`이고 목록은 빈 상태로 나온다**(예시 글 3개가 `draft: true`)
- 워크플로 로그에 나오는 경고 2건은 조치하지 않아도 된다: `actions/checkout@v4` 등이 Node 20을 target한다는 안내(러너가 알아서 24로 돌린다)와 `ubuntu-latest`가 2026-10-19부터 Ubuntu 26으로 바뀐다는 안내

### 5-21. 사이트 이름·로고·파비콘 (2026-09-21 결정)
- **사이트 이름 `Lia.log`(사용자 제안)**: 사용자 닉네임 "리아" + 기록을 뜻하는 `.log`. 후보로 `Yumin.log`·`Yumin OS`·`Yumin's Desk`를 냈고 사용자가 닉네임으로 바꿔 골랐다
  - 쓰이는 곳: 메뉴바 왼쪽 끝, 브라우저 탭 제목(홈 `Lia.log` / 목록 `프로젝트 · Lia.log` / 상세 `글 제목 · 프로젝트 · Lia.log`)
  - **실명은 남긴다**: 홈 인사말 "Chu Yumin입니다."·코드 위젯 `Avatar(name:)`는 자기소개이고, `description` 메타는 실명 검색에 걸리도록 `iOS 개발자 Chu Yumin의 …`를 유지한다
  - 이름은 `apps.ts`의 `SITE_NAME` 하나. 상세 페이지 3곳이 `· Chu Yumin`을 각자 붙이던 중복을 없애고 `SiteLayout`이 `[글 제목, 앱 라벨, SITE_NAME]`을 조립한다(상세는 `title={data.title}`만 넘긴다)
- **로고·파비콘은 글자 없이 그림 하나(사용자 요청)** — 이니셜은 이름이 바뀌면 다시 만들어야 하고 16px에서 두 글자는 뭉개진다. 후보 4개(반짝임 ✦ · 기록장 · 창 · 프롬프트 `>_`)를 16px 탭 모형까지 그려 비교했고 **C. 창**(타이틀 바가 있는 창 = 사이트의 데스크톱·창 메타포)을 골랐다
  - 그림 기준은 `apps.ts`의 `BRAND`(24 viewBox, 창이 타일의 62.5%, 선 1.875). 메뉴바는 다른 앱 아이콘처럼 `AppIcon`으로 그리고 크기는 `.brand`의 CSS 변수로 내려보낸다(자식 컴포넌트 루트에 스코프 스타일이 닿지 않아서)
  - 홈 앱과 로고가 같은 라일락 그라디언트라 `LILAC` 상수로 묶었다
- **파비콘 파일 3개**(`public/`): `favicon.svg`(기준, 어떤 크기든 선명) · `favicon.ico`(16·32 PNG 내장, SVG를 못 읽는 브라우저) · `apple-touch-icon.png`(180, iPhone 홈 화면 추가용)
  - SVG의 색은 16진수(`#ab8be3` → `#736ace`, `oklch`를 계산해 바꿈) — 파비콘 SVG의 `oklch` 지원이 브라우저마다 달라서
  - apple-touch-icon은 **모서리를 깎지 않은 꽉 찬 사각형**이다. iOS가 모서리를 스스로 깎고 투명한 곳은 검게 채우기 때문
  - ICO·PNG는 SVG에서 `sharp`(Astro 의존성으로 이미 설치됨)로 만들었다. 스크립트는 scratchpad에 두었다가 사라졌다 — 다시 만들려면 `sharp(svg, { density: 72 * size / 24 }).resize(size).png()`로 PNG를 만들고, ICO는 헤더 6바이트 + 항목 16바이트 × n + PNG 데이터를 이어 붙인다
  - `<link rel="icon" href=".ico" sizes="32x32">`를 SVG보다 먼저 둔다. `sizes`가 없으면 Chrome이 SVG 대신 ICO를 고르는 경우가 있다. 주소는 `withBase()`
  - **모양을 바꿀 때는 `BRAND`와 `favicon.svg`를 함께 고치고 ICO·PNG를 다시 만든다**(정적 파일이라 코드에서 읽을 수 없다)

### 5-22. 북마크 카드 (2026-09-22 결정)
- **넣는 방식: 주소만 한 문단으로 쓰면 카드가 된다**(사용자 선택). 대안이던 MDX `<Bookmark url>`은 확실하지만 `.md` 글을 `.mdx`로 바꾸고 상세 페이지마다 컴포넌트를 넘겨야 한다
  - 대상은 **링크 하나만 든 `<p>`이면서 링크 글자가 주소 그대로**인 것. `[글자](주소)`는 쓴 사람이 글자를 고른 링크라 그대로 둔다(카드로 만들기 싫을 때 쓰는 탈출구). 목록 항목에는 `<p>`가 없어 목록 속 주소도 그대로다
  - 한글 주소는 `href`만 퍼센트 인코딩되고 링크 글자는 한글이라, `decodeURI(href)`와도 비교한다(확인 중 발견)
- **정보 출처: 빌드할 때 자동으로**(사용자 선택). 그 페이지 `<head>`의 `og:*` → `twitter:*` → `<title>`·`description` 순서, 인코딩은 응답 헤더·`<meta charset>`(EUC-KR 대비). 썸네일·파비콘은 실제로 `image/*`가 오는지 확인한 것만 남긴다(아이콘 없으면 `/favicon.ico`)
  - **캐시 `src/data/link-previews.json`을 커밋한다**: 배포 빌드가 네트워크·상대 사이트 상태와 무관하게 같은 카드를 그리고, 빌드도 빨라진다. 주소 순으로 정렬해 저장. **다시 가져오려면 그 항목을 지우고 빌드**, 글에서 주소를 지워도 항목은 남으므로 손으로 지운다
  - 가져오지 못하면(타임아웃 8초·404·HTML 아님) 빌드 로그에 `[bookmark]` 경고를 남기고 **도메인 이름·주소만 있는 카드**로 그린다. 실패는 캐시하지 않아 다음 빌드에서 다시 시도한다
  - 썸네일·파비콘은 상대 사이트 이미지를 그대로 건다(`referrerpolicy="no-referrer"`, `loading="lazy"`). 내려받아 저장하지 않은 것은 저작권·저장소 용량 때문
- **구현 위치: Sätteri hast 플러그인**(`src/lib/bookmark.ts`). `visit`가 Promise를 돌려주면 그 노드와 바꿔 끼우므로(Shiki 강조가 같은 방식) 빌드 중 `fetch`가 가능하다. `markdown.processor: satteri({ hastPlugins })`로 넣으면 Shiki 설정은 그대로 전달되고 MDX도 이어받는다(`@astrojs/mdx`의 `extendMarkdownConfig`). 프로젝트 상세의 `sections.ts`처럼 HTML 문자열을 다시 자르는 방식보다 세 컬렉션에 한 번에 적용된다
- **모양**(`prose.css`의 `.bookmark`): 카드 바탕 `--win-card` + 테두리 `--win-divider`(hover `--win-chip-line`), 모서리 14px, 누름 `scale(.99)`. 글(제목·설명·파비콘+주소) → 오른쪽 썸네일
  - OG 이미지는 대부분 1.91:1이라 카드 높이가 늘면 좌우가 잘린다 → **줄 수를 묶어 높이를 고정**: 모바일 제목 2줄·설명 1줄·썸네일 30%(88–120px) / 태블릿·데스크톱 제목 1줄·설명 2줄·썸네일 `min(34%, 224px)`(약 220×118로 OG 비율과 비슷)
  - 새 창으로 열리고 스크린 리더용 "(새 창)"을 넣는다(프로젝트 상세 링크 버튼과 같은 방식)
  - 알려진 한계: GitHub처럼 **시스템 테마를 따르는 SVG 파비콘**은 사이트 테마를 시스템과 다르게 고정하면 잘 안 보일 수 있다

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
| `src/content/projects/pointer-quest/` | 첫 실제 프로젝트 `index.md` + 아이콘(512)·스크린샷 5장(660×1434, 그중 3장을 주요 기능에도 씀). 예시 `sample-project/`는 2026-09-22에 지웠다 |
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
| `src/lib/bookmark.ts` | 북마크 카드 Sätteri hast 플러그인 `bookmarkCard()`: 주소만 든 문단 → `<a class="bookmark">` 카드. `astro.config.mjs`가 쓴다(5-22) |
| `src/lib/linkPreview.ts` | `getLinkPreview(url)`: OG 태그 읽기·이미지 확인·`src/data/link-previews.json` 캐시(5-22) |
| `src/lib/codeBlock.ts` | 코드 블록 Shiki transformer(`<figure>`로 감싸고 파일 이름 머리줄·복사 버튼)와 시안 색 테마 `CODE_THEME`. `astro.config.mjs`가 쓴다(5-15) |
| `src/styles/prose.css` | Markdown 본문 공통 스타일(`.prose-body`): 문단·목록·강조·링크·이미지·인라인 코드·인용, 간격 변수 `--prose-gap`. `code-block.css`를 `@import` |
| `src/styles/code-block.css` | 코드 블록 모양: 머리줄·복사 버튼·줄 번호(CSS 카운터 + sticky)·폭별 글자 크기. 테마와 무관한 고정 어두운 색 |
| `src/layouts/SiteLayout.astro` | 공통 셸: 고정 글로우 바탕 3개 · `MenuBar` · `<main>` · `Dock`. props `active`(앱 id), `surface`(`desk` 홈 / `window` 창 화면), `title`·`description`, `dockHidden`(상세). 글로우는 전환 때 본문과 함께 밀린다(이름을 주지 않는다, 5-17) |
| `public/favicon.svg` · `favicon.ico` · `apple-touch-icon.png` | 파비콘(창 그림, `BRAND`와 같은 모양). ICO 16·32, 애플 180 꽉 찬 사각형(5-21) |
| `src/data/apps.ts` | 사이트 이름 `SITE_NAME`(`Lia.log`), 로고 그림 `BRAND`(5-21), 앱 목록 `APPS`(홈·프로젝트·스터디 기록·세미나 기록: 라벨·창 제목·설명·경로·아이콘 바탕·SVG), `CONTACT`(`/#contact`), `CODE_EDITOR`(`/#code`, 데스크톱 Dock 전용), `getApp()` |
| `src/lib/url.ts` | `withBase(path)`: base(`/my-homepage`)를 붙인 내부 경로. 내부 링크는 모두 이것으로 만든다 |
| `src/components/AppIcon.astro` | 아이콘 타일. 크기는 부모의 CSS 변수(`--icon-size`·`--icon-radius`·`--glyph-size`·`--glyph-stroke`), `shadow` 옵션 |
| `src/components/MenuBar.astro` | 유리 메뉴바. 로고는 `AppIcon`(`BRAND`, 24px·데스크톱 19px) + 이름 `SITE_NAME`. 데스크톱 36px(로고·이름·메뉴 4개 `aria-current`·테마 버튼·시계) / 모바일 52px·태블릿 56px(홈에서만, 로고·이름·44px 테마 버튼). `transition:name="menubar"`로 전환 때 제자리(5-17) |
| `src/components/MenuClock.astro` | 데스크톱 메뉴바 시계. 기기 현지 시각 `HH:MM`, 분 경계마다 `setTimeout`으로 갱신, JS 전에는 빈 자리(폭 고정)(5-12) |
| `src/components/Dock.astro` | 하단 고정 Dock. 앱 4개 + 실행 점 · 구분선 · 코드 에디터(데스크톱) · 연락처. `surface` desk/window 유리. 크기 모바일 48 / 태블릿 56 / 데스크톱 52px. 자동 숨김 스크립트(`data-state`, `onEachPage`로 페이지마다 다시 건다)·힌트 막대(5-3). `startHidden`이면 숨긴 채 시작(5-14). `transition:name="dock"`으로 전환 때 제자리(5-17) |
| `src/components/Window.astro` | 창. 데스크톱: 최대 1240px 가운데 창(타이틀 바 44px, ✕ 28px) / 모바일·태블릿: 위 12·16px 틈 시트(타이틀 바 52·56px sticky, ✕ 44px). 본문 여백 20·36·48px(`--win-pad`로 내보내 표지·스크린샷 띠가 상쇄에 쓴다), 아래는 Dock 자리만큼 비움. `back`(href·label)이면 모바일·태블릿 타이틀 바 창 점 자리에 ‹ 링크. `data-back-link` 링크에 직전 목록 필터를 붙이는 스크립트 포함(5-15) |
| `src/components/PageHeading.astro` | 목록 화면 큰 제목(30·34·44px)과 한 줄 설명 |
| `src/components/WindowDots.astro` | 창 점 3개(라일락 2 + 민트 1, 장식). 크기 `--dot-size`·간격 `--dot-gap`, `tone` window(테마 토큰)/code(고정색). `Window`·`HomePanel`이 사용 |
| `src/components/HomePanel.astro` | 홈 창/위젯. 데스크톱 타이틀 바 44px(✕ 없음) / 모바일·태블릿 위젯. `tone` window/code. 폭·위치는 부모가 감싼 요소에서 |
| `src/components/ProfileCode.astro` | `ProfileView.swift` 코드 에디터 내용: 파일 탭(데스크톱) · 줄 번호 · Swift 구문 색(고정색). 보이는 줄 8/12/14 |
| `src/components/PhoneMockup.astro` | iPhone 16 Pro 목업: 프레임 이미지(`<Image>` WebP 1x·2x) + 투명 화면 영역(slot, 넘긴 `img`는 꽉 채워 위 기준으로 자름). 폭 `--phone-width`(5-8) |
| `src/assets/iphone-16-pro.png` | Apple Design Resources iPhone 16 Pro 프레임(450×920 RGBA, 50KB). 사용자 허용으로 커밋(5-8) |
| `src/layouts/BaseLayout.astro` | 모든 페이지 공통 문서 뼈대: `lang="ko"`, 메타(title·description 기본값), 파비콘 링크 3개(5-21), Noto Sans KR `<link>`, `tokens.css`·`global.css`·`transitions.css` import, `<head>` 인라인 스크립트(저장된 테마를 첫 화면 전에 `data-theme`에 적용 + `astro:after-swap`에서 다시 적용), `PageTransitions`, `<slot />` |
| `src/components/PageTransitions.astro` | 페이지 전환: `ClientRouter` + 떠나는/가는 주소로 전환 종류를 정해 `event.direction`에 넣는 스크립트(`open`·`close`·`push`·`pop`·`fade`, 상세↔상세는 링크의 `rel`)(5-17) |
| `src/styles/transitions.css` | 전환 종류별 `::view-transition-old/new(root)` 모션. 시간·곡선은 모션 토큰만 쓰고 `pop`·`close`는 나가는 화면을 위로(`z-index: 1`). 데스크톱은 시트 대신 창이 커지며 열린다(5-17) 맨 아래에 검색 창이 열린 동안 메뉴바·Dock을 흐리게 하는 규칙(5-19) |
| `src/lib/markdownText.ts` | 마크다운·MDX에서 읽는 글자만 남기는 `markdownToText(body, { keepCode })`. 읽는 시간(코드 포함)과 검색 색인(코드 제외)이 함께 쓴다(5-19) |
| `src/lib/search.ts` | 검색 순수 함수: `parseQuery`·`isSearchable`(2글자 문턱)·`searchDocs`(낱말 AND + 칸 무게로 정렬)·`highlight`(조각 배열)·`bodySnippet`·`groupHits`(컬렉션별 묶음 + 잘린 건수)·`recentGroups`. 색인 주소 `SEARCH_INDEX_URL`도 여기 있다(5-19) |
| `src/lib/searchIndex.ts` | 빌드 때 색인을 만든다. `content.ts` 헬퍼로 글을 읽고 제목·요약·분류/날짜·태그 목록·본문 텍스트를 담는다(프로젝트는 주요 기능도)(5-19) |
| `src/pages/search-index.json.ts` | `/my-homepage/search-index.json` 엔드포인트. 정적 빌드라 빌드 때 한 번 돌고 파일로 남는다(5-19) |
| `src/components/SearchPanel.astro` | 검색 창(`<dialog>` 모달). `SiteLayout`이 모든 화면에 하나씩 둔다. 색인은 처음 열 때 받아 모듈 바깥에 캐시. 결과 요소 스타일은 `.results :global(...)`(5-19) |
| `src/components/SearchButton.astro` | 돋보기 버튼. `data-search-open`만 붙이고 동작은 `SearchPanel`이 문서 위임으로 처리한다. `size`(desktop·touch) · `tone`(shell·window)(5-19) |
| `src/lib/pageInit.ts` | `onEachPage(setUp)`: 첫 화면에서 한 번, 그 뒤 `astro:after-swap`마다 초기화를 다시 부른다. 넘겨주는 `AbortSignal`로 지난 페이지의 window·document 이벤트를 끊는다(5-17) |
| `src/components/ThemeToggle.astro` | 테마 전환 버튼(해/달 아이콘, `size` desktop/touch). 문서 위임 클릭 → `data-theme`·`localStorage('theme')` 저장, 버튼 이름 갱신, 누른 뒤 아이콘 애니메이션 |
| `src/styles/tokens.css` | 디자인 토큰. 모션 곡선 3·시간 12, 색 55쌍 `light-dark()`, `color-scheme` 3가지(`:root`·`[data-theme="dark"]`·`[data-theme="light"]`) |
| `src/styles/global.css` | 전역 기본: box-sizing, body 바탕 `--desk`·글자 `--ink`·글꼴, 링크 `--win-accent`(hover 전환은 모션 토큰), `img` 반응형, `[hidden]` 항상 숨김(필터용), `.code` 고정폭 글꼴 |
- 템플릿에서 가져오지 않은 것: `README.md`·`AGENTS.md`(기존 README·`CLAUDE.md` 사용), `.vscode/launch.json`, 기본 Astro 파비콘(자체 아이콘은 2026-09-21 추가, 5-21)

### 10-3. 그 밖의 파일
- `docs/tech-stack.md` — 기술 스택 비교표·약점·예상 면접 질문·결정 기록
- `README.md` — 저장소 첫 화면 소개(2026-09-22 새로 작성, 구성은 2-3). 스크린샷은 `docs/screenshots/`(`desktop-home.png`·`desktop-project.png`·`mobile.png`, 가로 1600px)
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
- 로컬 브랜치: `master`, `develop`, `feature/bookmark-card`(현재, 2026-09-22 `develop` `5b8237c`에서 분기). 원격(`origin`, `https://github.com/yuminc03/my-homepage.git`, **2026-09-21부터 공개 저장소**): `master` `398be50`(Lia.log 배포, 로컬과 같음), `develop`(2026-09-21 push, `origin/develop` 추적). **`master`에 push하면 GitHub Actions가 배포한다**(5-20)
- `feature/bookmark-card`(2026-09-22, `develop` `5b8237c`에서 분기, **진행 중**). 커밋 제안(사용자 확인 대기)
  - feat: 링크 미리보기 정보를 빌드 때 가져와 캐시하는 linkPreview 추가
  - feat: 주소 하나만 쓴 문단을 북마크 카드로 바꾸는 Markdown 플러그인 추가
  - docs: 북마크 카드 결정과 쓰는 법 기록
- `feature/readme`(2026-09-22, `develop` `6354a23`에서 분기, **`develop` 병합 `5b8237c`로 완료, 브랜치 삭제·push**)
  - `8e9805c` docs: README용 화면 스크린샷 3장 추가
  - `43f7a56` docs: README를 사이트 소개·기술 스택·실행·글 쓰기·배포 안내로 새로 작성
  - `1f945ba` docs: README 작성과 배포 순서 기록
- `feature/real-content`(2026-09-22, `develop` `c63bdc4`에서 분기, **`develop` 병합 `6354a23`로 완료, 브랜치 삭제·push**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `30ce6e4` feat: 첫 프로젝트 Pointer Quest 글 추가
  - `e8e6964` chore: 실제 프로젝트 글이 생겨 예시 프로젝트 sample-project 삭제
  - (이 문서 갱신) docs: Pointer Quest 추가와 iCloud 사본 삭제 규칙 기록
- `feature/site-name-favicon`(2026-09-21, `develop` `48ae273`에서 분기, **`develop` 병합 `cc6040f`로 완료, 브랜치 삭제**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `fbef4cb` feat: 사이트 이름을 Lia.log로 바꾸고 탭 제목 조립을 한곳으로 모음
  - `15785f9` feat: 메뉴바 로고를 CY 글자에서 창 그림 아이콘으로 바꿈
  - `f6894bb` feat: 파비콘과 iPhone 홈 화면 아이콘 추가
  - `28c617a` docs: 사이트 이름·파비콘 결정과 iCloud 사본 원인 기록
- `master` 병합: `398be50` merge: develop → master (사이트 이름 Lia.log · 로고 · 파비콘, 2026-09-21). run 35576351264 성공
- `feature/deploy`(2026-09-21, `develop` `32b70ba`에서 분기, **`develop` 병합 `36f0456`으로 완료, 브랜치 삭제**)
  - `54d0de2` ci: GitHub Actions로 GitHub Pages 자동 배포 설정
- `master` 병합: `ea31474` merge: develop → master (첫 배포, 2026-09-21). 이 push가 run 35572925109을 일으켜 배포에 성공했다
- `feature/content-search`(2026-09-21, `develop` `5fa1638`에서 분기, **`develop` 병합 `d81c5fc`로 완료, 브랜치 삭제**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `b90396e` refactor: 마크다운 본문 텍스트 추출을 markdownText.ts로 분리
  - `b87ba8a` feat: 콘텐츠 검색 색인(JSON)과 찾기 헬퍼 추가
  - `1aa1fe7` feat: 콘텐츠 검색 창과 ⌘K 단축키 추가
  - `f77115f` fix: 검색 창이 열린 동안 메뉴바·Dock을 뒤로 물러나게
  - `5a8e75e` feat: 메뉴바·창 타이틀 바에 검색 돋보기 버튼 추가
  - `04e3022` feat: 검색 결과에 걸린 이유·잘린 개수·불러오는 중을 보여 준다
  - `8da7093` docs: 콘텐츠 검색 구현 기록과 마무리 절차 정리
  - `0b20109` docs: 콘텐츠 검색 사용자 브라우저 확인 결과 기록
- `feature/page-transitions`(2026-09-20, `develop` `f509654`에서 분기, **`develop` 병합 `0cd15af`로 완료, 브랜치 삭제**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `f3f2735` refactor: 컴포넌트 초기화를 페이지마다 다시 실행하는 onEachPage 헬퍼 추가 (`src/lib/pageInit.ts` 신규 + `Dock`이 첫 사용자)
  - `379dab5` refactor: 나머지 컴포넌트 스크립트도 onEachPage로 감싸기 (`Toc`·`MenuClock`·`ThemeToggle`·`FilterChips`·`Window`·`CodeCopy`)
  - `1fe981f` feat: ClientRouter로 페이지 전환 도입하고 전환 뒤 테마 속성 복원
  - `47c2f82` feat: 메뉴바·Dock을 전환 스냅샷에서 빼 제자리에 두기(`transition:name`)
  - `bc8a3f0` feat: 두 화면의 관계에 따라 페이지 전환 모션 적용(`PageTransitions`의 종류 판별 + `styles/transitions.css`)
  - `23e165c` docs: 페이지 전환 모션 구현 기록과 다음 작업 정리
- `feature/seminar-pages`(2026-09-20, `develop` `40837df`에서 분기, **`develop` 병합 `8f704a4`로 완료, 브랜치 삭제**), 오래된 순. 각 커밋 직전에 `npm run build`
  - `f28a2fa` refactor: 창 본문 좌우 여백을 --win-pad 변수로 내보냄
  - `47136c4` feat: 행사 상세 주소 seminarHref 헬퍼 추가
  - `50fff4c` feat: 행사 본문 사진 컴포넌트 3종 추가
  - `9a76680` feat: 세미나 목록 카드와 목록 페이지 구현
  - `a792747` feat: 행사 상세 페이지와 표지 사진 컴포넌트 구현
  - `ebeadeb` feat: 세미나 목록 항목을 행사 상세로 연결
  - `5c64fd3` feat: 홈 최근 기록 카드·위젯을 상세 페이지로 연결
  - `6ede1d2` docs: 세미나 목록·행사 상세 구현 기록과 다음 작업(페이지 전환 모션) 정리
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
- `develop` 직접 커밋: `92083d0` `.claude/settings.json` 권한 추가(2026-09-14), `e32bb16` docs: 스터디 목록·글 작업 계획 정리(2026-09-18), `a322ec1` docs: 페이지 전환 병합 결과와 다음 작업(콘텐츠 검색) 정리(2026-09-20), `5fa1638` docs: 콘텐츠 검색 방식 4건 확정 기록(2026-09-20), `32b70ba` docs: 콘텐츠 검색 병합 결과와 다음 작업(실제 콘텐츠) 정리(2026-09-21), `b15b3dc` docs: GitHub Pages 배포 결과와 결정 기록(2026-09-21), `48ae273` docs: 인수인계 문서의 어긋난 부분 2건 수정(2026-09-21), `a9486e7` docs: Lia.log 병합·배포 결과 기록(2026-09-21), (이 문서 갱신) docs: 인수인계 문서의 지난 상태 정리와 이번 세션 요약(2026-09-21)
- 병합 후 삭제한 브랜치(순서대로, 마지막은 `feature/project-pages` 병합 `53f528e`·2026-09-18·원격까지 삭제): `feature/design-theme-dock`, `feature/design-color-direction`(`fab45e5`), `feature/design-theme-toggle`(`e610858`), `feature/design-detail-screens`(`bfcf341`), `feature/design-project-detail`(`0c7d2c9`), `feature/design-mobile`(`74c8149`), `feature/design-dark-windows`, `feature/design-iphone-mockup`(`eceb50a`), `feature/design-tablet`(`2d280cd`), `bugfix/profileview-code-widget`(`aa62f64`), `feature/design-tablet-rest`(`c1e2f5c`), `feature/design-motion`(모션 설계 · 데스크톱 창 ✕ 버튼 · 인수인계 문서, 2026-09-14), `feature/tech-stack`(기술 스택 결정 문서, 2026-09-14), `feature/astro-setup`(Astro 생성·토큰·MDX·스키마, 병합 `004589b`, 2026-09-14), `feature/site-shell`(테마 버튼·공통 셸·Dock 자동 숨김·시계, 병합 `0227fa3`, 2026-09-15), `feature/home-page`(홈 첫 화면·iPhone 목업·최근 기록, 커밋 5개, 병합 `8c7568f`, 2026-09-16), `feature/study-pages`(스터디 목록·글, 커밋 11개, 병합 `4351c43`, 2026-09-20), `feature/seminar-pages`(세미나 목록·행사 상세 + 홈 최근 기록 링크, 커밋 8개, 병합 `8f704a4`, 2026-09-20), `feature/page-transitions`(페이지 전환 모션, 커밋 6개, 병합 `0cd15af`, 2026-09-20), `feature/content-search`(콘텐츠 검색, 커밋 8개, 병합 `d81c5fc`, 2026-09-21), `feature/site-name-favicon`(사이트 이름·로고·파비콘, 커밋 4개, 병합 `cc6040f`, 2026-09-21)
- 참고로 남겨 둔 비교안 커밋: 색상 A~F `de7d440`, 행사 상세 사진 묶음형 A `1769266`

## 13. 문서 관리 규칙
- 이 문서가 현재 상태의 단일 기준이다. 작업이 끝날 때마다 1장(한눈에 보기)·2-1(지금 할 일)·4장(진행 기록)·12장(브랜치·커밋)을 먼저 갱신한다
- 다음 작업이 정해지면 2-1에는 "2-N을 따라간다" 한 줄만 두고, 시안 수치·재사용 목록·결정할 것·커밋 순서는 전용 절(예: 2-6 세미나)에 모은다. 새 채팅이 그 절만 읽고 시작할 수 있어야 한다
- 결정이 확정되면 5장에 옮기고, 끝난 할 일은 4장 표로 옮긴다
- 사용자 취향·기준처럼 대화 밖에서도 유지할 내용은 Claude 메모리에도 저장되어 있다(디자인 취향, 기술 스택 결정 기준, 디자인 방향, 마지막 단계 개발 과정 설명 세션)
