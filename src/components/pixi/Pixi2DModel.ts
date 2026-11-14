import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";

import { AssetsRoot, IsDev } from "@/libs/Const.1";
import { quat2tf } from "@/libs/Math";

import Shared from "@/components/pixi/Shared";

import FadeContainer from "./FadeContainer";
import ClippedSprite, { type ClipGeometry } from "./ClippedSprite";
import { createTexture } from "./PixiGammaModel";
import { loadImage, type TextureImage } from "./Gamma/Loader";
import type { TextureData } from "./Gamma/Types";

import Shader_Multiply from "./shaders/multiply";
import Shader_Additive from "./shaders/additive";
import Shader_AdditiveSoft from "./shaders/additive_soft";
import HologramNoiseAlpha from "./shaders/HologramNoiseAlpha";

// Interfaces from `@/components/u2dmodel-renderer`
interface RECT {
	x: number;
	y: number;
	w: number;
	h: number;
}
interface SPRITE_VECTOR extends RECT {
	u: number; // Pixels per Unit
	px: number; // pivot x
	py: number; // pivot y
	rc: RECT; // texture rect
}
type OBJECT_VECTOR = [
	x: number, y: number, z: number,
	sx: number, sy: number, sz: number,
	rx: number, ry: number, rz: number, rw: number,
];
type CLIP_PATH = Array<[x: number, y: number]>;
interface SPRITE_DATA {
	name: string;
	vector: SPRITE_VECTOR;
	/** Model-local texture number, or a shared face-bundle/texture path. */
	tex: number | string;
	/** `webp` if not set */
	ext?: "basis";
	/** triangles of tight packed sprite, full rect if not set */
	v?: CLIP_PATH;
}
interface MODEL_OBJECT {
	id: number;
	parent: number;
	active: boolean;

	name: string;
	vector: OBJECT_VECTOR;

	color?: [r: number, g: number, b: number, a: number];
	flip?: [x: boolean, y: boolean];
	shader?: string[];
	sprite?: string;
}
interface MODEL_DATA {
	sprite: SPRITE_DATA[];
	face: SPRITE_DATA[];
	object: {
		[renderOrder: number]: MODEL_OBJECT[];
	};
	list: {
		bg?: string[],
		dialogDeactive?: string[],
		parts2?: string[],
	} & ({
		parts: string[],
	} | {
		swapActive: string[],
		swapInactive: string[],
	} | {});
}

interface NodeTreeItem {
	id: number;
	name: string;
	data: MODEL_OBJECT;
	sprite: ClippedSprite;
	child: NodeTreeItem[];
}

function spriteTextureURL (baseURL: string, sp: SPRITE_DATA): string {
	const texture = sp.tex;
	const root = typeof texture === "string" && texture.startsWith("face_")
		? baseURL.substring(0, baseURL.lastIndexOf("/"))
		: baseURL;
	return `${root}/${texture}.${sp.ext ?? "webp"}`;
}

//#region Atlas texture cache
interface AtlasTexture {
	base: PIXI.BaseTexture;
	image: TextureImage;
	width: number;
	height: number;
}
interface AtlasCacheEntry {
	promise: Promise<AtlasTexture | null>;
	refs: number;
	timer: number | null;
}
const ATLAS_INFO: TextureData = { f: "", n: "", w: 0, h: 0, wr: [1, 1], fl: 1 };
const AtlasCache: Record<string, AtlasCacheEntry> = {};
const AtlasCacheDuration = 60 * 1000;

function acquireAtlas (url: string): Promise<AtlasTexture | null> {
	let entry = AtlasCache[url];
	if (!entry) {
		entry = AtlasCache[url] = {
			promise: loadImage(url).then(image => {
				if (!image) return null;
				const texture = createTexture(image, ATLAS_INFO);
				if (texture === PIXI.Texture.WHITE) return null;
				return { base: texture.baseTexture, image, width: image.width, height: image.height };
			}),
			refs: 0,
			timer: null,
		};
	} else if (entry.timer !== null) {
		clearTimeout(entry.timer);
		entry.timer = null;
	}
	entry.refs++;
	return entry.promise;
}
function releaseAtlas (url: string) {
	const entry = AtlasCache[url];
	if (!entry) return;

	entry.refs--;
	if (entry.refs > 0) return;

	entry.timer = window.setTimeout(() => {
		delete AtlasCache[url];
		entry.promise.then(atlas => {
			atlas?.base.destroy();
			atlas?.image.close();
		}).catch(() => { });
	}, AtlasCacheDuration);
}
//#endregion

