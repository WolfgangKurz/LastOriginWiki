<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/Const";

@Component({})
export default class UnitFace extends Vue {
	@Prop({
		type: Number,
		required: true,
	})
	private id!: number;

	@Prop({
		type: [Number, String],
		default: undefined,
	})
	private size!: number | string | undefined;

	@Prop({
		type: String,
		default: "",
	})
	private type!: string;

	public static GetURL (invalid: boolean, id: number): string {
		const ext = ImageExtension();
		return invalid
			? `${AssetsRoot}/transparent.png`
			: `${AssetsRoot}/${ext}/face/${("00" + id).substr(-3)}.${ext}`;
	}

	private render () {
		const path = UnitFace.GetURL(this.id === 0, this.id);
		if (this.size)
			return <img class="unit-face" data-type={this.type} src={path} width={this.size} height={this.size} />;
		else
			return <img class="unit-face" data-type={this.type} src={path} />;
	}
}
</script>

<style lang="scss">
.unit-face {
	&[data-type="mini"] {
		margin-right: 5px;
		border-radius: 4px;
		vertical-align: top;
	}
}
</style>
