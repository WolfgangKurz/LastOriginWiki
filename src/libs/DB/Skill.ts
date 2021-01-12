import LoadDBFactory from "./DBLoader";

import { BuffStat } from "@/libs/Buffs/Buffs";
import { SKILL_ATTR } from "@/libs/Types/Enums";

/* eslint-disable camelcase */
export interface RawSkillEntity {
	key: string;
	name: string;
	icon: string;
	type: SKILL_ATTR;
	target: "enemy" | "team";
	buffs: {
		index: number[];
		data: SkillEntryData[];
	};
	desc: string[];
}
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
	target_ground: boolean;
	summon: SkillSummonInfo | null;
	use: SkillUseInfo | null;
	/** 보호무시 */
	dismiss_guard: boolean;
	acc_bonus: number;
	buff_rate: number;
	buffs: BuffStat[];
}
export interface SkillEntity {
	key: string;
	name: string;
	icon: string;

	target: "enemy" | "team";

	// levels: SkillEntryData[];
	buffs: {
		index: number[];
		data: SkillEntryData[];
	};
	desc: string[];
}
/* eslint-enable camelcase */

export type SkillSlotKey = "active1" | "active2" | "passive1" | "passive2" | "passive3" |
	"Factive1" | "Factive2" | "Fpassive1" | "Fpassive2" | "Fpassive3";

export type SkillGroup = {
	[key in SkillSlotKey]: SkillEntity;
};

export default (uid: string, callback?: (data: Partial<SkillGroup> | null) => void) => {
	return LoadDBFactory<Record<SkillSlotKey, RawSkillEntity>, Partial<SkillGroup>>(
		`skill-${uid}`,
		import(/* webpackChunkName: "chunk-db-skill-[base]" */ `@/json/skill/${uid}`),
		(x) => {
			if (!x) return null;

			const ret: Partial<SkillGroup> = {};
			Object.keys(x).forEach(slot => {
				const skill = x[slot as SkillSlotKey];
				const type = slot.includes("active") ? "active" : "passive";

				const entity: SkillEntity = {
					...skill,
					icon: `${skill.icon}_${type}`,
				};
				ret[slot as SkillSlotKey] = entity;
			});
			return ret;
		},
	)(callback);
};
