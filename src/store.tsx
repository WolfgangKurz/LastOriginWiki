// preact signals based store
import { Signal, signal } from "@preact/signals";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { EffectFilterListType } from "@/types/Buff";
import type { LocaleTypes } from "@/types/Locale";

import { Condition as UnitsCondition } from "@/routes/units/search/AdvancedSearch";
import { CurrentLocale } from "@/libs/Locale";

export function toggle (signal: Signal<boolean>): void;
export function toggle (signal: Signal<boolean[]>, index: number): void;
export function toggle (signal: Signal<boolean> | Signal<boolean[]>, index?: number): void {
	if (index === undefined)
		signal.value = !signal.peek();
	else { // array
		if (!Array.isArray(signal.value)) return; // wrong access
		signal.value[index] = !signal.peek()[index];
	}
};

export function toggleList<T> (list: Signal<T[]>, v: T): void {
	const lst = [...list.peek()];
	const idx = lst.indexOf(v);
	if (idx >= 0)
		lst.splice(idx, 1);
	else
		lst.push(v);
	list.value = lst;
}

const Store = {
	requireReload: signal(false),

	Units: {
		DisplayType: signal<"table" | "list" | "skin">("table"),

		Skins: {
			Tab: signal<"" | "artist" | "releaseDate">(""),

			Artist: {
				DisplayUnitRelease: signal(true),
				DisplaySkinRelease: signal(true),
			},
			ReleaseDate: {
				DisplayUnitRelease: signal(true),
				DisplaySkinRelease: signal(true),
			},
		},

		Rarity: {
			[ACTOR_GRADE.B]: signal(true),
			[ACTOR_GRADE.A]: signal(true),
			[ACTOR_GRADE.S]: signal(true),
			[ACTOR_GRADE.SS]: signal(true),
			[ACTOR_GRADE.SSS]: signal(true),
		},
		Type: {
			[ACTOR_CLASS.LIGHT]: signal(true),
			[ACTOR_CLASS.FLYING]: signal(true),
			[ACTOR_CLASS.HEAVY]: signal(true),
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: signal(true),
			[ROLE_TYPE.DEFENDER]: signal(true),
			[ROLE_TYPE.SUPPORTER]: signal(true),
		},
		Body: {
			[ACTOR_BODY_TYPE.BIOROID]: signal(true),
			[ACTOR_BODY_TYPE.AGS]: signal(true),
			[ACTOR_BODY_TYPE.SUMMON]: signal(false),
			[ACTOR_BODY_TYPE.TOTEM]: signal(false),
		},

		SearchText: signal(""),
		SearchWithShortname: signal(false),
		SearchListOrder: signal<"dict" | "name" | "rarity">("dict"),
		SearchGroupByGroup: signal<"none" | "roughly" | "exactly">("none"),

		SearchType: signal<"simple" | "advanced">("simple"),
		AdvSearchConds: signal<readonly UnitsCondition[]>([]),
	},

	Equips: {
		Type: {
			Chip: signal(true),
			OS: signal(true),
			Item: signal(true),
			Exclusive: signal(true),
		},
		Source: {
			General: signal(true),
			Limited: signal(true),
			EternalWar: signal(true),
			NewEternalWar: signal(true),
			InfiniteWar: signal(true),
			SubStory: signal(true),

			Exchange: signal(true),
			OldExchange: signal(true),

			EventMap: signal(true),
			EventExchange: signal(true),

			OldEventMap: signal(true),
			OldEventExchange: signal(true),

			Map: signal(true),
			SideMap: signal(true),
			ExMap: signal(true),

			Challenge: signal(true),

			NotImplemented: signal(true),

			Roguelike: signal(true),
		},

		EffectFilters: signal(
			Object.keys(BuffEffectList)
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
				}) as EffectFilterListType
		),

		SearchText: signal(""),
	},

	Enemies: {
		Type: {
			[ACTOR_CLASS.LIGHT]: signal(true),
			[ACTOR_CLASS.FLYING]: signal(true),
			[ACTOR_CLASS.HEAVY]: signal(true),
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: signal(true),
			[ROLE_TYPE.DEFENDER]: signal(true),
			[ROLE_TYPE.SUPPORTER]: signal(true),
		},

		Normal: signal(true),
		Boss: signal(true),
		IW: signal(true),
		Unused: signal(true),
		NEW: signal(true),

		DisplayType: signal<"list" | "group">("list"),
		SearchText: signal(""),
	},

	Worlds: {
		Sub: {
			Troop: signal<string | null>(null),
			Group: signal<string | null>(null),
		},
	},

	Story: {
		lang: signal<LocaleTypes>(CurrentLocale.peek()),
		back: signal<boolean>(false),
	},
};
export default Store;
