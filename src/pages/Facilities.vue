<template>
	<div class="facilities">
		<b-row cols="5" cols-md="4" cols-sm="3">
			<b-col v-for="[fac, key] in Facilities" :key="`facility-${key}`">
				<facility-card class="mb-4" :id="key" :facility="fac" @click="GoTo(`/facilities/${key}`)" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { LocaleGet } from "@/libs/Locale";

import StoreModule, { UnitDisplayType } from "@/libs/Store";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { Facility, FacilityEntity } from "@/libs/Types/Facility";
import FacilityDB from "@/libs/DB/Facility";

import FacilityCard from "./Facilities/FacilityCard.vue";
import { UpdateTitle } from "@/libs/Functions";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		FacilityCard,
	},
})
export default class Facilities extends Vue {
	// Vuex -----
	// Vuex -----

	private get Facilities () {
		return Object.keys(FacilityDB)
			.map(key => [FacilityDB[key], key] as [FacilityEntity, string])
			.sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0));
	}

	public FacilityImage (id: string): string {
		const ext = ImageExtension();
		return `${AssetsRoot}/${ext}/facility/${id}_5.${ext}`;
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private checkParams () {
		const params = this.$route.params;

		if ("key" in params)
			this.$router.replace("/facilities/" + params.key);
	}

	private mounted () {
		this.checkParams();

		SetMeta(["description", "twitter:description"], "기지 설비의 목록을 표시합니다.");
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle(LocaleGet("MENU_FACILITIES"));
	}
}
</script>

<style lang="scss">
</style>
