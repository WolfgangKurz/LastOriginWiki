<template>
	<b-card
		class="enemy-card position-relative my-1"
		:bg-variant="enemy.isBoss ? 'danger' : 'dark'"
		text-variant="white"
		:img-src="`${AssetsRoot}/${imageExt}/tbar/${enemy.icon}.${imageExt}`"
	>
		<b-card-title>
			<div class="enemy-info">
				<rarity-badge :rarity="enemy.rarity" />
				<span>
					<!-- <span class="d-inline-block">No. {{ IdDisplay }}</span> -->
					<span class="d-inline-block">
						<i class="enemy-type" :data-type="enemy.type" />
						<i class="enemy-role" :data-role="enemy.role" />
					</span>
				</span>
			</div>
			{{ enemy.name }}
		</b-card-title>

		<a href="#" class="stretched-link enemy-stretched" @click.prevent="Click" />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { Enemy } from "@/libs/DB/Enemy";

import RarityBadge from "@/components/RarityBadge.vue";

@Component({
	components: {
		RarityBadge,
	},
})
export default class EnemyCard extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private enemy!: Enemy;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	@Emit("click")
	private Click () {
		return this.enemy.id;
	}
}
</script>

<style lang="scss">
.enemy-card {
	cursor: pointer;

	&.card {
		border-radius: 9px;

		.card-img-top {
			position: relative;

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

			.enemy-info {
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
							background-image: url($assetsRoot + "unit-role.png");
							&[data-role="attacker"] {
								background-position-x: 0px;
							}
							&[data-role="defender"] {
								background-position-x: -$basis;
							}
							&[data-role="supporter"] {
								background-position-x: -($basis * 2);
							}
						}
					}
				}
			}
		}
	}
}
</style>
