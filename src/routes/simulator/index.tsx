import { Fragment, FunctionalComponent, h } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { Unit } from "@/types/DB/Unit";
import { SimulatorSlotType, SimulatorSlotEntity } from "./types/Slot";

import { ObjectState, objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import SimulatorSlot from "./components/simulator-slot";
import SimulatorSummary from "./components/simulator-summary";
import SimulatorUpgrade from "./components/simulator-upgrade";
import SimulatorEquips from "./components/simulator-equips";

import "./style.scss";

const Simulator: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "전투원의 스테이터스를 계산해볼 수 있는 시뮬레이터입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle("Simulator");

	const kidx = (row: number, col: number): number => (2 - row) * 3 + (col % 3) + 1;

	const editTab = objState<number>(0);
	const Grid = ((): ObjectState<SimulatorSlotType>[][] => new Array(3)
		.fill(0)
		.map(_ => new Array(3)
			.fill(0)
			.map((_, i) => objState<SimulatorSlotType>(null)),
		))();

	const FlattenGrid = Grid.flat();

	const selectedSlot = objState<number>(4);

	return <Loader json={ [StaticDB.FilterableUnit] } content={ ((): preact.VNode => {
		const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		function SetupUnit (target: ObjectState<SimulatorSlotType | null>, uid: string): void {
			const u = FilterableUnit.find(x => x.uid === uid);
			if (!u) return;

			JsonLoaderCore(`unit/${uid}`)
				.then(() => {
					const unit = GetJson<Unit>(`unit/${uid}`);
					if (!unit) return;

					target.set({
						uid,
						leader: FlattenGrid.every(x => x.value === null),
						level: 100,
						rarity: u.rarity,

						links: [0, 0, 0, 0, 0],
						linkBonus: "",

						equips: [null, null, null, null],

						hp: Math.floor(unit.stat[0].HP[1]),
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
				});
		}

		return <div class="simulator">
			<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;700&amp;display=swap" rel="stylesheet" />

			<h2 class="title mb-0">
				<span>Simulator</span>
				<sup>β</sup>
			</h2>
			{ process.env.NODE_ENV === "development"
				? <span class="badge bg-danger">
					<Icon icon="bug-fill" class="me-1" />
					<span>DevMode</span>
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
										<span class="badge bg-secondary ms-2" style={ { fontSize: "0.7em" } }>TBA</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="card-body">
							{ editTab.value === 0
								? <SimulatorUpgrade
									slot={ FlattenGrid[selectedSlot.value].value }
									limited={ FlattenGrid.filter(x => x.value).length >= 5 }
									using={ FlattenGrid.filter(x => x.value).map(x => x.value!.uid) }
									onUpdateUnit={ (uid): void => {
										const target = FlattenGrid[selectedSlot.value];
										if (target.value && target.value.uid === uid) return; // 같으면 무시
										if (!uid)
											target.set(null);
										else
											SetupUnit(target, uid);
									} }
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
											links[index] = isNaN(value) ? 0 : value;

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
												equips: e as SimulatorSlotEntity["equips"],
											});
										}
									} }
									onEquip={ (idx, equip, buffs): void => {
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
													buffs,
												};
											} // 둘 다 null이면 처리 필요 없음

											target.set({
												...target.value,
												equips: e as SimulatorSlotEntity["equips"],
											});
										}
									} }
									onBuffUpdate={ (idx, key, checked): void => {
										const target = FlattenGrid[selectedSlot.value];
										if (!target.value) return;

										const n = Object.assign({}, target.value);

										const e = n.equips[idx];
										if (!e) return;

										if (checked && !(key in e.buffs))
											e.buffs[key] = 1;
										else
											delete e.buffs[key];

										target.set(n);
									} }
									onStack={ (idx, key, value): void => {
										const target = FlattenGrid[selectedSlot.value];
										if (!target.value) return;

										const n = Object.assign({}, target.value);

										const e = n.equips[idx];
										if (!e) return;

										e.buffs[key] = value;
										target.set(n);
									} }
								/>
								: <Fragment />
							}

							{ editTab.value === 2
								? <div class="my-3 text-secondary">
									<Locale k="SIMULATOR_TBA_3" />
								</div>
								: <Fragment />
							}

							{ !FlattenGrid[selectedSlot.value].value && editTab.value === 1
								? <div class="my-3 text-secondary">
									<Locale k="SIMULATOR_SELECT_FIRST" />
								</div>
								: <Fragment />
							}
						</div>
					</div>
				</div>
			</div>
		</div>;
	}) } />;
};
export default Simulator;
