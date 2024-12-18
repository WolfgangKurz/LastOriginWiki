import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCash: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-cash") } { ...props }>
		
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>

	</IconBase>;

export default IconCash;
