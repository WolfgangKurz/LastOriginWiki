<template>
	<div class="facility-icon">
		<svg :viewBox="`0 0 ${230 * facility.size} 244`" style="max-height: 244px">
			<image :xlink:href="`${AssetsRoot}/${ImageExtension}/facility/${facility.image}.${ImageExtension}`" x="0" :y="y" />
		</svg>
		<span class="facility-size" :data-size="facility.size" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { FacilityEntity } from "@/libs/DB/Facility";

@Component({})
export default class FacilityIcon extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private facility!: FacilityEntity;

	@Prop({
		type: Number,
		default: 25,
	})
	private level!: number;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get ImageExtension () {
		return ImageExtension();
	}

	private get y () {
		if (this.level < 10)
			return 0;
		else if (this.level < 17)
			return -244;
		else if (this.level < 22)
			return -244 * 2;
		else if (this.level < 25)
			return -244 * 3;
		else
			return -244 * 4;
	}
}
</script>

<style lang="scss">
.facility-icon {
	position: relative;
	display: inline-block;

	> div.facility-image {
		border-radius: 6px;
		background-repeat: no-repeat;
		overflow: hidden;

		$w: 230px;
		$h: 244px;
		width: 100%;
		@for $i from 1 through 3 {
			&[data-size="#{$i}"] {
				$_w: $w * $i;
				// $_h: $w * (244px / (230px * $i));
				max-width: $_w;
				height: (100% * $h / $_w);
				background-size: $_w ($h * 5);
			}
		}
		background-size: 100%;

		&[data-level="10"],
		&[data-level="11"],
		&[data-level="12"],
		&[data-level="13"],
		&[data-level="14"],
		&[data-level="15"],
		&[data-level="16"] {
			background-position: 0 (-$h);
		}
		&[data-level="17"],
		&[data-level="18"],
		&[data-level="19"],
		&[data-level="20"],
		&[data-level="21"] {
			background-position: 0 (-$h * 2);
		}
		&[data-level="22"],
		&[data-level="23"],
		&[data-level="24"] {
			background-position: 0 (-$h * 3);
		}
		&[data-level="25"] {
			background-position: 0 (-$h * 4);
		}
	}
	span.facility-size {
		position: absolute;
		display: inline-block;
		top: 5px;
		right: 5px;
		margin-left: 5px;
		margin-bottom: 3px;
		width: 56px;
		height: 17px;
		background-image: url($assetsRoot + "/facility-size-dots.png");
		background-size: 56px 51px;
		background-repeat: no-repeat;
		vertical-align: middle;

		&[data-size="2"] {
			background-position-y: -17px;
		}
		&[data-size="3"] {
			background-position-y: -34px;
		}
	}
}
</style>
