<template>
	<div class="api">
		<api-unit-badge />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RarityBadge from "@/components/RarityBadge.vue";
import { UpdateTitle } from "@/libs/Functions";

import APIUnitBadge from "@/pages/API/APIUnitBadge.vue";
import { SetMeta } from "@/libs/Meta";

@Component({
	components: {
		RarityBadge,

		"api-unit-badge": APIUnitBadge,
	},
})
export default class API extends Vue {
	private mounted () {
		SetMeta(["description", "twitter:description"], "멸망 전의 전술 교본 외부에서 사용할 수 있는 API 목록입니다.");
		SetMeta("keywords", ",API", true);
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle("API");
	}
}
</script>

<style lang="scss">
</style>
