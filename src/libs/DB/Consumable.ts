export interface Consumable {
	key: string;
	name: string;
	icon: string;
	desc: string;
	func: string;
}

/**
 * `null` : Not requested
 * `false` : Loading
 * `Consumable[]` : Loaded
 */
type DBCallback<T> = (data: T) => void;
let internalDB: Consumable[] | false | null = null;
const callbackQueue: DBCallback<Consumable[]>[] = [];
export default function ConsumableDB (callback?: (data: Consumable[]) => void): Consumable[] | null {
	if (!internalDB) {
		if (callback) callbackQueue.push(callback);

		if (internalDB !== false) {
			internalDB = false;
			import(/* webpackChunkName: "chunk-db-consumable" */ "@/json/consumable")
				.then(x => {
					internalDB = x.default as unknown as Consumable[];
					callbackQueue.forEach(y => y(internalDB as Consumable[]));
				});
		}
		return null;
	}
	return internalDB;
}
