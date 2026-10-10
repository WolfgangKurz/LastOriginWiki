import * as PIXI from "pixi.js";

import { IsDev } from "@/libs/Const";

import GammaModel, { TRIGGER_NORMAL_TOUCH, TRIGGER_SPECIAL_TOUCH } from "./Gamma/Model";
import { GammaModelId, LoadedModel, loadModel, parseModelId } from "./Gamma/Loader";
import type { DrawItem } from "./Gamma/Renderer";
import type { TextureData } from "./Gamma/Types";

import FadeContainer from "./FadeContainer";
import GammaMesh from "./GammaMesh";

/** Pixels per Unity unit, Unity viewer camera was orthographic size 1 on 720px height */
export const GAMMA_UNIT_SCALE = 360;

/** Model update rate cap, high refresh rate display does not need more updates */
const GAMMA_MAX_FPS = 60;

let _ticker: PIXI.Ticker | null = null;
/** Ticker for gamma model updates, separated from shared ticker to cap update rate */
function gammaTicker (): PIXI.Ticker {
	if (!_ticker) {
		_ticker = new PIXI.Ticker();
		_ticker.maxFPS = GAMMA_MAX_FPS;
		_ticker.start();
	}
	return _ticker;
}

//#region cache
interface CacheEntry {
	promise: Promise<LoadedModel>;
	textures: PIXI.Texture[] | null;
	refs: number;
	timer: number | null;
}
const ModelCache: Record<string, CacheEntry> = {};
const ModelCacheDuration = 60 * 1000;

function cacheKey (id: GammaModelId): string {
	return `${id.platform}/${id.name}`;
}

function acquire (id: GammaModelId): CacheEntry {
	const key = cacheKey(id);
	let entry = ModelCache[key];
	if (!entry) {
		entry = ModelCache[key] = {
			promise: loadModel(id),
			textures: null,
			refs: 0,
			timer: null,
		};
		entry.promise.catch(() => delete ModelCache[key]);
	}
	if (entry.timer !== null) {
		clearTimeout(entry.timer);
		entry.timer = null;
	}
	entry.refs++;
	return entry;
}

function release (id: GammaModelId) {
	const key = cacheKey(id);
	const entry = ModelCache[key];
	if (!entry) return;

	entry.refs--;
	if (entry.refs > 0) return;

	entry.timer = window.setTimeout(() => {
		entry.textures?.forEach(t => t.destroy(true));
		entry.promise.then(m => m.images.forEach(i => i?.close())).catch(() => { });
		delete ModelCache[key];
	}, ModelCacheDuration);
}

function createTexture (image: ImageBitmap | null, info: TextureData): PIXI.Texture {
	if (!image) return PIXI.Texture.WHITE;

	const resource = new PIXI.ImageBitmapResource(image, {
		alphaMode: PIXI.ALPHA_MODES.NPM,
		ownsImageBitmap: false,
	});
	const base = new PIXI.BaseTexture(resource, {
		alphaMode: PIXI.ALPHA_MODES.NPM,
		mipmap: PIXI.MIPMAP_MODES.OFF,
		scaleMode: info.fl === 0 ? PIXI.SCALE_MODES.NEAREST : PIXI.SCALE_MODES.LINEAR,
		wrapMode: info.wr[0] === 0 ? PIXI.WRAP_MODES.REPEAT : PIXI.WRAP_MODES.CLAMP,
	});
	return new PIXI.Texture(base);
}
//#endregion

export interface GammaAnimationInfo {
	/** seconds */
	duration: number;
}

export interface GammaPartsInfo {
	part: boolean;
	part2: boolean;
	bg: boolean;
}

export default class PixiGammaModel extends FadeContainer {
	private readonly _model: string;
	private readonly _google: boolean;
	private readonly _id: GammaModelId;
	public get model (): string {
		return this._model;
	}
	public get google (): boolean {
		return this._google;
	}
	public get platform () {
		return this._id.platform;
	}

