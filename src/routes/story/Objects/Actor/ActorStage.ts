import * as PIXI from "pixi.js";

import { APPEAR_EFFECT, DIALOG_CHARACTER_EFFECT, DIALOG_CHAREMOJI_EFFECT, OFF_EFFECT, SCG_ACTIVATION } from "@/types/Enums";
import { DialogCharacter, StoryData } from "@/types/Story/Story";

import EmojiObject from "./EmojiObject";
import LiveTweens, { LiveTween, LiveTweenSet } from "./LiveTweens";
import { EvaluateCurve } from "./UnityCurve";

/*
 * Port of `ActorManager`, `Actor` and node sequence of `Scene_DialogNovel.CreateNode` from original game.
 *
 * Every actor coordinate is in game UI unit (NGUI, 1920x1080, center origin, y-up),
 * converted to canvas (1280x720) only when rendering.
 */

/** Game UI unit -> canvas pixel */
export const UI_UNIT = 720 / 1080;
/** Actor render camera world unit -> canvas pixel (orthographicSize 1.38, RenderTexture height 1200) */
export const WORLD_UNIT = 1200 / (1.38 * 2) * UI_UNIT;

const CANVAS_CENTER: Readonly<PIXI.IPointData> = { x: 640, y: 360 };

/** `Scene_DialogNovel._leftActorPos`, `_righActorPos` */
const LEFT_DEST = -582;
const RIGHT_DEST = 582;
/** `Scene_DialogNovel.offscreen_*` */
const OFFSCREEN_LEFT = { x: -1525, y: 0 };
const OFFSCREEN_RIGHT = { x: 1525, y: 0 };
const OFFSCREEN_TOP = { x: 0, y: 1132 };
const OFFSCREEN_BOTTOM = { x: 0, y: -1132 };
/** `ActorManager.space_per_actor_in_CENTER` */
const SPACE_PER_ACTOR_IN_CENTER = 100;
/** `Actor.brigthness_change` per 0.03sec */
const BRIGHTNESS_CHANGE = 0.05;
const BRIGHTNESS_INTERVAL = 0.03;

/** Same order with `Actor_Positions` */
export enum ActorPosition {
	LEFT = 0,
	RIGHT = 1,
	CENTER = 2,
	LEFTCENTER = 3,
	RIGHTCENTER = 4,
}
const PositionKeys = ["L", "R", "C", "LC", "RC"] as const;

export interface ActorModel {
	/** Display object of model, placed relative to actor origin, not mirrored */
	object: PIXI.Container;
	/** Cut image (shown like add image), not mirrored */
	isCut: boolean;
	setFace (face: string): void;
	/** Global position of face, `null` if unknown */
	getHead (): PIXI.IPointData | null;
	/** Pixels per Unity world unit of model, in actor coordinate (`object` scale applied) */
	unit: number;
	destroy (): void;
}
export type ActorModelFactory = (image: string, imageVar: string, position: ActorPosition) => Promise<ActorModel | null>;

interface ChangeActorTransformInfo {
	offset: PIXI.IPointData;
	rotZ: number;
	scaleX: number;
	scaleY: number;
	flip: boolean | null;
}

//#region Task (coroutine)
class Task {
	public done = false;
	private resolver!: () => void;
	public readonly promise = new Promise<void>(resolve => (this.resolver = resolve));

	/** @param step returns `true` when finished */
	constructor (private readonly step: (dt: number) => boolean) { }

	/** @internal */
	public tick (dt: number) {
		if (this.done) return;
		if (this.step(dt)) this.finish();
	}

	public finish () {
		if (this.done) return;
		this.done = true;
		this.resolver();
	}
}
//#endregion

class Actor {
	public readonly holder = new PIXI.Container();
	private readonly filter = new PIXI.ColorMatrixFilter();
	private model: ActorModel | null = null;
	private emoji: EmojiObject | null = null;

	/** `transform.localPosition` */
	public local: PIXI.IPointData = { x: 0, y: 0 };
	public desired: PIXI.IPointData = { x: 0, y: 0 };
	public customOffset: PIXI.IPointData = { x: 0, y: 0 };
	public liveMoveOffset: PIXI.IPointData = { x: 0, y: 0 };
	/** `localEulerAngles.z` */
	public eulerZ = 0;
	/** `localEulerAngles.y` is 180 */
	public mirrored = false;
	public scaleX = 1;
	public scaleY = 1;
	public alpha = 1;
	/** 0 = gray, 1 = white */
	public brightness = 1;
	public depth = 1;

	/** `is_moving` of original (inverted naming), `true` when slide finished */
	public slideDone = true;
	public removeWhenOutOfSight = false;
	public removed = false;

	public face = "";

