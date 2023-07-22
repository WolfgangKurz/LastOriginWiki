import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import renderToString from "preact-render-to-string";

import html2canvas from "@/external/html2canvas";

import { ReactFlow, Edge, MarkerType, Node, useEdgesState, useNodesState, useReactFlow, useNodes } from "@reactflow/core";
import { Background as FlowBackground, BackgroundVariant } from "@reactflow/background";
import { Controls as FlowControls, ControlButton as FlowControlButton } from "@reactflow/controls";
import "reactflow/dist/style.css";

import dagre from "@dagrejs/dagre";

import { SkillEntity } from "@/types/DB/Skill";

import { FlowRoot } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";

import Locale, { LocaleGet } from "@/components/locale";
import IconDownload from "@/components/bootstrap-icon/icons/Download";
import IconConfusedFace from "@/components/bootstrap-icon/icons/ConfusedFace";

import CustomEdge from "./CustomEdge";

import style from "./style.module.scss";

type AI_OP_RAW = "bigger" | "ebigger" | "less" | "eless" | "eq" | "neq";
type AI_OP = ">" | ">=" | "<" | "<=" | "==" | "!=";

interface FlowPreset {
	content: preact.ComponentChildren;
	color: string;
}

interface AIListProps {
	enemy: boolean;
	aiKey: string;

	name?: string;
}

const edgeType = { smart: CustomEdge };

