import { FunctionalComponent } from "preact";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

interface ItemIconProps {
	item: string;
	size?: number;
}

const ItemIcon: FunctionalComponent<ItemIconProps> = (props) => {
	const ext = ImageExtension();
	const ItemImage = `${AssetsRoot}/${ext}/item/${props.item}.${ext}`;

	const size = props.size || 24;

	return <img class="item-icon me-1" src={ ItemImage } width={ size } height={ size } />;
};
export default ItemIcon;
