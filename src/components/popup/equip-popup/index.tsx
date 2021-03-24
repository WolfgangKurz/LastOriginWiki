import { Fragment, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";
import Decimal from "decimal.js";

import { ACTOR_GRADE, ITEM_GRADE, ITEM_TYPE } from "@/types/Enums";
import { SelectOption } from "@/types/Helper";
import { BuffStat } from "@/types/Buffs";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Equip } from "@/types/DB/Equip";

import JsonLoader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/JsonLoader";
import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, RarityDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";
import UnitBadge from "@/components/unit-badge";
import SourceBadge from "@/components/source-badge";
import BuffList from "@/components/buff-list";
import RarityBadge from "@/components/rarity-badge";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";

import "./style.scss";

interface EquipLevelProps {
	level: number | string;
	size?: number;
}

const EquipLevel: FunctionalComponent<EquipLevelProps> = (props) => {
	const lv = ((): number => {
		if (typeof props.level === "string") {
			const p = parseInt(props.level, 10);
			if (isNaN(p) || p <= 0) return 0;
			return p;
		}
		return props.level;
	})();
	return lv > 0
		? <div class="equip-level" style={ { fontSize: `${props.size || 20}px` } }>+{ lv }</div>
		: <Fragment />;
};

type EquipLevelType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface EquipPopupProps {
	display?: boolean;
	equip: FilterableEquip | null;

	/** 그룹의 장비가 모두 표시될지 여부, 기본 `true` */
	fullGroup?: boolean;

	/**
	 * 이 값이 `true`라면 Family를 변경해도 주소가 변하지 않음
	 */
	asSub?: boolean;

	onHidden?: () => void;
}

