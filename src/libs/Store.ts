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

export interface EquipDisplayType {
	Type: {
		Chip: boolean;
		OS: boolean;
		Public: boolean;
		Private: boolean;
		EndlessWar: boolean;
	};
	Source: {
		EventExchange: boolean;
		OldEventExchange: boolean;
		Exchange: boolean;
		OldExchange: boolean;
		Apocrypha: boolean;
		Limited: boolean;
		ExMap: boolean;
		SideMap: boolean;
		EventMap: boolean;
		OldEventMap: boolean;
		Map: boolean;
		Challenge: boolean;
		Uninstalled: boolean;
	};
	Effects: string[];
}

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

	public readonly equipEffectFilterList: Array<string | string[]> = [
		["+atk", "-atk"],
		"+armorpierce", // ["+armorpierce", "-armorpierce"],
		"+ap", // ["+ap", "-ap"],
		"+chance", // ["+chance", "-chance"],
		["+crit", "-crit"],
		["+def", "-def"],
		"+dp", // ["+dp", "-dp"],
		["+eva", "-eva"],
		"+exp", // ["+exp", "-exp"],
		"+barrier", // ["+barrier", "-barrier"],
		"+hp", // ["+hp", "-hp"],
		["+range", "-range"],
		["+spd", "-spd"],
		["+dr", "-dr"],
		["+acc", "-acc"],
		"counter",
		["+dmg", "-dmg"],
		"hp-atk",
		"hit1", // "hit2",
		["+resist1", "+resist2"], // ["+resist1", "-resist1", "+resist2", "-resist2"], "resist3",
		"revive",
		"off1", "off2",
		"scout", "stun", "skill",
	];
	// resist1 : 효과 저항 증감
	// resist2 : 속성 저항 증감
	// resist3 : 스테이터스 감소 무효
	// off1 : 스테이터스 감소 해제
	// off2 : 해로운 효과 해제 (모든)

	public readonly equipEffectFilterListFlatten = this.equipEffectFilterList
		.map(x => typeof x === "string" ? [x] : x)
		.reduce((p, c) => [...p, ...c], []);

	private equipDisplayFilter: EquipDisplayType = {
		Type: {
			Chip: true,
			OS: true,
			Public: true,
			Private: true,
			EndlessWar: true,
		},
		Source: {
			EventExchange: true,
			OldEventExchange: true,
			Exchange: true,
			OldExchange: true,
			Apocrypha: true,
			Limited: true,
			ExMap: true,
			SideMap: true,
			EventMap: true,
			OldEventMap: true,
			Map: true,
			Challenge: true,
			Uninstalled: true,
		},
		Effects: this.equipEffectFilterListFlatten,
	};

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

	public get EquipDisplayFilter (): EquipDisplayType {
		return this.equipDisplayFilter;
	}

	@Mutation
	public setEquipDisplayFilter (value: EquipDisplayType) {
		this.equipDisplayFilter = value;
	}

	@Action
	public FillEquipDisplayFilter () {
		this.equipDisplayFilter.Effects = this.equipEffectFilterListFlatten;
	}

	@Action
	public ClearEquipDisplayFilter () {
		this.equipDisplayFilter.Effects = [];
	}
}

export const store = new Vuex.Store({});
export default new StoreModule({
	store,
	name: "main",
});