	private coroutines: Task[] = [];
	private brightnessTask: Task | null = null;

	constructor (
		private readonly stage: ActorStage,
		public name: string,
		public image: string,
		public position: ActorPosition,
	) {
		this.holder.name = `Actor(${name})`;
		this.holder.sortableChildren = true;
		this.holder.filters = [this.filter];

		// `Actor.LoadModel`
		if (position === ActorPosition.RIGHT || position === ActorPosition.RIGHTCENTER)
			this.mirrored = true;
		this.depth = position === ActorPosition.CENTER ? 0 : 1;
	}

	public get isCut () {
		return this.model?.isCut ?? false;
	}

	public setModel (model: ActorModel | null) {
		if (this.removed) {
			model?.destroy();
			return;
		}

		if (this.model) {
			this.holder.removeChild(this.model.object);
			this.model.destroy();
		}
		this.model = model;
		if (model) {
			model.object.zIndex = 0;
			this.holder.addChild(model.object);
			if (this.face) model.setFace(this.face);
		}
		this.sync();
	}

	public setFace (face: string) {
		this.face = face;
		this.model?.setFace(face);
	}

	public sync () {
		if (this.removed) return;

		const mirrored = this.mirrored && !this.isCut;
		this.holder.position.set(
			CANVAS_CENTER.x + this.local.x * UI_UNIT,
			CANVAS_CENTER.y - this.local.y * UI_UNIT,
		);
		this.holder.scale.set((mirrored ? -1 : 1) * this.scaleX, this.scaleY);
		this.holder.angle = mirrored ? this.eulerZ : -this.eulerZ;
		this.holder.zIndex = this.isCut ? 600 : 500 + this.depth * 10 + this.position;
		this.filter.brightness(0.5 + 0.5 * this.brightness, false);
		// opacity of merged result (actor is rendered to texture by filter, like RenderTexture of original),
		// `holder.alpha` makes overlapped parts (face on body) transparent each other
		this.filter.matrix[18] = this.alpha;
	}

	//#region Coroutines
	private startCoroutine (step: (dt: number) => boolean): Task {
		const task = this.stage.run(step);
		this.coroutines.push(task);
		task.promise.then(() => {
			const i = this.coroutines.indexOf(task);
			if (i >= 0) this.coroutines.splice(i, 1);
		});
		return task;
	}

	public stopAllCoroutines () {
		for (const task of [...this.coroutines]) task.finish();
		this.coroutines = [];
		this.brightnessTask = null;
	}
	//#endregion

	/** `Actor.Fade_In` */
	public fadeIn (overTime: number): Task {
		this.stopAllCoroutines();
		let value = 0;
		this.alpha = 0;
		this.sync();
		return this.startCoroutine(dt => {
			value += dt;
			this.alpha = Math.min(1, value / overTime);
			this.sync();
			return value >= overTime;
		});
	}

	/** `Actor.Fade_Out` */
	public fadeOut (overTime: number, onComplete?: () => void): Task {
		this.stopAllCoroutines();
		this.stage.markExiting(this);

		let value = 0;
		this.alpha = 1;
		this.sync();
		const task = this.startCoroutine(dt => {
			value += dt;
			this.alpha = Math.max(0, 1 - value / overTime);
			this.sync();
			return value >= overTime;
		});
		task.promise.then(() => {
			this.stage.removeActor(this);
			onComplete?.();
		});
		return task;
	}

	/** `Actor.Slide_In` */
	public slideIn (destination: ActorPosition, startPosition: APPEAR_EFFECT, duration: number): Task {
		this.stage.addActorTo(this, destination);
		this.stage.slideStartPosition(this, startPosition);
		return this.coSlide(duration);
	}

	/** `Actor.Slide_Out(float, OFF_EFFECT)` */
	public slideOut (duration: number, off: OFF_EFFECT): Task {
		if (!this.removeWhenOutOfSight) {
			const set = (p: PIXI.IPointData) => {
				this.desired = p;
				this.stage.markExiting(this);
			};
			switch (off) {
				case OFF_EFFECT.POPOUTFROMLEFT:
					set({ x: OFFSCREEN_LEFT.x, y: OFFSCREEN_LEFT.y + this.customOffset.y });
					break;
				case OFF_EFFECT.POPOUTFROMRIGHT:
					set({ x: OFFSCREEN_RIGHT.x, y: OFFSCREEN_RIGHT.y + this.customOffset.y });
					break;
				case OFF_EFFECT.POPOUTFROMTOP:
					set({ x: OFFSCREEN_TOP.x + this.customOffset.x, y: OFFSCREEN_TOP.y });
					break;
				case OFF_EFFECT.POPOUTFROMBOTTOM:
					set({ x: OFFSCREEN_BOTTOM.x + this.customOffset.x, y: OFFSCREEN_BOTTOM.y });
					break;
			}
		}
		this.removeWhenOutOfSight = true;
		return this.coSlide(duration);
	}

