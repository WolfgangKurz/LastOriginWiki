
import { GraphvizSync, graphvizSync } from "@/external/graphviz/graphviz";
import graphvizWasmUrl from "@/external/graphviz/graphvizlib.gzip.wasm?url";
import UseWASMFlate from "@/external/wasm-flate";

let graphvizSyncCache: GraphvizSync | null = null;

export default async function UseGraphviz (): Promise<GraphvizSync> {
	if(graphvizSyncCache) return graphvizSyncCache;

	const flate = await UseWASMFlate();

	const graphvizWasmComp = await fetch(graphvizWasmUrl).then(r => r.arrayBuffer());
	const graphvizWasm = flate.gzip_decode_raw(new Uint8Array(graphvizWasmComp));
	const graphviz = await graphvizSync(undefined, graphvizWasm);
	graphvizSyncCache = graphviz;

	return graphviz;
}
