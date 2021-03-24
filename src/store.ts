import { ComponentConstructor, h, VNode } from "preact";
import createStore, { ActionCreator, StateMapper } from "unistore";
import { connect } from "unistore/preact";
import merge from "deepmerge";

import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, SKILL_ATTR } from "@/types/Enums";
import { AllOnlyExcept, SkillFilter } from "@/types/Internal";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { EffectFilterListType } from "@/types/Buff";

const states = {
	Units: {
		Rarity: {
			[ACTOR_GRADE.B]: true,
			[ACTOR_GRADE.A]: true,
			[ACTOR_GRADE.S]: true,
			[ACTOR_GRADE.SS]: true,
			[ACTOR_GRADE.SSS]: true,
		},
		Type: {
			[ACTOR_CLASS.LIGHT]: true,
			[ACTOR_CLASS.MOBILITY]: true,
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
			[ACTOR_BODY_TYPE.SUMMON]: false,
			[ACTOR_BODY_TYPE.TOTEM]: false,
		},

		Skill: new Array(2)
			.fill(0)
			.map<SkillFilter>(_ => ({
				Elem: [true, true, true, true],
				GridType: 0,
				DismissGuardType: 0,
			})),

		EffectTarget: ["self", "team", "enemy"],

		EffectFilters: Object.keys(BuffEffectList)
			.map(x => BuffEffectList[x as BuffEffectListGroupKeys])
			.reduce((p, c) => [...p, ...c], [])
			.map(x => {
				if (x.pm) {
					return [
						{ ...x, pmType: 1, selected: false },
						{ ...x, pmType: -1, selected: false },
					];
				}
				return { ...x, selected: false };
			}) as EffectFilterListType,

		DisplayType: "table" as ("table" | "list" | "group" | "time"),
		SearchText: "",
	},
	Equips: {
		Type: {
			Chip: true,
			OS: true,
			Item: true,
			Exclusive: true,
		},
		Source: {
			Limited: true,
			EndlessWar: true,
			SubStory: true,

			Exchange: true,
			OldExchange: true,

			EventMap: true,
			EventExchange: true,

			OldEventMap: true,
			OldEventExchange: true,

			Map: true,
			SideMap: true,
			ExMap: true,

			Challenge: true,

			Uninstalled: false,

			Roguelike: true,
		},

		EffectFilters: Object.keys(BuffEffectList)
			.map(x => BuffEffectList[x as BuffEffectListGroupKeys])
			.reduce((p, c) => [...p, ...c], [])
			.map(x => {
				if (x.pm) {
					return [
						{ ...x, pmType: 1, selected: false },
						{ ...x, pmType: -1, selected: false },
					];
				}
				return { ...x, selected: false };
			}) as EffectFilterListType,
	},
};
export default createStore(states);
export type StoreType = typeof states;


type ActionsTypeInternal<T> = Record<string, (state: T, ...params: any[]) => any>;
export type ActionsType<T> = Record<string, (...params: any[]) => any>;

