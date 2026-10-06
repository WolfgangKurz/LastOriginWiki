import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";

import { UI_UNIT } from "../Objects/Actor/ActorStage";

/*
 * `Prefeb_Twinkle` of `noveladdeffect` bundle (`DialogFX_Twinkle` clip), in game UI unit (y-up).
 * Black glows close in from top and bottom like eyelids.
 */
const SIZE_ROOT_SCALE = 2.526;
const GROUPS = {
	"GameObject (1)": { pos: [0, 0], scale: [1, 1] },
	GameObject: { pos: [0, -284], scale: [1, 0.6] },
} as const;
/** `UITexture`s, colored black (`AnimatedColor`), size is widget size multiplied by scale */
const SPRITES: Array<{ group: keyof typeof GROUPS; tex: string; pos: Tuple<number, 2>; size: Tuple<number, 2>; }> = [
	{ group: "GameObject (1)", tex: "glow", pos: [-1.469, 352], size: [803.509, 451.974] },
	{ group: "GameObject (1)", tex: "glow", pos: [301, 323], size: [893.77, 502.746] },
	{ group: "GameObject (1)", tex: "glow", pos: [-297, 328], size: [1223.568, 688.257] },
	{ group: "GameObject (1)", tex: "glow", pos: [1.348, 369.791], size: [1011.527, 632.204] },
	{ group: "GameObject (1)", tex: "blackdot", pos: [162, 449.791], size: [1751.552, -405.427] },
	{ group: "GameObject (1)", tex: "glow", pos: [177, 319], size: [893.712, 502.757] },
	{ group: "GameObject (1)", tex: "glow", pos: [-179, 319], size: [893.712, 502.757] },
	{ group: "GameObject (1)", tex: "glow", pos: [-505, 243], size: [1177.365, 854.614] },
	{ group: "GameObject (1)", tex: "FX_trail_GD", pos: [-24, 242.791], size: [2086.651, 183.594] },
	{ group: "GameObject (1)", tex: "glow", pos: [473, 206], size: [1181.187, 857.422] },
	{ group: "GameObject", tex: "glow", pos: [1.549, -0.91], size: [803.509, -307.201] },
	{ group: "GameObject", tex: "glow", pos: [363, -0.91], size: [1343.978, -696.725] },
	{ group: "GameObject", tex: "glow", pos: [-0.314, -0.91], size: [803.509, -307.201] },
	{ group: "GameObject", tex: "glow", pos: [-297, 24], size: [1909.174, -729.923] },
	{ group: "GameObject", tex: "blackdot", pos: [179, -328], size: [1751.65, -675.842] },
];
const FPS = 30;
const LENGTH = 4.567;
const TRACKS = {
	topY: [616.157, 580.916, 488.008, 356.654, 206.079, 55.503, -75.85, -168.759, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -197.423, -149.116, -63.501, 47.942, 173.734, 302.395, 422.448, 522.411, 590.808, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 609.581, 561.273, 475.658, 364.215, 238.424, 109.762, -10.29, -110.254, -178.65, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -194.789, -128.312, -13.778, 129.589, 282.568, 425.935, 540.469, 606.946, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 616.157, 590.807, 522.411, 422.447, 302.395, 173.734, 47.942, -63.501, -149.115, -197.423, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -204, -168.759, -75.851, 55.502, 206.078, 356.654, 488.008, 580.916, 616.157],
	topScaleY: [1, 0.985, 0.947, 0.893, 0.831, 0.769, 0.715, 0.677, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.665, 0.685, 0.72, 0.766, 0.818, 0.871, 0.92, 0.961, 0.99, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.997, 0.977, 0.942, 0.896, 0.845, 0.792, 0.742, 0.701, 0.673, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.666, 0.694, 0.741, 0.8, 0.863, 0.922, 0.969, 0.996, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.99, 0.961, 0.92, 0.871, 0.818, 0.766, 0.72, 0.685, 0.665, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.663, 0.677, 0.715, 0.769, 0.831, 0.893, 0.947, 0.985, 1],
	bottomY: [-721.924, -697.521, -633.186, -542.229, -437.962, -333.695, -242.738, -178.403, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -158.554, -192.005, -251.29, -328.459, -415.565, -504.657, -587.788, -657.009, -704.37, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -717.37, -683.919, -624.634, -547.465, -460.359, -371.267, -288.136, -218.915, -171.554, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -160.378, -206.411, -285.721, -384.996, -490.927, -590.203, -669.513, -715.546, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -721.924, -704.37, -657.008, -587.788, -504.657, -415.564, -328.459, -251.29, -192.005, -158.554, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -154, -178.403, -242.738, -333.694, -437.962, -542.229, -633.186, -697.521, -721.924],
};

export default class Animation_Twinkle extends PIXI.Container {
	public static readonly Length = LENGTH;

	private readonly top: PIXI.Container;
	private readonly bottom: PIXI.Container;
	private time = 0;
	private readonly onTick = () => this.update(PIXI.Ticker.shared.deltaMS / 1000);

	constructor () {
		super();
		this.name = "@Twinkle";
		this.position.set(640, 360);
		this.scale.set(UI_UNIT * SIZE_ROOT_SCALE, -UI_UNIT * SIZE_ROOT_SCALE);

		const groups = Object.fromEntries(Object.entries(GROUPS).map(([name, g]) => {
			const c = new PIXI.Container();
			c.position.set(...g.pos);
			c.scale.set(...g.scale);
			this.addChild(c);
			return [name, c];
		})) as Record<keyof typeof GROUPS, PIXI.Container>;
		this.top = groups["GameObject (1)"];
		this.bottom = groups.GameObject;

		for (const s of SPRITES) {
			const sprite = PIXI.Sprite.from(`${AssetsRoot}/story/effect/Twinkle_${s.tex}.png`);
			sprite.anchor.set(0.5, 0.5);
			sprite.position.set(...s.pos);
			sprite.width = s.size[0];
			sprite.height = s.size[1];
			sprite.tint = 0x000000;
			groups[s.group].addChild(sprite);
		}

		this.update(0);
		PIXI.Ticker.shared.add(this.onTick);
	}

	private sample (values: number[]): number {
		const f = Math.min(values.length - 1, this.time * FPS);
		const i = Math.floor(f);
		const r = f - i;
		return values[i] * (1 - r) + values[Math.min(values.length - 1, i + 1)] * r;
	}

	private update (dt: number) {
		this.time = Math.min(LENGTH, this.time + dt);
		this.top.y = this.sample(TRACKS.topY);
		this.top.scale.y = this.sample(TRACKS.topScaleY);
		this.bottom.y = this.sample(TRACKS.bottomY);
	}

	public destroy (options?: boolean | PIXI.IDestroyOptions) {
		PIXI.Ticker.shared.remove(this.onTick);
		super.destroy(options);
	}
}
