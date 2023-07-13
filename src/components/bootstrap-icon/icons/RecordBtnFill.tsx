import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecordBtnFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record-btn-fill") } { ...props }>
		
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>

	</IconBase>;

export default IconRecordBtnFill;
