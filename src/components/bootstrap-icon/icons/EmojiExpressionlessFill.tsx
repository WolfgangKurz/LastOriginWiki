import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconEmojiExpressionlessFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-emoji-expressionless-fill") } { ...props }>
		
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>

	</IconBase>;

export default IconEmojiExpressionlessFill;
