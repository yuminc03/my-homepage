// 컴포넌트 스크립트를 "페이지마다" 다시 실행한다
// - 왜 필요한가: View Transitions(ClientRouter)로 페이지를 옮기면 <body>만 갈아 끼우고 스크립트는 다시 돌지 않는다.
//   Astro가 이미 실행한 번들(주소가 같은 <script>)을 건너뛰기 때문이다. 그래서 초기화를 함수로 감싸 여기에 넘기면
//   첫 화면에서 한 번, 그 뒤로는 전환할 때마다 새 DOM에 대고 다시 부른다
// - 왜 astro:after-swap인가: DOM을 갈아 끼운 직후, 새 화면을 그리기 전에 온다. 목차가 펼쳐졌다 접히는 것처럼
//   초기 상태가 잠깐 보이는 일이 없다. astro:page-load는 첫 화면에서 window의 load 뒤에야 와서 늦다
// - 왜 AbortSignal인가: window·document에 건 이벤트는 페이지를 옮겨도 살아남아, 전환할 때마다 쌓이고
//   사라진 페이지의 요소를 계속 붙잡는다. 넘겨받은 signal을 addEventListener에 주면 다음 전환에서 한꺼번에 끊긴다
//   (요소 자신에게 건 이벤트는 요소가 통째로 바뀌므로 따로 끊지 않아도 된다)
export function onEachPage(setUp: (signal: AbortSignal) => void): void {
	let controller: AbortController | undefined;

	const run = () => {
		controller?.abort();
		controller = new AbortController();
		setUp(controller.signal);
	};

	run();
	document.addEventListener('astro:after-swap', run);
}
