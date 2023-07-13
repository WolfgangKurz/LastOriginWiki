import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPlayFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-play-fill") } { ...props }>
		
  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>

	</IconBase>;

export default IconPlayFill;
