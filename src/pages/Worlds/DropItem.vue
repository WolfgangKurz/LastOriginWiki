<template>
	<div class="drop-item p-2 text-dark">
		<b-card :bg-variant="variant" :text-variant="text">
			<equip-icon class="float-left mr-2" :image="item.icon" />
			<div class="text-left">
				{{ item.name }}
				<b-badge v-if="count > 1" variant="dark" class="ml-1">x{{ count }}</b-badge>
				<div v-if="chance < 100">
					<b-badge :variant="variant">({{ chance }}%)</b-badge>
				</div>
			</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";

import { Consumable } from "@/libs/DB/Consumable";

@Component({
	components: {
		EquipIcon,
	},
})
export default class DropItem extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private item!: Consumable;

	@Prop({
		type: Number,
		default: 1,
	})
	private count!: number;

	@Prop({
		type: Number,
		default: 100,
	})
	private chance!: number;

	@Prop({
		type: String,
		default: "secondary",
	})
	private variant!: string;

	@Prop({
		type: String,
		default: "light",
	})
	private text!: string;
}
</script>

<style lang="scss">
.drop-item {
	word-break: keep-all;
	user-select: none;
	cursor: pointer;

	.equip-icon {
		background-color: transparentize(#000, 0.8);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
}
</style>
