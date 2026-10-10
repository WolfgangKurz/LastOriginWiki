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
uniform vec4 uHologram; // segments, speed, power, out power

void main () {
	vec4 tex = texture2D(uSampler, vTextureCoord);
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
#elif KIND == 9 // hologram (approximation of shader forge graph)
	c = 2.0 * tex * vColor * uColor;
	float wave = sin((vRawCoord.y * max(uHologram.x, 0.01) * 6.2831853) + uTime * uHologram.y * 6.2831853);
	c.a *= clamp(0.75 + 0.25 * wave, 0.0, 1.0) * clamp(uHologram.w * 0.5 + 0.5, 0.0, 1.5);
	c.a = clamp(c.a, 0.0, 1.0);
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
