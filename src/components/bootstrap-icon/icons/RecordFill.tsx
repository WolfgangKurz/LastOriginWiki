import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecordFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>

	</IconBase>;

export default IconRecordFill;
