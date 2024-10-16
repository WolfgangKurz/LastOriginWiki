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
			const b = m(c.substring(0, 2));
			const g = m(c.substring(2, 4));
			const r = m(c.substring(4, 6));
			const a = m(c.substring(6, 8), true);
			return `rgba(${r},${g},${b},${a})`;
		}
		return `#${c}`;
	}
	function isColorValid (): boolean {
		return parseColor.length > 0 && !parseColor[parseColor.length - 1].startsWith("/");
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

						if (isColorValid()) {
							const c = color();
							if (parseItalic)
								ret.push(<i data-color={ c } style={ { color: c } }>{ text }</i>);
							else
								ret.push(<span data-color={ c } style={ { color: c } }>{ text }</span>);
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
					} else if (tag === "i") {
						parseItalic = true;
						parseMode.push("i");
					} else if (parseMode[parseMode.length - 1] === "c")
						parseColor.push(tag);
					else if (tag[0] === "/") {
						const ctag = tag.substring(1);
						const offset = parseMode.lastIndexOf(ctag);
						if (offset >= 0) parseMode.splice(offset, parseMode.length - offset);

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

		if (isColorValid()) {
			const c = color();
			if (parseItalic)
				ret.push(<i data-color={ c } style={ { color: c } }>{ text }</i>);
			else
				ret.push(<span data-color={ c } style={ { color: c } }>{ text }</span>);
		} else if (parseItalic)
			ret.push(<i>{ text }</i>);
		else
			ret.push(<>{ text }</>);
	}
	return ret;
}
