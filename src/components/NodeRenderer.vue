<script lang="tsx">
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class NodeRenderer extends Vue {
	@Prop({
		type: [Object, Array],
		required: true,
	})
	private elem!: JSX.Element | JSX.Element[];

	private render () {
		return Array.isArray(this.elem)
			? <span>{this.elem}</span>
			: this.elem;
	}
}
</script>
