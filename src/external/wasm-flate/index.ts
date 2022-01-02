import * as flate from "@/external/wasm-flate/wasm-flate";
import flateWasmUrl from "@/external/wasm-flate/wasm-flate.wasm?url";

let flateCache: typeof flate | null = null;

export default async function UseWASMFlate (): Promise<typeof flate> {
	if (flateCache) return flateCache;

	const flateWasm = await fetch(flateWasmUrl).then(r => r.arrayBuffer());
	await flate.default(flateWasm);

	flateCache = flate;
	return flate;
}
