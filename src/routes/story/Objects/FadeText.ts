import * as PIXI from "pixi.js";

import { findSpans } from "unicode-default-word-boundary";

export default class FadeText extends PIXI.Sprite {
	private _text: string | undefined;
	public get text () {
		return this._text;
	}
	public set text (value: typeof this._text) {
		this._text = value;
		this.UpdateTexture();
	}

	private _style: PIXI.HTMLTextStyle | PIXI.TextStyle | Partial<PIXI.ITextStyle> | undefined;
	public get style () {
		return this._style;
	}
	public set style (value: typeof this._style) {
		this._style = value;
		this.UpdateTexture();
	}

	private canvas: HTMLCanvasElement | null = null;
	private measurerContainer: HTMLDivElement | null = null;

	private BindedFontLoadEvent = this.FontLoadEvent.bind(this);

	constructor (text?: string, style?: PIXI.HTMLTextStyle | PIXI.TextStyle | Partial<PIXI.ITextStyle>) {
		super();
		this._text = text;
		this._style = style;
		this.roundPixels = true;

		this.UpdateTexture();
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		const _doc_fonts = document.fonts as FontFaceSet;
		_doc_fonts.removeEventListener("loadingdone", this.BindedFontLoadEvent);

		super.destroy(options || true);
		if (this.canvas) this.canvas.remove();
		if (this.measurerContainer) this.measurerContainer.remove();
	}

	private FontLoadEvent (e: FontFaceSetLoadEvent) {
		if (this.style && this.style.fontFamily) { // target font loaded
			const parseFontFamily = (text: string | string[]): string[] => {
				if (Array.isArray(text)) return text;

				const list: string[] = [];
				let buffer = "";
				let quote = 0;
				let require = "";
				for (const c of text) {
					if (quote === 0) {
						if (require) {
							if (c !== require && c !== " ")
								throw new Error("'" + require + "' expected, but found '" + c + "'");
							else
								require = "";
						}

						if (c === "'") {
							quote = 1;
							continue;
						} else if (c === "\"") {
							quote = 2;
							continue;
						}

						if (c === ",") {
							list.push(buffer);
							buffer = "";
							continue;
						}

						buffer += c;
						continue;
					}

					if ((quote === 1 && c === "'") || (quote === 2 && c === "\"")) {
						quote = 0;
						require = ",";
					} else if (quote !== 0)
						buffer += c;
				}

				if (quote !== 0)
					throw new Error("Quote " + (quote === 1 ? "'" : "\"") + " expected, but reach end");

				if (buffer.length > 0) list.push(buffer);

				return list.map(r => r.trim());
			};

			const families = parseFontFamily(this.style!.fontFamily ?? "sans-serif");
			if (e.fontfaces.some(r => families.includes(r.family)))
				this.UpdateTexture();
		}
	}

	private convertLineHeight (style: CSSStyleDeclaration): number {
		let mul = 1;
		if (style.lineHeight === "normal") mul = 1.2;

		return parseFloat(style.fontSize) * mul;
	}

