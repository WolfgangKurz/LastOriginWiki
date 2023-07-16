import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPhoneFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-phone-fill") } { ...props }>
		
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>

	</IconBase>;

export default IconPhoneFill;
