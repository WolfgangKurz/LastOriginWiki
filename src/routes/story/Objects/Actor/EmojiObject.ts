import * as PIXI from "pixi.js";

import { DIALOG_CHAREMOJI_EFFECT } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";

/**
 * Baked `icon_all` prefab (fxeffect bundle) of original game.
 * Values are in Unity world unit (y-up).
 */
interface EmojiData {
	atlas: { w: number; h: number; };
	sprites: Record<string, {
		frame: Tuple<number, 4>;
		pivot: Tuple<number, 2>;
		ppu: number;
	}>;
	nodes: Array<{
		path: string;
		name: string;
		parent: string | null;
		pos: Tuple<number, 2>;
		scale: Tuple<number, 2>;
		rot: number;
		active: boolean;
		sprite?: string;
		color?: Tuple<number, 4>;
	}>;
	clips: Record<string, {
		length: number;
		fps: number;
		/** key is `path|prop`, single value array means constant */
		tracks: Record<string, number[]>;
	}>;
}

interface EmojiNode {
	data: EmojiData["nodes"][number];
	container: PIXI.Container;
	sprite: PIXI.Sprite | null;
}

let dataCache: Promise<[EmojiData, PIXI.BaseTexture]> | null = null;
function loadData (): Promise<[EmojiData, PIXI.BaseTexture]> {
	if (!dataCache) {
		dataCache = Promise.all([
			fetch(`${AssetsRoot}/story/ui/emoji.json`).then(r => r.json() as Promise<EmojiData>),
			PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/emoji.webp`).then(t => t.baseTexture),
		]);
		dataCache.catch(() => (dataCache = null));
	}
	return dataCache;
}

/**
 * `ActorEmojiController` of original game.
 *
 * Placed at local origin as head position of actor, scaled as Unity world unit.
 */
export default class EmojiObject extends PIXI.Container {
	private data: EmojiData | null = null;
	private nodes: Record<string, EmojiNode> = {};

	private clip: EmojiData["clips"][string] | null = null;
	private time = 0;

	private readonly onTick = () => this.update(PIXI.Ticker.shared.deltaMS / 1000);

	/**
	 * @param unit pixels per Unity world unit
	 */
	constructor (unit: number) {
		super();
		this.scale.set(unit, -unit); // Unity is y-up

		loadData()
			.then(([data, base]) => {
				if (this.destroyed) return;
				this.data = data;
				this.build(data, base);
			})
			.catch(e => console.warn("[EmojiObject] failed to load emoji data", e));

		PIXI.Ticker.shared.add(this.onTick);
	}

	public static preload (): Promise<unknown> {
		return loadData().catch(() => void 0);
	}

	private build (data: EmojiData, base: PIXI.BaseTexture) {
		const textures: Record<string, PIXI.Texture> = {};
		for (const [name, sp] of Object.entries(data.sprites))
			textures[name] = new PIXI.Texture(base, new PIXI.Rectangle(...sp.frame));

		for (const n of data.nodes) {
			const container = n.parent === null ? this : new PIXI.Container();
			let sprite: PIXI.Sprite | null = null;
			if (n.sprite && n.sprite in textures) {
				const sp = data.sprites[n.sprite];
				sprite = new PIXI.Sprite(textures[n.sprite]);
				sprite.anchor.set(sp.pivot[0], 1 - sp.pivot[1]);
				sprite.scale.set(1 / sp.ppu, -1 / sp.ppu);
				container.addChild(sprite);
			}
			if (n.parent !== null) {
				const parent = this.nodes[n.parent];
				(parent ? parent.container : this).addChild(container);
			}
			this.nodes[n.path] = { data: n, container, sprite };
		}
		this.resetDefaults();
	}

	private resetDefaults () {
		for (const node of Object.values(this.nodes)) {
			const n = node.data;
			if (node.container === this) continue;

			node.container.position.set(n.pos[0], n.pos[1]);
			node.container.scale.set(n.scale[0], n.scale[1]);
			node.container.angle = n.rot;
			node.container.visible = n.active;
			if (node.sprite && n.color) {
				node.sprite.tint = new PIXI.Color(n.color.slice(0, 3) as Tuple<number, 3>).toNumber();
				node.sprite.alpha = n.color[3];
			}
		}
	}

	/** Length of emoji clip in secs */
	public static async getClipLength (emoji: DIALOG_CHAREMOJI_EFFECT): Promise<number> {
		try {
			const [data] = await loadData();
			return data.clips[DIALOG_CHAREMOJI_EFFECT[emoji]]?.length ?? 0;
		} catch {
			return 0;
		}
	}

	public play (emoji: DIALOG_CHAREMOJI_EFFECT) {
		const name = DIALOG_CHAREMOJI_EFFECT[emoji];
		const apply = () => {
			if (!this.data) return;

			const clip = this.data.clips[name];
			if (!clip) return; // Animator ignores unknown state

			// Animator writes defaults of other states
			this.resetDefaults();
			this.clip = clip;
			this.time = 0;
			this.update(0);
		};

		if (this.data) apply();
		else loadData().then(() => !this.destroyed && apply()).catch(() => void 0);
	}

	private update (dt: number) {
		if (!this.clip || !this.data) return;

		this.time = Math.min(this.clip.length, this.time + dt);
		const frame = this.time * this.clip.fps;
		const f0 = Math.floor(frame);
		const r = frame - f0;

		for (const [key, values] of Object.entries(this.clip.tracks)) {
			const [path, prop] = key.split("|");
			const node = this.nodes[path];
			if (!node) continue;

			const v = values.length === 1
				? values[0]
				: values[Math.min(values.length - 1, f0)] * (1 - r) + values[Math.min(values.length - 1, f0 + 1)] * r;

			const c = node.container;
			switch (prop) {
				case "pos.x": c.x = v; break;
				case "pos.y": c.y = v; break;
				case "scale.x": c.scale.x = v; break;
				case "scale.y": c.scale.y = v; break;
				case "rot.z": c.angle = v; break;
				case "active": c.visible = v > 0.5; break;
				case "color.a": if (node.sprite) node.sprite.alpha = v; break;
			}
		}

		if (this.time >= this.clip.length)
			this.clip = null; // holds last frame
	}

	public destroy (options?: boolean | PIXI.IDestroyOptions) {
		PIXI.Ticker.shared.remove(this.onTick);
		super.destroy(options);
	}
}
