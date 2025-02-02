// TODO : Remove <Loader> component
import { FunctionalComponent, createElement } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

import * as YAML from "@/external/yaml";

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

/**
 * Get data from `db/json`.
 *
 * This method will fetch from server, parse to `T` and cache automatically.
 *
 * To remove cache and re-fetch, use `{@link unsetDBData}` method.
 * @param path Target path of data, after `db` directory. If set `null`, will not fetch and always returns `undefined`.
 * @param db Dataset to get. `"korea"` only available currently.
 * @param requestId Id of request. Used for re-fetch already fetched same path, same db data.
 * @returns `T` if data ready, `undefined` if not ready yet, `null` if failed to get.
 */
export function useDBData<T extends {}> (path: string | null, db: "korea" = CurrentDB, requestId?: number): T | null | undefined {
	const inCache = !!path && (path in Cache);
	const [state, setState] = useState(-1); // uninitialized
	const [result, setResult] = useState<T | undefined>(inCache ? Cache[path!] : undefined);

	useEffect(() => {
		// if (state === -1 && inCache) return;

		setResult(undefined);
		setState(path === null ? -1 : 0);
	}, [path, db, requestId]);

	useEffect(() => {
		if (state === 0) {
			const _path = path!;
			if (_path in Cache) {
				setState(2);
				setResult(Cache[_path]);
			} else {
				setState(1);
				Load(db, _path)
					.then(() => {
						setState(2);
						setResult(Cache[_path]);
					})
					.catch(() => {
						setState(3);
					});
			}
		}
	}, [state]);

	if (state === 3) return null;
	return result;
}

/**
 * @deprecated This method should not be used. Use `useDBData` instead.
 * @param json File to get
 * @param converter Preprocess function before return data
 * @returns Data to get. `undefined` if not loaded yet or not exists.
 */
export function GetJson<T> (json: string): T {
	return Cache[json] as T;
}

/**
 * @deprecated This method should not be used. Use `useDBData` instead.
 * @param db DB of data
 * @param json File to load
 * @returns Loader `Promise`.
 */
export function JsonLoaderCore (db: string, json: string | string[] | undefined): Promise<void[]> {
	const list = normalize(json);

	if (list.length === 0 || list.every(x => x in Cache))
		return Promise.resolve([]);

	return Promise.all(list.map(x => Load(db, x)));
}

export function unsetDBData (dataname: string): void {
	if (dataname in Cache)
		delete Cache[dataname];
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
