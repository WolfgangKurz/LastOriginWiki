import { Fragment, FunctionalComponent, h, render } from "preact";
import { route } from "preact-router";

import Decimal from "decimal.js";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { ITEM_TYPE } from "@/types/Enums";

import JsonLoader, { DBSourceConverter, GetJson, StaticDB } from "@/libs/JsonLoader";

import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import ElemIcon from "@/components/elem-icon";
import RarityBadge from "@/components/rarity-badge";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";
import EquipIcon from "@/components/equip-icon";
import EquipCard from "@/components/equip-card";

import "./style.scss";
import EquipPopup from "@/components/popup/equip-popup";
import { objState } from "@/libs/State";

interface FlagLinkType {
	href: string;
	node: preact.VNode;
	handle?: (e: Event) => void;
}

interface ParsedFlag {
	skill: boolean;
	icons: preact.VNode[];
	link: FlagLinkType | null;
	preload: preact.VNode[];
}

interface SkillDescriptionProps {
	text: string;
	rates?: number[];
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	buffBonus: boolean;
	skillBonus: number;
	favorBonus: boolean;
}

const SkillDescription: FunctionalComponent<SkillDescriptionProps> = (props) => {
	const rates = props.rates || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	const selectedEquip = objState<FilterableEquip | null>(null);
	const displayEquip = objState<boolean>(false);

	return JsonLoader(
		[
			StaticDB.FilterableUnit,
			StaticDB.FilterableEquip,
		],
		() => {
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip, DBSourceConverter);

			function Link (e: Event, link: string): void {
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
				route(link);
			}

			function matches (text: string): string[] {
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

			function valueMatches (text: string): string[] {
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
				part.push(buffer);

				return part;
			}

			function parseFlags (flags: string): ParsedFlag {
				const ret = {
					skill: false,
					icons: [] as preact.VNode[],
					link: null as (FlagLinkType | null),
					preload: [] as preact.VNode[],
				};
				if (!flags) return ret;

				flags.split(",")
					.forEach(x => {
						if (x === "@")
							ret.skill = true;
						else if (x === "#fire")
							ret.icons.push(<ElemIcon inline elem="fire" />);
						else if (x === "#chill")
							ret.icons.push(<ElemIcon inline elem="ice" />);
						else if (x === "#thunder")
							ret.icons.push(<ElemIcon inline elem="lightning" />);
						else if (x[0] === "$") {
							const p = x.split(";");
							if (p[0] === "$ch") {
								const id = p[1];
								const href = `/units/${id}`;
								const unit = FilterableUnitDB.find(x => x.uid === id);
								if (!unit) {
									ret.link = {
										href: "#",
										node: <RarityBadge rarity="A">???</RarityBadge>,
										handle: (e: Event): void => {
											e.preventDefault();
											e.stopPropagation();
										},
									};
								} else {
									ret.link = {
										href,
										node: <BootstrapTooltip
											placement="top"
											content={ <UnitCard.Card unit={ unit } rarity={ unit.rarity } no-link /> }
										>
											<RarityBadge rarity="A">
												<Locale k={ `UNIT_${unit.uid}` } />
												<Icon icon="link-45deg" class="ms-1" />
											</RarityBadge>
										</BootstrapTooltip>,
									};
									ret.preload.push(<UnitFace uid={ unit.uid } />);
								}
							} else if (p[0] === "$eq") {
								const type = {
									[ITEM_TYPE.CHIP]: "Chip",
									[ITEM_TYPE.SPCHIP]: "System",
									[ITEM_TYPE.SUBEQ]: "Sub",
								} as Record<ITEM_TYPE, string>;
								const equips = FilterableEquipDB
									.filter(y => `${type[y.type]}_${y.key}` === p[1])
									.sort((a, b) => b.rarity - a.rarity);

								let equip: FilterableEquip | null = null;
								if (equips.length) equip = equips[0];

								if (!equip) {
									ret.link = {
										href: "#",
										node: <RarityBadge rarity="A">???</RarityBadge>,
										handle: (e: Event): void => {
											e.preventDefault();
											e.stopPropagation();
										},
									};
								} else {
									const href = `/equips/${equip ? equip.fullKey : p[1]}`;
									const name = equip ? LocaleGet(`EQUIP_${equip.fullKey}`).replace(/ (RE|MP|SP|EX)$/, "") : p[1];
									ret.link = {
										href,
										node: <BootstrapTooltip placement="top" content={ <EquipCard equip={ equip } no-link /> }>
											<RarityBadge rarity="A">
												{ name }
												<Icon icon="link-45deg" class="ms-1" />
											</RarityBadge>
										</BootstrapTooltip>,
										handle: (e: Event): void => {
											e.preventDefault();
											e.stopPropagation();
											selectedEquip.set(equip);
											displayEquip.set(true);
										},
									};
								}
								ret.preload.push(<EquipIcon image={ equip ? equip.fullKey : p[1] } />);
							}
						}
					});
				return ret;
			}

			function compile (text: string, strip: boolean = false): Array<preact.VNode[] | preact.VNode | string> {
				if (!text) return [];

				const funclist = [Math.floor, Math.round, Math.ceil];

				return matches(text)
					.filter(x => x)
					.map(x => {
						if (x[0] === "[") {
							interface D1 {
								flags: ParsedFlag;
								prefix: Array<preact.VNode[] | preact.VNode | string>;
								postfix: Array<preact.VNode[] | preact.VNode | string>;
								oValue: string;
							}

							const part = valueMatches(x.substr(1, x.length - 2));
							const { prefix, postfix, flags, oValue } = ((): D1 => {
								if (part.length === 1) {
									return {
										flags: parseFlags(part[0]),
										prefix: [],
										postfix: [],
										oValue: "",
									};
								}

								const offset = part.length === 4 ? 1 : 0;
								return {
									flags: offset === 1 ? parseFlags(part[0]) : parseFlags(""),
									prefix: compile(part[offset], true),
									postfix: compile(part[offset + 2], true),
									oValue: part[offset + 1],
								};
							})();

							if (!oValue) {
								const link = flags.link;
								return link
									? [
										<a href={ link.href } onClick={ (e: Event): void => link.handle ? link.handle(e) : Link(e, link.href) }>
											{ flags.icons }
											{ link.node }
										</a>,
										<div class="preload-area">{ flags.preload }</div>,
									]
									: <span>
										{ flags.icons }
										<div class="preload-area">{ flags.preload }</div>
									</span>;
							}

							const func = ((x: string): ((v: number) => number) => {
								if (x === "F") return Math.floor;
								else if (x === "R") return Math.round;
								else if (x === "C") return Math.ceil;
								return (y: number): number => y;
							})(oValue[0]);

							const basis = ((x): number => {
								if (funclist.includes(func))
									return parseFloat(x.substr(1));
								return parseFloat(x);
							})(oValue.split("~")[0]);

							const incPart = oValue.split("~")[1].split("/");
							const inc = (lv: Decimal.Value): number => {
								let val = new Decimal(0);

								if (incPart.length === 1)
									return Decimal.mul(incPart[0], lv).toNumber();

								for (let i = 0; i < lv; i++)
									val = val.add(incPart[i % incPart.length]);
								return val.toNumber();
							};
							const value = flags.skill
								? func(
									Decimal.add(rates[props.level], Decimal.div(props.skillBonus, 100))
										.toNumber(),
								)
								: func(
									Decimal.add(basis, inc(
										Decimal.add(
											props.buffBonus && !flags.skill ? 2 : 0,
											props.favorBonus && !flags.skill ? 1 : 0,
										).add(props.level),
									)).toNumber(),
								);
							const valueHelp = flags.skill && props.skillBonus > 0
								? <span class="badge bg-success ms-1">
									▲ { Decimal.div(props.skillBonus, 100).toNumber() }
								</span>
								: <Fragment />;

							const signF = (x: string | Array<string | preact.VNode | preact.VNode[]>): string => {
								if (Array.isArray(x)) {
									let ret = "";
									x.forEach(y => {
										if (typeof y !== "string") return;
										ret = ret || signF(y);
									});
									return ret;
								}

								if (x.length > 0) {
									const c = x[x.length - 1];
									if (c === "+") return "+";
									else if (c === "-") return "-";
								}
								return "";
							};
							const sign = signF(prefix);

							if (strip) {
								return <span class="subtree">
									{ flags.icons }
									{ prefix }
									<span class="skill-value" data-sign={ sign }>
										{ value.toFixed(10).replace(/\.?0+$/, "") }
										{ valueHelp }
									</span>
									{ postfix }
								</span>;
							}
							return <RarityBadge rarity={ flags.skill ? "SS" : "S" }>
								{ flags.icons }
								{ prefix }
								<span class="skill-value" data-sign={ sign }>
									{ value.toFixed(10).replace(/\.?0+$/, "") }
									{ valueHelp }
								</span>
								{ postfix }
							</RarityBadge>;
						} else if (x[0] === "<") {
							if (x[1] === "<") {
								const sub = compile(x.substr(2, x.length - 3), true);

								if (strip) return <span class="subtree">{ sub }</span>;
								return <RarityBadge rarity="B">{ sub }</RarityBadge>;
							}
							const sub = compile(x.substr(1, x.length - 2), true);

							if (strip) return <span class="subtree">{ sub }</span>;
							return <RarityBadge rarity="B">&lt;{ sub }&gt;</RarityBadge>;
						} else if (x[0] === "{") {
							const sub = compile(x.substr(1, x.length - 2), true);

							if (strip) return <span class="subtree">{ sub }</span>;
							return <span class="badge bg-primary">{ sub }</span>;
						}

						return x;
					});
			}

			return <span class="skill-description">
				<EquipPopup
					asSub
					fullGroup
					display={ displayEquip.value }
					equip={ selectedEquip.value }
					onHidden={ (): void => displayEquip.set(false) }
				/>
				{ compile(props.text) }
			</span>;
		},
		<Fragment />,
	);
};
export default SkillDescription;
