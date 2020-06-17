<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="unit-select-modal">
		<template #modal-title>전투원 선택</template>

		<!-- 필터 -->
		<div class="mb-3">
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.ss"
					@click="filterFlags.rarity.ss = !filterFlags.rarity.ss"
				>SS</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.s"
					@click="filterFlags.rarity.s = !filterFlags.rarity.s"
				>S</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.a"
					@click="filterFlags.rarity.a = !filterFlags.rarity.a"
				>A</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.b"
					@click="filterFlags.rarity.b = !filterFlags.rarity.b"
				>B</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.light"
					@click="filterFlags.type.light = !filterFlags.type.light"
				>경장형</b-button>
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.air"
					@click="filterFlags.type.air = !filterFlags.type.air"
				>기동형</b-button>
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.heavy"
					@click="filterFlags.type.heavy = !filterFlags.type.heavy"
				>중장형</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.attacker"
					@click="filterFlags.role.attacker = !filterFlags.role.attacker"
				>공격기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.defender"
					@click="filterFlags.role.defender = !filterFlags.role.defender"
				>보호기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.supporter"
					@click="filterFlags.role.supporter = !filterFlags.role.supporter"
				>지원기</b-button>
			</b-btn-group>
			<!--
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-warning"
					:pressed="filterFlags.body.bioroid"
					@click="filterFlags.body.bioroid = !filterFlags.body.bioroid"
				>바이오로이드</b-button>
				<b-button
					variant="outline-warning"
					:pressed="filterFlags.body.ags"
					@click="filterFlags.body.ags = !filterFlags.body.ags"
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

import UnitFace from "@/components/UnitFace.vue";

import { UnitSimulationInfo } from "./Simulation";
import { UnitData } from "@/libs/DB";
import { Unit } from "@/libs/Types";

import { CharFilterFlag } from "@/libs/State";

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

	private filterFlags: CharFilterFlag = {
		rarity: {
			ss: true,
			s: true,
			a: true,
			b: true,
		},
		type: {
			light: true,
			air: true,
			heavy: true,
		},
		role: {
			attacker: true,
			defender: true,
			supporter: true,
		},
		body: {
			bioroid: true,
			ags: true,
		},
	};

	private get UnitList () {
		const list = Object.values(UnitData)
			.filter(x => !this.list.some(y => y.id === x.id))
			.filter(x => {
				if (!this.filterFlags.rarity.ss && x.rarity === "SS") return false;
				if (!this.filterFlags.rarity.s && x.rarity === "S") return false;
				if (!this.filterFlags.rarity.a && x.rarity === "A") return false;
				if (!this.filterFlags.rarity.b && x.rarity === "B") return false;

				if (!this.filterFlags.type.light && x.type === "light") return false;
				if (!this.filterFlags.type.air && x.type === "air") return false;
				if (!this.filterFlags.type.heavy && x.type === "heavy") return false;

				if (!this.filterFlags.role.attacker && x.role === "attacker") return false;
				if (!this.filterFlags.role.defender && x.role === "defender") return false;
				if (!this.filterFlags.role.supporter && x.role === "supporter") return false;
				/*
				if (!this.filterFlags.body.bioroid && x.body === "bio") return false;
				if (!this.filterFlags.body.ags && x.body === "ags") return false;
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
