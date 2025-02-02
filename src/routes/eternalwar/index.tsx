import { Component, FunctionalComponent, RenderableProps } from "preact";
import { useEffect, useLayoutEffect, useState } from "preact/hooks";
import { Link } from "preact-router";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, EW_STAGE_DIFFICULTY, ROLE_TYPE } from "@/types/Enums";
import { EWChapter, EWDB } from "@/types/DB/EW";
import { Consumable } from "@/types/DB/Consumable";
import { Prohibition } from "@/types/Suitability";
import { EnemyCategory } from "@/types/DB/Enemy";
import { MapEnemyData } from "@/types/DB/Map";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { CurrentDB } from "@/libs/DB";
import { useUpdate } from "@/libs/hooks";
import { BuildClass } from "@/libs/Class";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Locale, { LocaleGet } from "@/components/locale";
import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/Loader";
import Icons from "@/components/bootstrap-icon";
import DropItem from "@/components/drop-item";
import TbarIcon from "@/components/tbar-icon";
import EnemyPopup from "@/components/popup/enemy-popup";
import BuffList from "@/components/buff-list";

import { Char } from "@/components/skill-description/components";

import style from "./style.module.scss";

interface WaveEnemyInfo extends MapEnemyData {
	enemy: FilterableEnemy;
}

interface EternalWarProps {
	mid?: string;
}

