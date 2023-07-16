import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSkipStartFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-skip-start-fill") } { ...props }>
		
  <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"/>

	</IconBase>;

export default IconSkipStartFill;
