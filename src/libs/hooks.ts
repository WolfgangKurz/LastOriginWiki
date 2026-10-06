import { useCallback, useEffect, useRef, useState } from "preact/hooks";

import { useLocale } from "@/libs/Locale";
import { SetMeta } from "@/libs/Site";

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
	const ret = useCallback(() => fn(v => v + 1), [fn]) as useUpdateResult;
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

function getFontFamilies (fontFamily: string): string[] {
	return fontFamily ? parseFontFamily(fontFamily) : [];
}

function includesFontFamily (families: readonly string[], fonts: Iterable<FontFace>): boolean {
	return Array.from(fonts).some(font => families.includes(font.family));
}

export function useFontLoad (fontFamily: string): boolean {
	const [ready, setReady] = useState(false);

	const fn = useCallback((e: FontFaceSetLoadEvent) => {
		const families = getFontFamilies(fontFamily);
		if (families.length > 0 && e.fontfaces.some(r => families.includes(r.family)))
			setReady(true);
	}, [fontFamily]);

	useEffect(() => {
		const families = getFontFamilies(fontFamily);
		if (families.length === 0) {
			setReady(false);
			return;
		}

		const fonts = document.fonts;
		if (!includesFontFamily(families, fonts)) {
			setReady(false);

			fonts.addEventListener("loadingdone", fn);
			return () => fonts.removeEventListener("loadingdone", fn);
		} else
			setReady(true);
	}, [fontFamily, fn]);

	return ready;
}

interface TitleRegistration {
	priority: number;
	title: string;
}

const TitleRegistrations = new Map<symbol, TitleRegistration>();
let AppliedTitle: string | undefined;

function ApplyRegisteredTitle (): void {
	let active: TitleRegistration | undefined;
	for (const registration of TitleRegistrations.values()) {
		if (!active || registration.priority >= active.priority)
			active = registration;
	}
	const title = active?.title || "";
	if (title === AppliedTitle && document.title === title) return;

	AppliedTitle = title;
	document.title = title;
	SetMeta(["twitter:title", "og:title"], title);
}

/**
 * Updates document's title and `twitter:title` and `og:title` meta tags.
 * Titles with more components take precedence over the app-level fallback.
 * @param title Title components
 */
export function useTitle (title: readonly (string | null | undefined)[] = []): void {
	const [loc] = useLocale({ keys: "COMMON_TITLE" });
	const registrationKey = useRef<symbol | null>(null);
	if (registrationKey.current === null)
		registrationKey.current = Symbol("useTitle");

	const resolvedTitle = [
		...title,
		loc["COMMON_TITLE"],
	]
		.filter((part): part is string => typeof part === "string")
		.map(part => part.replace(/&#x200B;/g, ""))
		.filter(part => part.length > 0)
		.join(" - ");

	useEffect(() => {
		TitleRegistrations.set(registrationKey.current!, {
			priority: title.length,
			title: resolvedTitle,
		});
		ApplyRegisteredTitle();
	}, [resolvedTitle, title.length]);

	useEffect(() => () => {
		TitleRegistrations.delete(registrationKey.current!);
		ApplyRegisteredTitle();
	}, []);
}
