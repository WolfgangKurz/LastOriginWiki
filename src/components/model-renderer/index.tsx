import { Component, createRef, RenderableProps } from "preact";
import ResizeObserver from "resize-observer-polyfill";
import * as base64 from "js-base64";
import * as pako from "pako";

import { MOUSE, TOUCH, LinearFilter, LinearMipmapNearestFilter, DoubleSide } from "three/src/constants";

import { Scene } from "three/src/scenes/Scene";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { OrthographicCamera } from "three/src/cameras/OrthographicCamera";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { Texture } from "three/src/textures/Texture";
import { Group } from "three/src/objects/Group";
import { LineSegments } from "three/src/objects/LineSegments";

import { EdgesGeometry } from "three/src/geometries/EdgesGeometry";
import { BoxGeometry } from "three/src/geometries/BoxGeometry";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry";

import { LineBasicMaterial } from "three/src/materials/LineBasicMaterial";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";

import { Mesh } from "three/src/objects/Mesh";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import style from "./style.module.scss";

enum RendererStateEnum {
	None,
	Error,
	Init,
	Loading,
	OK,
}

interface DataVec2 {
	x: number;
	y: number;
}
interface DataVec3 extends DataVec2 { z: number; }
interface DataVec4 extends DataVec3 { w: number; }
interface DataSize2 {
	w: number;
	h: number;
}
interface DataSize3 extends DataSize2 { u: number; }
interface DataColor4 {
	/** 0.0 ~ 1.0 */ r: number;
	/** 0.0 ~ 1.0 */ g: number;
	/** 0.0 ~ 1.0 */ b: number;
	/** 0.0 ~ 1.0 */ a: number;
}

interface DataNodeTransform {
	position: DataVec3;
	scale: DataVec3;
	rotation: DataVec4;
}
interface DataNodeCollider {
	center: DataVec3;
	size: DataVec3;
}
interface DataNodeMaterial {
	name: string;
	/** Reserved */
	shader: number;
	texture: DataNodeSprite;
	color: DataColor4;
}
interface DataNodeSprite {
	name: string;
	/** Reserved */
	offset: [number, number];
}
interface DataNodeRendererBase {
	/** Rendering order */
	order: number;

	color: DataColor4;
	flip: [boolean, boolean];

	materials: DataNodeMaterial[];
}
interface DataNodeRendererSprited extends DataNodeRendererBase {
	pivot: DataVec2;
	size: DataSize3;

	sprite: DataNodeSprite;
}
type DataNodeRenderer = DataNodeRendererBase | DataNodeRendererSprited;
interface DataNodeOffInfo {
	[key: string]: {
		position: DataVec3;
		scale: DataVec3;
	};
}
interface DataNodeSkinnedMeshRenderer {
	order: number;
	materials: DataNodeMaterial[];
	/** base64+zlib obj */
	mesh: string;
	/** group name */
	bones: string[];
	/** group name */
	root: string;
	center: DataVec3;
	extent: DataVec3;
}
interface DataNode {
	"#name": string;
	"#childs": DataNode[];
	"#face": string[];
	"#list": {
		parts: string[];
		bg: string[];
		dialogDeactive: string[];
	};
	"#offInfo"?: DataNodeOffInfo;

	transform: DataNodeTransform;

	collider?: DataNodeCollider;
	renderer?: DataNodeRenderer;
	smr?: DataNodeSkinnedMeshRenderer;
}

export interface RendererProps {
	uid: string;
	root: string;

	face?: string;
	onFaceList?: (list: string[]) => void;

	/** display collider box? */
	collider?: boolean;

	/** hide parts? */
	hidePart?: boolean;

	/** hide bg? */
	hideBg?: boolean;

	/** hide for dialog? */
	hideDialog?: boolean;
}

interface RendererState {
	state: RendererStateEnum;
	error: string;

	uid: string;
	face: string | undefined;

	width?: number;
	height?: number;
}

const texExt = "webp";

class Renderer extends Component<RendererProps, RendererState>{
	private WrapperRef = createRef<HTMLDivElement>();
	private CanvasRef = createRef<HTMLCanvasElement>();

	private observer: ResizeObserver | null = null;

	private scene: Scene | null = null;
	private cscene: Scene | null = null;
	private renderer: WebGLRenderer | null = null;
	private camera: OrthographicCamera | null = null;
	private orbitControls: OrbitControls | null = null;

	private texLoader: TextureLoader | null = null;
	private objLoader: OBJLoader | null = null;

	private colliders: LineSegments[] = [];
	private listPart: Group[] = [];
	private listBg: Group[] = [];
	private listDialogDeactive: Group[] = [];

	private offInfo: DataNodeOffInfo | null = null;
	private offTargets: Group[] = [];

