import * as PIXI from "pixi.js";

import { AssetsRoot, IsDev } from "@/libs/Const.1";

import CharGammaModel from "./Gamma/Char";
import { loadModelFrom } from "./Gamma/Loader";
import type { DrawItem } from "./Gamma/Renderer";
import type { ModelData } from "./Gamma/Types";

import FadeContainer from "./FadeContainer";
import GammaMesh from "./GammaMesh";
import PixiSpineModel from "./PixiSpineModel";
import { GAMMA_UNIT_SCALE, createTexture, gammaTicker } from "./PixiGammaModel";

/** Battle SD models, `${CharRoot}/<model>/meta.json` */
export const CharRoot = `${AssetsRoot}/char_model`;

//#region metadata
export interface CharAnimationMeta {
	/** clip name (Spine animation name for spine model) */
	a: string;
	lp: boolean;
	/** length in seconds */
	d: number;
	/** clip played after this one by exit time transition (e.g. victory -> victory idle) */
	nx?: string;
}

/** `meta.json` of model, read first to select render path */
export interface CharMeta {
	ver: number;
	name: string;
	type: "gamma" | "spine";
	/** gamma: model data file */
	model?: string;
	/** spine: files loaded by `PixiSpineModel` */
	spine?: {
		/** base name of files */
		n: string;
		f: string;
		at: string;
		an: string;
		md: string;
		/** Spine version */
		v: string;
	};
	/** `eAndroidAnimationType` -> animation */
	anims: Record<string, CharAnimationMeta>;
}

export interface CharIndex {
	ver: number;
	models: Record<string, { b: string; v: string; t: CharMeta["type"]; }>;
	unsupported: Record<string, string>;
}

let indexPromise: Promise<CharIndex> | null = null;
/** Converted models list (`index.json`), for existence check */
export function loadCharIndex (): Promise<CharIndex> {
	if (!indexPromise) {
		indexPromise = fetch(`${CharRoot}/index.json`)
			.then(r => {
				if (!r.ok) throw new Error(`Failed to load char model index (${r.status})`);
				return r.json() as Promise<CharIndex>;
			});
		indexPromise.catch(() => indexPromise = null);
	}
	return indexPromise;
}
//#endregion

/** `eAndroidAnimationType` -> trigger (`CreatureAnimator.InitAnimNameList`), listed order */
export const CHAR_ANIMATION_TRIGGERS: Readonly<Record<string, string>> = {
	idle01: "anim_idle1",
	idle02: "anim_idle2",
	move: "anim_move",
	skill1: "anim_skill1",
	skill1_nodelay: "anim_skill1_nodelay",
	skill2: "anim_skill2",
	skill2_nodelay: "anim_skill2_nodelay",
	skill2_in: "anim_skill2_in",
	skill2_loop: "anim_skill2_idle",
	skill2_out: "anim_skill2_out",
	missskill1: "anim_missskill1",
	missskill2: "anim_missskill2",
	hit01: "anim_hit1",
	hit02: "anim_hit2",
	hit03_protect: "anim_hit3_protect",
	frontstep: "anim_fowardstep",
	frontstep_protect: "anim_fowardstep_protect",
	backstep: "anim_backstep",
	backstep_protect: "anim_backstep_protect",
	victory: "anim_victory",
	victory_idle: "anim_victory_to_idle",
	grabbed: "anim_grabbed",
	wait: "anim_wait",
	change: "anim_change",
	shouting: "anim_shouting",
	special_idle: "S_idle",
	special_move: "S_move",
	special_weapon: "Armed",
	die: "anim_die",
};
export const CHAR_IDLE_TRIGGER = "anim_idle1";
/** One-shot animations which stay on last frame */
const HOLD_TYPES = ["die"];
/** Give up waiting for state of played trigger (not consumed by controller) */
const START_TIMEOUT = 3;

export interface CharAnimationInfo {
	trigger: string;
	/** `eAndroidAnimationType` */
	type: string;
	clip: string;
	/** seconds */
	duration: number;
	loop: boolean;
}

