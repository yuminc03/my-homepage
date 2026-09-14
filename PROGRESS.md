# 진행 상황
- 최종 업데이트: 2026-09-14
- 이 문서 하나만 읽으면 새 채팅에서 바로 이어서 작업할 수 있도록 정리한 단일 기준 문서다

## 1. 한눈에 보기
- **무엇을 만드나**: iOS 개발자 Chu Yumin의 개인 홈페이지(자기소개·프로젝트·스터디 기록·세미나 기록)
- **지금 단계**: 디자인 시안 완료, 기술 스택 확정(Astro + 일반 CSS). 사이트 코드는 아직 없다
- **시안 진행도**
  - 데스크톱 7화면(홈·목록 3·상세 3) — 완료
  - 모바일 7화면(홈 화면 메타포) — 완료
  - 태블릿 7화면(모바일 확장형) — 완료
  - 모션 설계(토큰 보드 + 데스크톱·모바일 클릭 프로토타입) — 완료, `develop` 병합
  - 데스크톱 창 ✕ 닫기 버튼 — 채택(2026-09-14), 데스크톱 창 화면 6장에 반영, `develop` 병합
- **기술 스택**: Astro + 일반 CSS + TypeScript + Markdown Content Collections 확정(2026-09-14). 비교·약점·면접 질문은 `docs/tech-stack.md`
- **시안 캔버스**: https://claude.ai/code/artifact/48a3c34c-b882-4f13-8e2f-7e3668bdb7b1 (v22, 페이지 5개 · 아트보드 25장)
- **Git**: 시안 작업과 기술 스택 결정 문서가 모두 `develop`에 병합되어 있다(마지막: `feature/tech-stack` 커밋 → `develop` 병합 → 브랜치 삭제, 2026-09-14). 로컬 브랜치는 `master`·`develop`. `master`·원격 push는 한 번도 하지 않았다
- **다음 단계**: 사이트 구현 준비(Astro 프로젝트 생성·토큰 이식)

## 2. 새 채팅에서 이어서 시작하기
### 2-1. 지금 바로 할 일
1. `git status`로 브랜치와 작업 트리를 확인한다
   - 커밋하지 않고 남겨 둔 파일(건드리지 않는다): `.claude/settings.json`(사용자가 바꾼 파일), 저장소 루트 `스크린샷 2026-09-14 오전 11.34.29.png`
2. 다음 작업 후보(사용자에게 순서 확인)
   - 사이트 구현 준비: `develop`에서 `feature/astro-setup` 브랜치 → Astro 프로젝트 생성(npm, TypeScript), 전역 토큰 CSS(`--desk`·`--glass`·`--win-*`·모션 토큰) 이식, 콘텐츠 컬렉션 3개 스키마 정의. 이때 `CLAUDE.md`의 명령어·아키텍처 섹션을 실제 내용으로 갱신
   - 대괄호 `[ ]` placeholder에 들어갈 실제 콘텐츠 정리(4장 남은 일)

### 2-2. 세션 시작 체크리스트 (매번)
1. `git status`, `git branch --show-current`로 브랜치와 작업 트리 확인
2. `/design` 스킬을 실행해 스킬 경로(`seed-canvas.mjs`, `payload.template.html`)와 scratchpad 경로를 확인한다. 둘 다 세션마다 바뀐다
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

### 남은 일
- [x] 모션·✕·문서 커밋 → `develop` 병합 → 브랜치 삭제 (2026-09-14, 사용자 확인)
- [x] 기술 스택·콘텐츠 관리 방식 확정 (2026-09-14, 5-11)
- [x] `feature/tech-stack` 커밋 → `develop` 병합 → 브랜치 삭제 (2026-09-14, 사용자 확인)
- [ ] Astro 프로젝트 생성·토큰 이식·콘텐츠 스키마 정의
- [ ] 배포 호스팅 확정(GitHub Pages 또는 Cloudflare Pages)
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
- 보류: 배포 호스팅(GitHub Pages 또는 Cloudflare Pages), 패키지 매니저(npm 제안) — 프로젝트 생성·구현 단계에서 확정
- 다시 검토할 조건: 여러 창 동시 표시·드래그 같은 앱형 UI, 로그인·댓글 같은 서버 기능이 필요해질 때

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
- 토큰은 각 `.dc.html` `<helmet><style>`의 `.site`(다크 기본)와 `.site[data-theme="light"]`에 정의. 캔버스 아트보드끼리 CSS를 공유할 수 없어 **모든 화면 파일에 같은 토큰 줄이 복제**되어 있다. 값을 바꿀 때는 모든 파일을 함께 수정한다

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
- `.site{--ease-out;--ease-in;--ease-sheet;--dur-press:120ms;--dur-fast:200ms;--dur-close:200ms;--dur-sheet-close:300ms;--dur-pop:300ms;--dur-window:320ms;--dur-push:360ms;--dur-dock:380ms;--dur-theme:400ms;--dur-sheet:420ms;--dur-reveal:480ms;--stagger:50ms}` — 현재는 `Motion*.dc.html` 3장에만 들어 있다. 구현 시 전역 토큰으로 옮긴다

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

### 10-2. 그 밖의 파일
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
- 로컬 브랜치: `master`, `develop`. 원격(`origin`)과 `master`에는 아직 반영하지 않았다
- 병합 후 삭제한 브랜치(순서대로): `feature/design-theme-dock`, `feature/design-color-direction`(`fab45e5`), `feature/design-theme-toggle`(`e610858`), `feature/design-detail-screens`(`bfcf341`), `feature/design-project-detail`(`0c7d2c9`), `feature/design-mobile`(`74c8149`), `feature/design-dark-windows`, `feature/design-iphone-mockup`(`eceb50a`), `feature/design-tablet`(`2d280cd`), `bugfix/profileview-code-widget`(`aa62f64`), `feature/design-tablet-rest`(`c1e2f5c`), `feature/design-motion`(모션 설계 · 데스크톱 창 ✕ 버튼 · 인수인계 문서, 2026-09-14), `feature/tech-stack`(기술 스택 결정 문서, 2026-09-14)
- 참고로 남겨 둔 비교안 커밋: 색상 A~F `de7d440`, 행사 상세 사진 묶음형 A `1769266`

## 13. 문서 관리 규칙
- 이 문서가 현재 상태의 단일 기준이다. 작업이 끝날 때마다 1장(한눈에 보기)·2-1(지금 할 일)·4장(진행 기록)을 먼저 갱신한다
- 결정이 확정되면 5장에 옮기고, 끝난 할 일은 4장 표로 옮긴다
- 사용자 취향·기준처럼 대화 밖에서도 유지할 내용은 Claude 메모리에도 저장되어 있다(디자인 취향, 기술 스택 결정 기준, 디자인 방향)
