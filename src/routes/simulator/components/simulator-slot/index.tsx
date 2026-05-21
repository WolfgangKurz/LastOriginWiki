import { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";

import { ACTOR_GRADE } from "@/types/Enums";
import { SimulatorSlotType } from "../../types/Slot";

import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { useLocale } from "@/libs/Locale";

import Icons from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";

import "./style.scss";

interface SimulatorSlotProps {
	idx: number;
	slot: SimulatorSlotType;
	selected?: boolean;

	settable?: true;

	onSelect?: (e: Event) => void;
}

const SimulatorSlot: FunctionalComponent<SimulatorSlotProps> = (props) => {
	const [loc] = useLocale();
	const slot = useMemo(() => props.slot ?? {
		uid: "",
		level: 100,
		rarity: ACTOR_GRADE.B,
		leader: false,
		damaged: false,
		favorBonus: false,
	}, [props.slot]);
	const { uid, level, rarity, leader, damaged } = slot;

	const DAMAGED_TEXT = useMemo(() => loc["SIMULATOR_DAMAGED"]?.replace(/\\n/g, "\n") ?? "수복 필요", [loc]);

	return <div class="simulator-slot" data-empty={ !slot.uid || undefined } data-selected={ props.selected ? "1" : "0" }>
		<div class="slot-indicator">{ props.idx }</div>

		<div class="slot-face">
			{ leader
				? <span class="badge bg-dark flag-leader">
					<Icons.FlagFill />
				</span>
				: <></>
			}
			<UnitFace uid={ uid } sd />
			<span class={ `badge bg-dark rarity-${RarityDisplay[rarity]}-text flag-rarity` }>
				{ RarityDisplay[rarity] }
			</span>

			{ damaged && <div class={ "overlay-damaged" }>
				<img src={ `${AssetsRoot}/ui/need_recovery.png` } />
				<span data-text={ DAMAGED_TEXT }>
					{ DAMAGED_TEXT }
				</span>
			</div> }
		</div>
		<div class="slot-props">
			<span class="badge bg-substory p-1">
				Lv.
				<span class={ level > 100 && "text-orange-light" || "" }>{ level }</span>
			</span>

			{ slot.favorBonus && <span class="badge bg-danger ms-1 p-1">♥</span> }
		</div>

		{ props.settable
			? <>
				{ !slot
					? <div class="slot-adder" >
						<Icons.Plus />
					</div>
					: <></>
				}
				<a href="#" class="stretched-link" onClick={ (e): void => {
					e.preventDefault();
					if (props.onSelect) props.onSelect(e);
				} } />
			</>
			: <></>
		}
	</div>;
};
export default SimulatorSlot;
