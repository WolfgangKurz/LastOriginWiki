import { Fragment, FunctionalComponent, h } from "preact";

import UnitFace from "@/components/unit-face";

import "./style.scss";
import Icon from "@/components/bootstrap-icon";
import { ACTOR_GRADE } from "@/types/Enums";
import { RarityDisplay } from "@/libs/Const";
import { SimulatorSlotType } from "@/routes/simulator/types/Slot";

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

	return <div class="simulator-slot" data-empty={ slot ? undefined : true } data-selected={ props.selected }>
		<div class="slot-indicator">{ props.idx }</div>

		<div class="slot-face">
			{ leader
				? <span class="badge bg-dark flag-leader">
					<Icon icon="flag-fill" />
				</span>
				: <Fragment />
			}
			<UnitFace uid={ uid } sd />
			<span class={ `badge bg-dark rarity-${rarity}-text flag-rarity` }>{ rarity }</span>
		</div>
		<div class="slot-props">
			<span class="badge bg-substory">lv.{ level }</span>
		</div>

		{ props.settable
			? <Fragment>
				{ !slot
					? <div class="slot-adder" >
						<Icon icon="plus" />
					</div>
					: <Fragment />
				}
				<a href="#" class="stretched-link" onClick={ (e): void => {
					e.preventDefault();
					if (props.onSelect) props.onSelect(e);
				} } />
			</Fragment>
			: <Fragment />
		}
	</div>;
};
export default SimulatorSlot;