	private UpdateTexture (): void {
		const _doc_fonts = document.fonts as FontFaceSet;

		if (this.texture) {
			const tex = this.texture;
			this.texture = null!;
			tex.destroy();
		}
		_doc_fonts.removeEventListener("loadingdone", this.BindedFontLoadEvent);

		if (!this._text) {
			this.texture = null!;
			return;
		}

		if (!this.canvas) {
			this.canvas = document.createElement("canvas");
			this.canvas.width = this.canvas.height = 1;
		}
		if (!this.measurerContainer) {
			this.measurerContainer = document.createElement("div");
			this.measurerContainer.className = "TextMeasurer";
			document.body.appendChild(this.measurerContainer);

			const midContainer = document.createElement("div");
			this.measurerContainer.appendChild(midContainer);

			const _measurer = document.createElement("div");
			_measurer.className = "Measurer";
			midContainer.appendChild(_measurer);
		}

		const measurer = this.measurerContainer.querySelector<HTMLDivElement>("div.Measurer")!;

		let hasStroke = false;

		const ctx = this.canvas.getContext("2d");
		if (!ctx) {
			console.warn("[FadeText] Cannot get 2d context from canvas");
			return;
		}

		if (this._style) {
			const s = this._style;

			if (s.stroke !== undefined && s.strokeThickness !== undefined)
				hasStroke = true;

			const font = [
				s.fontStyle,
				s.fontVariant,
				s.fontWeight,
				typeof s.fontSize === "number" ? s.fontSize + "px" : s.fontSize,
				s.lineHeight,
				s.fontFamily
			]
				.filter(r => r)
				.join(" ");

			if (s.fontFamily) {
				if (!Array.from(_doc_fonts).some(r => r.family === s.fontFamily))
					_doc_fonts.addEventListener("loadingdone", this.BindedFontLoadEvent);
			}

			//#region set measurer style
			measurer.style.font = font;

			if (s.wordWrap && s.wordWrapWidth)
				measurer.style.width = s.wordWrapWidth + "px";
			else
				measurer.style.width = "";

			measurer.style.whiteSpace = s.whiteSpace ?? "normal";
			measurer.style.textAlign = s.align ?? "";
			//#endregion
		}

		// resizing canvas will reset context styles
		// so apply context style after change canvas size

		measurer.innerHTML = this._text.replace(/\0[^\0]+\0([^\0]+)\0/gs, "$1");

		const b = hasStroke ? this._style!.strokeThickness! : 0;
		const w = measurer.clientWidth + b * 4; // padding 10px
		const h = measurer.clientHeight + b * 4;
		const _h = this.convertLineHeight(window.getComputedStyle(measurer));

		this.canvas!.width = w;
		this.canvas!.height = h;
		ctx.translate(-0.5, -0.5);

		if (this._style) {
			const s = this._style;

			//#region set canvas style
			ctx.font = measurer.style.font;

			if (typeof s.fill === "number") {
				const r = s.fill & 0xFF;
				const g = (s.fill >> 8) & 0xFF;
				const b = (s.fill >> 16) & 0xFF;
				const a = ((s.fill >> 24) & 0xFF) / 0xFF; // 0.0 ~ 1.0
				if (a > 0)  // has alpha
					ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
				else
					ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
			} else if (Array.isArray(s.fill)) {
				if (s.fill.length > 0) {
					s.fill.map((f: string | number) => {
						if (typeof f === "number") {
							const r = f & 0xFF;
							const g = (f >> 8) & 0xFF;
							const b = (f >> 16) & 0xFF;
							const a = ((f >> 24) & 0xFF) / 0xFF; // 0.0 ~ 1.0
							if (a > 0) // has alpha
								return `rgba(${r}, ${g}, ${b}, ${a})`;
							else
								return `rgb(${r}, ${g}, ${b})`;
						} else
							return f;
					});
				}
			} else if (s.fill)
				ctx.fillStyle = s.fill;

			if (typeof s.stroke === "number") {
				const r = s.stroke & 0xFF;
				const g = (s.stroke >> 8) & 0xFF;
				const b = (s.stroke >> 16) & 0xFF;
				const a = ((s.stroke >> 24) & 0xFF) / 0xFF; // 0.0 ~ 1.0
				if (a > 0)  // has alpha
					ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
				else
					ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
			} else if (s.stroke)
				ctx.strokeStyle = s.stroke;

			if (s.strokeThickness) ctx.lineWidth = s.strokeThickness;

			if (s.align && s.align !== "justify") ctx.textAlign = s.align;
			ctx.textBaseline = s.textBaseline ?? "ideographic";
			//#endregion
		}

		this.width = w;
		this.height = h;

		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";

		ctx.clearRect(0, 0, w, h);

		let x = b, y = b + _h;
		// \0 type \0 param \0 content \0
		this._text.split(/(\0[^\0]+\0[^\0]+\0[^\0]+\0)/gs)
			.forEach(p => {
				ctx.save();

				let text = p;
				if (p[0] === "\0") { // formatted
					const r = (/\0([^\0]+)\0([^\0]+)\0([^\0]+)\0/gs).exec(p);
					if (r) {
						text = r[3];

						switch (r[1]) {
							case "color":
								ctx.fillStyle = `#${r[2]}`;
								break;
						}
					}
				}

				[...findSpans(text)]
					.map(s => s.text)
					.forEach(s => {
						const _w = ctx.measureText(s).width;
						if ((x + _w > w) || (s === "\n")) {
							x = b;
							y += _h * 1.2;
						}

						if (_w === 0) return;

						ctx.save();
						if (hasStroke) {
							ctx.fillStyle = ctx.strokeStyle;

							for (let i = -ctx.lineWidth; i <= ctx.lineWidth; i++) {
								for (let j = -ctx.lineWidth; j <= ctx.lineWidth; j++) {
									ctx.fillText(s, x + i, y + j);
								}
							}
							// ctx.strokeText(s, x, y);
						}
						ctx.restore();

						ctx.fillText(s, x, y);

						if (x !== b || ![" ", "\t", "\n"].includes(s))
							x += _w;
					});

				ctx.restore();
			});

		this.texture = PIXI.Texture.from(this.canvas!);
	}

	//#region part of FadeSprite
	private _fading: boolean = false;
	public get fading () {
		return this._fading;
	}

	public stopFade () {
		this._fading = false;
	}

	/** `duration` in secs */
	public fadeIn (duration: number = 3.0) {
		if (this._fading) return; // no fading on same time

		this.alpha = 0;

		const ticker = PIXI.Ticker.shared;
		const onTick = (dt: number) => {
			const secs = dt / PIXI.Ticker.targetFPMS / 1000;
			this.alpha += secs / duration;

			if (this.alpha >= 1 || !this._fading) {
				this._fading = false;
				ticker.remove(onTick);
				this.alpha = 1;
			}
		};

		this._fading = true;
		ticker.add(onTick);
	}

	/** `duration` in secs */
	public fadeOut (duration: number = 3.0) {
		if (this._fading) return; // no fading on same time

		this.alpha = 1;

		const ticker = PIXI.Ticker.shared;
		const onTick = (dt: number) => {
			const secs = dt / PIXI.Ticker.targetFPMS / 1000;
			this.alpha -= secs / duration;

			if (this.alpha <= 0 || !this._fading) {
				this._fading = false;
				ticker.remove(onTick);
				this.alpha = 0;
			}
		};

		this._fading = true;
		ticker.add(onTick);
	}
	//#endregion
}
