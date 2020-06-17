<template>
	<div class="formation" :data-unit="id" @click="OnClick">
		<div v-if="id" @click="Detail()">
			<img :src="UnitFace" />

			<rarity-badge :rarity="info.Rarity" class="unit-rarity" />
			<b-badge variant="danger" class="unit-remove p-1" @click="Remove($event)">&times;</b-badge>
			<b-badge variant="warning" class="unit-level">
				<small>LV.</small>
				<span>{{info.Level}}</span>
			</b-badge>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { UnitSimulationInfo } from "./Simulation";

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		RarityBadge,
	},
})
export default class UnitSelectModal extends Vue {
	@Prop({
		default: 0,
	})
	private id!: number;

	@Prop({
		type: Object,
		default: null,
	})
	private info!: UnitSimulationInfo;

	private get UnitFace () {
		return UnitFace.GetURL(this.id === null, this.id);
	}

	private Detail () {
		this.$emit("detail");
	}

	private Remove ($event: Event) {
		this.$emit("remove", $event);
	}

	private OnClick () {
		if (this.id === 0)
			this.$emit("add");
	}
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";

div.formation {
	position: relative;
	display: block;

	&[data-unit="0"] {
		background-image: url($assetsRoot+"/simulation/GridEmpty.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}
	> div {
		padding: 4px;
		height: 100%;
		background-image: url($assetsRoot+"/simulation/GridUnit.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;

		> img {
			max-width: 100%;
			mask: url($assetsRoot+"/simulation/GridUnit.png");
			mask-repeat: no-repeat;
			mask-position: center;
			mask-size: contain;
		}

		> .badge {
			position: absolute;
			box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);

			&.unit-rarity {
				left: 0;
				top: 0;
			}
			&.unit-level {
				left: 0;
				bottom: 0;
			}
			&.unit-remove {
				right: 0;
				top: 0;
			}

			> small {
				font-size: 75%;
				font-weight: bold;
			}
		}
	}

	cursor: pointer;
}
</style>
