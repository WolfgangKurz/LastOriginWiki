import { FunctionalComponent } from "preact";
import { useEffect, useMemo } from "preact/hooks";
import Decimal from "decimal.js";

import Store from "@/store";

import { DecomposeHangulSyllable, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { ACTOR_GRADE, SKILL_ATTR, TARGET_TYPE } from "@/types/Enums";
import { FilterableUnit, FilterableUnitSkill } from "@/types/DB/Unit.Filterable";
import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";
import { StatType } from "@/types/Stat";

import { useLocale } from "@/libs/Locale";
import { BuildClass } from "@/libs/Class";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Button from "@/components/Button";
import Loading from "@/components/loading";
import IconTable from "@/components/bootstrap-icon/icons/Table";
import IconGrid3x3GapFill from "@/components/bootstrap-icon/icons/Grid3x3GapFill";
import IconSearch from "@/components/bootstrap-icon/icons/Search";
import IconListCheck from "@/components/bootstrap-icon/icons/ListCheck";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";
import IconHanger from "@/components/Icons/IconHanger";

import SimpleSearch from "./search/SimpleSearch";
import AdvancedSearch, { Condition, ConditionActiveTarget, ConditionBuffSlot, ConditionCategory, ConditionCompare, ConditionCompareYN, ConditionStatRarity, ConditionStatType, IsInvalidBuffType } from "./search/AdvancedSearch";

import UnitsTable from "./units-table";
import UnitsList from "./units-list";
import UnitsSkin from "./units-skin";
import UnitsBuffGrouped from "./units-buff-grouped";

import style from "./style.module.scss";

export interface UnitsListProps {
	list: FilterableUnit[];
}

const Units: FunctionalComponent = () => {
	const [loc] = useLocale();

	useEffect(() => {
		SetMeta(["description", "twitter:description"], "전투원의 목록을 표시합니다. 원하는 전투원을 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(loc["MENU_UNITS"]);
	}, [loc]);

	const FilterableUnitDB = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);

	const UnitList = useMemo((): FilterableUnit[] => {
		if (!FilterableUnitDB) return [];

		const conds = Store.Units.AdvSearchConds.value;

		if (Store.Units.DisplayType.value === "skin") return FilterableUnitDB;

		if (Store.Units.SearchType.value === "simple") {
			const input = new RegExp(
				Store.Units.SearchText.value.replaceAll(" ", ""), // ignore space
				"i",
			);

			return FilterableUnitDB
				.filter(x => {
					try {
						const name = (loc[`UNIT_${x.uid}`] || "").replaceAll(" ", ""); // ignore space
						const firstName = name
							.split("")
							.map(x => DecomposeHangulSyllable(x) || x)
							.map(x => typeof x === "object" ? x.initial || "" : x)
							.join("");

						const alias = (loc[`UNIT_ALIAS_${x.uid}`] || "").replaceAll(" ", ""); // ignore space
						const aliasFirstName = alias
							.split("")
							.map(x => DecomposeHangulSyllable(x) || x)
							.map(x => typeof x === "object" ? x.initial || "" : x)
							.join("");

						return input.test(name) || input.test(firstName) ||
							input.test(alias) || input.test(aliasFirstName);
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
		function StatToKey (stat: ConditionStatType): StatType {
			switch (stat) {
				case ConditionStatType.ATK: return "ATK";
				case ConditionStatType.DEF: return "DEF";
				case ConditionStatType.HP: return "HP";
				case ConditionStatType.ACC: return "ACC";
				case ConditionStatType.CRI: return "CRI";
				case ConditionStatType.EVA: return "EVA";
				case ConditionStatType.SPD: return "SPD";
				case ConditionStatType.Res_Fire: return "ResistFire";
				case ConditionStatType.Res_Ice: return "ResistIce";
				case ConditionStatType.Res_Lightning: return "ResistLightning";
			}
		}
		function LevelStat (stat: [number, number], level: number): number {
			const diff = new Decimal(stat[1] - stat[0]).div(99); // 1 ~ 100
			return new Decimal(stat[0]).add(diff.mul(level - 1)).toNumber();
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
						case ConditionCompare.FromTo: return c.rarity[0] <= x.rarity && x.rarity <= c.rarity[1];
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
				case ConditionCategory.Stat:
					{
						const _rarityTable: Record<
							Exclude<ConditionStatRarity, ConditionStatRarity.Base | ConditionStatRarity.Last>,
							ACTOR_GRADE
						> = {
							[ConditionStatRarity.B]: ACTOR_GRADE.B,
							[ConditionStatRarity.A]: ACTOR_GRADE.A,
							[ConditionStatRarity.S]: ACTOR_GRADE.S,
							[ConditionStatRarity.SS]: ACTOR_GRADE.SS,
						};
						const _rarity = (
							c.cond_rarity === ConditionStatRarity.Base
								? x.rarity
								: c.cond_rarity === ConditionStatRarity.Last
									? x.promo ? x.promo[x.promo.length - 1] : x.rarity
									: _rarityTable[c.cond_rarity]
						) - x.rarity;
						if (_rarity < 0) return false;
						if (_rarity >= x.stat.length) return false;
						const _stat = StatToKey(c.stat);
						const _value = ["ATK", "DEF", "HP"].includes(_stat)
							? LevelStat(x.stat[_rarity][_stat], c.level)
							: _stat.startsWith("Resist")
								? {
									ResistFire: x.stat[_rarity].Resist.fire,
									ResistIce: x.stat[_rarity].Resist.ice,
									ResistLightning: x.stat[_rarity].Resist.lightning,
								}[_stat]
								: x.stat[_rarity][_stat];
						switch (c.compare) {
							case ConditionCompare.Equal: return _value === c.value;
							case ConditionCompare.NotEqual: return _value !== c.value;
							case ConditionCompare.Less: return _value < c.value;
							case ConditionCompare.LessEqual: return _value <= c.value;
							case ConditionCompare.Bigger: return _value > c.value;
							case ConditionCompare.BiggerEqual: return _value >= c.value;
							case ConditionCompare.FromTo: return c.value[0] <= _value && _value <= c.value[1];
						}
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

							if (!("buffs" in r)) return false; // unknown buff

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
		loc,
		FilterableUnitDB,
		Store.Units.DisplayType.value,
		Store.Units.SearchType.value,
		Store.Units.AdvSearchConds.value,
		...Object.values(Store.Units.Rarity).map(r => r.value),
		...Object.values(Store.Units.Type).map(r => r.value),
		...Object.values(Store.Units.Role).map(r => r.value),
		...Object.values(Store.Units.Body).map(r => r.value),
		Store.Units.SearchText.value,
	]);

	return <div class="chars">
		<div class="text-center mb-3">
			<Button.Group>
				<Button
					class={ style.DisplayTab }
					variant="primary"
					outline={ Store.Units.DisplayType.value !== "table" }
					onClick={ () => Store.Units.DisplayType.value = "table" }
				>
					<IconTable class="mx-1" />
					<Locale k="UNITS_VIEW_TABLE" />
				</Button>
				<Button
					class={ style.DisplayTab }
					variant="primary"
					outline={ Store.Units.DisplayType.value !== "list" }
					onClick={ () => Store.Units.DisplayType.value = "list" }
				>
					<IconGrid3x3GapFill class="mx-1" />
					<Locale k="UNITS_VIEW_LIST" />
				</Button>
				<Button
					class={ style.DisplayTab }
					variant="primary"
					outline={ Store.Units.DisplayType.value !== "skin" }
					onClick={ () => Store.Units.DisplayType.value = "skin" }
				>
					<IconHanger class="mx-1" />
					<Locale k="UNITS_VIEW_SKIN" />
				</Button>
				<Button
					class={ style.DisplayTab }
					variant="primary"
					outline={ Store.Units.DisplayType.value !== "buff_grouped" }
					onClick={ () => Store.Units.DisplayType.value = "buff_grouped" }
				>
					<IconFilter class="mx-1" />
					<Locale k="UNITS_VIEW_BUFF_GROUPED" />
				</Button>
			</Button.Group>
		</div>

		{ Store.Units.DisplayType.value !== "skin"
			? <>
				<div class="card text-start mb-4">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a
									class={ BuildClass("nav-link", isActive(Store.Units.SearchType.value === "simple")) }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										Store.Units.SearchType.value = "simple";
									} }
								>
									<IconSearch class="me-1" />
									<Locale k="SEARCH_SIMPLE" />
								</a>
							</li>
							<li class="nav-item">
								<a
									class={ BuildClass("nav-link", isActive(Store.Units.SearchType.value === "advanced")) }
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										Store.Units.SearchType.value = "advanced";
									} }
								>
									<IconListCheck class="me-1" />
									<Locale k="SEARCH_ADVANCED" />
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<div class={ BuildClass(Store.Units.SearchType.value !== "simple" && "d-none") }>
							<SimpleSearch />
						</div>
						<div class={ BuildClass(Store.Units.SearchType.value !== "advanced" && "d-none") }>
							<AdvancedSearch
								conds={ Store.Units.AdvSearchConds.value }
								onUpdate={ (conds) => Store.Units.AdvSearchConds.value = conds }
							/>
						</div>
					</div>
				</div>
			</>
			: <></>
		}

		{ !FilterableUnitDB
			? <Loading.Data />
			: [
				Store.Units.DisplayType.value === "table" && <UnitsTable list={ UnitList } />,
				Store.Units.DisplayType.value === "list" && <UnitsList list={ UnitList } />,
				Store.Units.DisplayType.value === "skin" && <UnitsSkin list={ UnitList } />,
				Store.Units.DisplayType.value === "buff_grouped" && <UnitsBuffGrouped list={ UnitList } />,
			]
		}
	</div >;
};
export default Units;
