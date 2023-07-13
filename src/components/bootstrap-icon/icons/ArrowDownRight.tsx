import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowDownRight: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-down-right") } { ...props }>
		
  <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>

	</IconBase>;

export default IconArrowDownRight;
