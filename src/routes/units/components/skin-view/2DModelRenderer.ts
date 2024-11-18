import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

import Shared from "@/components/pixi/Shared";

export async function render2DModel (cropByCameraBoundary: boolean = false): Promise<HTMLCanvasElement | null> {
	const host = Shared.instance.host;
	if (!host) return null;

	const renderer = Shared.instance.renderer;
	if (!renderer) return null;

	Shared.instance.inRendering = true;

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
	const vpOriginalMatrix = vp ? vp.transform.localTransform.clone() : new PIXI.Matrix().identity();

	const rW = renderer.width;
	const rH = renderer.height;

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

		const bounds = (() => {
			const host_target = (cropByCameraBoundary && host.getChildByName("Camera_Boundary", true)) || host;

			const _b = host_target.getBounds(false);
			let [l, t, r, b] = [_b.left, _b.top, _b.right, _b.bottom];
			return new PIXI.Rectangle(l, t, r - l, b - t);
		})();

		const objects = Shared.RenderableObjects(host);
		function _render (rt: PIXI.RenderTexture, offsetX: number = 0, offsetY: number = 0) {
			const offsetMat = new PIXI.Matrix();
			offsetMat.translate(-bounds.left + offsetX, -bounds.top + offsetY);

			// TODO: Optimize draw call
			// * [obj1] - [obj2] - [obj3] - [filter,obj4] - [obj5] - [obj6]
			// *   into
			// * [obj1, obj2, obj3] - [filter,obj4] - [obj5, obj6]
			objects.forEach(o => {
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

				renderer!.render(o, {
					clear: false,
					renderTexture: rt,
					transform: offsetMat,
					skipUpdateTransform: true,
				});

				_visibles.forEach(c => c.visible = true);
			});
		}

		// maximum texture size that WebGL handleable
		const MAX_TEX_SIZE = renderer.gl.getParameter(renderer.gl.MAX_TEXTURE_SIZE);

		const _w = Math.round(bounds.width), _h = Math.round(bounds.height);

		if (_w > MAX_TEX_SIZE || _h > MAX_TEX_SIZE) { // should conbine render-textures
			const rt = PIXI.RenderTexture.create({ width: 1, height: 1 });
			const empty = new PIXI.Container();

			const cv = document.createElement("canvas");
			cv.width = _w;
			cv.height = _h;

			const ctx = cv.getContext("2d")!;

			debugger;
			for (let x = 0; x < _w; x += MAX_TEX_SIZE) {
				for (let y = 0; y < _h; y += MAX_TEX_SIZE) {
					const w = Math.min(MAX_TEX_SIZE, _w - x);
					const h = Math.min(MAX_TEX_SIZE, _h - y);

					// resize when only should resized
					if (rt.width !== w || rt.height !== h) rt.resize(w, h);

					// clear renderTexture
					renderer.render(empty, { renderTexture: rt });
					_render(rt, -x, -y);

					// copy to back buffer
					const _cv = renderer.extract.canvas(rt) as HTMLCanvasElement;
					ctx.drawImage(_cv, x, y);
					_cv.remove();
				}
			}

			return cv;
		} else {
			const w = _w, h = _h;

			renderer.resize(w, h);
			const rt = PIXI.RenderTexture.create({ width: w, height: h });

			_render(rt);

			return renderer.extract.canvas(rt) as HTMLCanvasElement;
		}
	} finally {
		vp?.transform.setFromMatrix(vpOriginalMatrix);
		renderer.resize(rW, rH);
		Shared.instance.inRendering = false;
	}
};