	private updateFace: ((face: string | undefined) => void) | null = null;

	constructor (props: Readonly<RendererProps>) {
		super(props);

		if (!props.uid) {
			this.state = {
				state: RendererStateEnum.Error,
				error: "Invalid parameters",

				uid: props.uid,
				face: props.face,
			};
			return;
		}

		this.state = {
			state: RendererStateEnum.None,
			error: "",

			uid: props.uid,
			face: props.face,
		};
	}

	componentDidMount () {
		this.init();

		if (this.observer) {
			this.observer.disconnect();
			this.observer = null;
		}

		this.observer = new ResizeObserver(entries => {
			for (const entry of entries) {
				if (entry.contentRect)
					this.ResizeCanvas(entry.contentRect.width, entry.contentRect.height);
			}
		});
		if (this.WrapperRef.current)
			this.observer.observe(this.WrapperRef.current);
	}

	componentDidUpdate () {
		if (this.state.uid !== this.props.uid) {
			// Reset
			this.scene?.clear();
			this.cscene?.clear();

			this.renderer?.dispose();
			this.renderer = null;

			this.orbitControls?.dispose();

			this.colliders.splice(0, this.colliders.length);
			this.listPart.splice(0, this.listPart.length);
			this.listBg.splice(0, this.listBg.length);
			this.listDialogDeactive.splice(0, this.listDialogDeactive.length);
			this.offTargets.splice(0, this.offTargets.length);
			this.offInfo = null;

			this.setState({
				state: RendererStateEnum.None,
				error: "",

				uid: this.props.uid,
				face: this.props.face,
			}, () => this.init());
			return;
		}

		this.colliders.forEach(c => c.visible = !!this.props.collider);

		// adjust off info
		if (this.offInfo) {
			const off = this.offInfo;
			this.offTargets.forEach(group => {
				const tf = group.userData["orig"] as DataNodeTransform;
				if (this.props.hideBg || this.props.hideDialog) {
					const o = off[group.name];
					group.position.set(o.position.x, o.position.y, o.position.z);
					group.scale.set(o.scale.x, o.scale.y, o.scale.z);
				} else {
					const o = tf;
					group.position.set(o.position.x, o.position.y, o.position.z);
					group.scale.set(o.scale.x, o.scale.y, o.scale.z);
				}
			});
		}

		// reset visible
		[
			...this.listPart,
			...this.listBg,
			...this.listDialogDeactive,
		].unique().forEach(c => c.visible = true);

		if (this.props.hidePart)
			this.listPart.forEach(c => c.visible = false);
		if (this.props.hideBg)
			this.listBg.forEach(c => c.visible = false);
		if (this.props.hideDialog)
			this.listDialogDeactive.forEach(c => c.visible = false);

		// face change
		if (this.props.face !== this.state.face) {
			if (this.updateFace && this.props.face)
				this.updateFace(this.props.face);
			this.setState({ face: this.props.face });
		}
	}

