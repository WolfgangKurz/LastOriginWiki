import Decimal from "decimal.js";

import { Gacha, INNER_GACHA_CATEGORY } from "@/types/DB/Gacha";
import { Consumable } from "@/types/DB/Consumable";

import { objState } from "@/libs/State";
import { FormatNumber, isActive, ToOrdinal } from "@/libs/Functions";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";

import { GachaSubpageProps } from ".";

import style from "./style.module.scss";
import DropItem from "@/components/drop-item";

type GachaResult = Array<{
	key: string;
	count: number;
	seed: number;
}>;

const PremiumAttendGacha: FunctionalComponent<GachaSubpageProps> = (props) => {
	const SelectedChanceList = objState<number>(1);

	const Ring2Count = objState(0);
	const Core2Count = objState(0);
	const ResetCount = objState(0);

	const Result = objState<GachaResult[]>([]);

	const Ring2Chance = Decimal
		.div(Ring2Count.value, ResetCount.value)
		.mul(100);

	const Core2Chance = Decimal
		.div(Core2Count.value, ResetCount.value)
		.mul(100);

	return <Loader
		json={ [StaticDB.Consumable, StaticDB.Gacha] }
		content={ (): preact.VNode => {
			const GachaDB = GetJson<Gacha[]>(StaticDB.Gacha)
				.filter(x => x.category === INNER_GACHA_CATEGORY.PremiumAttend);
			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

			function Run (): void {
				ResetCount.set(ResetCount.value + 1);

				const ret: GachaResult = [];
				for (let day = 1; day <= 7; day++) {
					const gacha = GachaDB.find(x => x.type === day)!;

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
						seed: chance.toNumber(),
					});
				}

				if (ret.filter(x => x.key === "Marriage_Ring").length === 2)
					Ring2Count.set(Ring2Count.value + 1);
				if (ret.filter(x => x.key === "CharTicket_Char_Core_Special_N").length === 2)
					Core2Count.set(Core2Count.value + 1);

				Result.set([
					ret,
					...Result.value,
				]);
			}

			return <div style={ props.style }>
				<div class="row">
					<div class="text-start mb-4">
						<div class="card mb-2">
							<div class="card-body row">
								<div class="col-6 col-lg-auto mb-1 mb-lg-0">
									<Locale k="GACHA_PREMIUM_ATTEND_RESET_COUNT" p={ [<span class="badge bg-dark">
										<Locale k="GACHA_COUNT" p={ [FormatNumber(ResetCount.value)] } />
									</span>] } />
								</div>

								<div class="col-6 col-lg-auto mb-1 mb-lg-0">
									<Locale k="GACHA_PREMIUM_ATTEND_RING2_COUNT" p={ [<span class="badge bg-success">
										<Locale k="GACHA_COUNT" p={ [FormatNumber(Ring2Count.value)] } />
									</span>] } />
								</div>
								<div class="col-6 col-lg-auto mb-1 mb-lg-0">
									<Locale k="GACHA_PREMIUM_ATTEND_RING2_CHANCE" p={ [<span class="badge bg-success">
										{ Ring2Chance.isNaN()
											? "-"
											: Ring2Chance
												.toFixed(3)
												.replace(/\.?0+$/, "")
										} %
									</span>] } />
								</div>

								<div class="col-6 col-lg-auto mb-1 mb-lg-0">
									<Locale k="GACHA_PREMIUM_ATTEND_CORE2_COUNT" p={ [<span class="badge bg-warning text-dark">
										<Locale k="GACHA_COUNT" p={ [FormatNumber(Core2Count.value)] } />
									</span>] } />
								</div>
								<div class="col-6 col-lg-auto mb-1 mb-lg-0">
									<Locale k="GACHA_PREMIUM_ATTEND_CORE2_CHANCE" p={ [<span class="badge bg-warning text-dark">
										{ Core2Chance.isNaN()
											? "-"
											: Core2Chance
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
									class="btn btn-warning"
									onClick={ () => Run() }
								>
									<Icon class="me-2" icon="box-seam" />
									<Locale k="GACHA_PREMIUM_ATTEND_RESET" />
								</button>
								<button
									class="btn btn-rarity-A"
									onClick={ () => {
										ResetCount.set(0);
										Ring2Count.set(0);
										Core2Count.set(0);
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
												k="GACHA_PREMIUM_ATTEND_RESULT_TITLE"
												p={ [
													Result.value.length - i,
													ToOrdinal(Result.value.length - i),
												] }
											/>
										</strong>
									</div>
									<div class={ `card-body ${style.ResultBody}` }>
										<div class="row row-cols-7">
											{ r.map(e => {
												const ec = ConsumableDB.find(c => c.key === e.key);
												if (!ec) return;

												return <div class="col my-2">
													<div
														class={ `card bg-secondary text-center text-light` }
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

					<ul class="nav nav-tabs justify-content-start">
						{ new Array(7)
							.fill(0)
							.map((_, i) => <li class="nav-item">
								<a
									href="#"
									class={ `nav-link text-dark ${isActive(SelectedChanceList.value === i + 1)}` }
									onClick={ (e): void => {
										e.preventDefault();
										SelectedChanceList.set(i + 1);
									} }
								>
									<Locale plain k={ `GACHA_PREMIUM_ATTEND_DAY${i + 1}` } />
								</a>
							</li>)
						}
					</ul>
					<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
						{ GachaDB.find(y => y.type === SelectedChanceList.value)!.data
							.sort((a, b) => b.rate - a.rate)
							.map(x => {
								const item = ConsumableDB.find(y => y.key === x.key);
								if (!item) return undefined;

								return <DropItem
									item={ item }
									count={ x.count }
									chance={ Decimal.mul(x.rate, 100).toNumber() }
								/>;
							})
						}
					</div>
				</div>
			</div>;
		} }
	/>;
};
export default PremiumAttendGacha;
