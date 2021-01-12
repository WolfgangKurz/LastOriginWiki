/**
 * `null` : Not requested
 * `false` : Loading
 * `T` : Loaded
 */
type DBCallback<T> = (data: T) => void;
const internalDB: Record<string, any | false | null> = {};
const callbackQueue: Record<string, DBCallback<any>[]> = {};

export function LoadDB<T, K> (
	type: string,
	loader: Promise<any>,
	callback?: (data: K | null) => void,
	selector?: (data: T | null) => K | null,
): K | null {
	if (!internalDB[type]) {
		if (callback) {
			if (!callbackQueue[type]) callbackQueue[type] = [];
			callbackQueue[type].push(callback);
		}

		if (internalDB[type] !== false) {
			internalDB[type] = false;
			loader
				.then(x => {
					const s = selector || ((d: T) => d);

					internalDB[type] = s(x.default as T);

					if (callbackQueue[type])
						callbackQueue[type].forEach(y => y(internalDB[type] as K));
				})
				.catch(() => {
					if (callbackQueue[type])
						callbackQueue[type].forEach(y => y(null));
				});
		}
		return null;
	}
	return internalDB[type];
}
export default function LoadDBFactory<T, K = T> (type: string, loader: Promise<any>, selector?: (data: T | null) => K | null) {
	return (callback?: (data: K | null) => void) => LoadDB<T, K>(type, loader, callback, selector);
}