	private init () {
		const { current: canvas } = this.CanvasRef;
		if (!canvas) {
			this.setState({
				state: RendererStateEnum.Error,
				error: "Invalid element",
			});
			return;
		}

		this.setState({
			state: RendererStateEnum.Init,
		}, () => {
			this.scene = new Scene();
			this.cscene = new Scene();
			this.renderer = new WebGLRenderer({
				canvas,
				antialias: true,
				premultipliedAlpha: false,
				alpha: true,
				powerPreference: "high-performance",
			});
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.autoClear = false;

			this.camera = new OrthographicCamera(0, 0, 0, 0, -100, 2000);

			this.orbitControls = new OrbitControls(this.camera, canvas);
			this.orbitControls.enableRotate = false;
			this.orbitControls.minZoom = 0.25;
			this.orbitControls.maxZoom = 3;
			this.orbitControls.maxDistance = 10;
			this.orbitControls.mouseButtons = {
				LEFT: MOUSE.PAN,
				MIDDLE: MOUSE.PAN,
				RIGHT: MOUSE.PAN,
			};
			this.orbitControls.touches = {
				ONE: TOUCH.PAN,
				TWO: TOUCH.DOLLY_PAN,
			};
			this.orbitControls.update();

			this.texLoader = new TextureLoader();
			this.objLoader = new OBJLoader();

			this.setState({ state: RendererStateEnum.Loading });

			const scene = this.scene;
			const cscene = this.cscene;
			const loader = this.texLoader;
			const oloader = this.objLoader;
			const anisotropy = this.renderer.capabilities.getMaxAnisotropy();

			fetch(`${this.props.root}/${this.props.uid}/data.json`)
				.then(d => d.json())
				.then(async (data: DataNode) => {
					const targets: Array<Promise<void>> = [];
					const sprites: Record<string, Texture> = {};

					targets.push(new Promise<void>((resolve, reject) => loader.load(
						"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
						(texture) => {
							sprites["#empty"] = texture;
							resolve();
						},
						undefined,
						(e) => reject(e),
					)));

					const travel = (obj: DataNode): void => {
						const ren = obj.renderer;
						if (ren && "sprite" in ren) {
							const p = new Promise<void>((resolve, reject) => loader.load(
								`${this.props.root}/${this.props.uid}/${ren.sprite.name}.${texExt}`,
								(texture) => {
									texture.minFilter = LinearMipmapNearestFilter;
									texture.magFilter = LinearFilter;
									texture.anisotropy = anisotropy;

									sprites[ren.sprite.name] = texture;
									resolve();
								},
								undefined,
								e => reject(e),
							));
							targets.push(p);
						}

						const smr = obj.smr;
						if (smr) {
							const p = new Promise<void>((resolve, reject) => {
								const mat = smr.materials[0];
								loader.load(
									`${this.props.root}/${this.props.uid}/${mat.texture.name}.${texExt}`,
									(texture) => {
										texture.minFilter = LinearMipmapNearestFilter;
										texture.magFilter = LinearFilter;
										texture.anisotropy = anisotropy;

										sprites[mat.name] = texture;
										resolve();
									},
									undefined,
									e => reject(e),
								);
							});
							targets.push(p);
						}

						for (const c of obj["#childs"]) travel(c);
					};
					travel(data);

					const faces = data["#face"];
					if (this.props.onFaceList)
						this.props.onFaceList(faces);

					faces.forEach(face => {
						const p = new Promise<void>((resolve, reject) => loader.load(
							`${this.props.root}/${this.props.uid}/face/${face}.${texExt}`,
							(texture) => {
								texture.minFilter = LinearMipmapNearestFilter;
								texture.magFilter = LinearFilter;
								texture.anisotropy = anisotropy;

								sprites[`face/${face}`] = texture;
								resolve();
							},
							undefined,
							e => reject(e),
						));
						targets.push(p);
					});

					await Promise.allSettled(targets);
					return { sprites, data };
				})
				.then(async ({ sprites, data }) => {
					const groups: Group[] = [];
					const cgroups: Group[] = [];

					const root = new Group();
					const croot = new Group();
					root.position.set(0, 0, -1); // Adjust
					croot.position.set(0, 0, -1); // Adjust

					const {
						parts: _listParts,
						bg: _listBg,
						dialogDeactive: _listDialogDeactive,
					} = data["#list"];
					this.offInfo = data["#offInfo"] || null;

					const travel = (obj: DataNode) => {
						const group = new Group();
						const cgroup = new Group();
						cgroup.renderOrder = 1000;

						[group, cgroup].forEach(g => {
							g.name = obj["#name"];
							g.userData["orig"] = obj.transform;

							if (this.offInfo && g.name in this.offInfo)
								this.offTargets.push(g);

							g.position.set(
								obj.transform.position.x,
								obj.transform.position.y,
								obj.transform.position.z,
							);
							g.scale.set(
								obj.transform.scale.x,
								obj.transform.scale.y,
								obj.transform.scale.z,
							);
							g.quaternion.set(
								obj.transform.rotation.x,
								obj.transform.rotation.y,
								obj.transform.rotation.z,
								obj.transform.rotation.w,
							);
						});

						if ("collider" in obj) {
							const col = obj.collider!;

							const geometry = new EdgesGeometry(
								new BoxGeometry(1, 1, 1)
							);
							const material = new LineBasicMaterial({
								color: 0x00ff00,
								side: DoubleSide,
								depthTest: false,
								depthWrite: false,
							});
							const collider = new LineSegments(geometry, material);
							collider.position.set(
								col.center.x,
								col.center.y,
								Math.abs(col.center.z),
							);
							collider.scale.set(
								col.size.x,
								col.size.y,
								col.size.z,
							);
							collider.visible = false;
							this.colliders.push(collider);
							cgroup.add(collider);
						}
						if ("renderer" in obj) {
							const ren = obj.renderer!;
							const sprite = "sprite" in ren;

							const [texture, rw, rh] = sprite
								? [
									sprites[ren.sprite.name],
									ren.size.w / ren.size.u,
									ren.size.h / ren.size.u,
								]
								: [sprites["#empty"], 1, 1];

							let geometry = new PlaneGeometry(rw, rh);
							const material = new MeshBasicMaterial({
								map: texture,
								transparent: true,
								opacity: ren.color.a,
								color: (Math.floor(ren.color.r * 255) << 16) |
									(Math.floor(ren.color.g * 255) << 8) |
									(Math.floor(ren.color.b * 255) << 0),
								side: DoubleSide,
								alphaToCoverage: true,
							});
							const plane = new Mesh(geometry, material);
							plane.renderOrder = ren.order + 1;

							if (sprite) {
								const px = rw / 2 - (ren.pivot.x * rw);
								const py = rh / 2 - (ren.pivot.y * rh);
								plane.position.set(px, py, 0);
							}

							if (ren.flip[0] && ren.flip[1])
								plane.scale.set(-1, -1, 1);
							else if (ren.flip[0])
								plane.scale.set(-1, 1, 1);
							else if (ren.flip[1])
								plane.scale.set(1, -1, 1);

							group.add(plane);

							if (obj["#name"] === "face") {
								this.updateFace = (face: string | undefined) => {
									const texture = sprites[face ? `face/${face}` : "#empty"];
									material.map = texture;

									const rw = texture.source.data.width / 100;
									const rh = texture.source.data.height / 100;

									if (geometry) geometry.dispose();
									geometry = new PlaneGeometry(rw, rh);

									plane.geometry = geometry;
								};
							}

							if (_listParts.includes(obj["#name"]))
								this.listPart.push(group);

							if (_listBg.includes(obj["#name"]))
								this.listBg.push(group);

							if (_listDialogDeactive.includes(obj["#name"]))
								this.listDialogDeactive.push(group);
						}
						if ("smr" in obj) {
							const smr = obj.smr!;

							const mat = smr.materials[0];
							const texture = sprites[mat.texture.name];

							const _obj = pako.inflate(base64.toUint8Array(smr.mesh), { to: "string" });
							const mesh = oloader.parse(_obj);
							mesh.traverse(child => {
								if ("material" in child && (child as any).material) {
									(child as any).material.dispose();

									(child as any).material = new MeshBasicMaterial({
										map: texture,
										transparent: true,
										opacity: mat.color.a,
										color: (Math.floor(mat.color.r * 255) << 16) |
											(Math.floor(mat.color.g * 255) << 8) |
											(Math.floor(mat.color.b * 255) << 0),
										side: DoubleSide,
										alphaToCoverage: true,
									});
								}
							});
							mesh.renderOrder = smr.order + 1;

							// mesh.position.set(smr.center.x, smr.center.y, smr.center.z);
							mesh.position.set(0, 0, 1);

							group.add(mesh);
						}

						groups.push(group);
						cgroups.push(cgroup);
						for (const c of obj["#childs"])
							travel(c);
						cgroups.pop();
						groups.pop();

						if (groups.length > 0) {
							groups[groups.length - 1].add(group);
							cgroups[cgroups.length - 1].add(cgroup);
						} else {
							root.add(group);
							croot.add(cgroup);
						}
					};

					travel(data);
					scene.add(root);
					cscene.add(croot);

					this.setState({
						state: RendererStateEnum.OK,
					}, () => {
						this.updateFace?.call(this, this.state.face);
						this.Frame();
					});
				})
				.catch((e: Error) => {
					console.error(e);
					this.setState({
						state: RendererStateEnum.Error,
						error: e.toString(),
					});
				});
		});
	}

