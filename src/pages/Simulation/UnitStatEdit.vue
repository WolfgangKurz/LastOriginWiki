<template>
	<b-card no-body class="unit-stat-edit">
		<b-card-header>
			전투원 강화 / 링크 / 장비
			<span class="d-inline-block">
				<small class="px-4 text-danger">
					남은 강화 포인트
					<strong>{{RestPoint}}</strong>
				</small>
				<b-button variant="secondary" size="sm" @click="Request('reset')">초기화</b-button>
			</span>
		</b-card-header>

		<b-card-body class="text-left">
			<b-row class="align-items-center mb-1">
				<b-col md="4" cols="12">
					<span class="stat-label">
						<stat-icon />
						<strong>레벨</strong>
					</span>
					<small class="text-secondary">Lv.</small>
					{{unit.Level}}
				</b-col>
				<b-col md="6" cols="8">
					<b-form-input type="range" min="1" max="100" v-model="unit.Level" />
				</b-col>
				<b-col md="2" cols="4">
					<b-select size="sm" :options="RarityList" v-model="unit.Rarity" />
				</b-col>
			</b-row>

			<b-row
				v-for="key in StatList"
				:key="`simulation-detail-stat-${key}`"
				class="align-items-center my-2"
			>
				<b-col md="4" cols="12">
					<span class="stat-label">
						<stat-icon :stat="key" />
						<strong>{{StatTable[key]}}</strong>
					</span>
					<small class="text-secondary">Lv.</small>
					{{unit.Stats[key]}}
				</b-col>
				<b-col md="6" cols="8">
					<b-progress class="progress-stat" :value="unit.Stats[key]" max="300" :variant="`stat-${key}`" />
				</b-col>
				<b-col md="2" cols="4">
					<b-btn-group class="stat-button">
						<b-button
							variant="secondary"
							size="sm"
							@mousedown.prevent="StatEvent(key, 0, +1)"
							@touchstart.prevent="StatEvent(key, 0, +1)"
							@mouseup.prevent="StatEvent(key, 2, +1)"
							@mouseleave.prevent="StatEvent(key, 2, +1)"
							@touchend.prevent="StatEvent(key, 2, +1)"
						>+</b-button>
						<b-button
							variant="secondary"
							size="sm"
							@mousedown.prevent="StatEvent(key, 0, -1)"
							@touchstart.prevent="StatEvent(key, 0, -1)"
							@mouseup.prevent="StatEvent(key, 2, -1)"
							@mouseleave.prevent="StatEvent(key, 2, -1)"
							@touchend.prevent="StatEvent(key, 2, -1)"
						>-</b-button>
					</b-btn-group>
				</b-col>
			</b-row>

			<b-row>
				<b-col cols="12" class="text-center mt-2">
					<link-icon :id="unit.id" :linked.sync="unit.Linked[0]" />
					<link-icon :id="unit.id" :linked.sync="unit.Linked[1]" />
					<link-icon :id="unit.id" :linked.sync="unit.Linked[2]" />
					<link-icon :id="unit.id" :linked.sync="unit.Linked[3]" />
					<link-icon :id="unit.id" :linked.sync="unit.Linked[4]" />
				</b-col>
			</b-row>

			<b-row>
				<b-col cols="12" class="text-center mt-2">
					<item-slot
						:type="unit.Equips[0].Type"
						:name="unit.Equips[0].Name"
						:rarity="unit.Equips[0].Rarity"
						:level="unit.Equips[0].Level"
						@click="EquipSelecting = 1"
					/>
					<item-slot
						:type="unit.Equips[1].Type"
						:name="unit.Equips[1].Name"
						:rarity="unit.Equips[1].Rarity"
						:level="unit.Equips[1].Level"
						@click="EquipSelecting = 2"
					/>
					<item-slot
						:type="unit.Equips[2].Type"
						:name="unit.Equips[2].Name"
						:rarity="unit.Equips[2].Rarity"
						:level="unit.Equips[2].Level"
						@click="EquipSelecting = 3"
					/>
					<item-slot
						:type="unit.Equips[3].Type"
						:name="unit.Equips[3].Name"
						:rarity="unit.Equips[3].Rarity"
						:level="unit.Equips[3].Level"
						@click="EquipSelecting = 4"
					/>
				</b-col>
			</b-row>
		</b-card-body>

		<equip-select-modal
			:display.sync="EquipSelectDisplay"
			:type="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Type : ''"
			:name="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Name + '_' + unit.Equips[EquipSelecting - 1].Rarity : ''"
			:level="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Level : 10"
			@select="EquipSelect"
		/>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { LRarity, UnitStatsPoint, Unit, UnitStats, Equip } from "@/libs/Types";
