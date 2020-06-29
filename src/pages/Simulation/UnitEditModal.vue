<template>
	<b-modal v-model="displaySync" hide-footer size="xl" modal-class="unit-edit-modal">
		<template #modal-title>
			<template v-if="unit">
				{{unit.Unit.name}}
				<rarity-badge :rarity="unit.Rarity" border />
			</template>
		</template>

		<b-row v-if="unit">
			<b-col cols="6">
				<div class="mb-2">
					<div class="float-left mb-1">
						<b-select
							:disabled="RarityList.length <= 1"
							size="sm"
							:options="RarityList"
							v-model="unit.Rarity"
						/>
					</div>
					<div class="float-right mb-1">
						<b-button variant="secondary" size="sm" @click="ResetPoints">초기화</b-button>
					</div>
					<div class="text-center">
						<small class="px-4 d-inline-block text-danger">
							남은 강화 포인트
							<strong>{{RestPoint}}</strong>
						</small>
					</div>
					<div class="clearfix" />
				</div>

				<b-row class="align-items-center mb-1">
					<b-col lg="5" cols="12" class="text-left">
						<span class="stat-label">
							<stat-icon />
							<strong>레벨</strong>
						</span>
						<small class="text-secondary">Lv.</small>
						{{unit.Level}}
					</b-col>
					<b-col lg="5" cols="8">
						<b-form-input type="range" min="1" max="100" v-model="unit.Level" />
					</b-col>
					<b-col lg="2" cols="4" />
				</b-row>

				<b-row
					v-for="(stat, key) in StatList"
					:key="`simulation-edit-stat-${key}`"
					class="align-items-center my-2"
				>
					<b-col lg="5" cols="12" class="text-left">
						<span class="stat-label">
							<stat-icon :stat="key" />
							<strong>{{stat.name}}</strong>
						</span>
						<span class="d-inline-block">
							<small class="text-secondary">Lv.</small>
							<span class="stat-level">{{unit.Stats[key]}}</span>
						</span>
						<span class="stat-value text-left text-info">{{FinalValues[key]}}</span>
					</b-col>
					<b-col lg="5" cols="8">
						<b-progress
							class="progress-stat"
							:value="unit.Stats[key]"
							max="300"
							:variant="`stat-${key}`"
						/>
					</b-col>
					<b-col lg="2" cols="4">
						<b-btn-group class="stat-button">
							<b-button
								variant="secondary"
								size="sm"
								@mousedown="StatEventStart($event, key, +1)"
								@touchstart="StatEventStart($event, key, +1)"
								@mouseup="StatEventEnd($event, key)"
								@mouseleave="StatEventEnd($event, key)"
								@touchend="StatEventEnd($event, key)"
							>+</b-button>
							<b-button
								variant="secondary"
								size="sm"
								@mousedown="StatEventStart($event, key, -1)"
								@touchstart="StatEventStart($event, key, -1)"
								@mouseup="StatEventEnd($event, key)"
								@mouseleave="StatEventEnd($event, key)"
								@touchend="StatEventEnd($event, key)"
							>-</b-button>
						</b-btn-group>
					</b-col>
				</b-row>
			</b-col>
			<b-col cols="6" class="vert-separator">
				<b-row
					v-for="(skill, skillIndex) in unit.SkillList"
					:key="`simulation-edit-skill-${skillIndex}`"
					class="align-items-center my-2"
				>
					<b-col lg="auto" cols="4" class="text-center">
						<img class="skill-icon" :src="skill.icon" />
					</b-col>
					<b-col lg="4" cols="8" class="text-left skill-namelv">
						<div>{{skill.name}}</div>
						<div class="text-bold">Lv.{{unit.Skills[skillIndex]}}</div>
					</b-col>
					<b-col lg cols="12">
						<b-form-input type="range" min="1" max="10" v-model="unit.Skills[skillIndex]" />
					</b-col>
				</b-row>
			</b-col>
			<b-col cols="12">
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
							v-for="(equipSlot, equipIdx) in unit.Equips"
							:key="`unit-stat-edit-equipslot-${equipIdx}`"
							:type="equipSlot.Type"
							:name="equipSlot.Name"
							:rarity="equipSlot.Rarity"
							:level="equipSlot.Level"
							@click="EquipSelecting = equipIdx + 1"
						/>
					</b-col>
				</b-row>
			</b-col>
		</b-row>

		<equip-select-modal
			v-if="unit"
			:display.sync="EquipSelectDisplay"
			:type="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Type : ''"
			:name="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Name + '_' + unit.Equips[EquipSelecting - 1].Rarity : ''"
			:level="EquipSelectDisplay ? unit.Equips[EquipSelecting - 1].Level : 10"
			@select="EquipSelect"
		/>
	</b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync } from "vue-property-decorator";

import { LRarity, UnitStatsPoint, UnitStats, Equip } from "@/libs/Types";
import { StatList, Stat, StatType } from "./Simulation/Stats";
import { Unit } from "./Simulation/Unit";

