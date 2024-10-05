import * as PIXI from "pixi.js";

import { quat2eul } from "@/libs/Math";

interface RECT {
	x: number;
	y: number;
	w: number;
	h: number;
}
interface BOUNDING_RECT {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}
interface SPRITE_VECTOR extends RECT {
	u: number; // Pixels per Unit
	px: number; // pivot x
	py: number; // pivot y
	rc: RECT; // texture rect
}
type OBJECT_VECTOR = [
	x: number, y: number, z: number,
	sx: number, sy: number, sz: number,
	rx: number, ry: number, rz: number, rw: number,
];
type CLIP_PATH = Array<[x: number, y: number]>;
interface SPRITE_DATA {
	name: string;
	vector: SPRITE_VECTOR;
	tex: number;
	v: CLIP_PATH;
}
type SPRITE_DATA_IMAGE = SPRITE_DATA & { image: HTMLCanvasElement; };
interface MODEL_OBJECT {
	id: number;
	parent: number;

	name: string;
	vector: OBJECT_VECTOR;

	color?: [r: number, g: number, b: number, a: number];
	flip?: [x: boolean, y: boolean];
	shader?: string[];
	sprite?: number;
}
interface MODEL_DATA {
	sprite: SPRITE_DATA[];
	face: SPRITE_DATA[];
	object: {
		[renderOrder: number]: MODEL_OBJECT[];
	};
	list: {
		bg: string[],
		dialogDeactive: string[],
	} & ({
		parts: string[],
	} | {
		swapActive: string[],
		swapInactive: string[],
	} | {});
}
type COLOR_TINT = [r: number, g: number, b: number, a: number];

interface GameObjectData {
	id: number;
	name: string;
	// transform: DOMMatrix;
	pixiContainer: PIXI.Sprite;
	object: MODEL_OBJECT;
	sprite?: SPRITE_DATA_IMAGE;
	zIndex?: number;
	tint: COLOR_TINT;
	blend?: "multiply" | "screen";
	visible: boolean;
}
interface GameNodeData {
	id: number;
	parent: number;
	name: string;
}

interface Render2DModelOptions {
	root: string;
	target: string;

	hideParts?: boolean;
	hideBG?: boolean;
	hideDialog?: boolean;

	face?: string;
	onFaceList?: (faceNames: string[]) => void;
}

let _cachedCanvas: HTMLCanvasElement;
const _bgCanvas = document.createElement("canvas");

/**
 * Unity 2DModel Renderer
 */
