import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { route } from "preact-router";
import Decimal from "decimal.js";

import { ACTOR_GRADE, ITEM_GRADE, ITEM_TYPE } from "@/types/Enums";
import { SelectOption } from "@/types/Helper";
import { BuffStat } from "@/types/Buffs";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { Equip } from "@/types/DB/Equip";

import { CurrentLocale, useLocale } from "@/libs/Locale";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import EntitySource from "@/libs/EntitySource";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";
import EquipLevel from "@/components/equip-level";
import EquipCard from "@/components/equip-card";
import ItemIcon from "@/components/item-icon";
import UnitBadge from "@/components/unit-badge";
import BuffList from "@/components/buff-list";
import RarityBadge from "@/components/rarity-badge";
import UnitLink from "@/components/unit-link";
import SourceTable from "@/components/SourceTable";
import Badge from "@/components/Badge";

import style from "./style.module.scss";

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
	const [loc] = useLocale();

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

	const ConsumableDB = useDBData<Consumable[]>(StaticDB.Consumable);
	const FilterableUnitDB = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);

	const _FilterableEquipDB = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip);
	const FilterableEquipDB = useMemo(() => _FilterableEquipDB?.map(r => ({
		...r,
		source: r.source.map(t => t.map(s => new EntitySource(
			// @ts-expect-error
			s
		))),
	})), [_FilterableEquipDB]);

	const target = useMemo((): FilterableEquip | null => {
		if (!FilterableEquipDB) return null;

		const equip = props.equip;
		if (!equip) return null;

		const specific = FilterableEquipDB.find(x => x.type === equip.type && x.key === equip.key && x.rarity === rarity);
		if (specific) return specific;

		const found = FilterableEquipDB.filter(x => x.type === equip.type && x.key === equip.key);
		if (found.length === 0) return null;

		const eq = found.sort((a, b) => (b.rarity - a.rarity))[0];
		setRarity(eq.rarity);
		return eq;
	}, [props.equip, rarity, FilterableEquipDB]);
	const targetT4 = useMemo((): FilterableEquip | null => {
		if (!target) return null;
		if (target.rarity !== ACTOR_GRADE.SSS) return null;
		if (!FilterableEquipDB) return null; // unexpected

		return FilterableEquipDB.find(x => x.type === target.type && x.key === target.key && x.rarity === ACTOR_GRADE.SS) || null;
	}, [target?.rarity, FilterableEquipDB]);

	useEffect(() => {
		if (!props.asSub && target) {
			const to = `/equips/${target.fullKey}`;
			if (to !== window.location.pathname)
				route(to);
		}
	}, [props.asSub, target?.fullKey]);

	const isUninstalled: boolean = useMemo(() => target !== null && !target.available, [target?.available]);
	const isRoguelike: boolean = useMemo(() => target !== null && target.roguelike, [target?.roguelike]);
	const isExclusive: boolean = useMemo(() =>
		target !== null &&
		target.limit !== null &&
		target.limit.every(y => typeof y === "number"),
		[target?.limit],
	);

	const family = useMemo(() => {
		const equip = props.equip;
		if (!equip) return [];

		return FilterableEquipDB
			? FilterableEquipDB
				.filter(x => x.key === equip.key && x.type === equip.type)
				.sort((a, b) => a.rarity - b.rarity)
			: [];
	}, [props.equip, FilterableEquipDB]);

	const EquipType = useMemo((): preact.VNode => {
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
	}, [props.equip?.type]);

	const RarityList: SelectOption<ITEM_GRADE>[] = useMemo(() => family.map(x => ({
		value: x.rarity,
		text: RarityDisplay[x.rarity],
	})), [family]);

	const Limits = useMemo(
		() => {
			if (target) {
				if (target.limit) {
					return target.limit.map(x => {
						const unit = FilterableUnitDB && FilterableUnitDB.find(y => y.uid === x);
						if (unit) return { id: x, unit };
						return { id: x };
					});
				}
				return [];
			}
			return [{ id: "???" }];
		},
		[target?.limit],
	);

	function ReservedLimit (limit: string): boolean {
		const list = [
			"Attacker", "Defender", "Supporter",
			"Light", "Air", "Heavy",
		];
		return list.includes(limit) || (limit.includes("+") && limit.split("+").some(x => list.includes(x)));
	}

	const detail = useDBData<Equip>(target ? `equip/${target.fullKey}` : null);
	useEffect(() => {
		if (detail) {
			const stat = detail.stats[level];
			setStatusList(stat);
		} else
			setStatusList([]);
	}, [detail, level]);

	const aliasNames = useMemo(() => {
		return (loc[`EQUIP_ALIAS_${target?.fullKey}`] || "")
			.split(",")
			.filter(x => !!x);
	}, [CurrentLocale.value, loc, target]);

	// const CraftTime = useMemo((): string => {
	// 	const duration = target?.craft;
	// 	if (!duration) return "-";

	// 	const h = Math.floor(duration / 3600);
	// 	const m = Math.floor(duration / 60) % 60;
	// 	const s = duration % 60;
	// 	return `${(`0${h}`).slice(-2)}:${(`0${m}`).slice(-2)}:${(`0${s}`).slice(-2)}`;
	// }, [target?.craft]);

	const UpgradeCostTable = useMemo((): preact.VNode[][] => {
		if (!target) return [];

		const cols = target.upgrade.enchant
			.flatMap(y => y.item)
			.map(r => r.item)
			.unique();
		const maxCols = cols.length;

		const ret: preact.VNode[][] = [];
		const sums = new Array(maxCols + 1)
			.fill(0)
			.map(_ => new Decimal(0));

		target.upgrade.enchant.forEach((v, i) => {
			if (costChecks[i])
				sums[0] = sums[0].add(v.res);

			const row = new Array(maxCols).fill(<></>);
			v.item.forEach((y, _j) => {
				const j = cols.indexOf(y.item);

				if (costChecks[i])
					sums[j + 1] = sums[j + 1].add(y.count);

				const item = ConsumableDB && ConsumableDB.find(z => z.key === y.item);
				const icon = item ? <ItemIcon item={ item.icon } /> : <>???</>;

				row[j] = <BootstrapTooltip
					placement="top"
					content={ <Locale k={ `CONSUMABLE_${y.item}` } /> }
				>
					<span class="badge bg-warning text-dark cost-badge">
						{ icon } x{ FormatNumber(y.count) }
					</span>
				</BootstrapTooltip>;
			});

			ret[i] = [
				<span class="font-exo2">{ FormatNumber(v.res) }</span>,
				...row,
			];
		});

		const row = new Array(maxCols).fill(<></>);
		for (let j = 0; j < maxCols; j++) {
			const item = ConsumableDB && ConsumableDB.find(z => z.key === cols[j]);
			const icon = item ? <ItemIcon item={ item.icon } /> : <>???</>;

			row[j] = <BootstrapTooltip
				placement="top"
				content={ <Locale k={ `CONSUMABLE_${cols[j]}` } /> }
			>
				<span class="badge bg-warning text-dark cost-badge">
					{ icon } x{ FormatNumber(sums[j + 1].toNumber()) }
				</span>
			</BootstrapTooltip>;
		}

		ret[10] = [
			<span class="font-exo2">{ FormatNumber(sums[0].toNumber()) }</span>,
			...row,
		];
		return ret;
	}, [target?.upgrade.enchant, costChecks]);

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

		const CraftTime = ((): string => {
			const duration = target?.craft;
			if (!duration) return "-";

			const h = Math.floor(duration / 3600);
			const m = Math.floor(duration / 60) % 60;
			const s = duration % 60;
			return `${(`0${h}`).slice(-2)}:${(`0${m}`).slice(-2)}:${(`0${s}`).slice(-2)}`;
		})();

		return target.source.length === 0 && !target.craft
			? <span class="text-secondary">
				<Locale k="UNIT_VIEW_DROPS_EMPTY" />
			</span>
			: <>
				{ target.craft
					? <span class="badge bg-dark my-1">
						<h6 class="m-0 p-0">
							<Icons.Hammer class="me-1" />

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

				<SourceTable source={ target.source } />
			</>;
	};

	const upgrades = useMemo(() => {
		const ret: preact.VNode[] = [];
		if (family.length > 0) {
			family.forEach(f => {
				if (!f.upgrade.upgrade) return;

				const next = FilterableEquipDB && FilterableEquipDB.find(x => x.fullKey === f.upgrade.upgrade!.to);

				if (ret.length > 0)
					ret.splice(ret.length - 1, 1); // remove last

				ret.push(
					<div>
						<div>
							<EquipCard class="d-inline-block" equip={ f } />
						</div>
						<div>
							{ f.upgrade.upgrade.cost.map(e => {
								const item = ConsumableDB && ConsumableDB.find(c => c.key === e.item);
								if (!item) return <>-</>;

								return <span class="badge bg-dark me-1 mb-1">
									<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
									<Locale k={ `CONSUMABLE_${item.key}` } />
									<span class="ps-1"> x{ FormatNumber(e.count) }</span>
								</span>;
							}) }
						</div>
					</div>,
					<div>
						<Icons.ArrowRightCircleFill />
					</div>,
					<div>
						{ next
							? <EquipCard class="d-inline-block" equip={ next } />
							: <>???</>
						}
					</div>,
				);
			});
		}
		return ret;
	}, [family]);

	return <PopupBase
		class="equip-modal"
		bodyClass="pb-0"
		size="xl"
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
						<div style="font-size: 60%">
							{ aliasNames.length > 0 && <div class={ style.EquipAliasNames }>
								{ aliasNames.map(r => <Badge variant="primary">{ r }</Badge>) }
							</div> }

							{ target.fullKey }
						</div>
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
							<div class="row row-cols-2 w-100">
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
							{ ParseDescriptionText(loc[`EQUIP_DESC_${target.fullKey}`] ?? "???") }
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
							<Icons.Receipt class="me-1" />
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
							<Icons.BasketFill class="me-1" />
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
							<Icons.CpuFill class="me-1" />
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
							<Icons.CapslockFill class="me-1" />
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

							{ StatusList && <BuffList class="mt-2" uid={ target.fullKey } list={ StatusList } dummy /> }
						</>
					}
					{ displayTab === "drop" &&
						<div class="container">
							<div class="row">
								<div class="col text-center pt-2">
									{ RenderDrops(target) }

									{ target.rarity === ACTOR_GRADE.SSS && family.some(r => r.rarity === ACTOR_GRADE.SS)
										? <div class="alert alert-danger mt-3 p-1 pb-2">
											<div class="alert alert-light mb-3 p-1">
												<Locale
													k="EQUIP_VIEW_SOURCE_T4"
													p={ [
														<span style="text-decoration:underline">{
															(loc[`EQUIP_${GetFullKey(target.type, target.key, ACTOR_GRADE.SSS)}`] ?? "???")
																.replace(/SSS$/, "")
																.trim()
														}</span>
													] }
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
						<div class="overflow-auto">
							<table class="table table-bordered text-center table-enchant">
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
						</div>
					}
					{ displayTab === "upgrade" &&
						<div class="p-4">
							{ upgrades.length === 0
								? <span class="text-secondary">
									<Locale k="EQUIP_VIEW_PROMOTION_EMPTY" />
								</span>
								: <div class="upgrade-flow">
									{ upgrades }
								</div>
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
