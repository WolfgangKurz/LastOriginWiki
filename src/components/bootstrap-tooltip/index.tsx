import { Component, createRef, RefObject, RenderableProps } from "preact";
import render from "preact-render-to-string";

import { Tooltip } from "bootstrap";

import "./style.scss";

interface BootstrapTooltipProps {
	class?: string;
	tooltipClass?: string;
	placement?: "top" | "left" | "right" | "bottom";
	content?: preact.VNode;
}

class BootstrapTooltip extends Component<BootstrapTooltipProps> {
	private el: RefObject<HTMLSpanElement>;

	constructor () {
		super();
		this.el = createRef();
	}

	updateBootstrap (): void {
		const el = this.el.current;
		if (el) {
			const instance = Tooltip.getInstance(el);
			if (instance) instance.hide();

			if (!this.props.content || Array.isArray(this.props.content))
				return; // invalid child

			const content = render(this.props.content || <></>);

			new Tooltip(el, {
				// container: "body",
				// boundary: "window",
				customClass: this.props.tooltipClass,
				delay: 10,
				html: true,
				placement: this.props.placement || "bottom",
				title: content,
				sanitize: false,
			});
		}
	}

	componentDidMount (): void {
		this.updateBootstrap();
	}

	componentDidUpdate (): void {
		this.updateBootstrap();
	}

	componentWillUnmount (): void {
		if (this.el.current) {
			const instance = Tooltip.getInstance(this.el.current);
			if (instance) {
				instance.hide();
				instance.dispose();
			}
		}
	}

	render (props?: RenderableProps<BootstrapTooltipProps>): preact.VNode {
		return <span class={ props?.class } ref={ this.el }>{ props?.children }</span>;
	}
}
export default BootstrapTooltip;
