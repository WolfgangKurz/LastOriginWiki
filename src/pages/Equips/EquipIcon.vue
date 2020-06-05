<script lang="tsx">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

import { Equip } from "@/Types";
import { AssetsRoot, ImageExtension } from "@/Const";

@Component({})
export default class EquipIcon extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private name!: string;

	@Prop({
		type: String,
		default: "normal",
	})
	private size!: "normal" | "big" | "large";

	private get Icon () {
		const imageExt = ImageExtension();
		return `${AssetsRoot}/${imageExt}/equips/${this.name}.${imageExt}`;
	}

	private render () {
		return <div class="equip-icon" data-size={this.size}>
			<img src={this.Icon} />
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

	img {
		display: block;
		width: 48px;
		height: 48px;
	}

	&[data-size="big"] img {
		width: 64px;
		height: 64px;
	}

	&[data-size="large"] img {
		width: 128px;
		height: 128px;
	}
}
</style>
