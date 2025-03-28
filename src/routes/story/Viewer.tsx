import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { route } from "preact-router";
import Store from "@/store";

import { DIALOG_SPEAKER, SCG_ACTIVATION } from "@/types/Enums";
import { DialogCharacter, StoryData, StoryMetadata } from "@/types/Story/Story";
import SubStoryDB from "@/types/DB/SubStory";
import { LocaleList, LocaleTypes } from "@/types/Locale";

import { useLocale } from "@/libs/Locale";
import { AssetsRoot, ImageExtension, IsDev, SubStoryUnit } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { BuildClass, cn } from "@/libs/Class";
import { parseVNode } from "@/libs/VNode";
import { UpdateTitle } from "@/libs/Site";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";
import Icons from "@/components/bootstrap-icon";

import Notfound from "@/routes/notfound";

import { Nn } from "./common";
import Player from "./Player";

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

const Viewer: FunctionalComponent<StoryProps> = (props) => {
	const [loc] = useLocale();

	const [isBackMode] = useState(Store.Story.back.value);

	const [error, setError] = useState(false);

	const [type, initCursor] = useMemo(() => {
		const reg = /^(.+?)(?::([0-9]+))?$/;
		const r = reg.exec(props.type);
		if (r) return [r[1], parseInt(r[2] ?? "0", 10)];
		return [props.type, 0];
	}, [props.type]);

	const [voicePreview, setVoicePreview] = useState<string>("");
	const [bgm, setBGM] = useState("");
	const [cursor, setCursor] = useState(initCursor);

	useEffect(() => {
		if (cursor === 0) return;

		const reg = /^(.+?)(?:[0-9]+)?$/;
		const r = reg.exec(window.location.pathname);
		if (r) {
			const path = r[1].endsWith(":") ? r[1].substring(0, r[1].length - 1) : r[1];
			if (cursor < 0)
				window.history.replaceState(null, "", path);
			else
				window.history.replaceState(null, "", `${path}:${cursor}`);
		}
	}, [cursor]);

	const [tab, setTab] = useState<"player" | "transcription">("player");
	const [run, setRun] = useState(false);

	const transcriptionRefs = useRef<HTMLDivElement[]>([]);

	const lang = Store.Story.lang.value;
	const langFallback = [lang, "EN", "KR"].unique();

	const imgExt = ImageExtension();

	useEffect(() => {
		if (Store.Story.back.peek())
			Store.Story.back.value = false;
	}, []);

	function getVoice (voice: string): string {
		if (!voice) return "";
		return `${AssetsRoot}/audio/voice-ko/${voice}.mp3`;
	}

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
			.filter(r => r.SCG === SCG_ACTIVATION.ACTIVATION)
			.filter(r => !r.image.includes("_Cut"));
	}
	function ImageToFace (model: string): { uid: string; skin: number; fallback: string; } {
		let sid = model
			.replace(/_N_DL/g, "_N")
			.replace(/_DL_N/g, "")
			.replace(/_DL/g, "")
			.replace(/_N_N/g, "_N")
			.replace(/_D$/g, "") // same with _DL_N
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
	function convTokens (text: string): string {
		return text
			.split(/(\0[^\0]+\0[^\0]+\0[^\0]+\0)/gs)
			.map(p => {
				if (p[0] === "\0") { // formatted
					const r = (/\0([^\0]+)\0([^\0]*)\0([^\0]*)\0/gs).exec(p);
					if (r) {
						switch (r[1]) {
							case "color":
								return `<span data-color="${r[2]}" style="color:#${r[2]}">${r[3]}</span>`;

							case "spchar":
								return {
									"<": "&lt;",
									">": "&gt;",
								}[r[2]] || "";

							default:
								return r[3];
						}
					}
				}

				return p;
			})
			.join("");
	}

	const LText = useCallback((str: Record<LocaleTypes, string | undefined>): string => {
		for (const lang of langFallback) {
			if ((lang in str) && str[lang])
				return str[lang];
		}
		return "";
	}, [lang]);

	const { wid, mid, nid, storyType } = useMemo(() => {
		const reg = /^Ch([0-9]+)(N[0-9]+|Ev|Ev[0-9]+)?Stage([0-9]+)(B|Ex|EX|C|S)?$/;
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

			if (r[2]) { // EvXX or 12 chapter...
				return {
					wid: r[2] === "Ev"
						? "Ev1"
						: r[2].startsWith("N")
							? r[1] // Story
							: r[2],
					mid: r[2].startsWith("N")
						? parseInt(r[2].substring(1), 10).toString()
						: mid,
					nid: `${r[2].startsWith("Ev") ? "Ev" : ""}${mid}-${parseInt(r[3], 10)}${postfix}`,
					storyType: type,
				};
			} else { // Story
				return {
					wid: parseInt(r[1], 10).toString(), // "Story",
					mid,
					nid: `${mid}-${parseInt(r[3], 10)}${postfix}`,
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
				const r = reg.exec(type)!;

				return {
					wid: type.substring(0, type.lastIndexOf("-")),
					mid: parseInt(r[2], 10),
					nid: r[1],
					storyType: "Sub3",
				};
			}
		}
		return { wid: "", mid: 0, nid: 0, storyType: type };
	}, [props.id, type]);

	const SubStoryDB = useDBData<SubStoryDB>(storyType === "Sub3" ? StaticDB.SubStory : null);
	const subGroup = useMemo(() => {
		if (!SubStoryDB) return null;
		return SubStoryDB.story.find(r => r.key === wid) || null;
	}, [SubStoryDB]);

	const world = useMemo(() => {
		if (storyType === "Sub3") {
			if (!subGroup) return "...";
			return loc[subGroup.group];
		}
		return loc[`WORLD_WORLD_${wid}_${mid}`];
	}, [lang, storyType, wid, mid, nid]);

	const storyMetadata = useDBData<StoryMetadata>(`story/${props.id}`);
	useEffect(() => {
		if (storyMetadata)
			setBGM(storyMetadata.bgm[type]);
		else if (storyMetadata === null)  // Error
			setError(true);
	}, [storyMetadata, type]);

	const storyData = useDBData<StoryData[]>(storyMetadata ? `story/script/${storyMetadata.index[type]}` : null);
	useEffect(() => {
		if (!world || !storyMetadata) {
			UpdateTitle("Story Viewer");
		} else {
			UpdateTitle(LText(storyMetadata.title), world);
		}
	}, [lang, world, storyMetadata]);

	const faces = useMemo(() => {
		if (!storyData) return [];
		interface FaceMetadata {
			uid: string;
			skin: number;
			fallback: string;
		}
		return storyData
			.flatMap(r => Object.values(r.char))
			.filter(r => r.image && !r.image.includes("_Cut") && !r.image.startsWith("#"))
			.map(r => ImageToFace(r.image))
			.reduce<FaceMetadata[]>(
				(p, c) => p.some(r => r.uid === c.uid && r.skin === c.skin)
					? p
					: [...p, c],
				[],
			);
	}, [storyData]);

	const subUnit = useMemo(() => {
		if (!["Sub2", "Sub3"].includes(storyType)) return "";
		return nid.toString();
	}, [storyType, nid]);

	if (error) return <Notfound />;
	return <div>
		<div class="text-start">
			{ isBackMode
				? <button class="btn btn-dark" onClick={ e => {
					e.preventDefault();
					window.history.back();
				} }>
					<Icons.ArrowLeft class="me-1" />
					<Locale k="COMMON_BACK" />
				</button>
				: <button class="btn btn-dark" onClick={ e => {
					e.preventDefault();
					if (storyType === "Sub2")
						route(`/worlds/${wid}/${mid}/substory`);
					else if (storyType === "Sub3")
						route("/worlds/Sub");
					else
						route(`/worlds/${wid}/${mid}/${nid}`);
				} }>
					<Icons.ArrowLeft class="me-1" />
					<Locale k="WORLDS_BACK_TO_WORLDS" />
				</button>
			}
		</div>

		<div class="input-group justify-content-center my-2">
			<div class="input-group-text">
				<Icons.Globe2 class="me-1" />
			</div>

			{ LocaleList.map(locale => <button
				class={ `btn btn-primary ${isActive(lang === locale)}` }
				onClick={ () => (Store.Story.lang.value = locale) }
			>
				<img src={ `${AssetsRoot}/flags/${locale}.png` } alt={ locale } />
			</button>) }
		</div>

		<div class="input-group justify-content-center my-2">
			<div class="input-group-text">
				<Icons.ImageFill class="me-1" />
			</div>

			<button
				class={ `btn btn-primary ${isActive(Store.Story.bgStyle.value === 0)}` }
				onClick={ () => (Store.Story.bgStyle.value = 0) }
			>
				<Locale k="STORY_PLAYER_BGSTYLE_STRETCH" />
			</button>
			<button
				class={ `btn btn-primary ${isActive(Store.Story.bgStyle.value === 1)}` }
				onClick={ () => (Store.Story.bgStyle.value = 1) }
			>
				<Locale k="STORY_PLAYER_BGSTYLE_KEEP_RATIO" />
			</button>
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
					? <Locale plain k={ type } />
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
			{ faces.map(f => IsDev
				? <div class="d-inline-block px-2">
					<small class="d-block">
						{ f.uid } { f.skin }
					</small>
					<UnitFace class="mx-1" { ...f } size="3rem" />
				</div>
				: <UnitFace class="mx-1" { ...f } size="3rem" />
			) }
		</div>

		<ul class={ cn("nav nav-tabs pt-2", style.TabNav) }>
			<li class="nav-item">
				<a
					class={ BuildClass("nav-link", isActive(tab === "player")) }
					href="#"
					onClick={ e => {
						e.preventDefault();
						setTab("player");
					} }
				>
					<Locale k="STORY_PLAYER" />
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
			{ tab === "player" && <>
				{ !run && <div class="d-flex justify-content-center align-items-center">
					<div class="alert alert-light small mt-0 mb-1" style={ { whiteSpace: "pre-line" } }>
						<Locale plain k="STORY_PLAYER_ENTERANCE" />

						<br /><br />
						<button
							type="button"
							class="btn btn-dark"
							onClick={ e => {
								e.preventDefault();
								setRun(true);
							} }
						>
							<Locale k="STORY_PLAYER_START" />
						</button>
					</div>
				</div> }
			</> }
			{ storyData && run && <Player
				display={ tab === "player" }
				bgStyle={ Store.Story.bgStyle.value }
				cursor={ cursor }
				bgm={ bgm }
				data={ storyData as StoryData[] }
				onDone={ () => setCursor(-1) }
				onNext={ cursor => setCursor(cursor) }
				onVoice={ voice => setVoicePreview(voice) }
			/> }

			{ tab === "transcription" && storyData && <>
				{ voicePreview && <audio
					class={ style.BackgroundAudio }
					src={ getVoice(voicePreview) }
					autoplay
					volume={ 0.25 }
					onEnded={ () => setVoicePreview("") }
				/> }

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
								{ speaker && <div class={ d.voice && voicePreview == d.voice ? "text-primary" : "" }>
									<strong class="mb-1">{ LText(speaker.name) }</strong>

									{ d.voice && <a
										class={ "d-inline-block ms-2" }
										href="#"
										style={ {
											color: "inherit",
											lineHeight: "1em",
										} }
										onClick={ e => {
											e.preventDefault();
											e.stopPropagation();
											setVoicePreview(d.voice);
										} }
									>
										<Icons.VolumeUpFill style={ { verticalAlign: "top" } } />
									</a> }
								</div> }

								<div class={ style.TranscriptionText }>
									{ parseVNode(convTokens(Nn(LText(d.text))), [], {}) }
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
												{ parseVNode(convTokens(Nn(LText(s.text))), [], {}) }
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
	</div >;
};
export default Viewer;
