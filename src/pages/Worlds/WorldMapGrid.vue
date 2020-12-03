<template>
	<div class="world-map-grid">
		<template v-for="(node, nodeIdx) in nodes">
			<div :key="`world-map-grid-${nodeIdx}-n`" :data-pos="node.offset">
				<a :href="node.text ? `/worlds/${world}/${area}/${node.text}` : undefined" @click.prevent="node.text && SelectNode(node)">
					<map-node :node="node" :active="selectedSync === node" />
				</a>
			</div>
		</template>

		<svg>
			<line
				v-for="(line, lineIdx) in lineData"
				:key="`world-map-grid-line-${lineIdx}`"
				:x1="line.x1"
				:y1="line.y1"
				:x2="line.x2"
				:y2="line.y2"
				:stroke="line.color"
				stroke-width="2"
				stroke-linecap="square"
			/>
			<!--
			<div :key="`worlds-${nodeIdx}-p1`" :data-pos="node.offset" :data-dir="1" :data-hidden="isHidden(node, true) ? 1 : 0" />
			<div
				v-if="Math.floor(node.offset / 8) < 2"
				:key="`worlds-${nodeIdx}-p2`"
				:data-pos="node.offset"
				:data-dir="2"
				:data-hidden="isHidden(node, false) ? 1 : 0"
			/>
			-->
		</svg>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Watch } from "vue-property-decorator";

import MapNode from "./MapNode.vue";

import { MapNodeEntity } from "@/libs/DB/Map";
import Decimal from "decimal.js";

interface LineData {
	x1: string;
	y1: string;
	x2: string;
	y2: string;
	color: string;
}

@Component({
	components: {
		MapNode,
	},
})
export default class WorldMapGrid extends Vue {
	@Prop({
		type: Array,
		required: true,
	})
	private nodes!: MapNodeEntity[];

	@PropSync("selected", {
		type: Object,
		default: undefined,
	})
	private selectedSync!: MapNodeEntity | undefined;

	@Prop({
		type: String,
		default: "",
	})
	private world!: string;

	@Prop({
		type: String,
		default: "",
	})
	private area!: string;

	private get lineData () {
		const ret: LineData[] = [];

		const colors = [
			"#98fd28",
			"#ffce22",
			"#ff2d5b",
		];

		this.nodes.forEach(node => {
			if (node.prev === null) return;

			const fromX = node.offset % 8;
			const fromY = Math.floor(node.offset / 8);
			const toX = node.prev % 8;
			const toY = Math.floor(node.prev / 8);

			if (fromX < toX) return;

			const x1b = fromY * 0.5 - 0.25 + 0.5;
			const x2b = toY * 0.5 - 0.25 + 0.5;

			ret.push({
				x1: Decimal.div(1, 9)
					.mul(Decimal.add(fromX, x1b))
					.mul(100)
					.toNumber() + "%",
				y1: Decimal.div(1, 3)
					.mul(fromY + 0.5)
					.mul(100)
					.toNumber() + "%",
				x2: Decimal.div(1, 9)
					.mul(Decimal.add(toX, x2b))
					.mul(100)
					.toNumber() + "%",
				y2: Decimal.div(1, 3)
					.mul(toY + 0.5)
					.mul(100)
					.toNumber() + "%",
				color: colors[Math.min(fromY, toY)],
			});
		});
		return ret;
	}

	private isHidden (node: MapNodeEntity, diffs: boolean) {
		if (node.prev !== null) {
			const oy = Math.floor(node.offset / 8);
			const py = Math.floor(node.prev / 8);

			if (oy === py && node.prev >= node.offset)
				return true;

			return diffs
				? oy !== py
				: oy === py;
		}
		return true;
	}

	private SelectNode (node: MapNodeEntity) {
		this.selectedSync = node;
		this.$emit("select");
	}
}
</script>

<style lang="scss">
.world-map-grid {
	$cols: ();
	@for $i from 1 through 8 {
		$cols: append($cols, auto);
		@if $i < 8 {
			// $cols: append($cols, minmax(10px, 1fr));
		}
	}

	display: grid;
	grid-template-columns: repeat(9, 1fr);
	// grid-template-rows: 2fr 1fr 2fr 1fr 2fr;
	grid-template-rows: repeat(3, 1fr);

	> svg {
		width: 100%;
		height: 100%;
		grid-column: 1 / 10;
		grid-row: 1 / 4;
	}

	// &:last-child {
	// 	grid-template-rows: 1fr;
	// }

	%row1 {
		transform: translateX(-25%);
	}
	%row2 {
		transform: translateX(25%);
	}
	%row3 {
		transform: translateX(75%);
	}

	> [data-pos] {
		text-align: center;
	}
	@for $j from 1 through 3 {
		@for $i from 1 through 8 {
			$x: (($i - 1) * 2) + 1;
			$offset: ($i - 1) + ($j - 1) * 8;

			> [data-pos="#{$offset}"] {
				// grid-column: (($i - 1) * 2) + 1;
				// grid-row: ($j * 2 - 1);

				grid-column: $i;
				grid-row: $j;

				@if $j == 1 {
					@extend %row1;
				} @else if $j == 2 {
					@extend %row2;
				} @else if $j == 3 {
					@extend %row3;
				}
			}
		}
	}
}
</style>
