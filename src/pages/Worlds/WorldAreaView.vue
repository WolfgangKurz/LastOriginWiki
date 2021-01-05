<template>
	<div class="world-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo('/worlds/')"> <b-icon-arrow-left class="mr-1" />세계 정보로 </b-button>
			</b-col>
		</b-row>
		<hr />

		<world-item :wid="wid" />

		<b-row class="justify-content-center" cols="1" cols-sm="2" cols-md="3" cols-lg="4">
			<b-col v-for="i in Areas" :key="`world-area-${wid}-${i}`">
				<b-card class="world-area text-center mt-4" text-variant="light" bg-variant="dark">
					<img :src="`${AssetsRoot}/world/icons/${wid}_${i}.png`" />
					<div class="world-area-number text-warning">제 {{ i }}구역</div>
					<div class="world-area-name">{{ AreaNames[i] }}</div>

					<b-btn-group class="mt-2">
						<b-button variant="warning" @click="GoTo(`/worlds/${wid}/${i}`)">
							<b-icon-compass class="mr-1" />
							지도
						</b-button>
						<b-button variant="light" @click="GoTo(`/story/${wid}/${i}`)">
							<b-icon-chat-left-quote class="mr-1" />
							이야기
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

import { AssetsRoot, ImageExtension, WorldDescriptions, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import MapDB, { Worlds } from "@/libs/DB/Map";

import WorldItem from "./WorldItem.vue";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		WorldItem,
	},
})
export default class WorldArea extends Vue {
	private internalMapDB: Worlds | null = null;
	private get MapDB () {
		if (this.internalMapDB) return this.internalMapDB;
		return MapDB((x) => {
			this.internalMapDB = x;
		});
	}

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

	private get AreaNames (): Record<string, string> {
		const ret: Record<string, string> = {};

		const db = this.MapDB;
		if (!db) return ret;

		Object.keys(db[this.wid])
			.forEach(x => (ret[x] = db[this.wid][x].title));
		return ret;
	}

	private get Description () {
		return WorldDescriptions[this.wid] !== undefined ? WorldDescriptions[this.wid] : this.wid;
	}

	private get Areas () {
		if (!this.MapDB) return [];
		return Object.keys(this.MapDB[this.wid] || {});
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
		UpdateTitle("세계정보", this.Name);
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
