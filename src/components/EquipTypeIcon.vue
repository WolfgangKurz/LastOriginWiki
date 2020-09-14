<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class EquipTypeIcon extends Vue {
	@Prop({
		type: String,
		default: "chip",
	})
	private type!: "chip" | "os" | "public" | "Chip" | "OS" | "Public";

	@Prop({
		type: Boolean,
		default: true,
	})
	private active!: boolean;

	private render () {
		return <div class="equip-type-icon" data-type={this.type} data-active={this.active ? 1 : 0} />;
	}
}
</script>

<style lang="scss">
.equip-type-icon {
	$size: 20px;

	display: inline-block;
	margin: 0 0.25em;
	width: $size;
	height: $size;
	background-image: url($assetsRoot + "/icon-equip.png");
	background-repeat: no-repeat;
	background-size: ($size * 3) ($size * 2);
	vertical-align: middle;

	$types: Chip, OS, Public;
	@each $type in $types {
		$idx: index($types, $type) - 1;
		$lType: to-lower-case($type);

		&[data-type="#{$type}"] {
			background-position-x: -($idx * $size);
		}
		&[data-type="#{$lType}"] {
			background-position-x: -($idx * $size);
		}
	}
	&[data-active="0"] {
		background-position-y: -$size;
		opacity: 0.5;
	}
}
</style>
