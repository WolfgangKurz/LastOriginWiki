<template>
	<div class="story-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo(`/worlds/${world}/${area}`)">
					<b-icon-arrow-left class="mr-1" />지도 정보로
				</b-button>
			</b-col>
		</b-row>
		<hr />

		<b-card class="world-item mb-4" text-variant="light" bg-variant="dark">
			<b-row class="text-left">
				<b-col cols="auto">
					<img :src="`${AssetsRoot}/world/icons/${world}_${area}.png`" />
				</b-col>
				<b-col>
					<div class="world-item-name">
						{{Name}}
						<h5 class="m-0 d-inline-block">
							<b-badge class="ml-2" variant="warning">제 {{area}}구역 :: {{Area}}</b-badge>
						</h5>
					</div>
					<hr class="my-1" />
					<div class="world-item-desc">{{Description}}</div>
				</b-col>
			</b-row>
		</b-card>

		<div
			v-for="story in Stories"
			:key="`story-${story.area}-${story.map}-${story.loc}`"
			class="story-map-banner text-center"
		>
			<b-card class="story-map d-inline-flex text-left mt-4" text-variant="light" bg-variant="dark">
				<div class="story-banner">
					<img class="story-banner-image" :src="`${AssetsRoot}/story/Banner_${story.bg}.png`" />
					<div class="story-info">
						<unit-face :id="story.face" />
						<div class="story-text">
							<div class="story-loc">{{story.map}}-{{story.loc}}</div>
							<div class="story-name">{{story.title}}</div>
						</div>
					</div>

					<div class="story-enterance">
						<b-button
							v-if="(story.spec & 1) !== 0"
							variant="warning"
							@click="GoTo(`/story/${world}/${area}/${story.loc}/OP`)"
						>OP</b-button>
						<b-button
							v-if="(story.spec & 2) !== 0"
							variant="warning"
							@click="GoTo(`/story/${world}/${area}/${story.loc}/ED`)"
						>ED</b-button>
					</div>
				</div>
				<br />
				{{story.desc}}
			</b-card>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { AssetsRoot, ImageExtension, WorldNames } from "@/libs/Const";
import { MapData, StoryData } from "@/libs/DB";
import { UpdateTitle } from "@/libs/Functions";
import { StoryRaw } from "@/libs/Types";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class Story extends Vue {
	private world: string = "";
	private area: string = "";

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Name () {
		return WorldNames[this.world] || this.world;
	}

	private get Area () {
		if (this.world in MapData && this.area in MapData[this.world])
			return MapData[this.world][this.area].title;
		return "???";
	}

	private get Description () {
		switch (this.world) {
			case "Story": return "";
			case "SupremeDinner": return "소완으로 인해 혼란에 빠진 오르카 안에선 무슨 일이?";
			case "Rioboros": return "리오보로스의 유산을 찾아 떠나는 모험!";
			case "FullMoonNocturne": return "마법 소녀들과 함께 뽀끄루 대마왕을 물리쳐주세요!";
			case "HalloweenPanic": return "과거에 얽매이지 마. 지금을 즐기는 거야!";
			case "SaintOrca": return "연말 파티를 준비하는 사령관에게 뻗쳐오는 마수는?";
			case "ChocolateQueen": return "티아멧은 '초코 여왕'과 얽힌 멸망 전 인류의 일그러짐과 마주하는데..";
			case "FairyAria": return "가벼운 마음으로 요정 마을로 향한 사령관에게...?";
		}
		return this.world;
	}

	private get Stories (): StoryRaw[] {
		return StoryData
			.filter(x => x.area === this.world && x.map.toString() === this.area);
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
		if (!("area" in params)) {
			this.$router.replace("/worlds/" + params.world);
			return;
		}

		this.world = params.world;
		this.area = params.area;
	}

	private mounted () {
		this.checkParams();
		UpdateTitle(["이야기", this.Name, this.Area]);
	}
}
</script>

<style lang="scss">
#app > .container > .story-area {
	.card.disabled {
		opacity: 0.88;
	}

	.card-body {
		.story-name {
			font-size: 1rem;
		}
	}

	.story-map {
		.story-banner {
			position: relative;
			display: inline-block;
			margin-bottom: 1rem;

			border: 1px solid $light;
			box-shadow: 0 0 3px $light;

			> .story-banner-image {
				max-width: 100%;
				max-height: 200px;
			}

			> .story-info {
				position: absolute;
				display: flex;
				flex-direction: row;
				left: 2%;
				top: 50%;
				height: 80%;
				transform: translateY(-50%);
				align-items: center;

				.unit-face {
					grid-column: 1;
					height: 100%;
					border: 1px solid $light;
					background-color: $dark;
				}
				> .story-text {
					grid-column: 2;
					padding-left: 2rem;
					text-shadow: 0 0 4px #000;
					font-weight: bold;

					> .story-name {
						font-size: 110%;
					}
				}
			}

			> .story-enterance {
				position: absolute;
				right: 0.5rem;
				bottom: 0.5rem;
			}
		}
	}
}
</style>
