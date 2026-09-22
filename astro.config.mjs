// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';

import { bookmarkCard } from './src/lib/bookmark';
import { CODE_THEME, codeBlock } from './src/lib/codeBlock';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 프로젝트 사이트: https://yuminc03.github.io/my-homepage/
  site: 'https://yuminc03.github.io',

  // 모든 내부 링크·에셋 경로 앞에 붙는다. 코드에서는 import.meta.env.BASE_URL로 참조한다
  base: '/my-homepage',

  integrations: [mdx()],

  markdown: {
    // 기본 처리기(Sätteri)를 그대로 쓰되, 주소 하나만 쓴 문단을 북마크 카드로 바꾸는 플러그인을 더한다(src/lib/bookmark.ts).
    // MDX도 이 설정을 이어받아 세미나 글에도 적용된다
    processor: satteri({ hastPlugins: [bookmarkCard()] }),

    // 코드 블록: 시안 색 테마 + 파일 이름 머리줄·복사 버튼을 붙이는 transformer (src/lib/codeBlock.ts)
    shikiConfig: {
      theme: CODE_THEME,
      transformers: [codeBlock()],
    },
  },
});