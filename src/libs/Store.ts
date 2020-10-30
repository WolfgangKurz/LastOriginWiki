import Vuex from "vuex";
import Vue from "vue";

import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import { BuffEffectInfo, BuffEffectList } from "@/libs/Equips/BuffEffect";

Vue.use(Vuex);

export type UnitDisplayType = "table" | "list" | "group";
export interface UnitTableFilters {
	Rarity: {
		[ACTOR_GRADE.B]: boolean;
		[ACTOR_GRADE.A]: boolean;
		[ACTOR_GRADE.S]: boolean;
		[ACTOR_GRADE.SS]: boolean;
	};
	Type: {
		[ACTOR_CLASS.LIGHT]: boolean;
		[ACTOR_CLASS.AIR]: boolean;
		[ACTOR_CLASS.HEAVY]: boolean;
	};
	Role: {
		[ROLE_TYPE.ATTACKER]: boolean;
		[ROLE_TYPE.DEFENDER]: boolean;
		[ROLE_TYPE.SUPPORTER]: boolean;
	};
	Body: {
		[ACTOR_BODY_TYPE.BIOROID]: boolean;
		[ACTOR_BODY_TYPE.AGS]: boolean;
	};
}
export type UnitListOrder = "dict" | "name" | "rarity";

export interface EffectFilterListItemSingle extends BuffEffectInfo {
	selected: boolean;
}
export interface EffectFilterListItemPM extends BuffEffectInfo {
	pmType: 1 | -1;
	selected: boolean;
}
export type EffectFilterListType = Array<EffectFilterListItemSingle | EffectFilterListItemPM[]>;

export interface EquipDisplayType {
	Type: {
		Chip: boolean;
		OS: boolean;
		Public: boolean;
		Private: boolean;
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
		EndlessWar: boolean;
	};
	Effects: EffectFilterListType;
}

@Module()
class StoreModule extends VuexModule {
	private unitDisplayType: UnitDisplayType = "table";
	private unitSearchText: string = "";

	private unitTablePromotionFilter: number = 0;
	private unitTableFilter: UnitTableFilters = {
		Rarity: {
			[ACTOR_GRADE.B]: true,
			[ACTOR_GRADE.A]: true,
			[ACTOR_GRADE.S]: true,
			[ACTOR_GRADE.SS]: true,
		},
		Type: {
			[ACTOR_CLASS.LIGHT]: true,
			[ACTOR_CLASS.AIR]: true,
			[ACTOR_CLASS.HEAVY]: true,
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: true,
			[ROLE_TYPE.DEFENDER]: true,
			[ROLE_TYPE.SUPPORTER]: true,
		},
		Body: {
			[ACTOR_BODY_TYPE.BIOROID]: true,
			[ACTOR_BODY_TYPE.AGS]: true,
		},
	};

	private unitListOrder: UnitListOrder = "dict";
	private unitListDictionaryInterpolation: boolean = false;
	private unitListSortAsShortName: boolean = false;

	private unitGroupMerge: boolean = false;

	public readonly equipEffectFilterList = BuffEffectList();

	public readonly equipSourceFilterList: Record<keyof EquipDisplayType["Source"], boolean> = {
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
		EndlessWar: true,
	};

	public readonly equipSourceFilterListCleared: Record<keyof EquipDisplayType["Source"], boolean> = {
		EventExchange: false,
		OldEventExchange: false,
		Exchange: false,
		OldExchange: false,
		Apocrypha: false,
		Limited: false,
		ExMap: false,
		SideMap: false,
		EventMap: false,
		OldEventMap: false,
		Map: false,
		Challenge: false,
		Uninstalled: false,
		EndlessWar: false,
	};

	public readonly equipEffectFilterListFlatten = this.equipEffectFilterList
		.map(x => {
			if (x.pm) {
				return [
					{ ...x, pmType: 1, selected: true },
					{ ...x, pmType: -1, selected: true },
				];
			} else
				return { ...x, selected: true };
		}) as EffectFilterListType;

	private equipDisplayFilter: EquipDisplayType = {
		Type: {
			Chip: true,
			OS: true,
			Public: true,
			Private: true,
		},
		Source: this.equipSourceFilterList,
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

	public get UnitTablePromotionFilter (): number {
		return this.unitTablePromotionFilter;
	}

	@Mutation
	public setUnitTablePromotionFilter (value: number) {
		this.unitTablePromotionFilter = value;
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
	public FillEquipDisplayEffectFilter () {
		this.equipDisplayFilter.Effects.forEach(x => {
			if (Array.isArray(x))
				x.forEach(y => (y.selected = true));
			else
				x.selected = true;
		});
	}

	@Action
	public ClearEquipDisplayEffectFilter () {
		this.equipDisplayFilter.Effects.forEach(x => {
			if (Array.isArray(x))
				x.forEach(y => (y.selected = false));
			else
				x.selected = false;
		});
	}

	@Action
	public FillEquipDisplaySourceFilter () {
		this.equipDisplayFilter.Source = this.equipSourceFilterList;
	}

	@Action
	public ClearEquipDisplaySourceFilter () {
		this.equipDisplayFilter.Source = this.equipSourceFilterListCleared;
	}
}

export const store = new Vuex.Store({});
export default new StoreModule({
	store,
	name: "main",
});
