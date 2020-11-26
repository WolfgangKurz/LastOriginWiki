import Data from "@/json/map.json";

type MapRewardChar = string;
interface MapRewardItem {
	count: number;
	item: string;
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

export interface MapWave {
	exp: number;
	enemy: Array<MapEnemyData | null>;
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
	prev: number | null;
	offset: number;
	text: string;

	search: MapSearch | null;

	drops: string[];
	/* eslint-disable camelcase */
	reward_f: MapReward[];
	reward_am: MapReward[];
	/* eslint-enable camelcase */

	wave?: MapWave[];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace MapNodeEntity {
	export const Empty: MapNodeEntity = {
		prev: null,
		offset: 0,
		text: "",
		search: null,
		drops: [],
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

export default Data as Worlds;
