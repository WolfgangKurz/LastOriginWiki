import Vuex from "vuex";
import Vue from "vue";

import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

Vue.use(Vuex);

export type UnitDisplayType = "table" | "list" | "group";
export interface UnitTableFilters {
	Rarity: {
		SS: boolean;
		S: boolean;
		A: boolean;
		B: boolean;
	};
	Type: {
		Light: boolean;
		Air: boolean;
		Heavy: boolean;
	};
	Role: {
		Attacker: boolean;
		Defender: boolean;
		Supporter: boolean;
	};
	Body: {
		Bioroid: boolean;
		AGS: boolean;
	};
}
export type UnitListOrder = "dict" | "name" | "rarity";

@Module()
class StoreModule extends VuexModule {
	private unitDisplayType: UnitDisplayType = "table";
	private unitSearchText: string = "";

	private unitTablePromotions: boolean = false;
	private unitTableFilter: UnitTableFilters = {
		Rarity: {
			SS: true,
			S: true,
			A: true,
			B: true,
		},
		Type: {
			Light: true,
			Air: true,
			Heavy: true,
		},
		Role: {
			Attacker: true,
			Defender: true,
			Supporter: true,
		},
		Body: {
			Bioroid: true,
			AGS: true,
		},
	};

	private unitListOrder: UnitListOrder = "dict";
	private unitListDictionaryInterpolation: boolean = false;
	private unitListSortAsShortName: boolean = false;

	private unitGroupMerge: boolean = false;

	public get UnitDisplayType (): UnitDisplayType {
		return this.unitDisplayType;
	}

	@Mutation
	public setUnitDisplayType (value: UnitDisplayType) {
		this.unitDisplayType = value;
	}

	public get UnitSearchText (): string {
		return this.unitSearchText;
	}

	@Mutation
	public setUnitSearchText (value: string) {
		this.unitSearchText = value;
	}

	public get UnitTablePromotions (): boolean {
		return this.unitTablePromotions;
	}

	@Mutation
	public setUnitTablePromotions (value: boolean) {
		this.unitTablePromotions = value;
	}

	public get UnitTableFilter (): UnitTableFilters {
		return this.unitTableFilter;
	}

	@Mutation
	public setUnitTableFilter (value: UnitTableFilters) {
		this.unitTableFilter = value;
	}

	public get UnitListOrder (): UnitListOrder {
		return this.unitListOrder;
	}

	@Mutation
	public setUnitListOrder (value: UnitListOrder) {
		this.unitListOrder = value;
	}

	public get UnitListDictionaryInterpolation (): boolean {
		return this.unitListDictionaryInterpolation;
	}

	@Mutation
	public setUnitListDictionaryInterpolation (value: boolean) {
		this.unitListDictionaryInterpolation = value;
	}

	public get UnitListSortAsShortName (): boolean {
		return this.unitListSortAsShortName;
	}

	@Mutation
	public setUnitListSortAsShortName (value: boolean) {
		this.unitListSortAsShortName = value;
	}

	public get UnitGroupMerge (): boolean {
		return this.unitGroupMerge;
	}

	@Mutation
	public setUnitGroupMerge (value: boolean) {
		this.unitGroupMerge = value;
	}
}

export const store = new Vuex.Store({});
export default new StoreModule({
	store,
	name: "main",
});
