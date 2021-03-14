import { Component, createRef, Fragment, FunctionalComponent, h, Ref, RefObject } from "preact";
import render from "preact-render-to-string";

import bootstrap from "bootstrap";

import { UniqueID } from "@/libs/Functions";

import "./style.scss";
import { useRef } from "preact/hooks";

interface BootstrapTooltipProps {
	placement?: "top" | "left" | "right" | "bottom";
	content?: preact.VNode;
}

class BootstrapTooltip extends Component<BootstrapTooltipProps> {
	private uid: string;
	private el: RefObject<HTMLSpanElement>;

	constructor () {
		super();
		this.uid = UniqueID("bootstrap-tooltip-");
		this.el = createRef();
	}

	updateBootstrap (): void {
		const el = this.el.current;
		if (el) {
			const content = render(this.props.content || <Fragment />);

			const instance = bootstrap.Tooltip.getInstance(el);
			if (instance) instance.hide();

			new bootstrap.Tooltip(el, {
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
			const instance = bootstrap.Tooltip.getInstance(this.el.current);
			if (instance) instance.hide();
		}
	}

	render (): preact.VNode {
		return <span ref={ this.el }>{ this.props.children }</span>;
	}
}
export default BootstrapTooltip;
