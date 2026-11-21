import * as PIXI from "pixi.js";

/**
 * Game GLSL (GLES3, `#version 300 es`) of Unity shaders, run as is on WebGL2.
 * Converter embeds sources into material (`MaterialData.gl`, lo-toolkit `tools/charmodel/unity_glsl.py`).
 *
 * Sources are patched to fit gamma mesh:
 * - vertex inputs (`in_POSITION0`, `in_TEXCOORD0`, `in_COLOR0`, ...) are mapped to `aVertexPosition` (model space),
 *   `aTextureCoord` (stored with flipped v, given as Unity uv) and `aColor`, missing streams are default values,
 *   `in_TEXCOORD0..3` of particles with vertex streams are packed `aStream0..3`
 * - matrices (`hlslcc_mtx4x4*` uniforms) become globals set by wrapping `main`, view-projection is
 *   `projectionMatrix * translationMatrix` of Pixi, others (object to world, ...) are identity as positions are in model space
 * - `texture(...)` samples with flipped v (textures are uploaded top row first, Unity uv has v = 0 at bottom)
 * - container fade (`uAlpha`, `uFadeMode`) is applied to output by wrapping `main`
 * - `layout(location)` on uniforms (not allowed in GLSL ES 3.00) is disabled
 */

export interface UnityGLSLData {
	/** vertex source */
	v: string;
	/** fragment source */
	f: string;
	/** property defaults used by sources, `[4 values]` */
	pd: Record<string, number[]>;
	/** default texture names (`white`, `black`, `gray`, `bump`) of textures not set by material */
	td: Record<string, string>;
}

export interface UnityUniform {
	name: string;
	type: string;
	/** array length, `0` if not array */
	length: number;
}

export interface UnityProgram {
	program: PIXI.Program;
	uniforms: UnityUniform[];
}

/** `aStreamN` are packed particle vertex streams (`ParticleRendererData.vs`), used when `uGammaStreams` is set */
const STREAM_DEFAULTS: Record<string, string> = {
	in_POSITION0: "vec4(aVertexPosition, 0.0, 1.0)",
	in_TEXCOORD0: "(uGammaStreams > 0.5 ? aStream0 : vec4(aTextureCoord.x, 1.0 - aTextureCoord.y, 0.0, 0.0))",
	in_TEXCOORD1: "(uGammaStreams > 0.5 ? aStream1 : vec4(0.0, 0.0, 0.0, 1.0))",
	in_TEXCOORD2: "(uGammaStreams > 0.5 ? aStream2 : vec4(0.0, 0.0, 0.0, 1.0))",
	in_TEXCOORD3: "(uGammaStreams > 0.5 ? aStream3 : vec4(0.0, 0.0, 0.0, 1.0))",
	in_COLOR0: "aColor",
	in_NORMAL0: "vec4(0.0, 0.0, -1.0, 0.0)",
	in_TANGENT0: "vec4(1.0, 0.0, 0.0, 1.0)",
};
const SWIZZLE: Record<string, string> = { float: ".x", vec2: ".xy", vec3: ".xyz", vec4: "" };

const RE_INPUT = /^[ \t]*in\s+(?:(?:highp|mediump|lowp)\s+)?(float|vec[234])\s+(in_\w+)\s*;[ \t]*$/gm;
const RE_MATRIX = /^[ \t]*uniform\s+vec4\s+(hlslcc_mtx4x4\w+)\[4\]\s*;[ \t]*$/gm;
const RE_UNIFORM = /\buniform\s+(?:(?:highp|mediump|lowp)\s+)?(\w+)\s+(\w+)\s*(?:\[(\d+)\])?\s*;/g;
const RE_OUTPUT = /\bout\s+(?:(?:highp|mediump|lowp)\s+)?vec4\s+(\w+)\s*;/;

/** Insert lines after `#version` line */
function afterVersion (src: string, lines: string): string {
	const i = src.indexOf("\n");
	return `${src.substring(0, i + 1)}${lines}\n${src.substring(i + 1)}`;
}

