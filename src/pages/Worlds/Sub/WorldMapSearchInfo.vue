<template>
	<b-card-body class="p-0 text-center">
		<div v-if="SearchInfo === null" class="py-4 text-secondary">
			<locale k="WORLD_VIEW_SELECT_NODE" />
		</div>
		<div v-else-if="SearchInfo === false" class="py-4 text-secondary">
			<locale k="WORLD_VIEW_NOT_EXPLORABLE" />
		</div>
		<template v-else>
			<b-row cols="1" cols-lg="2">
				<b-col>
					<b-card text-variant="dark" :header="LocaleGet('WORLD_VIEW_EXPLORATION_CONDITION')">
						<b-table-simple class="border-bottom">
							<b-tbody>
								<b-tr>
									<b-td><locale k="WORLD_VIEW_EXPLORATION_AVG_LV" /></b-td>
									<b-td>
										<b-badge variant="warning">
											<locale k="WORLD_VIEW_EXPLORATION_LV_FORMAT" :p0="SearchInfo.unitsLv" />
										</b-badge>
									</b-td>
								</b-tr>
								<b-tr>
									<b-td>
										<locale k="WORLD_VIEW_EXPLORATION_MEMBERS" />
									</b-td>
									<b-td>
										<b-badge variant="warning">
											<locale k="WORLD_VIEW_EXPLORATION_MEMBERS_FORMAT" :p0="SearchInfo.units" />
										</b-badge>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
						<div>
							<b-badge variant="warning">
								<locale k="WORLD_VIEW_EXPLORING_TIME" />
							</b-badge>
							<h3>{{ SearchTime }}</h3>
						</div>
					</b-card>
				</b-col>
				<b-col>
					<b-card class="mt-2 mt-lg-0" text-variant="dark" :header="LocaleGet('WORLD_VIEW_EXPLORATION_REWARDS')">
						<b-row cols="2" cols-md="3">
							<drop-res res="metal" :count="SearchInfo.metal" />
							<drop-res res="nutrient" :count="SearchInfo.nutrient" />
							<drop-res res="power" :count="SearchInfo.power" />
						</b-row>
					</b-card>
					<b-card class="mt-2" text-variant="dark" :header="LocaleGet('WORLD_VIEW_EXPLORATION_REWARDS_ITEM')">
						<div v-if="SearchInfo.items.length === 0" class="py-4 text-secondary">
							<locale k="WORLD_VIEW_EXPLORATION_REWARDS_ITEM_NO" />
						</div>
						<b-row cols="2">
							<template v-for="(item, i) in SearchInfo.items">
								<drop-item
									v-if="GetConsumable(item.item)"
									:key="`worlds-${world}-${area}-search-item-${i}`"
									:item="GetConsumable(item.item)"
									:count="item.count"
									:chance="item.chance"
								/>
							</template>
						</b-row>
					</b-card>
				</b-col>
			</b-row>
		</template>
	</b-card-body>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import DropItem from "./../DropItem.vue";
import DropRes from "./../DropRes.vue";

import { MapSearch } from "@/libs/Types/Map";
import { Consumable } from "@/libs/Types/Consumable";

import ConsumableDB from "@/libs/DB/Consumable";

@Component({
	components: {
		DropItem,
		DropRes,
	},
})
export default class WorldMapSearchInfo extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private world!: string;

	@Prop({
		type: String,
		default: "",
	})
	private area!: string;

	@Prop({
		type: [Object, Boolean],
		default: null,
	})
	private SearchInfo!: MapSearch | false | null;

	private get SearchTime () {
		if (!this.SearchInfo) return "";
		const t = this.SearchInfo.time;

		const h = Math.floor(t / 3600);
		const m = Math.floor(t / 60) % 60;
		const s = t % 60;
		return `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
	}

	private GetConsumable (item: string) {
		return ConsumableDB.find(y => y.key === item);
	}
}
</script>
