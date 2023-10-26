import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import Store from "@/store";

import * as PIXI from "pixi.js";

import { APPEAR_EFFECT, DIALOG_SPEAKER, OFF_EFFECT, SCG_ACTIVATION } from "@/types/Enums";
import { DialogCharacter, DialogSelection, StoryData } from "@/types/Story/Story";
import { StoryModelMeta } from "@/types/Story/Model";

import { useUpdate } from "@/libs/hooks";
import { AssetsRoot } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { LocaleTypes } from "@/libs/Locale";
import BGMAlbums from "@/libs/BGM";

import Locale from "@/components/locale";

import { fontFamily, Nn } from "./common";
import EffectBase from "./Effects/EffectBase";
import ShakeAndSoundEffect from "./Effects/ShakeAndSoundEffect";
import Animation_OpenEyes from "./Animations/Animation_OpenEyes";

import FadeText from "./Objects/FadeText";
import FadeSprite from "./Objects/FadeSprite";
import FadeContainer from "./Objects/FadeContainer";
import DialogObject from "./Objects/DialogObject";
import SelectionObject from "./Objects/SelectionObject";
import CommuSprite from "./Objects/CommuSprite";

import style from "./style.module.scss";

/**
 * 50 - BG
 * 500 - Character
 * * 500 - C
 * * 501 - L
 * * 502 - R
 * * 510 - C Activate
 * * 511 - L Activate
 * * 511 - R Activate
 * 600 - Add
 * 900 - Effect
 * 1000 - Dialog
 * 1100 - Cover
 * 1200 - Selections
 */

interface ViewerProps {
	display?: boolean;

	data: StoryData[];
	bgm: string;

	cursor: number;
	onDone?: () => void;
	onNext?: (cursor: number) => void;
}

