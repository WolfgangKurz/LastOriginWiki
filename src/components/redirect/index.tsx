import { Component, RenderableProps } from "preact";
import { route } from "preact-router";

interface RedirectProps {
	which?: (props: Record<string, any>) => boolean;
	to: string | ((props: Record<string, any>) => string);
}

export default class Redirect extends Component<RedirectProps> {
	private Update (): void {
		const props = (typeof this.props.to !== "string") || this.props.which
			? ((): Record<string, any> => {
				const reserved = ["children", "ref", "key", "jsx", "to", "which"];
				const ret: Record<string, any> = {};
				for (const key in this.props) {
					if (reserved.includes(key)) continue;
					ret[key] = this.props[key as keyof RenderableProps<RedirectProps>];
				}
				return ret;
			})()
			: {};

		if (this.props.which && !this.props.which(props)) return;

		if (typeof this.props.to === "string")
			route(this.props.to, true);
		else
			route(this.props.to(props), true);
	}

	componentWillMount (): void {
		this.Update();
	}

	componentWillReceiveProps (): void {
		this.Update();
	}

	render (): preact.VNode | null {
		return null;
	}
}
