import { FunctionalComponent } from "preact";
import { route } from "preact-router";
import Decimal from "decimal.js";

import { SelectOption } from "@/types/Helper";
import { BuffStat } from "@/types/Buffs";
import { SKILL_ATTR } from "@/types/Enums";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { Enemy, EnemySkill } from "@/types/DB/Enemy";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { CurrentDB } from "@/libs/DB";
import EntitySource from "@/libs/EntitySource";
import { FormatNumber, isActive } from "@/libs/Functions";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import PopupBase from "@/components/popup/base";
import UnitBadge from "@/components/unit-badge";
import RarityBadge from "@/components/rarity-badge";
import ElemIcon from "@/components/elem-icon";
import StatIcon from "@/components/stat-icon";
import SkillBound from "@/components/skill-bound";
import SkillDescription from "@/components/skill-description";
import BuffList from "@/components/buff-list";
import AIList from "@/components/ai-list";
import SourceBadge from "@/components/source-badge";

import "./style.scss";

interface EnemyPopupProps {
	display?: boolean;
	level: number;
	enemy: FilterableEnemy | null;

	/**
	 * 이 값이 `true`라면 Family를 변경해도 주소가 변하지 않음
	 */
	asSub?: boolean;

	/**
	 * `사용에 주의`
	 *
	 * 팝업으로 표시하지 않고 인라인으로 표시함
	 */
	inline?: boolean;
	/**
	 * 같은 이름의 다른 적 그룹을 표시할지 여부
	 */
	noFamily?: boolean;
	/**
	 * 링크를 표시할지 여부
	 */
	noLink?: boolean;
	/**
	 * 레벨을 고정하고 변경하지 못하게 할지 여부
	 */
	noLevelChangable?: boolean;
	/**
	 * 등장 스테이지를 표시하지 않을지 여부
	 */
	noStages?: boolean;

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

