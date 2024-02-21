import { useCallback, useEffect, useRef, useState } from "preact/hooks";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, BUFF_ATTR_TYPE, BUFF_OVERLAP_TYPE, ROLE_TYPE, TARGET_TYPE } from "@/types/Enums";
import BuffCategory from "@/types/DB/BuffCategory";
import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";
import { BUFFEFFECT_TRIGGER_TYPE } from "@/types/BuffTrigger";
import { BUFFEFFECT_ERASE_TYPE } from "@/types/BuffErase";

import { AssetsRoot } from "@/libs/Const.1";
import { CurrentDB } from "@/libs/DB";
import { useUpdate } from "@/libs/hooks";
import { BuildClass } from "@/libs/Class";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import IconPlusCircleFill from "@/components/bootstrap-icon/icons/PlusCircleFill";
import IconXCircleFill from "@/components/bootstrap-icon/icons/XCircleFill";
import IconQuestionCircleFill from "@/components/bootstrap-icon/icons/QuestionCircleFill";

import style from "./style.module.scss";

type ConditionLogical = "AND" | "OR";
export enum ConditionCategory {
	Rarity = 0,
	Class,
	Role,
	Body,
	Active_Target,
	Active_NoGuard,
	Active_Grid,
	Elem,
	Buff,
}
export enum ConditionCompareType {
	None = -1,
	Full = 0,
	EqualNotEqual = 1,
	ExistsNotExists = 2,
}
export enum ConditionCompare {
	Equal = 0,
	NotEqual = 1,
	Less = 2,
	LessEqual = 3,
	BiggerEqual = 4,
	Bigger = 5,
}
export enum ConditionCompareYN {
	Equal = 0,
	NotEqual = 1,
}
export enum ConditionCompareEN {
	Exists = 0,
	NotExists = 1,
}
export enum ConditionBuffSlot {
	AnySlot,
	AnyActive,
	Active1,
	Active2,
	Passive,
}
export enum ConditionActiveTarget {
	AnyTarget,
	Team,
	Enemy,
}

interface Condition_Base {
	logicType: ConditionLogical;

	category: ConditionCategory;
}
interface Condition_Rarity extends Condition_Base {
	category: ConditionCategory.Rarity;
	compare: ConditionCompare;

	rarity: ACTOR_GRADE;
}
interface Condition_Class extends Condition_Base {
	category: ConditionCategory.Class;
	compare: ConditionCompareYN;

	class: ACTOR_CLASS;
}
interface Condition_Role extends Condition_Base {
	category: ConditionCategory.Role;
	compare: ConditionCompareYN;

	role: ROLE_TYPE;
}
interface Condition_Body extends Condition_Base {
	category: ConditionCategory.Body;
	compare: ConditionCompareYN;

	body: ACTOR_BODY_TYPE;
}
interface Condition_ActiveTarget extends Condition_Base {
	category: ConditionCategory.Active_Target;

	slot: ConditionBuffSlot;
	compare: ConditionCompareYN;
	target: ConditionActiveTarget;
}
interface Condition_ActiveNoGuard extends Condition_Base {
	category: ConditionCategory.Active_NoGuard;

	slot: ConditionBuffSlot;
	compare: ConditionCompareYN;
}
interface Condition_ActiveGrid extends Condition_Base {
	category: ConditionCategory.Active_Grid;

	slot: ConditionBuffSlot;
	compare: ConditionCompareYN;
}
interface Condition_Elem extends Condition_Base {
	category: ConditionCategory.Elem;

	slot: ConditionBuffSlot;
	compare: ConditionCompareYN;
	elem: "" | "physics" | "fire" | "ice" | "lightning";
}
interface Condition_Buff extends Condition_Base {
	category: ConditionCategory.Buff;

	slot: ConditionBuffSlot;
	buff: undefined | BUFFEFFECT_TYPE; // `undefined` is "Any"
	class: undefined | ACTOR_CLASS;
	role: undefined | ROLE_TYPE;
	body: undefined | ACTOR_BODY_TYPE;
	target: undefined | TARGET_TYPE;
	attr: undefined | BUFF_ATTR_TYPE;
	trigger: undefined | BUFFEFFECT_TRIGGER_TYPE;
	erase: undefined | BUFFEFFECT_ERASE_TYPE;
	overlap: undefined | BUFF_OVERLAP_TYPE;

	targetBuffEnum: undefined | BUFFEFFECT_TYPE; // `undefined` is "Any"
	targetBuffType: undefined | BUFF_ATTR_TYPE;
}
export type Condition = Condition_Rarity | Condition_Class | Condition_Role | Condition_Body |
	Condition_ActiveTarget | Condition_ActiveNoGuard | Condition_ActiveGrid | Condition_Elem |
	Condition_Buff;

