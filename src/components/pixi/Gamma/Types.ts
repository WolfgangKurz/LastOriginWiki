export type Vec2 = [x: number, y: number];
export type Vec3 = [x: number, y: number, z: number];
export type Quat = [x: number, y: number, z: number, w: number];
export type Color = [r: number, g: number, b: number, a: number];

/** `[time, value, inSlope, outSlope]` keys of Unity `AnimationCurve` */
export type CurveKeys = Array<[time: number, value: number, inSlope: number, outSlope: number]>;

export interface TextureData {
	/** file name relative to model directory */
	f: string;
	n: string;
	w: number;
	h: number;
	/** wrap mode u/v (0: repeat, 1: clamp) */
	wr: [u: number, v: number];
	/** filter mode (0: point, 1: bilinear, 2: trilinear) */
	fl: number;
}

export interface MaterialData {
	n: string;
	/** shader name */
	sh: string;
	/** texture property -> texture index */
	t: Record<string, number>;
	/** texture property -> [scaleX, scaleY, offsetX, offsetY] */
	st: Record<string, Tuple<number, 4>>;
	c: Record<string, Color>;
	f: Record<string, number>;
	/** Unity blend state `[src, dst, srcAlpha, dstAlpha, op, opAlpha]` */
	b: Tuple<number, 6>;
	cu: number;
	/** custom render queue, -1 for shader default */
	q: number;
}

export interface SpriteData {
	n: string;
	tx: number;
	/** vertices `[x, y, ...]` relative to pivot in units */
	v: number[];
	/** uv `[u, v, ...]`, v is flipped (0 = top) */
	uv: number[];
	i: number[];
}

export interface BlendShapeFrame {
	w: number;
	i: number[];
	/** delta vertices `[x, y, z, ...]` */
	dv: number[];
}
export interface BlendShapeChannel {
	n: string;
	f: BlendShapeFrame[];
}

export interface MeshData {
	n: string;
	/** `[x, y, z, ...]` */
	v: number[];
	/** `[u, v, ...]`, v is flipped (0 = top) */
	uv: number[];
	/** indices per submesh */
	i: number[][];
	/** vertex colors `[r, g, b, a, ...]` */
	c?: number[];
	/** bone weights `[i0, i1, i2, i3, w0, w1, w2, w3, ...]` */
	bw?: number[];
	/** bind poses, column-major 4x4 */
	bp?: number[][];
	bs?: BlendShapeChannel[];
}

export interface NodeData {
	n: string;
	p: number;
	a: boolean;
	t: Vec3;
	r: Quat;
	s: Vec3;
}

interface RendererDataBase {
	nd: number;
	en: boolean;
	m: number[];
	/** sorting layer value */
	sl: number;
	/** sorting order */
	so: number;
}
export interface SpriteRendererData extends RendererDataBase {
	k: "sp";
	sp: number;
	c: Color;
	fx: boolean;
	fy: boolean;
}
export interface SkinnedMeshRendererData extends RendererDataBase {
	k: "sk";
	me: number;
	bo: number[];
	rb: number;
	bsw: number[];
}
export interface MeshRendererData extends RendererDataBase {
	k: "me";
	me: number;
}
export interface ParticleRendererData extends RendererDataBase {
	k: "ps";
	/** render mode (0: billboard, 1: stretch, 2: horizontal, 3: vertical, 4: mesh) */
	rm: number;
	/** render alignment */
	ra: number;
	me: number;
	mxs: number;
	pv: Vec3;
	sf: number;
}
export type RendererData = SpriteRendererData | SkinnedMeshRendererData | MeshRendererData | ParticleRendererData;

export interface ColliderData {
	nd: number;
	en: boolean;
	c: Vec3;
	s: Vec3;
}

/** constant | streamed hermite segments | dense samples */
export type CurveData =
	| number
	| { s: number[]; k: number[]; }
	| { d: [begin: number, rate: number]; v: number[]; };

