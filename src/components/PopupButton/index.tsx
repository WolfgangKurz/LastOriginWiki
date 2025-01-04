import preact, { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { createPortal } from "preact/compat";

import PopupBase from "@/components/popup/base";

interface PopupButtonProps {
	content: preact.ComponentChildren;
	header?: preact.VNode;
}
const PopupButton: FunctionalComponent<PopupButtonProps> = (props) => {
	const [display, setDisplay] = useState(false);

	return <>
		{ createPortal(<PopupBase
			display={ display }
			header={ props.header }
			onHidden={ () => setDisplay(false) }
		>
			{ props.content }
		</PopupBase>, document.body) }

		< span onClick={ () => setDisplay(true) }>
			{ props.children }
		</span >
	</>;
};
export default PopupButton;
