import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { AssetsRoot } from "@/libs/Const";
import Locale from "@/components/locale";

import "./style.module.scss";

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

	return <div class="card world-item mb-4 bg-dark text-light">
		<div class="card-body">
			<div class="row text-start">
				{ !props.imageless && <div class="col-auto">
					<img src={ `${AssetsRoot}/world/icons/${WorldIcon}.png` } />
				</div> }

				<div class={ `col ${props.center ? "text-center" : ""}` }>
					<div class="world-item-name font-exo2">
						{ props.title ?? <Locale k={ `WORLD_${props.wid}` } /> }
					</div>
					<hr class="my-1" />
					<div class="world-item-desc">
						{ props.description ?? <Locale k={ `WORLD_DESC_${props.wid}` } fallback="" /> }
					</div>
				</div>
				{ props.children && <div class="col-12 mt-3">{ props.children }</div> }
			</div>
		</div>
		{ props.linked && <Link href={ props.link ?? `/worlds/${props.wid}` } class="stretched-link" /> }
	</div>;
};
export default WorldItem;
