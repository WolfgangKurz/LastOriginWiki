import { BuffStat } from "@/types/Buffs";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export interface Suitability {
	all: 0 | 1;
	squads: string[];
	chars: string[];
	effect: BuffStat;
	lv: number;

	descStage: string;
	descGroup: string;
}
export interface Prohibition {
	squad: string;
	char: {
		body: ACTOR_BODY_TYPE;
		role: ROLE_TYPE;
		class: ACTOR_CLASS;
	};
	desc: string;
}
