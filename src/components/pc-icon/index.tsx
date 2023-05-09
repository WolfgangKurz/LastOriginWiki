import { FunctionalComponent } from "preact";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

interface ItemIconProps {
	class?: string;
	item: string;
	size?: number;
}

const PCIcon: FunctionalComponent<ItemIconProps> = (props) => {
	const ext = ImageExtension();
	const ItemImage = `${AssetsRoot}/${ext}/pc/${props.item}.${ext}`;

	const size = props.size || 64;

	return <img
		class={ `item-icon me-1 ${props.class || ""}` }
		src={ ItemImage }
		width={ size }
		height={ size }
	/>;
};
export default PCIcon;
