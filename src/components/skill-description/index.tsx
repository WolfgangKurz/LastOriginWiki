import { createElement, FunctionalComponent, FunctionComponent } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { objState } from "@/libs/State";
import { ComponentTable, parseVNode } from "@/libs/VNode";
import { ParamWithSlot, parseParams } from "@/libs/SkillDescription";

import EquipPopup from "@/components/popup/equip-popup";
import * as Components from "./components";

import experimental from "./experimental";

import style from "./components/style.module.scss";

export interface SectionProps {
	params: Array<number | undefined | ParamWithSlot>;
}

export interface SkillDescriptionValueData {
	base: number;
	per: number;
	chance: number;
}
interface SkillDescriptionProps {
	id?: string;
	class?: string;

	text: string;
	sections?: Record<string, FunctionalComponent<SectionProps>[]>;
	rates?: number[];

	slot?: string;
	values?: Record<string, SkillDescriptionValueData[]>;

	level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	buffBonus: boolean;
	skillBonus: number;
	favorBonus: boolean;

	experimentalBuffName?: boolean;
}

const SkillDescription: FunctionalComponent<SkillDescriptionProps> = (props) => {
	const rates = props.rates || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	const displayEquip = objState(false);
	const selectedEquip = objState<FilterableEquip | null>(null);

	function compile (text: string): Array<preact.VNode[] | preact.VNode | string> {
		if (!text) return [];

		const _sections = props.sections || {};
		if (props.experimentalBuffName) {
			const $ret = experimental.BuffName(text);
			text = $ret.text;
			Object.keys($ret.sections).forEach(sec => _sections[sec] = $ret.sections[sec]);
		}

		const tags: Record<string, preact.FunctionalComponent<unknown>> = {};
		text = text.replace(/\$\$([A-Za-z0-9\-_]+)((:?([?F0-9,@]+))\$|\$?)/g, (p0, p1, p2, p3, p4) => {
			// eslint-disable-next-line react/display-name
			tags[`SECTION_${p1}`] = (): preact.VNode => <>{
				(_sections[p1] || [])
					.map((r, i) => <div
						key={ `SKILL_DESCRIPTION_COMMENT_SECTION_${p1}_LINE_${i}` }
						class={ style.CommentLine }
					>{ createElement(r, { params: parseParams(p4) }) }</div>)
			}</>;
			return `<SECTION_${p1} />`;
		});

		const placeholder: FunctionalComponent<unknown> =
			(p) => createElement("span", { class: "text-secondary" }, p.children);

		const dmg: FunctionalComponent<unknown> =
			(p) => createElement(Components.Damage, { ...p, multiplier: rates[props.level], bonus: props.skillBonus });

		const edmg: FunctionalComponent<unknown> =
			(p) => createElement(Components.EnemyDamage, { ...p, multiplier: rates[props.level] });

		// const cmt: FunctionalComponent<unknown> =
		// 	(p) => createElement(Components.Comment, { ...p, body: props.sections });

		const val: FunctionComponent<
			NonNullable<typeof Components["Value"]["defaultProps"]> & {
				idx?: number;
				slot?: string;
				r?: boolean;
				rr?: boolean;
				inv?: boolean;
			}
		> = (_props) => {
			const base: number | undefined = ((): number | undefined => {
				if (_props.base !== undefined)
					return _props.base;

				if (_props.idx !== undefined && _props.idx >= 0 && props.values) {
					if (_props.slot && (_props.slot in props.values) && props.values[_props.slot][_props.idx])
						return props.values[_props.slot][_props.idx].base;
					else if (props.slot && (props.slot in props.values) && props.values[props.slot][_props.idx])
						return props.values[props.slot][_props.idx].base;
				}

				return undefined;
			})();

			const per: number | undefined = ((): number | undefined => {
				if (_props.per !== undefined)
					return _props.per;

				if (_props.idx !== undefined && _props.idx >= 0 && props.values) {
					if (_props.slot && (_props.slot in props.values) && props.values[_props.slot][_props.idx])
						return props.values[_props.slot][_props.idx].per;
					else if (props.slot && (props.slot in props.values) && props.values[props.slot][_props.idx])
						return props.values[props.slot][_props.idx].per;
				}

				return undefined;
			})();

			return <Components.Value
				base={ base }
				per={ per }
				level={ props.level +
					(props.favorBonus ? 1 : 0) +
					(props.buffBonus ? 2 : 0)
				}
				ratio={ _props.ratio || _props.r }
				ratio2={ _props.rr }
				invert={ _props.invert || _props.inv }
				signless={ _props.signless }
				floor={ _props.floor }
				forcePN={ _props.forcePN }
			/>;
		};

		const chance: FunctionComponent<{
			idx?: number;
			slot?: string;
		}> = (_props) => {
			const chance: number = ((): number => {
				if (_props.idx !== undefined && props.values) {
					if (_props.slot && (_props.slot in props.values) && props.values[_props.slot][_props.idx])
						return props.values[_props.slot][_props.idx].chance;
					else if (props.slot && (props.slot in props.values) && props.values[props.slot][_props.idx])
						return props.values[props.slot][_props.idx].chance;
				}
				return 0;
			})();

			return <Components.Value
				base={ chance }
				per={ 0 }
				level={ props.level }
				ratio
				signless
			/>;
		};

		try {
			return parseVNode(text, [], {
				...tags,

				placeholder,

				section: Components.Section,
				sec: Components.Section,

				buff: Components.Buff,

				damage: dmg,
				dmg,

				"enemy-damage": edmg,
				edmg,

				value: val,
				val,

				chance,

				char: Components.Char,
				equip: (p) => createElement(
					Components.Equip,
					{
						...p,
						onEquip: (eq) => {
							selectedEquip.set(eq);
							displayEquip.set(true);
						},
					}),

				elem: Components.Elem,

				comment: Components.Comment,
				cmt: Components.Comment,
			} as unknown as ComponentTable<any>);
		} catch (e) {
			// eslint-disable-next-line react/jsx-key
			return [<>_</>];
		}
	}

	return <span id={ props.id } class={ `skill-description ${props.class || ""}` }>
		<EquipPopup
			asSub
			fullGroup
			display={ displayEquip.value }
			equip={ selectedEquip.value }
			onHidden={ (): void => displayEquip.set(false) }
		/>
		{ compile(props.text) }
	</span>;
};
export default SkillDescription;
