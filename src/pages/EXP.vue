<template>
	<div class="exp">
		<exp-calculator />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { ExpData } from "@/libs/DB";

import ExpCalculator from "@/pages/EXP/ExpCalculator.vue";

import { UpdateTitle } from "@/libs/Functions";

@Component({
	components: {
		ExpCalculator,
	},
})
export default class EXP extends Vue {
	private get MapData () {
		return ExpData.map;
	}

	private get LevelTable () {
		return ExpData.table;
	}

	private mounted () {
		UpdateTitle("EXP");
	}
}
</script>

<style lang="scss">
#app > .container > .exp {
	[data-invalid="1"] {
		opacity: 0.5;
	}
}
</style>
