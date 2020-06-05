<template>
	<div v-if="elem" class="elem-icon" :data-elem="elem" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ElemIcon extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private elem!: "fire" | "thunder" | "cold" | "";
}
</script>

<style lang="scss">
.elem-icon {
	display: inline-block;
	margin: 0 4px 4px 0;
	width: 20px;
	height: 17px;
	background-image: url($assetsRoot+"/elem-type.png");
	background-size: 61.5px 17.5px;
	background-position: 0 0;
	background-repeat: no-repeat;
	vertical-align: middle;

	&[data-elem=""] {
		display: none;
	}
	&[data-elem="fire"] {
		background-position: 0 0;
	}
	&[data-elem="thunder"] {
		background-position: -20.5px 0;
	}
	&[data-elem="cold"] {
		background-position: -41px 0;
	}
}
</style>
