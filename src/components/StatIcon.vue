<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class StatIcon extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private stat!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private inline!: boolean;

	private render () {
		const list = ["ATK", "DEF", "HP", "ACC", "EV", "Cri", "SPD"];
		if (!list.includes(this.stat)) return <i />;

		return <div class="stat-icon" data-stat={this.stat} data-inline={this.inline ? 1 : 0} />;
	}
}
</script>

<style lang="scss" scoped>
.stat-icon {
	$size: 20px;
	$scale: $size / 52px;

	display: inline-block;
	margin-right: 0.5em;
	width: $size;
	height: $size;
	vertical-align: bottom;

	background-image: url($assetsRoot + "/simulation/stats.png");
	background-repeat: no-repeat;
	background-size: ($size * 7) $size;
	background-position: $size 0;

	$stat-list: ATK, DEF, HP, ACC, EV, Cri, SPD;
	@each $stat in $stat-list {
		&[data-stat="#{$stat}"] {
			background-position: (-$size * (index($stat-list, $stat) - 1)) 0;
		}
	}

	&[data-inline="1"] {
		margin-right: 0;
	}
}
</style>
