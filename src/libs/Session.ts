export default class Session {
	private static table: Record<string, string> = {};

	static {
		this.table = JSON.parse(window.localStorage.getItem("global.config") || "{}");
	}

	private static save (): void {
		window.localStorage.setItem("global.config", Session.serialize());
	}

	public static clear (): void {
		this.table = {};
		this.save();
	}
	public static serialize (): string {
		return JSON.stringify(this.table);
	}
	public static deserialize (serialized: string): void {
		this.table = JSON.parse(serialized) || {};
	}

	public static get (key: string, def?: string): string | null {
		return key in this.table
			? this.table[key]
			: typeof def === "undefined"
				? null
				: def;
	}
	public static set (key: string, value: string): void {
		this.table[key] = value;
		this.save();
	}
}
