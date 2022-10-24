import { Component, createRef, RenderableProps } from "preact";

import * as spine from "@esotericsoftware/spine-webgl";
import Spine from "./Spine";
import SpineCanvas from "./SpineCanvas";

import { AssetsRoot } from "@/libs/Const";

import style from "./style.module.scss";

enum RendererStateEnum {
	None,
	Error,
	Loading,
	OK,
}

export interface RendererProps {
	uid: string;
	google: boolean;

	specialTouch?: boolean;

	face?: string;
	onFaceList?: (list: string[]) => void;

	// /** display collider box? */
	// collider?: boolean;

	// /** hide parts? */
	// hidePart?: boolean;

	// /** hide bg? */
	// hideBg?: boolean;

	// /** hide for dialog? */
	// hideDialog?: boolean;
}

interface RendererState {
	state: RendererStateEnum;
	error: string;

	uid: string;
	google: boolean;
	face: string | undefined;

	width?: number;
	height?: number;
}

const texExt = "webp";

class SpineRenderer extends Component<RendererProps, RendererState>{
	private WrapperRef = createRef<HTMLDivElement>();
	private CanvasRef = createRef<HTMLCanvasElement>();

	private canvas: spine.SpineCanvas | null = null;
	private app: Spine | null = null;

	private updateGoogle: ((value: boolean, prev: boolean) => void) | null = null;
	private updateFace: ((value: string | undefined, prev: string | undefined) => void) | null = null;

	private pointerDownOffset: [number, number] = [0, 0];
	private playTouch: (() => void) | null = null;
	private playSpecialTouch: (() => void) | null = null;

	private facePrefix: string = "";

	constructor (props: Readonly<RendererProps>) {
		super(props);

		if (!props.uid) {
			this.state = {
				state: RendererStateEnum.Error,
				error: "Invalid parameters",

				uid: props.uid,
				google: props.google || false,
				face: props.face,
			};
			return;
		}

		this.state = {
			state: RendererStateEnum.None,
			error: "",

			uid: props.uid,
			google: props.google || false,
			face: props.face,
		};
	}

	componentDidMount () {
		this.init();
	}

	componentDidUpdate () {
		if (this.state.uid !== this.props.uid) {
			this.canvas?.assetManager.dispose();
			this.canvas?.renderer.dispose();

			this.canvas = null;
			this.app = null;
			this.updateFace = null;

			this.setState({
				state: RendererStateEnum.None,
				error: "",

				uid: this.props.uid,
				face: this.props.face,
			}, () => this.init());
			return;
		}

		// isGoogle change
		if (this.props.google !== this.state.google) {
			if (this.updateGoogle)
				this.updateGoogle(this.props.google, this.state.google);
			this.setState({ google: this.props.google });
		}

		// face change
		if (this.props.face !== this.state.face) {
			if (this.updateFace && this.props.face)
				this.updateFace(this.props.face, this.state.face);
			this.setState({ face: this.props.face });
		}
	}

	private init () {
		const { current: canvas } = this.CanvasRef;
		if (!canvas) {
			this.setState({
				state: RendererStateEnum.Error,
				error: "Invalid element",
			});
			return;
		}

		this.setState(
			{ state: RendererStateEnum.Loading },
			() => {
				try {
					this.app = new Spine(
						this.props.uid,
						(app, names) => {
							app.addSkin("skin_base");

							const hasGoogle = names.includes("breast/Censorship");
							if (hasGoogle) {
								if (this.state.google)
									app.addSkin("breast/Censorship");
								else
									app.addSkin("breast/Unedited");
							}

							const faces = names.filter(x => x.startsWith("face/"));
							const list = faces.map(face => face.replace(/^.+_([^_]+)$/, "$1"));

							const prefix = faces[0].replace(/^(.+_)[^_]+$/, "$1");
							this.facePrefix = prefix;

							if (this.props.onFaceList)
								this.props.onFaceList(list);

							this.updateGoogle = (value, prev) => {
								if (!hasGoogle) return;

								if (value) {
									app.removeSkin("breast/Unedited");
									app.addSkin("breast/Censorship");
								} else {
									app.removeSkin("breast/Censorship");
									app.addSkin("breast/Unedited");
								}
							};
							this.updateFace = (value, prev) => {
								app.removeSkin(this.facePrefix + prev);
								app.addSkin(this.facePrefix + value);
							};
							this.playTouch = () => app.play("touch");
							this.playSpecialTouch = () => app.play("touch_special");

							if (this.props.face)
								app.addSkin(this.facePrefix + this.props.face);

							this.setState(
								{ state: RendererStateEnum.OK },
								() => {
									app.updateCamera();
								},
							);
						},
					);
					this.canvas = new SpineCanvas(canvas, {
						app: this.app,
						pathPrefix: `${AssetsRoot}/spine/${this.props.uid}/`,
					});
				} catch (e) {
					this.setState({
						state: RendererStateEnum.Error,
						error: "Spine Error\n\n" + (e instanceof Error ? e.toString() : e),
					});
				}
			},
		);
	}

	render (props: RenderableProps<RendererProps>, state: Readonly<RendererState>) {
		const overlayTexts: Record<RendererStateEnum, string> = {
			[RendererStateEnum.OK]: "",
			[RendererStateEnum.None]: "We still love you",
			[RendererStateEnum.Loading]: "Searching fooling around Efreeti",
			[RendererStateEnum.Error]: `Error - ${state.error}`,
		};

		return <div class={ style.SpineRenderer } ref={ this.WrapperRef }>
			<canvas
				width={ state.width }
				height={ state.height }
				onPointerDown={ e => {
					this.pointerDownOffset = [e.x, e.y];
				} }
				onPointerUp={ e => {
					const dX = Math.abs(e.x - this.pointerDownOffset[0]);
					const dY = Math.abs(e.y - this.pointerDownOffset[1]);

					if (dX < 5 && dY < 5) {
						if (props.specialTouch) {
							if (this.playSpecialTouch)
								this.playSpecialTouch();
						} else {
							if (this.playTouch)
								this.playTouch();
						}
					}
				} }
				ref={ this.CanvasRef }
			/>

			{ state.state !== RendererStateEnum.OK
				? <div class={ style.OverlayText }>
					{ overlayTexts[state.state] }
				</div>
				: <></>
			}
		</div>;
	}
}
export default SpineRenderer;