	return <Loader json={ StaticDB.FilterableEnemy } content={ ((): preact.VNode => {
		if (!targetId.value && props.enemy) {
			targetId.set(props.enemy.id);
			displayTab.set("skill1");
		} else if (targetId.value && !props.enemy)
			targetId.set("");

		const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

		const target = props.enemy && FilterableEnemyDB.find(x => x.id === targetId.value) || null;
		// const isEWEnemy = target && /_EW[0-9]*$/.test(target.id);
		const isNEWEnemy = target && "NEW" in target.used;
		const isIW = targetEnemy.value && targetEnemy.value.category & 2;

		const targetStat: Enemy["stat"] | undefined = targetEnemy.value?.stat ?? undefined;

		const FamilyList = ((): SelectOption<string>[] => {
			if (!props.enemy) return [];

			const name = LocaleGet(`ENEMY_${props.enemy.id}`);
			return FilterableEnemyDB
				.filter(x => (LocaleGet(`ENEMY_${x.id}`) === name))
				.map((x, i) => ({
					value: x.id,
					// text: `${LocaleGet(`ENEMY_${x.id}`)} ${i + 1}`,
					text: `#${i + 1}`,
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

		function StatValue (stat: [number, number], format: false, floorPer?: boolean): number;
		function StatValue (stat: [number, number], format: true, floorPer?: boolean): string;
		function StatValue (stat: [number, number], format: boolean, floorPer: boolean = false): string | number {
			if (floorPer) {
				const v = Decimal.add(
					stat[0],
					Decimal.mul(Decimal.floor(stat[1]), level.value - 1),
				)
					.floor()
					.toNumber();

				if (format)
					return FormatNumber(v);
				return v;
			}
			const v = Decimal.add(stat[0], Decimal.mul(stat[1], level.value - 1))
				.floor()
				.toNumber();

			if (format)
				return FormatNumber(v);
			return v;
		}

		if (target) {
			const enemyKey = `enemy/${target.id}`;
			JsonLoaderCore(CurrentDB, enemyKey)
				.then(() => {
					const detail = GetJson<Enemy>(enemyKey);
					if (!detail) return;

					targetEnemy.set(detail);
				});
		} else if (targetEnemy.value)
			targetEnemy.set(null);

		const Skills = ((): Array<EnemySkill | undefined> => {
			if (!targetEnemy.value) return [];
			const enemy = targetEnemy.value;
			const list = enemy.skills
				.map(s => {
					console.log(s.key, s.leastGrade, enemy.rarity);
					if (s.leastGrade && enemy.rarity < s.leastGrade) return undefined;
					return s;
				});

			return list.least(6);
		})();

		function Description (skill: EnemySkill): string {
			if (!targetEnemy.value) return "";

			const table: Record<SKILL_ATTR, string> = {
				[SKILL_ATTR.PHYSICS]: "physics",
				[SKILL_ATTR.FIRE]: "fire",
				[SKILL_ATTR.ICE]: "ice",
				[SKILL_ATTR.LIGHTNING]: "lightning",
			};
			const elem = table[skill.buff.type];

			const k = `${skill.key}_DESC`;
			const r = LocaleGet(k, `<edmg rate="${skill.buff.rate}" type="${elem}" />`);
			return (r === k ? `<placeholder>${LocaleGet("ENEMY_SKILL_NO_DESCRIPTION")}</placeholder>` : r)
				.replace(/\. /g, ".\n");
		}

		const GetRates = (skill: EnemySkill): number[] => new Array(10).fill(
			targetStat
				? Decimal.mul(
					StatValue(targetStat.atk, false),
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

		const Sources = !props.noStages
			? ((): EntitySource[][] => {
				if (!target) return [];

				const ret: string[][] = [];

				Object.keys(target.used)
					.forEach(x => ret.push(target.used[x]));

				ret.forEach((x, i) => (ret[i] = x.unique()));
				return ret.map(x => x.map(y => new EntitySource(y)));
			})()
			: null;

		const BuffRates = ((): Record<string, number> => {
			const output: Record<string, number> = {};
			Skills.forEach(skill => {
				if (!skill) return null;
				const key = skill.key;
				output[key] = skill.buff.buff_rate;
			});
			return output;
		})();

		const popupContent = target
			? <>
				{ !props.noFamily && FamilyList.length > 1
					? <div class="mb-1">
						<div class="btn-group">
							{ FamilyList.map(x => <button
								class={ `btn btn-outline-danger ${isActive(targetId.value === x.value)}` }
								onClick={ (e): void => {
									targetId.set(x.value);
									if (!props.asSub)
										route(`/enemies/${x.value}`);
								} }
							>{ x.text }
							</button>) }
						</div>
					</div>
					: <></>
				}

				{ !props.noLink
					? <a href={ EnemyLink } class="text-secondary">
						<small>{ EnemyLink }</small>
					</a>
					: <></>
				}

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
							<td class={ BuildClass("bg-dark", "text-light") }>
								{ !props.noLevelChangable
									? <div class="input-group">
										<button class="btn btn-secondary" onClick={ (): void => level.set(1) }>
											<Icon icon="chevron-double-down" />
										</button>
										<button class="btn btn-secondary" onClick={ (): void => level.set(Math.max(1, level.value - 1)) }>
											<Icon icon="chevron-down" />
										</button>

										<div class="flex-1 font-exo2">
											<div class="input-prepend">Lv.</div>
											<input class="form-control ps-5" value={ level.value } onChange={ (e: Event): void => level.set(
												parseInt((e.target as HTMLInputElement).value, 10),
											) } />
										</div>

										<button class="btn btn-secondary" onClick={ (): void => level.set(Math.min(300, level.value + 1)) }>
											<Icon icon="chevron-up" />
										</button>
										<button class="btn btn-secondary" onClick={ (): void => level.set(100) }>
											<Icon icon="chevron-double-up" />
										</button>
									</div>
									:
									<div class="flex-1 font-exo2 level-fixed">
										Lv.
										<span>{ level.value }</span>
									</div>
								}
							</td>
						</tr>
						<tr>
							{ targetStat
								? <td class="bg-dark status-col p-0 pb-2">
									<table class="table table-borderless mb-0">
										<tbody>
											<tr class="text-center text-white resist-parent font-exo2">
												<td data-type="fire">
													<ElemIcon inline elem="fire" />
													<strong class="ps-1">{ targetStat.res.fire }%</strong>
												</td>
												<td data-type="ice">
													<ElemIcon inline elem="ice" />
													<strong class="ps-1">{ targetStat.res.chill }%</strong>
												</td>
												<td data-type="lightning">
													<ElemIcon inline elem="lightning" />
													<strong class="ps-1">{ targetStat.res.thunder }%</strong>
												</td>
											</tr>
										</tbody>
									</table>
									<table class="table table-borderless mb-0">
										<tbody>
											<tr>
												<td class="text-start">
													<StatIcon inline stat="HP" />
													<span class="status-col-head font-exo2">
														<Locale k="ENEMY_VIEW_STAT_HP" />
													</span>
												</td>
												<td>
													<div class="status-col-value font-exo2">
														{ StatValue(targetStat.hp, true, true) }
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
													<div class="status-col-value font-exo2">
														{ StatValue(targetStat.atk, true) }
													</div>
												</td>
												<td class="text-start">
													<StatIcon inline stat="DEF" />
													<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_DEF" /></span>
												</td>
												<td>
													<div class="status-col-value font-exo2">
														{ StatValue(targetStat.def, true) }
													</div>
												</td>
											</tr>

											<tr>
												<td class="text-start">
													<StatIcon inline stat="ACC" />
													<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_ACC" /></span>
												</td>
												<td>
													<div class="status-col-value font-exo2">{ FormatNumber(targetStat.acc) }%</div>
												</td>
												<td class="text-start">
													<StatIcon inline stat="EVA" />
													<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_EVA" /></span>
												</td>
												<td>
													<div class="status-col-value font-exo2">{ FormatNumber(targetStat.eva) }%</div>
												</td>
											</tr>

											<tr>
												<td class="text-start">
													<StatIcon inline stat="CRI" />
													<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_CRIT" /></span>
												</td>
												<td>
													<div class="status-col-value font-exo2">{ FormatNumber(targetStat.cri) }%</div>
												</td>
												<td class="text-start">
													<StatIcon inline stat="SPD" />
													<span class="status-col-head"><Locale k="ENEMY_VIEW_STAT_SPD" /></span>
												</td>
												<td>
													<div class="status-col-value font-exo2">{ FormatNumber(targetStat.spd) }</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								: <></>
							}
						</tr>
					</tbody>
				</table>

				{ targetEnemy.value
					? <>
						<div class="container">
							<div class="row row-cols-4 row-cols-md-8 enemy-display-tabs mt-1">
								{ Skills.map((skill, idx) => skill
									? <div
										class={ `col mt-1 ${displayTab.value === `skill${idx + 1}`
											? "border border-bottom-0"
											: "border-bottom"}` }
										role="button"
										onClick={ (): void => displayTab.set(`skill${idx + 1}`) }
									>
										<img
											class="skill-icon my-2"
											src={ `${skillIconBase}/${skill.icon.startsWith("P.") ? skill.icon.substring(2) : skill.icon}_${skill.passive ? "passive" : "active"}.${imageExt}` }
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
											<strong>
												<Locale plain k={ skill.key } />
											</strong>
											<small class="ms-1">Lv.1</small>

											<div class="float-md-end bg-dark ms-md-2 mt-2 mt-md-0 p-2 text-center">
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
														: <></>
													}
													{ skill.buff.target_ground
														? <span
															class="badge bg-danger me-1"
															title={ LocaleGet("ENEMY_SKILL_GRID_TARGET_TIP") }
														>
															<Locale k="ENEMY_SKILL_GRID_TARGET" />
														</span>
														: <></>
													}
													{ skill.buff.acc_bonus
														? <span class="badge bg-success me-1">
															<Locale k="ENEMY_SKILL_ACC_BONUS" />
															{ (skill.buff.acc_bonus > 0 ? "+" : "") + skill.buff.acc_bonus }%
														</span>
														: <></>
													}
													{ skill.delayed
														? <span class="badge bg-substory me-1">
															<Locale k="UNIT_SKILL_DELAYED" />
														</span>
														: <></>
													}
													{ !skill.buff.enabled
														? <span class="badge bg-secondary me-1">
															<Locale k="UNIT_SKILL_DISABLED" />
														</span>
														: <></>
													}
												</div>
												<hr class="my-1" />

												<div class="break-keep white-pre-line">
													<SkillDescription
														text={ Description(skill) }
														rates={ GetRates(skill) }
														level={ 0 }
														slot={ idx.toString() }
														buffBonus={ false }
														favorBonus={ false }
														skillBonus={ 0 }
													/>
												</div>
											</div>

											{ BuffRates[skill.key] !== 100
												? <div class="mt-3">
													<span class="badge bg-danger">
														<Locale k="UNIT_SKILL_BUFF_RATE" p={ [BuffRates[skill.key]] } />
													</span>
													<small class="text-secondary ms-1">
														<Locale k="UNIT_SKILL_BUFF_RATE_DESC" />
													</small>
												</div>
												: <></>
											}

											<div class="clearfix" />
											<hr />

											{ buffList[skill.key].length > 0
												? <BuffList list={ buffList[skill.key] } dummy />
												: <></>
											}
										</div>
									</div>
									: <></>)
							}
							{ displayTab.value === "ai"
								? <div class="row">
									<div class="col border border-top-0 text-start p-3">
										{ targetEnemy.value.ai
											? <AIList aiKey={ targetEnemy.value.ai } enemy />
											: <>Not ready yet</>
										}
									</div>
								</div>
								: <></>
							}
							{ displayTab.value === "desc"
								? <div class="row">
									<div class="col break-keep white-pre-line border border-top-0 text-start p-1">
										<div class="bg-dark text-light p-3">
											<Locale plain k={ `ENEMY_INTRO_${target.id}` } />
										</div>
									</div>
								</div>
								: <></>
							}
						</div>

						{ !props.noStages && Sources
							? <div class="card border text-center my-3" >
								<div class="card-header">
									<Locale k="ENEMY_VIEW_STAGE" />
								</div>
								<div class="card-body p-2">
									{ Sources.map((area, aindex) => <div>
										{ aindex > 0 ? <hr class="my-2" /> : <></> }
										{ area.length > 0
											? area[0].IsEvent
												? <h6 style="font-weight: bold">
													<Locale k={ area[0].EventName } />
												</h6>
												: area[0].IsChallenge
													? <h6 style="font-weight: bold">
														<Locale k={ `COMMON_CHALLENGE_${area[0].ChallengeName}` } />
													</h6>
													: area[0].IsSubStory
														? <h6 style="font-weight: bold">
															<Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />
														</h6>
														: area[0].IsNewEternalWar
															? <h6 style="font-weight: bold">
																<Locale k="COMMON_SOURCE_NEW" />
															</h6>
															: <></>
											: <></>
										}

										{ area.map(source => <SourceBadge class="my-1" source={ source } linked />) }
									</div>) }
									{/* { isEWEnemy
									? <>
										{ Sources.length > 0 ? <hr class="my-2" /> : <></> }
										<span class="badge bg-dark text-light">
											<Locale k="ENEMY_VIEW_EW" />
										</span>
									</>
									: Object.keys(Sources).length === 0
										? <div class="secondary">
											<Locale k="ENEMY_VIEW_STAGE_NONE" />
										</div>
										: <></>
								} */}
									{ Object.keys(Sources).length === 0
										? <div class="secondary">
											<Locale k="ENEMY_VIEW_STAGE_NONE" />
										</div>
										: <></>
									}
								</div>
							</div>
							: <></>
						}
					</>
					: <></>
				}
			</>
			: <></>;

		if (props.inline) {
			return <div class="enemy-inline">
				{ target
					? <div class="text-start">
						<Locale k={ `ENEMY_${target.id}` } />
						{/* { isEWEnemy
						? <span class="badge bg-warning text-dark ms-2">
							<Locale k="ENEMY_VIEW_EW" />
						</span>
						: <></>
					} */}
						{ isNEWEnemy
							? <span class="badge bg-dark ms-2">
								<Locale k="ENEMY_NEW_ETERNALWAR" />
							</span>
							: <></>
						}
						{ target.category & 1
							? <span class="badge bg-danger ms-2 font-exo2">BOSS</span>
							: <></>
						}
						{ target.category & 2
							? <span class="badge bg-event-exchange ms-2 font-exo2">
								<Locale k="ENEMY_IW" />
							</span>
							: <></>
						}
						<div style="font-size: 60%">{ target.id }</div>
					</div>
					: <></>
				}
				{ popupContent }
			</div>;
		}

		return <PopupBase
			class="enemy-modal text-center"
			bodyClass="pb-0"
			display={ props.display && target !== null }
			size="xl"
			header={ target
				? <div class="text-start">
					<Locale k={ `ENEMY_${target.id}` } />
					{/* { isEWEnemy
						? <span class="badge bg-warning text-dark ms-2">
							<Locale k="ENEMY_VIEW_EW" />
						</span>
						: <></>
					} */}
					{ isNEWEnemy
						? <span class="badge bg-dark ms-2">
							<Locale k="ENEMY_NEW_ETERNALWAR" />
						</span>
						: <></>
					}
					{ target.category & 1
						? <span class="badge bg-danger ms-2 font-exo2">BOSS</span>
						: <></>
					}
					{ target.category & 2
						? <span class="badge bg-event-exchange ms-2 font-exo2">
							<Locale k="ENEMY_IW" />
						</span>
						: <></>
					}
					<div style="font-size: 60%">{ target.id }</div>
				</div>
				: <></>
			}
			onHidden={ (): void => {
				if (!props.asSub && window.location.pathname !== "/enemies")
					route("/enemies");

				if (props.onHidden)
					props.onHidden();

				targetId.set("");
			} }
		>
			{ popupContent }
		</PopupBase >;
	}) } />;
};
export default EnemyPopup;
