import Vue from "vue";
import { scope } from "@/libs/JSX";
import { LocaleGet } from "@/libs/Locale";

const paramRegex = /({[0-9]+})/g;

/**
 * `Node` 목록을 자식까지 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
function traverseVNode (nodes: Node[] | NodeListOf<ChildNode>, h: Vue.CreateElement, context: Vue.RenderContext): Vue.VNode[] {
	const ret: Vue.VNode[] = [];
	const slots = context.slots();

	nodes.forEach((x: Node) => {
		switch (x.nodeType) {
			case Node.TEXT_NODE:
				{
					const text = (x as Text).data || "";
					ret.push(
						...text.split(paramRegex).map(x => {
							const r = paramRegex.exec(x);
							return r
								? (() => {
									const p = `p${r[1].substr(1, r[1].length - 2)}`;
									return (context.data.attrs && context.data.attrs[p]) || scope(context, p);
								})()
								: context._v(x);
						}),
					);
				}
				break;
			case Node.ELEMENT_NODE:
				{
					const y = x as Element;
					const attrs: Record<string, string> = {};

					const attributes = y.attributes;
					for (const item of attributes) {
						if (item.name.toLowerCase() === "class")
							continue; // className은 staticClass로 지정하기 때문에 제외
						attrs[item.name] = item.value;
					}

					ret.push(h(
						x.nodeName,
						{ attrs, staticClass: y.className },
						traverseVNode(x.childNodes, h, context),
					));
				}
				break;
		}
	});
	return ret;
}

/**
 * HTML(XML) 문자열을 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
function parseVNode (template: string, h: Vue.CreateElement, context: Vue.RenderContext): Vue.VNode[] {
	const ret: Vue.VNode[] = [];
	const parser = new DOMParser();

	try {
		const parsed = parser.parseFromString(`<x>${template}</x>`, "text/xml");
		ret.push(...traverseVNode(parsed.childNodes[0].childNodes, h, context));
	} catch {
		throw new Error("Failed to parse HTML");
	}

	return ret;
}

export default Vue.extend({
	name: "Locale",
	functional: true,
	inject: ["GLOBAL_SITE_LANG"],
	props: {
		k: {
			type: String,
			required: true,
		},
	},
	render (h, context) {
		const template = LocaleGet(context.props.k);
		return parseVNode(template, h, context);
	},
});
