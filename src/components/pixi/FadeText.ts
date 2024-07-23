import * as PIXI from "pixi.js";
import opentype from "opentype.js";

import { findSpans } from "unicode-default-word-boundary";

import { FontGet, FontPriority } from "@/libs/Font";

import FadeContainer from "@/components/pixi/FadeContainer";

const pathCache: {
	[family_size_weight: string]: {
		[char: string]: [opentype.Path, number];
	};
} = {};

interface TextStyle {
	align?: "LT" | "CT" | "RT" | "LC" | "CC" | "RC" | "LB" | "CB" | "RB";

	lineHeight?: number;
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: number;
	fill?: string;

	strokeWidth?: number;
	stroke?: string;

	wrapWidth?: number;
}

export default class FadeText extends FadeContainer {
	private _text: string | undefined;
	public get text () {
		return this._text;
	}
	public set text (value: typeof this._text) {
		this._text = value;
		this.UpdateTexture();
	}

	private _style: Partial<TextStyle> | undefined;
	public get style () {
		return this._style;
	}
	public set style (value: typeof this._style) {
		this._style = value;
		this.UpdateTexture();
	}

	private _cv: HTMLCanvasElement;
	private _sprites: PIXI.Sprite[] = [];

	constructor (text?: string, style?: TextStyle) {
		super();
		this._text = text;
		this._style = style;

		this._cv = document.createElement("canvas");
		this.UpdateTexture();
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		this._sprites.forEach(sp => {
			this.removeChild(sp);
			sp.destroy(true);
		});
		this._cv.remove();

		super.destroy(options || true);
	}

	private updateRequired = false;
	private updateTickFn = this.updateTicker.bind(this);
	private markUpdateRequire (): void {
		if (!this.updateRequired) {
			this.updateRequired = true;
			PIXI.Ticker.shared.add(this.updateTickFn);
		}
	}
	private updateTicker () {
		this.updateRequired = false;
		PIXI.Ticker.shared.remove(this.updateTickFn);
		this.UpdateTexture();
	}

	private UpdateTexture (): void {
		this._sprites.forEach(sp => {
			this.removeChild(sp);
			sp.destroy(true);
		});
		this._sprites = [];

		if (!this._text) return;

		const fontFamilies = [
			this._style?.fontFamily,
			...FontPriority,
		]
			.filter(r => !!r)
			.reduce<string[]>((p, c) => p.includes(c) ? p : [...p, c], []);

		const fontSize = this._style?.fontSize ?? 14;
		const fontWeight = this._style?.fontWeight ?? 400;
		const lineHeight = this._style?.lineHeight ?? 1.2;
		const strokeWidth = this._style?.strokeWidth ?? 0;

		const fallback = "?";
		const _base_x = (this.style?.stroke && strokeWidth) || 0;
		const _base_y = _base_x;
		let x = _base_x, y = _base_y;

		const _stroke = this._style?.stroke ?? "#000";

		const wrapWidth = this._style?.wrapWidth ?? 0;

		new Promise(() => {
			// \0 type \0 param \0 content \0
			this._text!
				.split(/(\0[^\0]+\0[^\0]+\0[^\0]+\0)/gs)
				.forEach(p => {
					let _fill = this._style?.fill;
					let text = p;
					if (p[0] === "\0") { // formatted
						const r = (/\0([^\0]+)\0([^\0]+)\0([^\0]+)\0/gs).exec(p);
						if (r) {
							text = r[3];

							switch (r[1]) {
								case "color":
									_fill = `#${r[2]}`;
									break;

								case "spchar":
									text = r[2];
									break;
							}
						}
					}

					let _right = 0;
					let _bottom = 0;

					[...findSpans(text)]
						.map(s => s.text)
						.forEach(text => {
							let __x = x;
							let __y = y;

							let pathCacheKey: string = "";

							const _arr: Array<[c: string, font: opentype.Font | null]> = [];
							let _w = 0;
							let _h = 0;
							let _bl = 0;
							for (let c of text) {
								let _font: ReturnType<typeof FontGet> = null;

								for (const f of fontFamilies) {
									_font = FontGet(f, fontWeight, c) ||
										FontGet(f, 400, c); // try :400 font
									if (_font) break;
								}
								if (!_font) {
									for (const f of fontFamilies) {
										_font = FontGet(f, fontWeight, fallback) || // try fallback
											FontGet(f, 400, fallback); // try fallback :400 font
										if (_font) break;
									}
								}
								if (!_font) continue; // not drawable... skip

								if (_font instanceof opentype.Font) {
									pathCacheKey = `${_font.names.fontFamily}_${fontSize}_${fontWeight}`;
									pathCache[pathCacheKey] ||= {};

									_w += _font.getAdvanceWidth(c, fontSize);
									_arr.push([c, _font]);

									const h = (_font.ascender - _font.descender) / _font.unitsPerEm * fontSize;
									_bl = Math.max(_bl, h + (_font.descender) / _font.unitsPerEm * fontSize);
									_h = Math.max(_h, h);
								} else { // Promise
									_font.then(() => this.markUpdateRequire());
									_arr.push([c, null]); // font not loaded yet
									_w += fontSize / 2;
								}
							}

							this._cv.width = _w + _base_x * 2;
							this._cv.height = _h + _base_y * 2;

							if ((wrapWidth > 0 && x + _w > wrapWidth) || (text === "\n")) {
								x = __x = _base_x;
								__x = _base_x;
								__y = y += fontSize * lineHeight;
							}

							if (text === "\n") return;

							const ctx = this._cv.getContext("2d")!;
							ctx.fillStyle = _fill || "#fff";

							_arr.forEach(([c, _font]) => {
								if (!_font) { // font not loaded yet
									x += fontSize / 2;
									return;
								}

								if (!(pathCacheKey in pathCache && c in pathCache[pathCacheKey])) {
									const _path = _font.getPath(c, 0, 0, fontSize, {
										kerning: true,
										features: {
											liga: true,
											rlig: true,
										},
									});
									const _cw = _font.getAdvanceWidth(c, fontSize);
									pathCache[pathCacheKey][c] = [_path, _cw];
								}

								const [_path, _cw] = pathCache[pathCacheKey][c];
								ctx.save();
								ctx.translate(x - __x, _bl);
								// console.log(text, c, x, __x, x - __x, _bl);

								_path.fill = null;
								_path.stroke = _stroke || null;
								_path.strokeWidth = strokeWidth * 2;
								_path.draw(ctx);

								_path.stroke = null;
								_path.fill = _fill || null;
								_path.draw(ctx);
								ctx.restore();

								x += _cw;
							});

							const sp = new PIXI.Sprite(PIXI.Texture.from(this._cv.toDataURL()));
							sp.roundPixels = true;
							sp.name = text;
							sp.position.set(__x, __y);
							this.addChild(sp);
							this._sprites.push(sp);

							_right = Math.max(_right, __x + this._cv.width);
							_bottom = Math.max(_bottom, __y + this._cv.height);
						});

					const _align = this._style?.align ?? "LT";
					const [_g_w, _g_h] = [_right, _bottom];
					switch (_align[0]) {
						case "L":
							this.pivot.x = 0;
							break;
						case "C":
							this.pivot.x = _g_w / 2;
							break;
						case "R":
							this.pivot.x = _g_w;
							break;
					}
					switch (_align[1]) {
						case "T":
							this.pivot.y = 0;
							break;
						case "C":
							this.pivot.y = _g_h / 2;
							break;
						case "B":
							this.pivot.y = _g_h;
							break;
					}
				});
		});
	}
}
