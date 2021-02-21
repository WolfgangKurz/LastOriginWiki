import Vue from "vue";

Vue.component("raw", Vue.extend({
	name: "raw",
	functional: true,
	props: {
		data: {
			type: [Object, Array],
			required: true,
		},
	},
	render: (h, context) => context.props.data as Vue.VNode | Vue.VNode[],
}));
