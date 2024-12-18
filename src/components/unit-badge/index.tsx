import { FunctionalComponent } from "preact";

import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface UnitBadgeProps {
	class?: string;

	type?: ACTOR_CLASS;
	role?: ROLE_TYPE;
	limit?: string;
	transparent?: boolean;
	black?: boolean;
	size?: "normal" | "large";
}

const UnitBadge: FunctionalComponent<UnitBadgeProps> = (props) => {
	const typeName: Record<Exclude<ACTOR_CLASS, ACTOR_CLASS.__MAX__>, string> = {
		[ACTOR_CLASS.LIGHT]: "LIGHT",
		[ACTOR_CLASS.AIR]: "MOBILITY",
		[ACTOR_CLASS.HEAVY]: "HEAVY",
	};
	const roleName: Record<Exclude<ROLE_TYPE, ROLE_TYPE.__MAX__>, string> = {
		[ROLE_TYPE.ATTACKER]: "ATTACKER",
		[ROLE_TYPE.DEFENDER]: "DEFENDER",
		[ROLE_TYPE.SUPPORTER]: "SUPPORTER",
	};
	const typeList = [
		"light",
		"flying",
		"heavy",
	];

	const limit = (props.limit || "").toLowerCase();
	const type = ((): ACTOR_CLASS | -1 => {
		const table: Record<string, ACTOR_CLASS> = {
			light: ACTOR_CLASS.LIGHT,
			flying: ACTOR_CLASS.AIR,
			heavy: ACTOR_CLASS.HEAVY,
		};
		if (limit) {
			if (limit.includes("+"))
				return table[limit.split("+")[0]];
			else if (typeList.includes(limit))
				return table[limit];
			return -1;
		}
		const type = props.type;
		return type === undefined ? -1 : type;
	})();
	const role = ((): ROLE_TYPE | -1 => {
		const table: Record<string, ROLE_TYPE> = {
			attacker: ROLE_TYPE.ATTACKER,
			defender: ROLE_TYPE.DEFENDER,
			supporter: ROLE_TYPE.SUPPORTER,
		};
		if (limit) {
			if (limit.includes("+"))
				return table[limit.split("+")[1]];
			else if (!typeList.includes(limit))
				return table[limit];
			return -1;
		}
		const role = props.role;
		return role === undefined ? -1 : role;
	})();

	const TypeName = typeName[type] || "???";
	const RoleName = roleName[role] || "???";

	return <span class={ `badge font-ibm unit-badge bg-${props.transparent ? "transparent" : "primary"} ${style["unit-badge"]} ${props.class || ""}` }
		data-size={ props.size || "normal" }
		data-type={ type }
		data-role={ role }
		data-black={ props.black }
	>
		<i />
		{ type !== -1 && role !== -1
			? [
				<Locale k={ `COMMON_UNIT_TYPE_SHORT_${TypeName}` } />,
				<Locale k={ `COMMON_UNIT_ROLE_${RoleName}` } />,
			].gap(" ")
			: type !== -1
				? <Locale k={ `COMMON_UNIT_TYPE_${TypeName}` } />
				: <Locale k={ `COMMON_UNIT_ROLE_${RoleName}` } />
		}
	</span>;
};
export default UnitBadge;
