import loadWasm from "@/external/wasm";

import lzmaWasmUrl from "./lzma.wasm?url";

type PTR = number;
type LZMAWASM = {
	memory: WebAssembly.Memory;

	newU8Array: (size: number) => PTR;
	decode: (ptr: PTR) => PTR;
};

function dec (inst: LZMAWASM, data: Uint8Array | ArrayBuffer): Uint8Array | null {
	const AS_ARRAY_OFFSET = 24; // AssemblyScript ArrayBuffer header length
	const memory = inst.memory;

	const input = data instanceof ArrayBuffer
		? new Uint8Array(data)
		: data;

	const inpPtr = inst.newU8Array(input.length);
	const u8Array = new Uint8Array(
		memory.buffer,
		inpPtr + AS_ARRAY_OFFSET,
		input.length,
	);
	u8Array.set(input);

	const resPtr = inst.decode(inpPtr);
	const [success, _, unpackSize, dataPtr] = new Uint32Array(memory.buffer, resPtr, 4);

	if (success)
		return new Uint8Array(memory.buffer, dataPtr + AS_ARRAY_OFFSET, unpackSize);
	else
		return null;
}

let lzmaWasmCache: ArrayBuffer | null = null;

export default async function LZMADecompression (data: Uint8Array | ArrayBuffer, tag?: string): Promise<Uint8Array> {
	const memory = new WebAssembly.Memory({ initial: 1024 });

	const lzmaWasm = (lzmaWasmCache || await fetch(lzmaWasmUrl).then(r => r.arrayBuffer()))!;
	if (!lzmaWasmCache) lzmaWasmCache = lzmaWasm;

	const instance = await loadWasm<Omit<LZMAWASM, "memory">>(await lzmaWasm, {
		env: {
			memory,
			abort: (filename, line, column) => {
				throw Error(`abort called at ${filename ? filename + ":" : ""}${line}:${column}`);
			},
		},
		Math,
	});

	const ret = dec({ memory, ...instance.exports }, data);
	if (ret === null) throw new Error("Failed to decompress LZMA data" + (tag ? ` for "${tag}"` : ""));
	return ret;
}
