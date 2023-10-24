import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { route } from "preact-router";
import Store from "@/store";

import { DIALOG_SPEAKER, SCG_ACTIVATION } from "@/types/Enums";
import { DialogCharacter, StoryData, StoryMetadata } from "@/types/Story/Story";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { CurrentDB } from "@/libs/DB";
import { LocaleList, LocaleTypes } from "@/libs/Locale";
import { BuildClass } from "@/libs/Class";
import { parseVNode } from "@/libs/VNode";
import { UpdateTitle } from "@/libs/Site";

import { GetJson, JsonLoaderCore } from "@/components/loader";
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
	MP_Robert_0: "AGS_MrAlfred2_1",
	PECS_LemonadeOmega_0: "MP_LemonadeOmega_0",
};

const Story: FunctionalComponent<StoryProps> = (props) => {
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
		const reg = /^Ch([0-9]+)(Ev[0-9]+)?Stage([0-9]+)(B|Ex|EX|C)?$/;
		const r = reg.exec(props.id);
		if (r) {
			const mid = parseInt(r[1], 10);
			// const t = parseInt(r[4], 10);
			const postfix = r[4] === "EX" ? "Ex" : (r[4] || "");
			const type = props.type === "OP" || props.type === "ED"
				? props.type
				: `Mid ${parseInt(props.type.substring(4), 10) - 2}`;

			if (r[2]) { // EvXX
				return {
					wid: r[2],
					mid,
					nid: `Ev${mid}-${parseInt(r[3], 10)}${postfix}`,
					storyType: type,
				};
			} else { // Story
				return {
					wid: "Story",
					mid,
					nid: `${mid}-${parseInt(r[3], 10)}${postfix}`,
					storyType: type,
				};
			}
		}
		return { wid: "", mid: 0, nid: 0, storyType: props.type };
	}, [props.id, props.type]);

	const world = useMemo(() => {
		return LocaleGet(`WORLD_WORLD_${wid}_${mid}`);
	}, [lang, wid, mid, nid]);

	useEffect(() => {
		setStoryMetadata(null);

		if (!props.id || !props.type || (props.type !== "OP" && props.type !== "ED" && !props.type.startsWith("mid."))) {
			setError(true);
		} else {
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

	if (error) return <Notfound />;
	return <div>
		<div class="text-start">
			<button class="btn btn-dark" onClick={ e => {
				e.preventDefault();
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
			<span class="ms-4">{ nid }</span>
			<span class="ms-2">{ storyType }</span>
		</h5>
		<h1 class="font-ibm mb-4">{ storyMetadata ? LText(storyMetadata.title) : "..." }</h1>

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
