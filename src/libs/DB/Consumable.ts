import Data from "@/json/consumable";

export interface Consumable {
	key: string;
	name: string;
	icon: string;
	desc: string;
	func: string;
}
export default Data as Consumable[];
