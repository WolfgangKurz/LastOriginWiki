import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconHeartFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-heart-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>

	</IconBase>;

export default IconHeartFill;
