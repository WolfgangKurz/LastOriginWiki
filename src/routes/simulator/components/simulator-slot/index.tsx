import { FunctionalComponent } from "preact";

import { ACTOR_GRADE } from "@/types/Enums";
import { SimulatorSlotType } from "../../types/Slot";

import { RarityDisplay } from "@/libs/Const";

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
	const slot = props.slot;

	const uid = (slot && slot.uid) || "";
	const level = (slot && slot.level) || 100;
	const rarity = RarityDisplay[(slot && slot.rarity) || ACTOR_GRADE.B];
	const leader = (slot && slot.leader) || false;

	return <div class="simulator-slot" data-empty={ slot ? undefined : true } data-selected={ props.selected ? "1" : "0" }>
		<div class="slot-indicator">{ props.idx }</div>

		<div class="slot-face">
			{ leader
				? <span class="badge bg-dark flag-leader">
					<Icons.FlagFill />
				</span>
				: <></>
			}
			<UnitFace uid={ uid } sd />
			<span class={ `badge bg-dark rarity-${rarity}-text flag-rarity` }>{ rarity }</span>
		</div>
		<div class="slot-props">
			<span class="badge bg-substory">lv.{ level }</span>
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