export interface ClipBindingData {
	nd: number;
	/** component: t(transform), go(GameObject), sp/sk/me/ps(renderers), pss(ParticleSystem), mb(MonoBehaviour) */
	c: "t" | "go" | "sp" | "sk" | "me" | "ps" | "pss" | "mb";
	cls?: string;
	/** attribute (p/r/s/e for transform) */
	a: string;
	cv: CurveData[];
	/** pptr curve mapping (sprite or material index) */
	pp?: number[];
}

export interface ClipEventData {
	t: number;
	fn: string;
	s: string;
	f: number;
	i: number;
}

export interface ClipData {
	n: string;
	st: number;
	len: number;
	lp: boolean;
	co: number;
	b: ClipBindingData[];
	ev: ClipEventData[];
}

/** `[mode, parameter, threshold]` */
export type ConditionData = [mode: number, param: string, threshold: number];

export interface TransitionData {
	n: string;
	d: number;
	du: number;
	fx: boolean;
	of: number;
	et: number;
	he: boolean;
	is: number;
	oi: boolean;
	cs: boolean;
	co: ConditionData[];
}

export interface StateData {
	n: string;
	fp: string;
	sp: number;
	spp: string | null;
	co: number;
	cop: string | null;
	lp: boolean;
	wd: boolean;
	/** clip index per synchronized layer index */
	mo: number[];
	tr: TransitionData[];
}

export interface SelectorData {
	e: boolean;
	tr: Array<{ d: number; co: ConditionData[]; }>;
}

export interface StateMachineData {
	st: StateData[];
	any: TransitionData[];
	sel: SelectorData[];
	def: number;
}

export interface LayerData {
	n: string;
	sm: number;
	sy: number;
	/** 0: override, 1: additive */
	bm: number;
	w: number;
	sat: boolean;
}

export interface ParameterData {
	n: string;
	/** 1: float, 3: int, 4: bool, 9: trigger */
	ty: number;
	d: number | boolean;
}

export interface ControllerData {
	n: string;
	pa: ParameterData[];
	ly: LayerData[];
	sm: StateMachineData[];
}

export interface AnimatorData {
	nd: number;
	en: boolean;
	ct: number;
}

export interface DynamicBoneData {
	nd: number;
	en: boolean;
	rt: number;
	ur: number;
	um: number;
	dm: number; dmd: CurveKeys;
	el: number; eld: CurveKeys;
	sf: number; sfd: CurveKeys;
	in: number; ind: CurveKeys;
	ra: number; rad: CurveKeys;
	eln: number;
	eo: Vec3;
	gr: Vec3;
	fo: Vec3;
	co: number[];
	ex: number[];
	fa: number;
	tc: boolean;
	w: number;
	rp: boolean;
}

export interface DynamicBoneColliderData {
	nd: number;
	en: boolean;
	dir: number;
	c: Vec3;
	bd: number;
	r: number;
	h: number;
}

export interface Puppet2DIKData {
	nd: number;
	en: boolean;
	fl: boolean;
	ss: boolean;
	sc: boolean;
	aim: Vec3;
	pole: number;
	up: Vec3;
	ssc: Vec3[];
	top: number;
	mid: number;
	bot: number;
	osc: Vec3;
	multi: number;
	it: number;
	dp: number;
	end: number;
	start: number;
	of: Quat;
	lt: number[];
	lm: Vec2[];
}

export interface Puppet2DSplineData {
	nd: number;
	en: boolean;
	ctl: number[];
	bo: number[];
	nb: number;
}

export interface Puppet2DGlobalData {
	nd: number;
	en: boolean;
	ik: number[];
	spl: number[];
	fc: number;
	lu: boolean;
	ce: boolean;
	fl: boolean;
	sry: number;
}

