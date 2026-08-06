import { ComponentChildren, FunctionalComponent, createContext, createElement } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { signal } from "@preact/signals";

import { LocaleTypes, LocaleList } from "@/types/Locale";

import { getCookie, setCookie } from "@/libs/Cookie";
import { GetJson, JsonLoaderCore, StaticDB, unsetDBData } from "@/libs/Loader";
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

type LocaleTable = Record<string, string>;
type LocaleCacheEntry =
	| { status: "loading"; generation: number; attempt: number; promise: Promise<void>; }
	| { status: "loaded"; generation: number; table: LocaleTable; }
	| { status: "failed"; generation: number; attempt: number; error: unknown; };
type UseLocaleResult = [table: LocaleTable, loaded: boolean, localeKey: string];

const EmptyLocaleTable = Object.freeze({}) as LocaleTable;
const LocaleLoadRetryLimit = 2;
const LocaleLoadRetryDelay = 1000;
const CachedLocales: Partial<Record<LocaleTypes, LocaleCacheEntry>> = {};
const LocaleGenerations: Partial<Record<LocaleTypes, number>> = {};

export function GetCachedLocaleTable (locale: LocaleTypes) {
	const entry = CachedLocales[locale];
	return entry?.status === "loaded" ? entry.table : undefined;
}

export const CurrentLocale = signal<LocaleTypes>(LangValidation(getCookie("LO_LANG", DefaultLang)));
export const GlobalLocaleRequestId = signal<number>(0);

const LocaleContext = createContext<UseLocaleResult | undefined>(undefined);

function GetLocaleGeneration (locale: LocaleTypes): number {
	return LocaleGenerations[locale] || 0;
}

function NotifyLocaleChanged (locale: LocaleTypes): void {
	if (CurrentLocale.peek() === locale)
		GlobalLocaleRequestId.value++;
}

function EnsureLocaleLoad (locale: LocaleTypes, attempt = 0): void {
	const cached = CachedLocales[locale];
	if (cached) return;

	const generation = GetLocaleGeneration(locale);
	const subgroups: string[] = idxs[locale] || [];
	const localeKeys = subgroups.map(g => `${StaticDB.Locale[locale]}.${g}`);
	const entry: LocaleCacheEntry & { status: "loading"; } = {
		status: "loading",
		generation,
		attempt,
		promise: Promise.resolve(),
	};

	CachedLocales[locale] = entry;
	entry.promise = JsonLoaderCore("", localeKeys)
		.then(() => {
			if (CachedLocales[locale] !== entry || GetLocaleGeneration(locale) !== generation)
				return;

			const table: LocaleTable = {};
			for (const key of localeKeys) {
				const chunk = GetJson<LocaleTable>(key) || {};
				for (const chunkKey in chunk)
					table[chunkKey] = chunk[chunkKey];

				unsetDBData(key);
			}

			CachedLocales[locale] = { status: "loaded", generation, table };
			NotifyLocaleChanged(locale);
		})
		.catch(error => {
			if (CachedLocales[locale] !== entry || GetLocaleGeneration(locale) !== generation)
				return;

			const failedEntry: LocaleCacheEntry & { status: "failed"; } = {
				status: "failed",
				generation,
				attempt,
				error,
			};
			CachedLocales[locale] = failedEntry;
			NotifyLocaleChanged(locale);

			if (attempt >= LocaleLoadRetryLimit) return;
			window.setTimeout(() => {
				if (
					CachedLocales[locale] !== failedEntry ||
					GetLocaleGeneration(locale) !== generation ||
					CurrentLocale.peek() !== locale
				) return;

				delete CachedLocales[locale];
				EnsureLocaleLoad(locale, attempt + 1);
			}, LocaleLoadRetryDelay * (2 ** attempt));
		});
}

interface LocaleProviderProps {
	children?: ComponentChildren;
}

export const LocaleProvider: FunctionalComponent<LocaleProviderProps> = (props) => {
	const [currentLocale, setCurrentLocale] = useState<LocaleTypes>(CurrentLocale.peek());
	const [requestId, setRequestId] = useState<number>(GlobalLocaleRequestId.peek());

	useEffect(() => {
		const unsub = [
			CurrentLocale.subscribe(setCurrentLocale),
			GlobalLocaleRequestId.subscribe(setRequestId),
		];
		return () => unsub.forEach(fn => fn());
	}, []);

	useEffect(() => {
		if (CachedLocales[currentLocale]?.status === "failed")
			delete CachedLocales[currentLocale];

		EnsureLocaleLoad(currentLocale);
	}, [currentLocale]);

	const value = useMemo<UseLocaleResult>(() => {
		const entry = CachedLocales[currentLocale];
		if (entry?.status === "loaded")
			return [entry.table, true, currentLocale];

		return [EmptyLocaleTable, false, currentLocale];
	}, [currentLocale, requestId]);

	return createElement(LocaleContext.Provider, { value }, props.children);
};

export function useLocale (): UseLocaleResult {
	const context = useContext(LocaleContext);
	if (context) return context;

	const currentLocale = CurrentLocale.value;
	const _requestId = GlobalLocaleRequestId.value; // subscribe to cache changes outside LocaleProvider
	const entry = CachedLocales[currentLocale];
	if (entry?.status === "loaded")
		return [entry.table, true, currentLocale];

	return [EmptyLocaleTable, false, currentLocale];
}

export function formatString (template: string, ...p: any[]): string {
	return template.replace(/\{([0-9]+)\}/g, (_p, p1) => {
		const i = parseInt(p1, 10);
		if (i >= p.length) return "";
		if (!p[i]) return "";
		return p[i].toString();
	});
}

export function ReloadLocale (locale: LocaleTypes): void {
	LocaleGenerations[locale] = GetLocaleGeneration(locale) + 1;
	for (const subgroup of idxs[locale] || [])
		unsetDBData(`${StaticDB.Locale[locale]}.${subgroup}`);

	delete CachedLocales[locale];
	NotifyLocaleChanged(locale);
	EnsureLocaleLoad(locale);
}
