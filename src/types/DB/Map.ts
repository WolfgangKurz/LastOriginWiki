import { STAGE_SUB_TYPE, UNLOCK_COND } from "@/types/Enums";
import { RawRewardItem, RawReward } from "@/types/Reward";

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
	sexp: number;
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
	items: RawRewardItem[];
}

export interface MapNodeEntity {
	key: string;
	// name: string;
	// desc: string;

	playerExp: number;

	type: STAGE_SUB_TYPE;
	prev: number[];
	offset: number;
	text: string;

	search: MapSearch | null;

	missions: string[];
	/* eslint-disable camelcase */
	reward_f: RawReward[];
	reward_am: RawReward[];
	/* eslint-enable camelcase */

	wave?: Array<MapWaveGroup[]>;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace MapNodeEntity {
	export const Empty: MapNodeEntity = {
		key: "",
		// name: "",
		// desc: "",
		playerExp: 0,
		type: STAGE_SUB_TYPE.NONE,
		prev: [],
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

export interface MapSubStory {
	key: string;
	icon: string;
	unlock: {
		cond: UNLOCK_COND;
		type: 0 | 1;
		params: Array<string | string[]>;
	};
}

export interface MapSubStoryGroup {
	char: string;
	icon: string;
	list: MapSubStory[];
}

export interface World {
	[key: string]: {
		substory: MapSubStoryGroup[];
		list: MapNodeEntity[];
	};
}