function common (src: string): string {
	return src
		.replace("#define UNITY_SUPPORTS_UNIFORM_LOCATION 1", "#define UNITY_SUPPORTS_UNIFORM_LOCATION 0")
		.replace(/\bvoid\s+main\s*\(\s*\)/, "void _unity_main()");
}

function patchVertex (src: string): string {
	const inputs: string[] = [];
	src = src.replace(RE_INPUT, (_, type: string, name: string) => {
		const value = STREAM_DEFAULTS[name] ?? "vec4(0.0, 0.0, 0.0, 1.0)";
		inputs.push(`#define ${name} (${value})${SWIZZLE[type] ?? ""}`);
		return "";
	});

	const matrices: string[] = [];
	src = src.replace(RE_MATRIX, (_, name: string) => {
		matrices.push(name);
		return `vec4 ${name}[4];`;
	});

	const fill = matrices.map(name => (/MatrixVP|glstate_matrix_projection|MatrixP\b/.test(name)
		? `${name}[0] = vec4(_vp[0].xy, 0.0, 0.0); ${name}[1] = vec4(_vp[1].xy, 0.0, 0.0); ` +
			`${name}[2] = vec4(0.0, 0.0, 1.0, 0.0); ${name}[3] = vec4(_vp[2].xy, 0.0, 1.0);`
		: `${name}[0] = vec4(1.0, 0.0, 0.0, 0.0); ${name}[1] = vec4(0.0, 1.0, 0.0, 0.0); ` +
			`${name}[2] = vec4(0.0, 0.0, 1.0, 0.0); ${name}[3] = vec4(0.0, 0.0, 0.0, 1.0);`
	)).join("\n\t");

	src = afterVersion(common(src), [
		"in vec2 aVertexPosition;",
		"in vec2 aTextureCoord;",
		"in vec4 aColor;",
		"in vec4 aStream0;",
		"in vec4 aStream1;",
		"in vec4 aStream2;",
		"in vec4 aStream3;",
		"uniform float uGammaStreams;",
		"uniform mat3 projectionMatrix;",
		"uniform mat3 translationMatrix;",
		...inputs,
	].join("\n"));
	return `${src}
void main () {
	mat3 _vp = projectionMatrix * translationMatrix;
	${fill}
	_unity_main();
}
`;
}

