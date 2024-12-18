import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFilePptFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-ppt-fill") } { ...props }>
		
  <path d="M6.5 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.5 4.5v.264a3 3 0 1 1 0 4.472V12a.5.5 0 0 1-1 0V4.5a.5.5 0 0 1 1 0z"/>

	</IconBase>;

export default IconFilePptFill;
