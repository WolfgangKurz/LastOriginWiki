import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowLeftCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-left-circle-fill") } { ...props }>
		
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>

	</IconBase>;

export default IconArrowLeftCircleFill;