export interface PositionConstraintData {
	nd: number;
	en: boolean;
	w: number;
	ar: Vec3;
	of: Vec3;
	/** affect axis bits (x: 1, y: 2, z: 4) */
	ax: number;
	ac: boolean;
	src: Array<[node: number, weight: number]>;
}

/** constant | random between two constants | curve | random between two curves */
export type MinMaxCurveData =
	| number
	| [min: number, max: number]
	| { s: number; k: CurveKeys; k2?: CurveKeys; };

export interface GradientData {
	/** `[time, r, g, b]` */
	c: Array<Tuple<number, 4>>;
	/** `[time, a]` */
	a: Array<Tuple<number, 2>>;
	/** 0: blend, 1: fixed */
	m: number;
}

export interface MinMaxGradientData {
	/** 0: color, 1: gradient, 2: two colors, 3: two gradients, 4: random color */
	m: number;
	c?: Color;
	c2?: Color;
	g?: GradientData;
	g2?: GradientData;
}

export interface ParticleSystemData {
	nd: number;
	dur: number;
	lp: boolean;
	pw: boolean;
	dl: MinMaxCurveData;
	spd: number;
	/** 0: local, 1: world */
	ws: number;
	scm: number;
	init: {
		lt: MinMaxCurveData;
		sp: MinMaxCurveData;
		c: MinMaxGradientData;
		sz: MinMaxCurveData;
		szy: MinMaxCurveData;
		s3: boolean;
		rot: MinMaxCurveData;
		rrd: number;
		mx: number;
		gr: MinMaxCurveData;
	};
	em: {
		en: boolean;
		rt: MinMaxCurveData;
		/** `[time, count, cycles, interval, probability]` */
		bu: Array<[number, MinMaxCurveData, number, number, number]>;
	};
	sh: {
		en: boolean;
		ty: number;
		an: number;
		r: number;
		rth: number;
		arc: number;
		len: number;
		p: Vec3;
		rot: Vec3;
		sc: Vec3;
		bt: Vec3;
		rd: number;
		sd: number;
		rp: number;
	};
	col?: MinMaxGradientData;
	sz?: { c: MinMaxCurveData; sa: boolean; y: MinMaxCurveData; };
	rot?: MinMaxCurveData;
	vel?: { x: MinMaxCurveData; y: MinMaxCurveData; z: MinMaxCurveData; ws: boolean; sm: MinMaxCurveData; };
	clv?: { mg: MinMaxCurveData; dp: number; dr: MinMaxCurveData; };
	uv?: { tx: number; ty: number; at: number; ri: number; fot: MinMaxCurveData; sf: MinMaxCurveData; cy: number; };
	fo?: { x: MinMaxCurveData; y: MinMaxCurveData; z: MinMaxCurveData; ws: boolean; };
}

export interface PartsData {
	do: boolean;
	do2: boolean;
	p: number[];
	p2: number[];
	bg: number[];
	dd: number[];
	sw: boolean;
	swa: number[];
	swd: number[];
	ci?: {
		sp: number;
		spp: Vec3;
		sps: Vec3;
		rt: number;
		rtp: Vec3;
		rts: Vec3;
	};
}

export interface FaceData {
	n: string;
	/** sprite index, -1 for original */
	sp: number;
}

export interface ModelData {
	ver: number;
	name: string;
	tex: TextureData[];
	mat: MaterialData[];
	spr: SpriteData[];
	mesh: MeshData[];
	node: NodeData[];
	ren: RendererData[];
	col: ColliderData[];
	anim: AnimatorData[];
	ctrl: ControllerData[];
	clip: ClipData[];
	db: DynamicBoneData[];
	dbc: DynamicBoneColliderData[];
	p2d: {
		g: Puppet2DGlobalData[];
		ik: Puppet2DIKData[];
		spl: Puppet2DSplineData[];
	};
	pc: PositionConstraintData[];
	ps: ParticleSystemData[];
	parts: PartsData | null;
	/** renderer index of face sprite */
	face: number;
	faces: FaceData[];
}
