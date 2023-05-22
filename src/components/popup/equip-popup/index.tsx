import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import Decimal from "decimal.js";

import { ACTOR_GRADE, ITEM_GRADE, ITEM_TYPE } from "@/types/Enums";
import { SelectOption } from "@/types/Helper";
import { BuffStat } from "@/types/Buffs";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { Equip } from "@/types/DB/Equip";

import { useUpdate } from "@/libs/hooks";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { CurrentDB } from "@/libs/DB";
import { FormatNumber, isActive } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";
import EquipLevel from "@/components/equip-level";
import EquipCard from "@/components/equip-card";
import ItemIcon from "@/components/item-icon";
import UnitBadge from "@/components/unit-badge";
import SourceBadge from "@/components/source-badge";
import BuffList from "@/components/buff-list";
import RarityBadge from "@/components/rarity-badge";
import UnitLink from "@/components/unit-link";

import "./style.scss";

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
	const update = useUpdate();

	const [latestUid, setLatestUid] = useState<string>("");

	const [level, setLevel] = useState<EquipLevelType>(10);
	const [rarity, setRarity] = useState<ITEM_GRADE>(ACTOR_GRADE.SS);

	const [displayTab, setDisplayTab] = useState<"info" | "drop" | "enchant" | "upgrade">("info");

	const [costChecks, setCostChecks] = useState<boolean[]>(new Array(10).fill(true));

	const [StatusList, setStatusList] = useState<BuffStat[]>([]);

	if ((latestUid && !props.equip) || (props.equip && latestUid !== props.equip.fullKey)) {
		if (props.equip) {
			setLatestUid(props.equip.fullKey);

			setLevel(10);
			setRarity(props.equip.rarity);
			setCostChecks(new Array(10).fill(true));
		} else
			setLatestUid("");
	}

	const FilterableUnitDB = GetJson<FilterableUnit[] | null>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());

	const FilterableEquipDB = GetJson<FilterableEquip[] | null>(StaticDB.FilterableEquip);
	if (!FilterableEquipDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEquip).then(() => update());

	const ConsumableDB = GetJson<Consumable[] | null>(StaticDB.Consumable);
	if (!ConsumableDB) JsonLoaderCore(CurrentDB, StaticDB.Consumable).then(() => update());

	const target = ((): FilterableEquip | null => {
		if (!FilterableEquipDB) return null;

		const equip = props.equip;
		if (!equip) return null;

		const specific = FilterableEquipDB.find(x => x.type === equip.type && x.key === equip.key && x.rarity === rarity);
		console.log(!!specific, equip.type, equip.key, equip.rarity, rarity);
		if (specific) return specific;

		const found = FilterableEquipDB.filter(x => x.type === equip.type && x.key === equip.key);
		if (found.length === 0) return null;

		const eq = found.sort((a, b) => (b.rarity - a.rarity))[0];
		setRarity(eq.rarity);
		return eq;
	})();

	const targetT4 = ((): FilterableEquip | null => {
		if (!target) return null;
		if (target.rarity !== ACTOR_GRADE.SSS) return null;
		if (!FilterableEquipDB) return null; // unexpected

		return FilterableEquipDB.find(x => x.type === target.type && x.key === target.key && x.rarity === ACTOR_GRADE.SS) || null;
	})();

	useEffect(() => {
		if (!props.asSub && target) {
			const to = `/equips/${target.fullKey}`;
			if (to !== window.location.pathname)
				route(to);
		}
	}, [props.asSub, target?.fullKey]);

	const isUninstalled: boolean = target !== null && !target.available;
	const isRoguelike: boolean = target !== null && target.roguelike;
	const isExclusive: boolean = target !== null && target.limit !== null && target.limit.every(y => typeof y === "number");

	const EquipType = ((): preact.VNode => {
		if (!props.equip) return <>???</>;

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
			? FilterableEquipDB
				.filter(x => x.key === equip.key && x.type === equip.type)
				.map(x => ({
					value: x.rarity,
					text: RarityDisplay[x.rarity],
				}))
			: [];
	})();

	const Limits = target
		? target.limit
			? target.limit.map(x => {
				const unit = FilterableUnitDB && FilterableUnitDB.find(y => y.uid === x);
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
		JsonLoaderCore(CurrentDB, equipKey)
			.then(() => {
				const detail = GetJson<Equip>(equipKey);
				if (!detail) return;

				const stat = detail.stats[level];
				setStatusList(stat);
			});
	} else if (StatusList.length > 0)
		setStatusList([]);

	const CraftTime = ((): string => {
		const duration = target?.craft;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)}`;
	})();

	const UpgradeCostTable = ((): preact.VNode[][] => {
		if (!target) return [];

		const maxCols = Math.max(...target.upgrade.enchant.map(y => y.item.length));
		const ret: preact.VNode[][] = [];

		const sums = new Array(maxCols + 1)
			.fill(0)
			.map(_ => new Decimal(0));

		target.upgrade.enchant.forEach((v, i) => {
			if (costChecks[i])
				sums[0] = sums[0].add(v.res);

			ret[i] = [
				<span class="font-exo2">{ FormatNumber(v.res) }</span>,
				...v.item.map((y, j) => {
					if (costChecks[i])
						sums[j + 1] = sums[j + 1].add(y.count);

					const item = ConsumableDB && ConsumableDB.find(z => z.key === y.item);
					const icon = item ? <ItemIcon item={ item.icon } /> : <>???</>;

					return <BootstrapTooltip
						placement="top"
						content={ <Locale k={ `CONSUMABLE_${y.item}` } /> }
					>
						<span class="badge bg-warning text-dark cost-badge">
							{ icon } x{ FormatNumber(y.count) }
						</span>
					</BootstrapTooltip>;
				}),
				...new Array(maxCols - v.item.length).fill(<></>),
			];
		});
		ret[10] = [
			<span class="font-exo2">{ FormatNumber(sums[0].toNumber()) }</span>,
			...target.upgrade.enchant[target.upgrade.enchant.length - 1].item.map((y, j) => {
				const item = ConsumableDB && ConsumableDB.find(z => z.key === y.item);
				const icon = item ? <ItemIcon item={ item.icon } /> : <>???</>;

				return <BootstrapTooltip
					placement="top"
					content={ <Locale k={ `CONSUMABLE_${y.item}` } /> }
				>
					<span class="badge bg-warning text-dark cost-badge">
						{ icon } x{ FormatNumber(sums[j + 1].toNumber()) }
					</span>
				</BootstrapTooltip>;
			}),
		];
		return ret;
	})();

	const iconType: Record<ITEM_TYPE, string> = {
		[ITEM_TYPE.CHIP]: "Chip",
		[ITEM_TYPE.SPCHIP]: "OS",
		[ITEM_TYPE.SUBEQ]: "Item",
		[ITEM_TYPE.PCITEM]: "",
		[ITEM_TYPE.CONSUMABLE]: "",
		[ITEM_TYPE.MATERIAL]: "",
	};

	const GetFullKey = (type: ITEM_TYPE, key: string, rarity: ITEM_GRADE): string => {
		const typeTable: Record<ITEM_TYPE, string> = {
			[ITEM_TYPE.CHIP]: "Chip",
			[ITEM_TYPE.SPCHIP]: "System",
			[ITEM_TYPE.SUBEQ]: "Sub",
			[ITEM_TYPE.CONSUMABLE]: "_",
			[ITEM_TYPE.MATERIAL]: "_",
			[ITEM_TYPE.PCITEM]: "_",
		};

		return `${typeTable[type]}_${key}_T${rarity - 1}`;
	};

	const RenderDrops = (target: FilterableEquip | null) => {
		if (!target) return <></>;

		return target.source.length === 0 && !target.craft
			? <span class="text-secondary">
				<Locale k="UNIT_VIEW_DROPS_EMPTY" />
			</span>
			: <>
				{ target.craft
					? <span class="badge bg-dark my-1">
						<h6 class="m-0 p-0">
							<Icon icon="hammer" class="me-1" />

							<strong>
								<span class="ps-1 pe-3">
									<Locale k="UNIT_VIEW_DROPS_CREATIONTIME" />
								</span>
								<span class="font-exo2">{ CraftTime }</span>
							</strong>
						</h6>
					</span>
					: <></>
				}

				{ target.source.map((area, aindex) => <div>
					{ target.craft || aindex > 0 ? <hr class="my-1" /> : <></> }
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
								: <></>
					}

					{ area.map(source => <SourceBadge class="my-1" source={ source } linked />) }
				</div>) }
			</>;
	};

	return <PopupBase
		class="equip-modal"
		bodyClass="pb-0"
		size="lg"
		display={ props.display && target !== null }
		header={ target
			? <>
				<div class="row">
					<div class="col-auto">
						<img
							class="equip-rarity-icon"
							src={ `${AssetsRoot}/icons/Item_${iconType[target.type]}${RarityDisplay[target.rarity]}.png` }
						/>
					</div>
					<div class="col text-start">
						<Locale plain k={ `EQUIP_${target.fullKey}` } />
						<div style="font-size: 60%">{ target.fullKey }</div>
					</div>
				</div>
			</>
			: <></>
		}
		onHidden={ (): void => {
			if (!props.asSub && window.location.pathname !== "/equips")
				route("/equips");

			if (props.onHidden)
				props.onHidden();
		} }
	>
		{ target
			? <>
				<div class="container table-equip-modal mb-3 text-center">
					<div class="row row-cols-1 row-cols-md-2">
						<div class="col icon-container">
							<div class="position-relative d-inline-block">
								<EquipIcon image={ `${target.icon}` } size="large" />
								<EquipLevel level={ level } />
							</div>
						</div>
						<div class="col nested">
							<div class="row row-cols-2">
								<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_TYPE" /></div>
								<div class="col badge-container">
									{ isUninstalled
										? <span class="badge bg-dark"><Locale k="EQUIP_VIEW_TYPE_NOT_IMPLEMENTED" /></span>
										: <></>
									}
									{ isRoguelike
										? <span class="badge bg-warning text-dark"><Locale k="EQUIP_VIEW_TYPE_ROGUELIKE" /></span>
										: <></>
									}
									{ isExclusive
										? <span class="badge bg-primary"><Locale k="EQUIP_VIEW_TYPE_EXCLUSIVE" /></span>
										: <></>
									}
									<div>
										<span class="badge bg-success">{ EquipType }</span>
									</div>
								</div>
								<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_GRADE" /></div>
								<div class="col">
									{ RarityList.length === 1 || (props.asSub && !props.fullGroup)
										? <RarityBadge rarity={ rarity } />
										: <select
											class="form-select form-select-sm font-exo2"
											value={ rarity }
											onChange={ (e): void => setRarity(
												parseInt((e.target as HTMLSelectElement).value, 10) as ITEM_GRADE,
											) }
										>
											{ RarityList.map(item => <option value={ item.value }>{ item.text }</option>) }
										</select>
									}
								</div>
								<div class="col bg-dark text-light"><Locale k="EQUIP_VIEW_LIMIT" /></div>
								<div class="col badge-container">
									{ Limits.length === 0
										? <span class="text-secondary"><Locale k="EQUIP_VIEW_LIMIT_NOT" /></span>
										: Limits.map(limit => <span>
											{ ReservedLimit(limit.id)
												? <UnitBadge limit={ limit.id } />
												: <UnitLink uid={ limit.id } />
											}
										</span>)
									}
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col bg-dark text-light white-pre-line" style={ { wordBreak: "keep-all" } }>
							{ ParseDescriptionText(LocaleGet(`EQUIP_DESC_${target.fullKey}`)) }
						</div>
					</div>
				</div>

				<ul class="nav nav-tabs equip-display-tabs mt-2">
					<li class="nav-item">
						<a
							class={ `nav-link ${isActive(displayTab === "info")} text-dark` }
							href="#"
							onClick={ (e): void => {
								e.preventDefault();
								setDisplayTab("info");
							} }
						>
							<Icon icon="receipt" class="me-1" />
							<Locale k="EQUIP_VIEW_EFFECT" />
						</a>
					</li>
					<li class="nav-item">
						<a
							class={ `nav-link ${isActive(displayTab === "drop")} text-dark` }
							href="#"
							onClick={ (e): void => {
								e.preventDefault();
								setDisplayTab("drop");
							} }
						>
							<Icon icon="basket-fill" class="me-1" />
							<Locale k="EQUIP_VIEW_SOURCE" />
						</a>
					</li>
					<li class="nav-item">
						<a
							class={ `nav-link ${isActive(displayTab === "enchant")} text-dark` }
							href="#"
							onClick={ (e): void => {
								e.preventDefault();
								setDisplayTab("enchant");
							} }
						>
							<Icon icon="cpu-fill" class="me-1" />
							<Locale k="EQUIP_VIEW_COST" />
						</a>
					</li>
					<li class="nav-item">
						<a
							class={ `nav-link ${isActive(displayTab === "upgrade")} text-dark` }
							href="#"
							onClick={ (e): void => {
								e.preventDefault();
								setDisplayTab("upgrade");
							} }
						>
							<Icon icon="capslock-fill" class="me-1" />
							<Locale k="EQUIP_VIEW_PROMOTION" />
						</a>
					</li>
				</ul>
				<div class="mb-3">
					{ displayTab === "info" &&
						<>
							<table class="table table-bordered table-fixed text-center mb-0">
								<tbody>
									<tr>
										<th class="bg-dark text-light">
											<Locale
												k="EQUIP_VIEW_EFFECT_LEVEL"
												p={ [<span class="font-exo2">{ level }</span>] }
											/>
										</th>
									</tr>
									<tr>
										<td>
											<input
												class="form-range"
												type="range"
												min="0"
												max="10"
												value={ level }
												onInput={ (e): void => setLevel(
													parseInt((e.target as HTMLInputElement).value, 10) as EquipLevelType,
												) }
											/>
										</td>
									</tr>
								</tbody>
							</table>

							{ StatusList && <BuffList class="mt-2" list={ StatusList } dummy /> }
						</>
					}
					{ displayTab === "drop" &&
						<div class="container">
							<div class="row">
								<div class="col text-center pt-2">
									{ RenderDrops(target) }

									{ target.rarity === ACTOR_GRADE.SSS
										? <div class="alert alert-warning mt-3 p-1 pb-2">
											<div class="alert alert-light mb-3 p-1">
												<Locale
													k="EQUIP_VIEW_SOURCE_T4"
													p={ [<Locale
														plain
														k={ `EQUIP_${GetFullKey(target.type, target.key, ACTOR_GRADE.SSS)}` }
													/>] }
												/>
											</div>
											{ RenderDrops(targetT4) }
										</div>
										: <></>
									}
								</div>
							</div>
						</div>
					}
					{ displayTab === "enchant" &&
						<table class="table table-bordered text-center">
							<tbody>
								<tr>
									<th class="bg-dark text-light">
										<Locale k="EQUIP_VIEW_COST_LEVEL" />
									</th>
									<th class="bg-dark text-light">
										<img class="res-icon" src={ `${AssetsRoot}/res-component.png` } />
										<img class="res-icon" src={ `${AssetsRoot}/res-nutrition.png` } />
										<img class="res-icon" src={ `${AssetsRoot}/res-power.png` } />
									</th>
									<th class="bg-dark text-light" colSpan={ UpgradeCostTable[0].length - 1 }>
										<Locale k="EQUIP_VIEW_COST_CONSUMABLE" />
									</th>
								</tr>
								{ UpgradeCostTable.map((row, lv) => <tr>
									<th class="bg-dark text-light">
										{ lv < 10
											? <span class="font-exo2">
												<input
													class="me-2"
													type="checkbox"
													checked={ costChecks[lv] }
													onClick={ (): void => {
														const arr = [...costChecks];
														arr[lv] = !arr[lv];
														setCostChecks(arr);
													} }
												/>
												Lv.{ lv + 1 }
											</span>
											: <Locale k="EQUIP_VIEW_COST_TOTALCOST" />
										}
									</th>
									{ row.map(col => <td>{ col }</td>) }
								</tr>) }
							</tbody>
						</table>
					}
					{ displayTab === "upgrade" &&
						<div class="p-4">
							{ target.upgrade.upgrade === null
								? <span class="text-secondary">
									<Locale k="EQUIP_VIEW_PROMOTION_EMPTY" />
								</span>
								: <>
									<div class="p-2">
										{ target.upgrade.upgrade.cost.map(e => {
											const item = ConsumableDB && ConsumableDB.find(c => c.key === e.item);
											if (!item) return <>-</>;

											return <span class="badge bg-dark me-1 mb-1">
												<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
												<Locale k={ `CONSUMABLE_${item.key}` } />
												&nbsp;x{ FormatNumber(e.count) }
											</span>;
										}) }
									</div>
									<div>
										<Icon icon="arrow-down-circle-fill" />
									</div>
									<div class="p-2">
										{ (() => {
											const found = FilterableEquipDB && FilterableEquipDB.find(x => x.fullKey === target.upgrade.upgrade!.to);
											return found
												? <EquipCard class="d-inline-block" equip={ found } />
												: <>???</>;
										})() }
									</div>
								</>
							}
						</div>
					}
				</div>
			</>
			: <></>
		}
	</PopupBase>;
};
export default EquipPopup;
