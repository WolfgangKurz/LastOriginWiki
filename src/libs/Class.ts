type Classable = string | undefined | boolean | number | JSX.SignalLike<Classable>;

export function BuildClass (...classNames: Array<Classable | Record<string, boolean>>): string {
	return classNames
		.map(x => {
			if (typeof x === "object") {
				if ("peek" in x && typeof x.peek === "function")
					return x.peek();

				return Object.keys(x)
					.map(k => x[k] ? k : undefined)
					.filter(y => y)
					.join(" ");
			}
			return x;
		})
		.filter(x => x)
		.join(" ");
}
