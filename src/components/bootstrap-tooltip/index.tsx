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

	/** instance created by this component, element can be replaced while component is kept */
	private tooltip: Tooltip | null = null;
	private tooltipEl: HTMLSpanElement | null = null;
	/** config of `tooltip`, recreated only when changed */
	private tooltipKey = "";

	constructor () {
		super();
		this.el = createRef();
	}

	/**
	 * Disposes instance created by this component.
	 * `dispose` removes tip immediately (`hide` before `dispose` leaves pending callback on disposed instance),
	 * and works even if element is already detached.
	 */
	private disposeTooltip (): void {
		if (this.tooltip) {
			const t = this.tooltip as unknown as { _activeTrigger: Record<string, boolean> | null; };
			this.tooltip.dispose();
			// Bootstrap 5.3: completion callback of `hide` transition still runs after `dispose`, and reads
			// nulled `_activeTrigger` (TypeError). Marked as active to make it return early.
			t._activeTrigger = { manual: true };
			this.tooltip = null;
		}
		this.tooltipEl = null;
		this.tooltipKey = "";
	}

	updateBootstrap (): void {
		const el = this.el.current;
		const content = this.props.content && !Array.isArray(this.props.content) // invalid child
			? render(this.props.content)
			: null;
		const key = content === null
			? ""
			: JSON.stringify([content, this.props.placement, this.props.tooltipClass]);

		// unrelated re-render, keep instance (and visible tip)
		if (this.tooltip && el === this.tooltipEl && key === this.tooltipKey) return;

		this.disposeTooltip();
		if (!el || content === null) return;

		// instance created by others (should not exist), only one instance per element is allowed
		Tooltip.getInstance(el)?.dispose();

		this.tooltip = new Tooltip(el, {
			// container: "body",
			// boundary: "window",
			customClass: this.props.tooltipClass ?? "",
			delay: 10,
			html: true,
			placement: this.props.placement || "bottom",
			title: content,
			sanitize: false,
		});
		this.tooltipEl = el;
		this.tooltipKey = key;
	}

	componentDidMount (): void {
		this.updateBootstrap();
	}

	componentDidUpdate (): void {
		this.updateBootstrap();
	}

	componentWillUnmount (): void {
		this.disposeTooltip();
	}

	render (props?: RenderableProps<BootstrapTooltipProps>): preact.VNode {
		return <span class={ props?.class } ref={ this.el }>{ props?.children }</span>;
	}
}
export default BootstrapTooltip;