const EquipPopup: FunctionalComponent<EquipPopupProps> = (props) => {
	const imageExt = ImageExtension();

	const level = objState<EquipLevelType>(10);
	const rarity = objState<ITEM_GRADE>(ACTOR_GRADE.SS);

	const displayTab = objState<"info" | "drop" | "upgrade">("info");

	const StatusList = objState<BuffStat[]>([]);

	return JsonLoader(
		[
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
		],
		() => {
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);

			const target = ((): FilterableEquip | null => {
				const equip = props.equip;
				if (!equip) return null;

				const specific = FilterableEquipDB.find(x => x.type === equip.type && x.key === equip.key && x.rarity === rarity.value);
				if (specific) return specific;

				const found = FilterableEquipDB.filter(x => x.type === equip.type && x.key === equip.key);
				if (found.length === 0) return null;

				const eq = found.sort((a, b) => (b.rarity - a.rarity))[0];
				rarity.set(eq.rarity);
				return eq;
			})();

			const isUninstalled: boolean = target !== null && !target.available;
			const isRoguelike: boolean = target !== null && target.roguelike;
			const isExclusive: boolean = target !== null && target.limit !== null && target.limit.every(y => typeof y === "number");

			const EquipType = ((): preact.VNode => {
				if (!props.equip) return <Fragment>???</Fragment>;

				const table: Record<ITEM_TYPE, string> = {
					[ITEM_TYPE.CHIP]: "EQUIP_FILTER_TYPE_CHIP",
					[ITEM_TYPE.SPCHIP]: "EQUIP_FILTER_TYPE_OS",
					[ITEM_TYPE.SUBEQ]: "EQUIP_FILTER_TYPE_ITEM",
					[ITEM_TYPE.CONSUMABLE]: "",
					[ITEM_TYPE.MATERIAL]: "",
					[ITEM_TYPE.PCITEM]: "",
				};

				const type = props.equip.type;
				return <Locale k={ table[type] } fallback="???" />;
			})();

			const RarityList = ((): SelectOption<ITEM_GRADE>[] => {
				const equip = props.equip;
				if (!equip) return [];

				return FilterableEquipDB
					.filter(x => x.key === equip.key && x.type === equip.type)
					.map(x => ({
						value: x.rarity,
						text: RarityDisplay[x.rarity],
					}));
			})();

			const Limits = target
				? target.limit
					? target.limit.map(x => {
						const unit = FilterableUnitDB.find(y => y.uid === x);
						if (unit) return { id: x, unit };
						return { id: x };
					})
					: []
				: [{ id: "???" }];

			function ReservedLimit (limit: string): boolean {
				const list = [
					"Attacker", "Defender", "Supporter",
					"Light", "Air", "Heavy",
				];
				return list.includes(limit) || (limit.includes("+") && limit.split("+").some(x => list.includes(x)));
			}

			if (target) {
				const equipKey = `equip/${target.fullKey}`;
				JsonLoaderCore(equipKey)
					.then(() => {
						const detail = GetJson<Equip>(equipKey);
						if (!detail) return;

						const stat = detail.stats[level.value];
						StatusList.set(stat);
					});
			} else if (StatusList.value.length > 0)
				StatusList.set([]);

			const CraftTime = ((): string => {
				const duration = target?.craft;
				if (!duration) return "-";

				const h = Math.floor(duration / 3600);
				const m = Math.floor(duration / 60) % 60;
				const s = duration % 60;
				return `${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)}`;
			})();


			/** 1 레벨 강화당 상승하는 필요치 배율 */
			const UpgradeIncrementals: Record<ITEM_GRADE, Decimal> = {
				[ACTOR_GRADE.B]: Decimal.div(3, 4),
				[ACTOR_GRADE.A]: Decimal.div(5, 6),
				[ACTOR_GRADE.S]: Decimal.div(7, 10),
				[ACTOR_GRADE.SS]: Decimal.div(11, 20),
				[ACTOR_GRADE.SSS]: new Decimal(0),
			};

			function UpgradeCost (level: number, sum: boolean = false): number {
				if (!target) return 0;

				const base = target.upgrade;
				const per = UpgradeIncrementals[rarity.value];

				if (sum) {
					let v = new Decimal(0);
					for (let i = 1; i <= level; i++)
						v = v.add(UpgradeCost(i, false));

					return v
						.floor()
						.toNumber();
				}
				return Decimal.mul(per, level - 1)
					.add(1)
					.mul(base)
					.floor()
					.toNumber();
			}

			const UpgradeCostText = (level: number, sum: boolean = false): string => FormatNumber(UpgradeCost(level, sum));

			const iconType: Record<ITEM_TYPE, string> = {
				[ITEM_TYPE.CHIP]: "Chip",
				[ITEM_TYPE.SPCHIP]: "OS",
				[ITEM_TYPE.SUBEQ]: "Item",
				[ITEM_TYPE.PCITEM]: "",
				[ITEM_TYPE.CONSUMABLE]: "",
				[ITEM_TYPE.MATERIAL]: "",
			};

			return <PopupBase
				class="equip-modal"
				bodyClass="pb-0"
				display={ props.display && target !== null }
				header={ target
					? <Fragment>
						<div class="row">
							<div class="col-auto">
								<img
									class="equip-rarity-icon"
									src={ `${AssetsRoot}/icons/Item_${iconType[target.type]}${RarityDisplay[target.rarity]}.png` }
								/>
							</div>
							<div class="col text-left">
								<Locale k={ `EQUIP_${target.fullKey}` } />
								<div style="font-size: 60%">{ target.fullKey }</div>
							</div>
						</div>
					</Fragment>
					: <Fragment />
				}
				onHidden={ (): void => {
					if (!props.asSub && window.location.pathname !== "/equips")
						route("/equips");

					if (props.onHidden)
						props.onHidden();
				} }
			>
				{ target
					? <Fragment>
						<div class="container table-equip-modal mb-3 text-center">
							<div class="row row-cols-1 row-cols-md-2">
								<div class="col icon-container">
									<div class="position-relative d-inline-block">
										<EquipIcon image={ `${target.icon}` } size="large" />
										<EquipLevel level={ level.value } />
									</div>
								</div>
								<div class="col nested">
									<div class="row row-cols-2">
										<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_TYPE" /></div>
										<div class="col">
											{ isUninstalled
												? <span class="badge bg-dark"><Locale k="EQUIP_VIEW_TYPE_NOT_IMPLEMENTED" /></span>
												: <Fragment />
											}
											{ isRoguelike
												? <span class="badge bg-warning text-dark"><Locale k="EQUIP_VIEW_TYPE_ROGUELIKE" /></span>
												: <Fragment />
											}
											{ isExclusive
												? <span class="badge bg-primary"><Locale k="EQUIP_VIEW_TYPE_EXCLUSIVE" /></span>
												: <Fragment />
											}
											<div>
												<span class="badge bg-success">{ EquipType }</span>
											</div>
										</div>
										<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_GRADE" /></div>
										<div class="col">
											{ RarityList.length === 1 || (props.asSub && !props.fullGroup)
												? <RarityBadge rarity={ rarity.value } />
												:
												<select
													class="form-select form-select-sm"
													value={ rarity.value }
													onChange={ (e): void => rarity.set(
														parseInt((e.target as HTMLSelectElement).value, 10) as ITEM_GRADE,
													) }
												>
													{ RarityList.map(item => <option value={ item.value }>{ item.text }</option>) }
												</select>
											}
										</div>
										<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_LIMIT" /></div>
										<div class="col">
											{ Limits.length === 0
												? <span class="text-secondary"><Locale k="EQUIP_VIEW_LIMIT_NOT" /></span>
												: Limits.map(limit => <span>
													{ ReservedLimit(limit.id)
														? <UnitBadge limit={ limit.id } />
														: limit.unit
															? <Link href={ `/units/${limit.id}` } >
																<BootstrapTooltip
																	placement="top"
																	content={ <UnitCard.Card
																		unit={ limit.unit }
																		rarity={ limit.unit.rarity }
																		no-link
																	/> }
																>
																	<span class="badge bg-primary mx-1">
																		<Locale k={ `UNIT_${limit.id}` } />
																		<Icon icon="link-45deg" class="ms-1" />
																	</span>
																</BootstrapTooltip>
																<div class="preload-area">
																	<UnitFace uid={ limit.id } />
																</div>
															</Link>
															: <span class="badge bg-info">{ limit.id }</span>
													}
												</span>)
											}
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col break-keep white-pre-line">
									<Locale k={ `EQUIP_DESC_${target.fullKey}` } />
								</div>
							</div>
						</div>

						<ul class="nav nav-tabs equip-display-tabs mt-2">
							<li class="nav-item">
								<a
									class={ `nav-link ${isActive(displayTab.value === "info")} text-dark` }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										displayTab.set("info");
									} }
								>
									<Icon icon="receipt" class="me-1" />
									<Locale k="EQUIP_VIEW_EFFECT" />
								</a>
							</li>
							<li class="nav-item">
								<a
									class={ `nav-link ${isActive(displayTab.value === "drop")} text-dark` }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										displayTab.set("drop");
									} }
								>
									<Icon icon="basket-fill" class="me-1" />
									<Locale k="EQUIP_VIEW_SOURCE" />
								</a>
							</li>
							<li class="nav-item">
								<a
									class={ `nav-link ${isActive(displayTab.value === "upgrade")} text-dark` }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										displayTab.set("upgrade");
									} }
								>
									<Icon icon="cpu-fill" class="me-1" />
									<Locale k="EQUIP_VIEW_COST" />
								</a>
							</li>
						</ul>
						<div class="mb-3">
							{ displayTab.value === "info"
								? <Fragment>
									<table class="table table-bordered table-fixed text-center mb-0">
										<tbody>
											<tr>
												<th class="bg-dark text-light">
													<Locale k="EQUIP_VIEW_EFFECT_LEVEL" p={ [level.value] } />
												</th>
											</tr>
											<tr>
												<td>
													<input
														class="form-range"
														type="range"
														min="0"
														max="10"
														value={ level.value }
														onInput={ (e): void => level.set(
															parseInt((e.target as HTMLInputElement).value, 10) as EquipLevelType,
														) }
													/>
												</td>
											</tr>
										</tbody>
									</table>

									{ StatusList ? <BuffList list={ StatusList.value } /> : <Fragment /> }
								</Fragment>
								: <Fragment />
							}
							{ displayTab.value === "drop"
								? <div class="container">
									<div class="row">
										<div class="col text-center pt-2">
											{ target.source.length === 0 && !target.craft
												? <span class="text-secondary">
													<Locale k="UNIT_VIEW_DROPS_EMPTY" />
												</span>
												: <Fragment>
													{ target.craft
														? <span class="badge bg-dark my-1">
															<Icon icon="hammer" class="me-1" />
															<Locale k="UNIT_VIEW_DROPS_CREATIONTIME" />
															<span class="ms-1">{ CraftTime }</span>
														</span>
														: <Fragment />
													}

													{ target.source.map((area, aindex) => <div>
														{ target.craft || aindex > 0 ? <hr class="my-1" /> : <Fragment /> }
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
												</Fragment>
											}
										</div>
									</div>
								</div>
								: <Fragment />
							}
							{ displayTab.value === "upgrade"
								? <table class="table table-bordered text-center">
									<tbody>
										<tr>
											<th class="bg-dark text-light"><Locale k="EQUIP_VIEW_COST_LEVEL" /></th>
											<th class="bg-dark text-light"><Locale k="EQUIP_VIEW_COST_COST" /></th>
											<th class="bg-dark text-light">
												<img
													class="upmodule-icon"
													src={ `${AssetsRoot}/${imageExt}/item/UI_Icon_Equip_ChipSet_T4.${imageExt}` }
												/>
											</th>
											<th class="bg-dark text-light"><Locale k="EQUIP_VIEW_COST_TOTALCOST" /></th>
											<th class="bg-dark text-light">
												<img
													class="upmodule-icon"
													src={ `${AssetsRoot}/${imageExt}/item/UI_Icon_Equip_ChipSet_T4.${imageExt}` }
												/>
											</th>
										</tr>
										{ new Array(10)
											.fill(0)
											.map((_, lv) => <tr>
												<th class="bg-dark text-light">+{ lv + 1 }</th>
												<td>{ UpgradeCostText(lv + 1) }</td>
												<td>
													<span class="text-secondary">x</span>
													{ Math.ceil(UpgradeCost(lv + 1) / 400) }
												</td>
												<td>{ UpgradeCostText(lv + 1, true) }</td>
												<td>
													<span class="text-secondary">x</span>
													{ Math.ceil(UpgradeCost(lv + 1, true) / 400) }
												</td>
											</tr>)
										}
									</tbody>
								</table>
								: <Fragment />
							}
						</div>
					</Fragment>
					: <Fragment />
				}
			</PopupBase>;
		},
		<Fragment />,
	);
};
export default EquipPopup;
