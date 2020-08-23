<template>
	<div class="world-map text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo('/worlds/')">뒤로</b-button>
			</b-col>
		</b-row>
		<hr />

		<b-card no-body bg-variant="dark" text-variant="light">
			<b-card-header>
				{{WorldName}}
				<b-badge class="ml-2" variant="warning">제 {{area}}구역</b-badge>
			</b-card-header>

			<div class="world-map-bg">
				<div v-for="(row, rowIdx) in NodeRows" :key="`worlds-${world}-${area}-${rowIdx}`">
					<template v-for="(node, idx) in row">
						<a
							:key="`worlds-${world}-${area}-${rowIdx}-${idx}`"
							:href="node.type ? `/worlds/${world}/${area}/${node.name}` : undefined"
							@click.prevent="node.type && SelectNode(node)"
						>
							<map-node :node="node" :active="selected === node" />
						</a>
						<div
							:key="`worlds-${world}-${area}-${rowIdx}-${idx}-prev-1`"
							:data-y="node.pos[1]"
							:data-pos="`${node.pos[0]},${node.pos[1]}`"
							:data-dir="1"
							:data-hidden="!node.prev || (rowIdx !== node.prev[1]) ? 1 : 0"
						/>
						<div
							:key="`worlds-${world}-${area}-${rowIdx}-${idx}-prev-2`"
							:data-y="node.pos[1]"
							:data-pos="`${node.pos[0]},${node.pos[1]}`"
							:data-dir="2"
							:data-hidden="!node.prev || (rowIdx === node.prev[1]) ? 1 : 0"
						/>
					</template>
				</div>
			</div>
		</b-card>

		<b-card bg-variant="dark" text-variant="light" no-body class="mt-2" id="drops">
			<b-card-header>
				드랍 정보
				<template v-if="selected">
					<b-badge class="ml-2" variant="warning">{{selected.name}}</b-badge>
				</template>
			</b-card-header>
			<b-card-body>
				<div v-if="!selected" class="text-center pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
				<b-row v-else>
					<b-col v-if="RewardDrops.length > 0" cols="12">
						<b-card text-variant="dark" header="클리어 보상" class="mb-4">
							<b-row cols="1" cols-md="2" cols-lg="4">
								<template v-for="(reward, i) in RewardDrops">
									<a
										v-if="typeof reward === 'number'"
										:key="`worlds-${world}-${area}-drop-reward-${i}`"
										class="drop-unit"
										:href="UnitPage(reward)"
									>
										<drop-unit :id="reward" />
									</a>
									<a
										v-else
										class="drop-equip"
										:href="EquipPage(reward.name, reward.rarity)"
										:key="`worlds-${world}-${area}-drop-reward-${i}`"
									>
										<drop-equip :name="reward.name" :rarity="reward.rarity" />
									</a>
								</template>
							</b-row>
						</b-card>
					</b-col>

					<b-col cols="12" md="6">
						<b-card text-variant="dark" header="실종 대원 목록">
							<b-row cols="1" :cols-lg="UnitDrops.length === 0 ? 1 : 2" class="text-center px-2">
								<div v-if="UnitDrops.length === 0" class="text-center pt-4 pb-4 text-secondary">드랍 정보 없음</div>
								<template v-else>
									<a
										class="drop-unit"
										v-for="(unit, i) in UnitDrops"
										:key="`worlds-${world}-${area}-drop-unit-${i}`"
										:href="UnitPage(unit)"
									>
										<drop-unit :id="unit" />
									</a>
								</template>
							</b-row>
						</b-card>
					</b-col>
					<b-col cols="12" md="6" class="mt-md-0 mt-4">
						<b-card text-variant="dark" header="획득 가능 장비">
							<b-row cols="1" :cols-lg="EquipDrops.length === 0 ? 1 : 2" class="text-center px-2">
								<div v-if="EquipDrops.length === 0" class="text-center pt-4 pb-4 text-secondary">드랍 정보 없음</div>
								<template v-else>
									<a
										class="drop-equip"
										:href="EquipPage(equip.name, equip.rarity)"
										v-for="(equip, i) in EquipDrops"
										:key="`worlds-${world}-${area}-drop-equip-${i}`"
									>
										<drop-equip :name="equip.name" :rarity="equip.rarity" />
									</a>
								</template>
							</b-row>
						</b-card>
					</b-col>
				</b-row>
			</b-card-body>
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
import { MapData } from "@/libs/DB";

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

	private get UnitDrops () {
		if (!this.selected) return [];
		return this.selected.drops.units;
	}

	private get EquipDrops () {
		if (!this.selected) return [];
		return this.selected.drops.equips
			.map(x => {
				return {
					name: x.substr(0, x.lastIndexOf("_")),
					rarity: x.substr(x.lastIndexOf("_") + 1).toUpperCase(),
				};
			});
	}

	private get RewardDrops () {
		if (!this.selected) return [];
		return [
			...this.selected.drops.reward.units,
			...this.selected.drops.reward.equips
				.map(x => {
					return {
						name: x.substr(0, x.lastIndexOf("_")),
						rarity: x.substr(x.lastIndexOf("_") + 1).toUpperCase(),
					};
				}),
		];
	}

	private get NodeRows () {
		return new Array(3)
			.fill(0)
			.map((x, i) => this.Nodes(i));
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

	private SelectNode (node: MapNodeEntity) {
		this.selected = node;
		this.$router.push({
			path: `/worlds/${this.world}/${this.area}/${node.name}`,
			hash: "#drops",
		});
	}

	private UnitPage (id: number) {
		return `/units/${id}`;
	}

	private EquipPage (id: string, rarity: string) {
		return `/equips/${rarity}/${id}`;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if (!("world" in params) || !("area" in params)) {
			this.$router.replace("/worlds/");
			return;
		}

		this.world = params.world;
		this.area = params.area;

		if ("node" in params) {
			const found = this.NodeRows
				.reduce((p, c) => {
					p.push(...c);
					return p;
				}, [])
				.find(y => y.name === params.node);

			this.selected = found || null;
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

		a:focus {
			border: none !important;
			outline: none !important;
		}
	}

	.drop-unit,
	.drop-equip {
		text-decoration: none;
	}
}
</style>
