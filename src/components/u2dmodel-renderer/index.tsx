import { useEffect, useRef, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

import Matrix3D from "./Matrix3D";

import style from "./style.module.scss";

const TRANSPARENT = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

interface RECT {
	x: number;
	y: number;
	w: number;
	h: number;
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
	list: [
		data: {
			[renderOrder: number]: MODEL_OBJECT[];
		},
		parts: string[],
		bg: string[],
		dialogDeactive: string[],
	];
}

interface GameObjectFilter {
	id: string;
	values: Tuple<number, 20>; // 5 x 4
}
interface GameObjectData {
	id: number;
	name: string;
	url: string;
	transform?: string;
	zIndex?: number;
	filter?: string;
	blend?: "multiply" | "screen";
	hidden: boolean;

	tag?: string;
}
interface GameNodeData {
	id: number;
	parent: number;
	name: string;
}
interface FaceTarget {
	obj: MODEL_OBJECT;
	data: GameObjectData;
}

interface _2DModelRendererProps {
	scale?: number;
	translate?: [number, number];

	width: number;
	height: number;

	root: string;
	target: string;
	textureExt?: string;

	hideParts?: boolean;
	hideBG?: boolean;
	hideDialog?: boolean;

	face?: string;
	onFaceList?: (faceNames: string[]) => void;
}

/**
 * Unity 2DModel Renderer
 */
const U2DModelRenderer: FunctionalComponent<_2DModelRendererProps> = (props) => {
	const opt = { scale: props.scale || 1, translate: props.translate || [0, 0] };

	function quat2eul (quat: Tuple<number, 4>) { // quat2eul (radian)
		const q = {
			x: quat[0],
			y: quat[1],
			z: quat[2],
			w: quat[3],
		};
		const ret = { x: 0, y: 0, z: 0 };

		// roll (x-axis rotation)
		const sinr_cosp = 2 * (q.w * q.x + q.y * q.z);
		const cosr_cosp = 1 - 2 * (q.x * q.x + q.y * q.y);
		ret.x = Math.atan2(sinr_cosp, cosr_cosp);

		// pitch (y-axis rotation)
		const sinp = Math.sqrt(1 + 2 * (q.w * q.x - q.y * q.z));
		const cosp = Math.sqrt(1 - 2 * (q.w * q.x - q.y * q.z));
		ret.y = 2 * Math.atan2(sinp, cosp) - Math.PI / 2;

		// yaw (z-axis rotation)
		const siny_cosp = 2 * (q.w * q.z + q.x * q.y);
		const cosy_cosp = 1 - 2 * (q.y * q.y + q.z * q.z);
		ret.z = Math.atan2(siny_cosp, cosy_cosp);

		return ret;
	}
	function applyFilter (image: HTMLImageElement, vector: SPRITE_VECTOR, clipPt: CLIP_PATH, cb: (img: HTMLCanvasElement) => void): void {
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
	}
	function setSprite (obj: MODEL_OBJECT, sprite: SPRITE_DATA): string {
		if (typeof obj.color === "undefined" || typeof obj.flip === "undefined") return "";

		const mat = [
			Matrix3D.translate(props.width / 2, props.height / 2, 0),

			// global transform
			Matrix3D.scale(2, 2, 2), // default scale
			Matrix3D.scale(opt.scale, opt.scale, opt.scale),
			Matrix3D.translate(opt.translate[0], opt.translate[1], 0),
		];
		const ppu = sprite.vector.u;
		const ppum = 100 / ppu; // ppu multiply

		// Matrix tree
		let cur = obj;
		const tree = [obj];
		while (cur && cur.parent) {
			cur = nodes.peek()[cur.parent];
			tree.push(cur);
		}
		tree.reverse();

		tree.forEach(cur => {
			const rot = quat2eul(cur.vector.slice(6, 10) as Tuple<number, 4>);
			mat.push(
				Matrix3D.translate(cur.vector[0] * 100, -cur.vector[1] * 100, cur.vector[2] * 100),
				Matrix3D.scale(cur.vector[3], cur.vector[4], cur.vector[5]),
				Matrix3D.rotate(rot.x, rot.y, rot.z),
			);
		});

		// 100 = camera ppu
		mat.push(
			// ppu
			Matrix3D.scale(ppum, ppum, ppum),

			// flip
			Matrix3D.scale(obj.flip[0] ? -1 : 1, obj.flip[1] ? -1 : 1, 1),

			// pivot
			Matrix3D.translate(-sprite.vector.rc.w / 2, -sprite.vector.rc.h / 2, 0),
		);

		const _mat = Matrix3D.compose(...mat);
		_mat[10] = Math.max(0.1, _mat[10]); // z scale patch
		return Matrix3D.toString(_mat);
	}

	const [jsonData, setJsonData] = useState<MODEL_DATA | null>(null);

	type SPRITE_MAP = Record<string, SPRITE_DATA & { url: string; }>;
	// const [nodes, setNodes] = useState<Record<number, MODEL_OBJECT>>({});
	const nodes = useSignal<Record<number, MODEL_OBJECT>>({});
	const [spriteMap, setSpriteMap] = useState<SPRITE_MAP>({});

	const [faceList, setFaceList] = useState<SPRITE_DATA[]>([]);
	const [faceTarget, setFaceTarget] = useState<FaceTarget | null>(null);

	const [filters, setFilters] = useState<GameObjectFilter[]>([]);
	const [gameObjectList, setGameObjectList] = useState<GameObjectData[]>([]);
	const [idParentPairData, setIdParentPairData] = useState<GameNodeData[]>([]);

	useEffect(() => {
		setJsonData(null);

		fetch(`${props.root}${props.target}/data.json`)
			.then(r => r.json() as Promise<MODEL_DATA>)
			.then(r => setJsonData(r));
	}, [props.root, props.target, props.textureExt]);

	useEffect(() => {
		if (!jsonData) {
			nodes.value = {};
			setSpriteMap({});
			setFaceList([]);
			setFaceTarget(null);
			setFilters([]);
			setGameObjectList([]);
			return;
		}

		(async r => {
			const _nodes: Record<number, MODEL_OBJECT> = {};
			Object.values(r.list[0]) // Make node table (id -> object)
				.flat()
				.forEach(node => (_nodes[node.id] = node));
			nodes.value = _nodes;

			// preload all images
			type IMAGE_LOAD_RESULT = {
				tex: string;
				img: HTMLImageElement;
			};
			const images = await Promise.all(
				[
					...new Set(r.sprite.flat().map(o => `${o.tex}.${props.textureExt || "png"}`)),
					...new Set(r.face.map(o => `${o.tex}.${props.textureExt || "png"}`)),
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
					img.src = `${props.root}${props.target}/${tex}`;
				})),
			);
			const texMap: Record<string, HTMLImageElement> = {};
			images.forEach(({ tex, img }) => {
				const id = tex.substring(0, tex.lastIndexOf(".")); // basename
				texMap[id] = img;
			});

			// pre-apply filters on all sprites
			const _spriteMap: SPRITE_MAP = {};
			await new Promise<void>(resolve => {
				let count = 0;
				const sl = [
					...r.sprite,
					...r.face.map(f => ({ ...f, name: `FACE__${f.name}` })), // face sprite name
				];
				sl.forEach(s => applyFilter(texMap[s.tex], s.vector, s.v, image => {
					image.toBlob(blob => {
						if (!blob) {
							console.error(`[2DModelRenderer] Failed to apply filter to texture ${s.tex} from sprite ${s.name}`);
							return;
						}

						_spriteMap[s.name] = {
							...s,
							url: URL.createObjectURL(blob),
						};

						count++;
						if (count >= sl.length) resolve();
					}, "image/png");
				}));
			});
			setSpriteMap(_spriteMap);

			function elemCallback (obj: MODEL_OBJECT, data: GameObjectData): void {
				const { name } = obj;
				if (name === "face") {
					data.tag = "FACE";
					setFaceTarget({ obj, data });
				}
			}

			// minimum renderOrder
			const zMin = Math.min(...Object.keys(r.list[0]).map(k => parseInt(k, 10)));

			// Make Id-Parent pair list
			const idTree: GameNodeData[] = [];
			Object.values(r.list[0])
				.flat()
				.forEach(r => {
					idTree.push({
						id: r.id,
						parent: r.parent,
						name: `$2dmodel$${r.name}`,
					});
				});
			setIdParentPairData(idTree);

			// Traverse GameObject tree (has SpriteRenderer only)
			const _go: GameObjectData[] = [];
			const _filters: GameObjectFilter[] = [];
			Object.keys(r.list[0])
				.map(k => parseInt(k, 10))
				.sort((a, b) => a - b) // sort by renderOrder
				.forEach(renderOrder => r.list[0][renderOrder]
					.filter(o => "color" in o) // has SpriteRenderer (even if sprite has not set)
					.forEach(o => {
						let filter = "";
						let blend: GameObjectData["blend"] | "" = "";

						// color matrix
						if ("color" in o && o.color) {
							_filters.push({
								id: `$2dmodel$filter$${o.name}`,
								values: [
									o.color[0], 0, 0, 0, 0,
									0, o.color[1], 0, 0, 0,
									0, 0, o.color[2], 0, 0,
									0, 0, 0, o.color[3], 0,
								],
							});
							filter = `url(#$2dmodel$filter$${o.name})`;
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

						let url = TRANSPARENT;
						let transform = "";
						if (("sprite" in o) && typeof o.sprite !== "undefined") {
							const sprite = _spriteMap[o.sprite];
							url = sprite.url;
							transform = setSprite(o, sprite);
						}

						let hidden = false;
						hidden ||= !!props.hideParts && r.list[1].includes(o.name);
						hidden ||= !!props.hideBG && r.list[2].includes(o.name);
						hidden ||= !!props.hideDialog && r.list[3].includes(o.name);

						const img: GameObjectData = {
							id: o.id,

							name: `$2dmodel$${o.name}`,
							url,
							zIndex: (renderOrder - zMin + 1),
							transform: transform || undefined,
							filter: filter || undefined,
							blend: blend || undefined,
							hidden,
						};
						elemCallback(o, img);
						_go.push(img);
					})
				);

			setFilters(_filters);
			setFaceList(r.face);
			setGameObjectList(_go.reverse());

			if (props.onFaceList)
				props.onFaceList(r.face.map(r => r.name));
		})(jsonData);
	}, [props.width, props.height, props.scale, props.translate, jsonData]);

	useEffect(() => {
		if (!jsonData) return;

		const _hides = new Set<string>();
		if (props.hideParts) jsonData.list[1].forEach(p => _hides.add(`$2dmodel$${p}`));
		if (props.hideBG) jsonData.list[2].forEach(p => _hides.add(`$2dmodel$${p}`));
		if (props.hideDialog) jsonData.list[3].forEach(p => _hides.add(`$2dmodel$${p}`));

		const go = [...gameObjectList];
		go.forEach(e => (e.hidden = false)); // reset

		const root = [..._hides];
		const hideWithChildrens = (o: GameNodeData) => {
			const node = go.find(r => r.id === o.id);
			if (node) node.hidden = true;

			idParentPairData.filter(r => r.parent == o.id)
				.forEach(c => hideWithChildrens(c));
		};

		root.forEach(r => {
			const c = idParentPairData.find(e => e.name === r);
			if (c) hideWithChildrens(c);
		});

		setGameObjectList(go);
	}, [props.hideParts, props.hideBG, props.hideDialog]);

	useEffect(() => {
		const faceIndex = gameObjectList.findIndex(g => g.tag === "FACE");

		const face = props.face;
		if (faceIndex >= 0 && faceTarget) {
			function set (url, transform) {
				const list = [...gameObjectList];
				list[faceIndex].url = url;
				list[faceIndex].transform = transform;
				setGameObjectList(list);
			}

			if (face) {
				if (!faceList.some(f => f.name === face)) { // face not found
					set(TRANSPARENT, "");
					return;
				}

				const sprite = spriteMap[`FACE__${face}`];
				set(sprite.url, setSprite(faceTarget.obj, sprite));
			} else
				set(TRANSPARENT, "");
		}
	}, [props.face, faceTarget]);

	useEffect(() => {
		return () => {
			Object.values(spriteMap)
				.forEach(s => {
					URL.revokeObjectURL(s.url);
				});
		};
	}, []);

	return <div
		class={ style._2DModelRenderer }
		style={ {
			width: `${props.width}px`,
			height: `${props.height}px`,
		} }
	>
		<svg>
			<defs>
				{ filters.map(f => <filter id={ f.id } key={ `2dmodel-filter-${f.id}` }>
					<feColorMatrix
						in="SourceGraphic"
						type="matrix"
						values={ f.values.join(" ") }
					/>
				</filter>) }
			</defs>
		</svg>

		{ gameObjectList.map(go => <img
			name={ go.name }
			src={ go.url }
			style={ {
				display: go.hidden ? "none" : "",
				zIndex: go.zIndex,
				transform: go.transform,
				filter: go.filter,
				mixBlendMode: go.blend,
			} }
		/>) }
	</div>;
};
export default U2DModelRenderer;
