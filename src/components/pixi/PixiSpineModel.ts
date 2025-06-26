import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";
import * as spine from "@esotericsoftware/spine-pixi";
import LZMADecompression from "@/external/lzma";

import { AssetsRoot, IsDev } from "@/libs/Const";
import { quat2eul } from "@/libs/Math";

import ColliderBox from "@/components/pixi/ColliderBox";

import FadeContainer from "./FadeContainer";

interface CacheType {
	skeleton: string;
	urls: string[];
	atlas: spine.TextureAtlas;
	anim: SpineAnim;
	metadata: SpineMetadata;
}
const SkeletonCache: Record<string, [data: CacheType, timer: number | null]> = {};
const SkeletonCacheDuration = 60 * 1000;
function getCache (key: string): CacheType | null {
	if (key in SkeletonCache) {
		const target = SkeletonCache[key];
		if (target[1] !== null) {
			clearTimeout(target[1]);
			target[1] = null;
		}
		return target[0];
	}
	return null;
}
function setCache (key: string, value: CacheType) {
	removeCache(key, true);
	SkeletonCache[key] = [value, null];
}
function removeCache (key: string, immediately = false) {
	if (key in SkeletonCache) {
		const target = SkeletonCache[key];
		if (target[1] !== null) clearTimeout(target[1]); // reset cache time

		target[1] = setTimeout(() => {
			const d = target[0];
			d.atlas.dispose();

			d.urls.forEach(u => URL.revokeObjectURL(u));

			delete SkeletonCache[key];
		}, immediately ? 0 : SkeletonCacheDuration);
	}
}

//#region Interfaces
interface SpineAnimTransitions {
	cond: string;
	to: string;
}
interface SpineAnimState {
	clip: string;
	transitions: SpineAnimTransitions[];
}
interface SpineAnimLayer {
	weight?: number;
	start: string;
	states: {
		[state: string]: SpineAnimState;
	};
}
interface SpineAnim {
	[layer: string]: SpineAnimLayer;
}
interface SpineTransform {
	position: [x: number, y: number];
	scale: [x: number, y: number];
}
interface SpineCollider extends SpineTransform {
	rotation: [x: number, y: number, z: number, w: number];
	center: [x: number, y: number];
	size: [x: number, y: number];
	bind?: string;
}
interface SpineMetadata {
	colliders: Record<string, SpineCollider>;
	// transform: SpineTransform;
	transforms: Array<SpineTransform[]> | SpineTransform[];
	specialTouch: string[];
}

interface BindedCollider {
	container: PIXI.DisplayObject;
	target: ColliderBox;

	info: SpineCollider;
	rot: ReturnType<typeof quat2eul>;

	bindTo: string;
}
//#endregion

export default class PixiSpineModel extends FadeContainer {
	private readonly _model: string;
	private readonly _atlasId: number;
	public get model (): string {
		return this._model;
	}
	public get atlasId (): number {
		return this._atlasId;
	}

	private _face: string = "";
	public get face (): string {
		return this._face;
	}

	private _hideBG: boolean = false;
	public get hideBG (): boolean {
		return this._hideBG;
	}

	private _hidePart: boolean = false;
	public get hidePart (): boolean {
		return this._hidePart;
	}

	private _colliderVisible: boolean = false;
	public get colliderVisible (): boolean {
		return this._colliderVisible;
	}

	private selectedSkins: string[] = [];
	private lastFace: string = "";

	private spine: spine.Spine | undefined;
	private skeleton: spine.Skeleton | undefined;
	private skeletonData: spine.SkeletonData | undefined;
	private metadata: SpineMetadata | undefined;

	private animData: SpineAnim | undefined;
	private animLayers: string[] = [];
	private animState: Record<string, string> = {};

	private state!: spine.AnimationState;

	private colliderBoxs: ColliderBox[] = [];
	private bindedColliders: BindedCollider[] = [];

