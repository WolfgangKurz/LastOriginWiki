// TODO : Remove <Loader> component
import { FunctionalComponent, createElement } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

import * as YAML from "@/external/yaml";

import { useUpdate } from "@/libs/hooks";
import { DataRoot } from "@/libs/Const";
import { CurrentDB } from "@/libs/DB";

import DBHash, { DBHashType } from "@/libs/Loader/hash";

export * from "./static";

interface SubComponentBase {
	store: any;
}
export type SubComponent<T> = SubComponentBase & T;

interface LoaderProps {
	db?: string;
	json?: string | string[];

	content?: preact.VNode | FunctionalComponent<{}>;
	loading?: preact.VNode;
	error?: preact.VNode;
}

enum LoaderState {
	EMPTY = 0,
	REQUEST = 1,
	ERROR = 2,
	DONE = 3,
}
enum DBState {
	UNSET = -1,
	LOADING = 0,
	READY = 1,
	ERROR = 2,
}

const LoadQueue: Record<string, Array<() => void>> = {};
const Cache: Record<string, any> = {};

function Load (db: string, json: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		if (json in Cache) return resolve();

		let first = false;
		if (!(json in LoadQueue)) {
			LoadQueue[json] = [];
			first = true;
		}

		LoadQueue[json].push((): void => resolve());
		if (!first) return;

		const _rootDB = json.startsWith("!/");
		const _rootJson = _rootDB ? json : `!/${db}/${json}`;
		const _hash = (() => {
			const parts = _rootJson.substring(2).split("/");
			let target = DBHash;

			for (let i = 0; i < parts.length; i++) {
				const p = parts[i];
				if (p in target) {
					target = target[p] as DBHashType;
				} else
					return "";
			}

			if (typeof target === "string") return `?_=${target}`;
			return "";
		})();

		const _postfix = _rootJson.includes(".yml") ? _hash : `.yml${_hash}`;

		const xhr = new XMLHttpRequest();
		xhr.open("GET", `${DataRoot}/${_rootJson.substring(2)}${_postfix}`);
		xhr.addEventListener("load", (e) => {
			if (Math.floor(xhr.status / 100) === 2) {
				const data = YAML.load(xhr.responseText, undefined);
				Cache[json] = data;
				Object.freeze(Cache[json]); // prevent to corrupt data
				LoadQueue[json].forEach(c => c());
				delete LoadQueue[json];
			} else
				reject(e);
		});
		xhr.addEventListener("error", (e) => reject(e));
		xhr.send();
	});
}

function normalize (list: string | string[] | undefined): string[] {
	if (!list) return [];
	if (typeof list === "string") return [list];
	return list;
}

const DBDataSymbols = {
	None: Symbol("None"),
	Loading: Symbol("Loading"),
	Failed: Symbol("Failed"),
};

/**
 * Get data from `db/json`.
 *
 * This method will fetch from server, parse to `T` and cache automatically.
 *
 * To remove cache and re-fetch, use `{@link unsetDBData}` method.
 * @param path Target path of data, after `db` directory. If set `null`, will not fetch and always returns `undefined`.
 * @param db Dataset to get. `"korea"` only available currently.
 * @param requestId Id of request. Used for re-fetch already fetched same path, same db data.
 * @returns `T` if data ready, `useDBData.Loading` if not ready yet, `useDBData.Failed` if failed to get, `useDBData.None` if `path` is `null`.
 */
export function useDBData<T extends {}> (path: string | null, db: "korea" = CurrentDB, requestId?: number): T | symbol {
	const inCache = path !== null && (path in Cache);
	const update = useUpdate();
	const [state, setState] = useState<DBState>(() => inCache ? DBState.READY : DBState.UNSET);
	const [result, setResult] = useState<T | symbol>(() => inCache ? Cache[path!] : DBDataSymbols.None);

	useEffect(() => {
		if (path !== null) {
			if (path in Cache) {
				setResult(Cache[path]);
				setState(DBState.READY);
			} else {
				setResult(DBDataSymbols.Loading);
				setState(DBState.LOADING);

				Load(db, path)
					.then(() => update())
					.catch(() => {
						setState(DBState.ERROR);
						setResult(DBDataSymbols.Failed);
					});
			}
		} else {
			setResult(DBDataSymbols.None);
			setState(DBState.UNSET);
		}
	}, [path, db, requestId, update.value]);

	return result;
}
useDBData.None = DBDataSymbols.None;
useDBData.Loading = DBDataSymbols.Loading;
useDBData.Failed = DBDataSymbols.Failed;
Object.freeze(useDBData); // to prevent overwrite symbols

