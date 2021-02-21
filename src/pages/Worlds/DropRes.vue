<template>
	<div class="drop-res p-2 text-dark" :data-count="count">
		<b-card :bg-variant="am ? 'warning' : 'secondary'" :text-variant="am ? 'dark' : 'white'">
			<equip-icon class="float-left mr-2" :image="Icon" />
			<div class="text-left">
				{{ Name }}
				<b-badge v-if="count !== 1" variant="dark">x{{ FormatNumber(count) }}</b-badge>
			</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import EquipIcon from "@/components/EquipIcon.vue";

import { FormatNumber } from "@/libs/Functions";

import { Consumable } from "@/libs/Types/Consumable";

@Component({
	components: {
		EquipIcon,
	},
})
export default class DropRes extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private res!: string;

	@Prop({
		type: Number,
		default: 1,
	})
	private count!: number;

	@Prop({
		type: Boolean,
		default: false,
	})
	private am!: boolean;

	private get Icon () {
		switch (this.res) {
			case "metal": return "UI_Icon_Currency_Metal";
			case "nutrient": return "UI_Icon_Currency_Nutrient";
			case "power": return "UI_Icon_Currency_Power";
			case "cash": return "UI_Icon_TunaCan_T1";
			default: return "none";
		}
	}

	private get Name () {
		switch (this.res) {
			case "metal": return LocaleGet("COMMON_RES_PARTS");
			case "nutrient": return LocaleGet("COMMON_RES_NUTRIENTS");
			case "power": return LocaleGet("COMMON_RES_POWER");
			case "cash": return LocaleGet("COMMON_RES_TUNA");
			default: return "???";
		}
	}

	private FormatNumber (num: number): string {
		return FormatNumber(num);
	}
}
</script>

<style lang="scss">
.drop-res {
	word-break: keep-all;
	user-select: none;
	// cursor: pointer;

	&[data-count="0"] {
		opacity: 0.68;
	}

	.equip-icon {
		background-color: transparentize(#000, 0.8);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
}
</style>
