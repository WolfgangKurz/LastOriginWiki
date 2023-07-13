import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretRightSquareFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-right-square-fill") } { ...props }>
		
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>

	</IconBase>;

export default IconCaretRightSquareFill;
