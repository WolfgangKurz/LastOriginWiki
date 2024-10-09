import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

import Shared from "@/components/pixi/Shared";
import BaseScreenInputFilter from "@/components/pixi/shaders/base";

export async function render2DModel (): Promise<HTMLCanvasElement | null> {
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

	// save original viewport scale
	let vpScale = vp ? [vp.transform.scale.x, vp.transform.scale.y] : [1, 1];

	try {
		// make x2 to do super-sampling (seems x2 is best quality)
		if (vp) {
			vp.transform.scale.set(2, 2);
			vp.updateTransform();
		}

		const vpMatrix = (vp ? new PIXI.Matrix().copyFrom(vp.localTransform) : new PIXI.Matrix().identity())
			.invert();

		const bounds = (() => {
			const _b = host.getBounds(false);
			let [l, t, r, b] = [_b.left, _b.top, _b.right, _b.bottom];

			// viewport never rotates
			l *= vpMatrix.a;
			t *= vpMatrix.d;
			r *= vpMatrix.a;
			b *= vpMatrix.d;

			l -= vpMatrix.tx;
			t -= vpMatrix.ty;
			r -= vpMatrix.tx;
			b -= vpMatrix.ty;

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
		const rt = PIXI.RenderTexture.create({ width: w, height: h });

		const _sep = new PIXI.Container();
		_sep.transform.setFromMatrix(vpMatrix);

		// TODO: Optimize draw call
		// * [obj1] - [obj2] - [obj3] - [filter,obj4] - [obj5] - [obj6]
		// *   into
		// * [obj1, obj2, obj3] - [filter,obj4] - [obj5, obj6]
		const _cont = new PIXI.Container();
		Shared.RenderableObjects(host)
			.sort((a, b) => a.zIndex - b.zIndex)
			.forEach(o => {
				if (o.parent) o.updateTransform();
				if (o.children) {
					for (const c of o.children)
						if (c instanceof PIXI.DisplayObject)
							c.renderable = false;
				}

				renderer!.render(o, {
					clear: false,
					renderTexture: rt,
					skipUpdateTransform: true,
					transform: vpMatrix
				});

				if (o.filters?.some(r => r instanceof BaseScreenInputFilter))
					Shared.instance.apply(renderer!);

				if (o.children) {
					for (const c of o.children)
						if (c instanceof PIXI.DisplayObject)
							c.renderable = true;
				}
			});

		const canvas = renderer.extract.canvas(rt) as HTMLCanvasElement;
		renderer.destroy();

		return canvas;
	} finally {
		vp?.transform.scale.set(...vpScale);
		Shared.instance.inRendering = false;
	}
};
