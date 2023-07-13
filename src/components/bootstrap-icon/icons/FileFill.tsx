import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>

	</IconBase>;

export default IconFileFill;
