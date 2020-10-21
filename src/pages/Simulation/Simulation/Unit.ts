import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { RawSkillUnit } from "@/libs/Types";
import { SkillData } from "@/libs/DB";

import { UnitEquip } from "./UnitEquip";
import { UnitStat, UnitPoint, Stat, StatPointValue, StatType, RatioStats } from "./Stats";
import { BuffEffect, BUFFEFFECT_TYPE } from "@/libs/Equips/BuffEffect";

import { ACTOR_CLASS, ACTOR_GRADE, BUFF_ATTR_TYPE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";
import UnitData, { FullLinkBonusType, Unit as Unit_ } from "@/libs/DB/Unit";
import UnitStatsData from "@/libs/DB/UnitStats";
import EquipData from "@/libs/DB/Equip";

type LinkData = [number, number, number, number, number];

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
	private rarity: ACTOR_GRADE = ACTOR_GRADE.B; // 기본 등급

	private linked: LinkData = [0, 0, 0, 0, 0];
	private fullLinkBonus: FullLinkBonusType = "";

	private stats: UnitPoint = UnitPoint.Empty;
	private equips: UnitEquip[] = new Array(4).fill(UnitEquip.Empty);
	private skills: number[] = new Array(5).fill(1);

	// #region Getters
	public get Unit () {
		return UnitData.find(x => x.id === this.id) || Unit_.Empty;
	}

	public get Id () {
		return this.id;
	}

	public get Level () {
		return this.level;
	}

	public set Level (value: number) {
		this.level = value;

		for (let i = 0; i < 5; i++) {
			if (value < i * 20 + 10)
				this.linked[i] = 0;
		}
	}

	public get Rarity () {
		return this.rarity;
	}

	public set Rarity (value: ACTOR_GRADE) {
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

	/** 현재 코어 링크 합계 */
	public get LinkSum () {
		return this.Linked.reduce((p, c) => p + c, 0);
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

		const hasEva = unit.fullLinkBonus.bonus3 === "EV" || unit.fullLinkBonus.bonus4 === "EV";
		const isAirDef = unit.type === ACTOR_CLASS.AIR && unit.role === ROLE_TYPE.DEFENDER;

		const LinkBonusTable: BonusTable = {
			ACC: {
				key: "ACC",
				name: "적중",
				value: 35,
				ratio: false,
				postfix: "%",
			},
			Cri: {
				key: "Cri",
				name: "치명타",
				value: 10,
				ratio: false,
				postfix: "%",
			},
			DEF: {
				key: "DEF",
				name: "방어력",
				value: 15,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			EV: {
				key: "EV",
				name: "회피",
				value: 10,
				ratio: false,
				postfix: "%",
			},
			HP: {
				key: "HP",
				name: "HP",
				value: 100,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			Skill: {
				key: "Skill",
				name: "스킬 위력",
				value: 10,
				ratio: true,
				postfix: "%",
				rounded: true,
			},
			SPD: {
				key: "SPD",
				name: "행동력",
				ratio: false,
				value: 0.1,
			},
		};
		const FullLinkBonusTable: BonusTable = {
			ACC: {
				key: "ACC",
				name: "적중",
				value: 75,
				ratio: false,
				postfix: "%",
			},
			Buff: {
				key: "Buff",
				name: "버프/디버프 효과 Lv",
				value: 2,
				ratio: false,
			},
			Cri: {
				key: "Cri",
				name: "치명타",
				value: 20,
				ratio: false,
				postfix: "%",
			},
			DEF: {
				key: "DEF",
				name: "방어력",
				value: 20,
				ratio: true,
				postfix: "%",
			},
			EV: {
				key: "EV",
				name: "회피",
				value: isAirDef ? 20 : 15,
				ratio: false,
				postfix: "%",
			},
			HP: {
				key: "HP",
				name: "HP",
				value: 20,
				ratio: true,
				postfix: "%",
			},
			Range: {
				key: "Range",
				name: "사거리",
				ratio: false,
				value: 1,
			},
		};

		return {
			IsHP: unit.linkBonus === "HP",
			Per: LinkBonusTable[unit.linkBonus],
			Value: {
				HP: Decimal.mul(unit.linkBonus === "HP" ? 125 : 100, this.LinkCount)
					.div(5)
					.toNumber(),
				Atk: Decimal.mul(100, this.LinkCount)
					.div(5)
					.toNumber(),
				Per: {
					...LinkBonusTable[unit.linkBonus],
					value: Decimal.mul(LinkBonusTable[unit.linkBonus].value, this.LinkCount)
						.div(5)
						.toNumber(),
				},
				EXP: Decimal.mul(20, this.LinkCount)
					.div(5)
					.toNumber(),
			},

			Discount: unit.rarity === ACTOR_GRADE.SS ? 25 : 20,
			SkillPower: unit.fullLinkBonus.bonus2,
			Bonus3: FullLinkBonusTable[unit.fullLinkBonus.bonus3],
			bonus3: unit.fullLinkBonus.bonus3,
			Bonus4: FullLinkBonusTable[unit.fullLinkBonus.bonus4],
			bonus4: unit.fullLinkBonus.bonus4,
			Speed: unit.type === ACTOR_CLASS.AIR && unit.role === ROLE_TYPE.DEFENDER
				? (unit.rarity === ACTOR_GRADE.SS && hasEva ? 0.2 : 0.15)
				: 0.1,
		};
	}

	public get FullLinkBonus () {
		return this.fullLinkBonus;
	}

	public set FullLinkBonus (value: FullLinkBonusType) {
		this.fullLinkBonus = value;
	}

	/** 사용 가능한 스탯 포인트 */
	public get LeftPoints () {
		return (this.Level * 3) - Object.keys(this.Stats)
			.map(x => this.Stats[x as StatType])
			.reduce((p, c) => p + c, 0);
	}

	/** 스탯 수치 계산 */
	public get StatData () {
		if (this.Id === 0) return UnitStat.Empty;

		const data = UnitStatsData.find(x => x.id === this.Id && x.rarity === this.Rarity);
		if (!data) return UnitStat.Empty; // 잘못된 요청 (존재하지 않는 스탯 데이터)

		const linkBonus = this.LinkBonus;
		const levelValue = (value: number[], level: number) => {
			return value[0] + (value[1] - value[0]) * (level - 1) / 99;
		};

		const output: UnitStat = {
			"resist.fire": { ...Stat.Empty, base: data.Resist.fire },
			"resist.ice": { ...Stat.Empty, base: data.Resist.ice },
			"resist.lightning": { ...Stat.Empty, base: data.Resist.lightning },

			ATK: { ...Stat.Empty, base: levelValue(data.ATK, this.Level) },
			DEF: { ...Stat.Empty, base: levelValue(data.DEF, this.Level) },
			HP: { ...Stat.Empty, base: levelValue(data.HP, this.Level) },
			ACC: { ...Stat.Empty, base: data.ACC },
			EV: { ...Stat.Empty, base: data.EV },
			Cri: { ...Stat.Empty, base: data.Cri },
			SPD: { ...Stat.Empty, base: data.SPD },

			armor_pierce: { ...Stat.Empty },
			Range: { ...Stat.Empty },

			"damage.light": { ...Stat.Empty },
			"damage.air": { ...Stat.Empty },
			"damage.heavy": { ...Stat.Empty },

			damage_reduce: { ...Stat.Empty },
			Resist: {
				...Stat.Empty,
				isIndependent: true,
			},
			off: {
				...Stat.Empty,
				isIndependent: true,
			},
			"off.-ACC": { ...Stat.Empty },
			"off.-EV": { ...Stat.Empty },
			"off.-Range": { ...Stat.Empty },
		};

		for (const k in output) {
			const key = k as StatType;

			// 스탯 포인트로 올린 수치
			output[key].pointed += parseFloat((this.Stats[key] * StatPointValue[key]).toFixed(8));

			debugger;
			let value = new Decimal(0);
			let valueP = new Decimal(0);
			const independentValues: number[] = [];
			this.Equips // TODO : 분리
				.filter(x => x.Key)
				.forEach(x => {
					const level = x.Level;

					const equip = EquipData.find(y => y.fullKey === x.FullKey);
					if (!equip) return;

					const calc = (src: string | number) => {
						const { p, v } = (() => {
							if (typeof src === "string" && src.endsWith("%"))
								return { p: true, v: new Decimal(src.substr(0, src.length - 1)) };
							else
								return { p: false, v: new Decimal(src) };
						})();

						// % 수치가 아닌 경우
						// 본래 수치가 %로 계산하는 경우
						if (!p || (p && RatioStats.includes(key)))
							value = value.add(v);
						else
							valueP = valueP.add(v);

						return v.toNumber();
					};
					const procValue = (stat: BuffEffect) => {
						switch (key) {
							case "ATK":
								if ("attack" in stat)
									calc(stat.attack.base);
								break;
							case "HP":
								if ("hp" in stat)
									calc(stat.hp.base);
								break;
							case "DEF":
								if ("defense" in stat)
									calc(stat.defense.base);
								break;
							case "ACC":
								if ("accuracy" in stat)
									calc(stat.accuracy.base);
								break;
							case "Cri":
								if ("critical" in stat)
									calc(stat.critical.base);
								break;
							case "EV":
								if ("evade" in stat)
									calc(stat.evade.base);
								break;
							case "SPD":
								if ("turnSpeed" in stat)
									calc(stat.turnSpeed.base);
								break;
							case "armor_pierce":
								if ("penetration" in stat)
									calc(stat.penetration.base);
								break;
							case "damage_reduce":
								if ("damage_reduce" in stat)
									calc(stat.damage_reduce.base);
								break;
							case "Range":
								if ("range" in stat)
									calc(stat.range.base);
								break;
							case "off.-ACC":
								if ("off" in stat) {
									if (typeof stat.off === "object" && "target" in stat.off) {
										if ((
											stat.off.type === BUFFEFFECT_TYPE.STAT_RATING_RATIO ||
											stat.off.type === BUFFEFFECT_TYPE.STAT_RATING_VALUE
										) && stat.off.target === BUFF_ATTR_TYPE.DEBUFF)
											calc(stat.chance || "100%");
									}
								}
								break;
							case "off.-EV":
								if ("off" in stat) {
									if (typeof stat.off === "object" && "target" in stat.off) {
										if ((
											stat.off.type === BUFFEFFECT_TYPE.STAT_AVOID_RATIO ||
											stat.off.type === BUFFEFFECT_TYPE.STAT_AVOID_VALUE
										) && stat.off.target === BUFF_ATTR_TYPE.DEBUFF)
											calc(stat.chance || "100%");
									}
								}
								break;
							case "off.-Range":
								if ("off" in stat) {
									if (typeof stat.off === "object" && "target" in stat.off) {
										if (
											(stat.off.type === BUFFEFFECT_TYPE.STAT_RANGE_VALUE) &&
											stat.off.target === BUFF_ATTR_TYPE.DEBUFF
										)
											calc(stat.chance || "100%");
									}
								}
								break;
							case "resist.fire":
								if ("resist" in stat) {
									if ("elem" in stat.resist && stat.resist.elem === "fire")
										calc(stat.resist.value.base);
								}
								break;
							case "resist.ice":
								if ("resist" in stat) {
									if ("elem" in stat.resist && stat.resist.elem === "ice")
										calc(stat.resist.value.base);
								}
								break;
							case "resist.lightning":
								if ("resist" in stat) {
									if ("elem" in stat.resist && stat.resist.elem === "lightning")
										calc(stat.resist.value.base);
								}
								break;
							case "Resist":
								if ("resist" in stat) {
									if ("type" in stat.resist && stat.resist.type === "debuff")
										independentValues.push(calc(stat.resist.value.base));
								}
								break;
							case "off":
								if ("off" in stat) {
									if (typeof stat.off === "number" && stat.off === BUFF_ATTR_TYPE.DEBUFF)
										independentValues.push(calc(stat.chance || "100%"));
								}
								break;
						}
					};

					const stats = equip.stats[level];
					stats.forEach(stat => {
						if ("buffs" in stat)
							stat.buffs.forEach(buff => procValue(buff.value));
						else
							procValue(stat);
					});
				});

			output[key].equiped = value.toNumber();
			output[key].equipedRatio = valueP.div(100).toNumber();

			if (output[key].isIndependent)
				output[key].independentValues = independentValues;

			// 링크 보너스
			if (key === "HP") {
				output[key].linkBonus = Decimal.mul(linkBonus.IsHP ? 125 : 100, this.LinkSum)
					.div(5)
					.toNumber();
			} else if (key === "ATK") {
				output[key].linkBonus = Decimal.mul(100, this.LinkSum)
					.div(5)
					.toNumber();
			} else if (key === this.Unit.linkBonus) {
				output[key].linkBonus = Decimal.mul(linkBonus.Per.value, this.LinkSum)
					.div(5)
					.toNumber();
			}

			// 풀링크 보너스
			if (this.LinkSum === 5) {
				if (key === "HP" && this.fullLinkBonus === "HP")
					output[key].fullLinkBonusRatio = 20;
				else if (key === "SPD" && this.fullLinkBonus === "SPD")
					output[key].fullLinkBonus = this.LinkBonus.Speed;
				else if (key === "EV" && this.fullLinkBonus === "EV") {
					output[key].fullLinkBonus = this.LinkBonus.Bonus3.key === "eva"
						? this.LinkBonus.Bonus3.value
						: this.LinkBonus.Bonus4.value;
				} else if (key === "ACC" && this.fullLinkBonus === "ACC") {
					output[key].fullLinkBonus = this.LinkBonus.Bonus3.key === "acc"
						? this.LinkBonus.Bonus3.value
						: this.LinkBonus.Bonus4.value;
				} else if (key === "Cri" && this.fullLinkBonus === "Cri") {
					output[key].fullLinkBonus = this.LinkBonus.Bonus3.key === "crit"
						? this.LinkBonus.Bonus3.value
						: this.LinkBonus.Bonus4.value;
				} else if (key === "Range" && this.fullLinkBonus === "Range")
					output[key].fullLinkBonus = 1;
			}

			if (key === "HP" || key === "ATK" || (key === this.Unit.linkBonus && linkBonus.Per.ratio))
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
		this.rarity = (this.Unit && this.Unit.rarity) || ACTOR_GRADE.B;
		this.stats = UnitPoint.Empty; // 투자 포인트 초기화
		this.equips = new Array(4)
			.fill(0)
			.map((x, i) => ({
				...UnitEquip.Empty,
				Type: (this.Unit && this.Unit.equip[i]) || ITEM_TYPE.CHIP,
			}));

		return this;
	}

	public ResetStats () {
		this.stats = UnitPoint.Empty;
	}

	@Watch("Level", { deep: true })
	private LevelWatch () {
		this.Changed();
	}

	@Watch("Rarity", { deep: true })
	private RarityWatch () {
		this.Changed();
	}

	@Watch("Linked", { deep: true })
	private LinkedWatch () {
		this.Changed();
	}

	@Watch("Stats", { deep: true })
	private StatsWatch () {
		this.Changed();
	}

	@Watch("Equips", { deep: true })
	private EquipsWatch () {
		this.Changed();
	}

	@Watch("Skills", { deep: true })
	private SkillsWatch () {
		this.Changed();
	}

	private Changed () {
		this.$emit("update");
	}

	public Deserialize (data: string) {
		const json = JSON.parse(data);

		const statList = [
			"resist.fire", "resist.chill", "resist.thunder",
			"atk", "def", "hp", "acc", "eva", "crit", "spd",
			"armorpierce", "range",
			"dmg.light", "dmg.air", "dmg.heavy",
			"dr", "resist", "off",
			"-acc", "-eva", "-range",
		];
		const equipTypes = ["Chip", "OS", "Public", "Private"];
		const rarityList = ["B", "A", "S", "SS"];
		const lrarityList = ["b", "a", "s", "ss"];
		const fullLinkList = ["", "discount", "skill", "acc", "buff", "crit", "eva", "hp", "range", "spd"];

		if (
			!("id" in json) || typeof json.id !== "number" ||
			!("rarity" in json) || !rarityList.includes(json.rarity) ||
			!("level" in json) || typeof json.level !== "number" ||
			!("links" in json) || !Array.isArray(json.links) || !json.links.every((y: any) => typeof y === "number") ||
			!("fulllink" in json) || !fullLinkList.includes(json.fulllink) ||
			!("stats" in json) || typeof json.stats !== "object" ||
			!Object.keys(json.stats).every(y => statList.includes(y) && typeof json.stats[y] === "number") ||
			!("equips" in json) || !Array.isArray(json.equips) ||
			!json.equips.every((y: any) => {
				if (typeof y !== "object") return false;
				if (!("Type" in y) || !equipTypes.includes(y.Type)) return false;
				if (!("Name" in y) || typeof y.Name !== "string") return false;
				if (!("Level" in y) || typeof y.Level !== "number") return false;
				if (!("Rarity" in y) || !lrarityList.includes(y.Rarity)) return false;
				return true;
			})
		) throw new Error("Invalid Serialize String");
		this.id = json.id;

		this.Rarity = json.rarity;
		this.Level = json.level;

		for (let i = 0; i < 5; i++)
			this.$set(this.Linked, i, json.links[i]);

		this.FullLinkBonus = json.fulllink;

		for (const key in this.Stats) {
			if (key in json.stats)
				this.$set(this.Stats, key, json.stats[key]);
		}

		for (let i = 0; i < 4; i++)
			this.$set(this.Equips, i, json.equips[i]);

		this.Changed();
	}

	public Serialize () {
		return {
			id: this.Id,
			rarity: this.Rarity,
			level: this.Level,
			links: this.Linked,
			fulllink: this.fullLinkBonus,
			stats: this.Stats,
			equips: this.Equips,
		};
	}
}