	/** `Actor.Place_At_Position` */
	public placeAt (destination: ActorPosition) {
		this.position = destination;
		this.stage.addActorTo(this, destination);
		this.local = { ...this.desired };
		this.sync();
	}

	/** `Actor.coSlide` */
	private coSlide (duration: number): Task {
		this.slideDone = false;
		const start = { ...this.local };
		const target = { ...this.desired };

		const finish = () => {
			this.local = target;
			this.sync();
			if (this.removeWhenOutOfSight)
				this.stage.removeActor(this);
			this.slideDone = true;
		};

		if (duration <= 0) {
			finish();
			return this.startCoroutine(() => true);
		}

		let elapsed = 0;
		return this.startCoroutine(dt => {
			elapsed += dt;
			const n = Math.min(1, elapsed / duration);
			const t = 1 - Math.pow(1 - n, 5);
			this.local = {
				x: start.x + (target.x - start.x) * t,
				y: start.y + (target.y - start.y) * t,
			};
			this.sync();

			if (elapsed >= duration) {
				finish();
				return true;
			}
			return false;
		});
	}

	/** `Actor.Darken` / `Actor.Lighten` */
	public setActivation (lighten: boolean) {
		if (this.brightnessTask) this.brightnessTask.finish();

		let acc = BRIGHTNESS_INTERVAL; // first step is immediate
		this.brightnessTask = this.startCoroutine(dt => {
			acc += dt;
			while (acc >= BRIGHTNESS_INTERVAL) {
				acc -= BRIGHTNESS_INTERVAL;
				this.brightness = Math.max(0, Math.min(1, this.brightness + (lighten ? BRIGHTNESS_CHANGE : -BRIGHTNESS_CHANGE)));
			}
			this.sync();
			return lighten ? this.brightness >= 1 : this.brightness <= 0;
		});
	}

	/**
	 * `Actor.SetCustomTransform`
	 * @param override `IsDialogAssetOverride`, absolute scale and flip. Otherwise relative.
	 */
	public setCustomTransform (info: ChangeActorTransformInfo | null, override: boolean) {
		if (!info) return;

		if (info.rotZ !== 0) this.eulerZ = info.rotZ;
		if (override) {
			if (info.scaleX !== 0) this.scaleX = info.scaleX;
			if (info.scaleY !== 0) this.scaleY = info.scaleY;
			if (info.flip !== null) {
				const base = this.position === ActorPosition.RIGHT || this.position === ActorPosition.RIGHTCENTER;
				this.mirrored = info.flip ? !base : base;
			}
		} else {
			if (info.scaleX !== 0) this.scaleX *= info.scaleX;
			if (info.scaleY !== 0) this.scaleY *= info.scaleY;
			if (info.flip === true) this.mirrored = !this.mirrored;
		}
		this.sync();
	}

	/** `ActorEmojiController.PlayEmoji` at head position */
	public playEmoji (emoji: DIALOG_CHAREMOJI_EFFECT) {
		const unit = this.model?.unit ?? WORLD_UNIT;
		if (!this.emoji) {
			this.emoji = new EmojiObject(unit);
			this.emoji.zIndex = 100;
			this.holder.addChild(this.emoji);
		}

		// `Actor.SetPositionEmojiObject`
		const head = this.model?.getHead();
		if (head)
			this.emoji.position.copyFrom(this.holder.toLocal(head));
		else if (this.model) { // estimated, top of model
			const b = this.model.object.getBounds();
			this.emoji.position.copyFrom(this.holder.toLocal({ x: b.x + b.width / 2, y: b.y + b.height * 0.15 }));
		} else
			this.emoji.position.set(0, -180);

		// emoji is not mirrored and not rotated (`Quaternion.Inverse(actor.transform.rotation)`)
		const mirrored = this.mirrored && !this.isCut;
		this.emoji.scale.set((mirrored ? -1 : 1) * unit, -unit);
		this.emoji.angle = this.holder.angle * (mirrored ? 1 : -1);

		this.emoji.play(emoji);
	}

	public destroy () {
		this.removed = true;
		this.stopAllCoroutines();
		this.model?.destroy();
		this.model = null;
		this.emoji = null;
		if (!this.holder.destroyed) this.holder.destroy({ children: true });
	}
}

export interface RowRunResult {
	/** Resolved when live effects running with dialogue are finished */
	liveDone: Promise<void>;
}

export default class ActorStage {
	private readonly tasks: Task[] = [];
	private generation = 0;

