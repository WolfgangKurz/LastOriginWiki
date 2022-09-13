import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FunctionalComponent } from "preact";

import "./style.scss";

interface BuffIconProps {
	class?: string;

	buff: string;
	inline?: boolean;
}

const BuffIcon: FunctionalComponent<BuffIconProps> = (props) => {
	const imageExt = ImageExtension();
	return <div
		class={ `buff-icon ${props.class || ""}` }
		data-inline={ props.inline ? 1 : 0 }
		style={ { backgroundImage: `url(${AssetsRoot}/${imageExt}/buff/BuffIcon_${props.buff}.${imageExt})` } }
	/>;
};
export default BuffIcon;
