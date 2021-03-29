import preact, { Fragment, FunctionalComponent, h } from "preact";
import Decimal from "decimal.js";

import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { Unit } from "@/types/DB/Unit";
import { BaseStatType, StatPointValue, StatType } from "@/types/Stat";
import { SimulatorSlotType } from "../../types/Slot";

import JsonLoader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/JsonLoader";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { GetLinkBonus } from "@/libs/LinkBonus";
import { GetRequireResource } from "@/libs/Cost";
import { objState } from "@/libs/State";

import Locale from "@/components/locale";
import StatIcon from "@/components/stat-icon";
import ElemIcon from "@/components/elem-icon";
import BuffIcon from "@/components/buff-icon";
import UnitFace from "@/components/unit-face";

import "./style.scss";

interface StatCalcType {
	base: number;
	up: number;
	final: number;
}

interface StatsType {
	HP: StatCalcType;
	ATK: StatCalcType;
	DEF: StatCalcType;
	ACC: StatCalcType;
	CRI: StatCalcType;
	EVA: StatCalcType;
	SPD: StatCalcType;

	ResistFire: number;
	ResistIce: number;
	ResistLightning: number;

	DMGTakenInc: number;
	DMGTakenDec: number;

	DEFPenetration: number;
	Range: number;
}

interface SimulatorSummaryProps {
	slot: SimulatorSlotType;
}

