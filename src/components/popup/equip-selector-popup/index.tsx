import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { ACTOR_GRADE, ITEM_GRADE, ITEM_TYPE } from "@/types/Enums";

import { RarityDisplay } from "@/libs/Const";
import { groupBy, isActive } from "@/libs/Functions";
import { useLocale } from "@/libs/Locale";

import { StaticDB, useDBData } from "@/libs/Loader";
import Loading from "@/components/loading";
import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import PopupBase from "@/components/popup/base";

import "./style.scss";

interface EquipSelectorPopupProps {
	class?: string;
	display?: boolean;

	type?: ITEM_TYPE;
	value?: string | undefined;
	noClear?: boolean;

	onHidden?: () => void;
	onSelect?: (uid: string | null) => void;
}

const EquipSelectorPopup: FunctionalComponent<EquipSelectorPopupProps> = (props) => {
	const [loc] = useLocale();

	const [latestValue, setLatestValue] = useState<string | undefined>(undefined);

	const [value, setValue] = useState<string>("");
	const [typeKey, setTypeKey] = useState<string>("");
	const [rarity, setRarity] = useState<ITEM_GRADE>(ACTOR_GRADE.SS);

	const [rarities, setRarities] = useState<ITEM_GRADE[]>([]);

	const TypeTable = ["Chip", "System", "Sub"];
	const RarityTable = ["", "", "T1", "T2", "T3", "T4", "T5"];

	function updateTypeKey (value: string): string {
		const kv = /^([^_]+)_(.+)_([^_]+)$/.exec(value);
		const v = kv ? `${kv[1]}_${kv[2]}` : "";

		if (kv) {
			const r = RarityTable.indexOf(kv[3]);
			setRarity(r);
		}

		setTypeKey(v);
		return v;
	}

	const FilterableEquip = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip);
	if (!FilterableEquip) return <Loading.Data />;

	const source = props.type !== undefined
		? FilterableEquip.filter(x => x.type === props.type)
		: FilterableEquip;
	const groups = groupBy(source, x => `${TypeTable[x.type]}_${x.key}` as string);

	function updateRarity (typeKey: string): void {
		const g = groups[typeKey];
		if (!g) return;

		const list = g.map(x => x.rarity)
			.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as ITEM_GRADE[]);

		setRarities(list);
		if (!list.includes(rarity)) {
			setRarity(list[list.length - 1]);
			setValue(`${typeKey}_${RarityTable[rarity]}`);
		}
	}

	if (latestValue !== props.value) {
		setValue(props.value || "");
		setLatestValue(props.value);

		const tk = updateTypeKey(props.value || "");
		updateRarity(tk);
	}

	return <PopupBase
		contentClass="equip-selector-popup"
		display={ props.display }
		size="md"
		header={ <Locale k="POPUP_EQUIP_TITLE" /> }
		headerEnd={ <div class="btn-group me-1">
			{ [ACTOR_GRADE.B, ACTOR_GRADE.A, ACTOR_GRADE.S, ACTOR_GRADE.SS, ACTOR_GRADE.SSS].map(r => <button
				class={ `btn btn-outline-dark ${isActive(rarity === r)}` }
				disabled={ !rarities.includes(r) }
				onClick={ (e): void => {
					e.preventDefault();
					setRarity(r);
					setValue(`${typeKey}_${RarityTable[rarity]}`);
				} }
			>
				{ RarityDisplay[r] }
			</button>) }
		</div> }
		footer={ <div class="btn-group">
			<button class="btn btn-primary"
				onClick={ (e): void => {
					e.preventDefault();
					if (props.onSelect && value) {
						props.onSelect(value);
						props.onHidden?.();
					}
				} }
			>
				<Locale k="POPUP_EQUIP_SELECT" />
			</button>
			{ props.noClear
				? <></>
				: <button class="btn btn-danger">
					<Locale k="POPUP_EQUIP_CLEAR" />
				</button>
			}
		</div> }
		onHidden={ (): void => {
			setValue("");
			setTypeKey("");

			if (props.onHidden)
				props.onHidden();
		} }
	>
		<div>
			<ul class="list-group mb-3">
				{ Object.values(groups).map(e => {
					const eq = e[e.length - 1];
					const icon = ((): string => {
						const f = e.find(r => r.rarity === rarity);
						if (f) return f.icon;
						return eq.icon;
					})();
					const actived = typeKey === `${TypeTable[eq.type]}_${eq.key}`;

					return <li
						class={ `list-group-item equip-list-item ${isActive(actived, `bg-rarity-${RarityDisplay[rarity]}`, "")}` }
						role="button"
						onClick={ (e): void => {
							e.preventDefault();

							const value = `${TypeTable[eq.type]}_${eq.key}_${RarityTable[rarity]}`;
							setValue(value);

							const tk = updateTypeKey(value);
							updateRarity(tk);
						} }
					>
						<EquipIcon class="me-3" image={ icon } />
						<div class="d-inline-block text-start">
							<div>
								<strong>{ loc[`EQUIP_${eq.fullKey}`].replace(/ (RE|MP|SP|EX)$/, "") }</strong>

								<small class="ms-2 align-top">
									{ e.map(q => <span
										class="badge bg-dark text-light p-1 ms-1"
									>{ RarityDisplay[q.rarity] }</span>) }
								</small>
							</div>
							<div>
								<small class={ "text-secondary" }>{ TypeTable[eq.type] }_{ eq.key }</small>
							</div>
						</div>
					</li>;
				}) }
			</ul>
		</div>
	</PopupBase>;
};
export default EquipSelectorPopup;
