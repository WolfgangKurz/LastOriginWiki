<template>
	<b-card class="world-item mt-4" text-variant="light" bg-variant="dark" no-body>
		<b-card-header>
			<img v-if="event" class="event-text" :src="`${AssetsRoot}/world/event.png`" />
			{{name}}
		</b-card-header>
		<b-card-body>
			<b-row cols="2" cols-md="4" cols-lg="8">
				<a
					v-for="i in areas"
					:key="`worlds-${wid}-${i}`"
					class="area-name"
					:href="`/worlds/${wid}/${i}`"
					:data-disabled="disabled.includes(i) ? 1 : 0"
					@click.prevent="!disabled.includes(i) && GoTo(`/worlds/${wid}/${i}`)"
				>
					<img :src="`${AssetsRoot}/world/areaname-y.png`" />
					<span>제 {{i}}구역</span>
				</a>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AssetsRoot } from "@/libs/Const";

@Component({})
export default class WorldItem extends Vue {
	@Prop({
		type: Number,
		required: true,
	})
	private areas!: number;

	@Prop({
		type: String,
		required: true,
	})
	private wid!: string;

	@Prop({
		type: String,
		default: "지역",
	})
	private name!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private event!: boolean;

	@Prop({
		type: Array,
		default: () => [],
		validator: (x) => Array.isArray(x) && x.every(y => typeof y === "number"),
	})
	private disabled!: number[];

	private get AssetsRoot () {
		return AssetsRoot;
	}

	@Emit("goto")
	private GoTo (destination: string) {
		return undefined;
	}
}
</script>

<style lang="scss">
.world-item {
	.event-text {
		float: right;
		height: 24px;
	}
	.area-name {
		position: relative;
		display: inline-block;

		&[data-disabled="1"] {
			filter: grayscale(1);
		}

		> img {
			width: 100%;
		}
		> span {
			position: absolute;
			display: inline-flex;
			padding-bottom: 4px;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-weight: 500;
			font-size: 24px;
			color: #000;
		}
	}
}
</style>
