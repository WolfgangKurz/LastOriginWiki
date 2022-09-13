import { RawRewardItem } from "@/types/Reward";

export interface Research {
	key: string;
	unlocks: string[];
	icon: string;
	resources: number[];
	items: RawRewardItem[];
	time: number;
}
