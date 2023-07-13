import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecord: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record") } { ...props }>
		
  <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>

	</IconBase>;

export default IconRecord;
