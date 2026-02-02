import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import Decimal from "decimal.js";

import { Gacha, INNER_GACHA_CATEGORY } from "@/types/DB/Gacha";
import { Consumable } from "@/types/DB/Consumable";

import { FormatNumber, isActive, ToOrdinal } from "@/libs/Functions";
import { StaticDB, useDBData } from "@/libs/Loader";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import Icons from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";
import DropItem from "@/components/drop-item";

import { GachaSubpageProps } from ".";

import style from "./style.module.scss";

type GachaResult = Array<{
	key: string;
	count: number;
	seed: number;
}>;

const PremiumAttendGacha: FunctionalComponent<GachaSubpageProps> = (props) => {
	const [SelectedChanceList, setSelectedChanceList] = useState<number>(1);

	const [Ring2Count, setRing2Count] = useState(0);
	const [Core2Count, setCore2Count] = useState(0);
	const [ResetCount, setResetCount] = useState(0);

	const [Result, setResult] = useState<GachaResult[]>([]);

	const Ring2Chance = Decimal
		.div(Ring2Count, ResetCount)
		.mul(100);

	const Core2Chance = Decimal
		.div(Core2Count, ResetCount)
		.mul(100);

	const GachaDB = useDBData<Gacha[]>(StaticDB.Gacha);
	const ConsumableDB = useDBData<Consumable[]>(StaticDB.Consumable);
	if (!GachaDB || !ConsumableDB) return <Loading.Data />;

	const gacha = GachaDB.filter(x => x.category === INNER_GACHA_CATEGORY.PremiumAttend);

	const Run = () => {
		setResetCount(v => v + 1);

		const ret: GachaResult = [];
		for (let day = 1; day <= 7; day++) {
			const g = gacha.find(x => x.type === day)!;

			const chance = Decimal.random()
				.mul(Decimal.sum(...g.data.map(e => e.rate)));

			// console.log(
			// 	Decimal.sum(...gacha.data.map(e => e.rate)).toNumber(),
			// 	chance.toNumber(),
			// );

			const selected = (() => {
				let current = new Decimal(chance);
				for (const e of g.data) {
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
			setRing2Count(v => v + 1);
		if (ret.filter(x => x.key === "CharTicket_Char_Core_Special_N").length === 2)
			setCore2Count(v => v + 1);

		setResult(r => [ret, ...r]);
	};

	return <div style={ props.style }>
		<div class="row">
			<div class="text-start mb-4">
				<div class="card mb-2">
					<div class="card-body row">
						<div class="col-6 col-lg-auto mb-1 mb-lg-0">
							<Locale k="GACHA_PREMIUM_ATTEND_RESET_COUNT" p={ [<span class="badge bg-dark">
								<Locale k="GACHA_COUNT" p={ [FormatNumber(ResetCount)] } />
							</span>] } />
						</div>

						<div class="col-6 col-lg-auto mb-1 mb-lg-0">
							<Locale k="GACHA_PREMIUM_ATTEND_RING2_COUNT" p={ [<span class="badge bg-success">
								<Locale k="GACHA_COUNT" p={ [FormatNumber(Ring2Count)] } />
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
								<Locale k="GACHA_COUNT" p={ [FormatNumber(Core2Count)] } />
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
							<Icons.BoxSeam class="me-2" />
							<Locale k="GACHA_PREMIUM_ATTEND_RESET" />
						</button>
						<button
							class="btn btn-rarity-A"
							onClick={ () => {
								setResetCount(0);
								setRing2Count(0);
								setCore2Count(0);
								setResult([]);
							} }
						>
							<Icons.ArrowCounterclockwise class="me-2" />
							<Locale k="GACHA_RESET" />
						</button>
					</div>
				</div>

				{ Result.length === 0
					? <div class="text-center p-4">
						<Locale k="GACHA_RESULT_EMPTY" />
					</div>
					: Result.map((r, i) => <div
						class={ `card mb-2 ${style.GachaResultBox}` }
						key={ `gacha-result-${Result.length - i}` }
					>
						<div class="card-header">
							<strong class="me-4">
								<Locale
									plain
									k="GACHA_PREMIUM_ATTEND_RESULT_TITLE"
									p={ [
										Result.length - i,
										ToOrdinal(Result.length - i),
									] }
								/>
							</strong>
						</div>
						<div class={ `card-body ${style.ResultBody}` }>
							<div class="row row-cols-7">
								{ r.map(e => {
									const ec = ConsumableDB && ConsumableDB.find(c => c.key === e.key);
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
							class={ `nav-link text-dark ${isActive(SelectedChanceList === i + 1)}` }
							onClick={ (e): void => {
								e.preventDefault();
								setSelectedChanceList(i + 1);
							} }
						>
							<Locale plain k={ `GACHA_PREMIUM_ATTEND_DAY${i + 1}` } />
						</a>
					</li>)
				}
			</ul>
			<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
				{ gacha && gacha.find(y => y.type === SelectedChanceList)!.data
					.sort((a, b) => b.rate - a.rate)
					.map(x => {
						const item = ConsumableDB && ConsumableDB.find(y => y.key === x.key);
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
};
export default PremiumAttendGacha;
