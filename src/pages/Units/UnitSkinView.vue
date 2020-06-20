<template>
	<b-aspect :aspect="Aspect" class="unit-full" :class="{ 'unit-full-collapsed' : collapsed }">
		<b-alert
			v-if="skin.A"
			show
			variant="info"
			class="unit-skin-animated text-dark"
			title="이 스킨은 움직입니다"
			v-b-tooltip.hover.topright.v-light
		>로비 애니메이션</b-alert>

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
			{{skin.price}}
		</div>

		<div
			v-if="(!skin.X && skin.D && !IsSimplified) || skin.X"
			class="skin-toggle skin-toggle-damaged"
			:data-damaged="IsDamaged ? 1 : 0"
			@click="IsDamaged = !IsDamaged"
		/>
		<div
			v-if="(!skin.X && skin.S && !IsDamaged) || skin.X"
			class="skin-toggle skin-toggle-simplified"
			:data-simplified="IsSimplified ? 1 : 0"
			@click="IsSimplified = !IsSimplified"
		/>
		<div
			v-if="skin.G"
			class="skin-toggle skin-toggle-platform"
			:data-platform="IsGoogle ? 1 : 0"
			@click="IsGoogle = !IsGoogle"
		/>

		<div v-if="detailable" class="skin-detail" @click="ShowDetail()" />

		<b-modal v-model="DetailDisplay" centered hide-footer size="xl" modal-class="unit-skin-modal">
			<template #modal-title>{{skin.t}}</template>

			<unit-skin-view :unit="unit" :skin="skin" :index="index" />
		</b-modal>
	</b-aspect>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Prop, Emit, Watch } from "vue-property-decorator";

import { Unit, SkinInfo } from "@/libs/Types";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

interface SkinItem extends SkinInfo {
	isDef: boolean;
	isPro: boolean;
}

@Component({})
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
		type: Number,
		required: true,
	})
	private index!: number;

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

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get DisplayId () {
		return ("00" + this.unit.id).substr(-3);
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
		const skin = this.skin;
		let list: string[] = [];

		if (skin.isDef) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				this.IsSimplified ? "_S" : "",
				".",
				this.imageExt,
			];
		} else if (skin.isPro) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				"_P",
				this.IsSimplified ? "S" : "",
				".",
				this.imageExt,
			];
		} else if (this.index) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				"_",
				this.index.toString(),
				this.IsSimplified ? "S" : "",
				".",
				this.imageExt,
			];
		}

		const ret = list.join("");
		if (skin.G && this.IsGoogle)
			return ret.replace(/full/g, "full-g");
		else
			return ret;
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
		background-image: url($assetsRoot+"/bg/unit-bg.png");
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
			background-image: url($assetsRoot+"/bg/unit-bg-net.png");
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
			height: 100%;
		}
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
			background-image: url($assetsRoot+"/damaged-icon.png");
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
			background-image: url($assetsRoot+"/simplify-icon.png");
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
			background-image: url($assetsRoot+"/icon-platform.png");
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
		background-image: url($assetsRoot+"/icon-detail.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: 22px 22px;
		filter: drop-shadow(0 0 4px #000);
		cursor: pointer;
		z-index: 4;
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
}

.unit-full {
	.unit-full-group {
		> div > img {
			height: 100%;
			opacity: 0.22;
		}
	}

	&.unit-full-collapsed .unit-full-group {
		z-index: 3;

		> div > img {
			height: 25%;
			opacity: 0.9;
			filter: drop-shadow(0 0 4px #000);
		}
	}
}
</style>
