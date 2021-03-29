import { Fragment, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";
import Decimal from "decimal.js";

import { ACTOR_GRADE } from "@/types/Enums";
import { SelectOption } from "@/types/Helper";
import { BuffStat } from "@/types/Buffs";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { Enemy, EnemySkill } from "@/types/DB/Enemy";

import JsonLoader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/JsonLoader";
import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import PopupBase from "@/components/popup/base";
import UnitBadge from "@/components/unit-badge";
import RarityBadge from "@/components/rarity-badge";
import ElemIcon from "@/components/elem-icon";
import StatIcon from "@/components/stat-icon";
import SkillBound from "@/components/skill-bound";
import SkillDescription from "@/components/skill-description/SkillDescription";
import BuffList from "@/components/buff-list";

import "./style.scss";
import AIList from "@/components/ai-list";
import SourceBadge from "@/components/source-badge";
import EntitySource from "@/libs/EntitySource";
interface EnemyPopupProps {
	display?: boolean;
	level: number;
	enemy: FilterableEnemy | null;

	/**
	 * 이 값이 `true`라면 Family를 변경해도 주소가 변하지 않음
	 */
	asSub?: boolean;

	onHidden?: () => void;
}

const EnemyPopup: FunctionalComponent<EnemyPopupProps> = (props) => {
	const imageExt = ImageExtension();

	const propLevel = objState<number>(0);
	const level = objState<number>(0);
	const displayTab = objState<string>("skill1");

	const targetId = objState<string>("");
	const targetEnemy = objState<Enemy | null>(null);

	const skillIconBase = `${AssetsRoot}/${imageExt}/skill`;

	if (propLevel.value !== props.level) {
		propLevel.set(props.level);
		level.set(props.level);
	}

	return JsonLoader(
		[
			StaticDB.FilterableEnemy,
		],
		() => {
			if (!targetId.value && props.enemy) {
				targetId.set(props.enemy.id);
				displayTab.set("skill1");
			} else if (targetId.value && !props.enemy)
				targetId.set("");

			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

			const target = props.enemy && FilterableEnemyDB.find(x => x.id === targetId.value) || null;
			const isEWEnemy = target && /_EW[0-9]*$/.test(target.id);

			const FamilyList = ((): SelectOption<string>[] => {
				if (!props.enemy) return [];

				const name = LocaleGet(`ENEMY_${props.enemy.id}`);
				return FilterableEnemyDB
					.filter(x => (LocaleGet(`ENEMY_${x.id}`) === name))
					.map((x, i) => ({
						value: x.id,
						text: `${LocaleGet(`ENEMY_${x.id}`)} ${i + 1}`,
					}));
			})();
			const EnemyLink = ((): string => {
				if (!target) return "";

				const loc = window.location;
				return `${loc.origin}/enemies/${target.id}/${level.value}`;
			})();

			if (props.enemy && !FamilyList.some(x => x.value === targetId.value)) {
				targetId.set(props.enemy.id);
				displayTab.set("skill1");
			}

			function StatValue (stat: [number, number], floorPer: boolean = false): number {
				if (floorPer) {
					return Decimal.add(
						stat[0],
						Decimal.mul(Decimal.floor(stat[1]), level.value - 1),
					)
						.floor()
						.toNumber();
				}
				return Decimal.add(stat[0], Decimal.mul(stat[1], level.value - 1))
					.floor()
					.toNumber();
			}

			if (target) {
				const enemyKey = `enemy/${target.id}`;
				JsonLoaderCore(enemyKey)
					.then(() => {
						const detail = GetJson<Enemy>(enemyKey);
						if (!detail) return;

						targetEnemy.set(detail);
					});
			} else if (targetEnemy.value)
				targetEnemy.set(null);

			const Skills = ((): EnemySkill[] => {
				if (!targetEnemy.value) return [];
				const list: EnemySkill[] = targetEnemy.value.rarity === ACTOR_GRADE.SS
					? targetEnemy.value.skills
					: targetEnemy.value.skills.slice(0, targetEnemy.value.rarity);

				let passive = false;
				for (let i = 0; i < list.length; i++) {
					const e = list[i];
					if (!e) break;
					if (e.passive) passive = true;
					else if (passive) {
						list.splice(i, list.length - i);
						break;
					}
				}

				// while (list.length < 6) list.push(undefined);
				return list;
			})();

			const SkillsTab = Skills.least(6);

			function Description (skill: EnemySkill): string {
				if (!targetEnemy.value) return "";

				return skill.desc
					.replace(/\{0\}/g, `[@::0~0: (${skill.buff.rate}배)]`)
					.replace(/\. /g, ".\n");
			}

			const GetRates = (skill: EnemySkill): number[] => new Array(10).fill(
				targetEnemy.value
					? Decimal.mul(
						StatValue(targetEnemy.value.stat.atk),
						skill.buff.rate,
					)
						.floor()
						.toNumber()
					: 0,
			);

			const buffList = ((): Record<string, BuffStat[]> => {
				const output: Record<string, BuffStat[]> = {};
				Skills.forEach(skill => {
					if (!skill) return null;

					const stat = skill.buff.buffs;
					output[skill.key] = stat;
				});

				return output;
			})();

			const Sources = ((): EntitySource[][] => {
				if (!target) return [];

				const ret: string[][] = [];

				Object.keys(target.used)
					.forEach(x => ret.push(target.used[x]));

				ret.forEach((x, i) => (ret[i] = x.unique()));
				return ret.map(x => x.map(y => new EntitySource(y)));
			})();

			return <PopupBase
				class="enemy-modal text-center"
				bodyClass="pb-0"
				display={ props.display && target !== null }
				size="xl"
				header={ target
					? <div class="text-start">
						<Locale k={ `ENEMY_${target.id}` } />
						{ isEWEnemy
							? <span class="badge bg-warning text-dark ms-2">
								<Locale k="ENEMY_VIEW_EW" />
							</span>
							: <Fragment />
						}
						{ target.isBoss ? <span class="badge bg-danger ms-2">BOSS</span> : <Fragment /> }
						<div style="font-size: 60%">{ target.id }</div>
					</div>
					: <Fragment />
				}
				onHidden={ (): void => {
					if (!props.asSub && window.location.pathname !== "/enemies")
						route("/enemies");

					if (props.onHidden)
						props.onHidden();

					targetId.set("");
				} }
			>
				{ target
					? <Fragment>
						{ FamilyList.length > 1
							? <div class="mb-1">
								<select
									class="form-select form-select-sm"
									value={ targetId.value }
									onChange={ (e): void => {
										const value = (e.target as HTMLSelectElement).value;
										targetId.set(value);
										if (!props.asSub)
											route(`/enemies/${value}`);
									} }
								>
									{ FamilyList.map(x => <option value={ x.value }>{ x.text }</option>) }
								</select>
							</div>
							: <Fragment />
						}

						<a href={ EnemyLink } class="text-secondary">
							<small>{ EnemyLink }</small>
						</a>

						<table class="table table-bordered table-fixed table-enemy-modal mt-2 text-center">
							<tbody>
								<tr class="d-table-row d-lg-none">
									<td class="p-0">
										<div class="icon-container">
											<div class="enemy-icon m-3">
												<img src={ `${AssetsRoot}/${imageExt}/tbar/${target.icon}.${imageExt}` } />
											</div>
											<div class="row row-cols-2">
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_TYPE" /></div>
												<div class="col">
													<UnitBadge type={ target.type } size="large" transparent black />
												</div>
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_ROLE" /></div>
												<div class="col">
													<UnitBadge role={ target.role } size="large" transparent black />
												</div>
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_GRADE" /></div>
												<div class="col">
													<RarityBadge rarity={ target.rarity } />
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td rowSpan={ 2 } class="p-0 d-lg-table-cell d-none">
										<div class="icon-container">
											<div class="enemy-icon m-3">
												<img src={ `${AssetsRoot}/${imageExt}/tbar/${target.icon}.${imageExt}` } />
											</div>
											<div class="row row-cols-2">
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_TYPE" /></div>
												<div class="col">
													<UnitBadge type={ target.type } size="large" transparent black />
												</div>
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_ROLE" /></div>
												<div class="col">
													<UnitBadge role={ target.role } size="large" transparent black />
												</div>
												<div class="col bg-dark text-white"><Locale k="ENEMY_VIEW_GRADE" /></div>
												<div class="col border-bottom-0">
													<RarityBadge rarity={ target.rarity } />
												</div>
											</div>
										</div>
									</td>
									<td class="bg-dark text-light">
										<div class="input-group">
											<button class="btn btn-secondary" onClick={ (): void => level.set(1) }>
												<Icon icon="chevron-double-down" />
											</button>
											<button class="btn btn-secondary" onClick={ (): void => level.set(Math.max(1, level.value - 1)) }>
												<Icon icon="chevron-down" />
											</button>

											<div class="flex-1">
												<div class="input-prepend">Lv.</div>
												<input class="form-control ps-5" value={ level.value } onChange={ (e: Event): void => level.set(
													parseInt((e.target as HTMLInputElement).value, 10),
												) } />
											</div>

											<button class="btn btn-secondary" onClick={ (): void => level.set(Math.min(100, level.value + 1)) }>
												<Icon icon="chevron-up" />
											</button>
											<button class="btn btn-secondary" onClick={ (): void => level.set(100) }>
												<Icon icon="chevron-double-up" />
											</button>
										</div>
									</td>
								</tr>
								<tr>
									{ targetEnemy.value
										? <td class="bg-dark status-col p-0 pb-2">
											<table class="table table-borderless mb-0">
												<tbody>
													<tr class="text-center text-white resist-parent">
														<td data-type="fire">
															<ElemIcon inline elem="fire" />
															<strong class="ps-1">{ targetEnemy.value.stat.res.fire }%</strong>
														</td>
														<td data-type="ice">
															<ElemIcon inline elem="ice" />
															<strong class="ps-1">{ targetEnemy.value.stat.res.chill }%</strong>
														</td>
														<td data-type="lightning">
															<ElemIcon inline elem="lightning" />
															<strong class="ps-1">{ targetEnemy.value.stat.res.thunder }%</strong>
														</td>
													</tr>
												</tbody>
											</table>
											<table class="table table-borderless mb-0">
												<tbody>
													<tr>
														<td class="text-start">
															<StatIcon inline stat="HP" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_HP" /></span>
														</td>
														<td>
															<div class="status-col-value">
																{ StatValue(targetEnemy.value.stat.hp) }
															</div>
														</td>
														<td class="text-start" />
														<td />
													</tr>

													<tr>
														<td class="text-start">
															<StatIcon inline stat="ATK" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_ATK" /></span>
														</td>
														<td>
															<div class="status-col-value">
																{ StatValue(targetEnemy.value.stat.atk) }
															</div>
														</td>
														<td class="text-start">
															<StatIcon inline stat="ACC" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_ACC" /></span>
														</td>
														<td>
															<div class="status-col-value">{ targetEnemy.value.stat.acc }%</div>
														</td>
													</tr>

													<tr>
														<td class="text-start">
															<StatIcon inline stat="CRI" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_CRIT" /></span>
														</td>
														<td>
															<div class="status-col-value">{ targetEnemy.value.stat.cri }%</div>
														</td>
														<td class="text-start">
															<StatIcon inline stat="DEF" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_DEF" /></span>
														</td>
														<td>
															<div class="status-col-value">
																{ StatValue(targetEnemy.value.stat.def) }
															</div>
														</td>
													</tr>

													<tr>
														<td class="text-start">
															<StatIcon inline stat="EVA" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_EVA" /></span>
														</td>
														<td>
															<div class="status-col-value">{ targetEnemy.value.stat.eva }%</div>
														</td>
														<td class="text-start">
															<StatIcon inline stat="SPD" />
															<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_SPD" /></span>
														</td>
														<td>
															<div class="status-col-value">{ targetEnemy.value.stat.spd }</div>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
										: <Fragment />
									}
								</tr>
							</tbody>
						</table>

						{ targetEnemy.value
							? <Fragment>
								<div class="container">
									<div class="row row-cols-4 row-cols-md-8 enemy-display-tabs mt-1">
										{ SkillsTab.map((skill, idx) => skill
											? <div
												class={ `col mt-1 ${displayTab.value === `skill${idx + 1}`
													? "border border-bottom-0"
													: "border-bottom"}` }
												role="button"
												onClick={ (): void => displayTab.set(`skill${idx + 1}`) }
											>
												<img
													class="skill-icon my-2"
													src={ `${skillIconBase}/${skill.icon}_${skill.passive ? "passive" : "active"}.${imageExt}` }
												/>
											</div>
											: <div class="col mt-1 border-bottom" />) }
										<div
											class={ `col info-tab-button mt-1 ${displayTab.value === "ai"
												? "border border-bottom-0"
												: "border-bottom"}` }
											role="button"
											onClick={ (): void => displayTab.set("ai") }
										>
											<Icon icon="cpu-fill" class="my-2" />
										</div>
										<div
											class={ `col info-tab-button mt-1 ${displayTab.value === "desc"
												? "border border-bottom-0"
												: "border-bottom"}` }
											role="button"
											onClick={ (): void => displayTab.set("desc") }
										>
											<Icon icon="info-circle-fill" class="my-2" />
										</div>
									</div>

									{ Skills.map((skill, idx) =>
										displayTab.value === `skill${idx + 1}` && skill
											? <div class="row">
												<div class="col border border-top-0 text-start p-3">
													<ElemIcon elem={ skill.type } />
													<strong>{ skill.name }</strong>
													<small class="ms-1">Lv.1</small>

													<div class="float-md-right bg-dark ms-md-2 mt-2 mt-md-0 p-2 text-center">
														<SkillBound
															target={ skill.target }
															buffs={ skill.buff }
															level={ 0 }
															passive={ skill.passive }
															rangeBonus={ false }
														/>
													</div>

													<div class="skill-desc">
														<div>
															<ElemIcon elem={ skill.buff.type } class="me-1" />

															{ skill.buff.dismiss_guard
																? <span class="badge bg-warning text-dark me-1">
																	<Locale k="ENEMY_SKILL_DISMISS_GUARD" />
																</span>
																: <Fragment />
															}
															{ skill.buff.target_ground
																? <span
																	class="badge bg-danger me-1"
																	title={ LocaleGet("ENEMY_SKILL_GRID_TARGET_TIP") }
																>
																	<Locale k="ENEMY_SKILL_GRID_TARGET" />
																</span>
																: <Fragment />
															}
															{ skill.buff.acc_bonus
																? <span class="badge bg-success me-1">
																	<Locale k="ENEMY_SKILL_ACC_BONUS" />
																	{ (skill.buff.acc_bonus > 0 ? "+" : "") + skill.buff.acc_bonus }%
																</span>
																: <Fragment />
															}
														</div>
														<hr class="my-1" />

														<div class="break-keep white-pre-line">
															<SkillDescription
																text={ Description(skill) }
																level={ 0 }
																rates={ GetRates(skill) }
																buffBonus={ false }
																favorBonus={ false }
																skillBonus={ 0 }
															/>
														</div>
													</div>

													<div class="clearfix" />
													<hr />

													{ buffList[skill.key].length > 0
														? <BuffList list={ buffList[skill.key] } />
														: <Fragment />
													}
												</div>
											</div>
											: <Fragment />)
									}
									{ displayTab.value === "ai"
										? <div class="row">
											<div class="col border border-top-0 text-start p-3">
												<AIList ai={ targetEnemy.value.ai } skills={ Skills } enemy />
											</div>
										</div>
										: <Fragment />
									}
									{ displayTab.value === "desc"
										? <div class="row">
											<div class="col break-keep white-pre-line border border-top-0 text-start p-1">
												<div class="bg-dark text-light p-3"><Locale k={ `ENEMY_INTRO_${target.id}` } /></div>
											</div>
										</div>
										: <Fragment />
									}
								</div>

								<div class="card border text-center my-3" >
									<div class="card-header">
										<Locale k="ENEMY_VIEW_STAGE" />
									</div>
									<div class="card-body p-2">
										{ Sources.map((area, aindex) => <div>
											{ aindex > 0 ? <hr class="my-2" /> : <Fragment /> }
											{ area.length > 0 && area[0].IsEvent
												? <h6 style="font-weight: bold">
													<Locale k={ area[0].EventName } />
												</h6>
												: area.length > 0 && area[0].IsChallenge
													? <h6 style="font-weight: bold">
														<Locale k={ `COMMON_CHALLENGE_${area[0].ChallengeName}` } />
													</h6>
													: area.length > 0 && area[0].IsSubStory
														? <h6 style="font-weight: bold">
															<Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />
														</h6>
														: <Fragment />
											}

											{ area.map(source => <SourceBadge class="my-1" source={ source } linked />) }
										</div>) }
										{ isEWEnemy
											? <Fragment>
												{ Sources.length > 0 ? <hr class="my-2" /> : <Fragment /> }
												<span class="badge bg-dark text-light">
													<Locale k="ENEMY_VIEW_EW" />
												</span>
											</Fragment>
											: Object.keys(Sources).length === 0
												? <div class="secondary">
													<Locale k="ENEMY_VIEW_STAGE_NONE" />
												</div>
												: <Fragment />
										}
									</div>
								</div>
							</Fragment>
							: <Fragment />
						}
					</Fragment>
					: <Fragment />
				}
			</PopupBase>;
		},
		<Fragment />,
	);
};
export default EnemyPopup;
