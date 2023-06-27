import { useState } from "preact/hooks";

export function useUpdate (): (() => void) {
	const [_, fn] = useState(0);
	return () => fn(v => v + 1);
}
