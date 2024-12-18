import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconReplyFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-reply-fill") } { ...props }>
		
  <path d="M5.921 11.9L1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>

	</IconBase>;

export default IconReplyFill;
