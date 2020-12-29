<template>
	<div class="bgm">
		<b-card header="BGM 목록">
			<b-table-simple bordered table-class="bgm-table">
				<b-thead>
					<b-tr>
						<b-th>이름</b-th>
						<b-th>설명</b-th>
						<b-th>플레이어</b-th>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="(desc, name) in BGMList" :key="`bgm-list-${name}`">
						<b-th>{{ name }}</b-th>
						<b-td>{{ desc }}</b-td>
						<b-td class="player-cell">
							<audio :src="`${AssetsRoot}/bgm/${name}.ogg`" type="audio/ogg" controls loop preload="auto" />
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
		return {
			Title: "로그인 화면",
			Lobby: "기본 로비",

			Talk_01: "대화 1",
			Talk_02: "대화 2",
			Talk_03: "대화 3",
			Talk_04: "대화 4",
			Talk_05: "대화 5",
			Talk_06: "대화 6",
			Talk_07: "대화 7",

			Thrill_01: "대화 (전율) 1",

			Battle_01: "전투 1",
			Battle_02: "전투 2",
			Battle_03: "전투 3 (만월의 야상곡 전투)",
			Battle_04: "전투 4",
			Battle_Boss_01: "보스 전투 1",
			Battle_Boss_02: "보스 전투 2",
			Battle_Boss_03: "보스 전투 3",

			Marriage_01: "서약 엘리베이터",
			Marriage_02: "서약 갑판",

			Summer_01: "리오로보스의 유산?",
			Summer_02: "리오보로스의 유산?",
			Christmas_01: "세인트 오르카의 비밀작전?",
			Christmas_02: "세인트 오르카의 비밀작전 로비",
			Forest_of_Elves: "요정 마을의 아리아?",
			Valentine: "발렌타인데이",

			Mystic: "흐린 기억 속의 나라 1",
			Noire_01: "흐린 기억 속의 나라 2",
			Noire_02: "흐린 기억 속의 나라 3",
		};
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