const CompareTable: Record<ConditionCompare, string> = {
	[ConditionCompare.Equal]: "=",
	[ConditionCompare.NotEqual]: "≠",
	[ConditionCompare.Less]: "<",
	[ConditionCompare.LessEqual]: "≤",
	[ConditionCompare.Bigger]: ">",
	[ConditionCompare.BiggerEqual]: "≥",
};
const CompareExistsTable: Record<ConditionCompareEN, string> = {
	[ConditionCompareEN.Exists]: "EXISTS",
	[ConditionCompareEN.NotExists]: "NOTEXISTS",
};
const ClassTable: Record<ACTOR_CLASS, string> = {
	[ACTOR_CLASS.LIGHT]: "LIGHT",
	[ACTOR_CLASS.FLYING]: "MOBILITY",
	[ACTOR_CLASS.HEAVY]: "HEAVY",
};
const RoleTable: Record<ROLE_TYPE, string> = {
	[ROLE_TYPE.ATTACKER]: "ATTACKER",
	[ROLE_TYPE.DEFENDER]: "DEFENDER",
	[ROLE_TYPE.SUPPORTER]: "SUPPORTER",
};
const BodyTable: Record<Exclude<ACTOR_BODY_TYPE, ACTOR_BODY_TYPE.SUMMON | ACTOR_BODY_TYPE.TOTEM | ACTOR_BODY_TYPE.__MAX__>, string> = {
	[ACTOR_BODY_TYPE.BIOROID]: "BIOROID",
	[ACTOR_BODY_TYPE.AGS]: "AGS",
};
const SlotTable: Record<ConditionBuffSlot, string> = {
	[ConditionBuffSlot.AnySlot]: "ANYSLOT",
	[ConditionBuffSlot.AnyActive]: "ANYACTIVE",
	[ConditionBuffSlot.Active1]: "ACTIVE1",
	[ConditionBuffSlot.Active2]: "ACTIVE2",
	[ConditionBuffSlot.Passive]: "PASSIVE",
};
const EraseTable: Record<BUFFEFFECT_ERASE_TYPE, string> = {
	[BUFFEFFECT_ERASE_TYPE.ROUND]: "ROUND",
	[BUFFEFFECT_ERASE_TYPE.COUNT]: "COUNT",
	[BUFFEFFECT_ERASE_TYPE.TRIGGER]: "TRIGGER",
	[BUFFEFFECT_ERASE_TYPE.PERMANENT]: "PERMANENT",
};

const ExcludedBuffEffectTriggers: BUFFEFFECT_TRIGGER_TYPE[] = [ // 사용처가 없어? 제외
	BUFFEFFECT_TRIGGER_TYPE.BUFFED_TARGET,
	BUFFEFFECT_TRIGGER_TYPE.GRID_NO,
	BUFFEFFECT_TRIGGER_TYPE.USE_SKILL_SPEC,
	BUFFEFFECT_TRIGGER_TYPE.IF_BUFFED,
	BUFFEFFECT_TRIGGER_TYPE.ATTACK_SUCCESS_AND_IF_BUFFED,
	BUFFEFFECT_TRIGGER_TYPE.IF_ME_BUFFED,
	BUFFEFFECT_TRIGGER_TYPE.IF_ME_DEBUFFED,
	BUFFEFFECT_TRIGGER_TYPE.IF_CHAR_INGRID,
	BUFFEFFECT_TRIGGER_TYPE.USE_SKILL_ENEMY,
	BUFFEFFECT_TRIGGER_TYPE.SUMMON_CREATE,
];
const ExcludedBuffEffectTypes: BUFFEFFECT_TYPE[] = [ // 사용처가 없어 제외
	BUFFEFFECT_TYPE.STAGE_THORNS_RATIO,
	BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_VALUE,
	BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_VALUE,
	BUFFEFFECT_TYPE.STAGE_REFLECTICE_VALUE,
	BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_VALUE,
	BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_RATIO_DEFENDER,
	BUFFEFFECT_TYPE.STAGE_REFLECTICE_RATIO_DEFENDER,
	BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER,
	BUFFEFFECT_TYPE.STAGE_BLOCK_GRID, // 전체 보호 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO_LIMITED,
	BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE_LIMITED,
	BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT, // STAGE_CHARCHANGE_LIMITED 통합
	BUFFEFFECT_TYPE.STAGE_LOCKON01_TIME,
	BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_VALUE, // 받는 피해 증가 고정값 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.STAGE_AGRO_VALUE, // 공격 우선 순위 감소 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.STAGE_GRID_CHANGE, // 특정 그리도 교대 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.STAGE_ANALYZE, // 분석 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.PROVOKE_ATTACKER, // 공격자에게 도발 부여 (확장 패시브에 존재)
	BUFFEFFECT_TYPE.DAMAGE_RECOVER_THISROUND,
	BUFFEFFECT_TYPE.SAME_SKILL_HIT_DAMAGE_REDUCE,
	BUFFEFFECT_TYPE.ADD_ROLE_TYPE,
];
const CombinedBuffEffectTypes: Partial<Record<BUFFEFFECT_TYPE, BUFFEFFECT_TYPE[]>> = {
	[BUFFEFFECT_TYPE.STAGE_CHARCHANGE_LIMITED]: [BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT],
};

