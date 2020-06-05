<script lang="tsx">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SkillBound extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private target!: "team" | "enemy";

	@Prop({
		type: String,
		required: true,
	})
	private bound!: "single" | "self" | "global" | string;

	@Prop({
		type: Number,
		default: 0,
	})
	private range!: number;

	@Prop({
		type: Number,
		default: 0,
	})
	private ap!: number;

	@Prop({
		type: Number,
		default: 0,
	})
	private level!: number;

	@Prop({
		type: Boolean,
		default: false,
	})
	private passive!: boolean;

	private get IsGlobal () {
		return this.Bound.global;
	}

	private get Bound () {
		let match = "";
		let offset = 5;
		let global = false;
		const bounds = this.bound.split("\n");

		bounds.forEach(x => {
			if (x.includes(":")) {
				const lv = x.substr(0, x.indexOf(":"));
				if (lv.includes("~")) {
					const from = parseInt(lv.substr(0, lv.indexOf("~")), 10);
					const to = parseInt(lv.substr(lv.indexOf("~") + 1), 10);

					if (from > this.level || this.level > to || (this.level >= 10 && to >= 10)) return;
				} else {
					const ilv = parseInt(lv, 10);
					if (ilv < 10 && this.level !== ilv) return;
					else if (ilv >= 10 && this.level < 10) return;
				}

				match = x.substr(x.indexOf(":") + 1);
			} else
				match = x;

			if (match === "single" || match === "self") {
				offset = 5;
				match = "5";
			} else if (match === "global") {
				offset = 5;
				match = "123456789";
				global = true;
			} else if (match === "fill") {
				offset = 5;
				match = "123456789";
			} else if (match === "around") {
				offset = 5;
				match = "12346789";
			} else if (match.includes(">")) {
				const from = match.substr(0, match.indexOf(">"));
				if (from === "F")
					global = true;
				else
					offset = parseInt(from, 10);

				match = match.substr(match.indexOf(">") + 1);
			}
		});

		return { match, offset, global };
	}

	private get rangeBack () {
		const rangeGrid: JSX.Element[] = [];

		for (let i = 0; i < 6; i++)
			rangeGrid.push(<span class="grid" data-pos={i + 1} />);

		return rangeGrid;
	}

	private get gridBack () {
		const grids: JSX.Element[] = [];

		for (let i = 0; i < 9; i++)
			grids.push(<span class="grid" data-pos={i + 1} />);

		return grids;
	}

	private get rangeCells () {
		const ranges: JSX.Element[] = [];

		for (let i = 0; i < this.range; i++)
			ranges.push(<span class="range" data-pos={i + 1} />);

		return ranges;
	}

	private render () {
		const targets: JSX.Element[] = [];

		const b = this.Bound;
		const t = b.match;
		const offset = b.offset;

		for (let i = 0; i < t.length; i++) {
			// @ 25%, # 50%, $ 75%
			// ^ value 50%, display 25%
			// & value 75%, display 50%
			const c = t[i];

			if (c === "@")
				targets.push(<span class={["target", "target-25", this.target]} data-pos={t[++i]} />);
			else if (c === "#")
				targets.push(<span class={["target", "target-50", this.target]} data-pos={t[++i]} />);
			else if (c === "$")
				targets.push(<span class={["target", "target-75", this.target]} data-pos={t[++i]} />);

			else if (c === "^")
				targets.push(<span class={["target", "target-25", this.target]} data-pos={t[++i]} />);
			else if (c === "&")
				targets.push(<span class={["target", "target-50", this.target]} data-pos={t[++i]} />);

			else
				targets.push(<span class={["target", this.target]} data-pos={c} />);
		}

		return <div class="skill-bound" data-passive={this.passive ? 1 : 0}>
			<div class="skill-range">
				{this.rangeBack}
				{this.rangeCells}
				<div class="skill-range-circle">{this.range}</div>
			</div>

			<div class="skill-ap">
				<div>AP</div> {this.ap}
			</div>

			<div class="skill-grid">
				{this.gridBack}
				{this.IsGlobal ? "" : <span class="offset" data-pos={offset} />}
				{targets}
			</div>

			{this.IsGlobal ? <div class="global-text">고정 범위</div> : ""}
			{this.target === "team" ? <div class="team-text">아군 대상</div> : ""}
		</div>;
	}
}
</script>

<style lang="scss">
.skill-bound {
	$w: 14px;
	$h: ($w / 38) * 34;

	display: inline-block;
	width: 120px;
	text-shadow: 0 0 3px #000, 0 0 2px #000, 0 0 2px #000;

	&.skill-text {
		height: 60px;
	}

	span {
		position: absolute;
		width: $w;
		height: $h;

		background-image: url($assetsRoot+"/skill-parallelogram.png");
		background-repeat: no-repeat;
		background-size: ($w * 9) $h;

		&.offset {
			background-position-x: -$w;
			z-index: 2;
		}
		&.target,
		&.target-50,
		&.target-25 {
			margin-top: -2px;
			margin-left: -2px;
			z-index: 2;
		}
		&.target {
			background-position-x: -($w * 2);
		}
		&.target-75,
		&.target-50 {
			background-position-x: -($w * 3);
		}
		&.target-25 {
			background-position-x: -($w * 4);
		}
		&.range {
			background-position-x: -($w * 5);
		}
		/*
		&.target.team {
			background-position-x: -($w * 6);
		}
		&.target-75.team,
		&.target-50.team {
			background-position-x: -($w * 7);
		}
		&.target-25.team {
			background-position-x: -($w * 8);
		}
		*/
	}

	.skill-range {
		position: relative;
		margin-bottom: 5px;
		height: 24px;

		> span {
			top: 6px;
			@for $i from 0 to 6 {
				&[data-pos="#{$i + 1}"] {
					left: (2px + (($w + 1) * $i));
				}
			}
			&.range {
				margin-left: -2px;
				margin-top: -2px;
			}
		}

		> .skill-range-circle {
			float: right;
			width: 24px;
			height: 24px;
			background-image: url($assetsRoot+"/range-circle.png");
			background-repeat: no-repeat;
			background-size: 24px 24px;
			line-height: 22px;
			text-align: center;
			font-size: 13px;
			color: #ffd91c;
		}
	}

	.skill-ap {
		float: right;
		margin: 2px 10px 0 0;
		line-height: 125%;
		font-weight: bold;
		font-size: 16px;
		color: #00efef;

		> div {
			color: #fff;
		}
	}

	&[data-passive="1"] {
		.skill-range,
		.skill-ap {
			opacity: 0.375;
		}
	}

	.skill-grid {
		position: relative;
		margin: 0 10px;
		width: 52px;
		height: 46px;

		> span {
			$x1: 0px;
			$x2: $w + 2;
			$x3: $x2 * 2;
			$x: $x1 $x2 $x3;

			$y3: 0px;
			$y2: $h + 3;
			$y1: $y2 * 2;
			$y: $y1 $y2 $y3;

			@for $i from 0 to 9 {
				&[data-pos="#{$i + 1}"] {
					top: (2px + nth($y, floor($i / 3) + 1));
					left: (2px + nth($x, ($i % 3) + 1) + floor($i / 3) * 2);
				}
			}
		}
	}

	.global-text {
		float: left;
		padding-left: 10px;
		font-size: 11px;
		text-align: left;
		color: #00efef;
	}
	.team-text {
		float: left;
		padding-left: 76px;
		font-size: 11px;
		text-align: left;
		color: #00efef;
	}
	.global-text + .team-text {
		padding-left: 24px;
	}
}
</style>