import { UnitSimulationInfo, StatTable, StatList } from "./Simulation";
import EquipSelectModal from "./EquipSelectModal.vue";

import { UnitStatsData } from "@/libs/DB";
import { StatValue } from "@/libs/UnitStat";

import StatIcon from "./StatIcon.vue";
import LinkIcon from "./LinkIcon.vue";
import ItemSlot from "./ItemSlot.vue";

@Component({
	components: {
		EquipSelectModal,

		StatIcon,
		LinkIcon,
		ItemSlot,
	},
})
export default class UnitStatEdit extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: UnitSimulationInfo;

	private EquipSelecting: number = 0;

	private get EquipSelectDisplay () {
		return this.EquipSelecting > 0;
	}

	private set EquipSelectDisplay (value: boolean) {
		if (!value)
			this.EquipSelecting = 0;
	}

	private get StatList () {
		return StatList;
	}

	private get StatTable () {
		return StatTable;
	}

	private get RarityList () {
		const detail = this.unit;

		if (detail.Unit.promotions) {
			return [
				{
					value: detail.Unit.rarity,
					text: detail.Unit.rarity,
				},
				...detail.Unit.promotions.map(x => ({ value: x, text: x })),
			];
		} else {
			return [{
				value: detail.Unit.rarity,
				text: detail.Unit.rarity,
			}];
		}
	}

	private get RestPoint () {
		const detail = this.unit;
		const stats = detail.Stats;

		let max = detail.Level * 3;
		Object.keys(stats).forEach(x => (max -= stats[x as keyof UnitStatsPoint] || 0));
		return max;
	}

	private EquipSelect (group: string, rarity: LRarity, level: number) {
		const index = this.EquipSelecting - 1;
		this.unit.Equips[index].Name = group;
		this.unit.Equips[index].Rarity = rarity;
		this.unit.Equips[index].Level = level;
		this.EquipSelecting = 0;
		return 0;
	}

	private StatEventWorking = false;
	private StatEventInterval = 300;
	private StatEventTimer = 0;
	private StatEvent (key: keyof UnitStatsPoint, state: 0 | 1 | 2, amount: number) {
		if (state === 1 && !this.StatEventWorking) return;

		this.StatEventTimer = 0;
		if (state === 0) {
			this.StatEventWorking = true;
			this.StatEvent(key, 1, amount);
		} else if (state === 1) {
			if (this.StatEventTimer > 0) return;

			if (
				(this.RestPoint - amount >= 0) &&
				(this.RestPoint - amount <= this.unit.Level * 3) &&
				(this.unit.Stats[key] || 0) + amount >= 0
			)
				this.unit.Stats[key] += amount;

			this.StatEventTimer = setTimeout(() => {
				this.StatEventTimer = 0;
				this.StatEvent(key, 1, amount);
			}, this.StatEventInterval);

			this.StatEventInterval -= 30;
			if (this.StatEventInterval < 20) this.StatEventInterval = 20;
		} else {
			if (this.StatEventTimer > 0) clearTimeout(this.StatEventTimer);
			this.StatEventTimer = 0;

			this.StatEventInterval = 300;
			this.StatEventWorking = false;
		}
	}
}
</script>

<style lang="scss" scoped>
.unit-stat-edit {
	.progress-stat > .progress-bar {
		transition: none;
	}
	span.stat-label {
		display: inline-block;
		width: 80px;
	}
	.stat-button > .btn {
		line-height: 1.2;
	}
}
</style>
