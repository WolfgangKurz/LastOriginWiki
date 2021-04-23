import { Fragment, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";

import { MapEnemyData, MapNodeEntity, Worlds } from "@/types/DB/Map";
import { RawReward, RewardTypeBase } from "@/types/Reward";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { Consumable } from "@/types/DB/Consumable";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, SubStoryUnit } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import DropItem from "@/components/drop-item";
import DropRes from "@/components/drop-res";
import DropUnit from "@/components/drop-unit";
import DropEquip from "@/components/drop-equip";
import TbarIcon from "@/components/tbar-icon";
import UnitFace from "@/components/unit-face";
import EnemyPopup from "@/components/popup/enemy-popup";
import EquipPopup from "@/components/popup/equip-popup";
import UnitReference from "@/components/unit-reference";
import MapGrid from "../components/map-grid";
import MapSearchInfo from "../components/map-search-info";

import "./style.scss";

type RewardDropType = RewardTypeBase & {
	am?: true;
};

interface WaveEnemyInfo extends MapEnemyData {
	enemy: FilterableEnemy;
}

interface MapViewProps {
	wid: string;
	mid: string;
	node?: string;
}

const MapView: FunctionalComponent<MapViewProps> = (props) => {
	const ImageExt = ImageExtension();

	const CurrentTab = objState<"reward" | "drop" | "enemy" | "search">("reward");
	const selected = objState<MapNodeEntity | null>(null);

	const selectedWave = objState<number>(0);
	const selectedWaveIndex = objState<number>(0);

	const selectedEnemy = objState<FilterableEnemy | null>(null);
	const selectedEnemyLevel = objState<number>(1);
	const enemyModalDisplay = objState<boolean>(false);

	const selectedEquip = objState<FilterableEquip | null>(null);
	const equipModalDisplay = objState<boolean>(false);

	SetMeta(
		["description", "twitter:description"],
		`${LocaleGet(`WORLD_${props.wid}`)}의 제 ${props.mid}구역 정보를 표시합니다. 지역의 클리어 보상과 드랍 정보, 적 정보를 확인할 수 있습니다.`,
	);
	SetMeta("keywords", `,${LocaleGet(`WORLD_${props.wid}`)}`, true);
	SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${props.wid}_${props.mid}.png`);

	if (props.wid === "Sub")
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${props.wid}`));
	else
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${props.wid}`), LocaleGet("WORLDS_WORLD_TITLE", props.mid));

	return <Loader
		json={ [
			StaticDB.Map,
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
			StaticDB.FilterableEnemy,
			StaticDB.Consumable,
		] }
		content={ ((): preact.VNode => {
			const MapDB = GetJson<Worlds>(StaticDB.Map);
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

			const WorldName = <Locale k={ `WORLD_${props.wid}` } fallback={ props.wid } />;
			const AreaName = (props.wid in MapDB) && (props.mid in MapDB[props.wid])
				? <Locale k={ `WORLD_WORLD_${props.wid}_${props.mid}` } fallback={ <Locale k={ "WORLDS_WORLD_TITLE" } p={ [props.mid] } /> } />
				: <Fragment>???</Fragment>;

			const selectedValue = selected.value;

			const Waves = selectedValue
				? selectedValue.wave || []
				: [];
			const CurrentWave = ((): Array<WaveEnemyInfo | null> => {
				if (!selectedValue) return new Array(9).fill(null);

				return Waves[selectedWave.value][selectedWaveIndex.value].e.enemy
					.map(x => {
						if (!x) return null;

						const enemy = FilterableEnemyDB.find(y => y.id === x.id);
						if (!enemy) return null;

						return {
							enemy,
							...x,
						};
					});
			})();

			const UnitDrops = ((): FilterableUnit[] => {
				if (!selectedValue) return [];

				const ids: string[] = [];
				const ret: FilterableUnit[] = [];
				Waves.forEach(_ => {
					_.forEach(__ => {
						__.e.drops
							.filter(x => x.id.startsWith("Char_"))
							.map(x => {
								if (ids.includes(x.id)) return null;
								ids.push(x.id);

								const k = x.id.replace(/Char_(.+)_N/, "$1");
								return FilterableUnitDB.find(y => y.uid === k);
							})
							.filter(x => x)
							.forEach(x => ret.push(x as FilterableUnit));
					});
				});
				return ret.sort((a, b) => b.rarity - a.rarity);
			})();
			const ItemDrops = ((): Array<FilterableEquip | Consumable> => {
				if (!selectedValue) return [];

				const ids: string[] = [];
				const ret: Array<FilterableEquip | Consumable> = [];
				Waves.forEach(_ => {
					_.forEach(__ => {
						__.e.drops
							.filter(x => !x.id.startsWith("Char_"))
							.map(x => {
								if (ids.includes(x.id)) return null;
								ids.push(x.id);

								if (x.id.startsWith("Equip_")) {
									const k = x.id.substr(6);
									const eq = FilterableEquipDB.find(y => y.fullKey === k);
									if (eq) return eq;
								} else {
									const cs = ConsumableDB.find(y => y.key === x.id);
									if (cs) return cs;
								}
								return null;
							})
							.filter(x => x)
							.forEach(x => ret.push(x as (FilterableEquip | Consumable)));
					});
				});
				// (); .sort((a, b) => b.rarity - a.rarity);
				return ret.sort((a, b) => {
					if (("rarity" in a) && !("rarity" in b))
						return -1;
					else if (!("rarity" in a) && ("rarity" in b))
						return 1;
					else if (("rarity" in a) && ("rarity" in b))
						return b.rarity - a.rarity;
					return 0;
				});
			})();
			const RewardDrops = ((): RewardDropType[] => {
				if (!selectedValue) return [];

				const f = (x: RawReward): RewardDropType | null => {
					if (typeof x === "string") {
						const k = x.replace(/Char_(.+)_N/, "$1");
						const u = FilterableUnitDB.find(y => y.uid === k);
						if (u) return { unit: u };
						return null;
					}

					if (("cash" in x) || ("metal" in x) || ("nutrient" in x) || ("power" in x))
						return x;

					if ("count" in x) {
						const i = x.item;
						if (i.startsWith("Equip_")) {
							const k = i.substr(6);
							const eq = FilterableEquipDB.find(y => y.fullKey === k);
							if (eq) return { equip: eq, count: x.count };
						} else {
							const cs = ConsumableDB.find(y => y.key === i);
							if (cs) return { consumable: cs, count: x.count };
						}
						return null;
					}

					return null;
				};

				return [
					...selectedValue.reward_f.map(x => f(x)),
					...selectedValue.reward_am.map(x => ({ ...f(x), am: true })),
				].filter(x => x) as RewardDropType[];
			})();

			const NodeMap = ((): MapNodeEntity[] => {
				const ret: MapNodeEntity[] = new Array(24)
					.fill(MapNodeEntity.Empty)
					.map((x: MapNodeEntity, i) => ({ ...x, offset: i }));

				const world = MapDB[props.wid];
				if (!world) return ret;

				const area = world[props.mid]?.list;
				if (!area) return ret;

				for (const n of area) ret[n.offset] = n;
				return ret;
			})();
			const NodeList = ((): MapNodeEntity[] => {
				const ret: MapNodeEntity[] = [];

				const world = MapDB[props.wid];
				if (!world) return ret;

				const area = world[props.mid]?.list;
				if (!area) return ret;

				if (props.wid === "Sub")
					area.filter(n => n.text in SubStoryUnit).forEach(n => ret.push(n));
				else
					area.forEach(n => ret.push(n));

				return ret;
			})();

			const CurrentWaveExp = selectedValue
				? FormatNumber(Waves[selectedWave.value][selectedWaveIndex.value].e.exp)
				: 0;

			const TotalExp = selectedValue
				? FormatNumber(Waves.reduce((p, c) => (p + c.reduce((p1, c1) => Math.max(p1, c1.e.exp), 0) || 0), 0))
				: 0;

			const SearchInfo = selectedValue
				? selectedValue.search || false
				: null;

			function SubstoryName (text: string): preact.VNode {
				const unit = FilterableUnitDB.find(x => x.uid === SubStoryUnit[text]);
				if (!unit) return <Fragment>???</Fragment>;
				return <Locale k={ `UNIT_${unit.uid}` } />;
			}

			if (props.node) {
				const found = NodeList.find(y => y.text === props.node);
				if (found)
					selected.set(found);
			}

			function NodeChange (node: MapNodeEntity): void {
				selectedWave.set(0);
				route(`/worlds/${props.wid}/${props.mid}/${node ? node.text : ""}`);
			}

			function OpenEnemyInfo (enemy: FilterableEnemy, level: number): void {
				selectedEnemy.set(enemy);
				selectedEnemyLevel.set(level);
				enemyModalDisplay.set(true);
			}

			return <div class="worlds-map text-start">
				<div class="row">
					<div class="col-auto">
						<button class="btn btn-dark" onClick={ (): void => {
							if (props.wid === "Sub")
								route("/worlds/");
							else
								route(`/worlds/${props.wid}`);
						} }>
							<Icon icon="arrow-left" class="me-1" />
							{ props.wid === "Sub"
								? <Locale k="WORLDS_BACK_TO_WORLDS" />
								: <Locale k="WORLDS_BACK_TO_AREAS" />
							}
						</button>
					</div>
				</div>
				<hr />

				<div class="card bg-dark text-light">
					<div class="card-header">
						{ props.wid === "Sub"
							? <h5 class="m-0 d-inline-block">{ WorldName }</h5>
							: <Fragment>
								{ WorldName }
								<h5 class="m-0 d-inline-block">
									<span class="badge bg-warning text-dark ms-2">
										<Locale k="WORLDS_WORLD_TITLE" p={ [props.mid] } /> :: { AreaName }
									</span>
								</h5>
							</Fragment>
						}
					</div>
					<div class="worlds-map-bg">
						<div>
							{ props.wid === "Sub"
								? NodeList.map(x => <Link
									href={ `/worlds/${props.wid}/${props.mid}/${x.text}` }
									onClick={ (): void => {
										selected.set(x);
										NodeChange(x);
									} }
								>
									<button class={ `btn btn-${selectedValue === x ? "warning" : "light"} m-2` }>
										<span class={ `badge ${selectedValue === x ? "bg-dark text-light" : "bg-warning text-dark"} me-1` }>
											{ SubstoryName(x.text) }
										</span>
										<Locale k={ `WORLD_MAP_Sub_${x.text}` } />
									</button>
								</Link>)
								: props.wid === "Daily"
									? NodeList.map(x => <Link
										href={ `/worlds/${props.wid}/${props.mid}/${x.text}` }
										onClick={ (): void => {
											selected.set(x);
											NodeChange(x);
										} }
									>
										<button class={ `btn btn-${selectedValue === x ? "stat-hp" : "light"} m-2` }>
											<Locale k={ `WORLD_MAP_Daily_${x.text}` } />
										</button>
									</Link>)
									: props.wid === "Cha"
										? NodeList.map(x => <Link
											href={ `/worlds/${props.wid}/${props.mid}/${x.text}` }
											onClick={ (): void => {
												selected.set(x);
												NodeChange(x);
											} }
										>
											<button class={ `btn btn-${selectedValue === x ? "warning" : "light"} m-2` }>
												{ x.name.replace(/.+\(([^)]+)\)$/, "$1") }
											</button>
										</Link>)
										: <MapGrid
											nodes={ NodeMap }
											wid={ props.wid }
											mid={ props.mid }
											onSelect={ (node: MapNodeEntity): void => {
												selected.set(node);
												NodeChange(node);
											} }
											selected={ selected.value }
										/>
							}
						</div>
					</div>
				</div>

				{ selectedValue
					? <div class="card mt-3 bg-dark text-light">
						<div class="card-body">
							<h5>
								{ props.wid === "Sub"
									? <div class="float-start me-3">
										<UnitFace uid={ SubStoryUnit[selectedValue.text] } size="56" />
									</div>
									: <Fragment />
								}

								<span class="badge bg-warning text-dark me-2 selected-node-badge">
									{ props.wid === "Sub"
										? SubstoryName(selectedValue.text)
										: selectedValue.text
									}
								</span>

								<Locale plain k={ `WORLD_MAP_${props.wid}_${selectedValue.text}` } />
							</h5>
							<div><Locale plain k={ `WORLD_MAP_DESC_${props.wid}_${selectedValue.text}` } /></div>
						</div>
					</div>
					: <Fragment />
				}

				<EnemyPopup
					asSub
					enemy={ selectedEnemy.value }
					level={ selectedEnemyLevel.value }
					display={ enemyModalDisplay.value }
					onHidden={ (): void => enemyModalDisplay.set(false) }
				/>
				<EquipPopup
					asSub
					equip={ selectedEquip.value }
					display={ equipModalDisplay.value }
					onHidden={ (): void => equipModalDisplay.set(false) }
				/>

				<div class="card mt-2">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(CurrentTab.value === "reward")} text-dark` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										CurrentTab.set("reward");
									} }
								>
									<Icon icon="award-fill" class="me-1" />
									<Locale k="WORLD_VIEW_CLEAR_REWARDS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(CurrentTab.value === "drop")} text-dark` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										CurrentTab.set("drop");
									} }
								>
									<Icon icon="gift-fill" class="me-1" />
									<Locale k="WORLD_VIEW_DROPS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(CurrentTab.value === "enemy")} text-dark` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										CurrentTab.set("enemy");
									} }
								>
									<Icon icon="bug-fill" class="me-1" />
									<Locale k="WORLD_VIEW_ENEMY" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(CurrentTab.value === "search")} text-dark` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										CurrentTab.set("search");
									} }
								>
									<Icon icon="search" class="me-1" />
									<Locale k="WORLD_VIEW_EXPLORATION" />
								</a>
							</li>
						</ul>
					</div>

					{ CurrentTab.value === "reward"
						? <div id="world-map-reward" class="card-body">
							{ !selectedValue
								? <div class="text-center py-4 text-secondary">
									<Locale k="WORLD_VIEW_SELECT_NODE" />
								</div>
								: <div class="row">
									<div class="col-12 col-md-6">
										<div class="card text-dark">
											<div class="card-header">
												<Locale k="WORLD_VIEW_CLEAR_REWARDS" />
											</div>
											<div class="card-body">
												<div
													class={ `row row-cols-1 row-cols-lg-${RewardDrops.filter(x => !x.am).length === 0 ? 1 : 2} px-2` }
												>
													{ RewardDrops.filter(x => !x.am).length === 0
														? <div class="text-center py-4 text-secondary">
															<Locale k="WORLD_VIEW_CLEAR_REWARDS_NONE" />
														</div>
														: RewardDrops.filter(x => !x.am)
															.map((reward, i) => {
																if ("cash" in reward)
																	return <DropRes res="cash" count={ reward.cash } />;
																if ("metal" in reward)
																	return <DropRes res="metal" count={ reward.metal } />;
																if ("nutrient" in reward)
																	return <DropRes res="nutrient" count={ reward.nutrient } />;
																if ("power" in reward)
																	return <DropRes res="power" count={ reward.power } />;
																if ("unit" in reward) {
																	return <Link class="drop-unit" href={ `/units/${reward.unit.uid}` }>
																		<DropUnit id={ reward.unit.uid } />
																	</Link>;
																}
																if ("equip" in reward) {
																	return <Link class="drop-equip"
																		href={ `/equips/${reward.equip.fullKey}` }
																		onClick={ (e: Event): void => {
																			e.preventDefault();
																			e.stopPropagation();
																			selectedEquip.set(reward.equip);
																			equipModalDisplay.set(true);
																		} }
																	>
																		<DropEquip equip={ reward.equip } />
																		{ reward.count > 1
																			? `x${reward.count}`
																			: <Fragment />
																		}
																	</Link>;
																}
																return <DropItem item={ reward.consumable } count={ reward.count } />;
															})
															.map(el => <div class="p-0">{ el }</div>)
													}
												</div>
											</div>
										</div>
										<div class="card text-dark mt-2">
											<div class="card-header">
												<Locale k="WORLD_VIEW_4STAR_REWARDS" />
											</div>
											<div class="card-body">
												<div
													class={ `row row-cols-1 row-cols-lg-${RewardDrops.filter(x => x.am).length === 0 ? 1 : 2} px-2` }
												>
													{ RewardDrops.filter(x => x.am).length === 0
														? <div class="text-center py-4 text-secondary">
															<Locale k="WORLD_VIEW_4START_REWARDS_NONE" />
														</div>
														: RewardDrops.filter(x => x.am)
															.map((reward, i) => {
																if ("cash" in reward)
																	return <DropRes res="cash" count={ reward.cash } am />;
																if ("metal" in reward)
																	return <DropRes res="metal" count={ reward.metal } am />;
																if ("nutrient" in reward)
																	return <DropRes res="nutrient" count={ reward.nutrient } am />;
																if ("power" in reward)
																	return <DropRes res="power" count={ reward.power } am />;
																if ("unit" in reward) {
																	return <Link class="drop-unit" href={ `/units/${reward.unit.uid}` }>
																		<DropUnit id={ reward.unit.uid } />
																	</Link>;
																}
																if ("equip" in reward) {
																	return <Link class="drop-equip"
																		href={ `/equips/${reward.equip.fullKey}` }
																		onClick={ (e: Event): void => {
																			e.preventDefault();
																			e.stopPropagation();
																			selectedEquip.set(reward.equip);
																			equipModalDisplay.set(true);
																		} }
																	>
																		<DropEquip equip={ reward.equip } />
																		{ reward.count > 1
																			? `x${reward.count}`
																			: <Fragment />
																		}
																	</Link>;
																}
																return <DropItem item={ reward.consumable } count={ reward.count } />;
															})
															.map(el => <div class="p-0">{ el }</div>)
													}
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 mt-md-0 mt-4">
										<div class="card text-dark">
											<div class="card-header">
												<Locale k="WORLD_VIEW_CLEAR_CONDITION" />
											</div>
											<div class="card-body">
												<ul class="list-group">
													{ selectedValue.missions.map(m => <li class="list-group-item">
														★ <Locale k={ m } components={ { ref: UnitReference } } />
													</li>) }
												</ul>
											</div>
										</div>
									</div>
								</div>
							}
						</div>
						: <Fragment />
					}
					{ CurrentTab.value === "drop"
						? <div id="world-map-drops" class="card-body">
							{ !selectedValue
								? <div class="text-center py-4 text-secondary">
									<Locale k="WORLD_VIEW_SELECT_NODE" />
								</div>
								: <div class="row">
									<div class="col-12 col-md-6">
										<div class="card text-dark">
											<div class="card-header">
												<Locale k="WORLD_VIEW_DROPS_UNIT" />
											</div>
											<div class="card-body">
												<div class={ `row row-cols-1 row-cols-lg-${UnitDrops.length === 0 ? 1 : 2} text-center px-2` }>
													{ UnitDrops.length === 0
														? <div class="text-center py-4 text-secondary">
															<Locale k="WORLD_VIEW_NO_DROPS" />
														</div>
														: UnitDrops
															.map(unit => <Link class="drop-unit" href={ `/units/${unit.uid}` }>
																<DropUnit id={ unit.uid } />
															</Link>)
															.map(el => <div class="p-0">{ el }</div>)
													}
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 mt-md-0 mt-4">
										<div class="card text-dark">
											<div class="card-header">
												<Locale k="WORLD_VIEW_DROPS_ITEMS" />
											</div>
											<div class="card-body">
												<div class={ `row row-cols-1 row-cols-lg-${ItemDrops.length === 0 ? 1 : 2} text-center px-2` }>
													{ ItemDrops.length === 0
														? <div class="text-center py-4 text-secondary">
															<Locale k="WORLD_VIEW_NO_DROPS" />
														</div>
														: ItemDrops
															.map((item, i) => "rarity" in item
																? <Link class="drop-equip"
																	href={ `/equips/${item.fullKey}` }
																	onClick={ (e: Event): void => {
																		e.preventDefault();
																		e.stopPropagation();
																		selectedEquip.set(item);
																		equipModalDisplay.set(true);
																	} }
																>
																	<DropEquip equip={ item } />
																</Link>
																: <DropItem item={ item } />)
															.map(el => <div class="p-0">{ el }</div>)
													}
												</div>
											</div>
										</div>
									</div>
								</div> }
						</div>
						: <Fragment />
					}
					{ CurrentTab.value === "enemy"
						? <div id="world-map-enemies" class="card-body text-center">
							{ !selectedValue
								? <div class="py-4 text-secondary">
									<Locale k="WORLD_VIEW_SELECT_NODE" />
								</div>
								: <Fragment>
									<div class="mb-2">
										<span class="badge bg-danger">
											<Locale k="WORLD_VIEW_ENEMY_TOTAL_EXP" p={ [TotalExp] } />
										</span>
									</div>
									{ Waves.map((wave, waveIdx) => <Link
										href="#"
										class="wave-button"
										onClick={ (e: Event): void => {
											e.preventDefault();
											if (selectedValue) {
												selectedWave.set(waveIdx);
												selectedWaveIndex.set(0);
											}
										} }
									>
										<img
											class="current-map-marker"
											src={ `${AssetsRoot}/map-current.png` }
											style={ { display: waveIdx === selectedWave.value ? "" : "none" } } />
										<TbarIcon icon="TbarIcon_MP_NightChick_RV" size={ 42 } />
									</Link>) }
									<div class="mt-3">
										<div class="mb-3">
											<div class="btn btn-group">
												{ Waves[selectedWave.value].map((_, idx) => <button
													class={ `btn btn-outline-dark ${isActive(selectedWaveIndex.value === idx)}` }
													onClick={ (): void => selectedWaveIndex.set(idx) }
												>
													#{ idx + 1 }
													<span class="badge bg-warning text-dark ms-1">{ _.r }%</span>
												</button>) }
											</div>
										</div>
										<div class="mb-2">
											<span class="badge bg-warning text-dark">
												<Locale k="WORLD_VIEW_ENEMY_WAVE_EXP" p={ [CurrentWaveExp] } />
											</span>
										</div>

										<span
											class="m-3 p-1"
											style={ {
												fontSize: "3em",
												opacity: selectedWave.value === 0 ? 0.4 : 1,
												cursor: selectedWave.value === 0 ? "" : "pointer",
											} }
											onClick={ (): void => {
												if (selectedWave.value > 0)
													selectedWave.set(selectedWave.value - 1);
											} }
										>
											<Icon icon="chevron-left" />
										</span>
										<div class="enemy-grid">
											{ CurrentWave.map((enemy, pos) => <div>
												{ enemy
													? <Fragment>
														<img src={ `${AssetsRoot}/${ImageExt}/tbar/${enemy.enemy.icon}.${ImageExt}` } />
														<div class="my-1" style="font-size:0.8em;font-weight:bold">
															<Locale k={ `ENEMY_${enemy.enemy.id}` } />
														</div>
														<span
															class={ `badge bg-${enemy.enemy.isBoss ? "danger" : "substory"}` }
														>Lv.{ enemy.lv }</span>

														<Link href="#" class="stretched-link" onClick={ (e: Event): void => {
															e.preventDefault();
															OpenEnemyInfo(enemy.enemy, enemy.lv);
														} } />
													</Fragment>
													: <Fragment />
												}
											</div>) }
										</div>
										<span
											class="m-3 p-1"
											style={ {
												fontSize: "3em",
												opacity: selectedWave.value === Waves.length - 1 ? 0.4 : 1,
												cursor: selectedWave.value === Waves.length - 1 ? "" : "pointer",
											} }
											onClick={ (): void => {
												if (selectedWave.value < Waves.length - 1)
													selectedWave.set(selectedWave.value + 1);
											} }
										>
											<Icon icon="chevron-right" />
										</span>
									</div>
								</Fragment> }
						</div>
						: <Fragment />
					}
					{ CurrentTab.value === "search"
						? <div id="world-map-search" class="card-body text-center">
							<MapSearchInfo searchInfo={ SearchInfo } />
						</div>
						: <Fragment />
					}
				</div>
			</div>;
		}) }
	/>;
};
export default MapView;
