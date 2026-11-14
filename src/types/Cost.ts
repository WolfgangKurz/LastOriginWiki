import { CURRENCY_TYPE, ACTOR_BODY_TYPE, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export interface SortieCostResource {
	[CURRENCY_TYPE.METAL]: Tuple<number, 6>;
	[CURRENCY_TYPE.NUTRIENT]: Tuple<number, 6>;
	[CURRENCY_TYPE.POWER]: Tuple<number, 6>;
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
