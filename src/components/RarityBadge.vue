<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Rarity } from "@/libs/Types";
import { ACTOR_GRADE } from "@/libs/Types/Enums";

const rarityTable: Record<ACTOR_GRADE, string> = {
	[ACTOR_GRADE.B]: "B",
	[ACTOR_GRADE.A]: "A",
	[ACTOR_GRADE.S]: "S",
	[ACTOR_GRADE.SS]: "SS",
};

@Component({})
export default class RarityBadge extends Vue {
	@Prop({
		type: [String, Number],
		required: true,
	})
	private rarity!: Rarity | ACTOR_GRADE;

	@Prop({
		type: String,
		default: "normal",
	})
	private size!: string;

	@Prop({
		type: Boolean,
		default: false,
	})
	private border!: boolean;

	private render () {
		const rarity = typeof this.rarity === "string"
			? this.rarity
			: rarityTable[this.rarity];

		return <b-badge variant="light" class={["rarity-badge", this.border ? "bordered" : ""]} data-rarity={rarity} data-size={this.size}>
			{this.$slots.default || rarity}
		</b-badge>;
	}
}
</script>

<style lang="scss">
.badge.rarity-badge {
	margin-right: 2px;
	font-size: 75%;
	color: #000;

	&.bordered {
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
	}

	&:last-child {
		margin-right: 0 !important;
	}

	&[data-rarity="B"],
	&[data-rarity="b"] {
		background-color: #e2f0d9;
	}
	&[data-rarity="A"],
	&[data-rarity="a"] {
		background-color: #deebf7;
	}
	&[data-rarity="S"],
	&[data-rarity="s"] {
		background-color: #fff2cc;
	}
	&[data-rarity="SS"],
	&[data-rarity="ss"] {
		background-color: #fce391;
	}

	&[data-size="medium"] {
		margin-right: 6px;
		font-size: 100%;
	}
	&[data-size="large"] {
		margin-right: 10px;
		font-size: 120%;
	}
}
</style>
