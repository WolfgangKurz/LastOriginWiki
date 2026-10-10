import * as PIXI from "pixi.js";

import type { DrawItem } from "./Gamma/Renderer";
import type { MaterialData } from "./Gamma/Types";

import { GammaFadeMode, GammaShaderKind, fragmentOf, shaderKindOf, vertex } from "./shaders/gamma";

//#region Unity blend state -> Pixi blend mode
/** Unity `BlendMode` -> GL factor */
function glFactor (gl: WebGLRenderingContext, v: number): number {
	switch (v) {
		case 0: return gl.ZERO;
		case 1: return gl.ONE;
		case 2: return gl.DST_COLOR;
		case 3: return gl.SRC_COLOR;
		case 4: return gl.ONE_MINUS_DST_COLOR;
		case 5: return gl.SRC_ALPHA;
		case 6: return gl.ONE_MINUS_SRC_COLOR;
		case 7: return gl.DST_ALPHA;
		case 8: return gl.ONE_MINUS_DST_ALPHA;
		case 9: return gl.SRC_ALPHA_SATURATE;
		case 10: return gl.ONE_MINUS_SRC_ALPHA;
	}
	return gl.ONE;
}
/** Unity `BlendOp` -> GL equation */
function glEquation (gl: WebGLRenderingContext, v: number): number {
	switch (v) {
		case 1: return gl.FUNC_SUBTRACT;
		case 2: return gl.FUNC_REVERSE_SUBTRACT;
		case 3: return (gl as WebGL2RenderingContext).MIN ?? gl.FUNC_ADD;
		case 4: return (gl as WebGL2RenderingContext).MAX ?? gl.FUNC_ADD;
	}
	return gl.FUNC_ADD;
}

const BLEND_ID_BASE = 1000;
const blendIds = new Map<string, number>();
const blendStates: Array<Tuple<number, 6>> = [];

/** Custom Pixi blend mode id for Unity blend state */
function blendModeOf (b: Tuple<number, 6>): number {
	const key = b.join(",");
	let id = blendIds.get(key);
	if (id === undefined) {
		id = BLEND_ID_BASE + blendStates.length;
		blendIds.set(key, id);
		blendStates.push(b);
	}
	return id;
}

function ensureBlendMode (renderer: PIXI.Renderer, id: number) {
	const modes = (renderer.state as unknown as { blendModes: number[][]; }).blendModes;
	if (modes[id]) return;

	const gl = renderer.gl;
	const b = blendStates[id - BLEND_ID_BASE];
	const [srcA, dstA] = alphaFactors(b);
	modes[id] = [
		glFactor(gl, b[0]), glFactor(gl, b[1]),
		glFactor(gl, srcA), glFactor(gl, dstA),
		glEquation(gl, b[4]), gl.FUNC_ADD,
	];
}

/**
 * Alpha channel blend factors for premultiplied transparent canvas.
 *
 * Color factors are same as Unity, but Unity alpha factors assume opaque render target.
 * Additive textures are usually black with opaque alpha, accumulating their alpha makes
 * black rectangles on transparent area. Effects which add light or modulate existing color
 * (add, screen, multiply) keep alpha, others accumulate coverage like Pixi normal blending.
 */
function alphaFactors (b: Tuple<number, 6>): [src: number, dst: number] {
	const ZERO = 0, ONE = 1, DST_COLOR = 2, ONE_MINUS_SRC_ALPHA = 10;
	const addsLight = b[1] === ONE; // Add, Add(Soft), Screen, particle additive
	const modulates = b[0] === DST_COLOR || b[0] === ZERO; // Multiply variants
	return addsLight || modulates
		? [ZERO, ONE]
		: [ONE, ONE_MINUS_SRC_ALPHA];
}
//#endregion

const programs = new Map<GammaShaderKind, PIXI.Program>();
function getProgram (kind: GammaShaderKind): PIXI.Program {
	let program = programs.get(kind);
	if (!program) {
		program = PIXI.Program.from(vertex, fragmentOf(kind), `gamma-${kind}`);
		programs.set(kind, program);
	}
	return program;
}

const DEFAULT_ST = [1, 1, 0, 0];

/** TypedArray generics of recent TypeScript does not match with Pixi types */
function buf (data: Float32Array | Uint16Array): PIXI.IArrayBuffer {
	return data as unknown as PIXI.IArrayBuffer;
}
const WHITE = [1, 1, 1, 1];

/** Pixi mesh for one `DrawItem` of `GammaModel` */
export default class GammaMesh extends PIXI.Mesh<PIXI.Shader> {
	public readonly item: DrawItem;

	private readonly positionBuffer: PIXI.Buffer;
	private readonly uvsBuffer: PIXI.Buffer;
	private readonly colorBuffer: PIXI.Buffer;
	private readonly indexBuffer: PIXI.Buffer;
	private layoutVersion = -1;
	private staticVersion = -1;
	private customBlend = 0;
	private kind = GammaShaderKind.SpriteDefault;

