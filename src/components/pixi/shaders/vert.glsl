// source: defaults/default.vert
// wgsl to glsl
//   vTextureCoord -> vUV
precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vUV;

void main(void) {
	gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
	vUV = aTextureCoord;
}
