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
	enabled: boolean;
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
	prevIds: Array<{
		key: string;
		wid: string;
		cid: number;
		text: string;
	}>;
	offset: number;
	text: string;

	search: MapSearch | null;

	squads: {
		count: number; // maximum squads
		shift: number; // squad change count
		friend: boolean; // can borrow friend squad?
	};

	missions: string[];
	/* eslint-disable camelcase */
	reward_f: RawReward[];
	reward_am: RawReward[];
	/* eslint-enable camelcase */

	wave?: Array<MapWaveGroup[]>;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */

export interface MapSubStory {
	key: string;
	icon: string;
	dialog: string;
	unlock: {
		cond: UNLOCK_COND;
		type: 0 | 1;
		params: Array<string | string[]>;
	};
}

export interface MapSubStoryGroup {
	key: string; // for substory viewer
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

export interface Maps {
	[key: string]: {
		[key: string]: boolean;
	};
}
