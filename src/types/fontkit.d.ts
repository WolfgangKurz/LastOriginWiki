// Minimal type declarations for fontkit 3 (modular entry points), covering what this project uses.

declare module "fontkit/core" {
	export interface PathCommand {
		command: "moveTo" | "lineTo" | "quadraticCurveTo" | "bezierCurveTo" | "closePath";
		args: number[];
	}

	export interface Path {
		commands: PathCommand[];
		toFunction (): (ctx: CanvasRenderingContext2D) => void;
	}

	export interface Glyph {
		id: number;
		codePoints: number[];
		path: Path;
		advanceWidth: number;
	}

	export interface GlyphPosition {
		xAdvance: number;
		yAdvance: number;
		xOffset: number;
		yOffset: number;
	}

	export interface GlyphRun {
		glyphs: Glyph[];
		positions: GlyphPosition[];
		advanceWidth: number;
	}

	export interface VariationAxis {
		name: string;
		min: number;
		default: number;
		max: number;
	}

	export interface Font {
		familyName: string;
		subfamilyName: string;
		unitsPerEm: number;
		ascent: number;
		descent: number;
		variationAxes: Record<string, VariationAxis>;

		hasGlyphForCodePoint (codePoint: number): boolean;
		layout (text: string, features?: string[] | Record<string, boolean>): GlyphRun;
		getVariation (settings: Record<string, number> | string): Font;
	}

	export function create (buffer: Uint8Array, postscriptName?: string): Font;
	export function registerFormat (format: unknown): void;
	export function registerShaper (shaper: unknown, scripts?: string[]): void;
}

declare module "fontkit/formats/TTFFont" {
	export const TTFFont: unknown;
}
declare module "fontkit/formats/WOFF2Font" {
	export const WOFF2Font: unknown;
}
declare module "fontkit/shapers/HangulShaper" {
	export const HangulShaper: unknown;
}
