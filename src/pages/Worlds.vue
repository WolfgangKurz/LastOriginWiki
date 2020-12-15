<template>
	<div class="worlds text-left">
		<h2>세계 정보</h2>
		<hr />

		<h4>메인스토리 / 현재 진행중인 / 곧 진행될 이벤트</h4>
		<b-row cols="1" cols-lg="2">
			<b-col v-for="item in Tops" :key="`worlds-top-${item}`">
				<world-item linked :wid="item" @goto="GoTo" />
			</b-col>
		</b-row>

		<hr />

		<h4>지난 이벤트</h4>
		<b-row cols="1" cols-lg="2">
			<b-col v-for="item in List" :key="`worlds-list-${item}`">
				<world-item linked :wid="item" @goto="GoTo" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import WorldItem from "./Worlds/WorldItem.vue";

import { AssetsRoot, ImageExtension, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		WorldItem,
	},
})
export default class Worlds extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Tops () {
		return ["Story", "Ev4", "Ev9"];
	}

	private get List () {
		return Object.keys(WorldNames)
			.filter(x => !x.startsWith("EvA") && !this.Tops.includes(x));
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private mounted () {
		SetMeta(["description", "twitter:description"], "세계 목록을 표시합니다. 현재 진행중이거나 진행될 예정인 이벤트도 확인할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
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