	constructor (image: string, atlasId: number) {
		super();
		this.sortableChildren = true;

		const fname = image.replace(/^2DModel_(.+)$/, "$1");
		this._model = image;
		this._atlasId = atlasId;

		const atlasIdName = atlasId === 0 ? "" : `.${atlasId}`;
		const modelWithAtlasId = this._model + atlasIdName;

		const baseURL = `${AssetsRoot}/spine/${fname}`;

		this.layerableChildren = true;

		this.scale.set(3); // base Scale

		new Promise<[spine.Spine, PIXI.Container]>(async (resolve) => {
			const cached = getCache(modelWithAtlasId);
			if (cached)
				resolve(this.Load(cached));
			else {
				const changeExt = (path: string, ext: string): string => `${path.substring(0, path.lastIndexOf("."))}.${ext}`;

				fetch(`${baseURL}/${fname}${atlasIdName}.json.lzma`)
					.then(r => r.arrayBuffer())
					.then(r => LZMADecompression(r, "json"))
					.then(r => new TextDecoder().decode(r))
					.then(r => Promise.all([
						r,
						fetch(`${baseURL}/${fname}${atlasIdName}.atlas`).then(r => r.text()),
						fetch(`${baseURL}/${fname}_anim.json`).then(r => r.json()),
						fetch(`${baseURL}/${fname}_meta.json`).then(r => r.json()),
					]))
					.then(([skeletonData, atlasText, anim, metadata]) => {
						const atlas = new spine.TextureAtlas(atlasText);

						return Promise.all([
							skeletonData,
							atlas,
							anim,
							metadata,

							...atlas.pages.map(page => {
								const url = changeExt(`${baseURL}/${page.name}`, "webp");
								return new Promise<HTMLImageElement>(r => {
									const img = new Image();
									img.addEventListener("load", () => r(img));
									img.crossOrigin = "anonymous";
									img.src = url;
								})
									.then(async (img) => {
										const cv = document.createElement("canvas");
										cv.width = img.naturalWidth;
										cv.height = img.naturalHeight;

										const ctx = cv.getContext("2d");
										if (!ctx) throw new Error("Cannot get context");

										ctx.drawImage(img, 0, 0);

										const imgData = ctx.getImageData(0, 0, cv.width, cv.height);
										const arr = imgData.data.slice();
										for (let i = 0; i < arr.length; i += 4) {
											const af = arr[i + 3] / 255;
											arr[i + 0] /= af;
											arr[i + 1] /= af;
											arr[i + 2] /= af;
										}
										cv.remove();

										return createImageBitmap(
											new ImageData(arr, img.naturalWidth, img.naturalHeight),
											{ premultiplyAlpha: "premultiply", colorSpaceConversion: "none" },
										);
									})
									.then(_img => new PIXI.BaseTexture(_img, {
										anisotropicLevel: 1,
										mipmap: PIXI.MIPMAP_MODES.OFF,
										multisample: PIXI.MSAA_QUALITY.LOW,
									}))
									.then(r => {
										page.setTexture(spine.SpineTexture.from(r));
										return url;
									});
							}),
						]);
					})
					.then(async ([skelData, atlas, anim, metadata, ...urls]) => {
						setCache(modelWithAtlasId, {
							skeleton: skelData,
							urls,
							atlas,
							anim,
							metadata,
						});
						resolve(this.Load(getCache(modelWithAtlasId)!));
					});
			}
		}).then(([s, sw]) => {
			this.spine = s;
			this.addChild(sw);

			const names = this.skeletonData!.skins.map(r => r.name);
			const faces = names.filter(x => x.startsWith("face/"));
			const list = faces.map(face => face.replace(/^.+_([^_]+)$/, "$1"));

			const prefix = faces[0].replace(/^face\/(.+_)[^_]+$/, "$1");
			this.emit("facelist", list, prefix);

			if (this.lastFace)
				this.setFace(this.lastFace);

			this.setHidePart(this.hidePart);
			this.setColliderVisible(this.colliderVisible);

			// play default animation
			if (this.animData) {
				this.animLayers.forEach(layer => {
					this.playState(layer, this.animData![layer].start);
				});
			}
		});
	}

