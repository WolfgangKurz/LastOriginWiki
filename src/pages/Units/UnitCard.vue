<template>
	<b-card v-if="!horizontal" class="unit-card position-relative my-1" bg-variant="dark" text-variant="white" :img-src="UnitFaceUrl">
		<div v-if="unit.name" class="unit-role-icon">
			<img :src="`${AssetsRoot}/icons/CHA_${RoleIconId}${RarityDisplay[unit.rarity]}.png`" />
		</div>

		<b-card-title>
			<div class="unit-info">
				<rarity-badge :rarity="unit.rarity" />
				<span>
					<span class="d-inline-block">No. {{ IdDisplay }}</span>
					<span class="d-inline-block">
						<i class="unit-type" :data-type="unit.type" />
						<!-- <i class="unit-role" :data-role="unit.role" /> -->
					</span>
				</span>
			</div>
			<raw :data="unitName" />

			<div class="unit-badges">
				<b-badge v-if="unit.body === 1" variant="info" class="ml-1">
					<locale k="COMMON_UNIT_BODY_AGS" />
				</b-badge>
				<template v-if="leftPromotions">
					<rarity-badge v-for="pro in leftPromotions" :key="`unit-table-unit-${unit.uid}-pro-${pro}`" class="ml-1" :rarity="pro">
						<locale k="UNIT_CARD_PROMOTION_BADGE" :p0="RarityDisplay[pro]" />
					</rarity-badge>
				</template>
			</div>
		</b-card-title>

		<a v-if="!noLink" href="#" class="stretched-link unit-stretched" @click.prevent="OnClick()" />
	</b-card>
	<div v-else class="unit-card text-left clearfix" @click.prevent="!noLink && OnClick()">
		<unit-face :uid="unit.uid" class="unit-face float-left" />
		<div class="unit-name">
			<locale :k="`UNIT_${unit.uid}`" />
		</div>
		<div class="unit-flag">
			<b-badge v-if="unit.body === 1" variant="info" class="mr-1">
				<locale k="COMMON_UNIT_BODY_AGS" />
			</b-badge>
			<b-badge v-if="isPromoted" variant="danger" class="mr-1">
				<locale k="UNIT_CARD_PROMOTION_AFTER" />
			</b-badge>

			<div v-if="leftPromotions" class="float-right">
				<rarity-badge v-for="pro in leftPromotions" :key="`unit-table-unit-${unit.uid}-pro-${pro}`" :rarity="pro" class="ml-1">
					<locale k="UNIT_CARD_PROMOTION_BADGE" :p0="RarityDisplay[pro]" />
				</rarity-badge>
			</div>
		</div>
	</div>
</template>

<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleGet } from "@/libs/Locale";

import UnitFace from "@/components/UnitFace.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import { Prop, Emit } from "vue-property-decorator";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import { ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import { AssetsRoot, RarityDisplay } from "@/libs/Const";

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
	private unit!: FilterableUnit;

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

	@Prop({
		type: Boolean,
		default: false,
	})
	private shortName!: boolean;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get RoleIconId () {
		switch (this.unit.role) {
			case ROLE_TYPE.ATTACKER: return "Sword";
			case ROLE_TYPE.DEFENDER: return "Shield";
			case ROLE_TYPE.SUPPORTER: return "Gear";
		}
		return "";
	}

	private get IdDisplay () {
		return ("00" + this.unit.no).substr(-3);
	}

	private get UnitFaceUrl () {
		return UnitFace.GetURL(this.unit.uid);
	}

	private get RarityDisplay () {
		return RarityDisplay;
	}

	private get isPromoted () {
		return (this.unit.promo || []).includes(this.rarity);
	}

	private get leftPromotions () {
		return (this.unit.promo || []).filter(x => x > this.rarity);
	}

	private get unitName () {
		if (this.shortName) {
			const h = this.$createElement;
			const name = LocaleGet(`UNIT_${this.unit.uid}`);
			const sname = LocaleGet(`UNIT_SHORT_${this.unit.uid}`);

			if (name === sname) return (this as any)._v(name);
			return name.split(sname).map(x => x.length === 0 ? sname : h("span", { staticClass: "text-secondary" }, [x]));
		} else
			return (this as any)._v(LocaleGet(`UNIT_${this.unit.uid}`));
	}

	@Emit("click")
	private OnClick () {
		return undefined;
	}
}
</script>

<style lang="scss">
.unit-card {
	position: relative;
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
			padding: 1em 0;

			.card-title {
				position: relative;
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
							background-image: url($assetsRoot + "unit-type.png");
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
							background-image: url($assetsRoot + "unit-role.png");
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

		.unit-role-icon {
			position: absolute;
			left: -1em;
			top: -2em;
			pointer-events: none;

			> img {
				width: 6em;
				height: 6em;
			}
		}

		.unit-badges {
			position: absolute;
			top: -2.5em;
			right: 0.125em;
			line-height: 0;
			font-size: 16px;

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