function patchFragment (src: string): string {
	const out = RE_OUTPUT.exec(src)?.[1] ?? "SV_Target0";
	src = common(src)
		.replace(/\btexture\s*\(/g, "_unity_tex(")
		.replace(/\btextureLod\s*\(/g, "_unity_texLod(");

	// helpers placed after declarations (before `_unity_main`), uniforms are declared above
	const helpers = `
vec4 _unity_tex (mediump sampler2D s, vec2 uv) { return texture(s, vec2(uv.x, 1.0 - uv.y)); }
vec4 _unity_tex (mediump sampler2D s, vec2 uv, float bias) { return texture(s, vec2(uv.x, 1.0 - uv.y), bias); }
vec4 _unity_texLod (mediump sampler2D s, vec2 uv, float lod) { return textureLod(s, vec2(uv.x, 1.0 - uv.y), lod); }
vec4 _unity_tex (mediump samplerCube s, vec3 d) { return texture(s, d); }
vec4 _unity_tex (mediump samplerCube s, vec3 d, float bias) { return texture(s, d, bias); }
vec4 _unity_texLod (mediump samplerCube s, vec3 d, float lod) { return textureLod(s, d, lod); }
uniform float uAlpha;
uniform float uFadeMode;
`;
	const m = /\bvoid\s+_unity_main\s*\(\s*\)/.exec(src);
	if (m) src = `${src.substring(0, m.index)}${helpers}${src.substring(m.index)}`;

	return `${src}
void main () {
	_unity_main();
	int fade = int(uFadeMode + 0.5);
	if (fade == 1) ${out}.a *= uAlpha;
	else if (fade == 2) ${out}.rgb = mix(vec3(1.0), ${out}.rgb, uAlpha);
	else ${out} *= uAlpha;
}
`;
}

function uniformsOf (src: string, skip: Set<string>): UnityUniform[] {
	const out: UnityUniform[] = [];
	for (const m of src.matchAll(RE_UNIFORM)) {
		if (skip.has(m[2])) continue;
		out.push({ type: m[1], name: m[2], length: m[3] ? parseInt(m[3], 10) : 0 });
	}
	return out;
}

const cache = new Map<string, UnityProgram>();
const SKIP_UNIFORMS = new Set(["projectionMatrix", "translationMatrix", "uAlpha", "uFadeMode", "uGammaStreams"]);

/** Patched program of game GLSL, cached by sources */
export function unityProgram (gl: UnityGLSLData): UnityProgram {
	const key = gl.v + "\0" + gl.f;
	let p = cache.get(key);
	if (!p) {
		const vs = patchVertex(gl.v);
		const fs = patchFragment(gl.f);
		const uniforms = new Map<string, UnityUniform>();
		for (const u of [...uniformsOf(vs, SKIP_UNIFORMS), ...uniformsOf(fs, SKIP_UNIFORMS)])
			uniforms.set(u.name, u);
		p = {
			program: new PIXI.Program(vs, fs, "gamma-unity"),
			uniforms: [...uniforms.values()],
		};
		cache.set(key, p);
	}
	return p;
}

const validated = new Map<PIXI.Program, boolean>();
/**
 * Compiles program with renderer context (by Pixi, compiled program is kept and used for rendering, no second compile),
 * `false` if not compilable (e.g. WebGL1). Result is cached by program, other contexts compile it when bound.
 */
export function validateProgram (renderer: PIXI.Renderer, program: PIXI.Program): boolean {
	let ok = validated.get(program);
	if (ok === undefined) {
		ok = false;
		if (renderer.context.webGLVersion === 2) {
			const glProgram = program.glPrograms[renderer.CONTEXT_UID]
				?? renderer.shader.generateProgram({ program } as PIXI.Shader); // only `program` is used
			ok = renderer.gl.getProgramParameter(glProgram.program, renderer.gl.LINK_STATUS) as boolean;
			if (!ok) console.warn("[gamma] game GLSL compile failed, approximated shader is used");
		}
		validated.set(program, ok);
	}
	return ok;
}

let blackCube: PIXI.BaseTexture | null = null;
/** Black cube map for reflection probes / cube textures (environment is not reproduced) */
export function defaultCubeTexture (): PIXI.BaseTexture {
	if (!blackCube) {
		const face = () => new PIXI.BufferResource(new Uint8Array([0, 0, 0, 255]), { width: 1, height: 1 });
		const faces = [face(), face(), face(), face(), face(), face()] as const;
		blackCube = new PIXI.BaseTexture(new PIXI.CubeResource([...faces] as unknown as ConstructorParameters<typeof PIXI.CubeResource>[0], {
			width: 1, height: 1,
		}), {
			target: PIXI.TARGETS.TEXTURE_CUBE_MAP,
		});
	}
	return blackCube;
}

let defaultTextures: Record<string, PIXI.Texture> | null = null;
/** Unity default textures (`white`, `black`, `gray`, `bump`, `red`) */
export function defaultTexture (name: string): PIXI.Texture {
	if (!defaultTextures) {
		const make = (r: number, g: number, b: number, a: number) =>
			PIXI.Texture.fromBuffer(new Uint8Array([r, g, b, a]), 1, 1);
		defaultTextures = {
			white: make(255, 255, 255, 255),
			black: make(0, 0, 0, 255),
			gray: make(128, 128, 128, 255),
			grey: make(128, 128, 128, 255),
			bump: make(128, 128, 255, 255),
			red: make(255, 0, 0, 255),
		};
	}
	return defaultTextures[name] ?? defaultTextures.white;
}
