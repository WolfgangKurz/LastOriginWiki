import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { UniqueID } from "@/libs/Functions";

import { AI, AIAction, AICondition, AITarget, AIFunc, AIPosPositive, AIFilter, AIPosSpecific } from "@/libs/Types/AI";
import { EnemySkill } from "@/libs/Types/Enemy";

import FilterableEnemyData from "@/libs/DB/Enemy.Filterable";
import FilterableUnitData from "@/libs/DB/Unit.Filterable";
import _BuffData from "@/json/buffs";
import _AIData from "@/json/ai";

import { _e } from "@/libs/VNode";

const BuffData = _BuffData as Record<string, string>;
const AIData = _AIData as Array<{
	ai: string;
	pattern: AI[];
}>;

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

@Component({})
class FullsizeBadge extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private variant!: string;

	private get isRarity () {
		return this.variant.startsWith("rarity-");
	}

	private render () {
		return <b-badge
			variant={ this.variant }
			class={ ["ml-1", "mb-1", this.isRarity ? "border" : ""] }
			style="font-size:90%"
		>
			{ this.$slots.default }
		</b-badge>;
	}
}

@Component({
	components: {
		badge: FullsizeBadge,
	},
})
export default class EnemyAI extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private ai!: string;

	@Prop({
		type: Array,
		default: () => [],
	})
	private skills!: EnemySkill[];

	private uid: string = "";


	private get superscript () {
		return [
			<sup class="mr-1" />,
			<sup class="mr-1">⑴</sup>,
			<sup class="mr-1">⑵</sup>,
			<sup class="mr-1">⑶</sup>,
			<sup class="mr-1">⑷</sup>,
			<sup class="mr-1">⑸</sup>,
			<sup class="mr-1">⑹</sup>,
			<sup class="mr-1">⑺</sup>,
			<sup class="mr-1">⑻</sup>,
		];
	}

	public get List () {
		if (!this.ai) return [];

		const ai = AIData.find(x => x.ai === this.ai);
		if (!ai) return [];

		return ai.pattern;
	}

	private buildTo (to: AITarget[][], progressive: boolean = false, variant: string = "danger"): Array<string | JSX.Element> {
		const ret: Array<string | JSX.Element> = [];
		const entities: string[] = [];

		to.forEach(x => {
			entities.push(
				x.sort((a, b) => toSortTable[a] - toSortTable[b])
					.map(_ => {
						const y = _ as AITarget | string;
						switch (y) {
							case "team": return "아군";
							case "enemy": return "적";
							case "self": return "자신";

							case "near": return "가까운";
							case "far": return "먼";
							case "rand": return "무작위";

							case "front": return "전열";
							case "middle": return "중열";
							case "back": return "후열";
							case "upper": return "상행";
							case "midrow": return "중행";
							case "lower": return "하행";

							case "light": return "경장형";
							case "air": return "기동형";
							case "heavy": return "중장형";
							case "attacker": return "공격기";
							case "defender": return "보호기";
							case "supporter": return "지원기";

							case "$AtkHighest": return "가장 공격력이 높은";
							case "$HPHighest": return "가장 체력이 높은";
							case "$APHighest": return "가장 AP가 높은";
							case "$DefenseHighest": return "가장 방어력이 높은";
							case "$HPLow": return "가장 체력이 낮은";

							case 1: return "전열 하행";
							case 2: return "중열 하행";
							case 3: return "후열 하행";
							case 4: return "전열 중행";
							case 5: return "중열 중행";
							case 6: return "후열 중행";
							case 7: return "전열 상행";
							case 8: return "중열 상행";
							case 9: return "후열 상행";
						}

						if (y.startsWith("Effect_"))
							return BuffData[y] ? `"${BuffData[y]}"이(가) 있는 적` : "???";
						else if (y.startsWith("MP_")) {
							const enemy = FilterableEnemyData.find(z => `MP_${z.id}` === y);
							return enemy ? enemy.name : "???";
						} else if (y.startsWith("Char_")) {
							const unit = FilterableUnitData.find(z => `Char_${z.uid}` === y);
							return unit ? unit.name : "???";
						} else
							return "???";
					})
					.join(" "),
			);
		});

		entities.forEach((e, i) => {
			if (i > 0) {
				if (progressive)
					ret.push(<b-icon-arrow-right-short />);
				else
					ret.push(" 또는 ");
			}
			ret.push(<badge variant={ variant }>{ e }</badge>);
		});

		return ret;
	}

	private buildFunc (func: AIFunc, value: number, postfix: string = "") {
		const t = value + postfix;
		switch (func) {
			case "!": return `${t}이(가) 아님`;
			case "=": return `${t}`;
			case ">": return `${t} 초과`;
			case "<": return `${t} 미만`;
			case ">=": return `${t} 이상`;
			case "<=": return `${t} 이하`;
		}
		return "???";
	}

	private buildIf (ifs: AICondition[]) {
		const { c, l } = (() => {
			const t: Array<Array<string | JSX.Element>> = ifs.map(cond => {
				switch (cond.type) {
					case "attacked":
						return ["공격받았었"];
					case "canuse":
						return (() => {
							const skill = this.skills[cond.skill - 1];
							const name = (skill && [this.superscript[cond.skill], skill.name]) || [`${cond.skill}번`];
							const target = skill && skill.target === "enemy"
								? <badge variant="danger">적</badge>
								: <badge variant="danger">아군</badge>;

							const filter = cond.filter
								? this.buildFilter(cond.filter)
								: [];

							return [
								...filter,
								target,
								"이 ",
								<badge variant="info">{ name }</badge>,
								"의 사정거리에 있",
							];
						})();
					case "canusepos":
						return (() => {
							const skill = this.skills[cond.skill - 1];
							const name = (skill && [this.superscript[cond.skill], skill.name]) || [`${cond.skill}번`];

							return [
								<badge variant="info">{ name }</badge>,
								"을(를) 사용 가능한 위치가 있",
							];
						})();
					case "canmove":
						return (() => {
							if (typeof cond.to === "string" && cond.to[0] === "!") throw new Error("Something wrong");
							return [
								...this.buildTo([[cond.to as AIPosPositive]], false, "stat-hp"),
								"로 이동할 수 있",
							];
						})();
					case "action":
						return [
							"행동 횟수가 ",
							<badge variant="stat-def">{ this.buildFunc(cond.func, cond.action) }</badge>,
							"(이)",
						];
					case "buff":
					case "buff?":
						return (() => {
							const compile = (b: string | string[]) => {
								const list = typeof b === "string"
									? [BuffData[b] || b]
									: b.map(buff => BuffData[buff] || buff);

								return list
									.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as string[])
									.map(x => <badge variant="rarity-S">{ x }</badge>);
							};
							const concat = (a: JSX.Element[]) => {
								const ret: Array<string | JSX.Element> = [];
								a.forEach((e, i) => {
									if (i > 0) ret.push(" 또는 ");
									ret.push(e);
								});
								return ret;
							};

							const neg = cond.negative === true;
							const partial = cond.type === "buff?" ? "상대가 있는 " : "";
							return [
								"버프 ",
								...concat(compile(cond.buff)),
								"이(가) ",
								<badge variant="rarity-A">{ neg ? "없는 " + partial + "경우" : "있는 " + partial + "경우" }</badge>,
							];
						})();
					case "cri100":
						return [
							<badge variant="stat-crit">다음 공격이 치명타</badge>,
							"이",
						];
					case "exist":
						return [
							...this.buildTo(Array.isArray(cond.who) ? cond.who : [[cond.who]]),
							"이(가) 있",
						];
					case "!exist":
						return [
							...this.buildTo(Array.isArray(cond.who) ? cond.who : [[cond.who]]),
							"이(가) 없",
						];
					case "hp":
						return [
							"HP가 ",
							<badge variant="stat-def">{ this.buildFunc(cond.func, cond.hp, "%") }</badge>,
							"(이)",
						];
					case "pos":
						if (typeof cond.pos === "string" && cond.pos[0] === "!") {
							return [
								"자신의 위치가 ",
								...this.buildTo([[cond.pos.substr(1) as AIPosPositive]]),
								"이 아니",
							];
						} else if (Array.isArray(cond.pos)) {
							return [
								"자신의 위치가 ",
								...this.buildTo(cond.pos.map(p => [p])),
								"이",
							];
						} else {
							return [
								"자신의 위치가 ",
								...this.buildTo([[cond.pos as AIPosPositive | AIPosSpecific]]),
								"이",
							];
						}
					default:
						return ["???"];
				}
			});

			type _ = string | JSX.Element | _[];
			const ret: _[] = [];
			t.forEach((t, i) => {
				if (i > 0) ret.push("고, ");
				ret.push(t);
			});

			const travel = (x: _): string => {
				if (typeof x === "string")
					return x;
				if (Array.isArray(x)) {
					const t = x[x.length - 1];
					return travel(t);
				}

				if (x.componentOptions) {
					if (x.componentOptions.children) {
						const c = x.componentOptions.children;
						return travel(c[c.length - 1]);
					}
				}

				return x.text
					? x.text
					: "";
			};
			const last = travel(t);

			return {
				c: ret,
				l: last,
			};
		})();

		if (l.endsWith("있") || l.endsWith("없") || l.endsWith("었"))
			return [...c, "다면"];
		// else if (l.endsWith("이") || l.endsWith("(이)"))
		// 	return [...c, "라면"];
		else
			return [...c, "라면"];
	}

	private buildFilter (filter: AIFilter) {
		switch (filter.type) {
			case "row":
				return [
					<badge variant="rarity-B">적이 { this.buildFunc(filter.func, filter.cnt) } 있는 행</badge>,
					"의",
				];
			case "count":
				return [<badge variant="rarity-B">{ this.buildFunc(filter.func, filter.cnt) }</badge>];
		}
	}

	private buildAct (act: AIAction) {
		if ("skill" in act && "to" in act) {
			const skill = this.skills[act.skill - 1];
			const name = (skill && [this.superscript[act.skill], skill.name]) || [`${act.skill}번`];
			const to = this.buildTo(act.to, true);

			const filter = act.filter
				? this.buildFilter(act.filter)
				: [];

			return [
				<badge variant="info">{ name }</badge>,
				"을(를) ",
				...filter,
				to,
				"에게 사용",
			];
		} else if ("move" in act) {
			if (act.move === "canuse") {
				const skill = this.skills[act.skill - 1];
				const name = (skill && [this.superscript[act.skill], skill.name]) || [`${act.skill}번`];

				return [
					<badge variant="info">{ name }</badge>,
					"을(를) 사용 가능한 위치로 ",
					<badge variant="dark">이동</badge>,
				];
			}

			return [
				...this.buildTo([[act.move]], false, "stat-hp"),
				"(으)로 이동",
			];
		} else if ("wait" in act)
			return <badge variant="dark">대기</badge>;
		else
			return "???";
	}

	public created () {
		this.uid = UniqueID();
	}

	public render () {
		const list = this.List;

		return <div class="enemy-ai mt-3">
			<div class="text-secondary mb-3" style="margin-top:-1em">
				※ 매번 위에서부터 아래로 조건을 검사하여 만족하면 행동, 만족하지 않거나 행동할 수 없으면 다음 줄로 넘어갑니다.
			</div>

			{ list.map((ai, idx) => {
				return [
					idx > 0 ? <div class="text-center"><b-icon-arrow-down class="mt-2" /></div> : _e(),
					"list" in ai
						? <b-list-group class="text-left mt-2" key={ `enemy-ai-${this.uid}-${idx}` }>
							{ ai.chance !== undefined
								? <b-list-group-item class="bg-rarity-SS text-dark">{ ai.chance }% 확률</b-list-group-item>
								: _e() }

							{ ai.list.map(ai => <b-list-group-item>
								{ ai.chance !== undefined ? <badge variant="rarity-SS" class="mr-2">{ ai.chance }% 확률</badge> : _e() }
								{ ai.if ? this.buildIf(ai.if) : _e() }
								{ ai.act ? this.buildAct(ai.act) : <badge variant="secondary">행동하지 않음</badge> }
							</b-list-group-item>) }
						</b-list-group>
						: <b-list-group class="text-left mt-2" key={ `enemy-ai-${this.uid}-${idx}` }>
							<b-list-group-item>
								{ ai.chance !== undefined ? <badge variant="rarity-SS" class="mr-2">{ ai.chance }% 확률</badge> : _e() }
								{ ai.if ? this.buildIf(ai.if) : _e() }
								{ ai.act ? this.buildAct(ai.act) : <badge variant="secondary">행동하지 않음</badge> }
							</b-list-group-item>
						</b-list-group>,
				];
			}) }
		</div>;
	}
}
