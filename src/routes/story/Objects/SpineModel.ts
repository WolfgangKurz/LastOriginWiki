import * as PIXI from "pixi.js";
import * as spine from "@esotericsoftware/spine-pixi";
import LZMADecompression from "@/external/lzma";

import { AssetsRoot } from "@/libs/Const";

import FadeContainer from "./FadeContainer";

interface CacheType {
	skeleton: string;
	urls: string[];
	atlas: spine.TextureAtlas;
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

//#region @/components/spine-renderer/Spine.ts
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
//#endregion

export default class StorySpineModel extends FadeContainer {
	private readonly _model: string;
	public get model (): string {
		return this._model;
	}

	private _face: string = "";
	public get face (): string {
		return this._face;
	}

	private selectedSkins: string[] = [];
	private lastFace: string = "";

	private skeleton: spine.Skeleton | undefined;
	private skeletonData: spine.SkeletonData | undefined;

	private animData: SpineAnim | undefined;
	private animLayers: string[] = [];
	private animState: Record<string, string> = {};

	private state!: spine.AnimationState;

	constructor (image: string) {
		super();
		this.sortableChildren = true;

		const fname = image.replace(/^2DModel_(.+)$/, "$1");
		this._model = image;

		const baseURL = `${AssetsRoot}/spine/${fname}`;

		this.layerableChildren = true;

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
					]))
					.then(([skeletonData, atlasText, anim]) => {
						const atlas = new spine.TextureAtlas(atlasText);

						this.animData = anim as SpineAnim;
						this.animLayers = Object.keys(this.animData);

						return Promise.all([
							skeletonData,
							atlas,

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
										alpha.forEach((a, i) => (arr[i * 4 + 3] = a));

										cv.remove();

										// ctx.putImageData(imgData, 0, 0);
										return createImageBitmap(
											new ImageData(arr, img.naturalWidth, img.naturalHeight),
											{ premultiplyAlpha: "none", colorSpaceConversion: "none" },
										).then(_img => ({
											url,
											tex: spine.SpineTexture.from(new PIXI.BaseTexture(_img)),
										}));
									})
									.then(({ url, tex }) => {
										page.setTexture(tex);
										return url;
									});
							}),
						]);
					})
					.then(([skelData, atlas, ...urls]) => {
						setCache(this._model, {
							skeleton: skelData,
							urls,
							atlas,
						});
						resolve(this.Load(getCache(this._model)!));
					});
			}
		}).then(s => {
			this.addChild(s);

			if (this.lastFace)
				this.setFace(this.lastFace);

			// play default animation
			if (this.animData) {
				this.animLayers.forEach(layer => {
					this.playState(layer, this.animData![layer].start);
				});
			}
		});
	}

	Load (data: CacheType) {
		const atlas = data.atlas;
		const skelData = data.skeleton;

		const atlasLoader = new spine.AtlasAttachmentLoader(atlas);
		const skeletonJson = new spine.SkeletonJson(atlasLoader);
		skeletonJson.scale = 0.15;

		const skeletonData = skeletonJson.readSkeletonData(skelData);
		this.skeletonData = skeletonData;

		const s = new spine.Spine(skeletonData);

		this.skeleton = s.skeleton;
		this.state = s.state;

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

		// let offset = new spine.Vector2(), size = new spine.Vector2();
		// this.skeleton.getBounds(offset, size);
		// this.lastBounds = { offset, size };
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

	playState (layer: string, _state: string, force: boolean = false): spine.Animation | false {
		if (!this.animData) {
			// console.debug(`[Spine.playState] animData not found`);
			return false;
		}

		const layerIdx = this.animLayers.indexOf(layer);
		if (layerIdx < 0) {
			// console.debug(`[Spine.playState] layer "${layer}" not found`);
			return false;
		}

		const animState = this.animData[layer].states[_state];
		if (!animState) {
			// console.debug(`[Spine.playState] state "${_state}" in layer "${layer}" not found`);
			return false;
		}

		if (!!this.animState[layer] && !force && !this.isLoopAnimation(layer, this.animState[layer])) {
			// console.debug(`[Spine.playState] cannot interrupt non-looping animation`);
			return false;
		}

		const state = this.state;
		const anims = state.data.skeletonData.animations;
		const anim = anims.find(x => x.name === animState.clip);
		if (!anim) {
			// console.debug(`[Spine.playState] clip "${animState.clip}" not found`);
			return false;
		}

		this.animState[layer] = _state;

		const entry = state.setAnimationWith(layerIdx, anim, this.isLoopAnimation(layer, _state));
		entry.mixDuration = 0.5;
		return anim;
	}

	setFace (face: string) {
		if (this.lastFace) this.removeSkin("face/" + this.lastFace);
		this.addSkin("face/" + face);
		this.lastFace = face || "";
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		super.destroy(options);
		removeCache(this._model);
	}
}
