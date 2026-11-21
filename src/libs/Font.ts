import * as fontkit from "fontkit/core";
import { TTFFont } from "fontkit/formats/TTFFont";
import { WOFF2Font } from "fontkit/formats/WOFF2Font";
import { HangulShaper } from "fontkit/shapers/HangulShaper";

export type Font = fontkit.Font;
export type FontGlyph = fontkit.Glyph;

fontkit.registerFormat(TTFFont);
fontkit.registerFormat(WOFF2Font);
fontkit.registerShaper(HangulShaper);

export const FontPriority = [
	"IBM Plex Sans KR", "Pretendard JP Variable", "Pretendard Variable",
	"Noto Sans TC", "Noto Sans SC", "Noto Sans HK",
];

export const FontSource: Record<string, string> = {
	"IBM Plex Sans KR": "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap",
	"Pretendard Variable": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css",
	"Pretendard JP Variable": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css",
	"Noto Sans TC": "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap",
	"Noto Sans SC": "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap",
	"Noto Sans HK": "https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100..900&display=swap",
};

const FontExceptChars: Record<string, string[]> = {
	"IBM Plex Sans KR": ["中"],
};

type UnicodeRange = [from: number, to: number];

interface FontFaceEntry {
	/** `null` for variable weight face */
	weight: number | null;
	/** `null` when the face covers every character */
	ranges: UnicodeRange[] | null;
	url: string;

	font?: Font | null; // `null` when failed to load
	loading?: Promise<Font | null>;
}

const faces: Record<string, FontFaceEntry[]> = {};
let facesLoading: Promise<void> | null = null;
let facesReady = false;

function parseUnicodeRange (value: string): UnicodeRange[] {
	return value.split(",")
		.map(r => r.trim().replace(/^U\+/i, ""))
		.filter(r => r.length > 0)
		.map<UnicodeRange>(r => {
			if (r.includes("?")) { // wildcard, e.g. U+4??
				return [parseInt(r.replace(/\?/g, "0"), 16), parseInt(r.replace(/\?/g, "F"), 16)];
			}
			const [from, to] = r.split("-").map(x => parseInt(x, 16));
			return [from, to ?? from];
		});
}

function parseFontCss (css: string, base: string): FontFaceEntry[] {
	const ret: FontFaceEntry[] = [];
	for (const m of css.matchAll(/@font-face\s*{([^}]+)}/g)) {
		const body = m[1];

		const src = /\bsrc:\s*url\(\s*['"]?([^'")]+)['"]?\s*\)/.exec(body);
		if (!src) continue;

		const _weight = /\bfont-weight:\s*([^;]+)/.exec(body)?.[1].trim() ?? "400";
		const weight = /\s/.test(_weight) ? null : parseInt(_weight, 10); // "45 920" -> variable

		const _range = /\bunicode-range:\s*([^;]+)/.exec(body)?.[1];

		ret.push({
			weight,
			ranges: _range ? parseUnicodeRange(_range) : null,
			url: new URL(src[1], base).href,
		});
	}
	return ret;
}

function ensureFaces (): Promise<void> {
	if (facesLoading) return facesLoading;

	facesLoading = Promise.all(
		Object.entries(FontSource).map(([family, url]) => fetch(url)
			.then(r => {
				if (!r.ok) throw new Error(`Status ${r.status}`);
				return r.text();
			})
			.then(css => {
				faces[family] = parseFontCss(css, url);
			})
			.catch(() => {
				faces[family] = [];
			})),
	).then(() => {
		facesReady = true;
	});
	return facesLoading;
}

function loadFace (face: FontFaceEntry): Promise<Font | null> {
	if (face.loading) return face.loading;

	face.loading = fetch(face.url)
		.then(r => {
			if (!r.ok) throw new Error(`Status ${r.status}`);
			return r.arrayBuffer();
		})
		.then(buf => fontkit.create(new Uint8Array(buf)))
		.catch(() => null)
		.then(font => {
			face.font = font;
			return font;
		});
	return face.loading;
}

function faceCovers (face: FontFaceEntry, code: number): boolean {
	if (!face.ranges) return true;
	return face.ranges.some(([from, to]) => code >= from && code <= to);
}

/** Static face of the closest weight, or variable face */
function pickFaces (family: string, weight: number): FontFaceEntry[] {
	const list = faces[family] || [];
	const variable = list.filter(f => f.weight === null);
	if (variable.length > 0) return variable;

	const weights = [...new Set(list.map(f => f.weight!))];
	if (weights.length === 0) return [];

	const closest = weights.reduce((p, c) => Math.abs(c - weight) < Math.abs(p - weight) ? c : p);
	return list.filter(f => f.weight === closest);
}

function charAvailable (family: string, font: Font, char: string): boolean {
	if (FontExceptChars[family]?.includes(char)) return false;
	return font.hasGlyphForCodePoint(char.codePointAt(0)!);
}

/**
 * Get font of `family` that can draw `char` at `weight`.
 * Returns `Promise` when the font is not loaded yet, `null` when not drawable with this family.
 * For variable fonts, apply weight with `FontVariant`.
 */
export function FontGet (family: string, weight: number, char: string): Font | null | Promise<Font | null> {
	if (!facesReady)
		return ensureFaces().then(() => FontGet(family, weight, char));

	const code = char.codePointAt(0)!;
	const face = pickFaces(family, weight).find(f => faceCovers(f, code));
	if (!face) return null;

	if (face.font !== undefined)
		return face.font && charAvailable(family, face.font, char) ? face.font : null;

	return loadFace(face)
		.then(font => font && charAvailable(family, font, char) ? font : null);
}

const variantCache = new WeakMap<Font, Map<number, Font>>();
/** Font instance at `weight` (variable fonts), or font itself (static fonts) */
export function FontVariant (font: Font, weight: number): Font {
	const axis = font.variationAxes?.wght;
	if (!axis) return font;

	let map = variantCache.get(font);
	if (!map) {
		map = new Map();
		variantCache.set(font, map);
	}

	let v = map.get(weight);
	if (!v) {
		v = font.getVariation({ wght: Math.max(axis.min, Math.min(axis.max, weight)) });
		map.set(weight, v);
	}
	return v;
}
