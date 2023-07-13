import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPentagonFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-pentagon-fill") } { ...props }>
		
  <path d="M8 0l8 6.5-3 9.5H3L0 6.5 8 0z"/>

	</IconBase>;

export default IconPentagonFill;
