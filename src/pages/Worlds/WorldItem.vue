<template>
	<b-card class="world-item mb-4" text-variant="light" bg-variant="dark">
		<b-row class="text-left">
			<b-col cols="auto">
				<img :src="`${AssetsRoot}/world/icons/${wid}_1.png`" />
			</b-col>
			<b-col>
				<div class="world-item-name">{{ Name }}</div>
				<hr class="my-1" />
				<div class="world-item-desc">{{ Description }}</div>
			</b-col>
		</b-row>
		<a v-if="linked" :href="`/worlds/${wid}`" class="stretched-link" @click.prevent="Click" />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AssetsRoot, WorldNames } from "@/libs/Const";

@Component({})
export default class WorldItem extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private wid!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private linked!: boolean;

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
			case "BlurryMemory": return "왓슨, 드디어 대단원이야!";
		}
		return this.wid;
	}

	private Click () {
		this.$emit("goto", `/worlds/${this.wid}`);
	}
}
</script>

<style lang="scss">
.world-item {
	.card-body {
		img {
			width: 100%;
			max-width: 6rem;
		}

		.world-item-name {
			font-size: 1.25rem;
		}
		.world-item-desc {
			word-break: keep-all;
			font-size: 0.875rem;
			opacity: 0.875;
		}
		hr {
			border-top-color: rgba(255, 255, 255, 0.1);
		}
	}
}
</style>
