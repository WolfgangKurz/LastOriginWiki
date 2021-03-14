import EntitySource from "@/libs/EntitySource";
import { objState } from "@/libs/State";
import { Fragment, FunctionalComponent, h } from "preact";

import { DataRoot } from "./Const";

const LoadQueue: Record<string, Array<() => void>> = {};
const CachedJson: Record<string, any> = {};

function Load<T = any> (json: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		if (json in CachedJson) return resolve();

		let first = false;
		if (!(json in LoadQueue)) {
			LoadQueue[json] = [];
			first = true;
		}

		LoadQueue[json].push((): void => resolve());
		if (!first) return;

		const xhr = new XMLHttpRequest();
		xhr.open("GET", `${DataRoot}/${json}.json`);
		xhr.addEventListener("load", (e) => {
			if (Math.floor(xhr.status / 100) === 2) {
				const data = JSON.parse(xhr.responseText) as T;
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

export type JsonDataConverter<T> = (data: T) => T;

export const StaticDB = {
	FilterableUnit: "filterable.unit",
	FilterableEquip: "filterable.equip",
	FilterableEnemy: "filterable.enemy",
	FilterableFacility: "filterable.facility",
	Consumable: "consumable",
	Exchange: "exchange",
	EXP: "exp",
	Map: "map",
	Story: "story",
};

export function DBSourceConverter<T> (data: T): T {
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

export function JsonLoaderCore (json: string | string[] | undefined): Promise<void[]> {
	const list = typeof json === "undefined"
		? []
		: typeof json === "string"
			? [json]
			: json;

	if (list.length === 0 || list.every(x => x in CachedJson))
		return new Promise<void[]>((resolve) => resolve([]));

	return Promise.all(list.map(x => Load(x)));
}

export default function JsonLoader (
	json: string | string[] | undefined,
	doneNode: FunctionalComponent,
	loadingNode: preact.VNode | null = null,
	errorNode: preact.VNode | null = null,
): preact.VNode {
	const list: string[] = typeof json === "undefined"
		? []
		: typeof json === "string"
			? [json]
			: json;

	const prevList = objState<string[]>([]);
	const fulfilled = objState<boolean>(false);
	const errored = objState<boolean>(false);

	if (prevList.value.join("!") !== list.join("!")) {
		prevList.set(list);
		fulfilled.set(false);
		errored.set(false);
		return <Fragment />;
	}

	JsonLoaderCore(list)
		.then(() => fulfilled.set(true))
		.catch(() => errored.set(true));

	return fulfilled.value
		? doneNode({}) || <Fragment />
		: errored.value
			? errorNode || <span class="badge bg-danger">
				Failed to load data { list.map(x => <strong>"{ x }"</strong>).gap(", ") }.<br />
				Please retry or report to developer.
			</span>
			: loadingNode || <span class="text-secondary">Loading data</span>;
}
