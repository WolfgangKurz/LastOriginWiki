import { Component, createRef, JSX, RenderableProps } from "preact";

interface Position {
	x: number;
	y: number;
}

interface PinchProps {
	minScale?: number;
	maxScale?: number;
}

interface PinchState {
	x: number;
	y: number;
	scale: number;
}

class Pinch extends Component<PinchProps, PinchState> {
	private evCache: PointerEvent[] = [];
	private prevDiff: number = 0;
	private prevPos: Position = { x: 0, y: 0 };

	private ContainerRef = createRef<HTMLDivElement>();

	constructor (props: Readonly<PinchProps>) {
		super(props);

		this.state = {
			x: 0,
			y: 0,
			scale: 1,
		};
	}

	PointerDown (ev: PointerEvent) {
		ev.stopImmediatePropagation();
		ev.preventDefault();

		this.evCache.push(ev);

		if (this.evCache.length === 1)
			this.prevPos = { x: ev.x, y: ev.y };
	}
	PointerMove (ev: PointerEvent) {
		ev.stopImmediatePropagation();
		ev.preventDefault();

		const { evCache, prevDiff } = this;
		const { current: ref } = this.ContainerRef;

		for (let i = 0; i < evCache.length; i++) {
			if (ev.pointerId === evCache[i].pointerId) {
				evCache[i] = ev;
				break;
			}
		}

		if (!ref) return;

		if (evCache.length === 1) {
			const diff: Position = {
				x: evCache[0].x - this.prevPos.x,
				y: evCache[0].y - this.prevPos.y,
			};

			this.setState({
				x: this.state.x + diff.x,
				y: this.state.y + diff.y,
			});
			this.prevPos = {
				x: evCache[0].x,
				y: evCache[0].y,
			};
		} else if (evCache.length === 2) {
			const dX = Math.abs(evCache[0].clientX - evCache[1].clientX);
			const dY = Math.abs(evCache[0].clientY - evCache[1].clientY);
			const curDiff = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
			// const scale = ref.clientWidth /

			if (prevDiff > 0) {
				let scale = this.state.scale + (curDiff - prevDiff) / 250;

				if (this.props.minScale !== undefined) scale = Math.max(this.props.minScale, scale);
				if (this.props.maxScale !== undefined) scale = Math.min(this.props.maxScale, scale);

				this.setState({ scale });
			}

			this.prevDiff = curDiff;
		}
	}
	PointerUp (ev: PointerEvent) {
		ev.stopImmediatePropagation();
		ev.preventDefault();

		const idx = this.evCache.findIndex(e => ev.pointerId === e.pointerId);
		if (idx >= 0) this.evCache.splice(idx, 1);

		if (this.evCache.length < 2)
			this.prevDiff = -1;
	}
	Wheel (ev: WheelEvent) {
		ev.stopImmediatePropagation();
		ev.preventDefault();

		this.setState({
			scale: Math.min(
				Math.max(
					0.25,
					this.state.scale - (ev.deltaY / 1000),
				),
				3,
			),
		});
	}

	Style (): JSX.CSSProperties {
		const { x, y, scale } = this.state;
		return {
			transform: `translate3d(${x}px,${y}px,0) scale3d(${scale},${scale},1)`,
			transformOrigin: "center",
		};
	}

	render (props: RenderableProps<PinchProps>, state: Readonly<PinchState>) {
		return <div
			class="Pinch"
			onPointerDown={ (e) => this.PointerDown(e) }
			onPointerMove={ (e) => this.PointerMove(e) }
			onPointerUp={ (e) => this.PointerUp(e) }
			onPointerCancel={ (e) => this.PointerUp(e) }
			onPointerOut={ (e) => this.PointerUp(e) }
			onPointerLeave={ (e) => this.PointerUp(e) }
			onWheel={ (e) => this.Wheel(e) }
			ref={ this.ContainerRef }
		>
			<div
				style={ {
					width: "100%",
					height: "100%",
					// overflow: "hidden",
					touchAction: "none",
					...this.Style(),
				} }
			>
				{ props.children }
			</div>
		</div>;
	}
}
export default Pinch;