	/**
	 * `GameManager.IsDialogAssetOverride`, dialogue group loaded from `dialogueassets` bundle.
	 * Transforms are absolute when `true`, otherwise accumulated.
	 */
	public assetOverride = false;

	private actorsOnScene: Actor[] = [];
	private exitingActors = new Set<Actor>();
	private lists: Record<ActorPosition, Actor[]> = { 0: [], 1: [], 2: [], 3: [], 4: [] };

	private readonly onTick = () => {
		const dt = PIXI.Ticker.shared.deltaMS / 1000;
		for (const task of [...this.tasks]) {
			task.tick(dt);
			if (task.done) {
				const i = this.tasks.indexOf(task);
				if (i >= 0) this.tasks.splice(i, 1);
			}
		}
	};

	constructor (
		private readonly screen: PIXI.Container,
		private readonly factory: ActorModelFactory,
		/** Identifier of actor (`actor_name` of original) */
		private readonly getActorName: (char: DialogCharacter) => string,
	) {
		PIXI.Ticker.shared.add(this.onTick);
		EmojiObject.preload();
	}

	public destroy () {
		this.clear();
		PIXI.Ticker.shared.remove(this.onTick);
	}

	/** Canvas x of actor destination */
	public static destScreenX (position: ActorPosition): number {
		return CANVAS_CENTER.x + ActorStage.getActorScreenPosition(position).x * UI_UNIT;
	}

	//#region Task
	/** @internal */
	public run (step: (dt: number) => boolean): Task {
		const task = new Task(step);
		this.tasks.push(task);
		return task;
	}

	/** Wait on stage clock (ticker) */
	public wait (secs: number): Promise<void> {
		let t = 0;
		return this.run(dt => (t += dt) >= secs).promise;
	}
	//#endregion

	/** Remove all actors and stop all running sequences */
	public clear () {
		this.generation++;
		for (const task of [...this.tasks]) task.finish();
		this.tasks.length = 0;

		for (const actor of this.actorsOnScene) actor.destroy();
		for (const actor of this.exitingActors) if (!actor.removed) actor.destroy();
		this.actorsOnScene = [];
		this.exitingActors.clear();
		this.lists = { 0: [], 1: [], 2: [], 3: [], 4: [] };
	}

	//#region ActorManager
	private static getActorScreenPosition (position: ActorPosition): PIXI.IPointData {
		switch (position) {
			case ActorPosition.LEFT: return { x: LEFT_DEST, y: 0 };
			case ActorPosition.LEFTCENTER: return { x: LEFT_DEST * 0.5, y: 0 };
			case ActorPosition.RIGHT: return { x: RIGHT_DEST, y: 0 };
			case ActorPosition.RIGHTCENTER: return { x: RIGHT_DEST * 0.5, y: 0 };
			default: return { x: LEFT_DEST + RIGHT_DEST, y: 0 };
		}
	}

	private getActorByName (name: string): Actor | undefined {
		return this.actorsOnScene.find(a => a.name === name);
	}

	private getActor (position: ActorPosition): Actor | undefined {
		return this.actorsOnScene.find(a => a.position === position);
	}

	/** @internal */
	public markExiting (actor: Actor) {
		this.exitingActors.add(actor);
	}

	/** `ActorManager.Add_Actor_To` */
	public addActorTo (actor: Actor, position: ActorPosition) {
		actor.position = position;
		const list = this.lists[position];
		if (!list.includes(actor)) {
			list.push(actor);
			this.reevaluateAllActorPositions();
		}
	}

	/** `ActorManager.Reevaluate_All_Actor_Positions` */
	private reevaluateAllActorPositions () {
		const center = this.lists[ActorPosition.CENTER];
		if (center.length > 0) {
			const room = SPACE_PER_ACTOR_IN_CENTER;
			const offset = -(center.length * room) / 2;
			center.forEach((actor, index) => {
				if (this.exitingActors.has(actor)) return;
				const num = Math.max(0, Math.min(center.length - 1, center.length - (index + 1))) + 1;
				actor.desired = { x: offset + room * num - room / 2 + actor.customOffset.x, y: actor.customOffset.y };
			});
		}

		const side = (list: Actor[], pos: PIXI.IPointData) => {
			for (const actor of list) {
				if (this.exitingActors.has(actor)) continue;
				actor.desired = { x: pos.x + actor.customOffset.x, y: pos.y + actor.customOffset.y };
			}
		};
		side(this.lists[ActorPosition.LEFT], { x: LEFT_DEST, y: 0 });
		side(this.lists[ActorPosition.LEFTCENTER], { x: LEFT_DEST * 0.5, y: 0 });
		side(this.lists[ActorPosition.RIGHT], { x: RIGHT_DEST, y: 0 });
		side(this.lists[ActorPosition.RIGHTCENTER], { x: RIGHT_DEST * 0.5, y: 0 });
	}

