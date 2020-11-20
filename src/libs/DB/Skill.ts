import { AssetsRoot, ImageExtension } from "@/libs/Const";
import Data from "@/json/unit-skill.json";
import { BuffStat } from "@/libs/Buffs/Buffs";

export interface RawSkillEntity {
	key: string;
	name: string;
	icon: string;
	range: number;
	ap: number;
	target: "enemy" | "team";
	bound: "self" | "single" | "around" | "fill" | "global" | string;
	buffs: string;
	desc: string[];
}
export interface SkillEntity {
	key: string;

	name: string;
	icon: string;

	range: number;
	ap: number;
	target: "enemy" | "team";
	bound: "self" | "single" | "around" | "fill" | "global" | string;

	buffs: BuffStat[][];
	desc: string[];
}

export type SkillSlotKey = "active1" | "active2" | "passive1" | "passive2" | "passive3" |
	"Factive1" | "Factive2" | "Fpassive1" | "Fpassive2" | "Fpassive3";
export type RawSkillData = Record<string, Record<SkillSlotKey, RawSkillEntity>>;

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
				buffs: (() => {
					if (skill.buffs.startsWith("["))
						return new Array(10).fill(JSON.parse(skill.buffs) as BuffStat[]);

					const buffs = skill.buffs.split("\n");
					const buffList: BuffStat[][] = [];
					buffs.forEach(x => {
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

							buffList[current - 1] = JSON.parse(x.substr(x.indexOf(":") + 1)) as BuffStat[];
						}
					});
					return buffList;
				})(),
			};
			if (!(key in output)) output[key] = {};
			output[key][slot as SkillSlotKey] = entity;
		});
	});
	return output;
}
export default CompileSkill();
