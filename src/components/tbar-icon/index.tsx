import { FunctionalComponent, h } from "preact";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

interface TbarIconProps {
	icon: string;
	size?: string | number;
	type?: string;
}

export function GetTbarIconURL (uid: string): string {
	const ext = ImageExtension();
	return `${AssetsRoot}/${ext}/tbar/${uid}.${ext}`;
}

const TbarIcon: FunctionalComponent<TbarIconProps> = (props) => {
	const path = GetTbarIconURL(props.icon);

	const type = props.type || "";
	const size = props.size;

	if (size)
		return <img class="tbar-icon" data-type={ type } src={ path } width={ size } height={ size } />;
	return <img class="tbar-icon" data-type={ type } src={ path } />;
};
export default TbarIcon;
