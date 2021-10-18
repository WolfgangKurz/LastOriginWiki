import Decimal from "decimal.js";
import { FunctionalComponent } from "preact";

import { SkillEntryData, SkillEntity } from "@/types/DB/Skill";

import { objState } from "@/libs/State";
import { groupBy, isActive } from "@/libs/Functions";

import Locale from "@/components/locale";

import "./style.scss";

interface BoundData {
	match: string;
	offset: number;
	global: boolean;
}

interface BoundListEntity {
	level: number;
	bound: BoundData;
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

	function GetBound (skill: SkillEntryData): BoundData {
		let match = skill.grid;
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
	}
	const BoundList = "index" in buffs
		? ((): BoundListEntity[] => {
			const indicies: number[] = [];
			const ret: BoundListEntity[] = [];
			for (let i = 0; i < 10; i++) {
				const idx = buffs.index[i];
				if (indicies.includes(idx)) continue;

				indicies.push(idx);
				ret.push({
					level: i,
					bound: GetBound(buffs.data[idx]),
				});
			}
			return ret.reduce((p, c) => {
				if (p.some(x => c.bound.global === x.bound.global &&
					c.bound.match === x.bound.match &&
					c.bound.offset === x.bound.offset)) return p;
				return [...p, c];
			}, [] as BoundListEntity[]);
		})()
		: [{
			level: 1,
			bound: GetBound(Skill),
		}];

	const prevLevel = objState<number>(level);

	const currentBoundLevel = objState<number>(BoundList.length - 1);
	const Bound = BoundList[Math.min(BoundList.length - 1, currentBoundLevel.value)].bound;

	if (prevLevel.value !== level) {
		prevLevel.set(level);

		for (let i = 0; i < BoundList.length; i++) {
			const item = BoundList[i];

			if (level >= item.level + 1)
				currentBoundLevel.set(i);
		}
	}

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

	const t = Bound.match.split(",").filter(x => x !== "0");
	const offset = Bound.offset;

	for (let i = 0; i < t.length; i++) {
		const c = t[i];
		const v = Decimal.mul(100, c).toString();
		targets.push(<span class={ `target target-${v} ${target}` } data-pos={ i + 1 } />);
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
				? <></>
				: <span class="offset" data-pos={ offset } />
			}
			{ targets }
		</div>

		{ IsGlobal
			? <div class="global-text">
				<Locale k="UNIT_SKILL_BOUND_FIXED" />
			</div>
			: <></>
		}
		{ target === "team"
			? <div class="team-text">
				{ Skill.grid === "self"
					? <Locale k="UNIT_SKILL_BOUND_SELF" />
					: <Locale k="UNIT_SKILL_BOUND_TEAM" />
				}
			</div>
			: <></>
		}

		{ BoundList.length > 1
			? Object.values(groupBy(BoundList, (v, i) => Math.floor(i / 3)))
				.map(g => <div class="level-selector btn-group">
					{ g.map((x, i) => <button
						class={ `btn btn-sm btn-outline-light ${isActive(currentBoundLevel.value === i)}` }
						onClick={ (e): void => {
							e.preventDefault();
							e.stopPropagation();
							currentBoundLevel.set(i);
						} }
					>
						Lv.<strong>{ x.level + 1 }</strong>
					</button>) }
				</div>)
			: <></>
		}
	</div>;
};
export default SkillBound;
