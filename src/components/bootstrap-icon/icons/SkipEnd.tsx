import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSkipEnd: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-skip-end") } { ...props }>
		
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633L10.804 8 5 11.367V4.633z"/>

	</IconBase>;

export default IconSkipEnd;