export const actions: ActionsTypeInternal<StoreType> = {
	toggleUnitsFilterRarityB: (state) => merge(state, { Units: { Rarity: { [ACTOR_GRADE.B]: !state.Units.Rarity[ACTOR_GRADE.B] } } }),
	toggleUnitsFilterRarityA: (state) => merge(state, { Units: { Rarity: { [ACTOR_GRADE.A]: !state.Units.Rarity[ACTOR_GRADE.A] } } }),
	toggleUnitsFilterRarityS: (state) => merge(state, { Units: { Rarity: { [ACTOR_GRADE.S]: !state.Units.Rarity[ACTOR_GRADE.S] } } }),
	toggleUnitsFilterRaritySS: (state) => merge(state, { Units: { Rarity: { [ACTOR_GRADE.SS]: !state.Units.Rarity[ACTOR_GRADE.SS] } } }),

	toggleUnitsFilterTypeLight: (state) => merge(state, { Units: { Type: { [ACTOR_CLASS.LIGHT]: !state.Units.Type[ACTOR_CLASS.LIGHT] } } }),
	toggleUnitsFilterTypeMobility: (state) => merge(state, { Units: { Type: { [ACTOR_CLASS.MOBILITY]: !state.Units.Type[ACTOR_CLASS.MOBILITY] } } }),
	toggleUnitsFilterTypeHeavy: (state) => merge(state, { Units: { Type: { [ACTOR_CLASS.HEAVY]: !state.Units.Type[ACTOR_CLASS.HEAVY] } } }),

	toggleUnitsFilterRoleAttacker: (state) => merge(state, { Units: { Role: { [ROLE_TYPE.ATTACKER]: !state.Units.Role[ROLE_TYPE.ATTACKER] } } }),
	toggleUnitsFilterRoleDefender: (state) => merge(state, { Units: { Role: { [ROLE_TYPE.DEFENDER]: !state.Units.Role[ROLE_TYPE.DEFENDER] } } }),
	toggleUnitsFilterRoleSupporter: (state) => merge(state, { Units: { Role: { [ROLE_TYPE.SUPPORTER]: !state.Units.Role[ROLE_TYPE.SUPPORTER] } } }),

	toggleUnitsFilterBodyBioroid: (state) =>
		merge(state, { Units: { Body: { [ACTOR_BODY_TYPE.BIOROID]: !state.Units.Body[ACTOR_BODY_TYPE.BIOROID] } } }),
	toggleUnitsFilterBodyAGS: (state) => merge(state, { Units: { Body: { [ACTOR_BODY_TYPE.AGS]: !state.Units.Body[ACTOR_BODY_TYPE.AGS] } } }),

	toggleUnitsFilterSkillElem: (state, index: number, elem: SKILL_ATTR) => {
		if (index < 0 || index >= state.Units.Skill.length) return;
		const list = state.Units.Skill;
		list[index].Elem[elem] = !list[index].Elem[elem];
		return merge(state, { Units: { Skill: list } });
	},
	setUnitsFilterSkillGridType: (state, index: number, type: AllOnlyExcept) => {
		if (index < 0 || index >= state.Units.Skill.length) return;
		const list = state.Units.Skill;
		list[index].GridType = type;
		return merge(state, { Units: { Skill: list } });
	},
	setUnitsFilterSkillDismissGuardType: (state, index: number, type: AllOnlyExcept) => {
		if (index < 0 || index >= state.Units.Skill.length) return;
		const list = state.Units.Skill;
		list[index].DismissGuardType = type;
		return merge(state, { Units: { Skill: list } });
	},

	toggleUnitsFilterEffectTarget: (state, type: "self" | "team" | "enemy") => {
		const index = state.Units.EffectTarget.indexOf(type);
		if (index >= 0) {
			const list = [...state.Units.EffectTarget];
			list.splice(index, 1);
			return merge(merge(state, { Units: { EffectTarget: "" } }), { Units: { EffectTarget: list } });
		}

		const list = [...state.Units.EffectTarget, type];
		return merge(merge(state, { Units: { EffectTarget: "" } }), { Units: { EffectTarget: list } });
	},

	setUnitEffectFilters: (state, list: EffectFilterListType) => {
		state.Units.EffectFilters = [];
		return merge(state, { Units: { EffectFilters: list } });
	},

	setDisplayType: (state, type: "table" | "list" | "group" | "time") => merge(state, { Units: { DisplayType: type } }),
	setSearchText: (state, value: string) => merge(state, { Units: { SearchText: value } }),

	////////////////////////////////////////////////////////////////////////////////

	toggleEquipTypeChip: (state) => merge(state, { Equips: { Type: { Chip: !state.Equips.Type.Chip } } }),
	toggleEquipTypeOS: (state) => merge(state, { Equips: { Type: { OS: !state.Equips.Type.OS } } }),
	toggleEquipTypeItem: (state) => merge(state, { Equips: { Type: { Item: !state.Equips.Type.Item } } }),
	toggleEquipTypeExclusive: (state) => merge(state, { Equips: { Type: { Exclusive: !state.Equips.Type.Exclusive } } }),

	toggleEquipSourceLimited: (state) => merge(state, { Equips: { Source: { Limited: !state.Equips.Source.Limited } } }),
	toggleEquipSourceEndlessWar: (state) => merge(state, { Equips: { Source: { EndlessWar: !state.Equips.Source.EndlessWar } } }),
	toggleEquipSourceSubStory: (state) => merge(state, { Equips: { Source: { SubStory: !state.Equips.Source.SubStory } } }),
	toggleEquipSourceExchange: (state) => merge(state, { Equips: { Source: { Exchange: !state.Equips.Source.Exchange } } }),
	toggleEquipSourceOldExchange: (state) => merge(state, { Equips: { Source: { OldExchange: !state.Equips.Source.OldExchange } } }),
	toggleEquipSourceEventMap: (state) => merge(state, { Equips: { Source: { EventMap: !state.Equips.Source.EventMap } } }),
	toggleEquipSourceEventExchange: (state) => merge(state, { Equips: { Source: { EventExchange: !state.Equips.Source.EventExchange } } }),
	toggleEquipSourceOldEventMap: (state) => merge(state, { Equips: { Source: { OldEventMap: !state.Equips.Source.OldEventMap } } }),
	toggleEquipSourceOldEventExchange: (state) => merge(state, { Equips: { Source: { OldEventExchange: !state.Equips.Source.OldEventExchange } } }),
	toggleEquipSourceMap: (state) => merge(state, { Equips: { Source: { Map: !state.Equips.Source.Map } } }),
	toggleEquipSourceSideMap: (state) => merge(state, { Equips: { Source: { SideMap: !state.Equips.Source.SideMap } } }),
	toggleEquipSourceExMap: (state) => merge(state, { Equips: { Source: { ExMap: !state.Equips.Source.ExMap } } }),
	toggleEquipSourceChallenge: (state) => merge(state, { Equips: { Source: { Challenge: !state.Equips.Source.Challenge } } }),
	toggleEquipSourceUninstalled: (state) => merge(state, { Equips: { Source: { Uninstalled: !state.Equips.Source.Uninstalled } } }),
	toggleEquipSourceRoguelike: (state) => merge(state, { Equips: { Source: { Roguelike: !state.Equips.Source.Roguelike } } }),

	setEquipEffectFilters: (state, list: EffectFilterListType) => {
		state.Equips.EffectFilters = [];
		return merge(merge(state, { Equips: { EffectFilters: "" } }), { Equips: { EffectFilters: list } });
	},
};

export function Connect<T, K, I> (
	mapStateToProps: string | Array<string> | StateMapper<T, K, I>,
	actions: ActionCreator<K> | object,
	body: (store: any) => VNode,
): VNode {
	const c = connect(mapStateToProps, actions)(body) as ComponentConstructor<unknown, unknown>;
	return h(c, {});
}
