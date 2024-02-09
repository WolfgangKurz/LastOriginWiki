import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import Store from "@/store";

import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { RarityDisplay } from "@/libs/Const";
import { ArrayElse } from "@/libs/Functions";
import { cn } from "@/libs/Class";

import Locale from "@/components/locale";
import UnitTypeIcon from "@/components/UnitTypeIcon";
import UnitRoleIcon from "@/components/UnitRoleIcon";
import UnitFace from "@/components/unit-face";

// import style from "./style.scss";
import style from "./style.module.scss";

const RarityList: ACTOR_GRADE[] = [
	ACTOR_GRADE.B,
	ACTOR_GRADE.A,
	ACTOR_GRADE.S,
	ACTOR_GRADE.SS,
];

const TypeList: ACTOR_CLASS[] = [
	ACTOR_CLASS.LIGHT,
	ACTOR_CLASS.AIR,
	ACTOR_CLASS.HEAVY,
];

const RoleList: ROLE_TYPE[] = [
	ROLE_TYPE.ATTACKER,
	ROLE_TYPE.DEFENDER,
	ROLE_TYPE.SUPPORTER,
];

const UnitsTable: FunctionalComponent<UnitsListProps> = (props) => {
	const UnitList = (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE): FilterableUnit[] =>
		props.list.filter(x => x.rarity === rarity && x.type === type && x.role === role);

	const UnitTypeTable: Record<ACTOR_CLASS, string> = {
		[ACTOR_CLASS.LIGHT]: "LIGHT",
		[ACTOR_CLASS.FLYING]: "MOBILITY",
		[ACTOR_CLASS.HEAVY]: "HEAVY",
	};
	const UnitRoleTable: Record<ROLE_TYPE, string> = {
		[ROLE_TYPE.ATTACKER]: "ATTACKER",
		[ROLE_TYPE.DEFENDER]: "DEFENDER",
		[ROLE_TYPE.SUPPORTER]: "SUPPORTER",
	};

	return <div>
		{ TypeList.map(type => Store.Units.Type[type].value
			? <div class={ style.UnitTable }>
				<div class={ style.TypeHeader }>
					{/* <UnitBadge type={ type } transparent /> */ }
					<UnitTypeIcon class="me-1" type={ type } />
					<Locale k={ `COMMON_UNIT_TYPE_${UnitTypeTable[type]}` } />
				</div>

				{ RoleList
					.filter(role => Store.Units.Role[role].value)
					.map(role => <div class={ style.RoleHeader } data-role-idx={ RoleList.indexOf(role) }>
						<UnitRoleIcon class="me-1" role={ role } />
						<Locale k={ `COMMON_UNIT_ROLE_${UnitRoleTable[role]}` } />
						{/* <UnitBadge role={ role } transparent size="large" /> */ }
					</div>)
				}

				{ RarityList
					.filter(rarity => Store.Units.Rarity[rarity].value)
					.map(rarity => <>
						<div
							class={ cn(style.RarityHeader, `text-${ACTOR_GRADE[rarity]}`) }
							data-rarity={ ACTOR_GRADE[rarity] }
						>
							{ RarityDisplay[rarity] }
						</div>

						{ RoleList
							.filter(role => Store.Units.Role[role].value)
							.map(role => <>
								<div
									class={ cn(style.RoleHeader, style.Alt) }
									data-role-idx={ RoleList.indexOf(role) }
									data-rarity={ ACTOR_GRADE[rarity] }
								>
									<UnitRoleIcon class="me-1" role={ role } />
									<Locale k={ `COMMON_UNIT_ROLE_${UnitRoleTable[role]}` } />
									{/* <UnitBadge role={ role } transparent size="large" /> */ }
								</div>
								<div
									class={ cn(style.Cell, style.UnitListCell) }
									data-role-idx={ RoleList.indexOf(role) }
									data-rarity={ ACTOR_GRADE[rarity] }
								>
									{ ArrayElse(
										UnitList(rarity, type, role),
										x => <>{
											x.map(unit =>
												<Link href={ `/units/${unit.uid}` }>
													<div class={ style.UnitItem }>
														<UnitFace uid={ unit.uid } />
														<Locale k={ `UNIT_${unit.uid}` } />
													</div>
												</Link>
											)
										}</>,
										<span class="small text-secondary">
											<Locale k="UNIT_TABLE_EMPTY" />
										</span>,
									) }
								</div>
							</>)
						}
					</>)
				}
			</div >
			: <></>) }
	</div>;
};
export default UnitsTable;
