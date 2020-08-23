<template>
	<div class="drop-unit p-2">
		<b-card class="text-left" bg-variant="dark" text-variant="light">
			<unit-face class="float-left"  :id="id" size="48" type="mini"/>
			<div>
				<rarity-badge :rarity="unit.rarity" />
				<span class="unit-info">
					<i class="unit-type" :data-type="unit.type" />
					<i class="unit-role" :data-role="unit.role" />
				</span>
			</div>
			<div class="float-left">{{unit.name}}</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import UnitFace from "@/components/UnitFace.vue";
import RarityBadge from "@/components/RarityBadge.vue";

import { UnitData } from "@/libs/DB";

@Component({
	components: {
		RarityBadge,
		UnitFace,
	},
})
export default class DropUnit extends Vue {
	@Prop({
		type: Number,
		required: true,
	})
	private id!: number;

	private get unit () {
		return UnitData[this.id];
	}
}
</script>

<style lang="scss">
.drop-unit {
	user-select: none;
	cursor: pointer;

	span.unit-info {
		opacity: 0.72;

		i {
			$basis: 18px;
			display: inline-block;
			width: $basis;
			height: $basis;
			margin-left: 4px;
			background-size: ($basis * 3) ($basis * 2);
			background-position: 0 0;
			background-repeat: no-repeat;
			vertical-align: bottom;

			&[data-type] {
				background-image: url($assetsRoot + "/unit-type.png");
				&[data-type="light"] {
					background-position-x: 0px;
				}
				&[data-type="air"] {
					background-position-x: -$basis;
				}
				&[data-type="heavy"] {
					background-position-x: -($basis * 2);
				}
			}
			&[data-role] {
				background-image: url($assetsRoot + "/unit-role.png");
				&[data-role="attacker"] {
					background-position: 0px 0;
				}
				&[data-role="defender"] {
					background-position: -$basis 0;
				}
				&[data-role="supporter"] {
					background-position: -($basis * 2) 0;
				}
			}
		}
	}
}
</style>
