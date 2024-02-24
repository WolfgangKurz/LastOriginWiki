import { FunctionalComponent } from "preact";

import { Consumable } from "@/types/DB/Consumable";
import { MapWaveDrop } from "@/types/DB/Map";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";

import Loader, { GetJson, JsonLoaderCore, StaticDB } from "@/libs/Loader";
import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import { SubpageProps } from "..";

import style from "./style.module.scss";

const LvLimitTab: FunctionalComponent<SubpageProps> = ({ display, unit }) => {
	const update = useUpdate();

	const ConsumableDB = GetJson<Consumable[] | null>(StaticDB.Consumable);
	if (!ConsumableDB) {
		JsonLoaderCore(CurrentDB, StaticDB.Consumable)
			.then(() => update());
	}

	if (!display || !ConsumableDB) return <></>;

	const cols: Consumable[] = [];
	const table: Record<number, Array<{
		v: Required<MapWaveDrop>;
		c: Consumable;
	}>> = {};

	unit.lvLimits.forEach(e => {
		table[e.level] = [];

		e.items.forEach(v => {
			const item = ConsumableDB.find(c => c.key === v.id);
			if (!item) return;

			let cidx = cols.indexOf(item);
			if (cidx === -1) {
				cols.push(item);
				cidx = cols.length - 1;
			}

			table[e.level][cidx] = {
				v,
				c: item || {
					key: "",
					icon: "",
					name: "",
					desc: "",
					func: "",
				},
			};
		});
	});

	return <div class={ `table-responsive ${style.LvLimitTableWrapper}` }>
		<table class="table table-bordered text-center">
			<thead>
				<tr>
					<th class="bg-dark text-light" rowSpan={ 2 }>
						<Locale k="UNIT_VIEW_LVLIMIT_LEVEL" />
					</th>
					<th class="bg-dark text-light" colSpan={ cols.length }>
						<Locale k="UNIT_VIEW_LVLIMIT_ITEMS" />
					</th>
				</tr>
				<tr>
					{ cols.map(c => <th class={ `bg-dark text-light ${style.LvLimitHeaderItem}` }>
						<BootstrapTooltip content={ <>
							<Locale k={ `CONSUMABLE_${c.key}` } />
						</> }>
							<EquipIcon class="vertical-align-middle" image={ c.icon } size="24" />
						</BootstrapTooltip>
					</th>) }
				</tr>
			</thead>
			<tbody>
				{ unit.lvLimits.map(e => <tr>
					<td class="p-3 table-medidark font-exo2">
						<small>Lv.</small>
						{ e.level }
					</td>
					{ table[e.level].map(({ v, c }) => <td class="text-end">
						<span class={ style.LvLimitItemIcon }>
							<BootstrapTooltip content={ <>
								<Locale k={ `CONSUMABLE_${c.key}` } />
							</> }>
								<EquipIcon
									class="vertical-align-middle"
									image={ c.icon }
									size="24"
								/>
							</BootstrapTooltip>
						</span>

						<span class={ style.LvLimitCount }>
							{ FormatNumber(v.count!) }
						</span>
					</td>) }
					{ new Array(cols.length - table[e.level].length).fill(<td />) }
				</tr>) }
			</tbody>
		</table>
	</div>;
};
export default LvLimitTab;
