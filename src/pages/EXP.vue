<template>
	<div class="exp">
		<!-- <exp-calculator /> -->
		리뉴얼 준비중
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { ExpData } from "@/libs/DB";

// import ExpCalculator from "@/pages/EXP/ExpCalculator.vue";

import { UpdateTitle } from "@/libs/Functions";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		// ExpCalculator,
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
		SetMeta(["description", "twitter:description"], "목표 경험치까지의 전투원의 필요 전투 횟수를 확인할 수 있는 경험치 계산기입니다.");
		SetMeta("keywords", ",경험치 계산기,경험치계산기", true);
		SetMeta(["twitter:image", "og:image"], null);

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