import { UnitStatsData } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";

import RarityBadge from "@/components/RarityBadge.vue";
import EquipSelectModal from "./EquipSelectModal.vue";

import StatIcon from "./StatIcon.vue";
import LinkIcon from "./LinkIcon.vue";
import ItemSlot from "./ItemSlot.vue";

interface Dictionary<T> {
	[key: string]: T;
}

@Component({
	components: {
		EquipSelectModal,

		RarityBadge,
		StatIcon,
		LinkIcon,
		ItemSlot,
	},
})
export default class UnitEditModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		type: Object,
		default: null,
	})
	private unit!: Unit | null;

	private EquipSelecting: number = 0;

	private get EquipSelectDisplay () {
		return this.EquipSelecting > 0;
	}

	private set EquipSelectDisplay (value: boolean) {
		if (!value)
			this.EquipSelecting = 0;
	}

	private get StatList () {
		return {
			atk: StatList.atk,
			def: StatList.def,
			hp: StatList.hp,
			acc: StatList.acc,
			eva: StatList.eva,
			crit: StatList.crit,
		};
	}

	private get RarityList () {
		const detail = this.unit;
		if (!detail) return [];

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
		if (!detail) return 0;

		const stats = detail.Stats;

		let max = detail.Level * 3;
		Object.keys(stats).forEach(x => (max -= stats[x as keyof UnitStatsPoint] || 0));
		return max;
	}

	private get FinalValues () {
		if (!this.unit) return [];

		const output: Dictionary<string> = {};

		for (const k in StatList) {
			const key = k as StatType;
			output[key] = this.NumValue(
				this.FinalValue(this.unit.StatData[key], key),
				StatList[key].rounded,
			) + (StatList[key].postfix || "");
		}
		return output;
	}

	private FinalValue (stat: Stat, key: StatType) {
		let value = stat.base;
		value += stat.pointed + stat.equiped;
		value += stat.linked;
		return value;
	}

	private NumValue (value: number, rounded?: boolean) {
		const normalized = ((v) => {
			const fixed = v.toFixed(8);
			return parseFloat(
				fixed.substr(0, fixed.length - 6),
			); // 2자리만 남기고
		})(value);

		if (rounded)
			return FormatNumber(Math.round(normalized));
		else {
			const integer = FormatNumber(Math.floor(normalized));
			const float = ((x: number) => {
				const y = x.toString();
				if (!y.includes(".")) return "";
				return y.substr(y.indexOf("."));
			})(normalized);
			return integer + float;
		}
	}

	private ResetPoints () {
		if (!this.unit) return;

		for (const key in this.unit.Stats)
			this.unit.Stats[key as keyof UnitStatsPoint] = 0;
	}

	private EquipSelect (group: string, rarity: LRarity, level: number) {
		if (!this.unit) return;

		const index = this.EquipSelecting - 1;
		this.unit.Equips[index].Name = group;
		this.unit.Equips[index].Rarity = rarity;
		this.unit.Equips[index].Level = level;
		this.EquipSelecting = 0;
	}

	private StatEventInterval = 300;
	private StatEventTimer = -1;

	private StatEventStart (e: Event, key: keyof UnitStatsPoint, amount: number) {
		e.stopPropagation();
		e.preventDefault();

		this.StatEventInterval = 300;

		this.StatEventProc(key, amount);
	}

	private StatEventEnd (e: Event, key: keyof UnitStatsPoint) {
		e.stopPropagation();
		e.preventDefault();

		this.StatEventInterval = 300;

		clearTimeout(this.StatEventTimer);
		this.StatEventTimer = -1;
	}

	private StatEventProc (key: keyof UnitStatsPoint, amount: number) {
		if (!this.unit) return;

		if (
			(this.RestPoint - amount >= 0) &&
			(this.RestPoint - amount <= this.unit.Level * 3) &&
			(this.unit.Stats[key] || 0) + amount >= 0
		)
			this.unit.Stats[key] += amount;

		if (this.RestPoint > 0) {
			this.StatEventInterval -= 30;
			if (this.StatEventInterval < 20) this.StatEventInterval = 20;

			if (this.StatEventTimer) clearTimeout(this.StatEventTimer);
			this.StatEventTimer = setTimeout(() => this.StatEventProc(key, amount), this.StatEventInterval);
		}
	}
}
</script>

<style lang="scss" scoped>
.unit-edit-modal {
	.progress-stat::v-deep {
		height: 0.5rem;
		& > .progress-bar {
			transition: none !important;
		}
	}
	span.stat-label {
		display: inline-block;
		width: 80px;
		text-align: left;
	}
	.stat-button > .btn {
		line-height: 1.2;
	}

	.skill-icon {
		width: 40px;
		height: 40px;
	}
	.skill-namelv {
		font-size: 14px;
	}
	.stat-level {
		display: inline-block;
		width: 48px;
	}
	.text-bold {
		font-weight: bold;
	}
}
</style>
