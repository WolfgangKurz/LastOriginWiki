<template>
	<b-modal v-model="displaySync" hide-footer size="lg" modal-class="unit-select-modal">
		<template #modal-title>전투원 선택</template>

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

		<b-row cols="2" cols-xl="5" cols-lg="4" cols-md="3">
			<b-col v-for="unit in UnitList" :key="`unit-select-unit-${unit.id}`" class="mt-3">
				<unit-card :unit="unit" @click="Select(unit)" />
			</b-col>
		</b-row>
	</b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import UnitCard from "@/pages/Units/UnitCard.vue";

import { UnitData } from "@/DB";
import { Unit } from "@/Types";

import { CharFilterFlag } from "@/State";

interface UnitDict {
	[key: number]: Unit;
}

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitSelectModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

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

	private get UnitList (): Unit[] {
		return Object.values(UnitData)
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
			})
			.map(x => {
				return {
					...x,
					id000: ("00" + x.id).substr(-3),
				};
			});
	}

	private Select (unit: Unit) {
		this.$emit("select", unit.id, unit);
	}
}
</script>

<style lang="scss">
.rarity-B {
	background-color: #e2f0d9;
}
.rarity-A {
	background-color: #deebf7;
}
.rarity-S {
	background-color: #fff2cc;
}
.rarity-SS {
	background-color: #fce391;
}

.unit-card.invalid {
	opacity: 0.33;
	a.stretched-link {
		cursor: not-allowed;
	}
}
</style>
