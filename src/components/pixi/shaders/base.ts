import * as PIXI from "pixi.js";

import Shared from "@/components/pixi/Shared";

export default class BaseScreenInputFilter extends PIXI.Filter {
	private static back = PIXI.RenderTexture.create({ width: 1, height: 1 });

	public apply (
		filterManager: PIXI.FilterSystem,
		input: PIXI.RenderTexture,
		output: PIXI.RenderTexture,
		clearMode?: PIXI.CLEAR_MODES,
		_currentState?: PIXI.FilterState
	): void {
		// NOTE: output(destination) renderTexture cannot be read (output only can be written)
		// NOTE: so copy output to back renderTexture, to read in shader
		if (output) {
			const rt = BaseScreenInputFilter.back; // use shared

			// resize to output size
			if (rt.width !== output.width || rt.height !== output.height)
				rt.resize(output.width, output.height);

			// copy
			const sp = new PIXI.Sprite(output);
			filterManager.renderer.render(sp, { renderTexture: rt });
			sp.destroy();

			this.uniforms.uDestination = rt;
			this.uniforms.uDestinationSize = [rt.width, rt.height];
		} else { // no output (not rendered yet), so set empty texture instead
			this.uniforms.uDestination = PIXI.Texture.EMPTY;
			this.uniforms.uDestinationSize = [8, 8];
		}

		// do original shader
		super.apply(filterManager, input, output, clearMode);

		// resize to minimal size, to minimize memory usage...
		BaseScreenInputFilter.back.resize(1, 1);
	}
}
