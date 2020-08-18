<template>
	<img class="item-icon mr-1" :src="ItemImage" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

@Component({})
export default class ItemIcon extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private item!: string;

	private get ItemImage () {
		const ext = ImageExtension();
		return `${AssetsRoot}/${ext}/item/${this.item}.${ext}`;
	}
}
</script>

<style lang="scss">
img.item-icon {
	width: 24px;
	height: 24px;
	vertical-align: middle;
}
</style>
