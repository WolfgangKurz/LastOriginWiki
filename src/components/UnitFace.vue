<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({})
export default class UnitFace extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private uid!: string;

	@Prop({
		type: Number,
		default: 0,
	})
	private skin!: number;

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

	@Prop({
		type: Boolean,
		default: false,
	})
	private sd!: boolean;

	public static GetURL (uid: string, skin: number = 0, sd: boolean = false): string {
		const ext = ImageExtension();
		if (!uid) return `${AssetsRoot}/${ext}/face/transparent.${ext}`;

		if (uid.startsWith("Core_") || uid.startsWith("Module_"))
			return `${AssetsRoot}/${ext}/face/${uid}_0.${ext}`;

		if (sd)
			return `${AssetsRoot}/${ext}/tbar/${uid}.${ext}`;
		else
			return `${AssetsRoot}/${ext}/face/${uid}_${skin}.${ext}`;
	}

	private render () {
		const path = UnitFace.GetURL(this.uid, this.skin, this.sd);
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
