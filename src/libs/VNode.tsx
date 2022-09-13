import parse, { ParseNode } from "@/libs/DOMParser";
import { createElement } from "preact";

const paramRegex = /({[0-9]+})/g;

export type ComponentTable<T> = Record<string, preact.ComponentType<T>>;

/**
 * `Node` 목록을 자식까지 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
function traverseVNode<T> (nodes: ParseNode[], p: preact.ComponentChild[], components: ComponentTable<T>): preact.VNode[] {
	const ret: preact.VNode[] = [];

	nodes.forEach((x: ParseNode) => {
		if ("content" in x) {
			const text = x.content || "";
			ret.push(
				...text.split(paramRegex).map(x => {
					const r = paramRegex.exec(x);
					return r
						? ((): preact.VNode => {
							const idx = parseInt(r[1].substr(1, r[1].length - 2), 10);
							if (p && idx < p.length) {
								const v = p[idx];
								if (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
									return <>{ p[idx] }</>;
								return <>{ v }</>;
							}
							return <>{ x }</>;
						})()
						: <>{ x }</>;
				}),
			);
		} else {
			const attrs: Record<string, string | boolean> = {};

			const attributes = x.attrs;
			for (const item of attributes) {
				// if (item.name.toLowerCase() === "class")
				// 	continue; // className은 staticClass로 지정하기 때문에 제외
				attrs[item.name] = item.value || true;
			}

			if (x.name in components) {
				const comp = components[x.name];
				ret.push(createElement<T>(
					comp,
					{ ...attrs } as any,
					traverseVNode(x.childs, p, components),
				));
			} else if (/^[A-z_]([A-z0-9_-]+)?$/.test(x.name)) {
				ret.push(createElement(
					x.name,
					{ ...attrs },
					traverseVNode(x.childs, p, components),
				));
			} else {
				const travel = (x: ParseNode): string => {
					if ("content" in x)
						return x.content;

					return [
						"<",
						x.name,
						x.attrs.map(a => a.value !== null ? `${a.name}="${JSON.stringify(a.value)}"` : a.name).join(" "),
						x.childs.length > 0
							? [
								">",
								...x.childs.map(c => travel(c)),
								`</${x.name}>`,
							].join("")
							: " />",
					].join("");
				};
				ret.push(<>{ travel(x) }</>);
			}
		}
	});
	return ret;
}

/**
 * HTML(XML) 문자열을 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
export function parseVNode<T> (template: string, p: preact.ComponentChild[], components: ComponentTable<T>): preact.VNode[] {
	const ret: preact.VNode[] = [];

	try {
		const parsed = parse(template);
		ret.push(...traverseVNode(parsed.childs, p, components));
	} catch {
		console.error("Failed to parse VNode!", template);
		return [];
	}

	return ret;
}
