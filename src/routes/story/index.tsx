import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { route } from "preact-router";
import Store from "@/store";

import { DIALOG_SPEAKER, SCG_ACTIVATION } from "@/types/Enums";
import { DialogCharacter, StoryData, StoryMetadata } from "@/types/Story/Story";
import SubStoryDB from "@/types/DB/SubStory";

import { useUpdate } from "@/libs/hooks";
import { AssetsRoot, ImageExtension, SubStoryUnit } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { CurrentDB } from "@/libs/DB";
import { LocaleList, LocaleTypes } from "@/libs/Locale";
import { BuildClass } from "@/libs/Class";
import { parseVNode } from "@/libs/VNode";
import { UpdateTitle } from "@/libs/Site";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import UnitFace from "@/components/unit-face";
import IconGlobe2 from "@/components/bootstrap-icon/icons/Globe2";
import IconArrowLeft from "@/components/bootstrap-icon/icons/ArrowLeft";

import Notfound from "@/routes/notfound";

import { Nn } from "./common";
import Viewer from "./Viewer";

import style from "./style.module.scss";

interface StoryProps {
	id: string;
	type: string;
}

const FaceAlias: Record<string, string> = {
	AGS_MrAlfred_0: "AGS_MrAlfred_0",
	BR_Brownie_01_0: "BR_Brownie_0",
	BR_Brownie_02_0: "BR_Brownie_0",
	BR_NightAngelFake_0: "BR_NightAngel_0",
	MP_Robert_0: "AGS_MrAlfred2_1",
	PECS_LemonadeOmega_0: "MP_LemonadeOmega_0",
};

