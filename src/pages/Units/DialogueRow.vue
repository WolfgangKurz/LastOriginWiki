<template>
	<b-row class="dialogue-row">
		<b-col :class="rowClass" cols="2">{{TypeName}}</b-col>
		<b-col class="border">{{Dialogue}}</b-col>
		<b-col class="border" cols="auto">
			<audio :src="VoiceLink" type="audio/ogg" controls preload="auto" />
		</b-col>
	</b-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { AssetsRoot } from "@/libs/Const";

@Component({})
export default class DialogueRow extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private type!: string;

	@Prop({
		type: String,
		default: "",
	})
	private unitId!: string;

	@Prop({
		type: String,
		default: "",
	})
	private dialogue!: string;

	private get rowClass () {
		return [
			"border-top",
			"bg-" + this.TypeColor,
			"text-white",
		];
	}

	private get Dialogue () {
		return this.dialogue;
	}

	private get TypeColor () {
		switch (this.type) {
			case "Join": return "dark";

			case "SquadJoin": return "dark";
			case "Leader": return "dark";
			case "SortiePick": return "dark";
			case "StageStart": return "dark";
			case "Retreat": return "dark";
			case "SearchStart": return "dark";
			case "SearchEnd": return "dark";

			case "BattleFocus": return "primary";
			case "ActionApprove": return "primary";
			case "SpSkill": return "primary";
			case "Retire": return "primary";
			case "Repair": return "primary";
			case "Reinforce": return "primary";
			case "ItemEquip": return "primary";
			case "CoreLink": return "primary";
			case "PresentGet": return "primary";

			case "Login": return "success";
			case "Idle_01_01": return "success";
			case "Idle_01_02": return "success";
			case "Idle_01_03": return "success";
			case "SPIdle_01_01": return "success";
			case "Idle_02_01": return "success";
			case "Idle_03_01": return "success";
			case "Idle_04_01": return "success";
			case "SPIdle_02_01": return "success";

			case "Oath": return "danger";
			case "OathIdle_01": return "danger";
			case "MVP": return "secondary";
		}
		return "secondary";
	}

	private get TypeName () {
		switch (this.type) {
			case "Join": return "획득";

			case "SquadJoin": return "편성";
			case "Leader": return "리더 지정";
			case "SortiePick": return "스쿼드 선택";
			case "StageStart": return "전투 시작";
			case "Retreat": return "퇴각";
			case "SearchStart": return "탐색 시작";
			case "SearchEnd": return "탐색 완료";

			case "BattleFocus": return "전투 내 선택";
			case "ActionApprove": return "전투 지시";
			case "SpSkill": return "액티브 스킬";
			case "Retire": return "전투 불능";
			case "Repair": return "수복";
			case "Reinforce": return "전투원 강화";
			case "ItemEquip": return "장비 장착";
			case "CoreLink": return "코어 링크";
			case "PresentGet": return "선물";

			case "Login": return "접속";
			case "Idle_01_01": return "일반 터치 (1)";
			case "Idle_01_02": return "일반 터치 (2)";
			case "Idle_01_03": return "일반 터치 (3)";
			case "SPIdle_01_01": return "특정 터치";
			case "Idle_02_01": return "일반 터치 (♥ 40)";
			case "Idle_03_01": return "일반 터치 (♥ 70)";
			case "Idle_04_01": return "일반 터치 (♥ 100)";
			case "SPIdle_02_01": return "특정 터치 (♥ 100)";

			case "Oath": return "서약";
			case "OathIdle_01": return "서약 후 터치";
			case "MVP": return "전투 MVP?";
		}
		return "???";
	}

	private get VoiceLink () {
		return `${AssetsRoot}/audio/${this.unitId}_${this.type}.ogg`;
	}
}
</script>

<style lang="scss">
.row.dialogue-row {
	margin: 0 0.25rem;

	&:not(:first-child) > div:nth-child(2) {
		border-top: 0 !important;
	}

	> div {
		&:not(:last-child) {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-right: 0 !important;
		}
		&:last-child {
			padding: 0;
		}
	}

	> div:last-child,
	audio {
		vertical-align: middle;
	}
}
</style>
