import { Fragment, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";

import { ROLE_TYPE } from "@/types/Enums";
import { FacilityEntity, FacilityUpgradeRequiredMaterial, FactilityProduct } from "@/types/DB/Facility";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { Consumable } from "@/types/DB/Consumable";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import Icon from "@/components/bootstrap-icon";
import UnitBadge from "@/components/unit-badge";
import RarityBadge from "@/components/rarity-badge";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";
import ItemIcon from "@/components/item-icon";
import FacilityIcon from "../components/facility-icon";
import DropItem from "@/components/drop-item";

import "./style.scss";

interface FacilityViewProps {
	uid: string;
}

const FacilityView: FunctionalComponent<FacilityViewProps> = (props) => {
	const DBKey = `/facility/${props.uid}`;

	const level = objState<number>(25);

	function TimeFormat (duration: number): preact.VNode {
		const th = Math.floor(duration / 3600) % 24;
		const tm = Math.floor(duration / 60) % 60;
		const ts = duration % 60;
		const dt = `${(`0${th}`).substr(-2)}:${(`0${tm}`).substr(-2)}:${(`0${ts}`).substr(-2)}`;

		if (duration >= 86400) {
			const d = Math.floor(duration / 86400);
			return <Locale k="FACILITY_TIME_DAY_FORMAT" p={ [d, dt] } />;
		}
		return <Fragment>{ dt }</Fragment>;
	}

	return <Loader
		json={ [
			DBKey,
			StaticDB.FilterableUnit,
			StaticDB.Consumable,
		] }
		content={ ((): preact.VNode => {
			const facility = GetJson<FacilityEntity>(DBKey);
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

			SetMeta(
				["description", "twitter:description"],
				`${LocaleGet(`FACILITY_${facility.uid}`)} 설비의 정보입니다. 소모 자원과 필요 전투원 정보, 생산품과 업그레이드 비용/시간을 확인할 수 있습니다.`,
			);
			SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/${ImageExtension()}/facility/${facility.image}.${ImageExtension()}`);
			SetMeta("keywords", `,${LocaleGet(`FACILITY_${facility.uid}`)}`, true);

			UpdateTitle(LocaleGet("MENU_FACILITIES"), LocaleGet(`FACILITY_${props.uid}`));

			function CombatantType (type: string): preact.VNode[][] {
				const roleTable: Record<string, ROLE_TYPE> = {
					Attacker: ROLE_TYPE.ATTACKER,
					Defender: ROLE_TYPE.DEFENDER,
					Supporter: ROLE_TYPE.SUPPORTER,
				};

				return type.split(",").map(x =>
					x.split("+").map(y => {
						switch (y) {
							case "Bioroid":
								return <span class="badge bg-info mx-1">
									<Locale k="COMMON_UNIT_BODY_BIOROID" />
								</span>;
							case "AGS":
								return <span class="badge bg-info mx-1">
									<Locale k="COMMON_UNIT_BODY_AGS" />
								</span>;
							case "Attacker":
							case "Defender":
							case "Supporter":
								return <UnitBadge class="mx-1" role={ roleTable[y] } />;
							default:
								if (/^[0-9]+$/.test(y)) {
									const unit = FilterableUnitDB.find(z => z.id.toString() === y);
									if (!unit) return <span class="badge bg-secondary">???</span>;

									return <Link href={ `/units/${unit.uid}` }>
										<BootstrapTooltip
											placement="top"
											content={ <UnitCard.Card unit={ unit } rarity={ unit.rarity } no-link /> }
										>
											<RarityBadge class="mx-1" rarity="A">
												<Locale k={ `UNIT_${unit.uid}` } />
												<Icon icon="link-45deg" class="ms-1" />
											</RarityBadge>
										</BootstrapTooltip>
										<div class="preload-area">
											<UnitFace uid={ unit.uid } />
										</div>
									</Link>;
								}
								return <Fragment>{ y }</Fragment>;
						}
					}),
				);
			}

			function Results (key: string, result: FactilityProduct[]): preact.VNode[] {
				const conds: Array<preact.VNode> = [];
				result.forEach((x, i) => {
					if (i > 0) conds.push(<hr class="my-1" />);

					const list: preact.VNode[] = [];
					if ("item" in x) {
						const item = ConsumableDB.find(y => y.key === x.item) ||
							{ name: x.item, desc: "", func: "", icon: "", key: "" };

						if (x.chance === 100)
							list.push(<DropItem item={ item } count={ x.count } />);
						else
							list.push(<DropItem item={ item } count={ x.count } chance={ x.chance } />);
					} else if ("type" in x) {
						switch (x.type) {
							case "facilityParts":
								list.push(<span class="badge bg-substory mx-1">
									<Locale k="FACILITY_FUNCTION_FACILITYPARTS" p={ [x.bonus] } />
								</span>);
								break;
							case "metal":
								list.push(<span class="badge bg-warning text-dark mx-1">
									<Locale k="FACILITY_FUNCTION_PART" p={ [x.bonus] } />
								</span>);
								break;
							case "nutrient":
								list.push(<span class="badge bg-success mx-1">
									<Locale k="FACILITY_FUNCTION_NUTRIENT" p={ [x.bonus] } />
								</span>);
								break;
							case "power":
								list.push(<span class="badge bg-primary mx-1">
									<Locale k="FACILITY_FUNCTION_POWER" p={ [x.bonus] } />
								</span>);
								break;
							case "equipCost":
								list.push(<span class="badge bg-exchange mx-1">
									<Locale k="FACILITY_FUNCTION_EQUIPCOST" p={ [x.bonus] } />
								</span>);
								break;
							case "equipDisassemble":
								list.push(<span class="badge bg-exchange mx-1">
									<Locale k="FACILITY_FUNCTION_EQUIPDISASSEMBLE" p={ [x.bonus] } />
								</span>);
								break;
							case "exp":
								list.push(<span class="badge bg-warning text-dark mx-1">
									<Locale k="FACILITY_FUNCTION_EXP" p={ [x.bonus] } />
								</span>);
								break;
						}
					} else if ("grade" in x) {
						const target = key.startsWith("NukerMaking")
							? "Attacker"
							: key.startsWith("TankerMaking")
								? "Defender"
								: key.startsWith("SupporterMaking")
									? "Supporter"
									: "";
						list.push(
							<RarityBadge rarity={ x.grade }>
								{ x.grade }
								<span class="mx-1">
									<Locale k={ `COMMON_UNIT_ROLE_${target.toUpperCase()}` } />
								</span>
								<span><Locale k="COMMON_UNIT_BODY_BIOROID" /></span>
							</RarityBadge>,
							<small> ({ x.chance }%)</small>,
						);
					}
					conds.push(...list);
				});

				return conds;
			}

			const getUpgradeRequired = (m: FacilityUpgradeRequiredMaterial | null): preact.VNode => {
				if (!m) {
					return <small class="text-secondary">
						<Locale k="FACILITY_UPGRADE_PART_NO" />
					</small>;
				}

				const VariantTable = {
					T1: "white",
					T2: "info",
					T3: "event-exchange",
				};
				const TextVariantTable = {
					T1: "dark",
					T2: "light",
					T3: "light",
				};
				const variant = VariantTable[m.grade];
				const text = TextVariantTable[m.grade];

				const item = ConsumableDB.find(x => x.key === `${m.type}_Parts_${m.grade}`)!;
				return <DropItem item={ item } count={ m.value } variant={ variant } text={ text } />;
			};

			const UpgradeTable = facility.list
				.filter((x, i) => i > 0)
				.map(x => {
					const Material = getUpgradeRequired(x.upgradeRequired.Material);
					return <tr>
						<td class="bg-dark text-light">
							{ x.level - 1 }
							<span class="text-secondary"> → </span>
							{ x.level }
						</td>
						<td>
							<ItemIcon item="UI_Icon_Consumable_Wood_Material" />
							{ x.upgradeRequired.Wood }
						</td>
						<td>
							<ItemIcon item="UI_Icon_Consumable_Stone_Material" />
							{ x.upgradeRequired.Stone }
						</td>
						<td>
							<ItemIcon item="UI_Icon_Consumable_Iron_Material" />
							{ x.upgradeRequired.Iron }
						</td>
						<td>{ Material }</td>
						<td>{ TimeFormat(x.upgradeTime) }</td>
					</tr>;
				});

			const UpgradeTableMd = facility.list
				.filter((x, i) => i > 0)
				.map(x => {
					const Material = getUpgradeRequired(x.upgradeRequired.Material);
					return <Fragment>
						<tr>
							<td class="bg-dark text-light" colSpan={ 6 }>
								{ x.level - 1 }
								<span class="text-secondary"> → </span>
								{ x.level }
							</td>
						</tr>
						<tr>
							<td class="bg-dark text-light border-left" colSpan={ 2 }>
								<Locale k="FACILITY_UPGRADE_RESIN" />
							</td>
							<td class="bg-dark text-light" colSpan={ 2 }>
								<Locale k="FACILITY_UPGRADE_VARNISH" />
							</td>
							<td class="bg-dark text-light border-right" colSpan={ 2 }>
								<Locale k="FACILITY_UPGRADE_IRON" />
							</td>
						</tr>
						<tr>
							<td class="border-left" colSpan={ 2 }>
								<ItemIcon item="UI_Icon_Consumable_Wood_Material" />
								{ x.upgradeRequired.Wood }
							</td>
							<td colSpan={ 2 }>
								<ItemIcon item="UI_Icon_Consumable_Stone_Material" />
								{ x.upgradeRequired.Stone }
							</td>
							<td class="border-right" colSpan={ 2 }>
								<ItemIcon item="UI_Icon_Consumable_Iron_Material" />
								{ x.upgradeRequired.Iron }
							</td>
						</tr>
						<tr>
							<td class="bg-dark text-light border-left" colSpan={ 3 }>
								<Locale k="FACILITY_UPGRADE_PART" />
							</td>
							<td class="bg-dark text-light border-right" colSpan={ 3 }>
								<Locale k="FACILITY_UPGRADE_TIME" />
							</td>
						</tr>
						<tr>
							<td class="border-left" colSpan={ 3 }>{ Material }</td>
							<td class="border-right" colSpan={ 3 }>{ TimeFormat(x.upgradeTime) }</td>
						</tr>
						<tr>
							<td colSpan={ 6 } />
						</tr>
					</Fragment>;
				});

			const entry = facility.list[level.value - 1];

			return <div class="facility-view">
				<div class="row">
					<div class="col-auto">
						<button class="btn btn-dark" onClick={ (): void => void (route("/facilities/")) }>
							<Icon icon="arrow-left" class="me-1" />
							<Locale k="FACILITY_BACK_TO_LIST" />
						</button>
					</div>
				</div>
				<hr />

				<div class="card">
					<div class="card-header">
						<Locale k={ `FACILITY_${facility.uid}` } />
					</div>
					<div class="card-body">
						<FacilityIcon facility={ facility } level={ level.value } />
						<h4 class="mt-2 mb-4">Lv.{ level.value }</h4>

						<div class="container facility-info-table mt-2">
							<div class="row text-center">
								<div class="col-6 col-md-3 bg-dark text-light">
									<Locale k="FACILITY_LEVEL" />
								</div>
								<div class="col-6 col-md-9">
									<input
										class="form-range"
										type="range"
										min="1"
										max="25"
										value={ level.value }
										onInput={ (e): void => level.set(parseInt((e.target as HTMLInputElement).value, 10)) }
									/>
								</div>
							</div>

							<div class="row row-cols-2 row-cols-md-4 text-center">
								<div class="col bg-dark text-light">
									<Locale k="FACILITY_SIZE" />
								</div>
								<div class="col">
									<Locale k="FACILITY_SIZE_CELLS" p={ [facility.size] } />
								</div>
								<div class="col bg-dark text-light">
									<Locale k="FACILITY_WORKTIME" />
								</div>
								<div class="col">
									{ facility.duration === 0
										? <span class="text-secondary">
											<Locale k="FACILITY_WORKTIME_ALWAYS" />
										</span>
										: TimeFormat(facility.duration)
									}
								</div>

								<div class="col bg-dark text-light">
									<Locale k="FACILITY_UNIT_REQ" />
								</div>
								<div class="col">
									<Locale k="FACILITY_UNIT_REQ_COUNT" p={ [entry.requiredCombatant.count] } /><br />
									<span>
										<small>Lv.</small>
										{ entry.requiredCombatant.level }
									</span>
								</div>
								<div class="col bg-dark text-light">
									<Locale k="FACILITY_COST" />
								</div>
								<div class="col">
									{ entry.cost.every(res => res === 0)
										? <span class="text-secondary">
											<Locale k="FACILITY_COST_NO" />
										</span>
										: <Fragment>
											<span class="badge bg-warning text-dark mx-1">
												<Locale k="COMMON_RES_PARTS" /> { entry.cost[0] }
											</span>
											<span class="badge bg-success mx-1">
												<Locale k="COMMON_RES_NUTRIENTS" /> { entry.cost[1] }
											</span>
											<span class="badge bg-primary mx-1">
												<Locale k="COMMON_RES_POWER" /> { entry.cost[2] }
											</span>
										</Fragment>
									}
								</div>

								<div class="col bg-dark text-light">
									<Locale k="FACILITY_LIMIT" />
								</div>
								<div class="col">
									{ entry.requiredCombatant.type
										? CombatantType(entry.requiredCombatant.type)
										: <span class="text-secondary">
											<Locale k="FACILITY_LIMIT_NO" />
										</span>
									}
								</div>
								<div class="col bg-dark text-light">
									<Locale k="FACILITY_FUNCTION" />
								</div>
								<div class="col">{ Results(facility.uid, entry.produceItem) }</div>
							</div>
						</div>

						<table class="table mt-2 d-none d-md-table">
							<tbody>
								<tr class="bg-dark text-light">
									<td><Locale k="FACILITY_UPGRADE_LEVEL" /></td>
									<td><Locale k="FACILITY_UPGRADE_RESIN" /></td>
									<td><Locale k="FACILITY_UPGRADE_VARNISH" /></td>
									<td><Locale k="FACILITY_UPGRADE_IRON" /></td>
									<td><Locale k="FACILITY_UPGRADE_PART" /></td>
									<td><Locale k="FACILITY_UPGRADE_TIME" /></td>
								</tr>
								{ UpgradeTable }
							</tbody>
						</table>
						<table class="table mt-2 d-md-none">
							<tbody>
								{ UpgradeTableMd }
							</tbody>
						</table>
					</div>
				</div>
			</div>;
		}) }
	/>;
};
export default FacilityView;