//#region cache
interface CacheEntry<T> {
	promise: Promise<T>;
	refs: number;
	timer: number | null;
	dispose?: () => void;
}
const CacheDuration = 60 * 1000;

interface LoadedGamma {
	data: ModelData;
	images: Array<ImageBitmap | null>;
	textures: PIXI.Texture[] | null;
}

const MetaCache: Record<string, Promise<CharMeta>> = {};
const GammaCache: Record<string, CacheEntry<LoadedGamma>> = {};

function loadMeta (name: string): Promise<CharMeta> {
	if (!(name in MetaCache)) {
		MetaCache[name] = fetch(`${CharRoot}/${name}/meta.json`)
			.then(r => {
				if (!r.ok) throw new Error(`Failed to load char model ${name} (${r.status})`);
				return r.json() as Promise<CharMeta>;
			});
		MetaCache[name].catch(() => delete MetaCache[name]);
	}
	return MetaCache[name];
}

function acquireGamma (name: string, file: string): CacheEntry<LoadedGamma> {
	let entry = GammaCache[name];
	if (!entry) {
		const e: CacheEntry<LoadedGamma> = entry = GammaCache[name] = {
			promise: loadModelFrom(`${CharRoot}/${name}`, file, CharRoot)
				.then(r => ({ ...r, textures: null as PIXI.Texture[] | null })),
			refs: 0,
			timer: null,
		};
		e.dispose = () => {
			e.promise.then(m => {
				m.textures?.forEach(t => t.destroy(true));
				m.images.forEach(i => i?.close());
			}).catch(() => { });
		};
		entry.promise.catch(() => delete GammaCache[name]);
	}
	if (entry.timer !== null) {
		clearTimeout(entry.timer);
		entry.timer = null;
	}
	entry.refs++;
	return entry;
}

function releaseGamma (name: string) {
	const entry = GammaCache[name];
	if (!entry) return;

	entry.refs--;
	if (entry.refs > 0) return;

	entry.timer = window.setTimeout(() => {
		entry.dispose?.();
		delete GammaCache[name];
	}, CacheDuration);
}
//#endregion

interface PlayingAnimation extends CharAnimationInfo {
	/** state of animation is entered */
	started: boolean;
	elapsed: number;
	/** seconds waited for state */
	waited: number;
	ended: boolean;
}

/**
 * Battle SD model (`char_*`), `meta.json` selects render path:
 * - `gamma`: converted Unity model, rendered by gamma runtime (`CharGammaModel`)
 * - `spine`: Spine skeleton driven by Mecanim in game, rendered by `PixiSpineModel`
 *
 * Events: `loaded`, `error`, `animations` (`CharAnimationInfo[]`), `animation-start` ({ duration }), `animation-end`
 */
export default class PixiCharModel extends FadeContainer {
	private readonly _model: string;
	/** lowercased model(prefab) name */
	public get model (): string {
		return this._model;
	}

	private _ready = false;
	public get ready (): boolean {
		return this._ready;
	}

	private _meta: CharMeta | null = null;
	public get meta (): CharMeta | null {
		return this._meta;
	}

	private _animations: CharAnimationInfo[] = [];
	/** Playable animations, idle first */
	public get animations (): readonly CharAnimationInfo[] {
		return this._animations;
	}

	// gamma
	private gamma: CharGammaModel | null = null;
	private gammaAcquired = false;
	private space: PIXI.Container | null = null;
	private meshes: GammaMesh[] = [];
	private meshOf = new Map<DrawItem, GammaMesh>();
	private textures: PIXI.Texture[] = [];
	private elapsed = 0;
	private playing: PlayingAnimation | null = null;
	private pending: string | null = null;
	private stateChanged = false;

	// spine
	private spine: PixiSpineModel | null = null;

