<template>
	<b-card class="text-left" no-body>
		<b-card-header v-b-toggle.collapse_corelink>
			코어링크
			<div class="float-right">
				<b-badge pill :variant="previewClass">{{ linkPercent }}%</b-badge>
			</div>
		</b-card-header>
		<b-collapse id="collapse_corelink">
			<b-card-body>
				<b-row cols-lg="5" cols-md="3" cols="2">
					<div v-for="i in 5" :key="`unit-stats-corelink-${i}`" class="p-1">
						<b-select v-model="unit.Linked[i - 1]" :options="list" size="sm" :disabled="disabled[i - 1]" />
					</div>
				</b-row>
				<b-row class="mt-2">
					<b-col cols="12">
						빠른 설정 (링크 수)
						<b-btn-group class="float-right">
							<b-button size="sm" variant="secondary" @click="reset(0)">0</b-button>
							<b-button size="sm" variant="success" :disabled="disabled[0]" @click="reset(1)">1</b-button>
							<b-button size="sm" variant="success" :disabled="disabled[1]" @click="reset(2)">2</b-button>
							<b-button size="sm" variant="success" :disabled="disabled[2]" @click="reset(3)">3</b-button>
							<b-button size="sm" variant="success" :disabled="disabled[3]" @click="reset(4)">4</b-button>
							<b-button size="sm" variant="primary" :disabled="disabled[4]" @click="reset(5)">5</b-button>
						</b-btn-group>
					</b-col>
				</b-row>
				<template v-if="unit.LinkSum === 5">
					<hr />
					<b-row class="mt-2">
						<b-col cols="12">풀링크 보너스</b-col>
						<b-col cols="12">
							<b-list-group>
								<b-list-group-item>
									없음
									<b-radio class="float-right" value v-model="unit.FullLinkBonus" />
								</b-list-group-item>

								<b-list-group-item v-for="(fl, flIdx) in FullLinkBonus" :key="`unit-stats-corelink-fulllinkbonus-${flIdx}`">
									{{ fl.Name }}
									<span class="d-inline-block">
										{{ fl.Prefix + fl.Value + fl.Postfix }}
									</span>
									<b-radio class="float-right" :value="fl.Key" v-model="unit.FullLinkBonus" />
								</b-list-group-item>
							</b-list-group>
						</b-col>
					</b-row>
				</template>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { FormatNumber } from "@/libs/Functions";

import { Unit } from "@/pages/Simulation/Simulation/Unit";
import { GetLinkBonus } from "@/libs/DB/Unit";

@Component({})
export default class UnitStatsCoreLink extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	private get linkPercent () {
		return Math.floor(this.unit.Linked.reduce((p, c) => p + c, 0) * 100);
	}

	private get previewClass () {
		const sum = this.unit.LinkSum;
		if (sum === 0) return "secondary";
		if (sum === 5) return "primary";
		return this.unit.Linked.some(x => x > 0 && x < 1) ? "warning" : "success";
	}

	private get FullLinkBonus () {
		return this.unit.Unit.fullLinkBonus.map(x => GetLinkBonus(x, 1));
	}

	private get list () {
		return [0, 10, 15, 20, 25, 30, 40, 45, 50, 60, 75, 100]
			.map(x => ({
				value: x / 100,
				text: x + " %",
			}));
	}

	private get disabled () {
		const lv = this.unit.Level;
		return this.unit.Linked.map((x, i) => lv < i * 20 + 10);
	}

	private reset (value: number) {
		for (let i = 0; i < 5; i++) {
			this.unit.$set(
				this.unit.Linked,
				i,
				i < value && this.unit.Level >= i * 20 + 10 ? 1 : 0,
			);
		}
	}

	private NumValue (value: number, rounded?: boolean, literal?: boolean) {
		const normalized = ((v) => {
			const fixed = v.toFixed(8);
			return parseFloat(
				fixed.substr(0, fixed.length - 6),
			); // 2자리만 남기고
		})(value);

		if (rounded)
			return (!literal && normalized >= 0 ? "+" : "") + FormatNumber(Math.round(normalized));
		else {
			const integer = FormatNumber(Math.floor(normalized));
			const float = ((x: number) => {
				const y = x.toString();
				if (!y.includes(".")) return "";
				return y.substr(y.indexOf("."));
			})(normalized);
			return (!literal && normalized >= 0 ? "+" : "") + integer + float;
		}
	}
}
</script>

<style lang="scss">
#collapse_corelink .custom-select {
	padding-right: 0.375rem;
	background-image: none;
}
</style>
