import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSlashCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-slash-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"/>

	</IconBase>;

export default IconSlashCircleFill;
