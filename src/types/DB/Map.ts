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
		/* eslint-disable camelcase */
		reward_f: [],
		reward_am: [],
		/* eslint-enable camelcase */
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