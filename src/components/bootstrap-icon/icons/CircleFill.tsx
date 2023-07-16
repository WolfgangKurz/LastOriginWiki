import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-circle-fill") } { ...props }>
		
  <circle cx="8" cy="8" r="8"/>

	</IconBase>;

export default IconCircleFill;
