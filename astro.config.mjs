// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 프로젝트 사이트: https://yuminc03.github.io/my-homepage/
  site: 'https://yuminc03.github.io',
  // 모든 내부 링크·에셋 경로 앞에 붙는다. 코드에서는 import.meta.env.BASE_URL로 참조한다
  base: '/my-homepage',
});
