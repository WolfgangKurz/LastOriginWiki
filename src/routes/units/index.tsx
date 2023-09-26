import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import Store from "@/store";

import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { SKILL_ATTR, TARGET_TYPE } from "@/types/Enums";
import { FilterableUnit, FilterableUnitSkill } from "@/types/DB/Unit.Filterable";
import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { BuildClass } from "@/libs/Class";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconTable from "@/components/bootstrap-icon/icons/Table";
import IconGrid3x3GapFill from "@/components/bootstrap-icon/icons/Grid3x3GapFill";
import IconTagsFill from "@/components/bootstrap-icon/icons/TagsFill";
import IconTshirt from "@/components/bootstrap-icon/icons/Tshirt";
import IconHammer from "@/components/bootstrap-icon/icons/Hammer";
import IconSearch from "@/components/bootstrap-icon/icons/Search";
import IconListCheck from "@/components/bootstrap-icon/icons/ListCheck";

import SimpleSearch from "./search/SimpleSearch";
import AdvancedSearch, { Condition, ConditionActiveTarget, ConditionBuffSlot, ConditionCategory, ConditionCompare, ConditionCompareYN, IsInvalidBuffType } from "./search/AdvancedSearch";

import UnitsTable from "./units-table";
import UnitsList from "./units-list";
import UnitsGroup from "./units-group";
import UnitsSkin from "./units-skin";
import UnitsTimetable from "./units-timetable";

import style from "./style.module.scss";

export interface UnitsListProps {
	list: FilterableUnit[];
}

