<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({})
export default class TbarIcon extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private icon!: string;

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
		return `${AssetsRoot}/${ext}/tbar/${uid}.${ext}`;
	}

	private render () {
		const path = TbarIcon.GetURL(this.icon);
		if (this.size)
			return <img class="tbar-icon" data-type={ this.type } src={ path } width={ this.size } height={ this.size } />;
		else
			return <img class="tbar-icon" data-type={ this.type } src={ path } />;
	}
}
</script>

<style lang="scss">
.tbar-icon {
	&[data-type="mini"] {
		margin-right: 5px;
		border-radius: 4px;
		vertical-align: top;
	}
}
</style>
