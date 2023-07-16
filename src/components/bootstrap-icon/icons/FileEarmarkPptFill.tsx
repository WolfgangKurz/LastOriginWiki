import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileEarmarkPptFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-earmark-ppt-fill") } { ...props }>
		
  <path d="M6.5 8.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.5 6v.264a3 3 0 1 1 0 4.472V13.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 1 0z"/>

	</IconBase>;

export default IconFileEarmarkPptFill;
