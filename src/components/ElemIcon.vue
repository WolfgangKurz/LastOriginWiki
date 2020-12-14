<template>
	<div v-if="elem !== ''" class="elem-icon" :data-elem="elem" :data-inline="inline ? 1 : 0" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { SKILL_ATTR } from "@/libs/Types/Enums";

@Component({})
export default class ElemIcon extends Vue {
	@Prop({
		type: [String, Number],
		default: "",
	})
	private elem!: "fire" | "ice" | "lightning" | "physics" | "" | SKILL_ATTR;

	@Prop({
		type: Boolean,
		default: false,
	})
	private inline!: boolean;
}
</script>

<style lang="scss">
.elem-icon {
	display: inline-block;
	margin: 0 4px 4px 0;
	width: 20px;
	height: 17px;
	background-image: url($assetsRoot + "elem-type.png");
	background-size: 82px 17.5px;
	background-position: 0 0;
	background-repeat: no-repeat;
	vertical-align: middle;

	&[data-elem=""] {
		display: none;
	}
	&[data-elem="physics"],
	&[data-elem="0"] {
		background-position: -61.5px 0;
	}
	&[data-elem="fire"],
	&[data-elem="1"] {
		background-position: 0 0;
	}
	&[data-elem="ice"],
	&[data-elem="2"] {
		background-position: -41px 0;
	}
	&[data-elem="lightning"],
	&[data-elem="3"] {
		background-position: -20.5px 0;
	}

	&[data-inline="1"] {
		margin: -4px 2px -2px 0;
	}
}
</style>
