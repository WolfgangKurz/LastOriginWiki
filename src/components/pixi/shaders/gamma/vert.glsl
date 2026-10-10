precision highp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 uMainST;

varying vec2 vTextureCoord;
varying vec2 vRawCoord;
varying vec4 vColor;

void main () {
	gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

	// uv is stored with flipped v (0 = top), apply Unity tiling/offset in Unity uv space
	vec2 uv = vec2(aTextureCoord.x, 1.0 - aTextureCoord.y) * uMainST.xy + uMainST.zw;
	vTextureCoord = vec2(uv.x, 1.0 - uv.y);
	vRawCoord = aTextureCoord;
	vColor = aColor;
}
