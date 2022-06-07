// mat4
// https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/3.4.1/gl-matrix-min.js

"use strict";
(() => {
	const mat4 = glMatrix.mat4;

	const video = document.querySelector("video");
	const canvas = document.querySelector("canvas");

	function init(w, h) {
		const gl = canvas.getContext("webgl", { premultipliedAlpha: false }) ||
			canvas.getContext("experimental-webgl", { premultipliedAlpha: false });

		if (!gl) {
			console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
			return false;
		}

		const vsSource = `
		attribute vec4 aVertexPosition;
		attribute vec2 aTextureCoord;
	
		uniform mat4 uMVMatrix;
		uniform mat4 uPMatrix;

		varying highp vec2 vTextureCoord;

		void main() {
			gl_Position = uPMatrix * uMVMatrix * aVertexPosition;
			vTextureCoord = aTextureCoord;
		}
		`;

		const fsSource = `
		varying highp vec2 vTextureCoord;

		uniform sampler2D uTexture;
		uniform sampler2D uMask;

		void main() {
			highp vec4 mask = texture2D(uMask, vec2(vTextureCoord.s, vTextureCoord.t));
			highp vec4 tex = texture2D(uTexture, vec2(vTextureCoord.s, vTextureCoord.t));
			mask[3] = (mask[0] + mask[1] + mask[2]) / 3.0;
			// mask[3] = (mask[3] - (16.0 / 255.0)) / 220.0 * 255.0; // 15 ~ 235 color range fix
			mask[0] = 1.0;
			mask[1] = 1.0;
			mask[2] = 1.0;
			gl_FragColor = tex * mask;
		}
		`;

		function newTexture(gl) {
			const texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			return texture;
		}

		function initBuffers(gl) {
			const positions = [
				-1.0, 1.0,
				1.0, 1.0,
				-1.0, -1.0,

				1.0, 1.0,
				1.0, -1.0,
				-1.0, -1.0,
			];

			const positionBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

			const texCoords = [
				0.0, 0.0,
				1.0, 0.0,
				0.0, 1.0,

				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,
			];

			const texBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

			return { position: positionBuffer, texture: texBuffer };
		}

		function drawScene(gl, programInfo, buffers) {
			gl.enable(gl.TEXTURING);
			gl.enable(gl.TEXTURE_2D);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

			gl.clearColor(0.0, 0.0, 0.0, 0.0);
			gl.clear(gl.COLOR_BUFFER_BIT);

			const zNear = 0.1;
			const zFar = 100.0;

			const projectionMatrix = mat4.create();
			mat4.ortho(projectionMatrix, -1.0, 1.0, -1.0, 1.0, zNear, zFar);

			const modelViewMatrix = mat4.create();
			mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -1.0]);

			{
				gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
				gl.vertexAttribPointer(
					programInfo.attribLocations.vertexPosition,
					2, // x, y
					gl.FLOAT,
					false, // normalize
					0, // stride
					0, // offset
				);
				gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

				gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texture);
				gl.vertexAttribPointer(
					programInfo.attribLocations.textureCoord,
					2, // x,y
					gl.FLOAT,
					false, // normalize
					0, // stride
					0, // offset
				);
				gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
			}

			gl.useProgram(programInfo.program);

			gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
			gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

			if (texTexture) {
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, texTexture);
				gl.uniform1i(programInfo.uniformLocations.uTexture, 0);
			}

			if (texMask) {
				gl.activeTexture(gl.TEXTURE1);
				gl.bindTexture(gl.TEXTURE_2D, texMask);
				gl.uniform1i(programInfo.uniformLocations.uMask, 1);
			}

			{
				const offset = 0;
				const vertexCount = 3 * 2;
				gl.drawArrays(gl.TRIANGLES, offset, vertexCount);
			}
		}

		function initShaderProgram(gl, vsSource, fsSource) {
			const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
			const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

			const shaderProgram = gl.createProgram();
			gl.attachShader(shaderProgram, vertexShader);
			gl.attachShader(shaderProgram, fragmentShader);
			gl.linkProgram(shaderProgram);

			if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
				console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
				return null;
			}

			return shaderProgram;
		}

		function loadShader(gl, type, source) {
			const shader = gl.createShader(type);
			gl.shaderSource(shader, source);
			gl.compileShader(shader);

			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
				gl.deleteShader(shader);
				return null;
			}

			return shader;
		}

		const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
		const programInfo = {
			program: shaderProgram,
			attribLocations: {
				vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
				textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
			},
			uniformLocations: {
				projectionMatrix: gl.getUniformLocation(shaderProgram, "uPMatrix"),
				modelViewMatrix: gl.getUniformLocation(shaderProgram, "uMVMatrix"),
				uTexture: gl.getUniformLocation(shaderProgram, "uTexture"),
				uMask: gl.getUniformLocation(shaderProgram, "uMask"),
			},
		};

		const texTexture = newTexture(gl);
		const texMask = newTexture(gl);

		const buffers = initBuffers(gl);
		return {
			render: () => drawScene(gl, programInfo, buffers),
			updateTexture: (image) => {
				gl.bindTexture(gl.TEXTURE_2D, texTexture);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
			},
			updateMask: (image) => {
				gl.bindTexture(gl.TEXTURE_2D, texMask);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
			},
		};
	}

	const getSnapshot = (() => {
		const __canvas0 = document.createElement("canvas");
		const __canvas1 = document.createElement("canvas");
		const __canvas2 = document.createElement("canvas");

		document.body.appendChild(__canvas0)
		document.body.appendChild(__canvas1)
		document.body.appendChild(__canvas2)

		return (src, w, h) => {
			const hw = w / 2;

			__canvas0.width = w;
			__canvas0.height = h;
			__canvas1.width = __canvas2.width = hw;
			__canvas1.height = __canvas2.height = h;

			let ctx = __canvas0.getContext("2d");
			ctx.clearRect(0, 0, w, h);
			ctx.drawImage(src, 0, 0, w, h, 0, 0, w, h);

			ctx = __canvas1.getContext("2d");
			ctx.clearRect(0, 0, hw, h);
			ctx.drawImage(__canvas0, 0, 0, hw, h, 0, 0, hw, h);

			ctx = __canvas2.getContext("2d");
			ctx.clearRect(0, 0, hw, h);
			ctx.drawImage(__canvas0, hw, 0, hw, h, 0, 0, hw, h);

			return [__canvas1, __canvas2];
		};
	})();

	(() => {
		let render, updateTexture, updateMask;
		let w, h;

		video.addEventListener("canplaythrough", () => {
			w = video.videoWidth;
			h = video.videoHeight;

			canvas.width = w / 2;
			canvas.height = h;

			const ret = init(w, h);;
			render = ret.render;
			updateTexture = ret.updateTexture;
			updateMask = ret.updateMask;
		});

		function update() {
			if (!render || !updateTexture || !updateMask) {
				requestAnimationFrame(update);
				return;
			}

			const frame = getSnapshot(video, w, h);

			updateTexture(frame[0]);
			updateMask(frame[1]);

			render();

			requestAnimationFrame(update);
		}
		update();
	})();
})();
