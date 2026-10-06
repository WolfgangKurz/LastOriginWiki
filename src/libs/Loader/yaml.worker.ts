import * as YAML from "@/external/yaml";

interface YAMLWorkerRequest {
	id: number;
	type: "ensure" | "load";
	source?: ArrayBuffer;
}

interface YAMLWorkerResponse {
	id: number;
	ok: boolean;
	data?: unknown;
	error?: {
		name: string;
		message: string;
		stack?: string;
	};
}

interface WorkerContext {
	onmessage: ((event: MessageEvent<YAMLWorkerRequest>) => void) | null;
	postMessage: (response: YAMLWorkerResponse) => void;
}

const context = self as unknown as WorkerContext;
const Decoder = new TextDecoder("utf-8");
let ensurePromise: Promise<void> | undefined;

function ensureYAML (): Promise<void> {
	if (!ensurePromise) {
		ensurePromise = YAML.ensure()
			.catch(error => {
				ensurePromise = undefined;
				throw error;
			});
	}
	return ensurePromise;
}

function serializeError (error: unknown): YAMLWorkerResponse["error"] {
	if (error instanceof Error) {
		return {
			name: error.name,
			message: error.message,
			stack: error.stack,
		};
	}

	return {
		name: "Error",
		message: typeof error === "string" ? error : String(error),
	};
}

context.onmessage = async (event): Promise<void> => {
	const request = event.data;

	try {
		await ensureYAML();
		let data: unknown;
		if (request.type === "load") {
			if (!request.source) throw new Error("Missing YAML source");
			data = YAML.load(Decoder.decode(request.source), undefined);
		}

		context.postMessage({
			id: request.id,
			ok: true,
			data,
		});
	} catch (error) {
		context.postMessage({
			id: request.id,
			ok: false,
			error: serializeError(error),
		});
	}
};

