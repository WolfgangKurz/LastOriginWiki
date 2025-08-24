import { useCallback, useEffect, useState } from "preact/hooks";
import { signal } from "@preact/signals";

import { LocaleTypes, LocaleList } from "@/types/Locale";

import { getCookie, setCookie } from "@/libs/Cookie";
import { GetJson, JsonLoaderCore, StaticDB, unsetDBData } from "@/libs/Loader";
import idxs from "@/libs/Loader/locales";
import { useUpdate } from "@/libs/hooks";

export function ChangeLanguage (lang: LocaleTypes): void {
	setCookie("LO_LANG", lang);
	CurrentLocale.value = lang;
	// window.location.reload();
}

function LangValidation (name: string | undefined): LocaleTypes {
	const list = LocaleList as string[];
	if (!name || !list.includes(name)) return "KR";
	return name as LocaleTypes;
}

const DefaultLang = ((): LocaleTypes => {
	const lang = ((window.navigator as any).userLanguage || window.navigator.language) as string;
	const langp = lang.split("-")[0].toLowerCase();
	switch (langp) {
		case "ja":
			return "JP";
		case "en":
			return "EN";
		case "ko":
			return "KR";

		default:
			if (lang.startsWith("zh-Hant"))
				return "TC";
			else if (lang.startsWith("zh-Hans"))
				return "SC";
			return "KR";
	}
})();

type CachedLocaleTableType = Record<LocaleTypes, Record<string, string> | Set<() => void>>;
const CachedLocales: Partial<CachedLocaleTableType> = {};
export function GetCachedLocaleTable (locale: LocaleTypes) {
	const t = CachedLocales[locale];
	if (t instanceof Set) return undefined;
	return t;
}

export const CurrentLocale = signal<LocaleTypes>(LangValidation(getCookie("LO_LANG", DefaultLang)));
export const GlobalLocaleRequestId = signal<number>(0);
export function useLocale (): [table: Record<string, string>, loaded: boolean] {
	const update = useUpdate();
	const [currentLocale, setCurrentLocale] = useState<LocaleTypes>(CurrentLocale.peek());
	const updateCallback = useCallback(() => update(), [update]);

	useEffect(() => {
		const unsub = [
			CurrentLocale.subscribe(v => setCurrentLocale(v)),
			GlobalLocaleRequestId.subscribe(updateCallback),
		];
		return () => unsub.forEach(fn => fn());
	}, []);

	if (currentLocale in CachedLocales) {
		if (CachedLocales[currentLocale] instanceof Set) {
			CachedLocales[currentLocale].add(updateCallback);
			return [{}, false];
		}

		return [CachedLocales[currentLocale]!, true];
	}

	CachedLocales[currentLocale] = new Set([updateCallback]);

	const count = idxs[currentLocale] || 0;
	JsonLoaderCore("", new Array(count).fill(0).map((_, i) => StaticDB.Locale[currentLocale] + `.${i}`))
		.then(() => {
			// Merge separated locales
			const loc = Object.assign(
				{},
				...new Array(count).fill(0)
					.map((_, i) => GetJson(StaticDB.Locale[currentLocale] + `.${i}`) || {}) // safe
			);

			// Remove from Loader cache (to reduce memory usage)
			for (let i = 0; i < count; i++)
				unsetDBData(StaticDB.Locale[currentLocale] + `.${i}`);

			const fns = [...(CachedLocales[currentLocale] as Set<() => void>)];
			CachedLocales[currentLocale] = loc;

			fns.forEach(fn => fn());
		});
	return [{}, false];
};

export function formatString (template: string, ...p: any[]): string {
	return template.replace(/\{([0-9]+)\}/g, (_p, p1) => {
		const i = parseInt(p1, 10);
		if (i >= p.length) return "";
		if (!p[i]) return "";
		return p[i].toString();
	});
}

export function ReloadLocale (locale: LocaleTypes): void {
	const count = idxs[locale] || 0;
	for (let i = 0; i < count; i++)
		unsetDBData(StaticDB.Locale[locale] + `.${i}`);
	delete CachedLocales[locale];
	GlobalLocaleRequestId.value++; // call changed callbacks
}
