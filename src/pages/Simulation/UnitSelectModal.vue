<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="unit-select-modal">
		<template #modal-title>전투원 선택</template>

		<!-- 필터 -->
		<div class="mb-3">
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.SS"
					@click="Filters.Rarity.SS = !Filters.Rarity.SS"
				>SS</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.S"
					@click="Filters.Rarity.S = !Filters.Rarity.S"
				>S</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.A"
					@click="Filters.Rarity.A = !Filters.Rarity.A"
				>A</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.B"
					@click="Filters.Rarity.B = !Filters.Rarity.B"
				>B</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Light"
					@click="Filters.Type.Light = !Filters.Type.Light"
				>경장형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Air"
					@click="Filters.Type.Air = !Filters.Type.Air"
				>기동형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Heavy"
					@click="Filters.Type.Heavy = !Filters.Type.Heavy"
				>중장형</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Attacker"
					@click="Filters.Role.Attacker = !Filters.Role.Attacker"
				>공격기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Defender"
					@click="Filters.Role.Defender = !Filters.Role.Defender"
				>보호기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Supporter"
					@click="Filters.Role.Supporter = !Filters.Role.Supporter"
				>지원기</b-button>
			</b-btn-group>
			<!--
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-warning"
					:pressed="Filters.body.bioroid"
					@click="Filters.body.bioroid = !Filters.body.bioroid"
				>바이오로이드</b-button>
				<b-button
					variant="outline-warning"
					:pressed="Filters.body.ags"
					@click="Filters.body.ags = !Filters.body.ags"
				>AGS</b-button>
			</b-btn-group>
			-->
		</div>

		<b-row class="justify-content-center">
			<b-col cols="8" class="mb-4">
				<b-dropdown variant="outline-dark">
					<template #button-content>
						<template v-if="SelectedUnit === null">전투원을 선택해주세요.</template>
						<template v-else>
							<unit-face :id="SelectedUnit.Id" size="40" class="mr-2" />
							{{SelectedUnit.Unit.name}}
						</template>
					</template>
					<b-dropdown-item
						v-for="unit in UnitList"
						:key="`simulation-unit-select-modal-${unit.id}`"
						@click="SelectUnit(unit.id)"
					>
						<unit-face :id="unit.id" size="40" class="mr-2" />
						<span class="d-inline-block mr-2">{{unit.name}}</span>
					</b-dropdown-item>
				</b-dropdown>
				<!--  :options="UnitList" -->
			</b-col>
			<b-col cols="12">
				<b-button variant="info" @click="Select(SelectedUnit)">전투원 선택</b-button>
			</b-col>
		</b-row>
	</b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync, Ref } from "vue-property-decorator";

import { UnitTableFilters } from "@/libs/Store";

import UnitFace from "@/components/UnitFace.vue";

import { UnitData } from "@/libs/DB";
import { Unit } from "./Simulation/Unit";

@Component({
	components: {
		UnitFace,
	},
})
export default class UnitSelectModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		type: Array,
		default: () => [],
	})
	private list!: Unit[];

	private SelectedUnit: Unit | null = null;

	private Filters: UnitTableFilters = {
		Rarity: {
			SS: true,
			S: true,
			A: true,
			B: true,
		},
		Type: {
			Light: true,
			Air: true,
			Heavy: true,
		},
		Role: {
			Attacker: true,
			Defender: true,
			Supporter: true,
		},
		Body: {
			Bioroid: true,
			AGS: true,
		},
	};

	@Watch("display", { immediate: true })
	private DisplayWatch (value: boolean) {
		if (!value)
			this.SelectedUnit = null;
	}

	private get UnitList () {
		const list = Object.values(UnitData)
			.filter(x => !this.list.some(y => y && y.Id === x.id))
			.filter(x => {
				if (!this.Filters.Rarity.SS && x.rarity === "SS") return false;
				if (!this.Filters.Rarity.S && x.rarity === "S") return false;
				if (!this.Filters.Rarity.A && x.rarity === "A") return false;
				if (!this.Filters.Rarity.B && x.rarity === "B") return false;

				if (!this.Filters.Type.Light && x.type === "light") return false;
				if (!this.Filters.Type.Air && x.type === "air") return false;
				if (!this.Filters.Type.Heavy && x.type === "heavy") return false;

				if (!this.Filters.Role.Attacker && x.role === "attacker") return false;
				if (!this.Filters.Role.Defender && x.role === "defender") return false;
				if (!this.Filters.Role.Supporter && x.role === "supporter") return false;
				/*
				if (!this.Filters.body.bioroid && x.body === "bio") return false;
				if (!this.Filters.body.ags && x.body === "ags") return false;
				*/
				return true;
			});

		const unit = this.SelectedUnit;
		if (unit && !list.some(x => x.id === unit.Id))
			this.SelectedUnit = null;

		return list;
	}

	private SelectUnit (unitId: number) {
		this.SelectedUnit = new Unit().SetUnit(unitId);
	}

	private Select (unit: Unit | null) {
		if (unit)
			this.$emit("select", unit.Id, unit);
	}
}
</script>

<style lang="scss">
.unit-select-modal {
	.dropdown-menu {
		max-height: 400px;
		overflow-y: auto;
	}
}
</style>