	constructor (model: string) {
		super();
		this.sortableChildren = true;
		this._model = model.toLowerCase();
		if (IsDev) (globalThis as any).__CHAR__ = this;

		loadMeta(this._model)
			.then(meta => {
				if (this.destroyed) return;
				this._meta = meta;
				this._animations = Object.keys(CHAR_ANIMATION_TRIGGERS)
					.filter(type => type in meta.anims)
					.map(type => {
						const a = meta.anims[type];
						return {
							trigger: CHAR_ANIMATION_TRIGGERS[type],
							type,
							clip: a.a,
							duration: a.d,
							loop: a.lp,
						};
					});

				switch (meta.type) {
					case "gamma":
						return this.loadGamma(meta);
					case "spine":
						return this.loadSpine(meta);
					default:
						throw new Error(`Unknown char model type "${(meta as CharMeta).type}"`);
				}
			})
			.catch(e => {
				console.error(e);
				if (!this.destroyed) this.emit("error", e);
			});
	}

	private setLoaded () {
		this._ready = true;
		this.emit("animations", this._animations);
		this.emit("loaded", this);
	}

	//#region gamma
	private async loadGamma (meta: CharMeta) {
		const entry = acquireGamma(this._model, meta.model ?? "model.json");
		this.gammaAcquired = true;
		const loaded = await entry.promise;
		if (this.destroyed) return;

		if (!loaded.textures)
			loaded.textures = loaded.images.map((img, i) => createTexture(img, loaded.data.tex[i]));
		this.textures = loaded.textures;

		const gamma = new CharGammaModel(loaded.data);
		this.gamma = gamma;

		const space = new PIXI.Container();
		space.name = "[Char Space]";
		space.sortableChildren = true;
		space.scale.set(GAMMA_UNIT_SCALE, -GAMMA_UNIT_SCALE);
		this.space = space;
		this.addChild(space);

		this.meshes = gamma.allDrawItems.map(item => {
			const m = new GammaMesh(item);
			m.visible = false;
			space.addChild(m);
			this.meshOf.set(item, m);
			return m;
		});

		const anim = gamma.charAnimator;
		if (anim) anim.onStateChanged = (_, layer) => this.stateChanged ||= layer === 0;

		gammaTicker().add(this.tick, this);
		this.tick();
		this.setLoaded();
	}

	/**
	 * State of played animation is entered, checked after animator update
	 * (`onStateChanged` is called before state is switched)
	 */
	private checkStarted () {
		const p = this.playing;
		const changed = this.stateChanged;
		this.stateChanged = false;
		if (!p || p.started || !changed) return;

		const info = this.gamma?.charAnimator?.stateInfo(0);
		if (!info || info.clip !== p.clip) return;

		p.started = true;
		p.elapsed = info.elapsed;
		p.duration = info.length || p.duration;
		if (!p.loop) this.emit("animation-start", { duration: p.duration });
	}

	/** `CreatureAnimator.PlayAnimation`, resets all triggers before setting */
	private fire (trigger: string) {
		const anim = this.gamma?.charAnimator;
		if (!anim) return;
		anim.resetTriggers();
		anim.setTrigger(trigger);
		anim.evaluateTransitions();
	}

	private playGamma (trigger: string): boolean {
		const anim = this.gamma?.charAnimator;
		const info = this._animations.find(a => a.trigger === trigger);
		if (!anim || !info || !anim.hasParameter(trigger)) return false;

		if (this.playing && !this.playing.loop && this.playing.started && !this.playing.ended)
			this.emit("animation-end");

		this.playing = { ...info, started: false, elapsed: 0, waited: 0, ended: false };
		if (trigger === CHAR_IDLE_TRIGGER || anim.canRespond(trigger)) {
			this.pending = null;
			this.fire(trigger);
		} else {
			// game plays idle first then skill on next frame (`Panel_CharacterDetails.coAni`)
			this.fire(CHAR_IDLE_TRIGGER);
			this.pending = trigger;
		}
		return true;
	}

