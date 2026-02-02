import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Unit } from "@/types/DB/Unit";
import { Equip } from "@/types/DB/Equip";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { SimulatorSlotType } from "../../types/Slot";

import Loader, { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Loading from "@/components/loading";
import EquipIcon from "@/components/equip-icon";
import EquipLevel from "@/components/equip-level";
import EquipSelectorPopup from "@/components/popup/equip-selector-popup";
import BuffChecklist from "../buff-checklist";

import "./style.scss";

interface SimulatorEquipProps {
	slot: SimulatorSlotType;

	onLevel?: (index: number, value: number) => void;
	onEquip?: (index: number, uid: string | null, buffs: Record<string, number>) => void;

	onBuffUpdate?: (index: number, key: string, checked: boolean) => void;
	onStack?: (index: number, key: string, value: number) => void;
}

const SimulatorEquips: FunctionalComponent<SimulatorEquipProps> = (props) => {
	const slot = props.slot;
	if (!slot) return <></>;

	const [equips, setEquips] = useState<Array<Equip | false | null>>([null, null, null, null]);
	const equipList = slot.equips.map(e => useDBData<Equip>(e ? `equip/${e.uid}` : null));

	useEffect(() => {
		slot.equips.forEach((x, i) => {
			const v = equips[i];
			if (
				(!x && v !== null) ||
				(x && ((v === null) || (v && x.uid !== v.uid)))
			)
				// 원본은 없는데 비어있지 않은 경우
				// 원본은 있는데 비어있는 경우 또는 원본과 서로 다른 장비인 경우
				setEquips(a => a.map((v, j) => j === i ? null : v));
		});
	}, [slot.equips, equips]);

	const [displayEquipPopup, setDisplayEquipPopup] = useState<boolean>(false);
	const [currentPopup, setCurrentPopup] = useState<string | undefined>(undefined);
	const [currentPopupIndex, setCurrentPopupIndex] = useState<number>(0);

	const FilterableEquip = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip);
	const unit = useDBData<Unit>(`unit/${slot.uid}`);
	if (!FilterableEquip || !unit) return <Loading.Data />;

	return <div class="simulator-equips">
		<EquipSelectorPopup
			display={ displayEquipPopup }
			value={ currentPopup }
			type={ unit.slots[currentPopupIndex] }
			noClear
			onSelect={ (uid): void => {
				if (props.onEquip)
					props.onEquip(currentPopupIndex, uid, {});
			} }
			onHidden={ (): void => setDisplayEquipPopup(false) }
		/>

		{ slot.equips.map((equip, eidx) => <div class="equip-slot" data-type={ unit.slots[eidx] }>
			<div class="equip-slot-icon">
				{ equip
					? <div class="position-relative d-inline-block">
						<EquipIcon image={ `${FilterableEquip.find(x => x.fullKey === equip.uid)!.icon}` } size="76" />
						<EquipLevel level={ equip.level } size={ 14 } />
					</div>
					: <></>
				}
			</div>

			{ ((e): preact.VNode => equip && e
				? <>
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
				</>
				: equip
					? <>
						<div class="equip-title">&nbsp;</div>
						<div class="equip-level">
							<input type="range" class="form-range" min="0" max="10" value={ equip ? equip.level : 10 } disabled />
						</div>
					</>
					: <>
						<div class="equip-empty">
							<Locale k="SIMULATOR_EQUIP_EMPTY" />
						</div>
					</>
			)(equipList[eidx]) }

			<div class="equip-functions">
				<div class="btn-group">
					<button class="btn btn-sm btn-light" onClick={ (): void => {
						setCurrentPopup((equip && equip.uid) || undefined);
						setCurrentPopupIndex(eidx);
						setDisplayEquipPopup(true);
					} }>
						<Locale k="SIMULATOR_EQUIP_EQUIP" />
					</button>
					<button class="btn btn-sm btn-danger" disabled={ !equip } onClick={ (): void => {
						if (props.onEquip)
							props.onEquip(eidx, null, {});
					} }>
						<Locale k="SIMULATOR_EQUIP_UNEQUIP" />
					</button>
				</div>
			</div>

			{ ((e): preact.VNode => equip && e
				? <>
					<hr class="my-2" />

					<BuffChecklist
						class="equip-buffs"
						uid={ slot.uid }
						list={ e.stats[equip.level] }
						level={ equip.level }
						buffTable={ equip.buffs }
						onUpdate={ (key, checked): void => {
							if (props.onBuffUpdate)
								props.onBuffUpdate(eidx, key, checked);
						} }
						onStack={ (key, value): void => {
							if (props.onStack)
								props.onStack(eidx, key, value);
						} }
					/>
				</>
				: <></>
			)(equipList[eidx]) }
		</div>) }
	</div>;
};
export default SimulatorEquips;
