import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import Store from "@/store";

import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";

import { APPEAR_EFFECT, DIALOG_SPEAKER, OFF_EFFECT, SCG_ACTIVATION, SCREEN_EFFECT } from "@/types/Enums";
import { DialogCharacter, DialogSelection, StoryData } from "@/types/Story/Story";
import { StoryModelMeta } from "@/types/Story/Model";
import { LocaleTypes } from "@/types/Locale";

import { useUpdate } from "@/libs/hooks";
import { useLocale } from "@/libs/Locale";
import { StaticDB, useDBData } from "@/libs/Loader";
import { AssetsRoot, IsDev } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import BGMAlbums from "@/libs/BGM";

import Locale from "@/components/locale";

import { Nn } from "./common";
import EffectBase from "./Effects/EffectBase";
import VideoEffect from "./Effects/VideoEffect";
import ShakeAndSoundEffect from "./Effects/ShakeAndSoundEffect";
import Animation_OpenEyes from "./Animations/Animation_OpenEyes";

import FadeText from "@/components/pixi/FadeText";
import FadeSprite from "@/components/pixi/FadeSprite";
import Pixi2DModel from "@/components/pixi/Pixi2DModel";
import PixiSpineModel from "@/components/pixi/PixiSpineModel";

import DialogObject from "./Objects/DialogObject";
import SelectionObject from "./Objects/SelectionObject";
import CommuSprite from "../../components/pixi/shaders/CommuSprite/CommuSprite";

import style from "./style.module.scss";

type CharSpriteType = FadeSprite | CommuSprite | Pixi2DModel | PixiSpineModel;

enum CharModelType {
	None = 0,
	U2DModel = 1,
	Spine = 2,
}

/**
 * 50 - BG
 * 500 - Character
 * * 500 - C
 * * 501 - L
 * * 502 - R
 * * 510 - C Activate
 * * 511 - L Activate
 * * 511 - R Activate
 * 590 - ScreenEffect
 * 600 - Add
 * 900 - Effect
 * 1000 - Dialog
 * 1100 - Cover
 * 1200 - Selections
 */

interface PlayerProps {
	display?: boolean;
	bgStyle?: number;

	data: StoryData[];
	bgm: string;

	cursor: number;
	onDone?: () => void;
	onNext?: (cursor: number) => void;

	onVoice?: (voice: string) => void;
}

