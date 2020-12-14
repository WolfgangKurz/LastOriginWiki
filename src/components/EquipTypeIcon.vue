<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ITEM_TYPE } from "@/libs/Types/Enums";

@Component({})
export default class EquipTypeIcon extends Vue {
	@Prop({
		type: Number,
		default: ITEM_TYPE.CHIP,
	})
	private type!: ITEM_TYPE;

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
	background-image: url($assetsRoot + "icon-equip.png");
	background-repeat: no-repeat;
	background-size: ($size * 3) ($size * 2);
	vertical-align: middle;

	$types: 0, 1, 2;
	@each $type in $types {
		$idx: index($types, $type) - 1;

		&[data-type="#{$type}"] {
			background-position-x: -($idx * $size);
		}
	}
	&[data-active="0"] {
		background-position-y: -$size;
		opacity: 0.5;
	}
}
</style>
