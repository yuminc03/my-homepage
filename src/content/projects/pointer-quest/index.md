---
title: Pointer Quest
summary: C 언어의 포인터·메모리 개념을 드래그로 익히는 iOS 학습 시뮬레이터
categories: ['iOS', 'Side Project']
tags: ['학습 앱', 'C 포인터', 'App Store 출시', 'Swift Student Challenge']
icon: ./icon.png
startDate: 2026-01-12
role: 1인 개발
stack: ['Swift 6', 'SwiftUI', 'MVVM']
platform: iOS 16.0+ · iPhone
links:
  appStore: https://apps.apple.com/kr/app/pointer-quest/id6810896765
  github: https://github.com/yuminc03/pointer-quest
screenshots:
  - ./01-lesson-list.png
  - ./02-concept-card.png
  - ./03-lesson-pointer.png
  - ./04-playground.png
  - ./05-lesson-complete.png
features:
  - title: 드래그로 포인터 연결
    description: 4×4 메모리 격자에서 칸을 끌어다 다른 칸에 떨어뜨리면 포인터가 연결됩니다. 그 조작이 곧바로 int *p1 = &target; 같은 C 코드로 코드 패널에 나타나고, 화살표가 그려져 무엇이 무엇을 가리키는지 다시 확인할 수 있습니다.
    image: ./03-lesson-pointer.png
  - title: 개념 카드
    description: 레슨에 처음 들어가면 도식 한 장과 서너 문장으로 핵심을 먼저 잡아 줍니다. 도식은 따로 그린 그림이 아니라 실제 화면의 메모리 칸·화살표 컴포넌트를 그대로 조립해 만들었습니다.
    image: ./02-concept-card.png
  - title: 플레이그라운드
    description: 성공 조건이 없는 샌드박스입니다. 레슨에서 익힌 연결·역참조를 자유롭게 해 보고 끊어 볼 수 있습니다.
    image: ./04-playground.png
draft: false
---

## 소개

포인터는 C를 배우는 사람이 가장 먼저 막히는 벽입니다. 문법은 외웠는데 메모리에서 무슨 일이 일어나는지 그려지지 않기 때문입니다. Pointer Quest는 메모리를 주소가 붙은 16칸 격자로 펼쳐 놓고, 손으로 만지는 시뮬레이션으로 그 추상성을 걷어냅니다.

한 화면에서 세 단계가 동시에 일어나는 것이 이 앱의 핵심입니다.

1. **체득** — 블록을 드래그해 다른 칸에 떨어뜨리며 "가리킨다"는 동작을 몸으로 익힙니다
2. **코드 연결** — 그 조작이 즉시 C 코드로 코드 패널에 나타납니다
3. **시각 확인** — 화살표 애니메이션으로 참조 관계를 눈으로 다시 확인합니다

처음에는 Swift Student Challenge 2026 제출용 게임으로 만들었습니다. 수상하지 못한 뒤 목표를 App Store 출시로 바꾸면서 미션·레벨 클리어 같은 게임 요소를 걷어내고 인터랙티브 학습 도구로 방향을 다시 잡았고, 2026년 9월 15일 `1.0.0`을 출시했습니다. 지금은 `1.1.0`을 개발하고 있습니다.

## 기술적으로 고민한 점

### 레슨을 코드가 아니라 데이터로

처음에는 레슨마다 성공 조건이 뷰모델의 `switch` 문에 하드코딩되어 있어, 레슨을 하나 늘릴 때마다 로직 코드를 고쳐야 했습니다. 레슨의 초기 배치와 성공 조건을 데이터로 표현하고 성공 조건을 enum으로 추상화해, 이제는 뷰모델을 건드리지 않고 레슨 데이터만 선언하면 새 레슨이 추가됩니다.

```swift title="Lesson.swift"
enum SuccessCondition: Hashable {
  case anyPointerPointsTo(index: Int) // 해당 칸을 가리키는 포인터가 생기면 클리어
  case chain(indices: [Int])          // 지정한 순서의 참조 체인이 완성되면 클리어
  case inspectedAll(indices: [Int])   // 지정한 칸을 모두 탭해 확인하면 클리어
  case sandbox                        // 조건 없음
}
```

### 화살표를 한 곳에서 그리기

화살표를 그리려면 칸들의 위치를 알아야 하지만, 칸마다 이웃의 위치를 알게 하면 레이아웃과 그리기가 뒤엉킵니다. 각 칸의 좌표를 `anchorPreference`로 모으고 `overlayPreferenceValue`로 한 번에 넘겨, 화살표 레이어 하나가 모든 화살표를 그리도록 레이아웃과 그리기를 분리했습니다.

### 설명 그림과 앱 화면이 어긋나지 않게

개념 카드의 도식을 별도 일러스트로 그리면 화면을 바꿀 때마다 그림도 따로 고쳐야 합니다. 실제 화면에 쓰는 메모리 칸·화살표 컴포넌트를 그대로 조립해 도식을 만들어, 앱 화면과 설명 그림이 구조적으로 어긋날 수 없게 했습니다.

### 색에만 기대지 않는 표기

값이 든 칸과 주소가 든 칸, 오류 상태를 색만으로 구분하면 색을 구별하기 어려운 사용자에게는 정보가 사라집니다. 형태·`→` 접두어·접근성 레이블을 함께 쓰고, 색·화살표·배지가 각각 무엇을 뜻하는지 시각 언어 문서로 정해 두었습니다. 한국어·영어를 지원하며 UI 문구뿐 아니라 C 코드의 주석까지 번역합니다.

## 배운 점

게임에서 학습 도구로 방향을 바꾸며, 기능을 더하는 것만큼 무엇을 빼는지가 중요하다는 것을 배웠습니다. XP·스트릭·리더보드를 일부러 넣지 않은 것도 학습이라는 본질에서 주의를 흩뜨리지 않기 위해서였습니다. 또 콘텐츠를 로직에서 떼어 데이터로 두니 레슨을 늘리는 일이 코드 수정이 아니라 글쓰기에 가까워졌습니다.

다음에는 코드 패널 드래그 확장과 용어집 화면을 넣고, 이중 포인터·배열과 포인터 연산·구조체·`malloc`/`free`를 다루는 챕터 2~5를 채우려 합니다.
