import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPieChartFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-pie-chart-fill") } { ...props }>
		
  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>

	</IconBase>;

export default IconPieChartFill;
