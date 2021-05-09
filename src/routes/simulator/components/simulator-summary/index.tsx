import { Fragment, FunctionalComponent, h } from "preact";
import Decimal from "decimal.js";

import { ACTOR_CLASS, ROLE_TYPE, TARGET_TYPE } from "@/types/Enums";
import { BaseStatType, StatPointValue, StatType } from "@/types/Stat";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Unit } from "@/types/DB/Unit";
import { Equip } from "@/types/DB/Equip";
import { BuffEffectValue } from "@/types/BuffEffect";
import { SimulatorSlotType } from "../../types/Slot";

import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { GetLinkBonus } from "@/libs/LinkBonus";
import { GetRequireResource } from "@/libs/Cost";
import { objState } from "@/libs/State";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import StatIcon from "@/components/stat-icon";
import ElemIcon from "@/components/elem-icon";
import BuffIcon from "@/components/buff-icon";
import UnitFace from "@/components/unit-face";
import EquipIcon from "@/components/equip-icon";
import EquipLevel from "@/components/equip-level";

import "./style.scss";
import { isActive } from "@/libs/Functions";

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
	const includeBuffs = objState<boolean>(true);

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

	const linksRequire = [10, 30, 50, 70, 90];
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

	const updator = objState<number>(0);

	const equips = objState<Array<Equip | false | null>>([null, null, null, null]);
	const equipList = equips.value;
	let equipUpdated = false;

	slot.equips.forEach((x, i) => {
		const v = equips.value[i];
		if (!x && v !== null) { // 원본은 없는데 비어있지 않은 경우
			equipList.splice(i, 1, null);
			equipUpdated = true;
		} else if (x && ((v === null) || (v && x.uid !== v.uid))) { // 원본은 있는데 비어있는 경우 또는 원본과 서로 다른 장비인 경우
			equipList.splice(i, 1, false);
			equipUpdated = true;

			JsonLoaderCore(`equip/${x.uid}`)
				.then(() => {
					equipList.splice(i, 1, GetJson<Equip>(`equip/${x.uid}`));
					equips.set(equipList);
					updator.set(updator.value + 1);
				});
		}
	});
	if (equipUpdated)
		equips.set(equipList);

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

	return <Loader json={ [
		StaticDB.FilterableUnit,
		StaticDB.FilterableEquip,
		`unit/${slot.uid}`,
	] } content={ ((): preact.VNode => {
		const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		const FilterableEquip = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);

		const unit = FilterableUnit.find(x => x.uid === uid);
		if (!unit) return <Fragment />;

		const unitInfo = GetJson<Unit>(`unit/${slot.uid}`);
		if (!unitInfo) return <Fragment />;

		const baseStats = unitInfo
			? unitInfo.stat[slot.rarity - unitInfo.rarity]
			: null;

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

			/**
			 * [base + per * level]을 계산
			 * @param value base-per 값
			 * @param level 장비/수치 레벨
			 * @param type 0: 구분 없음 / 1: 비 % 값만 / 2: % 값만
			 * @returns 
			 */
			function levelV (value: BuffEffectValue, level: number, type: 0 | 1 | 2 = 0): number {
				if (type === 1 && !(typeof value.base === "number" || !value.base.endsWith("%")))
					return 0;
				if (type === 2 && (typeof value.base === "number" || !value.base.endsWith("%")))
					return 0;

				const base = typeof value.base === "string"
					? value.base.replace(/%/g, "")
					: value.base;
				const per = typeof value.per === "string"
					? value.per.replace(/%/g, "")
					: value.per;
				return Decimal.add(base, Decimal.mul(per, level))
					.toNumber();
			}

			const calc = (key: BaseStatType): StatCalcType => {
				const aliasTarget = [TARGET_TYPE.SELF, TARGET_TYPE.OUR, TARGET_TYPE.OUR_GRID, TARGET_TYPE.ALL_GRID, TARGET_TYPE.ALL_UNIT];

				const links = Decimal
					.div(slot.links.reduce((p, c, index) => {
						if (slot.level < linksRequire[index]) // 레벨에 맞지 않는 링크 제외
							return p;
						return p + c;
					}, 0), 100)
					.toNumber();

				const bonusValue = unitInfo.linkBonus
					.filter(x => x.startsWith(bonusTable[key]))
					.reduce((p, c) => {
						const lb = GetLinkBonus(c, links);
						if (ratioValues.includes(key) || (lb.Postfix !== "%")) // 애초에 % 표기되는 유형이거나 % 값이 아닌 경우
							return p + lb.Value;
						return p;
					}, 0) +
					slot.equips.reduce((p, c, i) => {
						const e = equipList[i];
						if (!e || !c) return p;

						const eq = e.stats[c.level];
						eq.forEach((y, yi) => {
							if (!("type" in y) && !aliasTarget.includes(y.target)) return;

							if (!("type" in y)) {
								if (!includeBuffs.value) return;
								y.buffs.forEach((b, bi) => {
									const force = [
										y.on === "round" || y.on === "wave",
										!b.value.chance || b.value.chance === "100%",
										y.if === false,
									].every(x => x);

									const bkey = `${yi}_${bi}`;
									if (!force && !(bkey in c.buffs)) return;

									const z = b.value;
									if (key === "ACC" && "accuracy" in z)
										p += levelV(z.accuracy, c.level, 2) * (c.buffs[bkey] || 1);
									else if (key === "CRI" && "critical" in z)
										p += levelV(z.critical, c.level, 2) * (c.buffs[bkey] || 1);
									else if (key === "EVA" && "evade" in z)
										p += levelV(z.evade, c.level, 2) * (c.buffs[bkey] || 1);
								});
								return;
							}

							if (key === "ATK" && "attack" in y)
								p += levelV(y.attack, c.level, 1);
							else if (key === "DEF" && "defense" in y)
								p += levelV(y.defense, c.level, 1);
							else if (key === "ACC" && "accuracy" in y)
								p += levelV(y.accuracy, c.level);
							else if (key === "CRI" && "critical" in y)
								p += levelV(y.critical, c.level);
							else if (key === "EVA" && "evade" in y)
								p += levelV(y.evade, c.level);
							else if (key === "HP" && "hp" in y)
								p += levelV(y.hp, c.level, 1);
							else if (key === "SPD" && "turnSpeed" in y)
								p += levelV(y.turnSpeed, c.level, 1);
						});

						return p;
					}, 0);
				const fullBonusValue = ((): number => {
					if (links !== 5 || !slot.linkBonus.startsWith(bonusTable[key])) return 0;
					const lb = GetLinkBonus(slot.linkBonus, 1);
					if (ratioValues.includes(key) || (lb.Postfix !== "%")) // 애초에 % 표기되는 유형이거나 % 값이 아닌 경우
						return lb.Value;
					return 0;
				})();

				const linkRatio = unitInfo.linkBonus
					.filter(x => x.startsWith(bonusTable[key]))
					.reduce((p, c) => {
						const lb = GetLinkBonus(c, links);
						if (!ratioValues.includes(key) && lb.Postfix === "%") // % 표기되는 유형이 아니고 % 값인 경우
							return p + Decimal.div(lb.Value, 100).toNumber();
						return p;
					}, 1);
				const bonusRatio = slot.equips.reduce((p, c, i) => {
					const e = equipList[i];
					if (!e || !c) return p;

					let v = 0;

					const eq = e.stats[c.level];
					eq.forEach((y, yi) => {
						if ("type" in y) return;
						y.buffs.forEach((b, bi) => {
							const force = [
								y.on === "round" || y.on === "wave",
								!b.value.chance || b.value.chance === "100%",
								y.if === false,
							].every(x => x);

							const bkey = `${yi}_${bi}`;
							if (!force && !(bkey in c.buffs)) return;

							const z = b.value;
							if (key === "ATK" && "attack" in z)
								v += levelV(z.attack, c.level, 2) * (c.buffs[bkey] || 1);
							else if (key === "DEF" && "defense" in z)
								v += levelV(z.defense, c.level, 2) * (c.buffs[bkey] || 1);
							else if (key === "HP" && "hp" in z)
								v += levelV(z.hp, c.level, 2) * (c.buffs[bkey] || 1);
							else if (key === "SPD" && "turnSpeed" in z)
								v += levelV(z.turnSpeed, c.level, 2) * (c.buffs[bkey] || 1);
						});
					});
					return Decimal.add(p, Decimal.div(v, 100))
						.toNumber();
				}, 0);
				const fullBonusRatio = ((): number => {
					if (links !== 5 || !slot.linkBonus.startsWith(bonusTable[key])) return 0;
					const lb = GetLinkBonus(slot.linkBonus, 1);
					if (!ratioValues.includes(key) && lb.Postfix === "%") // % 표기되는 유형이 아니고 % 값인 경우
						return Decimal.div(lb.Value, 100).toNumber();
					return 0;
				})();

				const base = new Decimal(levelValue((baseStats as any)[key], slot.level))
					.add(bonusValue)
					.add(fullBonusValue);

				const final = includeBuffs.value
					? base
						.add(Decimal.mul(slot.stats[key], StatPointValue[key]))
						.mul(linkRatio)
						.mul(1 + bonusRatio + fullBonusRatio)
					: base
						.add(Decimal.mul(slot.stats[key], StatPointValue[key]))
						.mul(linkRatio)
						.mul(1 + fullBonusRatio);

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
					}, 0) +
					slot.equips.reduce((p, c, i) => {
						const e = equipList[i];
						if (!e || !c) return p;

						const eq = e.stats[c.level];
						eq.forEach((y, yi) => {
							if ("type" in y) return;
							if (!includeBuffs.value) return;
							y.buffs.forEach((b, bi) => {
								const force = [
									y.on === "round" || y.on === "wave",
									!b.value.chance || b.value.chance === "100%",
									y.if === false,
								].every(x => x);

								const bkey = `${yi}_${bi}`;
								if (!force && !(bkey in c.buffs)) return;

								const z = b.value;
								if (key === "ResistFire" && "resist" in z && "elem" in z.resist && z.resist.elem === "fire")
									p += levelV(z.resist.value, c.level);
								else if (key === "ResistIce" && "resist" in z && "elem" in z.resist && z.resist.elem === "ice")
									p += levelV(z.resist.value, c.level);
								else if (key === "ResistLightning" && "resist" in z && "elem" in z.resist && z.resist.elem === "lightning")
									p += levelV(z.resist.value, c.level);
								else if (key === "DEFPenetration" && "penetration" in z)
									p += levelV(z.penetration, c.level);
								else if (key === "Range" && "range" in z)
									p += levelV(z.range, c.level);
								else if (key === "DMGTakenInc" && "damage_increase" in z)
									p += levelV(z.damage_increase, c.level);
								else if (key === "DMGTakenDec" && "damage_reduce" in z)
									p += levelV(z.damage_reduce, c.level);
							});
						});

						return p;
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
				ResistIce: baseStat.Resist.ice + calcSingle("ResistIce"),
				ResistLightning: baseStat.Resist.lightning + calcSingle("ResistLightning"),
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

			const links = slot.links.filter((x, index) => x > 0 && slot.level >= linksRequire[index]).length;
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

							<div class="unit-info">
								<div class="unit-level">
									Lv. { level }
								</div>
								<Locale k={ `UNIT_${unitUid}` } />
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
									{/* slot.linkBonus.startsWith("Cost")
											? <span class="value-diff diff-minus">{ costData.discountedMetal }</span>
											: <Fragment />*/
									}
								</span>

								<span>
									<img src={ `${AssetsRoot}/res-nutrition.png` } />
									{ costData.nutrient }
								</span>

								<span>
									<img src={ `${AssetsRoot}/res-power.png` } />
									{ costData.power }
								</span>
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
						</div>

						<div class="equip-grid">
							{ slot.equips.map((equip, i) => equip
								? ((e: Equip | false | null): preact.VNode => e
									? <div class="equip-slot" data-type={ unitInfo.slots[i] }>
										<div class="equip-slot-icon">
											<div class="position-relative d-inline-block">
												<EquipIcon image={ `${FilterableEquip.find(x => x.fullKey === equip.uid)!.icon}` } size="76" />
												<EquipLevel level={ equip.level } size={ 14 } />
											</div>
										</div>
										<div>
											<Locale k={ `EQUIP_${e.uid}` } />
										</div>
									</div>
									: <div class="equip-slot" data-type={ unitInfo.slots[i] }>
										<div class="equip-slot-icon" />
										<div>&nbsp;</div>
									</div>
								)(equipList[i])
								: <div class="equip-slot" data-type={ unitInfo.slots[i] }>
									<div class="equip-slot-icon" />
									<div>&nbsp;</div>
								</div>,
							) }
						</div>

						<div class="switches">
							<div class="form-check d-inline-block">
								<input
									class="form-check-input"
									type="checkbox"
									id="simulator_summary_include_buffs"
									checked={ includeBuffs.value }
									onClick={ (e): void => {
										// e.preventDefault();
										// e.stopPropagation();

										includeBuffs.set(!includeBuffs.value);
										// (e.target as HTMLInputElement).checked = !includeBuffs.value;
									} }
								/>
								<label class="form-check-label" for="simulator_summary_include_buffs">
									<Locale k="SIMULATOR_TOGGLE_BUFFS" />
								</label>
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
												{ s < 0
													? <span class="text-danger">{ s }</span>
													: s
												}
												{ postfix }
											</Fragment>
											: <Fragment>
												{ s.final < s.base
													? <span class="text-danger">{ s.final }</span>
													: s.final
												}
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
												{ s < 0
													? <span class="text-danger">
														{ stat === "Range"
															? s > 0 ? "+" : s < 0 ? "" : <Fragment />
															: <Fragment />
														}
														{ s }
													</span>
													: <Fragment>
														{ stat === "Range"
															? s > 0 ? "+" : s < 0 ? "" : <Fragment />
															: <Fragment />
														}
														{ s }
													</Fragment>
												}

												{ postfix }
											</Fragment>
											: <Fragment>
												{ s.final < s.base
													? <span class="text-danger">{ s.final }</span>
													: s.final
												}
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
								{ statValues.ResistFire }%
							</span>
							<span>
								<ElemIcon elem="ice" class="me-2" />
								{ statValues.ResistIce }%
							</span>
							<span>
								<ElemIcon elem="lightning" class="me-2" />
								{ statValues.ResistLightning }%
							</span>
						</div>
					</Fragment>
					: <Fragment />
				}
			</div>
		</div>;
	}) } />;
};
export default SimulatorSummary;
