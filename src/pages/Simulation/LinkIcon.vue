<template>
	<div class="link-icon" @click="linkedSync = !linkedSync">
		<unit-face v-if="linkedSync" :id="id" />
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
	@PropSync("linked", {
		type: Boolean,
		default: false,
	})
	private linkedSync!: boolean;

	@Prop({
		type: Number,
		required: true,
	})
	private id!: number;
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

	background-image: url($assetsRoot+"/simulation/LinkBack.png");
	background-repeat: no-repeat;
	background-size: $size $size;

	vertical-align: middle;
	cursor: pointer;

	> img {
		width: ($size - $padding * 2);
	}

	&::after {
		content: "";
		position: absolute;
		left: ($size / 2 - 17px);
		top: 2px;
		width: 34px;
		height: 9px;
		background-image: url($assetsRoot+"/simulation/LinkTop.png");
		background-repeat: no-repeat;
		background-size: 34px 9px;
	}
}
</style>