const EternalWar: FunctionalComponent<EternalWarProps> = (props) => {
	const update = useUpdate();

	const [mid, setMID] = useState(props.mid || "");
	const [sid, setSID] = useState("1");
	const [difficulty, setDifficulty] = useState<EW_STAGE_DIFFICULTY>(EW_STAGE_DIFFICULTY.EASY);

	const [curTab, setCurTab] = useState<"reward" | "enemy" | "suitproh">("reward");

	const [selectedWave, setSelectedWave] = useState(0);
	const [selectedWaveIndex, setSelectedWaveIndex] = useState(0);

	const [selectedEnemy, setSelectedEnemy] = useState<FilterableEnemy | null>(null);
	const [selectedEnemyLevel, setSelectedEnemyLevel] = useState(1);
	const [enemyModalDisplay, setEnemyModalDisplay] = useState(false);

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "변화의 성소 정보를 표시합니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_ETERNALWAR"));
	}, []);

	useLayoutEffect(() => {
		setMID(props.mid || "");
	}, [props.mid]);

	const GoBack = (): void => window.history.back();

	function OpenEnemyInfo (enemy: FilterableEnemy, level: number): void {
		setSelectedEnemy(enemy);
		setSelectedEnemyLevel(level);
		setEnemyModalDisplay(true);
	}

	const ImageExt = ImageExtension();
	const muid = (mid && parseInt(mid.replace(/^EW/, ""), 10)) || 0;

	const EWDB = GetJson<EWDB>(StaticDB.EW);
	if (!EWDB) JsonLoaderCore(CurrentDB, StaticDB.EW).then(r => update());

	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
	if (!ConsumableDB) JsonLoaderCore(CurrentDB, StaticDB.Consumable).then(r => update());

	const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
	if (!FilterableEnemyDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEnemy).then(r => update());

	if (!EWDB || !ConsumableDB || !FilterableEnemyDB) return <></>;

	function GetAvailableDifficulties (ch: EWChapter): EW_STAGE_DIFFICULTY[] {
		return Object.values(ch)
			.flatMap(r => Object.keys(r))
			.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as string[])
			.map(r => parseInt(r, 10) as EW_STAGE_DIFFICULTY);
	}

	const availableDifficulties = mid
		? GetAvailableDifficulties(EWDB[mid])
		: [];

	const alterium = ConsumableDB.find(y => y.key === "Consumable_EWMPMetal");
	const rAlterium = ConsumableDB.find(y => y.key === "Consumable_RefinedMineral");

	const [
		alterGet, alterMax, alterPer, refAlterGet, refAlterMax, refAlterPer,
		alterGetAll, alterMaxAll, alterPerAll, refAlterGetAll, refAlterMaxAll, refAlterPerAll,
	] = (() => {
		let alterGet = 0;
		let alterMax = 0;
		let alterPer = 0;
		let refAlterGet = 0;
		let refAlterMax = 0;
		let refAlterPer = 0;
		let alterGetAll = 0;
		let alterMaxAll = 0;
		let alterPerAll = 0;
		let refAlterGetAll = 0;
		let refAlterMaxAll = 0;
		let refAlterPerAll = 0;

		const _idx = /([0-9]+)/.exec(mid);
		const idx = _idx && _idx[1];
		const base = idx ? mid.substring(0, mid.indexOf(idx)) : mid;

		const dbKeys = Object.keys(EWDB)
			.filter(k => k.startsWith(base))
			.filter(k => k <= mid);

		dbKeys.forEach(k => {
			const db = EWDB[k];
			if (k === mid) {
				Object.keys(db)
					.filter(k2 => parseInt(k2, 10) <= parseInt(sid, 10))
					.map(k2 => db[k2])
					.forEach(d => {
						Object.keys(d).map(k2 => parseInt(k2, 10) as EW_STAGE_DIFFICULTY)
							.map(i => {
								const r = d[i];
								alterGetAll += r.rewards.find(w => w.item === "Consumable_EWMPMetal")?.count ?? 0;
								alterMaxAll += r.reward.mineral.max;
								alterPerAll += r.reward.mineral.regen;
								refAlterGetAll += r.rewards.find(w => w.item === "Consumable_RefinedMineral")?.count ?? 0;
								refAlterMaxAll += r.reward.refined.max;
								refAlterPerAll += r.reward.refined.regen;

								if (i === difficulty) {
									alterGet += r.rewards.find(w => w.item === "Consumable_EWMPMetal")?.count ?? 0;
									alterMax += r.reward.mineral.max;
									alterPer += r.reward.mineral.regen;
									refAlterGet += r.rewards.find(w => w.item === "Consumable_RefinedMineral")?.count ?? 0;
									refAlterMax += r.reward.refined.max;
									refAlterPer += r.reward.refined.regen;
								}
							});
					});
			} else {
				Object.values(db)
					.forEach(d => {
						Object.keys(d).map(k2 => parseInt(k2, 10) as EW_STAGE_DIFFICULTY)
							.map(i => {
								const r = d[i];
								alterGetAll += r.rewards.find(w => w.item === "Consumable_EWMPMetal")?.count ?? 0;
								alterMaxAll += r.reward.mineral.max;
								alterPerAll += r.reward.mineral.regen;
								refAlterGetAll += r.rewards.find(w => w.item === "Consumable_RefinedMineral")?.count ?? 0;
								refAlterMaxAll += r.reward.refined.max;
								refAlterPerAll += r.reward.refined.regen;

								if (i === difficulty) {
									alterGet += r.rewards.find(w => w.item === "Consumable_EWMPMetal")?.count ?? 0;
									alterMax += r.reward.mineral.max;
									alterPer += r.reward.mineral.regen;
									refAlterGet += r.rewards.find(w => w.item === "Consumable_RefinedMineral")?.count ?? 0;
									refAlterMax += r.reward.refined.max;
									refAlterPer += r.reward.refined.regen;
								}
							});
					});
			}
		});

		return [
			alterGet, alterMax, alterPer, refAlterGet, refAlterMax, refAlterPer,
			alterGetAll, alterMaxAll, alterPerAll, refAlterGetAll, refAlterMaxAll, refAlterPerAll,
		];
	})();

	const CurrentWave = mid
		? ((): Array<WaveEnemyInfo | null> => {
			const cur = EWDB[mid][sid][difficulty];

			if (!cur.waves[selectedWave]) return new Array(9).fill(null);
			if (!cur.waves[selectedWave][selectedWaveIndex]) return new Array(9).fill(null);

			const e = cur.waves[selectedWave][selectedWaveIndex].e;
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
		const d = EWDB[mid][sid][difficulty];

		const BodyDisplay = {
			[ACTOR_BODY_TYPE.BIOROID]: <Locale k="COMMON_UNIT_BODY_BIOROID" />,
			[ACTOR_BODY_TYPE.AGS]: <Locale k="COMMON_UNIT_BODY_AGS" />,
		};
		const RoleDisplay = {
			[ROLE_TYPE.ATTACKER]: <Locale k="COMMON_UNIT_ROLE_ATTACKER" />,
			[ROLE_TYPE.DEFENDER]: <Locale k="COMMON_UNIT_ROLE_DEFENDER" />,
			[ROLE_TYPE.SUPPORTER]: <Locale k="COMMON_UNIT_ROLE_SUPPORTER" />,
		};
		const ClassDisplay = {
			[ACTOR_CLASS.LIGHT]: <Locale k="COMMON_UNIT_TYPE_LIGHT" />,
			[ACTOR_CLASS.HEAVY]: <Locale k="COMMON_UNIT_TYPE_HEAVY" />,
			[ACTOR_CLASS.FLYING]: <Locale k="COMMON_UNIT_TYPE_MOBILITY" />,
		};

		const proh_Squads: string[] = [];
		const proh_Chars: Prohibition["char"][] = [];

		d.prohibition.forEach(x => {
			if (x.squad)
				proh_Squads.push(x.squad.substring(6));

			if (x.char.body !== ACTOR_BODY_TYPE.__MAX__ || x.char.role !== ROLE_TYPE.__MAX__ || x.char.class !== ACTOR_CLASS.__MAX__)
				proh_Chars.push(x.char);
		});

		return <>
			{ (proh_Squads.length > 0 || proh_Chars.length > 0)
				? <div class="mt-2 card bg-dark text-light text-start">
					<div class="card-header text-center">
						<strong>
							<Locale plain k="EW_PROHIBITION" />
						</strong>
					</div>
					<div class="card-body p-1">
						<div class={ style.ProhibitionBox }>
							{ proh_Squads.length > 0 && <>
								<div>
									<Icons.Dot />
									<Locale plain k="EW_PROHIBITION_SQUAD" />
								</div>
								<div>
									{ proh_Squads.map(x =>
										<span class="mx-2 badge bg-warning text-dark">
											<Locale plain k={ `UNIT_GROUP_${x}` } />
										</span>
									) }
								</div>
							</> }
							{ proh_Chars.length > 0 && <>
								<div>
									<Icons.Dot />
									<Locale plain k="EW_PROHIBITION_UNIT" />
								</div>
								<div>
									{ proh_Chars.map(x => <div>
										<span class="mx-2 badge bg-warning text-dark">
											{ [
												x.body !== ACTOR_BODY_TYPE.__MAX__
													? BodyDisplay[x.body]
													: <></>,
												x.class !== ACTOR_CLASS.__MAX__
													? ClassDisplay[x.class]
													: <></>,
												x.role !== ROLE_TYPE.__MAX__
													? RoleDisplay[x.role]
													: <></>,
											].gap(" ") }
										</span>
									</div>) }
								</div>
							</> }
						</div>
					</div>
				</div>
				: <></>
			}

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
					<BuffList uid={ `EW_Suitability_${mid}_${sid}_${difficulty}` } list={ [x.effect] } level={ x.lv } />
				</div>
			</div>) }
		</>;
	};

	const EnemyArea = (): preact.VNode => {
		const Waves = EWDB[mid][sid][difficulty].waves;

		return <div class="card">
			<div class={ `card-body text-center ${style.Enemies}` }>
				{ Waves.map((wave, waveIdx) => <Link
					href="#"
					class="wave-button"
					onClick={ (e: Event): void => {
						e.preventDefault();
						setSelectedWave(waveIdx);
						setSelectedWaveIndex(0);
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
							<button
								class="btn btn-substory dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								data-bs-auto-close="outside"
								aria-expanded="false"
							>
								#{ selectedWaveIndex + 1 }
								<small class="ms-1">/ { (Waves && Waves[selectedWave].length) || "???" }</small>
								{/* <span class="badge bg-warning text-dark ms-1">
									{ new Decimal(
										(Waves &&
											Waves[selectedWave] &&
											Waves[selectedWave][selectedWaveIndex] &&
											Waves[selectedWave][selectedWaveIndex].r) ||
										"0")
										.toFixed(3)
										.replace(/\.?0+$/, "")
									}%
								</span> */}
							</button>
							<ul class={ `dropdown-menu ${style.DropDown}` }>
								{ Waves[selectedWave].map((_, idx) => <li>
									<a
										href="#"
										class={ `dropdown-item ${isActive(selectedWaveIndex === idx)}` }
										onClick={ (e): void => {
											e.preventDefault();
											e.stopPropagation();
											setSelectedWaveIndex(idx);
										} }
									>
										#{ idx + 1 }
										<small class="ms-1">/ { (Waves && Waves[selectedWave].length) || "???" }</small>
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
											class={ `badge bg-${enemy.enemy.category === EnemyCategory.Boss ? "danger" : "substory"}` }
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
				</div>
			</div>
		</div >;
	};

	return <div class={ style.EternalWarPage }>
		<div class="mb-3">
			<h2 class="font-ibm">
				<Locale k="MENU_ETERNALWAR" />
			</h2>
			{ mid
				? <h4 class="font-ibm">
					<Locale k={ `EW_${mid}` } />
				</h4>
				: <></>
			}
		</div>

		{ mid
			? <>
				<div class="mb-5">
					<button class="btn btn-dark" onClick={ (): void => GoBack() }>
						<Locale k="COMMON_BACK" />
					</button>
				</div>
				<div class="row">
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
								<Locale k={ `EW_STAGE_SIMPLE_${mid}_Stage_${`0${sid}`.substr(-2)}` } />
							</button>
							<ul class={ `dropdown-menu ${style.DropDown}` }>
								{ Object.keys(EWDB[mid]).map(_sid => <li>
									<a
										href="#"
										class={ `dropdown-item ${isActive(_sid === sid)}` }
										onClick={ (e): void => {
											e.preventDefault();
											e.stopPropagation();

											setSID(_sid);
											setSelectedWave(selectedWave);
											setSelectedWaveIndex(0);
										} }
									>
										<Locale k={ `EW_STAGE_SIMPLE_${mid}_Stage_${`0${_sid}`.slice(-2)}` } />
									</a>
								</li>) }
							</ul>

							<div class="my-4 row">
								<div class="col-4">
									<button
										class={ BuildClass(
											style.DifficultyButton,
											"btn btn-sm",
											isActive(difficulty === EW_STAGE_DIFFICULTY.EASY, "btn-primary", "btn-dark"),
										) }
										disabled={ !availableDifficulties.includes(EW_STAGE_DIFFICULTY.EASY) }
										onClick={ e => {
											e.preventDefault();
											setDifficulty(EW_STAGE_DIFFICULTY.EASY);
										} }
									>
										EASY
									</button>
								</div>
								<div class="col-4">
									<button
										class={ BuildClass(
											style.DifficultyButton,
											"btn btn-sm",
											isActive(difficulty === EW_STAGE_DIFFICULTY.NORMAL, "btn-primary", "btn-dark"),
										) }
										disabled={ !availableDifficulties.includes(EW_STAGE_DIFFICULTY.NORMAL) }
										onClick={ e => {
											e.preventDefault();
											setDifficulty(EW_STAGE_DIFFICULTY.NORMAL);
										} }
									>
										NORMAL
									</button>
								</div>
								<div class="col-4">
									<button
										class={ BuildClass(
											style.DifficultyButton,
											"btn btn-sm",
											isActive(difficulty === EW_STAGE_DIFFICULTY.EXTREME, "btn-primary", "btn-dark"),
										) }
										disabled={ !availableDifficulties.includes(EW_STAGE_DIFFICULTY.EXTREME) }
										onClick={ e => {
											e.preventDefault();
											setDifficulty(EW_STAGE_DIFFICULTY.EXTREME);
										} }
									>
										EXTREME
									</button>
								</div>
							</div>

							<div class="my-4">
								<div class="card mt-2">
									<div class="card-header bg-warning">
										<Locale
											plain
											k="EW_STAGE_REWARD_SUMMARY"
											p={ [
												<span class="badge bg-dark me-1">
													{ EW_STAGE_DIFFICULTY[difficulty] }
												</span>
											] }
										/>
									</div>
									<div class="card-body">
										<div class="row">
											<div class="col-6">
												<DropItem
													item={ alterium! }
													countPart={ <div class="text-end clear-both">
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_INSTANT"
																p={ [FormatNumber(alterGet)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_MAXIMUM"
																p={ [FormatNumber(alterMax)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															+{ alterPer } / 1h
														</span>
													</div> }
													noIcon
												/>
											</div>
											<div class="col-6">
												<DropItem
													item={ rAlterium! }
													countPart={ <div class="text-end clear-both">
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_INSTANT"
																p={ [FormatNumber(refAlterGet)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_MAXIMUM"
																p={ [FormatNumber(refAlterMax)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															+{ refAlterPer } / 1h
														</span>
													</div> }
													noIcon
												/>
											</div>
										</div>
									</div>
								</div>

								<div class="card mt-2">
									<div class="card-header bg-warning">
										<Locale plain k="EW_STAGE_REWARD_SUMMARY_ALL" />
									</div>
									<div class="card-body">
										<div class="row">
											<div class="col-6">
												<DropItem
													item={ alterium! }
													countPart={ <div class="text-end clear-both">
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_INSTANT"
																p={ [FormatNumber(alterGetAll)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_MAXIMUM"
																p={ [FormatNumber(alterMaxAll)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															+{ alterPerAll } / 1h
														</span>
													</div> }
													noIcon
												/>
											</div>
											<div class="col-6">
												<DropItem
													item={ rAlterium! }
													countPart={ <div class="text-end clear-both">
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_INSTANT"
																p={ [FormatNumber(refAlterGetAll)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															<Locale
																k="EW_STAGE_REWARD_MAXIMUM"
																p={ [FormatNumber(refAlterMaxAll)] }
															/>
														</span>
														<span class="badge bg-dark text-warning ms-1 mt-1">
															+{ refAlterPerAll } / 1h
														</span>
													</div> }
													noIcon
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class={ `col-12 col-lg-6 ${style.RightSide}` }>
						<div class="sticky-lg-top">
							<div class="card bg-dark text-light">
								<div class={ style.StageTitle }>
									<span>
										<Locale k={ `EW_STAGE_${mid}_Stage_${`0${sid}`.substr(-2)}` } />
									</span>
								</div>
							</div>

							<ul class="nav nav-tabs mt-3">
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(curTab === "reward")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setCurTab("reward");
										} }
									>
										<Icons.AwardFill class="me-1" />
										<Locale plain k="EW_STAGE_TAB_REWARD" />
									</a>
								</li>
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(curTab === "suitproh")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setCurTab("suitproh");
										} }
									>
										<Icons.ClipboardData class="me-1" />
										<Locale plain k="EW_STAGE_TAB_SUIT_PROH" />
									</a>
								</li>
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(curTab === "enemy")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setCurTab("enemy");
										} }
									>
										<Icons.BugFill class="me-1" />
										<Locale plain k="EW_STAGE_TAB_ENEMY" />
									</a>
								</li>
							</ul>
							<div class="border border-top-0 p-2">
								{ curTab === "reward"
									? <>
										<div class="card">
											<div class="card-header bg-warning">
												<Locale k="EW_STAGE_CLEAR_REWARD" />
											</div>
											<div class="card-body">
												<div class="row row-cols-1 row-cols-lg-2 px-2">
													{ EWDB[mid][sid][difficulty].rewards.map(r => {
														const cs = ConsumableDB.find(y => y.key === r.item);
														if (cs) return <DropItem item={ cs } count={ r.count } noIcon />;
														return <></>;
													}) }
												</div>
											</div>
										</div>

										{ ((): preact.VNode => {
											const reward = EWDB[mid][sid][difficulty].reward;

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
									: curTab === "suitproh"
										? SuitabilityProhibitionArea()
										: EnemyArea()
								}
							</div>
						</div>
					</div>
				</div>
			</>
			: <>
				<div class="mb-5" />
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
					{ Object.keys(EWDB)
						.map(cid => <div class="col mb-3">
							<div class={ `card bg-dark text-light ${style.ChapterCard}` }>
								<div class="card-header">
									<Locale plain k={ `EW_${cid}` } />
								</div>

								<div class={ style.ChapterContent }>
									<img src={ `${AssetsRoot}/eternalwar/EW_Chapter_${cid.replace(/^EW/, "")}.png` } />

									<div class={ style.ChapterDesc }>
										<div class={ BuildClass(style.DifficultyBox) }>
											{ GetAvailableDifficulties(EWDB[cid]).map(d =>
												<span class="badge bg-light text-bg-light mx-2">
													{ EW_STAGE_DIFFICULTY[d] }
												</span>
											) }
										</div>

										<div class={ style.DescriptionText }>
											<Locale plain k={ `EW_DESC_${cid}` } />
										</div>
									</div>
								</div>

								<Link class="stretched-link unit-stretched" href={ `/eternalwar/${cid}` } />
							</div>
						</div>)
					}
				</div>
			</>
		}

		<EnemyPopup
			asSub
			enemy={ selectedEnemy }
			level={ selectedEnemyLevel }
			display={ enemyModalDisplay }
			onHidden={ (): void => setEnemyModalDisplay(false) }
		/>
	</div >;
};
export default EternalWar;
