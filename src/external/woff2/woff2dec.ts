// wasm, js from https://github.com/39ali/woff2-wasm
// this script by Wolfgang Kurz

import wofftwo from "./wofftwo.min.js";
import wofftwo2Module from "./wofftwo.wasm?url";

interface vector {
	size (): number;
	get (index: number): number;

	$$: {
		ptr: number;
	};
}
interface wofftwoModule {
	HEAPU8: Uint8Array;

	woff2_dec (buffer: Uint8Array, length: number): vector;
}

const _load_cb: Array<() => void> = [];

let module: wofftwoModule | null = null;
fetch(wofftwo2Module)
	.then(r => r.arrayBuffer())
	.then(r => {
		const _module = wofftwo({ wasmBinary: r });
		_module.onRuntimeInitialized = () => {
			module = _module;
			_load_cb.forEach(fn => fn());
		};
	});

export default async function Woff2Dec (buffer: Uint8Array): Promise<Uint8Array> {
	if (!module) await new Promise<void>(resolve => _load_cb.push(() => resolve()));
	if (!module) return new Uint8Array();

	const dec = module.woff2_dec(buffer, buffer.byteLength);
	const length = dec.size();

	// Read directly from HEAPU8 (memory)
	function _read_from_heap (ptr: number): number {
		return new Uint32Array(module!.HEAPU8.slice(ptr, ptr + 4).buffer)[0];
	}

	const mem_offset = _read_from_heap(dec.$$.ptr);
	return module.HEAPU8.slice(mem_offset, mem_offset + length);
}
