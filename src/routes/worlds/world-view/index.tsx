import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { route } from "preact-router";
import Store from "@/store";

import { DLG_START_TRIGGER_TYPE } from "@/types/Enums";
import { Maps, World } from "@/types/DB/Map";
import SubStoryDB, { SubStoryStory, SubStoryStoryTrigger } from "@/types/DB/SubStory";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { BuildClass } from "@/libs/Class";
import { isActive } from "@/libs/Functions";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconArrowLeft from "@/components/bootstrap-icon/icons/ArrowLeft";
import IconCompass from "@/components/bootstrap-icon/icons/Compass";
import IconTable from "@/components/bootstrap-icon/icons/Table";
import IconBook from "@/components/bootstrap-icon/icons/Book";
import UnitFace from "@/components/unit-face";
import WorldItem from "../components/world-item";

import style from "./style.module.scss";

interface WORLDViewProps {
	wid: string;
}

const WORLDView: FunctionalComponent<WORLDViewProps> = (props) => {
	const update = useUpdate();
	const imgExt = ImageExtension();

	const ImagelessEv: string[] = [];

	const wid = props.wid;
	const isStory = wid === "Story";

	useEffect(() => {
		SetMeta(["description", "twitter:description"], `${LocaleGet(`WORLD_${wid}`)}의 구역 목록을 표시합니다. 구역의 지도 정보와 이야기를 선택하여 확인할 수 있습니다.`);
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${wid}_1.png`);
		SetMeta("keywords", `,${LocaleGet(`WORLD_${wid}`)}`, true);
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${wid}`));
	}, [wid]);

	if (isStory) {
		useEffect(() => {
			const MapsDB = GetJson<Maps>(StaticDB.Maps);
			if (!MapsDB) JsonLoaderCore(CurrentDB, StaticDB.Maps).then(() => update());
		}, []);

		const MapsDB = GetJson<Maps>(StaticDB.Maps);
		if (!MapsDB) return <></>;

		const Worlds = Object.keys(MapsDB)
			.filter(x => /^[0-9]+$/.test(x));

		return <div class="worlds-world text-start">
			<div class="row">
				<div class="col-auto">
					<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
						<IconArrowLeft class="me-1" />
						<Locale k="WORLDS_BACK_TO_WORLDS" />
					</button>
				</div>
			</div>
			<hr />

			<WorldItem wid={ wid } imageless center>
				<div class="mt-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 justify-content-center">
					{ Worlds.map((world, i) => <div class="col">
						<div class={ `card worlds-world text-center mb-2 ${style.StoryWorld}` }>
							<img class={ style.MapBack } src={ `${AssetsRoot}/${imgExt}/mapback/${world}.${imgExt}` } />

							<div class="card-body">
								<div class="row gx-0">
									<div class="col-auto me-3">
										<img src={ `${AssetsRoot}/world/icons/${wid}_${world}.png` } />
									</div>
									<div class="col">
										<div>
											<div class="worlds-world-number text-warning">
												<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
											</div>
											<div class="worlds-world-name font-ibm">
												<Locale k={ `WORLD_WORLD_${world}_1` } />
											</div>
										</div>

										<div class="btn-group mt-2">
											<button class="btn btn-warning" onClick={ (): void => void (route(`/worlds/${world}/1`)) }>
												<IconCompass class="me-1" />
												<span class="d-inline-block">
													<Locale k="WORLDS_WORLD_MAP" />
												</span>
											</button>
											<button class="btn btn-primary" onClick={ (): void => void (route(`/worlds/${world}/1/drop`)) }>
												<IconTable class="me-2" />
												<span class="d-inline-block">
													<Locale k="WORLDS_DROP_TABLE" />
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>) }
				</div>
			</WorldItem>
		</div>;
	} else if (wid !== "Sub") {
		useEffect(() => {
			const MapDB = GetJson<World>(`map/${wid}`);
			if (!MapDB) JsonLoaderCore(CurrentDB, `map/${wid}`).then(() => update());
		}, []);

		const MapDB = wid !== "Sub" && GetJson<World>(`map/${wid}`);
		if (!MapDB) return <></>;

		const Worlds = Object.keys(MapDB);
		const evPost = wid === "Ev14" ? "a" : "";

		return <div class="worlds-world text-start">
			<div class="row">
				<div class="col-auto">
					<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
						<IconArrowLeft class="me-1" />
						<Locale k="WORLDS_BACK_TO_WORLDS" />
					</button>
				</div>
			</div>
			<hr />

			{ wid.startsWith("Ev") && !ImagelessEv.includes(wid)
				? <div class={ `mb-4 ${style.EventBanner}` }>
					<img src={ `${AssetsRoot}/${imgExt}/eventbanner/${wid}${evPost}_O.${imgExt}` } />
				</div>
				: <></>
			}

			<WorldItem wid={ wid } imageless center>
				<div class="mt-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 justify-content-center">
					{ Worlds.map((world, i) => <div class="col">
						<div class="card worlds-world text-center mb-2">
							<div class="card-body">
								<div class="row gx-0">
									<div class="col-auto me-3">
										<img src={ `${AssetsRoot}/world/icons/${wid}_${world}.png` } />
									</div>
									<div class="col">
										<div>
											<div class="worlds-world-number text-warning">
												<Locale k="WORLDS_WORLD_TITLE" p={ [i + 1] } />
											</div>
											<div class="worlds-world-name font-ibm">
												<Locale k={ `WORLD_WORLD_${wid}_${world}` } />
											</div>
										</div>

										<div class="btn-group mt-2">
											<button class="btn btn-warning" onClick={ (): void => void (route(`/worlds/${wid}/${world}`)) }>
												<IconCompass class="me-1" />
												<span class="d-inline-block">
													<Locale k="WORLDS_WORLD_MAP" />
												</span>
											</button>
											<button class="btn btn-primary" onClick={ (): void => void (route(`/worlds/${wid}/${world}/drop`)) }>
												<IconTable class="me-2" />
												<span class="d-inline-block">
													<Locale k="WORLDS_DROP_TABLE" />
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>) }
				</div>
			</WorldItem>
		</div>;
	} else {
		useEffect(() => {
			const cached = GetJson<SubStoryDB>(StaticDB.SubStory);
			if (!cached)
				JsonLoaderCore(CurrentDB, StaticDB.SubStory).then(() => update());
		}, []);

		const [selectedTroop, setSelectedTroop] = useState<string | null>(Store.Worlds.Sub.Troop.value);
		const [selectedGroup, setSelectedGroup] = useState<string | null>(Store.Worlds.Sub.Group.value);

		const SubStoryDB = GetJson<SubStoryDB>(StaticDB.SubStory);
		if (!SubStoryDB) return <></>;

		const groupTable = {
			AutoGuardSystem: "AGSRoboTech",
			BettleMaid: "BattleMaid",
			FairySeries: "3PFairy",
			PublicServent: "PublicServant",
			Team080: "080",
			TeamBermuda: "Bermuda",
			TheSistersOfWalhalla: "Walhalla",
		};

		const troops = [null, ...SubStoryDB.troop]; // null -> show all

		const storyGroups = useMemo(() => {
			if (!selectedTroop) return SubStoryDB.group;

			return SubStoryDB.group.filter(r => r.troop === selectedTroop);
		}, [selectedTroop]);

		const storyGroup = useMemo(() => {
			if (!selectedGroup) return null;
			return SubStoryDB.group.find(r => r.key === selectedGroup) || null;
		}, [selectedGroup]);

		const groupStories = useMemo(() => {
			if (!storyGroup) return [];
			return storyGroup.story.map(k => SubStoryDB!.story.find(r => r.key === k))
				.filter((r): r is SubStoryStory => !!r);
		}, [storyGroup]);

		function TriggerValue<T extends 3 | 2> (trigger: SubStoryStoryTrigger<T>): string | preact.VNode {
			if ("sub" in trigger) {
				const charReg = /^Char_(.+)_N$/;
				const charSkinReg = /^Char_(.+)_NS([0-9]+)$/;
				const enemyReg = /^MP_(.+)_N$/;

				switch (trigger.type) {
					case DLG_START_TRIGGER_TYPE.EXIST_PC:
					case DLG_START_TRIGGER_TYPE.UPGRADE_PC:
					case DLG_START_TRIGGER_TYPE.PCLEVEL:
					case DLG_START_TRIGGER_TYPE.PCGF_GAUGE:
						return <span class="mx-1 badge bg-warning text-bg-warning">
							<Locale plain k={ `UNIT_${trigger.value.replace(charReg, "$1")}` } />
						</span>;
					case DLG_START_TRIGGER_TYPE.EXIST_EQUIP:
						return <span class="mx-1 badge bg-warning text-bg-warning">
							<Locale plain k={ `EQUIP_${trigger.value}` } />
						</span>;
					case DLG_START_TRIGGER_TYPE.PLAYERLEVEL:
						return <span class="mx-1 badge bg-success text-bg-success">{ trigger.value }</span>;
					case DLG_START_TRIGGER_TYPE.STAGECLEAR:
						return <span class="mx-1 badge bg-stat-eva text-bg-stat-eva">{ trigger.value }</span>;
					case DLG_START_TRIGGER_TYPE.STORYCLEAR:
						return <span class="mx-1 badge bg-stat-eva text-bg-stat-eva">
							<Locale plain k={ trigger.value } />
						</span>;
					case DLG_START_TRIGGER_TYPE.KILLMONSTER:
						return <span class="mx-1 badge bg-danger text-bg-danger">
							<Locale plain k={ `ENEMY_${trigger.value.replace(enemyReg, "$1")}` } />
						</span>;
					case DLG_START_TRIGGER_TYPE.EXIST_SKIN:
						return <span class="mx-1 badge bg-danger text-bg-danger">
							<Locale plain k={ `UNIT_SKIN_${trigger.value.replace(charSkinReg, "$1_$2")}` } />
						</span>;
					case DLG_START_TRIGGER_TYPE.MARRIAGE_PC:
						return <span class="mx-1 badge bg-warning text-bg-warning">
							<Locale plain k={ `UNIT_${trigger.value.replace(charReg, "$1")}` } />
						</span>;
					case DLG_START_TRIGGER_TYPE.MISSIONCLEAR:
						return <span class="mx-1 badge bg-dark text-bg-dark">{ trigger.value }</span>;

					default:
					case DLG_START_TRIGGER_TYPE.__MAX__:
						return <></>;
				}
			} else
				return <>?</>;
		}
		function SubStage (stage: string): string {
			const reg = /^ChCS-([0-9]+)Stage([0-9]+)$/;
			const r = reg.exec(stage);

			if (!r) return "";
			return `S${parseInt(r[1], 10)}-${parseInt(r[2], 10)}`;
		}

		return <div class="worlds-world text-start">
			<div class="row">
				<div class="col-auto">
					<button class="btn btn-dark" onClick={ (): void => void (route("/worlds")) }>
						<IconArrowLeft class="me-1" />
						<Locale k="WORLDS_BACK_TO_WORLDS" />
					</button>
				</div>
			</div>
			<hr />

			<div class={ `flex-nowrap ${style.SubStoryTroopTabs}` }>
				<ul class="nav nav-tabs justify-content-start">
					{ troops.map(troop => <li class="nav-item">
						<a
							href="#"
							class={ [
								"nav-link",
								isActive(selectedTroop === (troop?.key ?? null)),
								selectedTroop === (troop?.key ?? null)
									? `rarity-SS-force text-dark`
									: "text-dark",
							].join(" ") }
							onClick={ (e): void => {
								e.preventDefault();
								setSelectedTroop(troop?.key ?? null);
								Store.Worlds.Sub.Troop.value = troop?.key ?? null;
							} }
						>
							{ troop && <>
								<img
									class={ style.SubStoryTroopIcon }
									src={ `${AssetsRoot}/${imgExt}/group/${groupTable[troop.group] || troop.group}.${imgExt}` }
								/>
								<br />
							</> }

							<span>
								{ !troop
									? <Locale plain k="WORLDS_SUBSTORY_DISPLAYALL" />
									: <Locale
										plain
										k={ `UNIT_GROUP_${groupTable[troop.group] || troop.group}_1` }
										fallback={ <Locale
											plain
											k={ `UNIT_GROUP_${groupTable[troop.group] || troop.group}` }
										/> }
									/>
								}
							</span>
						</a>
					</li>) }
				</ul>
			</div>

			{ storyGroups.length === 0
				? <div class="px-2 py-5 text-center font-ibm">
					<img src={ `${AssetsRoot}/ui/no_substory.png` } />
					<br />
					<Locale plain k="WORLDS_SUBSTORY_EMPTY" />
				</div>
				: <div class="mt-2 row">
					<div class="col-12 col-lg-5 col-xl-6 order-2 order-lg-1">
						<div class="row row-cols-4 row-cols-lg-2 row-cols-xl-4">
							{ storyGroups.map(g => {
								return <div class={ BuildClass(style.SubStoryGroupItem, isActive(g.key === selectedGroup), "p-2") }>
									<div class="p-2">
										<UnitFace uid={ g.char } skin={ g.skin } />

										<div class={ style.SubStoryGroupName }>
											<Locale plain k={ `UNIT_${g.char}` } />
										</div>

										<a class="stretched-link" href="#" onClick={ e => {
											e.preventDefault();
											setSelectedGroup(g.key);
											Store.Worlds.Sub.Group.value = g.key;
										} } />
									</div>
								</div>;
							}) }
						</div>
					</div>
					<div class="col-12 col-lg-7 col-xl-6 order-1 order-lg-2">
						<div class="mt-2 card text-bg-dark">
							<div class="card-body">
								{ selectedGroup === null || storyGroup == null
									? <div class="px-2 py-5 text-center">
										<img src={ `${AssetsRoot}/ui/no_substory.png` } />
										<br />
										<Locale plain k="WORLDS_SUBSTORY_GROUP_YET" />
									</div>
									: <>
										<h4 class="font-ibm">
											<Locale plain k={ storyGroup.key } />
										</h4>
										<hr class="my-1" />

										<ul class={ style.SubStoryList }>
											{ groupStories.map(s => <li>
												<UnitFace
													class={ style.SubStoryFace }
													uid={ s.char }
													skin={ s.skin }
												/>
												<div class={ style.SubStoryTitle }>
													<div class="float-end p-1 pe-2">
														{ s.stage && <button
															type="button"
															class="me-1 btn btn-sm btn-warning"
															onClick={ e => {
																e.preventDefault();
																route(`/worlds/Sub/1/${SubStage(s.stage)}`);
															} }
														>
															<IconCompass class="me-1" />
															Stage
														</button> }
														<button
															type="button"
															class="me-1 btn btn-sm btn-stat-hp"
															onClick={ e => {
																e.preventDefault();
																route(`/story/${storyGroup.troop}/${s.key}-START`);
															} }
														>
															<IconBook class="me-1" />
															{ s.end.dialog ? <>Start</> : <>Story</> }
														</button>
														{ s.end.dialog && <button
															type="button"
															class="me-1 btn btn-sm btn-stat-hp"
															onClick={ e => {
																e.preventDefault();
																route(`/story/${storyGroup.troop}/${s.key}-END`);
															} }
														>
															<IconBook class="me-1" />
															End
														</button> }
													</div>

													<span class="small font-exo2">
														No.<strong>{ s.order }</strong>
													</span>
													<span class="font-ibm">
														<Locale plain k={ s.key } />
													</span>
												</div>
												<div class={ style.SubStoryDesc }>
													<Locale plain k={ `${s.key}_DESC` } />
												</div>
												<ul class={ style.SubStoryTriggers }>
													{ [s.start.trigger.trigger1, s.start.trigger.trigger2]
														.filter(t => t.type !== DLG_START_TRIGGER_TYPE.__MAX__)
														.map(t => <li>
															<Locale
																plain
																k={ `WORLDS_SUBSTORY_TRIGGER_START_${t.type}` }
																p={ [
																	TriggerValue(t),
																	<span class="badge bg-light text-bg-light">
																		{ t.sub }
																	</span>,
																] }
															/>
														</li>)
														.gap(<li class={ style.TriggerJoin }>
															<Locale plain k={ `SUBSTORY_UNLOCK_JOIN_${1 - s.start.trigger.type}` } />
														</li>)
													}
												</ul>
											</li>) }
										</ul>
									</>
								}
							</div>
						</div>
					</div>
				</div>
			}
		</div>;
	}
};
export default WORLDView;
