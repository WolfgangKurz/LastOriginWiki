import { FunctionalComponent } from "preact";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

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
		style={ { backgroundImage: `url(${AssetsRoot}/${imageExt}/buff/${props.buff}.${imageExt})` } }
	/>;
};
export default BuffIcon;
