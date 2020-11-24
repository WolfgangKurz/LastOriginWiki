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

export type MapWave = Array<MapEnemyData | null>;

export interface MapNodeEntity {
	prev: number | null;
	offset: number;
	text: string;

	drops: string[];
	/* eslint-disable camelcase */
	reward_f: MapReward[];
	reward_am: MapReward[];
	/* eslint-enable camelcase */

	enemy?: MapWave[];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace MapNodeEntity {
	export const Empty: MapNodeEntity = {
		prev: null,
		offset: 0,
		text: "",
		drops: [],
		reward_f: [],
		reward_am: [],
		// enemy: [],
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
