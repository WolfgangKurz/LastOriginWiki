export function ParseDescriptionText (text: string): preact.VNode[] {
	const parseBuffer: string[] = [];
	const parseMode: string[] = [];
	let parsePhase = 0;
	const parseColor: string[] = [];
	let parseItalic = false;

	function color (): string {
		const m = (c: string, a?: boolean): number => parseInt(c, 16) / (a ? 255 : 1);

		const c = parseColor[parseColor.length - 1];
		if (c.length === 8) {
			const b = m(c.substr(0, 2));
			const g = m(c.substr(2, 2));
			const r = m(c.substr(4, 2));
			const a = m(c.substr(6, 2), true);
			return `rgba(${r},${g},${b},${a})`;
		}
		return `#${c}`;
	}

	const ret: Array<preact.VNode> = [];

	for (let i = 0; i < text.length; i++) {
		const c = text[i];

		switch (parsePhase) {
			case 0: // Idle
				if (c === "[") {
					if (parseBuffer.length > 0) {
						const text = parseBuffer.join("")
							.split(/(\{[0-9]+\})/g)
							.filter(x => typeof x === "string");
						parseBuffer.splice(0, parseBuffer.length);

						if (parseColor.length > 0) {
							if (parseItalic)
								ret.push(<i style={ { color: color() } }>{ text }</i>);
							else
								ret.push(<span style={ { color: color() } }>{ text }</span>);
						} else if (parseItalic)
							ret.push(<i>{ text }</i>);
						else
							ret.push(<>{ text }</>);
					}

					parsePhase = 1;
				} else
					parseBuffer.push(c);
				break;
			case 1: // Tag Parsing
				if (c === "]") {
					const tag = parseBuffer.join("");
					parseBuffer.splice(0, parseBuffer.length);
					parsePhase = 0;

					if (tag === "-") {
						if (parseColor.length > 0)
							parseColor.pop();
					} else if (tag === "i")
						parseItalic = true;
					else if (parseMode[parseMode.length - 1] === "c")
						parseColor.push(tag);
					else if (tag[0] === "/") {
						const ctag = tag.substr(1);
						while (parseMode.pop() !== ctag);

						if (ctag === "c")
							parseColor.pop();
						else if (ctag === "i")
							parseItalic = false;
					} else
						parseMode.push(tag);
					// parseDepth++;
				} else
					parseBuffer.push(c);
				break;
		}
	}
	if (parseBuffer.length > 0) {
		const text = parseBuffer.join("")
			.split(/(\{[0-9]+\})/g)
			.filter(x => typeof x === "string");
		parseBuffer.splice(0, parseBuffer.length);

		if (parseColor.length > 0) {
			if (parseItalic)
				ret.push(<i style={ { color: color() } }>{ text }</i>);
			else
				ret.push(<span style={ { color: color() } }>{ text }</span>);
		} else if (parseItalic)
			ret.push(<i>{ text }</i>);
		else
			ret.push(<>{ text }</>);
	}
	return ret;
}