import { FunctionalComponent, createElement } from "preact";
import { useEffect, useState } from "preact/hooks";

// import YAML from "yaml";
import * as YAML from "@/external/yaml";

import { DataRoot } from "@/libs/Const";
import { CurrentDB } from "@/libs/DB";
import EntitySource from "@/libs/EntitySource";

import DBHash, { DBHashType } from "@/components/loader/hash";

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
const CachedJson: Record<string, any> = {};

function Load<T = any> (db: string, json: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		if (json in CachedJson) return resolve();

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
				const data = YAML.load(xhr.responseText, undefined) as T;
				CachedJson[json] = data;
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

export type JsonDataConverter<T> = (data: T) => T;
export function DBSourceConverter<T extends {}> (data: T): T {
	if (Array.isArray(data)) {
		return data.map(data => {
			if (!("source" in data)) return data;

			const _ = data as T & {
				source: EntitySource[][];
			};
			_.source = (_.source as unknown as string[][])
				.map(x => x.map(y => typeof y === "string" ? new EntitySource(y) : y));
			return _;
		}) as unknown as T;
	}

	if (!("source" in data)) return data;

	const _ = data as T & {
		source: EntitySource[][];
	};
	_.source = (_.source as unknown as string[][])
		.map(x => x.map(y => typeof y === "string" ? new EntitySource(y) : y));
	return _;
}
export function GetJson<T> (json: string, converter?: JsonDataConverter<T>): T {
	if (converter) return converter(CachedJson[json] as T);
	return CachedJson[json] as T;
}
export function JsonLoaderCore (db: string, json: string | string[] | undefined): Promise<void[]> {
	const list = normalize(json);

	if (list.length === 0 || list.every(x => x in CachedJson))
		return Promise.resolve([]);

	return Promise.all(list.map(x => Load(db, x)));
}

export function JsonInvalidate (json: string): void {
	if (json in CachedJson)
		delete CachedJson[json];
}

function comp (a: string[] | readonly string[], b: string[] | readonly string[]): boolean {
	if (a.length !== b.length) return false;
	return a.every((v, i) => v === b[i]);
}

interface DefaultFailedBadgeProps {
	db: string;
	list: string[];
}

const DefaultFailedBadge: FunctionalComponent<DefaultFailedBadgeProps> = ({ db, list }) =>
	<span class="d-inline-block badge bg-danger">
		Failed to load data { list.map(x => <strong>"{ db }/{ x }"</strong>).gap(", ") }.<br />
		Please retry or report to developer.
	</span>;
const DefaultLoadingBadge: FunctionalComponent = () => <span class="text-secondary">Data loading</span>;

const Loader: FunctionalComponent<LoaderProps> = (props) => {
	const db = props.db || CurrentDB;
	const target = normalize(props.json);

	const [list, setList] = useState<string[]>(target);
	const [state, setState] = useState<LoaderState>(LoaderState.EMPTY);

	const response = () => {
		if (props.content)
			return typeof props.content === "function"
				? createElement(props.content, {})
				: props.content;
		else
			return <>{ props.children }</>;
	};

	useEffect(() => {
		if (!comp(list, target)) {
			setList(target);
			setState(LoaderState.EMPTY);
		}
	}, [list, target]);

	if (state === LoaderState.EMPTY) {
		if (target.length === 0 || target.every(x => x in CachedJson)) {
			setState(LoaderState.DONE);
			return response();
		}

		setState(LoaderState.REQUEST);
		JsonLoaderCore(db, target)
			.then(() => setState(LoaderState.DONE))
			.catch(() => setState(LoaderState.ERROR));
	}

	switch (state) {
		case LoaderState.DONE:
			return response();
		case LoaderState.REQUEST:
			return props.loading || <DefaultLoadingBadge />;
		case LoaderState.ERROR:
			return props.error || <DefaultFailedBadge db={ db } list={ target } />;
		default:
			return <></>;
	}
};
export default Loader;
