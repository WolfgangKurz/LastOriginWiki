<template>
	<div class="unit-skin-view">
		<b-aspect :aspect="Aspect" class="unit-full" :class="{ 'unit-full-collapsed': collapsed }">
			<div class="unit-full-bg" />
			<div class="unit-full-group">
				<div>
					<img :src="`${AssetsRoot}/${imageExt}/group/${unit.groupkey}.${imageExt}`" />
				</div>
			</div>
			<div class="unit-full-unit">
				<img :style="ImageStyle" :src="SkinImageURL" />
			</div>

			<div v-if="!(skin.isPro || skin.isDef) && skin.price" class="skin-price">
				<img :src="`${AssetsRoot}/tuna.png`" />
				{{ skin.price }}
			</div>
			<b-alert
				v-if="skin.A"
				show
				variant="info"
				class="unit-skin-animated text-dark"
				title="이 스킨은 움직입니다"
				v-b-tooltip.hover.topright.v-light
				>로비 애니메이션</b-alert
			>
			<div v-if="unit.marry" class="skin-marry" title="서약 대사가 존재합니다" v-b-tooltip.hover.topright.v-danger />

			<div
				v-if="(!IsSimplified && skin.D) || (IsSimplified && skin.X)"
				class="skin-toggle skin-toggle-damaged"
				:data-damaged="IsDamaged ? 1 : 0"
				@click="IsDamaged = !IsDamaged"
			/>
			<div
				v-if="(!IsDamaged && skin.S) || (IsDamaged && skin.X)"
				class="skin-toggle skin-toggle-simplified"
				:data-simplified="IsSimplified ? 1 : 0"
				@click="IsSimplified = !IsSimplified"
			/>
			<div v-if="skin.G" class="skin-toggle skin-toggle-platform" :data-platform="IsGoogle ? 1 : 0" @click="IsGoogle = !IsGoogle" />

			<div v-if="detailable" class="skin-detail" @click="ShowDetail()" />

			<b-modal v-model="DetailDisplay" centered hide-footer size="xl" modal-class="unit-skin-modal">
				<template #modal-title>{{ skin.t }}</template>

				<unit-skin-view :unit="unit" :skin="skin" />
			</b-modal>
		</b-aspect>

		<template v-if="collapsed">
			<b-alert variant="primary" show v-if="skin.artist">일러스트레이터 : {{ skin.artist }}</b-alert>
			<b-card v-if="skin.name" :header="skin.name" :class="{ 'mb-2': true, 'skin-name-desc': true, 'mt-2': !skin.artist }">{{
				skin.desc
			}}</b-card>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Prop, Emit, Watch } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { SkinInfo } from "@/libs/Types";
import { Unit } from "@/libs/Types/Unit";

interface SkinItem extends SkinInfo {
	isDef: boolean;
	isPro: boolean;
}

@Component({
	name: "unit-skin-view",
})
export default class UnitSkinView extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private skin!: SkinItem;

	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	@Prop({
		type: Boolean,
		default: false,
	})
	private collapsed!: boolean;

	@Prop({
		type: Boolean,
		default: false,
	})
	private detailable!: boolean;

	private DetailDisplay: boolean = false;

	private IsDamaged: boolean = false;
	private IsSimplified: boolean = false;
	private IsGoogle: boolean = false;

	@Watch("unit")
	private UnitWatch () {
		this.Reset();
	}

	@Watch("index")
	private IndexWatch () {
		this.Reset();
	}

	@Watch("IsDamaged")
	private IsDamagedWatch (value: boolean) {
		if (value && this.IsSimplified && !this.skin.X)
			this.IsSimplified = false;
		else if (!value && this.IsSimplified && !this.skin.S)
			this.IsSimplified = false;
	}

	@Watch("IsSimplified")
	private IsSimplifiedWatch (value: boolean) {
		if (value && this.IsDamaged && !this.skin.X)
			this.IsDamaged = false;
		else if (!value && this.IsDamaged && !this.skin.D)
			this.IsDamaged = false;
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get Aspect () {
		return this.collapsed ? "2:5" : "4:3";
	}

	private get ImageStyle () {
		if (!this.collapsed) return {};

		const base = this.skin.offset;
		const platform = this.IsGoogle ? "google" : "normal";
		const target = this.IsDamaged && this.IsSimplified
			? "x"
			: this.IsDamaged
				? "d"
				: this.IsSimplified
					? "s"
					: "n";

		return { "margin-left": base[platform][target] + "%" };
	}

	private get SkinImageURL () {
		const skinId = this.skin.isDef ? 0 : this.skin.sid;
		const ext = this.imageExt;

		const postfix = (() => {
			const ret: string[] = [];
			if (this.IsDamaged) ret.push("D");
			if (this.IsSimplified) ret.push("S");
			return (ret.length > 0 ? "_" : "") + ret.join("");
		})();

		return `${AssetsRoot}/${ext}/full/${this.unit.uid}_${skinId}_${this.skin.G && this.IsGoogle ? "G" : "O"}${postfix}.${ext}`;
	}

	private Reset () {
		this.IsDamaged = false;
		this.IsSimplified = false;
	}

	private ShowDetail () {
		this.DetailDisplay = true;
	}
}
</script>

