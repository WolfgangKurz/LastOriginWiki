import { FunctionalComponent } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";
import Decimal from "decimal.js";

import { SelectOption } from "@/types/Helper";
import { ACTOR_GRADE, ITEM_TYPE } from "@/types/Enums";
import { LinkBonusType } from "@/types/DB/Unit";

import { RarityDisplay } from "@/libs/Const";
import { GetRequireResource } from "@/libs/Cost";
import { GetLinkBonus } from "@/libs/LinkBonus";
import { cn } from "@/libs/Class";

import Locale from "@/components/locale";
import ElemIcon from "@/components/elem-icon";

import SkillTable from "../../components/skill-table";

import { SubpageProps } from "..";

import style from "./Skill.module.scss";

const SkillTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const CurrentResists = unit.stat[0].Resist;
	// const ExLevel = objState<number>(9);

	const [linkCount, setLinkCount] = useState<number>(5);
	const LinkBonus = useMemo(
		() => unit.linkBonus
			.filter(x => x)
			.map(x => GetLinkBonus(x, linkCount)),
		[unit, linkCount],
	);

	const FullLinkBonusList = useMemo(() => unit.fullLinkBonus.map(x => GetLinkBonus(x, 1)), [unit]);
	const [fullLinkBonus, setFullLinkBonus] = useState<LinkBonusType>("");

	const CostRarityList = useMemo((): SelectOption<ACTOR_GRADE>[] => {
		const list = [{
			text: <Locale k="COMMON_UNIT_GRADE_FORMAT" p={ [RarityDisplay[unit.rarity]] } />,
			value: unit.rarity,
		}];

		if (unit.promotions) {
			list.push(...unit.promotions.map(x => ({
				text: <Locale k="UNIT_CARD_PROMOTION_BADGE" p={ [RarityDisplay[x.to]] } />,
				value: x.to,
			})));
		}

		return list;
	}, [unit]);
	const [costRarity, setCostRarity] = useState<ACTOR_GRADE>(unit.rarity);

	const CostClass = useCallback((level: number, value: number): string => {
		if (value === 0) return "text-secondary";
		if (fullLinkBonus.startsWith("Cost_") && level === 5)
			return "text-primary";
		return "";
	}, [fullLinkBonus]);

	const CostTable = useMemo(() => GetRequireResource(
		costRarity,
		unit.type,
		unit.role,
		unit.body,
		fullLinkBonus,
	), [unit, costRarity, fullLinkBonus]);

	const SkillPowerBonus = useMemo((): number => {
		let bonus = new Decimal(0);

		if (linkCount === 5) {
			if (fullLinkBonus === "Skill_2") bonus = bonus.add(2);
			if (fullLinkBonus === "Skill_5") bonus = bonus.add(5);
			if (fullLinkBonus === "Skill_10") bonus = bonus.add(10);
			if (fullLinkBonus === "Skill_15") bonus = bonus.add(15);
			if (fullLinkBonus === "Skill_20") bonus = bonus.add(20);
			if (fullLinkBonus === "Skill_25") bonus = bonus.add(25);
			if (fullLinkBonus === "Skill_30") bonus = bonus.add(30);
			if (fullLinkBonus === "Skill_35") bonus = bonus.add(35);
		}

		if (unit.linkBonus.includes("Skill_2")) bonus = bonus.add(Decimal.mul(2, linkCount));
		if (unit.linkBonus.includes("Skill_5")) bonus = bonus.add(Decimal.mul(5, linkCount));
		if (unit.linkBonus.includes("Skill_10")) bonus = bonus.add(Decimal.mul(10, linkCount));
		if (unit.linkBonus.includes("Skill_15")) bonus = bonus.add(Decimal.mul(15, linkCount));
		if (unit.linkBonus.includes("Skill_20")) bonus = bonus.add(Decimal.mul(20, linkCount));
		if (unit.linkBonus.includes("Skill_25")) bonus = bonus.add(Decimal.mul(25, linkCount));
		if (unit.linkBonus.includes("Skill_30")) bonus = bonus.add(Decimal.mul(30, linkCount));
		if (unit.linkBonus.includes("Skill_35")) bonus = bonus.add(Decimal.mul(35, linkCount));

		return bonus.toNumber();
	}, [unit, linkCount, fullLinkBonus]);

	return <div style={ { display: display ? "" : "none" } }>
		<div class="row justify-content-center">
			<div class={ cn("col col-12 col-sm-10 col-md-8 col-lg-6", style.EquipGrid) }>
				{ unit.slots.map((equip, i) => {
					const type = {
						[ITEM_TYPE.CHIP]: "CHIP",
						[ITEM_TYPE.SPCHIP]: "OS",
						[ITEM_TYPE.SUBEQ]: "ITEM",
					}[equip] || "";

					return <div class={ style.EquipSlot } data-type={ equip }>
						<div class="font-exo2">Lv. { (i + 1) * 20 }</div>
						<div class={ style.Icon } />
						<div><Locale k={ `COMMON_EQUIP_TYPE_${type}` } /></div>
					</div>;
				}) }
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-md-4">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th class="text-center font-exo2">
								<ElemIcon elem="fire" />
								{ CurrentResists.fire } %
							</th>
							<th class="text-center font-exo2">
								<ElemIcon elem="ice" />
								{ CurrentResists.ice } %
							</th>
							<th class="text-center font-exo2">
								<ElemIcon elem="lightning" />
								{ CurrentResists.lightning } %
							</th>
						</tr>
						<tr>
							<th colSpan={ 3 }>
								<Locale k="UNIT_VIEW_LINKBONUS" />
								<div class="btn-group btn-group-sm ms-3 font-exo2">
									{ new Array(6)
										.fill(0)
										.map((_, i) => <button
											class={ `btn btn-${linkCount === i ? "primary" : "light"}` }
											onClick={ (): void => setLinkCount(i) }
										>
											<strong class="px-1">{ i }</strong>
										</button>) }
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{ LinkBonus.map((lb) => <tr>
							<td colSpan={ 3 }>
								<Locale k={ lb.Name } />
								<span class="d-inline-block ps-1">
									{ lb.Prefix }
									<b class="text-danger">{ lb.Value }</b>
									{ lb.Postfix }
								</span>
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>

			<div class="col-12 col-md-4 fulllink-table">
				<table class="table table-bordered table-fixed text-start table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th class="text-center"><Locale k="UNIT_VIEW_FULL_LINKBONUS" /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Locale k="LINKBONUS_NONE" />
								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ fullLinkBonus === "" }
										onChange={ (): void => setFullLinkBonus("") }
									/>
								</div>
							</td>
						</tr>
						{ FullLinkBonusList.map((fl) => <tr>
							<td>
								<Locale k={ fl.Name } />
								<span class="d-inline-block ps-1">
									{ fl.Prefix }
									<b class="text-danger">{ fl.Value }</b>
									{ fl.Postfix }
								</span>

								<div class="form-check float-end">
									<input
										class="form-check-input"
										type="radio"
										checked={ fullLinkBonus === fl.Key }
										onChange={ (): void => setFullLinkBonus(fl.Key) }
									/>
								</div>
							</td>
						</tr>) }
					</tbody>
				</table>
			</div>

			<div class="col-12 col-md-4">
				<table class="table table-bordered table-fixed text-center table-unit-modal">
					<thead class="thead-dark">
						<tr>
							<th colSpan={ 4 }>
								<Locale k="UNIT_VIEW_COST" />
								{ CostRarityList.length > 1
									? <select
										class="form-select form-select-sm table-unit-rarity-select"
										value={ costRarity }
										onChange={ (e): void => {
											setCostRarity(
												parseInt(e.currentTarget.value, 10) as ACTOR_GRADE,
											);
										} }
									>
										{ CostRarityList.map(option => <option value={ option.value }>
											{ option.text }
										</option>) }
									</select>
									: <></>
								}
							</th>
						</tr>
						<tr>
							<th><Locale k="UNIT_VIEW_COST_LINKS" /></th>
							<th><Locale k="COMMON_RES_PARTS" /></th>
							<th><Locale k="COMMON_RES_NUTRIENTS" /></th>
							<th><Locale k="COMMON_RES_POWER" /></th>
						</tr>
					</thead>
					<tbody>
						{ new Array(6)
							.fill(0)
							.map((_, i) => <tr class="text-center font-exo2">
								<th class="bg-dark text-light">{ i }</th>
								<td class={ CostClass(i, CostTable.metal[i]) }>{ CostTable.metal[i] }</td>
								<td class={ CostClass(i, CostTable.nutrient[i]) }>{ CostTable.nutrient[i] }</td>
								<td class={ CostClass(i, CostTable.power[i]) }>{ CostTable.power[i] }</td>
							</tr>)
						}
					</tbody>
				</table>
			</div>
		</div>

		<SkillTable
			unit={ unit }
			buffBonus={ linkCount === 5 && fullLinkBonus.startsWith("Buff_") }
			skillBonus={ SkillPowerBonus }
			rangeBonus={ linkCount === 5 && fullLinkBonus.startsWith("Range_") }
		/>
	</div>;
};
export default SkillTab;
