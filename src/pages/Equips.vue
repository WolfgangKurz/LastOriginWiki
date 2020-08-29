<template>
	<div class="equips">
		<b-btn-group class="mx-2 mb-2">
			<b-button
				variant="outline-secondary"
				:pressed="Display.Type.Chip"
				@click="Filter('Type', 'Chip')"
			>칩</b-button>
			<b-button variant="outline-secondary" :pressed="Display.Type.OS" @click="Filter('Type', 'OS')">OS</b-button>
			<b-button
				variant="outline-secondary"
				:pressed="Display.Type.Public"
				@click="Filter('Type', 'Public')"
			>보조장비</b-button>
			<b-button
				variant="outline-secondary"
				:pressed="Display.Type.Private"
				@click="Filter('Type', 'Private')"
			>전용장비</b-button>
		</b-btn-group>

		<div clas="mx-1 mb-1">
			<b-btn-group class="mx-1 mb-1">
				<b-button
					variant="outline-dark"
					:pressed="Display.Type.EndlessWar"
					@click="Filter('Type', 'EndlessWar')"
				>영원한 전장</b-button>
				<b-button
					variant="outline-exchange"
					:pressed="Display.Source.Exchange"
					@click="Filter('Source', 'Exchange')"
				>교환소</b-button>
				<b-button
					variant="outline-apocrypha"
					:pressed="Display.Source.Apocrypha"
					@click="Filter('Source', 'Apocrypha')"
				>외전</b-button>
			</b-btn-group>
			<b-btn-group class="mx-1 mb-1">
				<b-button
					variant="outline-event-exchange"
					:pressed="Display.Source.EventExchange"
					@click="Filter('Source', 'EventExchange')"
				>이벤트 교환소</b-button>
				<b-button
					variant="outline-warning"
					:pressed="Display.Source.EventMap"
					@click="Filter('Source', 'EventMap')"
				>이벤트 맵</b-button>
			</b-btn-group>
			<b-btn-group class="mx-1 mb-1">
				<b-button
					variant="outline-danger"
					:pressed="Display.Source.ExMap"
					@click="Filter('Source', 'ExMap')"
				>Ex 맵</b-button>
				<b-button
					variant="outline-success"
					:pressed="Display.Source.SideMap"
					@click="Filter('Source', 'SideMap')"
				>사이드 맵</b-button>
				<b-button
					variant="outline-warning"
					:pressed="Display.Source.Map"
					@click="Filter('Source', 'Map')"
				>일반 맵</b-button>
				<b-button
					variant="outline-secondary"
					:pressed="Display.Source.Limited"
					@click="Filter('Source', 'Limited')"
				>한정</b-button>
			</b-btn-group>
		</div>

		<b-row class="mt-4" cols-xl="6" cols-lg="5" cols-md="4" cols-sm="3" cols="2">
			<b-col v-for="group of EquipGroups" :key="`equip-${group.name}`">
				<equip-card class="w-100" :group="group" @click="modalEquipRequest" />
			</b-col>
		</b-row>

		<equip-modal
			:name="selectedEquip"
			:rarity.sync="currentRarity"
			:display.sync="equipModalDisplay"
		/>
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";
import SourceBadge from "@/components/SourceBadge.vue";

import EquipCard from "./Equips/EquipCard.vue";
import EquipModal from "./Equips/EquipModal.vue";

import EquipNameTable from "@/json/equip-names.json";
import { CurrentEvent, CurrentDate } from "@/libs/Const";
import { EquipData } from "@/libs/DB";
import { ArrayUnique, UpdateTitle } from "@/libs/Functions";
import { Equip, Rarity, EquipType } from "@/libs/Types";
import EntitySource from "@/libs/EntitySource";

interface DisplayType {
	Type: {
		Chip: boolean;
		OS: boolean;
		Public: boolean;
		Private: boolean;
		EndlessWar: boolean;
	};
	Source: {
		EventExchange: boolean;
		Exchange: boolean;
		Apocrypha: boolean;
		Limited: boolean;
		ExMap: boolean;
		SideMap: boolean;
		EventMap: boolean;
		Map: boolean;
	};
}

@Component({
	components: {
		EquipIcon,
		SourceBadge,

		EquipCard,
		EquipModal,
	},
})
export default class Equips extends Vue {
	private Display: DisplayType = {
		Type: {
			Chip: true,
			OS: true,
			Public: true,
			Private: true,
			EndlessWar: true,
		},
		Source: {
			EventExchange: true,
			Exchange: true,
			Apocrypha: true,
			Limited: true,
			ExMap: true,
			SideMap: true,
			EventMap: true,
			Map: true,
		},
	};

	private selectedEquip: string = "";
	private currentRarity: Rarity = "SS";

	private equipModalDisplay: boolean = false;

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	@Watch("equipModalDisplay")
	private equipModalDisplayWatch (value: boolean, prev: boolean) {
		if (prev && !value)
			this.$router.push({ path: "/equips/" });
	}

