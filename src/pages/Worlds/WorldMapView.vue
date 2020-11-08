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

				<!-- <div class="float-right">
					<a class="ml-2" :href="`https://lastoriginmap.github.io/area.html?areanum=${area}`" target="_blank">
						<b-button size="sm" variant="primary">
							철충 지도
							<b-icon-link-45deg class="ml-1" />
						</b-button>
					</a>
				</div> -->
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

		<b-card class="mt-2" no-body>
			<b-tabs card>
				<template #tabs-start>
					<div v-if="selected" class="mx-2">
						<b-badge variant="warning">{{ selected.text }}</b-badge>
					</div>
				</template>

				<b-tab title-link-class="text-dark" :active="CurrentTab === 'reward'" @click="CurrentTab = 'reward'">
					<template #title>
						<b-icon-award-fill class="mr-1" />
						클리어 보상
					</template>

					<b-card-body id="drops" class="p-0">
						<div v-if="!selected" class="text-center pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
						<b-row v-else>
							<b-col v-if="RewardDrops.length > 0" cols="12">
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
							</b-col>
						</b-row>
					</b-card-body>
				</b-tab>
				<b-tab title-link-class="text-dark" :active="CurrentTab === 'drop'" @click="CurrentTab = 'drop'">
					<template #title>
						<b-icon-gift-fill class="mr-1" />
						드랍 정보
					</template>

					<b-card-body id="drops" class="p-0">
						<div v-if="!selected" class="text-center pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
						<b-row v-else>
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
				</b-tab>
				<b-tab title-link-class="text-dark" :active="CurrentTab === 'enemy'" @click="CurrentTab = 'enemy'">
					<template #title>
						<b-icon-bug-fill class="mr-1" />
						적 정보
					</template>

					<b-card-body class="p-0 text-center">
						<div v-if="!selected" class="pt-4 pb-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
						<template v-else>
							<a
								v-for="(wave, waveIdx) in Waves"
								:key="`worlds-${world}-${area}-wave-button-${waveIdx}`"
								href="#"
								class="wave-button"
								@click.prevent="selectedWave = waveIdx"
							>
								<img v-show="waveIdx === selectedWave" class="current-map-marker" :src="`${AssetsRoot}/map-current.png`" />
								<img width="42" :src="`${AssetsRoot}/${ImageExt}/tbar/TbarIcon_MP_NightChick_RV.${ImageExt}`" />
							</a>

							<div class="mt-4">
								<div class="enemy-grid">
									<template v-for="(enemy, pos) in CurrentWave">
										<div :key="`worlds-${world}-${area}-wave-enemy-${pos}`">
											<template v-if="enemy !== null">
												<img :src="`${AssetsRoot}/${ImageExt}/tbar/${enemy.enemy.icon}.${ImageExt}`" />
												<div>{{ enemy.enemy.name }}</div>
												<b-badge :variant="enemy.enemy.isBoss ? 'danger' : 'info'">lv.{{ enemy.lv }}</b-badge>

												<a href="#" class="stretched-link" @click.prevent="OpenEnemyInfo(enemy.enemy, enemy.lv)" />
											</template>
										</div>
									</template>
								</div>

								<enemy-modal :enemy="selectedEnemy" :display.sync="enemyModalDisplay" :level="selectedEnemyLevel" />
							</div>
						</template>
					</b-card-body>
				</b-tab>
			</b-tabs>
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

import EnemyModal from "@/pages/Enemy/EnemyModal.vue";

import { AssetsRoot, ImageExtension, WorldNames } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import UnitData, { Unit } from "@/libs/DB/Unit";
import EquipData, { Equip } from "@/libs/DB/Equip";
import MapData, { MapNodeEntity, MapReward, MapEnemyData } from "@/libs/DB/Map";
import EnemyData, { Enemy } from "@/libs/DB/Enemy";
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

interface WaveEnemyInfo extends MapEnemyData {
	enemy: Enemy;
}

@Component({
	components: {
		MapNode,
		DropUnit,
		DropEquip,
		DropItem,
		DropRes,

		EnemyModal,
	},
})
export default class WorldMapView extends Vue {
	private world: string = "";
	private area: string = "";

	private selected: MapNodeEntity | null = null;

	private CurrentTab: "reward" | "drop" | "enemy" = "reward";

	private selectedWave: number = 0;

	private selectedEnemy: Enemy | null = null;
	private selectedEnemyLevel: number = 1;
	private enemyModalDisplay: boolean = false;

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get ImageExt () {
		return ImageExtension();
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

	private get Waves () {
		if (!this.selected) return [];
		return this.selected.enemy;
	}

	private get CurrentWave (): Array<WaveEnemyInfo | null> {
		if (!this.selected)
			return new Array(9).fill(null);

		return this.Waves[this.selectedWave]
			.map(x => {
				if (!x) return null;

				const enemy = EnemyData.find(y => y.id === x.id);
				if (!enemy) return null;

				return {
					enemy,
					...x,
				};
			});
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
		this.selectedWave = 0;

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

	private OpenEnemyInfo (enemy: Enemy, level: number) {
		this.enemyModalDisplay = true;
		this.selectedEnemy = enemy;
		this.selectedEnemyLevel = level;
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

	.wave-button {
		display: inline-block;
		margin: 0.25em 0.5em;

		.current-map-marker {
			position: absolute;
			transform: scale(0.7);
		}
	}

	.enemy-grid {
		$gap: 0.75em;

		display: inline-grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: $gap;

		> div {
			position: relative;
			padding: 1em;
			border-radius: 8px;
			line-height: 120%;
			background-color: $gray-500;

			&:empty {
				background-color: $gray-300;
			}
		}
		img {
			max-width: 100px;
			max-height: 100px;
		}
	}
}
</style>