	/** `ActorManager.Slide_Start_Position(Actor, APPEAR_EFFECT)` */
	public slideStartPosition (actor: Actor, appear: APPEAR_EFFECT) {
		switch (appear) {
			case APPEAR_EFFECT.POPINFROMLEFT:
				actor.local = { ...OFFSCREEN_LEFT };
				break;
			case APPEAR_EFFECT.POPINFROMRIGHT:
				actor.local = { ...OFFSCREEN_RIGHT };
				break;
			case APPEAR_EFFECT.POPINFROMTOP:
				actor.local = { x: ActorStage.getActorScreenPosition(actor.position).x, y: OFFSCREEN_TOP.y };
				break;
			case APPEAR_EFFECT.POPINFROMBOTTOM:
				actor.local = { x: ActorStage.getActorScreenPosition(actor.position).x, y: OFFSCREEN_BOTTOM.y };
				break;
		}
		actor.local = { x: actor.local.x + actor.customOffset.x, y: actor.local.y + actor.customOffset.y };
		actor.sync();
	}

	/** `ActorManager.Instantiate_Actor` */
	private instantiateActor (name: string, image: string, destination: ActorPosition, customOffset: PIXI.IPointData | null, model: Promise<ActorModel | null>): Actor {
		const actor = new Actor(this, name, image, destination);
		this.screen.addChild(actor.holder);
		model.then(m => actor.setModel(m));

		this.actorsOnScene.push(actor);
		if (customOffset)
			actor.customOffset = { x: actor.customOffset.x + customOffset.x, y: actor.customOffset.y + customOffset.y };
		this.addActorTo(actor, destination);
		actor.sync();
		return actor;
	}

	/** `ActorManager.Remove_Actor` */
	public removeActor (actor: Actor | undefined) {
		if (!actor || actor.removed) return;

		this.actorsOnScene = this.actorsOnScene.filter(a => a !== actor);
		this.lists[ActorPosition.LEFT] = this.lists[ActorPosition.LEFT].filter(a => a !== actor);
		this.lists[ActorPosition.RIGHT] = this.lists[ActorPosition.RIGHT].filter(a => a !== actor);
		this.lists[ActorPosition.CENTER] = this.lists[ActorPosition.CENTER].filter(a => a !== actor);
		this.lists[ActorPosition.LEFTCENTER] = this.lists[ActorPosition.LEFTCENTER].filter(a => a !== actor);
		this.lists[ActorPosition.RIGHTCENTER] = this.lists[ActorPosition.RIGHTCENTER].filter(a => a !== actor);
		this.exitingActors.delete(actor);
		actor.destroy();
		this.reevaluateAllActorPositions();
	}
	//#endregion

	//#region Row (CreateNode)
	private normalize (row: StoryData) {
		const override = this.assetOverride;
		return PositionKeys.map(k => {
			const c = row.char[k];
			if (!c || !c.image) return null;

			const appear = c.appear === 0 ? APPEAR_EFFECT.__MAX__ : c.appear;
			const off = c.off === 0 ? OFF_EFFECT.__MAX__ : c.off;
			// `Scene_DialogNovel.ToFlipState`
			const flip = override
				? (c.flip ?? -1) >= 0 ? c.flip === 1 : null
				: c.flip === 1 ? true : null;
			const info: ChangeActorTransformInfo = {
				offset: { x: c.move_x ?? 0, y: c.move_y ?? 0 },
				rotZ: c.rotz ?? 0,
				scaleX: c.scale_x ?? 0,
				scaleY: c.scale_y ?? 0,
				flip,
			};
			const hasTransform = info.offset.x !== 0 || info.offset.y !== 0 || info.rotZ !== 0 ||
				info.scaleX !== 0 || info.scaleY !== 0 || flip !== null;

			return {
				char: c,
				appear,
				off,
				appearTime: c.appearTime || 1,
				offTime: c.offTime || 1,
				activation: c.SCG === SCG_ACTIVATION.ACTIVATION,
				transform: hasTransform ? info : null,
			};
		});
	}

	/** Index of last position matches, regardless of image (`Char_AppearEffectFinishNode`, `Char_OffEffectFinishNode`) */
	private static lastIndexOf (row: StoryData, test: (c: DialogCharacter) => boolean): number {
		for (let i = PositionKeys.length - 1; i >= 0; i--) {
			const c = row.char[PositionKeys[i]];
			if (c && test(c)) return i;
		}
		return -1;
	}

	private static isAppear (appear: number) {
		return appear > APPEAR_EFFECT.NONE && appear < APPEAR_EFFECT.__MAX__;
	}

	private static isOff (off: number) {
		return off > OFF_EFFECT.NONE && off < OFF_EFFECT.__MAX__;
	}

