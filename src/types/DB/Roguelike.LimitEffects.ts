import { ROGUE_LIMIT_EFFECT_CATEGORY, ROGUE_LIMIT_EFFECT_CONDITION, ROGUE_LIMIT_EFFECT_SHOW_TYPE, ROGUE_LIMIT_EFFECT_TYPE } from "@/types/Enums";

export default interface RoguelikeLimitEffects {
	key: string;
	category: ROGUE_LIMIT_EFFECT_CATEGORY;
	type: ROGUE_LIMIT_EFFECT_TYPE;
	value: string;
	grade: number;
	stacks: number;
	cond: ROGUE_LIMIT_EFFECT_CONDITION;
	condValue: number;
	img: string;
	showType: ROGUE_LIMIT_EFFECT_SHOW_TYPE;
}
