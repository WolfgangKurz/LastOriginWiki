import { FunctionalComponent } from "preact";

import { Consumable } from "@/types/DB/Consumable";
import { MapSearch } from "@/types/DB/Map";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import DropItem from "@/components/drop-item";
import DropRes from "@/components/drop-res";
import Locale from "@/components/locale";

interface MapSearchInfoProps {
	searchInfo?: MapSearch | false | null;
}

const MapSearchInfo: FunctionalComponent<MapSearchInfoProps> = (props) => {
	const SearchInfo = typeof props.searchInfo === "undefined" ? null : props.searchInfo;

	const SearchTime = ((): string => {
		if (!SearchInfo) return "";
		const t = SearchInfo.time;

		const h = Math.floor(t / 3600);
		const m = Math.floor(t / 60) % 60;
		const s = t % 60;
		return `${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)}`;
	})();

	return <Loader json={ StaticDB.Consumable } content={ ((): preact.VNode => {
		const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

		function GetConsumable (item: string): Consumable | undefined {
			return ConsumableDB.find(y => y.key === item);
		}

		return <>
			{ SearchInfo === null
				? <div class="py-4 text-secondary">
					<Locale k="WORLD_VIEW_SELECT_NODE" />
				</div>
				: SearchInfo === false
					? <div class="py-4 text-secondary">
						<Locale k="WORLD_VIEW_NOT_EXPLORABLE" />
					</div>
					: <>
						<div class="row row-cols-1 row-cols-lg-2">
							<div class="col">
								<div class="card text-dark">
									<div class="card-header">
										<Locale k="WORLD_VIEW_EXPLORATION_CONDITION" />
									</div>
									<div class="card-body">
										<table class="table table-borderless border-top">
											<tbody>
												<tr>
													<td class="border-bottom">
														<Locale k="WORLD_VIEW_EXPLORATION_AVAILABLE" />
													</td>
													<td class="border-bottom">
														{ SearchInfo.enabled
															? <span class="text-success">
																<Locale k="WORLD_VIEW_EXPLORATION_AVAILABLE_YES" />
															</span>
															: <strong class="text-danger">
																<Locale k="WORLD_VIEW_EXPLORATION_AVAILABLE_NO" />
															</strong>
														}
													</td>
												</tr>
												<tr>
													<td class="border-bottom">
														<Locale k="WORLD_VIEW_EXPLORATION_AVG_LV" />
													</td>
													<td class="border-bottom">
														<span class="badge bg-warning text-dark">
															<Locale
																k="WORLD_VIEW_EXPLORATION_LV_FORMAT"
																p={ [<span class="font-exo2">{ SearchInfo.unitsLv }</span>] }
															/>
														</span>
													</td>
												</tr>
												<tr>
													<td class="border-bottom">
														<Locale k="WORLD_VIEW_EXPLORATION_MEMBERS" />
													</td>
													<td class="border-bottom">
														<span class="badge bg-warning text-dark">
															<Locale
																k="WORLD_VIEW_EXPLORATION_MEMBERS_FORMAT"
																p={ [<span class="font-exo2">{ SearchInfo.units }</span>] }
															/>
														</span>
													</td>
												</tr>
											</tbody>
										</table>
										<span class="badge bg-warning text-dark">
											<Locale k="WORLD_VIEW_EXPLORATION_TIME" />
										</span>
										<h3 class="font-exo2">{ SearchTime }</h3>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card mt-2 mt-lg-0 text-dark">
									<div class="card-header">
										<Locale k="WORLD_VIEW_EXPLORATION_REWARDS" />
									</div>
									<div class="card-body">
										<div class="row row-cols-2 row-cols-md-3">
											<DropRes res="metal" count={ SearchInfo.metal } />
											<DropRes res="nutrient" count={ SearchInfo.nutrient } />
											<DropRes res="power" count={ SearchInfo.power } />
										</div>
									</div>
								</div>

								<div class="card mt-2 text-dark">
									<div class="card-header">
										<Locale k="WORLD_VIEW_EXPLORATION_REWARDS_ITEM" />
									</div>
									<div class="card-body">
										{ SearchInfo.items.length === 0
											? <div class="py-4 text-secondary">
												<Locale k="WORLD_VIEW_EXPLORATION_REWARDS_ITEM_NO" />
											</div>
											: <></>
										}

										<div class="row row-cols-2">
											{ SearchInfo.items.map(item => ({
												consumable: GetConsumable(item.item),
												item,
											}))
												.map(entry => entry.consumable
													? <DropItem
														item={ entry.consumable }
														count={ entry.item.count }
														chance={ entry.item.chance }
													/>
													: <></>,
												)
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
			}
		</>;
	}) } />;
};
export default MapSearchInfo;
