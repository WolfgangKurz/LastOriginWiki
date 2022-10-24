import * as spine from "@esotericsoftware/spine-webgl";

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
		canvas.assetManager.loadText(`${this.assetName}.json`);
		canvas.assetManager.loadTextureAtlas(`${this.assetName}.atlas`);
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
		this.state.setAnimation(0, "idle", true);

		{ // animation init
			this.state.setEmptyAnimation(1, 0);
			const entry = this.state.setAnimation(1, "idle", false);
			entry.mixDuration = 0.3;
			entry.animationEnd = 0;
			entry.mixBlend = spine.MixBlend.add;
		}

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
		for (const skinName of this.selectedSkins)
			newSkin.addSkin(this.skeletonData.findSkin(skinName)!);

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

	play (name: string) {
		const state = this.state;

		const current = state.getCurrent(1);
		if (current && !current.isComplete()) return;

		const entry = state.addAnimation(1, name, false, 0);
		entry.mixDuration = 0.3;
		entry.mixBlend = spine.MixBlend.add;
	}
}
export default Spine;
