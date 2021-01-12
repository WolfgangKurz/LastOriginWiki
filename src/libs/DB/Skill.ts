import { AssetsRoot, ImageExtension } from "@/libs/Const";
// import Data from "@/json/unit-skill";
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
export type RawSkillData = Record<string, Record<SkillSlotKey, RawSkillEntity>>;

const Data = {};
function CompileSkill () {
	const imgExt = ImageExtension();
	const table = JSON.parse(JSON.stringify(Data)) as RawSkillData;

	const output: Record<string, Partial<Record<SkillSlotKey, SkillEntity>>> = {};

	Object.keys(table).forEach(key => {
		Object.keys(table[key]).forEach(slot => {
			const skill = table[key][slot as SkillSlotKey];
			const type = slot.includes("active") ? "active" : "passive";

			const entity: SkillEntity = {
				...skill,
				icon: `${AssetsRoot}/${imgExt}/skill/${skill.icon}_${type}.${imgExt}`,
			};
			if (!(key in output)) output[key] = {};
			output[key][slot as SkillSlotKey] = entity;
		});
	});
	return output;
}
export default CompileSkill();

/*
(() => {
	if (skill.buffs[0] === "{")
		return new Array(10).fill(JSON.parse(skill.buffs) as SkillEntryData);

	const levels = skill.buffs.split("\n");
	const levelList: SkillEntryData[] = [];
	levels.forEach(x => {
		for (let current = 1; current <= 10; current++) {
			const lv = x.substr(0, x.indexOf(":"));
			if (lv.includes("~")) {
				const from = parseInt(lv.substr(0, lv.indexOf("~")), 10);
				const to = (() => {
					const ilv = parseInt(lv.substr(lv.indexOf("~") + 1), 10);
					if (ilv >= 10) return 13;
					else return ilv;
				})();

				if (current < from || to < current) // 범위 밖
					continue;
			} else {
				const ilv = parseInt(lv, 10);
				if (ilv < 10 && current !== ilv) continue;
				else if (ilv >= 10 && current < 10) continue;
			}

			levelList[current - 1] = JSON.parse(x.replace(/^[0-9~]+:/, "")) as SkillEntryData;
		}
	});
	return levelList;
})(),
*/