	/** `ChangeActorTransformNode` */
	private changeActorTransform (position: ActorPosition, info: ChangeActorTransformInfo) {
		const actor = this.getActor(position);
		if (!actor) return;

		if (this.assetOverride) {
			this.applyCustomOffset(actor, info, true);
			actor.setCustomTransform(info, true);
		} else {
			actor.customOffset = { x: actor.customOffset.x + info.offset.x, y: actor.customOffset.y + info.offset.y };
			actor.setCustomTransform(info, false);
			actor.local = { x: actor.local.x + info.offset.x, y: actor.local.y + info.offset.y };
			actor.sync();
		}
	}

	/** `EnterActorNode.ApplyCustomOffset`, absolute offset (asset override mode) */
	private applyCustomOffset (actor: Actor, info: ChangeActorTransformInfo, placeImmediately: boolean) {
		if (info.offset.x === 0 && info.offset.y === 0) return;

		actor.customOffset = {
			x: info.offset.x !== 0 ? info.offset.x + actor.liveMoveOffset.x : actor.customOffset.x,
			y: info.offset.y !== 0 ? info.offset.y + actor.liveMoveOffset.y : actor.customOffset.y,
		};
		this.reevaluateAllActorPositions();
		if (placeImmediately) {
			actor.local = { ...actor.desired };
			actor.sync();
		}
	}

	/** `EnterActorNode` for actor already on scene */
	private enterExistingActor (actor: Actor, c: NonNullable<ReturnType<ActorStage["normalize"]>[number]>) {
		if (c.char.imageVar) actor.setFace(c.char.imageVar);
		if (this.assetOverride && c.transform) {
			this.applyCustomOffset(actor, c.transform, true);
			actor.setCustomTransform(c.transform, true);
		}
	}

	/**
	 * Run nodes before dialogue of row :
	 * ChangeActorTransform, EnterActor, ChangeActorFace, ActivationActor, PlayDialogCharacterEffect, PlayEmojiEffect
	 *
	 * @param hasAddEffect `AddEffecNode` exists between live effect and dialogue
	 * @param onEntered called after `ChangeActorFaceNode`s (where `StaticImageNode` runs)
	 */
	public async runRow (row: StoryData, hasText: boolean, hasAddEffect: boolean, onEntered?: () => void): Promise<RowRunResult | null> {
		const gen = this.generation;
		const alive = () => gen === this.generation;
		const chars = this.normalize(row);

		// ChangeActorTransformNode
		chars.forEach((c, i) => {
			if (c && !ActorStage.isAppear(c.appear) && c.transform)
				this.changeActorTransform(i, c.transform);
		});

		// preload entering models, to start animation with model
		const models = chars.map((c, i) => {
			if (!c || !ActorStage.isAppear(c.appear)) return null;
			if (this.getActorByName(this.getActorName(c.char))) return null;
			return this.factory(c.char.image, c.char.imageVar, i).catch(() => null);
		});
		const preload = models.filter(m => m);
		if (preload.length > 0) {
			await Promise.race([Promise.all(preload), this.wait(5)]);
			if (!alive()) return null;
		}

		// EnterActorNode, finish waits on last one
		const lastAppear = ActorStage.lastIndexOf(row, c => c.appear !== APPEAR_EFFECT.NONE && c.appear !== APPEAR_EFFECT.__MAX__);
		for (let i = 0; i < chars.length; i++) {
			const c = chars[i];
			if (!c || !ActorStage.isAppear(c.appear)) continue; // CheckActorAppearNode

			const name = this.getActorName(c.char);
			const exists = this.getActorByName(name);
			if (exists) {
				this.enterExistingActor(exists, c);
				continue;
			}

			const actor = this.instantiateActor(
				name, c.char.image, i,
				c.transform ? c.transform.offset : null,
				models[i] ?? this.factory(c.char.image, c.char.imageVar, i).catch(() => null),
			);
			actor.setCustomTransform(c.transform, this.assetOverride);
			if (c.char.imageVar) actor.setFace(c.char.imageVar);

			const nowFinish = i !== lastAppear;
			switch (c.appear) {
				case APPEAR_EFFECT.FADEIN: {
					actor.placeAt(i);
					actor.fadeIn(c.appearTime);
					if (!nowFinish) await this.wait(c.appearTime + 0.2);
					break;
				}
				case APPEAR_EFFECT.POPUP:
					actor.placeAt(i);
					break;
				default: { // slide
					const task = actor.slideIn(i, c.appear, c.appearTime);
					if (!nowFinish) await task.promise;
					break;
				}
			}
			if (!alive()) return null;
		}

		// ChangeActorFaceNode
		chars.forEach((c, i) => {
			if (c && c.char.imageVar) this.getActor(i)?.setFace(c.char.imageVar);
		});

		// StaticImageNode
		onEntered?.();

		// ActivationActorNode
		chars.forEach((c, i) => {
			if (!c) return;
			const actor = this.getActor(i);
			if (!actor) return;

			actor.depth = c.activation
				? 2
				: i === ActorPosition.CENTER ? 0 : 1;
			actor.setActivation(c.activation);
		});

		// PlayDialogCharacterEffectNode
		const live = chars
			.map((c, i) => c && c.char.live > DIALOG_CHARACTER_EFFECT.NONE && c.char.live < DIALOG_CHARACTER_EFFECT.MAX
				? { position: i as ActorPosition, effect: c.char.live, time: c.char.liveTime ?? 0 }
				: null)
			.filter(x => x) as Array<{ position: ActorPosition, effect: DIALOG_CHARACTER_EFFECT, time: number }>;

		// PlayEmojiEffectNode
		const emoji = chars
			.map((c, i) => c && c.char.emoji > DIALOG_CHAREMOJI_EFFECT.NONE && c.char.emoji < DIALOG_CHAREMOJI_EFFECT.MAX
				? { position: i as ActorPosition, effect: c.char.emoji }
				: null)
			.filter(x => x) as Array<{ position: ActorPosition, effect: DIALOG_CHAREMOJI_EFFECT }>;

		let liveDone = Promise.resolve();
		if (live.length > 0) {
			// runs simultaneously with dialogue only if dialogue node comes right after
			const simultaneously = hasText && emoji.length === 0 && !hasAddEffect;
			const done = this.playLiveEffect(live);
			if (simultaneously)
				liveDone = done;
			else {
				await done;
				if (!alive()) return null;
			}
		}

		if (emoji.length > 0) {
			let longest = 0;
			for (const e of emoji) {
				const actor = this.getActor(e.position);
				if (!actor) continue;
				actor.playEmoji(e.effect);
				longest = Math.max(longest, await EmojiObject.getClipLength(e.effect));
			}
			if (!hasText) { // ImmediateFinish only when script exists
				await this.wait(longest + 0.5);
				if (!alive()) return null;
			}
		}

		return { liveDone };
	}