const Story: FunctionalComponent<StoryProps> = (props) => {
	const update = useUpdate();

	const [error, setError] = useState(false);

	const [storyMetadata, setStoryMetadata] = useState<StoryMetadata | null>(null);
	const [storyData, setStoryData] = useState<StoryData[] | null>(null);
	const [bgm, setBGM] = useState("");
	const [cursor, setCursor] = useState(0);

	const [tab, setTab] = useState<"viewer" | "transcription">("viewer");
	const [run, setRun] = useState(false);

	const transcriptionRefs = useRef<HTMLDivElement[]>([]);

	const lang = Store.Story.lang.value;
	const langFallback = [lang, "EN", "KR"].unique();

	const imgExt = ImageExtension();

	function Speaker (data: StoryData): DialogCharacter | undefined {
		const speakerTable: Record<DIALOG_SPEAKER, "L" | "C" | "R" | ""> = {
			[DIALOG_SPEAKER.LEFT]: "L",
			[DIALOG_SPEAKER.CENTER]: "C",
			[DIALOG_SPEAKER.RIGHT]: "R",
			[DIALOG_SPEAKER.NONE]: "",
		};
		return data.char[speakerTable[data.speaker]];
	}
	function Activates (data: StoryData): DialogCharacter[] {
		return Object.values(data.char)
			.filter(r => r.SCG === SCG_ACTIVATION.ACTIVATION);
	}
	function ImageToFace (model: string): { uid: string; skin: number; fallback: string; } {
		let sid = model
			.replace(/_DL_N/g, "")
			.replace(/^2DModel_(.+)_([NPS])(S[0-9]+)?$/, (p, p1, p2, p3) => {
				if (p2 === "N") {
					if (p3)
						return `${p1}_${p3.substring(1)}`;
					else
						return `${p1}_0`;
				} else if (p2 === "P")
					return `${p1}_${parseInt(p3.substring(1), 10) + 19}`;
				else if (p2 === "S")
					return `${p1}_${parseInt(p3.substring(1), 10) + 20}`;
				return `${p1}_0`;
			});
		if (sid in FaceAlias) sid = FaceAlias[sid];

		if (sid.includes("_Dialog")) { // story 2dmodel
			return {
				uid: "!",
				skin: 0,
				fallback: `${AssetsRoot}/${imgExt}/story/${sid.replace(/^2DModel_/, "")}.${imgExt}`,
			};
		} else if (sid.includes("_Commu")) // commu
			return ImageToFace(model.replace(/(2DModel_|_Commu)/, ""));

		const r = /^(.+)_([0-9]+)$/.exec(sid);
		if (!r) {
			return {
				uid: sid,
				skin: 0,
				fallback: `${AssetsRoot}/${imgExt}/story/${sid}_0.${imgExt}`,
			};
		}

		const skin = parseInt(r[2], 10);
		return {
			uid: r[1],
			skin,
			fallback: `${AssetsRoot}/${imgExt}/story/${r[1]}_${skin}.${imgExt}`,
		};
	}

	const LText = useCallback((str: Record<LocaleTypes, string | undefined>): string => {
		for (const lang of langFallback) {
			if ((lang in str) && str[lang])
				return str[lang];
		}
		return "";
	}, [lang]);

	const { wid, mid, nid, storyType } = useMemo(() => {
		const reg = /^Ch([0-9]+)(Ev([0-9]+)?)?Stage([0-9]+)(B|Ex|EX|C|S)?$/;
		const r = reg.exec(props.id);
		if (r) {
			const mid = parseInt(r[1], 10);
			// const t = parseInt(r[5], 10);
			const postfix = r[5] === "EX"
				? "Ex"
				: r[5] === "S"
					? (r[2] === "Ev5" || r[2] === "Ev6")
						? "ep"
						: "s"
					: (r[5] || "");

			const type = props.type.toUpperCase();

			if (r[2]) { // EvXX
				return {
					wid: r[2] === "Ev" ? "Ev1" : r[2],
					mid,
					nid: `Ev${mid}-${parseInt(r[4], 10)}${postfix}`,
					storyType: type,
				};
			} else { // Story
				return {
					wid: "Story",
					mid,
					nid: `${mid}-${parseInt(r[4], 10)}${postfix}`,
					storyType: type,
				};
			}
		} else {
			const reg = /^ChCS-([0-9]+)Stage([0-9]+)$/;
			const r = reg.exec(props.id);
			if (r) { // old substory
				const key = `S${parseInt(r[1], 10)}-${parseInt(r[2], 10)}`;
				return {
					wid: "-",
					mid: 1,
					nid: key,
					storyType: "Sub",
				};
			} else if (props.id.startsWith("SubStory_")) { // map substory
				const reg = /^SubStory_Chapter_([^_]+)_(.+)$/;
				const r = reg.exec(props.id)!;

				const k = r[1];
				const unit = r[2];

				const mr = /^([0-9]+)(.+)$/.exec(k)!;

				return {
					wid: mr[2],
					mid: parseInt(mr[1], 10),
					nid: unit,
					storyType: "Sub2",
				};
			} else if (props.id.startsWith("Story_")) { // separated substory
				const reg = /^Story_Char_(.+)_N_.+_([0-9]+)-(START|END)$/;
				const r = reg.exec(props.type)!;

				return {
					wid: props.type.substring(0, props.type.lastIndexOf("-")),
					mid: parseInt(r[2], 10),
					nid: r[1],
					storyType: "Sub3",
				};
			}
		}
		return { wid: "", mid: 0, nid: 0, storyType: props.type };
	}, [props.id, props.type]);

	const SubStoryDB = storyType === "Sub3" ? GetJson<SubStoryDB>(StaticDB.SubStory) : null;
	useEffect(() => {
		if (storyType === "Sub3" && !SubStoryDB)
			JsonLoaderCore(CurrentDB, StaticDB.SubStory).then(() => update());
	}, [storyType, SubStoryDB]);

	const subGroup = useMemo(() => {
		if (!SubStoryDB) return null;

		return SubStoryDB.story.find(r => r.key === wid) || null;
	}, [SubStoryDB]);

	const world = useMemo(() => {
		if (storyType === "Sub3") {
			if (!subGroup) return "...";
			return LocaleGet(subGroup.group);
		}
		return LocaleGet(`WORLD_WORLD_${wid}_${mid}`);
	}, [lang, storyType, wid, mid, nid]);

	useEffect(() => {
		setStoryMetadata(null);

		const cached = GetJson<StoryMetadata>(`story/${props.id}`);
		if (cached) {
			setStoryMetadata(cached);
			setBGM(cached.bgm[props.type]);
		} else {
			JsonLoaderCore(CurrentDB, `story/${props.id}`)
				.then(() => {
					const data = GetJson<StoryMetadata>(`story/${props.id}`);
					setStoryMetadata(data);
					setBGM(data.bgm[props.type]);
				})
				.catch(() => {
					setError(true);
				});
		}
	}, [props.id, props.type]);

	useEffect(() => {
		setStoryData(null);

		if (storyMetadata) {
			const target = storyMetadata.index[props.type];
			const cached = GetJson<StoryData[]>(`story/script/${target}`);
			if (cached) {
				setStoryData(cached);
			} else {
				JsonLoaderCore(CurrentDB, `story/script/${target}`)
					.then(() => {
						const data = GetJson<StoryData[]>(`story/script/${target}`);
						setStoryData(data);
					});
			}
		}
	}, [storyMetadata]);

	useEffect(() => {
		if (!world || !storyMetadata) {
			UpdateTitle("Story Viewer");
		} else {
			UpdateTitle(LText(storyMetadata.title), world);
		}
	}, [lang, world, storyMetadata]);

	const faces = useMemo(() => {
		if (!storyData) return [];
		return storyData
			.flatMap(r => Object.values(r.char))
			.filter(r => r.image)
			.map(r => ImageToFace(r.image))
			.reduce((p, c) => p.some(r => r.uid === c.uid && r.skin === c.skin)
				? p
				: [...p, c], [] as Array<{ uid: string, skin: number, fallback: string; }>,
			);
	}, [storyData]);

	const subUnit = useMemo(() => {
		if (!["Sub2", "Sub3"].includes(storyType)) return "";
		return nid.toString();
	}, [storyType, nid]);

	if (error) return <Notfound />;
	return <div>
		<div class="text-start">
			<button class="btn btn-dark" onClick={ e => {
				e.preventDefault();
				if (storyType === "Sub2")
					route(`/worlds/${wid}/${mid}/substory`);
				else if (storyType === "Sub3")
					route("/worlds/Sub");
				else
					route(`/worlds/${wid}/${mid}/${nid}`);
			} }>
				<IconArrowLeft class="me-1" />
				<Locale k="WORLDS_BACK_TO_WORLDS" />
			</button>
		</div>

		<div class="input-group justify-content-center my-2">
			<div class="input-group-text">
				<IconGlobe2 class="me-1" />
			</div>

			{ LocaleList.map(locale => <button
				class={ `btn btn-primary ${isActive(lang === locale)}` }
				onClick={ () => (Store.Story.lang.value = locale) }
			>
				<img src={ `${AssetsRoot}/flags/${locale}.png` } alt={ locale } />
			</button>) }
		</div>

		<h5 class="font-ibm mt-3">
			{ world }

			<span class="ms-4">
				{ storyType === "Sub"
					? <span class="badge bg-warning text-bg-warning">
						<Locale k={ `UNIT_${SubStoryUnit[nid]}` } />
					</span>
					: storyType === "Sub2" || storyType === "Sub3"
						? <span class="badge bg-substory text-bg-substory">
							<Locale k={ `UNIT_${subUnit}` } />
						</span>
						: <>
							{ nid }
							<span class="ms-2">{ storyType }</span>
						</>
				}
			</span>
		</h5>
		{ storyType === "Sub2"
			? <h3 class="font-ibm mb-2">
				{ storyMetadata ? LText(storyMetadata.title) : "..." }
			</h3>
			: <></>
		}
		<h1 class={ BuildClass("font-ibm", storyType === "Sub3" ? "mb-1" : "mb-4") }>
			{ storyMetadata
				? storyType === "Sub2"
					? <Locale plain k={ props.type } />
					: storyType === "Sub3"
						? <Locale plain k={ wid } />
						: LText(storyMetadata.title)
				: "..."
			}
		</h1>
		{ storyType === "Sub3"
			? <h6 class="mb-4">
				<Locale plain k={ `${wid}_DESC` } />
			</h6>
			: <></>
		}

		<div class="my-2">
			{ faces.map(f => <UnitFace class="mx-1" { ...f } size="3rem" />) }
		</div>

		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a
					class={ BuildClass("nav-link", isActive(tab === "viewer")) }
					href="#"
					onClick={ e => {
						e.preventDefault();
						setTab("viewer");
					} }
				>
					<Locale k="STORY_VIEWER" />
				</a>
			</li>
			<li class="nav-item">
				<a
					class={ BuildClass("nav-link", isActive(tab === "transcription")) }
					href="#"
					onClick={ e => {
						e.preventDefault();
						setTab("transcription");
					} }
				>
					<Locale k="STORY_TRANSCRIPTION" />
				</a>
			</li>
		</ul>
		<div class="border border-top-0 p-2">
			{ tab === "viewer" && <>
				{ !run && <div class="d-flex justify-content-center align-items-center">
					<div class="alert alert-light small mt-0 mb-1" style={ { whiteSpace: "pre-line" } }>
						<Locale plain k="STORY_VIEWER_ENTERANCE" />

						<br /><br />
						<button
							type="button"
							class="btn btn-dark"
							onClick={ e => {
								e.preventDefault();
								setRun(true);
							} }
						>
							<Locale k="STORY_VIEWER_START" />
						</button>
					</div>
				</div> }
			</> }
			{ storyData && run && <Viewer
				display={ tab === "viewer" }
				cursor={ cursor }
				bgm={ bgm }
				data={ storyData as StoryData[] }
				onDone={ () => setCursor(-1) }
				onNext={ cursor => setCursor(cursor) }
			/> }

			{ tab === "transcription" && storyData && <>
				{ storyData.map((d, i) => {
					const speaker = Speaker(d);
					const activates = Activates(d);

					return <div
						class={ BuildClass(
							style.TranscriptionLine,
							"alert",
							isActive(cursor === i, "alert-warning", "alert-light"),
							"p-2", activates.length === 0 && "px-3",
							"m-1",
							"text-start",
						) }
						onClick={ e => {
							e.preventDefault();
							setCursor(i);
						} }
						ref={ el => {
							if (el)
								transcriptionRefs.current[i] = el;
							else
								delete transcriptionRefs.current[i];
						} }
					>
						<div class="row">
							{ activates.length > 0 && <div class="col-auto">
								{ activates.map(s => <UnitFace
									{ ...ImageToFace(s.image) }
									size="3rem"
								/>) }
							</div> }

							<div class="col">
								{ speaker && <div>
									<strong class="mb-1">{ LText(speaker.name) }</strong>
								</div> }

								<div class={ style.TranscriptionText }>
									{ parseVNode(Nn(LText(d.text)), [], {}) }
								</div>

								{ d.sel
									? <div class={ style.TranscriptionSelection }>
										{ d.sel.map(s => <div>
											<button
												type="button"
												class="btn btn-warning mt-1"
												onClick={ e => {
													e.preventDefault();
													e.stopImmediatePropagation();

													const found = storyData.findIndex(r => r.key === s.next);
													if (found >= 0) {
														setCursor(found);
														transcriptionRefs.current[i].scrollIntoView();
													}
												} }
											>
												{ Nn(LText(s.text)) }
											</button>
										</div>) }
									</div>
									: <></>
								}
							</div>
						</div>
					</div>;
				}) }

				<div class="mt-2 py-1 text-secondary">END</div>
			</> }
		</div>
	</div>;
};
export default Story;
