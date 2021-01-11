import { SetMeta } from "@/libs/Meta";

export function FormatNumber (num: number): string {
	if (num === 0) return num.toString();

	const reg = /(^[+-]?\d+)(\d{3})/;
	let n = num.toString();
	while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

	return n;
}

export function ArrayUnique<T, K> (source: T[]): T[];
export function ArrayUnique<T, K> (source: T[], comparer: (entity: T) => K): T[];
export function ArrayUnique<T, K> (source: T[], comparer?: (entity: T) => K): T[] {
	if (comparer) {
		interface KeyValuePair {
			key: K;
			value: T;
		}

		return source
			.reduce((acc, cur) => {
				const key = comparer(cur);
				if (!acc.some(x => x.key === key)) {
					acc.push({
						key: key,
						value: cur,
					});
				}
				return acc;
			}, [] as KeyValuePair[])
			.map(x => x.value);
	} else {
		return source.reduce((acc, cur) => {
			if (!acc.includes(cur)) acc.push(cur);
			return acc;
		}, [] as T[]);
	}
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

export function First<T> (value: T | T[]): T {
	if (!Array.isArray(value)) return value;
	return value[0];
}
export function Last<T> (value: T | T[]): T {
	if (!Array.isArray(value)) return value;
	return value[value.length - 1];
}

let uniqueCounter = 0;
export function UniqueID (prefix?: string) {
	++uniqueCounter;
	return prefix ? `${prefix}${uniqueCounter}` : uniqueCounter.toString();
}

export function UpdateTitle (...title: string[]) {
	document.title = [...title, "멸망 전의 전술 교본"].join(" - ");
	SetMeta(["twitter:title", "og:title"], document.title);
}
