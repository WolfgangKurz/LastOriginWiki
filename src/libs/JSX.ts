import Vue from "vue";

export function _e (): JSX.Element {
	return {
		isRootInsert: true,
		isStatic: false,
		isComment: true,
		text: "",
	};
}

export function scope (context: Vue.RenderContext | Vue, name: string, def?: string | JSX.Element | Array<string | JSX.Element>) {
	const slot = ("slots" in context) ? context.slots() : context.$slots;
	if (name in slot) return slot[name];

	const scoped = ("data" in context) ? context.data.scopedSlots : context.$scopedSlots;
	if (!scoped) return typeof def === "undefined" ? _e() : def;

	const func = scoped[name];
	if (!func) return typeof def === "undefined" ? _e() : def;

	return func({});
}
