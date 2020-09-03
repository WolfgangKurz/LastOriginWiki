import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { Rarity, RawSkillUnit, FullLinkBonusType } from "@/libs/Types";
import { UnitData, UnitStatsData, EquipData, SkillData } from "@/libs/DB";

import { UnitEquip } from "./UnitEquip";
import { UnitStat, UnitPoint, Stat, StatPointValue, StatType, StatList } from "./Stats";

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
	private rarity: Rarity = "B"; // 기본 등급

	private linked: LinkData = [0, 0, 0, 0, 0];
	private fullLinkBonus: FullLinkBonusType = "";

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

		for (let i = 0; i < 5; i++) {
			if (value < i * 20 + 10)
				this.linked[i] = 0;
		}
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
			entry3: unit.linkBonus.entry3,
			Entry4: FullLinkBonusTable[unit.linkBonus.entry4],
			entry4: unit.linkBonus.entry4,
			Speed: unit.type === "air" && unit.role === "defender"
				? (unit.rarity === "SS" && hasEva ? 0.2 : 0.15)
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

		const data = UnitStatsData[this.Id][this.Rarity];
		if (!data) return UnitStat.Empty; // 잘못된 요청 (존재하지 않는 스탯 데이터)

		const linkBonus = this.LinkBonus;
		const levelValue = (value: number[], level: number) => {
			return value[0] + (value[1] - value[0]) * (level - 1) / 99;
		};
		const unit = this.Unit;

		const output: UnitStat = {
			"resist.fire": { ...Stat.Empty, base: unit.resists.fire },
			"resist.chill": { ...Stat.Empty, base: unit.resists.chill },
			"resist.thunder": { ...Stat.Empty, base: unit.resists.thunder },

			atk: { ...Stat.Empty, base: levelValue(data.atk, this.Level) },
			def: { ...Stat.Empty, base: levelValue(data.def, this.Level) },
			hp: { ...Stat.Empty, base: levelValue(data.hp, this.Level) },
			acc: { ...Stat.Empty, base: data.acc },
			eva: { ...Stat.Empty, base: data.eva },
			crit: { ...Stat.Empty, base: data.crit },
			spd: { ...Stat.Empty, base: data.spd },

			armorpierce: { ...Stat.Empty },
			range: { ...Stat.Empty },

			"dmg.light": { ...Stat.Empty },
			"dmg.air": { ...Stat.Empty },
			"dmg.heavy": { ...Stat.Empty },

			dr: { ...Stat.Empty },
			resist: { ...Stat.Empty },
			off: { ...Stat.Empty },
			"-acc": { ...Stat.Empty },
			"-eva": { ...Stat.Empty },
			"-range": { ...Stat.Empty },
		};

		const isNumeric = (data: string) => /^[0-9]+\.?[0-9]*%?$/.test(data);

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
						// if (stat.on.length > 0) continue;

						for (const act of stat.actions) {
							if (act.rand) continue;
							if (act.act !== key && !["off", "resist", "dmg"].includes(act.act)) continue;

							const calc = (input: string) => {
								const perc = input.endsWith("%");
								const val = perc
									? input.substr(0, input.length - 1)
									: input;

								// 고정 수치거나
								// % 수치인데 원래 % 수치인 경우
								if (!perc || (perc && StatList[key].postfix === "%"))
									value += parseFloat(val);
								else
									valueP += parseFloat(val);
							};

							if (act.act === "off") {
								if (act.params.length === 1) {
									if (isNumeric(act.params[0]) && key === "off")
										calc(act.params[0]);
									else if (!isNumeric(act.params[0]) && act.params[0] === key)
										calc("100%");
									else
										continue;
								} else if (act.params[0] === key)
									calc(act.params[1]);
								else
									continue;
							} else if (act.act === "resist") {
								const p = act.params;
								const p0 = p.length > 0 ? p[0] : "";
								const p1 = p.length > 1 ? p[1] : "";

								if (p.length === 1) {
									if (isNumeric(p0) && key === "resist")
										calc(p0);
									else if (key === p0)
										calc(p1);
									else
										continue;
								} else {
									if (p0 === "all") {
										if (key === "resist.fire")
											calc(p1);
										else if (key === "resist.chill")
											calc(p1);
										else if (key === "resist.thunder")
											calc(p1);
										else
											continue;
									} else if (key === `resist.${p0}`)
										calc(p1);
								}
							} else if (act.act === "dmg") {
								if (
									(key === "dmg.light" && act.params[0] === "light") ||
									(key === "dmg.air" && act.params[0] === "air") ||
									(key === "dmg.heavy" && act.params[0] === "heavy")
								)
									calc(act.params[1]);
								else
									continue;
							} else
								calc(act.params[0]);
						}
					}
				});

			output[key].equiped = parseFloat(value.toFixed(8));
			output[key].equipedRatio = parseFloat((valueP * 0.01).toFixed(8));

			if (key === "hp")
				output[key].linkBonus = (linkBonus.IsHP ? 125 : 100) * this.LinkSum / 5;
			else if (key === "atk")
				output[key].linkBonus = 100 * this.LinkSum / 5;
			else if (key === this.Unit.linkBonus.per)
				output[key].linkBonus = linkBonus.Per.value * this.LinkSum / 5;

			// 풀링크
			if (this.LinkSum === 5) {
				if (key === "hp" && this.fullLinkBonus === "hp")
					output[key].fullLinkBonusRatio = 20;
				else if (key === "spd" && this.fullLinkBonus === "spd")
					output[key].fullLinkBonus = this.LinkBonus.Speed;
				else if (key === "eva" && this.fullLinkBonus === "eva")
					output[key].fullLinkBonus = this.LinkBonus.Entry3.key === "eva" ? this.LinkBonus.Entry3.value : this.LinkBonus.Entry4.value;
				else if (key === "acc" && this.fullLinkBonus === "acc")
					output[key].fullLinkBonus = this.LinkBonus.Entry3.key === "acc" ? this.LinkBonus.Entry3.value : this.LinkBonus.Entry4.value;
				else if (key === "crit" && this.fullLinkBonus === "crit")
					output[key].fullLinkBonus = this.LinkBonus.Entry3.key === "crit" ? this.LinkBonus.Entry3.value : this.LinkBonus.Entry4.value;
				else if (key === "range" && this.fullLinkBonus === "range")
					output[key].fullLinkBonus = 1;
			}

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
		this.rarity = (this.Unit && this.Unit.rarity) || "B";
		this.stats = UnitPoint.Empty; // 투자 포인트 초기화
		this.equips = new Array(4)
			.fill(0)
			.map((x, i) => ({
				...UnitEquip.Empty,
				Type: (this.Unit && this.Unit.equip[i]) || "Chip",
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
