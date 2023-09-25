import { BuffStat } from "@/types/Buffs";
import { ACTOR_GRADE, NUM_OUTPUTTYPE, SKILL_ATTR } from "@/types/Enums";

/* eslint-disable camelcase */
export interface SkillSummonInfo {
	char: string;
	lv: number;
}
/** 사용 시 버프 소모하는 정보 (라비아타 철충대파괴) */
export interface SkillUseInfo {
	key: string;
	count: number;
}
export interface SkillEntryData {
	rate: number;
	type: SKILL_ATTR;

	range: number;
	ap: number;
	grid: "self" | "single" | "around" | "fill" | "global" | string;
	summon: SkillSummonInfo | null;
	use: SkillUseInfo | null;
	enabled: boolean;
	delayed: boolean;
	/** 보호무시 */
	dismiss_guard: boolean;
	acc_bonus: number;
	buff_rate: number;
	buffs: BuffStat[];
}
export interface SkillValueData {
	icon: string;
	base: number;
	per: number;
	chance: string;
	desc: {
		type: NUM_OUTPUTTYPE;
		desc: string;
		value: string;
		level: string;
	};
}
export interface SkillEntity {
	leastGrade?: ACTOR_GRADE;

	key: string;
	// name: string;
	icon: string;

	target: "enemy" | "team";

	delayed: boolean;
	target_ground: boolean;

	// levels: SkillEntryData[];
	buffs: {
		index: number[];
		data: SkillEntryData[];
	};
	values: {
		index: number[];
		data: SkillValueData[][];
	};
	// desc: string[];
}
/* eslint-enable camelcase */

export type SkillSlotKey = "1" | "2" | "3" | "4" | "5" | "F1" | "F2" | "F3" | "F4" | "F5";

export type SkillGroup = {
	[key in SkillSlotKey]: SkillEntity;
};
