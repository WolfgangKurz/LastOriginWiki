import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSkipEndBtnFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-skip-end-btn-fill") } { ...props }>
		
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L6.79 5.093z"/>

	</IconBase>;

export default IconSkipEndBtnFill;
