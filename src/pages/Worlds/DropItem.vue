<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";

import { FormatNumber } from "@/libs/Functions";
import { _e } from "@/libs/VNode";

import { Consumable } from "@/libs/Types/Consumable";

@Component({
	components: {
		EquipIcon,
	},
})
export default class DropItem extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private item!: Consumable;

	@Prop({
		type: Number,
		default: 1,
	})
	private count!: number;

	@Prop({
		type: Number,
		default: 100,
	})
	private chance!: number;

	@Prop({
		type: String,
		default: "secondary",
	})
	private variant!: string;

	@Prop({
		type: String,
		default: "light",
	})
	private text!: string;

	private display: boolean = false;

	private get ParsedDesc () {
		const ret: JSX.Element[] = [];

		const parseBuffer: string[] = [];
		const parseMode: string[] = [];
		let parseDepth = 0;
		let parsePhase = 0;
		const parseColor: string[] = [];
		let parseItalic = false;

		function color () {
			function m (c: string, a: boolean) {
				return parseInt(c, 16) / (a ? 255 : 1);
			}

			const c = parseColor[parseColor.length - 1];
			if (c.length === 8) {
				const b = m(c.substr(0, 2), false);
				const g = m(c.substr(2, 2), false);
				const r = m(c.substr(4, 2), false);
				const a = m(c.substr(6, 2), true);
				return `rgba(${r},${g},${b},${a})`;
			} else
				return `#${c}`;
		}

		function parseText (text: string): Array<JSX.Element | string> {
			const ret: Array<JSX.Element | string> = [];

			for (let i = 0; i < text.length; i++) {
				const c = text[i];

				switch (parsePhase) {
					case 0: // Idle
						if (c === "[") {
							if (parseBuffer.length > 0) {
								const text = parseBuffer.join("")
									.split(/(\{[0-9]+\})/g)
									.filter(x => typeof x === "string");
								parseBuffer.splice(0, parseBuffer.length);

								if (parseColor.length > 0) {
									if (parseItalic)
										ret.push(<i style={ { color: color() } }>{ text }</i>);
									else
										ret.push(<span style={ { color: color() } }>{ text }</span>);
								} else {
									if (parseItalic)
										ret.push(<i>{ text }</i>);
									else
										ret.push(...text);
								}
							}

							parsePhase = 1;
						} else
							parseBuffer.push(c);
						break;
					case 1: // Tag Parsing
						if (c === "]") {
							const tag = parseBuffer.join("");
							parseBuffer.splice(0, parseBuffer.length);
							parsePhase = 0;

							if (tag === "-") {
								if (parseColor.length > 0)
									parseColor.pop();
							} else if (tag === "i")
								parseItalic = true;
							else if (parseMode[parseMode.length - 1] === "c")
								parseColor.push(tag);
							else if (tag[0] === "/") {
								const ctag = tag.substr(1);
								while (parseMode.pop() !== ctag);

								if (ctag === "c")
									parseColor.pop();
								else if (ctag === "i")
									parseItalic = false;
							} else {
								parseMode.push(tag);
								parseDepth++;
							}
						} else
							parseBuffer.push(c);
						break;
				}
			}
			if (parseBuffer.length > 0) {
				const text = parseBuffer.join("")
					.split(/(\{[0-9]+\})/g)
					.filter(x => typeof x === "string");
				parseBuffer.splice(0, parseBuffer.length);

				if (parseColor.length > 0) {
					if (parseItalic)
						ret.push(<i style={ { color: color() } }>{ text }</i>);
					else
						ret.push(<span style={ { color: color() } }>{ text }</span>);
				} else {
					if (parseItalic)
						ret.push(<i>{ text }</i>);
					else
						ret.push(...text);
				}
			}
			return ret;
		}

		return parseText(this.item.desc);
	}

	private get FunctionBadge () {
		if (["TestFunction_04", "GiveFavor_02", "GiveFavor_03"].includes(this.item.func)) { // 호감도
			const favorTable: Record<string, number> = {
				TestFunction_04: 1,
				GiveFavor_02: 2.5,
				GiveFavor_03: 5,
			};
			return <b-badge variant="danger">♥ 기본 호감도 +{ favorTable[this.item.func].toFixed(2) }</b-badge>;
		} else if (["MaxFavor_Expand_Lv1"].includes(this.item.func)) { // 호감도 상한
			const favorLimitTable: Record<string, number> = {
				MaxFavor_Expand_Lv1: 10,
			};
			return <b-badge variant="danger">♥ 호감도 상한 +{ favorLimitTable[this.item.func].toFixed(2) }</b-badge>;
		} else if (this.item.func === "Consumable_CommanderDiary") { // 사령관의 일지
			return [
				<b-badge variant="warning">전투원 경험치 +15,000,000</b-badge>,
				<b-badge variant="success" class="mx-1">스킬 경험치 +284,000</b-badge>,
				<b-badge variant="danger">♥ 호감도 +200.00</b-badge>,
			];
		} else if (["TacticRecord_01", "TacticRecord_02", "TacticRecord_03"].includes(this.item.func)) { // 경험치 교본
			const expTable: Record<string, number> = {
				TacticRecord_01: 3000,
				TacticRecord_02: 100000,
				TacticRecord_03: 1000000,
			};
			return <b-badge variant="warning">전투원 경험치 +{ FormatNumber(expTable[this.item.func]) }</b-badge>;
		} else if (["TrainingManual_01", "TrainingManual_02", "TrainingManual_03"].includes(this.item.func)) { // 스킬 교본
			const expTable: Record<string, number> = {
				TrainingManual_01: 1000,
				TrainingManual_02: 10000,
				TrainingManual_03: 100000,
			};
			return <b-badge variant="success">스킬 경험치 +{ FormatNumber(expTable[this.item.func]) }</b-badge>;
		}

		return null;
	}

	private render () {
		return <div class="drop-item p-2 text-dark">
			<b-card bg-variant={ this.variant } text-variant={ this.text }>
				<equip-icon class="float-left mr-2" image={ this.item.icon } />
				<div class="text-left">
					{ this.item.name }

					{ this.count > 1 ? <b-badge variant="dark" class="ml-1">x{ this.count }</b-badge> : _e() }
					<div>
						{ this.chance < 100 ? <b-badge variant={ this.variant }>({ this.chance }%)</b-badge> : _e() }
						<b-icon-info-circle-fill class="float-right mt-1" />
					</div>
				</div>

				<a href="#" class="stretched-link" onClick={ (e: Event) => {
					e.preventDefault();
					this.display = true;
				} } />
			</b-card>

			<b-modal
				v-model={ this.display }
				content-class="item-modal"
				centered
				footer-bg-variant="dark"
				footer-text-variant="white"
				footer-class="text-left"
				ok-disabled
				cancel-disabled
			>
				<template slot="modal-title">
					<div class="text-left">
						{ this.item.name }
						<div style="font-size: 60%">{ this.item.key }</div>
					</div>
				</template>

				<div class="text-center">
					<equip-icon image={ this.item.icon } size="large" />
					<h5 class="mt-1">{ this.item.name }</h5>
				</div>
				<template slot="modal-footer">
					<div class="text-left desc-text p-2">
						{ this.ParsedDesc }
						{ this.FunctionBadge ? <div>{ this.FunctionBadge }</div> : _e() }
					</div>
				</template>
			</b-modal>
		</div>;
	}
}
</script>

<style lang="scss">
.drop-item {
	word-break: keep-all;
	user-select: none;
	cursor: pointer;

	.equip-icon {
		background-color: transparentize(#000, 0.8);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
}
.item-modal {
	.equip-icon {
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	.modal-footer {
		justify-content: flex-start;
	}
	.desc-text {
		word-break: keep-all;
		white-space: pre-line;
	}
}
</style>
