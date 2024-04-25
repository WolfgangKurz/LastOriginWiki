import { useCallback, useEffect, useState } from "preact/hooks";

export interface useUpdateResult {
	(): void;
	value: number;
}

/**
 * Hook to re-call `FunctionalComponent` render cycle.
 * @returns Update function. `value` property is current update id.
 */
export function useUpdate (): useUpdateResult {
	const [value, fn] = useState(0);
	const ret: useUpdateResult = () => fn(v => v + 1);
	ret.value = value;
	return ret;
}

function parseFontFamily (text: string | string[]): string[] {
	if (Array.isArray(text)) return text;

	const list: string[] = [];
	let buffer = "";
	let quote = 0;
	let require = "";
	for (const c of text) {
		if (quote === 0) {
			if (require) {
				if (c !== require && c !== " ")
					throw new Error("'" + require + "' expected, but found '" + c + "'");
				else
					require = "";
			}

			if (c === "'") {
				quote = 1;
				continue;
			} else if (c === "\"") {
				quote = 2;
				continue;
			}

			if (c === ",") {
				list.push(buffer);
				buffer = "";
				continue;
			}

			buffer += c;
			continue;
		}

		if ((quote === 1 && c === "'") || (quote === 2 && c === "\"")) {
			quote = 0;
			require = ",";
		} else if (quote !== 0)
			buffer += c;
	}

	if (quote !== 0)
		throw new Error("Quote " + (quote === 1 ? "'" : "\"") + " expected, but reach end");

	if (buffer.length > 0) list.push(buffer);

	return list.map(r => r.trim());
}
export function useFontLoad (fontFamily: string): boolean {
	const [ready, setReady] = useState(false);

	const _doc_fonts = document.fonts as FontFaceSet;
	const fn = useCallback((e: FontFaceSetLoadEvent) => {
		if (fontFamily) { // target font loaded
			const families = parseFontFamily(fontFamily ?? "sans-serif");
			if (e.fontfaces.some(r => families.includes(r.family)))
				setReady(true);
		}
	}, [fontFamily]);

	useEffect(() => {
		if (!Array.from(_doc_fonts).some(r => r.family === fontFamily)) {
			_doc_fonts.addEventListener(
				"loadingdone",
				// @ts-expect-error
				fn,
			);
			setReady(false);
		} else
			setReady(true);
	}, [fontFamily]);

	return ready;
}
