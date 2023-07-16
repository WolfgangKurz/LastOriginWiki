import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconAlignBottom: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-align-bottom") } { ...props }>
		
  <rect width="4" height="12" x="6" y="1" rx="1"/>
  <path d="M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z"/>

	</IconBase>;

export default IconAlignBottom;
