<template>
	<div class="formation" :data-unit="(unit && unit.Id) || 0" @click="OnClick">
		<div v-if="unit" :data-rarity="unit.Rarity" @click="Focus()">
			<img :src="UnitFace" />

			<rarity-badge :rarity="unit.Rarity" class="unit-rarity" />
			<b-badge variant="danger" class="unit-remove p-1" @click="Remove($event)">&times;</b-badge>
			<b-badge variant="warning" class="unit-level">
				<small>LV.</small>
				<span>{{unit.Level}}</span>
			</b-badge>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { Unit } from "./Simulation/Unit";

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		RarityBadge,
	},
})
export default class UnitSelectModal extends Vue {
	@Prop({
		type: Object,
		default: null,
	})
	private unit!: Unit;

	private get UnitFace () {
		return UnitFace.GetURL(!this.unit, this.unit.Id);
	}

	private Focus () {
		this.$emit("focus");
	}

	private Remove ($event: Event) {
		this.$emit("remove", $event);
	}

	private OnClick () {
		if (!this.unit)
			this.$emit("add");
	}
}
</script>

<style lang="scss">
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
		padding: 5.5%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;

		$rarities: SS, S, A, B;
		@each $rarity in $rarities {
			&[data-rarity="#{$rarity}"] {
				background-image: url($assetsRoot+"/simulation/GridUnit_#{$rarity}.png");
			}
		}

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
