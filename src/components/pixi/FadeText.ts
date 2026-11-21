import * as PIXI from "pixi.js";
import { findSpans } from "unicode-default-word-boundary";

import { type Font, type FontGlyph, FontGet, FontPriority, FontVariant } from "@/libs/Font";

import FadeContainer from "@/components/pixi/FadeContainer";

import { ParseFormattedText } from "@/routes/story/common";

interface TextStyle {
	align?: "LT" | "CT" | "RT" | "LC" | "CC" | "RC" | "LB" | "CB" | "RB";

	letterSpacing?: number;
	lineHeight?: number;
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: number;
	fill?: string;

	strokeWidth?: number;
	stroke?: string;

	shadowColor?: string;
	shadowBlur?: number;
	shadowOffsetX?: number;
	shadowOffsetY?: number;

	wrapWidth?: number;
}

interface LayoutGlyph {
	font: Font;
	glyph: FontGlyph;
	/** offset from span origin, px */
	x: number;
	y: number;
}

interface LayoutSpan {
	glyphs: LayoutGlyph[];
	fill: string;
	x: number;
	y: number;
}

const FALLBACK_CHAR = "?";

/**
 * Fading text with BB code formatting (see `Nn`),
 * rendered from font glyph paths (fontkit), independent of the browser text engine.
 */
export default class FadeText extends FadeContainer {
	private _text_height: number = 0;