	private _face: string = "";
	public get face (): string {
		return this._face;
	}

	private _hidePart: boolean = false;
	public get hidePart (): boolean {
		return this._hidePart;
	}

	private _hidePart2: boolean = false;
	public get hidePart2 (): boolean {
		return this._hidePart2;
	}

	private _hideBG: boolean = false;
	public get hideBG (): boolean {
		return this._hideBG;
	}

	private _dialogDeactive: boolean = false;
	public get dialogDeactive (): boolean {
		return this._dialogDeactive;
	}

	private _colliderVisible: boolean = false;
	public get colliderVisible (): boolean {
		return this._colliderVisible;
	}

	private _ready = false;
	public get ready (): boolean {
		return this._ready;
	}

	private gamma: GammaModel | null = null;
	public get runtime (): GammaModel | null {
		return this.gamma;
	}

	/** Unity space, y-up */
	private readonly space: PIXI.Container;
	private readonly colliderGraphics: PIXI.Graphics;
	private meshes: GammaMesh[] = [];
	private meshOf = new Map<DrawItem, GammaMesh>();
	private textures: PIXI.Texture[] = [];
	private elapsed = 0;
	private colliderDrawn = false;

	constructor (model: string, google?: boolean) {
		super();
		this.sortableChildren = true;

		this._model = model;
		this._google = !!google;
		this._id = parseModelId(model, google);

		this.space = new PIXI.Container();
		this.space.name = "[Gamma Space]";
		this.space.sortableChildren = true;
		this.space.scale.set(GAMMA_UNIT_SCALE, -GAMMA_UNIT_SCALE);
		this.addChild(this.space);

		this.colliderGraphics = new PIXI.Graphics();
		this.colliderGraphics.zIndex = Number.MAX_SAFE_INTEGER;
		this.colliderGraphics.eventMode = "none";
		this.space.addChild(this.colliderGraphics);

		this.setupInteraction();

		const entry = acquire(this._id);
		entry.promise
			.then(loaded => {
				if (this.destroyed) return;
				if (!entry.textures)
					entry.textures = loaded.images.map((img, i) => createTexture(img, loaded.data.tex[i]));
				this.textures = entry.textures;
				this.initialize(loaded);
			})
			.catch(e => {
				console.error(e);
				if (!this.destroyed) this.emit("error", e);
			});
	}

	private initialize (loaded: LoadedModel) {
		const gamma = new GammaModel(loaded.data);
		this.gamma = gamma;
		if (IsDev) (globalThis as any).__GAMMA__ = this;

		gamma.events.onTouchAnimationStart = info => this.emit("animation-start", { duration: info.duration } as GammaAnimationInfo);
		gamma.events.onTouchAnimationEnd = () => this.emit("animation-end");

		this.meshes = gamma.allDrawItems.map(item => {
			const m = new GammaMesh(item);
			m.visible = false;
			this.space.addChild(m);
			this.meshOf.set(item, m);
			return m;
		});

		// apply states requested before loaded
		this.applyParts();
		if (this._face) gamma.setFace(this._face);

		this._ready = true;
		gammaTicker().add(this.tick, this);
		this.tick();

		this.emit("facelist", gamma.faceList, "");
		this.emit("parts", {
			part: gamma.hasParts,
			part2: gamma.hasParts2,
			bg: gamma.hasBg,
		} as GammaPartsInfo);
		this.emit("loaded", this);
	}

	private setupInteraction () {
		const space = this.space;
		space.eventMode = "static";
		space.cursor = "pointer";
		space.hitArea = {
			contains: (x: number, y: number) => !!this.gamma && this.gamma.raycast(x, y).length > 0,
		};

		space.on("pointertap", e => {
			if (!this.gamma) return;

			const p = e.getLocalPosition(space);
			const trigger = this.gamma.touch(p.x, p.y);
			if (trigger === TRIGGER_SPECIAL_TOUCH)
				this.emit("special-touch", this);
			else if (trigger === TRIGGER_NORMAL_TOUCH)
				this.emit("normal-touch", this);
		});
	}

