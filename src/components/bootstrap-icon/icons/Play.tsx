import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPlay: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-play") } { ...props }>
		
  <path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>

	</IconBase>;

export default IconPlay;
