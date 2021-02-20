import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";

export interface FilterableEnemy {
	id: string;
	// name: string;
	// desc: string;
	icon: string;
	ai: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	isBoss: boolean;

	used: Record<string, string[]>;
}
