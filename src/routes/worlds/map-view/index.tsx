import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import { ACTOR_GRADE, STAGE_SUB_TYPE, UNLOCK_COND } from "@/types/Enums";
import { MapEnemyData, MapNodeEntity, Maps, World } from "@/types/DB/Map";
import { RawReward, RewardTypeBase } from "@/types/Reward";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { Consumable } from "@/types/DB/Consumable";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, NewMapList, SubStoryUnit } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import MapPosition from "@/libs/MapPosition";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconArrowLeft from "@/components/bootstrap-icon/icons/ArrowLeft";
import IconChatSquareTextFill from "@/components/bootstrap-icon/icons/ChatSquareTextFill";
import IconCompass from "@/components/bootstrap-icon/icons/Compass";
import IconCaretRightFill from "@/components/bootstrap-icon/icons/CaretRightFill";
import IconAwardFill from "@/components/bootstrap-icon/icons/AwardFill";
import IconGiftFill from "@/components/bootstrap-icon/icons/GiftFill";
import IconBugFill from "@/components/bootstrap-icon/icons/BugFill";
import IconSearch from "@/components/bootstrap-icon/icons/Search";
import IconStarFill from "@/components/bootstrap-icon/icons/StarFill";
import  IconChevronLeft from "@/components/bootstrap-icon/icons/ChevronLeft";
import IconChevronRight  from "@/components/bootstrap-icon/icons/ChevronRight";
import  IconUnlockFill  from "@/components/bootstrap-icon/icons/UnlockFill";
import DropItem from "@/components/drop-item";
import DropRes from "@/components/drop-res";
import DropUnit from "@/components/drop-unit";
import DropEquip from "@/components/drop-equip";
import TbarIcon from "@/components/tbar-icon";
import UnitFace from "@/components/unit-face";
import EnemyPopup from "@/components/popup/enemy-popup";
import EquipPopup from "@/components/popup/equip-popup";
import PCIcon from "@/components/pc-icon";
import MissionText from "@/components/mission-text";
import MapSearchInfo from "../components/map-search-info";
import MapGrid from "../components/map-grid";

import style from "./style.module.scss";

