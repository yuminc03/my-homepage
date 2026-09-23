---
# 새 프로젝트 틀(쓰는 법은 docs/content-templates/README.md): src/content/projects/<이름>/index.md로 복사한다
# 이미지 icon.png · screenshot-*.png · feature-*.png를 같은 폴더에 둔다. 스크린샷·기능·링크는 없으면 줄째 지운다
# 종료일(endDate)을 비우면 "진행 중"으로 나온다
title: '[프로젝트 이름]'
summary: '[프로젝트 한 줄 소개를 입력하세요.]'
categories: ['iOS', 'Side Project']
tags: ['[태그]']
icon: ./icon.png
startDate: 2026-01-01
endDate: 2026-06-30
role: '[역할]'
stack: ['Swift', 'SwiftUI']
platform: '[iOS 버전]'
links:
  github: https://github.com/yuminc03/my-homepage
screenshots:
  - ./screenshot-1.png
  - ./screenshot-2.png
features:
  - title: '[기능 이름]'
    description: '[이 기능이 무엇을 해 주는지, 사용자가 어떤 흐름으로 쓰는지 적습니다.]'
    image: ./feature-1.png
  - title: '[기능 이름]'
    description: '[이 기능이 무엇을 해 주는지 적습니다.]'
    image: ./feature-2.png
draft: true
---

## 소개

[어떤 문제를 풀기 위해 만든 앱인지, 누구를 위한 앱인지 두세 문장으로 적습니다.]

## 기술적으로 고민한 점

### [부딪힌 문제]

[원인을 어떻게 찾았고 어떤 방법으로 해결했는지, 결과가 어떻게 달라졌는지 적습니다.]

## 배운 점

[이 프로젝트를 통해 배운 점과 다음에 개선하고 싶은 점을 적습니다.]
