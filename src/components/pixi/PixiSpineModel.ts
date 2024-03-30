import * as PIXI from "pixi.js";
import * as spine from "@esotericsoftware/spine-pixi";
import LZMADecompression from "@/external/lzma";

import { AssetsRoot, IsDev } from "@/libs/Const";

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
	start: string;
	states: {
		[state: string]: SpineAnimState;
	};
}
interface SpineAnim {
	[layer: string]: SpineAnimLayer;
}
interface SpineTransform {
	pos: [x: number, y: number];
	size: [x: number, y: number];
}
interface SpineMetadata {
	colliders: Record<string, SpineTransform>;
	transform: SpineTransform;
	specialTouch: string[];
}
//#endregion

export default class PixiSpineModel extends FadeContainer {
	private readonly _model: string;
	public get model (): string {
		return this._model;
	}

	private _face: string = "";
	public get face (): string {
		return this._face;
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

	private skeleton: spine.Skeleton | undefined;
	private skeletonData: spine.SkeletonData | undefined;

	private animData: SpineAnim | undefined;
	private animLayers: string[] = [];
	private animState: Record<string, string> = {};

	private state!: spine.AnimationState;

	private colliderGraphics: PIXI.Graphics[] = [];

	constructor (image: string) {
		super();
		this.sortableChildren = true;

		const fname = image.replace(/^2DModel_(.+)$/, "$1");
		this._model = image;

		const baseURL = `${AssetsRoot}/spine/${fname}`;

		this.layerableChildren = true;

		this.scale.set(3); // base Scale

		new Promise<spine.Spine>((resolve) => {
			const cached = getCache(this._model);
			if (cached)
				resolve(this.Load(cached));
			else {
				const changeExt = (path: string, ext: string): string => `${path.substring(0, path.lastIndexOf("."))}.${ext}`;

				fetch(`${baseURL}/${fname}.json.lzma`)
					.then(r => r.arrayBuffer())
					.then(r => LZMADecompression(r, "json.lzma"))
					.then(r => new TextDecoder().decode(r))
					.then(r => Promise.all([
						r,
						fetch(`${baseURL}/${fname}.atlas`).then(r => r.text()),
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
								// make alpha-merged image
								return Promise
									.all([
										fetch(changeExt(`${baseURL}/${page.name}`, "alpha"))
											.then(r => r.arrayBuffer())
											.then(r => new Uint8Array(r))
											.then(r => LZMADecompression(r, "alpha"))
											.then(r => r.map(v => v < 0 ? v + 256 : v)),

										fetch(changeExt(`${baseURL}/${page.name}`, "jpg"))
											.then(r => r.blob())
											.then(r => new Promise<{ img: HTMLImageElement; url: string; }>(
												(imageResolve, imageReject) => {
													const img = new Image();
													img.onload = () => imageResolve({ img, url });
													img.onerror = (e) => imageReject(e);

													const url = URL.createObjectURL(r);
													img.src = url;
												})
											),
									])
									.then(([alpha, { img, url }]) => {
										const cv = document.createElement("canvas");
										cv.width = img.naturalWidth;
										cv.height = img.naturalHeight;

										const ctx = cv.getContext("2d");
										if (!ctx) throw new Error("Cannot get context");

										ctx.drawImage(img, 0, 0);

										const imgData = ctx.getImageData(0, 0, cv.width, cv.height);
										const arr = imgData.data.slice();
										alpha.forEach((a, i) => {
											// apply alpha, reverse premultiplied-alpha (rough, but works)
											const af = a / 255;
											arr[i * 4 + 0] /= af;
											arr[i * 4 + 1] /= af;
											arr[i * 4 + 2] /= af;
											arr[i * 4 + 3] = a;
										});

										cv.remove();

										// ctx.putImageData(imgData, 0, 0);
										return createImageBitmap(
											new ImageData(arr, img.naturalWidth, img.naturalHeight),
											{ premultiplyAlpha: "premultiply", colorSpaceConversion: "none" },
										)
											.then(_img => {
												const t = new PIXI.BaseTexture(_img, {
													anisotropicLevel: 4,
													mipmap: PIXI.MIPMAP_MODES.OFF,
													multisample: PIXI.MSAA_QUALITY.HIGH,
												});
												return t;
											})
											.then(tex => ({ url, tex: spine.SpineTexture.from(tex) }));
									})
									.then(({ url, tex }) => {
										page.setTexture(tex);
										return url;
									});
							}),
						]);
					})
					.then(([skelData, atlas, anim, metadata, ...urls]) => {
						setCache(this._model, {
							skeleton: skelData,
							urls,
							atlas,
							anim,
							metadata,
						});
						resolve(this.Load(getCache(this._model)!));
					});
			}
		}).then(s => {
			this.addChild(s);

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

	Load (data: CacheType) {
		// Spine model's BoxCollider will not be moved/changed
		Object.keys(data.metadata.colliders)
			.sort((a, b) => {
				if (a == "specialTouch") return 1;
				if (b == "specialTouch") return -1;
				return 0;
			})
			.forEach(c => {
				const _c = data.metadata.colliders[c];

				const x = 100 * _c.pos[0];
				const y = 100 * -_c.pos[1];
				const w = Math.abs(100 * _c.size[0]);
				const h = Math.abs(100 * _c.size[1]);

				let sp: PIXI.Sprite;

				const g = new PIXI.Graphics();
				g.lineStyle({
					width: 1,
					color: 0x00ff00,
					alignment: 0,
					native: true,
				});
				g.drawRect(0, 0, w, h);
				// g.pivot.set(w / 2, h / 2);
				g.eventMode = "none";

				const cvTemp = document.createElement("canvas");
				cvTemp.width = w;
				cvTemp.height = h;

				this.colliderGraphics.push(g);

				const collider = new PIXI.Sprite(PIXI.Texture.from(cvTemp));
				collider.addChild(g);
				collider.pivot.set(w / 2, h / 2);
				collider.zIndex = 3;
				collider.name = "[Collider] " + c;
				collider.eventMode = "static";
				collider.interactive = true;
				collider.on("pointertap", () => {
					if (data.metadata.specialTouch.includes(c))
						this.emit("special-touch", this);
					else
						this.emit("normal-touch", this);
				});
				collider.position.set(x, y);

				this.addChild(collider);
				cvTemp.remove();
			});

		const atlasLoader = new spine.AtlasAttachmentLoader(data.atlas);
		const skeletonJson = new spine.SkeletonJson(atlasLoader);
		skeletonJson.scale = data.metadata.transform.size[0]; // x and y should be equal

		const skeletonData = skeletonJson.readSkeletonData(data.skeleton);
		this.skeletonData = skeletonData;

		this.animData = data.anim as SpineAnim;
		this.animLayers = Object.keys(this.animData);

		const s = new spine.Spine(skeletonData);
		s.position.x = data.metadata.transform.pos[0] * 100;
		s.position.y = -data.metadata.transform.pos[1] * 100;
		// s.position.y = 720;

		this.skeleton = s.skeleton;
		this.state = s.state;

		this.state.addListener({
			complete: (entry) => {
				if (this.animData) {
					const layer = this.animLayers[entry.trackIndex];
					const state = this.animData[layer].states[this.animState[layer]];
					const next = state.transitions.find(x => x.cond === "");

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

		return s;
	}

	addSkin (skinName: string) {
		if (this.selectedSkins.indexOf(skinName) != -1) return;
		this.selectedSkins.push(skinName);
		this.updateSkin();
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
		this.skeleton.updateWorldTransform(spine.Physics.update);
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
		entry.mixDuration = 0.2;
		return anim;
	}

	setFace (face: string) {
		if (this.lastFace) this.removeSkin("face/" + this.lastFace);
		this.addSkin("face/" + face);
		this.lastFace = face || "";
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
		// Nothing to do yet
	}

	setHidePart (hide: boolean) {
		this._hidePart = hide;
		if (!this.skeletonData) return;

		const names = this.skeletonData.skins.map(r => r.name);
		if (!names) return;

		if (hide)
			names.filter(x => x.startsWith("decoration"))
				.forEach(skin => this.removeSkin(skin));
		else
			names.filter(x => x.startsWith("decoration"))
				.forEach(skin => this.addSkin(skin));
	}

	setColliderVisible (visible: boolean) {
		this._colliderVisible = visible;
		if (!this.colliderGraphics) return;

		this.colliderGraphics.forEach(g => g.visible = visible);
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		super.destroy(options);
		removeCache(this._model);
	}
}
