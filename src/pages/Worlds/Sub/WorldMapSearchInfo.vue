<template>
	<b-card-body class="p-0 text-center">
		<div v-if="SearchInfo === null" class="py-4 text-secondary">위 지도에서 지역을 선택해주세요.</div>
		<div v-else-if="SearchInfo === false" class="py-4 text-secondary">탐사할 수 없는 지역입니다.</div>
		<template v-else>
			<b-row cols="1" cols-lg="2">
				<b-col>
					<b-card text-variant="dark" header="탐색 조건">
						<b-table-simple class="border-bottom">
							<b-tbody>
								<b-tr>
									<b-td> 필요 평균 레벨</b-td>
									<b-td>
										<b-badge variant="warning">Lv. {{ SearchInfo.unitsLv }} 이상</b-badge>
									</b-td>
								</b-tr>
								<b-tr>
									<b-td> 스쿼드 구성 인원</b-td>
									<b-td>
										<b-badge variant="warning">{{ SearchInfo.units }} 이상</b-badge>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
						<div>
							<b-badge variant="warning">탐색 소요 시간</b-badge>
							<h3>{{ SearchTime }}</h3>
						</div>
					</b-card>
				</b-col>
				<b-col>
					<b-card class="mt-2 mt-lg-0" text-variant="dark" header="탐색 완료 보상">
						<b-row cols="2" cols-md="3">
							<drop-res res="metal" :count="SearchInfo.metal" />
							<drop-res res="nutrient" :count="SearchInfo.nutrient" />
							<drop-res res="power" :count="SearchInfo.power" />
						</b-row>
					</b-card>
					<b-card class="mt-2" text-variant="dark" header="추가 획득 가능">
						<div v-if="SearchInfo.items.length === 0" class="py-4 text-secondary">추가 획득 가능 물품 없음</div>
						<b-row cols="2">
							<drop-item
								v-for="(item, i) in SearchInfo.items"
								:key="`worlds-${world}-${area}-search-item-${i}`"
								:item="GetConsumable(item.item)"
								:count="item.count"
								:chance="item.chance"
							/>
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

import ConsumableData, { Consumable } from "@/libs/DB/Consumable";
import { MapSearch } from "@/libs/DB/Map";

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
		return ConsumableData.find(y => y.key === item);
	}
}
</script>
