import { FunctionalComponent } from "preact";

import Store, { toggle, toggleList } from "@/store";

import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR } from "@/types/Enums";
import { EffectFilterListItemPM, EffectFilterListItemSingle, EffectFilterListType } from "@/types/Buff";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Icon from "@/components/bootstrap-icon";
import Locale, { LocaleGet } from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import EffectFilterPopup from "@/components/popup/effect-filter-popup";

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

	const update = useUpdate();

	const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());

	const UnitEffects = ((): Record<string, EffectFilterListType> => {
		if (!FilterableUnitDB) return {};

		const ret: EffectFilterListType = [];
		const _ = <T extends unknown> (__: T | undefined): T => __ as T;

		Store.Units.EffectFilters.value.forEach(x => {
			if (Array.isArray(x)) {
				// 증감치
				const part: EffectFilterListItemPM[] = [];

				// 증가치
				let f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x[0].type.includes(es.type) && es.positive)));
				if (f) part.push(x[0]);

				// 감소치
				f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x[0].type.includes(es.type) && !es.positive)));
				if (f) part.push(x[1]);

				if (part.length > 0)
					ret.push(part);
			} else {
				// 상수치
				const f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x.type.includes(es.type))));
				if (f) ret.push(x);
			}
		});

		const dict: Record<string, EffectFilterListType> = {};
		const filters = BuffEffectList;
		ret.forEach(b => {
			Object.keys(filters).forEach(x => {
				const k = x as BuffEffectListGroupKeys;
				if (filters[k].some(y => Array.isArray(b) ? y.text === b[0].text : y.text === b.text)) {
					if (!(x in dict)) dict[x] = [];
					dict[x].push(b);
				}
			});
		});
		return dict;
	})();

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
					<Icon icon="table" class="me-1" />
					<Locale k="UNITS_VIEW_TABLE" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "list")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "list") }
				>
					<Icon icon="grid-3x3-gap-fill" class="me-1" />
					<Locale k="UNITS_VIEW_LIST" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "group")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "group") }
				>
					<Icon icon="tags-fill" class="me-1" />
					<Locale k="UNITS_VIEW_GROUP" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "skin")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "skin") }
				>
					<Icon icon="tshirt" class="me-1" />
					<Locale k="UNITS_VIEW_SKIN" />
				</button>
				<button
					type="button"
					class={ `btn btn-outline-primary ${isActive(Store.Units.DisplayType.value === "time")}` }
					onClick={ (): void => void (Store.Units.DisplayType.value = "time") }
				>
					<Icon icon="hammer" class="me-1" />
					<Locale k="UNITS_VIEW_CREATIONTIME" />
				</button>
			</div>
		</div>

		{ Store.Units.DisplayType.value !== "skin"
			? <div class="card text-start mb-4">
				<div class="card-body">
					<div class="row mb-2">
						<div class="col">
							<div class="btn-group mx-2 mb-2">
								<button
									class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.SS])}` }
									onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.SS]) }
								>SS</button>
								<button
									class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.S])}` }
									onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.S]) }
								>S</button>
								<button
									class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.A])}` }
									onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.A]) }
								>A</button>
								<button
									class={ `btn btn-outline-danger ${isActive(Store.Units.Rarity[ACTOR_GRADE.B])}` }
									onClick={ () => toggle(Store.Units.Rarity[ACTOR_GRADE.B]) }
								>B</button>
							</div>
							<div class="btn-group mx-2 mb-2">
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.LIGHT])}` }
									onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.LIGHT]) }
								>
									<Locale k="COMMON_UNIT_TYPE_LIGHT" />
								</button>
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.FLYING])}` }
									onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.FLYING]) }
								>
									<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
								</button>
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.Type[ACTOR_CLASS.HEAVY])}` }
									onClick={ () => toggle(Store.Units.Type[ACTOR_CLASS.HEAVY]) }
								>
									<Locale k="COMMON_UNIT_TYPE_HEAVY" />
								</button>
							</div>
							<div class="btn-group mx-2 mb-2">
								<button
									class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.ATTACKER])}` }
									onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.ATTACKER]) }
								>
									<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
								</button>
								<button
									class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.DEFENDER])}` }
									onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.DEFENDER]) }
								>
									<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
								</button>
								<button
									class={ `btn btn-outline-warning ${isActive(Store.Units.Role[ROLE_TYPE.SUPPORTER])}` }
									onClick={ () => toggle(Store.Units.Role[ROLE_TYPE.SUPPORTER]) }
								>
									<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
								</button>
							</div>
							<div class="btn-group mx-2 mb-2">
								<button
									class={ `btn btn-outline-dark ${isActive(Store.Units.Body[ACTOR_BODY_TYPE.BIOROID])}` }
									onClick={ () => toggle(Store.Units.Body[ACTOR_BODY_TYPE.BIOROID]) }
								>
									<Locale k="COMMON_UNIT_BODY_BIOROID" />
								</button>
								<button
									class={ `btn btn-outline-dark ${isActive(Store.Units.Body[ACTOR_BODY_TYPE.AGS])}` }
									onClick={ () => toggle(Store.Units.Body[ACTOR_BODY_TYPE.AGS]) }
								>
									<Locale k="COMMON_UNIT_BODY_AGS" />
								</button>
							</div>
						</div>
					</div>

					<div class="row mb-4">
						<div class="col">
							<div class="input-group">
								<input
									class="form-control"
									value={ Store.Units.SearchText.value }
									onInput={ (e): void => Store.Units.SearchText.value = ((e.target as any).value) }
									placeholder={ LocaleGet("UNITS_SEARCH_PLACEHOLDER") } />

								<button class="btn btn-danger" onClick={ () => (Store.Units.SearchText.value = "") }>
									<Locale k="UNITS_SEARCH_RESET" />
								</button>
							</div>
						</div>
					</div>

					<hr class="my-2" />

					{ [0, 1]
						.map(i => [Store.Units.Skill[i], i] as [typeof Store.Units.Skill[0], number])
						.map(([skill, i]) => <>
							<div class={ `row ${style.ActiveSkillFilterRow}` }>
								<div class=" col-md-auto col-12 filter-label">
									<Locale k="UNITS_FILTERS_ACTIVE_LABEL" p={ [i + 1] } />
								</div>
								<div class=" col-md col-12">
									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-secondary ${isActive(skill.Elem.value[0])}` }
											onClick={ () => toggle(Store.Units.Skill[i].Elem, 0) }
										>
											<ElemIcon class="me-0" elem="physics" />
										</button>
										<button
											class={ `btn btn-outline-secondary ${isActive(skill.Elem.value[1])}` }
											onClick={ () => toggle(Store.Units.Skill[i].Elem, 1) }
										>
											<ElemIcon class="me-0" elem="fire" />
										</button>
										<button
											class={ `btn btn-outline-secondary ${isActive(skill.Elem.value[2])}` }
											onClick={ () => toggle(Store.Units.Skill[i].Elem, 2) }
										>
											<ElemIcon class="me-0" elem="ice" />
										</button>
										<button
											class={ `btn btn-outline-secondary ${isActive(skill.Elem.value[3])}` }
											onClick={ () => toggle(Store.Units.Skill[i].Elem, 3) }
										>
											<ElemIcon class="me-0" elem="lightning" />
										</button>
									</div>

									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-danger ${isActive(skill.GridType.value === 0)}` }
											onClick={ () => Store.Units.Skill[i].GridType.value = 0 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_GRID_ALL" />
										</button>
										<button
											class={ `btn btn-outline-danger ${isActive(skill.GridType.value === 1)}` }
											onClick={ () => Store.Units.Skill[i].GridType.value = 1 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_GRID_ONLY" />
										</button>
										<button
											class={ `btn btn-outline-danger ${isActive(skill.GridType.value === 2)}` }
											onClick={ () => Store.Units.Skill[i].GridType.value = 2 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_GRID_TARGET" />
										</button>
									</div>

									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-danger ${isActive(skill.DismissGuardType.value === 0)}` }
											onClick={ () => Store.Units.Skill[i].DismissGuardType.value = 0 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ALL" />
										</button>
										<button
											class={ `btn btn-outline-danger ${isActive(skill.DismissGuardType.value === 1)}` }
											onClick={ () => Store.Units.Skill[i].DismissGuardType.value = 1 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ONLY" />
										</button>
										<button
											class={ `btn btn-outline-danger ${isActive(skill.DismissGuardType.value === 2)}` }
											onClick={ () => Store.Units.Skill[i].DismissGuardType.value = 2 }
										>
											<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_NOT" />
										</button>
									</div>
								</div>
							</div >
							<hr class="my-2" />
						</>) }

					<div class="row">
						<div class="col-md-auto col-12 filter-label">
							<Locale k="UNITS_FILTERS_SKILL_EFFECTS_LABEL" />
						</div>
						<div class="col-md col-12">
							<div class="btn-group mx-1 mb-2">
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.EffectTarget.value.includes("self"))}` }
									onClick={ (): void => toggleList(Store.Units.EffectTarget, "self") }
								>
									<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SELF" />
								</button>
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.EffectTarget.value.includes("team"))}` }
									onClick={ (): void => toggleList(Store.Units.EffectTarget, "team") }
								>
									<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SQUAD" />
								</button>
								<button
									class={ `btn btn-outline-success ${isActive(Store.Units.EffectTarget.value.includes("enemy"))}` }
									onClick={ (): void => toggleList(Store.Units.EffectTarget, "enemy") }
								>
									<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_ENEMY" />
								</button>
							</div>

							<EffectFilterPopup
								class="mx-1 mb-2"
								display="UNITS_FILTERS_SKILL_EFFECTS_TOGGLE"
								effects={ UnitEffects }
								list={ Store.Units.EffectFilters.value }
								setter={ (list: EffectFilterListType) => (Store.Units.EffectFilters.value = list) }
							/>
						</div>
					</div>
					{/* <hr class="my-2" />

							<div class="row">
							<div class="col-md-auto col-12 filter-label">
								<Locale k="UNIT_FILTERS_ROGUELIKE_SKILL" />
							</div>
							<div class="col-md col-12">
								<button
									class="btn btn-substory dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									data-bs-auto-close="outside"
									aria-expanded="false"
								>
									<Locale k="UNIT_FILTERS_ROGUELIKE_SKILL_BUTTON" />
								</button>
								<ul class="dropdown-menu">
									{ new Array(11)
										.fill(0)
										.map((_, i) => <li>
											<a
												href="#"
												class={ `dropdown-item ${isActive(Filters.RoguelikeSkill.includes(i))}` }
												onClick={ (e): void => {
													e.preventDefault();
													e.stopPropagation();
													toggleUnitsFilterRoguelikeSkill(i);
												} }
											>
												<Locale k={ `RogueSkill_${i}` } />
											</a>
										</li>)
									}
								</ul>
							</div>
						</div> */}
				</div>
			</div>
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
