import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";
import { cn } from "@/libs/Class";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface WorldItemProps {
	wid: string;

	large?: boolean;
	image?: string;
	imageless?: boolean;

	title?: preact.ComponentChildren;
	description?: preact.ComponentChildren;

	linked?: boolean;
	link?: string;
}

const WorldItem: FunctionalComponent<WorldItemProps> = (props) => {
	const WorldIcon = props.image ?? (`${props.wid}_${["Cha", "Daily"].includes(props.wid) ? "0" : "1"}`);

	return <div class={ cn(style.WorldItem, props.large && style.Large) }>
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

		{ props.linked && <a href={ props.link ?? `/worlds/${props.wid}` } class="stretched-link" /> }
	</div>;
};
export default WorldItem;
