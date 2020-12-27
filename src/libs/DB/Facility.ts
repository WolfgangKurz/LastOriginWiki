import Data from "@/json/facility";

export type FactilityProduct = FactilityProductItem | FacilityProductType | FacilityProductUnit;
interface FactilityProductItem {
	item: "Wood_Material" | "Stone_Material" | "Iron_Material" | "TestItem_5" | "TestItem_4" | "TestItem_8" |
	"Favor_Candy" | "Favor_Chocolate" | "Favor_Cake" | "Favor_MaxExpand_Lv1";
	chance: number;
	count: number;
}
interface FacilityProductType {
	type: "facilityParts" | "nutrient" | "metal" | "power" | "equipCost" | "equipDisassemble" | "exp";
	bonus: number;
}
interface FacilityProductUnit {
	grade: "B" | "A" | "S" | "SS";
	chance: number;
	count: number;
}

export interface FacilityUpgradeRequiredMaterial {
	type: "Cafe" | "Equip" | "FacilityPartsMaking" | "Matrial" | "PcMaking" | "Resource" | "StuffMaking" | "Training";
	grade: "T1" | "T2" | "T3";
	value: number;
}
export interface FacilityLevel {
	level: number;
	cost: number[];
	requiredCombatant: {
		type: string;
		level: number;
		count: number;
	};

	upgradeTime: number;
	upgradeRequired: {
		Wood: number;
		Stone: number;
		Iron: number;

		Material: FacilityUpgradeRequiredMaterial | null;
	};
	produceItem: FactilityProduct[];
}
export interface FacilityEntity {
	name: string;
	image: string;
	size: number;
	duration: number;
	list: FacilityLevel[];
}
export interface Facility {
	[key: string]: FacilityEntity;
}
export default Data as Facility;