function spriteGeometry (
	sp: SPRITE_DATA,
	atlas: AtlasTexture,
	flipX: boolean,
	flipY: boolean
): {
	geometry: ClipGeometry;
	width: number;
	height: number;
} {
	const vec = sp.vector;
	const ppur = 100 / vec.u;
	const x = vec.rc.w / 2 - (vec.w * vec.px);
	const y = vec.rc.h / 2 - (vec.h * (1 - vec.py));
	const width = Math.trunc(Math.ceil(vec.rc.w) * ppur);
	const height = Math.trunc(Math.ceil(vec.rc.h) * ppur);

	const points: CLIP_PATH = sp.v ?? [
		[0, 0], [vec.w, 0], [vec.w, vec.h],
		[0, 0], [vec.w, vec.h], [0, vec.h],
	];
	const count = points.length - (points.length % 3);

	const positions = new Float32Array(count * 2);
	const uvs = new Float32Array(count * 2);
	const indices = new Uint16Array(count);
	for (let i = 0; i < count; i++) {
		const [px, py] = points[i];
		const lx = (x + px) * ppur - width / 2;
		const ly = (y + vec.h - py) * ppur - height / 2;
		positions[i * 2] = flipX ? -lx : lx;
		positions[i * 2 + 1] = flipY ? -ly : ly;
		uvs[i * 2] = (vec.x + px) / atlas.width; // atlas is top-down, sprite rect is bottom-up
		uvs[i * 2 + 1] = (atlas.height - vec.y - py) / atlas.height;
		indices[i] = i;
	}
	return { geometry: { positions, uvs, indices }, width, height };
}

export default class Pixi2DModel extends FadeContainer {
	private _atlases: string[] = [];

	private readonly _model: string;
	public get model (): string {
		return this._model;
	}

	private _face: string = "";
	public get face (): string {
		return this._face;
	}

