import { Component, RenderableProps } from "preact";
import { Link } from "preact-router";

import { EWDB } from "@/types/DB/EW";
import { Consumable } from "@/types/DB/Consumable";
import { MapEnemyData } from "@/types/DB/Map";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale, { LocaleGet } from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/components/loader";
import Icon from "@/components/bootstrap-icon";
import DropItem from "@/components/drop-item";
import TbarIcon from "@/components/tbar-icon";
import EnemyPopup from "@/components/popup/enemy-popup";
import BuffList from "@/components/buff-list";

import { Char } from "@/components/skill-description/components";

import style from "./style.module.scss";

interface EternalWarProps {
	mid?: string;
}
interface EternalWarState {
	mid: string;
	sid: string;

	curTab: "reward" | "enemy" | "suitproh";

	selectedWave: number;
	selectedWaveIndex: number;

	selectedEnemy: FilterableEnemy | null;
	selectedEnemyLevel: number;
	enemyModalDisplay: boolean;

}

interface WaveEnemyInfo extends MapEnemyData {
	enemy: FilterableEnemy;
}

class EternalWar extends Component<EternalWarProps, EternalWarState> {
	constructor (props: RenderableProps<EternalWarProps>) {
		super();
		this.state = {
			mid: props.mid || "",
			sid: "1",

			curTab: "reward",

			selectedWave: 0,
			selectedWaveIndex: 0,

			selectedEnemy: null,
			selectedEnemyLevel: 1,
			enemyModalDisplay: false,
		};

		SetMeta(["description", "twitter:description"], "변화의 성소 정보를 표시합니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_ETERNALWAR"));
	}

	componentWillReceiveProps (nextProps: RenderableProps<EternalWarProps>): void {
		this.setState({
			mid: nextProps.mid || "",
		});
	}

	private GoBack (): void {
		window.history.back();
	}

	private OpenEnemyInfo (enemy: FilterableEnemy, level: number): void {
		this.setState({
			selectedEnemy: enemy,
			selectedEnemyLevel: level,
			enemyModalDisplay: true,
		});
	}

	render (props: RenderableProps<EternalWarProps>, state: EternalWarState): preact.VNode {
		const mid = state.mid || "";
		const muid = (mid && parseInt(mid.replace(/^EW/, ""), 10)) || 0;

		const ImageExt = ImageExtension();

		return <div class={ style.EternalWarPage }>
			<div class="mb-3">
				<h2 >
					<Locale k="MENU_ETERNALWAR" />
				</h2>
				{ state.mid
					? <h4>
						<Locale k={ `EW_${mid}` } />
					</h4>
					: <></>
				}
			</div>

			{ state.mid
				? <div class="mb-5">
					<button class="btn btn-dark" onClick={ (): void => this.GoBack() }>
						<Locale k="COMMON_BACK" />
					</button>
				</div>
				: <div class="mb-5" />
			}

			<Loader json={ [StaticDB.EW, StaticDB.Consumable, StaticDB.FilterableEnemy] } content={ (): preact.VNode => {
				const EWDB = GetJson<EWDB>(StaticDB.EW);
				const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
				const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

				const alterium = ConsumableDB.find(y => y.key === "Consumable_EWMPMetal");
				const rAlterium = ConsumableDB.find(y => y.key === "Consumable_RefinedMineral");

				const CurrentWave = mid
					? ((): Array<WaveEnemyInfo | null> => {
						if (!EWDB[mid][state.sid].waves[state.selectedWave]) return new Array(9).fill(null);
						if (!EWDB[mid][state.sid].waves[state.selectedWave][state.selectedWaveIndex]) return new Array(9).fill(null);

						const e = EWDB[mid][state.sid].waves[state.selectedWave][state.selectedWaveIndex].e;
						if (!e) return new Array(9).fill(null);

						return e
							.map(x => {
								if (!x) return null;

								const enemy = FilterableEnemyDB.find(y => y.id === x.id);
								if (!enemy) return null;

								return { enemy, ...x };
							});
					})()
					: [];

				const SuitabilityProhibitionArea = (): preact.VNode => {
					const d = EWDB[mid][state.sid];

					return <>
						{ d.prohibition.map(x => <div class="mt-2 card bg-dark text-light text-start">
							<div class="card-header text-center">
								<strong>
									<Locale plain k="EW_PROHIBITION" />
								</strong>
							</div>
							<div class="card-body p-1">
								{ x.squad
									? <div>
										<strong>
											<Icon icon="dot" />
											<Locale plain k="EW_PROHIBITION_SQUAD" />
										</strong>
										<span class="badge bg-warning text-dark">
											<Locale plain k={ `UNIT_GROUP_${x.squad}` } />
										</span>
									</div>
									: <></>
								}

								<div class="mx-2">
									<strong>
										<Locale plain k="EW_PROHIBITION_UNIT" />
									</strong>
									<span class="mx-2 badge bg-warning text-dark">
										<Locale plain k={ x.desc } />
									</span>
								</div>
							</div>
						</div>) }

						{ d.suitability.map(x => <div class="mt-2 card bg-dark text-light text-start">
							<div class="card-header text-center">
								<strong>
									<Locale plain k="EW_SUITABILITY" />
								</strong>
							</div>
							<div class="card-body p-1">
								<div class="mx-2">
									<strong>
										<Locale k="EW_SUITABILITY_TARGET" />
									</strong>
									<div class="ps-2">
										{ [
											...x.squads.map(q => <span class="badge bg-warning text-dark m-1">
												<Locale plain k={ `UNIT_GROUP_${q}` } />
											</span>),
											...x.chars.map(q => <Char class="m-1" uid={ q } />)
										] }
									</div>
								</div>
								<hr class="mx-1 mt-2 mb-1" />
								<div class="mx-2">
									<strong class="text-light">
										{ ParseDescriptionText(
											(LocaleGet(x.descGroup) || "")
												.toString()
												.replace(/&([lg]t);/g, (p0, p1) => p1 === "lt" ? "<" : ">"),
										) }
									</strong>
									<div class="ps-2">

										{ ParseDescriptionText(
											(LocaleGet(x.descStage) || "")
												.toString()
												.replace(/&([lg]t);/g, (p0, p1) => p1 === "lt" ? "<" : ">"),
										) }
									</div>
								</div>
								<hr class="mx-1 mt-2 mb-1" />
								<BuffList list={ [x.effect] } level={ x.lv } />
							</div>
						</div>) }
					</>;
				};

				const EnemyArea = (): preact.VNode => {
					const Waves = EWDB[mid][state.sid].waves;

					return <div class="card">
						<div class={ `card-body text-center ${style.Enemies}` }>
							{ Waves.map((wave, waveIdx) => <Link
								href="#"
								class="wave-button"
								onClick={ (e: Event): void => {
									e.preventDefault();
									this.setState({
										selectedWave: waveIdx,
										selectedWaveIndex: 0,
									});
								} }
							>
								<img
									class="current-map-marker"
									src={ `${AssetsRoot}/map-current.png` }
									style={ { display: waveIdx === state.selectedWave ? "" : "none" } } />
								<TbarIcon icon="TbarIcon_MP_NightChick_RV" size={ 42 } />
							</Link>) }
							<div class="mt-3">
								<div class="mb-3">
									<div class="btn btn-group">
										<button
											class="btn btn-substory dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											data-bs-auto-close="outside"
											aria-expanded="false"
										>
											#{ state.selectedWaveIndex + 1 }
											<small class="ms-1">/ { (Waves && Waves[state.selectedWave].length) || "???" }</small>
											{/* <span class="badge bg-warning text-dark ms-1">
												{ new Decimal(
													(Waves &&
														Waves[state.selectedWave] &&
														Waves[state.selectedWave][state.selectedWaveIndex] &&
														Waves[state.selectedWave][state.selectedWaveIndex].r) ||
													"0")
													.toFixed(3)
													.replace(/\.?0+$/, "")
												}%
											</span> */}
										</button>
										<ul class={ `dropdown-menu ${style.DropDown}` }>
											{ Waves[state.selectedWave].map((_, idx) => <li>
												<a
													href="#"
													class={ `dropdown-item ${isActive(state.selectedWaveIndex === idx)}` }
													onClick={ (e): void => {
														e.preventDefault();
														e.stopPropagation();
														this.setState({ selectedWaveIndex: idx });
													} }
												>
													#{ idx + 1 }
													<small class="ms-1">/ { (Waves && Waves[state.selectedWave].length) || "???" }</small>
													{/* <span class="badge bg-warning text-dark ms-1">
														{ new Decimal(_.r || "0")
															.toFixed(3)
															.replace(/\.?0+$/, "")
														}%
													</span> */}
												</a>
											</li>) }
										</ul>
									</div>
								</div>

								<div class="enemy-grid-parent">
									<span
										class="m-3 p-1"
										style={ {
											fontSize: "3em",
											opacity: state.selectedWave === 0 ? 0.4 : 1,
											cursor: state.selectedWave === 0 ? "" : "pointer",
										} }
										onClick={ (): void => {
											if (state.selectedWave > 0)
												this.setState({ selectedWave: state.selectedWave - 1 });
										} }
									>
										<Icon icon="chevron-left" />
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
														class={ `badge bg-${enemy.enemy.isBoss ? "danger" : "substory"}` }
													>Lv.{ enemy.lv }</span>

													<Link href="#" class="stretched-link" onClick={ (e: Event): void => {
														e.preventDefault();
														this.OpenEnemyInfo(enemy.enemy, enemy.lv);
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
											opacity: state.selectedWave === Waves.length - 1 ? 0.4 : 1,
											cursor: state.selectedWave === Waves.length - 1 ? "" : "pointer",
										} }
										onClick={ (): void => {
											if (state.selectedWave < Waves.length - 1)
												this.setState({ selectedWave: state.selectedWave + 1 });
										} }
									>
										<Icon icon="chevron-right" />
									</span>
								</div>
							</div>
						</div>
					</div>;
				};

				return !state.mid
					? <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
						{ Object.keys(EWDB)
							.map(cid => <div class="col mb-3">
								<div class={ `card bg-dark text-light ${style.ChapterCard}` }>
									<div class="card-header">
										<Locale k={ `EW_${cid}` } />
									</div>

									<div class={ style.ChapterContent }>
										<img src={ `${AssetsRoot}/eternalwar/EW_Chapter_${cid.replace(/^EW/, "")}.png` } />

										<div class={ style.ChapterDesc }>
											<div><Locale k={ `EW_DESC_${cid}` } /></div>
										</div>
									</div>

									<Link class="stretched-link unit-stretched" href={ `/eternalwar/${cid}` } />
								</div>
							</div>)
						}
					</div>
					: <div class="row">
						<div class="col-12 col-lg-6">
							<div class="list-group">
								<div class={ `list-group-item ${style.StageImage}` }>
									<img src={ `${AssetsRoot}/eternalwar/EW_Stage_${`0${muid}`.substr(-2)}.png` } />
								</div>

								<button
									class="btn btn-substory dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									data-bs-auto-close="outside"
									aria-expanded="false"
								>
									<Locale k={ `EW_STAGE_SIMPLE_${mid}_Stage_${`0${state.sid}`.substr(-2)}` } />
								</button>
								<ul class={ `dropdown-menu ${style.DropDown}` }>
									{ Object.keys(EWDB[mid]).map(sid => <li>
										<a
											href="#"
											class={ `dropdown-item ${isActive(state.sid === sid)}` }
											onClick={ (e): void => {
												e.preventDefault();
												e.stopPropagation();
												this.setState({
													sid,
													selectedWave: 0,
													selectedWaveIndex: 0,
												});
											} }
										>
											<Locale k={ `EW_STAGE_SIMPLE_${mid}_Stage_${`0${sid}`.substr(-2)}` } />
										</a>
									</li>) }
								</ul>
							</div>
						</div>
						<div class={ `col-12 col-lg-6 ${style.RightSide}` }>
							<div class="sticky-lg-top">
								<div class="card bg-dark text-light">
									<div class={ style.StageTitle }>
										<span>
											<Locale k={ `EW_STAGE_${mid}_Stage_${`0${state.sid}`.substr(-2)}` } />
										</span>
									</div>
								</div>

								<ul class="nav nav-tabs mt-3">
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(state.curTab === "reward")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												this.setState({ curTab: "reward" });
											} }
										>
											<Icon icon="award-fill" class="me-1" />
											<Locale plain k="EW_STAGE_TAB_REWARD" />
										</a>
									</li>
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(state.curTab === "suitproh")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												this.setState({ curTab: "suitproh" });
											} }
										>
											<Icon icon="clipboard-data" class="me-1" />
											<Locale plain k="EW_STAGE_TAB_SUIT_PROH" />
										</a>
									</li>
									<li class="nav-item">
										<a
											href="#"
											class={ `nav-link ${isActive(state.curTab === "enemy")} text-dark` }
											onClick={ (e: Event): void => {
												e.preventDefault();
												this.setState({ curTab: "enemy" });
											} }
										>
											<Icon icon="bug-fill" class="me-1" />
											<Locale plain k="EW_STAGE_TAB_ENEMY" />
										</a>
									</li>
								</ul>
								<div class="border border-top-0 p-2">
									{ state.curTab === "reward"
										? <>
											<div class="card">
												<div class="card-header bg-warning">
													<Locale k="EW_STAGE_CLEAR_REWARD" />
												</div>
												<div class="card-body">
													<div class="row row-cols-1 row-cols-lg-2 px-2">
														{ EWDB[mid][state.sid].rewards.map(r => {
															const cs = ConsumableDB.find(y => y.key === r.item);
															if (cs) return <DropItem item={ cs } count={ r.count } noIcon />;
															return <></>;
														}) }
													</div>
												</div>
											</div>

											{ ((): preact.VNode => {
												const reward = EWDB[mid][state.sid].reward;

												return <div class="row g-2">
													<div class="col-6">
														<div class="card mt-2">
															<div class="card-header bg-warning">
																<Locale k="EW_STAGE_CLEAR_REGEN_UP" />
															</div>
															<div class="card-body">
																<DropItem
																	item={ alterium! }
																	count={ reward.mineral.regen }
																	countPart={ <span class="float-end badge bg-dark text-warning ms-2 mt-1">
																		+{ reward.mineral.regen } / 1h
																	</span> }
																	noIcon
																	transcluent={ reward.mineral.regen === 0 }
																/>
																<DropItem
																	item={ rAlterium! }
																	count={ reward.refined.regen }
																	countPart={ <span class="float-end badge bg-dark text-warning ms-2 mt-1">
																		+{ reward.refined.regen } / 1h
																	</span> }
																	noIcon
																	transcluent={ reward.refined.regen === 0 }
																/>
															</div>
														</div>
													</div>
													<div class="col-6">
														<div class="card mt-2">
															<div class="card-header bg-warning">
																<Locale k="EW_STAGE_CLEAR_MAX_UP" />
															</div>
															<div class="card-body">
																<DropItem
																	item={ alterium! }
																	count={ reward.mineral.max }
																	countPart={ <span class="float-end badge bg-dark text-warning ms-2 mt-1">
																		+{ reward.mineral.max }
																	</span> }
																	noIcon
																	transcluent={ reward.mineral.max === 0 }
																/>
																<DropItem
																	item={ rAlterium! }
																	count={ reward.refined.max }
																	countPart={ <span class="float-end badge bg-dark text-warning ms-2 mt-1">
																		+{ reward.refined.max }
																	</span> }
																	noIcon
																	transcluent={ reward.refined.max === 0 }
																/>
															</div>
														</div>
													</div>
												</div>;
											})() }
										</>
										: state.curTab === "suitproh"
											? SuitabilityProhibitionArea()
											: EnemyArea()
									}
								</div>
							</div>
						</div>
					</div >;
			} } />

			<EnemyPopup
				asSub
				enemy={ state.selectedEnemy }
				level={ state.selectedEnemyLevel }
				display={ state.enemyModalDisplay }
				onHidden={ (): void => this.setState({ enemyModalDisplay: false }) }
			/>
		</div >;
	}
}
export default EternalWar;
