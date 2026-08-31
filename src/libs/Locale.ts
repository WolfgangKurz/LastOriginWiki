import { ComponentChildren, FunctionalComponent, createContext, createElement } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { signal } from "@preact/signals";

import { LocaleTypes, LocaleList } from "@/types/Locale";

import { getCookie, setCookie } from "@/libs/Cookie";
import { GetJson, JsonLoaderCore, StaticDB, unsetDBData } from "@/libs/Loader";
import localeManifest from "@/libs/Loader/locales";

export function ChangeLanguage (lang: LocaleTypes): void {
	setCookie("LO_LANG", lang);
	CurrentLocale.value = lang;
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
type LocaleChunkEntry =
	| { status: "loading"; generation: number; attempt: number; promise: Promise<void>; }
	| { status: "loaded"; generation: number; }
	| { status: "failed"; generation: number; attempt: number; error: unknown; };
interface LocaleStore {
	generation: number;
	revision: number;
	table: LocaleTable;
	chunks: Partial<Record<string, LocaleChunkEntry>>;
}

export interface LocaleRequest {
	keys?: string | readonly string[];
	namespaces?: string | readonly string[];
	prefixes?: string | readonly string[];
}

type UseLocaleResult = [table: LocaleTable, loaded: boolean, localeKey: LocaleTypes];
interface LocaleContextValue {
	locale: LocaleTypes;
	requestId: number;
}

const EmptyLocaleTable = Object.freeze({}) as LocaleTable;
const LocaleLoadRetryLimit = 2;
const LocaleLoadRetryDelay = 1000;
const CachedLocales: Partial<Record<LocaleTypes, LocaleStore>> = {};
const LocaleGenerations: Partial<Record<LocaleTypes, number>> = {};
const LocalePrefixEntries = Object.entries(localeManifest.prefixes)
	.sort((a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0]));
const CoreLocaleChunks = localeManifest.groups.CORE || [];

export function GetCachedLocaleTable (locale: LocaleTypes): LocaleTable | undefined {
	const store = CachedLocales[locale];
	return store?.generation === GetLocaleGeneration(locale) ? store.table : undefined;
}

export const CurrentLocale = signal<LocaleTypes>(LangValidation(getCookie("LO_LANG", DefaultLang)));
export const GlobalLocaleRequestId = signal<number>(0);

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function GetLocaleGeneration (locale: LocaleTypes): number {
	return LocaleGenerations[locale] || 0;
}

function GetLocaleStore (locale: LocaleTypes): LocaleStore {
	const generation = GetLocaleGeneration(locale);
	const cached = CachedLocales[locale];
	if (cached?.generation === generation) return cached;

	const store: LocaleStore = {
		generation,
		revision: 0,
		table: {},
		chunks: {},
	};
	CachedLocales[locale] = store;
	return store;
}

function NotifyLocaleChanged (locale: LocaleTypes): void {
	if (CurrentLocale.peek() === locale)
		GlobalLocaleRequestId.value++;
}

function NormalizeRequestList (value: string | readonly string[] | undefined): string[] {
	if (!value) return [];
	return (typeof value === "string" ? [value] : value)
		.map(item => item.trim())
		.filter(item => item.length > 0);
}

function NormalizeLocaleKey (value: string): string {
	return value.toUpperCase();
}

function NormalizeLocalePrefix (value: string): string {
	return NormalizeLocaleKey(value).replace(/_+$/, "");
}

function IsLocalePrefix (key: string, prefix: string): boolean {
	return key === prefix || key.startsWith(`${prefix}_`);
}

function HashLocaleKey (key: string): number {
	let hash = 0x811c9dc5;
	for (let i = 0; i < key.length; i++) {
		hash ^= key.charCodeAt(i);
		hash = Math.imul(hash, 0x01000193);
	}
	return hash >>> 0;
}

function ResolveLocaleGroup (key: string): string | undefined {
	const normalized = NormalizeLocaleKey(key);
	return LocalePrefixEntries.find(([prefix]) => IsLocalePrefix(normalized, prefix))?.[1];
}

function AddLocaleGroupChunks (target: Set<string>, group: string | undefined): void {
	if (!group) return;
	for (const file of localeManifest.groups[group] || [])
		target.add(file);
}

function ResolveLocaleKeyChunk (key: string): string | undefined {
	const normalized = NormalizeLocaleKey(key);
	const group = ResolveLocaleGroup(normalized);
	if (!group) return undefined;

	const files = localeManifest.groups[group] || [];
	if (files.length === 0) return undefined;
	return files[HashLocaleKey(normalized) % files.length];
}

function AddLocalePrefixChunks (target: Set<string>, value: string): void {
	const requested = NormalizeLocalePrefix(value);
	if (!requested) return;

	const descendants = LocalePrefixEntries.filter(([prefix]) => IsLocalePrefix(prefix, requested));
	if (descendants.length > 0) {
		descendants.forEach(([, group]) => AddLocaleGroupChunks(target, group));
		return;
	}

	const ancestor = LocalePrefixEntries.find(([prefix]) => IsLocalePrefix(requested, prefix));
	AddLocaleGroupChunks(target, ancestor?.[1]);
}

