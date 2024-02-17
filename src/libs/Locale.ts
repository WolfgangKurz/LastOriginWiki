import { useEffect, useMemo, useState } from "preact/hooks";
import { signal } from "@preact/signals";

import { LocaleTypes, LocaleList } from "@/types/Locale";

import { useUpdate } from "@/libs/hooks";
import { getCookie, setCookie } from "@/libs/Cookie";
import { UniqueID } from "@/libs/Functions";
import { CurrentDB } from "@/libs/DB";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";

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

const _localeLoader: Partial<Record<LocaleTypes, Record<string, () => void>>> = {};
export function useLocale (): [table: Record<string, string>, loaded: boolean] {
	const update = useUpdate();
	const key = useMemo(() => UniqueID("useLocale-"), []);
	const [currentLocale, setCurrentLocale] = useState<LocaleTypes>(CurrentLocale.peek());

	useEffect(() => {
		const unsub = CurrentLocale.subscribe(v => setCurrentLocale(v));
		return () => unsub();
	}, []);

	const loc = GetJson<Record<string, string>>(StaticDB.Locale[currentLocale]);
	useEffect(() => {
		const locale = currentLocale;
		if (!loc) {
			_localeLoader[locale] ||= {};

			if (!(key in _localeLoader[locale]!)) {
				_localeLoader[locale]![key] = () => update();

				JsonLoaderCore(CurrentDB, StaticDB.Locale[locale])
					.then(() => {
						const handlers = _localeLoader[locale];
						if (handlers) {
							Object.values(handlers).forEach(fn => fn());
							delete _localeLoader[locale];
						}
					});
			}
		}
	}, [currentLocale]);

	return [loc || {}, !!loc];
};
