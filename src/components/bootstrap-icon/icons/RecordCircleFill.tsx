import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecordCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>

	</IconBase>;

export default IconRecordCircleFill;
