---
# 예시 스터디 글: 스키마 검증과 새 글 작성용 틀. 사진이 필요한 글은 폴더(slug/index.md)로 만든다
title: '[포스트 제목을 입력하세요]'
summary: '[포스트 요약 내용이 두 줄 정도 들어갑니다. 무엇을 공부했고 어떤 점이 핵심이었는지 짧게 적어두면 나중에 다시 찾기 좋습니다.]'
category: '[카테고리]'
pubDate: 2026-09-14
draft: true
---

[도입 문단입니다. 무엇을 공부하게 되었는지, 이 글에서 무엇을 정리하는지 두세 문장으로 적습니다.]

## [소제목 1]

[핵심 개념을 설명하는 문단입니다. 본문 중간에 `@State`처럼 짧은 코드가 들어가면 인라인 코드로 표시합니다.]

```swift title="Example.swift"
struct PostListView: View {
    @State private var posts: [Post] = []

    var body: some View {
        List(posts) { post in
            Text(post.title)
        }
        .task { posts = await PostStore.load("study") }
    }
}
```

[코드에서 눈여겨볼 부분을 풀어 쓰는 문단입니다.]

## [소제목 2]

[두 번째 주제를 설명하는 문단입니다. 실제로 적용해 보며 부딪힌 문제와 해결 과정을 적습니다.]

## [정리]

[배운 점을 짧게 정리하는 마무리 문단입니다.]
