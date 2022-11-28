import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Decimal from "decimal.js";

import { ACTOR_BODY_TYPE } from "@/types/Enums";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { UnitDialogueAudioType } from "@/types/DB/Dialogue";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension, RarityDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";

import { DBSourceConverter, GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import RarityBadge from "@/components/rarity-badge";
import UnitBadge from "@/components/unit-badge";
import EquipIcon from "@/components/equip-icon";
import SourceBadge from "@/components/source-badge";
import DropEquip from "@/components/drop-equip";
import PopupBase from "@/components/popup/base";
import EquipPopup from "@/components/popup/equip-popup";

import ResearchTree from "../../components/research-tree";

import { SubpageProps } from "..";

import style from "../style.module.scss";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

const BasicTab: FunctionalComponent<SubpageProps> = ({ display, unit, skinIndex, SkinList }) => {
	const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip, DBSourceConverter);
	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

	const selectedEquip = objState<FilterableEquip | null>(null);
	const equipPopupDisplay = objState<boolean>(false);
	const researchTreeDisplay = objState<boolean>(false);
	const introAudioLocale = objState<UnitDialogueAudioType>(unit.introVoice[0] || "ko");

	const imageExt = ImageExtension();

	const ExclusiveEquip = FilterableEquipDB
		.filter(x => x.limit && x.limit.some(y => y === unit.uid));

	const CraftTime = ((): string => {
		const duration = unit.craft;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return [h, m, s].map(x => x.toString().padStart(2, "0")).join(":");
	})();

	const Favor = {
		clear: Decimal.mul(unit.favor.clear, 5)
			.floor()
			.div(100)
			.toNumber(),
		death: Decimal.mul(unit.favor.death, 2).toNumber(),
		assistant: Decimal.mul(unit.favor.assistant, 1).toNumber(),
	};

	const promotion = unit.promotions && unit.promotions[unit.promotions.length - 1];

	function convWeapon (inp: string): preact.ComponentChildren {
		return inp.split(" / ")
			.gap(<hr class="my-1" />);
	}

	function convData (data: number[]): number[] {
		return [
			data[0], // Atk
			data[2], // Speed
			data[5], // Assist
			data[4], // Def
			data[3], // HP
			data[1], // AtkRate
		];
	}
	function convLabel (data: number[], labels: string[]): Array<string[]> {
		const rating = [
			"E",
			"D", "D+",
			"C", "C+",
			"B", "B+",
			"A", "A+",
			"S", "S+",
		];
		return [
			[labels[0], rating[data[0]], "", ""],
			[labels[2], rating[data[2]], "", ""],
			[labels[5], rating[data[5]], "", ""],
			[labels[4], rating[data[4]], "", ""],
			[labels[3], rating[data[3]], "", ""],
			[labels[1], rating[data[1]], "", ""],
		].map(r => {
			r[0] = LocaleGet(`UNIT_VIEW_SPEC_CHART_${r[0].toUpperCase()}`);
			return r;
		});
	}

	const introVoiceUrl = `${AssetsRoot}/audio/voice-${introAudioLocale.value}/${unit.uid}_Intro.mp3`;

	return <div style={ { display: display ? "" : "none" } }>
		{/* 번호, 소속, 등급, 승급, 유형, 역할 */ }

		<div class="row mb-3">
			<h2 class="font-ibm">
				<Locale plain k={ `UNIT_${unit.uid}` } />
			</h2>
			<h5 class="text-secondary font-exo2">
				No. { unit.id }
			</h5>
		</div>

		<div class="row pt-2">
			<div class="col-12 col-lg-7">
				<div class={ `card text-light mx-3 mt-3 p-3 ${style.IntroduceText}` }>
					<Locale plain k={ `UNIT_INTRO_${unit.uid}` } />

					{ unit.introVoice.length > 0
						? <div class={ style.IntroduceVoice }>
							<div class="input-group">
								<div class="input-group-text">
									<Icon icon="mic-fill" class="me-1" />
								</div>

								<button
									class={ `btn btn-primary ${isActive(introAudioLocale.value === "ko")}` }
									disabled={ !unit.introVoice.includes("ko") }
									onClick={ (): void => introAudioLocale.set("ko") }
								>한국어</button>
								<button
									class={ `btn btn-primary ${isActive(introAudioLocale.value === "jp")}` }
									disabled={ !unit.introVoice.includes("jp") }
									onClick={ (): void => introAudioLocale.set("jp") }
								>日本語 N</button>
								<button
									class={ `btn btn-primary ${isActive(introAudioLocale.value === "jpdmm")}` }
									disabled={ !unit.introVoice.includes("jpdmm") }
									onClick={ (): void => introAudioLocale.set("jpdmm") }
								>日本語 R</button>
							</div>

							<audio src={ introVoiceUrl } type="audio/mp3" controls preload="none" volume="0.5" />
						</div>
						: <></>
					}
				</div>

				<div class="my-4 mx-3">
					<div class={ `card ${style.SpecChartWrapper}` }>
						<Radar
							plugins={ [{
								id: "_a",
								afterDraw (chart, args, options) {
									const ctx = chart.ctx;
									const box = chart.scales.r;

									const _font = chart.options.font || {};
									const font = `11px ${_font.family || "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"}`;
									const font2 = `26px ${_font.family || "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"}`;

									(box as any)._pointLabelItems.forEach((item, i) => {
										ctx.textAlign = "center";
										ctx.textBaseline = "top";

										const l = chart.data.labels![i] as string[];
										ctx.save();

										ctx.font = font;
										ctx.fillStyle = "#ddbb66";
										ctx.fillText(l[0], item.x, item.y + 4);

										ctx.font = font2;
										ctx.fillStyle = "#fff";
										ctx.fillText(l[1], item.x, item.y + 16 * 1.2);

										ctx.restore();
									});
								},
							}] }
							data={ {
								labels: convLabel(unit.chart, ["Atk", "AtkRate", "Speed", "HP", "Def", "Assist"]),
								datasets: [{
									data: convData(unit.chart),
									fill: true,
									backgroundColor: "#ffee66dd",
								}],
							} }
							options={ {
								aspectRatio: 1,
								elements: {
									point: {
										radius: 0,
										backgroundColor: "transparent",
										borderColor: "transparent",
									},
								},
								events: [],
								plugins: {
									legend: { display: false },
								},
								scales: {
									r: {
										min: 0,
										max: 10,
										ticks: { display: false },
										grid: { color: "rgba(255,255,255,0.025)" },
										angleLines: { color: "#999" },
										pointLabels: {
											font: { size: 10 },
											color: "transparent",
										},
									},
								},
							} }
						/>
					</div>
				</div>
			</div>

			<div class="col-12 col-lg-5">
				<div class="container table-unit-modal my-3">
					<table class={ `table ${style.InfoTable}` }>
						<tbody>
							<tr>
								<th class="bg-dark text-light">
									<Locale k="UNIT_VIEW_FACTION" />
								</th>
								<td>
									<img
										class={ style.GroupIcon }
										src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` }
									/>

									<span class="break-keep">
										<Locale k={ `UNIT_GROUP_${unit.group}` } />
									</span>
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-light"><Locale k="UNIT_VIEW_HEIGHT" /></th>
								<td class="font-exo2">{ unit.height }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_WEIGHT" /></th>
								<td class="font-exo2">{ unit.weight }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_BATTLESTYLE" /></th>
								<td class="text-break font-exo2">{ convWeapon(unit.weapon1) }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_WEAPON" /></th>
								<td class="text-break font-exo2">{ convWeapon(unit.weapon2) }</td>
							</tr>

							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_COMPANY" /></th>
								<td class="text-break">
									{ unit.company
										? <Locale
											plain
											k={ `UNIT_COMPANY_${unit.company}` }
											fallback={ unit.company }
										/>
										: <span class="text-secondary">
											<Locale plain k="UNIT_COMPANY_Undefined" />
										</span>
									}
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_MAKER" /></th>
								<td class="text-break">
									{ unit.maker
										? <Locale
											plain
											k={ `UNIT_MAKER_${unit.maker}` }
											fallback={ unit.maker }
										/>
										: <span class="text-secondary">
											<Locale plain k="UNIT_MAKER_Undefined" />
										</span>
									}
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_COUNTRY" /></th>
								<td class="text-break">
									{ unit.country
										? <>
											<img
												class={ `me-2 ${style.UnitCountry}` }
												src={ `${AssetsRoot}/flags/unit_country/${unit.country}.png` }
											/>
											<Locale
												plain
												k={ `UNIT_COUNTRY_${unit.country}` }
												fallback={ unit.country }
											/>
										</>
										: <span class="text-secondary">
											<Locale plain k="UNIT_COUNTRY_Undefined" />
										</span>
									}
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_AGE" /></th>
								<td class="text-break">
									{ unit.body === ACTOR_BODY_TYPE.BIOROID
										? unit.age
											? <Locale plain k="UNIT_AGE" p={ [unit.age] } />
											: <span class="text-secondary">
												<Locale plain k="UNIT_AGE_Undefined" />
											</span>
										: <span class="text-secondary">-</span>
									}
								</td>
							</tr>

							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_GRADE" /></th>
								<td class="text-break">
									<RarityBadge rarity={ unit.rarity } size="medium">
										<Locale
											k="COMMON_UNIT_GRADE_FORMAT"
											p={ [<span class="font-exo2">
												{ RarityDisplay[unit.rarity] }
											</span>] }
										/>
									</RarityBadge>
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_PROMOTION" /></th>
								<td class="text-break">
									{ promotion
										? <RarityBadge rarity={ promotion } size="medium">
											<Locale
												k="UNIT_VIEW_PROMOTION_BADGE"
												p={ [<span class="font-exo2">
													{ RarityDisplay[promotion] }
												</span>] }
											/>
										</RarityBadge>
										: <span class="text-secondary">
											<Locale k="UNIT_VIEW_PROMOTION_BADGE_EMPTY" />
										</span>
									}
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_TYPE" /></th>
								<td class="text-break">
									<UnitBadge type={ unit.type } size="large" transparent black />
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_ROLE" /></th>
								<td class="text-break">
									<UnitBadge role={ unit.role } size="large" transparent black />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{ ExclusiveEquip.length > 0
				? <div class="alert alert-primary mt-3">
					<div>
						<Locale k="UNIT_VIEW_PRIVATE_EQUIP" />
					</div>
					<EquipPopup
						asSub
						equip={ selectedEquip.value }
						display={ equipPopupDisplay.value }
						onHidden={ (): void => {
							equipPopupDisplay.set(false);
							selectedEquip.set(null);
						} }
					/>
					{ ExclusiveEquip.map(limited => <Link
						href="#"
						onClick={ (e): void => {
							e.preventDefault();
							selectedEquip.set(limited);
							equipPopupDisplay.set(true);
						} }
					>
						<DropEquip class="limited-item-card" equip={ limited } />
					</Link>) }
				</div>
				: <></>
			}

			{ unit.body !== ACTOR_BODY_TYPE.AGS
				? <table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th><Locale k="UNIT_VIEW_FAVOR_PRESENT" /></th>
							<th><Locale k="UNIT_VIEW_FAVOR_VICTORY" /></th>
							<th class="d-none d-md-table-cell"><Locale k="UNIT_VIEW_FAVOR_RETIRE" /></th>
							<th class="d-none d-md-table-cell"><Locale k="UNIT_VIEW_FAVOR_ASSISTANT" /></th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center">
							<td>
								<Locale k="UNIT_VIEW_FAVOR_MULTIPLY" p={ [unit.favor.present.toFixed(2)] } />
							</td>
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.clear] } /></span>
							</td>
							<td class="d-none d-md-table-cell">
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_M" p={ [Favor.death] } /></span>
							</td>
							<td class="d-none d-md-table-cell">
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.assistant] } /></span>
							</td>
						</tr>
						<tr class="d-md-none">
							<th class="bg-dark text-white"><Locale k="UNIT_VIEW_FAVOR_RETIRE" /></th>
							<th class="bg-dark text-white"><Locale k="UNIT_VIEW_FAVOR_ASSISTANT" /></th>
						</tr>
						<tr class="d-md-none text-center">
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_M" p={ [Favor.death] } /></span>
							</td>
							<td>
								<span class="badge bg-danger"><Locale k="UNIT_VIEW_FAVOR_P" p={ [Favor.assistant] } /></span>
							</td>
						</tr>
					</tbody>
				</table>
				: <></>
			}

			<div class="container">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th><Locale k="UNIT_VIEW_DROPS" /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="px-0 py-1 drop-list">
								{ unit.source.length === 0 && !unit.craft
									? <div class="p-3">
										<span class="text-secondary">
											<Locale k="UNIT_VIEW_DROPS_EMPTY" />
										</span>
									</div>
									: <>
										{ unit.craft
											? <span class={ `badge bg-dark mx-2 my-1 ${style.CreationBadge}` }>
												{ unit.cost
													? <div class={ style.CostInfo }>
														<div class="d-block d-sm-inline-block">
															<span class="pe-3 font-exo2">
																<img class="res-icon" src={ `${AssetsRoot}/res-component.png` } />
																{ FormatNumber(unit.cost.res[0]) }
															</span>
															<span class="pe-3 font-exo2">
																<img class="res-icon" src={ `${AssetsRoot}/res-nutrition.png` } />
																{ FormatNumber(unit.cost.res[1]) }
															</span>
															<span class="pe-sm-3 font-exo2">
																<img class="res-icon" src={ `${AssetsRoot}/res-power.png` } />
																{ FormatNumber(unit.cost.res[2]) }
															</span>
														</div>
														<span>
															<Icon class="me-1" icon="hourglass-split" />
															<span class="font-exo2">{ CraftTime }</span>
														</span>

														{ unit.research && <span>
															<PopupBase
																display={ researchTreeDisplay.value }
																size="lg"
																footerVariant="dark"
																footerText="white"
																footerClass="justify-content-start"
																header={ <div class="text-start">
																	<Locale k="UNIT_RESEARCH_TREE" />
																</div> }
																onHidden={ (): void => researchTreeDisplay.set(false) }
															>
																<div class="bg-dark">
																	<ResearchTree unit={ unit } research={ unit.research } />
																</div>
															</PopupBase>
															<button
																class="ms-3 btn btn-light btn-sm"
																onClick={ (e) => {
																	e.preventDefault();
																	researchTreeDisplay.set(true);
																} }
															>
																<Locale k="UNIT_RESEARCH_TREE" />
															</button>
														</span> }

														<hr class="my-2" />

														<div class="container">
															<div class="row row-cols-auto">
																{ unit.cost.aicore > 0
																	? <span class="badge bg-semilight text-dark me-1 mb-1">
																		<EquipIcon class="me-2 vertical-align-middle" image="UI_Icon_Consumable_AICore" size="24" />
																		<Locale k="CONSUMABLE_TestItem_4" />
																		&nbsp;x{ FormatNumber(unit.cost.aicore) }
																	</span>
																	: <></>
																}
																{ unit.cost.items.map(e => {
																	const item = ConsumableDB.find(c => c.key === e.item);
																	if (!item) return <>-</>;

																	return <span class="badge bg-semilight text-dark me-1 mb-1">
																		<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
																		<Locale k={ `CONSUMABLE_${item.key}` } />
																		&nbsp;x{ FormatNumber(e.count) }
																	</span>;
																}) }
															</div>
														</div>
													</div>
													: <h6 class="m-0 p-0">
														<Icon icon="hammer" />
														<strong>
															<span class="ps-1 pe-3">
																<Locale k="UNIT_VIEW_DROPS_CREATIONTIME" />
															</span>
															<span class="font-exo2">{ CraftTime }</span>
														</strong>
													</h6>
												}
											</span>
											: <></>
										}

										{ unit.source.map((area, aindex) => <div>
											{ unit.craft || aindex > 0 ? <hr class="my-1" /> : <></> }
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
									</>
								}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div >;
};
export default BasicTab;