const SimulatorSummary: FunctionalComponent<SimulatorSummaryProps> = (props) => {
	const slot = props.slot;
	if (!slot) return <Fragment />;

	const uid = slot.uid;

	const UnitTypeTable: Record<ACTOR_CLASS, string> = {
		[ACTOR_CLASS.LIGHT]: "LIGHT",
		[ACTOR_CLASS.MOBILITY]: "MOBILITY",
		[ACTOR_CLASS.HEAVY]: "HEAVY",
	};
	const UnitRoleTable: Record<ROLE_TYPE, string> = {
		[ROLE_TYPE.ATTACKER]: "ATTACKER",
		[ROLE_TYPE.DEFENDER]: "DEFENDER",
		[ROLE_TYPE.SUPPORTER]: "SUPPORTER",
	};

	const ratioValues = ["ACC", "CRI", "EVA"];
	const floorValues = ["HP", "ATK", "DEF"];
	const bonusTable: Record<string, string> = {
		ACC: "ACC",
		ATK: "ATK",
		CRI: "Cri",
		DEF: "DEF",
		EVA: "EV",
		HP: "HP",
		SPD: "SPD",
		Range: "Range",
		Buff: "Buff",
		Skill: "Skill",
	};

	const data = objState<Unit | false | null>(null);
	if (data.value === null) {
		data.set(false);

		JsonLoaderCore(`unit/${slot.uid}`)
			.then(() => {
				const x = GetJson<Unit>(`unit/${slot.uid}`);
				data.set(x);
			});
	}

	const baseStats = data.value
		? data.value.stat[slot.rarity - data.value.rarity]
		: null;

	function levelValue (value: number | [number, number], level: number): Decimal {
		if (typeof value === "number")
			return new Decimal(value);

		return new Decimal(value[0])
			.add(
				Decimal.sub(value[1], value[0])
					.div(99)
					.mul(level - 1),
			);
	}

	return JsonLoader(
		StaticDB.FilterableUnit,
		() => {
			const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const unit = FilterableUnit.find(x => x.uid === uid);
			if (!unit || !data.value) return <Fragment />;

			const unitInfo = data.value;

			const unitType = UnitTypeTable[unit.type];
			const unitRole = UnitRoleTable[unit.role];
			const unitUid = uid;
			const level = slot.level;

			const CostTable = GetRequireResource(
				slot.rarity,
				unit.type,
				unit.role,
				unit.body,
				"",
			);

			const statValues = ((): StatsType => {
				const empty = { base: 0, final: 0, up: 0 };
				if (!baseStats) {
					return {
						ATK: empty,
						DEF: empty,
						HP: empty,
						ACC: empty,
						CRI: empty,
						EVA: empty,
						SPD: empty,
						ResistFire: 0,
						ResistIce: 0,
						ResistLightning: 0,
						DMGTakenInc: 0,
						DMGTakenDec: 0,
						DEFPenetration: 0,
						Range: 0,
					};
				}

				const calc = (key: BaseStatType): StatCalcType => {
					const links = Decimal
						.div(slot.links.reduce((p, c) => p + c, 0), 100)
						.toNumber();

					const bonusValue = unitInfo.linkBonus
						.filter(x => x.startsWith(bonusTable[key]))
						.reduce((p, c) => {
							const lb = GetLinkBonus(c, links);
							if (ratioValues.includes(key))
								return p + lb.Value;
							else if (lb.Postfix === "")
								return p + lb.Value;
							return p;
						}, 0);
					const fullBonusValue = ((): number => {
						if (links !== 5 || !slot.linkBonus.startsWith(bonusTable[key])) return 0;
						const lb = GetLinkBonus(slot.linkBonus, 1);
						if (lb.Postfix === "%") return 0;
						return lb.Value;
					})();

					const bonusRatio = unitInfo.linkBonus
						.filter(x => x.startsWith(bonusTable[key]))
						.reduce((p, c) => {
							const lb = GetLinkBonus(c, links);
							if (ratioValues.includes(key))
								return p;
							else if (lb.Postfix === "%")
								return p + Decimal.div(lb.Value, 100).toNumber();
							return p;
						}, 1);
					const fullBonusRatio = ((): number => {
						if (links !== 5 || !slot.linkBonus.startsWith(bonusTable[key])) return 0;
						const lb = GetLinkBonus(slot.linkBonus, 1);
						if (lb.Postfix !== "%") return 0;
						return lb.Value;
					})();

					const base = new Decimal(levelValue((baseStats as any)[key], slot.level))
						.add(bonusValue)
						.add(fullBonusValue);

					const final = base
						.add(Decimal.mul(slot.stats[key], StatPointValue[key]))
						.mul(bonusRatio + fullBonusRatio);

					if (floorValues.includes(key)) {
						return {
							base: base
								.floor()
								.toNumber(),
							final: final
								.floor()
								.toNumber(),
							up: final
								.sub(base)
								.floor()
								.toNumber(),
						};
					}
					return {
						base: base.toNumber(),
						final: final.toNumber(),
						up: final.sub(base).toNumber(),
					};
				};
				const calcSingle = (key: string): number => {
					const links = Decimal
						.div(slot.links.reduce((p, c) => p + c, 0), 100)
						.toNumber();

					const bonusValue = unitInfo.linkBonus
						.filter(x => x.startsWith(bonusTable[key]))
						.reduce((p, c) => {
							const lb = GetLinkBonus(c, links);
							return p + lb.Value;
						}, 0);

					const fullBonusValue = links === 5 && slot.linkBonus.startsWith(bonusTable[key])
						? GetLinkBonus(slot.linkBonus, 1).Value
						: 0;

					return Decimal.add(bonusValue, fullBonusValue)
						.toNumber();
				};

				const baseStat = unitInfo.stat[slot.rarity - unit.rarity];
				return {
					ATK: calc("ATK"),
					DEF: calc("DEF"),
					HP: calc("HP"),
					ACC: calc("ACC"),
					CRI: calc("CRI"),
					EVA: calc("EVA"),
					SPD: calc("SPD"),
					ResistFire: baseStat.Resist.fire + calcSingle("ResistFire"),
					ResistIce: baseStat.Resist.ice + calcSingle("ResistFire"),
					ResistLightning: baseStat.Resist.lightning + calcSingle("ResistFire"),
					DEFPenetration: calcSingle("DEFPenetration"),
					Range: calcSingle("Range"),
					DMGTakenInc: calcSingle("DMGTakenInc"),
					DMGTakenDec: calcSingle("DMGTakenDec"),
				};
			})();

			const costData = ((): {
				metal: number;
				nutrient: number;
				power: number;
				discountedMetal: number;
				discountedNutrient: number;
				discountedPower: number;
			} => {
				const Discounted = GetRequireResource(
					slot.rarity,
					unit.type,
					unit.role,
					unit.body,
					slot.linkBonus,
				);

				const links = slot.links.filter(x => x > 0).length;
				const base = {
					metal: CostTable.metal[links],
					nutrient: CostTable.nutrient[links],
					power: CostTable.power[links],
				};
				const final = {
					metal: Discounted.metal[links],
					nutrient: Discounted.nutrient[links],
					power: Discounted.power[links],
				};

				return {
					...final,
					discountedMetal: base.metal - final.metal,
					discountedNutrient: base.nutrient - final.nutrient,
					discountedPower: base.power - final.power,
				};
			})();

			const linksRequire = [10, 30, 50, 70, 90];

			const statList1: Array<{
				stat: StatType;
				postfix?: string;
			}> =
				[
					{ stat: "ATK" }, { stat: "ACC", postfix: "%" },
					{ stat: "CRI", postfix: "%" }, { stat: "DEF" },
					{ stat: "EVA", postfix: "%" }, { stat: "SPD" },
				];
			const statList2: Array<{
				stat: StatType;
				icon: string;
				postfix?: string;
			}> =
				[
					{ stat: "DEFPenetration", icon: "DEF_PIERCE_UP", postfix: "%" },
					{ stat: "Range", icon: "RANGE_UP" },
					{ stat: "DMGTakenInc", icon: "VULNERABLE", postfix: "%" },
					{ stat: "DMGTakenDec", icon: "DAMAGE_REDUCE", postfix: "%" },
				];

			return <div class="card bg-dark text-light simulator-summary">
				<div class="card-body text-start">
					{ baseStats
						? <Fragment>
							<div class="head-grid">
								<UnitFace uid={ unitUid } size="80" />

								<div class="unit-type">
									<span class={ `badge bg-rarity-${RarityDisplay[slot.rarity]} text-dark align-text-bottom me-2` }>
										{ RarityDisplay[slot.rarity] }
									</span>
									<Locale k={ `COMMON_UNIT_TYPE_SHORT_${unitType}` } />
									&nbsp;
									<Locale k={ `COMMON_UNIT_ROLE_${unitRole}` } />
								</div>

								<div class="unit-info">
									<div class="unit-level">
										Lv. { level }
									</div>
									<Locale k={ `UNIT_${unitUid}` } />
								</div>

								<div class="unit-hp">
									<StatIcon stat="HP" class="float-start me-1" />
									<strong>
										{ slot.hp } / { statValues.HP.final }

										{ statValues.HP.base !== statValues.HP.final
											? <span class={ `value-diff diff-${statValues.HP.final > statValues.HP.base ? "plus" : "minus"}` }>
												{ statValues.HP.up }
											</span>
											: <Fragment />
										}
									</strong>
									<div class="hp-bar">
										<div
											class="hp-progress"
											style={ {
												width: `${Decimal.min(100, Decimal.div(slot.hp, statValues.HP.final).mul(100))}%`,
											} }
										/>
									</div>
								</div>

								<div class="unit-links">
									{ slot.links.map((link, index) => <span
										class={ [
											"badge",
											`bg-${slot.level < linksRequire[index] || link === 0
												? "secondary"
												: link === 100
													? "primary"
													: "orange"
											}`,
											"ms-1",
										].join(" ") }
									>{ link }%</span>) }
								</div>

								<div class="unit-linkbonus">
									{ slot.links.reduce((p, c) => p + c, 0) !== 500 || slot.linkBonus === ""
										? <Fragment>
											<span class="me-1">
												<Locale k="UNIT_VIEW_FULL_LINKBONUS" />
											</span>
											<Locale k="LINKBONUS_NONE" />
										</Fragment>
										: ((): preact.VNode => {
											const fl = GetLinkBonus(slot.linkBonus, 1);

											return <Fragment>
												<span class="me-1">
													<Locale k={ fl.Name } />
												</span>
												{ fl.Prefix }{ fl.Value }{ fl.Postfix }
											</Fragment>;
										})()
									}
								</div>

								<div class="unit-cost">
									<span>
										<img src={ `${AssetsRoot}/res-component.png` } />
										{ costData.metal }

										{ slot.linkBonus.startsWith("Cost")
											? <span class="value-diff diff-minus">{ costData.discountedMetal }</span>
											: <Fragment />
										}
									</span>

									<span>
										<img src={ `${AssetsRoot}/res-nutrition.png` } />
										{ costData.nutrient }

										{ slot.linkBonus.startsWith("Cost")
											? <span class="value-diff diff-minus">{ costData.discountedNutrient }</span>
											: <Fragment />
										}
									</span>

									<span>
										<img src={ `${AssetsRoot}/res-power.png` } />
										{ costData.power }

										{ slot.linkBonus.startsWith("Cost")
											? <span class="value-diff diff-minus">{ costData.discountedPower }</span>
											: <Fragment />
										}
									</span>
								</div>
							</div>

							<div class="body-grid">
								{ statList1.map(({ stat, postfix }) => <Fragment>
									<span class="body-label">
										<StatIcon stat={ stat } />
										<Locale k={ `SIMULATOR_${stat}` } />
									</span>
									<span class="body-value">
										{ ((): preact.VNode => {
											const s = statValues[stat];
											return typeof s === "number"
												? <Fragment>
													{ s }
													{ postfix }
												</Fragment>
												: <Fragment>
													{ s.final }
													{ s.base !== s.final
														? <span class={ `value-diff diff-${s.final > s.base ? "plus" : "minus"}` }>{ s.up }</span>
														: <Fragment />
													}
													{ postfix }
												</Fragment>;
										})() }
									</span>
								</Fragment>) }

								<hr />


								{ statList2.map(({ stat, icon, postfix }) => <Fragment>
									<span class="body-label">
										<BuffIcon buff={ icon } />
										<Locale k={ `SIMULATOR_${stat}` } />
									</span>
									<span class="body-value">
										{ ((): preact.VNode => {
											const s = statValues[stat];
											return typeof s === "number"
												? <Fragment>
													{ s }
													{ postfix }
												</Fragment>
												: <Fragment>
													{ s.final }
													{ s.base !== s.final
														? <span class={ `value-diff diff-${s.final > s.base ? "plus" : "minus"}` }>{ s.up }</span>
														: <Fragment />
													}
													{ postfix }
												</Fragment>;
										})() }
									</span>
								</Fragment>) }

								<hr />
							</div>

							<div class="resist-grid">
								<span class="resist-label">
									<Locale k="SIMULATOR_RESIST" />
								</span>
								<span>
									<ElemIcon elem="fire" class="me-2" />
									{ baseStats.Resist.fire }%
								</span>
								<span>
									<ElemIcon elem="ice" class="me-2" />
									{ baseStats.Resist.ice }%
								</span>
								<span>
									<ElemIcon elem="lightning" class="me-2" />
									{ baseStats.Resist.lightning }%
								</span>
							</div>

							<div class="buff-list mt-3">
								<div class="buff-list-head">
									<Locale k="SIMULATOR_BUFFLIST" />
								</div>

								나타날 수 있는 버프 목록 (조건부 버프는 체크박스로 ON/OFF 할 수 있도록)
							</div>
						</Fragment>
						: <Fragment />
					}
				</div>
			</div>;
		},
	);
};
export default SimulatorSummary;
