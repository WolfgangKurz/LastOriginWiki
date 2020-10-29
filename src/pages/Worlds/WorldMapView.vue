<template>
	<div class="world-map text-left">
		<b-row>
			<b-col cols="auto">
				<b-button variant="dark" @click="GoTo(`/worlds/${world}`)"> <b-icon-arrow-left class="mr-1" />구역 목록으로 </b-button>
			</b-col>
		</b-row>
		<hr />

		<b-card no-body bg-variant="dark" text-variant="light">
			<b-card-header>
				{{ WorldName }}
				<h5 class="m-0 d-inline-block">
					<b-badge class="ml-2" variant="warning">제 {{ area }}구역 :: {{ AreaName }}</b-badge>
				</h5>

				<div class="float-right">
					<a class="ml-2" :href="`https://lastoriginmap.github.io/area.html?areanum=${EnemyMapAreaId}`" target="_blank">
						<b-button size="sm" variant="primary">
							철충 지도
							<b-icon-link-45deg class="ml-1" />
						</b-button>
					</a>
				</div>
			</b-card-header>

			<div class="world-map-bg">
				<div>
					<template v-for="(node, nodeIdx) in NodeList">
						<a
							:data-pos="node.offset"
							:key="`worlds-${world}-${area}-${nodeIdx}-n`"
							:href="node.text ? `/worlds/${world}/${area}/${node.text}` : undefined"
							@click.prevent="node.text && SelectNode(node)"
						>
							<map-node :node="node" :active="selected === node" />
						</a>
						<div
							:key="`worlds-${world}-${area}-${nodeIdx}-p1`"
							:data-pos="node.offset"
							:data-dir="1"
							:data-hidden="isHidden(node, true) ? 1 : 0"
						/>
						<div
							v-if="Math.floor(node.offset / 8) < 2"
							:key="`worlds-${world}-${area}-${nodeIdx}-p2`"
							:data-pos="node.offset"
							:data-dir="2"
							:data-hidden="isHidden(node, false) ? 1 : 0"
						/>
					</template>
				</div>
			</div>
		</b-card>

		<b-card bg-variant="dark" text-variant="light" no-body class="mt-2" id="drops">
			<b-card-header>
				드랍 정보
				<template v-if="selected">
					<b-badge class="ml-2" variant="warning">{{ selected.text }}</b-badge>
				</template>
			</b-card-header>
			<b-card-body>
				<div v-if="!selected" class="text-center pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
				<b-row v-else>
					<b-col v-if="RewardDrops.length > 0" cols="12">
						<b-card text-variant="dark" header="클리어 보상" class="mb-4">
							<b-row cols="1" cols-md="2" cols-lg="4">
								<template v-for="(reward, i) in RewardDrops">
									<span v-if="'cash' in reward" :key="`worlds-${world}-${area}-drop-r-${i}`">
										<drop-res res="cash" :count="reward.cash" :am="!!reward.am" />
									</span>
									<span v-else-if="'metal' in reward" :key="`worlds-${world}-${area}-drop-r-${i}`">
										<drop-res res="metal" :count="reward.metal" :am="!!reward.am" />
									</span>
									<span v-else-if="'nutrient' in reward" :key="`worlds-${world}-${area}-drop-r-${i}`">
										<drop-res res="nutrient" :count="reward.nutrient" :am="!!reward.am" />
									</span>
									<span v-else-if="'power' in reward" :key="`worlds-${world}-${area}-drop-r-${i}`">
										<drop-res res="power" :count="reward.power" :am="!!reward.am" />
									</span>
									<a
										v-else-if="'unit' in reward"
										:key="`worlds-${world}-${area}-drop-r-${i}`"
										class="drop-unit"
										:href="UnitPage(reward.unit.uid)"
										@click.prevent="GoTo(UnitPage(reward.unit.uid))"
									>
										<drop-unit :id="reward.unit.uid" />
									</a>
									<a
										v-else-if="'equip' in reward && 'count' in reward"
										:key="`worlds-${world}-${area}-drop-r-${i}`"
										class="drop-equip"
										:href="EquipPage(reward.equip)"
										@click.prevent="GoTo(EquipPage(reward.equip))"
									>
										<drop-equip :equip="reward.equip" />
										<template v-if="reward.count > 1">x{{ reward.count }}</template>
									</a>
									<a v-else :key="`worlds-${world}-${area}-drop-r-${i}`" class="drop-equip">
										<drop-item :item="reward.consumable" :count="reward.count" :am="!!reward.am" />
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
										:href="UnitPage(unit.uid)"
									>
										<drop-unit :id="unit.uid" />
									</a>
								</template>
							</b-row>
						</b-card>
					</b-col>
					<b-col cols="12" md="6" class="mt-md-0 mt-4">
						<b-card text-variant="dark" header="획득 가능 물품">
							<b-row cols="1" :cols-lg="ItemDrops.length === 0 ? 1 : 2" class="text-center px-2">
								<div v-if="ItemDrops.length === 0" class="text-center pt-4 pb-4 text-secondary">드랍 정보 없음</div>
								<template v-else v-for="(item, i) in ItemDrops">
									<a
										v-if="'rarity' in item"
										:key="`worlds-${world}-${area}-drop-item-${i}`"
										class="drop-equip"
										:href="EquipPage(item)"
									>
										<drop-equip :equip="item" />
									</a>
									<drop-item v-else :key="`worlds-${world}-${area}-drop-item-${i}`" :item="item" />
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
import DropItem from "./DropItem.vue";
import DropRes from "./DropRes.vue";

