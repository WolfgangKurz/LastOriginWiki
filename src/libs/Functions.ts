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

export function UpdateTitle (title: string | string[]) {
	if (typeof title === "string")
		document.title = [title, "멸망 전의 전술 교본"].join(" - ");
	else
		document.title = [...title, "멸망 전의 전술 교본"].join(" - ");
}
