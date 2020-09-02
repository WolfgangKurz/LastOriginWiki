<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Rarity, LRarity } from "@/libs/Types";

@Component({})
export default class RarityBadge extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private rarity!: LRarity | Rarity;

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
		return <b-badge variant="light" class={["rarity-badge", this.border ? "bordered" : ""]} data-rarity={this.rarity} data-size={this.size}>
			{this.$slots.default || this.rarity.toUpperCase()}
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
