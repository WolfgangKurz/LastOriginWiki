import opentype from "opentype.js";

import woff2dec from "@/external/woff2/woff2dec";

type FontUnicodeRange = number | [from: number, to: number];

type FontNonWeighted = string | opentype.Font;
type FontNonWeightedSubset = {
	ranges: FontUnicodeRange[],
	font: string | opentype.Font, // not loaded when string (lazy-load)
};
type FontWeighted = {
	[weight: number]: FontNonWeighted;
};
type FontWeightedDynamicSubset = {
	[weight: number]: FontNonWeightedSubset[];
};

type FontMap = {
	[family: string]: FontNonWeighted | FontNonWeightedSubset[] | FontWeighted | FontWeightedDynamicSubset;
};

const _font_priority = ["IBM Plex Sans KR", "Pretendard JP Variable", "Pretendard Variable"];
export const FontPriority = _font_priority;

const _font_callbacks: Record<string, Array<() => void>> = {};
const _font_map: FontMap = {};

const _font_ready_promise: Array<() => void> = [];
let _font_ready = false;

const _font_source = {
	"IBM Plex Sans KR": "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap",
	"Pretendard Variable": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css",
	"Pretendard JP Variable": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css",
};
const _font_except_chars: Record<string, string[]> = {
	"IBM Plex Sans KR": ["中"],
};
const _font_list = ["IBM Plex Sans KR", "Pretendard Variable", "Pretendard JP Variable"];
Promise.all(
	_font_list
		.map(k => _font_source[k])
		.map(url => fetch(url)
			.then(r => r.text())
			.then(r => {
				const cssReg = /@font-face ?{([^}]+)}/g;
				const _matches: string[] = [];
				{
					let m: RegExpExecArray | null;
					while (m = cssReg.exec(r))
						_matches.push(m[1]);
				}

				_matches.forEach(async _m => {
					const name = (
						/\bfont-family:[ \t]*['"]([^'"]+)['"];/.exec(_m) ||
						/\bfont-family:[ \t]*['"]([^'"]+)['"]$/.exec(_m)
					)![1];
					const _weight = (
						/\bfont-weight:[ \t]*([^;]+);/.exec(_m) ||
						/\bfont-weight:[ \t]*([^;]+)$/.exec(_m)
					)![1].trim();
					let weight: number;
					if (_weight.includes(" "))// variable
						weight = 0;
					else
						weight = parseInt(_weight, 10);

					const src = /\bsrc:[ \t]*url\(([^)]+)\)/.exec(_m)![1];

					const _range = /\bunicode-range:[ \t]*([^;]+);/.exec(_m) ||
						/\bunicode-range:[ \t]*([^;]+)$/.exec(_m);
					const ranges: FontUnicodeRange[] = [];
					if (_range) {
						_range[1].split(",")
							.map(rg => rg.trim())
							.forEach(rg => {
								if (rg.startsWith("U+")) {
									rg = rg.substring(2);
									if (rg.includes("-")) // ranged
										ranges.push(rg.split("-").map(x => parseInt(x, 16)) as [number, number]);
									else // single char
										ranges.push(parseInt(rg, 16));
								} else if (/^[0-9]+$/.test(rg))
									ranges.push(parseInt(rg, 10));
								else
									throw new Error("not implemented unicode-range format [" + rg + "]");
							});
					}

					if (ranges.length > 0) { // dynamic-subset
						if (weight === 0) { // variable
							_font_map[name] ||= [];

							const ranged = _font_map[name] as FontNonWeightedSubset[];
							ranged.push({ ranges, font: src });
						} else { // specific weight
							_font_map[name] ||= {};

							const subset = _font_map[name] as FontWeightedDynamicSubset;
							subset[weight] ||= [];
							subset[weight].push({ ranges, font: src });
						}
					} else { // static-subset
						if (weight === 0) // variable
							_font_map[name] = src;
						else { // specific weight
							_font_map[name] ||= {};
							_font_map[name][weight] = src;
						}
					}
				});
			})
		),
).then(() => {
	_font_ready = true;
	_font_ready_promise.forEach(fn => fn());
	_font_ready_promise.splice(0, _font_ready_promise.length);
});

function charAvailableForFont (family: string, font: opentype.Font, char: string): boolean {
	if (family in _font_except_chars && _font_except_chars[family].includes(char)) return false;
	return font.hasChar(char);
}

