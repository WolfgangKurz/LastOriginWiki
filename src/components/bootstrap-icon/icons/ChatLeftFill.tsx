import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChatLeftFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chat-left-fill") } { ...props }>
		
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>

	</IconBase>;

export default IconChatLeftFill;
