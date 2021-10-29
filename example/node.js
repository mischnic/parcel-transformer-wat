import wasmString from "bundle-text:./test.wat";

var wasmBytes = new TextEncoder().encode(wasmString);

(async () => {
	const {
		instance: {
			exports: { add },
		},
	} = await WebAssembly.instantiate(wasmBytes);

	console.log(add(1, 2));
})();
