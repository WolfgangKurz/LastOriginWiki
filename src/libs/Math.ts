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
