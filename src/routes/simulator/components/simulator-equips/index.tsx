import { Fragment, FunctionalComponent, h } from "preact";

import { Unit } from "@/types/DB/Unit";
import { Equip } from "@/types/DB/Equip";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { SimulatorSlotType } from "../../types/Slot";

import { objState } from "@/libs/State";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import EquipLevel from "@/components/equip-level";
import BuffList from "@/components/buff-list";
import EquipSelectorPopup from "@/components/popup/equip-selector-popup";

import "./style.scss";

interface SimulatorEquipProps {
	slot: SimulatorSlotType;

	onLevel?: (index: number, value: number) => void;
	onEquip?: (index: number, uid: string | null) => void;
}

const SimulatorEquips: FunctionalComponent<SimulatorEquipProps> = (props) => {
	const slot = props.slot;
	if (!slot) return <Fragment />;

	const equips = objState<Array<Equip | false | null>>([null, null, null, null]);
	const equipList = equips.value;
	let equipUpdated = false;

	const updator = objState<number>(0);

	slot.equips.forEach((x, i) => {
		const v = equips.value[i];
		if (!x && v !== null) { // 원본은 없는데 비어있지 않은 경우
			equipList.splice(i, 1, null);
			equipUpdated = true;
		} else if (x) {
			if ((v === null) || (v && x.uid !== v.uid)) { // 원본은 있는데 비어있는 경우 또는 원본과 서로 다른 장비인 경우
				equipList.splice(i, 1, false);
				equipUpdated = true;

				JsonLoaderCore(`equip/${x.uid}`)
					.then(() => {
						const json = GetJson<Equip>(`equip/${x.uid}`);
						equipList.splice(i, 1, json);
						equips.set(equipList);
						updator.set(updator.value + 1);
					});
			}
		}
	});
	if (equipUpdated)
		equips.set(equipList);

	const EquipPopupDisplay = objState<boolean>(false);
	const currentPopup = objState<string | undefined>(undefined);
	const currentPopupIndex = objState<number>(0);

	return <Loader json={ [StaticDB.FilterableEquip, `unit/${slot.uid}`] } content={ ((): preact.VNode => {
		const FilterableEquip = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
		const unit = GetJson<Unit>(`unit/${slot.uid}`);
		if (!unit) return <Fragment />;

		return <div class="simulator-equips">
			<EquipSelectorPopup
				display={ EquipPopupDisplay.value }
				value={ currentPopup.value }
				type={ unit.slots[currentPopupIndex.value] }
				noClear
				onSelect={ (uid): void => {
					if (props.onEquip)
						props.onEquip(currentPopupIndex.value, uid);
				} }
				onHidden={ (): void => EquipPopupDisplay.set(false) }
			/>

			{ slot.equips.map((equip, eidx) => <div class="equip-slot" data-type={ unit.slots[eidx] }>
				<div class="equip-slot-icon">
					{ equip
						? <div class="position-relative d-inline-block">
							<EquipIcon image={ `${FilterableEquip.find(x => x.fullKey === equip.uid)!.icon}` } size="76" />
							<EquipLevel level={ equip.level } size={ 14 } />
						</div>
						: <Fragment />
					}
				</div>

				{ ((e): preact.VNode => equip && e
					? <Fragment>
						<div class="equip-title">
							<Locale k={ `EQUIP_${e.uid}` } />
						</div>
						<div class="equip-level">
							<input type="range" class="form-range" min="0" max="10" value={ equip.level } onInput={ (e): void => {
								const value = parseInt((e.target as HTMLInputElement).value, 10);
								if (props.onLevel)
									props.onLevel(eidx, value);
							} } />
						</div>
					</Fragment>
					: equip
						? <Fragment>
							<div class="equip-title">&nbsp;</div>
							<div class="equip-level">
								<input type="range" class="form-range" min="0" max="10" value={ equip ? equip.level : 10 } disabled />
							</div>
						</Fragment>
						: <Fragment>
							<div class="equip-empty">
								<Locale k="SIMULATOR_EQUIP_EMPTY" />
							</div>
						</Fragment>
				)(equipList[eidx]) }

				<div class="equip-functions">
					<div class="btn-group">
						<button class="btn btn-sm btn-light" onClick={ (): void => {
							currentPopup.set((equip && equip.uid) || undefined);
							currentPopupIndex.set(eidx);
							EquipPopupDisplay.set(true);
						} }>
							<Locale k="SIMULATOR_EQUIP_EQUIP" />
						</button>
						<button class="btn btn-sm btn-danger" disabled={ !equip } onClick={ (): void => {
							if (props.onEquip)
								props.onEquip(eidx, null);
						} }>
							<Locale k="SIMULATOR_EQUIP_UNEQUIP" />
						</button>
					</div>
				</div>

				{ ((e): preact.VNode => equip && e
					? <Fragment>
						<hr class="my-2" />

						<BuffList class="equip-buffs" list={ e.stats[equip.level] } />
					</Fragment>
					: <Fragment />
				)(equipList[eidx]) }
			</div>) }
		</div>;
	}) } />;
};
export default SimulatorEquips;
