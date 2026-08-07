import { createElement, FunctionalComponent, FunctionComponent } from "preact";
import { memo } from "preact/compat";
import { useMemo, useState } from "preact/hooks";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { cn } from "@/libs/Class";
import { StaticDB, useDBData } from "@/libs/Loader";
import { ComponentTable, parseVNode } from "@/libs/VNode";
import { ParamWithSlot, parseParams } from "@/libs/SkillDescription";

import EquipPopup from "@/components/popup/equip-popup";
import * as Components from "./components";

import experimental from "./experimental";
import buildDefaultSection, { DefaultSectionTable } from "./section";

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
	boxs?: Array<[string, string]>;
	rates?: number[];

	slot?: string;
	values?: Record<string, SkillDescriptionValueData[]>;

	level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	buffBonus: boolean;
	skillBonus: number;
	favorBonus: boolean;
	valueDetail: boolean;

	experimentalBuffName?: boolean;
}

interface SkillDescriptionRendererProps extends SkillDescriptionProps {
	defaultSections?: DefaultSectionTable;
}

const DefaultRates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const SkillDescriptionRenderer: FunctionalComponent<SkillDescriptionRendererProps> = (props) => {
	const rates = props.rates || DefaultRates;

	const [selectedEquip, setSelectedEquip] = useState<FilterableEquip | null>(null);
	const tags = useMemo(() => {
		const tags: Record<string, preact.FunctionalComponent<unknown>> = {};
		(props.boxs || []).forEach((b, i) => {
			tags[`BOX_${i + 1}`] = () => {
				const _list = b[0]
					.replace(/^\n+/gs, "")
					.replace(/\n+$/gs, "")
					.split("\n");

				return createElement(
					Components.Box,
					{ title: b[1] },
					_list.map(bc => <SkillDescription
						text={ bc }
						sections={ props.sections }

						rates={ props.rates }
						slot={ props.slot }
						values={ props.values }

						level={ props.level }
						buffBonus={ props.buffBonus }
						skillBonus={ props.skillBonus }
						favorBonus={ props.favorBonus }
						valueDetail={ props.valueDetail }
					/>).gap(<hr class="my-1" />),
				);
			};
		});
		return tags;
	}, [
		props.boxs, props.sections, props.rates, props.slot, props.values,
		props.level, props.buffBonus, props.skillBonus, props.favorBonus, props.valueDetail,
	]);
	const sections = useMemo<DefaultSectionTable>(() => ({
		...(props.sections || {}),
		...(props.defaultSections || {}),
	}), [props.sections, props.defaultSections]);

	const content = useMemo(() => {
		let text = props.text;
		if (!text) return [];

		let _sections = sections;
		if (props.experimentalBuffName) {
			const $ret = experimental.BuffName(text);
			text = $ret.text;
			_sections = { ..._sections, ...$ret.sections };
		}

		const placeholder: FunctionalComponent<unknown> =
			(p) => createElement("span", { class: "text-secondary" }, p.children);

		const dmg: FunctionalComponent<unknown> =
			(p) => createElement(Components.Damage, {
				...p,
				elem: ((p as any).elem as (string | undefined) ?? "").split(",") as any[],
				multiplier: rates[props.level],
				bonus: props.skillBonus
			});

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
				detail={ props.valueDetail }
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
			interface ImportNode {
				name: string;
				p?: string;
			}
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
							setSelectedEquip(eq);
						},
					}),

				elem: Components.Elem,

				comment: Components.Comment,
				cmt: Components.Comment,

				box: Components.Box,

				import (p: preact.RenderableProps<ImportNode>) {
					return <>{
						(_sections[p.name] || _sections[`SECTION_${p.name}`] || [])
							.map((r, i) => <div
								key={ `SKILL_DESCRIPTION_COMMENT_SECTION_${p.name}_LINE_${i}` }
								class={ style.CommentLine }
							>{ createElement(r, { params: parseParams(p.p ?? "?") }) }</div>)
					}</>;
				},
			} as unknown as ComponentTable<any>);
		} catch (e) {
			// eslint-disable-next-line react/jsx-key
			return [<>_</>];
		}
	}, [
		tags, sections, rates,
		props.text, props.slot, props.values, props.level,
		props.buffBonus, props.skillBonus, props.favorBonus,
		props.valueDetail, props.experimentalBuffName,
	]);

	return <span id={ props.id } class={ cn("skill-description", props.class) }>
		{ selectedEquip && <EquipPopup
			asSub
			fullGroup
			display
			equip={ selectedEquip }
			onHidden={ (): void => setSelectedEquip(null) }
		/> }
		{ content }
	</span>;
};

const SkillDescriptionWithDefaultSections: FunctionalComponent<SkillDescriptionProps> = (props) => {
	const units = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	const defaultSections = useMemo(() => buildDefaultSection(units), [units]);

	return <SkillDescriptionRenderer { ...props } defaultSections={ defaultSections } />;
};

const SkillDescription: FunctionalComponent<SkillDescriptionProps> = (props) => {
	return /<import\b/i.test(props.text)
		? <SkillDescriptionWithDefaultSections { ...props } />
		: <SkillDescriptionRenderer { ...props } />;
};
export default memo(SkillDescription);
