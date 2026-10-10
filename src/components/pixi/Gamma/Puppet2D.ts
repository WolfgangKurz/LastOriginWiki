import type { Puppet2DGlobalData, Puppet2DIKData, Puppet2DSplineData, Vec3 } from "./Types";
import {
	Rad2Deg, clamp,
	qAngleAxis, qEuler, qIsNaN, qLookRotation, qMul, qRotate,
	v3Add, v3Angle, v3Cross, v3Distance, v3Dot, v3Normalize, v3Scale, v3Sub,
} from "./Math";
import type { GammaNode } from "./Scene";

const FORWARD: Vec3 = [0, 0, 1];
const BACK: Vec3 = [0, 0, -1];
const LEFT: Vec3 = [-1, 0, 0];

export class Puppet2DIKHandle {
	public readonly node: GammaNode;
	public enabled: boolean;
	public flip: boolean;
	public squashAndStretch: boolean;
	public scale: boolean;
	public aimDirection: Vec3;

	private readonly pole: GammaNode | null;
	private readonly top: GammaNode | null;
	private readonly middle: GammaNode | null;
	private readonly bottom: GammaNode | null;
	private readonly end: GammaNode | null;
	private readonly start: GammaNode | null;
	private readonly limits: Map<GammaNode, [number, number]>;
	private largerMiddleJoint = false;

	constructor (private readonly data: Puppet2DIKData, nodes: GammaNode[]) {
		const n = (i: number) => (i >= 0 ? nodes[i] : null);

		this.node = nodes[data.nd];
		this.enabled = data.en;
		this.flip = data.fl;
		this.squashAndStretch = data.ss;
		this.scale = data.sc;
		this.aimDirection = [...data.aim];
		this.pole = n(data.pole);
		this.top = n(data.top);
		this.middle = n(data.mid);
		this.bottom = n(data.bot);
		this.end = n(data.end);
		this.start = n(data.start);

		this.limits = new Map();
		data.lt.forEach((t, i) => {
			if (t >= 0 && data.lm[i]) this.limits.set(nodes[t], data.lm[i]);
		});
	}

	public calculateIK () {
		if (this.data.multi === 1) {
			this.calculateMultiIK();
			return;
		}

		const top = this.top, middle = this.middle, bottom = this.bottom;
		if (!top || !middle || !bottom) return;

		const flipRotation = this.flip ? 1 : -1;
		const ik = this.node;
		const ikPos = ik.position;
		const topPos = top.position;

		// position pole vector
		if (this.pole) {
			const root2IK = v3Scale(v3Add(topPos, ikPos), 0.5);
			const ik2Root = v3Sub(ikPos, topPos);
			const quat = qAngleAxis(flipRotation * 90, FORWARD);
			const rotated = qRotate(quat, ik2Root);
			this.pole.position = v3Sub(root2IK, rotated);
		}

		const angle = this.getAngle();
		const up = this.data.up;
		const offset = qAngleAxis(angle * flipRotation, FORWARD);

		const look = qLookRotation(v3Sub(ikPos, top.position), this.aimDirection);
		if (!qIsNaN(offset) && !isNaN(angle))
			top.rotation = qMul(qMul(look, qAngleAxis(90, up)), offset);
		else
			top.rotation = qMul(look, qAngleAxis(this.largerMiddleJoint ? -90 : 90, up));

		middle.rotation = qMul(qLookRotation(v3Sub(ikPos, middle.position), this.aimDirection), qAngleAxis(90, up));
		bottom.rotation = qMul(ik.rotation, this.data.of);

		if (this.scale) {
			const s = ik.localScale;
			const o = this.data.osc;
			bottom.localScale = [s[0] * o[0], s[1] * o[1], s[2] * o[2]];
		}
	}

	private getAngle (): number {
		const top = this.top!, middle = this.middle!, bottom = this.bottom!;
		const ss = this.data.ssc[0];

		if (this.squashAndStretch && ss) top.localScale = ss;

		const topLength = v3Distance(top.position, middle.position);
		const middleLength = v3Distance(middle.position, bottom.position);
		const length = topLength + middleLength;
		let ikLength = v3Distance(top.position, this.node.position);

		this.largerMiddleJoint = middleLength > topLength;

		if (this.squashAndStretch && ss && ikLength > length)
			top.localScale = [ss[0], (ikLength / length) * ss[1], ss[2]];

		ikLength = Math.min(ikLength, length - 0.0001);
		const adjacent = (topLength * topLength - middleLength * middleLength + ikLength * ikLength) / (2 * ikLength);
		return Math.acos(adjacent / topLength) * Rad2Deg;
	}

	private calculateMultiIK () {
		if (!this.end) return;
		for (let i = 0; i < this.data.it; i++)
			this.multiIKRun();
		this.end.rotation = this.node.rotation;
	}