const AIList: FunctionalComponent<AIListProps> = (props) => {
	const [graph, setGraph] = useState<boolean>(false);

	const [error, setError] = useState("");
	const [flowNodes, setFlowNodes] = useNodesState([]);
	const [flowEdges, setFlowEdges] = useEdgesState([]);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const captureRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLDivElement>(null);

	useEffect(() => { // resetter
		setGraph(false);
		setFlowNodes([]);
		setFlowEdges([]);
		setError("");
	}, [props.aiKey]);

	useEffect(() => {
		if (graph === false && canvasRef.current) {
			const el = canvasRef.current!;
			setGraph(true);

			fetch(`${FlowRoot}/${props.aiKey}.flow`)
				.then(x => {
					if (x.status !== 200)
						throw new Error("AI not exists");
					return x.text();
				})
				.then(flow => {
					if (flow.startsWith("<")) // production environment 404
						throw new Error("AI not exists");

					const ops: Array<AI_OP_RAW | AI_OP> = [
						"bigger", "ebigger", "less", "eless", "eq", "neq",
						">", ">=", "<", "<=", "==", "!=",
					];
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
					function isOp (inp: string): inp is AI_OP {
						if (inp.length < 1) return false;
						return ["<", ">", "=", "!"].includes(inp[0]);
					}
					function isOpKind (inp: string): inp is AI_OP | AI_OP_RAW {
						return (ops as string[]).includes(inp);
					}
					function autoOp (inp: string): AI_OP {
						return isOp(inp) ? inp : CompileOp(inp as AI_OP_RAW);
					}

					function getBuff (buff: string): preact.VNode {
						const key = `${buff}_1`;
						let r = LocaleGet(`${buff}_1`);
						if (r === key) r = LocaleGet(buff);

						if (r.includes(":"))
							return <>{ r.replace(/^(.+):[^:]+$/, "$1") }</>;
						else
							return <>{ r }</>;
					}

					const colors = {
						undefined: "#999",

						start: "#fff",
						condition: "#fff8c5",
						skill: "#b6e3ff",
						move: "#fff1e5",
						wait: "#d0d7de",

						edge_default: "#24292f",
					};

					const preset: Record<string, FlowPreset> = {
						start: {
							content: <Locale k="AI_START" />,
							color: colors.start,
						}, // is current position front?

						wait: { // wait
							content: <Locale k="AI_WAIT" />,
							color: colors.wait,
						},
					};
					const edge_preset: Record<string, FlowPreset> = {
						y: {
							content: <Locale k="AI_EDGE_YES" />,
							color: "#218bff",
						},
						n: {
							content: <Locale k="AI_EDGE_NO" />,
							color: "#fa4549",
						},
						f: {
							content: <Locale k="AI_EDGE_FAIL" />,
							color: "#fa4549",
						},
					};

					{ // Factories
						// Skills preset factory
						[1, 2].forEach(slot => {
							preset[`skill${slot}`] = { // use active N to random
								content: <Locale k="AI_SKILL" p={ [
									slot,
									<span class="badge bg-light text-dark">
										<Locale k="AI_SKILL_TO" p={ [<Locale k="AI_SKILL_RANDOM" />] } />
									</span>,
								] } />,
								color: colors.skill,
							};

							["", "_ROW", "_COL"].forEach(rowcol => {
								[
									"self", "lastenemy", "team",
									"near", "far",
									"front", "midrow", "backend",
									"upper", "midcol", "lower",
									"light", "flying", "heavy",
									"near.light", "near.flying", "near.heavy",
									"far.light", "far.flying", "far.heavy",
									"attacker", "defender", "supporter",
									...["highest", "lowest"].flatMap(r => [
										"hp", "atk", "ap", "def", "eva",
										"res-fire", "res-ice", "res-frost",
										"res-elec", "res-electric", "res-lightning",
									].map(t => `${r}-${t}`)),
								].forEach(type => {
									(rowcol ? [1, 2, 3] : [0]).forEach(count => {
										function getType (t: string) {
											const r = t.split("-");
											if (["highest", "lowest"].includes(r[0])) {
												function conv (a: string[]) {
													if (a[1] === "res") {
														switch (a[2]) {
															case "fire": return "RESIST_FIRE";
															case "ice":
															case "frost": return "RESIST_FROST";
															case "elec":
															case "electric":
															case "lightning": return "RESIST_LIGHTNING";
														}
													}
													return a[1].toUpperCase();
												}

												return <Locale
													k={ `AI_SKILL_${r[0].toUpperCase()}` }
													p={ [<span class="text-danger">
														<Locale k={ `AI_SKILL_${conv(r)}` } />
													</span>] }
												/>;
											} else
												return <Locale k={ `AI_SKILL_${t.toUpperCase()}` } />;
										}

										preset[`skill${slot}_${type}${rowcol.toLocaleLowerCase()}${rowcol ? `_${count}` : ""}`] = {
											content: <Locale
												k={ `AI_SKILL${rowcol}` }
												p={ [
													slot,
													<span class="badge bg-light text-dark">
														{ type === "self"
															? <Locale k="AI_SKILL_SELF" />
															: <Locale k="AI_SKILL_TO" p={ [<>
																{ type.split(".")
																	.map(t => getType(t))
																	.gap(" ")
																}
															</>] } />
														}
													</span>,
													count,
												] }
											/>,
											color: colors.skill,
										};
									});
								});
							});
						});

						// Condition preset factory
						["", "!"].forEach(inv => {
							[
								"front", "midrow", "backend",
								"upper", "midcol", "lower",
								...new Array(9).fill(0).map((_, i) => (i + 1).toString()),
								"slot1", "slot2",
							].forEach(pos => {
								preset[`movable${inv}_${pos}`] = {
									content: <Locale
										k={ `AI_CHECK_MOVABLE${inv}` }
										p={ [
											<span class="badge bg-danger">
												<Locale k={ `AI_POS_${pos.toUpperCase()}` } />
											</span>,
										] }

									/>,
									color: colors.condition,
								};

								// single condition only
								preset[`pos${inv}_${pos}`] = {
									content: <Locale
										k={ `AI_POS${inv}` }
										p={ [
											<span class="badge bg-danger">
												<Locale k={ `AI_POS_${pos.toUpperCase()}` } />
											</span>,
										] }
									/>,
									color: colors.condition,
								};
							});

							[1, 2].forEach(slot => {
								preset[`skill${slot}_usable${inv}`] = { // is active N usable?
									content: <Locale k={ `AI_CHECK_SKILL${inv}_USABLE` } p={ [slot] } />,
									color: colors.condition,
								};
								preset[`cell_skill${slot}${inv}`] = { // is cell exists that can use active N?
									content: <Locale k={ `AI_CHECK_SKILL${inv}_MOVABLE` } p={ [slot] } />,
									color: colors.condition,
								};

								ops.forEach(op => {
									for (let count = 1; count <= 9; count++) {
										// skill1_usable!_>_3
										preset[`skill${slot}_usable${inv}_${op}_${count}`] = {
											content: <Locale
												k={ `AI_CHECK_SKILL${inv}_USABLE_OP` }
												p={ [
													slot,
													<span class="badge bg-danger">
														<Locale
															k={ `AI_CHECK_${autoOp(op)}` }
															p={ [count] }
														/>
													</span>,
												] }
											/>,
											color: colors.condition,
										};
									}
								});
							});

							["acted", "attacked", "nextcrit"].forEach(type => {
								preset[`check_${type}${inv}`] = {
									content: <Locale k={ `AI_CHECK_${type.toUpperCase()}${inv}` } />,
									color: colors.condition,
								};
							});

							["team"].forEach(target => {
								preset[`alive${inv}_${target}`] = {
									content: <Locale
										k={ `AI_ALIVE${inv}` }
										p={ [
											<span class="badge bg-dark">
												<Locale k={ `AI_ALIVE_${target.toUpperCase()}` } />
											</span>,
										] }
									/>,
									color: colors.condition,
								};
							});

							// 0, 5, 10, ..., 100 %
							new Array(21).fill(0).map((_, i) => (i * 5).toString()).forEach(percent => {
								ops.forEach(op => {
									preset[`hp_${op}_${percent}`] = {
										content: <Locale
											k="AI_HP"
											p={ [
												<span class="badge bg-danger">{ percent }%</span>,
												<span class="badge bg-exchange">
													<Locale k={ `AI_HP_${autoOp(op)}` } />
												</span>,
											] }
										/>,
										color: colors.condition,
									};
								});

								preset[`chance_${percent}`] = {
									content: <Locale k="AI_RANDOM" p={ [
										<span class="badge bg-success">{ percent }%</span>,
									] } />,
									color: colors.condition,
								};
							});

							// 0 ~ 10
							new Array(11).fill(0).map((_, i) => i.toString()).forEach(count => {
								ops.forEach(op => {
									["skill"].forEach(type => {
										preset[`reserved_${type}_${op}_${count}`] = {
											content: <Locale
												k={ `AI_RESERVED_${type.toUpperCase()}` }
												p={ [
													<span class="badge bg-warning text-dark">
														<Locale k={ `AI_RESERVED_${autoOp(op)}` } />
													</span>,
													<span class="badge bg-danger">{ count }</span>,
												] }
											/>,
											color: colors.condition,
										};
									});

									preset[`round_${op}_${count}`] = {
										content: <Locale
											k="AI_ROUND"
											p={ [
												<span class="badge bg-danger">
													<Locale
														k={ `AI_ROUND_${op}` }
														p={ [<Locale k="AI_ROUND_COUNT" p={ [count] } />] }
													/>
												</span>,
											] }
										/>,
										color: colors.condition,
									};
								});
							});
						});

						// Move preset factory
						[
							"front", "midrow", "backend",
							"upper", "midcol", "lower",
							...new Array(9).fill(0).map((_, i) => (i + 1).toString()),
							"slot1", "slot2",
						].forEach(pos => {
							preset[`move_${pos}`] = {
								content: <Locale
									k="AI_MOVE"
									p={ [
										<span class="badge bg-danger">
											<Locale k={ `AI_POS_${pos.toUpperCase()}` } />
										</span>,
									] }
								/>,
								color: colors.move,
							};
						});
					}

					// process nodes
					const parse = (s: string) => s.split(" ").filter(r => r);
					function parseNode (key: string): FlowPreset {
						const p = key.split("_");

						switch (p[0]) {
							case "hp": // hp_OP_PERCENT
								return {
									content: <Locale
										k="AI_HP"
										p={ [
											<span class="badge bg-danger">{ p[2] }%</span>,
											<span class="badge bg-exchange">
												<Locale k={ `AI_HP_${autoOp(p[1])}` } />
											</span>,
										] }
									/>,
									color: colors.condition,
								};
							case "check":
								if (p[1] === "buff" || p[1] === "buff!") { // check_buff!_TARGET_BUFF
									const inv = p[1].endsWith("!") ? "!" : "";
									const target = p[2];

									if (isOpKind(p[3])) {
										const op = autoOp(p[3]);
										const count = p[4];
										const buff = p.slice(5).join("_");

										return {
											content: <Locale
												k={ `AI_CHECK_BUFF${inv}_${target.toUpperCase()}_COUNT` }
												p={ [
													<span class="badge bg-primary">
														{ getBuff(buff) }
													</span>,
													<span class="badge bg-danger">
														<Locale
															k={ `AI_CHECK_${op}` }
															p={ [<Locale k="AI_CHECK_COUNT" p={ [count] } />] }
														/>
													</span>,
												] }
											/>,
											color: colors.condition,
										};
									} else {
										const buff = p.slice(3).join("_");

										return {
											content: <Locale
												k={ `AI_CHECK_BUFF${inv}_${target.toUpperCase()}` }
												p={ [
													<span class="badge bg-primary">
														{ getBuff(buff) }
													</span>,
												] }
											/>,
											color: colors.condition,
										};
									}
								} else if (p[1] === "in" || p[1] === "in!") {
									const inv = p[0].endsWith("!") ? "!" : "";
									const id = p.slice(2).join("_");
									return {
										content: <Locale k={ `AI_IN${inv}` } p={ [
											<span class="badge bg-rarity-SSS text-dark">
												{ id.startsWith("MOB_MP_")
													? <Locale k={ `ENEMY_${id.replace("MOB_MP_", "")}` } />
													: id.startsWith("Char_")
														? <Locale k={ `UNIT_${id.replace("Char_", "")}` } />
														: id
												}
											</span>
										] } />,
										color: colors.condition,
									};
								}
								break;
							case "skill1":
							case "skill2":
								{
									const slot = p[0].endsWith("1") ? 1 : 2;

									if (p[1] === "buff") { // skill$_buff_X   ($ = slot)
										const buff = p.slice(2).join("_");

										return {
											content: <Locale k="AI_SKILL" p={ [
												slot,
												<span class="badge bg-light text-dark">
													<Locale k="AI_SKILL_TO" p={ [
														<Locale k="AI_SKILL_BUFF" p={ [
															<span
																class="badge bg-primary"
																style={ { fontSize: "inherit" } }
															>
																{ getBuff(buff) }
															</span>,
														] } />,
													] } />
												</span>,
											] } />,
											color: colors.skill,
										};
									}
								}
								break;
							case "pos":
							case "pos!":
								{
									const inv = p[0].endsWith("!") ? "!" : "";
									const pos = p[1].split("|");

									return {
										content: <Locale
											k={ `AI_POS${inv}` }
											p={ [
												<>{
													pos.map(x => typeof x === "string"
														? <span class="badge bg-danger">
															<Locale k={ `AI_POS_${x.toUpperCase()}` } />
														</span>
														: <span class="badge bg-danger">
															<Locale k={ `AI_POS_${x}` } />
														</span>
													).gap(<Locale k="AI_OR" />)
												}</>,
											] }
										/>,
										color: colors.condition,
									};
								}
							case "chance":
								return {
									content: <Locale k="AI_RANDOM" p={ [
										<span class="badge bg-success">{ p[1] }%</span>,
									] } />,
									color: colors.condition,
								};
							case "round":
								if (autoOp(p[1]) === "==" && ["ODD", "EVEN"].includes(p[2].toUpperCase())) {
									return {
										content: <Locale
											k="AI_ROUND"
											p={ [
												<span class="badge bg-danger">
													<Locale k={ `AI_ROUND_${p[2].toUpperCase()}` } />
												</span>,
											] }
										/>,
										color: colors.condition,
									};
								}
								break;
						}

						return {
							content: key,
							color: colors.undefined,
						};
					}

					const flows = flow.split(/[\r\n]/)
						.map(x => x.trim())
						.filter(x => x.length > 0 && x[0] !== "#")
						.map(x => parse(x));

					const defines: {
						and: Record<string, string[]>;
						or: Record<string, string[]>;
					} = {
						and: {},
						or: {},
					};
					const nodes: Node[] = [];
					const edges: Edge[] = [];

					flows.filter(x => ["=", "|="].includes(x[1])) // defines
						.forEach(line => {
							if (line[1] === "=") // AND define
								defines.and[line[0]] = line.slice(2);
							else // OR define
								defines.or[line[0]] = line.slice(2);
						});

					flows.filter(x => !["=", "|="].includes(x[1])) // not label
						.forEach((line) => {
							const from = line[0];
							const edge = line[1];
							const to = line[2];

							[from, to].forEach((target) => {
								if (!nodes.some(r => r.id === target)) {
									const [keys, keyType] = ((): [string[], "and" | "or" | ""] => {
										if (target in defines.and)
											return [defines.and[target], "and"];
										else if (target in defines.or)
											return [defines.or[target], "or"];
										else
											return [[target], ""];
									})();

									const p = keys
										.filter(r => r)
										.map(key =>
											key in preset
												? preset[key]
												: parseNode(key)
										) as FlowPreset[];

									const color = p.length > 0 ? p[0].color : undefined;
									const content = <div class={ style.NodeContent }>
										{ p.map(r => r.content)
											.gap(<div>
												<strong>
													<Locale k={ `AI_${keyType.toUpperCase()}` } />
												</strong>
											</div>)
										}
									</div>;

									el.innerHTML = renderToString(content);

									nodes.push({
										id: target,
										position: { x: 0, y: 0 },
										width: 150,
										height: el.clientHeight + 20, // 10 padding
										resizing: false,

										style: {
											backgroundColor: color,
										},

										data: {
											label: content,
										},
									});
								}
							});

							const ep = edge in edge_preset
								? edge_preset[edge]
								: undefined;
							edges.push({
								id: `${from}->${to}`,
								source: from,
								target: to,

								type: "smart",
								markerEnd: {
									type: MarkerType.ArrowClosed,
									color: ep?.color ?? colors.edge_default,
									width: 16,
									height: 16,
								},

								label: ep?.content ?? undefined,
								labelShowBg: false,
								labelStyle: {
									"paintOrder": "stroke",
									stroke: "#fff",
									strokeWidth: 3,
									fill: ep?.color ?? colors.edge_default,
								},
								style: {
									stroke: ep?.color ?? colors.edge_default,
								},
							});
						});

					const g = new dagre.graphlib.Graph();
					g.setGraph({});
					g.setDefaultEdgeLabel(() => ({}));

					{
						const grp = g.graph();
						grp.ranksep = 30;
						grp.nodesep = 30;
					}

					nodes.forEach(node => {
						let type = 0;
						for (const e of edges) {
							if (e.source === node.id) type |= 1;
							if (e.target === node.id) type |= 2;
							if (type === 3) break;
						}

						node.type = ["group", "input", "output", "default"][type];

						g.setNode(node.id, {
							width: node.width!,
							height: node.height!,
						});
					});
					edges.forEach(edge => {
						g.setEdge(edge.source, edge.target);
					});

					dagre.layout(g);

					nodes.forEach(node => {
						const n = g.node(node.id);

						// center offset, subtract half of size
						node.position.x = n.x - n.width / 2;
						node.position.y = n.y - n.height / 2;
					});

					setFlowNodes(nodes);
					setFlowEdges(edges);
				})
				.catch(e => {
					setError(e.toString());
				});
		};
	}, [graph, canvasRef.current]);

	function downloadFlow (): void {
		if (!wrapperRef.current) return;
		if (!captureRef.current) return;

		const srcEl = wrapperRef.current.querySelector<HTMLDivElement>(".react-flow__viewport");
		if (!srcEl) return;

		function safeName (name: string): string {
			return name.replace(/[^a-zA-Z가-힣0-9]/gi, "_");
		}

		const el = captureRef.current;
		el.innerHTML = srcEl.outerHTML;

		el.querySelector<HTMLDivElement>(".react-flow__viewport")!.style.transform = "translate(5px, 5px)";

		let b_right = 0;
		let b_bottom = 0;
		el.querySelectorAll<HTMLDivElement>(".react-flow__node").forEach(n => {
			const xy = n.style.transform!
				.replace(/^.*\((.+)\).*$/, "$1")
				.split(",")
				.map(p => parseFloat(p.trim())); // remove unit(px)

			if (xy.length === 1) xy.push(0);

			b_right = Math.max(b_right, xy[0] + n.clientWidth);
			b_bottom = Math.max(b_bottom, xy[1] + n.clientHeight);
		});

		el.style.width = `${b_right + 10}px`;
		el.style.height = `${b_bottom + 10}px`;

		html2canvas(captureRef.current, {
			useCORS: true,
		}).then(canvas => {
			const url = canvas.toDataURL("image/jpeg", 1.0);
			const anchor = document.createElement("a");
			anchor.download = `${safeName(props.name || "ai")}.jpg`;
			anchor.href = url;
			anchor.click();
		});
	}

	return <div class={ BuildClass("text-center", style.AIList) } ref={ wrapperRef }>
		<div class={ style.OffCanvas } ref={ canvasRef } />
		<div class={ style.CaptureCanvas } ref={ captureRef } />

		{ error
			? <div>
				<div class="mb-2">
					<IconConfusedFace size="64" />
				</div>

				<Locale k="ENEMY_AI_INVALID" />
				<br />
				<Locale k="ENEMY_AI_REPORT" />
			</div>
			: flowNodes.length > 0
				? <ReactFlow
					edgeTypes={ edgeType }

					nodes={ flowNodes }
					edges={ flowEdges }
					fitView

					nodesConnectable={ false }
					nodesDraggable={ false }
					nodesFocusable={ false }
					elementsSelectable={ false }
				>
					<FlowBackground
						gap={ 10 }
						variant={ BackgroundVariant.Dots }
					/>
					<FlowControls showInteractive={ false }>
						<FlowControlButton onClick={ () => downloadFlow() } title="download">
							<div>
								<IconDownload />
							</div>
						</FlowControlButton>
					</FlowControls>
				</ReactFlow>
				: <></>
		}
	</div>;
};
export default AIList;
