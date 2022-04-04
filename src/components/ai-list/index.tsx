import { FunctionalComponent } from "preact";

import UseGraphviz from "@/external/graphviz";

import { SkillEntity } from "@/types/DB/Skill";

import { objState } from "@/libs/State";
import { DOTRoot } from "@/libs/Const";
import ParseVDOM from "@/libs/VDomParser";
import { LocaleGet } from "@/components/locale";

import style from "./style.module.scss";


type AI_Target = "random" | "near" | "far" |
	"self" | "team" | "enemy" |
	"bioroid" | "ags" |
	"attacker" | "defender" | "supporter" |
	"light" | "heavy" | "flying" |
	"front" | "midrow" | "backend" |
	"upper" | "midcol" | "lower" |
	"hphighest" | "atkhighest" | "aphighest" | "defhighest" |
	"hplowest";

type AI_Pos = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
	"front" | "midrow" | "backend" |
	"upper" | "midcol" | "lower" |
	"slot1" | "slot2";

type AI_OP_RAW = "bigger" | "ebigger" | "less" | "eless" | "eq" | "neq";
type AI_OP = ">" | ">=" | "<" | "<=" | "==" | "!=";

interface ParsedAI_Pos {
	ai_type: "pos";
	inv: boolean;
	pos: AI_Pos | AI_Pos[];
}

interface ParsedAI_Check_Buff {
	inv: boolean;
	type: "buff";
	target: "self" | "target";
	buff: string;
}
interface ParsedAI_Check_Skill_Usable_Base {
	kind: "usable";
}
interface ParsedAI_Check_Skill_Usable_Cond extends ParsedAI_Check_Skill_Usable_Base {
	count: number;
	op: AI_OP;
}
type ParsedAI_Check_Skill_Usable = ParsedAI_Check_Skill_Usable_Base | ParsedAI_Check_Skill_Usable_Cond;
interface ParsedAI_Check_Skill_Movable {
	kind: "movable";
}
type ParsedAI_Check_Skill = {
	inv: boolean;
	type: "skill";
	slot: number;
} & (ParsedAI_Check_Skill_Usable | ParsedAI_Check_Skill_Movable);
interface ParsedAI_Check_Acted {
	inv: boolean;
	type: "acted";
}
interface ParsedAI_Check_Attacked {
	inv: boolean;
	type: "attacked";
}
interface ParsedAI_Check_NextCrit {
	inv: boolean;
	type: "nextcrit";
}
type ParsedAI_Check = {
	ai_type: "check";
} & (ParsedAI_Check_Buff | ParsedAI_Check_Skill | ParsedAI_Check_Acted | ParsedAI_Check_Attacked | ParsedAI_Check_NextCrit);

interface ParsedAI_Random {
	ai_type: "random";
	eq: boolean;
	chance: number; // (rand <= v) or (rand < v) only (13 -> 13% chance)
}

interface ParsedAI_Skill_Target {
	ai_type: "skill";
	slot: number;
	target: AI_Target | AI_Target[];
	col: number; // 열
	row: number; // 행
}
interface ParsedAI_Skill_Buff {
	ai_type: "skill";
	slot: number;
	target: "buff";
	buff: string;
	col: number; // 열
	row: number; // 행
}
type ParsedAI_Skill = ParsedAI_Skill_Target | ParsedAI_Skill_Buff;

interface ParsedAI_Alive {
	ai_type: "alive";
	inv: boolean;
	target: "team";
}

interface ParsedAI_HP {
	ai_type: "hp",
	op: AI_OP,
	value: number;
}

interface ParsedAI_Reserved {
	ai_type: "reserved";
	type: "skill";
	op: AI_OP;
	value: number;
}

interface ParsedAI_Move {
	ai_type: "move";
	move: AI_Pos;
}

type ParsedAI_Wait = "wait";

type ParsedAI = ParsedAI_Pos | ParsedAI_Check | ParsedAI_Random | ParsedAI_Skill | ParsedAI_Alive | ParsedAI_HP | ParsedAI_Reserved | ParsedAI_Move | ParsedAI_Wait;

