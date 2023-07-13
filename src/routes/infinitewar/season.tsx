import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link, route } from "preact-router";

import { IWSeason, IWStage } from "@/types/DB/IW";
import { Consumable } from "@/types/DB/Consumable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { FormatNumber, isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/components/loader";
import IconMap from "@/components/bootstrap-icon/icons/Map";
import IconAwardFill from "@/components/bootstrap-icon/icons/AwardFill";
import IconChevronDoubleDown from "@/components/bootstrap-icon/icons/ChevronDoubleDown";
import IconChevronDown from "@/components/bootstrap-icon/icons/ChevronDown";
import IconChevronUp from "@/components/bootstrap-icon/icons/ChevronUp";
import IconChevronDoubleUp from "@/components/bootstrap-icon/icons/ChevronDoubleUp";
import IconCaretRightFill from "@/components/bootstrap-icon/icons/CaretRightFill";
import UnitFace from "@/components/unit-face";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import EnemyPopup from "@/components/popup/enemy-popup";

import ItemReward from "./components/ItemReward";

import style from "./style.module.scss";

interface InfiniteWarSeasonProps {
	season: string;
	stage?: string;
}

const InfiniteWarSeason: FunctionalComponent<InfiniteWarSeasonProps> = (props) => {
	const [currentTab, setCurrentTab] = useState<"stage" | "reward">("stage");
	const [rewardTab, setRewardTab] = useState<"stage" | "battle" | "total">("stage");

	const [selectedStageIdx, setSelectedStageIdx] = useState(1);
	const [selectedPhase, setSelectedPhase] = useState(0);

	const [selectedEnemy, setSelectedEnemy] = useState<FilterableEnemy | null>(null);
	const [selectedEnemyLevel, setSelectedEnemyLevel] = useState(1);
	const [enemyPopupDisplay, setEnemyPopupDisplay] = useState(false);

	const imgExt = ImageExtension();

	function OpenEnemyInfo (enemy: FilterableEnemy, level: number): void {
		setSelectedEnemy(enemy);
		setSelectedEnemyLevel(level);
		setEnemyPopupDisplay(true);
	}

	useEffect(() => {
		if (props.stage)
			setSelectedStageIdx(parseInt(props.stage, 10));
	}, [props.stage]);

	return <Loader
		json={ [StaticDB.IWSeason, `iw/${props.season}`, StaticDB.FilterableEnemy] }
		content={ () => {
			const seasons = GetJson<IWSeason[]>(StaticDB.IWSeason);
			const season = seasons.find(e => e.key === props.season);
			if (!season) {
				route("/infinitewar", true);
				return <></>;
			}

			const enemies = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
			const consumables = GetJson<Consumable[]>(StaticDB.Consumable);

			const stages = GetJson<IWStage[]>(`iw/${props.season}`);
			const selectedStage = stages[selectedStageIdx - 1] || stages[0];

			if (selectedPhase >= selectedStage.phase.length) {
				setSelectedPhase(0);
				return <></>;
			}

			const maxStageIdx = stages.length;

			const inlineEnemy = selectedStage.monster.group.filter(r => r).length > 1
				? null
				: enemies.find(r => r.id === selectedStage.phase[selectedPhase].id) || null;

			return <>
				<button class="btn btn-dark" onClick={ (): void => window.history.back() }>
					<Locale k="COMMON_BACK" />
				</button>

				{/*
				<div class={ BuildClass("d-none", "d-lg-block", style.IWPage) }>
					<div class={ style.IWLobby }>
						<button class="btn btn-light" onClick={ (): void => window.history.back() }>
							<Locale k="COMMON_BACK" />
						</button>

						<img class={ style.BG } src={ `${AssetsRoot}/${imgExt}/iw/${season.bg}.${imgExt}` } />

						<div class={ style.Char }>
							<img class={ style.PC } src={ `${AssetsRoot}/${imgExt}/full/${season.char.id}_0_O.${imgExt}` } />
						</div>

						<div class={ style.Bottom }>
							<div class={ style.Banner }>
								<img src={ `${AssetsRoot}/${imgExt}/iw/${season.monster}.${imgExt}` } />

								<div class={ style.Title }>
									<h1>
										<Locale plain k={ `IWSEASON_${season.key}_TITLE` } />
									</h1>
									<h3>
										<Locale plain k={ `IWSEASON_${season.key}_SUBTITLE` } />
									</h3>
									<h2>
										<Locale plain k={ `IWSEASON_${season.key}_MOB` } />
									</h2>
								</div>

								<div class={ style.Date }>
									<span>{ season.date[0] }</span>
									~
									<span>{ season.date[1] }</span>
								</div>
							</div>

							<div class={ style.BonusList }>
								<h4>
									<Locale k="IW_IW_Bonus" />
								</h4>

								{ season.bonus.map(b => {
									return <div class={ BuildClass("col", style.BonusUnit) }>
										<UnitFace uid={ b.char } />
										<div>
											<div class={ style.BonusRate }>
												{ (Math.round(b.rate * 10000) / 100).toString().replace(/\.0+$/, "") }%
											</div>

											<Locale plain k={ `UNIT_${b.char}` } />
										</div>
									</div>;
								}) }
							</div>
						</div>
					</div>
				</div>
				<div class={ BuildClass("d-block", "d-lg-none", style.IWMobilePage) }>
					<button class="btn btn-dark" onClick={ (): void => window.history.back() }>
						<Locale k="COMMON_BACK" />
					</button>

					<div class={ style.Date }>
						<span>{ season.date[0] }</span>
						<div>~</div>
						<span>{ season.date[1] }</span>
					</div>
					<div class={ style.Banner }>
						<img src={ `${AssetsRoot}/${imgExt}/iw/${season.monster}.${imgExt}` } />

						<div class={ style.Title }>
							<h1>
								<Locale plain k={ `IWSEASON_${season.key}_TITLE` } />
							</h1>
							<h3>
								<Locale plain k={ `IWSEASON_${season.key}_SUBTITLE` } />
							</h3>
							<h2>
								<Locale plain k={ `IWSEASON_${season.key}_MOB` } />
							</h2>
						</div>
					</div>

					<div class={ style.BonusList }>
						<h4>
							<Locale k="IW_IW_Bonus" />
						</h4>

						{ season.bonus.map(b => {
							return <div class={ BuildClass("col", style.BonusUnit) }>
								<UnitFace uid={ b.char } />
								<div>
									<div class={ style.BonusRate }>
										{ (Math.round(b.rate * 10000) / 100).toString().replace(/\.0+$/, "") }%
									</div>

									<Locale plain k={ `UNIT_${b.char}` } />
								</div>
							</div>;
						}) }
					</div>
				</div>
				*/}
				<ul class="nav nav-tabs m-auto">
					<li class="nav-item">
						<a
							href="#"
							class={ `nav-link ${isActive(currentTab === "stage")} text-dark` }
							onClick={ (e: Event): void => {
								e.preventDefault();
								setCurrentTab("stage");
							} }
						>
							<IconMap class="me-1" />
							<Locale k="IW_Tab_Stage" />
						</a>
					</li>
					<li class="nav-item">
						<a
							href="#"
							class={ `nav-link ${isActive(currentTab === "reward")} text-dark` }
							onClick={ (e: Event): void => {
								e.preventDefault();
								setCurrentTab("reward");
							} }
						>
							<IconAwardFill class="me-1" />
							<Locale k="IW_Tab_Reward" />
						</a>
					</li>
				</ul>

				{ currentTab === "stage"
					? <>
						<div class={ BuildClass(style.IWPage) }>
							<div class={ style.Banner }>
								<img src={ `${AssetsRoot}/${imgExt}/iw/${season.monster}.${imgExt}` } />

								<div class={ style.Title }>
									<h1>
										<Locale plain k={ `IWSEASON_${season.key}_TITLE` } />
									</h1>
									<h3>
										<Locale plain k={ `IWSEASON_${season.key}_SUBTITLE` } />
									</h3>
									<h2>
										<Locale plain k={ `IWSEASON_${season.key}_MOB` } />
									</h2>

									<div class={ style.Date }>
										<span>{ season.date[0] }</span>
										<div>~</div>
										<span>{ season.date[1] }</span>
									</div>
								</div>

								<div class={ style.BonusList }>
									{/* <h4>
								<Locale k="IW_IW_Bonus" />
							</h4> */}

									{ season.bonus.map(b => {
										return <BootstrapTooltip
											content={ <div>
												<Locale plain k={ `UNIT_${b.char}` } />
											</div> }
										>
											<div class={ BuildClass("col", style.BonusUnit) }>
												<UnitFace class={ style.BonusFace } uid={ b.char } />
												<div class={ style.BonusRate }>
													{ (Math.round(b.rate * 10000) / 100).toString().replace(/\.0+$/, "") }%
												</div>

												<a href={ `/units/${b.char}` } class="stretched-link" target="_blank" />
											</div>
										</BootstrapTooltip>;
									}) }
								</div>
							</div>
						</div>

						<div class={ BuildClass("mt-3", style.Stages) }>
							<div class={ BuildClass("input-group", "mb-2", style.StageInput) }>
								<button
									class="btn btn-secondary"
									onClick={ (): void => setSelectedStageIdx(1) }
								>
									<IconChevronDoubleDown />
								</button>
								<button
									class="btn btn-secondary"
									onClick={ (): void => setSelectedStageIdx(Math.max(1, selectedStageIdx - 1)) }
								>
									<IconChevronDown />
								</button>

								<div class="input-group-text">
									<Locale k="IW_IW_LV" />
								</div>

								<input
									class="form-control font-exo2"
									value={ selectedStageIdx }
									onChange={ (e: Event): void => setSelectedStageIdx(
										parseInt((e.target as HTMLInputElement).value, 10),
									) }
								/>

								<div class="input-group-text">
									/ { maxStageIdx }
								</div>

								<button
									class="btn btn-secondary"
									onClick={ (): void => setSelectedStageIdx(Math.min(maxStageIdx, selectedStageIdx + 1)) }
								>
									<IconChevronUp />
								</button>
								<button
									class="btn btn-secondary"
									onClick={ (): void => setSelectedStageIdx(maxStageIdx) }
								>
									<IconChevronDoubleUp />
								</button>
							</div>

							{ selectedStage.phase.length > 1
								? <div class="btn-group my-1">
									{ selectedStage.phase.map((p, i) => {
										return <button
											class={ BuildClass("btn", "btn-danger", isActive(selectedPhase === i)) }
											style={ { wordBreak: "keep-all" } }
											onClick={ e => {
												e.preventDefault();
												setSelectedPhase(i);
											} }
										>
											<Locale k="IW_IW_Phase" p={ [<strong class="text-warning">{ i + 1 }</strong>] } />
											{ i > 0 && selectedStage.phase[i - 1].damage > 0
												? <>
													<br />
													<small class={ style.PhaseDMG }>
														<Locale
															k="IW_IW_PhaseDMG"
															p={ [FormatNumber(selectedStage.phase[i - 1].damage)] }
														/>
													</small>
												</>
												: <></>
											}
										</button>;
									}) }
								</div>
								: <></>
							}

							{ selectedStage && selectedStage.monster.group.filter(e => e).length > 1
								? <div>
									<div class="enemy-grid">
										{ selectedStage.monster.group.map((eid, pos) => {
											const enemy = eid && enemies.find(r => r.id === eid);

											return <div class="d-inline-block position-relative">
												{ enemy
													? <>
														<img src={ `${AssetsRoot}/${imgExt}/tbar/${enemy.icon}.${imgExt}` } />
														<div class="my-1" style="font-size:0.8em;font-weight:bold">
															<Locale k={ `ENEMY_${enemy.id}` } />
														</div>
														<span
															class={ `badge bg-${(enemy.category & 1) ? "danger" : "substory"}` }
														>Lv.{ selectedStage.monster.lv }</span>

														<Link href="#" class="stretched-link" onClick={ (e: Event): void => {
															e.preventDefault();
															OpenEnemyInfo(enemy, selectedStage.monster.lv);
														} } />
													</>
													: <></>
												}
											</div>;
										}) }
									</div>
								</div>
								: <>
									<EnemyPopup
										key={ `iw-seaon-${props.season}-enemy-stage${selectedStageIdx}-phase${selectedPhase}` }
										inline // 팝업으로 표시하지 않기
										noFamily // 이름 같은 전투원 묶지 않기
										noLink // url 표시하지 않기
										noLevelChangable // 레벨 고정
										noStages // 등장 스테이지 숨기기
										asSub

										__hp={ [selectedStage.monster.maxHP, 0] }

										enemy={ inlineEnemy }
										level={ selectedStage.monster.lv }
									/>
								</>
							}

							<EnemyPopup
								asSub
								enemy={ selectedEnemy }
								level={ selectedEnemyLevel }
								display={ enemyPopupDisplay }
								onHidden={ (): void => setEnemyPopupDisplay(false) }
							/>
						</div>
					</>
					: <>
						<div class="d-block d-lg-none mt-3">
							<ul class="nav nav-tabs m-auto">
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(rewardTab === "stage")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setRewardTab("stage");
										} }
									>
										{/* <IconAwardFill class="me-1" /> */ }
										<Locale k="IW_Reward_Stage" />
									</a>
								</li>
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(rewardTab === "battle")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setRewardTab("battle");
										} }
									>
										{/* <IconAwardFill class="me-1" /> */ }
										<Locale k="IW_Reward_Battle" />
									</a>
								</li>
								<li class="nav-item">
									<a
										href="#"
										class={ `nav-link ${isActive(rewardTab === "total")} text-dark` }
										onClick={ (e: Event): void => {
											e.preventDefault();
											setRewardTab("total");
										} }
									>
										{/* <IconAwardFill class="me-1" /> */ }
										<Locale k="IW_Reward_Total" />
									</a>
								</li>
							</ul>
						</div>

						<div class="row py-3">
							<div
								class={ BuildClass(
									"col-12", "col-xl-4",
									"d-lg-block", rewardTab === "stage" ? undefined : "d-none",
								) }
							>
								<h4 class="text-center">
									<Locale k="IW_Reward_Stage" />
								</h4>

								<table class={ BuildClass("table", "table-borderless", "table-striped", style.RewardTable) }>
									<thead>
										<tr>
											<th>
												<Locale k="IW_Reward_LV" />
											</th>
											<th />
											<th>
												<Locale k="IW_Reward_Reward" />
											</th>
										</tr>
									</thead>
									<tbody>
										{ stages.map((r, i) => {
											if (r.reward) {
												const item = consumables.find(s => s.key === r.reward);
												if (!item) return <></>;

												return <tr>
													<td class="align-middle">
														{ FormatNumber(i + 1) }
													</td>
													<td class="align-middle">
														<IconCaretRightFill />
													</td>
													<td>
														<ItemReward item={ item } />
													</td>
												</tr>;
											} else
												return <></>;
										}) }
									</tbody>
								</table>
							</div>
							<div
								class={ BuildClass(
									"col-12", "col-lg-6", "col-xl-4",
									"d-lg-block", rewardTab === "battle" ? undefined : "d-none",
								) }
							>
								<h4 class="text-center">
									<Locale k="IW_Reward_Battle" />
								</h4>

								<table class={ BuildClass("table", "table-borderless", "table-striped", style.RewardTable) }>
									<thead>
										<tr>
											<th>
												<Locale k="IW_Reward_Score" />
											</th>
											<th />
											<th>
												<Locale k="IW_Reward_Reward" />
											</th>
										</tr>
									</thead>
									<tbody>
										{ season.rewards.battle.map(r => <tr>
											<td class="align-middle">
												{ FormatNumber(r.score) }
											</td>
											<td class="align-middle">
												<IconCaretRightFill />
											</td>
											<td>
												{ r.items.map(c => {
													const item = consumables.find(s => s.key === c.key);
													if (!item) return <></>;

													return <ItemReward item={ item } count={ c.count } />;
												}) }
											</td>
										</tr>) }
									</tbody>
								</table>
							</div>
							<div
								class={ BuildClass(
									"col-12", "col-lg-6", "col-xl-4",
									"d-lg-block", rewardTab === "total" ? undefined : "d-none",
								) }
							>
								<h4 class="text-center">
									<Locale k="IW_Reward_Total" />
								</h4>

								<table class={ BuildClass("table", "table-borderless", "table-striped", style.RewardTable) }>
									<thead>
										<tr>
											<th>
												<Locale k="IW_Reward_Score" />
											</th>
											<th />
											<th>
												<Locale k="IW_Reward_Reward" />
											</th>
										</tr>
									</thead>
									<tbody>
										{ season.rewards.total.map(r => <tr>
											<td class="align-middle">
												{ FormatNumber(r.score) }
											</td>
											<td class="align-middle">
												<IconCaretRightFill />
											</td>
											<td>
												{ r.items.map(c => {
													const item = consumables.find(s => s.key === c.key);
													if (!item) return <></>;

													return <ItemReward item={ item } count={ c.count } />;
												}) }
											</td>
										</tr>) }
									</tbody>
								</table>
							</div>
						</div>
					</>
				}
			</>;
		} }
	/>;
};
export default InfiniteWarSeason;
