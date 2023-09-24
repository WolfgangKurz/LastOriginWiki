import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import Store from "@/store";

import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { SKILL_ATTR } from "@/types/Enums";
import { EffectFilterListItemPM, EffectFilterListItemSingle } from "@/types/Buff";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

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
import AdvancedSearch, { Condition, ConditionBuffSlot, ConditionCategory, ConditionCompare, ConditionCompareYN } from "./search/AdvancedSearch";

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

	useEffect(() => {
		const unsub = Store.Units.EffectFilters.subscribe(_ => update());
		return () => unsub();
	}, []);

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
				case ConditionCategory.Active_NoGuard:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return Object.values(x.skills).some(r => r.guard);
								case ConditionBuffSlot.Active1:
									return x.skills[1].guard || x.skills.F1?.guard;
								case ConditionBuffSlot.Active2:
									return x.skills[2].guard || x.skills.F2?.guard;
							}
							break;
						case ConditionCompareYN.NotEqual:
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return !Object.values(x.skills).some(r => r.guard);
								case ConditionBuffSlot.Active1:
									return !(x.skills[1].guard || x.skills.F1?.guard);
								case ConditionBuffSlot.Active2:
									return !(x.skills[2].guard || x.skills.F2?.guard);
							}
							break;
					}
					return false;
				case ConditionCategory.Active_Grid:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return Object.values(x.skills).some(r => r.grid);
								case ConditionBuffSlot.Active1:
									return x.skills[1].grid || x.skills.F1?.grid;
								case ConditionBuffSlot.Active2:
									return x.skills[2].grid || x.skills.F2?.grid;
							}
							break;
						case ConditionCompareYN.NotEqual:
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return !Object.values(x.skills).some(r => r.grid);
								case ConditionBuffSlot.Active1:
									return !(x.skills[1].grid || x.skills.F1?.grid);
								case ConditionBuffSlot.Active2:
									return !(x.skills[2].grid || x.skills.F2?.grid);
							}
							break;
					}
					return false;
				case ConditionCategory.Elem:
					switch (c.compare) {
						case ConditionCompareYN.Equal:
							if (c.elem === "") return true;
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return Object.values(x.skills).some(r => r.elem === ElemTable[c.elem]);
								case ConditionBuffSlot.Active1:
									return x.skills[1].elem === ElemTable[c.elem] || x.skills.F1?.elem === ElemTable[c.elem];
								case ConditionBuffSlot.Active2:
									return x.skills[2].elem === ElemTable[c.elem] || x.skills.F2?.elem === ElemTable[c.elem];
							}
							break;
						case ConditionCompareYN.NotEqual:
							if (c.elem === "") return false;
							switch (c.slot) {
								case ConditionBuffSlot.AnyActive:
									return !Object.values(x.skills).some(r => r.elem === ElemTable[c.elem]);
								case ConditionBuffSlot.Active1:
									return !(x.skills[1].elem === ElemTable[c.elem] || x.skills.F1?.elem === ElemTable[c.elem]);
								case ConditionBuffSlot.Active2:
									return !(x.skills[2].elem === ElemTable[c.elem] || x.skills.F2?.elem === ElemTable[c.elem]);
							}
							break;
					}
					return false;
			}
		})));
	}, [FilterableUnitDB, searchType, conds]);

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
