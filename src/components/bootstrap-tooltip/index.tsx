import { Component, createRef, Fragment, h, RefObject } from "preact";
import render from "preact-render-to-string";

import { Tooltip } from "bootstrap";

import { UniqueID } from "@/libs/Functions";

import "./style.scss";

interface BootstrapTooltipProps {
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
			const content = render(this.props.content || <Fragment />);

			const instance = Tooltip.getInstance(el);
			if (instance) instance.hide();

			new Tooltip(el, {
				// container: "body",
				// boundary: "window",
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
			if (instance) instance.hide();
		}
	}

	render (): preact.VNode {
		return <span ref={ this.el }>{ this.props.children }</span>;
	}
}
export default BootstrapTooltip;
