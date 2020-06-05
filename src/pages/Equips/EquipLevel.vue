<template>
	<div v-if="level > 0" class="equip-level">+{{level}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class EquipLevel extends Vue {
	@Prop({
		type: [Number, String],
		default: 0,
	})
	private level!: number | string;
}
</script>

<style lang="scss">
.equip-level {
	position: absolute;
	top: 0;
	right: 10px;

	font-weight: bold;
	font-size: 20px;
	color: #fff;
	text-shadow: 0 0 2px #000,
		0 0 2px #000,
		0 0 2px #000,
		0 0 2px #000,
		0 0 5px rgba(0, 0, 0, 0.6),
		0 0 6px rgba(0, 0, 0, 0.6),
		0 0 7px rgba(0, 0, 0, 0.6),
		0 0 8px rgba(0, 0, 0, 0.6);
}
</style>