	render (renderer: PIXI.Renderer): void {
		const skeleton = this.skeleton;
		if (!skeleton) return super.render(renderer);

		const metadata = this.metadata;
		if (!metadata) return super.render(renderer);

		const model = this.spine;
		if (!model) return super.render(renderer);

		const root = skeleton.getRootBone();
		if (!root) return super.render(renderer);

		this.bindedColliders.forEach(c => {
			const bone = skeleton.bones.find(r => r.data.name === c.bindTo);
			if (!bone) return;

			const t = c.target;

			// transform position
			const [x, y] = c.info.position.map(r => r);

			c.container.angle = bone.getWorldRotationX(); // degrees
			c.container.position.set(
				bone.worldX,
				bone.worldY,
			);
			c.container.scale.set(
				bone.getWorldScaleX(),
				bone.getWorldScaleY(),
			);

			t.scale.set(
				c.info.scale[0],
				c.info.scale[1],
			);
			t.position.set(x, -y);
			t.rotation = -c.rot.z; // radian
		});

		super.render(renderer);
	}

	Load (data: CacheType): [spine.Spine, PIXI.Container] {
		this.metadata = data.metadata;

		const atlasLoader = new spine.AtlasAttachmentLoader(data.atlas);
		const skeletonJson = new spine.SkeletonJson(atlasLoader);
		skeletonJson.scale = 0.01;

		const skeletonData = skeletonJson.readSkeletonData(data.skeleton);
		this.skeletonData = skeletonData;

		this.animData = data.anim as SpineAnim;
		this.animLayers = Object.keys(this.animData);

		const s = new spine.Spine(skeletonData);
		s.eventMode = "none";

		let root: PIXI.Container | null = null;
		let current: PIXI.Container = this;
		console.log(data.metadata);

		const _tfs = Array.isArray(data.metadata.transforms[0])
			? data.metadata.transforms[0]
			: data.metadata.transforms as SpineTransform[];
		_tfs.forEach(tf => {
			const node = new PIXI.Container();
			node.layerableChildren = true;
			node.sortableChildren = true;

			node.name = (tf as any).name;
			node.position.set(tf.position[0], -tf.position[1]);
			node.scale.set(...tf.scale);
			current.addChild(node);

			current = node;
			if (!root) root = node;
		});
		root!.scale.set(100);
		current.addChild(s);

		// s.position.y = 720;

		this.skeleton = s.skeleton;
		this.state = s.state;

		this.state.addListener({
			complete: (entry) => {
				if (this.animData) {
					const layer = this.animLayers[entry.trackIndex];
					const state = this.animData[layer].states[this.animState[layer]];
					const next = state.transitions.find(x => x.cond === "");

					this.emit("animation-end");

					if (IsDev)
						console.debug(`[Spine] Animation done, layer: "${layer}", state: "${this.animState[layer]}"`);

					if (next) {
						if (IsDev)
							console.debug(`[Spine] Next state is "${next.to}", do force`);
						this.playState(layer, next.to, true);
					} else {
						if (IsDev)
							console.debug(`[Spine] Next not found`);
					}
				} else {
					if (IsDev)
						console.debug(`[Spine] animData not found`);
				}
			},
		});

		const skinNames = this.skeletonData!.skins.map(r => r.name);
		for (const skin of skinNames) { // find Skin_Base
			if (skin.toLowerCase() === "skin_base") {
				this.addSkin(skin);
				break;
			}
		}

		skinNames.filter(x => x.startsWith("decoration"))
			.forEach(skin => this.addSkin(skin));

		if (skinNames.includes("breast/Unedited"))
			this.addSkin("breast/Unedited");
		else
			this.addSkin("breast/Censorship");

		const collLayer = new LAYERS.Layer(new LAYERS.Group(3));
		collLayer.name = "*Layer [Collider Layer]";
		collLayer.zIndex = 99;
		root!.addChild(collLayer);

		// Static BoxCollider will not be moved/changed
		// Binded to Spine model's Bone will be moved/changed, but will calculate at "render"
		Object.keys(data.metadata.colliders)
			.sort((a, b) => {
				if (a == "specialTouch") return 1;
				if (b == "specialTouch") return -1;
				return 0;
			})
			.forEach(c => {
				const _c = data.metadata.colliders[c];

				// transform position
				const [x, y] = _c.position;

				const collider = new ColliderBox();
				this.colliderBoxs.push(collider);

				collider.position.set(x, -y);
				collider.scale.set(..._c.scale);
				collider.center = new PIXI.Point(..._c.center);
				collider.size = new PIXI.Point(..._c.size);

				const rot = quat2eul(_c.rotation);
				collider.rotation = -rot.z;
				collider.skew.set(rot.x, rot.y);

				const colliderWrapper = new PIXI.Container();
				colliderWrapper.name = "[Collider] " + c;
				colliderWrapper.zIndex = -1;
				colliderWrapper.zOrder = 3;
				colliderWrapper.parentLayer = collLayer;
				colliderWrapper.addChild(collider);

				colliderWrapper.eventMode = "dynamic";
				colliderWrapper.on("pointertap", e => {
					if (data.metadata.specialTouch.includes(c))
						this.emit("special-touch", this);
					else
						this.emit("normal-touch", this);
				});

				if (_c.bind) {
					this.bindedColliders.push({
						container: colliderWrapper,
						target: collider,

						info: _c,
						rot,

						bindTo: _c.bind,
					});
				}

				(_c.bind ? current : root!).addChild(colliderWrapper);
			});

		return [s, root!];
	}

