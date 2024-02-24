import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";

import { AssetsRoot, IsDev } from "@/libs/Const";

import FadeContainer from "./FadeContainer";
import Matrix3D from "@/components/u2dmodel-renderer/Matrix3D";

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
	tex: number;
	v: CLIP_PATH;
}
interface MODEL_OBJECT {
	id: number;
	parent: number;

	name: string;
	vector: OBJECT_VECTOR;

	color?: [r: number, g: number, b: number, a: number];
	flip?: [x: boolean, y: boolean];
	shader?: string[];
	sprite?: number;
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
	sprite: PIXI.Sprite;
	child: NodeTreeItem[];
}

const U2DCache: Record<string, [texture: PIXI.Texture, url: string, timer: number | null]> = {};
const U2DCacheDuration = 60 * 1000;
function getCache (key: string): PIXI.Texture | null {
	if (key in U2DCache) {
		const target = U2DCache[key];
		if (target[2] !== null) {
			clearTimeout(target[2]);
			target[2] = null;
		}
		return target[0];
	}
	return null;
}
function setCache (key: string, url: string, value: PIXI.Texture) {
	removeCache(key, true);
	U2DCache[key] = [value, url, null];
}
function removeCache (key: string, immediately = false) {
	if (key in U2DCache) {
		const target = U2DCache[key];
		if (target[2] !== null) clearTimeout(target[2]); // reset cache time

		target[2] = setTimeout(() => {
			target[0].destroy();
			URL.revokeObjectURL(target[1]);
			delete U2DCache[key];
		}, immediately ? 0 : U2DCacheDuration);
	}
}

export default class Pixi2DModel extends FadeContainer {
	private _objectURLs: string[] = [];
	private _sprites: string[] = [];

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
	private texMap: Record<number, PIXI.Texture> = {};

	private faceList: SPRITE_DATA[] = [];
	private hidePartList: string[] = [];
	private swapActiveList: string[] = [];
	private swapInactiveList: string[] = [];
	private hideBGList: string[] = [];
	private dialogDeactiveList: string[] = [];
	private treeItems: NodeTreeItem[] = [];