	private _dialogDeactive: boolean = false;
	public get dialogDeactive (): boolean {
		return this._dialogDeactive;
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

	private _colliderVisible: boolean = false;
	public get ColliderVisible (): boolean {
		return this._colliderVisible;
	}

	private ready = false;

	private spMap: Record<string, SPRITE_DATA> = {};
	private atlasMap: Record<string, AtlasTexture> = {};

	private faceList: SPRITE_DATA[] = [];
	private hidePartList: string[] = [];
	private hidePart2List: string[] = [];
	private swapActiveList: string[] = [];
	private swapInactiveList: string[] = [];
	private hideBGList: string[] = [];
	private dialogDeactiveList: string[] = [];
	private treeItems: NodeTreeItem[] = [];

	private roots: PIXI.Sprite[] = [];
	public get Roots () { return this.roots; }

	constructor (image: string) {
		super();
		this.sortableChildren = true;

		this._model = image;

		const baseURL = `${AssetsRoot}/2dmodel/${image}`;

		this.layerableChildren = true;

		Shared.instance.host = this;

		fetch(`${baseURL}/data.json`)
			.then(r => r.json() as Promise<MODEL_DATA>)
			.then(async r => {
				this.faceList = r.face;
				this.hideBGList = r.list.bg || [];
				this.dialogDeactiveList = r.list.dialogDeactive || [];
				this.hidePart2List = r.list.parts2 ?? [];

				if ("parts" in r.list) {
					this.hidePartList = r.list.parts;
				} else if ("swapActive" in r.list) {
					this.swapActiveList = r.list.swapActive;
					this.swapInactiveList = r.list.swapInactive;
				}

				// NOTE: Not referenced
				// const _nodes: Record<number, MODEL_OBJECT> = {};
				// Object.values(r.object) // Make node table (id -> object)
				// 	.flat()
				// 	.forEach(node => (_nodes[node.id] = node));

				const _z: Record<number, number> = {};
				const _layers: Record<number, LAYERS.Layer> = {};
				Object.keys(r.object) // Make z-index table (id -> z)
					.forEach(z => {
						const __z = parseInt(z);
						r.object[__z].forEach(e => (_z[e.id] = __z));

						const group = new LAYERS.Group(__z, true);
						_layers[__z] = new LAYERS.Layer(group);
						_layers[__z].name = `*Layer [z=${__z}]`;
						this.addChild(_layers[__z]);
					});

				// preload all atlas textures
				if (this.destroyed) return;
				const sprites = [...r.sprite, ...r.face];
				const urls = sprites.map(sp => spriteTextureURL(baseURL, sp)).unique();
				this._atlases.push(...urls);
				const atlases = await Promise.all(urls.map(url => acquireAtlas(url)));
				sprites.forEach(sp => {
					const atlas = atlases[urls.indexOf(spriteTextureURL(baseURL, sp))];
					if (!atlas) return;

					this.spMap[sp.name] = sp;
					this.atlasMap[sp.name] = atlas;
				});

				// Make Id-Parent pair list
				const treeRoot: NodeTreeItem = {
					id: 0,
					name: "#",
					data: null as unknown as NodeTreeItem["data"],
					// @ts-expect-error : same with PIXI.Sprite without constructor
					sprite: this, // for root as container
					child: [],
				};
				const treeItems = this.treeItems;
				treeItems.push(treeRoot);
				(() => {
					const all = Object.values(r.object).flat();

					const setNodeTransform = (obj: MODEL_OBJECT, target: PIXI.Container) => {
						const scaleMultiplier = obj.id === 1 // root
							? 3.5
							: 1;

						const mat = quat2tf(obj.vector.slice(6, 10) as Tuple<number, 4>);
						target.setTransform(
							mat.position.x + obj.vector[0] * 100,
							mat.position.y - obj.vector[1] * 100,

							mat.scale.x * obj.vector[3] * scaleMultiplier,
							mat.scale.y * obj.vector[4] * scaleMultiplier,

							-mat.rotation, // Unity using inverted angle
							mat.skew.x,
							mat.skew.y,
						);
					};
					const requireTreeNode = (node: MODEL_OBJECT): NodeTreeItem => {
						const cached = treeItems.find(r => r.id === node.id);
						if (cached) return cached; // already cached

						const entity: NodeTreeItem = {
							id: node.id,
							name: node.name,
							data: node,
							sprite: new ClippedSprite(PIXI.Texture.EMPTY),
							child: [],
						};

						entity.sprite.filters = [];
						entity.sprite.anchor.set(.5, .5);
						entity.sprite.sortableChildren = true;
						entity.sprite.name = entity.name;

						entity.sprite.zIndex = (_z[entity.id] ?? 0);
						entity.sprite.parentLayer = _layers[entity.sprite.zIndex];
						entity.sprite.layerableChildren = true;

						if (node.id <= 2) // root of GameObject, ~~_root GameObject
							this.roots.push(entity.sprite);

						setNodeTransform(node, entity.sprite);
						if (node.id === 1) // Adjust root element position
							entity.sprite.position.set(0, 0);

						let parent = treeItems.find(r => r.id === node.parent);
						if (!parent) {
							const parentSource = all.find(r => r.id === node.parent);
							if (!parentSource) throw new Error("[Pixi2DModel] Unknown parent node");

							parent = requireTreeNode(parentSource);
						}

						treeItems.push(entity);
						parent.child.push(entity);
						parent.sprite.addChild(entity.sprite);
						return entity;
					};

					all.forEach(r => requireTreeNode(r));

					if (IsDev && false) {
						function debugTree (entry: NodeTreeItem, depth: number = 0) {
							console.log("  ".repeat(depth) + entry.name);
							entry.child.forEach(c => debugTree(c, depth + 1));
						}
						debugTree(treeRoot);
					}
				})();

				// Traverse GameObject tree (has SpriteRenderer only)
				treeItems
					.filter(node => node.id > 0 && ("color" in node.data) && !!node.data.color)
					.forEach(node => {
						const o = node.data;

						const sprite = node.sprite;

						if ("color" in o && o.color) { // has SpriteRenderer (even if sprite has not set)
							const filter = new PIXI.ColorMatrixFilter();
							// @ts-ignore pickUpdate extend
							filter.matrix = [
								o.color[0], 0, 0, 0, 0,
								0, o.color[1], 0, 0, 0,
								0, 0, o.color[2], 0, 0,
								0, 0, 0, o.color[3], 0,
							];
							sprite.filters!.push(filter);
						}

						if ("shader" in o && o.shader) {
							const shader = o.shader[0];
							switch (shader) {
								case "multiply":
									// sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
									sprite.filters!.push(new Shader_Multiply());
									break;
								case "additive":
									// sprite.blendMode = PIXI.BLEND_MODES.ADD;
									sprite.filters!.push(new Shader_Additive());
									break;
								case "additive-soft":
									// sprite.blendMode = PIXI.BLEND_MODES.ADD;
									sprite.filters!.push(new Shader_AdditiveSoft());
									break;
								case "hologram-noise-alpha":
									sprite.filters!.push(new HologramNoiseAlpha());
									break;
							}
						}

						if ("sprite" in o && o.sprite !== undefined && this.isValidSpriteNode(o))
							this.applySprite(sprite, o.sprite, o.flip);
					});

				function polyfillFaces (list: string[]): string[] {
					if (!list.some(r => r.includes("Idle")))
						list.push("Idle");
					return list;
				}

				const facePrefix = image.replace(/^2DModel_/, "") + "_";
				this.emit("facelist", polyfillFaces(r.face.map(r => r.name)), facePrefix);

				this.emit("cameraBoundary", !!this.getChildByName("Camera_Boundary", true));
			})
			.finally(() => {
				this.ready = true;
				this.setFace(this.face);
				this.UpdateNodeVisible();
			});
	}

	setFace (imageVar: string) {
		this._face = imageVar;

		if (!this.ready) return;

		const faceNames = (() => {
			const charName = this.model.replace(/^([OG]\/)?2DModel_/, "");
			return [
				imageVar,
				imageVar.substring(imageVar.indexOf(charName) + charName.length + 1/* underscore character */),
			];
		})();

		const faceNode = this.treeItems.find(r => r.name === "face");
		if (faceNode) {
			const face = this.faceList.find(c => faceNames.includes(c.name));
			if (face)
				this.applySprite(faceNode.sprite, face.name);
			else if (faceNames.includes("Idle"))
				this.applySprite(faceNode.sprite, null);
			else
				console.warn("[Pixi2DModel] no face sprite for " + imageVar + ", from " + this.model);

		} else
			console.warn("[Pixi2DModel] no face element (" + imageVar + "), from " + this.model);
	}

	/** Global position of `face` element, `null` if not ready or no face element */
	getFaceGlobalPosition (): PIXI.Point | null {
		if (!this.ready) return null;

		const faceNode = this.treeItems.find(r => r.name === "face");
		return faceNode ? faceNode.sprite.getGlobalPosition() : null;
	}

	setDialogDeactive (deactive: boolean) {
		this._dialogDeactive = deactive;
		if (!this.ready) return;
		this.UpdateNodeVisible();
	}

	setHidePart (hide: boolean) {
		this._hidePart = hide;
		if (!this.ready) return;
		this.UpdateNodeVisible();
	}

	setHidePart2 (hide: boolean) {
		this._hidePart2 = hide;
		if (!this.ready) return;
		this.UpdateNodeVisible();
	}

	setHideBG (hide: boolean) {
		this._hideBG = hide;
		if (!this.ready) return;
		this.UpdateNodeVisible();
	}

	setColliderVisible (visible: boolean) {
		// Nothing to do
	}

	private UpdateNodeVisible () {
		const items: string[] = [ // to restore visible to true
			...this.hidePartList,
			...this.hidePart2List,
			...this.swapActiveList,
			...this.swapInactiveList,
			...this.hideBGList,
			...this.dialogDeactiveList,
		].unique();
		const namesToHide: string[] = [
			...(this.hidePart ? this.hidePartList : []),
			...(this.hidePart2 ? this.hidePart2List : []),
			...(this.hidePart ? this.swapActiveList : this.swapInactiveList),
			...(this.hideBG ? this.hideBGList : []),
			...(this.dialogDeactive ? this.dialogDeactiveList : []),
		].unique();

		this.treeItems
			.filter(r => items.includes(r.name))
			.forEach(r => {
				// Swap targets can start inactive and must be enabled when selected.
				const isSwapTarget = this.swapActiveList.includes(r.name) || this.swapInactiveList.includes(r.name);
				r.sprite.visible = (isSwapTarget || (r.data.active ?? true)) && !namesToHide.includes(r.name);
			});
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		if (Shared.instance.host === this)
			Shared.instance.host = null;

		// texture destroying controlled by component
		if (options === undefined)
			super.destroy({ texture: true });
		else if (typeof options === "boolean")
			super.destroy({ texture: true });
		else
			super.destroy({ ...options, texture: true });

		this._atlases.forEach(url => releaseAtlas(url));
		this._atlases = [];
		// PIXI.Ticker.shared.remove(this.ticker);
	}

	private applySprite (target: ClippedSprite, name: string | null, flip?: MODEL_OBJECT["flip"]) {
		const sp = name !== null ? this.spMap[name] : undefined;
		const atlas = name !== null ? this.atlasMap[name] : undefined;
		if (!sp || !atlas) {
			target.setClip(PIXI.Texture.EMPTY, null);
			return;
		}

		const { geometry, width, height } = spriteGeometry(sp, atlas, !!flip?.[0], !!flip?.[1]);
		const texture = new PIXI.Texture(
			atlas.base,
			new PIXI.Rectangle(0, 0, atlas.base.width, atlas.base.height),
			new PIXI.Rectangle(0, 0, width, height), // local bounds
		);
		target.setClip(texture, geometry);
	}

	private isValidSpriteNode (o: MODEL_OBJECT): boolean {
		if (!o.sprite) return false;
		return !["BoneJoint", "BoneScaled", "BoneNoJoint", "IKControl"].includes(o.sprite);
	}
}