	addSkin (skinName: string): boolean {
		if (this.selectedSkins.indexOf(skinName) != -1) return true;
		if (!this.skeletonData?.findSkin(skinName)) return false;
		this.selectedSkins.push(skinName);
		this.updateSkin();
		return true;
	}

	removeSkin (skinName: string) {
		const index = this.selectedSkins.indexOf(skinName);
		if (index === -1) return;
		this.selectedSkins.splice(index, 1);
		this.updateSkin();
	}

	updateSkin () {
		if (!this.skeletonData || !this.skeleton) return;

		// Create a new skin from all the selected skins.
		const newSkin = new spine.Skin("result-skin");
		for (const skinName of this.selectedSkins) {
			const skin = this.skeletonData.findSkin(skinName);
			if (skin) newSkin.addSkin(skin);
		}

		this.skeleton.setSkin(newSkin);
		this.skeleton.setToSetupPose();
		if ("Physics" in spine) { // for newer version... temporary
			// @ts-ignore
			this.skeleton.updateWorldTransform(spine.Physics.update);
		} else {
			// @ts-ignore
			this.skeleton.updateWorldTransform();
		}
	}

	isLoopAnimation (layer: string, state: string): boolean {
		if (!this.animData) return false; // no anim data

		const _l = this.animData[layer];
		if (!_l) return false; // ???

		const _s = _l.states[state];
		if (!_s) return false; // ??????

		// no exit transition
		return !_s.transitions.some(x => x.cond === "");
	}

	currentState (layer: string): SpineAnimState | undefined {
		if (!this.animData || !(layer in this.animData)) return;
		if (!(layer in this.animState)) return;

		return this.animData[layer].states[this.animState[layer]];
	}

	currentAnimationTime (): number | undefined {
		if (!this.animData) return undefined;

		let _t: number | undefined = undefined;
		for (let i = 0; i < this.animLayers.length; i++) {
			const track = this.state.getCurrent(i);
			if (!track) continue;

			_t = Math.max(_t || 0, track.trackTime);
		}

		return _t;
	}

	play (event: string): spine.Animation[] | false {
		if (!this.animData) return false;

		let entry: spine.Animation[] | false = false;
		if (!this.animLayers.every(layer => {
			const state = this.currentState(layer);
			if (!state) return false;

			const next = state.transitions.find(x => x.cond === event);
			if (!next) return false;

			return this.playableState(layer, next.to);
		})) return false;

		this.animLayers.forEach(layer => {
			const state = this.currentState(layer)!;
			const next = state.transitions.find(x => x.cond === event)!;
			const e = this.playState(layer, next.to);

			if (e) {
				if (!entry)
					entry = [e];
				else
					entry.push(e);
			}
		});

		return entry || false;
	}

