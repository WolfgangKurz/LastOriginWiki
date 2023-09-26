import { MapEnemyData } from "@/types/DB/Map";
import { EW_STAGE_DIFFICULTY } from "@/types/Enums";
import { RawRewardItem } from "@/types/Reward";
import { Suitability, Prohibition } from "@/types/Suitability";

export interface EWMapWaveGroup {
	e: Array<MapEnemyData | null>;
	r: number;
}

export interface EWReward {
	regen: number;
	max: number;
}

export interface EWStage {
	suitability: Suitability[];
	prohibition: Prohibition[];

	reward: {
		mineral: EWReward;
		refined: EWReward;
	};
	rewards: RawRewardItem[];
	waves: EWMapWaveGroup[][];
}

export type EWDifficulty = {
	[key in EW_STAGE_DIFFICULTY]: EWStage;
};

export interface EWChapter {
	[key: string]: EWDifficulty;
}

export interface EWDB {
	[key: string]: EWChapter;
}
