import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { UnitEquip } from "./UnitEquip";
import { UnitStat, UnitPoint, Stat, StatPointValue, StatType, RatioStats } from "./Stats";
import { BuffEffect, BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";

import { ACTOR_GRADE, BUFF_ATTR_TYPE, ITEM_TYPE } from "@/libs/Types/Enums";

import { LinkBonusType, Unit as Unit_ } from "@/libs/Types/Unit";
import { SkillEntity, SkillGroup, SkillSlotKey } from "@/libs/Types/Skill";

import LazyLoad, { LazyDataType } from "@/libs/LazyData";
import UnitDB, { GetLinkBonus } from "@/libs/DB/Unit";
import UnitStatsDB from "@/libs/DB/UnitStats";
import SkillDB from "@/libs/DB/Skill";

type LinkData = [number, number, number, number, number];

interface SkillItem extends SkillEntity {
	index: number;
	isPassive: boolean;
}
type SkillTable = Record<SkillSlotKey, SkillItem>;

interface DBData {
	Unit: Unit_;
	Skill: SkillGroup;
}

@Component({})
export class Unit extends Vue {
	private DB: LazyDataType<DBData> = null;
	private InitialDB () {
		this.DB = null;

		const uid = this.uid;
		if (!uid) return;

		LazyLoad(
			r => {
				const Unit = r[0] as Unit_;
				const Skill = r[1] as SkillGroup;

				if (!Unit) return (this.DB = false);
				if (!Skill) return (this.DB = false);

				this.DB = {
					Unit,
					Skill,
				};
				this.rarity = Unit.rarity;
			},
			cb => UnitDB(uid, x => cb(x)),
			cb => SkillDB(uid, x => cb(x)),
		);
	}

	private uid: string | null = null;
	private level: number = 1;
	private rarity: ACTOR_GRADE = ACTOR_GRADE.B; // 기본 등급

	private linked: LinkData = [0, 0, 0, 0, 0];
	private fullLinkBonus: LinkBonusType = "";

	private stats: UnitPoint = UnitPoint.Empty;
	private equips: UnitEquip[] = new Array(4).fill(UnitEquip.Empty);
	private skills: number[] = new Array(5).fill(1);

	// #region Getters
	public get Unit () {
		return (this.DB && this.DB.Unit) || Unit_.Empty;
	}

	public get Uid () {
		return this.uid;
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
		return this.Unit.linkBonus
			.filter(x => x)
			.map(x => GetLinkBonus(x, this.LinkSum));
	}

	public get FullLinkBonus () {
		return this.fullLinkBonus;
	}

	public set FullLinkBonus (value: LinkBonusType) {
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
		if (!this.Uid) return UnitStat.Empty;

		const data = UnitStatsDB.find(x => x.id === this.Unit.id && x.rarity === this.Rarity);
		if (!data) return UnitStat.Empty; // 잘못된 요청 (존재하지 않는 스탯 데이터)

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

			let value = new Decimal(0);
			let valueP = new Decimal(0);
			const independentValues: number[] = [];
			this.Equips // TODO : 분리
				.filter(x => x.Key)
				.forEach(x => {
					const level = x.Level;

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

					const stats = x.stats[level];
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

			const ratioStat = ["ACC", "Cri", "EV"].includes(key);

			// 링크 보너스
			const bonus = this.LinkBonus.find(x => x.Key.startsWith(key + "_"));
			if (bonus) output[key].linkBonus = bonus.Value;

			// 풀링크 보너스
			if (this.LinkSum === 5 && this.fullLinkBonus && this.fullLinkBonus.startsWith(key + "_")) {
				const bonus = GetLinkBonus(this.fullLinkBonus, 1);

				if (bonus.Postfix === "%" && !ratioStat)
					output[key].fullLinkBonusRatio = bonus.Value;
				else
					output[key].fullLinkBonus = bonus.Value;
			}

			if (key === "HP" || key === "ATK" || (bonus && bonus.Postfix === "%" && !ratioStat)) {
				output[key].linked = new Decimal(output[key].base)
					.add(output[key].pointed)
					.add(output[key].equiped)
					.mul(Decimal.div(output[key].linkBonus, 100))
					.toNumber();
			} else
				output[key].linked = output[key].linkBonus;
		}

		return output;
	}

	/**
	 * 형태 전환 전/후를 모두 포함한 스킬 목록
	 */
	private get SkillsRaw (): SkillTable | null {
		if (!this.DB) return null;

		const table = { ...this.DB.Skill } as SkillTable;
		if (table) {
			Object.keys(table)
				.forEach(xk => {
					const x = xk as SkillSlotKey;
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
		const raw = this.SkillsRaw;
		if (!raw) return [];

		const keys = Object.keys(raw);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => raw[x as SkillSlotKey]);
	}

	public SetUnit (uid: string) {
		this.uid = uid;
		this.rarity = (this.Unit && this.Unit.rarity) || ACTOR_GRADE.B;
		this.stats = UnitPoint.Empty; // 투자 포인트 초기화
		this.equips = new Array(4)
			.fill(0)
			.map((x, i) => ({
				...UnitEquip.Empty,
				Type: (this.Unit && this.Unit.equip[i]) || ITEM_TYPE.CHIP,
			}));

		this.InitialDB();
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
		// const json = JSON.parse(data);

		// const statList = [
		// 	"resist.fire", "resist.chill", "resist.thunder",
		// 	"atk", "def", "hp", "acc", "eva", "crit", "spd",
		// 	"armorpierce", "range",
		// 	"dmg.light", "dmg.air", "dmg.heavy",
		// 	"dr", "resist", "off",
		// 	"-acc", "-eva", "-range",
		// ];
		// const equipTypes = ["Chip", "OS", "Public", "Private"];
		// const rarityList = ["B", "A", "S", "SS"];
		// const lrarityList = ["b", "a", "s", "ss"];
		// const fullLinkList = ["", "discount", "skill", "acc", "buff", "crit", "eva", "hp", "range", "spd"];

		// if (
		// 	!("id" in json) || typeof json.id !== "number" ||
		// 	!("rarity" in json) || !rarityList.includes(json.rarity) ||
		// 	!("level" in json) || typeof json.level !== "number" ||
		// 	!("links" in json) || !Array.isArray(json.links) || !json.links.every((y: any) => typeof y === "number") ||
		// 	!("fulllink" in json) || !fullLinkList.includes(json.fulllink) ||
		// 	!("stats" in json) || typeof json.stats !== "object" ||
		// 	!Object.keys(json.stats).every(y => statList.includes(y) && typeof json.stats[y] === "number") ||
		// 	!("equips" in json) || !Array.isArray(json.equips) ||
		// 	!json.equips.every((y: any) => {
		// 		if (typeof y !== "object") return false;
		// 		if (!("Type" in y) || !equipTypes.includes(y.Type)) return false;
		// 		if (!("Name" in y) || typeof y.Name !== "string") return false;
		// 		if (!("Level" in y) || typeof y.Level !== "number") return false;
		// 		if (!("Rarity" in y) || !lrarityList.includes(y.Rarity)) return false;
		// 		return true;
		// 	})
		// ) throw new Error("Invalid Serialize String");
		// this.id = json.id;

		// this.Rarity = json.rarity;
		// this.Level = json.level;

		// for (let i = 0; i < 5; i++)
		// 	this.$set(this.Linked, i, json.links[i]);

		// this.FullLinkBonus = json.fulllink;

		// for (const key in this.Stats) {
		// 	if (key in json.stats)
		// 		this.$set(this.Stats, key, json.stats[key]);
		// }

		// for (let i = 0; i < 4; i++)
		// 	this.$set(this.Equips, i, json.equips[i]);

		this.Changed();
	}

	public Serialize () {
		// return {
		// 	id: this.Id,
		// 	rarity: this.Rarity,
		// 	level: this.Level,
		// 	links: this.Linked,
		// 	fulllink: this.fullLinkBonus,
		// 	stats: this.Stats,
		// 	equips: this.Equips,
		// };
		return {};
	}
}
