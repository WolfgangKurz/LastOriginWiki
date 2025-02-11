precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uTexture_ST;
uniform vec4 uTintColor;

uniform sampler2D uDestination;
uniform vec2 uDestinationSize;

void main() {
	vec2 uvBack = gl_FragCoord.xy / uDestinationSize;
	vec4 color_Back = texture2D(uDestination, uvBack);

	vec2 uvMain = vTextureCoord * uTexture_ST.xy + uTexture_ST.zw;
	vec4 color_Front = texture2D(uSampler, uvMain);
	
	vec4 color = 2.0 * color_Back * uTintColor * color_Front;
	color.a = clamp(color.a, 0.0, 1.0);

	gl_FragColor = color;
}
