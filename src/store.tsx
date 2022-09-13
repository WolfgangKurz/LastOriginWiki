import { FunctionalComponent, RenderableProps } from "preact";

import createStore, { Store as _Store, Unsubscribe as _Unsubscribe } from "unistore";
import { connect, Provider as _Provider } from "unistore/preact";
import devtools from "unistore/devtools";

import merge from "deepmerge";

// import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, SKILL_ATTR, ROGUE_SKILL_TYPE } from "@/types/Enums";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, SKILL_ATTR } from "@/types/Enums";
import { AllOnlyExcept, SkillFilter } from "@/types/Internal";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { EffectFilterListType } from "@/types/Buff";


// eslint-disable-next-line @typescript-eslint/ban-types
type E = {};

type StoreActionDefiner<StoreType> = (state: StoreType, ...args: any[]) => Promise<Partial<StoreType>> | Partial<StoreType> | void;
type StoreActionCaller = (...args: any[]) => void;

type StoreActionObject<StoreType, ActionsType = E> = Record<keyof ActionsType, StoreActionDefiner<StoreType>>;
type StoreActionFunction<StoreType, ActionsType = E> = (store: _Store<StoreType>) => StoreActionObject<StoreType, ActionsType>;
type StoreActionCallers<ActionsType = E> = Record<keyof ActionsType, StoreActionCaller>;

type ConnectArgs<S, P, T, A> = preact.ComponentConstructor<S & P & A, T> | preact.AnyComponent<S & P & A, T>;
type ConnectReturn<S, P, T> = preact.ComponentConstructor<S | S & P, T>;

type ConnectDirectArgs<S, P, A> = RenderableProps<S & P & A>;

// Connect 인자 map 타입
type ConnectMapType<T> = keyof T | Array<keyof T>;

export type Unsubscribe = _Unsubscribe;

export class StoreClass<
	StoreType extends Record<string, unknown>,
	Definer = Record<string, StoreActionDefiner<StoreType>>,
	Caller = Record<string, StoreActionCaller>,
	P = unknown, T = unknown, // preact Props, State
	> {
	private _store: _Store<StoreType>;
	private _actions: StoreActionObject<StoreType, Definer> | StoreActionFunction<StoreType, Definer> | undefined;

	constructor (init: StoreType, actions?: Record<keyof Definer, StoreActionDefiner<StoreType>>) {
		this._store = process.env.NODE_ENV === "production"
			? createStore(init)
			: devtools(createStore(init));

		this._actions = actions;
	}

	public Connect (map: ConnectMapType<StoreType>): (Child: ConnectArgs<StoreType, P, T, Caller>) => ConnectReturn<StoreType, P, T> {
		return (connect as any)(map as (string | string[]), this._actions); // 할 짓을 알고 있으니 any로 형변환
	}

	public ConnectDirect (
		map: ConnectMapType<StoreType>,
		content: (Child: ConnectDirectArgs<StoreType, P, Caller>) => preact.VNode,
	): preact.VNode {
		const Connect = this.Connect(map)(content) as any; // 할 짓을 알고 있으니 any로 형변환
		return <Connect>{ content }</Connect>;
	}

	public get Provider (): FunctionalComponent {
		const Provider: FunctionalComponent = (props: RenderableProps<E>): preact.VNode =>
			<_Provider store={ this._store }>{ props.children }</_Provider>;
		return Provider;
	}

	/**
	 * Store 데이터의 변경을 감지하여 콜백 함수를 호출합니다.
	 * @param callback 데이터가 변경되었을 때 호출될 콜백 함수입니다.
	 * @param immedietly 콜백 함수를 구독하고 즉시 호출할지 여부입니다.
	 * @returns 호출하면 구독을 해지하는 콜백 함수입니다.
	 */
	public Subscribe (callback: (state: StoreType) => void, immedietly: boolean = false): Unsubscribe {
		const unsubscriber = this._store.subscribe(callback);
		if (immedietly) callback(this.State);
		return unsubscriber;
	}

	/**
	 * 스토어의 데이터를 직접 변경합니다.
	 * @param data 변경할 데이터입니다.
	 * @param overwrite 데이터를 병합하지 않고 완전히 덮어쓸지 여부입니다.
	 */
	public Set (data: Pick<StoreType, keyof StoreType>, overwrite?: boolean): StoreClass<StoreType, Definer, Caller, P, T> {
		this._store.setState(data, overwrite);
		return this;
	}

	public Actions (): StoreActionCallers<Caller> {
		type pp = Pick<StoreType, keyof StoreType>;
		type sc = StoreActionCallers<Caller>;

		if (typeof this._actions === "undefined") return {} as sc;

		const acts = typeof this._actions === "object"
			? this._actions
			: this._actions(this._store);

		const result: sc = {} as sc;
		Object.keys(acts).forEach(key => {
			result[key as keyof Caller] = (...args: any[]): void => {
				const ret = acts[key as keyof Definer](this._store.getState(), ...args);
				if (typeof ret === "undefined") return;
				if (ret instanceof Promise)
					ret.then(x => this.Set(x as pp));
				else
					this.Set(ret as pp);
			};
		});
		return result;
	}

	public get State (): StoreType {
		return this._store.getState();
	}
}

