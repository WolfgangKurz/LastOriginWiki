<template>
	<div class="worlds text-left">
		<h2>세계 정보</h2>

		<world-item name="전투 지도" :areas="8" :disabled="[8]" wid="Story" @goto="GoTo" />
		<world-item name="요정 마을의 아리아" event :areas="3" wid="FairyAria" @goto="GoTo" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import WorldItem from "./Worlds/WorldItem.vue";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({
	components: {
		WorldItem,
	},
})
export default class Worlds extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}
}
</script>

<style lang="scss">
#app > .container > .worlds {
}
</style>
