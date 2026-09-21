// /my-homepage/search-index.json — 검색 창이 처음 열릴 때 내려받는 색인
// - 정적 빌드라 이 함수는 빌드 때 한 번 돌고 결과가 파일로 남는다(요청마다 도는 서버는 없다)
// - 주소 상수는 search.ts에 둔다. 이 파일은 astro:content를 끌어와 브라우저에서 import할 수 없다
import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../lib/searchIndex';

export const GET: APIRoute = async () => Response.json(await buildSearchIndex());
