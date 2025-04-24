import { createElement } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { GetSkillDescription } from "@/libs/SkillDescription";

import style from "./components/style.module.scss";
import { ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export default function buildDefaultSection (units: FilterableUnit[] | undefined | null): Record<string, preact.FunctionalComponent<unknown>> {
	if (!units) return {};

	let groupUnits: Record<string, FilterableUnit[]> = {};
	units.forEach(u => {
		const e = /_([0-9]+)$/.exec(u.group);
		if (e) {
			const sgroup = u.group.replace(/_[0-9]+$/, "");

			groupUnits[sgroup] ??= [];
			groupUnits[sgroup].push(u);
		}

		groupUnits[u.group] ??= [];
		groupUnits[u.group].push(u);
	});

	const _types: ACTOR_CLASS[] = [ACTOR_CLASS.LIGHT, ACTOR_CLASS.FLYING, ACTOR_CLASS.HEAVY];
	const _typeNames: Record<ACTOR_CLASS, string> = {
		[ACTOR_CLASS.LIGHT]: "Light",
		[ACTOR_CLASS.FLYING]: "Flying",
		[ACTOR_CLASS.HEAVY]: "Heavy",
	};

	const _roles: ROLE_TYPE[] = [ROLE_TYPE.ATTACKER, ROLE_TYPE.DEFENDER, ROLE_TYPE.SUPPORTER];
	const _roleNames: Record<ROLE_TYPE, string> = {
		[ROLE_TYPE.ATTACKER]: "Attacker",
		[ROLE_TYPE.DEFENDER]: "Defender",
		[ROLE_TYPE.SUPPORTER]: "Supporter",
	};

	const groupUnitsAdd: Record<string, FilterableUnit[]> = {};
	Object.keys(groupUnits).forEach(g => {
		groupUnits[g].forEach(u => {
			_types.forEach(type => {
				if (u.type === type) {
					groupUnitsAdd[`${g}_${_typeNames[type]}`] ??= [];
					groupUnitsAdd[`${g}_${_typeNames[type]}`].push(u);;
				}
			});
			_roles.forEach(role => {
				if (u.role === role) {
					groupUnitsAdd[`${g}_${_roleNames[role]}`] ??= [];
					groupUnitsAdd[`${g}_${_roleNames[role]}`].push(u);;
				}
			});

			_types.forEach(type => {
				_roles.forEach(role => {
					if (u.type === type && u.role === role) {
						groupUnitsAdd[`${g}_${_typeNames[type]}${_roleNames[role]}`] ??= [];
						groupUnitsAdd[`${g}_${_typeNames[type]}${_roleNames[role]}`].push(u);;
					}
				});
			});
		});
	});
	groupUnits = Object.assign(groupUnits, groupUnitsAdd);

	const tags: Record<string, preact.FunctionalComponent<unknown>> = {};
	Object.keys(groupUnits).forEach(g => {
		const section = `$$${g}~\n${groupUnits[g].map(r => `<char uid="${r.uid}" />`).join(", ")}\n~$$${g}`;
		const ret = GetSkillDescription(section, "", {});

		tags[`SECTION_${g}`] = (): preact.VNode => <>{
			(ret.sections[g] || [])
				.map((r, i) => <div
					key={ `SKILL_DESCRIPTION_COMMENT_SECTION_${g}_LINE_${i}` }
					class={ style.CommentLine }
				>{ createElement(r, { params: [undefined] }) }</div>)
		}</>;
	});

	return tags;
}
