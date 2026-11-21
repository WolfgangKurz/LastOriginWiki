precision mediump float;

// KIND (GammaShaderKind) is defined by program variant, see `fragmentOf`

varying vec2 vTextureCoord;
varying vec2 vRawCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform float uFadeMode;
uniform float uAlpha;
uniform float uAdditionalAlpha;
uniform float uBlendMode;
uniform float uTime;
uniform vec4 uHologram; // `_Segments`, `_speed_wave`, `_pawerofwave`, `_out_power`
uniform vec4 uHologram2; // `_Screen_Segments`, `_Sceen_posterize`, `_Screen_noise` (uSampler2 `_node_4190`, uSubST)
uniform vec2 uPan; // uv panning in texture coordinate space (flipped v)
uniform float uIntensity;
// VFX/MasterShader/Sword
uniform sampler2D uSampler2; // `_Sub_Tex`
uniform vec4 uSubST; // `_Sub_Tex_ST`
uniform vec4 uSword; // dissolve offset, opacity, `_RGB_Tex_floor`, `_Alpha_Tex_floor` (flags resolved by `GammaMesh`)
uniform vec2 uSubPan; // `fract(_Time.y * _Sub_Tex_Panning)`
// LastOne/LO_cloaking: uSampler2 `_node_216` (uSubST), uSampler3 `_FX_mask`, uSampler4 `_noise`, uSampler5 `_fx_img`
uniform sampler2D uSampler3;
uniform sampler2D uSampler4;
uniform sampler2D uSampler5;
uniform vec4 uST3;
uniform vec4 uST4;
uniform vec4 uST5;
uniform vec4 uCloak; // `_change`, `_change_on_fx_power`, `_fx_speed`, `_tiling`
// Alpha Masked - World Coords: uSampler2 `_AlphaTex` (uSubST), `_MaskRotation`, `_IsThisText`
uniform vec2 uMask;

varying vec2 vPosition;

/** Sample by Unity uv (texture coordinate has flipped v) */
vec4 sampleUnity (sampler2D s, vec2 uv) {
	return texture2D(s, vec2(uv.x, 1.0 - uv.y));
}

