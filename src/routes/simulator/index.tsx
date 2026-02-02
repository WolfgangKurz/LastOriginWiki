import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";

import { ROLE_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { SimulatorSlotType, SimulatorSlotEntity } from "./types/Slot";

import { AssetsRoot, IsDev } from "@/libs/Const";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { GetRequireResource } from "@/libs/Cost";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Loading from "@/components/loading";
import Icons from "@/components/bootstrap-icon";
import SimulatorSlot from "./components/simulator-slot";
import SimulatorSummary from "./components/simulator-summary";
import SimulatorUpgrade from "./components/simulator-upgrade";
import SimulatorEquips from "./components/simulator-equips";

import style from "./style.module.scss";

const Simulator: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "전투원의 스테이터스를 계산해볼 수 있는 시뮬레이터입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle("Simulator");

	const kidx = (row: number, col: number): number => (2 - row) * 3 + (col % 3) + 1;

	const [editTab, setEditTab] = useState<number>(0);

	const [grid, setGrid] = useState<SimulatorSlotType[][]>(() => [0, 0, 0].map(() => [null, null, null]));
	const flattenGrid = useMemo(() => grid.flat(), [grid]);

	const [selectedSlot, setSelectedSlot] = useState<number>(4);

	const FilterableUnit = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnit) return <Loading.Data />;

	const [leaderIdx, setLeaderIdx] = useState(-1);
	useEffect(() => {
		const cells = flattenGrid.filter(r => r);
		if (!cells.some(r => r!.leader)) // no leader in groups
			setLeaderIdx(flattenGrid.findIndex(r => !!r)); // find first non-empty cell
	}, [flattenGrid, leaderIdx]);

	interface SummaryInfo {
		metal: number;
		nutrient: number;
		power: number;

		attacker: number;
		defender: number;
		supporter: number;
	}
	const linksRequire = [10, 30, 50, 70, 90];
	const squadSummary = useMemo(
		(): SummaryInfo => flattenGrid
			.filter(x => x)
			.map(slot => {
				if (!slot) throw new Error("invalid process");

				const unit = FilterableUnit.find(x => x.uid === slot.uid);
				if (!unit) {
					return {
						metal: 0,
						nutrient: 0,
						power: 0,
						role: -1,
					};
				}

				const Discounted = GetRequireResource(
					slot.rarity,
					unit.type,
					unit.role,
					unit.body,
					slot.linkBonus,
				);

				const links = slot.links.filter((x, index) => x > 0 && slot.level >= linksRequire[index]).length;
				return {
					metal: Discounted.metal[links],
					nutrient: Discounted.nutrient[links],
					power: Discounted.power[links],
					role: unit.role,
				};
			})
			.reduce((p, c) => {
				if (c === null) return p;
				p.metal += c.metal;
				p.nutrient += c.nutrient;
				p.power += c.power;

				switch (c.role) {
					case ROLE_TYPE.ATTACKER:
						p.attacker++;
						break;
					case ROLE_TYPE.DEFENDER:
						p.defender++;
						break;
					case ROLE_TYPE.SUPPORTER:
						p.supporter++;
						break;
				}
				return p;
			}, { metal: 0, nutrient: 0, power: 0, attacker: 0, defender: 0, supporter: 0 }),
		[flattenGrid, FilterableUnit],
	);

	function xy (i: number): [x: number, y: number] {
		const x = i % 3;
		const y = Math.floor(i / 3);
		return [x, y];
	}
	function setGridCell (idx: number, value: SimulatorSlotType) {
		setGrid(v => {
			const a = [...v];
			const [x, y] = xy(idx);
			a[y][x] = value;
			return a;
		});
	}
	function setGridCellFor<T extends keyof SimulatorSlotEntity> (idx: number, prop: T, value: SimulatorSlotEntity[T]) {
		setGrid(v => {
			const a = [...v];
			const [x, y] = xy(idx);
			if (a[y][x]) a[y][x][prop] = value;
			return a;
		});
	}
	const setupGrid = useCallback((idx: number, uid: string | null) => {
		const u = FilterableUnit.find(r => r.uid === uid);
		if (!u) return undefined;

		setGrid(v => {
			const a = [...v];
			const [x, y] = xy(idx);
			if (!uid)
				a[y][x] = null;
			else
				a[y][x] = {
					uid,
					leader: !flattenGrid.some(r => r?.leader),
					level: 120,
					rarity: u.rarity,

					links: [0, 0, 0, 0, 0],
					linkBonus: "",

					equips: [null, null, null, null],

					hp: Math.floor(u.stat[0].HP[1]),
					stats: {
						ATK: 0,
						DEF: 0,
						HP: 0,
						ACC: 0,
						EVA: 0,
						CRI: 0,
						SPD: 0,
					},
				};
			return a;
		});
	}, [FilterableUnit, flattenGrid, leaderIdx]);

	type SSEE = SimulatorSlotEntity["equips"];
	return <div class="simulator">
		<h2 class="title mb-0">
			<span>Simulator</span>
			<sup>β</sup>
		</h2>
		{ IsDev
			? <span class="badge bg-danger">
				<Icons.BugFill class="me-1" />
				<span>DevMode</span>
			</span>
			: <></>
		}

		<div class="row justify-content-center mt-2">
			<div class="col-xl-6 col-12">
				<div class="row justify-content-center mt-4">
					<div class="simulator-cost-total">
						<span>
							<img src={ `${AssetsRoot}/res-component.png` } />
							{ squadSummary.metal }
						</span>
						<span>
							<img src={ `${AssetsRoot}/res-nutrition.png` } />
							{ squadSummary.nutrient }
						</span>
						<span>
							<img src={ `${AssetsRoot}/res-power.png` } />
							{ squadSummary.power }
						</span>

						<span>
							<i data-role="1" />
							{ squadSummary.attacker }
						</span>
						<span>
							<i data-role="0" />
							{ squadSummary.defender }
						</span>
						<span>
							<i data-role="2" />
							{ squadSummary.supporter }
						</span>
					</div>


					<div class="col-auto">
						<table class={ `table ${style.GridTable}` }>
							{ grid.map((_, j) => <tr>
								{ _.map((slot, i) => <td>
									<SimulatorSlot
										idx={ kidx(j, i) }
										slot={ slot }
										settable
										selected={ selectedSlot === j * 3 + i }
										onSelect={ (): void => setSelectedSlot(j * 3 + i) }
									/>
								</td>) }
							</tr>) }
						</table>
					</div>
				</div>

				<SimulatorSummary slot={ flattenGrid[selectedSlot] } />
			</div>

			<div class="col-xl-6 col-12">
				<div class="card">
					<div class="card-header bg-dark">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab === 0, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										setEditTab(0);
									} }
								>
									<Locale k="SIMULATOR_STATS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab === 1, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										setEditTab(1);
									} }
								>
									<Locale k="SIMULATOR_EQUIPS" />
								</a>
							</li>
							<li class="nav-item">
								<a
									href="#"
									class={ `nav-link ${isActive(editTab === 2, "active text-dark", "text-light")}` }
									onClick={ (e: Event): void => {
										e.preventDefault();
										setEditTab(2);
									} }
								>
									<Locale k="SIMULATOR_SKILLS" />
									<span class="badge bg-secondary ms-2" style={ { fontSize: "0.7em" } }>TBA</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						{ editTab === 0
							? <SimulatorUpgrade
								slot={ flattenGrid[selectedSlot] }
								limited={ flattenGrid.filter(x => x).length >= 5 }
								using={ flattenGrid.filter(x => x).map(x => x!.uid) }
								onUpdateUnit={ (uid): void => {
									const target = flattenGrid[selectedSlot];
									if (target && target.uid === uid) return; // 같으면 무시
									if (!uid)
										setGridCell(selectedSlot, null);
									else
										setupGrid(selectedSlot, uid);
								} }
								onUpdateLevel={ (level): void => {
									const target = flattenGrid[selectedSlot];
									if (target)
										setGridCellFor(selectedSlot, "level", isNaN(level) ? 1 : Math.max(1, Math.min(120, level)));
								} }
								onUpdateRarity={ (rarity): void => {
									const target = flattenGrid[selectedSlot];
									if (target)
										setGridCellFor(selectedSlot, "rarity", rarity);
								} }
								onUpdateLink={ (index, value): void => {
									const target = flattenGrid[selectedSlot];
									if (target) {
										const links = target.links;
										links[index] = isNaN(value) ? 0 : value;

										setGridCellFor(selectedSlot, "links", links);
									}
								} }
								onUpdateLinkBonus={ (bonus): void => {
									const target = flattenGrid[selectedSlot];
									if (target)
										setGridCellFor(selectedSlot, "linkBonus", bonus);
								} }
								onUpdateStat={ (t, v): void => {
									const target = flattenGrid[selectedSlot];
									if (target)
										setGridCellFor(selectedSlot, t as keyof SimulatorSlotEntity, v);
								} }
							/>
							: <></>
						}
						{ editTab === 1
							? <SimulatorEquips
								slot={ flattenGrid[selectedSlot] }
								onLevel={ (idx, level): void => {
									const target = flattenGrid[selectedSlot];
									if (target) {
										const e = [...target.equips];
										if (!e[idx]) return;

										e[idx]!.level = level;
										setGridCellFor(selectedSlot, "equips", e as SSEE);
									}
								} }
								onEquip={ (idx, equip, buffs): void => {
									const target = flattenGrid[selectedSlot];
									if (target) {
										const e = [...target.equips];

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

										setGridCellFor(selectedSlot, "equips", e as SSEE);
									}
								} }
								onBuffUpdate={ (idx, key, checked): void => {
									const target = flattenGrid[selectedSlot];
									if (!target) return;

									const n = Object.assign({}, target);

									const e = n.equips[idx];
									if (!e) return;

									if (checked && !(key in e.buffs))
										e.buffs[key] = 1;
									else
										delete e.buffs[key];

									setGridCell(selectedSlot, n);
								} }
								onStack={ (idx, key, value): void => {
									const target = flattenGrid[selectedSlot];
									if (!target) return;

									const n = Object.assign({}, target);

									const e = n.equips[idx];
									if (!e) return;

									e.buffs[key] = value;
									setGridCell(selectedSlot, n);
								} }
							/>
							: <></>
						}

						{ editTab === 2
							? <div class="my-3 text-secondary">
								<Locale k="SIMULATOR_TBA_3" />
							</div>
							: <></>
						}

						{ !flattenGrid[selectedSlot] && editTab === 1
							? <div class="my-3 text-secondary">
								<Locale k="SIMULATOR_SELECT_FIRST" />
							</div>
							: <></>
						}
					</div>
				</div>
			</div>
		</div>
	</div>;
};
export default Simulator;
