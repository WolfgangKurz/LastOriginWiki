<template>
	<div class="drop-unit p-2 text-dark">
		<b-card v-if="unit" :class="`text-left rarity-${RarityName[unit.rarity]}`">
			<unit-face class="float-left mr-2" :uid="unit.uid" size="48" type="mini" />
			<div>
				<b-badge variant="secondary" class="mr-1 bordered">{{ RarityName[unit.rarity] }}</b-badge>
				<span class="unit-info">
					<i class="unit-type" :data-type="unit.type" />
					<i class="unit-role" :data-role="unit.role" />
				</span>
			</div>
			<div class="float-left">{{ unit.name }}</div>
			<small v-if="chance < 100" class="ml-1 text-bold">({{ chance }}%)</small>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import UnitFace from "@/components/UnitFace.vue";
import RarityBadge from "@/components/RarityBadge.vue";

import { ACTOR_GRADE } from "@/libs/Types/Enums";

import LazyLoad, { LazyDataType } from "@/libs/LazyData";
import FilterableUnitDB, { FilterableUnit } from "@/libs/DB/Unit.Filterable";

@Component({
	components: {
		UnitFace,
	},
})
export default class DropUnit extends Vue {
	private DB: LazyDataType<FilterableUnit[]> = null;
	private InitialDB () {
		this.DB = null;

		const uid = this.$route.params.id;
		LazyLoad(
			r => {
				const FilterableUnit = r[0] as FilterableUnit[];
				if (!FilterableUnit) return (this.DB = false);
				this.DB = FilterableUnit;
				this.$forceUpdate();
			},
			cb => FilterableUnitDB(x => cb(x)),
		);
	}

	@Prop({
		type: [String, Number],
		required: true,
	})
	private id!: number | string;

	@Prop({
		type: Number,
		default: 100,
	})
	private chance!: number;

	private get unit () {
		if (!this.DB) return null;

		if (typeof this.id === "number")
			return this.DB.find(x => x.no === this.id);
		else
			return this.DB.find(x => x.uid === this.id);
	}

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}
}
</script>

<style lang="scss">
.drop-unit {
	user-select: none;
	cursor: pointer;

	.unit-face {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	span.unit-info {
		opacity: 0.72;

		i {
			$basis: 18px;
			display: inline-block;
			width: $basis;
			height: $basis;
			margin-right: 4px;
			background-size: ($basis * 3) ($basis * 2);
			background-position: 0 0;
			background-repeat: no-repeat;
			vertical-align: bottom;

			background-position-y: -$basis;

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
</style>
