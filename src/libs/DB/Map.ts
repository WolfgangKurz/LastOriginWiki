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

export interface MapNodeEntity {
	prev: number | null;
	offset: number;
	text: string;
	drops: string[];
	// eslint-disable-next-line camelcase
	reward_f: MapReward[];
	// eslint-disable-next-line camelcase
	reward_am: MapReward[];
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
