import { ACTOR_GRADE, ROGUE_SKILL_TYPE } from "../Enums";

export default interface RoguelikeSkill {
	key: string;
	unit: string;

	grade: ACTOR_GRADE;
	type: ROGUE_SKILL_TYPE;
	count: number;

	icon: string;
	limitEffect: string;
	items: string[];
}
