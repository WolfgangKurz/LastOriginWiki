precision mediump float;

varying vec2 vUV;

uniform sampler2D uSampler;
uniform vec4 uTexture_ST;

uniform sampler2D uReference;
uniform vec2 uScreenTextureSize;

vec4 lerp(vec4 a, vec4 b, float t) {
	return vec4(((a * (1.0 - t)) + (b * t)).rgba);
}

void main() {
	vec2 uvBack = gl_FragCoord.xy / uScreenTextureSize;
	vec4 color_Back = texture2D(uReference, uvBack);

	vec2 uvMain = vUV * uTexture_ST.xy + uTexture_ST.zw;
	vec4 color_Front = texture2D(uSampler, uvMain);

	vec4 color = color_Back * color_Front;
	gl_FragColor = color;
}
