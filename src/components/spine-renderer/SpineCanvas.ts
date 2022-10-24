import { TimeKeeper } from "@esotericsoftware/spine-core";
import { ManagedWebGLRenderingContext, SceneRenderer, AssetManager, Input, SpineCanvasConfig } from "@esotericsoftware/spine-webgl";

export default class SpineCanvas {
	readonly context: ManagedWebGLRenderingContext;

	/** Tracks the current time, delta, and other time related statistics. */
	readonly time = new TimeKeeper();
	/** The HTML canvas to render to. */
	readonly htmlCanvas: HTMLCanvasElement;
	/** The WebGL rendering context. */
	readonly gl: WebGLRenderingContext;
	/** The scene renderer for easy drawing of skeletons, shapes, and images. */
	readonly renderer: SceneRenderer;
	/** The asset manager to load assets with. */
	readonly assetManager: AssetManager;
	/** The input processor used to listen to mouse, touch, and keyboard events. */
	readonly input: Input;

	/** Constructs a new spine canvas, rendering to the provided HTML canvas. */
	constructor (canvas: HTMLCanvasElement, config: SpineCanvasConfig) {
		if (!config.pathPrefix) config.pathPrefix = "";
		if (!config.app) config.app = {
			loadAssets: () => { },
			initialize: () => { },
			update: () => { },
			render: () => { },
			error: () => { },
		}
		if (!config.webglConfig) config.webglConfig = { alpha: true };

		this.htmlCanvas = canvas;
		this.context = new ManagedWebGLRenderingContext(canvas, config.webglConfig);
		this.renderer = new SceneRenderer(canvas, this.context);
		this.gl = this.context.gl;
		this.assetManager = new AssetManager(this.context, config.pathPrefix);
		this.input = new Input(canvas);

		if (config.app.loadAssets) config.app.loadAssets(this);

		const loop = () => {
			requestAnimationFrame(loop);
			this.time.update();
			if (config.app.update) config.app.update(this, this.time.delta);
			if (config.app.render) config.app.render(this);
		}

		const waitForAssets = () => {
			if (this.assetManager.isLoadingComplete()) {
				if (this.assetManager.hasErrors()) {
					if (config.app.error) config.app.error(this, this.assetManager.getErrors());
				} else {
					if (config.app.initialize) config.app.initialize(this);
					loop();
				}
				return;
			}
			requestAnimationFrame(waitForAssets);
		}
		requestAnimationFrame(waitForAssets);
	}

	/** Clears the canvas with the given color. The color values are given in the range [0,1]. */
	clear (r: number, g: number, b: number, a: number) {
		this.gl.clearColor(r, g, b, a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}
}
