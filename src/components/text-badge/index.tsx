import { FunctionalComponent, h } from "preact";

import "./style.scss";

interface TextBadgeProps {
	bg?: string;
	color?: string;
}

const TextBadge: FunctionalComponent<TextBadgeProps> = (props) => <div class="text-badge p-2 text-dark">
	<div class={ `card bg-${props.bg || "secondary"} text-${props.color || "light"}` }>
		<div class="card-body">
			<div class="text-start">{ props.children }</div>
		</div>
	</div>
</div>;
export default TextBadge;
