<template>
	<div class="exchange-card p-2 text-dark">
		<b-card body-class="p-2">
			<b-row v-if="this.Target" no-gutters>
				<b-col cols="auto" class="mr-2">
					<b-row no-gutters class="item-icon-row">
						<b-col class="pt-2 px-2">
							<unit-face v-if="this.Unit" :uid="this.Unit.uid" size="72" />
							<equip-icon v-else-if="this.Equip" :image="this.Equip.icon" size="72" />
							<equip-icon v-else-if="this.Item" :image="this.Item.icon" size="72" />
						</b-col>
					</b-row>
					<b-row no-gutters class="item-left-row">
						<b-col cols="auto" class="px-2">재고</b-col>
						<b-col class="text-center">{{ reward.count === 0 ? "??" : reward.count }}</b-col>
					</b-row>
				</b-col>
				<b-col cols="">
					<div class="text-center py-2">{{ Target.name }}</div>

					<b-row v-for="(req, i) in Requirements" :key="`exchange-item-${i}`" no-gutters class="requirements mt-1">
						<b-col cols="auto">
							<equip-icon :image="req.item.icon" size="26" />
						</b-col>
						<b-col cols="" class="text-center">
							<strong>{{ req.count }}</strong>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-card>
		<div v-if="reward.note" class="border-left border-bottom border-right bg-info text-light pb-1">{{ reward.note }}</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import UnitFace from "@/components/UnitFace.vue";
import EquipIcon from "@/components/EquipIcon.vue";

import { ExchangeInfo } from "@/libs/Types/Exchange";
import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import { FilterableEquip } from "@/libs/Types/Equip.Filterable";
import { Consumable } from "@/libs/Types/Consumable";

import FilterableUnitDB from "@/libs/DB/Unit.Filterable";
import FilterableEquipDB from "@/libs/DB/Equip.Filterable";
import ConsumableDB from "@/libs/DB/Consumable";

import { FormatNumber } from "@/libs/Functions";
import { _e } from "@/libs/VNode";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";

@Component({
	components: {
		UnitFace,
		EquipIcon,
	},
})
export default class DropItem extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private reward!: ExchangeInfo;

	private display: boolean = false;

	private get Unit () {
		const id = this.reward.reward;
		if (id === "Core_Normal") return FilterableUnit.Core_Normal;
		if (id === "Core_Special") return FilterableUnit.Core_Special;

		if (id === "Module_TA_B") return FilterableUnit.Module_TA_B;
		if (id === "Module_TA_A") return FilterableUnit.Module_TA_A;
		if (id === "Module_TA_S") return FilterableUnit.Module_TA_S;
		if (id === "Module_TA_SS") return FilterableUnit.Module_TA_SS;
		if (id === "Module_TT_B") return FilterableUnit.Module_TT_B;
		if (id === "Module_TT_A") return FilterableUnit.Module_TT_A;
		if (id === "Module_TT_S") return FilterableUnit.Module_TT_S;
		if (id === "Module_TT_SS") return FilterableUnit.Module_TT_SS;
		if (id === "Module_TC_B") return FilterableUnit.Module_TC_B;
		if (id === "Module_TC_A") return FilterableUnit.Module_TC_A;
		if (id === "Module_TC_S") return FilterableUnit.Module_TC_S;
		if (id === "Module_TC_SS") return FilterableUnit.Module_TC_SS;

		if (id === "Module_MA_B") return FilterableUnit.Module_MA_B;
		if (id === "Module_MA_A") return FilterableUnit.Module_MA_A;
		if (id === "Module_MA_S") return FilterableUnit.Module_MA_S;
		if (id === "Module_MA_SS") return FilterableUnit.Module_MA_SS;
		if (id === "Module_MT_B") return FilterableUnit.Module_MT_B;
		if (id === "Module_MT_A") return FilterableUnit.Module_MT_A;
		if (id === "Module_MT_S") return FilterableUnit.Module_MT_S;
		if (id === "Module_MT_SS") return FilterableUnit.Module_MT_SS;
		if (id === "Module_MC_B") return FilterableUnit.Module_MC_B;
		if (id === "Module_MC_A") return FilterableUnit.Module_MC_A;
		if (id === "Module_MC_S") return FilterableUnit.Module_MC_S;
		if (id === "Module_MC_SS") return FilterableUnit.Module_MC_SS;

		if (id === "Module_AA_B") return FilterableUnit.Module_AA_B;
		if (id === "Module_AA_A") return FilterableUnit.Module_AA_A;
		if (id === "Module_AA_S") return FilterableUnit.Module_AA_S;
		if (id === "Module_AA_SS") return FilterableUnit.Module_AA_SS;
		if (id === "Module_AT_B") return FilterableUnit.Module_AT_B;
		if (id === "Module_AT_A") return FilterableUnit.Module_AT_A;
		if (id === "Module_AT_S") return FilterableUnit.Module_AT_S;
		if (id === "Module_AT_SS") return FilterableUnit.Module_AT_SS;
		if (id === "Module_AC_B") return FilterableUnit.Module_AC_B;
		if (id === "Module_AC_A") return FilterableUnit.Module_AC_A;
		if (id === "Module_AC_S") return FilterableUnit.Module_AC_S;
		if (id === "Module_AC_SS") return FilterableUnit.Module_AC_SS;

		return FilterableUnitDB.find(x => x.uid === id);
	}

	private get Equip () {
		return FilterableEquipDB.find(x => x.fullKey === this.reward.reward);
	}

	private get Item () {
		return ConsumableDB.find(x => x.key === this.reward.reward);
	}

	private get Target () {
		return this.Unit || this.Equip || this.Item || null;
	}

	private get Requirements () {
		return this.reward.requires
			.map(x => {
				const p = x.split(":");
				return {
					item: ConsumableDB.find(y => y.key === p[0]),
					count: parseInt(p[1], 10) || 0,
				};
			})
			.filter(x => x.item) as Array<{
				item: Consumable;
				count: number;
			}>;
	}
}
</script>

<style lang="scss">
.exchange-card {
	word-break: keep-all;
	user-select: none;

	> .card {
		background: linear-gradient(180deg, rgba(1, 7, 19, 1) 0%, rgba(27, 45, 67, 1) 100%);
		color: #fff;
	}

	.item-icon-row {
		border: 1px solid rgb(47, 66, 81);
		border-bottom: 0;
		background: linear-gradient(180deg, rgba(1, 56, 81, 1) 0%, rgba(35, 75, 94, 1) 100%);
	}
	.item-left-row {
		border: 1px solid rgb(47, 66, 81);
		font-weight: bold;
		font-size: 90%;

		> .col-auto {
			background-color: rgb(52, 171, 231);
			text-shadow: 0 0 1px #000;
		}
		> .col {
			background-color: rgb(18, 41, 52);
			color: rgb(112, 193, 242);
		}
	}

	.requirements {
		border-radius: 0.3333em;
		background-color: rgba(0, 0, 0, 0.3);
	}
}
.exchange-modal {
	.equip-icon {
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	.modal-footer {
		justify-content: flex-start;
	}
	.desc-text {
		word-break: keep-all;
		white-space: pre-line;
	}
}
</style>
