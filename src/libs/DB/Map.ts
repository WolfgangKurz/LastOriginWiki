type MapRewardChar = string;
interface MapRewardItem {
	item: string;
	count: number;
	chance?: number;
}
interface MapRewardCash {
	cash: number;
}
interface MapRewardMetal {
	metal: number;
}
interface MapRewardNutrient {
	nutrient: number;
}
interface MapRewardPower {
	power: number;
}
export type MapReward = MapRewardChar | MapRewardItem | MapRewardCash | MapRewardMetal | MapRewardNutrient | MapRewardPower;

export interface MapEnemyData {
	id: string;
	lv: number;
}
export interface MapWaveDrop {
	id: string;
	// chance: number;
	count?: number;
}

export interface MapWave {
	exp: number;
	enemy: Array<MapEnemyData | null>;
	drops: MapWaveDrop[];
}

export interface MapWaveGroup {
	e: MapWave;
	r: number;
}

export interface MapSearch {
	time: number;
	metal: number;
	nutrient: number;
	power: number;
	units: number;
	unitsLv: number;
	items: MapRewardItem[];
}

export interface MapNodeEntity {
	name: string;
	desc: string;

	prev: number | null;
	offset: number;
	text: string;

	search: MapSearch | null;

	missions: string[];
	/* eslint-disable camelcase */
	reward_f: MapReward[];
	reward_am: MapReward[];
	/* eslint-enable camelcase */

	wave?: Array<MapWaveGroup[]>;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace MapNodeEntity {
	export const Empty: MapNodeEntity = {
		name: "",
		desc: "",
		prev: null,
		offset: 0,
		text: "",
		search: null,
		missions: [],
		reward_f: [],
		reward_am: [],
		// wave: [],
	};
}

export interface Worlds {
	[key: string]: {
		[key: string]: {
			title: string;
			list: MapNodeEntity[];
		};
	};
}

/**
 * `null` : Not requested
 * `false` : Loading
 * `Worlds` : Loaded
 */
type DBCallback<T> = (data: T) => void;
let internalDB: Worlds | false | null = null;
const callbackQueue: DBCallback<Worlds>[] = [];
export default function MapDB (callback?: (data: Worlds) => void): Worlds | null {
	if (!internalDB) {
		if (callback) callbackQueue.push(callback);

		if (internalDB !== false) {
			internalDB = false;
			import(/* webpackChunkName: "chunk-db-map" */ "@/json/map")
				.then(x => {
					internalDB = x.default as unknown as Worlds;
					callbackQueue.forEach(y => y(internalDB as Worlds));
				});
		}
		return null;
	}
	return internalDB;
}
