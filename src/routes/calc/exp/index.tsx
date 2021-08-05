import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { ACTOR_GRADE, ITEM_GRADE } from "@/types/Enums";
import { MapWaveGroup, Worlds } from "@/types/DB/Map";
import { Equip } from "@/types/DB/Equip";

import { objState } from "@/libs/State";
import { RarityDisplay } from "@/libs/Const";
import { FormatNumber, isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";
import SkillIcon from "@/components/skill-icon";
import EquipIcon from "@/components/equip-icon";

import style from "./style.scss";
import { Unit } from "@/types/DB/Unit";

interface BonusCharInfo {
	uid: string;
	skill: number;
	icon: string;
}
interface BonusCharStateInfo extends BonusCharInfo {
	level: number;
}

interface BonusEquipInfo {
	uid: string;
	rarities: ITEM_GRADE[];
	stacks?: number;
}
interface BonusEquipStateInfo extends BonusEquipInfo {
	level: number;
	rarity: ITEM_GRADE;
	stack: number;
}

type BonusInfo = BonusCharInfo | BonusEquipInfo;
type BonusState = BonusCharStateInfo | BonusEquipStateInfo;

interface EXPSet {
	world: string;
	map: string;
	node: string;

	isLeader: boolean;
	bonus: BonusState[];

	_tab: number;
}

const EXPCalc: FunctionalComponent = () => {
	const linkColors = ["secondary", "success", "success", "success", "success", "primary"];
	const rarities: ACTOR_GRADE[] = [
		ACTOR_GRADE.B,
		ACTOR_GRADE.A,
		ACTOR_GRADE.S,
		ACTOR_GRADE.SS,
	];
	const excludeWorlds: string[] = [
		"Sub",
		"Daily",
		"Cha",
	];

	const contentTabs = ["SKILL_BONUS", "EQUIP_BONUS", "RESULT"];

	const bonuses: BonusInfo[] = [
		{
			uid: "3P_Alexandra",
			skill: 5,
			icon: "ExpUp",
		},
		{
			uid: "PECS_TommyWalker",
			skill: 3,
			icon: "ExpUp",
		},
		{
			uid: "Chip_KillExp",
			rarities: [ACTOR_GRADE.SS, ACTOR_GRADE.S, ACTOR_GRADE.A, ACTOR_GRADE.B],
			stacks: 3,
		},
		{ // 칩은 두개 세팅 가능
			uid: "Chip_KillExp",
			rarities: [ACTOR_GRADE.SS, ACTOR_GRADE.S, ACTOR_GRADE.A, ACTOR_GRADE.B],
			stacks: 3,
		},
		{
			uid: "System_Exp",
			rarities: [ACTOR_GRADE.SS, ACTOR_GRADE.S, ACTOR_GRADE.A, ACTOR_GRADE.B],
		},
		{
			uid: "System_ImExp",
			rarities: [ACTOR_GRADE.SS],
		},
	];

	const facilityBonuses = [
		0,
		1.25, 1.37, 1.5, 1.63, 1.75,
		1.88, 2, 2.13, 2.25, 2.38,
		2.5, 2.63, 2.75, 2.88, 3,
		3.13, 3.25, 3.38, 3.63, 3.75,
		4, 4.25, 4.5, 4.75, 5,
	];
	const unitEXPTable = [
		0, 120, 129, 140, 152, 165, 182, 200, 218, 241,
		264, 291, 321, 392, 434, 476, 523, 577, 638, 703,
		773, 852, 937, 1035, 1141, 1260, 1386, 1528, 1682, 1852,
		2043, 2251, 2481, 2734, 2982, 3256, 3556, 3890, 4254, 4634,
		5052, 5511, 6019, 6574, 7227, 7973, 8787, 9614, 10506, 11486,
		12509, 13584, 14712, 15895, 17132, 18426, 19776, 21185, 22653, 24181,
		25770, 27421, 29136, 30914, 32757, 34667, 36644, 38688, 40802, 42986,
		45241, 47568, 49968, 52443, 54992, 57618, 60320, 63101, 65961, 68901,
		71922, 75025, 78212, 81482, 84837, 88279, 91808, 95424, 99130, 123219,
		153161, 190380, 236642, 294146, 365624, 454470, 564906, 702178, 872807, 1003728,
	];

	const CoreLinks = objState<number>(0);
	const baseLevel = objState<number>(1);
	const baseExp = objState<number>(0);
	const destLevel = objState<number>(100);
	const unitRarity = objState<ACTOR_GRADE>(ACTOR_GRADE.SS);

	const eventBonus = objState<number>(0);
	const facilityLevel = objState<number[]>([0, 0, 0, 0]);
	const boostBonus = objState<boolean>(false);

	const expSet = objState<EXPSet[]>([]);

	SetMeta(["description", "twitter:description"], "목표 경험치까지의 전투원의 필요 전투 횟수를 확인할 수 있는 경험치 계산기입니다.");
	SetMeta("keywords", ",경험치 계산기,경험치계산기", true);
	SetMeta(["twitter:image", "og:image"], null);

	UpdateTitle(LocaleGet("MENU_ETC_EXPCALC"));

	return <div class="EXPCalculator">
		<div class="row">
			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_UNIT_GRADE" />
				</div>
				<div class="ms-2 mb-2">
					<div class="btn-group">
						{ rarities.map(x => <button
							class={ `btn btn-outline-rarity-${RarityDisplay[x]} ${isActive(unitRarity.value === x)}` }
							onClick={ (): void => unitRarity.set(x) }
						>{ RarityDisplay[x] }</button>) }
					</div>
				</div>
			</div>
			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_CORELINKS" />
				</div>
				<div class="ms-2 mb-2 text-center">
					<div class="btn-group">
						{ linkColors.map((x, i) => <button
							class={ `btn btn-outline-${x} ${isActive(CoreLinks.value === i)}` }
							onClick={ (): void => CoreLinks.set(i) }
						>{ i }</button>) }
					</div>
				</div>
			</div>
			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_CURRENT" />
				</div>
				<div class="ms-2 mb-2">
					<div class="input-group mb-1">
						<span class="input-group-text">Lv</span>
						<input
							type="text"
							class="form-control text-end"
							value={ baseLevel.value }
							onInput={ (e): void => baseLevel.set(parseInt((e.target as HTMLInputElement).value, 10)) }
						/>
					</div>
					<div class="input-group mb-1">
						<span class="input-group-text">EXP</span>
						<input
							type="text"
							class="form-control text-end"
							value={ baseExp.value }
							onInput={ (e): void => baseExp.set(parseInt((e.target as HTMLInputElement).value, 10)) }
						/>
					</div>
				</div>
			</div>
			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_DEST_LEVEL" />
				</div>
				<div class="ms-2 mb-2">
					<div class="input-group mb-1">
						<span class="input-group-text">Lv</span>
						<input
							type="text"
							class="form-control text-end"
							value={ destLevel.value }
							onInput={ (e): void => destLevel.set(parseInt((e.target as HTMLInputElement).value, 10)) }
						/>
					</div>
				</div>
			</div>

			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_BOOST" />
				</div>
				<div class="ms-2 mb-2">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						checked={ boostBonus.value }
						onChange={ (e): void => {
							e.preventDefault();
							boostBonus.set((e.target as HTMLInputElement).checked);
						} }
					/>
				</div>
			</div>
			<div class="col col-12 col-md-6 col-lg-3">
				<div class="mb-1">
					<Locale k="EXPCALC_FACILITY" />
				</div>
				<div class="ms-2 mb-2">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
						{ facilityLevel.value.map((level, i) => <div class="col mb-2">
							<select
								class="d-inline-block w-auto form-select form-select-sm"
								value={ level }
								onChange={ (e): void => {
									e.preventDefault();

									const value = parseInt((e.target as HTMLSelectElement).value, 10);
									facilityLevel.set((v) => [
										...v.slice(0, i),
										value,
										...v.slice(i + 1),
									]);
								} }
							>
								<option value={ 0 }>
									<Locale k="EXPCALC_BONUS_NONE" />
								</option>

								{ new Array(25)
									.fill(0)
									.map((_, i) => <option value={ i + 1 }>Lv. { i + 1 }</option>)
								}
							</select>
						</div>) }
					</div>
				</div>
			</div>
		</div>
		<hr />

		<Loader
			json={ [
				StaticDB.Map,
				...bonuses
					.map(x => {
						if ("skill" in x)
							return [`unit/${x.uid}`];
						return x.rarities.map(r => `equip/${x.uid}_T${r - 1}`);
					})
					.flat(),
			] }
			content={ (): preact.VNode => {
				const MapDB = GetJson<Worlds>(StaticDB.Map);

				const worlds = Object.keys(MapDB).filter(x => !excludeWorlds.includes(x));

				return <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3">
					{ expSet.value.map((x, i) => {
						interface IndexedBonus<T extends BonusState = BonusState> {
							data: T;
							index: number;
						}
						const maps = (x.world && Object.keys(MapDB[x.world])) || [];
						const nodes = (x.world && x.map && MapDB[x.world][x.map]) || [];

						const indexedBonuses = x.bonus.map<IndexedBonus>((x, i) => ({ data: x, index: i }));
						const skillBonuses = indexedBonuses.filter(x => "skill" in x.data) as IndexedBonus<BonusCharStateInfo>[];
						const equipBonuses = indexedBonuses.filter(x => !("skill" in x.data)) as IndexedBonus<BonusEquipStateInfo>[];

						const selectedNode = x.world && x.map && x.node &&
							MapDB[x.world][x.map].find(y => y.text === x.node);

						const selectedWaves = ((): MapWaveGroup[] => {
							if (!selectedNode) return [];

							const waves = selectedNode.wave;
							if (!waves) return [];

							return waves
								.map(x => x.reduce((p, c) => {
									if (!p) return c;
									if (c.e.exp < p.e.exp) return p;

									return c;
								}, undefined as (MapWaveGroup | undefined)))
								.filter(x => x) as MapWaveGroup[];
						})();

						const SumBonusValues = (wave: MapWaveGroup): Decimal => {
							let sumValue = new Decimal(0);

							equipBonuses.forEach(y => {
								if (y.data.level < 0) return;

								const equip = GetJson<Equip>(`equip/${y.data.uid}_T${y.data.rarity - 1}`);
								if (!equip) return; // ??

								const lines = equip.stats[y.data.level];
								const data = lines.find(s => "buffs" in s);
								if (!data || !("buffs" in data)) return; // ????

								const expbuff = data.buffs.find(b => "exp" in b.value);
								if (!expbuff || !("exp" in expbuff.value)) return; // ??????

								const exp = expbuff.value.exp;

								sumValue = sumValue.add(
									Decimal.mul(
										Decimal.add(
											Decimal.div(exp.base.replace(/%$/, ""), 100),
											Decimal.mul(
												Decimal.div(exp.per.replace(/%$/, ""), 100),
												y.data.level,
											),
										),
										Math.max(y.data.stack, 1),
									),
								);
							});

							skillBonuses.forEach(y => {
								if (y.data.level < 0) return;

								const unit = GetJson<Unit>(`unit/${y.data.uid}`);
								if (!unit) return; // ??

								const skills = unit.skills[y.data.skill.toString() as keyof Unit["skills"]];
								if (!skills) return; // ????

								const skill = skills.buffs.data[skills.buffs.index[Math.min(9, y.data.level)]];
								const buff = skill.buffs.find(z => "if" in z);
								if (!buff || !("if" in buff)) return; // ??????

								const expbuff = buff.buffs.find(z => "exp" in z.value);
								if (!expbuff || !("exp" in expbuff.value)) return; // ??????

								const exp = expbuff.value.exp;

								if (buff.on === "enemy_dead") {
									sumValue = sumValue.add(
										Decimal.mul(
											Decimal.add(
												Decimal.div(exp.base.replace(/%$/, ""), 100),
												Decimal.mul(
													Decimal.div(exp.per.replace(/%$/, ""), 100),
													y.data.level,
												),
											),
											wave.e.enemy.filter(x => x).length,
										),
									);
								} else {
									sumValue = sumValue.add(
										Decimal.add(
											Decimal.div(exp.base.replace(/%$/, ""), 100),
											Decimal.mul(
												Decimal.div(exp.per.replace(/%$/, ""), 100),
												y.data.level,
											),
										),
									);
								}
							});

							return sumValue.add(1);
						};
						const ResultExp = (wave: number): number => {
							if (selectedWaves.length <= wave) return 0;

							const base = selectedWaves[wave].e.exp;
							let exp = new Decimal(base);

							// {[(웨이브 경험치 X 리더 보너스) X 장비 및 스킬에 의한 상승량 총합] X 이벤트 경험치} X 링크 보너스 + 시설 경험치 + 부스트 경험치
							if (x.isLeader) exp = exp.mul(1.2).floor();

							exp = exp.mul(SumBonusValues(selectedWaves[wave])).floor();

							exp = exp.mul(
								Decimal.div(eventBonus.value, 100).add(1),
							).floor();

							exp = exp.mul(
								Decimal.div(CoreLinks.value, 25).add(1),
							).floor();

							if (boostBonus.value)
								exp = exp.add(Decimal.div(base, 2)).floor();

							facilityLevel.value.forEach(x => {
								exp = exp.add(
									Decimal.mul(
										base,
										Decimal.div(facilityBonuses[x], 100),
									),
								);
							});

							return exp
								.floor()
								.toNumber();
						};

						const requiredExp = ((): number => {
							const rarityMultiply: Record<ACTOR_GRADE, number> = {
								[ACTOR_GRADE.SSS]: 0,
								[ACTOR_GRADE.SS]: 1.875,
								[ACTOR_GRADE.S]: 1.5,
								[ACTOR_GRADE.A]: 1.25,
								[ACTOR_GRADE.B]: 1,
							};
							const startExp = ((): Decimal => {
								let exp = new Decimal(baseExp.value);
								for (let i = 0; i < baseLevel.value; i++) {
									exp = exp.add(
										Decimal.mul(
											unitEXPTable[i] || 0,
											rarityMultiply[unitRarity.value],
										).floor(),
									);
								}
								return exp;
							})();
							const destExp = ((): Decimal => {
								let exp = new Decimal(0);
								for (let i = 0; i < destLevel.value; i++) {
									exp = exp.add(
										Decimal.mul(
											unitEXPTable[i] || 0,
											rarityMultiply[unitRarity.value],
										).floor(),
									);
								}
								return exp;
							})();
							return Decimal.max(0, Decimal.sub(destExp, startExp))
								.toNumber();
						})();

						return <div class="col p-2">
							<div class="p-3 border border-secondary rounded">
								<div class="float-end mb-2">
									<button
										class="btn btn-sm btn-danger px-2 py-0"
										onClick={ (): void => {
											expSet.set((v) => [
												...v.slice(0, i),
												...v.slice(i + 1),
											]);
										} }
									>
										<Icon icon="x" />
									</button>
								</div>
								<div class="clearfix" />

								<select
									class="form-select mb-1"
									value={ x.world }
									onChange={ (e): void => {
										e.preventDefault();

										const world = (e.target as HTMLSelectElement).value;
										const map = Object.keys(MapDB[world])[0];
										expSet.set((v) => [
											...v.slice(0, i),
											{
												...x,
												world,
												map,
												node: MapDB[world][map][0].text,
											},
											...v.slice(i + 1),
										]);
									} }
								>
									{ worlds.map(w => <option value={ w }>
										{ w !== "Story" && `${w} - ` }
										<Locale k={ `WORLD_${w}` } />
									</option>) }
								</select>

								<div class="row row-cols-2 gx-1">
									<div class="col">
										<select
											class="form-select mb-1"
											disabled={ !x.world }
											value={ x.map }
											onChange={ (e): void => {
												e.preventDefault();

												const map = (e.target as HTMLSelectElement).value;
												expSet.set((v) => [
													...v.slice(0, i),
													{
														...x,
														map,
														node: MapDB[x.world][map][0].text,
													},
													...v.slice(i + 1),
												]);
											} }
										>
											{ maps.map(m => <option value={ m }>
												<Locale k="WORLDS_WORLD_TITLE" p={ [m] } />
											</option>) }
										</select>
									</div>
									<div class="col">
										<select
											class="form-select mb-1"
											disabled={ !x.world || !x.map }
											value={ x.node }
											onChange={ (e): void => {
												e.preventDefault();
												expSet.set((v) => [
													...v.slice(0, i),
													{ ...x, node: (e.target as HTMLSelectElement).value },
													...v.slice(i + 1),
												]);
											} }
										>
											{ nodes.map(n => <option value={ n.text }>{ n.text }</option>) }
										</select>
									</div>
								</div>

								<div>
									<div class="form-check text-start">
										<label class="form-check-label">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												checked={ x.isLeader }
												onChange={ (e): void => {
													e.preventDefault();

													const value = (e.target as HTMLInputElement).checked;
													expSet.set((v) => [
														...v.slice(0, i),
														{ ...x, isLeader: value },
														...v.slice(i + 1),
													]);
												} }
											/>
											<Locale k="EXPCALC_LEADER_BONUS" />
										</label>
									</div>
								</div>

								<hr class="my-1" />

								<ul class="nav nav-tabs my-3">
									{ contentTabs.map((d, idx) => <li class="nav-item">
										<a href="#"
											class={ `nav-link text-dark ${isActive(x._tab === idx)}` }
											onClick={ (e): void => {
												e.preventDefault();
												expSet.set((v) => [
													...v.slice(0, i),
													{ ...x, _tab: idx },
													...v.slice(i + 1),
												]);
											} }
										>
											<Locale k={ `EXPCALC_${d}` } />
										</a>
									</li>) }
								</ul>

								{ /* 보너스 */ }
								{ x._tab === 0
									? <>
										{ skillBonuses
											.map(({ data, index }) => <div class={ `clearfix ${style.bonusLine}` } >
												<UnitFace uid={ data.uid } />
												<SkillIcon icon={ data.icon } passive />
												<Locale k={ `UNIT_SKILL_${data.skill}_${data.uid}` } />

												<div class="float-end">
													<select
														class="d-inline-block form-select form-select-sm"
														value={ data.level }
														onChange={ (e): void => {
															e.preventDefault();

															const value = parseInt((e.target as HTMLSelectElement).value, 10);
															expSet.set((v) => [
																...v.slice(0, i),
																{
																	...x,
																	bonus: [
																		...x.bonus.slice(0, index),
																		{ ...data, level: value },
																		...x.bonus.slice(index + 1),
																	],
																},
																...v.slice(i + 1),
															]);
														} }
													>
														<option value={ -1 }>
															<Locale k="EXPCALC_BONUS_NONE" />
														</option>

														{ new Array(13)
															.fill(0)
															.map((_, i) => <option value={ i + 1 }>Lv. { i + 1 }</option>)
														}
													</select>
												</div>
											</div>)
											.gap(<hr class="my-1" />)
										}
									</>
									: <></>
								}

								{ x._tab === 1
									? <>
										{ equipBonuses
											.map(({ data, index }) => <div class={ `clearfix ${style.bonusLine}` } >
												<div>
													<EquipIcon image={ `UI_Icon_Equip_${data.uid}_T${data.rarity - 1}` } />

													{ LocaleGet(`EQUIP_${data.uid}_T${data.rarity - 1}`).replace(/ (RE|MP|SP|EX)$/, "") }

													<div class="float-end">
														<select
															class="d-inline-block form-select form-select-sm"
															value={ data.level }
															onChange={ (e): void => {
																e.preventDefault();

																const value = parseInt((e.target as HTMLSelectElement).value, 10);
																expSet.set((v) => [
																	...v.slice(0, i),
																	{
																		...x,
																		bonus: [
																			...x.bonus.slice(0, index),
																			{ ...data, level: value },
																			...x.bonus.slice(index + 1),
																		],
																	},
																	...v.slice(i + 1),
																]);
															} }
														>
															<option value={ -1 }>
																<Locale k="EXPCALC_BONUS_NONE" />
															</option>

															{ new Array(11)
																.fill(0)
																.map((_, i) => <option value={ i }>Lv. { i }</option>)
															}
														</select>
													</div>
													<div class="ps-5">
														<select
															class={ `form-select form-select-sm ${style.raritySelector}` }
															disabled={ data.level < 0 }
															value={ data.rarity }
															onChange={ (e): void => {
																e.preventDefault();

																const value = parseInt((e.target as HTMLSelectElement).value, 10);
																expSet.set((v) => [
																	...v.slice(0, i),
																	{
																		...x,
																		bonus: [
																			...x.bonus.slice(0, index),
																			{ ...data, rarity: value },
																			...x.bonus.slice(index + 1),
																		],
																	},
																	...v.slice(i + 1),
																]);
															} }
														>
															{ data.rarities.map(x => <option value={ x }>{ RarityDisplay[x] }</option>) }
														</select>

														{ data.stacks && data.stacks > 1
															? <div class="float-end">
																<select
																	class="d-inline-block w-auto form-select form-select-sm"
																	disabled={ data.level < 0 }
																	value={ data.stack }
																	onChange={ (e): void => {
																		e.preventDefault();

																		const value = parseInt((e.target as HTMLSelectElement).value, 10);
																		expSet.set((v) => [
																			...v.slice(0, i),
																			{
																				...x,
																				bonus: [
																					...x.bonus.slice(0, index),
																					{ ...data, stack: value },
																					...x.bonus.slice(index + 1),
																				],
																			},
																			...v.slice(i + 1),
																		]);
																	} }
																>
																	{ new Array(data.stacks)
																		.fill(0)
																		.map((_, x) => <option value={ x + 1 }>x{ x + 1 }</option>)
																	}
																</select>
															</div>
															: <></>
														}
													</div>
												</div>
											</div>)
											.gap(<hr class="my-1" />)
										}
									</>
									: <></>
								}

								{ x._tab === 2
									? ((): preact.VNode => {
										const ret = selectedWaves.map((_, i) => ResultExp(i));
										const totalExp = ret.reduce((p, c) => p + c, 0);
										const totalSorties = Decimal.div(requiredExp, totalExp)
											.ceil()
											.toNumber();

										return <>
											<table class="table table-sm">
												<tbody>
													{ selectedWaves.map((x, i) => <tr>
														<td>
															<Locale k="EXPCALC_WAVE" p={ [i + 1] } />
														</td>
														<td>
															<Locale k="EXPCALC_WAVE_EXP" p={ [ret[i]] } />
														</td>
													</tr>) }
												</tbody>
											</table>
											<div class="mt-3">
												<span class="badge bg-danger">
													<Locale k="EXPCALC_REQUIRE_TOTAL" p={ [FormatNumber(totalExp)] } />
												</span>
											</div>
											<div class="mt-2">
												<span class="badge bg-success">
													<Locale k="EXPCALC_REQUIRE_EXP" p={ [FormatNumber(requiredExp)] } />
												</span>
											</div>
											<div class="mt-2">
												<span class="badge bg-primary">
													<Locale k="EXPCALC_REQUIRE_SORTIES" p={ [FormatNumber(totalSorties)] } />
												</span>
											</div>
										</>;
									})()
									: <></>
								}
							</div>
						</div>;
					}) }

					<div class={ `col p-2 ${style.addBox}` }>
						<button class="p-3 btn btn-outline-secondary" onClick={ (e): void => {
							e.preventDefault();
							expSet.set((c) => {
								return [...c, {
									world: "",
									map: "",
									node: "",

									isLeader: false,
									bonus: bonuses.map(x => {
										if ("skill" in x) {
											// 전투원
											return {
												...x,
												level: -1,
											};
										}
										return {
											...x,
											rarity: x.rarities[0],
											stack: x.stacks || 1,
											level: -1,
										};
									}),

									_tab: 0,
								}];
							});
						} }>
							<div class="mb-2" style="font-size:2em">
								<Icon icon="plus-square-fill" />
							</div>
							<Locale k="EXPCALC_NEW_CALC" />
						</button>
					</div>
				</div>;
			} }
		/>
	</div>;
};
export default EXPCalc;
