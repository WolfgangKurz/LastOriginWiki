import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconParagraph: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-paragraph") } { ...props }>
		
  <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"/>

	</IconBase>;

export default IconParagraph;
