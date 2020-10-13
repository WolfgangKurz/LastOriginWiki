<template>
	<div class="worlds text-left">
		<h2>세계 정보</h2>
		<hr />

		<h4>메인스토리 / 현재 진행중인 / 곧 진행될 이벤트</h4>
		<b-row cols="1" cols-lg="2">
			<b-col>
				<world-item linked wid="Story" @goto="GoTo" />
			</b-col>
			<b-col>
				<world-item linked wid="BlurryMemory" @goto="GoTo" />
			</b-col>
		</b-row>

		<hr />

		<h4>지난 이벤트</h4>
		<b-row cols="1" cols-lg="2">
			<b-col>
				<world-item linked wid="SupremeDinner" @goto="GoTo" />
			</b-col>
			<b-col>
				<world-item linked wid="Rioboros" @goto="GoTo" />
			</b-col>
			<b-col>
				<world-item linked wid="FullMoonNocturne" @goto="GoTo" />
			</b-col>
			<b-col>
				<world-item linked wid="FairyAria" @goto="GoTo" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import WorldItem from "./Worlds/WorldItem.vue";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

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

	private mounted () {
		UpdateTitle("세계정보");
	}
}
</script>

<style lang="scss">
/*
#app > .container > .worlds {
}
*/
</style>
