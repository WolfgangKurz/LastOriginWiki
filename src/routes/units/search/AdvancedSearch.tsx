import { useRef, useState } from "preact/hooks";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";

import { useUpdate } from "@/libs/hooks";
import { BuildClass } from "@/libs/Class";

import Locale from "@/components/locale";
import IconPlusCircleFill from "@/components/bootstrap-icon/icons/PlusCircleFill";
import IconXCircleFill from "@/components/bootstrap-icon/icons/XCircleFill";

import style from "./style.module.scss";

type ConditionLogical = "AND" | "OR";
enum ConditionCategory {
	Rarity = 0,
	Class = 1,
	Role = 2,
	Body = 3,
}
enum ConditionCompare {
	Equal = 0,
	NotEqual = 1,
	Less = 2,
	LessEqual = 3,
	BiggerEqual = 4,
	Bigger = 5,
}
enum ConditionCompareYN {
	Equal = 0,
	NotEqual = 1,
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
type Condition = Condition_Rarity | Condition_Class | Condition_Role | Condition_Body;

const CompareTable: Record<ConditionCompare, string> = {
	[ConditionCompare.Equal]: "=",
	[ConditionCompare.NotEqual]: "≠",
	[ConditionCompare.Less]: "<",
	[ConditionCompare.LessEqual]: "≤",
	[ConditionCompare.Bigger]: ">",
	[ConditionCompare.BiggerEqual]: "≥",
};
const ClassTable: Record<Exclude<ACTOR_CLASS, ACTOR_CLASS.__MAX__>, string> = {
	[ACTOR_CLASS.LIGHT]: "LIGHT",
	[ACTOR_CLASS.FLYING]: "MOBILITY",
	[ACTOR_CLASS.HEAVY]: "HEAVY",
};
const RoleTable: Record<Exclude<ROLE_TYPE, ROLE_TYPE.__MAX__>, string> = {
	[ROLE_TYPE.ATTACKER]: "ATTACKER",
	[ROLE_TYPE.DEFENDER]: "DEFENDER",
	[ROLE_TYPE.SUPPORTER]: "SUPPORTER",
};
const BodyTable: Record<Exclude<ACTOR_BODY_TYPE, ACTOR_BODY_TYPE.SUMMON | ACTOR_BODY_TYPE.TOTEM | ACTOR_BODY_TYPE.__MAX__>, string> = {
	[ACTOR_BODY_TYPE.BIOROID]: "BIOROID",
	[ACTOR_BODY_TYPE.AGS]: "AGS",
};

const AdvancedSearch: FunctionalComponent = (props) => {
	const update = useUpdate();

	const [conds, setConds] = useState<Condition[]>([]);

	function updateCond (idx: number, cond: Condition): void {
		if (cond.compare > GetCategoryCompareCount(cond.category))
			cond.compare = 0;

		const c = [...conds];
		c[idx] = cond;
		setConds(c);
	}
	function removeCond (idx: number): void {
		const c = [...conds];
		c.splice(idx, 1);
		setConds(c);
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
				return 2; // equal & not equal
		}
	}

	function GetConditionAndHeight (conds: readonly Condition[], index: number): number {
		let count = 0;
		for (let i = index; i < conds.length; i++) {
			if (conds[i].logicType !== "AND") break;
			count++;
		}

		return count * 40;
	}

	function RenderConditions (conds: readonly Condition[]): preact.VNode {
		return <div>
			{ conds.map((c, idx) => {
				return <>
					<div class={ BuildClass(style.ConditionRow, "row") }>
						<div class={ BuildClass(style.LogicalColumn, "col-auto", idx === 0 && "invisible") }>
							{ c.logicType === "OR"
								? <button
									class="btn btn-sm btn-dark me-4"
									onClick={ e => {
										e.preventDefault();
										updateCond(idx, { ...c, logicType: "AND" });
									} }
								>
									OR
								</button>
								: <>
									<button
										class="btn btn-sm btn-dark ms-4"
										onClick={ e => {
											e.preventDefault();
											updateCond(idx, { ...c, logicType: "OR" });
										} }
									>
										AND
									</button>
									{ idx === 0 || conds[idx - 1].logicType !== "AND"
										? <div
											class={ style.ConditionAndLine }
											style={ { height: `${GetConditionAndHeight(conds, idx)}px` } }
										/>
										: <></>
									}
								</>
							}
						</div>

						<div class="col-auto">
							<select
								class="form-select form-select-sm"
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, category: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(4).fill(0).map((_, k) =>
									<option value={ k } selected={ c.category === k }>
										<Locale k={ `SEARCH_COND_CAT_${ConditionCategory[k].toUpperCase()}` } />
									</option>
								) }
							</select>
						</div>

						<div class="col-1">
							<select
								class="form-select form-select-sm"
								value={ c.compare }
								onChange={ e => {
									e.preventDefault();
									updateCond(idx, { ...c, compare: parseInt(e.currentTarget.value, 10) });
								} }
							>
								{ new Array(GetCategoryCompareCount(c.category)).fill(0).map((_, k) =>
									<option value={ k } selected={ c.compare === k }>
										{ CompareTable[k] }
									</option>
								) }
							</select>
						</div>

						{ c.category === ConditionCategory.Rarity && <div class="col-auto">
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
						{ c.category === ConditionCategory.Class && <div class="col-auto">
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
						{ c.category === ConditionCategory.Role && <div class="col-auto">
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
						{ c.category === ConditionCategory.Body && <div class="col-auto">
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

						<div class="col text-end">
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
					</div>
					<hr class="my-1" />
				</>;
			}) }
		</div>;
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
					setConds([...conds, DefaultCond()]);
					update();
				} }
			>
				<IconPlusCircleFill class="me-2" />
				<Locale k="SEARCH_NEW_CONDITION" />
			</button>
		</div>
	</>;
};
export default AdvancedSearch;
