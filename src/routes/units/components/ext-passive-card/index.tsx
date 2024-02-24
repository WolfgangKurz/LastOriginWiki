import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { NUM_OUTPUTTYPE } from "@/types/Enums";
import { ExtPassive } from "@/types/DB/ExtPasive";
import { Consumable } from "@/types/DB/Consumable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FormatNumber } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import EquipIcon from "@/components/equip-icon";
import BuffList from "@/components/buff-list";

import style from "./style.module.scss";

interface ExtPassiveCardProps {
	passive: ExtPassive;
	level: number;
}

const ExtPassiveCard: FunctionalComponent<ExtPassiveCardProps> = (props) => {
	const imageExt = ImageExtension();

	const passive = props.passive;
	const skill = passive.skill;

	const title = LocaleGet(skill.key)
		.replace(/^◆[0-9]+ /, "");

	const slotClass = ["", "success", "primary", "event-exchange-old"][passive.slot];

	const buffDescText = ((desc: ExtPassive["desc"]) => {
		const level = props.level;
		const value = desc.value;
		const per = desc.level;

		if (desc.type === NUM_OUTPUTTYPE.INTEGER) {
			try {
				const v = Decimal.mul(per || "0", level || 0)
					.add(value)
					.toNumber();
				const sign = v > 0 ? "+" : v < 0 ? "-" : "";

				return LocaleGet(desc.desc, sign + v);
			} catch {
				return LocaleGet(desc.desc);
			}
		}

		try {
			const v = Decimal.mul(per || "0", level || 0)
				.add(value)
				.mul(100)
				.toNumber();
			const sign = v > 0 ? "+" : v < 0 ? "-" : "";

			return LocaleGet(desc.desc, sign + v);
		} catch {
			return LocaleGet(desc.desc);
		}
	})(passive.desc);

	return <div class={ `card ${style.ExtPassiveCard}` } data-cost={ passive.slot }>
		<div class="card-header">
			<div class="row">
				<div class="col-auto">
					<img
						class="skill-icon"
						src={ `${AssetsRoot}/${imageExt}/exskill/${skill.icon}.${imageExt}` }
					/>
					<br />
					<span class={ `badge bg-${slotClass} ${style.SlotBadge}` }>
						{ " ◆ ".repeat(passive.slot) }
						<div>COST { passive.slot }</div>
					</span>
				</div>
				<div class="col text-start">
					<div class={ style.Title }>
						<strong>{ title }</strong>
					</div>

					<hr class="mt-1 mb-2" />

					<div class="mb-2">{ buffDescText }</div>

					<Locale
						k="UNIT_SKILL_EXTPASSIVE_UPGRADE"
						p={ [passive.lvCost && passive.lvCost[props.level]
							? <Loader json={ StaticDB.Consumable } content={ () => {
								if (!passive.lvCost) return <></>;

								const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

								return <>
									<span class={ `badge ${style.CostBadge}` }>
										<img class="res-icon" src={ `${AssetsRoot}/res-component.png` } />
										{ FormatNumber(passive.lvCost[props.level].metal) }
									</span>
									<span class={ `badge ${style.CostBadge}` }>
										<img class="res-icon" src={ `${AssetsRoot}/res-nutrition.png` } />
										{ FormatNumber(passive.lvCost[props.level].nutrient) }
									</span>
									<span class={ `badge ${style.CostBadge}` }>
										<img class="res-icon" src={ `${AssetsRoot}/res-power.png` } />
										{ FormatNumber(passive.lvCost[props.level].power) }
									</span>

									{ passive.lvCost[props.level].items.map(e => {
										const item = ConsumableDB.find(c => c.key === e.id);
										if (!item) return <></>;

										return <span class={ `badge ${style.CostBadge}` }>
											<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
											<Locale k={ `CONSUMABLE_${item.key}` } />
											&nbsp;x{ FormatNumber(e.count) }
										</span>;
									}) }
								</>;
							} } />
							: <span class="text-secondary">
								<Locale k="UNIT_SKILL_EXTPASSIVE_UPGRADE_EMPTY" />
							</span>,
						] }
					/>
				</div>
			</div>
		</div>
		<div class="card-body pt-2">
			<div class={ style.Desc }>
				<Locale k={ `${skill.key}_DESC` } />
			</div>

			<BuffList list={ skill.buff.buffs } level={ props.level } />
		</div>
	</div>;
};
export default ExtPassiveCard;
