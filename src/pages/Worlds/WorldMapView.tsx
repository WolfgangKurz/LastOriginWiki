import "./WorldMapView.scss";

import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import WorldMapGrid from "./WorldMapGrid.vue";
import WorldMapSearchInfo from "./Sub/WorldMapSearchInfo.vue";
import WaveDropInfo from "./Sub/WaveDropInfo";

import DropUnit from "./DropUnit.vue";
import DropEquip from "./DropEquip.vue";
import DropItem from "./DropItem.vue";
import DropRes from "./DropRes.vue";

import EnemyModal from "@/pages/Enemy/EnemyModal.vue";

import { AssetsRoot, ImageExtension, WorldNames } from "@/libs/Const";
import { FormatNumber, UpdateTitle } from "@/libs/Functions";

import UnitData, { Unit } from "@/libs/DB/Unit";
import EquipData, { Equip } from "@/libs/DB/Equip";
import MapData, { MapNodeEntity, MapReward, MapEnemyData } from "@/libs/DB/Map";
import EnemyData, { Enemy } from "@/libs/DB/Enemy";
import ConsumableData, { Consumable } from "@/libs/DB/Consumable";
import { SetMeta } from "@/libs/Meta";
import { _e } from "@/libs/Buffs/BuffStatus";

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
		WorldMapGrid,
		WorldMapSearchInfo,
		WaveDropInfo,

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

	private CurrentTab: "reward" | "drop" | "enemy" | "search" = "reward";

	private selectedWave: number = 0;

	private selectedEnemy: Enemy | null = null;
	private selectedEnemyLevel: number = 1;

	private enemyModalDisplay: boolean = false;
	private waveDropModalDisplay: boolean = false;

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

		const ids: string[] = [];
		const ret: Unit[] = [];
		this.Waves.forEach(_ => {
			_.drops
				.filter(x => x.id.startsWith("Char_"))
				.map(x => {
					if (ids.includes(x.id)) return null;
					ids.push(x.id);

					const k = x.id.replace(/Char_(.+)_N/, "$1");
					return UnitData.find(y => y.uid === k);
				})
				.filter(x => x)
				.sort((a, b) => {
					return (b as Unit).rarity - (a as Unit).rarity;
				})
				.forEach(x => ret.push(x as Unit));
		});
		return ret;
	}

	private get ItemDrops () {
		if (!this.selected) return [];

		const ids: string[] = [];
		const ret: Array<Equip | Consumable> = [];
		this.Waves.forEach(_ => {
			_.drops
				.filter(x => !x.id.startsWith("Char_"))
				.map(x => {
					if (ids.includes(x.id)) return null;
					ids.push(x.id);

					if (x.id.startsWith("Equip_")) {
						const k = x.id.substr(6);
						const eq = EquipData.find(y => y.fullKey === k);
						if (eq) return eq;
					} else {
						const cs = ConsumableData.find(y => y.key === x.id);
						if (cs) return cs;
					}
					return null;
				})
				.filter(x => x)
				.forEach(x => ret.push(x as (Equip | Consumable)));
		});
		// (); .sort((a, b) => b.rarity - a.rarity);
		return ret;
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
		return this.selected.wave || [];
	}

	private get CurrentWave (): Array<WaveEnemyInfo | null> {
		if (!this.selected)
			return new Array(9).fill(null);

		return this.Waves[this.selectedWave].enemy
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

	private get CurrentWaveExp () {
		if (!this.selected) return 0;
		return FormatNumber(this.Waves[this.selectedWave].exp);
	}

	private get TotalExp () {
		if (!this.selected) return 0;
		return FormatNumber(this.Waves.reduce((p, c) => (p + c.exp || 0), 0));
	}

	private get SearchInfo () {
		if (!this.selected) return null;
		return this.selected.search || false;
	}

	private NodeChange () {
		this.selectedWave = 0;

		this.$router.push({
			path: `/worlds/${this.world}/${this.area}/${this.selected ? this.selected.text : ""}`,
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
		SetMeta(["description", "twitter:description"], `${this.WorldName}의 제 ${this.area}구역 정보를 표시합니다. 지역의 클리어 보상과 드랍 정보, 적 정보를 확인할 수 있습니다.`);
		SetMeta("keywords", `,${this.WorldName}`, true);
		SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${this.world}_${this.area}.png`);
		UpdateTitle("세계정보", this.WorldName, `제 ${this.area}구역`);
	}

	private render () {
		return <div class="world-map text-left">
			<b-row>
				<b-col cols="auto">
					<b-button variant="dark" onClick={ () => this.GoTo(`/worlds/${this.world}`) }>
						<b-icon-arrow-left class="mr-1" />
						구역 목록으로
					</b-button>
				</b-col>
			</b-row>
			<hr />

			<b-card no-body bg-variant="dark" text-variant="light">
				<b-card-header>
					{ this.WorldName }
					<h5 class="m-0 d-inline-block">
						<b-badge class="ml-2" variant="warning">
							제 { this.area }구역 :: { this.AreaName }
						</b-badge>
					</h5>
				</b-card-header>

				<div class="world-map-bg">
					<div>
						<world-map-grid
							nodes={ this.NodeList }
							world={ this.world }
							area={ this.area }
							onSelect={ () => this.NodeChange() }

							// selected$sync={ this.selected }
							selected={ this.selected }
							{ ...{ on: { "update:selected": ($v: MapNodeEntity | null) => (this.selected = $v) } } }
						/>
					</div>
				</div>
			</b-card>

			{ this.selected
				? <b-card class="mt-3" bg-variant="dark" text-variant="light">
					<h5>
						<b-badge variant="warning" class="mr-2 selected-node-badge">{ this.selected.text }</b-badge>
						{ this.selected.name }
					</h5>
					<div>{ this.selected.desc }</div>
				</b-card>
				: _e() }

			<b-card class="mt-2" no-body>
				<b-tabs card>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "reward" } onClick={ () => (this.CurrentTab = "reward") }>
						<template slot="title">
							<b-icon-award-fill class="mr-1" />
							클리어 보상
						</template>

						<b-card-body id="drops" class="p-0">
							{ !this.selected
								? <div class="text-center py-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
								: <b-row>
									{ this.RewardDrops.length > 0
										? <b-col cols="12">
											<b-row cols="1" cols-md="2" cols-lg="4">
												{ this.RewardDrops.map((reward, i) => (() => {
													if ("cash" in reward) {
														return <span key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }>
															<drop-res res="cash" count={ reward.cash } am={ !!reward.am } />
														</span>;
													}
													if ("metal" in reward) {
														return <span key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }>
															<drop-res res="metal" count={ reward.metal } am={ !!reward.am } />
														</span>;
													}
													if ("nutrient" in reward) {
														return <span key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }>
															<drop-res res="nutrient" count={ reward.nutrient } am={ !!reward.am } />
														</span>;
													}
													if ("power" in reward) {
														return <span key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }>
															<drop-res res="power" count={ reward.power } am={ !!reward.am } />
														</span>;
													}
													if ("unit" in reward) {
														return <a
															key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }
															class="drop-unit"
															href={ this.UnitPage(reward.unit.uid) }
															onClick={ (e: Event) => {
																e.preventDefault();
																this.GoTo(this.UnitPage(reward.unit.uid));
															} }
														>
															<drop-unit id={ reward.unit.uid } />
														</a>;
													}
													if ("equip" in reward && "count" in reward) {
														return <a
															key={ `worlds-${this.world}-${this.area}-drop-r-${i}` }
															class="drop-equip"
															href={ this.EquipPage(reward.equip) }
															onClick={ (e: Event) => {
																e.preventDefault();
																this.GoTo(this.EquipPage(reward.equip));
															} }
														>
															<drop-equip equip={ reward.equip } />
															{ reward.count > 1 ? `x${reward.count}` : _e() }
														</a>;
													}
													return <a key={ `worlds-${this.world}-${this.area}-drop-r-${i}` } class="drop-equip">
														<drop-item item={ reward.consumable } count={ reward.count } am={ !!reward.am } />
													</a>;
												})()) }
											</b-row>
										</b-col>
										: _e() }
								</b-row> }
						</b-card-body>
					</b-tab>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "drop" } onClick={ () => (this.CurrentTab = "drop") }>
						<template slot="title">
							<b-icon-gift-fill class="mr-1" />
							드랍 정보
						</template>

						{ this.selected
							? <div class="text-center mb-2">
								<b-button variant="dark" onClick={ () => (this.waveDropModalDisplay = true) }>웨이브 별 드랍 정보</b-button>
								<wave-drop-info
									display={ this.waveDropModalDisplay }
									{ ...{ on: { "update:display": ($v: boolean) => (this.waveDropModalDisplay = $v) } } }

									world={ this.world }
									area={ this.area }
									waves={ this.Waves }
									name={ this.selected.text }
								/>
							</div>
							: _e() }

						<b-card-body id="drops" class="p-0">
							{ !this.selected
								? <div class="text-center py-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
								: <b-row>
									<b-col cols="12" md="6">
										<b-card text-variant="dark" header="실종 대원 목록">
											<b-row cols="1" cols-lg={ this.UnitDrops.length === 0 ? 1 : 2 } class="text-center px-2">
												{ this.UnitDrops.length === 0
													? <div class="text-center py-4 text-secondary">드랍 정보 없음</div>
													: this.UnitDrops.map((unit, i) => <a
														key={ `worlds-${this.world}-${this.area}-drop-unit-${i}` }
														class="drop-unit"
														href={ this.UnitPage(unit.uid) }
													>
														<drop-unit id={ unit.uid } />
													</a>) }
											</b-row>
										</b-card>
									</b-col>
									<b-col cols="12" md="6" class="mt-md-0 mt-4">
										<b-card text-variant="dark" header="획득 가능 물품">
											<b-row cols="1" cols-lg={ this.ItemDrops.length === 0 ? 1 : 2 } class="text-center px-2">
												{ this.ItemDrops.length === 0
													? <div class="text-center py-4 text-secondary">드랍 정보 없음</div>
													: this.ItemDrops.map((item, i) =>
														"rarity" in item
															? <a
																key={ `worlds-${this.world}-${this.area}-drop-item-${i}` }
																class="drop-equip"
																href={ this.EquipPage(item) }
															>
																<drop-equip equip={ item } />
															</a>
															: <drop-item
																key={ `worlds-${this.world}-${this.area}-drop-item-${i}` }
																item={ item }
															/>) }
											</b-row>
										</b-card>
									</b-col>
								</b-row> }
						</b-card-body>
					</b-tab>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "enemy" } onClick={ () => (this.CurrentTab = "enemy") }>
						<template slot="title">
							<b-icon-bug-fill class="mr-1" />
							적 정보
						</template>

						<b-card-body class="p-0 text-center">
							{ !this.selected
								? <div class="py-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
								: [
									<div class="mb-2">
										<b-badge variant="danger">총 경험치 { this.TotalExp }</b-badge>
									</div>,
									this.Waves.map((wave, waveIdx) => <a
										key={ `worlds-${this.world}-${this.area}-wave-button-${waveIdx}` }
										href="#"
										class="wave-button"
										onClick={ (e: Event) => {
											e.preventDefault();
											this.selectedWave = waveIdx;
										} }
									>
										<img
											class="current-map-marker"
											src={ `${AssetsRoot}/map-current.png` }
											style={ { display: waveIdx === this.selectedWave ? "" : "none" } } />
										<img width="42" src={ `${AssetsRoot}/${this.ImageExt}/tbar/TbarIcon_MP_NightChick_RV.${this.ImageExt}` } />
									</a>),

									<div class="mt-3">
										<div class="mb-2">
											<b-badge variant="warning">웨이브 경험치 { this.CurrentWaveExp }</b-badge>
										</div>
										<div class="enemy-grid">
											{ this.CurrentWave.map((enemy, pos) => <div key={ `worlds-${this.world}-${this.area}-wave-enemy-${pos}` }>
												{ enemy !== null
													? [
														<img src={ `${AssetsRoot}/${this.ImageExt}/tbar/${enemy.enemy.icon}.${this.ImageExt}` } />,
														<div>{ enemy.enemy.name }</div>,
														<b-badge variant={ enemy.enemy.isBoss ? "danger" : "info" }>lv.{ enemy.lv }</b-badge>,

														<a href="#" class="stretched-link" onClick={ (e: Event) => {
															e.preventDefault();
															this.OpenEnemyInfo(enemy.enemy, enemy.lv);
														} } />,
													] : _e() }
											</div>) }
										</div>

										<enemy-modal
											enemy={ this.selectedEnemy }
											level={ this.selectedEnemyLevel }
											display={ this.enemyModalDisplay }
											{ ...{ on: { "update:display": ($v: boolean) => (this.enemyModalDisplay = $v) } } }
										/>
									</div>,
								] }
						</b-card-body>
					</b-tab>
					<b-tab title-link-class="text-dark" active={ this.CurrentTab === "search" } onClick={ () => (this.CurrentTab = "search") }>
						<template slot="title">
							<b-icon-search class="mr-1" />
							탐사 정보
						</template>

						<world-map-search-info world={ this.world } area={ this.area } search-info={ this.SearchInfo } />
					</b-tab>
				</b-tabs>
			</b-card>
		</div>;
	}
}