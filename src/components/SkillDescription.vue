<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import RarityBadge from "@/components/RarityBadge.vue";

@Component({
	components: {
		RarityBadge,
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
	})
	private level!: number;

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
		if (buffer) part.push(buffer);

		return part;
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
					const prefix = this.compile(part[0], true);
					const postfix = this.compile(part[2], true);

					const func = ((x: string) => {
						if (x === "F") return Math.floor;
						else if (x === "R") return Math.round;
						else if (x === "C") return Math.ceil;
						else return (y: number) => y;
					})(part[1][0]);

					const basis = ((x) => {
						if (funclist.includes(func))
							return parseFloat(x.substr(1));
						else
							return parseFloat(x);
					})(part[1].split("~")[0]);

					const incPart = part[1].split("~")[1].split("/");
					const inc = (lv: number) => {
						let val = 0;
						for (let i = 0; i < lv; i++) {
							if (incPart.length === 1)
								val += parseFloat(incPart[0]);
							else
								val += parseFloat(incPart[i % incPart.length]);
						}
						return val;
					};
					const value = func(basis + inc(this.level));

					if (strip) {
						return <span>
							{prefix}
							<span class="skill-value">{value.toFixed(10).replace(/\.?0+$/, "")}</span>
							{postfix}
						</span>;
					} else {
						return <rarity-badge rarity="S">
							{prefix}
							<span class="skill-value">{value.toFixed(10).replace(/\.?0+$/, "")}</span>
							{postfix}
						</rarity-badge>;
					}
				} else if (x[0] === "<") {
					if (x[1] === "<") {
						const sub = this.compile(x.substr(2, x.length - 3), true);

						if (strip)
							return <span>{sub}</span>;
						else
							return <rarity-badge rarity="B">{sub}</rarity-badge>;
					} else {
						const sub = this.compile(x.substr(1, x.length - 2), true);

						if (strip)
							return <span>{sub}</span>;
						else
							return <rarity-badge rarity="B">&lt;{sub}&gt;</rarity-badge>;
					}
				} else if (x[0] === "{") {
					const sub = this.compile(x.substr(1, x.length - 2), true);

					if (strip)
						return <span>{sub}</span>;
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
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

.skill-description {
	.skill-value {
		color: $danger;
	}
}
</style>
