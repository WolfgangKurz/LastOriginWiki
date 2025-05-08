import * as PIXI from "pixi.js";

export default class ColliderBox extends PIXI.Container {
	private collider: PIXI.Graphics;
	private placeholder: PIXI.Sprite;

	//#region display
	private _display: boolean;
	public get display (): boolean {
		return this._display;
	}
	public set display (value: boolean) {
		this._display = value;
		this.update();
	}
	//#endregion

	//#region center
	private _center: PIXI.Point;
	public get center (): PIXI.Point {
		return this._center;

	}
	public set center (value: PIXI.Point) {
		this._center = value;
		this.update();
	}
	//#endregion

	//#region size
	private _size: PIXI.Point;
	public get size (): PIXI.Point {
		return this._size;
	}
	public set size (value: PIXI.Point) {
		this._size = value;
		this.update();
	}
	//#endregion

	constructor () {
		super();

		this._display = true;
		this._size = new PIXI.Point(1, 1);
		this._center = new PIXI.Point(0, 0);

		this.placeholder = new PIXI.Sprite(PIXI.Texture.WHITE);
		this.placeholder.alpha = 0;
		this.addChild(this.placeholder);

		this.collider = new PIXI.Graphics();
		this.collider.eventMode = "none";
		this.addChild(this.collider);

		this.update();
	}

	private update () {
		const [x, y, w, h] = [
			this.center.x,
			this.center.y,
			Math.abs(this.size.x),
			Math.abs(this.size.y),
		];

		const g = this.collider;
		g.clear();
		g.lineStyle({
			width: 0.01, // Math.max(2, window.devicePixelRatio || 1),
			color: 0x00ff00,
			alignment: 0,
			native: true,
		});

		this.placeholder.position.set(-w / 2 + x, -h / 2 - y);
		this.placeholder.scale.set(w / 16, h / 16);

		if (!this._display) return;

		g.drawRect(
			-w / 2 + x,
			-h / 2 - y,
			w,
			h,
		);
	}
}
