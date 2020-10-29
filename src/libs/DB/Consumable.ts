import Data from "@/json/consumable.json";

export interface Consumable {
	key: string;
	name: string;
	icon: string;
	desc: string;
}
export default Data as Consumable[];