export function FontGet (family: string, weight: number, char: string): opentype.Font | null | Promise<opentype.Font | null> {
	if (!_font_ready) {
		return new Promise<opentype.Font | null>(resolve => {
			_font_ready_promise.push(() => resolve(FontGet(family, weight, char)));
		});
	}

	if (!(family in _font_map)) return null;

	const _font = _font_map[family];

	if (_font instanceof opentype.Font) { // already loaded, variable weight, static-subset
		if (charAvailableForFont(family, _font, char)) return _font;
		return null;
	} else if (typeof _font === "string") { // need to load, variable weight, static-subset
		if (family in _font_callbacks) {
			return new Promise(resolve => {
				_font_callbacks[family].push(() => {
					const font = _font_map[family] as opentype.Font;
					if (charAvailableForFont(family, font, char)) resolve(font);
					else resolve(null);
				});
			});
		}

		_font_callbacks[family] = [];
		return fetch(new URL(_font, _font_source[family]).href)
			.then(r => r.arrayBuffer())
			.then(r => {
				if (_font.endsWith(".woff2"))
					return woff2dec(new Uint8Array(r)).then(d => d.buffer);
				return r;
			})
			.then(r => {
				const font = opentype.parse(r);
				_font_map[family] = font;
				_font_callbacks[family].forEach(fn => fn());
				delete _font_callbacks[family];

				if (charAvailableForFont(family, font, char)) return font;
				return null;
			})
			.catch(e => null);
	}

	else if (Array.isArray(_font)) { // variable weight, dynamic-subset
		const c = char.charCodeAt(0);

		const _subset_index = _font.findIndex(subset => {
			const ranges = subset.ranges;
			return ranges.some(range => {
				if (typeof range === "number")
					return c === range;
				return c >= range[0] && c <= range[1];
			});
		});
		if (_subset_index < 0) return null;

		const _key = `${family}.${_subset_index}`;

		const _subset = _font[_subset_index];
		const __font = _subset.font;

		if (__font instanceof opentype.Font) { // already loaded, not variable, single font
			if (charAvailableForFont(family, __font, char)) return __font;
			return null;
		} else { // need to load, variable weight, static-subset
			if (_key in _font_callbacks) {
				return new Promise(resolve => {
					_font_callbacks[_key].push(() => {
						const subsets = _font_map[family] as FontNonWeightedSubset[];
						const font = subsets[_subset_index].font as opentype.Font;
						if (charAvailableForFont(family, font, char)) resolve(font);
						else resolve(null);
					});
				});
			}

			_font_callbacks[_key] = [];
			return fetch(new URL(__font, _font_source[family]).href)
				.then(r => r.arrayBuffer())
				.then(r => {
					if (__font.endsWith(".woff2"))
						return woff2dec(new Uint8Array(r)).then(d => d.buffer);
					return r;
				})
				.then(r => {
					const font = opentype.parse(r);

					const subsets = _font_map[family] as FontNonWeightedSubset[];
					subsets[_subset_index].font = font;

					_font_callbacks[_key].forEach(fn => fn());
					delete _font_callbacks[_key];

					if (charAvailableForFont(family, font, char)) return font;
					return null;
				})
				.catch(e => null);
		}
	}

	else { // specific weight
		const subsets = _font[weight];
		if (!Array.isArray(subsets)) { // static-subset
			const __font = subsets;
			if (__font instanceof opentype.Font) {
				if (charAvailableForFont(family, __font, char)) return __font;
				return __font;
			} else {
				const _key = `${family}:${weight}`;
				if (_key in _font_callbacks) {
					return new Promise(resolve => {
						_font_callbacks[_key].push(() => {
							const font = _font[weight] as opentype.Font;
							if (charAvailableForFont(family, font, char)) resolve(font);
							else resolve(null);
						});
					});
				}

				_font_callbacks[_key] = [];
				return fetch(new URL(__font, _font_source[family]).href)
					.then(r => r.arrayBuffer())
					.then(r => {
						if (__font.endsWith(".woff2"))
							return woff2dec(new Uint8Array(r)).then(d => d.buffer);
						return r;
					})
					.then(r => {
						const font = opentype.parse(r);
						_font[weight] = font;

						_font_callbacks[_key].forEach(fn => fn());
						delete _font_callbacks[_key];

						if (charAvailableForFont(family, font, char)) return font;
						return font;
					})
					.catch(e => null);
			}
		} else { // dynamic-subset
			const c = char.charCodeAt(0);

			const _subset_index = subsets.findIndex(subset => {
				const ranges = subset.ranges;
				return ranges.some(range => {
					if (typeof range === "number")
						return c === range;
					return c >= range[0] && c <= range[1];
				});
			});
			if (_subset_index < 0) return null;

			const _key = `${family}:${weight}.${_subset_index}`;

			const _subset = subsets[_subset_index];
			const __font = _subset.font;

			if (__font instanceof opentype.Font) { // already loaded, not variable, single font
				if (charAvailableForFont(family, __font, char)) return __font;
				return null;
			} else { // need to load, variable weight, static-subset
				if (_key in _font_callbacks) {
					return new Promise(resolve => {
						_font_callbacks[_key].push(() => {
							const subsets = _font_map[family][weight] as FontNonWeightedSubset[];
							const font = subsets[_subset_index].font as opentype.Font;
							if (charAvailableForFont(family, font, char)) resolve(font);
							else resolve(null);
						});
					});
				}

				_font_callbacks[_key] = [];
				return fetch(new URL(__font, _font_source[family]).href)
					.then(r => r.arrayBuffer())
					.then(r => {
						if (__font.endsWith(".woff2"))
							return woff2dec(new Uint8Array(r)).then(d => d.buffer);
						return r;
					})
					.then(r => {
						const font = opentype.parse(r);

						const subsets = _font_map[family][weight] as FontNonWeightedSubset[];
						subsets[_subset_index].font = font;

						_font_callbacks[_key].forEach(fn => fn());
						delete _font_callbacks[_key];

						if (charAvailableForFont(family, font, char)) return font;
						return font;
					})
					.catch(e => null);
			}
		}
	}
};
