import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

import Shared from "@/components/pixi/Shared";
import BaseScreenInputFilter from "@/components/pixi/shaders/base";

export async function render2DModel (cropByCameraBoundary: boolean = false): Promise<HTMLCanvasElement | null> {
	Shared.instance.inRendering = true;

	const host = Shared.instance.host;
	if (!host) return null;

	// find pixi-viewport layer
	const vp = (() => {
		let current: PIXI.Container | undefined = host;
		while (current && !(current instanceof Viewport))
			current = current.parent;

		if (current instanceof Viewport) {
			if (current.parent) current.updateTransform();

			return current;
		}

		return null;
	})();

	// current back RenderTexture size
	const rtSize: Tuple<number, 2> = [
		Shared.instance.renderTexture1.width,
		Shared.instance.renderTexture1.height,
	];

	// save original viewport scale
	const vpOriginalMatrix = vp ? vp.transform.localTransform.clone() : new PIXI.Matrix().identity();

	try {
		// make original scale
		if (vp) {
			const tf = new PIXI.Matrix().identity();
			host.Roots.forEach(root => {
				// extract scale only
				tf.scale(root.transform.scale.x, root.transform.scale.y);
			});
			tf.invert();

			vp.transform.setFromMatrix(tf);
			vp.updateTransform();
		}

		const vpMatrix = (vp ? new PIXI.Matrix().copyFrom(vp.localTransform) : new PIXI.Matrix().identity())
			.invert();
		vpMatrix.scale(2, 2); // for more good quality

		const bounds = (() => {
			const host_target = (cropByCameraBoundary && host.getChildByName("Camera_Boundary", true)) || host;

			const _b = host_target.getBounds(false);
			let [l, t, r, b] = [_b.left, _b.top, _b.right, _b.bottom];
			return new PIXI.Rectangle(l, t, r - l, b - t);
		})();
		const w = bounds.width;
		const h = bounds.height;

		const renderer = new PIXI.Renderer({
			antialias: true,
			backgroundColor: 0x000000,
			backgroundAlpha: 0,

			width: 1,
			height: 1,
		});

		Shared.instance.resize(w, h); // for shader render-texture

		const rt = Shared.instance.renderTexture1;

		const _empty = new PIXI.Container();
		renderer.render(_empty, { renderTexture: rt });

		const offsetMat = new PIXI.Matrix();
		offsetMat.translate(-bounds.left, -bounds.top);

		// TODO: Optimize draw call
		// * [obj1] - [obj2] - [obj3] - [filter,obj4] - [obj5] - [obj6]
		// *   into
		// * [obj1, obj2, obj3] - [filter,obj4] - [obj5, obj6]
		Shared.RenderableObjects(host)
			.forEach(o => {
				// if (o.parent) o.updateTransform();

				const _visibles: PIXI.DisplayObject[] = [];
				if (o.children) {
					for (const c of o.children) {
						if (c instanceof PIXI.DisplayObject && c.visible) {
							c.visible = false;
							_visibles.push(c);
						}
					}
				}

				if (o.filters?.some(r => r instanceof BaseScreenInputFilter))
					Shared.instance.apply(renderer!);

				renderer!.render(o, {
					clear: false,
					renderTexture: rt,
					transform: offsetMat,
					skipUpdateTransform: true,
				});

				_visibles.forEach(c => c.visible = true);
			});

		const canvas = renderer.extract.canvas(rt) as HTMLCanvasElement;
		renderer.destroy();

		return canvas;
	} finally {
		vp?.transform.setFromMatrix(vpOriginalMatrix);
		Shared.instance.resize(...rtSize);
		Shared.instance.inRendering = false;
	}
};