import { AssetsRoot, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import UnitData, { Unit } from "@/libs/DB/Unit";
import EquipData, { Equip } from "@/libs/DB/Equip";
import MapData, { MapNodeEntity, MapReward } from "@/libs/DB/Map";
import ConsumableData, { Consumable } from "@/libs/DB/Consumable";

type RewardDropTypeBase =
	{ unit: Unit; } |
	{ equip: Equip, count: number; } |
	{ consumable: Consumable, count: number; } |
	{ cash: number; } |
	{ metal: number; } |
	{ nutrient: number; } |
	{ power: number; };

type RewardDropType = RewardDropTypeBase & {
	am?: true;
};

@Component({
	components: {
		MapNode,
		DropUnit,
		DropEquip,
		DropItem,
		DropRes,
	},
})
export default class WorldMapView extends Vue {
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

	private get EnemyMapAreaId (): string {
		return this.area;
		// switch (this.world) {
		// 	case "": return `${this.area}`;
		// 	case "Ev1": return `Ev1${this.area}`;
		// 	case "Ev2": return `Ev2${this.area}`;
		// 	case "Ev3": return `Ev3${this.area}`;
		// 	case "Ev4": return `Ev4${this.area}`;
		// 	case "EvaintOrca": return `Ev5${this.area}`;
		// 	case "ChocolateQueen": return `Ev6${this.area}`;
		// 	case "FairyAria": return `Ev7${this.area}`;
		// 	case "BlurryMemory": return `Ev8${this.area}`;
		// }
		// return "";
	}

	private get WorldName () {
		return this.world in WorldNames
			? WorldNames[this.world]
			: this.world;
	}

	private get AreaName (): string {
		return (this.world in MapData) && (this.area in MapData[this.world])
			? MapData[this.world][this.area].title || `${this.area} 구역`
			: "???";
	}

	private get UnitDrops () {
		if (!this.selected) return [];
		return this.selected.drops
			.filter(x => x.startsWith("Char_"))
			.map(x => {
				const k = x.replace(/Char_(.+)_N/, "$1");
				return UnitData.find(y => y.uid === k);
			})
			.filter(x => x)
			.sort((a, b) => {
				return (b as Unit).rarity - (a as Unit).rarity;
			}) as Unit[];
	}

	private get ItemDrops () {
		if (!this.selected) return [];
		return (
			this.selected.drops
				.filter(x => !x.startsWith("Char_"))
				.map(x => {
					if (x.startsWith("Equip_")) {
						const k = x.substr(6);
						const eq = EquipData.find(y => y.fullKey === k);
						if (eq) return eq;
					} else {
						const cs = ConsumableData.find(y => y.key === x);
						if (cs) return cs;
					}
					return null;
				})
				.filter(x => x) as Array<Equip | Consumable>
		); // .sort((a, b) => b.rarity - a.rarity);
	}

	private get RewardDrops (): RewardDropType[] {
		if (!this.selected) return [];

		const f = (x: MapReward) => {
			if (typeof x === "string") {
				const k = x.replace(/Char_(.+)_N/, "$1");
				const u = UnitData.find(y => y.uid === k);
				if (u) return { unit: u };
				return null;
			}

			if (("cash" in x) || ("metal" in x) || ("nutrient" in x) || ("power" in x))
				return x;

			if ("count" in x) {
				const i = x.item;
				if (i.startsWith("Equip_")) {
					const k = i.substr(6);
					const eq = EquipData.find(y => y.fullKey === k);
					if (eq) return { equip: eq, count: x.count };
				} else {
					const cs = ConsumableData.find(y => y.key === i);
					if (cs) return { consumable: cs, count: x.count };
				}
				return null;
			}

			return null;
		};

		return [
			...this.selected.reward_f.map(x => f(x)),
			...this.selected.reward_am.map(x => ({ ...f(x), am: true })),
		].filter(x => x) as RewardDropType[];
	}

	private get NodeList () {
		const ret: MapNodeEntity[] = new Array(24)
			.fill(MapNodeEntity.Empty)
			.map((x: MapNodeEntity, i) => ({ ...x, offset: i }));

		const world = MapData[this.world];
		if (!world) return ret;

		const area = world[this.area]?.list;
		if (!area) return ret;

		for (const n of area) ret[n.offset] = n;
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
		this.selected = node;
		this.$router.push({
			path: `/worlds/${this.world}/${this.area}/${node.text}`,
			hash: "#drops",
		});
	}

	private UnitPage (id: number | string) {
		return `/units/${id}`;
	}

	private EquipPage (equip: Equip) {
		return `/equips/${equip.fullKey}`;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if (!("area" in params)) {
			if (!("world" in params))
				this.$router.replace("/worlds/");
			else
				this.$router.replace(`/worlds/${params.world}`);
			return;
		}

		this.world = params.world;
		this.area = params.area;

		if ("node" in params) {
			const found = this.NodeList.find(y => y.text === params.node);
			this.selected = found || null;
		}
	}

	private mounted () {
		this.checkParams();
		UpdateTitle("세계정보", this.WorldName, `제 ${this.area}구역`);
	}
}
</script>

<style lang="scss">
#app > .container > .world-map {
	.world-map-bg {
		padding: 1em;
		background-image: url($assetsRoot + "/world/bg.png");
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
			grid-template-rows: 2fr 1fr 2fr 1fr 2fr;

			// &:last-child {
			// 	grid-template-rows: 1fr;
			// }

			@for $i from 1 through 8 {
				@for $j from 1 through 3 {
					$x: (($i - 1) * 2) + 1;
					$x1: ($i - 1) * 2;
					$offset: ($i - 1) + ($j - 1) * 8;

					> [data-pos="#{$offset}"] {
						grid-column: (($i - 1) * 2) + 1;
						grid-row: ($j * 2 - 1);

						&[data-dir="0"],
						&[data-dir="1"] {
							@if $x1 == 0 {
								display: none;
							} @else {
								grid-column: ($i - 1) * 2;
							}
						}
						&[data-dir="2"] {
							grid-row: ($j * 2);
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

				@mixin offsetColor($offset, $color) {
					$selectors: ();
					@for $i from 0 to 8 {
						$selectors: append($selectors, '&[data-pos="#{$i + $offset}"]::before', comma);
					}
					#{$selectors} {
						background-color: $color;
					}
				}
				@include offsetColor(0, #98fd28);
				@include offsetColor(8, #ffce22);
				@include offsetColor(16, #ff2d5b);

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
