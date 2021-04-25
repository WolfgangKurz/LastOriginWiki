import { Fragment, FunctionalComponent, h } from "preact";

import { EffectFilterListType } from "@/types/Buff";
import { BuffEffectListGroupKeys } from "@/types/BuffEffect";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import PopupBase from "@/components/popup/base";

import style from "./style.scss";

interface EffectFilterPopupProps {
	class?: string;
	display: string | preact.VNode | preact.JSX.Element;
	list: EffectFilterListType;
	effects: Record<string, EffectFilterListType>;
	setter: (list: EffectFilterListType) => void;
}

const EffectFilterPopup: FunctionalComponent<EffectFilterPopupProps> = (props) => {
	const popupDisplay = objState<boolean>(false);

	const EffectGroupNames: Record<string, preact.VNode> = {
		stats: <Locale k="BUFF_GROUP_STATS" />,
		damageAdd: <Locale k="BUFF_GROUP_DMG_UP" />,
		damageReduce: <Locale k="BUFF_GROUP_DMG_REDUCE" />,
		guard: <Locale k="BUFF_GROUP_GUARD" />,
		speedAp: <Locale k="BUFF_GROUP_AP" />,
		offPierce: <Locale k="BUFF_GROUP_OFF" />,
		resist: <Locale k="BUFF_GROUP_RESIST" />,
		damage: <Locale k="BUFF_GROUP_DMG" />,
		etcBuff: <Locale k="BUFF_GROUP_ETC_BUFF" />,
		etcDebuff: <Locale k="BUFF_GROUP_ETC_DEBUFF" />,
	} as Record<BuffEffectListGroupKeys, preact.VNode>;

	function Fill (value: boolean): void {
		const list: EffectFilterListType = [];
		props.list.forEach(x => {
			if (Array.isArray(x)) {
				list.push(x.map(y => ({
					...y,
					selected: value,
				})));
			} else {
				list.push({
					...x,
					selected: value,
				});
			}
		});
		props.setter(list);
	}

	function toggle (targetText: string): void {
		const list: EffectFilterListType = [];
		props.list.forEach(x => {
			if (Array.isArray(x)) {
				list.push(x.map(y => `${y.text}_${y.pmType}` === targetText
					? { ...y, selected: !y.selected }
					: { ...y },
				));
			} else if (x.text === targetText)
				list.push({ ...x, selected: !x.selected });
			else
				list.push({ ...x });
		});
		props.setter(list);
	}

	return <Fragment>
		<button class={ `btn btn-dark ${props.class || ""}` } onClick={ (): void => popupDisplay.set(true) }>
			{ typeof props.display === "string" ? <Locale k={ props.display } /> : props.display }
		</button>

		<PopupBase
			display={ popupDisplay.value }
			size="lg"
			header={
				<div class="btn-group">
					<button class="btn btn-primary" onClick={ (): void => Fill(true) }>
						<Locale k="UNITS_FILTERS_SKILL_EFFECTS_SELECTALL" />
					</button>
					<button class="btn btn-danger" onClick={ (): void => Fill(false) }>
						<Locale k="UNITS_FILTERS_SKILL_EFFECTS_DESELECTALL" />
					</button>
				</div>
			}
			onHidden={ (): void => popupDisplay.set(false) }
		>
			<table class="table table-sm table-striped table-borderless">
				<tbody>
					{ Object.entries(props.effects).map(([gkey, group]) => <tr>
						<td class="align-middle pe-2">
							<span class={ `effect-group-name ${style["effect-group-name"]}` }>{ EffectGroupNames[gkey] } :</span>
						</td>
						<td>
							{ group.map((entity, ei) => Array.isArray(entity)
								? <div class="btn-group me-1 mb-1">
									{ entity.map((subentity, sei) => <button
										class={ `btn btn-outline-secondary ${isActive(subentity.selected)}` }
										onClick={ (): void => toggle(`${subentity.text}_${subentity.pmType}`) }
									>
										<Locale k={ subentity.text } p={ [
											subentity.pmType > 0
												? <Locale k="UNIT_FILTERS_SKILL_EFFECTS_PM_P" />
												: <Locale k="UNIT_FILTERS_SKILL_EFFECTS_PM_M" />,
										] } />
									</button>) }
								</div>
								: <button
									class={ `btn btn-outline-secondary ${isActive(entity.selected)} me-1 mb-1` }
									onClick={ (): void => toggle(entity.text) }
								>
									<Locale k={ entity.text } />
								</button>,
							) }
						</td>
					</tr>) }
				</tbody>
			</table>
		</PopupBase>
	</Fragment>;
};
export default EffectFilterPopup;