/* eslint-disable @typescript-eslint/explicit-function-return-type, max-len */
const Store = new StoreClass(
	{
		requireReload: false,

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

			DisplayType: "table" as ("table" | "list" | "group" | "skin" | "time"),
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
				General: true,
				Limited: true,
				EternalWar: true,
				NewEternalWar: true,
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

				Uninstalled: true,

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

			SearchText: "",
		},
		Enemies: {
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

			Boss: true,
			Normal: true,
			Unused: true,
			NEW: true,

			DisplayType: "list" as ("list" | "group"),
			SearchText: "",
		},
	},
	{
		markAsRequireReload: (state) => merge(state, { requireReload: true }),

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

		toggleUnitsFilterBodyBioroid: (state) => merge(state, { Units: { Body: { [ACTOR_BODY_TYPE.BIOROID]: !state.Units.Body[ACTOR_BODY_TYPE.BIOROID] } } }),
		toggleUnitsFilterBodyAGS: (state) => merge(state, { Units: { Body: { [ACTOR_BODY_TYPE.AGS]: !state.Units.Body[ACTOR_BODY_TYPE.AGS] } } }),

		toggleUnitsFilterSkillElem (state, index: number, elem: SKILL_ATTR) {
			if (index < 0 || index >= state.Units.Skill.length) return;
			const list = state.Units.Skill;
			list[index].Elem[elem] = !list[index].Elem[elem];
			return merge(state, { Units: { Skill: list } });
		},
		setUnitsFilterSkillGridType (state, index: number, type: AllOnlyExcept) {
			if (index < 0 || index >= state.Units.Skill.length) return;
			const list = state.Units.Skill;
			list[index].GridType = type;
			return merge(state, { Units: { Skill: list } });
		},
		setUnitsFilterSkillDismissGuardType (state, index: number, type: AllOnlyExcept) {
			if (index < 0 || index >= state.Units.Skill.length) return;
			const list = state.Units.Skill;
			list[index].DismissGuardType = type;
			return merge(state, { Units: { Skill: list } });
		},

		toggleUnitsFilterEffectTarget (state, type: "self" | "team" | "enemy") {
			const index = state.Units.EffectTarget.indexOf(type);
			if (index >= 0) {
				const list = [...state.Units.EffectTarget];
				list.splice(index, 1);
				return {
					...state,
					Units: {
						...state.Units,
						EffectTarget: list,
					},
				};
			}

			const list = [...state.Units.EffectTarget, type];
			return {
				...state,
				Units: {
					...state.Units,
					EffectTarget: list,
				},
			};
		},

		// toggleUnitsFilterRoguelikeSkill (state, type: ROGUE_SKILL_TYPE) {
		// 	const index = state.Units.RoguelikeSkill.indexOf(type);
		// 	if (index >= 0) {
		// 		const list = [...state.Units.RoguelikeSkill];
		// 		list.splice(index, 1);
		// 		return {
		// 			...state,
		// 			Units: {
		// 				...state.Units,
		// 				RoguelikeSkill: list,
		// 			},
		// 		};
		// 	}

		// 	const list = [...state.Units.RoguelikeSkill, type];
		// 	return {
		// 		...state,
		// 		Units:{
		// 			...state.Units,
		// 			RoguelikeSkill: list,
		// 		},
		// 	};
		// },

		setUnitEffectFilters (state, list: EffectFilterListType) {
			state.Units.EffectFilters = [];
			return merge(state, { Units: { EffectFilters: list } });
		},

		setUnitDisplayType: (state, type: "table" | "list" | "group" | "time") => merge(state, { Units: { DisplayType: type } }),
		setUnitSearchText: (state, value: string) => merge(state, { Units: { SearchText: value } }),

		////////////////////////////////////////////////////////////////////////////////

		toggleEquipTypeChip: (state) => merge(state, { Equips: { Type: { Chip: !state.Equips.Type.Chip } } }),
		toggleEquipTypeOS: (state) => merge(state, { Equips: { Type: { OS: !state.Equips.Type.OS } } }),
		toggleEquipTypeItem: (state) => merge(state, { Equips: { Type: { Item: !state.Equips.Type.Item } } }),
		toggleEquipTypeExclusive: (state) => merge(state, { Equips: { Type: { Exclusive: !state.Equips.Type.Exclusive } } }),

		toggleEquipSourceGeneral: (state) => merge(state, { Equips: { Source: { General: !state.Equips.Source.General } } }),
		toggleEquipSourceLimited: (state) => merge(state, { Equips: { Source: { Limited: !state.Equips.Source.Limited } } }),
		toggleEquipSourceEternalWar: (state) => merge(state, { Equips: { Source: { EternalWar: !state.Equips.Source.EternalWar } } }),
		toggleEquipSourceNewEternalWar: (state) => merge(state, { Equips: { Source: { NewEternalWar: !state.Equips.Source.NewEternalWar } } }),
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

		setEquipSearchText: (state, value: string) => merge(state, { Equips: { SearchText: value } }),

		////////////////////////////////////////////////////////////////////////////////

		toggleEnemiesFilterTypeLight: (state) => merge(state, { Enemies: { Type: { [ACTOR_CLASS.LIGHT]: !state.Enemies.Type[ACTOR_CLASS.LIGHT] } } }),
		toggleEnemiesFilterTypeMobility: (state) => merge(state, { Enemies: { Type: { [ACTOR_CLASS.MOBILITY]: !state.Enemies.Type[ACTOR_CLASS.MOBILITY] } } }),
		toggleEnemiesFilterTypeHeavy: (state) => merge(state, { Enemies: { Type: { [ACTOR_CLASS.HEAVY]: !state.Enemies.Type[ACTOR_CLASS.HEAVY] } } }),

		toggleEnemiesFilterRoleAttacker: (state) => merge(state, { Enemies: { Role: { [ROLE_TYPE.ATTACKER]: !state.Enemies.Role[ROLE_TYPE.ATTACKER] } } }),
		toggleEnemiesFilterRoleDefender: (state) => merge(state, { Enemies: { Role: { [ROLE_TYPE.DEFENDER]: !state.Enemies.Role[ROLE_TYPE.DEFENDER] } } }),
		toggleEnemiesFilterRoleSupporter: (state) => merge(state, { Enemies: { Role: { [ROLE_TYPE.SUPPORTER]: !state.Enemies.Role[ROLE_TYPE.SUPPORTER] } } }),

		toggleEnemiesFilterBoss: (state) => merge(state, { Enemies: { Boss: !state.Enemies.Boss } }),
		toggleEnemiesFilterNormal: (state) => merge(state, { Enemies: { Normal: !state.Enemies.Normal } }),
		toggleEnemiesFilterUnused: (state) => merge(state, { Enemies: { Unused: !state.Enemies.Unused } }),
		toggleEnemiesFilterNEW: (state) => merge(state, { Enemies: { NEW: !state.Enemies.NEW } }),

		setEnemiesDisplayType: (state, type: "list" | "group") => merge(state, { Enemies: { DisplayType: type } }),
		setEnemiesSearchText: (state, value: string) => merge(state, { Enemies: { SearchText: value } }),
	},
);
export default Store;
