import * as PIXI from "pixi.js";

export function quat2eul (quat: Tuple<number, 4>) { // quat2eul (radian)
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

export function quat2tf (q: Tuple<number, 4>): PIXI.Transform {
	const x = q[0], y = q[1], z = q[2], w = q[3];
	const rm = [ // rotation matrix
		1 - 2 * (y * y + z * z), 2 * (x * y - w * z), 0,
		2 * (x * y + w * z), 1 - 2 * (x * x + z * z), 0,
		0, 0, 1
	];

	// axes
	const xp = { x: rm[0], y: rm[3] };
	const yp = { x: rm[1], y: rm[4] };

	// 2d matrix
	const a = xp.x, b = xp.y, c = yp.x, d = yp.y;

	// scale
	const scaleX = Math.hypot(a, b);
	const scaleY = Math.hypot(c, d);

	// scale removed
	const aN = a / scaleX;
	const bN = b / scaleX;
	const cN = c / scaleY;
	const dN = d / scaleY;

	// Compute rotation
	const rotation = Math.atan2(bN, aN);

	// Compute skew
	const skewX = Math.atan2(-cN, dN) - rotation;
	const skewY = 0; // rotation - Math.atan2(b, a);

	// Set to PixiJS Transform
	const transform = new PIXI.Transform();
	transform.scale.x = scaleX;
	transform.scale.y = scaleY;
	transform.rotation = rotation;
	transform.skew.x = skewX;
	transform.skew.y = skewY;

	return transform;
}
