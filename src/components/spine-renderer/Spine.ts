import * as spine from "@esotericsoftware/spine-webgl";
import { GLTexture } from "@esotericsoftware/spine-webgl";
import LZMADecompression from "@/external/lzma";

import { CameraController } from "./CameraController";

class Spine {
	private canvas!: spine.SpineCanvas;
	private atlas!: spine.TextureAtlas;
	private skeletonData!: spine.SkeletonData;
	private skeleton!: spine.Skeleton;
	private state!: spine.AnimationState;
	private selectedSkins: string[];
	private lastBounds: {
		offset: spine.Vector2;
		size: spine.Vector2;
	};

	private assetName: string;
	private InitializedCallback: (app: Spine, skinNames: string[]) => void;

	constructor (assetName: string, cb: (app: Spine, skinNames: string[]) => void) {
		this.assetName = assetName;
		this.InitializedCallback = cb;

		this.selectedSkins = [];
		this.lastBounds = {
			offset: new spine.Vector2(),
			size: new spine.Vector2(),
		};
	}

	loadAssets (canvas: spine.SpineCanvas) {
		const assetManager = canvas.assetManager;

		{
			let path = `${this.assetName}.json`;
			path = assetManager["start"](path);

			assetManager["downloader"].downloadBinary(
				`${path}.lzma`,
				(binary) => {
					LZMADecompression(binary, "json.lzma")
						.then(ab => new TextDecoder().decode(ab))
						.then(json => assetManager["success"](undefined, path, json));
				},
				(status, responseText) => {
					throw new Error(`${status} :: ${responseText}`);
				},
			);
		}

		{ // load alpha-separated image
			const changeExt = (path: string, ext: string): string => `${path.substring(0, path.lastIndexOf("."))}.${ext}`;

			let path = `${this.assetName}.atlas`;
			path = assetManager["start"](path);

			new Promise<string>((resolve, reject) => assetManager["downloader"].downloadText(
				path, // download atlas file
				(text) => resolve(text),
				(status, responseText) => reject(new Error(`${status} :: ${responseText}`)),
			)).then(async (atlasText) => {
				const atlas = new spine.TextureAtlas(atlasText); // parse atlas

				for (let page of atlas.pages) { // texture pages
					const [alpha, texture] = await Promise.all([
						new Promise<Uint8Array>((resolve, reject) => assetManager["downloader"].downloadBinary(
							changeExt(assetManager["pathPrefix"] + page.name, "alpha"), // alpha channel data
							(binary: Uint8Array) => resolve(binary),
							(status, responseText) => reject(new Error(`${status} :: ${responseText}`)),
						))
							.then(binary => LZMADecompression(binary, "alpha"))
							.then(binary => binary.map(v => v < 0 ? v + 256 : v)),
						new Promise<spine.Texture>((resolve, reject) => assetManager["downloader"].downloadBinary(
							changeExt(assetManager["pathPrefix"] + page.name, "jpg"), // alpha-less image
							(binary: Uint8Array) => {
								const _img = new Image();
								_img.onload = () => {
									resolve(new GLTexture(canvas.context, _img));
								};
								_img.src = URL.createObjectURL(new Blob([binary]));
							},
							(status, responseText) => reject(new Error(`${status} :: ${responseText}`)),
						)),
					]);

					const img = texture.getImage();
					const glTex = await new Promise<GLTexture>(async resolve => {
						const texPath = assetManager["start"](page.name);

						const cv = document.createElement("canvas");
						cv.width = img.width;
						cv.height = img.height;

						const ctx = cv.getContext("2d")!;
						ctx.drawImage(img, 0, 0);

						const data = ctx.getImageData(0, 0, img.width, img.height);
						const arr = data.data.slice(); // clone
						alpha.forEach((a, i) => (arr[i * 4 + 3] = a)); // apply alpha channel

						const bitmap = await createImageBitmap(
							new ImageData(arr, img.width, img.height),
							{ premultiplyAlpha: "none", colorSpaceConversion: "none" },
						);
						const tex = new GLTexture(canvas.context, bitmap);
						assetManager["success"]((_, tex) => resolve(tex), texPath, tex);
					});

					page.setTexture(glTex);
				}

				assetManager["success"](undefined, path, atlas);
			});
		}
	}

	initialize (canvas: spine.SpineCanvas) {
		this.canvas = canvas;

		const assetManager = canvas.assetManager;
		this.atlas = assetManager.require(`${this.assetName}.atlas`);
		const atlasLoader = new spine.AtlasAttachmentLoader(this.atlas);

		const skeletonJson = new spine.SkeletonJson(atlasLoader);
		this.skeletonData = skeletonJson.readSkeletonData(assetManager.require(`${this.assetName}.json`));
		this.skeleton = new spine.Skeleton(this.skeletonData);

		const stateData = new spine.AnimationStateData(this.skeletonData);
		this.state = new spine.AnimationState(stateData);

		this.state.addListener({
			complete: (entry) => {
				if (entry.trackIndex === 0 && entry.animation) {
					if (entry.animation.duration > 0 && entry.animation.name !== "idle")
						this.idle();
				}
			},
		});

		// animation init
		this.idle();

		new CameraController(this.canvas.htmlCanvas, this.canvas.renderer.camera);

		this.InitializedCallback(this, this.skeletonData.skins.map(s => s.name));
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
		// Create a new skin from all the selected skins.
		const newSkin = new spine.Skin("result-skin");
		for (const skinName of this.selectedSkins) {
			const skin = this.skeletonData.findSkin(skinName);
			if (skin) newSkin.addSkin(skin);
		}

		this.skeleton.setSkin(newSkin);
		this.skeleton.setToSetupPose();
		this.skeleton.updateWorldTransform();

		let offset = new spine.Vector2(), size = new spine.Vector2();
		this.skeleton.getBounds(offset, size);
		this.lastBounds = { offset, size };
	}

	updateCamera () {
		const camera = this.canvas.renderer.camera;
		if (camera) {
			const offset = this.lastBounds.offset, size = this.lastBounds.size;
			camera.position.x = offset.x + size.x / 2;
			camera.position.y = offset.y + size.y / 2;
			camera.zoom = size.x > size.y ? size.x / this.canvas.htmlCanvas.width * 1.1 : size.y / this.canvas.htmlCanvas.height * 1.1;
			camera.update();
		}
	}

	update (canvas: spine.SpineCanvas, delta: number) {
		this.skeleton.setToSetupPose();
		this.state.update(delta);
		this.state.apply(this.skeleton);
		this.skeleton.updateWorldTransform();
	}

	render (canvas: spine.SpineCanvas) {
		// Center and zoom the camera so the skeleton is
		// in full view irrespective of the page size.
		const renderer = canvas.renderer;
		renderer.resize(spine.ResizeMode.Expand);

		canvas.clear(0, 0, 0, 0);
		renderer.begin();
		renderer.drawSkeleton(this.skeleton, true);
		renderer.end();
	}

	play (anim: spine.Animation) {
		const state = this.state;

		const current = state.getCurrent(0)!;
		if (current.animation && current.animation.name !== "idle") return false;

		const entry = state.setAnimationWith(0, anim, false);
		entry.mixDuration = 0.5;
		return true;
	}

	idle () {
		const entry = this.state.setAnimation(0, "idle", true);
		entry.mixDuration = 0.5;
	}

	animationList () {
		return this.state.data.skeletonData.animations;
	}
}
export default Spine;
