<template>
	<b-card v-if="IsVoiceAvailable" class="mt-2 text-left" no-body :lang="lang">
		<b-card-header v-b-toggle:[CollapseKey]>
			{{ voice.t }}
			<strong v-if="voice.isMarry" class="text-danger pl-4">♥ 서약</strong>
			<b-badge v-if="IsMissing" variant="danger" class="ml-3">대사 정보 없음</b-badge>
			<b-badge v-else-if="IsPartial" variant="warning" class="ml-3">일부 대사 없음</b-badge>
		</b-card-header>
		<b-collapse :id="CollapseKey">
			<b-card-body>
				<dialogue-row
					v-for="type in TypeList"
					:key="`dialogue-${unitId}-${type}`"
					:unit-id="unitId"
					:is-skin="!voice.isDef"
					:type="type"
					:dialogue="Dialogue[type]"
					:lang="lang"
				/>
			</b-card-body>
		</b-collapse>
	</b-card>
	<b-card v-else class="mt-2 text-left unit-dialogue-empty" no-body>
		<b-card-header>
			{{ voice.t }}
			<b-badge variant="secondary" class="ml-3">보이스 없는 스킨</b-badge>
		</b-card-header>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { SkinInfo } from "@/libs/Types";

import { RawUnitDialogue, RawUnitDialogueEntity, UnitDialogueDataType } from "@/libs/Types/Dialogue";
import DialogueDB from "@/libs/DB/Dialogue";

import { Unit } from "@/libs/Types/Unit";

import DialogueRow from "./DialogueRow.vue";

interface VoiceItem extends SkinInfo {
	id: number;
	isDef: boolean;
	isPro: boolean;
	isMarry: boolean;
}

@Component({
	components: {
		DialogueRow,
	},
})
export default class UnitDialogue extends Vue {
	private internalDialogueDB: Record<keyof UnitDialogueDataType, RawUnitDialogue | null> = {
		ko: null,
		jp: null,
	};

	private get DialogueDBKO () {
		if (this.internalDialogueDB.ko) return this.internalDialogueDB.ko;
		return DialogueDB("ko", (x) => {
			this.internalDialogueDB.ko = x;
		});
	}

	private get DialogueDBJP () {
		if (this.internalDialogueDB.jp) return this.internalDialogueDB.jp;
		return DialogueDB("jp", (x) => {
			this.internalDialogueDB.jp = x;
		});
	}

	private DialogueDB (type: keyof UnitDialogueDataType) {
		switch (type) {
			case "ko": return this.DialogueDBKO;
			case "jp": return this.DialogueDBJP;
		}
		return null;
	}

	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	@Prop({
		type: Object,
		required: true,
	})
	private voice!: VoiceItem;

	@Prop({
		type: Number,
		required: true,
	})
	private id!: number;

	@Prop({
		type: String,
		required: true,
	})
	private lang!: keyof UnitDialogueDataType;

	private uid: number = Math.random();

	private get CollapseKey () {
		return `dialogue-${this.uid}`;
	}

	private get TypeList (): Array<keyof RawUnitDialogueEntity> {
		const db = this.DialogueDB(this.lang);
		if (!db) return [];

		if (this.unit.uid in db) {
			const key = ((v) => {
				if (v.isMarry) return "M";
				if (v.isPro) return "P";
				if (v.isDef) return "0";
				return v.id.toString();
			})(this.voice);

			if (key in db[this.unit.uid]) {
				const diag = db[this.unit.uid][key];
				return Object.keys(diag) as Array<keyof RawUnitDialogueEntity>;
			}
		}

		return [
			...(this.voice.isDef && !this.voice.isMarry ? ["Join"] : []),
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
			"SpSkill_1",
			"SpSkill_2",
			"SpSkill_3",
			"SpSkill_4",
			"SpSkill_5",
			"SpSkill_6",
			"SpSkill_7",
			"SpSkill_8",
			"SpSkill_9",
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
		] as Array<keyof RawUnitDialogueEntity>;
	}

	private get Dialogue () {
		const db = this.DialogueDB(this.lang);
		if (db && this.unit.uid in db) {
			const key = ((v) => {
				if (v.isMarry) return "M";
				if (v.isPro) return "P";
				if (v.isDef) return "0";
				return v.id.toString();
			})(this.voice);

			if (key in db[this.unit.uid]) {
				const diag = db[this.unit.uid][key];
				return diag;
			}
		}
		return {
			Join: "???",
			SquadJoin: "???",
			Leader: "???",
			SortiePick: "???",
			StageStart: "???",
			Retreat: "???",
			SearchStart: "???",
			SearchEnd: "???",
			BattleFocus: "???",
			ActionApprove: "???",
			SpSkill: "???",
			SpSkill_2: "???",
			SpSkill_3: "???",
			SpSkill_4: "???",
			SpSkill_5: "???",
			Retire: "???",
			Repair: "???",
			Reinforce: "???",
			ItemEquip: "???",
			CoreLink: "???",
			PresentGet: "???",
			Login: "???",
			Idle_01_01: "???",
			Idle_01_02: "???",
			Idle_01_03: "???",
			SPIdle_01_01: "???",
			Idle_02_01: "???",
			Idle_03_01: "???",
			Idle_04_01: "???",
			SPIdle_02_01: "???",
			Oath: "???",
			OathIdle_01: "???",
			MVP: "???",
		};
	}

	private get IsVoiceAvailable () {
		/*
		if (!(this.unit.id in UnitDialogueData))
			return (this.voice.isMarry && this.unit.marry) || !this.voice.isMarry;

		const key = ((v) => {
			if (v.isMarry) return "M";
			if (v.isPro) return "P";
			if (v.isDef) return "0";
			return v.id.toString();
		})(this.voice);
		if (key in UnitDialogueData[this.unit.id])
			return true;

		return false;
		*/
		return this.voice.V;
	}

	private get IsMissing () {
		const db = this.DialogueDB(this.lang);
		if (!db) return [];

		const AllEmpty = (d: Partial<RawUnitDialogueEntity>) => Object.keys(d).every(x => !d[x as keyof RawUnitDialogueEntity]);
		return !(this.unit.uid in db) || AllEmpty(this.Dialogue);
	}

	private get IsPartial () {
		const db = this.DialogueDB(this.lang);
		if (!db) return [];

		const HasEmpty = (d: Partial<RawUnitDialogueEntity>) => Object.keys(d).some(x => !d[x as keyof RawUnitDialogueEntity]);
		return !(this.unit.uid in db) || HasEmpty(this.Dialogue);
	}

	private get unitId () {
		const uid = this.unit.uid || "";
		const postfix = (() => {
			if (this.voice.isMarry) return "_Marriage";
			if (this.voice.isDef) return "";
			if (this.voice.isPro) return "_PS1";
			return "_NS" + this.id;
		})();

		return `${uid}${postfix}`;
	}
}
</script>

<style lang="scss">
.unit-dialogue-empty {
	opacity: 0.5;
}
</style>
