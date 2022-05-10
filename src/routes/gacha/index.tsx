import Decimal from "decimal.js";

import { Gacha } from "@/types/DB/Gacha";
import { Consumable } from "@/types/DB/Consumable";
import { GACHA_CATEGORY, ITEM_GRADE } from "@/types/Enums";

import { objState } from "@/libs/State";
import { FormatNumber, isActive, ToOrdinal } from "@/libs/Functions";
import { AssetsRoot } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";

import style from "./style.module.scss";

interface GachaResult {
	key: string;
	price: number;
	result: Array<{
		key: string;
		count: number;
		grade: ITEM_GRADE;
		seed: number;
	}>;
}

const GachaPage: FunctionalComponent = () => {
	SetMeta(["description", "twitter:description"], "게임의 가챠를 해볼 수 있는 가챠 시뮬레이터입니다.");
	SetMeta(["twitter:image", "og:image"], null);
	UpdateTitle(LocaleGet("MENU_ETC_GACHA"));

	const BoxType = objState<string>("");

	const AccumCash = objState(0);
	const GachaCount = objState(0);
	const SkinCount = objState(0);

	const Result = objState<GachaResult[]>([]);

	const SkinChance = Decimal
		.div(SkinCount.value, GachaCount.value)
		.mul(100);

	function Run (gacha: Gacha): void {
		const count = gacha.type === GACHA_CATEGORY.GACHA_11ST ? 11 : 1;
		const ret: GachaResult["result"] = [];

		for (let i = 0; i < count; i++) {
			const chance = Decimal.random()
				.mul(Decimal.sum(...gacha.data.map(e => e.rate)));

			console.log(
				Decimal.sum(...gacha.data.map(e => e.rate)).toNumber(),
				chance.toNumber(),
			);

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

		AccumCash.set(AccumCash.value + gacha.price);
		Result.set([
			{
				key: gacha.key,
				price: gacha.price,
				result: ret,
			},
			...Result.value,
		]);
	}

	return <Loader
		json={ [StaticDB.Consumable, StaticDB.Gacha] }
		content={ (): preact.VNode => {
			const gacha = GetJson<Gacha[]>(StaticDB.Gacha);
			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

			if (!BoxType.value)
				BoxType.set(gacha[0].key);

			const current = gacha.find(x => x.key === BoxType.value);

			return <div>
				<div class={ `mb-3 flex-nowrap ${style.GachaList}` }>
					<ul class="nav nav-tabs justify-content-start">
						{ gacha.map(g => <li class="nav-item">
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
									<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
									{ FormatNumber(g.price) }
								</span>

								{ g.type === GACHA_CATEGORY.GACHA_11ST
									? <span class={ `ms-1 badge bg-danger ${style.BoxPrice}` }>
										x11
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
										<Locale k="GACHA_ACCUM_TUNA" p={ [<span class="badge bg-warning text-dark">
											<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
											{ FormatNumber(AccumCash.value) }
										</span>] } />
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
											AccumCash.set(0);
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
												<img class={ `float-start ${style.TunaIcon}` } src={ `${AssetsRoot}/tuna.png` } />
												{ FormatNumber(r.price) }
											</span>

											<span class={ `ms-1 badge bg-danger ${style.BoxPrice}` }>
												x{ r.result.length }
											</span>
										</div>
										<div class={ `card-body ${style.ResultBody}` }>
											<div class="row">
												{ r.result.map(e => {
													const ec = ConsumableDB.find(c => c.key === e.key);
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
										const item = ConsumableDB.find(y => y.key === x.key);
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
		} }
	/>;
};
export default GachaPage;