	constructor (item: DrawItem) {
		const g = item.geometry;
		const positionBuffer = new PIXI.Buffer(buf(g.positions), false, false);
		const uvsBuffer = new PIXI.Buffer(buf(g.uvs), false, false);
		const colorBuffer = new PIXI.Buffer(buf(g.colors), false, false);
		const indexBuffer = new PIXI.Buffer(buf(g.indices), false, true);

		const geometry = new PIXI.Geometry()
			.addAttribute("aVertexPosition", positionBuffer, 2)
			.addAttribute("aTextureCoord", uvsBuffer, 2)
			.addAttribute("aColor", colorBuffer, 4)
			.addIndex(indexBuffer);

		const shader = new PIXI.Shader(getProgram(GammaShaderKind.SpriteDefault), {
			uSampler: PIXI.Texture.WHITE,
			uColor: new Float32Array(WHITE),
			uMainST: new Float32Array(DEFAULT_ST),
			uFadeMode: 0,
			uAlpha: 1,
			uAdditionalAlpha: 1,
			uBlendMode: 0,
			uTime: 0,
			uHologram: new Float32Array([1, 0, 1, 1]),
		});

		const state = PIXI.State.for2d();
		super(geometry, shader, state, PIXI.DRAW_MODES.TRIANGLES);

		this.item = item;
		this.positionBuffer = positionBuffer;
		this.uvsBuffer = uvsBuffer;
		this.colorBuffer = colorBuffer;
		this.indexBuffer = indexBuffer;
		this.eventMode = "none";
	}

	/** Upload geometry and material state of current frame */
	public sync (materials: MaterialData[], textures: PIXI.Texture[], time: number) {
		const item = this.item;
		const g = item.geometry;

		if (this.layoutVersion !== g.layoutVersion) {
			this.layoutVersion = g.layoutVersion;
			this.positionBuffer.update(buf(g.positions));
			this.uvsBuffer.update(buf(g.uvs));
			this.colorBuffer.update(buf(g.colors));
			this.indexBuffer.update(buf(g.indices));
			this.staticVersion = g.staticVersion;
		} else {
			this.positionBuffer.update();
			this.colorBuffer.update();
			if (this.staticVersion !== g.staticVersion) {
				this.staticVersion = g.staticVersion;
				this.uvsBuffer.update();
				this.indexBuffer.update();
			}
		}
		this.size = g.indexCount;

		const mat = item.material >= 0 ? materials[item.material] : null;
		const r = item.renderer;
		const u = this.shader.uniforms;

		u.uSampler = item.texture >= 0 && textures[item.texture] ? textures[item.texture] : PIXI.Texture.WHITE;

		const blend = mat ? mat.b : [1, 10, 1, 10, 0, 0] as Tuple<number, 6>;
		const kind = shaderKindOf(mat?.sh ?? "Sprites/Default", blend[0]);
		if (this.kind !== kind) {
			this.kind = kind;
			this.shader.program = getProgram(kind);
		}

		const isParticle = kind === GammaShaderKind.ParticleTint || kind === GammaShaderKind.Hologram;
		const color = r.property(isParticle ? "_TintColor" : "_Color", item.submesh)
			?? (isParticle ? [0.5, 0.5, 0.5, 0.5] : WHITE);
		(u.uColor as Float32Array).set(color);
		(u.uMainST as Float32Array).set(r.property("_MainTex_ST", item.submesh) ?? DEFAULT_ST);

		u.uAdditionalAlpha = r.property("_AdditionalAlpha", item.submesh)?.[0] ?? 1;
		const blendMode = r.property("_BlendMode", item.submesh)?.[0] ?? 0;
		u.uBlendMode = blendMode;
		u.uTime = time;

		if (kind === GammaShaderKind.Hologram) {
			(u.uHologram as Float32Array).set([
				r.property("_Segments", item.submesh)?.[0] ?? 1,
				r.property("_speed_wave", item.submesh)?.[0] ?? 0,
				r.property("_pawerofwave", item.submesh)?.[0] ?? 1,
				r.property("_out_power", item.submesh)?.[0] ?? 1,
			]);
		}

		// container alpha
		// multiply blending without alpha term (`DstColor, Zero`) has to fade into white
		const multiply = kind === GammaShaderKind.ParticleMultiply
			|| (kind === GammaShaderKind.AdditionalAlpha && blendMode === 6)
			|| (blend[0] === 2 && blend[1] === 0);
		u.uFadeMode = multiply
			? GammaFadeMode.White
			: blend[0] === 5
				? GammaFadeMode.Alpha
				: GammaFadeMode.All;

		this.customBlend = blendModeOf(blend);
		this.state.blendMode = this.customBlend;
	}

	protected override _render (renderer: PIXI.Renderer): void {
		ensureBlendMode(renderer, this.customBlend);
		this.shader.uniforms.uAlpha = this.worldAlpha;
		super._render(renderer);
	}
}