	private Frame () {
		if (this.state.state !== RendererStateEnum.OK) return;

		requestAnimationFrame(() => this.Frame());

		if (!this.renderer || !this.scene || !this.cscene || !this.camera) return;

		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);

		if (this.props.collider)
			this.renderer.render(this.cscene, this.camera);
	}

	private ResizeCanvas (width: number, height: number) {
		if (!this.renderer || !this.camera || !this.orbitControls) return;

		this.setState({
			width,
			height,
		});

		const nRatio = Math.min(width, height);
		const nWidth = width / nRatio;
		const nHeight = height / nRatio;
		this.renderer.setSize(width, height);

		this.camera.left = -nWidth;
		this.camera.right = nWidth;
		this.camera.top = nHeight;
		this.camera.bottom = -nHeight;
		this.camera.updateProjectionMatrix();

		this.orbitControls.update();
	}

	render (props: RenderableProps<RendererProps>, state: Readonly<RendererState>) {
		const overlayTexts: Record<RendererStateEnum, string> = {
			[RendererStateEnum.OK]: "",
			[RendererStateEnum.None]: "We still love you",
			[RendererStateEnum.Init]: "Initializing",
			[RendererStateEnum.Loading]: "Resource loading",
			[RendererStateEnum.Error]: `Error - ${state.error}`,
		};

		return <div class={ style.ModelRenderer } ref={ this.WrapperRef }>
			<canvas
				width={ state.width }
				height={ state.height }
				ref={ this.CanvasRef }
			/>

			{ state.state !== RendererStateEnum.OK
				? <div class={ style.OverlayText }>
					{ overlayTexts[state.state] }
				</div>
				: <></>
			}
		</div>;
	}
}
export default Renderer;
