import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileMinusFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-minus-fill") } { ...props }>
		
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>

	</IconBase>;

export default IconFileMinusFill;
