import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconAlignTop: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-align-top") } { ...props }>
		
  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>

	</IconBase>;

export default IconAlignTop;
