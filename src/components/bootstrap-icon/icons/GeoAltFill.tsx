import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconGeoAltFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-geo-alt-fill") } { ...props }>
		
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

	</IconBase>;

export default IconGeoAltFill;