	private updatePlaying (dt: number) {
		if (this.pending) {
			const t = this.pending;
			this.pending = null;
			this.fire(t);
			this.checkStarted();
		}

		this.checkStarted();
		const p = this.playing;
		if (!p || p.ended) return;

		if (!p.started) {
			p.waited += dt;
			if (p.waited > START_TIMEOUT) {
				p.ended = true; // trigger is not consumed
				if (IsDev) console.debug(`[Char] ${p.trigger} not started`);
			}
			return;
		}
		if (p.loop) return;

		p.elapsed += dt;
		if (p.elapsed < p.duration) return;

		// game waits clip length then plays idle (`coAni`)
		p.ended = true;
		this.emit("animation-end");
		const next = this._meta?.anims[p.type]?.nx;
		if (!HOLD_TYPES.includes(p.type) && !next)
			this.playGamma(CHAR_IDLE_TRIGGER);
	}

	private tick () {
		const gamma = this.gamma;
		if (!gamma || this.destroyed) return;

		// pause while hidden or fully transparent, resumes from paused state
		if (!this.worldVisible || this.worldAlpha <= 0) return;

		const dt = Math.min(gammaTicker().deltaMS / 1000, 0.1);
		this.elapsed += dt;
		try {
			gamma.update(dt);
			this.updatePlaying(dt);
		} catch (e) {
			// exception in ticker listener stops shared ticker, stop this model only
			console.error(`[char] ${this.model} update failed`, e);
			gammaTicker().remove(this.tick, this);
			this.emit("error", e);
			return;
		}

		const mats = gamma.data.mat;
		for (const m of this.meshes) m.visible = false;
		gamma.sortedDrawItems().forEach((item, i) => {
			const mesh = this.meshOf.get(item);
			if (!mesh) return;
			mesh.visible = true;
			if (mesh.zIndex !== i) mesh.zIndex = i;
			mesh.sync(mats, this.textures, this.elapsed);
		});
	}
	//#endregion

	//#region spine
	private loadSpine (meta: CharMeta) {
		const sp = meta.spine;
		if (!sp) throw new Error(`Spine info not found in ${this._model}`);

		const model = new PixiSpineModel(this._model, 0, {
			baseURL: `${CharRoot}/${this._model}`,
			name: sp.n,
		});
		this.spine = model;
		this.addChild(model);

		model.on("animation-start", (info: { duration: number; }) => this.emit("animation-start", info));
		model.on("animation-end", () => this.emit("animation-end"));
		// emitted once skeleton is loaded
		model.once("facelist", () => {
			if (!this.destroyed) this.setLoaded();
		});
	}
	//#endregion

	//#region public API
	/** Play animation by trigger (`anim_skill1`, ...), returns `false` if not playable */
	public play (trigger: string): boolean {
		if (this.spine) return this.spine.play(trigger) !== false;
		return this.playGamma(trigger);
	}

	/** Elapsed seconds of current non-looping animation */
	public currentAnimationTime (): number | undefined {
		if (this.spine) return this.spine.currentAnimationTime();

		const p = this.playing;
		return p && p.started && !p.loop && !p.ended ? p.elapsed : undefined;
	}

	/** Bounds of current pose in local coordinates (pixels) */
	public getModelBounds (): PIXI.Rectangle | null {
		if (!this._ready) return null;
		const target = this.space ?? this.spine;
		if (!target) return null;

		const r = target.getBounds(true);
		if (r.width <= 0 || r.height <= 0) return null;

		// world -> local of this
		const tl = this.toLocal(new PIXI.Point(r.left, r.top));
		const br = this.toLocal(new PIXI.Point(r.right, r.bottom));
		return new PIXI.Rectangle(
			Math.min(tl.x, br.x), Math.min(tl.y, br.y),
			Math.abs(br.x - tl.x), Math.abs(br.y - tl.y),
		);
	}
	//#endregion

	public override destroy (options?: boolean | PIXI.IDestroyOptions) {
		gammaTicker().remove(this.tick, this);
		this.meshes.forEach(m => m.destroy({ children: true }));
		this.meshes = [];
		this.meshOf.clear();
		this.gamma = null;
		if (this.gammaAcquired) releaseGamma(this._model);
		this.spine?.destroy();
		this.spine = null;
		super.destroy(options);
	}
}
