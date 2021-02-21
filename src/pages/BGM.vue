<template>
	<div class="bgm">
		<b-card :header="LocaleGet('BGM_LIST')">
			<b-table-simple bordered table-class="bgm-table">
				<b-thead>
					<b-tr>
						<b-th><locale k="BGM_NAME" /></b-th>
						<b-th><locale k="BGM_DESC" /></b-th>
						<b-th><locale k="BGM_PLAYER" /></b-th>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="id in BGMList" :key="`bgm-list-${id}`">
						<b-th>{{ id }}</b-th>
						<b-td><locale :k="`BGM_DESC_${id}`" /></b-td>
						<b-td class="player-cell">
							<audio :src="`${AssetsRoot}/audio/bgm/${id}.mp3`" type="audio/mp3" controls loop preload="none" />
						</b-td>
					</b-tr>
				</b-tbody>
			</b-table-simple>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { UpdateTitle } from "@/libs/Functions";

import { AssetsRoot } from "@/libs/Const";
import { SetMeta } from "@/libs/Meta";

@Component({})
export default class BGM extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get BGMList () {
		return [
			"Title", "Lobby",
			"Talk_01", "Talk_02", "Talk_03", "Talk_04", "Talk_05", "Talk_06", "Talk_07",
			"Thrill_01",
			"Battle_01", "Battle_02", "Battle_03", "Battle_04",
			"Battle_Boss_01", "Battle_Boss_02", "Battle_Boss_03",
			"IronPrince",
			"Marriage_01", "Marriage_02",
			"Summer_01", "Summer_02",
			"Christmas_01", "Christmas_02",
			"Forest_of_Elves",
			"Valentine",
			"Mystic", "Noire_01", "Noire_02",
		];
	}

	private mounted () {
		SetMeta(["description", "twitter:description"], "라스트오리진(LastOrigin)에 사용된 BGM 목록과 플레이어입니다.");
		SetMeta("keywords", ",BGM,OST", true);
		SetMeta(["twitter:image", "og:image"], null);

		UpdateTitle("BGM");
	}
}
</script>

<style lang="scss">
#app > .container > .bgm {
	.bgm-table {
		td.player-cell {
			padding: 0.25em;
			> audio {
				width: 100%;
			}
		}
	}
}
</style>
