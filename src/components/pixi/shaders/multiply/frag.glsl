precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uTexture_ST;

uniform sampler2D uDestination;
uniform vec2 uDestinationSize;

vec4 lerp(vec4 a, vec4 b, float t) {
	return vec4(((a * (1.0 - t)) + (b * t)).rgba);
}

void main() {
	vec2 uvBack = gl_FragCoord.xy / uDestinationSize;
	vec4 color_Back = texture2D(uDestination, uvBack);

	vec2 uvMain = vTextureCoord * uTexture_ST.xy + uTexture_ST.zw;
	vec4 color_Front = texture2D(uSampler, uvMain);

	vec4 color = color_Back * color_Front;
	gl_FragColor = color;
}