void main () {
	vec4 tex = texture2D(uSampler, vTextureCoord + uPan);
	vec4 c;

#if KIND == 1 // straight
	c = tex * vColor * uColor;
#elif KIND == 2 // additional alpha
	c = tex * vColor * uColor;
	c.a *= uAdditionalAlpha;
	// premultiplied output, blend mode is selected by material blend factors
	// (Multiply: DstColor/OneMinusSrcAlpha = dst * lerp(1, rgb, a), Screen: OneMinusDstColor/One, ...)
	if (int(uBlendMode + 0.5) == 6) c.rgb = mix(vec3(0.5), c.rgb, c.a); // multiply 2x
	else c.rgb *= c.a;
#elif KIND == 4 // particle 2x tint
	c = 2.0 * vColor * uColor * tex;
#elif KIND == 5 // particle multiply
	vec4 p = vColor * tex;
	c = mix(vec4(1.0), p, p.a);
#elif KIND == 6 // additive soft
	c = vColor * tex;
	c.rgb *= c.a;
#elif KIND == 7 // alpha blended premultiply
	c = vColor * tex * vColor.a;
#elif KIND == 8 // mobile additive
	c = tex * vColor;
#elif KIND == 9 // LastOne/LO_Hologram_noise_Alpha (Shader Forge)
	vec2 uv = vec2(vRawCoord.x, 1.0 - vRawCoord.y); // Unity uv
	// moving bright band + posterized scanlines
	float wave = exp2(log2(max(fract((uTime * uHologram.y + uv.y) * uHologram.x), 1e-6)) * uHologram.z);
	float scan = floor(fract(uv.y * uHologram2.x) * uHologram2.y) / max(uHologram2.y - 1.0, 1e-4) + 0.9;
	float bright = scan * 0.1 + wave + 0.9;
	// glitch: main uv is shifted by noise texture * `_Screen_noise` (animated by clip)
	vec2 noise = sampleUnity(uSampler2, uv * uSubST.xy + uSubST.zw).xy;
	vec4 holo = texture2D(uSampler, vTextureCoord + vec2(noise.x, -noise.y) * uHologram2.z);
	c.rgb = holo.rgb * uColor.rgb * bright * uHologram.w * vColor.rgb;
	c.a = holo.a * vColor.a;
#elif KIND == 11 // VFX/MasterShader: _MainColor * _Main_intensity * tex * vertex color, alpha is tex.a * tex.r (straight)
	c.rgb = abs(uColor.rgb * tex.rgb) * vColor.rgb;
	c.a = clamp(tex.a * tex.r * vColor.a, 0.0, 1.0);
#elif KIND == 12 // Shader Forge/Hexagon_plane: vertex color * intensity * tex, brighter to top (1.5 * uv.y)
	float uvY = 1.0 - vRawCoord.y; // raw Unity uv
	c.rgb = vColor.rgb * uIntensity * vColor.a * tex.rgb * (1.5 * uvY);
	c.a = tex.a * vColor.a;
#elif KIND == 13 // VFX/MasterShader/Sword, same as game GLSL (custom data stream is default (0, 0, 0, 1))
	vec2 uvRaw = vec2(vRawCoord.x, 1.0 - vRawCoord.y); // Unity uv
	vec2 su = uvRaw * uSubST.xy + uSubST.zw + uSubPan;
	float sub = texture2D(uSampler2, vec2(su.x, 1.0 - su.y)).y;
	float d = uSword.x;
	float x = d + sub;
	if (uSword.z > 0.5) x = floor(x);
	x = d + x + 0.1;
	if (uSword.w > 0.5) x = floor(x);
	x = clamp(x, 0.0, 1.0);
	// main texture: red is alpha, blue is color (`uPan` is `_panner_offset` on u)
	x = clamp(x * tex.r, 0.0, 1.0);
	c.rgb = tex.b * uColor.rgb * vColor.rgb;
	c.a = clamp(uSword.y * x * vColor.a, 0.0, 1.0);
#elif KIND == 14 // LastOne/LO_cloaking, same as game GLSL (vertex alpha is not used)
	vec2 uvC = vec2(vRawCoord.x, 1.0 - vRawCoord.y); // Unity uv
	float n216 = sampleUnity(uSampler2, vPosition * uSubST.xy + uSubST.zw).a; // world space
	float mask = sampleUnity(uSampler3, uvC * uCloak.w * uST3.xy + uST3.zw).r;
	float noise = sampleUnity(uSampler4, uvC * uST4.xy + uST4.zw).r;
	float dis = uCloak.x * 2.6 + mask + noise - 1.6;
	dis = 1.0 - clamp(dis * 2.3 - 1.3, 0.0, 1.0);
	float a = tex.a * uColor.a; // `_main_color.a`
	float alpha = a * n216 + dis * a;
	vec3 fx1 = sampleUnity(uSampler5, vec2(dis * uST5.x, 0.0) + uST5.zw).rgb;
	vec3 rgb = tex.rgb * vColor.rgb * uColor.rgb + fx1;
	vec3 fx2 = sampleUnity(uSampler5, vec2(noise + sin(uTime * uCloak.z), 1.0) * uST5.xy + uST5.zw).rgb;
	c.rgb = alpha * fx2 * uCloak.x * uCloak.y + rgb;
	c.a = alpha;
#elif KIND == 15 // Alpha Masked - World Coords (Z axis), same as game GLSL, premultiplied output
	float ms = sin(uMask.x), mc = cos(uMask.x);
	vec2 mp = vec2(mc * vPosition.x + ms * vPosition.y, -ms * vPosition.x + mc * vPosition.y);
	float mask = sampleUnity(uSampler2, mp * uSubST.xy + uSubST.zw).r;
	float ma = mask * tex.a * vColor.a * uColor.a; // vertex color is `in_COLOR0 * _Color`
	c.rgb = ma * clamp(tex.rgb + uMask.y, 0.0, 1.0) * vColor.rgb * uColor.rgb;
	c.a = ma;
#else // sprite default, standard
	c = tex * vColor * uColor;
	c.rgb *= c.a;
#endif

	int fade = int(uFadeMode + 0.5);
	if (fade == 1) c.a *= uAlpha;
	else if (fade == 2) c.rgb = mix(vec3(1.0), c.rgb, uAlpha);
	else c *= uAlpha;

	gl_FragColor = c;
}
