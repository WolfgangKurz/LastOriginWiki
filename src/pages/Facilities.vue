<template>
	<div class="chars">
		<div class="text-center mb-3">
			<b-alert variant="warning" show>
				시설 정보가 많이 부족합니다.
				오류가 있거나 존재하지 않는 데이터의 제보를 받습니다.<br/>
				레이아웃 개선점도 환영합니다.
			</b-alert>
		</div>

		<facility-card
			v-for="(fac, key) in Facilities"
			:key="`facility-${key}`"
			class="mb-4"
			:id="key"
			:facility="fac"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";

import StoreModule, { UnitDisplayType } from "@/libs/Store";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { Facilities as FacilitiesDB } from "@/libs/DB";

import FacilityCard from "./Facilities/FacilityCard.vue";
import { UpdateTitle } from "@/libs/Functions";

@Component({
	components: {
		FacilityCard,
	},
})
export default class Facilities extends Vue {
	// Vuex -----
	// Vuex -----

	private get Facilities () {
		return FacilitiesDB;
	}

	public FacilityImage (id: string): string {
		const ext = ImageExtension();
		return `${AssetsRoot}/${ext}/facility/${id}_5.${ext}`;
	}

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private checkParams () {
		const params = this.$route.params;
	}

	private mounted () {
		this.checkParams();
		UpdateTitle("시설정보");
	}
}
</script>

<style lang="scss">
</style>
