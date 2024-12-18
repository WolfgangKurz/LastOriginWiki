import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowDownRightSquareFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-down-right-square-fill") } { ...props }>
		
  <path d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197L10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z"/>

	</IconBase>;

export default IconArrowDownRightSquareFill;
