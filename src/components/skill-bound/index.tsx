import { Fragment, FunctionalComponent, h } from "preact";

import { SkillEntryData, SkillEntity } from "@/types/DB/Skill";

import Locale from "@/components/locale";

import "./style.scss";

interface BoundData {
	match: string;
	offset: number;
	global: boolean;
}

interface SkillBoundProps {
	target: "team" | "enemy";
	buffs: SkillEntryData | SkillEntity["buffs"];
	level: number;
	passive: boolean;
	rangeBonus: boolean;
}

const SkillBound: FunctionalComponent<SkillBoundProps> = ({ target, buffs, level, passive, rangeBonus }) => {
	const Skill = "index" in buffs
		? buffs.data[buffs.index[level - 1]]
		: buffs;

	const AP = Skill.ap;
	const Range = Skill.range;

	const Bound = ((): BoundData => {
		let match = Skill.grid;
		let offset = 5;
		let global = false;

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
		return { match, offset, global };
	})();

	const IsGlobal = Bound.global;

	const rangeBack = new Array(6)
		.fill(0)
		.map((_, i) => <span class="grid" data-pos={ i + 1 } />);

	const gridBack = new Array(9)
		.fill(0)
		.map((_, i) => <span class="grid" data-pos={ i + 1 } />);

	const rangeCells = new Array(Math.min(Range + (Range > 0 && rangeBonus ? 1 : 0), 6))
		.fill(0)
		.map((_, i) => <span class="range" data-pos={ i + 1 } />);

	const targets: preact.VNode[] = [];

	const t = Bound.match;
	const offset = Bound.offset;

	for (let i = 0; i < t.length; i++) {
		// @ 25%, # 50%, $ 75%
		// ^ value 50%, display 25%
		// & value 75%, display 50%
		const c = t[i];

		const cTable: Record<string, number> = {
			"@": 25,
			"#": 50,
			$: 75,
		};
		if (c in cTable)
			targets.push(<span class={ `target target-${cTable[c]} ${target}` } data-pos={ t[++i] } />);
		else
			targets.push(<span class={ `target ${target}` } data-pos={ c } />);
	}

	return <div class="skill-bound" data-passive={ passive ? 1 : 0 }>
		<div class="skill-range">
			{ rangeBack }
			{ rangeCells }
			{
				rangeBonus && Range > 0
					? <div class="skill-range-circle bonused">{ Range + 1 }</div>
					: <div class="skill-range-circle">{ Range }</div>
			}
		</div>

		<div class="skill-ap">
			<div class="me-1">AP</div>
			{ AP }
		</div>

		<div class="skill-grid">
			{ gridBack }
			{ IsGlobal
				? <Fragment />
				: <span class="offset" data-pos={ offset } />
			}
			{ targets }
		</div>

		{ IsGlobal
			? <div class="global-text">
				<Locale k="UNIT_SKILL_BOUND_FIXED" />
			</div>
			: <Fragment />
		}
		{ target === "team"
			? <div class="team-text">
				{ Skill.grid === "self"
					? <Locale k="UNIT_SKILL_BOUND_SELF" />
					: <Locale k="UNIT_SKILL_BOUND_TEAM" />
				}
			</div>
			: <Fragment />
		}
	</div>;
};
export default SkillBound;