	private tick () {
		const gamma = this.gamma;
		if (!gamma || this.destroyed) return;

		// pause while hidden or fully transparent, resumes from paused state
		if (!this.worldVisible || this.worldAlpha <= 0) return;

		const dt = gammaTicker().deltaMS / 1000;
		this.elapsed += dt;
		try {
			gamma.update(dt);
		} catch (e) {
			// exception in ticker listener stops shared ticker, stop this model only
			console.error(`[gamma] ${this.model} update failed`, e);
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

		this.drawColliders();
	}

	private drawColliders () {
		const g = this.colliderGraphics;
		if (!this._colliderVisible || !this.gamma) {
			if (this.colliderDrawn) {
				g.clear();
				this.colliderDrawn = false;
			}
			return;
		}

		g.clear();
		this.colliderDrawn = true;

		for (const c of this.gamma.colliders) {
			if (!c.enabled || !c.node.activeInHierarchy) continue;

			const hx = Math.abs(c.size[0]) / 2, hy = Math.abs(c.size[1]) / 2;
			const pts = [[-hx, -hy], [hx, -hy], [hx, hy], [-hx, hy]]
				.map(([x, y]) => c.node.transformPoint([c.center[0] + x, c.center[1] + y, c.center[2]]));

			// const special = /special|chest/i.test(c.node.name);
			g.lineStyle({ width: 1, color: 0x00ff00, native: true });
			g.moveTo(pts[3][0], pts[3][1]);
			for (const p of pts) g.lineTo(p[0], p[1]);
		}
	}

	private applyParts () {
		const gamma = this.gamma;
		if (!gamma) return;
		gamma.setPartsView(!this._hidePart);
		if (gamma.hasParts2) gamma.setParts2View(!this._hidePart2);
		gamma.setBgView(!this._hideBG);
		gamma.setDialogParts(this._dialogDeactive);
	}

	//#region public API (same as Pixi2DModel / PixiSpineModel)
	public setFace (face: string): boolean {
		this._face = face;
		return this.gamma ? this.gamma.setFace(face) : false;
	}

	public setHidePart (hide: boolean) {
		this._hidePart = hide;
		this.gamma?.setPartsView(!hide);
	}

	public setHidePart2 (hide: boolean) {
		this._hidePart2 = hide;
		if (this.gamma?.hasParts2) this.gamma.setParts2View(!hide);
	}

	public setHideBG (hide: boolean) {
		this._hideBG = hide;
		this.gamma?.setBgView(!hide);
	}

	public setDialogDeactive (deactive: boolean) {
		this._dialogDeactive = deactive;
		this.gamma?.setDialogParts(deactive);
	}

	public setColliderVisible (visible: boolean) {
		this._colliderVisible = visible;
		this.drawColliders();
	}

	/** Play touch reaction by trigger name (`Tep_1`, `breast`), returns animation info if started */
	public play (event: string): GammaAnimationInfo[] | false {
		const gamma = this.gamma;
		if (!gamma || !gamma.play(event)) return false;

		return [{ duration: gamma.touchAnimationInfo()?.duration ?? 0 }];
	}

	/** Elapsed seconds of current touch animation */
	public currentAnimationTime (): number | undefined {
		return this.gamma?.touchAnimationInfo()?.elapsed;
	}
	//#endregion

	public override destroy (options?: boolean | PIXI.IDestroyOptions) {
		gammaTicker().remove(this.tick, this);
		this.meshes.forEach(m => m.destroy({ children: true }));
		this.meshes = [];
		this.meshOf.clear();
		this.gamma = null;
		release(this._id);
		super.destroy(options);
	}
}
