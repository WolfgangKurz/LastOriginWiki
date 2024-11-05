import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import * as LAYERS from "@pixi/layers";
import { Animation } from "@esotericsoftware/spine-pixi";

import ResizeObserver from "resize-observer-polyfill";

import { UnitSkinEntity } from "@/types/DB/Unit";

import { IsDev } from "@/libs/Const.1";

import Shared from "@/components/pixi/Shared";
import BaseScreenInputFilter from "@/components/pixi/shaders/base";

import FadeContainer from "@/components/pixi/FadeContainer";
import PixiSpineModel from "@/components/pixi/PixiSpineModel";
import Pixi2DModel from "@/components/pixi/Pixi2DModel";
import PixiVideoModel from "@/components/pixi/PixiVideoModel";

import MixedModel from "./MixedModel";

import style from "./style.module.scss";

interface PixiState {
	renderer: PIXI.Renderer;
	ticker: PIXI.Ticker;
	vp: Viewport;
}

interface PixiViewProps {
	type: "mixed" | "spine" | "2dmodel" | "video" | "none";
	U2DModelMetadata: UnitSkinEntity["metadata"];

	uid: string;
	vid: string;
	google: boolean;
	damaged: boolean;

	hidePart: boolean;
	hideBG: boolean;
	displayTouchCollider: boolean;

	face: string;
	onFaceList?: (list: string[], prefix: string) => void;

	onCameraBoundary?: (available: boolean) => void;
}

