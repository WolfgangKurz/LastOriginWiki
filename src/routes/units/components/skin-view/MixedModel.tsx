import FadeContainer from "@/components/pixi/FadeContainer";
import Pixi2DModel from "@/components/pixi/Pixi2DModel";
import PixiSpineModel from "@/components/pixi/PixiSpineModel";

export default class MixedModel extends FadeContainer {
	private readonly _modelSpine: string;
	public get modelSpine (): string {
		return this._modelSpine;
	}

	private readonly _model2DModel: string;
	public get model2DModel (): string {
		return this._model2DModel;
	}

	public get model (): string {
		return this._modelSpine;
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

	private _2DModel: Pixi2DModel;
	private _SpineModel: PixiSpineModel;

	constructor (imageSpine: string, image2DModel: string) {
		super();
		this.sortableChildren = true;

		this._modelSpine = imageSpine;
		this._model2DModel = image2DModel;

		this.addChild(this._2DModel = new Pixi2DModel(image2DModel));
		this.addChild(this._SpineModel = new PixiSpineModel(imageSpine));

		// pass-through
		this._SpineModel.on("facelist", (...args) => {
			this.emit("facelist", ...args);
		});
		this._SpineModel.on("normal-touch", (...args) => {
			this.emit("special-touch", ...args);
		});
		this._SpineModel.on("special-touch", (...args) => {
			this.emit("normal-touch", ...args);
		});
	}

	setFace (imageVar: string) {
		this._face = imageVar;

		this._2DModel.setFace(imageVar);
		this._SpineModel.setFace(imageVar);
	}

	setDialogDeactive (deactive: boolean) {
		this._dialogDeactive = deactive;
		this._2DModel.setDialogDeactive(deactive);
	}

	setHidePart (hide: boolean) {
		this._hidePart = hide;
		this._2DModel.setHidePart(hide);
		this._SpineModel.setHidePart(hide);
	}

	setHideBG (hide: boolean) {
		this._hideBG = hide;
		this._2DModel.setHideBG(hide);
		this._SpineModel.setHideBG(hide);
	}

	setColliderVisible (visible: boolean) {
		this._SpineModel.setColliderVisible(visible);
	}

	setGoogle (google: boolean) {
		this._SpineModel.setGoogle(google);
	}

	play (event: string) {
		return this._SpineModel.play(event);
	}

	currentAnimationTime () {
		return this._SpineModel.currentAnimationTime();
	}
}