	/** `ExitActorNode`s, after dialogue */
	public async runExit (row: StoryData): Promise<void> {
		const gen = this.generation;
		const chars = this.normalize(row);
		const lastOff = ActorStage.lastIndexOf(row, c => c.off !== OFF_EFFECT.NONE && c.off !== OFF_EFFECT.__MAX__);

		for (let i = 0; i < chars.length; i++) {
			const c = chars[i];
			if (!c || !ActorStage.isOff(c.off)) continue;

			const actor = this.getActor(i);
			if (!actor) continue;

			let task: Task | null = null;
			if (c.off === OFF_EFFECT.DISAPPEAR)
				this.removeActor(actor);
			else if (c.off === OFF_EFFECT.FADEOUT)
				task = actor.fadeOut(c.offTime);
			else
				task = actor.slideOut(c.offTime, c.off);

			if (task && i === lastOff) {
				await task.promise;
				if (gen !== this.generation) return;
			}
		}
	}

	/** Apply row without animation, to restore state of jumped cursor */
	public applyInstant (row: StoryData) {
		const chars = this.normalize(row);

		chars.forEach((c, i) => {
			if (c && !ActorStage.isAppear(c.appear) && c.transform)
				this.changeActorTransform(i, c.transform);
		});

		chars.forEach((c, i) => {
			if (!c || !ActorStage.isAppear(c.appear)) return;

			const name = this.getActorName(c.char);
			const exists = this.getActorByName(name);
			if (exists) {
				this.enterExistingActor(exists, c);
				return;
			}

			const actor = this.instantiateActor(
				name, c.char.image, i,
				c.transform ? c.transform.offset : null,
				this.factory(c.char.image, c.char.imageVar, i).catch(() => null),
			);
			actor.setCustomTransform(c.transform, this.assetOverride);
			if (c.char.imageVar) actor.setFace(c.char.imageVar);
			actor.placeAt(i);
		});

		chars.forEach((c, i) => {
			if (!c) return;
			const actor = this.getActor(i);
			if (!actor) return;

			if (c.char.imageVar) actor.setFace(c.char.imageVar);
			actor.depth = c.activation ? 2 : i === ActorPosition.CENTER ? 0 : 1;
			actor.brightness = c.activation ? 1 : 0;
			actor.sync();
		});

		chars.forEach((c, i) => {
			if (!c) return;
			const actor = this.getActor(i);
			if (!actor) return;

			const move = ActorStage.liveMoveDelta(c.char.live);
			if (move !== 0) {
				actor.customOffset = { x: actor.customOffset.x + move, y: actor.customOffset.y };
				actor.liveMoveOffset = { x: actor.liveMoveOffset.x + move, y: actor.liveMoveOffset.y };
				actor.local = { x: actor.local.x + move, y: actor.local.y };
				actor.sync();
			} else if (c.char.live === DIALOG_CHARACTER_EFFECT.FALLING)
				this.removeActor(actor);
		});

		chars.forEach((c, i) => {
			if (c && ActorStage.isOff(c.off)) this.removeActor(this.getActor(i));
		});
	}
	//#endregion

