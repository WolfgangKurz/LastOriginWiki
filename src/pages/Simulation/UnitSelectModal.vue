<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="unit-select-modal">
		<template #modal-title>전투원 선택</template>

		<!-- 필터 -->
		<div class="mb-3">
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-danger"
					:pressed="Filters.rarity.ss"
					@click="Filters.rarity.ss = !Filters.rarity.ss"
				>SS</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.rarity.s"
					@click="Filters.rarity.s = !Filters.rarity.s"
				>S</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.rarity.a"
					@click="Filters.rarity.a = !Filters.rarity.a"
				>A</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.rarity.b"
					@click="Filters.rarity.b = !Filters.rarity.b"
				>B</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-success"
					:pressed="Filters.type.light"
					@click="Filters.type.light = !Filters.type.light"
				>경장형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.type.air"
					@click="Filters.type.air = !Filters.type.air"
				>기동형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.type.heavy"
					@click="Filters.type.heavy = !Filters.type.heavy"
				>중장형</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-primary"
					:pressed="Filters.role.attacker"
					@click="Filters.role.attacker = !Filters.role.attacker"
				>공격기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.role.defender"
					@click="Filters.role.defender = !Filters.role.defender"
				>보호기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.role.supporter"
					@click="Filters.role.supporter = !Filters.role.supporter"
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
						<template v-if="SelectedUnit.id === 0">전투원을 선택해주세요.</template>
						<template v-else>
							<unit-face :id="SelectedUnit.id" size="40" class="mr-2" />
							{{SelectedUnit.name}}
						</template>
					</template>
					<b-dropdown-item
						v-for="unit in UnitList"
						:key="`simulation-unit-select-modal-${unit.id}`"
						@click="SelectUnit(unit)"
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

import { UnitSimulationInfo } from "./Simulation";
import { UnitData } from "@/libs/DB";
import { Unit } from "@/libs/Types";

interface UnitDict {
	[key: number]: Unit;
}

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
	private list!: UnitSimulationInfo[];

	private readonly empty = Unit.Empty;
	private SelectedUnit: Unit = this.empty;

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
			this.SelectedUnit = this.empty;
	}

	private get UnitList () {
		const list = Object.values(UnitData)
			.filter(x => !this.list.some(y => y.id === x.id))
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

		if (!list.includes(this.SelectedUnit))
			this.SelectedUnit = this.empty;

		return list;
	}

	private SelectUnit (unit: Unit) {
		this.SelectedUnit = unit;
	}

	private Select (unit: Unit) {
		this.$emit("select", unit.id, unit);
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
