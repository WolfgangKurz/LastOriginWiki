import { ObjectState } from "./State";

export function getCookie (name: string, def?: string): string | undefined {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return (parts.pop() as string)
			.split(";")
			.shift();
	}
	return def;
}

export function FormatNumber (num: number): string {
	if (num === 0) return num.toString();

	const reg = /(^[+-]?\d+)(\d{3})/;
	let n = num.toString();
	while (reg.test(n)) n = n.replace(reg, "$1,$2");

	return n;
}

export function FormatDate (timestamp: number | Date): string {
	let date = timestamp;
	if (typeof date === "number")
		date = new Date(date);

	return [
		date.getUTCFullYear(),
		(date.getUTCMonth() + 1).toString().padStart(2, "0"),
		date.getUTCDate().toString().padStart(2, "0"),
	].join("-");
}

export function ToOrdinal (num: number): string {
	// 11, 12, 13 ...
	if (Math.floor(num / 10) === 1) return `${num}th`;

	const v = num % 10;
	if (v === 1) return `${num}st`;
	if (v === 2) return `${num}nd`;
	if (v === 3) return `${num}rd`;
	return `${num}th`;
}

export function ChangeImage (ext: string): void {
	if (!["png", "webp"].includes(ext)) ext = "webp";
	document.cookie = `LO_IMGEXT=${ext}; path=/`;
	window.location.reload();
}

export function Extend (): void {
	if (!Array.prototype.gap) {
		Array.prototype.gap = function <T> (this: T[], e: T): T[] {
			const ret: T[] = [];
			this.forEach((x, i) => {
				if (i > 0) ret.push(e);
				ret.push(x);
			});
			return ret;
		};
	}

	if (!Array.prototype.unique) {
		Array.prototype.unique = function <T, K> (this: T[], comparer?: (entity: T) => K): T[] {
			if (comparer) {
				interface KeyValuePair {
					key: K;
					value: T;
				}
				return this
					.reduce((acc, cur) => {
						const key = comparer(cur);
						if (!acc.some(x => x.key === key))
							acc.push({ key, value: cur });
						return acc;
					}, [] as KeyValuePair[])
					.map(x => x.value);
			}
			return this.reduce((acc, cur) => {
				if (!acc.includes(cur)) acc.push(cur);
				return acc;
			}, [] as T[]);
		};
	}

	if (!Array.prototype.least) {
		Array.prototype.least = function <T> (this: T[], length: number): Array<T | undefined> {
			const t: Array<T | undefined> = [...this];
			while (t.length < length) t.push(undefined);
			return t;
		};
	}
}

export function map<T, K extends string, U> (object: object, callbackfn: (value: T, index: K, object: any) => U, thisArg?: any): U[] {
	return Object.getOwnPropertyNames(object)
		.map(k => callbackfn((object as any)[k], k as K, object));
}

export function isActive<T> (value: boolean | ObjectState<T>): "active" | "";
export function isActive<T> (value: boolean | ObjectState<T>, active: string, inactive: string): "active" | "" | string;
export function isActive<T> (value: boolean | ObjectState<T>, active?: string, inactive?: string): "active" | "" | string {
	if (typeof value === "boolean") {
		return value
			? (typeof active === "undefined" ? "active" : active)
			: (typeof inactive === "undefined" ? "" : inactive);
	}

	return value.value
		? (typeof active === "undefined" ? "active" : active)
		: (typeof inactive === "undefined" ? "" : inactive);
}

export function ArrayElse<T> (list: T[], t: (x: T[]) => preact.VNode, f: preact.VNode): preact.VNode {
	if (list && list.length > 0) return t(list);
	return f;
}

let uniqueCounter = 0;
export function UniqueID (prefix?: string): string {
	++uniqueCounter;
	return prefix
		? `${prefix}${uniqueCounter}`
		: `unique-${uniqueCounter}`;
}

export function groupBy<K extends keyof any, T> (data: T[], selector: (value: T, index: number) => K): Record<K, T[]>;
export function groupBy<K extends keyof any, T> (data: Record<K, T>, selector: (value: T, index: K) => K): Record<K, T[]>;
export function groupBy<K extends keyof any, T> (
	data: T[] | Record<K, T>,
	selector: ((value: T, index: number) => K) | ((value: T, index: string) => K),
): Record<K, T[]> {
	const ret = {} as Record<K, T[]>;
	if (Array.isArray(data)) {
		data.forEach((v, i) => {
			const key = (selector as (value: T, index: number) => K)(v, i);
			if (!(key in ret)) ret[key] = [];
			ret[key].push(v);
		});
	} else {
		(Object.keys(data) as K[])
			.forEach(k => {
				const key = (selector as (value: T, index: K) => K)(data[k], k);
				if (!(key in ret)) ret[key] = [];
				ret[key].push(data[k]);
			});
	}
	return ret;
}

export function diff2<T extends object, K extends object> (A: T, B: K): boolean {
	if (typeof A !== typeof B) return true;
	const aA = Array.isArray(A);
	const aB = Array.isArray(B);
	if (aA !== aB) return true;

	if (aA && aB) {
		// B also array
		if (A.length !== B.length) return true;

		for (let i = 0; i < A.length; i++)
			if (!diff2(A[i], B[i]))
				return true;

		return false;
	}

	const kA = Object.keys(A);
	const kB = Object.keys(B);
	if (kA.length !== kB.length) return true;

	for (let i = 0; i < kA.length; i++) {
		const kAi = A[kA[i]];
		const kBi = B[kB[i]];

		if (!diff2(kAi, kBi)) return true;
	}
	return false;
}

export interface Hangul {
	initial: string;
	medial: string;
	final: string;
}
export function DecomposeHangulSyllable (char: string): Hangul {
	const initials = [
		"ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
		"ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
	];
	const medials = [
		"ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ",
		"ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ",
	];
	const finals = [
		"", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ",
		"ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ",
		"ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
	];

	const begin = 0xAC00;
	const end = begin + initials.length * medials.length * finals.length;
	let code = char.charCodeAt(0);

	let initial: string = "";
	let medial: string = "";
	let final: string = "";

	if (begin <= code && code < end) {
		code -= begin;

		final = finals[code % finals.length];
		code = Math.floor(code / finals.length);

		medial = medials[code % medials.length];
		code = Math.floor(code / medials.length);

		initial = initials[code];
	}

	return {
		initial,
		medial,
		final,
	};
}
