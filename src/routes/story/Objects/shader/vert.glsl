precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aUV;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying vec2 vUV;

void main() {
	vUV = aUV;
	gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}
