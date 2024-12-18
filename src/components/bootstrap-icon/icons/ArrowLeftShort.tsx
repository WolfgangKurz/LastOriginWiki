import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowLeftShort: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-left-short") } { ...props }>
		
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>

	</IconBase>;

export default IconArrowLeftShort;
