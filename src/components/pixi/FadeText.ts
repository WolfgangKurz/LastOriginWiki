import * as PIXI from "pixi.js";
import opentype from "opentype.js";
import woff2dec from "@/external/woff2/woff2dec";

import { AssetsRoot } from "@/libs/Const";
import { groupBy } from "@/libs/Functions";
import FadeContainer from "@/components/pixi/FadeContainer";
import { findSpans } from "unicode-default-word-boundary";

type FontParsedType = [family: string, weight: number, font: opentype.Font];

const _font_priority = ["IBMPlexSansKR", "PretendardJPVariable", "PretendardVariable"];
const _fonts: Record<string, Record<number, opentype.Font>> = {};
const _fonts_array: FontParsedType[] = [];
const fontCallbacks: Array<() => void> = [];
let fontReady = false;

(async () => {
	const fontMap = {
		IBMPlexSansKR: {
			400: fetch(`${AssetsRoot}/story/fonts/IBMPlexSansKR-400.ttf`).then(r => r.arrayBuffer()),
			500: fetch(`${AssetsRoot}/story/fonts/IBMPlexSansKR-500.ttf`).then(r => r.arrayBuffer()),
		},
		PretendardJPVariable: fetch("https://cdnjs.cloudflare.com/ajax/libs/pretendard-jp/1.3.9/variable/woff2/PretendardJPVariable.woff2")
			.then(r => r.arrayBuffer())
			.then(r => woff2dec(new Uint8Array(r))) // woff2 -> ttf
			.then(r => r.buffer), // ArrayBufferLike
		PretendardVariable: fetch("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/woff2/PretendardVariable.woff2")
			.then(r => r.arrayBuffer())
			.then(r => woff2dec(new Uint8Array(r))) // woff2 -> ttf
			.then(r => r.buffer), // ArrayBufferLike
	};

	type FontFetchType = [family: string, weight: number, buffer: ArrayBuffer];

	Promise.all(
		Object.keys(fontMap)
			.map(k => {
				if (fontMap[k] instanceof Promise)
					return fontMap[k].then(b => [k, 0, b]) as Promise<FontFetchType>;
				else {
					return Object.keys(fontMap[k])
						.map(w => fontMap[k][w].then(b => [k, parseInt(w, 10), b]) as Promise<FontFetchType>)
						.flat();
				}
			})
			.flat()
	)
		.then(fonts => fonts.map(f => [f[0], f[1], opentype.parse(f[2])] as FontParsedType))
		.then(fonts => {
			_fonts_array.push(...fonts);

			const grp = groupBy(fonts, f => f[0].toString());
			Object.keys(grp).forEach(ff => {
				_fonts[ff] = {};
				grp[ff].forEach(f => _fonts[ff][f[1]] = f[2]);
			});

			fontReady = true;
			fontCallbacks.forEach(fn => fn());
		});
})();

const pathCache: {
	[family_size_weight: string]: {
		[char: string]: [opentype.Font, opentype.Path, number];
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

		if (!fontReady) {
			fontCallbacks.push(() => this.UpdateTexture());
		} else
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

	private UpdateTexture (): void {
		if (!fontReady) return;

		this._sprites.forEach(sp => {
			this.removeChild(sp);
			sp.destroy(true);
		});
		this._sprites = [];

		if (!this._text) return;

		const fontFamily = this._style?.fontFamily;
		const fontSize = this._style?.fontSize ?? 14;
		const fontWeight = this._style?.fontWeight ?? 400;
		const lineHeight = this._style?.lineHeight ?? 1.2;
		const strokeWidth = this._style?.strokeWidth ?? 0;

		function findFont (char: string, family: string | undefined, weight: number): opentype.Font | null {
			if (family && family in _fonts && weight in _fonts[family])
				return _fonts[family][weight];

			if (family) {
				const _targets = Object.keys(_fonts[family])
					.map(k => parseInt(k, 10))
					.sort((a, b) => Math.abs(a - weight) - Math.abs(b - weight));

				for (let k of _targets) {
					const _font = _fonts[family][k];
					if (_font.hasChar(char))
						return _font;
				}
			}

			const _sorted = _fonts_array.sort((a, b) => {
				const fa = _font_priority.indexOf(a[0]);
				const fb = _font_priority.indexOf(b[0]);
				if (fa !== fb) return fa - fb;
				return Math.abs(a[1] - fontWeight) - Math.abs(b[1] - fontWeight);
			});

			for (let [_1, _2, _font] of _sorted) {
				if (_font.hasChar(char))
					return _font;
			}
			return null;
		}

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
							}
						}
					}

					const pathCacheKey = `${fontFamily || ""}_${fontSize}_${fontWeight}`;
					pathCache[pathCacheKey] ||= {};

					let _right = 0;
					let _bottom = 0;

					[...findSpans(text)]
						.map(s => s.text)
						.forEach(text => {
							const __x = x;
							const __y = y;

							const _arr: Array<[c: string, font: opentype.Font]> = [];
							let _w = 0;
							let _h = 0;
							let _bl = 0;
							for (let c of text) {
								const _font = findFont(c, fontFamily, fontWeight) || findFont(fallback, fontFamily, fontWeight) || _fonts_array[0][2];
								_w += _font.getAdvanceWidth(c, fontSize);
								_arr.push([c, _font]);

								const h = (_font.ascender - _font.descender) / _font.unitsPerEm * fontSize;
								_bl = Math.max(_bl, h + (_font.descender) / _font.unitsPerEm * fontSize);
								_h = Math.max(_h, h);
							}

							this._cv.width = _w + _base_x * 2;
							this._cv.height = _h + _base_y * 2;

							if ((wrapWidth > 0 && x + _w > wrapWidth) || (text === "\n")) {
								x = _base_x;
								y += fontSize * lineHeight;
							}

							if (text === "\n") return;

							const ctx = this._cv.getContext("2d")!;
							ctx.fillStyle = _fill || "#fff";

							for (let c of text) {
								if (!(pathCacheKey in pathCache && c in pathCache[pathCacheKey])) {
									const _font = findFont(c, fontFamily, fontWeight) || findFont(fallback, fontFamily, fontWeight) || _fonts_array[0][2];
									const _path = _font.getPath(c, 0, 0, fontSize, {
										kerning: true,
										features: {
											liga: true,
											rlig: true,
										},
									});
									const _cw = _font.getAdvanceWidth(c, fontSize);
									pathCache[pathCacheKey][c] = [_font, _path, _cw];
								}

								const [_font, _path, _cw] = pathCache[pathCacheKey][c];
								ctx.save();
								ctx.translate(x - __x, _bl);

								_path.fill = null;
								_path.stroke = _stroke || null;
								_path.strokeWidth = strokeWidth * 2;
								_path.draw(ctx);

								_path.stroke = null;
								_path.fill = _fill || null;
								_path.draw(ctx);
								ctx.restore();

								x += _cw;
							}

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
