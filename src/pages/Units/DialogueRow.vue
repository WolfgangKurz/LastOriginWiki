<script lang="tsx">
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

	@Prop({
		type: String,
		default: "ko",
		validator: (x: string) => (x === "ko" || x === "jp"),
	})
	private lang!: "ko" | "jp";

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
			case "SpSkill_1": return "primary";
			case "SpSkill_2": return "primary";
			case "SpSkill_3": return "primary";
			case "SpSkill_4": return "primary";
			case "SpSkill_5": return "primary";
			case "SpSkill_6": return "primary";
			case "SpSkill_7": return "primary";
			case "SpSkill_8": return "primary";
			case "SpSkill_9": return "primary";
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

	private get TypeName (): string | JSX.Element | Array<string | JSX.Element> {
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
			case "SpSkill_1": return "액티브 스킬 (1)";
			case "SpSkill_2": return "액티브 스킬 (2)";
			case "SpSkill_3": return "액티브 스킬 (3)";
			case "SpSkill_4": return "액티브 스킬 (4)";
			case "SpSkill_5": return "액티브 스킬 (5)";
			case "SpSkill_6": return "액티브 스킬 (6)";
			case "SpSkill_7": return "액티브 스킬 (7)";
			case "SpSkill_8": return "액티브 스킬 (8)";
			case "SpSkill_9": return "액티브 스킬 (9)";
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
			case "Idle_02_01": return ["일반 터치", <b-badge variant="danger" class="float-right mt-1">♥ 40</b-badge>];
			case "Idle_03_01": return ["일반 터치", <b-badge variant="danger" class="float-right mt-1">♥ 70</b-badge>];
			case "Idle_04_01": return ["일반 터치", <b-badge variant="danger" class="float-right mt-1">♥ 100</b-badge>];
			case "SPIdle_02_01": return ["특정 터치", <b-badge variant="danger" class="float-right mt-1">♥ 100</b-badge>];

			case "Oath": return "서약";
			case "OathIdle_01": return "서약 후 터치";
			case "MVP": return ["전투 MVP", <b-badge variant="dark" class="float-right mt-1">미구현</b-badge>];
		}
		return "???";
	}

	private get VoiceLink () {
		return `${AssetsRoot}/audio/voice-${this.lang}/${this.unitId}_${this.type}.mp3`;
	}

	private render () {
		return <b-row class="dialogue-row my-2 my-sm-0">
			<b-col class={ this.rowClass } cols="12" sm="2">{ this.TypeName }</b-col>
			<b-col class="border dialogue" cols="12" sm="">{ this.Dialogue }</b-col>
			<b-col class="border" cols="12" sm="auto">
				<audio src={ this.VoiceLink } type="audio/mp3" controls preload="none" />
			</b-col>
		</b-row>;
	}
}
</script>

<style lang="scss">
.row.dialogue-row {
	$sm: map-get($grid-breakpoints, "sm");
	margin: 0 0.25rem;

	&:not(:first-child) > div:nth-child(2) {
		border-top: 0 !important;
	}

	> div {
		&:not(:last-child) {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;

			@media (min-width: $sm) {
				border-right: 0 !important;
			}
		}
		&:last-child {
			padding: 0;
		}
	}

	> div:last-child,
	audio {
		width: 100%;
		vertical-align: middle;

		@media (min-width: $sm) {
			width: auto;
			min-width: 300px;
		}
	}

	.dialogue {
		word-break: keep-all;
	}
}
</style>
