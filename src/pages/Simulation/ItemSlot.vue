<template>
	<div class="item-slot" :data-type="type" :data-name="name" v-on="$listeners">
		<div v-if="name" class="equip">
			<equip-icon :name="`${name}_${rarity}`" />
			<equip-level :level="level" :size="10" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync } from "vue-property-decorator";

import { Rarity } from "@/libs/Types";

import EquipIcon from "@/components/EquipIcon.vue";
import EquipLevel from "@/pages/Equips/EquipLevel.vue";

@Component({
	components: {
		EquipIcon,
		EquipLevel,
	},
})
export default class ItemSlot extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private name!: string;

	@Prop({
		type: String,
		default: "SS",
	})
	private rarity!: Rarity;

	@Prop({
		type: String,
		default: "Chip",
	})
	private type!: string;

	@Prop({
		type: Number,
		default: 0,
	})
	private level!: number;
}
</script>

<style lang="scss" scoped>
.item-slot {
	$size: 50px;
	$padding: 3px;
	$inner: ($size - $padding * 2);

	$icon-size: 24px;

	position: relative;
	display: inline-block;
	margin: 0.25em;
	padding: $padding;
	width: $size;
	height: $size;

	background-image: url($assetsRoot+"/simulation/ItemBack.png");
	background-repeat: no-repeat;
	background-size: $size $size;
	box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.333);

	vertical-align: middle;
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		display: block;
		left: ($size - $icon-size) / 2;
		top: ($size - $icon-size) / 2;
		width: $icon-size;
		height: $icon-size;
		z-index: 0;
	}

	$list: Chip, OS, Public;
	@each $type in $list {
		&[data-type="#{$type}"]::before {
			background-image: url($assetsRoot+"/simulation/Item#{$type}.png");
			background-repeat: no-repeat;
			background-size: $icon-size $icon-size;
			background-position: center;
			opacity: 0.66;
		}
	}

	> .equip {
		position: relative;
		z-index: 1;

		&::v-deep img {
			width: $inner;
			height: $inner;
		}
	}
}
</style>
