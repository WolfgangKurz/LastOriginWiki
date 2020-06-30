<template>
	<b-card class="mt-2 text-left" no-body>
		<b-card-header v-b-toggle:[CollapseKey]>{{skin.t}}</b-card-header>
		<b-collapse :id="CollapseKey" :visible="id === 0">
			<b-card-body>
				<dialogue-row
					v-for="type in TypeList"
					:key="`dialogue-${unitId}-${type}`"
					:unit-id="unitId"
					:type="type"
					:dialogue="Dialogue[type]"
				/>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { SkinInfo, Unit } from "@/libs/Types";

import DialogueRow from "./DialogueRow.vue";

interface SkinItem extends SkinInfo {
	isDef: boolean;
	isPro: boolean;
}

@Component({
	components: {
		DialogueRow,
	},
})
export default class UnitDialogue extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	@Prop({
		type: Object,
		required: true,
	})
	private skin!: SkinItem;

	@Prop({
		type: Number,
		required: true,
	})
	private id!: number;

	private get CollapseKey () {
		return `dialogue-${this.id}`;
	}

	private get TypeList () {
		return [
			...(this.skin.isDef ? ["Join"] : []),
			"SquadJoin",
			"Leader",

			"SortiePick",
			"StageStart",
			"Retreat",
			"SearchStart",
			"SearchEnd",

			"BattleFocus",
			"ActionApprove",
			"SpSkill",
			"Retire",
			"Repair",
			"Reinforce",
			"ItemEquip",
			"CoreLink",
			"PresentGet",

			"Login",
			"Idle_01_01",
			"Idle_01_02",
			"Idle_01_03",
			"SPIdle_01_01",
			"Idle_02_01",
			"Idle_03_01",
			"Idle_04_01",
			"SPIdle_02_01",

			"Oath",
			"OathIdle_01",
			"MVP",
		];
	}

	private get Dialogue () {
		return {
			Join: "내 이름은 에키드나. 당신 눈빛이 마음에 드는데?",
			SquadJoin: "그래, 원한다면…",
			Leader: "누굴 부리는 것 만큼… 재밌는 것도 없지.",
			SortiePick: "마침 심심하던 참이었어.",
			StageStart: "어떤 방식으로… 죽여줄까?",
			Retreat: "너희들… 운이 좋구나?",
			SearchStart: "후훗… 당신도 갖고 싶은 건 있나봐…?",
			SearchEnd: "후후후… 어때? 이제 만족했어?",
			BattleFocus: "그래, 말해봐…",
			ActionApprove: "그것뿐이야?",
			SpSkill: "여긴 내 구역인데..?",
			Retire: "분해… 너무… 분해…!",
			Repair: "날… 내려다…보지 마…",
			Reinforce: "인간들은 어쩜 이렇게 욕심이 많을까…?",
			ItemEquip: "후훗… 직접 달아줄 용기는… 없나봐?",
			CoreLink: "아직도 실험할 게 남았나…?",
			PresentGet: "설마… 이게 끝은… 아니겠지?",
			Login: "여긴 너무 무료해… 날 좀 더… 즐겁게 해 줄 수 있어?",
			Idle_01_01: "거기서부터는 내 영역이야. 내게 다가올 생각이라면, 용기를 좀 더 내야 할걸?",
			Idle_01_02: "으음…그렇게 넋 놓고 있다간… 내가 한입에 먹어 버릴지도 몰라. 후훗.",
			Idle_01_03: "날 만족시켜줄 수만 있다면 그게 뭐든 상관없어. 그게 전투든, 끈적한 관계든…후훗…",
			SPIdle_01_01: "당신… 손버릇이 나쁘구나?",
			Idle_02_01: "난 수많은 실패작들을 밟고 여기까지 올라왔지. 당신은 이런 날 어떻게 생각해?",
			Idle_03_01: "하아… 당신은 이제 내 거야. 살아서도… 죽어서도… 절대 놓치지 않겠어.",
			Idle_04_01: "당신을 만나고… 생각이 조금 바뀌었어. 날 만족시켜 줄 수 있는 건…역시 당신뿐이야.",
			SPIdle_02_01: "아아… 그래… 우린 제법 잘 어울릴 거야… 당신도… 그렇게 생각하고 있지?",
			Oath: "하~ 당신, 정말 능숙하구나 싸움도 여자도. 아무튼 이렇게 멋지게 자라줘서 고마워. 그럼 이제 천천히 맛 볼 일만 남았네?",
			OathIdle_01: "맞아. 난 당신을 꼭 가져야만 했어. 그래서 지금 내가 만족하고 있냐고? 으흥 글쎄?",
			MVP: "이것이 내게 허락된 힘.",
		};
	}

	private get unitId () {
		const postfix = this.skin.isDef
			? ""
			: this.skin.isPro
				? "_PS1"
				: "_NS" + this.id;

		return `BR_Echidna${postfix}`;
	}
}
</script>

<style lang="scss">
</style>
