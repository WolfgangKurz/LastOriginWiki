precision mediump float;

varying vec2 vUV;

uniform sampler2D uSampler;
uniform vec4 uTexture_ST;
uniform vec4 uTintColor;

uniform sampler2D uReference;
uniform vec2 uScreenSize;

void main() {
	vec2 uvBack = gl_FragCoord.xy / uScreenSize;
	vec4 color_Back = texture2D(uReference, uvBack);

	vec2 uvMain = vUV * uTexture_ST.xy + uTexture_ST.zw;
	vec4 color_Front = texture2D(uSampler, uvMain);
	
	vec4 color = 2.0 * color_Back * uTintColor * color_Front;
	color.a = clamp(color.a, 0.0, 1.0);

	gl_FragColor = color;
}
