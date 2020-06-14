<template>
	<i class="formation" :data-unit="id || null" v-on="$listeners" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

@Component({
	components: {
	},
})
export default class UnitSelectModal extends Vue {
	@Prop({
		default: null,
	})
	private id!: number | null;
}
</script>

<style lang="scss">
i.formation {
	display: block;

	&:not([data-unit]) {
		background-image: url($assetsRoot+"/simulation/UI_formation_grid_addCha.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}

	cursor: pointer;
}
</style>
