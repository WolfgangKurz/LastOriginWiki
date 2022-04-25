import { FunctionalComponent } from "preact";

import Store from "@/store";

import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR } from "@/types/Enums";
import { EffectFilterListItemPM, EffectFilterListItemSingle, EffectFilterListType } from "@/types/Buff";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Loader, { GetJson, StaticDB } from "@/components/loader";
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

	return Store.ConnectDirect(
		"Units",
		({
			Units: Filters,
			toggleUnitsFilterRarityB,
			toggleUnitsFilterRarityA,
			toggleUnitsFilterRarityS,
			toggleUnitsFilterRaritySS,

			toggleUnitsFilterTypeLight,
			toggleUnitsFilterTypeMobility,
			toggleUnitsFilterTypeHeavy,

			toggleUnitsFilterRoleAttacker,
			toggleUnitsFilterRoleDefender,
			toggleUnitsFilterRoleSupporter,

			toggleUnitsFilterBodyBioroid,
			toggleUnitsFilterBodyAGS,

			toggleUnitsFilterSkillElem,
			setUnitsFilterSkillGridType,
			setUnitsFilterSkillDismissGuardType,

			toggleUnitsFilterEffectTarget,
			// toggleUnitsFilterRoguelikeSkill,
			setUnitEffectFilters,

			setUnitDisplayType: setDisplayType,
			setUnitSearchText: setSearchText,
		}) => <Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
			const UnitEffects = ((): Record<string, EffectFilterListType> => {
				const ret: EffectFilterListType = [];
				const _ = <T extends unknown> (__: T | undefined): T => __ as T;

				const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
				if (!FilterableUnitDB) return {};

				Filters.EffectFilters.forEach(x => {
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
				const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
				if (!FilterableUnitDB) return false;

				const target = FilterableUnitDB.find(x => x.uid === unit.uid);
				if (!target) return false;

				return Filters.EffectFilters
					.reduce((p, c) => Array.isArray(c) ? [...p, ...c] : [...p, c], [] as Array<EffectFilterListItemSingle | EffectFilterListItemPM>)
					.filter(x => x.selected)
					.every(selectedBuff => {
						return target.buffs.flat()
							.filter(targetBuff => Filters.EffectTarget.includes(targetBuff.target))
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

				if (Filters.DisplayType === "skin") return FilterableUnitDB;

				const elem = new Array(2)
					.fill(0)
					.map((_, i) => [
						Filters.Skill[i].Elem[SKILL_ATTR.PHYSICS] ? SKILL_ATTR.PHYSICS : -1,
						Filters.Skill[i].Elem[SKILL_ATTR.FIRE] ? SKILL_ATTR.FIRE : -1,
						Filters.Skill[i].Elem[SKILL_ATTR.ICE] ? SKILL_ATTR.ICE : -1,
						Filters.Skill[i].Elem[SKILL_ATTR.LIGHTNING] ? SKILL_ATTR.LIGHTNING : -1,
					].filter(y => y > -1));

				return FilterableUnitDB
					.filter(x => {
						try {
							const name = LocaleGet(`UNIT_${x.uid}`);
							const firstName = name
								.split("")
								.map(DecomposeHangulSyllable)
								.map(x => x.initial)
								.join("");

							return new RegExp(Filters.SearchText, "i").test(name) ||
								new RegExp(Filters.SearchText, "i").test(firstName);
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
						if (!Filters.Rarity[x.rarity]) return false;
						if (!Filters.Type[x.type]) return false;
						if (!Filters.Role[x.role]) return false;
						if (!Filters.Body[x.body]) return false;

						const elem1 = elem[0].some(y => y === x.skills[1].elem || (x.skills.F1 && y === x.skills.F1.elem));
						const grid1 = Filters.Skill[0].GridType === 0 ||
							(Filters.Skill[0].GridType === 1 && (x.skills[1].grid || (x.skills.F1 && x.skills.F1.grid))) ||
							(Filters.Skill[0].GridType === 2 && !(x.skills[1].grid || (x.skills.F1 && x.skills.F1.grid)));
						const guard1 = Filters.Skill[0].DismissGuardType === 0 ||
							(
								Filters.Skill[0].DismissGuardType === 1 &&
								(x.skills[1].guard || (x.skills.F1 && x.skills.F1.guard))
							) ||
							(
								Filters.Skill[0].DismissGuardType === 2 &&
								!(x.skills[1].guard || (x.skills.F1 && x.skills.F1.guard))
							);

						const elem2 = elem[1].some(y => y === x.skills[2].elem || (x.skills["F2"] && y === x.skills["F2"].elem));
						const grid2 = Filters.Skill[1].GridType === 0 ||
							(Filters.Skill[1].GridType === 1 && (x.skills[2].grid || (x.skills["F2"] && x.skills["F2"].grid))) ||
							(Filters.Skill[1].GridType === 2 && !(x.skills[2].grid || (x.skills["F2"] && x.skills["F2"].grid)));
						const guard2 = Filters.Skill[1].DismissGuardType === 0 ||
							(
								Filters.Skill[1].DismissGuardType === 1 &&
								(x.skills[2].guard || (x.skills["F2"] && x.skills["F2"].guard))
							) ||
							(
								Filters.Skill[1].DismissGuardType === 2 &&
								!(x.skills[2].guard || (x.skills["F2"] && x.skills["F2"].guard))
							);

						if (!(
							(elem1 && grid1 && guard1) ||
							(elem2 && grid2 && guard2)
						)) return false;

						return HasFilteredEffect(x);
					});
			}

			return <div class="chars">
				<div class="text-center mb-3">
					<div class={ `btn-group ${style.TabButtons}` }>
						<button
							type="button"
							class={ `btn btn-outline-primary ${isActive(Filters.DisplayType === "table")}` }
							onClick={ (): void => setDisplayType("table") }
						>
							<Icon icon="table" class="me-1" />
							<Locale k="UNITS_VIEW_TABLE" />
						</button>
						<button
							type="button"
							class={ `btn btn-outline-primary ${isActive(Filters.DisplayType === "list")}` }
							onClick={ (): void => setDisplayType("list") }
						>
							<Icon icon="grid-3x3-gap-fill" class="me-1" />
							<Locale k="UNITS_VIEW_LIST" />
						</button>
						<button
							type="button"
							class={ `btn btn-outline-primary ${isActive(Filters.DisplayType === "group")}` }
							onClick={ (): void => setDisplayType("group") }
						>
							<Icon icon="tags-fill" class="me-1" />
							<Locale k="UNITS_VIEW_GROUP" />
						</button>
						<button
							type="button"
							class={ `btn btn-outline-primary ${isActive(Filters.DisplayType === "skin")}` }
							onClick={ (): void => setDisplayType("skin") }
						>
							<Icon icon="tshirt" class="me-1" />
							<Locale k="UNITS_VIEW_SKIN" />
						</button>
						<button
							type="button"
							class={ `btn btn-outline-primary ${isActive(Filters.DisplayType === "time")}` }
							onClick={ (): void => setDisplayType("time") }
						>
							<Icon icon="hammer" class="me-1" />
							<Locale k="UNITS_VIEW_CREATIONTIME" />
						</button>
					</div>
				</div>

				{ Filters.DisplayType !== "skin"
					? <div class="card text-start mb-4">
						<div class="card-body">
							<div class="row mb-2">
								<div class="col">
									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.SS])}` }
											onClick={ toggleUnitsFilterRaritySS }
										>SS</button>
										<button
											class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.S])}` }
											onClick={ toggleUnitsFilterRarityS }
										>S</button>
										<button
											class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.A])}` }
											onClick={ toggleUnitsFilterRarityA }
										>A</button>
										<button
											class={ `btn btn-outline-danger ${isActive(Filters.Rarity[ACTOR_GRADE.B])}` }
											onClick={ toggleUnitsFilterRarityB }
										>B</button>
									</div>
									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.LIGHT])}` }
											onClick={ toggleUnitsFilterTypeLight }
										>
											<Locale k="COMMON_UNIT_TYPE_LIGHT" />
										</button>
										<button
											class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.MOBILITY])}` }
											onClick={ toggleUnitsFilterTypeMobility }
										>
											<Locale k="COMMON_UNIT_TYPE_MOBILITY" />
										</button>
										<button
											class={ `btn btn-outline-success ${isActive(Filters.Type[ACTOR_CLASS.HEAVY])}` }
											onClick={ toggleUnitsFilterTypeHeavy }
										>
											<Locale k="COMMON_UNIT_TYPE_HEAVY" />
										</button>
									</div>
									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.ATTACKER])}` }
											onClick={ toggleUnitsFilterRoleAttacker }
										>
											<Locale k="COMMON_UNIT_ROLE_ATTACKER" />
										</button>
										<button
											class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.DEFENDER])}` }
											onClick={ toggleUnitsFilterRoleDefender }
										>
											<Locale k="COMMON_UNIT_ROLE_DEFENDER" />
										</button>
										<button
											class={ `btn btn-outline-warning ${isActive(Filters.Role[ROLE_TYPE.SUPPORTER])}` }
											onClick={ toggleUnitsFilterRoleSupporter }
										>
											<Locale k="COMMON_UNIT_ROLE_SUPPORTER" />
										</button>
									</div>
									<div class="btn-group mx-2 mb-2">
										<button
											class={ `btn btn-outline-dark ${isActive(Filters.Body[ACTOR_BODY_TYPE.BIOROID])}` }
											onClick={ toggleUnitsFilterBodyBioroid }
										>
											<Locale k="COMMON_UNIT_BODY_BIOROID" />
										</button>
										<button
											class={ `btn btn-outline-dark ${isActive(Filters.Body[ACTOR_BODY_TYPE.AGS])}` }
											onClick={ toggleUnitsFilterBodyAGS }
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
											value={ Filters.SearchText }
											onInput={ (e): void => setSearchText((e.target as any).value) }
											placeholder={ LocaleGet("UNITS_SEARCH_PLACEHOLDER") } />

										<button class="btn btn-danger" onClick={ (): void => setSearchText("") }>
											<Locale k="UNITS_SEARCH_RESET" />
										</button>
									</div>
								</div>
							</div>

							<hr class="my-2" />

							{ [0, 1].map(i => <>
								<div class="row">
									<div class=" col-md-auto col-12 filter-label">
										<Locale k="UNITS_FILTERS_ACTIVE_LABEL" p={ [i + 1] } />
									</div>
									<div class=" col-md col-12">
										<div class="btn-group mx-2 mb-2">
											<button
												class={ `btn btn-outline-secondary ${isActive(Filters.Skill[i].Elem[0])}` }
												onClick={ (): void => toggleUnitsFilterSkillElem(i, 0) }
											>
												<ElemIcon class="me-0" elem="physics" />
											</button>
											<button
												class={ `btn btn-outline-secondary ${isActive(Filters.Skill[i].Elem[1])}` }
												onClick={ (): void => toggleUnitsFilterSkillElem(i, 1) }
											>
												<ElemIcon class="me-0" elem="fire" />
											</button>
											<button
												class={ `btn btn-outline-secondary ${isActive(Filters.Skill[i].Elem[2])}` }
												onClick={ (): void => toggleUnitsFilterSkillElem(i, 2) }
											>
												<ElemIcon class="me-0" elem="ice" />
											</button>
											<button
												class={ `btn btn-outline-secondary ${isActive(Filters.Skill[i].Elem[3])}` }
												onClick={ (): void => toggleUnitsFilterSkillElem(i, 3) }
											>
												<ElemIcon class="me-0" elem="lightning" />
											</button>
										</div>

										<div class="btn-group mx-2 mb-2">
											<button
												class={ `btn btn-outline-danger ${isActive(Filters.Skill[i].GridType === 0)}` }
												onClick={ (): void => setUnitsFilterSkillGridType(i, 0) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_GRID_ALL" />
											</button>
											<button
												class={ `btn btn-outline-danger ${isActive(Filters.Skill[i].GridType === 1)}` }
												onClick={ (): void => setUnitsFilterSkillGridType(i, 1) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_GRID_ONLY" />
											</button>
											<button
												class={ `btn btn-outline-danger ${isActive(Filters.Skill[i].GridType === 2)}` }
												onClick={ (): void => setUnitsFilterSkillGridType(i, 2) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_GRID_TARGET" />
											</button>
										</div>

										<div class="btn-group mx-2 mb-2">
											<button
												class={ `btn btn-outline-primary ${isActive(Filters.Skill[i].DismissGuardType === 0)}` }
												onClick={ (): void => setUnitsFilterSkillDismissGuardType(i, 0) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ALL" />
											</button>
											<button
												class={ `btn btn-outline-primary ${isActive(Filters.Skill[i].DismissGuardType === 1)}` }
												onClick={ (): void => setUnitsFilterSkillDismissGuardType(i, 1) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ONLY" />
											</button>
											<button
												class={ `btn btn-outline-primary ${isActive(Filters.Skill[i].DismissGuardType === 2)}` }
												onClick={ (): void => setUnitsFilterSkillDismissGuardType(i, 2) }
											>
												<Locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_NOT" />
											</button>
										</div>
									</div>
								</div>
								<hr class="my-2" />
							</>) }

							<div class="row">
								<div class="col-md-auto col-12 filter-label">
									<Locale k="UNITS_FILTERS_SKILL_EFFECTS_LABEL" />
								</div>
								<div class="col-md col-12">
									<div class="btn-group me-1">
										<button
											class={ `btn btn-outline-success ${isActive(Filters.EffectTarget.includes("self"))}` }
											onClick={ (): void => toggleUnitsFilterEffectTarget("self") }
										>
											<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SELF" />
										</button>
										<button
											class={ `btn btn-outline-success ${isActive(Filters.EffectTarget.includes("team"))}` }
											onClick={ (): void => toggleUnitsFilterEffectTarget("team") }
										>
											<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SQUAD" />
										</button>
										<button
											class={ `btn btn-outline-success ${isActive(Filters.EffectTarget.includes("enemy"))}` }
											onClick={ (): void => toggleUnitsFilterEffectTarget("enemy") }
										>
											<Locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_ENEMY" />
										</button>
									</div>

									<EffectFilterPopup
										class="ms-2"
										display="UNITS_FILTERS_SKILL_EFFECTS_TOGGLE"
										effects={ UnitEffects }
										list={ Filters.EffectFilters }
										setter={ setUnitEffectFilters }
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

				{ Filters.DisplayType === "table" ? <UnitsTable list={ UnitList() } /> : <></> }
				{ Filters.DisplayType === "list" ? <UnitsList list={ UnitList() } /> : <></> }
				{ Filters.DisplayType === "group" ? <UnitsGroup list={ UnitList() } /> : <></> }
				{ Filters.DisplayType === "skin" ? <UnitsSkin list={ UnitList() } /> : <></> }
				{ Filters.DisplayType === "time" ? <UnitsTimetable list={ UnitList() } /> : <></> }
			</div>;
		}) } />,
	);
};
export default Units;
