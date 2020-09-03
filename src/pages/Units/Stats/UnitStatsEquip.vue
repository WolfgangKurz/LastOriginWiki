<template>
	<b-card class="text-left" no-body>
		<b-card-header v-b-toggle.collapse_equip>
			장비 장착
			<div class="float-right">
				<equip-type-icon
					v-for="(equip, idx) in unit.Equips"
					:key="`unit-stats-equip-icon-${idx}`"
					:type="equip.Type"
					:active="!!equip.Name"
				/>
			</div>
		</b-card-header>
		<b-collapse id="collapse_equip">
			<b-card-body>
				<b-row cols="1" cols-lg="2">
					<b-col v-for="(equip, idx) in unit.Equips" :key="`unit-stats-equip-icon-${idx}`">
						<item-slot
							class="float-left mr-2"
							:type="equip.Type"
							:name="equip.Name"
							:rarity="equip.Rarity"
							:level="equip.Level"
							@click="EquipSelecting = idx + 1"
						/>
						<template v-if="equip.Name">
							<strong>{{EquipNames[equip.Name]}}</strong>
							<div>
								<rarity-badge class="mr-2" :rarity="equip.Rarity" />
								<b-badge v-if="equip.Level>0" variant="info">+{{equip.Level}}</b-badge>
							</div>
						</template>
						<template v-else>
							<div class="py-3">
								<small class="pl-2 text-secondary">장비 없음</small>
							</div>
						</template>
					</b-col>
				</b-row>

				<equip-select-modal
					v-if="unit"
					:target="unit.id"
					:display.sync="EquipSelectDisplay"
					:type="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Type : ''"
					:name="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Name + '_' + unit.Equips[EquipSelecting - 1].Rarity : ''"
					:level="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Level : 10"
					@select="EquipSelect"
				/>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import EquipNameTable from "@/json/equip-names.json";
import { LRarity } from "@/libs/Types";

import StatIcon from "@/components/StatIcon.vue";
import ItemSlot from "@/components/ItemSlot.vue";
import EquipTypeIcon from "@/components/EquipTypeIcon.vue";
import RarityBadge from "@/components/RarityBadge.vue";

import EquipSelectModal from "./EquipSelectModal.vue";

import { Unit } from "@/pages/Simulation/Simulation/Unit";
import { StatList } from "@/pages/Simulation/Simulation/Stats";

@Component({
	components: {
		StatIcon,
		ItemSlot,
		EquipTypeIcon,
		RarityBadge,

		EquipSelectModal,
	},
})
export default class UnitStatsEquip extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	private EquipSelecting: number = 0;

	private get EquipSelectDisplay () {
		return this.EquipSelecting > 0;
	}

	private set EquipSelectDisplay (value: boolean) {
		if (!value)
			this.EquipSelecting = 0;
	}

	private EquipSelect (group: string, rarity: LRarity, level: number) {
		if (!this.unit) return;

		const index = this.EquipSelecting - 1;
		this.unit.Equips[index].Name = group;
		this.unit.Equips[index].Rarity = rarity;
		this.unit.Equips[index].Level = level;
		this.EquipSelecting = 0;
	}

	private get EquipNames () {
		return EquipNameTable;
	}
}
</script>
