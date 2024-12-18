import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconExclamationCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-exclamation-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>

	</IconBase>;

export default IconExclamationCircleFill;
