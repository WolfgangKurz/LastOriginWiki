import Vue from "vue";
import Component from "vue-class-component";

import { Rarity, RawSkillUnit } from "@/libs/Types";
import { UnitData, UnitStatsData, EquipData, SkillData } from "@/libs/DB";

import { UnitEquip } from "./UnitEquip";
import { UnitStat, UnitPoint, Stat, StatPointValue, StatType, StatList } from "./Stats";

type LinkData = [boolean, boolean, boolean, boolean, boolean];

interface SkillItem extends RawSkillUnit {
	index: number;
	isPassive: boolean;
}
interface SkillTable {
	[key: string]: SkillItem;
}

@Component({})
export class Unit extends Vue {
	private id: number = -1;
	private level: number = 1;
	private rarity: Rarity = "B"; // 기본 등급

	private linked: LinkData = [false, false, false, false, false];

	private stats: UnitPoint = UnitPoint.Empty;
	private equips: UnitEquip[] = new Array(4).fill(UnitEquip.Empty);
	private skills: number[] = new Array(5).fill(1);

	// #region Getters
	public get Unit () {
		return UnitData[this.id];
	}

	public get Id () {
		return this.id;
	}

	public get Level () {
		return this.level;
	}

	public set Level (value: number) {
		this.level = value;
	}

	public get Rarity () {
		return this.rarity;
	}

	public set Rarity (value: Rarity) {
		this.rarity = value;
	}

	public get Linked () {
		return this.linked;
	}

	public get Stats () {
		return this.stats;
	}

	public get Equips () {
		return this.equips;
	}

	public get Skills () {
		return this.skills;
	}
	// #endregion

	/** 현재 코어 링크 갯수 */
	public get LinkCount () {
		return this.Linked.filter(x => x).length;
	}

