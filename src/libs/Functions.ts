import { ObjectState } from "./State";

export function getCookie (name: string): string | undefined {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return (parts.pop() as string)
			.split(";")
			.shift();
	}
}

export function FormatNumber (num: number): string {
	if (num === 0) return num.toString();

	const reg = /(^[+-]?\d+)(\d{3})/;
	let n = num.toString();
	while (reg.test(n)) n = n.replace(reg, "$1,$2");

	return n;
}

export function ChangeImage (ext: string): void {
	if (!["png", "webp"].includes(ext)) ext = "webp";
	document.cookie = `LO_IMGEXT=${ext}; path=/`;
	window.location.reload(true);
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
	if (typeof value === "boolean") return value ? active || "active" : inactive || "";
	return value.value ? active || "active" : inactive || "";
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

export function groupBy<K extends keyof any, T> (data: T[] | Record<K, T>, selector: (value: T) => K): Record<K, T[]> {
	const ret = {} as Record<K, T[]>;
	if (Array.isArray(data)) {
		data.forEach(v => {
			const key = selector(v);
			if (!(key in ret)) ret[key] = [];
			ret[key].push(v);
		});
	} else {
		(Object.keys(data) as K[])
			.forEach(k => {
				const key = selector(data[k]);
				if (!(key in ret)) ret[key] = [];
				ret[key].push(data[k]);
			});
	}
	return ret;
}
