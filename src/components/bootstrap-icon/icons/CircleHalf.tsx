import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCircleHalf: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-circle-half") } { ...props }>
		
  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>

	</IconBase>;

export default IconCircleHalf;
