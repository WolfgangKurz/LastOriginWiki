import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

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

import SimpleSearch from "./search/SimpleSearch";
import AdvancedSearch from "./search/AdvancedSearch";

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
	const update = useUpdate();

	const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());

	useEffect(() => {
		const unsub = Store.Units.EffectFilters.subscribe(v => update());
		return () => unsub();
	}, []);

	function HasFilteredEffect (unit: FilterableUnit): boolean {
		if (!FilterableUnitDB) return false;

		const target = FilterableUnitDB.find(x => x.uid === unit.uid);
		if (!target) return false;

		return Store.Units.EffectFilters.value
			.reduce((p, c) => Array.isArray(c) ? [...p, ...c] : [...p, c], [] as Array<EffectFilterListItemSingle | EffectFilterListItemPM>)
			.filter(x => x.selected)
			.every(selectedBuff => {
				return target.buffs.flat()
					.filter(targetBuff => Store.Units.EffectTarget.value.includes(targetBuff.target))
					.filter(targetBuff => selectedBuff.type.includes(targetBuff.type))
					.some(targetBuff => {
						if ("pmType" in selectedBuff)
							return (selectedBuff.pmType > 0 && targetBuff.positive) || (selectedBuff.pmType < 0 && !targetBuff.positive);
						return true;
					});
			});
	}

	function UnitList (): FilterableUnit[] {
		const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		if (!FilterableUnitDB) return [];

		if (Store.Units.DisplayType.value === "skin") return FilterableUnitDB;

		const elem = new Array(2)
			.fill(0)
			.map((_, i) => [
				Store.Units.Skill[i].Elem.value[SKILL_ATTR.PHYSICS] ? SKILL_ATTR.PHYSICS : -1,
				Store.Units.Skill[i].Elem.value[SKILL_ATTR.FIRE] ? SKILL_ATTR.FIRE : -1,
				Store.Units.Skill[i].Elem.value[SKILL_ATTR.ICE] ? SKILL_ATTR.ICE : -1,
				Store.Units.Skill[i].Elem.value[SKILL_ATTR.LIGHTNING] ? SKILL_ATTR.LIGHTNING : -1,
			].filter(y => y > -1));

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
			// .filter(x => {
			// 	if (Filters.RoguelikeSkill.length > 0)
			// 		return Filters.RoguelikeSkill.some(y => x.roguelike.includes(y));
			// 	return true;
			// })
			.filter(x => {
				if (!Store.Units.Rarity[x.rarity].value) return false;
				if (!Store.Units.Type[x.type].value) return false;
				if (!Store.Units.Role[x.role].value) return false;
				if (!Store.Units.Body[x.body].value) return false;

				if (![0, 1].some(i => {
					const j = (i + 1) as 1 | 2;
					const Fj: "F1" | "F2" = `F${j}`;

					const XF = x.skills[Fj];

					const elem_ = elem[i].some(y => y === x.skills[j].elem || (XF && y === XF.elem));
					const grid = Store.Units.Skill[i].GridType.value === 0 ||
						(Store.Units.Skill[i].GridType.value === 1 && (x.skills[j].grid || (XF && XF.grid))) ||
						(Store.Units.Skill[i].GridType.value === 2 && !(x.skills[j].grid || (XF && XF.grid)));

					const guard = Store.Units.Skill[i].DismissGuardType.value === 0 ||
						(Store.Units.Skill[i].DismissGuardType.value === 1 && (x.skills[j].guard || (XF && XF.guard))) ||
						(Store.Units.Skill[i].DismissGuardType.value === 2 && !(x.skills[j].guard || (XF && XF.guard)));

					return elem_ && grid && guard;
				}))
					return false;

				return HasFilteredEffect(x);
			});
	}

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
									<Locale k="SEARCH_SIMPLE" fallback="기본 검색" />
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
									<Locale k="SEARCH_ADVANCED" fallback="상세 검색" />
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<div class={ BuildClass(searchType !== "simple" && "d-none") }>
							<SimpleSearch />
						</div>
						<div class={ BuildClass(searchType !== "advanced" && "d-none") }>
							<AdvancedSearch />
						</div>
					</div>
				</div>
			</>
			: <></>
		}

		{ Store.Units.DisplayType.value === "table" && <UnitsTable list={ UnitList() } /> }
		{ Store.Units.DisplayType.value === "list" && <UnitsList list={ UnitList() } /> }
		{ Store.Units.DisplayType.value === "group" && <UnitsGroup list={ UnitList() } /> }
		{ Store.Units.DisplayType.value === "skin" && <UnitsSkin list={ UnitList() } /> }
		{ Store.Units.DisplayType.value === "time" && <UnitsTimetable list={ UnitList() } /> }
	</div >;
};
export default Units;