	private multiIKRun () {
		let node = this.end!.parent;
		while (node) {
			this.rotateTowardsTarget(node);
			if (node === this.start) break;
			node = node.parent;
		}
	}

	private rotateTowardsTarget (t: GammaNode) {
		const tp = t.position;
		const toTarget: Vec3 = [this.node.position[0] - tp[0], this.node.position[1] - tp[1], 0];
		const ep = this.end!.position;
		const toEnd: Vec3 = [ep[0] - tp[0], ep[1] - tp[1], 0];

		let angle = signedAngle(toEnd, toTarget);
		const ey = t.eulerAngles[1] % 360;
		if (ey > 90 && ey < 275) angle *= -1;

		angle *= this.data.dp;
		angle = -(angle - t.localEulerAngles[2]);

		const limit = this.limits.get(t);
		if (limit) angle = clamp(angle, limit[0], limit[1]);

		t.localRotation = qEuler(0, 0, angle);
	}
}

function signedAngle (a: Vec3, b: Vec3): number {
	const angle = v3Angle(a, b);
	const sign = Math.sign(v3Dot(BACK, v3Cross(a, b))) || 1;
	return angle * sign;
}

export class Puppet2DSplineControl {
	public enabled: boolean;
	private readonly node: GammaNode;
	private readonly controls: GammaNode[];
	private readonly bones: GammaNode[];

	constructor (private readonly data: Puppet2DSplineData, nodes: GammaNode[]) {
		this.node = nodes[data.nd];
		this.enabled = data.en;
		this.controls = data.ctl.filter(i => i >= 0).map(i => nodes[i]);
		this.bones = data.bo.filter(i => i >= 0).map(i => nodes[i]);
	}

	public run () {
		const angleOffset = qEuler(0, this.node.eulerAngles[1], 0);
		const coords = catmullRom(this.controls, this.data.nb);
		if (!coords) return;

		for (let i = 0; i < coords.length && i < this.bones.length; i++) {
			const bone = this.bones[i];
			bone.position = coords[i];
			if (i < coords.length - 1) {
				if (i === 0 && coords.length > 2)
					bone.rotation = this.controls[1].rotation;
				else {
					bone.rotation = qMul(
						qMul(qLookRotation(v3Sub(coords[i], coords[i + 1]), FORWARD), qAngleAxis(90, LEFT)),
						angleOffset,
					);
				}
			} else
				bone.rotation = this.controls[this.controls.length - 2].rotation;
		}
	}
}

function catmullRom (controls: GammaNode[], samples: number): Vec3[] | null {
	if (controls.length < 4) return null;

	const out: Vec3[] = [];
	for (let n = 1; n < controls.length - 2; n++) {
		const p0 = controls[n - 1].position;
		const p1 = controls[n].position;
		const p2 = controls[n + 1].position;
		const p3 = controls[n + 2].position;
		for (let i = 0; i < samples; i++)
			out.push(pointOnCurve(p0, p1, p2, p3, (1 / samples) * i));
	}
	out.push(controls[controls.length - 2].position);
	return out;
}

function pointOnCurve (p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3, t: number): Vec3 {
	const t0 = ((-t + 2) * t - 1) * t * 0.5;
	const t1 = (((3 * t - 5) * t) * t + 2) * 0.5;
	const t2 = ((-3 * t + 4) * t + 1) * t * 0.5;
	const t3 = ((t - 1) * t * t) * 0.5;
	return [
		p0[0] * t0 + p1[0] * t1 + p2[0] * t2 + p3[0] * t3,
		p0[1] * t0 + p1[1] * t1 + p2[1] * t2 + p3[1] * t3,
		p0[2] * t0 + p1[2] * t1 + p2[2] * t2 + p3[2] * t3,
	];
}

export class Puppet2DGlobalControl {
	public readonly node: GammaNode;
	public enabled: boolean;
	public controlsEnabled: boolean;

	constructor (
		private readonly data: Puppet2DGlobalData,
		nodes: GammaNode[],
		private readonly ik: Puppet2DIKHandle[],
		private readonly splines: Puppet2DSplineControl[],
	) {
		this.node = nodes[data.nd];
		this.enabled = data.en;
		this.controlsEnabled = data.ce;
	}

	public get lateUpdate (): boolean {
		return this.data.lu;
	}

	public get active (): boolean {
		return this.enabled && this.node.activeInHierarchy;
	}

	public run () {
		if (!this.controlsEnabled) return;

		for (const s of this.splines)
			s.run();

		// FaceCamera
		const aim = v3Scale(v3Normalize(this.node.forward), this.data.fc);
		for (const ik of this.ik) ik.aimDirection = aim;

		for (const ik of this.ik)
			ik.calculateIK();
	}
}