function CompileOp (op: AI_OP_RAW): AI_OP {
	switch (op) {
		case "bigger": return ">";
		case "ebigger": return ">=";
		case "less": return "<";
		case "eless": return "<=";
		case "eq": return "==";
		case "neq": return "!=";
	}
}
function CompilePos (pos: string): AI_Pos {
	if (/^[0-9]+$/.test(pos))
		return (parseInt(pos, 10) + 1) as AI_Pos;

	switch (pos) {
		case "front":
		case "midrow":
		case "backend":
		case "upper":
		case "midcol":
		case "lower":
		case "slot1":
		case "slot2":
			return pos;
		default:
			throw new Error("invalid pos data");
	}
}
function parseAI (ai: string): ParsedAI[] {
	const ret: ParsedAI[] = [];

	ai.split(",")
		.forEach(cond => {
			const parts = cond.split("?");
			if (parts.length > 2) throw "invalid ai pattern";

			const func = parts[0];
			const params: Record<string, string> = {};
			if (parts.length > 1) {
				parts[1].split("&")
					.forEach(r => {
						const kv = r.split("=");
						return params[kv[0]] = kv[1];
					});
			}

			switch (func) {
				case "pos": // check pos
				case "!pos":
					ret.push({
						ai_type: "pos",
						inv: func[0] === "!",
						pos: params.pos.includes("|")
							? params.pos.split("|").map(x => CompilePos(x))
							: CompilePos(params.pos),
					});
					break;
				case "check":
				case "!check":
					switch (params.type) {
						case "buff":
							if (!["self", "target"].includes(params.kind)) throw new Error("params.kind mismatch, " + params.kind + " passed");
							ret.push({
								ai_type: "check",
								inv: func[0] === "!",
								type: "buff",
								target: params.kind as ("self" | "target"),
								buff: params.buff,
							});
							break;
						case "skill":
							if (!["usable", "movable"].includes(params.kind)) throw new Error("params.kind mismatch, " + params.kind + " passed");
							if (params.kind === "movable") {
								ret.push({
									ai_type: "check",
									inv: func[0] === "!",
									type: "skill",
									kind: params.kind,
									slot: parseInt(params.slot, 10),
								});
							} else if ("op" in params) {
								ret.push({
									ai_type: "check",
									inv: func[0] === "!",
									type: "skill",
									kind: params.kind as "usable",
									op: CompileOp(params.op as AI_OP_RAW),
									count: parseInt(params.count, 10),
									slot: parseInt(params.slot, 10),
								});
							} else {
								ret.push({
									ai_type: "check",
									inv: func[0] === "!",
									type: "skill",
									kind: params.kind as "usable",
									slot: parseInt(params.slot, 10),
								});
							}
							break;
						case "acted":
						case "!acted":
						case "attacked":
						case "!attacked":
						case "nextcrit":
						case "!nextcrit":
							ret.push({
								ai_type: "check",
								inv: func[0] === "!",
								type: params.type.replace("!", "") as ("acted" | "attacked" | "nextcrit"),
							});
							break;
					}
					break;
				case "random":
					switch (params.op) {
						case "bigger": // >
							ret.push({
								ai_type: "random",
								eq: false,
								chance: 100 - parseInt(params.value, 10),
							});
							break;
						case "ebigger": // >=
							ret.push({
								ai_type: "random",
								eq: true,
								chance: 100 - parseInt(params.value, 10),
							});
							break;
						case "less": // <
							ret.push({
								ai_type: "random",
								eq: false,
								chance: parseInt(params.value, 10),
							});
							break;
						case "eless": // <=
							ret.push({
								ai_type: "random",
								eq: true,
								chance: parseInt(params.value, 10),
							});
							break;
					}
					break;
				case "skill":
					if ("buff" in params) {
						ret.push({
							ai_type: "skill",
							slot: parseInt(params.slot, 10),
							target: "buff",
							buff: params.buff,
							col: "col" in params
								? parseInt(params.col, 10)
								: -1,
							row: "row" in params
								? parseInt(params.row, 10)
								: -1,
						});
					} else {
						ret.push({
							ai_type: "skill",
							slot: parseInt(params.slot, 10),
							target: params.target.includes(".")
								? params.target.split(".") as AI_Target[]
								: params.target as AI_Target,
							col: "col" in params
								? parseInt(params.col, 10)
								: -1,
							row: "row" in params
								? parseInt(params.row, 10)
								: -1,
						});
					}
					break;
				case "alive":
				case "!alive":
					ret.push({
						ai_type: "alive",
						inv: func[0] === "!",
						target: params.who as ParsedAI_Alive["target"],
					});
					break;
				case "hp":
					ret.push({
						ai_type: "hp",
						op: CompileOp(params.op as AI_OP_RAW),
						value: parseInt(params.value, 10),
					});
					break;
				case "reserved":
					ret.push({
						ai_type: "reserved",
						op: CompileOp(params.op as AI_OP_RAW),
						type: params.type as ParsedAI_Reserved["type"],
						value: parseInt(params.value, 10),
					});
					break;
				case "move":
					if ("slot" in params) {
						ret.push({
							ai_type: "move",
							move: `slot${parseInt(params.slot, 10) as 1 | 2}`,
						});
					} else {
						ret.push({
							ai_type: "move",
							move: CompilePos(params.pos),
						});
					}
					break;
				case "wait":
					ret.push("wait");
					break;
				default:
					console.log(func, JSON.stringify(params));
			}
		});

	return ret;
}


