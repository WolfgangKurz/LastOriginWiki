import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileBreakFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-break-fill") } { ...props }>
		
  <path d="M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>

	</IconBase>;

export default IconFileBreakFill;
