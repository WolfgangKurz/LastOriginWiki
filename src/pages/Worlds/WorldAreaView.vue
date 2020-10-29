<template>
	<div class="world-area text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo('/worlds/')"> <b-icon-arrow-left class="mr-1" />세계 정보로 </b-button>
			</b-col>
		</b-row>
		<hr />

		<world-item :wid="wid" />

		<b-row class="justify-content-center" cols="2" cols-md="3" cols-lg="4">
			<b-col v-for="i in Areas" :key="`world-area-${wid}-${i}`">
				<b-card class="world-area text-center mt-4" text-variant="light" bg-variant="dark">
					<img :src="`${AssetsRoot}/world/icons/${wid}_${i}.png`" />
					<div class="world-area-number text-warning">제 {{ i }}구역</div>
					<div class="world-area-name">{{ AreaNames[i] }}</div>

					<b-btn-group class="mt-2">
						<b-button variant="warning" @click="GoTo(`/worlds/${wid}/${i}`)">
							<b-icon-download class="mr-1" />
							드랍
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

import MapData from "@/libs/DB/Map";

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

	private get AreaNames (): string[] {
		const ret: string[] = [];
		Object
			.keys(MapData[this.wid])
			.forEach(x => (ret[parseInt(x, 10)] = MapData[this.wid][x].title));
		return ret;
	}

	private get Description () {
		return WorldDescriptions[this.wid] !== undefined ? WorldDescriptions[this.wid] : this.wid;
	}

	private get Areas (): number {
		return Object.keys(MapData[this.wid] || {}).length;
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