	private _text: string | undefined;
	public get text () {
		return this._text;
	}
	public set text (value: typeof this._text) {
		this._text = value;
		this._text_height = 0;
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

	private _sprite: PIXI.Sprite | null = null;

	constructor (text?: string, style?: TextStyle) {
		super();
		this._text = text;
		this._style = style;

		this.UpdateTexture();
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		PIXI.Ticker.shared.remove(this.updateTickFn);
		this.updateRequired = false;
		this.clearSprite();

		super.destroy(options || true);
	}

	private clearSprite () {
		if (!this._sprite) return;
		this.removeChild(this._sprite);
		this._sprite.destroy(true);
		this._sprite = null;
	}

	private updateRequired = false;
	private updateTickFn = this.updateTicker.bind(this);
	private markUpdateRequire (): void {
		if (this.destroyed) return;
		if (!this.updateRequired) {
			this.updateRequired = true;
			PIXI.Ticker.shared.add(this.updateTickFn);
		}
	}
	private updateTicker () {
		this.updateRequired = false;
		PIXI.Ticker.shared.remove(this.updateTickFn);
		this.UpdateTexture();
		this.emit("update");
	}

	/** Font that can draw `char`, `undefined` while loading, `null` if no family can draw it */
	private resolveFont (families: string[], weight: number, char: string): Font | null | undefined {
		for (const family of families) {
			const font = FontGet(family, weight, char);
			if (font instanceof Promise) {
				font.then(() => this.markUpdateRequire());
				return undefined; // wait for higher priority family
			}
			if (font) return font;
		}
		return null;
	}

	/** Shape `text` into glyphs, returns span-relative glyphs and its width in px */
	private shape (
		families: string[],
		text: string,
		weight: number,
		fontSize: number,
		letterSpacing: number,
	): { glyphs: LayoutGlyph[]; width: number; } {
		// split into segments drawable by the same font
		const segments: Array<{ font: Font | null; text: string; }> = [];
		for (const c of text) {
			let font = this.resolveFont(families, weight, c);
			let ch = c;
			if (font === null) {
				font = this.resolveFont(families, weight, FALLBACK_CHAR);
				ch = FALLBACK_CHAR;
			}

			const _font = font ?? null; // `null`: loading or not drawable, placeholder
			const last = segments[segments.length - 1];
			if (last && last.font === _font && _font !== null)
				last.text += ch;
			else
				segments.push({ font: _font, text: ch });
		}

		const glyphs: LayoutGlyph[] = [];
		let x = 0;
		segments.forEach(seg => {
			if (!seg.font) { // placeholder while loading
				x += (fontSize / 2 + letterSpacing) * [...seg.text].length;
				return;
			}

			const font = FontVariant(seg.font, weight);
			const scale = fontSize / font.unitsPerEm;
			const run = font.layout(seg.text);
			run.glyphs.forEach((glyph, i) => {
				const pos = run.positions[i];
				glyphs.push({
					font,
					glyph,
					x: x + pos.xOffset * scale,
					y: -pos.yOffset * scale,
				});
				x += pos.xAdvance * scale + letterSpacing;
			});
		});
		return { glyphs, width: x };
	}

	private UpdateTexture (): void {
		this.clearSprite();

		if (!this._text) {
			this.emit("update");
			return;
		}

		const families = [
			this._style?.fontFamily,
			...FontPriority,
		]
			.filter((r): r is string => !!r)
			.reduce<string[]>((p, c) => p.includes(c) ? p : [...p, c], []);

		const fontSize = this._style?.fontSize ?? 14;
		const fontWeight = this._style?.fontWeight ?? 400;
		const letterSpacing = this._style?.letterSpacing ?? 1.0;
		const lineHeight = this._style?.lineHeight ?? 1.2;
		const strokeWidth = this._style?.strokeWidth ?? 0;
		const stroke = this._style?.stroke;
		const wrapWidth = this._style?.wrapWidth ?? 0;

		const _base = (stroke && strokeWidth) || 0;
		const lineAdvance = fontSize * lineHeight;

		// layout
		const spans: LayoutSpan[] = [];
		let x = _base;
		let y = _base;
		let right = 0;

		ParseFormattedText(this._text).forEach(run => {
			const weight = run.bold ? 700 : fontWeight;
			const fill = run.color ? `#${run.color}` : (this._style?.fill || "#fff");

			[...findSpans(run.text)]
				.map(s => s.text)
				.forEach(text => {
					if (text === "\n") {
						x = _base;
						y += lineAdvance;
						return;
					}

					const shaped = this.shape(families, text, weight, fontSize, letterSpacing);
					if (wrapWidth > 0 && x + shaped.width > wrapWidth) {
						x = _base;
						y += lineAdvance;
					}
					if (x === _base && /^\s+$/.test(text)) return; // no leading whitespace on new line

					spans.push({ glyphs: shaped.glyphs, fill, x, y });
					x += shaped.width;
					right = Math.max(right, x + _base);
				});
		});

		const bottom = y + lineAdvance + _base * 2;

		// draw
		const canvas = document.createElement("canvas");
		canvas.width = Math.max(1, Math.ceil(right + _base));
		canvas.height = Math.max(1, Math.ceil(bottom));

		const ctx = canvas.getContext("2d")!;
		if (this._style?.shadowColor) ctx.shadowColor = this._style.shadowColor;
		if (this._style?.shadowBlur) ctx.shadowBlur = this._style.shadowBlur;
		if (this._style?.shadowOffsetX) ctx.shadowOffsetX = this._style.shadowOffsetX;
		if (this._style?.shadowOffsetY) ctx.shadowOffsetY = this._style.shadowOffsetY;

		const drawGlyphs = (fn: (span: LayoutSpan, scale: number) => void) => {
			spans.forEach(span => {
				const baseline = span.y + fontSize; // baseline at 1em from line top
				span.glyphs.forEach(g => {
					const scale = fontSize / g.font.unitsPerEm;

					ctx.save();
					ctx.translate(span.x + g.x, baseline + g.y);
					ctx.scale(scale, -scale); // font units are y-up
					ctx.beginPath();
					g.glyph.path.toFunction()(ctx);
					fn(span, scale);
					ctx.restore();
				});
			});
		};

		// outline pass first, so outlines never cover neighbor glyphs' fill
		if (stroke && strokeWidth > 0) {
			ctx.strokeStyle = stroke;
			ctx.lineJoin = "round";
			drawGlyphs((_, scale) => {
				ctx.lineWidth = strokeWidth * 2 / scale;
				ctx.stroke();
			});
		}

		drawGlyphs(span => {
			ctx.fillStyle = span.fill;
			ctx.fill();
		});

		const sp = new PIXI.Sprite(PIXI.Texture.from(canvas));
		sp.roundPixels = true;
		this.addChild(sp);
		this._sprite = sp;

		// align
		const _align = this._style?.align ?? "LT";
		const [_g_w, _g_h] = [right, Math.max(this._text_height, bottom)];
		this._text_height = _g_h;
		switch (_align[0]) {
			case "L": this.pivot.x = 0; break;
			case "C": this.pivot.x = _g_w / 2; break;
			case "R": this.pivot.x = _g_w; break;
		}
		switch (_align[1]) {
			case "T": this.pivot.y = 0; break;
			case "C": this.pivot.y = _g_h / 2; break;
			case "B": this.pivot.y = _g_h; break;
		}

		this.emit("update");
	}
}
