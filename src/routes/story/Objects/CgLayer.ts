import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";

/** `Mathf.SmoothDamp` of Unity */
function SmoothDamp (current: number, target: number, velocity: { v: number }, smoothTime: number, dt: number): number {
	smoothTime = Math.max(0.0001, smoothTime);
	const omega = 2 / smoothTime;
	const x = omega * dt;
	const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
	const change = current - target;
	const temp = (velocity.v + omega * change) * dt;
	velocity.v = (velocity.v - omega * temp) * exp;

	let output = target + (change + temp) * exp;
	if ((target - current > 0) === (output > target)) {
		output = target;
		velocity.v = (output - target) / dt;
	}
	return output;
}

/** `ProCamera2DNumericBoundaries` of `Scene_DialogNovel` */
const BOUNDARY = { left: -11.22, right: 11.25, top: 5.11, bottom: -5.11 };
const DEFAULT_SIZE = 5.2;
const ASPECT = 1280 / 720;
const SPRITE_PPU = 100;

/**
 * World background (`SpriteBG`) rendered by `DialogNovelCameraControl` camera of original game.
 * Placed behind background image, visible only when background image is empty.
 */
export default class CgLayer extends PIXI.Container {
	private readonly world = new PIXI.Container();
	private background: PIXI.Sprite | null = null;
	private overlay: PIXI.Sprite | null = null;

	private targets: Array<Tuple<number, 2>> = [];
	private zoom = false;
	private damp = 0.1;

	private camX = 0;
	private camY = 0;
	private size = DEFAULT_SIZE;
	private readonly velX = { v: 0 };
	private readonly velY = { v: 0 };
	private readonly velSize = { v: 0 };

	private readonly onTick = () => this.update(PIXI.Ticker.shared.deltaMS / 1000);

	constructor () {
		super();
		this.name = "@cg";
		this.world.sortableChildren = true;
		this.addChild(this.world);
		PIXI.Ticker.shared.add(this.onTick);
	}

	public destroy (options?: boolean | PIXI.IDestroyOptions) {
		PIXI.Ticker.shared.remove(this.onTick);
		super.destroy(options);
	}

	private loadSprite (name: string): PIXI.Sprite {
		const sprite = PIXI.Sprite.from(`${AssetsRoot}/story/add/${name}.webp`);
		sprite.anchor.set(0.5, 0.5);
		sprite.scale.set(1 / SPRITE_PPU, -1 / SPRITE_PPU); // world is y-up
		return sprite;
	}

	/** `SpriteBG.sprite` */
	public setBackground (name: string) {
		this.background?.destroy();
		this.background = this.loadSprite(name);
		this.background.zIndex = 0;
		this.world.addChildAt(this.background, 0);
	}

	/** `DialogNovelCameraControl.ClearTarget` */
	public clearTarget () {
		this.targets = [];
		this.zoom = false;
		this.damp = 0.1;
	}

	/** `DialogNovelCameraControl.AddTarget`, positions in world unit */
	public addTarget (x: number, y: number, zoom: boolean, damp: number) {
		this.targets.push([x, y]);
		this.zoom = zoom;
		this.damp = damp;
	}

	/** `DialogNovelCameraControl.GetDesiredPosition` */
	public get arrived (): boolean {
		if (this.targets.length === 0) return true;
		return Math.pow(this.camX - this.desired[0], 2) < 1e-5;
	}

	/** Move camera to targets immediately */
	public snap () {
		if (this.targets.length === 0) return;
		[this.camX, this.camY] = this.desired;
		if (this.zoom) this.size = this.requiredSize;
		this.clamp();
		this.applyCamera();
	}

	/**
	 * `BackGroundFadeInEffectNode` sprite, fades in over `duration`.
	 * Resolved when finished.
	 */
	public fadeInOverlay (name: string, duration: number): Promise<void> {
		this.overlay?.destroy();
		const overlay = this.overlay = this.loadSprite(name);
		overlay.zIndex = 3;
		overlay.alpha = 0;
		this.world.addChild(overlay);

		return new Promise(resolve => {
			let t = 0;
			const ticker = PIXI.Ticker.shared;
			const tick = () => {
				t = Math.min(duration, t + ticker.deltaMS / 1000);
				if (overlay.destroyed) {
					ticker.remove(tick);
					return resolve();
				}
				overlay.alpha = duration > 0 ? t / duration : 1;
				if (t >= duration) {
					overlay.alpha = 1;
					ticker.remove(tick);
					resolve();
				}
			};
			ticker.add(tick);
		});
	}

	/** Show overlay sprite immediately */
	public setOverlay (name: string) {
		this.overlay?.destroy();
		this.overlay = this.loadSprite(name);
		this.overlay.zIndex = 3;
		this.world.addChild(this.overlay);
	}

	/** Remove all sprites and reset camera */
	public reset () {
		this.background?.destroy();
		this.overlay?.destroy();
		this.background = this.overlay = null;
		this.clearTarget();
		this.camX = this.camY = 0;
		this.size = DEFAULT_SIZE;
		this.velX.v = this.velY.v = this.velSize.v = 0;
		this.applyCamera();
	}

	private get desired (): Tuple<number, 2> {
		const n = this.targets.length;
		return [
			this.targets.reduce((p, c) => p + c[0], 0) / n,
			this.targets.reduce((p, c) => p + c[1], 0) / n,
		];
	}

	/** `DialogNovelCameraControl.FindRequiredSize` (edge buffer and min size are 0) */
	private get requiredSize (): number {
		const [dx, dy] = this.desired;
		return this.targets.reduce((p, [x, y]) => Math.max(p, Math.abs(y - dy), Math.abs(x - dx) / ASPECT), 0);
	}

	/** `ProCamera2DNumericBoundaries` */
	private clamp () {
		const halfH = this.size;
		const halfW = this.size * ASPECT;
		this.camX = Math.max(BOUNDARY.left + halfW, Math.min(BOUNDARY.right - halfW, this.camX));
		this.camY = Math.max(BOUNDARY.bottom + halfH, Math.min(BOUNDARY.top - halfH, this.camY));
	}

	/** `DialogNovelCameraControl.Update` */
	private update (dt: number) {
		if (dt <= 0) return;

		if (this.targets.length === 0) {
			this.camX = this.camY = 0;
			this.size = DEFAULT_SIZE;
		} else {
			const [x, y] = this.desired;
			this.camX = SmoothDamp(this.camX, x, this.velX, this.damp, dt);
			this.camY = SmoothDamp(this.camY, y, this.velY, this.damp, dt);
			this.size = SmoothDamp(this.size, this.zoom ? this.requiredSize : 1, this.velSize, this.damp, dt);
			this.clamp();
		}
		this.applyCamera();
	}

	private applyCamera () {
		const ppu = 360 / this.size; // pixels per world unit
		this.world.scale.set(ppu, -ppu);
		this.world.position.set(640 - this.camX * ppu, 360 + this.camY * ppu);
		this.visible = !!this.background;
	}
}