export function ResolveLocaleChunks (request: LocaleRequest): string[] {
	const chunks = new Set<string>();

	NormalizeRequestList(request.keys).forEach(key => {
		const chunk = ResolveLocaleKeyChunk(key);
		if (chunk) chunks.add(chunk);
	});
	NormalizeRequestList(request.namespaces).forEach(namespace => {
		AddLocaleGroupChunks(chunks, localeManifest.prefixes[NormalizeLocalePrefix(namespace)]);
	});
	NormalizeRequestList(request.prefixes).forEach(prefix => AddLocalePrefixChunks(chunks, prefix));

	return Array.from(chunks).sort();
}

function EnsureLocaleChunk (locale: LocaleTypes, file: string, attempt = 0): void {
	const store = GetLocaleStore(locale);
	const cached = store.chunks[file];
	if (cached) return;

	const generation = store.generation;
	const localeKey = `${StaticDB.Locale[locale]}.${file}`;
	const entry: LocaleChunkEntry & { status: "loading"; } = {
		status: "loading",
		generation,
		attempt,
		promise: Promise.resolve(),
	};

	store.chunks[file] = entry;
	entry.promise = JsonLoaderCore("", localeKey)
		.then(() => {
			if (CachedLocales[locale] !== store || store.generation !== generation || store.chunks[file] !== entry) {
				queueMicrotask(() => unsetDBData(localeKey));
				return;
			}

			const chunk = GetJson<LocaleTable>(localeKey) || {};
			store.table = { ...store.table, ...chunk };
			unsetDBData(localeKey);
			store.chunks[file] = { status: "loaded", generation };
			store.revision++;
			NotifyLocaleChanged(locale);
		})
		.catch(error => {
			if (CachedLocales[locale] !== store || store.generation !== generation || store.chunks[file] !== entry)
				return;

			const failedEntry: LocaleChunkEntry & { status: "failed"; } = {
				status: "failed",
				generation,
				attempt,
				error,
			};
			store.chunks[file] = failedEntry;
			store.revision++;
			NotifyLocaleChanged(locale);

			if (attempt >= LocaleLoadRetryLimit) return;
			window.setTimeout(() => {
				if (CachedLocales[locale] !== store || store.generation !== generation || store.chunks[file] !== failedEntry)
					return;

				delete store.chunks[file];
				EnsureLocaleChunk(locale, file, attempt + 1);
			}, LocaleLoadRetryDelay * (2 ** attempt));
		});
}

function EnsureLocaleChunks (locale: LocaleTypes, chunks: readonly string[]): void {
	chunks.forEach(chunk => EnsureLocaleChunk(locale, chunk));
}

function AreLocaleChunksLoaded (locale: LocaleTypes, chunks: readonly string[]): boolean {
	const store = CachedLocales[locale];
	const generation = GetLocaleGeneration(locale);
	if (chunks.length === 0) return true;
	if (!store || store.generation !== generation) return false;
	return chunks.every(chunk => {
		const entry = store.chunks[chunk];
		return entry?.status === "loaded" && entry.generation === generation;
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
		EnsureLocaleChunks(currentLocale, CoreLocaleChunks);
	}, [currentLocale]);

	const value = useMemo<LocaleContextValue>(() => ({
		locale: currentLocale,
		requestId,
	}), [currentLocale, requestId]);

	return createElement(LocaleContext.Provider, { value }, props.children);
};

export function useLocale (request: LocaleRequest): UseLocaleResult {
	const context = useContext(LocaleContext);
	const currentLocale = context?.locale ?? CurrentLocale.value;
	const _requestId = context?.requestId ?? GlobalLocaleRequestId.value;
	const generation = GetLocaleGeneration(currentLocale);
	const chunks = ResolveLocaleChunks(request);
	const signature = chunks.join("|");

	useEffect(() => {
		EnsureLocaleChunks(currentLocale, chunks);
	}, [currentLocale, generation, signature]);

	const store = CachedLocales[currentLocale];
	const loaded = AreLocaleChunksLoaded(currentLocale, chunks);
	const table = useMemo<LocaleTable>(
		() => loaded ? store?.table || EmptyLocaleTable : EmptyLocaleTable,
		[currentLocale, generation, signature, loaded, store],
	);
	return [table, loaded, currentLocale];
}

export function formatString (template: string, ...p: any[]): string {
	return template?.replace(/\{([0-9]+)\}/g, (_p, p1) => {
		const i = parseInt(p1, 10);
		if (i >= p.length) return "";
		if (!p[i]) return "";
		return p[i].toString();
	});
}

export function ReloadLocale (locale: LocaleTypes): void {
	LocaleGenerations[locale] = GetLocaleGeneration(locale) + 1;
	for (const file of localeManifest.files)
		unsetDBData(`${StaticDB.Locale[locale]}.${file}`);

	delete CachedLocales[locale];
	NotifyLocaleChanged(locale);
	EnsureLocaleChunks(locale, CoreLocaleChunks);
}
