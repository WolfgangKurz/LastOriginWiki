import * as PIXI from "pixi.js";

import type { DrawItem } from "./Gamma/Renderer";
import type { MaterialData } from "./Gamma/Types";

import { GammaFadeMode, GammaShaderKind, fragmentOf, shaderKindOf, vertex } from "./shaders/gamma";
import {
	type UnityGLSLData, type UnityProgram,
	defaultCubeTexture, defaultTexture, unityProgram, validateProgram,
} from "./shaders/unity";

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
	const ZERO = 0, ONE = 1, DST_COLOR = 2, ONE_MINUS_SRC_COLOR = 6, ONE_MINUS_SRC_ALPHA = 10;
	// Add, Screen, particle additive (`*, One`), Add(Soft) (`One, OneMinusSrcColor`)
	const addsLight = b[1] === ONE || b[1] === ONE_MINUS_SRC_COLOR;
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

/** Fractional part (Unity `frac`), keeps panned uv small for precision */
function fract (v: number): number {
	return v - Math.floor(v);
}

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
	private gammaMaterial: MaterialData | null = null;
	/** game GLSL program of material, `null` for runtime shaders */
	private unity: UnityProgram | null = null;

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
			uPan: new Float32Array([0, 0]),
			uIntensity: 1,
			uSampler2: PIXI.Texture.WHITE,
			uSubST: new Float32Array(DEFAULT_ST),
			uSword: new Float32Array([0, 1, 0, 0]),
			uSubPan: new Float32Array([0, 0]),
			uSampler3: PIXI.Texture.WHITE,
			uSampler4: PIXI.Texture.WHITE,
			uSampler5: PIXI.Texture.WHITE,
			uST3: new Float32Array(DEFAULT_ST),
			uST4: new Float32Array(DEFAULT_ST),
			uST5: new Float32Array(DEFAULT_ST),
			uCloak: new Float32Array([0, 0, 1, 0]),
			uMask: new Float32Array([0, 0]),
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
		this.kind = kind;
		this.gammaMaterial = mat;

		// game GLSL (WebGL2), approximated runtime shader is used if not compilable
		this.unity = mat?.gl && !unityFailed.has(mat.gl) ? unityProgram(mat.gl) : null;
		const program = this.unity ? this.unity.program : getProgram(kind);
		if (this.shader.program !== program) this.shader.program = program;
		if (this.unity) this.syncUnity(this.unity, mat!, textures, time);

		const isParticle = kind === GammaShaderKind.ParticleTint || kind === GammaShaderKind.Hologram;
		const color = r.property(isParticle ? "_TintColor" : "_Color", item.submesh)
			?? (isParticle ? [0.5, 0.5, 0.5, 0.5] : WHITE);
		const st = r.property("_MainTex_ST", item.submesh) ?? DEFAULT_ST;
		(u.uMainST as Float32Array).set(st);

		// uv panning (Unity uv space), texture coordinate has flipped v
		let panU = 0, panV = 0;
		if (kind === GammaShaderKind.MasterShader) {
			// `_MainColor * _Main_intensity`, `fract(_Time.y * _Main_Panning)`
			const mc = r.property("_MainColor", item.submesh) ?? WHITE;
			const k = r.property("_Main_intensity", item.submesh)?.[0] ?? 1;
			(u.uColor as Float32Array).set([mc[0] * k, mc[1] * k, mc[2] * k, mc[3]]);
			const pan = r.property("_Main_Panning", item.submesh) ?? [0, 0];
			panU = fract(time * pan[0]);
			panV = fract(time * pan[1]);
		} else if (kind === GammaShaderKind.Sword) {
			// flags select material values or custom data stream (`TEXCOORD2`, default (0, 0, 0, 1) as mesh has none)
			const f = (name: string, def: number) => r.property(name, item.submesh)?.[0] ?? def;
			const on = (name: string) => f(name, 0) !== 0;
			(u.uColor as Float32Array).set(r.property("_Main_Tex_Color", item.submesh) ?? WHITE);
			(u.uSword as Float32Array).set([
				on("_customdata") ? f("_dissolve_offset", 0) : 0,
				on("_opercity") ? f("_offset", 1) : 1,
				f("_RGB_Tex_floor", 0),
				f("_Alpha_Tex_floor", 0),
			]);
			panU = on("_U_panner") ? f("_panner_offset", 0) : 0;

			const subTex = mat?.t._Sub_Tex ?? -1;
			u.uSampler2 = subTex >= 0 && textures[subTex] ? textures[subTex] : PIXI.Texture.WHITE;
			(u.uSubST as Float32Array).set(r.property("_Sub_Tex_ST", item.submesh) ?? DEFAULT_ST);
			const sp = r.property("_Sub_Tex_Panning", item.submesh) ?? [0, 0];
			(u.uSubPan as Float32Array).set([fract(time * sp[0]), fract(time * sp[1])]);
		} else if (kind === GammaShaderKind.AlphaMasked) {
			// `_AlphaTex_ST` / `_MaskRotation` are updated by `ToJ.Mask` (`CharGammaModel`)
			(u.uColor as Float32Array).set(color);
			const ti = mat?.t._AlphaTex ?? -1;
			u.uSampler2 = ti >= 0 && textures[ti] ? textures[ti] : PIXI.Texture.WHITE;
			(u.uSubST as Float32Array).set(r.property("_AlphaTex_ST", item.submesh) ?? DEFAULT_ST);
			(u.uMask as Float32Array).set([
				r.property("_MaskRotation", item.submesh)?.[0] ?? 0,
				r.property("_IsThisText", item.submesh)?.[0] ?? 0,
			]);
		} else if (kind === GammaShaderKind.Cloaking) {
			const f = (name: string, def: number) => r.property(name, item.submesh)?.[0] ?? def;
			const texOf = (name: string) => {
				const ti = mat?.t[name] ?? -1;
				return ti >= 0 && textures[ti] ? textures[ti] : PIXI.Texture.WHITE;
			};
			const stOf = (name: string) => r.property(`${name}_ST`, item.submesh) ?? DEFAULT_ST;
			(u.uColor as Float32Array).set(r.property("_main_color", item.submesh) ?? WHITE);
			u.uSampler2 = texOf("_node_216");
			(u.uSubST as Float32Array).set(stOf("_node_216"));
			u.uSampler3 = texOf("_FX_mask");
			(u.uST3 as Float32Array).set(stOf("_FX_mask"));
			u.uSampler4 = texOf("_noise");
			(u.uST4 as Float32Array).set(stOf("_noise"));
			u.uSampler5 = texOf("_fx_img");
			(u.uST5 as Float32Array).set(stOf("_fx_img"));
			(u.uCloak as Float32Array).set([
				f("_change", 0), f("_change_on_fx_power", 0), f("_fx_speed", 1), f("_tiling", 0),
			]);
		} else {
			(u.uColor as Float32Array).set(color);
			if (kind === GammaShaderKind.HexagonPlane) {
				// `(uv + _Time.y * 0.5) * _1text_ST.xy + _1text_ST.zw`
				u.uIntensity = r.property("_node_3738", item.submesh)?.[0] ?? 4.017874;
				panU = fract(time * 0.5 * st[0]);
				panV = fract(time * 0.5 * st[1]);
			}
		}
		(u.uPan as Float32Array).set([panU, -panV]);

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

	//#region game GLSL
	/** Uniforms of game GLSL: material values (animated ones included), textures and Unity builtins */
	private syncUnity (up: UnityProgram, mat: MaterialData, textures: PIXI.Texture[], time: number) {
		const item = this.item;
		const r = item.renderer;
		const u = this.shader.uniforms;
		const gl = mat.gl!;

		const textureOf = (name: string): PIXI.Texture => {
			// `_MainTex` is renderer's main texture (sprite texture of SpriteRenderer overrides material one)
			let ti = name === "_MainTex" && item.texture >= 0 ? item.texture : (mat.t[name] ?? -1);
			if (ti >= 0 && textures[ti]) return textures[ti];
			return defaultTexture(gl.td[name] ?? "white");
		};
		const valueOf = (name: string): ArrayLike<number> | null => {
			const builtin = unityBuiltin(name, time);
			if (builtin) return builtin;
			const v = r.property(name, item.submesh);
			if (v) return v;
			if (name.endsWith("_TexelSize")) {
				const t = textureOf(name.slice(0, -"_TexelSize".length));
				const w = t.baseTexture.realWidth || 1, h = t.baseTexture.realHeight || 1;
				return [1 / w, 1 / h, w, h];
			}
			if (name.endsWith("_ST")) return DEFAULT_ST;
			return gl.pd[name] ?? null;
		};

		for (const un of up.uniforms) {
			if (un.type === "sampler2D") {
				u[un.name] = textureOf(un.name);
				continue;
			}
			if (un.type === "samplerCube") {
				u[un.name] = defaultCubeTexture();
				continue;
			}
			const size = UNIFORM_SIZE[un.type] ?? 4;
			if (un.length > 0) {
				// arrays (lighting, ...) are not provided
				if (!u[un.name]) u[un.name] = new Float32Array(size * un.length);
				continue;
			}
			const v = valueOf(un.name);
			if (size === 1) {
				const x = v?.[0] ?? 0;
				u[un.name] = un.type === "bool" ? x !== 0 : un.type === "int" ? Math.round(x) : x;
			} else {
				let a = u[un.name] as Float32Array | undefined;
				if (!(a instanceof Float32Array) || a.length !== size) a = u[un.name] = new Float32Array(size);
				for (let i = 0; i < size; i++) a[i] = v?.[i] ?? 0;
			}
		}
	}

	/** Stencil / color mask of game shader pass */
	private beginUnityState (renderer: PIXI.Renderer): boolean {
		const mat = this.gammaMaterial;
		if (!mat) return false;
		const s = mat.sts;
		const cm = mat.cm;
		if (!s && cm === undefined) return false;

		const gl = renderer.gl;
		if (s) {
			gl.enable(gl.STENCIL_TEST);
			gl.stencilFunc(glCompare(gl, s.comp), s.ref, s.rm);
			gl.stencilOp(glStencilOp(gl, s.fail), gl.KEEP, glStencilOp(gl, s.pass));
			gl.stencilMask(s.wm);
		}
		if (cm !== undefined) {
			// Unity `ColorWriteMask` (A 1, B 2, G 4, R 8), alpha only pass (stencil writer) does not touch canvas
			const rgb = (cm & 14) !== 0;
			gl.colorMask(rgb && !!(cm & 8), rgb && !!(cm & 4), rgb && !!(cm & 2), rgb && !!(cm & 1));
		}
		return true;
	}

	private endUnityState (renderer: PIXI.Renderer) {
		const gl = renderer.gl;
		if (this.gammaMaterial?.sts) {
			gl.stencilMask(0xff);
			// Pixi masks keep stencil test enabled while used
			if (renderer.stencil.getStackLength() === 0) gl.disable(gl.STENCIL_TEST);
			else (renderer.stencil as unknown as { _useCurrent (): void; })._useCurrent();
		}
		if (this.gammaMaterial?.cm !== undefined) gl.colorMask(true, true, true, true);
	}
	//#endregion

	protected override _render (renderer: PIXI.Renderer): void {
		ensureBlendMode(renderer, this.customBlend);
		const u = this.shader.uniforms;
		u.uAlpha = this.worldAlpha;

		const unity = this.unity;
		if (unity && this.gammaMaterial?.gl) {
			if (!validateProgram(renderer, unity.program)) {
				unityFailed.add(this.gammaMaterial.gl);
				this.unity = null;
				this.shader.program = getProgram(this.kind);
			} else {
				const w = renderer.width, h = renderer.height;
				u._ScreenParams = new Float32Array([w, h, 1 + 1 / w, 1 + 1 / h]);
			}
		}

		renderer.batch.flush();
		const state = this.unity ? this.beginUnityState(renderer) : false;
		super._render(renderer);
		if (state) this.endUnityState(renderer);
	}
}

