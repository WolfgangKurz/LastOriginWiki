import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPersonFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-person-fill") } { ...props }>
		
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>

	</IconBase>;

export default IconPersonFill;
