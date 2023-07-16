import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconMask: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-mask") } { ...props }>
		
  <path d="M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546zM4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z"/>

	</IconBase>;

export default IconMask;
