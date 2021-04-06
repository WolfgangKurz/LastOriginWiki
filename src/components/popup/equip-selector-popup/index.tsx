import { Fragment, FunctionalComponent, h } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { ACTOR_GRADE, ITEM_GRADE, ITEM_TYPE } from "@/types/Enums";

import { objState } from "@/libs/State";
import { RarityDisplay } from "@/libs/Const";
import { groupBy, isActive } from "@/libs/Functions";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
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
	const latestValue = objState<string | undefined>(undefined);

	const value = objState<string>("");
	const typeKey = objState<string>("");
	const rarity = objState<ITEM_GRADE>(ACTOR_GRADE.SS);

	const rarities = objState<ITEM_GRADE[]>([]);

	const TypeTable = ["Chip", "System", "Sub"];
	const RarityTable = ["", "", "T1", "T2", "T3", "T4", "T0"];

	function updateTypeKey (): void {
		const kv = /^([^_]+)_(.+)_([^_]+)$/.exec(value.value);
		const v = kv
			? `${kv[1]}_${kv[2]}`
			: "";

		if (kv) {
			const r = RarityTable.indexOf(kv[3]);
			rarity.set(r);
		}

		if (v !== typeKey.value)
			typeKey.set(v);
	}

	return <Loader json={ StaticDB.FilterableEquip } content={ ((): preact.VNode => {
		const FilterableEquip = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);

		const source = props.type !== undefined
			? FilterableEquip.filter(x => x.type === props.type)
			: FilterableEquip;
		const groups = groupBy(source, x => `${TypeTable[x.type]}_${x.key}`);

		function updateRarity (): void {
			const g = groups[typeKey.value];
			if (!g) return;

			const list = g.map(x => x.rarity)
				.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as ITEM_GRADE[]);

			rarities.set(list);
			if (!list.includes(rarity.value)) {
				rarity.set(list[list.length - 1]);
				value.set(`${typeKey.value}_${RarityTable[rarity.value]}`);
			}
		}

		if (latestValue.value !== props.value) {
			value.set(props.value || "");
			latestValue.set(props.value);
			updateTypeKey();
			updateRarity();
		}

		return <PopupBase
			contentClass="equip-selector-popup"
			display={ props.display }
			size="md"
			header={ <Locale k="POPUP_EQUIP_TITLE" /> }
			headerEnd={ <div class="btn-group me-1">
				{ [ACTOR_GRADE.B, ACTOR_GRADE.A, ACTOR_GRADE.S, ACTOR_GRADE.SS, ACTOR_GRADE.SSS].map(r => <button
					class={ `btn btn-outline-dark ${isActive(rarity.value === r)}` }
					disabled={ !rarities.value.includes(r) }
					onClick={ (e): void => {
						e.preventDefault();
						rarity.set(r);
					} }
				>
					{ RarityDisplay[r] }
				</button>) }
			</div> }
			footer={ <div class="btn-group">
				<button class="btn btn-primary"
					onClick={ (e): void => {
						e.preventDefault();
						if (props.onSelect && value.value) {
							props.onSelect(value.value);
							if (props.onHidden) props.onHidden();
						}
					} }
				>
					<Locale k="POPUP_EQUIP_SELECT" />
				</button>
				{ props.noClear
					? <Fragment />
					: <button class="btn btn-danger">
						<Locale k="POPUP_EQUIP_CLEAR" />
					</button>
				}
			</div> }
			onHidden={ (): void => {
				value.set("");

				if (props.onHidden)
					props.onHidden();
			} }
		>
			<div>
				<ul class="list-group mb-3">
					{ Object.values(groups).map(e => {
						const eq = e[e.length - 1];
						const icon = ((): string => {
							const f = e.find(r => r.rarity === rarity.value);
							if (f) return f.icon;
							return eq.icon;
						})();
						const actived = typeKey.value === `${TypeTable[eq.type]}_${eq.key}`;

						return <li
							class={ `list-group-item equip-list-item ${isActive(actived, `bg-rarity-${RarityDisplay[rarity.value]}`, "")}` }
							role="button"
							onClick={ (e): void => {
								e.preventDefault();

								value.set(`${TypeTable[eq.type]}_${eq.key}_${RarityTable[rarity.value]}`);
								updateTypeKey();
								updateRarity();
							} }
						>
							<EquipIcon class="me-3" image={ icon } />
							<div class="d-inline-block text-start">
								<div>
									<strong>{ LocaleGet(`EQUIP_${eq.fullKey}`).replace(/ (RE|MP|SP|EX)$/, "") }</strong>

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
	}) } />;
};
export default EquipSelectorPopup;
