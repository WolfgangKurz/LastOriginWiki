import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTriangleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-triangle-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>

	</IconBase>;

export default IconTriangleFill;
