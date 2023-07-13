import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSkipEndFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-skip-end-fill") } { ...props }>
		
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"/>

	</IconBase>;

export default IconSkipEndFill;
