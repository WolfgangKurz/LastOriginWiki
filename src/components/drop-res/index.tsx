import { FunctionalComponent } from "preact";

import { FormatNumber } from "@/libs/Functions";

import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";

import "./style.scss";

interface DropResProps {
	res: string;
	count?: number;
	am?: boolean;
}

const DropRes: FunctionalComponent<DropResProps> = (props) => {
	const count = props.count || 1;
	const am = !!props.am;

	const Icon = ((): string => {
		switch (props.res) {
			case "metal": return "UI_Icon_Currency_Metal";
			case "nutrient": return "UI_Icon_Currency_Nutrient";
			case "power": return "UI_Icon_Currency_Power";
			case "cash": return "UI_Icon_TunaCan_T1";
			default: return "none";
		}
	})();

	const Name = ((): preact.VNode => {
		switch (props.res) {
			case "metal": return <Locale k="COMMON_RES_PARTS" />;
			case "nutrient": return <Locale k="COMMON_RES_NUTRIENTS" />;
			case "power": return <Locale k="COMMON_RES_POWER" />;
			case "cash": return <Locale k="COMMON_RES_TUNA" />;
			default: return <>???</>;
		}
	})();

	return <div class="drop-res p-2 text-dark" data-count={ count }>
		<div class={ `card bg-${am ? "warning" : "secondary"} text-${am ? "dark" : "light"}` }>
			<div class="card-body">
				<EquipIcon class="float-start me-2" image={ Icon } />
				<div class="text-start">
					{ Name }
					{ count !== 1
						? <span class="badge bg-dark ms-1">x{ FormatNumber(count) }</span>
						: <></>
					}
				</div>
			</div>
		</div>
	</div>;
};
export default DropRes;
