import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSkipStartCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-skip-start-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"/>

	</IconBase>;

export default IconSkipStartCircleFill;
