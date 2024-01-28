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

import { ACTOR_BODY_TYPE, CHARTYPE_GIFTITEM_DAMAGE_TYPE } from "@/types/Enums";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { Consumable } from "@/types/DB/Consumable";
import { UnitDialogueAudioType } from "@/types/DB/Dialogue";
import { Unit } from "@/types/DB/Unit";

import { objState } from "@/libs/State";
import { CurrentLocale } from "@/libs/Locale";
import { BuildClass } from "@/libs/Class";
import { AssetsRoot, CurrentEvent, ImageExtension, PermanentEvents, RarityDisplay } from "@/libs/Const";
import { DecomposeHangulSyllable, FormatDate, FormatNumber, isActive } from "@/libs/Functions";
import { ParseDescriptionText } from "@/libs/FunctionsX";
import EntitySource from "@/libs/EntitySource";

import { DBSourceConverter, GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconHourglassSplit from "@/components/bootstrap-icon/icons/HourglassSplit";
import IconHammer from "@/components/bootstrap-icon/icons/Hammer";
import IconVolumeUpFill from "@/components/bootstrap-icon/icons/VolumeUpFill";
import IconMicFill from "@/components/bootstrap-icon/icons/MicFill";
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
	function getIntroVoice (voices: Unit["introVoice"], target: UnitDialogueAudioType): Unit["introVoice"][0] | undefined {
		return voices.find(r => Array.isArray(r) ? r[0] === target : r === target);
	}
	function hasIntroVoice (voices: Unit["introVoice"], target: UnitDialogueAudioType): boolean {
		return !!getIntroVoice(voices, target);
	}

	const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip, DBSourceConverter);
	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

	const selectedEquip = objState<FilterableEquip | null>(null);
	const equipPopupDisplay = objState<boolean>(false);
	const researchTreeDisplay = objState<boolean>(false);
	const introAudioLocale = objState<Unit["introVoice"][0]>(unit.introVoice.includes("ko") ? "ko" : unit.introVoice[0] || "ko");

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
			.gap(<div class={ style.GradientSeparator } />);
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

	function IsDefaultSecretRoomType (type: CHARTYPE_GIFTITEM_DAMAGE_TYPE): boolean {
		return ["Adult", "Loli", "AGS"].includes(type);
	}

	function PreprocessUnitIntro (uid: string): preact.VNode {
		const src = LocaleGet(`UNIT_INTRO_${uid}`);
		const ret: Array<string | preact.VNode> = [];

		if (uid === "PECS_Olivia") {
			const para = src.split("\n\n");
			const words = para[0].split(/(\s)/g);
			for (const word of words) {
				const cc = DecomposeHangulSyllable(word);

				const emp = !!cc && cc.initial === "ㅇ"; // is Hangul and ㅇ character
				if (emp) {
					ret.push(
						<strong class="text-warning">{ word[0] }</strong>,
						word.slice(1),
					);
				} else
					ret.push(word);
			}
			ret.push("\n\n");
			ret.push(para[1]);

			return <>{ ret.filter(x => x) }</>;
		}

		return <>{ src }</>;
	}

	const introVoiceUrl = (() => {
		const v = introAudioLocale.value;
		if (Array.isArray(v))
			return `${AssetsRoot}/audio/voice-${v[0]}/${unit.uid}_${v[1]}.mp3`;
		return `${AssetsRoot}/audio/voice-${v}/${unit.uid}_Intro.mp3`;
	})();

	const introVoiceTable: Record<UnitDialogueAudioType, string> = {
		"ko": "한국어",
		"jp": "日本語 N",
		"jpdmm": "日本語 R",
	};
	const introVoiceTableKeys = Object.keys(introVoiceTable) as UnitDialogueAudioType[];

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
					<div class="card-body p-0">
						<img
							class={ style.GroupIcon }
							src={ `${AssetsRoot}/${imageExt}/group/${unit.group.replace(/_[0-9]+$/, "")}.${imageExt}` }
						/>

						<div class={ style.IntroduceTextBody }>
							{ unit.uid === "PECS_Olivia" && CurrentLocale === "KR"
								? PreprocessUnitIntro(unit.uid)
								: <Locale plain k={ `UNIT_INTRO_${unit.uid}` } />
							}
						</div>
					</div>

					{ unit.introVoice.length > 0
						? <div class={ style.IntroduceVoice }>
							<div class="input-group">
								<div class="input-group-text text-sm">
									<IconMicFill />
								</div>

								{ introVoiceTableKeys.map(vk => <button
									class={ BuildClass(
										"btn",
										"btn-sm",
										isActive(
											introAudioLocale.value === vk,
											"btn-primary active",
											!hasIntroVoice(unit.introVoice, vk)
												? "btn-secondary"
												: "btn-primary",
										),
									) }
									disabled={ !hasIntroVoice(unit.introVoice, vk) }
									onClick={ (): void => introAudioLocale.set(getIntroVoice(unit.introVoice, vk)!) }
								>
									{ introAudioLocale.value === vk && <IconVolumeUpFill class="me-1" /> }
									{ introVoiceTable[vk] }
								</button>) }
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
								<th class="bg-dark text-light">
									<EquipIcon
										class="me-2"
										image="UI_Icon_Consumable_GiftItem_Damage"
										size="small"
									/>
									<span class="d-inline-block">
										<Locale k="UNIT_VIEW_SECRETROOM_TYPE" />
									</span>
								</th>
								<td class={ BuildClass(
									"font-exo2 align-middle",
									!IsDefaultSecretRoomType(unit.secretRoomType) && "text-danger fw-bold",
								) }>
									<Locale k={ `UNIT_VIEW_SECRETROOM_TYPE_${unit.secretRoomType.toUpperCase()}` } />
								</td>
							</tr>
							<tr>
								<th class="bg-dark text-light"><Locale k="UNIT_VIEW_RELEASEDATE" /></th>
								<td class="font-exo2">{ FormatDate(new Date(unit.releaseDate)) }</td>
							</tr>
							<tr>
								<th class="bg-dark text-light"><Locale k="UNIT_VIEW_HEIGHT" /></th>
								<td class="font-exo2">{ unit.height }</td>
							</tr>
							<tr>
								<th class="bg-dark text-white"><Locale k="UNIT_VIEW_WEIGHT" /></th>
								<td class="font-exo2">{ ParseDescriptionText(unit.weight) }</td>
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
										? <RarityBadge rarity={ promotion.to } size="medium">
											<Locale
												k="UNIT_VIEW_PROMOTION_BADGE"
												p={ [<span class="font-exo2">
													{ RarityDisplay[promotion.to] }
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
							<th>
								<Locale k="UNIT_VIEW_DROPS" />

								{ unit.craft
									? <span class={ `badge bg-light text-bg-light mx-3 my-1 ${style.CreationBadge}` }>
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
													<IconHourglassSplit class="me-1" />
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
															<ResearchTree unit={ unit } />
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
												<IconHammer />
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
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="drop-list">
								{ unit.source.length === 0
									? <div class="p-3">
										<span class="text-secondary">
											<Locale k="UNIT_VIEW_DROPS_EMPTY" />
										</span>
									</div>
									: <>
										{ unit.source
											.filter(r => r.length > 0)
											.reduce<EntitySource[][]>((p, c) => {
												if (c[0].IsStory) {
													const pi = p.findIndex(r => r[0].IsStory);
													if (pi >= 0)
														return p.map((v, i) => i === pi ? [...v, ...c] : v);
												}
												return [...p, c];
											}, [])
											.map(area => {
												let [header, text, perma] = (() => {
													if (area[0].IsEvent) {
														if (PermanentEvents.includes(area[0].EventId)) {
															return [
																<span class="text-warning">
																	<Locale k="UNIT_VIEW_DROPS_PERMANENT" />
																</span>,
																<Locale k={ area[0].EventName } />,
																true,
															];
														} else if (CurrentEvent === area[0].EventId) {
															return [
																<span class="text-stat-hp">
																	<Locale k="COMMON_SOURCE_EVENT_CURRENT" />
																</span>,
																<Locale k={ area[0].EventName } />,
																true,
															];
														}

														return [
															<span class="text-info">
																<Locale k="COMMON_SOURCE_EVENT" />
															</span>,
															<Locale k={ area[0].EventName } />,
														];
													}
													else if (area[0].IsDaily)
														return [<Locale k="WORLD_Daily" />];
													else if (area[0].IsChallenge)
														return [<Locale k={ `COMMON_CHALLENGE_${area[0].ChallengeName}` } />];
													else if (area[0].IsSubStory)
														return [<Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />];
													else if (area[0].IsNewEternalWar)
														return [<Locale k="COMMON_SOURCE_NEW" />];

													return [<Locale k="COMMON_SOURCE_MAINSTORY" />, undefined, true];
												})();
												text ||= header;

												return <>
													{ header && <div class="drop-header">
														{ header }
													</div> }
													<div class={ BuildClass(!header && "headerless", perma && "perma") }>
														<h6>{ text }</h6>

														{ (() => {
															const _area: Record<string, EntitySource[]> = {};
															area.forEach(s => {
																const k = s.IsEvent ? `${s.World}:${s.Chapter}` : s.World;
																if (!(k in _area)) _area[k] = [];
																_area[k].push(s);
															});
															return Object.keys(_area).map((k, i) => <span>
																{ i > 0 && <span class="border-start mx-1" /> }
																{ _area[k].map(source => <SourceBadge class="my-1" source={ source } linked />) }
															</span>);
														})() }
													</div>
												</>;
											})
										}
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
