<script lang="tsx">
import { uniqueId } from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ITEM_TYPE } from "@/libs/Types/Enums";
import UnitData, { Unit } from "@/libs/DB/Unit";
import EquipData, { Equip } from "@/libs/DB/Equip";

import UnitFace from "@/components/UnitFace.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import UnitCard from "@/pages/Units/UnitCard.vue";
import EquipCard from "@/pages/Equips/EquipCard.vue";

@Component({
	components: {
		UnitFace,
		UnitCard,
		EquipIcon,
		EquipCard,
		RarityBadge,
		ElemIcon,
	},
})
export default class SkillDescription extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private text!: string;

	@Prop({
		type: Number,
		required: true,
		validator: (x) => (x >= 1 && x <= 10),
	})
	private level!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

	@Prop({
		type: Boolean,
		default: false,
	})
	private buffBonus!: boolean;

	@Prop({
		type: Number,
		default: false,
	})
	private skillBonus!: number;

	@Prop({
		type: Boolean,
		default: false,
	})
	private loveBonus!: boolean;

	private Link (e: Event, link: string) {
		if (e) e.preventDefault();
		this.$router.push({ path: link });
	}

	private matches (text: string): string[] {
		const brackets = ["[]", "{}", "<>"];
		const part: string[] = [];

		let buffer = "";
		let depth = 0;
		let opener = "";
		let closer = "";

		for (let i = 0, len = text.length; i < len; i++) {
			const c = text[i];

			if (depth === 0) {
				const bracket = brackets.find(x => x[0] === c);
				if (bracket) { // 괄호 찾음
					part.push(buffer);
					buffer = c;

					opener = bracket[0];
					closer = bracket[1];
					depth++;
				} else
					buffer += c;
			} else if (buffer.split("").every(x => x === opener)) // 전부 opener
				buffer += c;
			else if (c === opener) {
				buffer += c;
				depth++;
			} else if (c === closer) {
				buffer += c;
				depth--;
				if (depth === 0) {
					part.push(buffer);
					buffer = "";
				}
			} else
				buffer += c;
		}
		if (buffer) part.push(buffer);

		return part;
	}

	private valueMatches (text: string): string[] {
		const brackets = ["[]", "{}", "<>"];
		const part: string[] = [];

		let buffer = "";
		let depth = 0;
		let opener = "";
		let closer = "";

		for (let i = 0, len = text.length; i < len; i++) {
			const c = text[i];

			if (depth === 0) {
				const bracket = brackets.find(x => x[0] === c);
				if (bracket) { // 괄호 찾음
					buffer += c;

					opener = bracket[0];
					closer = bracket[1];
					depth++;
				} else if (c === ":") {
					part.push(buffer);
					buffer = "";
				} else
					buffer += c;
			} else if (buffer.split("").every(x => x === opener)) // 전부 opener
				buffer += c;
			else if (c === opener) {
				buffer += c;
				depth++;
			} else if (c === closer) {
				buffer += c;
				depth--;
			} else
				buffer += c;
		}
		part.push(buffer);

		return part;
	}

	private parseFlags (flags: string) {
		interface LinkType {
			href: string;
			display: JSX.Element;
			tooltip: JSX.Element;
		}
		const ret = {
			skill: false,
			icons: [] as JSX.Element[],
			link: null as (LinkType | null),
			preload: [] as JSX.Element[],
		};
		if (!flags) return ret;

		flags.split(",")
			.forEach(x => {
				if (x === "@")
					ret.skill = true;
				else if (x === "#fire")
					ret.icons.push(<elem-icon inline elem="fire" />);
				else if (x === "#chill")
					ret.icons.push(<elem-icon inline elem="ice" />);
				else if (x === "#thunder")
					ret.icons.push(<elem-icon inline elem="lightning" />);
				else if (x[0] === "$") {
					const uid = uniqueId("tooltip-target-");
					const p = x.split(";");
					if (p[0] === "$ch") {
						const id = p[1];
						const href = `/units/${id}`;
						const unit = UnitData.find(x => x.uid === id) || Unit.Empty;
						ret.link = {
							href,
							display: <rarity-badge id={uid} rarity="A">{unit.name} 🔗</rarity-badge>,
							tooltip: <b-tooltip target={uid} placement="top" no-fade noninteractive custom-class="badge-tooltip">
								<unit-card unit={unit} no-link />
							</b-tooltip>,
						};
						ret.preload.push(<unit-face id={unit.id} />);
					} else if (p[0] === "$eq") {
						const type = {
							[ITEM_TYPE.CHIP]: "Chip",
							[ITEM_TYPE.SPCHIP]: "System",
							[ITEM_TYPE.SUBEQ]: "Sub",
						} as Record<ITEM_TYPE, string>;
						const equips = EquipData
							.filter(y => `${type[y.type]}_${y.key}` === p[1])
							.sort((a, b) => b.rarity - a.rarity);

						let equip: Equip | null = null;
						if (equips.length) equip = equips[0];

						const href = `/equips/${equip ? equip.fullKey : p[1]}`;
						const name = equip ? equip.name.replace(/ (RE|MP|SP|EX)$/, "") : p[1];
						ret.link = {
							href,
							display: <rarity-badge id={uid} rarity="A">{name} 🔗</rarity-badge>,
							tooltip: <b-tooltip target={uid} placement="top" no-fade noninteractive custom-class="badge-tooltip">
								<equip-card equip={equip} no-link />
							</b-tooltip>,
						};
						ret.preload.push(<equip-icon id={equip ? equip.fullKey : p[1]} />);
					}
				}
			});
		return ret;
	}

	private compile (text: string, strip: boolean = false): Array<JSX.Element[] | JSX.Element | string> {
		if (!text) return [];

		const funclist = [Math.floor, Math.round, Math.ceil];

		return this
			.matches(text)
			.filter(x => x)
			.map(x => {
				if (x[0] === "[") {
					const part = this.valueMatches(x.substr(1, x.length - 2));
					const { prefix, postfix, flags, oValue } = (() => {
						if (part.length === 1) {
							return {
								flags: this.parseFlags(part[0]),
								prefix: "",
								postfix: "",
								oValue: "",
							};
						}

						const offset = part.length === 4 ? 1 : 0;
						return {
							flags: offset === 1 ? this.parseFlags(part[0]) : this.parseFlags(""),
							prefix: this.compile(part[offset], true),
							postfix: this.compile(part[offset + 2], true),
							oValue: part[offset + 1],
						};
					})();

					if (!oValue) {
						const link = flags.link;
						return link
							? [
								<a href={link.href} onClick={(e: Event) => this.Link(e, link.href)}>
									{flags.icons}
									{link.display}
								</a>,
								link.tooltip,
								<div class="preload-area">{flags.preload}</div>,
							]
							: <span>
								{flags.icons}
								<div class="preload-area">{flags.preload}</div>
							</span>;
					}

					const func = ((x: string) => {
						if (x === "F") return Math.floor;
						else if (x === "R") return Math.round;
						else if (x === "C") return Math.ceil;
						else return (y: number) => y;
					})(oValue[0]);

					const basis = ((x) => {
						if (funclist.includes(func))
							return parseFloat(x.substr(1));
						else
							return parseFloat(x);
					})(oValue.split("~")[0]);

					const incPart = oValue.split("~")[1].split("/");
					const inc = (lv: number) => {
						let val = 0;

						if (incPart.length === 1)
							return parseFloat(incPart[0]) * lv;

						for (let i = 0; i < lv; i++)
							val += parseFloat(incPart[i % incPart.length]);
						return val;
					};
					const value = func(
						basis +
						inc(
							this.level +
							(this.buffBonus && !flags.skill ? 2 : 0) +
							(this.loveBonus && !flags.skill ? 1 : 0),
						) +
						(flags.skill ? this.skillBonus / 100 : 0),
					);

					const signF = (x: string | Array<string | JSX.Element | JSX.Element[]>) => {
						if (Array.isArray(x)) {
							let ret = "";
							x.forEach(y => {
								if (typeof y !== "string") return;
								ret = ret || signF(y);
							});
							return ret;
						}

						if (x.length > 0) {
							const c = x[x.length - 1];
							if (c === "+") return "+";
							else if (c === "-") return "-";
						}
						return "";
					};
					const sign = signF(prefix);

					if (strip) {
						return <span class="subtree">
							{flags.icons}
							{prefix}
							<span class="skill-value" data-sign={sign}>{value.toFixed(10).replace(/\.?0+$/, "")}</span>
							{postfix}
						</span>;
					} else {
						return <rarity-badge rarity="S">
							{flags.icons}
							{prefix}
							<span class="skill-value" data-sign={sign}>{value.toFixed(10).replace(/\.?0+$/, "")}</span>
							{postfix}
						</rarity-badge>;
					}
				} else if (x[0] === "<") {
					if (x[1] === "<") {
						const sub = this.compile(x.substr(2, x.length - 3), true);

						if (strip)
							return <span class="subtree">{sub}</span>;
						else
							return <rarity-badge rarity="B">{sub}</rarity-badge>;
					} else {
						const sub = this.compile(x.substr(1, x.length - 2), true);

						if (strip)
							return <span class="subtree">{sub}</span>;
						else
							return <rarity-badge rarity="B">&lt;{sub}&gt;</rarity-badge>;
					}
				} else if (x[0] === "{") {
					const sub = this.compile(x.substr(1, x.length - 2), true);

					if (strip)
						return <span class="subtree">{sub}</span>;
					else
						return <b-badge variant="primary">{sub}</b-badge>;
				}

				return x;
			});
	}

	private render () {
		const list = this.compile(this.text);
		return <span class="skill-description">{list}</span>;
	}
}
</script>

<style lang="scss">
.skill-description {
	.skill-value {
		color: $info;

		&[data-sign="+"] {
			color: $primary;
		}
		&[data-sign="-"] {
			color: $danger;
		}
	}
	.subtree {
		padding: 0 2px;
		background-color: transparentize(theme-color("danger"), 0.78);
	}
	.preload-area {
		position: absolute;
		display: inline-block;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		pointer-events: none;
		opacity: 0.000001;
	}
}
.tooltip.b-tooltip.badge-tooltip {
	opacity: 1;

	> .tooltip-inner,
	> .tooltip-inner > * {
		pointer-events: none;
	}
}
</style>
