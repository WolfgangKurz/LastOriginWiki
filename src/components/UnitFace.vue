<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import UnitData from "@/libs/DB/Unit";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({})
export default class UnitFace extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private uid!: string;

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

	public static GetURL (uid: string): string {
		const ext = ImageExtension();
		return UnitData.some(x => x.uid === uid)
			? `${AssetsRoot}/${ext}/face/${uid}.${ext}`
			: `${AssetsRoot}/transparent.png`;
	}

	private render () {
		const path = UnitFace.GetURL(this.uid);
		if (this.size)
			return <img class="unit-face" data-type={ this.type } src={ path } width={ this.size } height={ this.size } />;
		else
			return <img class="unit-face" data-type={ this.type } src={ path } />;
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
