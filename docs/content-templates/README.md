# 새 글 틀
프로젝트·스터디·세미나 글을 새로 쓸 때 복사하는 틀입니다. 사이트 빌드에는 쓰이지 않습니다(`src/content/` 밖이라 콘텐츠 컬렉션이 읽지 않습니다).

| 틀 | 복사할 곳 | 형식 |
|---|---|---|
| [project/index.md](project/index.md) | `src/content/projects/<이름>/index.md` | 폴더형(아이콘·스크린샷을 옆에 둠) |
| [study.md](study.md) | `src/content/study/<이름>.md` | 파일 하나. 사진이 필요하면 `study/<이름>/index.md` 폴더형 |
| [seminar/index.mdx](seminar/index.mdx) | `src/content/seminars/<이름>/index.mdx` | 폴더형 MDX(사진 컴포넌트를 씀) |

글을 직접 쓰지 않고 **재료만 넘겨 대신 쓰게 할 때**는 [seminar-input.md](seminar-input.md)(세미나 재료 양식)를 채워서 줍니다. 사진은 **2~3장, 많아야 4장**입니다.

## 쓰는 순서
1. 틀을 복사해 폴더(파일) 이름을 정합니다. 이 이름이 곧 주소입니다(예: `projects/pointer-quest` → `/projects/pointer-quest/`)
2. 대괄호 `[ ]` 칸을 채우고, 틀에 적힌 이미지 파일 이름을 실제 파일로 바꿔 글 폴더 안에 둡니다
3. 공개할 준비가 되면 `draft: true`를 `false`로 바꿉니다. `true`인 글은 목록·상세·검색·홈 최근 기록에서 모두 빠집니다
4. `npm run build`로 확인합니다. 필드가 빠지거나 형식이 틀리면 어떤 필드가 왜 틀렸는지 알려 주며 빌드가 실패합니다. 필드 정의는 [src/content.config.ts](../../src/content.config.ts)

## 본문에서 쓸 수 있는 것
- **코드 블록**: 울타리에 파일 이름을 붙이면 머리줄·줄 번호·복사 버튼이 생깁니다
  ````markdown
  ```swift title="Example.swift"
  ````
- **북마크 카드**: 주소만 한 문단으로 쓰면 빌드할 때 제목·설명·썸네일을 가져와 카드로 바꿉니다. `[글자](주소)`로 쓰면 평범한 링크로 남습니다. 가져온 정보는 `src/data/link-previews.json`에 저장되니 글과 함께 커밋합니다
- **목차**(스터디): `##` 소제목이 목차가 됩니다
- **사진**(세미나): `<Photo>`(한 장) · `<PhotoPair>`(두 장 나란히) · `<PhotoSide>`(사진 옆 글). 쓰는 법은 [seminar/index.mdx](seminar/index.mdx)
- **프로젝트 본문**: `## 소개` / `## 기술적으로 고민한 점` / `## 배운 점`. `###`는 카드로 묶이고, 주요 기능(프런트매터 `features`)은 첫 섹션 뒤에 자동으로 들어갑니다. 주요 기능 `description`은 Markdown이 아니라 일반 텍스트로 나옵니다(백틱이 그대로 보임)

## 참고
- 실제로 쓴 예: [src/content/projects/pointer-quest/](../../src/content/projects/pointer-quest/)
- 스터디·세미나에 글이 하나도 없는 동안은 빌드할 때 "컬렉션이 비었다"는 경고가 나옵니다. 빌드·배포에는 문제가 없고, 첫 글을 넣으면 사라집니다