<style lang="scss">
.unit-skin-view {
	.unit-full {
		position: relative;
		padding: 0;
		overflow: hidden;

		.unit-full-bg {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background-image: url($assetsRoot + "bg/unit-bg.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;

			&::before,
			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				transform-origin: 50% 50%;
				background-image: url($assetsRoot + "bg/unit-bg-net.png");
				background-position: center bottom;
				background-repeat: no-repeat;
				background-size: 100%;
			}
			&::before {
				transform: translateY(-20%) rotate(180deg) scale(1.1);
			}
			&::after {
				transform: translateY(20%) scale(1.1);
			}
		}
		.unit-full-group {
			position: absolute;
			display: flex;
			padding: 0;
			left: 4px;
			top: 4px;
			max-height: 40%;
			text-align: left;
			overflow: hidden;

			> div {
				flex: 1;
			}
		}
		.unit-full-unit {
			position: absolute;
			display: flex;
			padding: 4%;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			justify-content: center;

			> img {
				margin: auto;
			}
		}

		&:not(.unit-full-collapsed) {
			.unit-full-unit > img {
				max-width: 100%;
				max-height: 100%;
			}
		}
		&.unit-full-collapsed {
			.unit-full-unit > img {
				height: 100%;
			}
		}

		.skin-toggle {
			position: absolute;
			background-repeat: no-repeat;
			filter: drop-shadow(0 0 4px #000);
			cursor: pointer;
			z-index: 4;

			&.skin-toggle-damaged {
				top: 0px;
				right: 0px;
				width: 64px;
				height: 62px;
				background-image: url($assetsRoot + "damaged-icon.png");
				background-size: 128px 62px;

				&[data-damaged="1"] {
					background-position-x: -64px;
				}
			}
			&.skin-toggle-simplified {
				top: 70px;
				right: 18px;
				width: 28px;
				height: 28px;
				background-image: url($assetsRoot + "simplify-icon.png");
				background-position-x: -28px;
				background-size: 56px 28px;

				&[data-simplified="1"] {
					background-position-x: 0;
				}
			}
			&.skin-toggle-platform {
				top: 130px;
				right: 18px;
				width: 28px;
				height: 28px;
				background-image: url($assetsRoot + "icon-platform.png");
				background-position-x: -28px;
				background-size: 56px 28px;

				&[data-platform="1"] {
					background-position-x: 0;
				}
			}
		}

		.skin-detail {
			position: absolute;
			right: 10px;
			bottom: 10px;
			width: 22px;
			height: 22px;
			background-image: url($assetsRoot + "icon-detail.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: 22px 22px;
			filter: drop-shadow(0 0 4px #000);
			cursor: pointer;
			z-index: 4;
		}

		.unit-skin-animated {
			position: absolute;
			margin: 0;
			padding: 6px 12px;
			bottom: 10px;
			left: 10px;
			user-select: none;
			z-index: 10;
		}
		.skin-marry {
			position: absolute;
			bottom: 60px;
			left: 5px;
			width: 38px;
			height: 34px;
			background-image: url($assetsRoot + "icon-marry.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: 38px 34px;
		}
		.skin-price {
			position: absolute;
			padding: 1px 6px 3px;
			bottom: 5px;
			right: 5px;
			border-radius: 4px;
			background-color: rgba(0, 0, 0, 0.6);
			text-shadow: 0 0 4px #000;
			color: #fff;

			> img {
				height: 20px;
			}
		}
		&.unit-full-collapsed .skin-price {
			bottom: 40px;
		}

		.unit-full-group {
			> div > img {
				height: 100%;
				opacity: 0.22;
			}
		}

		&.unit-full-collapsed .unit-full-group {
			z-index: 3;

			> div > img {
				width: auto;
				height: 25%;
				opacity: 0.9;
				filter: drop-shadow(0 0 4px #000);
			}
		}
	}
	.skin-name-desc {
		word-break: keep-all;
		.card-body {
			font-size: 90%;
		}
	}
}
</style>