/**
 * Check all element of `data` is not `Loading` or `Failed` or `None` state of `useDBData`.
 * @param data Data to check, return of `useDBData`.
 * @returns `true` if all data ready, `false` if not.
 */
export function assertDBData<T> (data: (T | symbol)[]): data is (T)[];
/**
 * Check `data` is not `Loading` or `Failed` or `None` state of `useDBData`.
 * @param data Data to check, return of `useDBData`.
 * @returns `true` if data ready, `false` if not.
 */
export function assertDBData<T> (data: T | symbol): data is T;
export function assertDBData<T> (data: T | symbol | [T | symbol]): data is T | [T] {
	if (Array.isArray(data))
		return data.every(r => typeof (r) !== "symbol");
	else
		return typeof (data) !== "symbol";
}


/**
 * @deprecated Using this method is not recommended. Use `useDBData` instead.
 * @note Can use this method for non-preact lifecycle or to prevent lifecycle update.
 * @param json JSON file path to get.
 * @returns Data loaded from `JsonLoaderCore`. If data not exists or not loaded yet, `undefined` will returned.
 */
export function GetJson<T> (json: string): T | undefined {
	return json in Cache
		? Cache[json] as T
		: undefined;
}

/**
 * @deprecated Using this method is not recommended. Use `useDBData` instead.
 * @note Can use this method for non-preact lifecycle or to prevent lifecycle update.
 * @param db DB of data
 * @param json JSON file path to load. Array path also supported.
 * @returns Loader `Promise`, no result data contains (void type). To get result, use `GetJson<T>` method.
 */
export function JsonLoaderCore (db: string, json: string | string[] | undefined): Promise<void[]> {
	const list = normalize(json);

	if (list.length === 0 || list.every(x => x in Cache))
		return Promise.resolve([]);

	return Promise.all(list.map(x => Load(db, x)));
}

/**
 * Remove cached data from `useDBData` or `JsonLoaderCore` method.
 * @param json JSON file path that same with `json` parameter of `useDBData` or `JsonLoaderCore`.
 */
export function unsetDBData (json: string): void {
	if (json in Cache)
		delete Cache[json];
}

function comp (a: string[] | readonly string[], b: string[] | readonly string[]): boolean {
	if (a.length !== b.length) return false;
	return a.every((v, i) => v === b[i]);
}

/**
 * @deprecated This component should not be used. Use `useDBData` instead.
 */
const Loader: FunctionalComponent<LoaderProps> = (props) => {
	const db = props.db || CurrentDB;
	const target = normalize(props.json);

	const [list, setList] = useState<string[]>(target);
	const [state, setState] = useState<LoaderState>(LoaderState.EMPTY);

	const response = useCallback(() => {
		if (props.content)
			return typeof props.content === "function"
				? createElement(props.content, {})
				: props.content;
		else
			return <>{ props.children }</>;
	}, [props.content, props.children]);

	useEffect(() => {
		if (!comp(list, target)) {
			setList(target);
			setState(LoaderState.EMPTY);
		}
	}, [list, target]);

	useEffect(() => {
		if (state === LoaderState.EMPTY) {
			if (target.length === 0 || target.every(x => x in Cache)) {
				setState(LoaderState.DONE);
			} else {
				setState(LoaderState.REQUEST);
				JsonLoaderCore(db, target)
					.then(() => setState(LoaderState.DONE))
					.catch(() => setState(LoaderState.ERROR));
			}
		}
	}, [state]);

	switch (state) {
		case LoaderState.DONE:
			return response();
		case LoaderState.REQUEST:
			return props.loading || <></>;
		case LoaderState.ERROR:
			return props.error || <span class="d-inline-block badge bg-danger">
				Failed to load data { target.map(x => <strong>"{ db }/{ x }"</strong>).gap(", ") }.<br />
				Please retry or report to developer.
			</span>;
		default:
			return <></>;
	}
};
export default Loader;
