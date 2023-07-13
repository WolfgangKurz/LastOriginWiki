import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconExclamation: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-exclamation") } { ...props }>
		
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>

	</IconBase>;

export default IconExclamation;
