import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import Store from "@/store";

import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";

import { APPEAR_EFFECT, DIALOG_SPEAKER, OFF_EFFECT, SCREEN_EFFECT } from "@/types/Enums";
import { DialogSelection, StoryData } from "@/types/Story/Story";
import { StoryModelMeta } from "@/types/Story/Model";
import { LocaleTypes } from "@/types/Locale";

import { useLocale } from "@/libs/Locale";
import { assertDBData, StaticDB, useDBData } from "@/libs/Loader";
import { AssetsRoot, IsDev } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import BGMAlbums from "@/libs/BGM";

import Locale from "@/components/locale";

import { Nn } from "./common";
import ShakeScreen from "./Effects/ScreenShake";
import { AddEffectRun, ApplyAddEffectInstant, HasAddEffect, RunAddEffect } from "./Effects/AddEffects";

import FadeText from "@/components/pixi/FadeText";
import FadeSprite from "@/components/pixi/FadeSprite";
import Pixi2DModel from "@/components/pixi/Pixi2DModel";
import PixiSpineModel from "@/components/pixi/PixiSpineModel";
import MixedModel from "@/routes/units/components/skin-view/MixedModel";

import DialogObject from "./Objects/DialogObject";
import SelectionObject from "./Objects/SelectionObject";
import CommuSprite from "./Objects/CommuSprite/CommuSprite";
import CgLayer from "./Objects/CgLayer";
import ActorStage, { ActorModel, ActorPosition, WORLD_UNIT } from "./Objects/Actor/ActorStage";
import { IsDialogAssetOverride } from "./Objects/Actor/DialogAssetOverride";

import style from "./style.module.scss";

type CharSpriteType = FadeSprite | CommuSprite | Pixi2DModel | PixiSpineModel | MixedModel;

/** Pixels per Unity unit of `Pixi2DModel` (100px, x3.5 root scale) */
const PIXI2DMODEL_UNIT = 350;
/** Character models are drawn as original (`WORLD_UNIT` pixels per unit) */
const MODEL_SCALE = WORLD_UNIT / PIXI2DMODEL_UNIT;

/** `Panel_DialogNovel.BgTextFadeOutTime` */
const BG_DESC_FADE_TIME = 3;

enum CharModelType {
	None = 0,
	U2DModel = 1,
	Spine = 2,
}

/**
 * 40 - CG (world background)
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

	/** Play voice (empty to stop), resolved when voice ended, failed or replaced */
	onVoice?: (voice: string) => Promise<void> | void;
	/** Mute (not pause) voice played by `onVoice` */
	onMute?: (mute: boolean) => void;
}

