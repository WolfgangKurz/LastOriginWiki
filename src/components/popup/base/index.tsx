import { Modal } from "bootstrap";
import { Component } from "preact";

import { UniqueID } from "@/libs/Functions";

interface PopupBaseProps {
	class?: string;
	contentClass?: string;

	display?: boolean;
	size?: "sm" | "md" | "lg" | "xl";

	header?: preact.VNode;
	headerClass?: string;
	headerVariant?: string;
	headerText?: string;

	headerEnd?: preact.VNode;

	bodyClass?: string;

	footer?: preact.VNode;
	footerClass?: string;
	footerVariant?: string;
	footerText?: string;

	onShow?: () => void;
	onShown?: () => void;
	onHide?: () => void;
	onHidden?: () => void;
}

export default class PopupBase extends Component<PopupBaseProps> {
	private uid: string = UniqueID("popup-modal-");

	private instance: Modal | null = null;
	private disposing = false;

	updateBootstrap (): void {
		if (!this.instance) {
			const el = document.querySelector(`#${this.uid}`);
			if (!el) return;

			const instance = Modal.getInstance(el) || new Modal(el);
			if (!instance) return;
			this.instance = instance;
		}

		if (this.props.display !== undefined && this.props.display)
			this.instance.show();
		else
			this.instance.hide();
	}

	componentDidMount (): void {
		this.updateBootstrap();
	}

	componentDidUpdate (): void {
		this.updateBootstrap();
	}

	componentWillUnmount (): void {
		this.disposing = true;
		if (!this.instance) return;
		this.instance.hide();
		// this.instance.dispose();
	}

	render (): preact.VNode {
		// if (!this.props.display) return <></>;

		return <div
			class={ `modal fade ${this.props.class || ""} text-dark` }
			tabIndex={ -1 }
			id={ this.uid }
			{ ...{
				"onshow.bs.modal": (): void => void (!this.disposing && this.props.onShow && this.props.onShow()),
				"onshown.bs.modal": (): void => void (!this.disposing && this.props.onShown && this.props.onShown()),
				"onhide.bs.modal": (): void => void (!this.disposing && this.props.onHide && this.props.onHide()),
				"onhidden.bs.modal": (): void => void (!this.disposing && this.props.onHidden && this.props.onHidden()),
			} }
		>
			<div class={ `modal-dialog modal-${this.props.size || "md"} modal-dialog-scrollable modal-dialog-centered` }>
				<div class={ `modal-content ${this.props.contentClass || ""}` }>
					<div class={ [
						"modal-header",
						this.props.headerVariant ? `bg-${this.props.headerVariant}` : "",
						this.props.headerText ? `text-${this.props.headerText}` : "",
						this.props.headerClass || "",
					].filter(x => x).join(" ") }>
						{ this.props.header
							? <h5 class="modal-title">{ this.props.header }</h5>
							: <></>
						}
						{ this.props.headerEnd
							? <div class="modal-title-end" style={ { marginLeft: "auto" } }>
								{ this.props.headerEnd }
							</div>
							: <></>
						}
						<button
							type="button"
							class={ `btn-close ${this.props.headerEnd ? "ms-1" : ""}` }
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div class={ `modal-body ${this.props.bodyClass || ""}` }>{ this.props.children }</div>
					{ this.props.footer
						? <div class={ [
							"modal-footer",
							this.props.footerVariant ? `bg-${this.props.footerVariant}` : "",
							this.props.footerText ? `text-${this.props.footerText}` : "",
							this.props.footerClass || "",
						].filter(x => x).join(" ") }>
							{ this.props.footer }
						</div>
						: <></>
					}
				</div>
			</div>
		</div>;
	}
}
