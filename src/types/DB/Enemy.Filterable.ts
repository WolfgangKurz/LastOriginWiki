import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export interface FilterableEnemy {
	id: string;
	// name: string;
	// desc: string;
	icon: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	isBoss: boolean;

	used: Record<string, string[]>;
}
