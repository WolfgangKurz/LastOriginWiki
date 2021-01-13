import LoadDBFactory from "../DB/DBLoader";

export interface Consumable {
	key: string;
	name: string;
	icon: string;
	desc: string;
	func: string;
}

export default LoadDBFactory<Consumable[]>(
	"consumable",
	import(/* webpackChunkName: "chunk-db-consumable" */ `@/json/consumable`),
);
