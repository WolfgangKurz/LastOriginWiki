<template>
	<div class="link-icon" @click="linkedSync = !linkedSync">
		<unit-face v-if="valueSync" :uid="uid" />
		<div v-if="valueSync >0 && valueSync < 1" class="link-partial">{{Percent}}%</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync } from "vue-property-decorator";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class StatIcon extends Vue {
	@PropSync("value", {
		type: Number,
		default: 0,
	})
	private valueSync!: number;

	@Prop({
		type: String,
		required: true,
	})
	private uid!: string;

	private get Percent () {
		return Math.floor(this.valueSync * 100);
	}
}
</script>

<style lang="scss" scoped>
.link-icon {
	$size: 50px;
	$padding: 3px;

	position: relative;
	display: inline-block;
	margin: 0.25em;
	padding: $padding;
	width: $size;
	height: $size;

	background-image: url($assetsRoot + "simulation/LinkBack.png");
	background-repeat: no-repeat;
	background-size: $size $size;

	vertical-align: middle;
	cursor: pointer;

	> img {
		width: ($size - $padding * 2);
	}
	> div {
		position: absolute;
		display: flex;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		justify-content: center;
		align-items: center;
		text-shadow: 0 0 4px $black;
		font-size: $size;
		font-weight: bold;
		color: $danger;
	}

	&::after {
		content: "";
		position: absolute;
		left: ($size / 2 - 17px);
		top: 2px;
		width: 34px;
		height: 9px;
		background-image: url($assetsRoot + "simulation/LinkTop.png");
		background-repeat: no-repeat;
		background-size: 34px 9px;
	}
}
</style>
