import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";

export enum BuffCategoryDisplayType {
	Plain = 0,
	Percent = 1,
	NoDescription = 2,
}

export default interface BuffCategory {
	key: string;
	group: string;
	order: number;

	/** locale key */
	groupName: string;

	buffEffectType: BUFFEFFECT_TYPE[];
	valueDisplay: BuffCategoryDisplayType;
}
