import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { Link, route } from "preact-router";

import { ACTOR_GRADE, STAGE_SUB_TYPE, UNLOCK_COND } from "@/types/Enums";
import { MapEnemyData, MapNodeEntity, Maps, World } from "@/types/DB/Map";
import { RawReward, RewardTypeBase } from "@/types/Reward";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { StoryMetadata, StorySpec } from "@/types/Story/Story";

import { useUpdate } from "@/libs/hooks";
import { AssetsRoot, ImageExtension, NewMapList, SubStoryUnit } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { FormatNumber, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import MapPosition from "@/libs/MapPosition";
import { CurrentDB } from "@/libs/DB";

import { GetJson, JsonLoaderCore, StaticDB } from "@/libs/Loader";
import Locale, { LocaleGet } from "@/components/locale";
import Loading from "@/components/loading";
import Icons from "@/components/bootstrap-icon";
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

	const update = useUpdate();

	const [currentMode, setCurrentMode] = useState<"map" | "substory">("map");

	const [CurrentTab, setCurrentTab] = useState<"reward" | "drop" | "squad" | "enemy" | "search">("reward");
	const [selected, setSelected] = useState<MapNodeEntity | null>(null);

	const [selectedWave, setSelectedWave] = useState<number>(0);
	const [selectedWaveIndex, setSelectedWaveIndex] = useState<number>(0);

	const [selectedEnemy, setSelectedEnemy] = useState<FilterableEnemy | null>(null);
	const [selectedEnemyLevel, setSelectedEnemyLevel] = useState<number>(1);
	const [enemyModalDisplay, setEnemyModalDisplay] = useState<boolean>(false);

	const [selectedEquip, setSelectedEquip] = useState<FilterableEquip | null>(null);
	const [equipModalDisplay, setEquipModalDisplay] = useState<boolean>(false);

	const storyMetaTableRef = useRef<Record<string, StoryMetadata | false>>({});
	const mapBGRef = useRef<HTMLDivElement>(null);

	const selectedValue = selected;

	const isStory = /^[0-9]+$/.test(props.wid);
	const wid = isStory ? "Story" : props.wid;

	useEffect(() => {
		const MapDB = GetJson<World>(`map/${props.wid}`);
		const MapsDB = GetJson<Maps>(StaticDB.Maps);
		const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
		const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
		const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

		if (!MapDB) JsonLoaderCore(CurrentDB, `map/${props.wid}`).then(() => update());
		if (!MapsDB) JsonLoaderCore(CurrentDB, StaticDB.Maps).then(() => update());
		if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());
		if (!FilterableEquipDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEquip).then(() => update());
		if (!FilterableEnemyDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEnemy).then(() => update());
		if (!ConsumableDB) JsonLoaderCore(CurrentDB, StaticDB.Consumable).then(() => update());
	}, []);

	useEffect(() => {
		if (selectedValue) {
			const metaTable = storyMetaTableRef.current;

			if (!(selectedValue.key in metaTable)) {
				const cached = GetJson<StoryMetadata>(`story/${selectedValue.key}`);
				if (!cached) {
					JsonLoaderCore(CurrentDB, `story/${selectedValue.key}`)
						.then(() => {
							metaTable[selectedValue.key] = GetJson<StoryMetadata>(`story/${selectedValue.key}`);
						})
						.catch(() => {
							metaTable[selectedValue.key] = false;
						})
						.finally(() => {
							storyMetaTableRef.current = metaTable;
							update();
						});
				} else {
					metaTable[selectedValue.key] = cached;
					storyMetaTableRef.current = metaTable;
					update();
				}
			}
		}
	}, [selectedValue]);

	SetMeta(
		["description", "twitter:description"],
		`${LocaleGet(`WORLD_${wid}`)}의 제 ${props.mid}구역 정보를 표시합니다. 지역의 클리어 보상과 드랍 정보, 적 정보를 확인할 수 있습니다.`,
	);
	SetMeta("keywords", `,${LocaleGet(`WORLD_${wid}`)}`, true);
	SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${wid}_${props.mid}.png`);

	if (props.wid === "Sub")
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${wid}`));
	else if (isStory)
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${wid}`), LocaleGet("WORLDS_WORLD_TITLE", props.wid));
	else
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${wid}`), LocaleGet("WORLDS_WORLD_TITLE", props.mid));

	useEffect(() => {
		if (currentMode === "substory" && props.node !== "substory")
			setCurrentMode("map");
		else if (currentMode !== "substory" && props.node === "substory")
			setCurrentMode("substory");
	}, [currentMode, props.node]);

	const MapDB = GetJson<World>(`map/${props.wid}`);
	const MapsDB = GetJson<Maps>(StaticDB.Maps);
	const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
	const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
	const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
	if (!MapDB || !MapsDB || !FilterableUnitDB || !FilterableEquipDB || !FilterableEnemyDB || !ConsumableDB)
		return <Loading.Data />;

	const WorldName = <span class={ `font-ibm ${style.WorldName}` }>
		<Locale k={ `WORLD_${wid}` } fallback={ props.wid } />
	</span>;
	const AreaName = (props.mid in MapDB)
		? <Locale
			k={ `WORLD_WORLD_${props.wid}_${props.mid}` }
			fallback={ <Locale k={ "WORLDS_WORLD_TITLE" } p={ [isStory ? props.wid : props.mid] } /> }
		/>
		: <>???</>;

	const Waves = useMemo(() => selectedValue?.wave || [], [selectedValue]);

	const CurrentWave = useMemo((): Array<WaveEnemyInfo | null> => {
		if (!selectedValue || selectedValue.type === STAGE_SUB_TYPE.STORY)
			return new Array(9).fill(null);

		if (
			!(Waves[selectedWave] && Waves[selectedWave][selectedWaveIndex].e)
		) return new Array(9).fill(null);

		return Waves[selectedWave][selectedWaveIndex].e.enemy
			.map(x => {
				if (!x) return null;

				const enemy = FilterableEnemyDB.find(y => y.id === x.id);
				if (!enemy) return null;

				return {
					enemy,
					...x,
				};
			});
	}, [selectedValue, Waves, selectedWave, selectedWaveIndex, FilterableEnemyDB]);

	const UnitDrops = useMemo((): Array<FilterableUnit | ModuleUnit> => {
		if (!selectedValue) return [];

		const rarityTable = ["D", "C", "B", "A", "S", "SS"];
		const ids: string[] = [];
		const ret: Array<FilterableUnit | ModuleUnit> = [];
		(selectedValue.wave || []).forEach(_ => {
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
	}, [selectedValue, FilterableUnitDB]);
	const ItemDrops = useMemo((): Array<FilterableEquip | Consumable> => {
		if (!selectedValue) return [];

		const ids: string[] = [];
		const ret: Array<FilterableEquip | Consumable> = [];
		(selectedValue.wave || []).forEach(_ => {
			_.forEach(__ => {
				if (__.e) {
					__.e.drops
						.filter(x => !x.id.startsWith("Char_"))
						.map(x => {
							if (ids.includes(x.id)) return null;
							ids.push(x.id);

							if (x.id.startsWith("Equip_")) {
								const k = x.id.substring(6);
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
	}, [selectedValue, FilterableEquipDB, ConsumableDB]);
	const RewardDrops = useMemo((): RewardDropType[] => {
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
					const k = i.substring(6);
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
	}, [selectedValue, FilterableUnitDB, FilterableEquipDB, ConsumableDB]);

	const MapHardcoded = useMemo((): boolean => {
		if (!(props.wid in MapsDB)) return false;
		if (!(props.mid in MapsDB[props.wid])) return false;
		return MapsDB[props.wid][props.mid];
	}, [MapsDB, props.wid, props.mid]);
	const NodeList = useMemo((): MapNodeEntity[] => {
		const ret: MapNodeEntity[] = [];

		const area = MapDB[props.mid];
		if (!area) return ret;

		if (props.wid === "Sub")
			ret.push(...area.list.filter(n => n.text in SubStoryUnit));
		else
			ret.push(...area.list);

		return ret;
	}, [MapDB, props.mid]);

	const [CurrentWaveExp, CurrentSkillExp, PlayerExp] = useMemo((): [string, string, number] => {
		if (selectedValue && selectedValue.type !== STAGE_SUB_TYPE.STORY) {
			if (Waves[selectedWave] && Waves[selectedWave][selectedWaveIndex].e) {
				const wave = Waves[selectedWave][selectedWaveIndex].e;
				return [
					FormatNumber(wave.exp),
					FormatNumber(wave.sexp),
					selectedValue.playerExp,
				];
			};
		}
		return ["0", "0", 0];
	}, [selectedValue, selectedWave, selectedWaveIndex]);

	const [TotalExp, TotalSkillExp] = useMemo((): [string, string] => {
		if (selectedValue)
			return [
				FormatNumber(Waves.reduce(
					(p, c) => (p + c.reduce(
						(p1, c1) => Math.max(p1, (c1.e && c1.e.exp) || 0),
						0,
					) || 0),
					0,
				)),
				FormatNumber(Waves.reduce(
					(p, c) => (p + c.reduce(
						(p1, c1) => Math.max(p1, (c1.e && c1.e.sexp) || 0),
						0,
					) || 0),
					0,
				)),
			];

		return ["0", "0"];
	}, [selectedValue, Waves]);

	const SearchInfo = selectedValue
		? selectedValue.search || false
		: null;

	function SubstoryName (text: string): preact.VNode {
		const unit = FilterableUnitDB.find(x => x.uid === SubStoryUnit[text]);
		if (!unit) return <>???</>;
		return <Locale plain k={ `UNIT_${unit.uid}` } />;
	}

	useEffect(() => {
		if (props.node) {
			const found = NodeList.find(y => y.text === props.node);
			if (found)
				setSelected(found);
		}
	}, [props.node, NodeList]);

	function NodeChange (node: MapNodeEntity): void {
		if (node.type === STAGE_SUB_TYPE.STORY)
			setCurrentTab("reward");
		setSelectedWave(0);
		route(`/worlds/${props.wid}/${props.mid}/${node ? node.text : ""}`);
	}

	function OpenEnemyInfo (enemy: FilterableEnemy, level: number): void {
		setSelectedEnemy(enemy);
		setSelectedEnemyLevel(level);
		setEnemyModalDisplay(true);
	}

	const storyMeta = selectedValue && (selectedValue.key in storyMetaTableRef.current)
		? storyMetaTableRef.current[selectedValue.key]
		: undefined;

	const hasChapter = isStory && Object.keys(MapsDB[props.wid]).length > 1;

	const Rewardable = useMemo(() => {
		if (!selectedValue) return false;

		if (RewardDrops.length > 0) return true;
		if (selectedValue.prevIds.length > 0) return true;
		if (selectedValue.missions.filter(m => m).length > 0) return true;

		return false;

	}, [selectedValue, RewardDrops]);
	useEffect(() => {
		if (!Rewardable && CurrentTab === "reward")
			setCurrentTab("drop");
	}, [Rewardable, CurrentTab]);

	return <div class="worlds-map text-start">
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-dark" onClick={ (): void => {
					if (props.wid === "Sub")
						route("/worlds/");
					else if (isStory)
						route("/worlds/Story");
					else
						route(`/worlds/${props.wid}`);
				} }>
					<Icons.ArrowLeft class="me-1" />
					{ props.wid === "Sub"
						? <Locale k="WORLDS_BACK_TO_WORLDS" />
						: <Locale k="WORLDS_BACK_TO_AREAS" />
					}
				</button>
			</div>
			<div class="col text-end">
				{ currentMode === "map"
					? props.mid in MapDB && MapDB[props.mid].substory.length > 0
						? <button
							class="btn btn-dark"
							onClick={ e => {
								e.preventDefault();
								setCurrentMode("substory");
								route(`/worlds/${props.wid}/${props.mid}/substory`, true);
							} }
						>
							<Icons.ChatSquareTextFill class="me-1" />
							<Locale k="WORLDS_SUBSTORY" />
						</button>
						: <></>
					: <button
						class="btn btn-dark"
						onClick={ e => {
							e.preventDefault();
							setCurrentMode("map");
							route(`/worlds/${props.wid}/${props.mid}`, true);
						} }
					>
						<Icons.Compass class="me-1" />
						<Locale k="WORLDS_WORLD_MAP" />
					</button>
				}
			</div>
		</div>
		<hr />

		{ currentMode === "map"
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
											<Locale k="WORLDS_WORLD_TITLE" p={ [isStory ? props.wid : props.mid] } /> :: { AreaName }
										</span>
									</h5>
								</>
						}
					</div>
					<div
						class="worlds-map-bg"
						data-new={ NewMapList.includes(props.wid) ? "1" : "0" }
						ref={ mapBGRef }
					>
						{ hasChapter
							? <div class={ style.ChapterSelect }>
								{ Object.keys(MapsDB[props.wid])
									.map(k => <button
										class={ BuildClass("btn btn-sm me-1", isActive(props.mid === k, "btn-light", "btn-outline-light")) }
										onClick={ e => {
											e.preventDefault();
											route(`/worlds/${props.wid}/${k}`);
										} }
									>
										{ props.wid }-{ k }
									</button>)
								}
							</div>
							: <></>
						}
						<div>
							{ props.wid === "Sub"
								? NodeList.map(x => <Link
									href={ `/worlds/${props.wid}/${props.mid}/${x.text}` }
									onClick={ (): void => {
										setSelected(x);
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
											setSelected(x);
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
												setSelected(x);
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
											onSelect={ (node: MapNodeEntity, el: HTMLAnchorElement, x: number): void => {
												if (selected?.key !== node.key) {
													setSelected(node);
													NodeChange(node);
												}

												if (mapBGRef.current) {
													const c = mapBGRef.current;
													const w = c.clientWidth - 20; // 1em padding
													const ew = 96;

													console.log(c.scrollLeft, w, x, ew);
													if (
														(x + ew > c.scrollLeft + w) ||
														(x < c.scrollLeft)
													)
														c.scrollTo({
															left: x - w / 2,
															behavior: "smooth",
														});
												}
											} }
											selected={ selected }
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
								? <div class="float-end ms-3">
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
												<Icons.CaretRightFill class="mx-1" />
												Story
											</> }
										</span>
									}
								</span>

								<span class="font-ibm">
									<Locale plain k={ `WORLD_MAP_${props.wid}_${selectedValue.text}` } />
								</span>

								{ selectedValue
									? storyMeta === undefined
										? <div class="float-end">
											<Icons.ThreeDots class="mx-4" />
										</div>
										: storyMeta !== false
											? <div class="float-end">
												{ (storyMeta.spec & StorySpec.OP) !== 0
													? <button
														type="button"
														class="me-1 btn btn-sm btn-stat-hp"
														onClick={ e => {
															e.preventDefault();
															route(`/story/${selectedValue.key}/OP`);
														} }
													>
														<Icons.Book class="me-1" />
														OP
													</button>
													: <></>
												}
												{ (storyMeta.spec & StorySpec.MID) !== 0
													? Object.keys(storyMeta.index)
														.filter(k => k.startsWith("mid-"))
														.map(k => <button
															type="button"
															class="me-1 btn btn-sm btn-stat-hp"
															onClick={ e => {
																e.preventDefault();
																route(`/story/${selectedValue.key}/${k}`);
															} }
														>
															<Icons.Book class="me-1" />
															{ Object.keys(storyMeta.index).filter(k => k.startsWith("mid-")).length === 1
																? <>MID</>
																: <>MID { k.substring(4) }</>
															}
														</button>)
													: <></>
												}
												{ (storyMeta.spec & StorySpec.ED) !== 0
													? <button
														type="button"
														class="me-1 btn btn-sm btn-stat-hp"
														onClick={ e => {
															e.preventDefault();
															route(`/story/${selectedValue.key}/ED`);
														} }
													>
														<Icons.Book class="me-1" />
														{ selectedValue.type === STAGE_SUB_TYPE.STORY
															? <>Story</>
															: <>ED</>
														}
													</button>
													: <></>
												}
											</div>
											: <></>
									: <></>
								}
							</h5>
							<div>
								<Locale plain k={ `WORLD_MAP_DESC_${props.wid}_${selectedValue.text}` } />
							</div>
						</div>
					</div>
					: <></>
				}

				{ (Rewardable || (selectedValue && selectedValue!.type !== STAGE_SUB_TYPE.STORY)) && <div class="card mt-2">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							{ (Rewardable || true) && <li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(CurrentTab === "reward")} text-dark` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										setCurrentTab("reward");
									} }
								>
									{ selectedValue && selectedValue.type === STAGE_SUB_TYPE.STORY
										? <>
											<Icons.MusicNote class="me-1" />
											<Locale k="WORLD_VIEW_WATCH_REWARDS" />
										</>
										: <>
											<Icons.AwardFill class="me-1" />
											<Locale k="WORLD_VIEW_CLEAR_REWARDS" />
										</>
									}
								</a>
							</li> }
							{ selectedValue && selectedValue.type !== STAGE_SUB_TYPE.STORY
								? <>
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(CurrentTab === "drop")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												setCurrentTab("drop");
											} }
										>
											<Icons.GiftFill class="me-1" />
											<Locale k="WORLD_VIEW_DROPS" />
										</a>
									</li>
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(CurrentTab === "squad")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												setCurrentTab("squad");
											} }
										>
											<Icons.PersonBoundingBox class="me-1" />
											<Locale k="WORLD_VIEW_SQUAD" />
										</a>
									</li>
									{ Waves[selectedWave]
										? <>
											<li class="nav-item">
												<a
													href="#"
													class={ `nav-link ${isActive(CurrentTab === "enemy")} text-dark` }
													onClick={ (e: Event): void => {
														e.preventDefault();
														setCurrentTab("enemy");
													} }
												>
													<Icons.BugFill class="me-1" />
													<Locale k="WORLD_VIEW_ENEMY" />
												</a>
											</li>
										</>
										: <></>
									}
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(CurrentTab === "search")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												setCurrentTab("search");
											} }
										>
											<Icons.Search class="me-1" />
											<Locale k="WORLD_VIEW_EXPLORATION" />
										</a>
									</li>
								</>
								: <></>
							}
						</ul>
					</div>

					{ CurrentTab === "reward"
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
																					setSelectedEquip(reward.equip);
																					setEquipModalDisplay(true);
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
																					setSelectedEquip(reward.equip);
																					setEquipModalDisplay(true);
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
														{ selectedValue.prevIds.length === 0
															? <div class="text-secondary">
																<Locale plain k="WORLD_VIEW_CONDITION_EMPTY" />
															</div>
															: <ul class="list-group">
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
														}
													</div>
												</div>
												<div class="card text-dark mt-2">
													<div class="card-header">
														<Locale k="WORLD_VIEW_CLEAR_CONDITION" />
													</div>
													<div class="card-body">
														{ ((mm) => {
															if (mm.length === 0) {
																return <div class="text-secondary">
																	<Locale plain k="WORLD_VIEW_CONDITION_EMPTY" />
																</div>;
															}

															return <ul class="list-group">
																{ mm.map(m => <li class="list-group-item">
																	{/* ★ <Locale k={ m } components={ { ref: UnitReference } } /> */ }
																	<div>
																		<Icons.StarFill class="me-2" />
																		<MissionText mission={ m } />
																	</div>
																	<small class="text-secondary ps-4">
																		<Locale plain k={ m } />
																	</small>
																</li>) }
															</ul>;
														})(selectedValue.missions.filter(m => m)) }
													</div>
												</div>
											</div>
										</>
										: <>
											<div class="col-12 col-md-6">
												<div class="card text-dark">
													<div class="card-header">
														<Locale k="WORLD_VIEW_WATCH_REWARDS" />
													</div>
													<div class="card-body">
														<div
															class={ BuildClass(
																"px-2 row row-cols-1",
																`row-cols-lg-${RewardDrops.length === 0 ? 1 : 2}`,
															) }
														>
															{ RewardDrops.length === 0
																? <div class="text-center py-4 text-secondary">
																	<Locale k="WORLD_VIEW_WATCH_REWARDS_NONE" />
																</div>
																: RewardDrops
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
																					setSelectedEquip(reward.equip);
																					setEquipModalDisplay(true);
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
														<Locale k="WORLD_VIEW_UNLOCK_CONDITION" />
													</div>
													<div class="card-body">
														{ selectedValue.prevIds.length === 0
															? <div class="text-secondary">
																<Locale plain k="WORLD_VIEW_CONDITION_EMPTY" />
															</div>
															: <ul class="list-group">
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
														}
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
					{ CurrentTab === "drop"
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
																		setSelectedEquip(item);
																		setEquipModalDisplay(true);
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
					{ CurrentTab === "squad"
						? <div id="world-map-squad" class="card-body">
							<table class="table w-auto">
								<tbody>
									<tr>
										<th class="bg-dark text-bg-dark">
											<Locale k="WORLD_VIEW_SQUAD_MAXIMUM" />
										</th>
										<td>
											<Locale
												k="WORLD_VIEW_SQUAD_MAXIMUM_FORMAT"
												p={ [selectedValue?.squads.count ?? 0] }
											/>
										</td>
									</tr>
									<tr>
										<th class="bg-dark text-bg-dark">
											<Locale k="WORLD_VIEW_SQUAD_SHIFTS" />
										</th>
										<td>
											{ selectedValue?.squads.shift ?? 0 === 0
												? <Locale
													k="WORLD_VIEW_SQUAD_SHIFTS_FORMAT"
													p={ [selectedValue?.squads.count ?? 0] }
												/>
												: <strong class="text-danger">
													<Locale k="WORLD_VIEW_SQUAD_SHIFTS_CANNOT" />
												</strong>
											}
										</td>
									</tr>
									<tr>
										<th class="bg-dark text-bg-dark">
											<Locale k="WORLD_VIEW_SQUAD_FRIEND" />
										</th>
										<td>
											{ selectedValue?.squads.friend
												? <span class="text-success">
													<Locale k="WORLD_VIEW_SQUAD_FRIEND_YES" />
												</span>
												: <strong class="text-danger">
													<Locale k="WORLD_VIEW_SQUAD_FRIEND_NO" />
												</strong>
											}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						: <></>
					}
					{ CurrentTab === "enemy"
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
												setSelectedWave(waveIdx);
												setSelectedWaveIndex(0);
											}
										} }
									>
										<img
											class="current-map-marker"
											src={ `${AssetsRoot}/map-current.png` }
											style={ { display: waveIdx === selectedWave ? "" : "none" } } />
										<TbarIcon icon="TbarIcon_MP_NightChick_RV" size={ 42 } />
									</Link>) }
									<div class="mt-3">
										<div class="mb-3">
											<div class="btn btn-group">
												{ Waves[selectedWave].map((_, idx) => <button
													class={ `btn btn-outline-dark font-exo2 ${isActive(selectedWaveIndex === idx)}` }
													onClick={ (): void => setSelectedWaveIndex(idx) }
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
												opacity: selectedWave === 0 ? 0.4 : 1,
												cursor: selectedWave === 0 ? "" : "pointer",
											} }
											onClick={ (): void => {
												if (selectedWave > 0)
													setSelectedWave(selectedWave - 1);
											} }
										>
											<Icons.ChevronLeft />
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
												opacity: selectedWave === Waves.length - 1 ? 0.4 : 1,
												cursor: selectedWave === Waves.length - 1 ? "" : "pointer",
											} }
											onClick={ (): void => {
												if (selectedWave < Waves.length - 1)
													setSelectedWave(selectedWave + 1);
											} }
										>
											<Icons.ChevronRight />
										</span>
									</div>
								</> }
						</div>
						: <></>
					}
					{ CurrentTab === "search"
						? <div id="world-map-search" class="card-body text-center">
							<MapSearchInfo searchInfo={ SearchInfo } />
						</div>
						: <></>
					}
				</div> }
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
										<div class="float-end p-1 pe-2">
											<button
												type="button"
												class="me-1 btn btn-sm btn-stat-hp"
												onClick={ e => {
													e.preventDefault();
													route(`/story/${x.key}/${y.key}`);
												} }
											>
												<Icons.Book class="me-1" />
												Story
											</button>
										</div>

										<PCIcon item={ y.icon } size={ 40 } />

										<span class="ms-2">
											<Locale plain k={ y.key } />
										</span>

										<div>
											<div class={ style.SubStoryUnlock }>
												<Icons.UnlockFill class="me-2" />

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
										</div>
									</div>;
								}) }
							</div>
						</div>) }
					</div>
				</div>
			</div>
		}

		<EnemyPopup
			asSub
			enemy={ selectedEnemy }
			level={ selectedEnemyLevel }
			display={ enemyModalDisplay }
			onHidden={ (): void => setEnemyModalDisplay(false) }
		/>
		<EquipPopup
			asSub
			equip={ selectedEquip }
			display={ equipModalDisplay }
			onHidden={ (): void => setEquipModalDisplay(false) }
		/>
	</div>;
};
export default MapView;
