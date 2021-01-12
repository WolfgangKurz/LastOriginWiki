export type LazyDataType<T> = null | false | T;

export default function LazyLoad<T> (onFinally: (result: T[]) => void, ...loader: Array<(callback: (loaded: T) => void) => T | null>) {
	const ret: T[] = [];
	let count = 0;

	loader.forEach((l, i) => {
		const set = (d: T) => {
			ret[i] = d;

			count++;
			if (count === loader.length)
				onFinally(ret);
		};

		const p = l(d => set(d));
		if (p) set(p);
	});
}