const Units: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "전투원의 목록을 표시합니다. 원하는 전투원을 찾기 위해 검색할 수 있습니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_UNITS"));

	const [searchType, setSearchType] = useState<"simple" | "advanced">("simple");
	const [conds, setConds] = useState<readonly Condition[]>([]);

	const update = useUpdate();

	const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());

	const UnitList = useMemo((): FilterableUnit[] => {
		const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		if (!FilterableUnitDB) return [];

		if (Store.Units.DisplayType.value === "skin") return FilterableUnitDB;

		if (searchType === "simple") {
			return FilterableUnitDB
				.filter(x => {
					try {
						const name = LocaleGet(`UNIT_${x.uid}`);
						const firstName = name
							.split("")
							.map(x => DecomposeHangulSyllable(x) || x)
							.map(x => typeof x === "object" ? x.initial || "" : x)
							.join("");

						return new RegExp(Store.Units.SearchText.value, "i").test(name) ||
							new RegExp(Store.Units.SearchText.value, "i").test(firstName);
					} catch {
						return false;
					}
				})
				.filter(x => {
					if (!Store.Units.Rarity[x.rarity].value) return false;
					if (!Store.Units.Type[x.type].value) return false;
					if (!Store.Units.Role[x.role].value) return false;
					if (!Store.Units.Body[x.body].value) return false;
					return true;
				});
		}

		if (conds.length === 0) return FilterableUnitDB;

		const condList: Condition[][] = [];
		const _conds: Condition[] = [conds[0]];
		for (let i = 1; i < conds.length; i++) {
			const c = conds[i];
			const p = conds[i - 1];

			if (p.logicType === "OR") {
				if (_conds.length > 0) {
					condList.push([..._conds]);
					_conds.splice(0, _conds.length);
				}
			}
			_conds.push(c);
		}
		if (_conds.length > 0)
			condList.push([..._conds]);

		const ElemTable: Record<string, SKILL_ATTR> = {
			physics: SKILL_ATTR.PHYSICS,
			fire: SKILL_ATTR.FIRE,
			ice: SKILL_ATTR.ICE,
			lightning: SKILL_ATTR.LIGHTNING,
		};
		const TargetTable: Record<Exclude<ConditionActiveTarget, ConditionActiveTarget.AnyTarget>, string> = {
			[ConditionActiveTarget.Team]: "team",
			[ConditionActiveTarget.Enemy]: "enemy",
		};

		enum SkillsFlag {
			None = 0,
			Active1 = 1 << 0,
			Active2 = 1 << 1,
			Active = Active1 | Active2,
			Passive1 = 1 << 2,
			Passive2 = 1 << 3,
			Passive3 = 1 << 4,
			Passive = Passive1 | Passive2 | Passive3,
			All = (Passive3 << 1) - 1,
		}
		function GetSkills (skills: FilterableUnit["skills"], flags: SkillsFlag): FilterableUnitSkill[] {
			const arr: Array<FilterableUnitSkill | undefined> = [];

			if ((flags & SkillsFlag.Active1) !== 0) arr.push(skills[1], skills.F1);
			if ((flags & SkillsFlag.Active2) !== 0) arr.push(skills[2], skills.F2);
			if ((flags & SkillsFlag.Passive1) !== 0) arr.push(skills[3], skills.F3);
			if ((flags & SkillsFlag.Passive2) !== 0) arr.push(skills[4], skills.F4);
			if ((flags & SkillsFlag.Passive3) !== 0) arr.push(skills[5], skills.F5);

			return arr.filter(r => r) as FilterableUnitSkill[];
		}
		function GetFlags (slot: ConditionBuffSlot): SkillsFlag {
			switch (slot) {
				case ConditionBuffSlot.AnySlot: return SkillsFlag.All;
				case ConditionBuffSlot.AnyActive: return SkillsFlag.Active;
				case ConditionBuffSlot.Active1: return SkillsFlag.Active1;
				case ConditionBuffSlot.Active2: return SkillsFlag.Active2;
				case ConditionBuffSlot.Passive: return SkillsFlag.Passive;
			}
			return SkillsFlag.None;
		}

		return FilterableUnitDB.filter(x => condList.some(cs => cs.every(c => {
			switch (c.category) {
				case ConditionCategory.Rarity:
					switch (c.compare) {
						case ConditionCompare.Equal: return x.rarity === c.rarity;
						case ConditionCompare.NotEqual: return x.rarity !== c.rarity;
						case ConditionCompare.Less: return x.rarity < c.rarity;
						case ConditionCompare.LessEqual: return x.rarity <= c.rarity;
						case ConditionCompare.Bigger: return x.rarity > c.rarity;
						case ConditionCompare.BiggerEqual: return x.rarity >= c.rarity;
					}
					return false;
				case ConditionCategory.Class:
					switch (c.compare) {
						case ConditionCompareYN.Equal: return x.type === c.class;
						case ConditionCompareYN.NotEqual: return x.type !== c.class;
					}
					return false;
				case ConditionCategory.Role:
					switch (c.compare) {
						case ConditionCompareYN.Equal: return x.role === c.role;
						case ConditionCompareYN.NotEqual: return x.role !== c.role;
					}
					return false;
				case ConditionCategory.Body:
					switch (c.compare) {
						case ConditionCompareYN.Equal: return x.body === c.body;
						case ConditionCompareYN.NotEqual: return x.body !== c.body;
					}
					return false;
				case ConditionCategory.Active_Target:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							console.log(c.target, x.skills);
							if (c.target === ConditionActiveTarget.AnyTarget) return true;
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.target === TargetTable[c.target]);
						case ConditionCompareYN.NotEqual:
							if (c.target === ConditionActiveTarget.AnyTarget) return false;
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.target !== TargetTable[c.target]);
					}
					return false;
				case ConditionCategory.Active_NoGuard:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.guard);
						case ConditionCompareYN.NotEqual:
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => !r.guard);
					}
					return false;
				case ConditionCategory.Active_Grid:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.grid);
						case ConditionCompareYN.NotEqual:
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => !r.grid);
					}
					return false;
				case ConditionCategory.Elem:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							if (c.elem === "") return true;
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.elem === ElemTable[c.elem]);
						case ConditionCompareYN.NotEqual:
							if (c.elem === "") return false;
							return GetSkills(x.skills, GetFlags(c.slot)).some(r => r.elem !== ElemTable[c.elem]);
					}
					return false;
				case ConditionCategory.Buff:
					return GetSkills(x.skills, GetFlags(c.slot))
						.some(s => s.buffs.some(r => {
							if (c.class !== undefined && !r.class.includes(c.class)) return false;
							if (c.role !== undefined && !r.role.includes(c.role)) return false;
							if (c.body !== undefined && !r.body.includes(c.body)) return false;

							if (c.target !== undefined) {
								if (c.target === TARGET_TYPE.SELF && r.target !== TARGET_TYPE.SELF)
									return false;
								else if (c.target === TARGET_TYPE.OUR && (r.target !== TARGET_TYPE.OUR && r.target !== TARGET_TYPE.OUR_GRID))
									return false;
								else if (c.target === TARGET_TYPE.ENEMY && (r.target !== TARGET_TYPE.ENEMY && r.target !== TARGET_TYPE.ENEMY_GRID))
									return false;
							}

							if (c.trigger !== undefined && c.trigger !== r.on.type) return false;

							return r.buffs.some(v => {
								if (c.attr !== undefined && c.attr !== v.attr) return false;
								if (c.buff !== undefined && IsInvalidBuffType(c.buff, v.type)) return false;
								if (c.overlap !== undefined && c.overlap !== v.overlap) return false;
								if (c.erase !== undefined && c.erase !== v.erase) return false;

								if (v.type === BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM) {
									if (c.targetBuffEnum !== undefined && c.targetBuffEnum !== v.value.type) return false;
								} else if (v.type === BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF || v.type === BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF) {
									if (c.targetBuffEnum !== undefined && IsInvalidBuffType(c.targetBuffEnum, v.value.type)) return false;
									if (c.targetBuffType !== undefined && c.targetBuffType !== v.value.target) return false;
								}

								return true;
							});
						}));
			}
		})));
	}, [
		FilterableUnitDB,
		searchType,
		conds,
		...Object.values(Store.Units.Rarity).map(r => r.value),
		...Object.values(Store.Units.Type).map(r => r.value),
		...Object.values(Store.Units.Role).map(r => r.value),
		...Object.values(Store.Units.Body).map(r => r.value),
		Store.Units.SearchText.value,
	]);

	return <div class="chars">
		<div class="text-center mb-3">
			<div class={ `btn-group ${style.TabButtons}` }>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "table")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "table") }
				>
					<IconTable class="me-1" />
					<Locale k="UNITS_VIEW_TABLE" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "list")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "list") }
				>
					<IconGrid3x3GapFill class="me-1" />
					<Locale k="UNITS_VIEW_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "group")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "group") }
				>
					<IconTagsFill class="me-1" />
					<Locale k="UNITS_VIEW_GROUP" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "skin")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "skin") }
				>
					<IconTshirt class="me-1" />
					<Locale k="UNITS_VIEW_SKIN" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "time")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "time") }
				>
					<IconHammer class="me-1" />
					<Locale k="UNITS_VIEW_CREATIONTIME" />
				</button>
			</div>
		</div>

		{ Store.Units.DisplayType.value !== "skin"
			? <>
				<div class="card text-start mb-4">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a
									class={ BuildClass("nav-link", isActive(searchType === "simple")) }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										setSearchType("simple");
									} }
								>
									<IconSearch class="me-1" />
									<Locale k="SEARCH_SIMPLE" />
								</a>
							</li>
							<li class="nav-item">
								<a
									class={ BuildClass("nav-link", isActive(searchType === "advanced")) }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										setSearchType("advanced");
									} }
								>
									<IconListCheck class="me-1" />
									<Locale k="SEARCH_ADVANCED" />
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<div class={ BuildClass(searchType !== "simple" && "d-none") }>
							<SimpleSearch />
						</div>
						<div class={ BuildClass(searchType !== "advanced" && "d-none") }>
							<AdvancedSearch onUpdate={ (conds) => setConds(conds) } />
						</div>
					</div>
				</div>
			</>
			: <></>
		}

		{ Store.Units.DisplayType.value === "table" && <UnitsTable list={ UnitList } /> }
		{ Store.Units.DisplayType.value === "list" && <UnitsList list={ UnitList } /> }
		{ Store.Units.DisplayType.value === "group" && <UnitsGroup list={ UnitList } /> }
		{ Store.Units.DisplayType.value === "skin" && <UnitsSkin list={ UnitList } /> }
		{ Store.Units.DisplayType.value === "time" && <UnitsTimetable list={ UnitList } /> }
	</div >;
};
export default Units;
