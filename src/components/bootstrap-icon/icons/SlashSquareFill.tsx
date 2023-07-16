import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSlashSquareFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-slash-square-fill") } { ...props }>
		
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708z"/>

	</IconBase>;

export default IconSlashSquareFill;
