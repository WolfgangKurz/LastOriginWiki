<template>
	<img class="item-icon mr-1" :src="ItemImage" :width="size" :height="size" />
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

	@Prop({
		type: [String, Number],
		default: 24,
	})
	private size!: string | number;

	private get ItemImage () {
		const ext = ImageExtension();
		return `${AssetsRoot}/${ext}/item/${this.item}.${ext}`;
	}
}
</script>

<style lang="scss">
img.item-icon {
	vertical-align: middle;
}
</style>
