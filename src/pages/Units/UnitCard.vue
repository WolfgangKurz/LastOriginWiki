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
			<b-badge v-if="unit.body === 1" variant="info" class="ml-1">AGS</b-badge>
			<template v-if="leftPromotions">
				<rarity-badge
					v-for="pro in leftPromotions"
					:key="`unit-table-unit-${unit.id}-pro-${pro}`"
					class="ml-1"
					:rarity="pro"
				>{{RarityName[pro]}} 승급</rarity-badge>
			</template>
		</div>

		<a v-if="!noLink" href="#" class="stretched-link unit-stretched" @click.prevent="OnClick()" />
	</b-card>
	<div v-else class="unit-card text-left clearfix" @click.prevent="!noLink && OnClick()">
		<unit-face :uid="unit.uid" class="unit-face float-left" />
		<div class="unit-name">{{unit.name}}</div>
		<div class="unit-flag">
			<b-badge v-if="unit.body === 1" variant="info" class="mr-1">AGS</b-badge>
			<b-badge v-if="isPromoted" variant="danger" class="mr-1">승급 후</b-badge>

			<div v-if="leftPromotions" class="float-right">
				<rarity-badge
					v-for="pro in leftPromotions"
					:key="`unit-table-unit-${unit.id}-pro-${pro}`"
					:rarity="pro"
					class="ml-1"
				>{{RarityName[pro]}} 승급</rarity-badge>
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

import { Unit } from "@/libs/DB/Unit";
import { ACTOR_GRADE } from "@/libs/Types/Enums";

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
		type: Number,
		default: ACTOR_GRADE.B,
	})
	private rarity!: ACTOR_GRADE;

	@Prop({
		type: Boolean,
		default: false,
	})
	private noLink!: boolean;

	private get IdDisplay () {
		return ("00" + this.unit.id).substr(-3);
	}

	private get UnitFaceUrl () {
		return UnitFace.GetURL(this.unit.uid);
	}

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get isPromoted () {
		return (this.unit.promotions || []).includes(this.rarity);
	}

	private get leftPromotions () {
		return (this.unit.promotions || []).filter(x => x > this.rarity);
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
							background-image: url($assetsRoot + "/unit-type.png");
							&[data-type="0"] {
								background-position-x: 0px;
							}
							&[data-type="2"] {
								background-position-x: -$basis;
							}
							&[data-type="1"] {
								background-position-x: -($basis * 2);
							}
						}
						&[data-role] {
							background-image: url($assetsRoot + "/unit-role.png");
							&[data-role="1"] {
								background-position-x: 0px;
							}
							&[data-role="0"] {
								background-position-x: -$basis;
							}
							&[data-role="2"] {
								background-position-x: -($basis * 2);
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
