<template>
	<div class="world-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo('/worlds/')">
					<b-icon-arrow-left class="mr-1" />세계 정보로
				</b-button>
			</b-col>
		</b-row>
		<hr />

		<world-item :wid="wid" />

		<b-row class="justify-content-center" cols="2" cols-md="3" cols-lg="5">
			<b-col v-for="i in Areas[0]" :key="`world-area-${wid}-${i}`">
				<b-card :class="classNames(i)" text-variant="light" bg-variant="dark">
					<img :src="`${AssetsRoot}/world/icons/${wid}_${i}.png`" />
					<div
						:class="['world-area-name', Areas[1].includes(i) ? 'text-secondary' : 'text-warning']"
					>제 {{i}}구역</div>

					<a
						v-if="!Areas[1].includes(i)"
						:href="`/worlds/${wid}/${i}`"
						class="stretched-link"
						@click.prevent="GoTo(`/worlds/${wid}/${i}`)"
					/>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { AssetsRoot, ImageExtension, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import WorldItem from "./WorldItem.vue";

@Component({
	components: {
		WorldItem,
	},
})
export default class WorldArea extends Vue {
	private wid: string = "";

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Name () {
		return WorldNames[this.wid] || this.wid;
	}

	private get Description () {
		switch (this.wid) {
			case "Story": return "";
			case "SupremeDinner": return "소완으로 인해 혼란에 빠진 오르카 안에선 무슨 일이?";
			case "Rioboros": return "리오보로스의 유산을 찾아 떠나는 모험!";
			case "FullMoonNocturne": return "마법 소녀들과 함께 뽀끄루 대마왕을 물리쳐주세요!";
			case "HalloweenPanic": return "과거에 얽매이지 마. 지금을 즐기는 거야!";
			case "SaintOrca": return "연말 파티를 준비하는 사령관에게 뻗쳐오는 마수는?";
			case "ChocolateQueen": return "티아멧은 '초코 여왕'과 얽힌 멸망 전 인류의 일그러짐과 마주하는데..";
			case "FairyAria": return "가벼운 마음으로 요정 마을로 향한 사령관에게...?";
		}
		return this.wid;
	}

	private get Areas (): [number, number[]] {
		switch (this.wid) {
			case "Story": return [8, [8]];
			case "SupremeDinner": return [1, []];
			case "Rioboros": return [3, []];
			case "FullMoonNocturne": return [1, []];
			case "HalloweenPanic": return [1, []];
			case "SaintOrca": return [2, []];
			case "ChocolateQueen": return [2, []];
			case "FairyAria": return [3, []];
		}
		return [0, []];
	}

	private classNames (i: number) {
		const ret = ["world-area", "text-center", "mt-4"];
		if (this.Areas[1].includes(i)) ret.push("disabled");
		return ret;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if (!("world" in params)) {
			this.$router.replace("/worlds/");
			return;
		}

		this.wid = params.world;
	}

	private mounted () {
		this.checkParams();
		UpdateTitle(["세계정보", this.Name]);
	}
}
</script>

<style lang="scss">
#app > .container > .world-area {
	.card.disabled {
		opacity: 0.88;
	}

	.card-body {
		img {
			width: 100%;
			// max-width: 6rem;
		}

		.world-area-name {
			font-size: 1rem;
		}
	}
}
</style>
