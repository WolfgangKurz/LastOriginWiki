import { Component, RenderableProps } from "preact";
import { route } from "preact-router";

interface RedirectProps {
	to: string | ((props: Record<string, any>) => string);
}

export default class Redirect extends Component<RedirectProps> {
	componentWillMount (): void {
		if (typeof this.props.to === "string")
			route(this.props.to, true);
		else {
			const props = ((): Record<string, any> => {
				const reserved = ["children", "ref", "key", "jsx", "to"];
				const ret: Record<string, any> = {};
				for (const key in this.props) {
					if (reserved.includes(key)) continue;
					ret[key] = this.props[key as keyof RenderableProps<RedirectProps>];
				}
				return ret;
			})();
			route(this.props.to(props), true);
		}
	}

	render (): preact.VNode | null {
		return null;
	}
}
