interface WebAssemblyInstance<T extends Record<string, WebAssembly.ExportValue>> {
	exports: T;
}

export default async function loadWasm<T extends Record<string, WebAssembly.ExportValue>> (buffer: ArrayBuffer, imports: any) {
	const wasm = await WebAssembly.instantiate(buffer, imports);
	return wasm.instance as WebAssemblyInstance<T>;
}
