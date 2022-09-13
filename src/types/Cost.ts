import { CURRENCY_TYPE, ACTOR_BODY_TYPE, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export interface SortieCostResource {
	[CURRENCY_TYPE.METAL]: [number, number, number, number, number, number];
	[CURRENCY_TYPE.NUTRIENT]: [number, number, number, number, number, number];
	[CURRENCY_TYPE.POWER]: [number, number, number, number, number, number];
}
export interface SortieCostBody {
	[ACTOR_BODY_TYPE.BIOROID]: SortieCostResource;
	[ACTOR_BODY_TYPE.AGS]: SortieCostResource;
}
export type SortieCostType = {
	[key in ACTOR_GRADE]: {
		[key in ACTOR_CLASS]: {
			[key in ROLE_TYPE]: SortieCostBody;
		};
	};
};