	@Watch("currentRarity")
	private currentRarityWatch (value: boolean, prev: boolean) {
		if (value !== prev && this.equipModalDisplay)
			this.$router.push({ path: `/equips/${value}/${this.selectedEquip}` });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("rarity" in params && ["SS", "S", "A", "B"].includes(params.rarity))
			this.currentRarity = params.rarity as Rarity;

		if ("id" in params) {
			this.modalEquip(params.id);
			UpdateTitle(`장비정보 - ${this.EquipNames[this.selectedEquip]}`);
		} else {
			this.equipModalDisplay = false;
			UpdateTitle("장비정보");
		}
	}

	private get EquipNames () {
		interface Dictionary<T> {
			[key: string]: T;
		}
		return EquipNameTable as Dictionary<string>;
	}

	private get EquipRarity () {
		return ["ss", "s", "a", "b"];
	}

	private get EquipGroups () {
		const group = _.groupBy(EquipData, (x) => x.name.substr(0, x.name.lastIndexOf("_")));
		return _
			.keys(group)
			.map(x => {
				const baseType = x.substr(0, x.indexOf("_"));

				const source = ((items) => {
					const list: EntitySource[] = [];
					let map = false;

					for (const item of items) {
						for (const area of item.source) {
							for (const es of area) {
								// 현재 이벤트 맵 드랍 / 교환소 대상일 경우에만
								if (es.IsEvent && CurrentEvent !== es.EventId) continue;

								// 현재 교환소 대상일 경우에만
								if (!es.IsEvent && es.IsExchange && es.ExchangeDate !== CurrentDate) continue;

								// const hash = es.toString();
								if (es.IsMap) map = true;
								list.push(es);
							}
						}
					}

					// 맵 한군데서만 드랍
					const output = ArrayUnique(list, y => y.toString());
					if (output.length === 1 && output[0].IsMap)
						return output;
					else if (output.length === 0 && !map)
						return [new EntitySource("Limited")];
					else
						return output;
				})(group[x]);

				return {
					name: x,
					source,
				};
			})
			.filter(y => {
				const x = y.name;
				const baseType = x.substr(0, x.indexOf("_"));
				if (group[x].length === 0) return false;

				const sources = ArrayUnique(
					y.source,
					x => x.toString(),
				);

				// 전용장비
				const first = group[x][0];
				if (
					first.limit &&
					first.limit.every(y => typeof y === "number") &&
					!this.Display.Type.Private
				) return false;

				// 그 외 유형
				const types = [];
				if (this.Display.Type.Chip) types.push("chip");
				if (this.Display.Type.OS) types.push("os");
				if (this.Display.Type.Public) types.push("item");
				if (!types.includes(baseType)) return false;

				// 획득처
				let filtered = [...sources];
				if (!this.Display.Type.EndlessWar) filtered = filtered.filter(x => !x.IsEndlessWar);
				if (!this.Display.Source.Exchange) filtered = filtered.filter(x => !(x.IsExchange && !x.IsEvent));
				if (!this.Display.Source.Apocrypha) filtered = filtered.filter(x => !x.IsApocrypha);
				if (!this.Display.Source.EventExchange) filtered = filtered.filter(x => !(x.IsEvent && x.IsExchange));
				if (!this.Display.Source.EventMap) filtered = filtered.filter(x => !(x.IsEvent && !x.IsExchange));
				if (!this.Display.Source.ExMap) filtered = filtered.filter(x => !x.IsExMap);
				if (!this.Display.Source.SideMap) filtered = filtered.filter(x => !x.IsSideMap);
				if (!this.Display.Source.Map) filtered = filtered.filter(x => !(x.IsMap && !x.IsExMap && !x.IsSideMap));
				if (!this.Display.Source.Limited) filtered = filtered.filter(x => !x.IsLimited);

				return filtered.length > 0;
			})
			.map(x => ({
				name: x.name,
				source: x.source.length === 1 && x.source[0].IsMap
					? x.source
					: x.source.filter(y => !y.IsMap),
			}));
	}

	private EquipBase (name: string) {
		return Object.values(EquipData).filter(x => x.name.startsWith(name))[0];
	}

	private modalEquip (name: string) {
		this.selectedEquip = name;
		this.equipModalDisplay = true;
	}

	private modalEquipRequest (name: string) {
		if (name)
			this.$router.push({ path: `/equips/${this.currentRarity}/${name}` });
	}

	private Filter (category: keyof DisplayType, type: string) {
		switch (category) {
			case "Type":
				{
					const key = type as keyof DisplayType["Type"];
					this.Display.Type[key] = !this.Display.Type[key];
				}
				break;
			case "Source":
				{
					const key = type as keyof DisplayType["Source"];
					this.Display.Source[key] = !this.Display.Source[key];
				}
				break;
		}
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
/*
#app > .container > .equips {
}
*/
</style>