const PixiView: FunctionalComponent<PixiViewProps> = (props) => {
	const [pixi, setPixi] = useState<PixiState | null>(null);
	const [surface, setSurface] = useState<PIXI.Container | null>(null);

	const [char, setChar] = useState<PixiSpineModel | Pixi2DModel | MixedModel | PixiVideoModel | null>(null);
	const playerRef = useRef<HTMLDivElement>(null);

	const [animInfo, setAnimInfo] = useState<Animation[] | false>(false);
	const [animTime, setAnimTime] = useState(0);
	const [animationIndicator, setAnimationIndicator] = useState<FadeContainer | null>(null);
	const [animationIndicatorGraphics, setAnimationIndicatorGraphics] = useState<PIXI.Graphics | null>(null);

	const uid = useMemo(
		() => (props.type === "spine" || props.type === "video") ? props.uid : `2DModel_${props.uid}`,
		[props.type, props.uid],
	);

	useEffect(() => { // initialize
		let renderer: PIXI.Renderer | null = null;
		let ticker: PIXI.Ticker | null = null;

		if (playerRef.current) {
			renderer = new PIXI.Renderer({
				antialias: true,
				backgroundColor: 0x000000,
				backgroundAlpha: 0,

				width: 1,
				height: 1,
				// resolution: window.devicePixelRatio || 1,
				autoDensity: true,
				powerPreference: "low-power",

				// eventMode: "passive",
				eventFeatures: {
					globalMove: false,
					move: true,
					click: true,
					wheel: true,
				},
			});
			ticker = new PIXI.Ticker();
			ticker.maxFPS = 60;

			const screen = new PIXI.Sprite(Shared.instance.renderTexture);
			screen.eventMode = "none";

			const stage = new LAYERS.Stage();

			if (IsDev) {
				globalThis.__PIXI_STAGE__ = stage;
				globalThis.__PIXI_RENDERER__ = renderer;
			}

			const vp = new Viewport({
				ticker,
				events: renderer.events,
				forceHitArea: new PIXI.Rectangle(
					-100000,
					-100000,
					200000,
					200000
				),
			});
			vp
				.drag()
				.pinch().wheel()
				.clampZoom({
					minScale: 0.5,
					maxScale: 4,
				});
			stage.addChild(vp);

			const state: PixiState = {
				renderer,
				ticker,
				vp,
			};
			setPixi(state);

			Shared.instance.renderer = renderer;

			const _empty = new PIXI.Container();

			ticker.add(() => {
				if (!renderer) return;
				if (Shared.instance.inRendering) return;

				const rt = Shared.instance.renderTexture;
				renderer.render(_empty, { renderTexture: Shared.instance.renderTexture });

				// TODO: Optimize draw call
				// * [obj1] - [obj2] - [obj3] - [filter,obj4] - [obj5] - [obj6]
				// *   into
				// * [obj1, obj2, obj3] - [filter,obj4] - [obj5, obj6]
				Shared.RenderableObjects(stage)
					.forEach(o => {
						if (o.parent) o.updateTransform();

						const _visibles: PIXI.DisplayObject[] = [];
						if (o.children) {
							for (const c of o.children) {
								if (c instanceof PIXI.DisplayObject && c.visible) {
									c.visible = false;
									_visibles.push(c);
								}
							}
						}

						renderer!.render(o, {
							clear: false,
							renderTexture: rt,
							skipUpdateTransform: true,
						});

						_visibles.forEach(c => c.visible = true);
					});

				renderer.render(stage, { renderTexture: rt });

				// screen.scale.set(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
				renderer.render(screen);

				surface.renderable = false;
				renderer.render(stage, {
					clear: false, // keep renderTexture to screen rendered result
					skipUpdateTransform: true, // already updated at first-pass
				});
				surface.renderable = true;
			}, PIXI.UPDATE_PRIORITY.LOW);
			ticker.start();

			const animIndi = new FadeContainer();
			animIndi.name = "[Animation Indicator]";
			animIndi.x = 30;
			animIndi.y = 30;
			stage.addChild(animIndi);
			setAnimationIndicator(animIndi);

			const animIndiG = new PIXI.Graphics();
			animIndi.addChild(animIndiG);
			setAnimationIndicatorGraphics(animIndiG);

			const surface = new PIXI.Container();
			vp.addChild(surface);
			// stage.addChild(surface);
			setSurface(surface);

			playerRef.current.appendChild(renderer.view as HTMLCanvasElement);
		}

		return () => {
			if (char) {
				char.destroy();
				setChar(null);
			}

			if (ticker) ticker.destroy();
			if (renderer) renderer.destroy(true);
			Shared.instance.renderer = null;
			setPixi(null);
		};
	}, []);

	useEffect(() => {
		let ob: ResizeObserver | null = null;

		if (playerRef.current && surface) {
			ob = new ResizeObserver(e => {
				const rc = (e[0].contentRect as DOMRectReadOnly);

				const r = window.devicePixelRatio || 1;
				Shared.instance.resize(rc.width * r, rc.height * r);

				if (pixi) pixi.renderer.resize(rc.width * r, rc.height * r);
				surface.position.set(rc.width * r / 2, rc.height * r / 2);
				surface.scale.set(rc.height * r / 720);

				animationIndicator?.position.set(30, 30);
			});
			ob.observe(playerRef.current);
		}

		return () => ob?.disconnect();
	}, [playerRef.current, pixi, surface]);

	useEffect(() => {
		if (surface) {
			const _uid = props.type === "spine" || props.type === "mixed"
				? uid
				: props.type === "video"
					? props.vid
					: (props.google ? "G/" : "O/") + props.U2DModelMetadata[props.damaged ? "2dmodel_dam" : "2dmodel"]!;

			let _char: PixiSpineModel | Pixi2DModel | MixedModel | PixiVideoModel | null = char as typeof _char;
			if (_char && _char.model !== _uid) {
				_char.destroy();
				_char = null;
			}

			if (_char === null) {
				if (props.type === "mixed" || props.type === "spine") {
					if (props.type === "mixed")
						_char = new MixedModel(
							uid,
							(props.google ? "G/" : "O/") + props.U2DModelMetadata[props.damaged ? "2dmodel_dam" : "2dmodel"]!,
						);
					else
						_char = new PixiSpineModel(_uid);

					_char.on("normal-touch", (m) => {
						const r = (m as PixiSpineModel | MixedModel).play("Tep_1");
						if (r) {
							setAnimTime(Date.now());
							setAnimInfo(r);
						}
					});
					_char.on("special-touch", (m) => {
						const r = (m as PixiSpineModel | MixedModel).play("breast");
						if (r) {
							setAnimTime(Date.now());
							setAnimInfo(r);
						}
					});
					_char.on("animation-end", () => {
						setAnimInfo(false);
						setAnimTime(0);
					});
				} else if (props.type === "2dmodel")
					_char = new Pixi2DModel(_uid);
				else if (props.type === "video")
					_char = new PixiVideoModel(_uid);

				if (_char) {
					_char.on("facelist", (list, prefix) => {
						if (props.onFaceList)
							props.onFaceList(list, prefix);
					});
					_char.on("cameraBoundary", v => {
						if (props.onCameraBoundary)
							props.onCameraBoundary(v);
					});

					setChar(_char);
				}
			}

			if (_char instanceof PixiSpineModel || _char instanceof MixedModel)
				_char.setGoogle(props.google);

			if (_char) {
				_char.position.set(0, 0);//props.spine ? 0 : 360);
				surface.addChild(_char);
			}
		}
	}, [props.type, props.uid, props.vid, props.google, props.damaged, surface]);

	useEffect(() => {
		if (char && ("setFace" in char)) { // type-guard not work with instanceof
			if (props.face)
				char.setFace(props.face);

			char.setHidePart(props.hidePart);
			char.setHideBG(props.hideBG);
			char.setColliderVisible(props.displayTouchCollider);
		}
	}, [char, props.hidePart, props.hideBG, props.face, props.displayTouchCollider]);

	useEffect(() => {
		const fn = () => {
			if (!animationIndicator || !animationIndicatorGraphics || !animInfo || animTime === 0) return;

			const duration = animInfo.map(r => r.duration).reduce((p, c) => c > p ? c : p, 0);
			// const progress = Math.min(1, elapsed / animInfo.map(r => r.duration).sort((a, b) => b - a)[0]);
			const progress = Math.min(
				(
					char instanceof PixiSpineModel || char instanceof MixedModel
						? char.currentAnimationTime() ?? 0
						: (/* elapsed by browser time */ (Date.now() - animTime) / 1000)
				) / duration,
				1,
			);

			const g = animationIndicatorGraphics;
			if (animInfo) {
				g.clear();

				const points: Array<{ x: number; y: number; }> = [];
				const deg = progress * 360;
				for (let i = 0; i <= deg; i++) {
					const rad = (i - 90) * Math.PI / 180;
					points.push({
						x: Math.cos(rad) * 15,
						y: Math.sin(rad) * 15,
					});
				}
				for (let i = 0; i <= deg; i++) {
					const rad = ((deg - i) - 90) * Math.PI / 180;
					points.push({
						x: Math.cos(rad) * 8,
						y: Math.sin(rad) * 8,
					});
				}

				g.beginFill(0xffffff);
				g.drawPolygon(points);
				g.endFill();
			}
		};

		if (animationIndicator) {
			if (!!animInfo)
				animationIndicator.fadeIn(.5);
			else
				animationIndicator.fadeOut(.5);
		}

		if (pixi && animInfo) pixi.ticker.add(fn);
		return () => {
			if (pixi && animInfo) {
				try {
					pixi.ticker.remove(fn);
				} catch { }
			}
		};
	}, [pixi, animInfo]);

	return <div
		class={ style.PixiView }
		style={ { transform: `scale(${1 / (window.devicePixelRatio || 1)})` } }

		onWheel={ e => e.preventDefault() }

		ref={ playerRef }
	/>;
};
export default PixiView;
