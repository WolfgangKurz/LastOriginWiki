import { SKILL_ATTR } from "@/types/Enums";

export type AllOnlyExcept = 0 | 1 | 2;

export interface SkillFilter {
	Elem: Record<SKILL_ATTR, boolean>;
	GridType: AllOnlyExcept;
	DismissGuardType: AllOnlyExcept;
}
