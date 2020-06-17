<template>
	<b-card
		v-if="!horizontal"
		class="unit-card position-relative my-1"
		bg-variant="dark"
		text-variant="white"
		:img-src="UnitFaceUrl"
	>
		<b-card-title>
			<div class="unit-info">
				<rarity-badge :rarity="unit.rarity" />
				<span>
					<span class="d-inline-block">No. {{IdDisplay}}</span>
					<span class="d-inline-block">
						<i class="unit-type" :data-type="unit.type" />
						<i class="unit-role" :data-role="unit.role" />
					</span>
				</span>
			</div>
			{{unit.name}}
		</b-card-title>

		<div class="unit-badges">
			<b-badge v-if="unit.body === 'ags'" variant="info" class="ml-1">AGS</b-badge>
			<template v-if="unit.promotions">
				<rarity-badge
					v-for="pro in unit.promotions"
					:key="`unit-table-unit-${unit.id}-pro-${pro}`"
					class="ml-1"
					:rarity="pro"
				>{{pro}} 승급</rarity-badge>
			</template>
		</div>

		<a href="#" class="stretched-link equip-stretched" @click.prevent="OnClick()" />
	</b-card>
	<div v-else class="unit-card text-left clearfix" @click.prevent="OnClick()">
		<unit-face :id="unit.id" class="unit-face float-left" />
		<div class="unit-name">{{unit.name}}</div>
		<div class="unit-flag">
			<b-badge v-if="unit.body === 'ags'" variant="info" class="mr-1">AGS</b-badge>
			<b-badge v-if="promoted" variant="danger" class="mr-1">승급 후</b-badge>

			<div v-if="!promoted && unit.promotions" class="float-right">
				<rarity-badge
					v-for="pro in unit.promotions"
					:key="`unit-table-unit-${unit.id}-pro-${pro}`"
					:rarity="pro"
					class="ml-1"
				>{{pro}} 승급</rarity-badge>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import UnitFace from "@/components/UnitFace.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import { Prop, Emit } from "vue-property-decorator";
import { Unit } from "@/libs/Types";

@Component({
	components: {
		UnitFace,
		RarityBadge,
	},
})
export default class UnitCard extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	@Prop({
		type: Boolean,
		default: false,
	})
	private horizontal!: boolean;

	@Prop({
		type: Boolean,
		default: false,
	})
	private promoted!: boolean;

	private get IdDisplay () {
		return ("00" + this.unit.id).substr(-3);
	}

	private get UnitFaceUrl () {
		return UnitFace.GetURL(!this.unit.group, this.unit.id);
	}

	@Emit("click")
	private OnClick () {
		return undefined;
	}
}
</script>

<style lang="scss">
.unit-card {
	cursor: pointer;

	&.card {
		border-radius: 9px;

		.card-img-top {
			position: relative;

			.unit-face {
				width: 100%;
			}
			.card-img-badge {
				position: absolute;
				left: 4px;
				bottom: 4px;

				> .unit-badge {
					box-shadow: 0 0 4px #000;
				}
			}
		}
		.card-body {
			padding: 1em;

			.card-title {
				margin: 0;
				font-size: 14px;
				word-break: keep-all;
			}

			.unit-info {
				font-size: 85%;

				> .rarity-badge {
					font-size: 100%;
				}
				> span:not(.badge) {
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
							background-image: url($assetsRoot+"/unit-type.png");
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
							background-image: url($assetsRoot+"/unit-role.png");
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
		}

		.unit-badges {
			position: absolute;
			top: 4px;
			right: 4px;
			line-height: 0;

			> .badge {
				box-shadow: 0 0 4px #000;

				&:not(.badge-info) {
					color: #000;
				}
			}
		}
	}
}
</style>