	//#region PlayDialogCharacterEffectNode
	private static liveMoveDelta (effect: DIALOG_CHARACTER_EFFECT): number {
		const zero = (Math.abs(RIGHT_DEST) + Math.abs(LEFT_DEST)) * 0.5;
		switch (effect) {
			case DIALOG_CHARACTER_EFFECT.MOVE_LEFT: return -zero;
			case DIALOG_CHARACTER_EFFECT.MOVE_RIGHT: return zero;
			case DIALOG_CHARACTER_EFFECT.MOVE_A_LITTLE_TO_LEFT: return -zero * 0.5;
			case DIALOG_CHARACTER_EFFECT.MOVE_A_LITTLE_TO_RIGHT: return zero * 0.5;
		}
		return 0;
	}

	private static liveTweenSet (effect: DIALOG_CHARACTER_EFFECT): LiveTweenSet {
		switch (effect) {
			case DIALOG_CHARACTER_EFFECT.ACCEPT: return LiveTweens.ACCEPT;
			case DIALOG_CHARACTER_EFFECT.SURPRISE: return LiveTweens.SURPRISE;
			case DIALOG_CHARACTER_EFFECT.ANGRY: return LiveTweens.ANGRY;
			case DIALOG_CHARACTER_EFFECT.TREMBLING: return LiveTweens.TREMBLING;
			case DIALOG_CHARACTER_EFFECT.SHAKING_A_LOT: return LiveTweens.SHAKING_A_LOT;
			case DIALOG_CHARACTER_EFFECT.FALLING: return LiveTweens.FALLING;
			default: return LiveTweens.MOVE;
		}
	}

	/** Resolved when all tweens (and fade out of `FALLING`) are finished */
	private async playLiveEffect (list: Array<{ position: ActorPosition, effect: DIALOG_CHARACTER_EFFECT, time: number }>): Promise<void> {
		const works: Array<Promise<void>> = [];

		for (const { position, effect, time } of list) {
			const actor = this.getActor(position);
			if (!actor) continue;

			const move = ActorStage.liveMoveDelta(effect);
			if (move !== 0) {
				actor.customOffset = { x: actor.customOffset.x + move, y: actor.customOffset.y };
				actor.liveMoveOffset = { x: actor.liveMoveOffset.x + move, y: actor.liveMoveOffset.y };
			}

			const set = ActorStage.liveTweenSet(effect);

			// directing time scale
			let scale = 1;
			if (time > 0) {
				const all = [...set.position, ...set.rotation];
				if (all.length > 1 || all[0].delay > 0) {
					const max = all.reduce((p, t) => Math.max(p, t.duration + t.delay), 0);
					scale = max > 0 ? time / max : 1;
				} else
					scale = time / all[0].duration;
			}

			const startLocal = { ...actor.local };
			const startEuler = actor.eulerZ;

			const runChain = async (chain: LiveTween[], apply: (tween: LiveTween, v: number) => void) => {
				for (const tween of chain) {
					const delay = tween.delay * scale;
					const duration = tween.duration * scale;
					let t = 0;
					await this.run(dt => {
						if (actor.removed) return true;
						t += dt;
						if (t < delay) return false;

						const f = duration > 0 ? Math.min(1, (t - delay) / duration) : 1;
						apply(tween, EvaluateCurve(tween.curve, f));
						actor.sync();
						return f >= 1;
					}).promise;
				}
			};

			works.push((async () => {
				await Promise.all([
					runChain(set.position, (tween, v) => {
						const to = { x: startLocal.x + tween.to[0] + move, y: startLocal.y + tween.to[1] };
						actor.local = {
							x: startLocal.x + (to.x - startLocal.x) * v,
							y: startLocal.y + (to.y - startLocal.y) * v,
						};
					}),
					runChain(set.rotation, (tween, v) => {
						const from = startEuler + tween.from[2];
						const to = startEuler + tween.to[2];
						actor.eulerZ = from + (to - from) * v;
					}),
				]);

				if (effect === DIALOG_CHARACTER_EFFECT.FALLING && !actor.removed)
					await actor.fadeOut(1).promise;
			})());
		}

		await Promise.all(works);
	}
	//#endregion
}
