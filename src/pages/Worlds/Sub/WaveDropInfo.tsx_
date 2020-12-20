import Vue from "vue";
import Component from "vue-class-component";
import { Model, Prop, PropSync } from "vue-property-decorator";

import DropUnit from "./../DropUnit.vue";
import DropEquip from "./../DropEquip.vue";
import DropItem from "./../DropItem.vue";

import { MapWave } from "@/libs/DB/Map";
import ConsumableData, { Consumable } from "@/libs/DB/Consumable";
import EquipData, { Equip } from "@/libs/DB/Equip";
import UnitData, { Unit } from "@/libs/DB/Unit";

@Component({
	components: {
		DropUnit,
		DropEquip,
		DropItem,
	},
})
export default class WaveDropInfo extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

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

	@Prop({
		type: String,
		default: "",
	})
	private name!: string;

	@Prop({
		type: Array,
		required: true,
	})
	private waves!: MapWave[];

	private currentWaveDrop: number = 0;

	private get UnitDropsWave () {
		interface UnitDrop {
			u: Unit;
			c: number;
		}
		return this.waves.map(_ => _.drops
			.filter(x => x.id.startsWith("Char_"))
			.map(x => {
				const k = x.id.replace(/Char_(.+)_N/, "$1");
				const u = UnitData.find(y => y.uid === k);
				if (!u) return null;
				return { u, c: x.chance };
			})
			.filter(x => x)
			.sort((a, b) => {
				return ((b as UnitDrop).u as Unit).rarity - ((a as UnitDrop).u as Unit).rarity;
			}) as UnitDrop[]);
	}

	private get ItemDropsWave () {
		interface EquipDrop {
			e: Equip;
			c: number;
		}
		interface ItemDrop {
			i: Consumable;
			c: number;
			n: number;
		}
		type Drop = EquipDrop | ItemDrop;

		return this.waves.map(_ => _.drops
			.filter(x => !x.id.startsWith("Char_"))
			.map(x => {
				if (x.id.startsWith("Equip_")) {
					const k = x.id.substr(6);
					const eq = EquipData.find(y => y.fullKey === k);
					if (eq) return { e: eq, c: x.chance };
				} else {
					const cs = ConsumableData.find(y => y.key === x.id);
					if (cs) return { i: cs, c: x.chance, n: x.count as number };
				}
				return null;
			})
			.filter(x => x) as Drop[]);
	}

	private UnitPage (id: number | string) {
		return `/units/${id}`;
	}

	private EquipPage (equip: Equip) {
		return `/equips/${equip.fullKey}`;
	}

	private render () {
		return <b-modal
			v-model={ this.displaySync }
			body-class="p-0"
			content-class="wave-drop-modal"
			centered
			hide-footer
			size="xl"
		>
			<template slot="modal-title">
				웨이브 별 드랍 정보
				<b-badge variant="warning" class="ml-2">{ this.name }</b-badge>
			</template>
			<b-tabs card>
				{ this.waves.map((wave, waveIdx) => <b-tab
					key={ `worlds-${this.world}-${this.area}-wave-drop-${waveIdx}` }
					title-link-class="text-dark"
					active={ this.currentWaveDrop === waveIdx }
					onClick={ () => (this.currentWaveDrop = waveIdx) }
				>
					<template slot="title">웨이브 { waveIdx + 1 }</template>

					<b-card-body id="drops" class="p-0">
						<b-row>
							<b-col cols="12" md="6">
								<b-card text-variant="dark" header="실종 대원 목록">
									<b-row
										cols="1"
										cols-lg={ this.UnitDropsWave[waveIdx].length === 0 ? 1 : 2 }
										class="text-center px-2"
									>
										{ this.UnitDropsWave[waveIdx].length === 0
											? <div class="text-center py-4 text-secondary">드랍 정보 없음</div>
											: this.UnitDropsWave[waveIdx].map((unit, i) => <a
												class="drop-unit"
												key={ `worlds-${this.world}-${this.area}-wave-drop-unit-${i}` }
												href={ this.UnitPage(unit.u.uid) }
											>
												<drop-unit id={ unit.u.uid } chance={ unit.c } />
											</a>) }
									</b-row>
								</b-card>
							</b-col>
							<b-col cols="12" md="6" class="mt-md-0 mt-4">
								<b-card text-variant="dark" header="획득 가능 물품">
									<b-row
										cols="1"
										cols-lg={ this.ItemDropsWave[waveIdx].length === 0 ? 1 : 2 }
										class="text-center px-2"
									>
										{ this.ItemDropsWave[waveIdx].length === 0
											? <div class="text-center py-4 text-secondary">드랍 정보 없음</div>
											: this.ItemDropsWave[waveIdx].map((item, i) =>
												"e" in item
													? <a
														key={ `worlds-${this.world}-${this.area}-wave-drop-item-${i}` }
														class="drop-equip"
														href={ this.EquipPage(item.e) }
													>
														<drop-equip equip={ item.e } chance={ item.c } />
													</a>
													: <drop-item
														key={ `worlds-${this.world}-${this.area}-wave-drop-item-${i}` }
														item={ item.i }
														chance={ item.c }
														count={ item.n }
													/>) }
									</b-row>
								</b-card>
							</b-col>
						</b-row>
					</b-card-body>
				</b-tab>) }
			</b-tabs>
		</b-modal>;
	}
}
