<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import RarityBadge from "@/components/RarityBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";

@Component({
	components: {
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
		const ret = {
			skill: false,
			icons: [] as JSX.Element[],
		};
		if (!flags) return ret;

		flags.split(",")
			.forEach(x => {
				if (x === "@")
					ret.skill = true;
				else if (x === "#fire")
					ret.icons.push(<elem-icon inline elem="fire" />);
				else if (x === "#chill")
					ret.icons.push(<elem-icon inline elem="chill" />);
				else if (x === "#thunder")
					ret.icons.push(<elem-icon inline elem="thunder" />);
			});
		return ret;
	}

	private compile (text: string, strip: boolean = false): Array<JSX.Element | string> {
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

					if (!oValue)
						return <span>{flags.icons}</span>;

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
					const value = func((basis + inc(
						this.level +
						(this.buffBonus && !flags.skill ? 2 : 0) +
						(this.loveBonus && !flags.skill ? 1 : 0),
					)) * (1 + (flags.skill ? this.skillBonus / 100 : 0)));

					if (strip) {
						return <span class="subtree">
							{flags.icons}
							{prefix}
							<span class="skill-value">{value.toFixed(10).replace(/\.?0+$/, "")}</span>
							{postfix}
						</span>;
					} else {
						return <rarity-badge rarity="S">
							{flags.icons}
							{prefix}
							<span class="skill-value">{value.toFixed(10).replace(/\.?0+$/, "")}</span>
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
		color: $danger;
	}
	.subtree {
		padding: 0 2px;
		background-color: transparentize(theme-color("danger"), 0.78);
	}
}
</style>
