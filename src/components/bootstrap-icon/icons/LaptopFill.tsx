import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLaptopFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-laptop-fill") } { ...props }>
		
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>

	</IconBase>;

export default IconLaptopFill;