	playableState (layer: string, _state: string, force: boolean = false): boolean {
		if (!this.animData) {
			if (IsDev)
				console.debug(`[Spine.playableState] animData not found`);
			return false;
		}

		const layerIdx = this.animLayers.indexOf(layer);
		if (layerIdx < 0) {
			if (IsDev)
				console.debug(`[Spine.playableState] layer "${layer}" not found`);
			return false;
		}

		const animState = this.animData[layer].states[_state];
		if (!animState) {
			if (IsDev)
				console.debug(`[Spine.playableState] state "${_state}" in layer "${layer}" not found`);
			return false;
		}

		// if (!!this.animState[layer] && !force && !this.isLoopAnimation(layer, this.animState[layer])) {
		// 	if (IsDev)
		// 		console.debug(`[Spine.playableState] cannot interrupt non-looping animation`);
		// 	return false;
		// }

		return true;
	}

	playState (layer: string, _state: string, force: boolean = false): spine.Animation | false {
		if (!this.playableState(layer, _state, force)) return false;

		const layerIdx = this.animLayers.indexOf(layer);
		const weight = this.animData![layer].weight;
		const animState = this.animData![layer].states[_state];

		const state = this.state;
		const anims = state.data.skeletonData.animations;
		const anim = anims.find(x => x.name === animState.clip);
		if (!anim) {
			if (IsDev)
				console.debug(`[Spine.playState] clip "${animState.clip}" not found`);
			return false;
		}

		this.animState[layer] = _state;

		if (IsDev)
			console.debug(`[Spine.playState] state "${_state}" in layer "${layer}" playing`);

		const entry = state.setAnimationWith(layerIdx, anim, this.isLoopAnimation(layer, _state));
		if (weight !== undefined) entry.alpha = weight;
		entry.mixDuration = 0.2;
		return anim;
	}

	setFace (face: string): boolean {
		if (this.lastFace) this.removeSkin("face/" + this.lastFace);
		const ret = this.addSkin("face/" + face);
		this.lastFace = face || "";
		return ret;
	}

	setGoogle (google: boolean) {
		const names = this.skeletonData?.skins.map(r => r.name);
		if (!names) return;

		const hasGoogle = names.includes("breast/Censorship") && names.includes("breast/Unedited");
		if (!hasGoogle) return;

		if (google) {
			this.removeSkin("breast/Unedited");
			this.addSkin("breast/Censorship");
		} else {
			this.addSkin("breast/Unedited");
			this.removeSkin("breast/Censorship");
		}
	}

	setHideBG (hide: boolean) {
		this._hideBG = hide;
		if (!this.skeletonData) return;

		const names = this.skeletonData.skins.map(r => r.name);
		if (!names) return;

		const targets = names.filter(x => x.startsWith("decoration") && (
			/Background/i.test(x) || /Bcakground/i.test(x)
		));
		if (hide)
			targets.forEach(skin => this.removeSkin(skin));
		else
			targets.forEach(skin => this.addSkin(skin));
	}

	setHidePart (hide: boolean) {
		this._hidePart = hide;
		if (!this.skeletonData) return;

		const names = this.skeletonData.skins.map(r => r.name);
		if (!names) return;

		const targets = names.filter(x => x.startsWith("decoration") && !(
			/Background/i.test(x) || /Bcakground/i.test(x)
		));
		if (hide)
			targets.forEach(skin => this.removeSkin(skin));
		else
			targets.forEach(skin => this.addSkin(skin));
	}

	setColliderVisible (visible: boolean) {
		this._colliderVisible = visible;
		if (!this.colliderBoxs) return;

		this.colliderBoxs.forEach(g => g.display = visible);
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		super.destroy(options);
		removeCache(this._model);
	}
}
