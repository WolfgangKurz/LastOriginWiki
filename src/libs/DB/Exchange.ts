export interface ExchangeInfo {
	category: "Montly" | "Event";
	group: string;
	reward: string;
	count: number;
	requires: string[];
	note: string;
}

/**
 * `null` : Not requested
 * `false` : Loading
 * `ExchangeInfo[]` : Loaded
 */
let internalDB: ExchangeInfo[] | false | null = null;
export default function ExchangeDB (callback?: (data: ExchangeInfo[]) => void): ExchangeInfo[] | null {
	if (!internalDB) {
		if (internalDB !== false) {
			internalDB = false;
			import(/* webpackChunkName: "chunk-db-exchange" */ "@/json/exchange")
				.then(x => {
					internalDB = x.default as unknown as ExchangeInfo[];
					if (callback) callback(internalDB);
				});
		}
		return null;
	}
	return internalDB;
}
