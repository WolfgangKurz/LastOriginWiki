import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLamp: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-lamp") } { ...props }>
		
  <path d="M13 3v4H3V3h10zM3 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm4.5-1l.276-.553a.25.25 0 0 1 .448 0L8.5 1h-1zm-.012 9h1.024c.337.646.677 1.33.95 1.949.176.396.318.75.413 1.042.048.146.081.266.102.36A1.347 1.347 0 0 1 10 13.5c0 .665-.717 1.5-2 1.5s-2-.835-2-1.5c0 0 0-.013.004-.039.003-.027.01-.063.02-.11.02-.094.053-.214.1-.36.096-.291.238-.646.413-1.042.274-.62.614-1.303.95-1.949zm1.627-1h-2.23C6.032 10.595 5 12.69 5 13.5 5 14.88 6.343 16 8 16s3-1.12 3-2.5c0-.81-1.032-2.905-1.885-4.5z"/>

	</IconBase>;

export default IconLamp;