export async function render2DModel (options: Render2DModelOptions): Promise<HTMLCanvasElement> {
	// make sprites with clip path
	const createClippedTexture = (
		image: HTMLImageElement,
		vector: SPRITE_VECTOR,
		clipPt: CLIP_PATH,
		cb: (canvas: HTMLCanvasElement) => void,
	): void => {
		const x = vector.rc.w / 2 - (vector.w * vector.px);
		const y = vector.rc.h / 2 - (vector.h * (1 - vector.py));
		const w = Math.ceil(vector.rc.w);
		const h = Math.ceil(vector.rc.h);

		const cv = document.createElement("canvas");
		cv.width = w;
		cv.height = h;

		const ctx = cv.getContext("2d");
		if (!ctx) return;

		ctx.beginPath();
		clipPt.forEach((p, i) => {
			const _x = x + p[0];
			const _y = y + vector.h - p[1];
			if (i % 3 === 0)
				ctx.moveTo(_x, _y);
			else
				ctx.lineTo(_x, _y);
		});
		ctx.clip();

		ctx.drawImage(
			image,
			vector.x, (image.height - vector.h - vector.y), // bottom y is zero
			vector.w, vector.h,
			x, y,
			vector.w, vector.h,
		);

		cb(cv);

		cv.remove();
	};
	function setNodeTransform (obj: MODEL_OBJECT, target: PIXI.Container) {
		const rot = quat2eul(obj.vector.slice(6, 10) as Tuple<number, 4>);

		if (obj.id <= 2) {
			target.setTransform(
				0, 0, 1, 1,
				-rot.z, // Unity using inverted angle
				rot.x,
				rot.y,
			);
			return;
		}

		const ppu = obj.sprite ? spriteMap[obj.sprite].vector.u : 100;
		target.setTransform(
			obj.vector[0] * ppu,
			-obj.vector[1] * ppu,

			obj.vector[3],
			obj.vector[4],

			-rot.z, // Unity using inverted angle
			rot.x,
			rot.y,
		);
	};

	const jsonData = await fetch(`${options.root}${options.target}/data.json`)
		.then(r => r.json() as Promise<MODEL_DATA>);


	const hideBGList = jsonData.list.bg || [];
	const dialogDeactiveList = jsonData.list.dialogDeactive || [];
	const hidePartList: string[] = [];
	const swapActiveList: string[] = [];
	const swapInactiveList: string[] = [];

	if ("parts" in jsonData.list)
		hidePartList.push(...jsonData.list.parts);
	else if ("swapActive" in jsonData.list) {
		swapActiveList.push(...jsonData.list.swapActive);
		swapInactiveList.push(...jsonData.list.swapInactive);
	}

	const nodes: Record<number, MODEL_OBJECT> = {};
	Object.values(jsonData.object) // Make node table (id -> object)
		.flat()
		.forEach(node => (nodes[node.id] = node));

	// preload all images
	type IMAGE_LOAD_RESULT = {
		tex: string;
		img: HTMLImageElement;
	};
	const images = await Promise.all(
		[
			...new Set(jsonData.sprite.flat().map(o => `${o.tex}.webp`)),
			...new Set(jsonData.face.map(o => `${o.tex}.webp`)),
		].map(tex => new Promise<IMAGE_LOAD_RESULT>((resolve, reject) => {
			const img = new Image();
			const loadHandler = () => {
				img.removeEventListener("load", loadHandler); // remove handler
				img.removeEventListener("error", errorHandler);
				resolve({ tex, img });
			};
			const errorHandler = (e: ErrorEvent) => {
				img.removeEventListener("load", loadHandler); // remove handler
				img.removeEventListener("error", errorHandler);
				reject(e);
			};

			img.addEventListener("load", loadHandler);
			img.addEventListener("error", errorHandler);
			img.crossOrigin = "Anonymous";
			img.src = `${options.root}${options.target}/${tex}`;
		})),
	);
	const texMap: Record<string, HTMLImageElement> = {};
	images.forEach(({ tex, img }) => {
		const id = tex.substring(0, tex.lastIndexOf(".")); // basename
		texMap[id] = img;
	});

	// pre-apply filters on all sprites
	type SPRITE_MAP = Record<string, SPRITE_DATA_IMAGE>;
	const spriteMap: SPRITE_MAP = {};
	await new Promise<void>(async resolve => {
		const sl = [
			...jsonData.sprite,
			...jsonData.face.map(f => ({ ...f, name: `FACE__${f.name}` })), // face sprite name
		];

		await Promise.all(sl.map(s => new Promise<void>(resolve2 => {
			createClippedTexture(texMap[s.tex], s.vector, s.v, image => {
				image.toBlob(blob => {
					if (!blob) {
						console.error(`[2DModelRenderer] Failed to apply filter to texture ${s.tex} from sprite ${s.name}`);
						return;
					}

					spriteMap[s.name] = {
						...s,
						image,
					};

					resolve2();
				}, "image/png");
			});
		})));
		resolve();
	});

	// minimum renderOrder
	const zMin = Math.min(...Object.keys(jsonData.object).map(k => parseInt(k, 10)));

	// Make Id-Parent pair list
	const idParentPairData: Record<number, GameNodeData> = {};
	Object.values(jsonData.object)
		.flat()
		.forEach(r => {
			idParentPairData[r.id] = {
				id: r.id,
				parent: r.parent,
				name: r.name,
			};
		});

	// Traverse GameObject tree
	const gameObjectList: GameObjectData[] = [];
	Object.keys(jsonData.object)
		.map(k => parseInt(k, 10))
		.sort((a, b) => a - b) // sort by renderOrder
		.forEach(renderOrder => jsonData.object[renderOrder]
			// .filter(o => "color" in o) // has SpriteRenderer (even if sprite has not set)
			.forEach(o => {
				const color: Tuple<number, 4> = [1, 1, 1, 1];
				let blend: GameObjectData["blend"] | "" = "";

				// color tint
				if ("color" in o && o.color) {
					color[0] = o.color[0];
					color[1] = o.color[1];
					color[2] = o.color[2];
					color[3] = o.color[3];
				}

				if ("shader" in o && o.shader) {
					const s = o.shader[0];
					switch (s) {
						case "multiply":
							blend = "multiply";
							break;
						case "additive":
						case "additive-soft":
							blend = "screen";
							break;
					}
				}

				const cont = new PIXI.Sprite(o.sprite ? PIXI.Texture.from(spriteMap[o.sprite].image) : PIXI.Texture.EMPTY);
				cont.name = o.name;
				cont.anchor.set(.5, .5);
				setNodeTransform(o, cont);

				const img: GameObjectData = {
					id: o.id,

					name: o.name,
					sprite: o.sprite ? spriteMap[o.sprite] : undefined,
					object: o,
					zIndex: (renderOrder - zMin + 1),
					// transform,
					pixiContainer: cont,
					tint: color,
					blend: blend || undefined,
					visible: true,
				};
				gameObjectList.push(img);
			})
		);

	const pixiRoot = new PIXI.Container();
	{ // Make container parent tree
		gameObjectList.forEach(o => {
			const p = idParentPairData[o.id];
			if (!p) return;

			if (p.parent === 0) {
				o.pixiContainer.setParent(pixiRoot);
				o.pixiContainer.updateTransform();
				return;
			}

			const po = gameObjectList.find(r => r.id === p.parent);
			if (!po) return;

			o.pixiContainer.setParent(po.pixiContainer);
			o.pixiContainer.updateTransform();
		});
	}

	{ // Setup Invisible
		const items: string[] = [ // to restore visible to true
			...hidePartList,
			...swapActiveList,
			...swapInactiveList,
			...hideBGList,
			...dialogDeactiveList,
		].unique();
		const namesToHide: string[] = [
			...(options.hideParts ? hidePartList : []),
			...(options.hideParts ? swapActiveList : swapInactiveList),
			...(options.hideBG ? hideBGList : []),
			...(options.hideDialog ? dialogDeactiveList : []),
		].unique();

		gameObjectList.forEach(r => {
			if (!items.includes(r.name)) return;
			r.visible = !namesToHide.includes(r.name);
		});
	}

	{ // Setup face
		const faceIndex = gameObjectList.findIndex(g => g.name === "face");
		const faceTarget = gameObjectList[faceIndex];

		const face = options.face;
		if (faceIndex >= 0 && faceTarget) {
			if (face && jsonData.face.some(f => f.name === face)) {
				const sprite = spriteMap[`FACE__${face}`];
				gameObjectList[faceIndex].sprite = sprite;
				// gameObjectList[faceIndex].transform = calculateMatrix(faceTarget.object, sprite);
			}
		}
	}

	// function debugTree (entry: PIXI.DisplayObject, depth: number = 0) {
	// 	console.log("  ".repeat(depth) + entry.name);
	// 	if ("children" in entry)
	// 		(entry as PIXI.Container).children.forEach(c => debugTree(c, depth + 1));
	// }
	// debugTree(pixiRoot);

	function hiddenHierarchy (go: GameObjectData): boolean {
		if (!go.visible) return true;

		const pair = idParentPairData[go.id];
		if (!pair) return false;

		const parent = gameObjectList.find(r => r.id == pair.parent);
		if (!parent) return false;

		return hiddenHierarchy(parent);
	}

	// Calculate bound-box
	const bounds: BOUNDING_RECT = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
	gameObjectList.filter(r => !hiddenHierarchy(r) && r.sprite?.image).forEach(el => {
		const w = el.sprite!.image!.width;
		const h = el.sprite!.image!.height;

		// const tf = el.transform;
		const tf = new DOMMatrix([
			el.pixiContainer.worldTransform.a,
			el.pixiContainer.worldTransform.b,
			el.pixiContainer.worldTransform.c,
			el.pixiContainer.worldTransform.d,
			el.pixiContainer.worldTransform.tx,
			el.pixiContainer.worldTransform.ty,
		]);

		type Pt = Tuple<number, 4>;
		type Matrix = Tuple<number, 16>;
		function tfPt (matrix: Matrix, point: Pt): Pt {
			const [x, y, z, w] = point;
			const xPrime = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w;
			const yPrime = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w;
			const zPrime = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w;
			const wPrime = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w;
			if (wPrime === 0) return [xPrime, yPrime, zPrime, 1];
			return [xPrime / wPrime, yPrime / wPrime, zPrime / wPrime, 1];
		}
		function getBoundingBox (matrix: Matrix, width: number, height: number): BOUNDING_RECT {
			const corners: Pt[] = [
				[0, 0, 0, 1],
				[width, 0, 0, 1],
				[0, height, 0, 1],
				[width, height, 0, 1],
			];
			const transformedPoints = corners.map(corner => tfPt(matrix, corner));

			let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
			transformedPoints.forEach(([x, y]) => {
				if (x < minX) minX = x;
				if (y < minY) minY = y;
				if (x > maxX) maxX = x;
				if (y > maxY) maxY = y;
			});

			return { minX, minY, maxX, maxY };
		}

		const bounding = getBoundingBox([...tf.toFloat32Array()] as Tuple<number, 16>, w, h);
		if (bounding.minX < bounds.minX) bounds.minX = bounding.minX;
		if (bounding.minY < bounds.minY) bounds.minY = bounding.minY;
		if (bounding.maxX > bounds.maxX) bounds.maxX = bounding.maxX;
		if (bounding.maxY > bounds.maxY) bounds.maxY = bounding.maxY;
	});
	const inf1 = (v: number): number => Number.isFinite(v) ? v : 1;

	{
		pixiRoot.calculateBounds();

		const b = pixiRoot.getBounds();
		bounds.minX = b.left;
		bounds.minY = b.top;
		bounds.maxX = b.right;
		bounds.maxY = b.bottom;
	}

	const canvas = _cachedCanvas || document.createElement("canvas");
	_cachedCanvas ||= canvas;

	canvas.width = inf1(bounds.maxX - bounds.minX);
	canvas.height = inf1(bounds.maxY - bounds.minY);

	// Draw elements
	const ctx = canvas.getContext("2d")!;
	if (ctx) {
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.translate(-bounds.minX, -bounds.minY);

		const list = gameObjectList.filter(r => !hiddenHierarchy(r) && r.sprite?.image);
		list.sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0))
			.forEach(el => {
				try {
					const sp = el.sprite!;
					const img = sp.image!;

					ctx.save();

					switch (el.blend) {
						case "multiply":
							ctx.globalCompositeOperation = "multiply";
							break;
						case "screen":
							ctx.globalCompositeOperation = "screen";
							break;
					}

					ctx.transform(
						el.pixiContainer.worldTransform.a,
						el.pixiContainer.worldTransform.b,
						el.pixiContainer.worldTransform.c,
						el.pixiContainer.worldTransform.d,
						el.pixiContainer.worldTransform.tx,
						el.pixiContainer.worldTransform.ty,
					);

					ctx.translate(-sp.vector.rc.w * sp.vector.px, -sp.vector.rc.h * sp.vector.py);

					// apply tint
					{
						_bgCanvas.width = img.width;
						_bgCanvas.height = img.height;

						const _ctx = _bgCanvas.getContext("2d")!;
						_ctx.save();

						_ctx.fillStyle = "#" + el.tint.slice(0, 3)
							.map(r => Math.floor(r * 255).toString(16).padStart(2, "0"))
							.join("");
							console.log(_ctx.fillStyle)
						_ctx.globalAlpha = el.tint[3];
						_ctx.fillRect(0, 0, img.width, img.height);

						_ctx.globalCompositeOperation = "destination-atop";
						_ctx.globalAlpha = 1;
						_ctx.drawImage(img, 0, 0);

						_ctx.restore();
					}

					ctx.drawImage(_bgCanvas, 0, 0);

					ctx.restore();
				} catch (e) {
					console.error(e);
				}
			});

		if (true) { // debug (bounding box, text)
			list.forEach(el => {
				const sp = el.sprite!;
				const img = sp.image!;

				ctx.fillStyle = "#f00";
				ctx.strokeStyle = "#f00";
				ctx.font = "60px Arial";
				ctx.textBaseline = "hanging";
				ctx.lineWidth = 5;

				const pt = el.pixiContainer.toGlobal(new PIXI.Point(0, 0));
				const sc = new PIXI.Point(el.pixiContainer.worldTransform.a, el.pixiContainer.worldTransform.d);

				const w = img.width * sc.x;
				const h = img.height * sc.x;

				ctx.strokeRect(
					pt.x - w / 2,
					pt.y - h / 2,
					w, h
				);
				ctx.fillText(
					el.name,
					pt.x - w / 2,
					pt.y - h / 2,
				);
			});
		}
	}

	return canvas;
};
