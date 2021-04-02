import { Fragment, FunctionalComponent, h } from "preact";

import { ACTOR_GRADE } from "@/types/Enums";

import { ObjectState, objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

import SimulatorSlot from "./components/simulator-slot";
import SimulatorSummary from "./components/simulator-summary";
import SimulatorUpgrade from "./components/simulator-upgrade";

import { SimulatorSlotType, SimulatorSlotItem } from "@/routes/simulator/types/Slot";

import "./style.scss";
import SimulatorEquips from "@/routes/simulator/components/simulator-equips";

const Simulator: FunctionalComponent = () => {
	const kidx = (row: number, col: number): number => (2 - row) * 3 + (col % 3) + 1;

	const editTab = objState<number>(1);
	const Grid = ((): ObjectState<SimulatorSlotType>[][] => new Array(3)
		.fill(0)
		.map(_ => new Array(3)
			.fill(0)
			.map((_, i) => objState<SimulatorSlotType>(null)),
		))();

	const FlattenGrid = Grid.flat();

	if (Grid[1][1].value === null) {
		Grid[1][1].set({
			uid: "PECS_Rena",
			leader: true,
			level: 100,
			rarity: ACTOR_GRADE.SS,

			links: [0, 0, 0, 0, 0],
			linkBonus: "",

			equips: [null, null, null, null],

			hp: 3000,
			stats: {
				ATK: 0,
				DEF: 0,
				HP: 0,
				ACC: 0,
				EVA: 0,
				CRI: 0,
				SPD: 0,
			},
		});
	}

	const selectedSlot = objState<number>(4);

	return <div class="simulator">
		<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;700&amp;display=swap" rel="stylesheet" />

		<h2 class="title mb-0">
			Simulator
			<sup>β</sup>
		</h2>
		{ process.env.NODE_ENV === "development"
			? <span class="badge bg-danger">
				<Icon icon="bug-fill" class="me-1" />
				in development
			</span>
			: <Fragment />
		}

		<div class="row justify-content-center mt-2">
			<div class="col-xl-6 col-12">
				<div class="row justify-content-center mt-4">
					<div class="col-auto">
						<table class="table">
							{ Grid.map((_, j) => <tr>
								{ _.map((slot, i) => <td>
									<SimulatorSlot
										idx={ kidx(j, i) }
										slot={ slot.value }
										settable
										selected={ selectedSlot.value === j * 3 + i }
										onSelect={ (): void => selectedSlot.set(j * 3 + i) }
									/>
								</td>) }
							</tr>) }
						</table>
					</div>
				</div>

				<SimulatorSummary slot={ FlattenGrid[selectedSlot.value].value } />
			</div>

			<div class="col-xl-6 col-12">
				<div class="card">
					<div class="card-header bg-dark">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab.value === 0, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										editTab.set(0);
									} }
								>
									<Locale k="SIMULATOR_STATS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab.value === 1, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										editTab.set(1);
									} }
								>
									<Locale k="SIMULATOR_EQUIPS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab.value === 2, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										editTab.set(2);
									} }
								>
									<Locale k="SIMULATOR_SKILLS" />
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						{ editTab.value === 0
							? <SimulatorUpgrade
								slot={ FlattenGrid[selectedSlot.value].value }
								onUpdateLevel={ (level): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										target.set({
											...target.value,
											level: isNaN(level) ? 1 : Math.max(1, Math.min(100, level)),
										});
									}
								} }
								onUpdateRarity={ (rarity): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										target.set({
											...target.value,
											rarity,
										});
									}
								} }
								onUpdateLink={ (index, value): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										const links = target.value.links;
										links[index] = value;

										target.set({
											...target.value,
											links,
										});
									}
								} }
								onUpdateLinkBonus={ (bonus): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										target.set({
											...target.value,
											linkBonus: bonus,
										});
									}
								} }
								onUpdateStat={ (t, v): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										target.set({
											...target.value,
											stats: {
												...target.value.stats,
												[t]: v,
											},
										});
									}
								} }
							/>
							: <Fragment />
						}

						{ editTab.value === 1
							? <SimulatorEquips
								slot={ FlattenGrid[selectedSlot.value].value }
								onLevel={ (idx, level): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										const e = [...target.value.equips];
										if (!e[idx]) return;

										e[idx]!.level = level;
										target.set({
											...target.value,
											equips: e as SimulatorSlotItem["equips"],
										});
									}
								} }
								onEquip={ (idx, equip): void => {
									const target = FlattenGrid[selectedSlot.value];
									if (target.value) {
										const e = [...target.value.equips];

										if (e[idx] && equip)
											e[idx]!.uid = equip;
										else if (e[idx])
											e.splice(idx, 1, null);
										else if (equip) {
											e[idx] = {
												uid: equip,
												level: 10,
											};
										} // 둘 다 null이면 처리 필요 없음

										target.set({
											...target.value,
											equips: e as SimulatorSlotItem["equips"],
										});
									}
								} }
							/>
							: <Fragment />
						}
					</div>
				</div>
			</div>
		</div>
	</div>;
};
export default Simulator;