const Player: FunctionalComponent<PlayerProps> = (props) => {
	const [loc, localeReady] = useLocale({ namespaces: ["UNIT", "PCSTORY"] });

	const [app, setApp] = useState<PIXI.Application<HTMLCanvasElement> | null>(null);
	const [cover, setCover] = useState<PIXI.Sprite | null>(null);
	const [screen, setScreen] = useState<PIXI.Container | null>(null);

	const [dialog, setDialog] = useState<DialogObject | null>(null);
	const [selection, setSelection] = useState<SelectionObject | null>(null);
	const [screenEffectObject, setScreenEffectObject] = useState<FadeSprite | null>(null);

	const [voice, setVoice] = useState<string>("");
	const voiceAudioRef = useRef<HTMLAudioElement>(null);
	const voiceDoneRef = useRef<(() => void) | null>(null);
	/** voice is playing and not skippable (`Voice_Skip`), input is ignored */
	const voiceBlockRef = useRef(false);
	const [bgm, setBGM] = useState<string>("");
	const [bgmLoop, setBGMLoop] = useState(true);
	/** `GameSoundManager.MuteAll` (while playing movie) */
	const [muted, setMuted] = useState(false);

	const [bgName, setBGName] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgDesc, setBGDesc] = useState<Record<LocaleTypes, string | undefined> | null>(null);
	const [bgImage, setBGImage] = useState<string>("");

	const [stage, setStage] = useState<ActorStage | null>(null);
	/** cursor moved by playing (not jumped) */
	const naturalNextRef = useRef<number | null>(null);
	/** row nodes (or exit nodes) are running, input is ignored */
	const busyRef = useRef(true);
	const rowDoneRef = useRef<Promise<void>>(Promise.resolve());
	const liveDoneRef = useRef<Promise<void>>(Promise.resolve());
	const cursorRef = useRef(props.cursor);
	cursorRef.current = props.cursor;
	/** cursor of row which reached dialogue node */
	const [readyCursor, setReadyCursor] = useState(-1);

	const [addImage, setAddImage] = useState<string>("");
	const [addImageAppear, setAddImageAppear] = useState<APPEAR_EFFECT>(APPEAR_EFFECT.NONE);
	const [addImageOff, setAddImageOff] = useState<OFF_EFFECT>(OFF_EFFECT.NONE);

	const [cg, setCg] = useState<CgLayer | null>(null);
	/** add effects started (sounds keep playing until story end) */
	const effectsRef = useRef<AddEffectRun[]>([]);
	/** tween id of foreground (screen effect) */
	const fgTweenRef = useRef(0);

	const [sel, setSel] = useState<DialogSelection[]>([]);
	const [selDisp, setSelDisp] = useState(false);

	const screenEffectFilter = useMemo(() => new PIXI.ColorMatrixFilter(), []);

	const playerRef = useRef<HTMLDivElement>(null);

	const [ignore2DModel, setIgnore2DModel] = useState(false);

	const modelList = useDBData<Record<string, CharModelType>>(StaticDB.Story2DModel);
	if (!assertDBData(modelList) && !ignore2DModel) {
		if (modelList === useDBData.Failed) // was error
			setIgnore2DModel(true);

		return <></>;
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

		// TODO: Implement EmojiEffect & LiveEffect

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
		console.warn(bgm);

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

	/** Load character model for `ActorStage` */
	async function createActorModel (image: string, imageVar: string, position: ActorPosition): Promise<ActorModel | null> {
		const img = image
			.replace(/_N_DL_([0-9]+)/, (_, p1) => `_${p1}`)
			.replace(/_DL_N/, "_DL")
			.replace(/_DL/, "");
		if (!img) return null;

		const c = ConvertChar(img);
		const modelType = img in (assertDBData(modelList) ? modelList : {})
			? modelList![img]
			: CharModelType.None;
		const forCommu = isCommu(img);
		const mirrored = position === ActorPosition.RIGHT || position === ActorPosition.RIGHTCENTER;
		const baseX = ActorStage.destScreenX(position);

		const getTexURL = (imgVar: string) => c
			? `${AssetsRoot}/webp/full/${c}.webp`
			: forCommu
				? getCommuImage(img, imgVar)
				: `${AssetsRoot}/story/model/${img}.webp`;

		/** offset from actor destination (`p[0]`), canvas y (`p[1]`), scale (`s`) */
		const build = (tex: PIXI.Texture | undefined, meta: StoryModelMeta[] | undefined, imgVar: string): [CharSpriteType, Tuple<number, 2>, Tuple<number, 2>, boolean] => {
			const p: Tuple<number, 2> = [0, 720];
			const s: Tuple<number, 2> = [1, 1];
			let isCut = false;

			let char: CharSpriteType;
			if (modelType === CharModelType.U2DModel) {
				char = new Pixi2DModel("O/" + img); // always uncensored
				char.setDialogDeactive(true);
				char.setFace(imgVar);
				p[1] = 360;
			} else if (modelType === CharModelType.Spine) {
				char = new MixedModel(img, `O/${img}`, 0);
				char.setFace(imgVar);
				char.setHidePart(true);
				char.setDialogDeactive(true);
				p[1] = 360;
			} else {
				tex = tex!;
				char = new (forCommu ? CommuSprite : FadeSprite)(tex);
				char.pivot.set(tex.width / 2, tex.height / 4 * 3);

				if (meta) {
					meta.forEach(e => {
						p[0] += e.pos[0] * 100;
						p[1] += e.pos[1] * 100;
						s[0] *= e.scale[0];
						s[1] *= e.scale[1];
					});
				} else if (forCommu) {
					if (!img.includes("Cut_")) {
						p[1] -= 375;
						s[0] = 213 / tex.width;
						s[1] = 282 / tex.height;
					} else {
						isCut = true;
						char.pivot.set(tex.width / 2, tex.height / 2);
						p[0] = 640 - baseX;
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
			return [char, p, s, isCut];
		};

		const [tex, meta] = await (modelType !== CharModelType.None
			? Promise.resolve([undefined, undefined] as const)
			: Promise.all([
				PIXI.Texture.fromURL(getTexURL(imageVar)),
				forCommu
					? Promise.resolve(undefined)
					: fetch(`${AssetsRoot}/story/model/${c || img}.json`)
						.then(meta => meta.json())
						.then(meta => meta as StoryModelMeta[])
						.catch(() => undefined),
			]));

		const object = new PIXI.Container();
		object.name = "Char" + ["L", "R", "C", "LC", "RC"][position];

		let [char, p, s, isCut] = build(tex, meta, imageVar);
		if (!isCut) object.scale.set(MODEL_SCALE); // around actor origin
		const place = () => {
			// actor holder is mirrored, keep offset same with not-mirrored
			char.position.set((mirrored && !isCut ? -1 : 1) * p[0], p[1] - 360);
			char.scale.set(...s);
			object.addChild(char);
		};
		place();

		let face = imageVar;
		return {
			object,
			isCut,
			setFace: (imgVar: string) => {
				if (face === imgVar) return;
				face = imgVar;

				if (char instanceof Pixi2DModel || char instanceof PixiSpineModel || char instanceof MixedModel)
					char.setFace(imgVar);
				else if (forCommu) { // commu face is image itself
					PIXI.Texture.fromURL(getTexURL(imgVar))
						.then(tex => {
							if (object.destroyed || face !== imgVar) return;
							const prev = char;
							[char, p, s] = build(tex, meta, imgVar);
							place();
							prev.destroy();
						})
						.catch(() => void 0);
				}
			},
			getHead: () => (char instanceof Pixi2DModel || char instanceof MixedModel)
				? char.getFaceGlobalPosition()
				: null,
			unit: modelType !== CharModelType.None
				? PIXI2DMODEL_UNIT * Math.abs(s[0]) * (isCut ? 1 : MODEL_SCALE)
				: WORLD_UNIT,
			destroy: () => {
				if (!object.destroyed) object.destroy({ children: true });
			},
		};
	}
	const createActorModelRef = useRef(createActorModel);
	createActorModelRef.current = createActorModel;

	useEffect(() => { // initialize
		let app: PIXI.Application<HTMLCanvasElement> | null = null;

		if (playerRef.current) {
			app = new PIXI.Application({
				antialias: false,
				backgroundColor: 0x000000,

				width: 1280,
				height: 720,
				resolution: 1, // Math.max(2, window.devicePixelRatio || 1),
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
			const screenEffect = new FadeSprite(PIXI.Texture.WHITE);
			screenEffect.name = "@screenEffect";
			screenEffect.zIndex = 590;
			screenEffect.alpha = 0;
			screenEffect.filters = [screenEffectFilter];
			screenEffect.width = cover.width;
			screenEffect.height = cover.height;
			setScreenEffectObject(screenEffect);
			screen.addChild(screenEffect); // `Texture_Foreground`, under dialogue

			const cg = new CgLayer();
			cg.zIndex = 40;
			setCg(cg);
			screen.addChild(cg);

			app.stage.sortableChildren = true;
			screen.sortableChildren = true;

			playerRef.current.appendChild(app.view); // :(
		}

		return () => {
			if (app) app.destroy(true);
		};
	}, [playerRef.current]);

	useEffect(() => { // Actors
		if (!screen) return;

		const stage = new ActorStage(
			screen,
			(image, imageVar, position) => createActorModelRef.current(image, imageVar, position),
			char => [char.name.KR, char.name.EN, char.name.JP, char.name.TC].find(x => x) || char.image,
		);
		setStage(stage);

		return () => stage.destroy();
	}, [screen]);

	useEffect(() => () => { // stop add effects
		effectsRef.current.forEach(e => e.dispose());
		effectsRef.current = [];
	}, []);

	/** `SetBackground` node is created for row (background image changed) */
	function isBackgroundChanged (index: number): boolean {
		const image = props.data[index].bg.image;
		if (!image) return false;
		for (let i = index - 1; i >= 0; i--) {
			const prev = props.data[i].bg.image;
			if (prev) return prev !== image;
		}
		return true;
	}

	/** Restore state before `cursor` without animation (jumped) */
	function restoreTo (cursor: number) {
		if (!stage || !cg) return;

		stage.clear();
		effectsRef.current.forEach(e => e.dispose());
		effectsRef.current = [];
		cg.reset();

		let fg: number | null = null; // foreground color
		for (let i = 0; i < cursor; i++) {
			const row = props.data[i];
			stage.applyInstant(row);

			if (isBackgroundChanged(i)) cg.clearTarget();
			if (isValidLText(row.bg.name) || isValidLText(row.bg.desc)) fg = null; // `BgNameNode` clears foreground
			if (row.addEffect) ApplyAddEffectInstant(row.addEffect, cg);

			switch (row.screenEffect) {
				case SCREEN_EFFECT.FADE_OUT_BLACK: fg = 0x000000; break;
				case SCREEN_EFFECT.FADE_OUT_WHITE: fg = 0xffffff; break;
				case SCREEN_EFFECT.FADE_IN_BLACK:
				case SCREEN_EFFECT.FADE_IN_WHITE:
					fg = null;
					break;
			}
		}

		fgTweenRef.current++;
		if (screenEffectObject) {
			screenEffectObject.stopFade();
			if (fg !== null) screenEffectFilter.tint(fg);
			screenEffectObject.alpha = fg !== null ? 1 : 0;
		}
	}

	useEffect(() => { // Row nodes (before dialogue)
		if (!stage || !cg || !screen || !curData) return;

		let alive = true;
		const cursor = props.cursor;
		const row = curData;

		stage.assetOverride = IsDialogAssetOverride(row.key);
		if (naturalNextRef.current !== cursor) // jumped, restore without animation
			restoreTo(cursor);
		naturalNextRef.current = null;

		busyRef.current = true;
		liveDoneRef.current = Promise.resolve();

		const hasText = Object.values(row.text).some(r => r);
		const hasAddEffect = !!row.addEffect && HasAddEffect(row.addEffect);
		rowDoneRef.current = (async () => {
			// SetBackground
			if (isBackgroundChanged(cursor)) cg.clearTarget();

			// BgNameNode, waits description fading out
			if (isValidLText(row.bg.name) || isValidLText(row.bg.desc)) {
				if (screenEffectObject && screenEffectObject.alpha > 0)
					fadeFG(1, 0, 1); // `Fade_In_FG_Coroutine`

				if (isValidLText(row.bg.desc)) {
					await stage.wait(BG_DESC_FADE_TIME);
					if (!alive) return;
				}
			}

			const r = await stage.runRow(row, hasText, hasAddEffect, () => showAddImage(row));
			if (!alive || !r) return;

			// AddEffect node
			if (row.addEffect) {
				const run = RunAddEffect(row.addEffect, { screen, cg, wait: secs => stage.wait(secs), muteAll });
				if (run) {
					effectsRef.current.push(run);
					await run.done;
					if (!alive) return;
				}
			}

			liveDoneRef.current = r.liveDone;
			busyRef.current = false;
			setReadyCursor(cursor);
		})();

		return () => {
			alive = false;
		};
	}, [stage, cg, screen, curData]);

	/** Move to row, as playing */
	function goTo (index: number) {
		if (index >= 0 && index < props.data.length) {
			naturalNextRef.current = index;
			if (props.onNext) props.onNext(index);
		} else if (props.onDone)
			props.onDone();
	}
	function goNext (row: StoryData) {
		goTo(props.data.findIndex(r => r.key === row.next));
	}

	/** `CamEffectNode.duration` */
	function screenEffectDuration (row: StoryData): number {
		if (row.screenEffect_time) return row.screenEffect_time;
		switch (row.screenEffect) {
			case SCREEN_EFFECT.FADE_OUT_BLACK:
			case SCREEN_EFFECT.FADE_IN_BLACK:
			case SCREEN_EFFECT.FADE_OUT_WHITE:
			case SCREEN_EFFECT.FADE_IN_WHITE:
				return 1.68;
		}
		return 1;
	}

	/** Tween alpha of foreground (`GetFG`), resolved when finished or replaced */
	function fadeFG (from: number, to: number, duration: number, color?: number): Promise<void> {
		const fg = screenEffectObject;
		if (!fg) return Promise.resolve();

		if (color !== undefined) screenEffectFilter.tint(color);
		const id = ++fgTweenRef.current;
		fg.stopFade();
		fg.alpha = from;

		return new Promise(resolve => {
			let t = 0;
			const ticker = PIXI.Ticker.shared;
			const tick = () => {
				if (id !== fgTweenRef.current || fg.destroyed) {
					ticker.remove(tick);
					return resolve();
				}

				t += ticker.deltaMS / 1000;
				fg.alpha = duration > 0 ? from + (to - from) * Math.min(1, t / duration) : to;
				if (t >= duration) {
					fg.alpha = to;
					ticker.remove(tick);
					resolve();
				}
			};
			ticker.add(tick);
		});
	}

	/** `CamEffectNode`, resolved when finished */
	function runCamEffect (row: StoryData): Promise<void> {
		const duration = screenEffectDuration(row);
		switch (row.screenEffect) {
			case SCREEN_EFFECT.CAM_SHAKE:
				return screen
					? ShakeScreen(screen, duration, 4.7, 1, row.screenEffect_shakeDir)
					: Promise.resolve();
			case SCREEN_EFFECT.FADE_OUT_BLACK:
				return fadeFG(0, 1, duration, 0x000000);
			case SCREEN_EFFECT.FADE_OUT_WHITE:
				return fadeFG(0, 1, duration, 0xffffff);
			case SCREEN_EFFECT.FADE_IN_BLACK:
				return fadeFG(1, 0, duration, 0x000000);
			case SCREEN_EFFECT.FADE_IN_WHITE:
				return fadeFG(1, 0, duration, 0xffffff);
		}
		return Promise.resolve();
	}

	/** Play voice (empty to stop), resolved when ended, failed or replaced */
	function playVoice (voice: string): Promise<void> {
		if (props.onVoice)
			return Promise.resolve(props.onVoice(voice));

		const done = voiceDoneRef.current;
		voiceDoneRef.current = null;
		done?.();

		setVoice(voice);
		if (!voice) return Promise.resolve();
		return new Promise<void>(resolve => (voiceDoneRef.current = resolve));
	}
	function endOwnVoice () {
		const done = voiceDoneRef.current;
		voiceDoneRef.current = null;
		done?.();
		setVoice("");
	}

	/**
	 * Run nodes after dialogue (wait live effects, `ExitActorNode`, `CamEffectNode`), then `go`.
	 * @param choice selected by `NovelChoiceNode`, jumps to destination directly (asset override mode runs camera effect and exit)
	 */
	function leaveRow (go: () => void, choice = false) {
		if (!stage || !curData) return;
		if (busyRef.current) return;

		busyRef.current = true;
		const row = curData;
		const cursor = props.cursor;
		(async () => {
			await liveDoneRef.current;
			if (!choice) {
				await stage.runExit(row);
				await runCamEffect(row);
			} else if (stage.assetOverride) { // `NovelChoiceNode.PlayRowTailThenFinish`
				await runCamEffect(row);
				await stage.runExit(row);
			}
		})().then(() => {
			if (cursorRef.current !== cursor) return; // jumped while leaving
			busyRef.current = false;
			go();
		});
	}

	useEffect(() => { // click event handler
		let func: (() => void) | undefined = undefined;

		if (curData && cover) {
			func = () => {
				if (busyRef.current || voiceBlockRef.current) return;
				if (!props.onNext) return;

				if (sel.length > 0) {
					if (!selDisp) setSelDisp(true); // `NovelChoiceNode` after dialogue
					return; // choice must be selected
				}
				leaveRow(() => goNext(curData));
			};
			cover.addEventListener("click", func);
			cover.addEventListener("tap", func);
		}

		return () => {
			if (cover && func) {
				cover.removeEventListener("tap", func);
				cover.removeEventListener("click", func);
			}
		};
	}, [cover, screen, stage, cg, curData, props.onNext, props.onDone, sel, selDisp]);

	useEffect(() => { // curData processing
		console.debug("[STORY:curData]", curData);

		if (screen && curData) {
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

			if (curData.sel) {
				setSelDisp(false);
				setSel(curData.sel);
			}
		}
	}, [screen, curData]);
	/** `GameSoundManager.MuteAll`, sounds keep playing */
	function muteAll (mute: boolean) {
		setMuted(mute);
		effectsRef.current.forEach(e => e.setMuted?.(mute));
		props.onMute?.(mute);
	}

	/** `StaticImageNode` */
	function showAddImage (row: StoryData) {
		if (!row.add) return;
		setAddImage(row.add.image);
		setAddImageAppear(row.add.appear);
		setAddImageOff(row.add.off);
	}

	useEffect(() => { // BGM processing
		let _bgm = props.bgm; // find bgm to play
		let _loop = true; // cutscene bgm always loops
		for (let i = 0; i <= props.cursor && i < props.data.length; i++) {
			const v = props.data[i].bgm;
			if (v) {
				_bgm = v;
				_loop = props.data[i].bgmLoop !== 1; // `BgSoundNode.bgSoundLoop`
			}
		}
		if (bgm !== _bgm) setBGM(_bgm);
		if (bgmLoop !== _loop) setBGMLoop(_loop);
	}, [props.bgm, props.data, props.cursor, bgm, bgmLoop]);

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
			}, 3000);
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
					text.fadeOut(BG_DESC_FADE_TIME);
			}, 0);
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
				[/^Cut_Stage/, 0],

				[/^Cut_/, 500], // over Char
				["Eva_Cut", 500],
				[/^BG_11_[1-7]$/, 500], // cut-scene
				[/^Cuy_DreamMermaid_1_[12]$/, 500], // cut-scene
			];

			PIXI.Texture.fromURL(`${AssetsRoot}/story/bg/${bgImage}.jpg`)
				.then(tex => {
					if (disposed || !tex.valid) {
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

					bg = new FadeSprite(PIXI.Texture.WHITE);
					bg.tint = 0x000000;
					bg.name = "@bg";
					bg.width = 1280;
					bg.height = 720;

					const bgC = new FadeSprite(tex);
					bgC.name = "@bg image";
					bgC.width = 1280;
					if ((props.bgStyle ?? 0) === 0) {
						bgC.height = 720;
					} else {
						bgC.height = Math.min(720, 1280 / tex.width * tex.height);
						bgC.y = 360 - bgC.height / 2;
					}

					bg.addChild(bgC);
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
							add.fadeIn(1.0);
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

	const dialogData = readyCursor === props.cursor ? curData : undefined; // dialogue node reached
	useEffect(() => { // Dialog
		if (!localeReady) return;
		if (dialog && dialogData) {
			const curData = dialogData;
			const hasText = Object.values(curData.text).some(r => r);
			if (hasText) {
				const speakerTable: Record<Exclude<DIALOG_SPEAKER, DIALOG_SPEAKER.NONE>, "L" | "LC" | "C" | "RC" | "R"> = {
					[DIALOG_SPEAKER.LEFT]: "L",
					[DIALOG_SPEAKER.LEFT_CENTER]: "LC",
					[DIALOG_SPEAKER.CENTER]: "C",
					[DIALOG_SPEAKER.RIGHT_CENTER]: "RC",
					[DIALOG_SPEAKER.RIGHT]: "R",
				};

				const speaker = curData.speaker === DIALOG_SPEAKER.NONE
					? null
					: curData.char[speakerTable[curData.speaker]]!;

				dialog.setText(Nn(LText(curData.text), loc["STORY_PLAYER_GAMEPLAYER"] || "") || "~");
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
	}, [dialog, dialogData, LText, loc, localeReady]);
	useEffect(() => { // Voice (`DialogueNode`, `DialogOffNode`)
		voiceBlockRef.current = false;
		if (!dialogData?.voice) return;

		let alive = true;
		const hasText = Object.values(dialogData.text).some(r => r);
		// dialogue can be skipped while playing voice only with `Voice_Skip`, `DialogOffNode` waits voice always
		voiceBlockRef.current = !(hasText && dialogData.voiceSkip === 1);
		playVoice(dialogData.voice).then(() => {
			if (alive) voiceBlockRef.current = false;
		});

		return () => {
			alive = false;
			voiceBlockRef.current = false;
			playVoice(""); // voice is stopped when node finished
		};
	}, [dialogData]);
	useEffect(() => { // Row without dialogue
		if (!dialogData) return;
		if (Object.values(dialogData.text).some(r => r)) return;

		if (dialogData.sel && dialogData.sel.length > 0) // `NovelChoiceNode` shows choices immediately
			setSelDisp(true);
		else if (!dialogData.voice) // `DialogOffNode` finishes immediately without voice
			leaveRow(() => goNext(dialogData));
	}, [dialogData]);
	useEffect(() => { // Own voice player (autoplay blocked)
		const audio = voiceAudioRef.current;
		if (audio && voice)
			audio.play().catch(endOwnVoice);
	}, [voice]);
	useEffect(() => { // Selection
		let fn: (idx: number) => void;

		if (curData && selection) {
			if (sel.length > 0 && selDisp) {
				fn = (idx: number) => {
					if (busyRef.current || voiceBlockRef.current) return;
					if (props.onNext) {
						const i = props.data.findIndex(r => r.key === sel[idx].next);
						if (i >= 0)
							leaveRow(() => goTo(i), true);
						else // destination not found, continues row
							leaveRow(() => goNext(curData));
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
	}, [curData, screen, stage, cg, selection, props.onNext, props.onDone, sel, selDisp, LText]);

	return <>
		{ (b => b && <audio
			class={ style.BackgroundAudio }
			src={ b }
			autoplay
			loop={ bgmLoop }
			muted={ muted }
			volume={ 0.25 }
		/>)(getBGM(bgm)) }
		{ voice && <audio
			ref={ voiceAudioRef }
			class={ style.BackgroundAudio }
			src={ getVoice(voice) }
			autoplay
			volume={ 0.25 }
			muted={ muted }
			onEnded={ endOwnVoice }
			onError={ endOwnVoice }
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
						if (busyRef.current || voiceBlockRef.current) return;
						if (sel.length === 0)
							leaveRow(() => goNext(curData));
						else if (!selDisp)
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
