import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

import ResizeObserver from "resize-observer-polyfill";

import { IsDev } from "@/libs/Const.1";

import FadeContainer from "@/components/pixi/FadeContainer";
import PixiCharModel, { CHAR_IDLE_TRIGGER, CharAnimationInfo } from "@/components/pixi/PixiCharModel";

import style from "./style.module.scss";

interface AnimationBase {
	duration: number;
}

interface PixiState {
	renderer: PIXI.Renderer;
	ticker: PIXI.Ticker;
	vp: Viewport;
	surface: PIXI.Container;
	indicator: FadeContainer;
	indicatorGraphics: PIXI.Graphics;
	/** set before destroying, cleanups of other effects run after initialize cleanup on unmount */
	destroyed: boolean;
}

interface CharViewProps {
	/** `char_model` (or `char_model_ch`) of skin metadata */
	model: string;

	/** trigger to play, played again when `playToken` is changed */
	trigger: string;
	playToken: number;

	onAnimations?: (list: CharAnimationInfo[]) => void;
	onError?: () => void;
}

/** Height of model in view, ratio */
const FIT_HEIGHT = 0.6;
/** Feet position from top, ratio */
const FEET_Y = 0.85;

/** Battle SD model (`char_*`) viewer */
const CharView: FunctionalComponent<CharViewProps> = (props) => {
	const [pixi, setPixi] = useState<PixiState | null>(null);
	const [char, setChar] = useState<PixiCharModel | null>(null);
	const [size, setSize] = useState<[number, number]>([1, 1]);
	const [bounds, setBounds] = useState<PIXI.Rectangle | null>(null);
	const playerRef = useRef<HTMLDivElement>(null);

	const [animInfo, setAnimInfo] = useState<AnimationBase | null>(null);

	const _dpr = Math.max(2, window.devicePixelRatio || 1);

	useEffect(() => { // initialize, same as `PixiView` without 2D model render texture pipeline
		if (!playerRef.current) return;

		const renderer = new PIXI.Renderer({
			antialias: true,
			backgroundColor: 0x000000,
			backgroundAlpha: 0,

			width: 1,
			height: 1,
			resolution: 1,
			autoDensity: true,
			powerPreference: "default",

			eventFeatures: {
				globalMove: false,
				move: true,
				click: true,
				wheel: true,
			},
		});
		const ticker = new PIXI.Ticker();
		ticker.maxFPS = 60;

		const stage = new PIXI.Container();
		if (IsDev) {
			globalThis.__PIXI_STAGE__ = stage;
			globalThis.__PIXI_RENDERER__ = renderer;
		}

		const vp = new Viewport({
			ticker,
			events: renderer.events,
			forceHitArea: new PIXI.Rectangle(-100000, -100000, 200000, 200000),
		});
		vp
			.drag()
			.pinch().wheel()
			.clampZoom({
				minScale: 0.25,
				maxScale: 2,
			});
		stage.addChild(vp);

		const surface = new PIXI.Container();
		surface.sortableChildren = true;
		vp.addChild(surface);

		const indicator = new FadeContainer();
		indicator.name = "[Animation Indicator]";
		indicator.position.set(30 * _dpr, 30 * _dpr);
		indicator.alpha = 0;
		stage.addChild(indicator);

		const indicatorGraphics = new PIXI.Graphics();
		indicator.addChild(indicatorGraphics);

		ticker.add(() => renderer.render(stage), PIXI.UPDATE_PRIORITY.LOW);
		ticker.start();

		playerRef.current.appendChild(renderer.view as HTMLCanvasElement);
		const state: PixiState = { renderer, ticker, vp, surface, indicator, indicatorGraphics, destroyed: false };
		setPixi(state);

		return () => {
			state.destroyed = true;
			ticker.destroy();
			renderer.destroy(true);
			setPixi(null);
		};
	}, []);

	useEffect(() => { // resize
		if (!playerRef.current || !pixi) return;

		const ob = new ResizeObserver(e => {
			const rc = (e[0].contentRect as DOMRectReadOnly);
			const w = Math.max(1, rc.width * _dpr), h = Math.max(1, rc.height * _dpr);
			pixi.renderer.resize(w, h);
			setSize([w, h]);
		});
		ob.observe(playerRef.current);
		return () => ob.disconnect();
	}, [playerRef.current, pixi]);

	useEffect(() => { // model
		if (!pixi) return;

		const model = new PixiCharModel(props.model);
		// hidden until measured, transparent model is not updated
		model.renderable = false;
		pixi.surface.addChild(model);
		setBounds(null);
		setAnimInfo(null);

		model.on("loaded", () => {
			// bounds of idle pose, first frames may not be updated yet
			let frames = 0;
			const measure = () => {
				if (model.destroyed) return;
				if (++frames < 3) return;
				pixi.ticker.remove(measure);
				setBounds(model.getModelBounds());
				model.renderable = true;
				model.fadeIn(0.3);
			};
			pixi.ticker.add(measure);
			props.onAnimations?.([...model.animations]);
		});
		model.on("error", () => props.onError?.());
		model.on("animation-start", (info: AnimationBase) => setAnimInfo(info));
		model.on("animation-end", () => setAnimInfo(null));
		setChar(model);

		return () => {
			model.destroy();
			setChar(null);
		};
	}, [pixi, props.model]);

	useEffect(() => { // fit model, feet near bottom
		if (!pixi || !char) return;

		const [w, h] = size;
		pixi.vp.position.set(0, 0);
		pixi.vp.scale.set(1);

		const b = bounds;
		if (!b) {
			char.position.set(w / 2, h * FEET_Y);
			return;
		}

		const scale = Math.min(h * FIT_HEIGHT / b.height, w * 0.8 / b.width);
		char.scale.set(scale);
		char.position.set(
			w / 2 - (b.x + b.width / 2) * scale,
			h * FEET_Y - (b.y + b.height) * scale,
		);
	}, [pixi, char, size, bounds]);

	useEffect(() => { // play
		if (!char) return;

		const play = () => char.play(props.trigger || CHAR_IDLE_TRIGGER);
		if (char.ready)
			play();
		else
			char.once("loaded", play);
		return () => {
			char.off("loaded", play);
		};
	}, [char, props.trigger, props.playToken]);

	useEffect(() => { // animation indicator, same as `PixiView`
		if (!pixi) return;

		const g = pixi.indicatorGraphics;
		const draw = () => {
			const t = char?.currentAnimationTime();
			const progress = animInfo && t !== undefined && animInfo.duration > 0
				? Math.min(t / animInfo.duration, 1)
				: 1;

			g.clear();
			const points: Array<{ x: number; y: number; }> = [];
			const deg = progress * 360;
			for (let i = 0; i <= deg; i++) {
				const rad = (i - 90) * Math.PI / 180;
				points.push({ x: Math.cos(rad) * 15 * _dpr, y: Math.sin(rad) * 15 * _dpr });
			}
			for (let i = 0; i <= deg; i++) {
				const rad = ((deg - i) - 90) * Math.PI / 180;
				points.push({ x: Math.cos(rad) * 8 * _dpr, y: Math.sin(rad) * 8 * _dpr });
			}
			g.beginFill(0xffffff);
			g.drawPolygon(points);
			g.endFill();
		};

		if (animInfo) {
			pixi.indicator.fadeIn(0.5);
			pixi.ticker.add(draw);
		} else if (pixi.indicator.alpha > 0) {
			pixi.indicator.fadeOut(0.5);
			draw();
		}
		return () => {
			// ticker is already destroyed on unmount
			if (!pixi.destroyed) pixi.ticker.remove(draw);
		};
	}, [pixi, char, animInfo]);

	return <div
		class={ style.PixiView }
		style={ { transform: `scale(${1 / _dpr})` } }
		data-type="char"

		onWheel={ e => e.preventDefault() }

		ref={ playerRef }
	/>;
};
export default CharView;
