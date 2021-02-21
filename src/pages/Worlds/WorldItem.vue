<template>
	<b-card class="world-item mb-4" text-variant="light" bg-variant="dark">
		<b-row class="text-left">
			<b-col cols="auto">
				<img :src="`${AssetsRoot}/world/icons/${WorldIcon}.png`" />
			</b-col>
			<b-col>
				<div class="world-item-name">{{ Name }}</div>
				<hr class="my-1" />
				<div class="world-item-desc">{{ Description }}</div>
			</b-col>
		</b-row>
		<a v-if="linked" :href="`/worlds/${wid}`" class="stretched-link" @click.prevent="Click" />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import { AssetsRoot } from "@/libs/Const";

@Component({})
export default class WorldItem extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private wid!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private linked!: boolean;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Name () {
		return LocaleGet(`WORLD_${this.wid}`);
	}

	private get Description () {
		return LocaleGet([`WORLD_DESC_${this.wid}`, ""]);
	}

	private get WorldIcon () {
		if (this.wid === "Cha")
			return "Cha_0";
		else
			return `${this.wid}_1`;
	}

	private Click () {
		this.$emit("goto", `/worlds/${this.wid}`);
	}
}
</script>

<style lang="scss">
.world-item {
	.card-body {
		img {
			width: 100%;
			max-width: 6rem;
		}

		.world-item-name {
			font-size: 1.25rem;
		}
		.world-item-desc {
			word-break: keep-all;
			font-size: 0.875rem;
			opacity: 0.875;
		}
		hr {
			border-top-color: rgba(255, 255, 255, 0.1);
		}
	}
}
</style>
