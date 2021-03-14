import { FunctionalComponent, h } from "preact";

import { FilterableFacility } from "@/types/DB/Facility.Filterable";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

import "./style.scss";

interface FacilityIconProps {
	facility: FilterableFacility;
	level: number;
}

const FacilityIcon: FunctionalComponent<FacilityIconProps> = (props) => {
	const imageExt = ImageExtension();

	const step = ((): number => {
		if (props.level < 10)
			return 0;
		else if (props.level < 17)
			return 1;
		else if (props.level < 22)
			return 2;
		else if (props.level < 25)
			return 3;

		return 4;
	})();

	return <div class="facility-icon">
		<svg viewBox={ `0 0 ${230 * props.facility.size} 244` } style="max-height: 244px">
			<image xlinkHref={ `${AssetsRoot}/${imageExt}/facility/${props.facility.image}.${imageExt}` } x="0" y={ -244 * step } />
		</svg>
		<span class="facility-size" data-size={ props.facility.size } />
	</div>;
};
export default FacilityIcon;
