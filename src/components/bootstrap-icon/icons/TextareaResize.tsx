import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTextareaResize: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-textarea-resize") } { ...props }>
		
  <path d="M.5 4A2.5 2.5 0 0 1 3 1.5h12A2.5 2.5 0 0 1 17.5 4v8a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 12V4zM3 2.5A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 15 2.5H3zm11.854 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"/>

	</IconBase>;

export default IconTextareaResize;
