const cachedBuffUid: Record<string, string[]> = {};
export function getBuffUid (uid: string, buff: string): number {
	if (uid in cachedBuffUid) {
		const index = cachedBuffUid[uid].indexOf(buff);
		if (index >= 0) return index + 1;
		cachedBuffUid[uid].push(buff);
		return cachedBuffUid[uid].length;
	}

	cachedBuffUid[uid] = [];
	return getBuffUid(uid, buff);
}
