precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uTexture_ST;

uniform vec4 uTintColor;

void main() {
	vec2 uvMain = vTextureCoord * uTexture_ST.xy + uTexture_ST.zw;
	vec4 color_Front = texture2D(uSampler, uvMain);

	vec4 color = color_Front * uTintColor;
	color.rgb *= color.a;

	gl_FragColor = color;
}
