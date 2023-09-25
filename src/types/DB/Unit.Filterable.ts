import { UnitSkin } from "./Unit";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ROGUE_SKILL_TYPE, CHARTYPE_GIFTITEM_DAMAGE_TYPE, TARGET_TYPE, BUFF_OVERLAP_TYPE, BUFF_ATTR_TYPE } from "../Enums";
import { BUFFEFFECT_TRIGGER_TYPE } from "../BuffTrigger";
import { BUFFEFFECT_TYPE } from "../BuffEffect";
import { BUFFEFFECT_ERASE_TYPE } from "@/types/BuffErase";

interface SkillBuffItemBase<T extends BUFFEFFECT_TYPE> {
	type: T;
	attr: BUFF_ATTR_TYPE;
	overlap: BUFF_OVERLAP_TYPE;
	erase: BUFFEFFECT_ERASE_TYPE;
}
interface SkillBuffItemEnum extends SkillBuffItemBase<BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM> {
	value: {
		type: BUFFEFFECT_TYPE;
	};
}
interface SkillBuffItemBuff extends SkillBuffItemBase<BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF | BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF> {
	value: {
		type: BUFFEFFECT_TYPE;
		target: BUFF_ATTR_TYPE;
	};
}
export type FilterableUnitSkillBuffItem =
	SkillBuffItemBase<Exclude<BUFFEFFECT_TYPE, BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM | BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF | BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF>> |
	SkillBuffItemEnum | SkillBuffItemBuff;

export interface FilterableUnitSkillBuffTrigger {
	type: BUFFEFFECT_TRIGGER_TYPE;
	value: string;
}

export interface FilterableUnitSkillBuff {
	on: FilterableUnitSkillBuffTrigger;
	body: ACTOR_BODY_TYPE[];
	class: ACTOR_CLASS[];
	role: ROLE_TYPE[];
	target: TARGET_TYPE;
	buffs: FilterableUnitSkillBuffItem[];
}

export interface FilterableUnitSkill {
	/** target_ground */
	grid: boolean;
	/** dismiss_guard */
	guard: boolean;
	elem: SKILL_ATTR;
	target: "team" | "enemy";

	buffs: FilterableUnitSkillBuff[];
}

export interface FilterableUnit {
	uid: string;
	id: number;

	rarity: ACTOR_GRADE;
	promo?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	// name: string;
	// shortname: string;

	group: string;
	// shortgroup: string;
	// groupKey: string;

	/** timestamp */
	releaseDate: number;

	secretRoomType: CHARTYPE_GIFTITEM_DAMAGE_TYPE;

	craft: false | number;

	skills: {
		1: FilterableUnitSkill;
		2: FilterableUnitSkill;
		3?: FilterableUnitSkill;
		4?: FilterableUnitSkill;
		5?: FilterableUnitSkill;
		F1?: FilterableUnitSkill;
		F2?: FilterableUnitSkill;
		F3?: FilterableUnitSkill;
		F4?: FilterableUnitSkill;
		F5?: FilterableUnitSkill;
	};
	skins: UnitSkin;

	roguelike: ROGUE_SKILL_TYPE[];
}
