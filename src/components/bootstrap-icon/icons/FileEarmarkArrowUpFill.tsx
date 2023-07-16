import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileEarmarkArrowUpFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-earmark-arrow-up-fill") } { ...props }>
		
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z"/>

	</IconBase>;

export default IconFileEarmarkArrowUpFill;
