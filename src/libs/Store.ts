import Vuex from "vuex";
import Vue from "vue";

import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR, TARGET_TYPE } from "@/libs/Types/Enums";
import { BuffEffectInfo, BuffEffectList, BuffEffectListGroupKeys } from "@/libs/Buffs/BuffEffect";

Vue.use(Vuex);

export type UnitDisplayType = "table" | "list" | "group" | "time";
export interface UnitDisplayFilters {
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
	Elem: {
		[SKILL_ATTR.PHYSICS]: boolean;
		[SKILL_ATTR.FIRE]: boolean;
		[SKILL_ATTR.ICE]: boolean;
		[SKILL_ATTR.LIGHTNING]: boolean;
	};
	EffectTarget: EffectFilterTargetType[];
	Effects: EffectFilterListType;
}
export type UnitListOrder = "dict" | "name" | "rarity";

export interface EnemyFilters {
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
	BossOnly: boolean;
	UsedOnly: boolean;
}

export interface EffectFilterListItemSingle extends BuffEffectInfo {
	selected: boolean;
}
export interface EffectFilterListItemPM extends BuffEffectInfo {
	pmType: 1 | -1;
	selected: boolean;
}
export type EffectFilterListType = Array<EffectFilterListItemSingle | EffectFilterListItemPM[]>;
export type EffectFilterTargetType = "self" | "team" | "enemy";

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
		Supplementary: boolean;
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

	public readonly unitEffectFilterList = BuffEffectList();
	public readonly unitEffectFilterListFlatten = Object.keys(this.unitEffectFilterList)
		.map(x => this.unitEffectFilterList[x as BuffEffectListGroupKeys])
		.reduce((p, c) => [...p, ...c], [])
		.map(x => {
			if (x.pm) {
				return [
					{ ...x, pmType: 1, selected: true },
					{ ...x, pmType: -1, selected: true },
				];
			} else
				return { ...x, selected: true };
		}) as EffectFilterListType;

	private unitDisplayPromotionFilter: number = 0;
	private unitDisplayFilter: UnitDisplayFilters = {
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
		Elem: {
			[SKILL_ATTR.PHYSICS]: true,
			[SKILL_ATTR.FIRE]: true,
			[SKILL_ATTR.ICE]: true,
			[SKILL_ATTR.LIGHTNING]: true,
		},
		EffectTarget: ["self", "team", "enemy"],
		Effects: this.unitEffectFilterListFlatten,
	};

	private unitListOrder: UnitListOrder = "dict";
	private unitListSortAsShortName: boolean = false;

	private unitDisplayEffectTarget: TARGET_TYPE = TARGET_TYPE.__MAX__; // 구분 없음

	private unitGroupMerge: boolean = false;

	public readonly equipSourceFilterList: Record<keyof EquipDisplayType["Source"], boolean> = {
		EventExchange: true,
		OldEventExchange: true,
		Exchange: true,
		OldExchange: true,
		Supplementary: true,
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
		Supplementary: false,
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

	public readonly equipEffectFilterList = BuffEffectList();
	public readonly equipEffectFilterListFlatten = Object.keys(this.equipEffectFilterList)
		.map(x => this.equipEffectFilterList[x as BuffEffectListGroupKeys])
		.reduce((p, c) => [...p, ...c], [])
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

	private enemyFilter: EnemyFilters = {
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
		BossOnly: false,
		UsedOnly: true,
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

	public get UnitDisplayPromotionFilter (): number {
		return this.unitDisplayPromotionFilter;
	}

	@Mutation
	public setUnitDisplayPromotionFilter (value: number) {
		this.unitDisplayPromotionFilter = value;
	}

	public get UnitDisplayFilter (): UnitDisplayFilters {
		return this.unitDisplayFilter;
	}

	@Mutation
	public setUnitDisplayFilter (value: UnitDisplayFilters) {
		this.unitDisplayFilter = value;
	}

	public get UnitListOrder (): UnitListOrder {
		return this.unitListOrder;
	}

	@Mutation
	public setUnitListOrder (value: UnitListOrder) {
		this.unitListOrder = value;
	}

	public get UnitListSortAsShortName (): boolean {
		return this.unitListSortAsShortName;
	}

	@Mutation
	public setUnitListSortAsShortName (value: boolean) {
		this.unitListSortAsShortName = value;
	}

	public get UnitEffectTarget (): TARGET_TYPE {
		return this.unitDisplayEffectTarget;
	}

	@Mutation
	public setUnitDisplayEffectTarget (value: TARGET_TYPE) {
		this.unitDisplayEffectTarget = value;
	}

	@Action
	public FillUnitDisplayEffectFilter () {
		this.unitDisplayFilter.Effects.forEach(x => {
			if (Array.isArray(x))
				x.forEach(y => (y.selected = true));
			else
				x.selected = true;
		});
	}

	@Action
	public ClearUnitDisplayEffectFilter () {
		this.unitDisplayFilter.Effects.forEach(x => {
			if (Array.isArray(x))
				x.forEach(y => (y.selected = false));
			else
				x.selected = false;
		});
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

	public get EnemyFilter (): EnemyFilters {
		return this.enemyFilter;
	}

	@Mutation
	public setEnemyFilter (value: EnemyFilters) {
		this.enemyFilter = value;
	}
}

export const store = new Vuex.Store({});
export default new StoreModule({
	store,
	name: "main",
});
