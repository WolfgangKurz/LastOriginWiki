<template>
	<div class="story-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo(`/worlds/${world}`)"> <b-icon-arrow-left class="mr-1" />구역 목록으로 </b-button>
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
						{{ Name }}
						<h5 class="m-0 d-inline-block">
							<b-badge class="ml-2" variant="warning">제 {{ area }}구역 :: {{ Area }}</b-badge>
						</h5>
					</div>
					<hr class="my-1" />
					<div class="world-item-desc">{{ Description }}</div>
				</b-col>
			</b-row>
		</b-card>

		<b-tabs nav-class="unit-display-tabs mb-3" align="right">
			<b-tab title-link-class="text-dark" :active="displayTab === 'general'" @click="displayTab = 'general'">
				<template #title>메인 스테이지</template>
			</b-tab>
			<b-tab title-link-class="text-dark" :active="displayTab === 'side'" @click="displayTab = 'side'">
				<template #title>사이드 스테이지</template>
			</b-tab>
			<b-tab title-link-class="text-dark" :active="displayTab === 'ex'" @click="displayTab = 'ex'">
				<template #title>Ex 스테이지</template>
			</b-tab>
		</b-tabs>
		<div v-for="story in Stories" :key="`story-${story.area}-${story.map}-${story.loc}`" class="story-map-banner text-center">
			<b-card class="story-map d-inline-flex text-left mt-4" text-variant="light" bg-variant="dark">
				<div class="story-banner">
					<img class="story-banner-image" :src="`${AssetsRoot}/story/Banner_${story.bg}.png`" />
					<div class="story-info">
						<unit-face :uid="story.face" :skin="story.skin" />

						<div class="story-text">
							<div class="story-loc">{{ story.map }}-{{ story.loc }}</div>
							<div class="story-name">{{ story.title }}</div>
						</div>
					</div>

					<div class="story-enterance">
						<b-button-group>
							<b-button
								v-if="(story.spec & 1) !== 0"
								variant="warning"
								@click="GoTo(`/story/${world}/${area}/${story.loc}/OP`)"
							>
								OP
							</b-button>
							<b-button
								v-if="(story.spec & 2) !== 0"
								variant="warning"
								@click="GoTo(`/story/${world}/${area}/${story.loc}/ED`)"
							>
								ED
							</b-button>
						</b-button-group>
					</div>
				</div>
				<br />
				{{ story.desc }}
			</b-card>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { StoryData } from "@/libs/DB";
import { UpdateTitle } from "@/libs/Functions";
import { StoryRaw } from "@/libs/Types";

import { Worlds } from "@/libs/Types/Map";
import MapDB from "@/libs/DB/Map";

import UnitFace from "@/components/UnitFace.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		UnitFace,
		EquipIcon,
	},
})
export default class Story extends Vue {
	private world: string = "";
	private area: string = "";

	private displayTab: "general" | "side" | "ex" = "general";

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Name () {
		return LocaleGet(`WORLD_${this.world}`);
	}

	private get Area () {
		if (this.world in MapDB && this.area in MapDB[this.world])
			return MapDB[this.world][this.area].title;
		return "???";
	}

	private get Description () {
		return LocaleGet([`WORLD_DESC_${this.world}`, ""]);
	}

	private get Stories (): StoryRaw[] {
		return StoryData
			.filter(x =>
				(this.displayTab === "side" && x.loc.endsWith("B")) ||
				(this.displayTab === "ex" && x.loc.endsWith("Ex")) ||
				(this.displayTab === "general" && !x.loc.endsWith("B") && !x.loc.endsWith("Ex")),
			)
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
		SetMeta(["description", "twitter:description"], `${this.Name}의 제 ${this.area}구역의 이야기 목록을 표시합니다.`);
		SetMeta("keywords", `,${this.Name},${this.Area}`, true);
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${this.world}_${this.area}.png`);
		UpdateTitle("이야기", this.Name, this.Area);
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
