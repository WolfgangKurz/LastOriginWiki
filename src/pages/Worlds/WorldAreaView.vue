<template>
	<div class="world-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo('/worlds/')">
					<b-icon-arrow-left class="mr-1" />
					<locale k="WORLDS_BACK_TO_WORLDS" />
				</b-button>
			</b-col>
		</b-row>
		<hr />

		<world-item :wid="wid" />

		<b-row class="justify-content-center" cols="1" cols-sm="2" cols-md="3" cols-lg="4">
			<b-col v-for="i in Areas" :key="`world-area-${wid}-${i}`">
				<b-card class="world-area text-center mt-4" text-variant="light" bg-variant="dark">
					<img :src="`${AssetsRoot}/world/icons/${wid}_${i}.png`" />
					<div class="world-area-number text-warning">
						<locale k="WORLDS_AREA_TITLE" :p0="i" />
					</div>
					<div class="world-area-name">{{ AreaNames[i] }}</div>

					<b-btn-group class="mt-2">
						<b-button variant="warning" @click="GoTo(`/worlds/${wid}/${i}`)">
							<b-icon-compass class="mr-1" />
							<locale k="WORLDS_AREA_MAP" />
						</b-button>
						<b-button variant="light" @click="GoTo(`/story/${wid}/${i}`)">
							<b-icon-chat-left-quote class="mr-1" />
							<locale k="WORLDS_AREA_STORY" />
						</b-button>
					</b-btn-group>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import { Worlds } from "@/libs/Types/Map";
import MapDB from "@/libs/DB/Map";

import WorldItem from "./WorldItem.vue";
import { SetMeta } from "@/libs/Meta";

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
		return LocaleGet(`WORLD_${this.wid}`);
	}

	private get AreaNames (): Record<string, string> {
		const ret: Record<string, string> = {};

		Object.keys(MapDB[this.wid])
			.forEach(x => (ret[x] = LocaleGet(`WORLD_AREA_${this.wid}_${x}`)));
		return ret;
	}

	private get Description () {
		return LocaleGet([`WORLD_DESC_${this.wid}`, ""]);
	}

	private get Areas () {
		return Object.keys(MapDB[this.wid] || {});
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
		SetMeta(["description", "twitter:description"], `${this.Name}의 구역 목록을 표시합니다. 구역의 지도 정보와 이야기를 선택하여 확인할 수 있습니다.`);
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${this.wid}_1.png`);
		SetMeta("keywords", `,${this.Name}`, true);
		UpdateTitle(LocaleGet("MENU_WORLDS"), this.Name);
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
