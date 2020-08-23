<template>
	<div class="world-map text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoBack()">뒤로</b-button>
			</b-col>
		</b-row>
		<hr />

		<b-card no-body bg-variant="dark" text-variant="light">
			<b-card-header>
				{{WorldName}}
				<b-badge class="ml-2" variant="warning">제 {{area}}구역</b-badge>
			</b-card-header>

			<div class="world-map-bg">
				<div v-for="y in 3" :key="`worlds-${world}-${area}-${y}`">
					<template v-for="(node, idx) in Nodes(y - 1)">
						<map-node
							:key="`worlds-${world}-${area}-${y}-${idx}`"
							:node="node"
							@click.native="selected = node"
						/>
						<div
							:key="`worlds-${world}-${area}-${y}-${idx}-prev-1`"
							:data-y="node.pos[1]"
							:data-pos="`${node.pos[0]},${node.pos[1]}`"
							:data-dir="1"
							:data-hidden="!node.prev || (y - 1 !== node.prev[1]) ? 1 : 0"
						/>
						<div
							:key="`worlds-${world}-${area}-${y}-${idx}-prev-2`"
							:data-y="node.pos[1]"
							:data-pos="`${node.pos[0]},${node.pos[1]}`"
							:data-dir="2"
							:data-hidden="!node.prev || (y - 1 === node.prev[1]) ? 1 : 0"
						/>
					</template>
				</div>
			</div>
		</b-card>

		<b-card bg-variant="dark" text-variant="light" header="드랍 정보" class="mt-2">
			<div v-if="!selected" class="text-center pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
			<b-row v-else>
				<b-col cols="12" md="6">
					<b-card text-variant="dark" header="실종 대원 목록">
						<b-row cols="2" class="text-center px-2">
							<drop-unit :id="11" @click.native="GoTo(UnitPage(11))" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
							<drop-unit :id="11" />
						</b-row>
					</b-card>
				</b-col>
				<b-col cols="12" md="6">
					<b-card text-variant="dark" header="획득 가능 장비">
						<b-row cols="2" class="text-center px-2">
							<drop-equip name="item_improvedscope" @click.native="GoTo(EquipPage('item_improvedscope'))" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
							<drop-equip name="item_improvedscope" />
						</b-row>
					</b-card>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import MapNode from "./MapNode.vue";
import DropUnit from "./DropUnit.vue";
import DropEquip from "./DropEquip.vue";

import { AssetsRoot } from "@/libs/Const";
import { MapNodeEntity, MapNodeX, MapNodeY } from "@/libs/Types";
import { MapData, UnitData } from "@/libs/DB";

@Component({
	components: {
		MapNode,
		DropUnit,
		DropEquip,
	},
})
export default class WorldMap extends Vue {
	private world: string = "";
	private area: string = "";

	private selected: MapNodeEntity | null = null;

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private GoBack () {
		this.$router.back();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get WorldName () {
		switch (this.world) {
			case "Story": return "메인스토리";
			case "FairyAria": return "요정 마을의 아리아";
		}
		return this.world;
	}

	private get unit () {
		return UnitData[11];
	}

	private Nodes (y: number) {
		const ret: MapNodeEntity[] = new Array(8)
			.fill(MapNodeEntity.Empty)
			.map((x: MapNodeEntity, i) => {
				return {
					...x,
					pos: [i, y] as [MapNodeX, MapNodeY],
				};
			});

		const world = MapData[this.world];
		if (!world) return ret;

		const area = world[this.area]?.filter(x => x.pos[1] === y);
		if (!area) return ret;

		for (const n of area) ret[n.pos[0]] = n;
		return ret;
	}

	private UnitPage (id: number) {
		return `/units/${id}`;
	}

	private EquipPage (id: string) {
		return `/equips/SS/${id}`;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if (!("world" in params) || !("area" in params))
			this.$router.replace("/worlds/");
		else {
			this.world = params.world;
			this.area = params.area;
		}
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
#app > .container > .world-map {
	.world-map-bg {
		padding: 1em;
		background-image: url($assetsRoot + "/world/Texture_Bg_01.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #171717;
		overflow-x: auto;

		> div {
			$cols: ();
			@for $i from 1 through 8 {
				$cols: append($cols, auto);
				@if $i < 8 {
					$cols: append($cols, minmax(10px, 1fr));
				}
			}

			display: grid;
			grid-template-columns: $cols;
			grid-template-rows: 2fr 1fr;

			&:last-child {
				grid-template-rows: 1fr;
			}

			@for $i from 1 through 8 {
				@for $j from 1 through 3 {
					$x: (($i - 1) * 2) + 1;
					$x1: ($i - 1) * 2;

					> [data-pos="#{$i - 1},#{$j - 1}"] {
						grid-column: (($i - 1) * 2) + 1;
						grid-row: 1;

						&[data-dir="0"],
						&[data-dir="1"] {
							@if $x1 == 0 {
								display: none;
							} @else {
								grid-column: ($i - 1) * 2;
							}
						}
						&[data-dir="2"] {
							grid-row: 2;
						}
					}
				}
			}
			> [data-dir] {
				display: flex;
				justify-content: center;
				align-items: center;

				&::before {
					content: "";
					display: block;
					width: 100%;
					height: 3px;
				}
				&[data-hidden="1"] {
					visibility: hidden;
				}

				&[data-y="0"]::before {
					background-color: #98fd28;
				}
				&[data-y="1"]::before {
					background-color: #ffce22;
				}
				&[data-y="2"]::before {
					background-color: #ff2d5b;
				}

				&[data-dir="1"]::before {
					margin: 0 5%;
				}
				&[data-dir="2"]::before {
					width: 50%;
					transform: rotate(90deg);
				}
			}
		} // > div
	}
}
</style>
