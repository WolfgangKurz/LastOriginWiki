
export function getCookie (name: string, def?: string): string | undefined {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return (parts.pop() as string)
			.split(";")
			.shift();
	}
	return def;
}

export function hasCookie (name: string): boolean {
	return getCookie(name) !== undefined;
}

export function setCookie (name: string, value: string, path: string = "/"): void {
	document.cookie = `${name}=${value}; path=${path}`;
}
