precision mediump float;

varying vec2 vUV;

uniform vec4 uTime;

uniform sampler2D uTexture;
uniform vec4 uTexture_ST;
uniform vec4 uTintColor;

uniform float uSegments;
uniform float uWaveSpeed;
uniform float uWavePower;
uniform float uScreenSegments;
uniform float uScreenPosterize;
uniform float uScreenNoise;
uniform float uOutPower;

uniform sampler2D uFX;
uniform vec4 uFX_ST;

void main() {
	vec3 v1, v2, v3;
	vec4 v4;

	v1.x = exp2(log2(fract((uTime.y * uWaveSpeed + vUV.y) * uSegments)) * uWavePower);
	v2.x = floor(fract(vUV.y * uScreenSegments) * uScreenPosterize) / (uScreenPosterize - 1.0) + 0.899999976;
	v1.x = v2.x * 0.100000001 + v1.x + 0.899999976;

	v2.xy = vUV.xy * uFX_ST.xy + uFX_ST.zw;
	v3.xy = texture2D(uFX, v2.xy).xy;

	v2.xy = vec2(uScreenNoise) * v3.xy + vUV.xy;
	v2.xy = v2.xy * uTexture_ST.xy + uTexture_ST.zw;

	v4 = texture2D(uTexture, v2.xy);
	v2.xyz = v4.xyz * uTintColor.xyz;
	gl_FragColor.w = v4.w;

	v1.xyz = v1.xxx * v2.xyz;
	gl_FragColor.xyz = v1.xyz * vec3(vec3(uOutPower, uOutPower, uOutPower));
}
