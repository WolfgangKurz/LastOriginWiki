import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCloudSlashFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-cloud-slash-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11L3.112 5.112zm11.372 7.372L4.937 2.937A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711zm-.838 1.87l-12-12 .708-.708 12 12-.707.707z"/>

	</IconBase>;

export default IconCloudSlashFill;