/**
 * @param cond 설정한 조건
 * @param value 검사하려는 버프의 값
 */
export function IsInvalidBuffType (cond: BUFFEFFECT_TYPE, value: BUFFEFFECT_TYPE) {
	if (cond in CombinedBuffEffectTypes)
		return !CombinedBuffEffectTypes[cond]!.includes(value);

	return cond !== value;
}

interface AdvancedSearchProps {
	conds: readonly Condition[];
	onUpdate: (conditions: Readonly<Condition[]>) => void;
}

const AdvancedSearch: FunctionalComponent<AdvancedSearchProps> = (props) => {
	const update = useUpdate();
	const conds = props.conds;

	const BuffCategoryDB = GetJson<BuffCategory[] | null>(StaticDB.BuffCategory);
	if (!BuffCategoryDB) JsonLoaderCore(CurrentDB, StaticDB.BuffCategory).then(() => update());

	function GetEnumKeys<T extends {}> (e: T): number[] {
		return Object.keys(e)
			.filter(r => /^[0-9]+$/.test(r))
			.map(r => parseInt(r, 10));
	}

	function updateCond (idx: number, cond: Condition): void {
		if ("compare" in cond) {
			if (cond.compare > GetCategoryCompareCount(cond.category))
				cond.compare = ConditionCompare.Equal;
		}

		switch (cond.category) {
			case ConditionCategory.Rarity:
				break;
			case ConditionCategory.Class:
				if (!("class" in cond))
					(cond as Condition_Class).class = ACTOR_CLASS.LIGHT;
				break;
			case ConditionCategory.Role:
				if (!("role" in cond))
					(cond as Condition_Role).role = ROLE_TYPE.ATTACKER;
				break;
			case ConditionCategory.Body:
				if (!("body" in cond))
					(cond as Condition_Body).body = ACTOR_BODY_TYPE.BIOROID;
				break;
			case ConditionCategory.Active_Target:
				if (!("slot" in cond))
					(cond as Condition_ActiveTarget).slot = ConditionBuffSlot.AnyActive;
				if (!("target" in cond))
					(cond as Condition_ActiveTarget).target = ConditionActiveTarget.AnyTarget;
				break;
			case ConditionCategory.Active_NoGuard:
				if (!("slot" in cond))
					(cond as Condition_ActiveNoGuard).slot = ConditionBuffSlot.AnyActive;
				break;
			case ConditionCategory.Active_Grid:
				if (!("slot" in cond))
					(cond as Condition_ActiveGrid).slot = ConditionBuffSlot.AnyActive;
				break;
			case ConditionCategory.Elem:
				if (!("slot" in cond))
					(cond as Condition_Elem).slot = ConditionBuffSlot.AnyActive;
				if (!("elem" in cond))
					(cond as Condition_Elem).elem = "";
				break;
			case ConditionCategory.Buff:
				if (!("slot" in cond))
					(cond as Condition_Buff).slot = ConditionBuffSlot.AnySlot;
				break;
		}

		const c = [...conds];
		c[idx] = cond;
		props.onUpdate(c);
	}
	function removeCond (idx: number): void {
		const c = [...conds];
		c.splice(idx, 1);
		props.onUpdate(c);
	}
	function DefaultCond (): Condition {
		return {
			logicType: "OR",
			compare: ConditionCompare.LessEqual,
			category: ConditionCategory.Rarity,
			rarity: ACTOR_GRADE.SS,
		};
	}

	function GetCategoryCompareCount (type: ConditionCategory): number {
		switch (type) {
			case ConditionCategory.Rarity:
				return 6; // full
			case ConditionCategory.Class:
			case ConditionCategory.Role:
			case ConditionCategory.Body:
			case ConditionCategory.Active_Target:
			case ConditionCategory.Active_NoGuard:
			case ConditionCategory.Active_Grid:
			case ConditionCategory.Elem:
				return 2; // equal & not equal
			case ConditionCategory.Buff:
				return 0; // no compare

			// return 2; // exists & not exists
		}
	}
	function GetCategoryCompareType (type: ConditionCategory): ConditionCompareType {
		switch (type) {
			case ConditionCategory.Rarity:
				return ConditionCompareType.Full; // full
			case ConditionCategory.Class:
			case ConditionCategory.Role:
			case ConditionCategory.Body:
			case ConditionCategory.Active_Target:
			case ConditionCategory.Active_NoGuard:
			case ConditionCategory.Active_Grid:
			case ConditionCategory.Elem:
				return ConditionCompareType.EqualNotEqual; // equal & not equal
			case ConditionCategory.Buff:
				return ConditionCompareType.None; // no compare
		}
	}
	function IsComparableCondition (cond: Condition): cond is Exclude<Condition, Condition_Buff> {
		return "compare" in cond && GetCategoryCompareType(cond.category) !== ConditionCompareType.None;
	}
	function GetConditionANDCount (conds: readonly Condition[], idx: number): number {
		let count = 1;
		for (let i = idx + 1; i < conds.length; i++) {
			if (conds[i].logicType === "AND")
				count++;
			else
				break;
		}
		return count;
	}
	function IsConditionANDRoot (conds: readonly Condition[], idx: number): boolean {
		return (idx === 0 || (idx > 0 && conds[idx - 1].logicType !== "AND")) && conds[idx].logicType === "AND";
	}

	function IsConditionRequiresBuffType (cond: Condition): boolean {
		if (cond.category !== ConditionCategory.Buff) return false;
		if (cond.buff === undefined) return false;

		return [
			BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM,
			BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF,
			BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF,
		].includes(cond.buff);
	}

	function RenderCompareOption (c: Condition): preact.VNode[] {
		if (!IsComparableCondition(c)) return [];

		const type = GetCategoryCompareType(c.category);
		switch (type) {
			case ConditionCompareType.None:
				return [];
			case ConditionCompareType.Full: // full
			case ConditionCompareType.EqualNotEqual: // equal & not equal
				return new Array(GetCategoryCompareCount(c.category)).fill(0).map((_, k) =>
					<option value={ k } selected={ c.compare === k }>
						{ CompareTable[k] }
					</option>
				);
			case ConditionCompareType.ExistsNotExists: // exists & not exists
				return new Array(2).fill(0).map((_, k) =>
					<option value={ k } selected={ c.compare === k }>
						<Locale k={ `SEARCH_COND_COMP_${CompareExistsTable[k]}` } />
					</option>
				);
		}
	}

	function ComputeTriggerLocale (trigger: BUFFEFFECT_TRIGGER_TYPE): string | [string, ...Array<string | number | preact.VNode>] {
		switch (trigger) {
			case BUFFEFFECT_TRIGGER_TYPE.USE_SKILL:
				return "BUFFTRIGGER_AFTER_SKILL";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN:
			case BUFFEFFECT_TRIGGER_TYPE.AFTER_ATTACKED:
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_ACTIVESKILL:
				return "BUFFTRIGGER_DAMAGED";
			case BUFFEFFECT_TRIGGER_TYPE.ATTACK_SUCCESS:
			case BUFFEFFECT_TRIGGER_TYPE.ATTACK_SUCCESS_PASSIVE:
			case BUFFEFFECT_TRIGGER_TYPE.ATTACK_SUCCESS_ACTIVESKILL:
				return "BUFFTRIGGER_ATTACK_SUCCESS";
			case BUFFEFFECT_TRIGGER_TYPE.HP_DOWN:
				return ["BUFFTRIGGER_HP_<=", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_HP" />];
			case BUFFEFFECT_TRIGGER_TYPE.HP_UP:
				return ["BUFFTRIGGER_HP_>=", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_HP" />];
			case BUFFEFFECT_TRIGGER_TYPE.FRIENDLY:
				return ["BUFFTRIGGER_IN_SQUAD", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_CHAR" />];
			case BUFFEFFECT_TRIGGER_TYPE.ENEMY:
				return ["BUFFTRIGGER_IN_ENEMY", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_CHAR" />];
			case BUFFEFFECT_TRIGGER_TYPE.FRIENDLY_DEATH:
				return "BUFFTRIGGER_TEAM_DIED";
			case BUFFEFFECT_TRIGGER_TYPE.DEATH:
				return "BUFFTRIGGER_DIED";
			case BUFFEFFECT_TRIGGER_TYPE.ENEMY_DEATH:
				return "BUFFTRIGGER_ENEMY_DIED";
			case BUFFEFFECT_TRIGGER_TYPE.ALWAYS:
				return "SEARCH_COND_BUFF_TRIGGER_NONE";
			case BUFFEFFECT_TRIGGER_TYPE.COMBAT_START:
				return "BUFFTRIGGER_BATTLE_START";
			case BUFFEFFECT_TRIGGER_TYPE.ON_ATTACK:
				return "BUFFTRIGGER_ATTACK";
			case BUFFEFFECT_TRIGGER_TYPE.ATTACKED:
			case BUFFEFFECT_TRIGGER_TYPE.ATTACKED_ACTIVESKILL:
				return "BUFFTRIGGER_ATTACKED";
			case BUFFEFFECT_TRIGGER_TYPE.WAIT:
				return "BUFFTRIGGER_WAIT";
			case BUFFEFFECT_TRIGGER_TYPE.MOVE:
				return "BUFFTRIGGER_MOVE";
			case BUFFEFFECT_TRIGGER_TYPE.ON_EVADE:
				return "BUFFTRIGGER_EVADE";
			case BUFFEFFECT_TRIGGER_TYPE.AFTER_WAVE:
				return "BUFFTRIGGER_END_WAVE";
			case BUFFEFFECT_TRIGGER_TYPE.IF_ENEMYKILL:
			case BUFFEFFECT_TRIGGER_TYPE.IF_ENEMYKILL_PASSIVE:
				return "BUFFTRIGGER_KILL";
			case BUFFEFFECT_TRIGGER_TYPE.HAVE_LESS_HP:
				return ["BUFFTRIGGER_HP_<", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_HP" />];
			case BUFFEFFECT_TRIGGER_TYPE.HAVE_MORE_HP:
				return ["BUFFTRIGGER_HP_>", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_HP" />];
			case BUFFEFFECT_TRIGGER_TYPE.AT_FRONT_ROW:
				return "BUFFTRIGGER_POS_FRONTROW";
			case BUFFEFFECT_TRIGGER_TYPE.AT_MID_ROW:
				return "BUFFTRIGGER_POS_MIDROW";
			case BUFFEFFECT_TRIGGER_TYPE.AT_BACK_ROW:
				return "BUFFTRIGGER_POS_BACKROW";
			case BUFFEFFECT_TRIGGER_TYPE.ROUND_START:
				return "BUFFTRIGGER_EVERY_ROUND";
			case BUFFEFFECT_TRIGGER_TYPE.ON_CRITICAL_HIT:
				return "BUFFTRIGGER_CRITICALED";
			case BUFFEFFECT_TRIGGER_TYPE.IF_RESURRECT:
				return "BUFFTRIGGER_RESURRECT";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_PHY:
				return "BUFFTRIGGER_DAMAGED_PHYSICS";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_FIRE:
				return "BUFFTRIGGER_DAMAGED_FIRE";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_ICE:
				return "BUFFTRIGGER_DAMAGED_ICE";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_LIGHTNING:
				return "BUFFTRIGGER_DAMAGED_THUNDER";
			case BUFFEFFECT_TRIGGER_TYPE.AFTER_COUNTER:
				return "BUFFTRIGGER_AFTER_COUNTER";
			case BUFFEFFECT_TRIGGER_TYPE.ON_EVADE_ACTIVESKILL:
				return "BUFFTRIGGER_EVADE";
			case BUFFEFFECT_TRIGGER_TYPE.BEATEN_ACTIVE_SKILL_KEY:
				return ["BUFFTRIGGER_DAMAGED_SKILL", <Locale k="SEARCH_COND_BUFF_TRIGGER_SPECIFIC_SKILL" />];
			case BUFFEFFECT_TRIGGER_TYPE.USE_ACTIVE_SKILL_1:
				return ["BUFFTRIGGER_USE_SKILL", 1];
			case BUFFEFFECT_TRIGGER_TYPE.USE_ACTIVE_SKILL_2:
				return ["BUFFTRIGGER_USE_SKILL", 2];
			case BUFFEFFECT_TRIGGER_TYPE.AFTER_SUPPORT_ATTACK_PASSIVE:
				return "BUFFTRIGGER_AFTER_SUPPORT";
			case BUFFEFFECT_TRIGGER_TYPE.AFTER_TOGETHER_ATTACK_PASSIVE:
				return "BUFFTRIGGER_AFTER_TOGETHER";
			case BUFFEFFECT_TRIGGER_TYPE.ATTACK_FAIL:
				return "BUFFTRIGGER_FAIL_ACTIVE";
			case BUFFEFFECT_TRIGGER_TYPE.ATTACK_FAIL_PASSIVE:
				return "BUFFTRIGGER_FAIL_PASSIVE";
		}
		return "";
	}

	function RenderConditions (conds: readonly Condition[]): preact.VNode {
		return <div class={ style.ConditionsTable }>
			{ conds.map((c, idx) => {
				return <>
					{ idx + 1 < conds.length
						? <div
							class={ BuildClass(style.LogicalColumn) }
							style={ {
								gridRowStart: idx + 1,
								gridRowEnd: idx + 3,
							} }
						>
							{ c.logicType === "OR"
								? <button
									class={ BuildClass(style.ButtonOR, "btn btn-sm btn-dark") }
									onClick={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, logicType: "AND" });
									} }
								>
									OR
								</button>
								: <>
									<button
										class={ BuildClass(style.ButtonAND, "btn btn-sm btn-dark") }
										onClick={ e => {
											e.preventDefault();
											updateCond(idx, { ...c, logicType: "OR" });
										} }
									>
										AND
									</button>
								</>
							}
						</div>
						: <></>
					}

					<div class={ style.ConditionColumn }>
						<div>
							<select
								class="form-select form-select-sm"
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, category: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ GetEnumKeys(ConditionCategory).map(k =>
									<option value={ k } selected={ c.category === k }>
										<Locale k={ `SEARCH_COND_CAT_${ConditionCategory[k].toUpperCase()}` } />
									</option>
								) }
							</select>
						</div>

						{ (
							c.category === ConditionCategory.Active_Target ||
							c.category === ConditionCategory.Active_NoGuard ||
							c.category === ConditionCategory.Active_Grid ||
							c.category === ConditionCategory.Elem
						) && <div>
								<select
									class="form-select form-select-sm"
									value={ c.slot }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, slot: parseInt(e.currentTarget.value, 10) });
									} }
								>
									<option value="1" selected={ c.slot === 1 }>
										<Locale k="SEARCH_COND_ELEM_SLOT_ANYACTIVE" />
									</option>
									<option value="2" selected={ c.slot === 2 }>
										<Locale k="SEARCH_COND_ELEM_SLOT_ACTIVE1" />
									</option>
									<option value="3" selected={ c.slot === 3 }>
										<Locale k="SEARCH_COND_ELEM_SLOT_ACTIVE2" />
									</option>
								</select>
							</div>
						}

						{ IsComparableCondition(c)
							? <div>
								<select
									class="form-select form-select-sm"
									value={ c.compare }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, compare: parseInt(e.currentTarget.value, 10) });
									} }
								>
									{ RenderCompareOption(c) }
								</select>
							</div>
							: <></>
						}

						{ c.category === ConditionCategory.Rarity && <div>
							<select
								class="form-select form-select-sm"
								value={ c.rarity }
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, rarity: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(4).fill(0).map((_, k) =>
									<option value={ k + 2 } selected={ c.rarity === k }>
										{ ACTOR_GRADE[k + 2] }
									</option>
								) }
							</select>
						</div> }
						{ c.category === ConditionCategory.Class && <div>
							<select
								class="form-select form-select-sm"
								value={ c.class }
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, class: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(3).fill(0).map((_, k) =>
									<option value={ k } selected={ c.class === k }>
										<Locale k={ `COMMON_UNIT_TYPE_${ClassTable[k]}` } />
									</option>
								) }
							</select>
						</div> }
						{ c.category === ConditionCategory.Role && <div>
							<select
								class="form-select form-select-sm"
								value={ c.role }
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, role: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(3).fill(0).map((_, k) =>
									<option value={ k } selected={ c.role === k }>
										<Locale k={ `COMMON_UNIT_ROLE_${RoleTable[k]}` } />
									</option>
								) }
							</select>
						</div> }
						{ c.category === ConditionCategory.Body && <div>
							<select
								class="form-select form-select-sm"
								value={ c.body }
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, body: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(2).fill(0).map((_, k) =>
									<option value={ k } selected={ c.body === k }>
										<Locale k={ `COMMON_UNIT_BODY_${BodyTable[k]}` } />
									</option>
								) }
							</select>
						</div> }
						{ c.category === ConditionCategory.Active_Target && <>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.target }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, target: parseInt(e.currentTarget.value, 10) });
									} }
								>
									<option value="0" selected={ c.target === 0 }>
										<Locale k="SERACH_COND_BUFF_TARGET_ANY" />
									</option>
									<option value="1" selected={ c.target === 1 }>
										<Locale k="SEARCH_COND_BUFF_TARGET_TEAM" />
									</option>
									<option value="2" selected={ c.target === 2 }>
										<Locale k="SEARCH_COND_BUFF_TARGET_ENEMY" />
									</option>
								</select>
							</div>
						</> }
						{ c.category === ConditionCategory.Active_NoGuard && <div>
							<small>
								<Locale k="SEARCH_COND_CAT_ACTIVE_NOGUARD" />
							</small>
						</div> }
						{ c.category === ConditionCategory.Active_Grid && <div>
							<small>
								<Locale k="SEARCH_COND_CAT_ACTIVE_GRID" />

								<BootstrapTooltip
									content={ <div class="small">
										<strong>
											<Locale k="SEARCH_COND_CAT_ACTIVE_NOGUARD_GUIDE1" />
										</strong>
										<img
											class={ style.GuideImage }
											src={ `${AssetsRoot}/ui/guide/skill_ground_target.jpg` }
										/>

										<hr class="my-2" />

										<strong>
											<Locale k="SEARCH_COND_CAT_ACTIVE_NOGUARD_GUIDE2" />
										</strong>
										<img
											class={ style.GuideImage }
											src={ `${AssetsRoot}/ui/guide/skill_specific_target.jpg` }
										/>
									</div> }
								>
									<IconQuestionCircleFill class="ms-1" />
								</BootstrapTooltip>
							</small>
						</div> }
						{ c.category === ConditionCategory.Elem && <>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.elem ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, elem: e.currentTarget.value as typeof c["elem"] });
									} }
								>
									<option value="" selected={ c.elem === "" }>
										<Locale k="SEARCH_COND_ELEM_ELEM_ANY" />
									</option>
									<option value="physics" selected={ c.elem === "physics" }>
										<Locale k="SEARCH_COND_ELEM_ELEM_PHYSICS" />
									</option>
									<option value="fire" selected={ c.elem === "fire" }>
										<Locale k="SEARCH_COND_ELEM_ELEM_FIRE" />
									</option>
									<option value="ice" selected={ c.elem === "ice" }>
										<Locale k="SEARCH_COND_ELEM_ELEM_ICE" />
									</option>
									<option value="lightning" selected={ c.elem === "lightning" }>
										<Locale k="SEARCH_COND_ELEM_ELEM_LIGHTNING" />
									</option>
								</select>
							</div>
						</> }
						{ c.category === ConditionCategory.Buff && <>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.slot }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, slot: parseInt(e.currentTarget.value, 10) });
									} }
								>
									{ new Array(5).fill(0).map((_, k) =>
										<option value={ k } selected={ c.slot === k }>
											<Locale k={ `SEARCH_COND_BUFF_SLOT_${SlotTable[k]}` } />
										</option>
									) }
								</select>
							</div>

							<div>
								<select
									class="form-select form-select-sm"
									value={ c.class ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											class: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.class === undefined }>
										<Locale k="SERACH_COND_BUFF_CLASS_ANY" />
									</option>
									{ new Array(3).fill(0).map((_, k) =>
										<option value={ k } selected={ c.class === k }>
											<Locale k={ `COMMON_UNIT_TYPE_${ClassTable[k]}` } />
										</option>
									) }
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.role ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											role: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.role === undefined }>
										<Locale k="SERACH_COND_BUFF_ROLE_ANY" />
									</option>
									{ new Array(3).fill(0).map((_, k) =>
										<option value={ k } selected={ c.role === k }>
											<Locale k={ `COMMON_UNIT_ROLE_${RoleTable[k]}` } />
										</option>
									) }
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.body ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											body: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.body === undefined }>
										<Locale k="SERACH_COND_BUFF_BODY_ANY" />
									</option>
									{ new Array(2).fill(0).map((_, k) =>
										<option value={ k } selected={ c.body === k }>
											<Locale k={ `COMMON_UNIT_BODY_${BodyTable[k]}` } />
										</option>
									) }
								</select>
							</div>

							<div>
								<select
									class="form-select form-select-sm"
									value={ c.target ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											target: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.target === undefined }>
										<Locale k="SERACH_COND_BUFF_TARGET_ANY" />
									</option>
									<option value="0" selected={ c.target === 0 }>
										<Locale k="SEARCH_COND_BUFF_TARGET_SELF" />
									</option>
									<option value="1" selected={ c.target === 1 }>
										<Locale k="SEARCH_COND_BUFF_TARGET_TEAM" />
									</option>
									<option value="3" selected={ c.target === 3 }>
										<Locale k="SEARCH_COND_BUFF_TARGET_ENEMY" />
									</option>
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.trigger ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											trigger: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.trigger === undefined }>
										<Locale k="SEARCH_COND_BUFF_TRIGGER_ANY" />
									</option>
									{ GetEnumKeys(BUFFEFFECT_TRIGGER_TYPE)
										.filter(r => !ExcludedBuffEffectTriggers.includes(r))
										.map(r => {
											const tloc = ComputeTriggerLocale(r);
											const p = Array.isArray(tloc)
												? tloc.slice(1)
												: [];
											const loc = Array.isArray(tloc)
												? tloc[0]
												: tloc;

											return <option value={ r } selected={ c.trigger === r }>
												<Locale plain k={ loc } p={ p } />
											</option>;
										})
									}
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.attr ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											attr: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.attr === undefined }>
										<Locale k="SEARCH_COND_BUFF_TYPE_ANY" />
									</option>
									<option value="0" selected={ c.attr === 0 }>
										<Locale k="SEARCH_COND_BUFF_TYPE_BUFF" />
									</option>
									<option value="1" selected={ c.attr === 1 }>
										<Locale k="SEARCH_COND_BUFF_TYPE_DEBUFF" />
									</option>
									<option value="3" selected={ c.attr === 3 }>
										<Locale k="SEARCH_COND_BUFF_TYPE_ETC" />
									</option>
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.overlap ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											overlap: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.overlap === undefined }>
										<Locale k="SEARCH_COND_BUFF_OVERLAP_ANY" />
									</option>
									<option value="0" selected={ c.overlap === 0 }>
										<Locale k="BUFFOVERLAP_INSTANCE" />
									</option>
									<option value="1" selected={ c.overlap === 1 }>
										<Locale k="BUFFOVERLAP_RENEW" />
									</option>
									<option value="2" selected={ c.overlap === 2 }>
										<Locale k="BUFFOVERLAP_EXTEND" />
									</option>
									<option value="3" selected={ c.overlap === 3 }>
										<Locale k="BUFFOVERLAP_SINGLE" />
									</option>
									<option value="4" selected={ c.overlap === 4 }>
										<Locale k="BUFFOVERLAP_UPDATE" />
									</option>
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.erase ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											erase: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.erase === undefined }>
										<Locale k="SEARCH_COND_BUFF_ERASE_ANY" />
									</option>
									{ GetEnumKeys(BUFFEFFECT_ERASE_TYPE)
										.map(r => <option value={ r } selected={ c.erase === r }>
											<Locale plain k={ `SEARCH_COND_BUFF_ERASE_${EraseTable[r]}` } />
										</option>)
									}
								</select>
							</div>
							<div>
								<select
									class="form-select form-select-sm"
									value={ c.buff ?? "" }
									onChange={ e => {
										e.preventDefault();
										updateCond(idx, {
											...c,
											buff: e.currentTarget.value === ""
												? undefined
												: parseInt(e.currentTarget.value, 10),
										});
									} }
								>
									<option value="" selected={ c.buff === undefined }>
										<Locale k="SEARCH_COND_BUFF_BUFF_ANY" />
									</option>

									{ BuffCategoryDB
										? <>
											{ BuffCategoryDB
												.sort((a, b) => a.buffEffectType[0] - b.buffEffectType[0])
												.map(r => {
													const buffs = r.buffEffectType.filter(b => !ExcludedBuffEffectTypes.includes(b));
													if (buffs.length === 0) return <></>;

													return buffs.length > 1
														? <optgroup label={ LocaleGet(r.groupName) }>
															{ buffs.map(b => <option value={ b } selected={ c.buff === b }>
																<Locale k={ `SEARCH_CONF_BUFF_BUFF_.${b}` } />
															</option>) }
														</optgroup>
														: <option value={ buffs[0] } selected={ c.buff === buffs[0] }>
															<Locale k={ r.groupName } />
														</option>;
												}) }
										</>
										: <></>
									}
								</select>
							</div>

							{ IsConditionRequiresBuffType(c)
								? <div>
									<select
										class="form-select form-select-sm"
										value={ c.targetBuffEnum ?? "" }
										onChange={ e => {
											e.preventDefault();
											updateCond(idx, {
												...c,
												targetBuffEnum: e.currentTarget.value === ""
													? undefined
													: parseInt(e.currentTarget.value, 10),
											});
										} }
									>
										<option value="" selected={ c.targetBuffEnum === undefined }>
											<Locale k="SEARCH_COND_BUFF_BUFF_ANY" />
										</option>

										{ BuffCategoryDB
											? <>
												{ BuffCategoryDB.map(r => {
													const buffs = r.buffEffectType.filter(b => !ExcludedBuffEffectTypes.includes(b));
													if (buffs.length === 0) return <></>;

													return buffs.length > 1
														? <optgroup label={ LocaleGet(r.groupName) }>
															{ buffs.map(b => <option value={ b } selected={ c.targetBuffEnum === b }>
																<Locale k={ `SEARCH_CONF_BUFF_BUFF_.${b}` } />
															</option>) }
														</optgroup>
														: <option value={ buffs[0] } selected={ c.targetBuffEnum === buffs[0] }>
															<Locale k={ r.groupName } />
														</option>;
												}) }
											</>
											: <></>
										}
									</select>
								</div>
								: <></>
							}
							{ c.buff === BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE
								? <div>
									<select
										class="form-select form-select-sm"
										value={ c.targetBuffType ?? "" }
										onChange={ e => {
											e.preventDefault();
											updateCond(idx, {
												...c,
												targetBuffType: e.currentTarget.value === ""
													? undefined
													: parseInt(e.currentTarget.value, 10),
											});
										} }
									>
										<option value="" selected={ c.targetBuffType === undefined }>
											<Locale k="SEARCH_COND_BUFF_TYPE_ANY" />
										</option>
										<option value="0" selected={ c.targetBuffType === 0 }>
											<Locale k="SEARCH_COND_BUFF_TYPE_BUFF" />
										</option>
										<option value="1" selected={ c.targetBuffType === 1 }>
											<Locale k="SEARCH_COND_BUFF_TYPE_DEBUFF" />
										</option>
										<option value="3" selected={ c.targetBuffType === 3 }>
											<Locale k="SEARCH_COND_BUFF_TYPE_ETC" />
										</option>
									</select>
								</div>
								: <></>
							}
						</> }
					</div>

					<div>
						<a
							class="text-danger me-1"
							href="#"
							onClick={ e => {
								e.preventDefault();
								removeCond(idx);
							} }
						>
							<IconXCircleFill />
						</a>
					</div>
				</>;
			}) }
			{ conds.map((c, idx) =>
				idx + 1 >= conds.length || !IsConditionANDRoot(conds, idx)
					? <></>
					: <div
						key={ `Condition-AND-Line-${idx}` }
						class={ style.ConditionANDLine }
						style={ {
							gridRowStart: idx + 1,
							gridRowEnd: idx + 2 + GetConditionANDCount(conds, idx),
						} }
					>
						<div />
					</div>
			) }
		</div >;
	}

	return <>
		{ conds.length === 0
			? <>
				<div class="text-center text-secondary">
					<Locale k="SEARCH_NO_CONDITION" />
				</div>
				<hr class="mt-3 mb-1" />
			</>
			: RenderConditions(conds)
		}
		<div class="text-end">
			<button
				class="btn btn-sm btn-success"
				onClick={ e => {
					e.preventDefault();
					props.onUpdate([...conds, DefaultCond()]);
				} }
			>
				<IconPlusCircleFill class="me-2" />
				<Locale k="SEARCH_NEW_CONDITION" />
			</button>
		</div>
	</>;
};
export default AdvancedSearch;
