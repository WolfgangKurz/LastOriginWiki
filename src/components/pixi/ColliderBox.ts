import { Container, Graphics, Point, Sprite, Texture } from "pixi.js";

export default class ColliderBox extends Container {
	private collider: Graphics;
	private placeholder: Sprite;

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
	private _center: Point;
	public get center (): Point {
		return this._center;

	}
	public set center (value: Point) {
		this._center = value;
		this.update();
	}
	//#endregion

	//#region size
	private _size: Point;
	public get size (): Point {
		return this._size;
	}
	public set size (value: Point) {
		this._size = value;
		this.update();
	}
	//#endregion

	constructor () {
		super();

		this.enableRenderGroup();

		this._display = true;
		this._size = new Point(1, 1);
		this._center = new Point(0, 0);

		this.placeholder = Sprite.from(Texture.EMPTY);
		// this.placeholder.alpha = 0.0;
		this.placeholder.eventMode = "static";
		this.placeholder.on("pointertap", e => this.emit("pointertap", e));
		this.addChild(this.placeholder);

		this.collider = new Graphics();
		this.addChild(this.collider);

		this.update();
	}

	private update () {
		const g = this.collider;
		g.clear();
		if (!this._display) return;

		const [x1, y1, w, h] = [
			this.center.x,
			-this.center.y,
			this.size.x,
			this.size.y,
		];
		const x = -w / 2 + x1;
		const y = -h / 2 + y1;

		this.placeholder.position.set(x, y);
		this.placeholder.scale.set(w, h);

		g.rect(x, y, w, h).stroke({
			width: 1,
			color: 0x00ff00,
			alignment: 0,
			pixelLine: true,
		});
	}
}