interface AIListProps {
	enemy: boolean;
	aiKey: string;
	skills: SkillEntity[];
}

const AIList: FunctionalComponent<AIListProps> = (props) => {
	const graph = objState<preact.VNode | boolean>(false);

	if (graph.value === false) {
		graph.set(true);

		(async () => {
			const graphviz = await UseGraphviz();

			const p = (t: string): string => t.replace(/"/g, "\\\"");

			fetch(`${DOTRoot}/${props.aiKey}.dot`)
				.then(x => x.text())
				.then(_dot => {
					let dot = _dot;
					dot = dot.replace(
						"start [shape=invhouse];",
						`start [shape=invhouse label="${p(LocaleGet("AI_START"))}"];`,
					);
					dot = dot.replace(
						/label="([ynf])"/g,
						(_, p1) => p1 === "y"
							? `label="${LocaleGet("AI_EDGE_YES")}" color=blue fontcolor=blue`
							: p1 === "n"
								? `label="${LocaleGet("AI_EDGE_NO")}" color=red fontcolor=red`
								: `label="${LocaleGet("AI_EDGE_FAIL")}" color=red fontcolor=red`
					);

					// process nodes
					dot = dot.replace(
						/([^ \t\r\n]+) \[tooltip="([^"]+)"/gm,
						(p, p1, p2) => {
							const n = parseAI(p2);

							const label: string[] = [];
							n.forEach(ai => {
								if (ai === "wait")
									label.push(LocaleGet("AI_WAIT"));

								else if (ai.ai_type === "move") {
									let p = "";

									if (typeof ai.move === "string")
										p = LocaleGet(`AI_POS_${ai.move.toUpperCase()}`);
									else
										p = LocaleGet(`AI_POS_${ai.move}`);

									label.push(LocaleGet("AI_MOVE", p));
								} else if (ai.ai_type === "skill") {
									let target = "";

									const f = (x: AI_Target) => {
										switch (x) {
											case "hphighest":
												return "HIGHEST_HP";
											case "atkhighest":
												return "HIGHEST_ATK";
											case "aphighest":
												return "HIGHEST_AP";
											case "defhighest":
												return "HIGHEST_DEF";
											case "hplowest":
												return "LOWEST_HP";
											default:
												return x.toUpperCase();
										}
									};
									if ("buff" in ai) {
										target = LocaleGet("AI_SKILL_BUFF", LocaleGet(ai.buff));
									} else {
										if (typeof ai.target === "string")
											target = LocaleGet(`AI_SKILL_${f(ai.target)}`);
										else {
											target = ai.target
												.map(x => LocaleGet(`AI_SKILL_${f(x)}`))
												.join(" ");
										}
									}

									if (ai.row > 0) {
										label.push(
											LocaleGet(
												"AI_SKILL_ROW",
												ai.slot,
												LocaleGet("AI_SKILL_TO", target),
												ai.row,
											),
										);
									} else if (ai.col > 0) {
										label.push(
											LocaleGet(
												"AI_SKILL_COL",
												ai.slot,
												LocaleGet("AI_SKILL_TO", target),
												ai.col,
											),
										);
									} else {
										label.push(
											LocaleGet(
												"AI_SKILL",
												ai.slot,
												LocaleGet("AI_SKILL_TO", target),
											),
										);
									}
								} else if (ai.ai_type === "check") {
									if (ai.type === "buff") {
										label.push(LocaleGet(
											`AI_CHECK_BUFF${ai.inv ? "!" : ""}`,
											LocaleGet(ai.buff),
											LocaleGet(`AI_CHECK_${ai.target.toUpperCase()}`),
										));
									} else if (ai.type === "skill") {
										if (ai.kind === "usable" && "op" in ai) {
											label.push(LocaleGet(
												`AI_CHECK_SKILL${ai.inv ? "!" : ""}_USABLE_OP`,
												ai.slot,
												LocaleGet(`AI_CHECK_${ai.op}`),
												ai.count,
											));
										} else {
											label.push(LocaleGet(
												`AI_CHECK_SKILL${ai.inv ? "!" : ""}_${ai.kind.toUpperCase()}`,
												ai.slot,
											));
										}
									} else if (["acted", "attacked", "nextcrit"].includes(ai.type)) {
										label.push(LocaleGet(
											`AI_CHECK_${ai.type.toUpperCase()}${ai.inv ? "!" : ""}`,
										));
									}
								} else if (ai.ai_type === "pos") {
									if (Array.isArray(ai.pos)) {
										label.push(LocaleGet(
											`AI_POS${ai.inv ? "!" : ""}`,
											ai.pos.map(x => typeof x === "string"
												? LocaleGet(`AI_POS_${x.toUpperCase()}`)
												: LocaleGet(`AI_POS_${x}`)
											)
												.join(LocaleGet("AI_OR")),
										));
									} else {
										label.push(LocaleGet(
											"AI_POS",
											LocaleGet(typeof ai.pos === "string"
												? `AI_POS_${ai.pos.toUpperCase()}`
												: `AI_POS_${ai.pos}`
											),
										));
									}
								} else if (ai.ai_type === "random") {
									label.push(LocaleGet(
										"AI_RANDOM",
										ai.chance,
									));
								} else if (ai.ai_type === "alive") {
									label.push(LocaleGet(
										`AI_ALIVE${ai.inv ? "!" : ""}`,
										LocaleGet(`AI_ALIVE_${ai.target.toUpperCase()}`),
									));
								} else if (ai.ai_type === "hp") {
									label.push(LocaleGet(
										"AI_HP",
										ai.value,
										LocaleGet(`AI_HP_${ai.op}`),
									));
								} else if (ai.ai_type === "reserved") {
									label.push(LocaleGet(
										`AI_RESERVED_${ai.type.toUpperCase()}`,
										LocaleGet(`AI_RESERVED_${ai.op}`),
										ai.value,
									));
								} else {
									label.push(JSON.stringify(n));
								}
							});

							if (label.length === 0) label.push(p1);

							const labels = label
								.join(`\\n${LocaleGet("AI_AND")}\\n`)
								.replace(/\n/g, "\\n");
							return `${p1} [label="${labels}"`;
						},
					);

					const raw = graphviz.dot(dot, "svg");

					const wrapper = document.createElement("div");
					wrapper.innerHTML = raw;
					const svg = wrapper.firstElementChild as SVGSVGElement;
					svg.querySelectorAll("text").forEach(te => {
						te.removeAttribute("font-family");
					});

					const node = ParseVDOM(svg) as preact.VNode;
					graph.set(node);
				})
				.catch(e => {
					graph.set(<>
						Failed to load AI<br />
						{ e.toString() }
					</>);
				});
		})();
	};

	return <div class={ `text-center ${style.AIList}` }>
		{ graph.value }
	</div>;
};
export default AIList;
