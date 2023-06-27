import { FunctionalComponent } from "preact";

import { Consumable } from "@/types/DB/Consumable";
import { ROLE_TYPE } from "@/types/Enums";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { FormatNumber } from "@/libs/Functions";

import { GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import Icon from "@/components/bootstrap-icon";

import { SubpageProps } from "..";

import style from "../style.module.scss";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

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
						<Icon class="text-danger" icon="heart-fill" />
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
				<Icon class="d-none d-md-inline" icon="caret-right-fill" />
				<Icon class="d-inline d-md-none" icon="caret-down-fill" />
			</div>
		</>) }

		<div class={ style.PromoInfo }>
			<img src={ `${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[last]}.png` } />

			<div class={ style.PromoEnd }>
				{/* Smile icon */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
					<path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16Zm147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.332 207.332 0 0 1-44.589 66.125Z" /><path fill="currentColor" d="M256 384a104 104 0 0 0 104-104H152a104 104 0 0 0 104 104Zm-50.243-155.708l20.486-24.584L168 155.173l-58.243 48.535l20.486 24.584L168 196.827l37.757 31.465zm80-24.584l20.486 24.584L344 196.827l37.757 31.465l20.486-24.584L344 155.173l-58.243 48.535z" />
				</svg>
			</div>
		</div>
	</div>;
};
export default PromoTab;
