import { createRef, Component, RenderableProps } from "preact";

import * as Popper from "@popperjs/core";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface CommentProps {
	display?: string;
	t?: string;

	locale?: boolean;
	loc?: boolean;
}

interface CommentState {
	popperInstance: Popper.Instance | null;
}

export class Comment extends Component<CommentProps, CommentState> {
	private rootReference = createRef<HTMLDivElement>();
	private popupReference = createRef<HTMLDivElement>();

	constructor () {
		super();

		this.state = {
			popperInstance: null,
		};
	}

	componentDidMount () {
		const root = this.rootReference.current;
		const el = this.popupReference.current;

		if (root && el) {
			if (this.state.popperInstance)
				this.state.popperInstance.destroy();

			const instance = Popper.createPopper(root, el, {
				placement: "bottom",
				modifiers: [{
					name: "offset",
					options: { offset: [0, 5] },
				}, {
					name: "preventOverflow",
					options: {
						altAxis: true,
						padding: 5,
					},
				}],
			});
			instance.update();

			this.setState({ popperInstance: instance });
		}
	}
	componentWillUnmount () {
		this.state.popperInstance?.destroy();
	}

	componentDidUpdate () {
		if (this.state.popperInstance)
			this.state.popperInstance.update();
	}

	render (props: RenderableProps<CommentProps>, state: Readonly<CommentState>) {
		const display = props.display || props.t;
		const locale = props.locale || props.loc;

		const _display = display
			? `skill_description_comment_locale_${display}`
			: "skill_description_comment_default";

		const disp = locale
			? <Locale k={ _display } />
			: display;

		return <div class={ style.Comment } ref={ this.rootReference }>
			{ disp }

			<button />
			<div class={ style.CommentPopup } ref={ this.popupReference }>
				<h2>{ disp }</h2>
				{ props.children }
			</div>
		</div>;
	}
}
