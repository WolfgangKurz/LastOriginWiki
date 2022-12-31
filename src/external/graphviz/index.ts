
import { GraphvizSync, graphvizSync } from "@/external/graphviz/graphviz";
import graphvizWasmUrl from "@/external/graphviz/graphvizlib.lzma.wasm?url";
import LZMADecompression from "@/external/lzma";

let graphvizSyncCache: GraphvizSync | null = null;

export default async function UseGraphviz (): Promise<GraphvizSync> {
	if (graphvizSyncCache) return graphvizSyncCache;

	const graphvizWasmComp = await fetch(graphvizWasmUrl)
		.then(r => r.arrayBuffer())
		.then(r => new Uint8Array(r));
	const graphvizWasm = await LZMADecompression(graphvizWasmComp);
	const graphviz = await graphvizSync(undefined, graphvizWasm);
	graphvizSyncCache = graphviz;

	return graphviz;
}
