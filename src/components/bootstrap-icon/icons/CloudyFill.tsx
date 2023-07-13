import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCloudyFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-cloudy-fill") } { ...props }>
		
  <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973z"/>

	</IconBase>;

export default IconCloudyFill;
