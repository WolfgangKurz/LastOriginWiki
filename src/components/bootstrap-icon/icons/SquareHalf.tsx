import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSquareHalf: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-square-half") } { ...props }>
		
  <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z"/>

	</IconBase>;

export default IconSquareHalf;
