import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import * as LAYERS from "@pixi/layers";
import { Animation } from "@esotericsoftware/spine-pixi";

import ResizeObserver from "resize-observer-polyfill";

import { UnitSkinEntity } from "@/types/DB/Unit";

import { IsDev } from "@/libs/Const.1";

import PixiSpineModel from "@/components/pixi/PixiSpineModel";
import Pixi2DModel from "@/components/pixi/Pixi2DModel";
import FadeContainer from "@/components/pixi/FadeContainer";

import style from "./style.module.scss";

interface PixiViewProps {
	spine: boolean;
	U2DModelMetadata: UnitSkinEntity["metadata"];

	uid: string;
	google: boolean;
	damaged: boolean;

	hidePart: boolean;
	hideBG: boolean;
	displayTouchCollider: boolean;

	face: string;
	onFaceList?: (list: string[], prefix: string) => void;
}

const PixiView: FunctionalComponent<PixiViewProps> = (props) => {
	const [app, setApp] = useState<PIXI.Application<HTMLCanvasElement> | null>(null);
	const [surface, setSurface] = useState<PIXI.Container | null>(null);

	const [char, setChar] = useState<PixiSpineModel | Pixi2DModel | null>(null);
	const playerRef = useRef<HTMLDivElement>(null);

	const [animInfo, setAnimInfo] = useState<Animation[] | false>(false);
	const [animTime, setAnimTime] = useState(0);
	const [animationIndicator, setAnimationIndicator] = useState<FadeContainer | null>(null);
	const [animationIndicatorGraphics, setAnimationIndicatorGraphics] = useState<PIXI.Graphics | null>(null);

	const uid = useMemo(
		() => props.spine ? props.uid : `2DModel_${props.uid}`,
		[props.spine, props.uid],
	);

	useEffect(() => { // initialize
		let app: PIXI.Application<HTMLCanvasElement> | null = null;

		if (playerRef.current) {
			app = new PIXI.Application({
				antialias: true,
				backgroundColor: 0x000000,
				backgroundAlpha: 0,

				width: 1,
				height: 1,
				resolution: window.devicePixelRatio || 1,
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
			app.ticker.maxFPS = 60;

			if (IsDev)
				globalThis.__PIXI_APP__ = app;
			setApp(app);

			app.stage = new LAYERS.Stage();

			const vp = new Viewport({
				ticker: app.ticker,
				events: app.renderer.events,
			});
			app.stage.addChild(vp);

			const animIndi = new FadeContainer();
			animIndi.name = "[Animation Indicator]";
			animIndi.x = 94 + 30;
			animIndi.y = 0;
			app.stage.addChild(animIndi);
			setAnimationIndicator(animIndi);

			const animIndiG = new PIXI.Graphics();
			animIndi.addChild(animIndiG);
			setAnimationIndicatorGraphics(animIndiG);

			vp.drag().pinch().wheel().clampZoom({
				minScale: 0.5,
				maxScale: 4,
			});

			const surface = new PIXI.Container();
			vp.addChild(surface);
			setSurface(surface);

			playerRef.current.appendChild(app.view);
		}

		return () => {
			if (char) {
				char.destroy();
				setChar(null);
			}

			if (app) app.destroy(true);
		};
	}, []);

	useEffect(() => {
		let ob: ResizeObserver | null = null;

		if (playerRef.current && surface) {
			ob = new ResizeObserver(e => {
				const rc = (e[0].contentRect as DOMRectReadOnly);

				if (app) {
					app.renderer.resolution = window.devicePixelRatio || 1;
					app.renderer.resize(rc.width, rc.height);
				}
				surface.position.set(rc.width / 2, rc.height / 2);
				surface.scale.set(rc.height / 720);

				animationIndicator?.position.set(94 + 15, rc.height - 14 - 15);
			});
			ob.observe(playerRef.current);
		}

		return () => ob?.disconnect();
	}, [playerRef.current, surface]);

	useEffect(() => {
		if (surface) {
			const _uid = props.spine
				? uid
				: (props.google ? "G/" : "O/") + props.U2DModelMetadata[props.damaged ? "2dmodel_dam" : "2dmodel"]!;

			let _char: PixiSpineModel | Pixi2DModel | null = char as typeof _char;
			if (_char && _char.model !== _uid) {
				_char.destroy();
				_char = null;
			}

			if (_char === null) {
				if (props.spine) {
					_char = new PixiSpineModel(_uid);
					_char.on("normal-touch", (m) => {
						const r = (m as PixiSpineModel).play("Tep_1");
						if (r) {
							setAnimTime(Date.now());
							setAnimInfo(r);
						}
					});
					_char.on("special-touch", (m) => {
						const r = (m as PixiSpineModel).play("breast");
						if (r) {
							setAnimTime(Date.now());
							setAnimInfo(r);
						}
					});
				} else
					_char = new Pixi2DModel(_uid);

				_char.on("facelist", (list, prefix) => {
					if (props.onFaceList)
						props.onFaceList(list, prefix);
				});

				setChar(_char);
			}

			if (props.spine && _char instanceof PixiSpineModel) {
				_char.setGoogle(props.google);
			}

			_char.position.set(0, 0);//props.spine ? 0 : 360);
			surface.addChild(_char);
		}
	}, [props.spine, props.uid, props.google, props.damaged, surface]);

	useEffect(() => {
		if (char) {
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

			const elapsed = (Date.now() - animTime) / 1000;
			const progress = Math.min(1, elapsed / animInfo.map(r => r.duration).sort((a, b) => b - a)[0]);

			const g = animationIndicatorGraphics;

			g.clear();

			if (animInfo) {
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

			if (progress >= 1) {
				setAnimInfo(false);
				setAnimTime(0);
			}
		};

		if (animationIndicator) {
			if (!!animInfo)
				animationIndicator.fadeIn(.5);
			else
				animationIndicator.fadeOut(.5);
		}

		if (app && animInfo) app.ticker.add(fn);
		return () => {
			if (app && animInfo) app.ticker.remove(fn);
		};
	}, [app, animInfo]);

	return <div
		class={ style.PixiView }
		onWheel={ e => {
			e.preventDefault();
		} }
		ref={ playerRef }
	/>;
};
export default PixiView;