const Player: FunctionalComponent<PlayerProps> = (props) => {
	const update = useUpdate();
	const [loc] = useLocale();

	const [app, setApp] = useState<PIXI.Application<HTMLCanvasElement> | null>(null);
	const [cover, setCover] = useState<PIXI.Sprite | null>(null);
	const [screen, setScreen] = useState<PIXI.Container | null>(null);

	const [dialog, setDialog] = useState<DialogObject | null>(null);
	const [selection, setSelection] = useState<SelectionObject | null>(null);
	const [screenEffectObject, setScreenEffectObject] = useState<FadeSprite | null>(null);

	const [voice, setVoice] = useState<string>("");
	const [bgm, setBGM] = useState<string>("");

	const [bgName, setBGName] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgDesc, setBGDesc] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgImage, setBGImage] = useState<string>("");

	const [chars, setChars] = useState<Tuple<DialogCharacter | null, 3>>([null, null, null]);
	const charRef = useRef<Tuple<CharSpriteType | undefined, 3>>([undefined, undefined, undefined]);

	const [addImage, setAddImage] = useState<string>("");
	const [addImageAppear, setAddImageAppear] = useState<APPEAR_EFFECT>(APPEAR_EFFECT.NONE);
	const [addImageOff, setAddImageOff] = useState<OFF_EFFECT>(OFF_EFFECT.NONE);

	const [screenEffect, setScreenEffect] = useState<SCREEN_EFFECT>(SCREEN_EFFECT.NONE);

	const [sel, setSel] = useState<DialogSelection[]>([]);
	const [selDisp, setSelDisp] = useState(false);

	const screenEffectFilter = useMemo(() => new PIXI.ColorMatrixFilter(), []);
	const speakerFilter = useMemo(() => [0, 0, 0].map(() => new PIXI.ColorMatrixFilter()), []);

	const playerRef = useRef<HTMLDivElement>(null);

	const [ignore2DModel, setIgnore2DModel] = useState(false);

	const modelList = useDBData<Record<string, CharModelType>>(StaticDB.Story2DModel);
	if (!modelList && !ignore2DModel) {
		if (modelList === null) // was error
			setIgnore2DModel(true);

		return <></>;
	}

	function setCharsByIndex (value: DialogCharacter | null, index: 0 | 1 | 2) {
		setChars(prev => {
			const ret: Mutable<typeof chars> = [...prev];
			ret[index] = value;
			return ret;
		});
	}

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
		if (imageVar.startsWith("Cut_"))
			return `${AssetsRoot}/story/add/${imageVar}.webp`;

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
			"2DModel_DS_Ramiel_N_DL_N", "2DModel_DS_BunnySlayer_N_DL_N",
			"2DModel_PECS_Azaz_NS2", "2DModel_BR_RoyalArsenal_NS2",
			"2DModel_PECS_Azaz_NS2_DL_N", "2DModel_BR_RoyalArsenal_NS2_DL_N",
			"2DModel_MiniPerrault_N", "2DModel_Superior01_N",
			"2DModel_BR_Efreeti_NS1_DL_N",
			"2DModel_PECS_LemonadeBeta_N", "2DModel_PECS_Shepherd_N",
			"2DModel_Mercenary_N", "2DModel_Simon_N", "2DModel_Simon2_N",
			"2DModel_PECS_LemonadeGamma_N_DL_N",
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
			"3P_Galatea_N_DL_0_O": "3P_Galatea_0_O_S",
			"3P_Salacia_N_DL_0_O": "3P_Salacia_0_O_S",
			"3P_Titania_NS2_DL_0_O": "3P_Titania_2_O_S",
			AGS_RheinRitter_NS1_DL_0_O: "AGS_RheinRitter_1_O_S",
			BR_Alvis_NS1_DL_0_O: "BR_Alvis_1_O_S",
			BR_DrM_N_DL_0_O: "BR_DrM_0_O_S",
			BR_Efreeti_NS1_DL_0_O: "BR_Efreeti_1_O_S",
			BR_Emily_NS1_DL_0_O: "BR_Emily_1_O",
			BR_Gnome_NS2_DL_0_O: "BR_Gnome_2_O_S",
			BR_Hela_N_DL_0_O: "BR_Hela_0_O_S",
			BR_HongRyun_NS4_DL_0_O: "BR_HongRyun_4_O_B",
			BR_May_NS2_DL_0_O: "BR_May_2_O_S",
			BR_Nereid_N_DL_0_O: "BR_Nereid_0_O",
			BR_NightAngel_NS2_DL_0_O: "BR_NightAngel_2_O_S",
			BR_Phantom_N_DL_0_O: "BR_Phantom_0_O",
			BR_RoyalArsenal_N_DL_0_O: "BR_RoyalArsenal_0_O_S",
			BR_Sirene_N_DL_0_O: "BR_Sirene_0_O_S",
			BR_StratoAngel_NS1_DL_0_O: "BR_StratoAngel_1_O_S",
			PECS_DarkElf_NS1_DL_0_O: "PECS_DarkElf_1_O_S",
			PECS_ElvenForestmaker_NS1_DL_0_O: "PECS_ElvenForestmaker_1_O",
			PECS_HighElven_N_DL_0_O: "PECS_HighElven_0_O",
			PECS_Hussar_NS1_DL_0_O: "PECS_Hussar_1_O_S",
			PECS_Sadius_N_DL_0_O: "PECS_Sadius_0_O_S",
			PECS_Sonia_N_DL_0_O: "PECS_Sonia_0_O_S",
			PECS_Triaina_N_DL_0_O: "PECS_Triaina_0_O_S",

			"3P_Amphitrite_1_O": "3P_Amphitrite_1_O_S",
			"3P_BlackLilith_0_O": "3P_BlackLilith_0_O_S",
			"3P_Eternity_2_O": "3P_Eternity_2_O_S",
			"3P_Frigga_1_O": "3P_Frigga_1_O_S",
			"3P_Maria_2_O": "3P_Maria_2_O_S",
			"3P_Melite_0_O": "3P_Melite_0_O_S",
			"3P_Melite_1_O": "3P_Melite_1_O_S",
			"3P_Salacia_1_O": "3P_Salacia_1_O_S",
			"3P_Sowan_2_O": "3P_Sowan_2_O_S",
			"3P_Titania_1_O": "3P_Titania_1_O_S",
			BR_Andvari_0_O: "BR_Andvari_0_O_S",
			BR_Amy_0_O: "BR_Amy_0_O_S",
			BR_Amy_2_O: "BR_Amy_2_O_S",
			BR_Brunhild_0_O: "BR_Brunhild_0_O_S",
			BR_Habetrot_0_O: "BR_Habetrot_0_O_S",
			BR_Harpy_1_O: "BR_Harpy_1_O_B",
			BR_Hela_1_O: "BR_Hela_1_O_S",
			BR_Hyena_1_O: "BR_Hyena_1_O_S",
			BR_Leona_0_O: "BR_Leona_0_O_S",
			BR_Leprechaun_2_O: "BR_Leprechaun_2_O_B",
			BR_Nashorn_0_O: "BR_Nashorn_0_O_S",
			BR_Neodym_0_O: "BR_Neodym_0_O_S",
			BR_Neodym_3_O: "BR_Neodym_3_O_B",
			BR_Miho_3_O: "BR_Miho_3_O_S",
			BR_RoyalArsenal_0_O: "BR_RoyalArsenal_0_O_S",
			BR_Salamander_0_O: "BR_Salamander_0_O_S",
			BR_Scarabya_0_O: "BR_Scarabya_0_O_S",
			BR_Scarabya_1_O: "BR_Scarabya_1_O_S",
			BR_Sirene_1_O: "BR_Sirene_1_O_B",
			BR_Sirene_2_O: "BR_Sirene_2_O_S",
			BR_Sleipnir_2_O: "BR_Sleipnir_2_O_S",
			BR_StratoAngel_0_O: "BR_StratoAngel_0_O_S",
			BR_Vargr_0_O: "BR_Vargr_0_O_S",
			BR_Wraithy_2_O: "BR_Wraithy_2_O_S",
			DS_Angel_1_O: "DS_Angel_1_O_B",
			DS_Ramiel_0_O: "DS_Ramiel_0_O_S",
			PECS_Boryeon_1_O: "PECS_Boryeon_1_O_S",
			PECS_BlindPrincess_1_O: "PECS_BlindPrincess_1_O_B",
			PECS_BS_1_O: "PECS_BS_1_O_S",
			PECS_CoCoWhiteShell_0_O: "PECS_CoCoWhiteShell_0_O_S",
			PECS_Ella_1_O: "PECS_Ella_1_O_S",
			PECS_Erato_0_O: "PECS_Erato_0_O_S",
			PECS_Glacias_1_O: "PECS_Glacias_1_O_S",
			PECS_LemonadeAlpha_0_O: "PECS_LemonadeAlpha_0_O_S",
			PECS_Mnemosyne_0_O: "PECS_Mnemosyne_0_O_S",
			PECS_Muse_0_O: "PECS_Muse_0_O_S",
			PECS_Olivia_0_O: "PECS_Olivia_0_O_S",
			PECS_Orangeade_0_O: "PECS_Orangeade_0_O_S",
			PECS_Peregrinus_0_O: "PECS_Peregrinus_0_O_S",
			PECS_Rena_0_O: "PECS_Rena_0_O_S",
			PECS_Saetti_2_O: "PECS_Saetti_2_O_S",
			ST_Lancer_2_O: "ST_Lancer_2_O_S",
			ST_Mercury_0_O: "ST_Mercury_0_O_S",
			SJ_Tachi_0_O: "SJ_Tachi_0_O_S",
			ST_Ullr_0_O: "ST_Ullr_0_O_S",
			ST_Ullr_1_O: "ST_Ullr_1_O_S",

			BR_Brownie_01_0_O: "BR_Brownie_0_O",
			BR_Brownie_02_0_O: "BR_Brownie_0_O",
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

			if (char in charTable)
				return charTable[char];

			return char;
		}
		return false;
	}

	function getVoice (voice: string): string {
		if (!voice) return "";
		return `${AssetsRoot}/audio/voice-ko/${voice}.mp3`;
	}
	function getBGM (bgm: string): string {
		if (!bgm) return "";
		if (bgm === "15 BGM_Empty") return "";

		const bgmTable: Record<string, string> = {
			Valentine_01: "Valentine",
		};

		let normalized = bgm.replace(/^([0-9]+[_ ])?(BGM_)?(.+)$/, "$3");
		if (normalized in bgmTable) normalized = bgmTable[normalized];
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
	function getSpeakerByImage (image: string): string {
		const reg = /^2DModel_(.+)_[PSN](?:S[0-9]+)?$/;
		const ret = reg.exec(image);
		if (ret) return loc[`UNIT_${ret[1]}`] || ret[1];
		return "";
	}

	useEffect(() => { // initialize
		let app: PIXI.Application<HTMLCanvasElement> | null = null;

		if (playerRef.current) {
			app = new PIXI.Application({
				antialias: true,
				backgroundColor: 0x000000,

				width: 1280,
				height: 720,
				resolution: window.devicePixelRatio || 1,
				autoDensity: true,

				// eventMode: "passive",
				eventFeatures: {
					globalMove: false,
					move: true,
					click: true,
					wheel: true,
				},
			});
			app.ticker.maxFPS = 60; // fps limit

			if (IsDev)
				globalThis.__PIXI_APP__ = app;
			setApp(app);

			app.stage = new LAYERS.Stage();

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

			// 1x1 white gif dataURI
			const screenEffect = new FadeSprite(PIXI.Texture.from("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="));
			screenEffect.name = "@screenEffect";
			screenEffect.zIndex = 590;
			screenEffect.alpha = 0;
			screenEffect.filters = [screenEffectFilter];
			screenEffect.width = cover.width;
			screenEffect.height = cover.height;
			setScreenEffectObject(screenEffect);
			app.stage.addChild(screenEffect);

			app.stage.sortableChildren = true;
			screen.sortableChildren = true;

			playerRef.current.appendChild(app.view); // :(
		}

		return () => {
			if (app) app.destroy(true);
		};
	}, [playerRef.current]);

	useEffect(() => { // click event handler
		let func: (() => void) | undefined = undefined;
		let screenEffectTimer: number | null = null;

		if (curData && cover) {
			func = () => {
				const fn = () => {
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

				switch (screenEffect) {
					case SCREEN_EFFECT.FADE_OUT_BLACK:
					case SCREEN_EFFECT.FADE_OUT_WHITE:
						if (screenEffectObject) {
							if (!screenEffectObject.fading) {
								screenEffectObject.fadeIn(1.0);
								screenEffectTimer = setTimeout(() => fn(), 1000);
							} else {
								screenEffectObject.stopFade();
								fn();
							}
						}
						break;
					default:
						fn();
						break;
				}
			};
			cover.addEventListener("click", func);
			cover.addEventListener("tap", func);
		}

		return () => {
			if (screenEffectTimer)
				clearTimeout(screenEffectTimer);

			if (cover && func) {
				cover.removeEventListener("tap", func);
				cover.removeEventListener("click", func);
			}
		};
	}, [cover, curData, screenEffect, props.onNext, props.onDone, sel, selDisp]);

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
				} else if (curData.addEffect === "Prefab_IdolEnding") {
					const effect = new VideoEffect(screen, "Idol_Ending");
					effect.onDone = autoNext;
					return effect;
				} else if (curData.addEffect === "Prefab_3rdAnniversary") {
					const effect = new VideoEffect(screen, "3rdAnniversary");
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
			setScreenEffect(curData.screenEffect);

			if (isValidLText(curData.bg.name)) setBGName(curData.bg.name);
			if (isValidLText(curData.bg.desc)) setBGDesc(curData.bg.desc);

			if (curData.bg.image)
				setBGImage(curData.bg.image);
			else { // track previous bg
				let cursor = props.cursor - 1;
				while (cursor >= 0) {
					const d = props.data[cursor--];
					if (d.bg.image) {
						if (bgImage !== d.bg.image)
							setBGImage(d.bg.image);
						break;
					}
				}
			}

			if (curData.voice) {
				if (props.onVoice)
					props.onVoice(curData.voice);
				else
					setVoice(curData.voice);
			}

			if (curData.char.L) setCharsByIndex(curData.char.L, 0);
			else if (chars[0]) setCharsByIndex(null, 0);

			if (curData.char.R) setCharsByIndex(curData.char.R, 1);
			else if (chars[1]) setCharsByIndex(null, 1);

			if (curData.char.C) setCharsByIndex(curData.char.C, 2);
			else if (chars[2]) setCharsByIndex(null, 2);

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
	useEffect(() => { // BGM processing
		let _bgm = props.bgm; // find bgm to play
		for (let i = 0; i <= props.cursor; i++) {
			const v = props.data[i].bgm;
			if (v) _bgm = v;
		}
		if (bgm !== _bgm) setBGM(_bgm);
	}, [props.bgm, props.data, props.cursor, bgm]);

	useEffect(() => { // BG Name (left top)
		let text: FadeText | null = null;
		if (bgName && screen) {
			// const _ = (s: string): string => {
			// 	const v = new Array(10)
			// 		.fill("0 0 2px #000")
			// 		.join(",");
			// 	return `<span style="text-shadow:${v}">${s}</span>`;
			// };

			text = new FadeText(LText(bgName), {
				// fontFamily,
				fontWeight: 500,
				fontSize: 24,
				fill: "#fff",
				stroke: "#000",
				// strokeThickness: 1.5,
				strokeWidth: 1.5,
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
			// const _ = (s: string): string => {
			// 	const v = new Array(15)
			// 		.fill("0 0 3px #000")
			// 		.join(",");
			// 	return `<span style="text-shadow:${v}">${s}</span>`;
			// };

			text = new FadeText(LText(bgDesc), {
				align: "CC",
				// fontFamily,
				fontSize: 48,
				fill: "#fff",
				stroke: "#000",
				// strokeThickness: 2,
				strokeWidth: 2,
			});
			text.name = "@bgDesc";
			// text.anchor.set(0.5, 0.5);
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
				["Cut_ArkofMemory_01", 0],
				["Cut_ArkofMemory_02", 0],

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
					if ((props.bgStyle ?? 0) === 0) {
						bg.height = 720;
					} else {
						bg.height = Math.min(720, 1280 / tex.width * tex.height);
						bg.y = 360 - bg.height / 2;
					}
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
	}, [screen, bgImage, props.bgStyle]);

	useEffect(() => { // SCG Activation
		if (curData) {
			const zTable: Record<"L" | "R" | "C", number> = { L: 501, R: 502, C: 500 };

			for (let i = 0; i < 3; i++) {
				const c = charRef.current[i];
				const k = (["L", "R", "C", ""] satisfies Array<"L" | "R" | "C" | "">)[i];
				if (c && c.zIndex !== 600) { // not Cut (add)
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
		const SPLITINDEX = [1, SPLITCOUNT - 1, SPLITCOUNT / 2];

		for (let i = 0; i < 3; i++) {
			const index = i;

			useEffect(() => { // Char
				const target = chars[index];

				if (charRef.current[index]) {
					const char = charRef.current[index]!;
					if (
						(screen && target && target.image) && // new char exists
						(char instanceof Pixi2DModel || char instanceof PixiSpineModel) && // U2DModel based (face changeable)
						target.image === char.model.replace(/^[OG]\//, "") // same model image
					) {
						// reusable (only face changed)
						char.setFace(target.imageVar);
						return () => { };
					} else {
						charRef.current[index] = undefined;
						char.fadeOut(0.15);
						setTimeout(() => char!.destroy(), 150);
					}
				}

				let disposed = false;
				let char: CharSpriteType | null = null;
				if (screen && target && target.image) {
					const c = ConvertChar(target.image);
					const modelType = target.image in (modelList || {})
						? modelList![target.image]
						: CharModelType.None;
					const forCommu = isCommu(target.image);

					Promise.all(modelType !== CharModelType.None
						? new Array(2).fill(Promise.resolve())
						: [
							PIXI.Texture.fromURL(c
								? `${AssetsRoot}/webp/full/${c}.webp`
								: forCommu
									? getCommuImage(target.image, target.imageVar)
									: `${AssetsRoot}/story/model/${target.image}.webp`
							),
							forCommu
								? Promise.resolve()
								: fetch(`${AssetsRoot}/story/model/${c || target.image}.json`)
									.then(meta => meta.json())
									.then(meta => meta as StoryModelMeta[])
									.catch(() => undefined),
						]
					).then(([tex, meta]) => {
						if (disposed) {
							tex.destroy();
							return;
						}

						const p = [1280 / SPLITCOUNT * SPLITINDEX[index], 720];
						const s = [index === 1 ? -1 : 1, 1];

						if (modelType === CharModelType.U2DModel) {
							char = new Pixi2DModel("O/" + target.image); // always uncensored
							char.setDialogDeactive(true);
							char.setFace(target.imageVar);
							// p[1] = 720 / 7 * 5;
							p[1] = 360;
						} else if (modelType === CharModelType.Spine) {
							char = new PixiSpineModel(target.image);
							char.setFace(target.imageVar);
							p[1] = 1040;
						} else {
							char = new (forCommu ? CommuSprite : FadeSprite)(tex);
							char.pivot.set(tex.width / 2, tex.height / 4 * 3);

							if (meta) {
								meta.forEach(e => {
									p[0] += e.pos[0] * 100;
									p[1] += e.pos[1] * 100;
									s[0] *= e.scale[0];
									s[1] *= e.scale[1];
								});
							} else if (isCommu(target.image)) {
								if (!target.image.includes("Cut_")) {
									p[1] -= 375;
									s[0] = 213 / tex.width;
									s[1] = 282 / tex.height;
								} else {
									char.zIndex = 600;
									char.pivot.set(tex.width / 2, tex.height / 2);
									p[0] = 640;
									p[1] = 240;
									s[0] = s[1] = 1;
									if (tex.height > 358)
										s[0] = s[1] = 358 / tex.height;
								}
							} else {
								const ratio = Math.min(1, 720 / tex.height);
								p[1] -= 40;
								s[0] = s[1] = ratio;
							}
						}

						char.filters = [speakerFilter[index]];
						char.name = "Char" + ["L", "R", "C"][index];
						char.zIndex = 501 + index;

						char.position.set(...p);
						char.scale.set(...s);
						char.fadeIn(0.15);

						screen.addChild(char);

						charRef.current[index] = char;
						update();
					}).catch(() => void (0));
				}

				return () => {
					disposed = true;
				};
			}, [screen, chars[index]?.image, chars[index]?.imageVar]);
		}
	}

	useEffect(() => { // Add Image
		let disposed = false;

		let type: "add" | "off" = "add";
		let add: FadeSprite | null = null;
		let fadeIn = true;
		let fadeOut = true;

		if (screen && addImage) {
			const fullImage: Array<string | RegExp> = [
				/^Cut_FightTogether_/,
			];
			const semiFullImage: Array<string | RegExp> = [
				"Cut_AnimalFriends",
			];
			PIXI.Texture.fromURL(`${AssetsRoot}/story/add/${addImage}.webp`)
				.then(tex => {
					if (disposed) {
						tex.destroy();
						return;
					}

					add = new FadeSprite(tex);
					add.pivot.set(tex.width / 2, tex.height / 2);
					add.position.set(640, 240);

					if (fullImage.some(r => typeof r === "string" ? r === addImage : r.test(addImage))) {
						add.position.set(640, 360);
						add.scale.set(720 / tex.height);
					} else if (semiFullImage.some(r => typeof r === "string" ? r === addImage : r.test(addImage))) {
						add.position.set(640, 264);
						add.scale.set(480 / tex.height);
					} else if (tex.height > 358)
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
				const speakerTable: Record<Exclude<DIALOG_SPEAKER, DIALOG_SPEAKER.NONE>, "L" | "C" | "R"> = {
					[DIALOG_SPEAKER.LEFT]: "L",
					[DIALOG_SPEAKER.CENTER]: "C",
					[DIALOG_SPEAKER.RIGHT]: "R",
				};

				const speaker = curData.speaker === DIALOG_SPEAKER.NONE
					? null
					: curData.char[speakerTable[curData.speaker]]!;

				speakerFilter[0].tint(curData.char.L?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);
				speakerFilter[1].tint(curData.char.R?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);
				speakerFilter[2].tint(curData.char.C?.SCG === SCG_ACTIVATION.ACTIVATION ? 0xffffff : 0x808080, false);

				dialog.setText(Nn(LText(curData.text)) || "~");
				if (speaker && LText(speaker.name).trim()) {
					dialog.setSpeaker(LText(speaker.name) || getSpeakerByImage(speaker.image), curData.speaker);
				} else
					dialog.setSpeaker("", DIALOG_SPEAKER.NONE);

				if (!dialog.display)
					dialog.setDisplay(true);
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

	useEffect(() => { // Screen Effect
		let timer: number | null = null;

		if (screenEffectObject) {
			if (screenEffect === SCREEN_EFFECT.FADE_IN_BLACK || screenEffect === SCREEN_EFFECT.FADE_OUT_BLACK)
				screenEffectFilter.tint(0x000000);
			else if (screenEffect === SCREEN_EFFECT.FADE_IN_WHITE || screenEffect === SCREEN_EFFECT.FADE_OUT_WHITE)
				screenEffectFilter.tint(0xffffff);

			if (screenEffect === SCREEN_EFFECT.FADE_IN_BLACK || screenEffect === SCREEN_EFFECT.FADE_IN_WHITE) {
				screenEffectObject.fadeOut(1.0);

				timer = setTimeout(() => {
					if (props.onNext)
						props.onNext(props.cursor + 1);
				}, 1000);
			}
		}

		return () => {
			if (screenEffectObject)
				screenEffectObject.stopFade();

			if (timer !== null)
				clearTimeout(timer);
		};
	}, [screenEffectObject, screenEffect]);

	return <>
		{ bgm && <audio
			class={ style.BackgroundAudio }
			src={ getBGM(bgm) }
			autoplay
			loop
			volume={ 0.25 }
		/> }
		{ voice && <audio
			class={ style.BackgroundAudio }
			src={ getVoice(voice) }
			autoplay
			volume={ 0.25 }
		/> }
		<div
			class={ BuildClass(style.Player, props.display === false && style.Hidden) }
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
			ref={ playerRef }
		>
			{ !curData && <div class={ style.DoneScreen }>
				<Locale k="STORY_PLAYER_DONE" />
			</div> }
		</div>
	</>;
};
export default Player;