/** Game GLSL data which failed to compile, rendered with approximated shader */
const unityFailed = new WeakSet<UnityGLSLData>();

/**
 * Compiles programs of materials before first draw, shader compile on first appearance of effect
 * (tens of ms per program on mobile) would stall animation. Called once per model and renderer.
 */
export function warmupPrograms (renderer: PIXI.Renderer, materials: MaterialData[]) {
	const compile = (program: PIXI.Program) => {
		if (!program.glPrograms[renderer.CONTEXT_UID])
			renderer.shader.generateProgram({ program } as PIXI.Shader); // only `program` is used
	};
	for (const mat of materials) {
		if (mat.gl && !unityFailed.has(mat.gl)) {
			if (validateProgram(renderer, unityProgram(mat.gl).program)) continue;
			unityFailed.add(mat.gl);
		}
		compile(getProgram(shaderKindOf(mat.sh, mat.b[0])));
	}
}

const UNIFORM_SIZE: Record<string, number> = {
	float: 1, int: 1, bool: 1, uint: 1,
	vec2: 2, vec3: 3, vec4: 4, ivec2: 2, ivec3: 3, ivec4: 4,
	mat2: 4, mat3: 9, mat4: 16,
};

/** Unity builtin uniforms (camera looking at XY plane from -Z, orthographic) */
function unityBuiltin (name: string, t: number): ArrayLike<number> | null {
	switch (name) {
		case "_Time": return [t / 20, t, t * 2, t * 3];
		case "_SinTime": return [Math.sin(t / 8), Math.sin(t / 4), Math.sin(t / 2), Math.sin(t)];
		case "_CosTime": return [Math.cos(t / 8), Math.cos(t / 4), Math.cos(t / 2), Math.cos(t)];
		case "unity_DeltaTime": return [1 / 60, 60, 1 / 60, 60];
		case "_ProjectionParams": return [1, 0.3, 1000, 1 / 1000];
		case "_ZBufferParams": return [1, 0, 1, 0];
		case "unity_OrthoParams": return [1, 1, 0, 1];
		case "_WorldSpaceCameraPos": return [0, 0, -10, 0];
		case "_WorldSpaceLightPos0": return [0, 0, -1, 0];
		case "_LightColor0": return [1, 1, 1, 1];
		case "glstate_lightmodel_ambient": return [0.2, 0.2, 0.2, 1];
		case "unity_ColorSpaceLuminance": return [0.22, 0.707, 0.071, 1];
		case "_ScreenParams": return null; // set while rendering
	}
	return null;
}

/** Unity `CompareFunction` -> GL */
function glCompare (gl: WebGLRenderingContext, v: number): number {
	switch (v) {
		case 1: return gl.NEVER;
		case 2: return gl.LESS;
		case 3: return gl.EQUAL;
		case 4: return gl.LEQUAL;
		case 5: return gl.GREATER;
		case 6: return gl.NOTEQUAL;
		case 7: return gl.GEQUAL;
	}
	return gl.ALWAYS;
}

/** Unity `StencilOp` -> GL */
function glStencilOp (gl: WebGLRenderingContext, v: number): number {
	switch (v) {
		case 1: return gl.ZERO;
		case 2: return gl.REPLACE;
		case 3: return gl.INCR;
		case 4: return gl.DECR;
		case 5: return gl.INVERT;
		case 6: return gl.INCR_WRAP;
		case 7: return gl.DECR_WRAP;
	}
	return gl.KEEP;
}

/** Clears stencil buffer, called before rendering a frame (Pixi does not clear stencil of screen) */
export function clearStencil (renderer: PIXI.Renderer) {
	const gl = renderer.gl;
	gl.clearStencil(0);
	gl.clear(gl.STENCIL_BUFFER_BIT);
}
