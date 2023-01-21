import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

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

	/** hide parts? */
	hidePart?: boolean;

	// /** hide bg? */
	// hideBg?: boolean;

	// /** hide for dialog? */
	// hideDialog?: boolean;
}

const touchNameList = ["touch", "touth"];
const specialNameList = ["special"];

const SpineRenderer: FunctionalComponent<RendererProps> = (props) => {
	const WrapperRef = useRef<HTMLDivElement>(null);
	const CanvasRef = useRef<HTMLCanvasElement>(null);
	const AnimCircleRef = useRef<HTMLDivElement>(null);

	const canvas = useRef<spine.SpineCanvas | null>(null);
	const app = useRef<Spine | null>(null);

	const [pointerDownOffset, setPointerDownOffset] = useState<[number, number]>([0, 0]);

	const [hasGoogle, setHasGoogle] = useState(false);
	const [skinList, setSkinList] = useState<string[]>([]);
	const [lastFace, setLastFace] = useState("");
	const [facePrefix, setFacePrefix] = useState("");

	const [state, setState] = useState<RendererStateEnum>(RendererStateEnum.None);
	const [error, setError] = useState<string>("");

	function Initialize () {
		const { current: canvas } = CanvasRef;
		if (!canvas) {
			setState(RendererStateEnum.Error);
			setError("Invalid element");
			return;
		}

		setSkinList([]);
		setLastFace("");
		setState(RendererStateEnum.Loading);
	}

	function applyAnimCircle (duration: number) {
		const { current: el } = AnimCircleRef;
		if (!el) return;
		if (el.style.opacity === "1") return;

		el.style.maskImage = "conic-gradient(transparent, transparent)";
		el.style.opacity = "1";

		const begin = Date.now();
		let frameId = 0;

		const frame = () => {
			const p = (Date.now() - begin) / 10 / duration;
			const progress = Math.min(p, 99.99);
			el.style.maskImage = `conic-gradient(#fff ${progress}%, transparent ${progress + 0.01}%)`;

			if (p >= 100) {
				el.style.opacity = "";
				el.style.maskImage = "";
			} else
				frameId = requestAnimationFrame(frame);
		};
		frameId = requestAnimationFrame(frame);
	}

	function updateGoogle () {
		const _app = app.current;
		if (!_app) return;

		if (!hasGoogle) return;


		if (props.google) {
			_app.removeSkin("breast/Unedited");
			_app.addSkin("breast/Censorship");
		} else {
			_app.removeSkin("breast/Censorship");
			_app.addSkin("breast/Unedited");
		}
	}
	function updateFace () {
		const _app = app.current;
		if (!_app) return;

		if (lastFace) _app.removeSkin(facePrefix + lastFace);
		_app.addSkin(facePrefix + props.face);
		setLastFace(props.face || "");
	}
	function updateDecorations () {
		const _app = app.current;
		if (!_app) return;

		skinList.filter(x => x.startsWith("decoration"))
			.forEach(skin => props.hidePart ? _app.removeSkin(skin) : _app.addSkin(skin));
	}

	function playTouch (isSpecial: boolean) {
		const _app = app.current;
		if (!_app) return;

		const anims = _app.animationList();
		const anim = anims.filter(x => {
			const lowerName = x.name.toLowerCase();
			return touchNameList.some(r => lowerName.includes(r)) &&
				(isSpecial
					? specialNameList.some(r => lowerName.includes(r))
					: !specialNameList.some(r => lowerName.includes(r))
				);
		})[0];
		if (anim) {
			if (_app.play(anim))
				applyAnimCircle(anim.duration);
		}
	}

	useEffect(() => {
		if (!props.uid) {
			setState(RendererStateEnum.Error);
			setError("Invalid uid parameter");
		} else {
			if (canvas.current) {
				canvas.current.assetManager.dispose();
				canvas.current.renderer.dispose();
			}

			canvas.current = null;
			app.current = null;

			setState(RendererStateEnum.None);
			setError("");

			Initialize();
		}
	}, [props.uid]);

	useEffect(() => updateGoogle(), [props.google]);
	useEffect(() => updateFace(), [props.face]);
	useEffect(() => updateDecorations(), [props.hidePart]);

	useEffect(() => {
		if (state === RendererStateEnum.Loading) { // from Initialize
			const { current: canvasEl } = CanvasRef;
			if (!canvasEl) return;

			try {
				app.current = new Spine(
					props.uid,
					(app, names) => {
						app.addSkin("skin_base");

						setSkinList(names);
						names.filter(x => x.startsWith("decoration"))
							.forEach(skin => app.addSkin(skin));

						const _hasGoogle = names.includes("breast/Censorship");
						setHasGoogle(_hasGoogle);
						if (_hasGoogle) {
							if (props.google)
								app.addSkin("breast/Censorship");
							else
								app.addSkin("breast/Unedited");
						}

						const faces = names.filter(x => x.startsWith("face/"));
						const list = faces.map(face => face.replace(/^.+_([^_]+)$/, "$1"));

						const prefix = faces[0].replace(/^(.+_)[^_]+$/, "$1");
						setFacePrefix(prefix);

						if (props.onFaceList)
							props.onFaceList(list);

						if (props.face)
							app.addSkin(prefix + props.face);

						setState(RendererStateEnum.OK);
					},
				);

				canvas.current = new SpineCanvas(canvasEl, {
					app: app.current,
					pathPrefix: `${AssetsRoot}/spine/${props.uid}/`,
				});
			} catch (e) {
				setState(RendererStateEnum.Error);
				setError("Spine Error\n\n" + (e instanceof Error ? e.toString() : e));
			}
		} else if (state === RendererStateEnum.OK) {
			if (app.current)
				app.current.updateCamera();
		}
	}, [state]);

	const overlayTexts: Record<RendererStateEnum, string> = {
		[RendererStateEnum.OK]: "",
		[RendererStateEnum.None]: "We still love you",
		[RendererStateEnum.Loading]: "Finding fooling around Efreeti",
		[RendererStateEnum.Error]: `Error - ${error}`,
	};

	return <div class={ style.SpineRenderer } ref={ WrapperRef }>
		<canvas
			onPointerDown={ e => setPointerDownOffset([e.x, e.y]) }
			onPointerUp={ e => {
				const dX = Math.abs(e.x - pointerDownOffset[0]);
				const dY = Math.abs(e.y - pointerDownOffset[1]);

				if (dX < 5 && dY < 5) {
					playTouch(!!props.specialTouch);
				}
			} }
			ref={ CanvasRef }
		/>

		{ state !== RendererStateEnum.OK
			? <div class={ style.OverlayText }>
				{ overlayTexts[state] }
			</div>
			: <></>
		}

		<div
			class={ style.AnimationCircle }
			ref={ AnimCircleRef }
		/>
	</div>;
};
export default SpineRenderer;
