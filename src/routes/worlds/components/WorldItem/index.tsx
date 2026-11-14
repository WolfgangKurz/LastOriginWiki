import { FunctionalComponent } from "preact";
import { useMemo } from "preact/hooks";

import { AssetsRoot } from "@/libs/Const.1";
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
	const norm_wid = useMemo(() => props.wid === "OLD_Story" ? "Story" : props.wid, [props.wid]);
	const WorldIcon = props.image ?? (`${props.wid}_${["Cha", "Daily"].includes(props.wid) ? "0" : "1"}`);

	return <div class={ cn(style.WorldItem, props.large && style.Large) }>
		<div class={ style.WorldHeader }>
			{ !props.imageless && <img src={ `${AssetsRoot}/world/icons/${WorldIcon}.png?v=2` } /> }

			<div class={ style.WorldName }>
				<div class="font-exo2">
					{ props.title ?? <Locale k={ `WORLD_${norm_wid}` } /> }
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
