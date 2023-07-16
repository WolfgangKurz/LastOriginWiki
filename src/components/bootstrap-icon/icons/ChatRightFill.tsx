import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChatRightFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chat-right-fill") } { ...props }>
		
  <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>

	</IconBase>;

export default IconChatRightFill;
