import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretUpSquareFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-up-square-fill") } { ...props }>
		
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>

	</IconBase>;

export default IconCaretUpSquareFill;