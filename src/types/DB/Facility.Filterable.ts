export interface FilterableFacility {
	uid: string;
	type: "FacilityResource" | "Resource" | "EXP" | "BioroidMaking" | "Equipment" | "Cafeteria" | "FacilityUpgrade" | "WorkshopResource";

	// name: string;
	image: string;
	size: number;
}
