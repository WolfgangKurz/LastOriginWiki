import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconThreeDots: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-three-dots") } { ...props }>
		
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>

	</IconBase>;

export default IconThreeDots;
