import { useState } from "preact/hooks";

import Decimal from "decimal.js";

import { Gacha, INNER_GACHA_CATEGORY } from "@/types/DB/Gacha";
import { Consumable } from "@/types/DB/Consumable";
import { GACHA_CATEGORY, ITEM_GRADE } from "@/types/Enums";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { objState } from "@/libs/State";
import { FormatNumber, isActive, ToOrdinal } from "@/libs/Functions";
import { AssetsRoot } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";
import ItemIcon from "@/components/item-icon";

import { GachaSubpageProps } from "./";

import style from "./style.module.scss";

interface GachaResult {
	key: string;
	price: number | Array<[item: Consumable | null, count: number]>;
	result: Array<{
		key: string;
		count: number;
		grade: ITEM_GRADE;
		seed: number;
	}>;
}

const BoxGacha: FunctionalComponent<GachaSubpageProps> = (props) => {
	const update = useUpdate();

	const BoxType = objState<string>("");

	const [AccumCash, setAccumCash] = useState<[number, Array<[Consumable | null, number]>]>([0, []]);
	const GachaCount = objState(0);
	const SkinCount = objState(0);

	const Result = objState<GachaResult[]>([]);

	const SkinChance = Decimal
		.div(SkinCount.value, GachaCount.value)
		.mul(100);

	function Run (gacha: Gacha): void {
		const count = gacha.type === GACHA_CATEGORY.GACHA_11ST
			? 11
			: gacha.type === GACHA_CATEGORY.GACHA_10ST
				? 10
				: 1;
		const ret: GachaResult["result"] = [];

		for (let i = 0; i < count; i++) {
			const chance = Decimal.random()
				.mul(Decimal.sum(...gacha.data.map(e => e.rate)));

			// console.log(
			// 	Decimal.sum(...gacha.data.map(e => e.rate)).toNumber(),
			// 	chance.toNumber(),
			// );

			const selected = (() => {
				let current = new Decimal(chance);
				for (const e of gacha.data) {
					if (current.lte(e.rate))
						return e;
					else
						current = current.sub(e.rate);
				}
			})()!;

			ret.push({
				key: selected.key,
				count: selected.count,
				grade: selected.grade,
				seed: chance.toNumber(),
			});

			if (selected.key.startsWith("Skin_"))
				SkinCount.set(SkinCount.value + 1);

			GachaCount.set(GachaCount.value + 1);
		}

		const price = typeof gacha.price === "number"
			? gacha.price
			: gacha.price.map(([key, count]) => {
				const req = ConsumableDB && ConsumableDB.find(e => e.key === key);
				return [req || null, count] satisfies [Consumable | null, number];
			});

		if (typeof price === "number")
			setAccumCash([AccumCash[0] + price, AccumCash[1]]);
		else {
			const lst = [...AccumCash[1]];

			price.forEach(e => {
				const [key, value] = e;
				const idx = lst.findIndex(r => r[0]?.key === key?.key);
				if (idx >= 0)
					lst[idx][1] += value;
				else
					lst.push(e);
			});

			setAccumCash([AccumCash[0], lst]);
		}

		Result.set([
			{
				key: gacha.key,
				price,
				result: ret,
			},
			...Result.value,
		]);
	}

	const GachaDB = GetJson<Gacha[] | null>(StaticDB.Gacha);
	if (!GachaDB) {
		JsonLoaderCore(CurrentDB, StaticDB.Gacha)
			.then(() => update());
	}

	const ConsumableDB = GetJson<Consumable[] | null>(StaticDB.Consumable);
	if (!ConsumableDB) {
		JsonLoaderCore(CurrentDB, StaticDB.Consumable)
			.then(() => update());
	}

	const gacha = GachaDB && GachaDB.filter(x => x.category === INNER_GACHA_CATEGORY.Box);

	if (!BoxType.value && gacha)
		BoxType.set(gacha[0].key);

	const current = gacha && gacha.find(x => x.key === BoxType.value);

	return <div style={ props.style }>
		<div class={ `mb-3 flex-nowrap ${style.GachaList}` }>
			<ul class="nav nav-tabs justify-content-start">
				{ gacha && gacha.map(g => <li class="nav-item">
					<a
						href="#"
						class={ `nav-link text-dark ${isActive(BoxType.value === g.key)}` }
						onClick={ (e): void => {
							e.preventDefault();
							BoxType.set(g.key);
						} }
					>
						<div>
							<EquipIcon image={ g.icon } />
							<br />
							<Locale plain k={ `CONSUMABLE_${g.key}` } />
						</div>

						<span class="badge bg-warning text-dark">
							{ typeof g.price === "number"
								? <>
									<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
									{ FormatNumber(g.price) }
								</>
								: g.price.map(([key, count]) => {
									const req = ConsumableDB && ConsumableDB.find(e => e.key === key);

									return <>
										{ req && <ItemIcon class={ `float-start ${style.RequireItemIcon}` } item={ req.icon } /> }
										{ FormatNumber(count) }
									</>;
								})
							}
						</span>

						{ g.type === GACHA_CATEGORY.GACHA_11ST
							? <span class={ `ms-1 badge bg-danger ${style.BoxPrice}` }>
								x11
							</span>
							: g.type === GACHA_CATEGORY.GACHA_10ST
								? <span class={ `ms-1 badge bg-danger ${style.BoxPrice}` }>
									x10
								</span>
								: g.type === GACHA_CATEGORY.DUMMY
									? <span class={ `ms-1 badge bg-succeeded ${style.BoxPrice}` }>
										<Locale plain k="UNIT_SKILL_DUMMY" />
									</span>
									: <></>
						}
					</a>
				</li>) }
			</ul>
		</div>

		{ current
			? <div class="row">
				<div class="col-12 col-lg-9 text-start mb-4">
					<div class="card mb-2">
						<div class="card-body row">
							<div class="col-6 col-lg-auto mb-1 mb-lg-0">
								<Locale k="GACHA_TOTAL_COUNT" p={ [<span class="badge bg-dark">
									<Locale k="GACHA_COUNT" p={ [FormatNumber(GachaCount.value)] } />
								</span>] } />
							</div>
							<div class="col-6 col-lg-auto mb-1 mb-lg-0">
								<Locale k="GACHA_ACCUM_CURRENCY" p={ [<>
									{ AccumCash[1].length === 0 || AccumCash[0] > 0
										? <span class="badge bg-warning text-dark">
											<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
											{ FormatNumber(AccumCash[0]) }
										</span>
										: <></>
									}

									{ AccumCash[1].map(([req, count]) => <span class={ BuildClass("badge bg-warning text-dark", AccumCash[0] > 0 && "ms-1") }>
										{ req && <ItemIcon class={ `float-start ${style.RequireItemIcon}` } item={ req.icon } /> }
										{ FormatNumber(count) }
									</span>) }
								</>] } />
							</div>
							<div class="col-6 col-lg-auto mt-1 mt-lg-0">
								<Locale k="GACHA_SKIN_COUNT" p={ [<span class="badge bg-success">
									<Locale k="GACHA_COUNT" p={ [FormatNumber(SkinCount.value)] } />
								</span>] } />
							</div>
							<div class="col-6 col-lg-auto mt-1 mt-lg-0">
								<Locale k="GACHA_SKIN_CHANCE" p={ [<span class="badge bg-success">
									{ SkinChance.isNaN()
										? "-"
										: SkinChance
											.toFixed(3)
											.replace(/\.?0+$/, "")
									} %
								</span>] } />
							</div>
						</div>
					</div>

					<div class="text-center p-3">
						<div class="btn-group">
							<button
								class="btn btn-stat-hp"
								onClick={ () => Run(current) }
							>
								<Icon class="me-2" icon="box-seam" />
								<Locale k="GACHA_RUN" />
							</button>
							<button
								class="btn btn-rarity-A"
								onClick={ () => {
									setAccumCash([0, []]);
									GachaCount.set(0);
									SkinCount.set(0);
									Result.set([]);
								} }
							>
								<Icon class="me-2" icon="arrow-counterclockwise" />
								<Locale k="GACHA_RESET" />
							</button>
						</div>
					</div>

					{ Result.value.length === 0
						? <div class="text-center p-4">
							<Locale k="GACHA_RESULT_EMPTY" />
						</div>
						: Result.value
							.map((r, i) => <div
								class={ `card mb-2 ${style.GachaResultBox}` }
								key={ `gacha-result-${Result.value.length - i}` }
							>
								<div class="card-header">
									<strong class="me-4">
										<Locale
											plain
											k="GACHA_RESULT_TITLE"
											p={ [
												Result.value.length - i,
												ToOrdinal(Result.value.length - i),
											] }
										/>
									</strong>

									<span class="me-2">
										<Locale plain k={ `CONSUMABLE_${r.key}` } />
									</span>

									<span class="badge bg-warning text-dark">
										{ typeof r.price === "number"
											? <>
												<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
												{ FormatNumber(r.price) }
											</>
											: r.price.map(([req, count]) => {
												return <>
													{ req && <ItemIcon class={ `float-start ${style.RequireItemIcon}` } item={ req.icon } /> }
													{ FormatNumber(count) }
												</>;
											})
										}
									</span>

									<span class={ `ms-1 badge bg-danger ${style.BoxPrice}` }>
										x{ r.result.length }
									</span>
								</div>
								<div class={ `card-body ${style.ResultBody}` }>
									<div class="row">
										{ r.result.map(e => {
											const ec = ConsumableDB && ConsumableDB.find(c => c.key === e.key);
											if (!ec) return;

											return <div class="col-4 col-md-3 col-lg-2 my-2">
												<div
													class={ `card bg-secondary text-center text-light ${style[`Result-${e.grade}`]}` }
													title={ e.seed.toString() }
												>
													<div class={ style.ResultIcon }>
														<div class={ style.ResultCount }>
															x{ e.count }
														</div>
														<EquipIcon size={ 80 } image={ ec.icon } />
													</div>

													<small class={ style.ResultName }>
														<Locale plain k={ `CONSUMABLE_${ec.key}` } />
													</small>
												</div>
											</div>;
										}) }
									</div>
								</div>
							</div>)
					}
				</div>

				<div class="col-12 col-lg-3 mt-2">
					<ul class="list-group">
						{ current.data
							.sort((a, b) => b.rate - a.rate)
							.map(x => {
								const item = ConsumableDB && ConsumableDB.find(y => y.key === x.key);
								if (!item) return undefined;

								return <li class="list-group-item">
									<div class="row gx-3">
										<div class="col-auto">
											<EquipIcon image={ item.icon } />
										</div>
										<div class="col text-start">
											<span class={ style.ListName }>
												<Locale plain k={ `CONSUMABLE_${item.key}` } />
											</span>

											{ x.count > 1
												? <small>
													<span class="ms-2 badge bg-secondary">x{ x.count }</span>
												</small>
												: <></>
											}
											<br />
											<span class="badge bg-stat-crit">
												{ Decimal.mul(x.rate, 100).toString() }%
											</span>
										</div>
									</div>
								</li>;
							})
						}
					</ul>
				</div>
			</div>
			: <></>
		}
	</div>;
};
export default BoxGacha;