	/** 현재 링크 보너스 정보 */
	public get LinkBonus () {
		interface BonusTable {
			[key: string]: {
				key: string;
				name: string;
				value: number;
				ratio: boolean;
				postfix?: string;
				rounded?: boolean;
			};
		}

		const unit = this.Unit;

		const hasEva = unit.linkBonus.entry3 === "eva" || unit.linkBonus.entry4 === "eva";
		const isAirDef = unit.type === "air" && unit.role === "defender";

		const LinkBonusTable: BonusTable = {
			acc: {
				key: "acc",
				name: "적중",
				value: 35,
				ratio: false,
				postfix: "%",
			},
			crit: {
				key: "crit",
				name: "치명타",
				value: 10,
				ratio: false,
				postfix: "%",
			},
			def: {
				key: "def",
				name: "방어력",
				value: 15,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			eva: {
				key: "eva",
				name: "회피",
				value: 10,
				ratio: false,
				postfix: "%",
			},
			hp: {
				key: "hp",
				name: "HP",
				value: 100,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			skill: {
				key: "skill",
				name: "스킬 위력",
				value: 10,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			spd: {
				key: "spd",
				name: "행동력",
				ratio: false,
				value: 0.1,
			},
		};
		const FullLinkBonusTable: BonusTable = {
			acc: {
				key: "acc",
				name: "적중",
				value: 75,
				ratio: false,
				postfix: "%",
			},
			buff: {
				key: "buff",
				name: "버프/디버프 효과 Lv",
				value: 2,
				ratio: false,
			},
			crit: {
				key: "crit",
				name: "치명타",
				value: 20,
				ratio: false,
				postfix: "%",
			},
			def: {
				key: "def",
				name: "방어력",
				value: 20,
				ratio: true,
				postfix: "%",
			},
			eva: {
				key: "eva",
				name: "회피",
				value: isAirDef ? 20 : 15,
				ratio: false,
				postfix: "%",
			},
			hp: {
				key: "hp",
				name: "HP",
				value: 20,
				ratio: true,
				postfix: "%",
			},
			range: {
				key: "range",
				name: "사거리",
				ratio: false,
				value: 1,
			},
		};

		return {
			IsHP: unit.linkBonus.per === "hp",
			Per: LinkBonusTable[unit.linkBonus.per],
			Value: {
				HP: (unit.linkBonus.per === "hp" ? 125 : 100) * this.LinkCount / 5,
				Atk: 100 * this.LinkCount / 5,
				Per: {
					...LinkBonusTable[unit.linkBonus.per],
					value: LinkBonusTable[unit.linkBonus.per].value * this.LinkCount / 5,
				},
				EXP: 20 * this.LinkCount / 5,
			},

			Discount: unit.rarity === "SS" ? 25 : 20,
			SkillPower: unit.linkBonus.skillPower,
			Entry3: FullLinkBonusTable[unit.linkBonus.entry3],
			Entry4: FullLinkBonusTable[unit.linkBonus.entry4],
			Speed: unit.type === "air" && unit.role === "defender"
				? (unit.rarity === "SS" && hasEva ? 0.2 : 0.15)
				: 0.1,
		};
	}

	/** 스탯 수치 계산 */
	public get StatData () {
		const data = UnitStatsData[this.Id][this.Rarity];
		if (!data) return UnitStat.Empty; // 잘못된 요청 (존재하지 않는 스탯 데이터)

		const linkBonus = this.LinkBonus;
		const levelValue = (value: number[], level: number) => {
			return value[0] + (value[1] - value[0]) * (level - 1) / 99;
		};

		const output: UnitStat = {
			atk: { ...Stat.Empty, base: levelValue(data.atk, this.Level) },
			def: { ...Stat.Empty, base: levelValue(data.def, this.Level) },
			hp: { ...Stat.Empty, base: levelValue(data.hp, this.Level) },
			acc: { ...Stat.Empty, base: data.acc },
			eva: { ...Stat.Empty, base: data.eva },
			crit: { ...Stat.Empty, base: data.crit },
			spd: { ...Stat.Empty, base: data.spd },
		};

		for (const k in output) {
			const key = k as StatType;

			// 스탯 포인트로 올린 수치
			output[key].pointed += parseFloat((this.Stats[key] * StatPointValue[key]).toFixed(8));

			let value = 0;
			let valueP = 0;
			this.Equips // TODO : 분리
				.filter(x => x.Name)
				.forEach(x => {
					const name = `${x.Name}_${x.Rarity}`;
					const level = x.Level;

					const equip = EquipData.find(x => x.name === name);
					if (!equip) return;

					const stats = equip.stats[level];
					for (const stat of stats) {
						if (stat.on.length > 0) continue;

						for (const act of stat.actions) {
							if (act.rand) continue;
							if (act.act !== key) continue;

							const perc = act.params[0].endsWith("%");
							const val = perc
								? act.params[0].substr(0, act.params[0].length - 1)
								: act.params[0];

							// 고정 수치거나
							// % 수치인데 원래 % 수치인 경우
							if (!perc || (perc && StatList[key].postfix === "%"))
								value += parseFloat(val);
							else
								valueP += parseFloat(val);
						}
					}
				});

			output[key].equiped = parseFloat(value.toFixed(8));
			output[key].equipedRatio = parseFloat((valueP * 0.01).toFixed(8));

			if (key === "hp")
				output[key].linkBonus = (linkBonus.IsHP ? 125 : 100) * this.LinkCount / 5;
			else if (key === "atk")
				output[key].linkBonus = 100 * this.LinkCount / 5;
			else if (key === this.Unit.linkBonus.per)
				output[key].linkBonus = linkBonus.Per.value * this.LinkCount / 5;

			if (key === "hp" || key === "atk" || (key === this.Unit.linkBonus.per && linkBonus.Per.ratio))
				output[key].linked = (output[key].base + output[key].pointed + output[key].equiped) * output[key].linkBonus / 100;
			else
				output[key].linked = output[key].linkBonus;
		}

		return output;
	}

	/**
	 * 형태 전환 전/후를 모두 포함한 스킬 목록
	 */
	private get SkillsRaw () {
		const table = SkillData[this.Id] as SkillTable;
		if (table) {
			Object.keys(table)
				.forEach(x => {
					const y = /(passive|active)([0-9]+)/.exec(table[x].key);
					if (!y) return;

					table[x].index = parseInt(y[2], 10);
					table[x].isPassive = y[1].includes("passive");
				});
		}
		return table;
	}

	/**
	 * 현재 선택 형태에 맞춘 스킬 목록
	 */
	public get SkillList () {
		const output: SkillTable = {};
		const raw = this.SkillsRaw;
		if (!raw) return [];

		const keys = Object.keys(raw);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => raw[x]);
	}

	public SetUnit (id: number) {
		this.id = id;
		this.rarity = this.Unit.rarity;
		this.stats = UnitPoint.Empty; // 투자 포인트 초기화
		this.equips = new Array(4)
			.fill(0)
			.map((x, i) => ({
				...UnitEquip.Empty,
				Type: this.Unit.equip[i],
			}));

		return this;
	}

	public ResetStats () {
		this.stats = UnitPoint.Empty;
	}

	public Serialize () {
		return {
			id: this.Id,
			rarity: this.Rarity,
			level: this.Level,
			links: this.Linked,
			stats: this.Stats,
			equips: this.Equips,
		};
	}
}
