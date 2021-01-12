/**
 * `null` : Not requested
 * `false` : Loading
 * `T` : Loaded
 */
type DBCallback<T> = (data: T) => void;
const internalDB: Record<string, any | false | null> = {};
const callbackQueue: Record<string, DBCallback<any>[]> = {};

export function LoadDB<T> (type: string, loader: Promise<any>, callback?: (data: T) => void): T | null {
	if (!internalDB[type]) {
		if (callback) {
			if (!callbackQueue[type]) callbackQueue[type] = [];
			callbackQueue[type].push(callback);
		}

		if (internalDB[type] !== false) {
			internalDB[type] = false;
			loader.then(x => {
				internalDB[type] = x.default as T;

				if (callbackQueue[type])
					callbackQueue[type].forEach(y => y(internalDB[type] as T));
			});
		}
		return null;
	}
	return internalDB[type];
}
export default function LoadDBFactory<T> (type: string, loader: Promise<any>) {
	return (callback?: (data: T) => void) => LoadDB<T>(type, loader, callback);
}
