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

@Component({
	components: {
		RarityBadge,

		"api-unit-badge": APIUnitBadge,
	},
})
export default class API extends Vue {
	private mounted () {
		UpdateTitle("API");
	}
}
</script>

<style lang="scss">
#app > .container > .api {
}
</style>
