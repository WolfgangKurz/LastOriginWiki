import { useEffect, useState } from "preact/hooks";
import { signal } from "@preact/signals";

import { LocaleTypes, LocaleList } from "@/types/Locale";

import { getCookie, setCookie } from "@/libs/Cookie";
import { StaticDB, unsetDBData, useDBData } from "@/libs/Loader";
import idxs from "@/libs/Loader/locales";

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

export const CurrentLocale = signal<LocaleTypes>(LangValidation(getCookie("LO_LANG", DefaultLang)));
export const GlobalLocaleRequestId = signal<number>(0);
export function useLocale (): [table: Record<string, string>, loaded: boolean] {
	const [requestId, setRequestId] = useState(0);
	const [currentLocale, setCurrentLocale] = useState<LocaleTypes>(CurrentLocale.peek());

	useEffect(() => {
		const unsub = [
			CurrentLocale.subscribe(v => setCurrentLocale(v)),
			GlobalLocaleRequestId.subscribe(() => setRequestId(v => v + 1)),
		];
		return () => unsub.forEach(fn => fn());
	}, []);

	const count = idxs[currentLocale] || 0;
	const loc = new Array(count).fill(0)
		.map((_, i) => useDBData<Record<string, string>>(StaticDB.Locale[currentLocale] + `.${i}`, undefined, requestId));

	if (loc.every(v => v))
		return [Object.assign({}, ...loc), true];
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

export function ReloadLocale (locale: string): void {
	const count = idxs[locale] || 0;
	for (let i = 0; i < count; i++)
		unsetDBData(StaticDB.Locale[locale] + `.${i}`);
	GlobalLocaleRequestId.value++; // call changed callbacks
}
