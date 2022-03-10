import { MapEnemyData } from "@/types/DB/Map";
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

export interface EWChapter {
	[key: string]: EWStage;
}

export interface EWDB {
	[key: string]: EWChapter;
}
