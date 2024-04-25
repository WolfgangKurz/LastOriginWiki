import { FunctionalComponent } from "preact";

import { Consumable } from "@/types/DB/Consumable";
import { ROLE_TYPE } from "@/types/Enums";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { FormatNumber } from "@/libs/Functions";

import { GetJson, JsonLoaderCore, StaticDB } from "@/libs/Loader";
import Locale from "@/components/locale";
import IconCoolFace from "@/components/bootstrap-icon/icons/CoolFace";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import IconHeartFill from "@/components/bootstrap-icon/icons/HeartFill";
import IconCaretRightFill from "@/components/bootstrap-icon/icons/CaretRightFill";
import IconCaretDownFill from "@/components/bootstrap-icon/icons/CaretDownFill";
import EquipIcon from "@/components/equip-icon";

import { SubpageProps } from "..";

import style1 from "./style.module.scss";
import style2 from "../style.module.scss";
const style = Object.assign(style1, style2);

const PromoTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const update = useUpdate();

	const ConsumableDB = GetJson<Consumable[] | null>(StaticDB.Consumable);
	if (!ConsumableDB) {
		JsonLoaderCore(CurrentDB, StaticDB.Consumable)
			.then(() => update());
	}

	if (!display || !ConsumableDB) return <></>;

	if (!unit.promotions) {
		return <div class="p-4 text-secondary">
			<Locale plain k="UNIT_VIEW_PROMO_EMPTY" />
		</div>;
	}

	const RoleIconId = ({
		[ROLE_TYPE.ATTACKER]: "Sword",
		[ROLE_TYPE.DEFENDER]: "Shield",
		[ROLE_TYPE.SUPPORTER]: "Gear",
	})[unit.role];

	const last = Math.max(...unit.promotions.map(r => r.to));

	return <div class={ style.PromoTable }>
		{ unit.promotions.map(p => <>
			<div class={ BuildClass("card", style.PromoInfo) }>
				<img src={ `${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[p.to - 1]}.png` } />

				<div class={ BuildClass("font-exo2", "mx-3", style.PromoLevel) }>
					<span class="d-block d-md-inline me-0 me-md-3">
						Lv. <strong class="ms-1">{ p.level }</strong>
					</span>
					<span class="d-none d-md-inline">|</span>
					<span class="d-block d-md-inline ms-0 ms-md-3">
						<IconHeartFill class="text-danger" />
						<strong class="ms-2">{ p.favor }</strong>
					</span>
				</div>

				{ p.req.length > 0
					? <table class={ BuildClass("table table-bordered text-end", style.PromoItems) }>
						<tbody>
							{ p.req.map(r => {
								const c = ConsumableDB.find(d => d.key === r.id);
								const icon = c && c.icon;

								return <tr>
									<td>
										<span class={ style.ItemIcon }>
											{ icon
												? <BootstrapTooltip
													content={ <Locale plain k={ `CONSUMABLE_${r.id}` } /> }
												>
													<EquipIcon
														image={ icon }
														size={ 24 }
													/>
												</BootstrapTooltip>
												: <>???</>
											}
										</span>

										<span class={ style.ItemCount }>
											{ FormatNumber(r.count) }
										</span>
									</td>
								</tr>;
							}) }
						</tbody>
					</table>
					: <></>
				}
			</div >
			<div class={ style.Arrow }>
				<IconCaretRightFill class="d-none d-md-inline" />
				<IconCaretDownFill class="d-inline d-md-none" />
			</div>
		</>) }

		<div class={ style.PromoInfo }>
			<img src={ `${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[last]}.png` } />

			<div class={ style.PromoEnd }>
				<IconCoolFace />
			</div>
		</div>
	</div>;
};
export default PromoTab;
