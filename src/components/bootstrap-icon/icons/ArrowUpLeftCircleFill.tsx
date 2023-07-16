import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowUpLeftCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-up-left-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"/>

	</IconBase>;

export default IconArrowUpLeftCircleFill;
