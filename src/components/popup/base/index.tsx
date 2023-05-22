import { FunctionalComponent } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { Modal } from "bootstrap";

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

const PopupBase: FunctionalComponent<PopupBaseProps> = (props) => {
	const [uid] = UniqueID("popup-modal-");
	const [instance, setInstance] = useState<Modal | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => { // show/hide
		if (!instance) return;
		// if (!modalRef.current || (modalRef.current as any)._disposed) return;

		if (props.display)
			instance.show();
		else
			instance.hide();
	}, [instance, modalRef.current, props.display]);

	useLayoutEffect(() => { // ref
		if (!modalRef.current) {
			if (instance) instance.dispose();
			setInstance(null);
			return;
		}

		// try to reuse
		const _instance = Modal.getOrCreateInstance(modalRef.current);
		setInstance(_instance);

		return () => {
			if (modalRef.current)
				(modalRef.current as any)._disposed = true;

			if (!instance) return;
			instance.hide();
			setTimeout(() => instance.dispose(), 500);
		};
	}, [modalRef.current]);

	// prevent disposed event call
	const ev = (ref: HTMLDivElement | null, props: PopupBaseProps, event: keyof PopupBaseProps) => {
		const fn = props[event];

		if (!ref || typeof fn !== "function") return;
		if ((ref as any)._disposed) return;
		fn();
	};

	return <div
		class={ `modal fade ${props.class || ""} text-dark` }
		tabIndex={ -1 }
		id={ uid }
		{ ...{
			"onshow.bs.modal": () => ev(modalRef.current, props, "onShow"),
			"onshown.bs.modal": () => ev(modalRef.current, props, "onShown"),
			"onhide.bs.modal": () => ev(modalRef.current, props, "onHide"),
			"onhidden.bs.modal": () => ev(modalRef.current, props, "onHidden"),
		} }
		ref={ modalRef }
	>
		<div class={ `modal-dialog modal-${props.size || "md"} modal-dialog-scrollable modal-dialog-centered` }>
			<div class={ `modal-content ${props.contentClass || ""}` }>
				<div class={ [
					"modal-header",
					props.headerVariant ? `bg-${props.headerVariant}` : "",
					props.headerText ? `text-${props.headerText}` : "",
					props.headerClass || "",
				].filter(x => x).join(" ") }>
					{ props.header
						? <h5 class="modal-title">{ props.header }</h5>
						: <></>
					}
					{ props.headerEnd
						? <div class="modal-title-end" style={ { marginLeft: "auto" } }>
							{ props.headerEnd }
						</div>
						: <></>
					}
					<button
						type="button"
						class={ `btn-close ${props.headerEnd ? "ms-1" : ""}` }
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>
				<div class={ `modal-body ${props.bodyClass || ""}` }>{ props.children }</div>
				{ props.footer
					? <div class={ [
						"modal-footer",
						props.footerVariant ? `bg-${props.footerVariant}` : "",
						props.footerText ? `text-${props.footerText}` : "",
						props.footerClass || "",
					].filter(x => x).join(" ") }>
						{ props.footer }
					</div>
					: <></>
				}
			</div>
		</div>
	</div>;
};
export default PopupBase;