	constructor (image: string) {
		super();
		this.sortableChildren = true;

		this._model = image;

		const baseURL = `${AssetsRoot}/2dmodel/${image}`;

		this.layerableChildren = true;

		const canvas = document.createElement("canvas");
		// make sprites with clip path
		const createClippedTexture = (
			image: HTMLImageElement,
			vector: SPRITE_VECTOR,
			clipPt: CLIP_PATH
		): Promise<string> => new Promise((resolve, reject) => {
			const x = vector.rc.w / 2 - (vector.w * vector.px);
			const y = vector.rc.h / 2 - (vector.h * (1 - vector.py));
			const w = Math.ceil(vector.rc.w);
			const h = Math.ceil(vector.rc.h);

			const cv = canvas;
			cv.width = w;
			cv.height = h;

			const ctx = cv.getContext("2d");
			if (!ctx) return reject();

			ctx.beginPath();
			clipPt.forEach((p, i) => {
				const _x = x + p[0];
				const _y = y + vector.h - p[1];
				if (i % 3 === 0)
					ctx.moveTo(_x, _y);
				else
					ctx.lineTo(_x, _y);
			});
			ctx.clip();

			ctx.drawImage(
				image,
				vector.x, (image.height - vector.h - vector.y), // bottom y is zero
				vector.w, vector.h,
				x, y,
				vector.w, vector.h,
			);

			cv.toBlob(b => {
				if (!b) return reject();

				const url = URL.createObjectURL(b);
				this._objectURLs.push(url);
				resolve(url);
			});
		});

		fetch(`${baseURL}/data.json`)
			.then(r => r.json() as Promise<MODEL_DATA>)
			.then(async r => {
				this.faceList = r.face;
				this.hideBGList = r.list.bg || [];
				this.dialogDeactiveList = r.list.dialogDeactive || [];

				if ("parts" in r.list)
					this.hidePartList = r.list.parts;
				else if ("swapActive" in r.list) {
					this.swapActiveList = r.list.swapActive;
					this.swapInactiveList = r.list.swapInactive;
				}

				const _nodes: Record<number, MODEL_OBJECT> = {};
				Object.values(r.object) // Make node table (id -> object)
					.flat()
					.forEach(node => (_nodes[node.id] = node));

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

				// preload all images
				await Promise.all(
					[...r.sprite, ...r.face]
						// .unique(o => o.tex)
						.map(sp => new Promise<void>(async (resolve, reject) => {
							const key = `${this._model}/${sp.tex}/${sp.name}`;
							const cached = getCache(key);
							if (cached) {
								this.spMap[sp.name] = sp;
								this.texMap[sp.name] = cached.clone();
								return resolve();
							}

							const image = new Image();
							image.addEventListener("load", () => {
								createClippedTexture(image, sp.vector, sp.v)
									.then(tex => {
										const _btex = PIXI.BaseTexture.from(tex, {
											anisotropicLevel: 4,
											mipmap: PIXI.MIPMAP_MODES.ON,
											multisample: PIXI.MSAA_QUALITY.HIGH,
										});
										const _tex = PIXI.Texture.from(_btex);
										setCache(key, tex, _tex);

										this.spMap[sp.name] = sp;
										this.texMap[sp.name] = _tex.clone();
										this._sprites.push(key);
										resolve();
									});
							});
							image.addEventListener("error", (e) => {
								image.remove();
								reject(e);
							});
							image.crossOrigin = "Anonymous";
							image.src = `${baseURL}/${sp.tex}.webp`;
						})),
				);

				// Make Id-Parent pair list
				const treeRoot: NodeTreeItem = {
					id: 0,
					name: "#",
					data: null as unknown as NodeTreeItem["data"],
					sprite: this as unknown as PIXI.Sprite, // for root as container
					child: [],
				};
				const treeItems = this.treeItems;
				treeItems.push(treeRoot);
				(() => {
					const all = Object.values(r.object).flat();

					const setNodeTransform = (obj: MODEL_OBJECT, target: PIXI.Container) => {
						function quat2eul (quat: Tuple<number, 4>) { // quat2eul (radian)
							const q = {
								x: quat[0],
								y: quat[1],
								z: quat[2],
								w: quat[3],
							};
							const ret = { x: 0, y: 0, z: 0 };

							// roll (x-axis rotation)
							const sinr_cosp = 2 * (q.w * q.x + q.y * q.z);
							const cosr_cosp = 1 - 2 * (q.x * q.x + q.y * q.y);
							ret.x = Math.atan2(sinr_cosp, cosr_cosp);

							// pitch (y-axis rotation)
							const sinp = Math.sqrt(1 + 2 * (q.w * q.x - q.y * q.z));
							const cosp = Math.sqrt(1 - 2 * (q.w * q.x - q.y * q.z));
							ret.y = 2 * Math.atan2(sinp, cosp) - Math.PI / 2;

							// yaw (z-axis rotation)
							const siny_cosp = 2 * (q.w * q.z + q.x * q.y);
							const cosy_cosp = 1 - 2 * (q.y * q.y + q.z * q.z);
							ret.z = Math.atan2(siny_cosp, cosy_cosp);

							return ret;
						}

						const scaleMultiplier = obj.id === 1 // root
							? 3.5
							: 1;

						const rot = quat2eul(obj.vector.slice(6, 10) as Tuple<number, 4>);
						const mat = Matrix3D.compose(
							Matrix3D.translate(obj.vector[0] * 100, -obj.vector[1] * 100, obj.vector[2] * 100),
							Matrix3D.scale(
								obj.vector[3] * scaleMultiplier,
								obj.vector[4] * scaleMultiplier,
								obj.vector[5] * scaleMultiplier,
							),
							Matrix3D.rotate(rot.x, rot.y, rot.z),
						);
						/*
						   0   4   8  12       0   1   2   3
						   1   5   9  13       4   5   6   7
						   2   6  10  14       8   9  10  11
						   3   7  11  15      12  13  14  15
						*/

						const pX = mat[12]; // 3
						const pY = mat[13]; // 7
						const sX = Math.sqrt(mat[0] * mat[0] + mat[4] * mat[4]); // [0]^2 * [1]^2
						const sY = Math.sqrt(mat[1] * mat[1] + mat[5] * mat[5]); // [4]^2 * [5]^2
						const kX = Math.atan2(mat[4], mat[0]); // [1], [0]
						const kY = Math.atan2(mat[1], mat[5]); // [4], [5]
						const r_ = Math.atan2(mat[4], mat[0]); // [1], [0]

						target.setTransform(
							pX, pY,
							sX, sY,
							r_,
							kX, kY,
						);
					};
					const requireTreeNode = (node: MODEL_OBJECT): NodeTreeItem => {
						const cached = treeItems.find(r => r.id === node.id);
						if (cached) return cached; // already cached

						const entity: NodeTreeItem = {
							id: node.id,
							name: node.name,
							data: node,
							sprite: new PIXI.Sprite(PIXI.Texture.EMPTY),
							child: [],
						};

						entity.sprite.filters = [];
						entity.sprite.anchor.set(.5, .5);
						entity.sprite.sortableChildren = true;
						entity.sprite.name = entity.name;

						entity.sprite.zIndex = (_z[entity.id] ?? 0);
						entity.sprite.parentLayer = _layers[entity.sprite.zIndex];
						entity.sprite.layerableChildren = true;

						setNodeTransform(node, entity.sprite);

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
									sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
									break;
								case "additive":
									sprite.blendMode = PIXI.BLEND_MODES.ADD;
									break;
								case "additive-soft":
									sprite.blendMode = PIXI.BLEND_MODES.ADD;
									sprite.alpha = 0.5;
									break;
							}
						}

						if ("sprite" in o && o.sprite !== undefined) {
							const sp = this.spMap[o.sprite];
							sprite.texture = this.texMap[sp.name];

							const ppu = sp.vector.u;
							const ppum = 100 / ppu; // ppu multiply
							sprite.scale.set(
								sprite.scale.x * ppum,
								sprite.scale.y * ppum,
							);
						}
					});

				function polyfillFaces (list: string[]): string[] {
					if (!list.some(r => r.includes("Idle")))
						list.push("Idle");
					return list;
				}

				const facePrefix = image.replace(/^2DModel_/, "") + "_";
				this.emit("facelist", polyfillFaces(r.face.map(r => r.name)), facePrefix);
			})
			.finally(() => {
				canvas.remove();

				this.ready = true;
				this.setFace(this.face);
				this.UpdateNodeVisible();
			});
	}

	setFace (imageVar: string) {
		this._face = imageVar;

		if (!this.ready) return;

		const faceName = (() => {
			const charName = this.model.replace(/^2DModel_/, "");
			return imageVar.substring(charName.length + 1/* underbar character */);
		})();

		const faceNode = this.treeItems.find(r => r.name === "face");
		if (faceNode) {
			const face = this.faceList.find(c => c.name === faceName);
			if (face)
				faceNode.sprite.texture = this.texMap[face.name];
			else if (faceName === "Idle")
				faceNode.sprite.texture = PIXI.Texture.EMPTY;
			else
				console.warn("[Pixi2DModel] no face sprite for " + faceName);

		} else
			console.warn("[Pixi2DModel] no face element (" + faceName + ")");
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
			...this.swapActiveList,
			...this.swapInactiveList,
			...this.hideBGList,
			...this.dialogDeactiveList,
		].unique();
		const namesToHide: string[] = [
			...(this.hidePart ? this.hidePartList : []),
			...(this.hidePart ? this.swapActiveList : this.swapInactiveList),
			...(this.hideBG ? this.hideBGList : []),
			...(this.dialogDeactive ? this.dialogDeactiveList : []),
		].unique();

		this.treeItems
			.filter(r => items.includes(r.name))
			.forEach(r => r.sprite.visible = !namesToHide.includes(r.name));
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		// texture destroying controlled by component
		if (options === undefined)
			super.destroy({ texture: true });
		else if (typeof options === "boolean")
			super.destroy({ texture: true });
		else
			super.destroy({ ...options, texture: true });

		// this._objectURLs.forEach(url => URL.revokeObjectURL(url));
		this._sprites.forEach(key => removeCache(key));
		// PIXI.Ticker.shared.remove(this.ticker);
	}
}