interface ModuleUnit {
	type: "module";
	uid: string;
	rarity: ACTOR_GRADE;
}

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

	const CurrentMode = objState<"map" | "substory">("map");

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
			`map/${props.wid}`,
			StaticDB.Maps,
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
			StaticDB.FilterableEnemy,
			StaticDB.Consumable,
		] }
		content={ ((): preact.VNode => {
			const MapDB = GetJson<World>(`map/${props.wid}`);
			const MapsDB = GetJson<Maps>(StaticDB.Maps);
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

			const WorldName = <span class={ `font-ibm ${style.WorldName}` }>
				<Locale k={ `WORLD_${props.wid}` } fallback={ props.wid } />
			</span>;
			const AreaName = (props.mid in MapDB)
				? <Locale
					k={ `WORLD_WORLD_${props.wid}_${props.mid}` }
					fallback={ <Locale k={ "WORLDS_WORLD_TITLE" } p={ [props.mid] } /> }
				/>
				: <>???</>;

			const selectedValue = selected.value;

			const Waves = selectedValue
				? selectedValue.wave || []
				: [];
			const CurrentWave = ((): Array<WaveEnemyInfo | null> => {
				if (
					!selectedValue ||
					selectedValue.type === STAGE_SUB_TYPE.STORY ||
					!(Waves[selectedWave.value] && Waves[selectedWave.value][selectedWaveIndex.value].e)
				) return new Array(9).fill(null);

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

			const UnitDrops = ((): Array<FilterableUnit | ModuleUnit> => {
				if (!selectedValue) return [];

				const rarityTable = ["D", "C", "B", "A", "S", "SS"];
				const ids: string[] = [];
				const ret: Array<FilterableUnit | ModuleUnit> = [];
				Waves.forEach(_ => {
					_.forEach(__ => {
						if (__.e) {
							__.e.drops
								.filter(x => x.id.startsWith("Char_"))
								.map(x => {
									if (ids.includes(x.id)) return null;
									ids.push(x.id);

									const k = x.id.replace(/Char_(.+)_N/, "$1");
									if (k.startsWith("Module")) {
										const rk = x.id.replace(/^Char_Module_.+_([BAS]+)_N$/, "$1");
										const r = rarityTable.indexOf(rk);
										return {
											type: "module",
											uid: x.id.replace(/^Char_(.+)_N$/, "$1"),
											rarity: r as ACTOR_GRADE,
										};
									}
									return FilterableUnitDB.find(y => y.uid === k);
								})
								.filter(x => x)
								.forEach(x => ret.push(x as (FilterableUnit | ModuleUnit)));
						}
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
						if (__.e) {
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
						}
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
					...selectedValue.reward_am
						.map(x => f(x))
						.filter(x => x)
						.map(x => ({ ...x, am: true })),
				].filter(x => x) as RewardDropType[];
			})();

			const MapHardcoded = ((): boolean => {
				if (!(props.wid in MapsDB)) return false;
				if (!(props.mid in MapsDB[props.wid])) return false;
				return MapsDB[props.wid][props.mid];
			})();
			const NodeList = ((): MapNodeEntity[] => {
				const ret: MapNodeEntity[] = [];

				const area = MapDB[props.mid];
				if (!area) return ret;

				if (props.wid === "Sub")
					ret.push(...area.list.filter(n => n.text in SubStoryUnit));
				else
					ret.push(...area.list);

				return ret;
			})();

			const [CurrentWaveExp, CurrentSkillExp, PlayerExp] = (
				selectedValue &&
				selectedValue.type !== STAGE_SUB_TYPE.STORY &&
				Waves[selectedWave.value] &&
				Waves[selectedWave.value][selectedWaveIndex.value].e
			)
				? (() => {
					const wave = Waves[selectedWave.value][selectedWaveIndex.value].e;
					return [FormatNumber(wave.exp), FormatNumber(wave.sexp), selectedValue.playerExp];
				})()
				: [0, 0, 0];

			const [TotalExp, TotalSkillExp] = selectedValue
				? (() => {
					return [
						FormatNumber(Waves.reduce((p, c) => (p + c.reduce((p1, c1) => Math.max(p1, (c1.e && c1.e.exp) || 0), 0) || 0), 0)),
						FormatNumber(Waves.reduce((p, c) => (p + c.reduce((p1, c1) => Math.max(p1, (c1.e && c1.e.sexp) || 0), 0) || 0), 0)),
					];
				})()
				: [0, 0];

			const SearchInfo = selectedValue
				? selectedValue.search || false
				: null;

			function SubstoryName (text: string): preact.VNode {
				const unit = FilterableUnitDB.find(x => x.uid === SubStoryUnit[text]);
				if (!unit) return <>???</>;
				return <Locale plain k={ `UNIT_${unit.uid}` } />;
			}

			if (props.node) {
				const found = NodeList.find(y => y.text === props.node);
				if (found)
					selected.set(found);
			}

			function NodeChange (node: MapNodeEntity): void {
				if (node.type === STAGE_SUB_TYPE.STORY)
					CurrentTab.set("reward");
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
							<IconArrowLeft class="me-1" />
							{ props.wid === "Sub"
								? <Locale k="WORLDS_BACK_TO_WORLDS" />
								: <Locale k="WORLDS_BACK_TO_AREAS" />
							}
						</button>
					</div>
					<div class="col text-end">
						{ CurrentMode.value === "map"
							? props.mid in MapDB && MapDB[props.mid].substory.length > 0
								? <button class="btn btn-dark" onClick={ (): void => CurrentMode.set("substory") }>
									<IconChatSquareTextFill class="me-1" />
									<Locale k="WORLDS_SUBSTORY" />
								</button>
								: <></>
							: <button class="btn btn-dark" onClick={ (): void => CurrentMode.set("map") }>
								<IconCompass class="me-1" />
								<Locale k="WORLDS_WORLD_MAP" />
							</button>
						}
					</div>
				</div>
				<hr />

				{ CurrentMode.value === "map"
					? <>
						<div class="card bg-dark text-light">
							<div class="card-header">
								{ props.wid === "Sub"
									? <h5 class="m-0 d-inline-block font-ibm">{ WorldName }</h5>
									: props.wid === "Daily"
										? <>
											{ WorldName }
											<h5 class="m-0 d-inline-block font-ibm">
												<span class="badge bg-warning text-dark ms-2">{ AreaName }</span>
											</h5>
										</>
										: <>
											{ WorldName }
											<h5 class="m-0 d-inline-block font-ibm">
												<span class="badge bg-warning text-dark ms-2">
													<Locale k="WORLDS_WORLD_TITLE" p={ [props.mid] } /> :: { AreaName }
												</span>
											</h5>
										</>
								}
							</div>
							<div class="worlds-map-bg" data-new={ NewMapList.includes(props.wid) ? "1" : "0" }>
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
														<Locale k={ `WORLD_MAP_Cha_${x.text}` } />
														{/* { x.name.replace(/.+\(([^)]+)\)$/, "$1") } */ }
													</button>
												</Link>)
												: <MapGrid
													nodes={ NodeList }
													wid={ props.wid }
													mid={ props.mid }
													hardcoded={ MapHardcoded }
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
									{ props.wid in MapPosition &&
										props.mid in MapPosition[props.wid] &&
										selectedValue.text in MapPosition[props.wid][props.mid] &&
										MapPosition[props.wid][props.mid][selectedValue.text][4]
										? <div class="float-end">
											<img
												class={ style.BadgeImage }
												src={ `${AssetsRoot}/world/badge/${MapPosition[props.wid][props.mid][selectedValue.text][4]}.png` }
											/>
										</div>
										: <></>
									}

									<h5>
										{ props.wid === "Sub"
											? <div class="float-start me-3">
												<UnitFace uid={ SubStoryUnit[selectedValue.text] } size="56" />
											</div>
											: <></>
										}

										<span class="badge bg-warning text-dark me-2 selected-node-badge">
											{ props.wid === "Sub"
												? SubstoryName(selectedValue.text)
												: <span class="font-exo2">
													{ selectedValue.text }
													{ selectedValue.type === STAGE_SUB_TYPE.STORY && <>
														<IconCaretRightFill class="mx-1" />
														Story
													</> }
												</span>
											}
										</span>

										<span class="font-ibm">
											<Locale plain k={ `WORLD_MAP_${props.wid}_${selectedValue.text}` } />
										</span>
									</h5>
									<div><Locale plain k={ `WORLD_MAP_DESC_${props.wid}_${selectedValue.text}` } /></div>
								</div>
							</div>
							: <></>
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
											<IconAwardFill class="me-1" />
											<Locale k="WORLD_VIEW_CLEAR_REWARDS" />
										</a>
									</li>
									{ selectedValue && selectedValue.type !== STAGE_SUB_TYPE.STORY
										? <>
											<li class="nav-item">
												<a
													href="#"
													class={ `nav-link ${isActive(CurrentTab.value === "drop")} text-dark` }
													onClick={ (e: Event): void => {
														e.preventDefault();
														CurrentTab.set("drop");
													} }
												>
													<IconGiftFill class="me-1" />
													<Locale k="WORLD_VIEW_DROPS" />
												</a>
											</li>
											{ Waves[selectedWave.value]
												? <li class="nav-item">
													<a
														href="#"
														class={ `nav-link ${isActive(CurrentTab.value === "enemy")} text-dark` }
														onClick={ (e: Event): void => {
															e.preventDefault();
															CurrentTab.set("enemy");
														} }
													>
														<IconBugFill class="me-1" />
														<Locale k="WORLD_VIEW_ENEMY" />
													</a>
												</li>
												: <></>
											}
											<li class="nav-item">
												<a
													href="#"
													class={ `nav-link ${isActive(CurrentTab.value === "search")} text-dark` }
													onClick={ (e: Event): void => {
														e.preventDefault();
														CurrentTab.set("search");
													} }
												>
													<IconSearch class="me-1" />
													<Locale k="WORLD_VIEW_EXPLORATION" />
												</a>
											</li>
										</>
										: <></>
									}
								</ul>
							</div>

							{ CurrentTab.value === "reward"
								? <div id="world-map-reward" class="card-body">
									{ !selectedValue
										? <div class="text-center py-4 text-secondary">
											<Locale k="WORLD_VIEW_SELECT_NODE" />
										</div>
										: <div class="row">
											{ selectedValue && selectedValue.type !== STAGE_SUB_TYPE.STORY
												? <>
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
																						<DropEquip equip={ reward.equip } count={ reward.count } />
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
																						<DropEquip equip={ reward.equip } count={ reward.count } />
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
																<Locale k="WORLD_VIEW_UNLOCK_CONDITION" />
															</div>
															<div class="card-body">
																<ul class="list-group">
																	{ selectedValue.prevIds.map(r => <li class="list-group-item">
																		<Locale
																			k="WORLD_VIEW_UNLOCK_CONDITION_ITEM"
																			p={ [<>
																				{ r.wid === "Story"
																					? <Locale k={ `WORLD_${r.wid}` } fallback={ r.wid } />
																					: <Locale k={ `WORLD_WORLD_${r.wid}_${r.cid}` } fallback={ r.cid } />
																				}
																				<span class="badge bg-warning text-dark ms-1 font-exo2">
																					{ r.text }
																				</span>
																			</>] }
																		/>
																	</li>) }
																</ul>
															</div>
														</div>
														<div class="card text-dark mt-2">
															<div class="card-header">
																<Locale k="WORLD_VIEW_CLEAR_CONDITION" />
															</div>
															<div class="card-body">
																<ul class="list-group">
																	{ selectedValue.missions.map(m => <li class="list-group-item">
																		{/* ★ <Locale k={ m } components={ { ref: UnitReference } } /> */ }
																		<div>
																			<IconStarFill class="me-2" />
																			<MissionText mission={ m } />
																		</div>
																		<small class="text-secondary ps-4">
																			<Locale plain k={ m } />
																		</small>
																	</li>) }
																</ul>
															</div>
														</div>
													</div>
												</>
												: <>
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
																						<DropEquip equip={ reward.equip } count={ reward.count } />
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
													<div class="col-12 col-md-6">
														<div class="card text-dark">
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
																						<DropEquip equip={ reward.equip } count={ reward.count } />
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
												</>
											}
										</div>
									}
								</div>
								: <></>
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
																	.map(unit => {
																		if (unit.uid.startsWith("Module_"))
																			return <DropUnit id={ unit.uid } />;

																		return <Link class="drop-unit" href={ `/units/${unit.uid}` }>
																			<DropUnit id={ unit.uid } />
																		</Link>;
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
								: <></>
							}
							{ CurrentTab.value === "enemy"
								? <div id="world-map-enemies" class="card-body text-center">
									{ !selectedValue
										? <div class="py-4 text-secondary">
											<Locale k="WORLD_VIEW_SELECT_NODE" />
										</div>
										: <>
											<div class="mb-2">
												<span class="badge bg-danger mx-1">
													<Locale
														k="WORLD_VIEW_ENEMY_TOTAL_EXP"
														p={ [<span class="font-exo2">{ TotalExp }</span>] }
													/>
												</span>
												<span class="badge bg-danger mx-1">
													<Locale
														k="WORLD_VIEW_ENEMY_TOTAL_SKILL_EXP"
														p={ [<span class="font-exo2">{ TotalSkillExp }</span>] }
													/>
												</span>

												<span class="badge bg-substory mx-1">
													<Locale
														k="WORLD_VIEW_ENEMY_PLAYER_EXP"
														p={ [<span class="font-exo2">
															{ PlayerExp >= 0
																? PlayerExp
																: <span class="text-secondary">
																	<Locale k="WORLD_VIEW_ENEMY_PLAYER_EXP_NONE" />
																</span>
															}
														</span>] }
													/>
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
															class={ `btn btn-outline-dark font-exo2 ${isActive(selectedWaveIndex.value === idx)}` }
															onClick={ (): void => selectedWaveIndex.set(idx) }
														>
															#{ idx + 1 }
															<span class="badge bg-warning text-dark ms-2">{ _.r }%</span>
														</button>) }
													</div>
												</div>
												<div class="mb-2">
													<span class="badge bg-warning text-dark mx-1">
														<Locale
															k="WORLD_VIEW_ENEMY_WAVE_EXP"
															p={ [<span class="font-exo2">{ CurrentWaveExp }</span>] }
														/>
													</span>
													<span class="badge bg-warning text-dark mx-1">
														<Locale
															k="WORLD_VIEW_ENEMY_WAVE_SKILL_EXP"
															p={ [<span class="font-exo2">{ CurrentSkillExp }</span>] }
														/>
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
													<IconChevronLeft />
												</span>
												<div class="enemy-grid">
													{ CurrentWave.map((enemy, pos) => <div>
														{ enemy
															? <>
																<img src={ `${AssetsRoot}/${ImageExt}/tbar/${enemy.enemy.icon}.${ImageExt}` } />
																<div class="my-1" style="font-size:0.8em;font-weight:bold">
																	<Locale k={ `ENEMY_${enemy.enemy.id}` } />
																</div>
																<span
																	class={ `badge bg-${(enemy.enemy.category & 1) ? "danger" : "substory"}` }
																>Lv.{ enemy.lv }</span>

																<Link href="#" class="stretched-link" onClick={ (e: Event): void => {
																	e.preventDefault();
																	OpenEnemyInfo(enemy.enemy, enemy.lv);
																} } />
															</>
															: <></>
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
													<IconChevronRight />
												</span>
											</div>
										</> }
								</div>
								: <></>
							}
							{ CurrentTab.value === "search"
								? <div id="world-map-search" class="card-body text-center">
									<MapSearchInfo searchInfo={ SearchInfo } />
								</div>
								: <></>
							}
						</div>
					</>
					: <div class="card mt-3 bg-dark text-light">
						<div class="card-header">
							{ props.wid === "Sub"
								? <h5 class="m-0 d-inline-block">{ WorldName }</h5>
								: props.wid === "Daily"
									? <>
										{ WorldName }
										<h5 class="m-0 d-inline-block">
											<span class="badge bg-warning text-dark ms-2">{ AreaName }</span>
										</h5>
									</>
									: <>
										{ WorldName }
										<h5 class="m-0 d-inline-block">
											<span class="badge bg-warning text-dark ms-2">
												<Locale k="WORLDS_WORLD_TITLE" p={ [props.mid] } /> :: { AreaName }
											</span>
										</h5>
									</>
							}
						</div>
						<div class="card-body">
							<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
								{ props.mid in MapDB && MapDB[props.mid].substory.map(x => <div class={ `col mt-1 mb-4 ${style.SubStoryGroup}` }>
									<div class="float-start me-2">
										<PCIcon class={ style.SubStoryGroupIcon } item={ x.icon } />
									</div>

									<span>
										<Locale plain k={ x.char } />
									</span>

									<div class="clearfix" />
									<div class={ style.SubStoryList }>
										{ x.list.map(y => {
											function conv (id: string | string[]): preact.VNode {
												if (Array.isArray(id)) { // Map
													const wid = /Chapter_[0-9]+(Ev.+)$/.exec(id[1]);
													if (!wid) // Not event
														return <>{ id[2] }</>;

													return <span class={ `badge ${style.SubStoryUnlockCondStage}` }>
														<Locale plain k={ `WORLD_${wid[1]}` } />
														<span class="ms-2">{ id[2] }</span>
													</span>;
												}
												return <Locale plain k={ id } />;
											}

											return <div class={ style.SubStory }>
												<PCIcon item={ y.icon } size={ 40 } />

												<span class="ms-2">
													<Locale plain k={ y.key } />
												</span>

												<div class={ style.SubStoryUnlock }>
													<IconUnlockFill class="me-2" />

													{ y.unlock.params
														.map(p => <span class={ style.SubStoryUnlockCond }>
															<Locale
																plain
																k={ `SUBSTORY_UNLOCK_${y.unlock.cond}` }
																p={ [conv(p)] }
															/>
														</span>)
														.gap(<Locale plain k={ `SUBSTORY_UNLOCK_JOIN_${y.unlock.type}` } />)
													}
												</div>
											</div>;
										}) }
									</div>
								</div>) }
							</div>
						</div>
					</div>
				}
			</div>;
		}) }
	/>;
};
export default MapView;
