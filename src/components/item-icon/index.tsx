import { FunctionalComponent } from "preact";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";

interface ItemIconProps {
	class?: string;
	item: string;
	size?: number | string;
}

const ItemIcon: FunctionalComponent<ItemIconProps> = (props) => {
	const ext = ImageExtension();
	const ItemImage = `${AssetsRoot}/${ext}/item/${props.item}.${ext}`;

	const size = props.size || 24;

	return <img class={ BuildClass("item-icon", "me-1", props.class) } src={ ItemImage } width={ size } height={ size } />;
};
export default ItemIcon;
