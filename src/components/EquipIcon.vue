<script lang="tsx">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({})
export default class EquipIcon extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private image!: string;

	@Prop({
		type: String,
		default: "normal",
	})
	private size!: "small" | "normal" | "big" | "large";

	private get Icon () {
		const imageExt = ImageExtension();
		return `${AssetsRoot}/${imageExt}/item/${this.image}.${imageExt}`;
	}

	private get NumericSize () {
		switch (this.size) {
			case "small": return 40;
			case "normal": return 48;
			case "big": return 64;
			case "large": return 128;
		}
		return parseFloat(this.size) || 48;
	}

	private render () {
		return <div class="equip-icon">
			<img src={ this.Icon } width={ this.NumericSize } height={ this.NumericSize } />
		</div>;
	}
}
</script>

<style lang="scss">
div.equip-icon {
	display: inline-block;
	border-radius: 3px;
	vertical-align: middle;
	overflow: hidden;

	> img {
		display: block;
	}
}
</style>
