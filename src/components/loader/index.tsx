import { FunctionalComponent } from "preact";

import { objState } from "@/libs/State";
import { DataRoot } from "@/libs/Const";
import { CurrentDB } from "@/libs/DB";
import EntitySource from "@/libs/EntitySource";

interface SubComponentBase {
	store: any;
}
export type SubComponent<T> = SubComponentBase & T;

interface LoaderProps {
	db?: string;
	json?: string | string[];

	content?: () => preact.VNode;
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

		const xhr = new XMLHttpRequest();
		xhr.open("GET", `${DataRoot}/${db}/${json}.json`);
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

export const StaticDB = {
	FilterableUnit: "filterable.unit",
	FilterableEquip: "filterable.equip",
	FilterableEnemy: "filterable.enemy",
	FilterableFacility: "filterable.facility",
	EnemyGroup: "enemygroup",
	Consumable: "consumable",
	Exchange: "exchange",
	EXP: "exp",
	Map: "map",
	Story: "story",
	RoguelikeLimitEffects: "roguelike/limiteffects",
	RoguelikeBuffEffects: "roguelike/buffeffects",
	RoguelikeEffects: "roguelike/effects",
	RoguelikeNode: "roguelike/node",
	RoguelikeQuest: "roguelike/quest",
	RoguelikeItem: "roguelike/item",
};

export type JsonDataConverter<T> = (data: T) => T;
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
export function JsonLoaderCore (db: string, json: string | string[] | undefined): Promise<void[]> {
	const list = typeof json === "undefined"
		? []
		: typeof json === "string"
			? [json]
			: json;

	if (list.length === 0)
		return new Promise<void[]>((resolve) => resolve([]));

	if (list.every(x => x in CachedJson))
		return new Promise<void[]>((resolve) => resolve([]));

	return Promise.all(list.map(x => Load(db, x)));
}

const Loader: FunctionalComponent<LoaderProps> = (props) => {
	function flatten (list: string | string[] | undefined): string[] {
		if (!list) return [];
		if (typeof list === "string") return [list];
		return list;
	}
	function comp (a: string[], b: string[]): boolean {
		if (a.length !== b.length) return false;
		return a.every((v, i) => v === b[i]);
	}

	function FailedToLoadBadge (db: string, list: string[]): preact.VNode {
		return <span class="badge bg-danger">
			Failed to load data { list.map(x => <strong>"{ db }/{ x }"</strong>).gap(", ") }.<br />
			Please retry or report to developer.
		</span>;
	}
	function LoadingBadge (): preact.VNode {
		return <span class="text-secondary">Loading data</span>;
	}

	const db = props.db === "!"
		? ""
		: props.db || CurrentDB;
	const target = flatten(props.json);

	const list = objState<string[]>([]);
	const state = objState<LoaderState>(0);

	if (!comp(list.value, target)) {
		list.set(target);
		state.set(LoaderState.EMPTY);
	}

	if (state.value === LoaderState.EMPTY) {
		if (target.every(x => x in CachedJson)) {
			state.set(LoaderState.DONE);
			return <>{ props.content ? props.content() : props.children }</>;
		}

		state.set(LoaderState.REQUEST);
		JsonLoaderCore(db, target)
			.then(() => state.set(LoaderState.DONE))
			.catch(() => state.set(LoaderState.ERROR));
	}

	switch (state.value) {
		case LoaderState.DONE:
			return <>{ props.content ? props.content() : props.children }</>;
		case LoaderState.REQUEST:
			return props.loading || LoadingBadge();
		case LoaderState.ERROR:
			return props.error || FailedToLoadBadge(db, target);
		default:
			return <></>;
	}
};
export default Loader;
