import { Input, OrthoCamera, Vector3 } from "@esotericsoftware/spine-webgl";

export class CameraController {
	constructor (public canvas: HTMLCanvasElement, public camera: OrthoCamera) {
		let cameraX = 0, cameraY = 0, cameraZoom = 0;
		let mouseX = 0, mouseY = 0;
		let lastX = 0, lastY = 0;
		let initialZoom = 0;

		const clamp = (value: number, min: number, max: number) =>
			Math.min(Math.max(value, min), max);

		new Input(canvas).addListener({
			down: (x: number, y: number) => {
				cameraX = camera.position.x;
				cameraY = camera.position.y;
				mouseX = lastX = x;
				mouseY = lastY = y;
				initialZoom = camera.zoom;
			},
			dragged: (x: number, y: number) => {
				const deltaX = x - mouseX;
				const deltaY = y - mouseY;
				const originWorld = camera.screenToWorld(
					new Vector3(0, 0),
					canvas.clientWidth,
					canvas.clientHeight,
				);
				const deltaWorld = camera.screenToWorld(
					new Vector3(deltaX, deltaY),
					canvas.clientWidth,
					canvas.clientHeight,
				).sub(originWorld);
				camera.position.set(cameraX - deltaWorld.x, cameraY - deltaWorld.y, 0);
				camera.update();
				lastX = x;
				lastY = y;
			},
			wheel: (delta: number) => {
				const zoomAmount = delta / 500 * camera.zoom;

				const min = (canvas.width > canvas.height
					? 1000 / canvas.width
					: 1000 / canvas.height) / window.devicePixelRatio;
				const max = min * 10;
				console.log(min, max);
				const newZoom = clamp(camera.zoom + zoomAmount, min, max);

				if (newZoom > 0) {
					let x = 0, y = 0;
					if (delta < 0) {
						x = lastX; y = lastY;
					} else {
						const viewCenter = new Vector3(canvas.clientWidth / 2 + 15, canvas.clientHeight / 2);
						const mouseToCenterX = lastX - viewCenter.x;
						const mouseToCenterY = canvas.clientHeight - 1 - lastY - viewCenter.y;
						x = viewCenter.x - mouseToCenterX;
						y = canvas.clientHeight - 1 - viewCenter.y + mouseToCenterY;
					}

					const oldDistance = camera.screenToWorld(new Vector3(x, y), canvas.clientWidth, canvas.clientHeight);
					camera.zoom = newZoom;
					camera.update();

					const newDistance = camera.screenToWorld(new Vector3(x, y), canvas.clientWidth, canvas.clientHeight);
					camera.position.add(oldDistance.sub(newDistance));
					camera.update();
				}
			},
			zoom: (initialDistance, distance) => {
				const newZoom = initialDistance / distance;
				camera.zoom = initialZoom * newZoom;
			},
			up: (x: number, y: number) => {
				lastX = x;
				lastY = y;
			},
			moved: (x: number, y: number) => {
				lastX = x;
				lastY = y;
			},
		});
	}
}
