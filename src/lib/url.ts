// 사이트 내부 경로 앞에 base('/my-homepage')를 붙인다
// - astro.config.mjs의 base 때문에 '/projects/'처럼 슬래시로 시작하는 경로를 직접 쓰면 배포 후 404가 난다
// - BASE_URL은 설정에 따라 끝 슬래시가 있을 수도 없을 수도 있어 양쪽을 정리한 뒤 합친다
export const withBase = (path = '/'): string => {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	return `${base}/${path.replace(/^\/+/, '')}`;
};
