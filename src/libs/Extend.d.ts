export { };

declare global {
	export interface Array<T> {
		gap<K> (this: T[], e: K): Array<T | K>;

		unique<K> (this: T[],): T[];
		unique<K> (this: T[], comparer: (entity: T) => K): T[];

		least (this: T[], length: number): Array<T | undefined>;

		filter (predicate: (value: T, index: number, array: T[]) => boolean, thisArg?: any): NonNullable<T>[];
	}

	// export interface Object {
	// 	map<T, K extends string, U> (callbackfn: (value: T, index: K, object: this) => U, thisArg?: any): U[];
	// }
}
