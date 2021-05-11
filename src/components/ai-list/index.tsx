import { Fragment, FunctionalComponent, h } from "preact";

import { AI, AIAction, AICondition, AIContainer, AIFilter, AIFunc, AIPosPositive, AIPosSpecific, AITarget } from "@/types/DB/AI";
import { SkillEntity } from "@/types/DB/Skill";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

const toSortTable: Record<AITarget, number> = {
	near: -3,
	far: -3,
	rand: -3,

	back: -2,
	middle: -2,
	front: -2,
	lower: -2,
	midrow: -2,
	upper: -2,

	$AtkHighest: -1,
	$HPHighest: -1,
	$APHighest: -1,
	$DefenseHighest: -1,
	$HPLow: -1,

	light: 0,
	air: 0,
	heavy: 0,

	attacker: 1,
	defender: 1,
	supporter: 1,

	team: 2,
	enemy: 2,
	self: 2,

	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
};

interface AIListProps {
	enemy: boolean;
	ai: AI[];
	skills: SkillEntity[];
}

const AIList: FunctionalComponent<AIListProps> = (props) => {
	const UnknownFragment = <Fragment>???</Fragment>;

	return <Loader json={ [StaticDB.FilterableEnemy, StaticDB.FilterableUnit] } content={ ((): preact.VNode => {
		const FilterableUnitData = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
		const FilterableEnemyData = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

		const superscript = [
			<sup class="me-1" />,
			<sup class="me-1">⑴</sup>,
			<sup class="me-1">⑵</sup>,
			<sup class="me-1">⑶</sup>,
			<sup class="me-1">⑷</sup>,
			<sup class="me-1">⑸</sup>,
			<sup class="me-1">⑹</sup>,
			<sup class="me-1">⑺</sup>,
			<sup class="me-1">⑻</sup>,
		];
		const List = props.ai;
		const skills = props.skills;

		function buildTo (to: AITarget[][], progressive: boolean = false, variant: string = "danger"): Array<preact.VNode> {
			function compile (to: AITarget | string): preact.VNode {
				switch (to) {
					case "team": return <Locale k="AITARGET_TEAM" />;
					case "enemy": return <Locale k="AITARGET_ENEMY" />;
					case "self": return <Locale k="AITARGET_SELF" />;

					case "near": return <Locale k="AITARGET_NEAR" />;
					case "far": return <Locale k="AITARGET_FAR" />;
					case "rand": return <Locale k="AITARGET_RAND" />;

					case "front": return <Locale k="AITARGET_FRONTROW" />;
					case "middle": return <Locale k="AITARGET_MIDROW" />;
					case "back": return <Locale k="AITARGET_BACKROW" />;
					case "upper": return <Locale k="AITARGET_UPPER" />;
					case "midrow": return <Locale k="AITARGET_MIDCOL" />;
					case "lower": return <Locale k="AITARGET_LOWER" />;

					case "light": return <Locale k="AITARGET_LIGHT" />;
					case "air": return <Locale k="AITARGET_MOBILITY" />;
					case "heavy": return <Locale k="AITARGET_HEAVY" />;
					case "attacker": return <Locale k="AITARGET_ATTACKER" />;
					case "defender": return <Locale k="AITARGET_DEFENDER" />;
					case "supporter": return <Locale k="AITARGET_SUPPORTER" />;

					case "$AtkHighest": return <Locale k="AITARGET_HIGHEST_ATK" />;
					case "$HPHighest": return <Locale k="AITARGET_HIGHEST_HP" />;
					case "$APHighest": return <Locale k="AITARGET_HIGHEST_AP" />;
					case "$DefenseHighest": return <Locale k="AITARGET_HIGHEST_DEF" />;
					case "$HPLow": return <Locale k="AITARGET_LOWEST_HP" />;

					case 1: case 2: case 3:
					case 4: case 5: case 6:
					case 7: case 8: case 9:
						if (props.enemy)
							return <Locale k={ `AITARGET_POS_${to}` } />;
						return <Locale k={ `AITARGET_POS_${Math.floor(to / 3) * 3 + 2 - (to % 3)}` } />;
				}

				if (to.startsWith("Effect_"))
					return <Locale k="AITARGET_ENEMY_HAS_BUFF" p={ [<Locale k={ to } fallback="???" />] } />;

				else if (to.startsWith("MP_")) {
					const enemy = FilterableEnemyData.find(z => `MP_${z.id}` === to);
					return enemy
						? <Locale k={ `ENEMY_${enemy.id}` } />
						: UnknownFragment;

				} else if (to.startsWith("Char_")) {
					const unit = FilterableUnitData.find(z => `Char_${z.uid}` === to);
					return unit
						? <Locale k={ `UNIT_${unit.uid}` } />
						: UnknownFragment;
				}
				return UnknownFragment;
			}

			const entities: preact.VNode[] = [];
			to.forEach(x => {
				entities.push(<Fragment>{
					x
						.sort((a, b) => toSortTable[a] - toSortTable[b])
						.map(_ => compile(_))
						.gap(" ")
				}</Fragment>);
			});

			return entities
				.map(x => <span class={ `badge bg-${variant}` }>{ x }</span>)
				.gap(progressive ? <Icon icon="arrow-right-short" /> : <Locale k="AIJOIN_OR" />);
		}

		function buildFunc (func: AIFunc, value: number, postfix: string = ""): preact.VNode {
			const t = value + postfix;
			return <Locale k={ `AIFUNC_${func}` } fallback="???" p={ [t] } />;
		}

		function buildFilter (filter: AIFilter): preact.VNode {
			switch (filter.type) {
				case "row":
					return <Locale k="AIFILTER_ROW" p={ [buildFunc(filter.func, filter.cnt)] } />;
				case "count":
					return <Locale k="AIFILTER_COUNT" p={ [buildFunc(filter.func, filter.cnt)] } />;
			}
		}

		function buildIf (ifs: AICondition[]): preact.VNode {
			const t: preact.VNode[] = ifs.map(cond => {
				switch (cond.type) {
					case "attacked":
						return <Locale k="AIIF_ATTACKED" />;
					case "canuse":
						return ((): preact.VNode => {
							const skill = skills[cond.skill - 1];
							const name = skill
								? <Fragment>
									{ superscript[cond.skill] }
									<Locale k={ skill.key } />
								</Fragment>
								: <Locale k="AI_SKILL_NO" p={ [cond.skill] } />;

							const target = skill && skill.target === "enemy"
								? <span class="badge bg-danger">
									<Locale k="AITARGET_ENEMY" />
								</span>
								: <span class="badge bg-danger">
									<Locale k="AITARGET_TEAM" />
								</span>;

							const filter = cond.filter
								? buildFilter(cond.filter)
								: <Fragment />;

							return <Locale k="AIIF_IN_RANGE" p={ [
								filter,
								target,
								<span class="badge bg-substory">{ name }</span>,
							] } />;
						})();
					case "canusepos":
						return ((): preact.VNode => {
							const skill = skills[cond.skill - 1];
							const name = skill
								? <Fragment>
									{ superscript[cond.skill] }
									<Locale k={ skill.key } />
								</Fragment>
								: [`${cond.skill}번`];
							return <Locale k="AIIF_USABLE_EXIST" p={ [<span class="badge bg-substory">{ name }</span>] } />;
						})();
					case "canmove":
						if (typeof cond.to === "string" && cond.to[0] === "!")
							throw new Error("Something wrong");
						return <Locale
							k="AIIF_MOVABLE"
							p={ [<Fragment>{ buildTo([[cond.to as AIPosPositive]], false, "stat-hp") }</Fragment>] }
						/>;
					case "action":
						return <Locale k="AIIF_ACTIONS" p={ [<span class="badge bg-stat-def">{ buildFunc(cond.func, cond.action) }</span>] } />;
					case "buff":
					case "buff?":
						return ((): preact.VNode => {
							const concat = (a: preact.VNode[]): preact.VNode[] => a.gap(<Locale k="AIJOIN_OR" />);
							const compile = (b: string | string[]): preact.VNode[] => {
								const list = typeof b === "string"
									? [<Locale k={ b } />]
									: b.map(buff => <Locale k={ buff } />);

								return list
									.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as preact.VNode[])
									.map(x => <span class="badge bg-success">{ x }</span>);
							};

							const neg = cond.negative === true ? 1 : 0;
							const someone = cond.type === "buff?" ? 2 : 0;
							const v = (neg + someone) as 0 | 1 | 2 | 3;
							const table = {
								0: "AIIF_BUFF",
								1: "AIIF_BUFF_NEG",
								2: "AIIF_BUFF?",
								3: "AIIF_BUFF?_NEG",
							};
							return <Locale k={ table[v] } p={ [<Fragment>{ concat(compile(cond.buff)) }</Fragment>] } />;
						})();
					case "cri100":
						return <Locale k="AIIF_NEXT_CRIT" />;
					case "exist":
						return <Locale
							k="AIIF_EXISTS"
							p={ [<Fragment>{ buildTo(Array.isArray(cond.who) ? cond.who : [[cond.who]]) }</Fragment>] }
						/>;
					case "!exist":
						return <Locale
							k="AIIF_!EXISTS"
							p={ [<Fragment>{ buildTo(Array.isArray(cond.who) ? cond.who : [[cond.who]]) }</Fragment>] }
						/>;
					case "hp":
						return <Locale k="AIIF_HP" p={ [<span class="badge bg-stat-def">{ buildFunc(cond.func, cond.hp, "%") }</span>] } />;
					case "pos":
						if (typeof cond.pos === "string" && cond.pos[0] === "!")
							return <Locale k="AIIF_POS_SELF" p={ [<Fragment>{ buildTo([[cond.pos.substr(1) as AIPosPositive]]) }</Fragment>] } />;

						else if (Array.isArray(cond.pos))
							return <Locale k="AIIF_POS_SELF" p={ [<Fragment>{ buildTo(cond.pos.map(p => [p])) }</Fragment>] } />;

						return <Locale
							k="AIIF!_POS_SELF"
							p={ [<Fragment>{ buildTo([[cond.pos as AIPosPositive | AIPosSpecific]]) }</Fragment>] }
						/>;
					default:
						return UnknownFragment;
				}
			});

			return <Locale k="AIJOIN_LAST" p={ [<Fragment>{ t.gap(<Locale k="AIJOIN_AND" />) }</Fragment>] } />;
		}

		function buildAct (act: AIAction): preact.VNode {
			if ("skill" in act && "to" in act) {
				const skill = skills[act.skill - 1];
				const name = skill
					? <Fragment>
						{ superscript[act.skill] }
						<Locale k={ skill.key } />
					</Fragment>
					: <Locale k="AI_SKILL_NO" p={ [act.skill] } />;
				const to = buildTo(act.to, true);

				const filter = act.filter
					? buildFilter(act.filter)
					: [];

				return <Locale k="AIACT_USE" p={ [
					<span class="badge bg-substory">{ name }</span>,
					<Fragment>{ filter }</Fragment>,
					<Fragment>{ to }</Fragment>,
				] } />;
			} else if ("move" in act) {
				if (act.move === "canuse") {
					const skill = skills[act.skill - 1];
					const name = skill
						? <Fragment>
							{ superscript[act.skill] }
							<Locale k={ skill.key } />
						</Fragment>
						: <Locale k="AI_SKILL_NO" p={ [act.skill] } />;

					return <Locale k="AIACT_MOVE_USABLE" p={ [<span class="badge bg-substory">{ name }</span>] } />;
				}
				return <Locale k="AIACT_MOVE" p={ [<Fragment>{ buildTo([[act.move]], false, "stat-hp") }</Fragment>] } />;
			} else if ("wait" in act)
				return <span class="badge bg-dark"><Locale k="AIACT_WAIT" /></span>;

			return UnknownFragment;
		}

		return <div class="enemy-ai mt-3">
			<div class="text-secondary mb-3" style="margin-top:-1em">
				<Locale k="AI_TIP" />
			</div>

			{ List.map((ai, idx) => {
				return <Fragment>
					{ idx > 0 ?
						<div class="text-center"><Icon icon="arrow-down" class="mt-2" /></div>
						: <Fragment />
					}
					{ "list" in ai
						? <ul class="list-group text-start mt-2">
							{ ai.chance !== undefined
								? <li class="list-group-item bg-warning text-dark">
									<Locale k="AI_CHANCE" p={ [ai.chance] } />
								</li>
								: <Fragment />
							}

							{ ai.list.map(ai => <li class="list-group-item">
								{ ai.chance !== undefined
									? <span class="badge bg-warning tetx-dark me-2">
										<Locale k="AI_CHANCE" p={ [ai.chance] } />
									</span>
									: <Fragment />
								}
								{ ai.if
									? buildIf(ai.if)
									: <Fragment />
								}
								{ ai.act
									? buildAct(ai.act)
									: <span class="badge bg-secondary"><Locale k="AIACT_SKIP" /></span>
								}
							</li>) }
						</ul>
						: <ul class="list-group text-start mt-2">
							<li class="list-group-item">
								{ ai.chance !== undefined
									? <span class="badge bg-warning text-dark me-2">
										<Locale k="AI_CHANCE" p={ [ai.chance] } />
									</span>
									: <Fragment />
								}
								{ ai.if
									? buildIf(ai.if)
									: <Fragment />
								}
								{ ai.act
									? buildAct(ai.act)
									: <span class="badge bg-secondary"><Locale k="AIACT_SKIP" /></span>
								}
							</li>
						</ul>
					}
				</Fragment>;
			}) }
		</div>;
	}) } />;
};
export default AIList;