const Viewer: FunctionalComponent<ViewerProps> = (props) => {
	const update = useUpdate();

	const [app, setApp] = useState<PIXI.Application | null>(null);
	const [cover, setCover] = useState<PIXI.Sprite | null>(null);
	const [screen, setScreen] = useState<PIXI.Container | null>(null);

	const [dialog, setDialog] = useState<DialogObject | null>(null);
	const [selection, setSelection] = useState<SelectionObject | null>(null);

	const [bgm, setBGM] = useState<string>("");
	const [bgName, setBGName] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgDesc, setBGDesc] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgImage, setBGImage] = useState<string>("");

	const [charL, setCharL] = useState<DialogCharacter | null>(null);
	const [charR, setCharR] = useState<DialogCharacter | null>(null);
	const [charC, setCharC] = useState<DialogCharacter | null>(null);
	const charRef = useRef<Tuple<FadeSprite | CommuSprite | undefined, 3>>([undefined, undefined, undefined]);

	const [addImage, setAddImage] = useState<string>("");
	const [addImageAppear, setAddImageAppear] = useState<APPEAR_EFFECT>(APPEAR_EFFECT.NONE);
	const [addImageOff, setAddImageOff] = useState<OFF_EFFECT>(OFF_EFFECT.NONE);

	const [sel, setSel] = useState<DialogSelection[]>([]);
	const [selDisp, setSelDisp] = useState(false);

	const speakerFilter = useMemo(() => [0, 0, 0].map(() => new PIXI.ColorMatrixFilter()), []);

	const viewerRef = useRef<HTMLDivElement>(null);

	const curData = props.cursor >= props.data.length
		? undefined
		: props.data[props.cursor];

	const lang = Store.Story.lang.value;
	const langFallback = [lang, "EN", "KR"].unique();
	const LText = useCallback((str: Record<LocaleTypes, string | undefined>): string => {
		for (const lang of langFallback) {
			if ((lang in str) && str[lang])
				return str[lang];
		}
		return "";
	}, [lang]);
	function isValidLText (str: Record<LocaleTypes, string | undefined>): boolean {
		return Object.values(str).filter(x => x).length > 0;
	}

	function isCommu (model: string): boolean {
		return model.includes("_Commu");
	}
	function getCommuImage (image: string, imageVar: string): string {
		const v = imageVar || (image.replace(/^2DModel_/, "") + "_Idle");
		return `${AssetsRoot}/story/model/commu/${v}.webp`;
	}
	function isStoryModel (model: string): boolean {
		const list = [
			"2DModel_Woman_N", "2DModel_BR_PastGirl_N", "2DModel_BR_PastMan_N",
			"2DModel_BR_PastMan2_N", "2DModel_BR_TomoeKIN_N", "2DModel_Eva_N",
			"2DModel_KaenFake_N", "2DModel_Kasasagi_N", "2DModel_Kirishima_N",
			"2DModel_Man_N", "2DModel_MP_AzazelAlter_N", "2DModel_MP_IronPrince_N",
			"2DModel_MP_Kidnapper_N", "2DModel_PECS_LemonadeDelta_N", "2DModel_PECS_LemonadeGamma_N",
			"2DModel_MP_LemonadeOmega_N", "2DModel_MP_MetalGuard_N", "2DModel_MP_NightChick_N",
			"2DModel_MP_Robert_N", "2DModel_MP_RocC_N", "2DModel_MP_RocC1_N", "2DModel_MP_Speaker_N",
			"2DModel_MP_Stalker_N", "2DModel_PECS_HelmetWristCut_N", "2DModel_PECS_MachinaFake_N",
			"2DModel_PECS_SecretaryYumi_N", "2DModel_PECS_WristCut_N", "2DModel_Priest01_N",
			"2DModel_Priest02_N", "2DModel_PriestAngel_N", "2DModel_PriestGirl01_N",
			"2DModel_PROP_Diyap11_1_N", "2DModel_Sherlock_N",
			"2DModel_AGS_MrAlfred_N", "2DModel_PECS_HighElven_N_DL_N", "2DModel_BR_NightAngelFake_N",
		];
		if (list.includes(model)) return true;
		return false;
	}
	function ConvertChar (model: string): string | false {
		if (isCommu(model)) return false; // Commu image will be processed with different way
		if (isStoryModel(model)) return false;

		const charTable: Record<string, string> = {
			"3P_Amphitrite_N_DL_0_O": "3P_Amphitrite_0_O_S",
			"3P_Alice_NS1_DL_0_O": "3P_Alice_1_O_BS",
			"3P_Daphne_NS2_DL_0_O": "3P_Daphne_2_O_S",
			"3P_Salacia_N_DL_0_O": "3P_Salacia_0_O_S",
			AGS_RheinRitter_NS1_DL_0_O: "AGS_RheinRitter_1_O_S",
			BR_Alvis_NS1_DL_0_O: "BR_Alvis_1_O_S",
			BR_DrM_N_DL_0_O: "BR_DrM_0_O_S",
			BR_Emily_NS1_DL_0_O: "BR_Emily_1_O",
			BR_Hela_N_DL_0_O: "BR_Hela_0_O_S",
			BR_May_NS2_DL_0_O: "BR_May_2_O_S",
			BR_Nereid_N_DL_0_O: "BR_Nereid_0_O",
			BR_NightAngel_NS2_DL_0_O: "BR_NightAngel_2_O_S",
			BR_Phantom_N_DL_0_O: "BR_Phantom_0_O",
			BR_RoyalArsenal_N_DL_0_O: "BR_RoyalArsenal_0_O_S",
			BR_Sirene_N_DL_0_O: "BR_Sirene_0_O_S",
			PECS_DarkElf_NS1_DL_0_O: "PECS_DarkElf_1_O_S",
			PECS_ElvenForestmaker_NS1_DL_0_O: "PECS_ElvenForestmaker_1_O",
			PECS_HighElven_N_DL_0_O: "PECS_HighElven_0_O",
			PECS_Triaina_N_DL_0_O: "PECS_Triaina_0_O_S",

			"3P_BlackLilith_0_O": "3P_BlackLilith_0_O_S",
			"3P_Frigga_1_O": "3P_Frigga_1_O_S",
			"3P_Melite_0_O": "3P_Melite_0_O_S",
			"3P_Sowan_2_O": "3P_Sowan_2_O_S",
			BR_Andvari_0_O: "BR_Andvari_0_O_S",
			BR_Amy_0_O: "BR_Amy_0_O_S",
			BR_Habetrot_0_O: "BR_Habetrot_0_O_S",
			BR_Harpy_1_O: "BR_Harpy_1_O_B",
			BR_Leona_0_O: "BR_Leona_0_O_S",
			BR_Nashorn_0_O: "BR_Nashorn_0_O_S",
			BR_Neodym_0_O: "BR_Neodym_0_O_S",
			BR_RoyalArsenal_0_O: "BR_RoyalArsenal_0_O_S",
			BR_Salamander_0_O: "BR_Salamander_0_O_S",
			BR_Scarabya_0_O: "BR_Scarabya_0_O_S",
			BR_Scarabya_1_O: "BR_Scarabya_1_O_S",
			BR_Sleipnir_2_O: "BR_Sleipnir_2_O_S",
			BR_StratoAngel_0_O: "BR_StratoAngel_0_O_S",
			BR_Vargr_0_O: "BR_Vargr_0_O_S",
			PECS_BS_1_O: "PECS_BS_1_O_S",
			PECS_CoCoWhiteShell_0_O: "PECS_CoCoWhiteShell_0_O_S",
			PECS_LemonadeAlpha_0_O: "PECS_LemonadeAlpha_0_O_S",
			PECS_Orangeade_0_O: "PECS_Orangeade_0_O_S",
			ST_Ullr_0_O: "ST_Ullr_0_O_S",
			ST_Mercury_0_O: "ST_Mercury_0_O_S",
		};

		const reg = /^2DModel_(.+)_([NPS])(S([0-9]+))?$/;
		if (reg.test(model)) {
			const char = model.replace(reg, (p, p1, p2, p3, p4) => {
				if (p2 === "N")
					return `${p1}_${p4 ?? 0}_O`;
				else if (p2 === "P")
					return `${p1}_${parseInt(p4, 10) + 19}_O`;
				else if (p2 === "S")
					return `${p1}_${parseInt(p4, 10) + 20}_O`;

				return `${p1}_0_O`;
			});
			console.log(char);

			if (char in charTable)
				return charTable[char];

			return char;
		}
		return false;
	}

	function getBGM (bgm: string): string {
		if (!bgm) return "";
		if (bgm === "15 BGM_Empty") return "";

		const normalized = bgm.replace(/^([0-9]+[_ ])?(BGM_)?(.+)$/, "$3");
		for (const album of BGMAlbums) {
			for (const song of album.songs) {
				if (song.type !== "audio") continue;

				const target = song.filename.replace(/^[^/]+\/(.+)\.mp3$/, "$1");
				if (normalized === target)
					return `${AssetsRoot}/audio/bgm/${song.filename}`;
			}
		}

		console.warn("Unknown BGM : " + bgm);
		return "";
	}

	useEffect(() => { // initialize
		let app: PIXI.Application | null = null;

		if (viewerRef.current) {
			setBGM(props.bgm);

			app = new PIXI.Application({
				antialias: true,
				backgroundColor: 0x000000,

				width: 1280,
				height: 720,

				// eventMode: "passive",
				eventFeatures: {
					globalMove: false,
					move: true,
					click: true,
					wheel: true,
				}
			});
			globalThis.__PIXI_APP__ = app;
			setApp(app);

			const screen = new PIXI.Container();
			screen.name = "@screen";
			setScreen(screen);
			app.stage.addChild(screen);

			const cover = new PIXI.Sprite();
			cover.name = "@cover";
			cover.width = 1280;
			cover.height = 720;
			cover.zIndex = 1100;
			cover.eventMode = "static";
			app.stage.addChild(cover);
			setCover(cover);

			const dialog = new DialogObject();
			dialog.name = "@dialog";
			dialog.zIndex = 1000;
			setDialog(dialog);
			screen.addChild(dialog);

			const selection = new SelectionObject();
			selection.name = "@selection";
			selection.zIndex = 1200;
			selection.setDisplay(false);
			setSelection(selection);
			app.stage.addChild(selection);

			app.stage.sortableChildren = true;
			screen.sortableChildren = true;

			viewerRef.current.appendChild(app.view as unknown as HTMLCanvasElement); // :(
		}

		return () => {
			if (app) app.destroy(true);
		};
	}, [viewerRef.current]);

	useEffect(() => { // click event handler
		let func: (() => void) | undefined = undefined;
		if (curData && cover) {
			func = () => {
				if (props.onNext) {
					if (sel.length === 0 || selDisp) {
						const i = props.data.findIndex(r => r.key === curData.next);
						if (i >= 0)
							props.onNext(i);
						else if (props.onDone)
							props.onDone();
					} else
						setSelDisp(true);
				}
			};
			cover.addEventListener("click", func);
		}

		return () => {
			if (cover && func)
				cover.removeEventListener("click", func);
		};
	}, [cover, curData, props.onNext, props.onDone, sel, selDisp]);

	useEffect(() => { // Effect
		let effectTimer: number = -1;
		let effect: EffectBase | null = null;

		if (screen && curData?.addEffect) {
			effect = (() => {
				const autoNext = () => {
					if (props.onNext) {
						const i = props.data.findIndex(r => r.key === curData.next);
						if (i >= 0)
							props.onNext(i);
						else if (props.onDone)
							props.onDone();
					}
				};

				if (curData.addEffect === "Prefab_BangNShaking_01")
					return new ShakeAndSoundEffect(screen, "Explosion_03", 1.0, 4.7, 1.0, false, 0.0);
				else if (curData.addEffect === "Prefeb_OpenEyes") {
					const effect = new Animation_OpenEyes(screen);
					effect.onDone = autoNext;
					return effect;
				}

				console.warn("[STORY] Unknown Effect '" + curData.addEffect + "'");
				return null;
			})();

			if (effect) {
				let time = Date.now();
				effectTimer = setInterval(() => {
					const now = Date.now();
					const delta = (now - time) * 0.001;
					time = now;

					if (effect) effect.Update(delta);
				}, 50);
			}
		}

		return () => {
			if (screen)
				screen.position.set(0, 0);

			if (effect) {
				effect.Destroy();
				effect = null;
			}

			if (effectTimer !== -1)
				clearInterval(effectTimer);
		};
	}, [screen, curData]);

	useEffect(() => { // curData processing
		console.debug("[STORY:curData]", curData);

		if (screen && curData) {
			if (isValidLText(curData.bg.name)) setBGName(curData.bg.name);
			if (isValidLText(curData.bg.desc)) setBGDesc(curData.bg.desc);
			if (curData.bg.image) setBGImage(curData.bg.image);

			if (curData.bgm) setBGM(curData.bgm);

			if (curData.char.L) setCharL(curData.char.L);
			else if (charL) setCharL(null);

			if (curData.char.R) setCharR(curData.char.R);
			else if (charR) setCharR(null);

			if (curData.char.C) setCharC(curData.char.C);
			else if (charC) setCharC(null);

			if (curData.add) {
				if (curData.add.image !== addImage)
					setAddImage(curData.add.image);

				if (curData.add.appear !== addImageAppear)
					setAddImageAppear(curData.add.appear);

				if (curData.add.off !== addImageOff)
					setAddImageOff(curData.add.off);
			}

			if (curData.sel) {
				setSelDisp(false);
				setSel(curData.sel);
			}
		}
	}, [screen, curData]);

	useEffect(() => { // BG Name (left top)
		let text: FadeText | null = null;
		if (bgName && screen) {
			const _ = (s: string): string => {
				const v = new Array(10)
					.fill("0 0 2px #000")
					.join(",");
				return `<span style="text-shadow:${v}">${s}</span>`;
			};

			text = new FadeText(_(LText(bgName)), {
				fontFamily,
				fontWeight: "500",
				fontSize: 24,
				fill: 0xffffff,
				stroke: 0x000000,
				strokeThickness: 2,
			});
			text.name = "@bgName";
			text.position.set(20, 20);
			text.zIndex = 950;
			screen.addChild(text);

			setTimeout(() => {
				if (text && !text.destroyed)
					text.fadeOut(2.0);
			}, 4000);
		}

		return () => {
			if (text) text.destroy();
		};
	}, [screen, bgName]);
	useEffect(() => { // BG Desc (center)
		let text: FadeText | null = null;
		if (bgDesc && screen) {
			const _ = (s: string): string => {
				const v = new Array(15)
					.fill("0 0 3px #000")
					.join(",");
				return `<span style="text-shadow:${v}">${s}</span>`;
			};

			text = new FadeText(_(LText(bgDesc)), {
				fontFamily,
				fontSize: 48,
				fill: 0xffffff,
			});
			text.name = "@bgDesc";
			text.anchor.set(0.5, 0.5);
			text.position.set(640, 360);
			text.zIndex = 950;
			screen.addChild(text);

			setTimeout(() => {
				if (text && !text.destroyed)
					text.fadeOut(2.0);
			}, 2000);
		}

		return () => {
			if (text) text.destroy();
		};
	}, [screen, bgDesc]);
	useEffect(() => { // BG Image
		let disposed = false;
		let bg: FadeSprite | null = null;
		if (screen && bgImage) {
			const bgZ: [test: string | RegExp, z: number][] = [
				["Cut_SubmarineMaintenance", 0], // except

				[/^Cut_/, 500], // over Char
				["Eva_Cut", 500],
				[/^BG_11_[1-7]$/, 500], // cut-scene
			];

			PIXI.Texture.fromURL(`${AssetsRoot}/story/bg/${bgImage}.jpg`)
				.then(tex => {
					if (disposed) {
						tex.destroy();
						return;
					}

					const z = (() => {
						const f = bgZ.find(r => typeof r[0] === "string"
							? r[0] === bgImage
							: r[0].test(bgImage)
						);
						return f ? f[1] : 0;
					})();

					bg = new FadeSprite(tex);
					bg.name = "@bg";
					bg.width = 1280;
					bg.height = 720;
					bg.zIndex = 50 + z;
					screen.addChild(bg);
				});
		}

		return () => {
			disposed = true;
			if (bg) {
				bg.fadeOut(0.23);
				setTimeout(() => bg!.destroy(), 1000);
			}
		};
	}, [screen, bgImage]);

	useEffect(() => { // SCG Activation
		if (curData) {
			const zTable: Record<"L" | "R" | "C", number> = { L: 501, R: 502, C: 500 };

			for (let i = 0; i < 3; i++) {
				const c = charRef.current[i];
				const k = (["L", "R", "C", ""] satisfies Array<"L" | "R" | "C" | "">)[i];
				if (c) {
					if (curData.char[k]?.SCG === SCG_ACTIVATION.ACTIVATION)
						c.zIndex = zTable[k] + 10;
					else
						c.zIndex = zTable[k];
				}
			}
		}
	}, [...charRef.current, curData]);

	{ // Char L/R/C
		const SPLITCOUNT = 6;

		useEffect(() => { // CharL
			let disposed = false;
			let char: FadeSprite | CommuSprite | null = null;
			if (screen && charL && charL.image) {
				const c = ConvertChar(charL.image);
				Promise.all([
					PIXI.Texture.fromURL(c
						? `${AssetsRoot}/webp/full/${c}.webp`
						: isCommu(charL.image)
							? getCommuImage(charL.image, charL.imageVar)
							: `${AssetsRoot}/story/model/${charL.image}.webp`
					),
					isCommu(charL.image)
						? Promise.resolve()
						: fetch(`${AssetsRoot}/story/model/${c || charL.image}.json`)
							.then(meta => meta.json())
							.then(meta => meta as StoryModelMeta[])
							.catch(() => undefined),
				]).then(([tex, meta]) => {
					if (disposed) {
						tex.destroy();
						return;
					}

					char = new (isCommu(charL.image) ? CommuSprite : FadeSprite)(tex);
					char.filters = [speakerFilter[0]];
					char.name = "CharL";

					const p = [1280 / SPLITCOUNT * 1, 720];
					const s = [1, 1];
					if (meta) {
						meta.forEach(e => {
							p[0] += e.pos[0] * 100;
							p[1] += e.pos[1] * 100;
							s[0] *= e.scale[0];
							s[1] *= e.scale[1];
						});
					} else if (isCommu(charL.image)) {
						p[1] -= 375;
						s[0] = 213 / tex.width;
						s[1] = 282 / tex.height;
					} else {
						const ratio = Math.min(1, 720 / tex.height);
						p[1] -= 40;
						s[0] = s[1] = ratio;
					}
					char.pivot.set(tex.width / 2, tex.height / 4 * 3);
					char.position.set(...p);
					char.scale.set(...s);
					char.zIndex = 501;
					char.fadeIn(0.15);
					screen.addChild(char);

					charRef.current[0] = char;
					update();
				}).catch(() => void (0));
			}

			return () => {
				disposed = true;
				charRef.current[0] = undefined;

				if (char) {
					char.fadeOut(0.15);
					setTimeout(() => char!.destroy(), 150);
				}
			};
		}, [screen, charL?.image, charL?.imageVar]);
		useEffect(() => { // CharR
			let disposed = false;
			let char: FadeSprite | CommuSprite | null = null;
			if (screen && charR && charR.image) {
				const c = ConvertChar(charR.image);
				Promise.all([
					PIXI.Texture.fromURL(c
						? `${AssetsRoot}/webp/full/${c}.webp`
						: isCommu(charR.image)
							? getCommuImage(charR.image, charR.imageVar)
							: `${AssetsRoot}/story/model/${charR.image}.webp`
					),
					isCommu(charR.image)
						? Promise.resolve()
						: fetch(`${AssetsRoot}/story/model/${c || charR.image}.json`)
							.then(meta => meta.json())
							.then(meta => meta as StoryModelMeta[])
							.catch(() => undefined),
				]).then(([tex, meta]) => {
					if (disposed) {
						tex.destroy();
						return;
					}

					char = new (isCommu(charR.image) ? CommuSprite : FadeSprite)(tex);
					char.filters = [speakerFilter[1]];
					char.name = "CharR";

					const p = [1280 / SPLITCOUNT * (SPLITCOUNT - 1), 720];
					const s = [-1, 1];
					if (meta) {
						meta.forEach(e => {
							p[0] -= e.pos[0] * 100;
							p[1] += e.pos[1] * 100;
							s[0] *= e.scale[0];
							s[1] *= e.scale[1];
						});
					} else if (isCommu(charR.image)) {
						p[1] -= 375;
						s[0] = 213 / tex.width;
						s[1] = 282 / tex.height;
					} else {
						const ratio = Math.min(1, 720 / tex.height);
						p[1] -= 40;
						s[0] = -ratio;
						s[1] = ratio;
					}
					char.pivot.set(tex.width / 2, tex.height / 4 * 3);
					char.position.set(...p);
					char.scale.set(...s);
					char.zIndex = 502;
					char.fadeIn(0.15);
					screen.addChild(char);

					charRef.current[1] = char;
					update();
				}).catch(() => void (0));
			}

			return () => {
				disposed = true;
				charRef.current[1] = undefined;

				if (char) {
					char.fadeOut(0.15);
					setTimeout(() => char!.destroy(), 150);
				}
			};
		}, [screen, charR?.image, charR?.imageVar]);
		useEffect(() => { // CharC
			let disposed = false;
			let char: FadeSprite | CommuSprite | null = null;
			if (screen && charC && charC.image) {
				const c = ConvertChar(charC.image);
				Promise.all([
					PIXI.Texture.fromURL(c
						? `${AssetsRoot}/webp/full/${c}.webp`
						: isCommu(charC.image)
							? getCommuImage(charC.image, charC.imageVar)
							: `${AssetsRoot}/story/model/${charC.image}.webp`
					),
					isCommu(charC.image)
						? Promise.resolve()
						: fetch(`${AssetsRoot}/story/model/${c || charC.image}.json`)
							.then(meta => meta.json())
							.then(meta => meta as StoryModelMeta[])
							.catch(() => undefined),
				]).then(([tex, meta]) => {
					if (disposed) {
						tex.destroy();
						return;
					}

					char = new (isCommu(charC.image) ? CommuSprite : FadeSprite)(tex);
					char.filters = [speakerFilter[2]];
					char.name = "CharC";

					const p = [1280 / 2, 720];
					const s = [1, 1];
					if (meta) {
						meta.forEach(e => {
							p[0] += e.pos[0] * 100;
							p[1] += e.pos[1] * 100;
							s[0] *= e.scale[0];
							s[1] *= e.scale[1];
						});
					} else if (isCommu(charC.image)) {
						p[1] -= 375;
						s[0] = 213 / tex.width;
						s[1] = 282 / tex.height;
					} else {
						const ratio = Math.min(1, 720 / tex.height);
						p[1] -= 40;
						s[0] = s[1] = ratio;
					}
					char.pivot.set(tex.width / 2, tex.height / 4 * 3);
					char.position.set(...p);
					char.scale.set(...s);
					char.zIndex = 500;
					char.fadeIn(0.15);
					screen.addChild(char);

					charRef.current[2] = char;
					update();
				}).catch(() => void (0));
			}

			return () => {
				disposed = true;
				charRef.current[2] = undefined;

				if (char) {
					char.fadeOut(0.15);
					setTimeout(() => char!.destroy(), 150);
				}
			};
		}, [screen, charC?.image, charC?.imageVar]);
	};

	useEffect(() => { // Add Image
		let disposed = false;

		let type: "add" | "off" = "add";
		let add: FadeSprite | null = null;
		let fadeIn = true;
		let fadeOut = true;
		if (screen && addImage) {
			PIXI.Texture.fromURL(`${AssetsRoot}/story/add/${addImage}.webp`)
				.then(tex => {
					if (disposed) {
						tex.destroy();
						return;
					}

					add = new FadeSprite(tex);
					add.pivot.set(tex.width / 2, tex.height / 2);
					add.position.set(640, 240);
					if (tex.height > 358)
						add.scale.set(358 / tex.height);

					add.zIndex = 600;
					screen.addChild(add);

					if (addImageOff != OFF_EFFECT.NONE && addImageOff != OFF_EFFECT.__MAX__)
						type = "off";

					if (addImageAppear === APPEAR_EFFECT.POPUP)
						fadeIn = false;
					if (addImageOff === OFF_EFFECT.DISAPPEAR)
						fadeOut = false;

					if (type === "add") {
						if (fadeIn)
							add.fadeIn(0.5);
						else
							add.alpha = 1;
					} else {
						if (fadeOut)
							add.fadeOut(0.5);
						else
							add.alpha = 0;
					}
				});
		}

		return () => {
			disposed = true;
			if (add) add!.destroy();
		};
	}, [screen, addImage, addImageAppear, addImageOff]);

	useEffect(() => { // Dialog
		if (dialog && curData) {
			const hasText = Object.values(curData.text).some(r => r);
			if (hasText) {
				const speakerTable: Record<DIALOG_SPEAKER, "L" | "C" | "R" | ""> = {
					[DIALOG_SPEAKER.LEFT]: "L",
					[DIALOG_SPEAKER.CENTER]: "C",
					[DIALOG_SPEAKER.RIGHT]: "R",
					[DIALOG_SPEAKER.NONE]: "",
				};
				const speaker = curData.char[speakerTable[curData.speaker]];
				speakerFilter[0].tint(curData.char.L?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);
				speakerFilter[1].tint(curData.char.R?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);
				speakerFilter[2].tint(curData.char.C?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);

				dialog.setText(Nn(LText(curData.text)) || "~");
				if (speaker) {
					dialog.setSpeaker(LText(speaker.name), curData.speaker);

					if (!dialog.display)
						dialog.setDisplay(true);
				} else
					dialog.setSpeaker("", DIALOG_SPEAKER.NONE);
			} else {
				if (dialog.display)
					dialog.setDisplay(false);
			}
		}
	}, [dialog, curData]);
	useEffect(() => { // Selection
		let fn: (idx: number) => void;

		if (curData && selection) {
			if (sel.length > 0 && selDisp) {
				fn = (idx: number) => {
					if (props.onNext) {
						const i = props.data.findIndex(r => r.key === sel[idx].next);
						if (i >= 0)
							props.onNext(i);
						else {
							const j = props.data.findIndex(r => r.key === curData.next);
							if (j >= 0)
								props.onNext(j);
							else if (props.onDone)
								props.onDone();
						}
					}

					setSel([]);
					setSelDisp(false);
				};
				selection.on("select", fn);

				selection.setText(sel.map(r => LText(r.text)));
				selection.setDisplay(true);
			} else
				selection.setDisplay(false);
		}

		return () => {
			if (selection && fn)
				selection.off("select", fn);
		};
	}, [curData, selection, props.onNext, props.onDone, sel, selDisp]);

	return <>
		{ bgm && <audio
			class={ style.BGM }
			src={ getBGM(bgm) }
			autoplay
			loop
			volume={ 0.25 }
		/> }
		<div
			class={ BuildClass(style.Viewer, props.display === false && style.Hidden) }
			tabIndex={ 1 }
			onKeyDown={ e => {
				if (e.key === "ArrowLeft") {
					if (props.cursor > 0 && props.onNext) {
						if (selDisp)
							setSelDisp(false);
						else {
							setSel([]);
							props.onNext(props.cursor - 1);
						}
					}
				} else if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
					if (props.onNext && curData) {
						if (sel.length === 0) {
							const i = props.data.findIndex(r => r.key === curData.next);
							if (i >= 0)
								props.onNext(i);
							else if (props.onDone)
								props.onDone();
						} else if (!selDisp)
							setSelDisp(true);
						else
							return;
					}
				}
			} }
			ref={ viewerRef }
		>
			{ !curData && <div class={ style.DoneScreen }>
				<Locale k="STORY_VIEWER_DONE" />
			</div> }
		</div>
	</>;
};
export default Viewer;
