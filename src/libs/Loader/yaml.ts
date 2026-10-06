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

interface PendingRequest {
	resolve: (value: unknown) => void;
	reject: (reason?: unknown) => void;
}

let worker: Worker | undefined;
let requestId = 0;
const PendingRequests = new Map<number, PendingRequest>();

function rejectPendingRequests (error: Error): void {
	PendingRequests.forEach(request => request.reject(error));
	PendingRequests.clear();
}

function resetWorker (target: Worker, error: Error): void {
	if (worker !== target) return;

	target.terminate();
	worker = undefined;
	rejectPendingRequests(error);
}

function getWorker (): Worker {
	if (worker) return worker;

	const nextWorker = new Worker(new URL("./yaml.worker.ts", import.meta.url), { type: "module" });
	nextWorker.addEventListener("message", (event: MessageEvent<YAMLWorkerResponse>) => {
		const response = event.data;
		const request = PendingRequests.get(response.id);
		if (!request) return;

		PendingRequests.delete(response.id);
		if (response.ok) {
			request.resolve(response.data);
			return;
		}

		const error = new Error(response.error?.message || "Failed to parse YAML");
		error.name = response.error?.name || "Error";
		if (response.error?.stack) error.stack = response.error.stack;
		request.reject(error);
	});
	nextWorker.addEventListener("error", event => {
		const error = new Error(event.message || "YAML worker stopped unexpectedly");
		resetWorker(nextWorker, error);
	});
	nextWorker.addEventListener("messageerror", () => {
		resetWorker(nextWorker, new Error("Failed to receive data from YAML worker"));
	});

	worker = nextWorker;
	return nextWorker;
}

function requestWorker<T> (type: YAMLWorkerRequest["type"], source?: ArrayBuffer): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		const id = ++requestId;
		PendingRequests.set(id, {
			resolve: value => resolve(value as T),
			reject,
		});

		try {
			getWorker().postMessage(
				{ id, type, source } satisfies YAMLWorkerRequest,
				source ? [source] : [],
			);
		} catch (error) {
			PendingRequests.delete(id);
			reject(error);
		}
	});
}

export function ensureYAMLParser (): Promise<void> {
	return requestWorker<void>("ensure");
}

export function loadYAML<T = unknown> (source: ArrayBuffer): Promise<T> {
	return requestWorker<T>("load", source);
}

