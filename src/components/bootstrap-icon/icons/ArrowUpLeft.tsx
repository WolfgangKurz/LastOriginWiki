import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowUpLeft: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-up-left") } { ...props }>
		
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"/>

	</IconBase>;

export default IconArrowUpLeft;
