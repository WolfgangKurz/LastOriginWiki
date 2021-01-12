import LoadDBFactory from "./DBLoader";

export interface ExchangeInfo {
	category: "Montly" | "Event";
	group: string;
	reward: string;
	count: number;
	requires: string[];
	note: string;
}

export default LoadDBFactory<ExchangeInfo[]>(
	"exchange",
	import(/* webpackChunkName: "chunk-db-exchange" */ "@/json/exchange"),
);
