import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { AssetsRoot } from "@/libs/Const";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface WorldItemProps {
	wid: string;

	image?: string;
	imageless?: boolean;
	center?: boolean;

	title?: preact.ComponentChildren;
	description?: preact.ComponentChildren;

	linked?: boolean;
	link?: string;
}

const WorldItem: FunctionalComponent<WorldItemProps> = (props) => {
	const WorldIcon = props.image ?? (
		["Cha", "Daily"].includes(props.wid)
			? `${props.wid}_0`
			: `${props.wid}_1`
	);

	return <div class={ style.WorldItem }>
		<div class={ style.WorldHeader }>
			{ !props.imageless && <img src={ `${AssetsRoot}/world/icons/${WorldIcon}.png` } /> }

			<div class={ style.WorldName }>
				<div class="font-exo2">
					{ props.title ?? <Locale k={ `WORLD_${props.wid}` } /> }
				</div>

				<div class={ style.WorldDesc }>
					{ props.description ?? <Locale k={ `WORLD_DESC_${props.wid}` } fallback="" /> }
				</div>
			</div>
		</div>

		<hr />

		{ props.children && <div class={ style.WorldContent }>
			{ props.children }
		</div> }

		{ props.linked && <Link href={ props.link ?? `/worlds/${props.wid}` } class="stretched-link" /> }
	</div>;
};
export default WorldItem;
