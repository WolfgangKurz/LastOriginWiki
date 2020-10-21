<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import UnitData from "@/libs/DB/Unit";
import { FacilityEntity, FacilityUpgradeRequiredMaterial, FactilityProduct } from "@/libs/DB/Facility";
import ConsumableData from "@/libs/DB/Consumable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import ItemIcon from "@/components/ItemIcon.vue";
import FacilityIcon from "./FacilityIcon.vue";

@Component({
	components: {
		UnitBadge,
		RarityBadge,
		ItemIcon,
		FacilityIcon,
	},
})
export default class FacilityCard extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private id!: string;

	@Prop({
		type: Object,
		required: true,
	})
	private facility!: FacilityEntity;

	private level: number = 0;

	private get LevelList () {
		const list = [];
		for (let i = 1; i <= 25; i++) {
			list.push({
				value: i - 1,
				text: i.toString(),
			});
		}
		return list;
	}

	private Click (event: Event) {
		event.preventDefault();
		this.$emit("click");
	}

	private render () {
		const facility = this.facility;
		const level = this.level;
		const entry = facility.list[level];

		return <b-card no-body class="facility-card" id={`anchor_${this.id}`}>
			<b-card-header>{facility.name}</b-card-header>
			<b-card-body>
				<facility-icon facility={facility} />
			</b-card-body>

			<a href="#" class="stretched-link equip-stretched" onClick={this.Click} />
		</b-card>;
	}
}
</script>

<style lang="scss">
.card.facility-card {
}
</style>
