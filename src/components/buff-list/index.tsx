import preact, { Fragment, FunctionalComponent, isValidElement } from "preact";
import { useCallback, useState } from "preact/hooks";
import render from "preact-render-to-string";
import Decimal from "decimal.js";

import { BuffEffectValue, BUFFEFFECT_TYPE, BuffEffect } from "@/types/BuffEffect";
import { BuffStatStatic, BuffStat } from "@/types/Buffs";
import { BuffErase } from "@/types/BuffErase";
import { BuffTrigger } from "@/types/BuffTrigger";
import { UNIT_POSITION, BUFF_ATTR_TYPE, SKILL_ATTR, ACTOR_BODY_TYPE, ACTOR_CLASS, ROLE_TYPE, TARGET_TYPE, NUM_OUTPUTTYPE, BUFF_OVERLAP_TYPE } from "@/types/Enums";
import { StatPointValue } from "@/types/Stat";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { Enemy } from "@/types/DB/Enemy";
import BuffFrom, { BuffFrom_Equip } from "@/types/DB/BuffFrom";

import { ImageExtension, AssetsRoot, TroopNameTable, IsDev } from "@/libs/Const";
import { CurrentDB } from "@/libs/DB";
import { formatString, useLocale } from "@/libs/Locale";
import { BuildClass, cn } from "@/libs/Class";
import { arrayrize, diff2, groupBy } from "@/libs/Functions";

import Loader, { GetJson, JsonLoaderCore, StaticDB, useDBData } from "@/libs/Loader";
import LocaleBase, { LocaleProps, LocalePropsLegacy } from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import PopupButton from "@/components/PopupButton";
import RarityBadge from "@/components/rarity-badge";
import StatIcon from "@/components/stat-icon";
import ElemIcon from "@/components/elem-icon";
import UnitLink from "@/components/unit-link";
import Badge from "@/components/Badge";

// import { getBuffUid } from "./cache";

import style from "./style.module.scss";
import BuffIcon from "@/components/buff-icon";

// default fallback ??? string
const Locale: FunctionalComponent<LocaleProps<any> | LocalePropsLegacy<any>> = (props) =>
	<LocaleBase
		fallback={ IsDev
			? <span title={ props.k }>???</span>
			: "???"
		}
		{ ...props }
	/>;

type BuffColors = "primary" | "secondary" | "danger" | "warning" | "info" | "dark" | "light";

interface BuffRendererProps {
	uid: string;
	stat: BuffStat | BuffStat[];
	level?: number;
	invert?: boolean;
	dummy?: boolean;
}

export const BuffRenderer: FunctionalComponent<BuffRendererProps> = (props) => {
	const _FilterableUnitDB = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	const _BuffFromDB = useDBData<Record<string, BuffFrom[]>>(StaticDB.BuffFrom);
	if (!_FilterableUnitDB || !_BuffFromDB) return <></>;
	const FilterableUnitDB = _FilterableUnitDB;
	const BuffFromDB = _BuffFromDB;

	const [loc] = useLocale();

	const [ReferencedEnemy, setReferencedEnemy] = useState<Enemy | null>(null);

	const getBuffUidFactory = useCallback(() => {
		const keys = Object.keys(BuffFromDB);
		return (_: string, buff: string): number => keys.indexOf(buff) + 1;
	}, [BuffFromDB]);
	const getBuffUid = useCallback(getBuffUidFactory(), [getBuffUidFactory]);

	const VNodeRender = (entity: preact.VNode): string => render(entity);
	const VNodeReduce = (() => { // collapse 'same target type, same name` buffs into one
		type P = { children: unknown; } & LocaleProps<any>;
		type BuffUidInfo = {
			attr: string;
			uid: string | number;
			name: preact.ComponentChild;
		};
		function getBuffUidInfo (node: preact.VNode): (false | BuffUidInfo) {
			if (node.type !== "span") return false;
			if (!Array.isArray(node.props.children)) return false;
			if (node.props.children.length < 2) return false;

			const c = node.props.children[1];
			if (!isValidElement(c)) return false;

			if (c.type !== "span") return false;
			if (!("data-type" in c.props)) return false;
			if (c.props["data-type"] !== "buff-uid") return false;
			if (typeof c.props.children !== "string" && typeof c.props.children !== "number") return false;

			if (!isValidElement(node.props.children[0])) return false; // should <u>
			if (node.props.children[0].type !== "u") return false;
			if (
				!node.props.children[0].props.children ||
				Array.isArray(node.props.children[0].props.children) ||
				!isValidElement(node.props.children[0].props.children)
			) return false; // should single <Locale>
			if (node.props.children[0].props.children.type !== Locale) return false;
			const attr = (node.props.children[0].props.children.props as P).k;

			return {
				attr,
				uid: c.props.children,
				name: node.props.children[2],
			};
		}

		return (prev: preact.VNode[], current: preact.VNode, i: number): preact.VNode[] => {
			const currentInfo = getBuffUidInfo(current);
			if (!currentInfo) return [...prev, current];

			const list = [...prev];
			const [foundIndex, found] = (() => {
				for (let j = 0; j < list.length; j++) {
					const info = getBuffUidInfo(list[j]);
					if (!info) continue;

					if (currentInfo.attr !== info.attr)  // different attr type
						continue;

					const a_name = currentInfo.name;
					const b_name = info.name;

					const a_locale = isValidElement(a_name) && a_name.type === Locale;
					const b_locale = isValidElement(b_name) && b_name.type === Locale;
					if (a_locale !== b_locale) continue; // not match
					else if (a_locale && b_locale) {
						if (loc[(a_name.props as P).k] === loc[(b_name.props as P).k])
							return [j, info];
					} else {
						if (diff2(a_name, b_name))
							return [j, info];
					}
				}
				return [-1, null];
			})();
			if (foundIndex === -1 || !found) {
				list.push(current);
				return list;
			}

			const uidSpan = list[foundIndex].props.children![1] as preact.VNode;
			if (typeof uidSpan.props.children === "number") {
				if (uidSpan.props.children !== currentInfo.uid)
					uidSpan.props.children = `${uidSpan.props.children}・${currentInfo.uid}`;
			} else if (typeof uidSpan.props.children === "string") {
				if (!uidSpan.props.children.split("・").includes(currentInfo.uid.toString()))
					uidSpan.props.children = `${uidSpan.props.children}・${currentInfo.uid}`;
			}
			return list;
		};
	})();

	function signedValue (value: BuffEffectValue, level: number = 0, forRatio: boolean = false): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = new Decimal(p ? base_.substring(0, base_.length - 1) : base_);
		const per = new Decimal(p ? per_.substring(0, per_.length - 1) : per_);
		const val = Decimal.mul(per, level)
			.add(base)
			.mul(forRatio ? 100 : 1)
			.toNumber();

		return (val > 0 ? "+" : "") + val + p;
	}
	function nsignedValue (value: BuffEffectValue, level: number = 0, forRatio: boolean = false): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = new Decimal(p ? base_.substring(0, base_.length - 1) : base_);
		const per = new Decimal(p ? per_.substring(0, per_.length - 1) : per_);
		const val = Decimal.mul(per, level)
			.add(base)
			.mul(forRatio ? 100 : 1)
			.toNumber();

		return val + p;
	}
	function signedInteger (value: BuffEffectValue, level: number = 0, forRatio: boolean = false): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = new Decimal(p ? base_.substring(0, base_.length - 1) : base_);
		const per = new Decimal(p ? per_.substring(0, per_.length - 1) : per_);
		const val = Decimal.mul(per, level)
			.add(base)
			.mul(forRatio ? 100 : 1)
			.floor()
			.toNumber();

		return (val > 0 ? "+" : "") + val + p;
	}
	function nsignedInteger (value: BuffEffectValue, level: number = 0, forRatio: boolean = false): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = new Decimal(p ? base_.substring(0, base_.length - 1) : base_);
		const per = new Decimal(p ? per_.substring(0, per_.length - 1) : per_);
		const val = Decimal.mul(per, level)
			.add(base)
			.mul(forRatio ? 100 : 1)
			.floor()
			.toNumber();

		return val + p;
	}
	function isRatioValue (value: BuffEffectValue, ifTrue: string = "", ifFalse: string = ""): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";
		return p ? ifTrue : ifFalse;
	}

	interface BuffBadge {
		/** buff key */
		key: string;
		/** buff uid (number badge) */
		uid: number;

		attr?: BUFF_ATTR_TYPE;
		color?: BuffColors;
	}

	function convertBuff (name: string): preact.VNode | BuffBadge;
	function convertBuff (name: string, color: BuffColors): preact.VNode | BuffBadge;
	function convertBuff (name: string, attr: BUFF_ATTR_TYPE): preact.VNode | BuffBadge;
	function convertBuff (name: string, attr: BUFF_ATTR_TYPE, color: BuffColors): preact.VNode | BuffBadge;
	function convertBuff (key: string, p2?: BuffColors | BUFF_ATTR_TYPE, p3?: BuffColors): preact.VNode | BuffBadge {
		let attr: BUFF_ATTR_TYPE | undefined;
		let color: BuffColors | undefined;

		if (typeof p2 === "number") attr = p2;

		if (typeof p3 !== "undefined") color = p3;
		else if (typeof p2 === "string") color = p2;

		if (![undefined, "primary", "secondary", "danger", "warning", "info", "dark", "light"].includes(color))
			color = undefined;

		if (key.startsWith("Char_")) {
			const ukey = key.replace(/Char_(.+)_N/, "$1");
			const unit = FilterableUnitDB.find(x => x.uid === ukey);
			if (!unit) return <>{ ukey }</>;

			return <span class={ `SubBadge ${style.SubBadge} ${color ? `text-${color}` : ""}` }>
				<span class={ style.SubBadgeBadge }>
					<Locale raw={ false } k="BUFF_UNIT_SIDE_TEAM" />
				</span>
				<Locale raw={ false } k={ `UNIT_${unit.uid}` } />
			</span>;
		} else if (key.startsWith("MOB_")) {
			const ekey = key.replace(/MOB_MP_(.+)/, "$1");
			return <span
				class={ `SubBadge ${style.SubBadge} ${color ? `text-${color}` : ""}` }
				data-key={ ekey }
			>
				<span class={ style.SubBadgeBadge }>
					<Locale raw={ false } k="BUFF_UNIT_SIDE_ENEMY" />
				</span>
				<a class={ style.SubBadgeLink } href={ `/enemies/${ekey}` } target="_blank">
					<Icons.Link45deg />
					<Locale raw={ false } k={ `ENEMY_${ekey}` } />
				</a>
			</span>;
		} else if (key.startsWith("Skill_")) {
			const char = key.replace(/^Skill_(.+)_(N|CH)_[a-zA-Z0-9]+$/, "$1");
			const fc = key.replace(/^.+_(N|CH)_([a-zA-Z0-9]+)$/, "$1") === "CH";
			const idx = key.replace(/^.+_(N|CH)_([a-zA-Z0-9]+)$/, "$2");

			return <Locale raw={ false } k="BUFF_BADGE_A_OF_B" p={ [
				<span class={ `SubBadge ${style.SubBadge} ${color ? `text-${color}` : ""}` }>
					<Locale raw={ false } k={ `UNIT_${char}` } />
				</span>,
				<span class={ `SubBadge ${style.SubBadge} ${color ? `text-${color}` : ""}` }>
					<Locale raw={ false } k={ `UNIT_SKILL_${char}_${fc ? "F" : ""}${idx}` } />
				</span>,
			] } />;
		} else if (key.startsWith("SUMMON_")) {
			return <span
				class={ `SubBadge ${style.SubBadge} ${color ? `text-${color}` : ""}` }
				data-key={ key }
			>
				<span class={ style.SubBadgeBadge }>
					<Locale raw={ false } k="BUFF_UNIT_SIDE_SUMMON" />
				</span>
				<Locale raw={ false } k={ key } />
			</span>;
		}

		const uid = getBuffUid(props.uid, key);
		return { key, uid, color, attr };
	}
	function singleBuff (node: preact.VNode | BuffBadge): preact.VNode {
		if ("uid" in node) return computeBuff([node])[0];
		return node;
	}
	function computeBuff (nodes: Array<preact.VNode | BuffBadge>): preact.VNode[] {
		const ret: preact.VNode[] = [];
		const buffs: BuffBadge[] = [];
		nodes.forEach(node => {
			if ("uid" in node) buffs.push(node);
			else ret.push(node);
		});

		const groups: Record<string, BuffBadge[]> = groupBy(buffs, x => `${loc[x.key]}_${x.color || ""}_${x.attr || ""}`);

		Object.keys(groups).forEach(g => {
			const name = loc[groups[g][0].key];
			const color = groups[g][0].color;

			const uids = groups[g].length > 1
				? <Icons.ThreeDots />
				: <>{ groups[g][0].uid }</>;

			const attr = groups[g][0].attr !== undefined
				? <u class={ style.BuffAttr }>
					<Locale raw={ false } k={ `BUFFEFFECT_ATTR_PREFIX_${groups[g][0].attr}` } />
				</u>
				: <></>;

			function renderFrom (from: BuffFrom): preact.VNode {
				switch (from.type) {
					case "unit": {
						const isP = /[3-9][0-9]*$/.test(from.index);
						const isFC = from.index.endsWith("F");

						const ridx = Number(/([0-9]+)$/.exec(from.index)![1]);
						const idx = ridx >= 3 ? ridx - 2 : ridx;
						const pp = ["st", "nd", "rd", "th"][idx > 3 ? 3 : idx - 1];
						return <>
							{ from.key !== props.uid
								? <a href={ `/units/${from.key}` } target="_blank">
									<RarityBadge border rarity="A">
										<Locale plain k={ `UNIT_${from.key}` } fallback={ from.key } />
										<Icons.Link45deg />
									</RarityBadge>
								</a>
								: <RarityBadge border rarity="A">
									<Locale plain k={ `UNIT_${from.key}` } fallback={ from.key } />
								</RarityBadge>
							}

							<Icons.Dash />

							<Locale
								raw={ false }
								k={ `BUFFFROM_${isP ? "PASSIVE" : "ACTIVE"}${isFC ? "_F" : ""}` }
								p={ [idx, pp] }
							/>
							<Badge class="ms-1" variant="primary">
								<Locale raw={ false } k={ `UNIT_SKILL_${from.key}_${from.index}` } />
							</Badge>
						</>;
					}
					case "equip":
						return <>
							<a href={ `/equips/${from.key}` } target="_blank">
								<RarityBadge border rarity="A">
									<Locale plain k={ `EQUIP_${from.key}` } />
									<Icons.Link45deg />
								</RarityBadge>
							</a>

							<Icons.Dash />

							<strong class={ style.EquipLevel }>
								<Locale raw={ false } k={ "BUFFFROM_EQUIP_LEVEL" } p={ [from.level] } />
							</strong>
						</>;
					case "enemy": {
						const isP = /[3-9][0-9]*$/.test(from.index);
						const isFC = from.index.endsWith("F");

						const ridx = Number(/([0-9]+)$/.exec(from.index)![1]);
						const idx = ridx >= 3 ? ridx - 2 : ridx;
						const pp = ["st", "nd", "rd", "th"][idx > 3 ? 3 : idx - 1];
						return <>
							<a href={ `/enemies/${from.key}` } target="_blank">
								<RarityBadge border rarity="SSS">
									<Locale plain k={ `ENEMY_${from.key}` } />
									<Icons.Link45deg />
								</RarityBadge>
							</a>

							<Icons.Dash />

							<Locale
								raw={ false }
								k={ `BUFFFROM_${isP ? "PASSIVE" : "ACTIVE"}${isFC ? "_F" : ""}` }
								p={ [idx, pp] }
							/>
							<Badge class="ms-1" variant="primary">
								<Locale raw={ false } k={ from.index } />
							</Badge>
						</>;
					}
					case "summon": {
						const isP = /[3-9][0-9]*$/.test(from.index);
						const isFC = from.index.endsWith("F");

						const ridx = Number(/([0-9]+)$/.exec(from.index)![1]);
						const idx = ridx >= 3 ? ridx - 2 : ridx;
						const pp = ["st", "nd", "rd", "th"][idx > 3 ? 3 : idx - 1];
						return <>
							<RarityBadge border rarity="S">
								<Locale plain k={ from.key } />
							</RarityBadge>

							<Icons.Dash />

							<Locale
								raw={ false }
								k={ `BUFFFROM_${isP ? "PASSIVE" : "ACTIVE"}${isFC ? "_F" : ""}` }
								p={ [idx, pp] }
							/>
							<Badge class="ms-1" variant="primary">
								<Locale raw={ false } k={ from.index } />
							</Badge>
						</>;
					}
				}
				return <>???</>;
			}

			ret.push(<div class={ style.BuffFrom }>
				<PopupButton content={ <div class={ style.BuffFromPopup }>
					{ groups[g].map(b => <div>
						<span class={ cn("SubBadge", style.SubBadge, style.Detailed, color && `text-${color}`) }>
							<span class="badge bg-dark ms-1" data-type="buff-uid">{ b.uid }</span>
							{ name || "???" }
						</span>

						{ (BuffFromDB[b.key] || []).map(from => <div class={ style.FromLine }>
							<Icons.Dot />
							{ renderFrom(from) }
						</div>) }
					</div>) }
				</div> }>
					<span class={ cn("SubBadge", style.SubBadge, style.DetailedBadge, color && `text-${color}`) }>
						{ attr }
						<span class="badge bg-dark ms-1" data-type="buff-uid">
							{ uids }
						</span>
						{ name || "???" }
					</span>
				</PopupButton>
			</div>);
		});
		return ret;
	}
	function convertBuffToUid (name: string): string {
		if (name.startsWith("Char_")) {
			const key = name.replace(/Char_(.+)_N/, "$1");
			const unit = FilterableUnitDB.find(x => x.uid === key);
			if (!unit) return key;
			return unit.uid;
		} else if (name.startsWith("MOB_")) {
			const key = name.replace(/MOB_MP_(.+)/, "$1");
			return key;
		}
		return name;
	}
	function convertChar (key: string): string {
		return key.replace(/Char_(.+)_N/, "$1");
	}

	function getChanceText (chance: string | undefined): preact.VNode {
		if (!chance) chance = "100%";
		if (chance === "100%") return <></>;

		if (chance === "0%") {
			return <span class="badge bg-success-dark ms-3" title={ formatString(loc["BUFFCHANCE"] ?? "", "0%") }>
				<Locale raw={ false } k="BUFFCHANCE_0" />
			</span>;
		}

		return <span class="badge bg-success ms-3">
			<Locale raw={ false } k="BUFFCHANCE" p={ [chance] } />
		</span>;
	}
	function getBuffEffectTypeText (type: BUFFEFFECT_TYPE, target: BUFF_ATTR_TYPE): preact.VNode {
		return <>
			<u class={ style.BuffAttr }>
				<Locale raw={ false } k={ `BUFFEFFECT_ATTR_PREFIX_${target}` } />
			</u>

			{ ((): preact.VNode => {
				switch (type) {
					case BUFFEFFECT_TYPE.STAT_ATK_VALUE: // 0
					case BUFFEFFECT_TYPE.STAT_ATK_RATIO: // 1
						return <Locale raw={ false } k="BUFFTYPE_ATK" />;
					case BUFFEFFECT_TYPE.STAT_DEF_VALUE: // 2
					case BUFFEFFECT_TYPE.STAT_DEF_RATIO: // 3
						return <Locale raw={ false } k="BUFFTYPE_DEF" />;
					case BUFFEFFECT_TYPE.STAT_HP_VALUE: // 4
					case BUFFEFFECT_TYPE.STAT_HP_RATIO: // 5
						return <Locale raw={ false } k="BUFFTYPE_HP" />;
					case BUFFEFFECT_TYPE.STAT_RATING_VALUE: // 6
					case BUFFEFFECT_TYPE.STAT_RATING_RATIO: // 7
						return <Locale raw={ false } k="BUFFTYPE_ACC" />;
					case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE: // 8
					case BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO: // 9
						return <Locale raw={ false } k="BUFFTYPE_CRIT" />;
					case BUFFEFFECT_TYPE.STAT_AVOID_VALUE: // 10
					case BUFFEFFECT_TYPE.STAT_AVOID_RATIO: // 11
						return <Locale raw={ false } k="BUFFTYPE_EVA" />;
					case BUFFEFFECT_TYPE.STAT_SPEED_VALUE: // 12
					case BUFFEFFECT_TYPE.STAT_SPEED_RATIO: // 13
						return <Locale raw={ false } k="BUFFTYPE_SPD" />;
					case BUFFEFFECT_TYPE.STAT_RESFIRE_VALUE: // 14
					case BUFFEFFECT_TYPE.STAT_RESFIRE_RATIO: // 15
						return <>
							<ElemIcon elem="fire" class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTYPE_FIRE_RES" />
						</>;
					case BUFFEFFECT_TYPE.STAT_RESICE_VALUE: // 16
					case BUFFEFFECT_TYPE.STAT_RESICE_RATIO: // 17
						return <>
							<ElemIcon elem="ice" class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTYPE_ICE_RES" />
						</>;
					case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_VALUE: // 18
					case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_RATIO: // 19
						return <>
							<ElemIcon elem="lightning" class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTYPE_THUNDER_RES" />
						</>;
					case BUFFEFFECT_TYPE.STAGE_AP_VALUE: // 20
					case BUFFEFFECT_TYPE.STAGE_AP_SHIFT: // 21
						return <Locale raw={ false } k="BUFFTYPE_AP" />;
					case BUFFEFFECT_TYPE.STAGE_AP_STOP: // 22
						return <Locale raw={ false } k="BUFFTYPE_STUN" />;
					case BUFFEFFECT_TYPE.UI_INFO_NEXTENEMY: // 23
						return <Locale raw={ false } k="BUFFTYPE_SCOUT" />;
					case BUFFEFFECT_TYPE.STAGE_THORNS_RATIO: // 24
						return <>STAGE_THORNS_RATIO</>; // 사용처 없음, 알 수 없음 (이름으로 보아, 공격 시 공격 일부가 반사되는 것으로 보임)
					case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_VALUE: // 25
						return <>STAGE_REFLECTPHYSICS_VALUE</>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 물리 속성으로)
					case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_VALUE: // 26
						return <>STAGE_REFLECTFIRE_VALUE</>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 화염 속성으로)
					case BUFFEFFECT_TYPE.STAGE_REFLECTICE_VALUE: // 27
						return <>STAGE_REFLECTICE_VALUE</>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 냉기 속성으로)
					case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_VALUE: // 28
						return <>STAGE_REFLECTLIGHTNIG_VALUE</>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 전기 속성으로)
					case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_RATIO_DEFENDER: // 29
						return <Locale raw={ false } k="BUFFTYPE_COUNTER_PHYSICS" />; // 피격자가 물리 반격
					case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_RATIO_DEFENDER: // 30
						return <Locale raw={ false } k="BUFFTYPE_COUNTER_FIRE" />; // 피격자가 화염 반격
					case BUFFEFFECT_TYPE.STAGE_REFLECTICE_RATIO_DEFENDER: // 31
						return <Locale raw={ false } k="BUFFTYPE_COUNTER_ICE" />; // 피격자가 냉기 반격
					case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER: // 32
						return <Locale raw={ false } k="BUFFTYPE_COUNTER_LIGHTNING" />; // 피격자가 전기 반격
					case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_TIME: // 33
						return <Locale raw={ false } k="BUFFTYPE_DMG_IMMUNE" />; // 피해 무효화
					case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE: // 34
						return <Locale raw={ false } k="BUFFTYPE_DMG_MINIMIZE" />; // value 이하 피해 1로 적용
					case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE_LIMITED: // 35
						return <>STAGE_SHIELD_VALUE_LIMITED</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO: // 36
						return <Locale raw={ false } k="BUFFTYPE_GET_DMG_DOWN" />; // 받는 피해 감소
					case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO_LIMITED: // 37
						return <>STAGE_SHIELD_RATIO_LIMITED</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_VALUE: // 38
						return <Locale raw={ false } k="BUFFTYPE_BARRIER" />; // 방어막
					case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO: // 39
					case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_VALUE: // 40
						return <Locale raw={ false } k="BUFFTYPE_ADDDMG_PHYSICS" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO: // 41
					case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_VALUE: // 42
						return <Locale raw={ false } k="BUFFTYPE_ADDDMG_FIRE" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO: // 43
					case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_VALUE: // 44
						return <Locale raw={ false } k="BUFFTYPE_ADDDMG_ICE" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO: // 45
					case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_VALUE: // 46
						return <Locale raw={ false } k="BUFFTYPE_ADDDMG_THUNDER" />;
					case BUFFEFFECT_TYPE.STAGE_LOCKON01_TIME: // 47
						return <>STAGE_LOCKON01_TIME</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_RATIO: // 48
						return <Locale raw={ false } k="BUFFTYPE_GET_DMG_UP" />; // 받는 피해 증가 %
					case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_VALUE: // 49
						return <>STAGE_ADDDAMAGE_VALUE</>; // 사용처 없음, 받는 피해 증가 고정값
					case BUFFEFFECT_TYPE.STAGE_BLOCK_COLUMN: // 50
						return <Locale raw={ false } k="BUFFTYPE_BLOCK_COLUMN" />; // 행 보호
					case BUFFEFFECT_TYPE.STAGE_BLOCK_GRID: // 51
						return <>STAGE_BLOCK_GRID</>; // 사용처 없음, 격자 보호?
					case BUFFEFFECT_TYPE.STAGE_MOVE_BACK: // 52
						return <Locale raw={ false } k="BUFFTYPE_PUSH" />;
					case BUFFEFFECT_TYPE.STAGE_MOVE_FRONT: // 53
						return <Locale raw={ false } k="BUFFTYPE_PULL" />;
					case BUFFEFFECT_TYPE.STAGE_CRITICAL_NEXTATTACK: // 54
						return <Locale raw={ false } k="BUFFTYPE_CRIT_NEXT" />;
					case BUFFEFFECT_TYPE.STAT_RANGE_VALUE: // 55
						return <Locale raw={ false } k="BUFFTYPE_RANGE" />;
					case BUFFEFFECT_TYPE.STAGE_AGRO_VALUE: // 56
						return <>STAGE_AGRO_VALUE</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_VALUE: // 57
						return <>STAGE_DEFPIERCE_VALUE</>; // 방어 관통 고정값?
					case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_RATIO: // 58
						return <Locale raw={ false } k="DEF_PIERCE" />;
					case BUFFEFFECT_TYPE.STAGE_GRID_CHANGE: // 59
						return <>STAGE_GRID_CHANGE</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_TROOPERTYPEDMGBONUS_RATIO: // 60
						return <Locale raw={ false } k="BUFFTYPE_ANTI_LIGHT_DMG" />;
					case BUFFEFFECT_TYPE.STAGE_ARMOREDTYPEDMGBONUS_RATIO: // 61
						return <Locale raw={ false } k="BUFFTYPE_ANTI_HEAVY_DMG" />;
					case BUFFEFFECT_TYPE.STAGE_MOBILITYTYPEDMGBONUS_RATIO: // 62
						return <Locale raw={ false } k="BUFFTYPE_ANTI_MOBILITY_DMG" />;
					case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT: // 63
					case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_LIMITED: // 64
						return <Locale raw={ false } k="BUFFTYPE_TRANSFORM" />;
					case BUFFEFFECT_TYPE.STAGE_PHYSICS_DOT: // 65
						return <Locale raw={ false } k="BUFFTYPE_DOT_PHYSICS" />;
					case BUFFEFFECT_TYPE.STAGE_FIRE_DOT: // 66
						return <Locale raw={ false } k="BUFFTYPE_DOT_FIRE" />;
					case BUFFEFFECT_TYPE.STAGE_ICE_DOT: // 67
						return <Locale raw={ false } k="BUFFTYPE_DOT_ICE" />;
					case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DOT: // 68
						return <Locale raw={ false } k="BUFFTYPE_DOT_THUNDER" />;
					case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM: // 69
					case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF: // 88
					case BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF: // 89
					case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE: // 97
					case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_BUFF: // 99
					case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_DEBUFF: // 100
						return <Locale raw={ false } k="BUFFTYPE_OFF" />;
					case BUFFEFFECT_TYPE.STAGE_PHYSICS_DAMAGE_APPLY: // 70
						return <Locale raw={ false } k="BUFFTYPE_DMG_PHYSICS_BY_ATK" />;
					case BUFFEFFECT_TYPE.STAGE_FIRE_DAMAGE_APPLY: // 71
						return <Locale raw={ false } k="BUFFTYPE_DMG_FIRE_BY_ATK" />;
					case BUFFEFFECT_TYPE.STAGE_ICE_DAMAGE_APPLY: // 72
						return <Locale raw={ false } k="BUFFTYPE_DMG_ICE_BY_ATK" />;
					case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DAMAGE_APPLY: // 73
						return <Locale raw={ false } k="BUFFTYPE_DMG_THUNDER_BY_ATK" />;
					case BUFFEFFECT_TYPE.STAGE_PROVOKE: // 74
						return <Locale raw={ false } k="BUFFTYPE_PROVOKE" />;
					case BUFFEFFECT_TYPE.STAGE_BLOCK_ROW: // 75
						return <Locale raw={ false } k="BUFFTYPE_BLOCK_ROW" />;
					case BUFFEFFECT_TYPE.STAGE_BLOCK_CHARACTER: // 76
						return <Locale raw={ false } k="BUFFTYPE_BLOCK_CHAR" />;
					case BUFFEFFECT_TYPE.STAGE_SUPPORT_ATTACK: // 77
						return <Locale raw={ false } k="BUFFTYPE_SUPPORT_ATK" />;
					case BUFFEFFECT_TYPE.STAGE_SNARE: // 78
						return <Locale raw={ false } k="BUFFTYPE_SNARE" />;
					case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL: // 79
						return <Locale raw={ false } k="BUFFTYPE_SEAL" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_ME: // 80
						return <Locale raw={ false } k="BUFFTYPE_DMG_UP_BY_HP" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_OPP: // 81
						return <Locale raw={ false } k="BUFFTYPE_DMG_UP_BY_TARGET_HP" />;
					case BUFFEFFECT_TYPE.STAGE_RESURRECT: // 82
					case BUFFEFFECT_TYPE.STAGE_RESURRECT_RATIO: // 98
						return <Locale raw={ false } k="BUFFTYPE_RESURRECT" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO_INS: // 83
						return <Locale raw={ false } k="BUFFTYPE_DMG" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO_INS: // 84
						return <Locale raw={ false } k="BUFFTYPE_DMG_FIRE" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO_INS: // 85
						return <Locale raw={ false } k="BUFFTYPE_DMG_ICE" />;
					case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO_INS: // 86
						return <Locale raw={ false } k="BUFFTYPE_DMG_THUNDER" />;
					case BUFFEFFECT_TYPE.STAGE_MARKING: // 87
						return <Locale raw={ false } k="BUFFTYPE_MARKING" />;
					case BUFFEFFECT_TYPE.STAGE_DEBUFF_RATEUP: // 90
						return <Locale raw={ false } k="BUFFTYPE_RES_DEBUFF_RATEUP1" />;
					case BUFFEFFECT_TYPE.STAGE_DEBUFF_PERDOWN: // 91
						return <Locale raw={ false } k="BUFFTYPE_RES_DEBUFF_PERDOWN" />;
					case BUFFEFFECT_TYPE.STAGE_BUFFEFFECTRATE_CHANGE: // 92
						return <Locale raw={ false } k="BUFFTYPE_EFFECT_RATE" />;
					case BUFFEFFECT_TYPE.REMOVE_SUMMON_INSTENV: // 93
						return <Locale raw={ false } k="BUFFTYPE_SUMMON_INSTENV" />;
					case BUFFEFFECT_TYPE.BARRIER_PIERCE: // 94
						return <Locale raw={ false } k="BUFFTYPE_BARRIER_PIERCE" />;
					case BUFFEFFECT_TYPE.STAGE_EXP_UP: // 95
						return <Locale raw={ false } k="BUFFTYPE_EXP" />;
					case BUFFEFFECT_TYPE.STAGE_ANALYZE: // 96
						return <>STAGE_ANALYZE</>; // 사용처 없음, 알 수 없음
					case BUFFEFFECT_TYPE.STAGE_IMMUNITY_DEBUFF: // 101
						return <Locale raw={ false } k="BUFFTYPE_DEBUFF_IMMUNE" />; // 효과 면역
					case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1: // 102
					case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2: // 103
						return <Locale raw={ false } k="BUFFTYPE_TOGETHER" />;
					case BUFFEFFECT_TYPE.STAT_MAXHP_VALUE: // 104
					case BUFFEFFECT_TYPE.STAT_MAXHP_RATIO: // 105
						return <Locale raw={ false } k="BUFFTYPE_MAXHP" />;
					case BUFFEFFECT_TYPE.STAT_SKILL_RATIO: // 106
						return <Locale raw={ false } k="BUFFTYPE_SKILL_RATIO" />;
					case BUFFEFFECT_TYPE.STAT_RANGE_VALUE_ACTIVE_SKILL_1: // 107
					case BUFFEFFECT_TYPE.STAT_RANGE_VALUE_ACTIVE_SKILL_2: // 108
						return <Locale
							raw={ false }
							k="BUFFTYPE_SKILL_RANGE"
							p={ [type - BUFFEFFECT_TYPE.STAT_RANGE_VALUE_ACTIVE_SKILL_1 + 1] }
						/>;
					case BUFFEFFECT_TYPE.FOCUSED_ATTACK: // 109
						return <Locale raw={ false } k="BUFFTYPE_FOCUSED_ATTACK" />;
					case BUFFEFFECT_TYPE.DAMAGE_DISPERSE: // 110
						return <Locale raw={ false } k="BUFFTYPE_DAMAGE_DISPERSE" />;
					case BUFFEFFECT_TYPE.EVADE_SKILLDMGUP_ME: // 111
						return <Locale raw={ false } k="BUFFTYPE_BY" p={ [
							<Locale raw={ false } k="BUFFTARGET_BY_SELF" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_EVADE" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_SKILL_RATIO" />,
						] } />;
					case BUFFEFFECT_TYPE.EVADE_SKILLDMGDOWN: // 112
						return <Locale raw={ false } k="BUFFTYPE_BY" p={ [
							<Locale raw={ false } k="BUFFTARGET_BY_TARGET" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_EVADE" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_RECEIVE_SKILL_RATIO" />,
						] } />;
					case BUFFEFFECT_TYPE.DEF_SKILLDMGUP_ME: // 113
						return <Locale raw={ false } k="BUFFTYPE_BY" p={ [
							<Locale raw={ false } k="BUFFTARGET_BY_SELF" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_DEF" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_SKILL_RATIO" />,
						] } />;
					case BUFFEFFECT_TYPE.DEF_CRTDOWN: // 114
						return <Locale raw={ false } k="BUFFTYPE_BY" p={ [
							<Locale raw={ false } k="BUFFTARGET_BY_SELF" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_DEF" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_ATTACKER_CRIT" />,
						] } />;
					case BUFFEFFECT_TYPE.BUFFER_ATK_ATKUP: // 115
						return <Locale raw={ false } k="BUFFTYPE_BY" p={ [
							<Locale raw={ false } k="BUFFTARGET_BY_BUFFER" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_EVADE" />,
							<Locale raw={ false } k="BUFFEFFECT_BY_SKILL_RATIO" />,
						] } />;
					case BUFFEFFECT_TYPE.RESFIRE_VALUE_MIN: // 116
						return <Locale raw={ false } k="BUFFTYPE_FIRE_RES_MIN" />;
					case BUFFEFFECT_TYPE.RESICE_VALUE_MIN: // 117
						return <Locale raw={ false } k="BUFFTYPE_ICE_RES_MIN" />;
					case BUFFEFFECT_TYPE.RESLIGHTNING_VALUE_MIN: // 118
						return <Locale raw={ false } k="BUFFTYPE_THUNDER_RES_MIN" />;
					case BUFFEFFECT_TYPE.RESFIRE_VALUE_FIX: // 119
						return <Locale raw={ false } k="BUFFTYPE_FIRE_RES_MIN" />;
					case BUFFEFFECT_TYPE.RESICE_VALUE_FIX: // 120
						return <Locale raw={ false } k="BUFFTYPE_ICE_RES_FIX" />;
					case BUFFEFFECT_TYPE.RESLIGHTNING_VALUE_FIX: // 121
						return <Locale raw={ false } k="BUFFTYPE_THUNDER_RES_FIX" />;
					case BUFFEFFECT_TYPE.RESFIRE_DEBUFF_REVERSE: // 122
						return <Locale raw={ false } k="BUFFTYPE_FIRE_RES_REVERSE" />;
					case BUFFEFFECT_TYPE.RESICE_DEBUFF_REVERSE: // 123
						return <Locale raw={ false } k="BUFFTYPE_ICE_RES_REVERSE" />;
					case BUFFEFFECT_TYPE.RESLIGHTNING_DEBUFF_REVERSE: // 124
						return <Locale raw={ false } k="BUFFTYPE_THUNDER_RES_REVERSE" />;
					case BUFFEFFECT_TYPE.BUFF_DISALLOW: // 125
						return <Locale raw={ false } k="BUFFTYPE_BUFF_DISALLOW" />;
					case BUFFEFFECT_TYPE.REMOVE_BUFF_RESIST: // 126
						return <Locale raw={ false } k="BUFFTYPE_RES_OFF" />;
					case BUFFEFFECT_TYPE.ACTION_NUMBER_CHANGE: // 127
						return <Locale raw={ false } k="BUFFTYPE_ACT_COUNT" />;
					case BUFFEFFECT_TYPE.PROVOKE_ATTACKER: // 128
						return <Locale raw={ false } k="BUFFTYPE_PROVOKE_TARGET" />;
					case BUFFEFFECT_TYPE.CURRENT_HP_PIERCEDOWN: // 129
						return <Locale raw={ false } k="BUFFTYPE_PENETRATION_RES" />;
					case BUFFEFFECT_TYPE.GUARDPIERCE_APPLY: // 130
						return <Locale raw={ false } k="BUFFTYPE_GUARDPIERCE_APPLY" />;
					case BUFFEFFECT_TYPE.GUARDPIERCE_NO_APPLY: // 131
						return <Locale raw={ false } k="BUFFTYPE_GUARDPIERCE_NO_APPLY" />;
					case BUFFEFFECT_TYPE.DAMAGE_RECOVER_THISROUND: // 132
						return <>DAMAGE_RECOVER_THISROUND</>; // 사용처 없음, 이번 라운드 받은 피해 복구?
					case BUFFEFFECT_TYPE.SAME_SKILL_HIT_DAMAGE_REDUCE: // 133
						return <>SAME_SKILL_HIT_DAMAGE_REDUCE</>; // 사용처 없음, 받는 스킬 위력 감소?
					case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL_ACTIVE_1: // 134
					case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL_ACTIVE_2: // 135
						return <Locale
							raw={ false }
							k="BUFFTYPE_SEAL_ACTIVE"
							p={ [type - BUFFEFFECT_TYPE.STAGE_SEAL_SKILL_ACTIVE_1 + 1] }
						/>;
					case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL_PASSIVE: // 136
						return <Locale raw={ false } k="BUFFTYPE_SEAL_PASSIVE" />;
					case BUFFEFFECT_TYPE.ADD_ROLE_TYPE: // 137
						return <Locale raw={ false } k="ADD_ROLE_TYPE" />; // 사용처 없음, 알 수 없음... ~ 타입으로 간주하도록 추가?
					case BUFFEFFECT_TYPE.WIDE_SKILL_RATIO: // 138
						return <Locale raw={ false } k="BUFFTYPE_WIDE_SKILL_RATIO" />; // 광역 스킬 위력 증감
					case BUFFEFFECT_TYPE.WIDE_DAMAGE_RATIO: // 139
						return <Locale raw={ false } k="BUFFTYPE_WIDE_DAMAGE_RATIO" />; // 사용처 없음, 광역 피해량 증감?
					case BUFFEFFECT_TYPE.STAGE_DOUBLE_ATTACK_RATIO: // 140
						return <Locale raw={ false } k="BUFFTYPE_STAGE_DOUBLE_ATTACK_RATIO" />; // 사용처 없음, 공격력 2배?
					case BUFFEFFECT_TYPE.RESIST_CHECK_ATTACK_POWER: // 141
						return <Locale raw={ false } k="BUFFTYPE_RESIST_CHECK_ATTACK_POWER" />;
				}
				return <>{ type }</>;
			})() }
		</>;
	}
	function getTriggerText (trigger: BuffTrigger): preact.VNode | undefined {
		if (typeof trigger === "string") {
			switch (trigger) {
				case "damaged":
					return <Locale raw={ false } k="BUFFTRIGGER_DAMAGED" />;
				case "damaged_active":
					return <Locale raw={ false } k="BUFFTRIGGER_DAMAGED_ACTIVE" />;
				case "after_damaged":
					return <Locale raw={ false } k="BUFFTRIGGER_AFTER_DAMAGED" />;
				case "attack_success":
					return <Locale raw={ false } k="BUFFTRIGGER_ATTACK_SUCCESS" />;
				case "team_dead":
					return <Locale raw={ false } k="BUFFTRIGGER_TEAM_DIED" />;
				case "self_dead":
					return <Locale raw={ false } k="BUFFTRIGGER_DIED" />;
				case "enemy_dead":
					return <Locale raw={ false } k="BUFFTRIGGER_ENEMY_DIED" />;
				case "wave":
					return <Locale raw={ false } k="BUFFTRIGGER_BATTLE_START" />;
				case "round":
					return <Locale raw={ false } k="BUFFTRIGGER_EVERY_ROUND" />;
				case "attack":
					return <Locale raw={ false } k="BUFFTRIGGER_ATTACK" />;
				case "attacked":
					return <Locale raw={ false } k="BUFFTRIGGER_ATTACKED" />;
				case "wait":
					return <Locale raw={ false } k="BUFFTRIGGER_WAIT" />;
				case "move":
					return <Locale raw={ false } k="BUFFTRIGGER_MOVE" />;
				case "evade":
					return <Locale raw={ false } k="BUFFTRIGGER_EVADE" />;
				case "wave_end":
					return <Locale raw={ false } k="BUFFTRIGGER_END_WAVE" />;
				case "enemy_killed":
					return <>
						<Locale raw={ false } k="BUFFTRIGGER_KILL" />

						<BootstrapTooltip
							class={ style.BadgeIcon }
							content={ <div class={ style.BuffTriggerDesc }>
								<Locale
									k="BUFFTRIGGERDESC_KILL"
									p={ [
										<span class="text-danger"><Icons.X /></span>,
										<span class="text-danger"><Icons.X /></span>,
										<span class="text-danger"><Icons.X /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-danger"><Icons.X /></span>,
									] }
								/>
							</div> }
						>
							<Icons.QuestionCircleFill class="ms-1" />
						</BootstrapTooltip>
					</>;
				case "enemy_killed_passive":
					return <>
						<Locale raw={ false } k="BUFFTRIGGER_KILL_PASSIVE" />

						<BootstrapTooltip
							class={ style.BadgeIcon }
							content={ <div class={ style.BuffTriggerDesc }>
								<Locale
									k="BUFFTRIGGERDESC_KILL"
									p={ [
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-danger"><Icons.X /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-success"><Icons.Check /></span>,
									] }
								/>
							</div> }
						>
							<Icons.QuestionCircleFill class="ms-1" />
						</BootstrapTooltip>
					</>;
				case "enemy_killed_counter":
					return <>
						<Locale raw={ false } k="BUFFTRIGGER_KILL_COUNTER" />

						<BootstrapTooltip
							class={ style.BadgeIcon }
							content={ <div class={ style.BuffTriggerDesc }>
								<Locale
									k="BUFFTRIGGERDESC_KILL"
									p={ [
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-success"><Icons.Check /></span>,
										<span class="text-danger"><Icons.X /></span>,
									] }
								/>
							</div> }
						>
							<Icons.QuestionCircleFill class="ms-1" />
						</BootstrapTooltip>
					</>;
				case "criticaled":
					return <Locale raw={ false } k="BUFFTRIGGER_CRITICALED" />;
				case "revive":
					return <Locale raw={ false } k="BUFFTRIGGER_RESURRECT" />;

			}
		} else if (trigger) {
			if ("_comment" in trigger)
				return <>{ trigger._comment }</>;
			else if ("after" in trigger) {
				switch (trigger.after) {
					case "counter":
						return <Locale raw={ false } k="BUFFTRIGGER_AFTER_COUNTER" />;
					case "use_skill":
						return <Locale raw={ false } k="BUFFTRIGGER_AFTER_SKILL" />;
					case "support":
						return <Locale raw={ false } k="BUFFTRIGGER_AFTER_SUPPORT" />;
					case "together":
						return <Locale raw={ false } k="BUFFTRIGGER_AFTER_TOGETHER" />;
				}
			} else if ("damaged" in trigger) {
				switch (trigger.damaged) {
					case "fire":
						return <>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTRIGGER_DAMAGED_FIRE" />
						</>;
					case "ice":
						return <>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTRIGGER_DAMAGED_ICE" />
						</>;
					case "lightning":
						return <>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFTRIGGER_DAMAGED_THUNDER" />
						</>;
					case "skill":
						return <Locale raw={ false } k="BUFFTRIGGER_DAMAGED_SKILL" p={ [
							singleBuff(convertBuff(trigger.key))
						] } />;
				}
			} else if ("hp>=" in trigger) {
				if (Array.isArray(trigger["hp>="]))
					return <Locale raw={ false } k="BUFFTRIGGER_HP_>=" p={ [trigger["hp>="].join("/")] } />;

				const target = {
					self: <Locale raw={ false } k="BUFFTARGET_SELF" />,
					target: <Locale raw={ false } k="BUFFTARGET_TARGET" />,
				}[trigger["hp>="].target];
				return <Locale raw={ false } k="BUFFTRIGGER_HP_>=_TARGET" p={ [target, trigger["hp>="].value.join("/")] } />;
			} else if ("hp<=" in trigger) {
				if (Array.isArray(trigger["hp<="]))
					return <Locale raw={ false } k="BUFFTRIGGER_HP_<=" p={ [trigger["hp<="].join("/")] } />;

				const target = {
					self: <Locale raw={ false } k="BUFFTARGET_SELF" />,
					target: <Locale raw={ false } k="BUFFTARGET_TARGET" />,
				}[trigger["hp<="].target];
				return <Locale raw={ false } k="BUFFTRIGGER_HP_<=_TARGET" p={ [target, trigger["hp<="].value.join("/")] } />;
			} else if ("hp>" in trigger) {
				if (Array.isArray(trigger["hp>"]))
					return <Locale raw={ false } k="BUFFTRIGGER_HP_>" p={ [trigger["hp>"].join("/")] } />;

				const target = {
					self: <Locale raw={ false } k="BUFFTARGET_SELF" />,
					target: <Locale raw={ false } k="BUFFTARGET_TARGET" />,
				}[trigger["hp>"].target];
				return <Locale raw={ false } k="BUFFTRIGGER_HP_>_TARGET" p={ [target, trigger["hp>"].value.join("/")] } />;
			} else if ("hp<" in trigger) {
				if (Array.isArray(trigger["hp<"]))
					return <Locale raw={ false } k="BUFFTRIGGER_HP_<" p={ [trigger["hp<"].join("/")] } />;

				const target = {
					self: <Locale raw={ false } k="BUFFTARGET_SELF" />,
					target: <Locale raw={ false } k="BUFFTARGET_TARGET" />,
				}[trigger["hp<"].target];
				return <Locale raw={ false } k="BUFFTRIGGER_HP_<_TARGET" p={ [target, trigger["hp<"].value.join("/")] } />;
			} else if ("hpRange" in trigger) {
				return <Locale raw={ false } k="BUFFTRIGGER_HP_RANGE" p={ [...trigger.hpRange] } />;
			} else if ("in_battle" in trigger) {
				if (trigger.more) {
					if (typeof trigger.in_battle === "string") {
						return <Locale raw={ false } k="BUFFTRIGGER_IN_BATTLE_MORE" p={ [
							singleBuff(convertBuff(trigger.in_battle)),
							trigger.more[0],
						] } />;
					}

					const src = computeBuff(trigger.in_battle.map(convertBuff));
					return <Locale raw={ false } k="BUFFTRIGGER_IN_BATTLE_MORE" p={ [
						<>{ src.gap(<Locale raw={ false } k="BUFFTRIGGER_OR" />) }</>,
						trigger.more[0],
					] } />;
				} else {
					if (typeof trigger.in_battle === "string")
						return <Locale raw={ false } k="BUFFTRIGGER_IN_BATTLE" p={ [singleBuff(convertBuff(trigger.in_battle))] } />;

					const src = computeBuff(trigger.in_battle.map(convertBuff));
					return <Locale raw={ false } k="BUFFTRIGGER_IN_BATTLE" p={ [
						<>{ src.gap(<Locale raw={ false } k="BUFFTRIGGER_OR" />) }</>,
					] } />;
				}
			} else if ("in_squad" in trigger) {
				if (typeof trigger.in_squad === "string")
					return <Locale raw={ false } k="BUFFTRIGGER_IN_SQUAD" p={ [singleBuff(convertBuff(trigger.in_squad))] } />;

				const src = computeBuff(trigger.in_squad.map(convertBuff));
				return <Locale raw={ false } k="BUFFTRIGGER_IN_SQUAD" p={ [
					<>{ src.gap(<Locale raw={ false } k="BUFFTRIGGER_OR" />) }</>,
				] } />;
			} else if ("in_enemy" in trigger) {
				if (typeof trigger.in_enemy === "string")
					return <Locale raw={ false } k="BUFFTRIGGER_IN_ENEMY" p={ [singleBuff(convertBuff(trigger.in_enemy))] } />;

				const src = computeBuff(trigger.in_enemy.map(convertBuff));
				return <Locale raw={ false } k="BUFFTRIGGER_IN_ENEMY" p={ [
					<>{ src.gap(<Locale raw={ false } k="BUFFTRIGGER_OR" />) }</>,
				] } />;
			} else if ("pos" in trigger) {
				if (typeof trigger.pos === "number") {
					switch (trigger.pos) {
						case UNIT_POSITION.FRONT:
							return <Locale raw={ false } k="BUFFTRIGGER_POS_FRONTROW" />;
						case UNIT_POSITION.MIDDLE:
							return <Locale raw={ false } k="BUFFTRIGGER_POS_MIDROW" />;
						case UNIT_POSITION.BACK:
							return <Locale raw={ false } k="BUFFTRIGGER_POS_BACKROW" />;
					}
				}
				switch (trigger.pos.position) {
					case UNIT_POSITION.FRONT:
						return <Locale raw={ false } k="BUFFTRIGGER_POS_TARGET_FRONTROW" />;
					case UNIT_POSITION.MIDDLE:
						return <Locale raw={ false } k="BUFFTRIGGER_POS_TARGET_MIDROW" />;
					case UNIT_POSITION.BACK:
						return <Locale raw={ false } k="BUFFTRIGGER_POS_TARGET_BACKROW" />;
				}
			} else if ("on" in trigger) {
				if ("func" in trigger.on && Array.isArray(trigger.on.select)) {
					const select: preact.VNode[] = typeof trigger.on.select[0] === "string"
						// BuffTrigger_On_BuffKey
						? computeBuff((trigger.on.select as string[]).map(x => convertBuff(x, trigger.on.attr)))
						// BuffTrigger_On_BuffEffectType
						: (trigger.on.select as BUFFEFFECT_TYPE[])
							.map(x => <span class={ `SubBadge ${style.SubBadge}` }>
								{ getBuffEffectTypeText(x, trigger.on.attr) }
							</span>)
							.reduce(VNodeReduce, [])
							.unique(VNodeRender);

					if (select.length === 1)
						return <Locale raw={ false } k={ `BUFFTRIGGER_ON_SINGLE_${trigger.on.func}` } p={ [select[0]] } />;

					return <Locale raw={ false } k={ `BUFFTRIGGER_ON_MULTIPLE_${trigger.on.func}` } p={ [
						<>{ select.gap(", ") }</>,
					] } />;
				} else if ("target" in trigger.on && "stack" in trigger.on) {
					const select = computeBuff((trigger.on.select as string[]).map(convertBuff));

					// BuffTrigger_On_BuffStack
					const target = <Locale raw={ false } k={ `BUFFTARGET_${trigger.on.target.toUpperCase()}` } />;
					const params = [
						target,
						<>{ select.gap(", ") }</>,
						trigger.on.stack,
					];
					// console.log([
					// 	"BUFFTRIGGER_ON_STACK_TARGET",
					// 	select.length === 1 ? "SINGLE" : "MULTIPLE",
					// 	trigger.on.func === "UNFILLED" ? "UNFILLED" : "",
					// ].filter(x => x).join("_"));
					return <Locale
						raw={ false }
						k={ [
							"BUFFTRIGGER_ON_STACK_TARGET",
							select.length === 1 ? "SINGLE" : "MULTIPLE",
							trigger.on.func === "UNFILLED" ? "UNFILLED" : "",
						].filter(x => x).join("_") }
						p={ params }
					/>;
				} else if ("target" in trigger.on && "func" in trigger.on) {
					const select = typeof trigger.on.select[0] === "string"
						// BuffTrigger_On_BuffExists
						? (trigger.on.select as string[])
							.map(convertBuff)
							.map(x => <>
								<u class={ style.BuffAttr }>
									<Locale raw={ false } k={ `BUFFEFFECT_ATTR_PREFIX_${trigger.on.attr}` } />
								</u>
								{ x }
							</>)
							.reduce(VNodeReduce, [])
							.unique(VNodeRender)
						// BuffTrigger_On_BuffTypeExists
						: (trigger.on.select as BUFFEFFECT_TYPE[])
							.map(x => getBuffEffectTypeText(x, trigger.on.attr))
							.reduce(VNodeReduce, [])
							.unique(VNodeRender);

					const target = <Locale raw={ false } k={ `BUFFTARGET_${trigger.on.target.toUpperCase()}` } />;

					if (select.length === 1)
						return <Locale raw={ false } k={ `BUFFTRIGGER_ON_TARGET_SINGLE_${trigger.on.func}` } p={ [target, select[0]] } />;

					const out = select.gap(", ").flat();
					if (typeof select[0] === "number") {
						// BuffTrigger_On_BuffTypeExists
						return <Locale raw={ false } k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p={ [
							target,
							<>{ out }</>,
						] } />;
					}

					// BuffTrigger_On_BuffExists
					return <Locale raw={ false } k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p={ [
						target,
						<>{ out }</>,
					] } />;
				}
			} else if ("test" in trigger) {
				const list: string[] = ["", ""];

				if (trigger.target === "self")
					list[0] = "SELF";
				else
					list[0] = "TARGET";

				if (trigger.test === "higher")
					list[1] = "HIGHER";
				else
					list[1] = "LOWER";

				const value = Decimal.mul(trigger.ratio, 100).toNumber();
				if (trigger.ratio === 0) {
					return <Locale
						raw={ false }
						k={ `BUFFTRIGGER_TEST0_${list.join("_")}` }
						p={ [
							<Locale raw={ false } k={ `BUFFTRIGGER_TEST_${trigger.operand}` } />,
							<Locale raw={ false } k={ `BUFFTRIGGER_TEST_${trigger.than}` } />,
						] }
					/>;
				}
				return <Locale
					raw={ false }
					k={ `BUFFTRIGGER_TEST_${list.join("_")}` }
					p={ [
						<Locale raw={ false } k={ `BUFFTRIGGER_TEST_${trigger.operand}` } />,
						`${value}%`,
						<Locale raw={ false } k={ `BUFFTRIGGER_TEST_${trigger.than}` } />,
					] }
				/>;
			} else if ("target" in trigger) {
				if (trigger.target.length === 1)
					return <Locale raw={ false } k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p={ [singleBuff(convertBuff(trigger.target[0]))] } />;

				const list = computeBuff((typeof trigger.target === "string" ? [trigger.target] : trigger.target).map(convertBuff));
				return <Locale raw={ false } k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p={ [
					<>{ list.gap(", ") }</>,
				] } />;
			} else if ("unitCount" in trigger) {
				const filters = typeof trigger.unitCount.filter === "string"
					? [trigger.unitCount.filter]
					: trigger.unitCount.filter;
				const count = trigger.unitCount.count;
				const type = trigger.unitCount.type;

				const typeList = filters.includes("attacker") || filters.includes("defender") || filters.includes("supporter")
					? [
						<Locale raw={ false } k="COMMON_UNIT_ROLE_DEFENDER" />,
						<Locale raw={ false } k="COMMON_UNIT_ROLE_ATTACKER" />,
						<Locale raw={ false } k="COMMON_UNIT_ROLE_SUPPORTER" />,
					]
					: [
						<Locale raw={ false } k="COMMON_UNIT_TYPE_LIGHT" />,
						<Locale raw={ false } k="COMMON_UNIT_TYPE_HEAVY" />,
						<Locale raw={ false } k="COMMON_UNIT_TYPE_MOBILITY" />,
					];
				const typeText = type.length === 3
					? false
					: type.map(x => typeList[x]).gap("/");

				const typeCountParams = [
					<>{ typeText }</>,
					<>{ count.gap("/") }</>,
				];
				const countParams = [<>{ count.gap("/") }</>];

				if (filters.includes("all")) {
					if (filters.includes("bioroid"))
						return <Locale raw={ false } k="BUFFTRIGGER_UNIT_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale raw={ false } k="BUFFTRIGGER_UNIT_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale raw={ false } k="BUFFTRIGGER_UNIT_TYPE" p={ typeCountParams } />;
					return <Locale raw={ false } k="BUFFTRIGGER_UNIT_ALL" p={ countParams } />;
				} else if (filters.includes("squad")) {
					if (filters.includes("bioroid"))
						return <Locale raw={ false } k="BUFFTRIGGER_TEAM_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale raw={ false } k="BUFFTRIGGER_TEAM_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale raw={ false } k="BUFFTRIGGER_TEAM_TYPE" p={ typeCountParams } />;
					return <Locale raw={ false } k="BUFFTRIGGER_TEAM_ALL" p={ countParams } />;
				} else if (filters.includes("enemy")) {
					if (filters.includes("bioroid"))
						return <Locale raw={ false } k="BUFFTRIGGER_ENEMY_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale raw={ false } k="BUFFTRIGGER_ENEMY_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale raw={ false } k="BUFFTRIGGER_ENEMY_TYPE" p={ typeCountParams } />;
					return <Locale raw={ false } k="BUFFTRIGGER_ENEMY_ALL" p={ countParams } />;
				}
			} else if ("round" in trigger) {
				if (trigger.round.operator === "even" || trigger.round.operator === "odd")
					return <Locale raw={ false } k={ `BUFFTRIGGER_ROUND_${trigger.round.operator.toUpperCase()}` } />;
				else if (trigger.round.operator === "=" || trigger.round.operator === "<=" || trigger.round.operator === ">=")
					return <Locale raw={ false } k={ `BUFFTRIGGER_ROUND_${trigger.round.operator}` } p={ [trigger.round.round.join(", ")] } />;
			} else if ("notInBattle" in trigger) {
				return <Locale
					raw={ false }
					k="BUFFTRIGGER_NOT_IN_BATTLE"
					p={ [<>{ trigger.notInBattle.map(convertBuff).gap(",") }</>] }
				/>;
			} else if ("troop" in trigger) {
				return <Locale raw={ false } k="BUFFTRIGGER_TROOP" p={ [<>{
					trigger.troop
						.map(x => <span class={ `SubBadge ${style.SubBadge}` }>
							<Locale raw={ false } k={ TroopNameTable[x] } />
						</span>)
						.gap(<Locale raw={ false } k="BUFFTRIGGER_OR" />)
				}</>] } />;
			} else if ("use_skill" in trigger) {
				if (typeof trigger.use_skill === "number")
					return <Locale raw={ false } k="BUFFTRIGGER_USE_SKILL" p={ [trigger.use_skill] } />;
				else
					return <Locale raw={ false } k="BUFFTRIGGER_USE_SKILL" p={ [
						<span class={ cn("SubBadge", style.SubBadge, style.Narrow) }>
							<span data-type="buff-uid" class="badge bg-dark">
								{ getBuffUid(props.uid, trigger.use_skill) }
							</span>
							<Locale raw={ false } k={ trigger.use_skill } />
						</span>
					] } />;
			} else if ("buffed" in trigger) {
				return <Locale raw={ false } k="BUFFTRIGGER_BUFFED" p={ [<>
					{ arrayrize(trigger.buffed)
						.map(r => <span class={ cn("SubBadge", style.SubBadge, style.Narrow) }>
							<span data-type="buff-uid" class="badge bg-dark">
								{ getBuffUid(props.uid, r) }
							</span>
							<Locale raw={ false } k={ r } />
						</span>)
						.gap("・")
					}
				</>] } />;
			} else if ("fail" in trigger) {
				switch (trigger.fail) {
					case "active":
						return <Locale raw={ false } k="BUFFTRIGGER_FAIL_ACTIVE" />;
					case "passive":
						return <Locale raw={ false } k="BUFFTRIGGER_FAIL_PASSIVE" />;
				}
			} else if ("near" in trigger) {
				if (trigger.near !== false)
					return <Locale raw={ false } k="BUFFTRIGGER_NEAR_EXISTS" p={ [trigger.near] } />;
				return <Locale raw={ false } k="BUFFTRIGGER_NEAR_NOTEXISTS" />;
			} else if ("apply_one_of" in trigger) {
				return <Locale
					raw={ false }
					k="BUFFTRIGGER_APPLY_ONE_OF"
					p={ [<>{
						trigger.apply_one_of.map(name =>
							<span class={ cn("SubBadge", style.SubBadge, style.Narrow) }>
								<span data-type="buff-uid" class="badge bg-dark">
									{ getBuffUid(props.uid, name) }
								</span>
								<Locale raw={ false } k={ name } />
							</span>)
							.gap("・")
					}</>
					] } />;
			} else if ("attack_success" in trigger) {
				switch (trigger.attack_success) {
					case "active":
						return <Locale raw={ false } k="BUFFTRIGGER_ATTACK_SUCCESS_ACTIVE" />;
					case "passive":
						return <Locale raw={ false } k="BUFFTRIGGER_ATTACK_SUCCESS_PASSIVE" />;
					case "ally":
						return <Locale raw={ false } k="BUFFTRIGGER_ATTACK_SUCCESS_ALLY" />;
				}
			} else if ("beaten" in trigger) {
				switch (trigger.beaten) {
					case "ally":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY" />;
					case "ally_physics":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY_PHYSICS" />;
					case "ally_fire":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY_FIRE" />;
					case "ally_ice":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY_ICE" />;
					case "ally_lightning":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY_LIGHTNING" />;
					case "ally_active":
						return <Locale raw={ false } k="BUFFTRIGGER_BEATEN_ALLY_ACTIVE" />;
				}
			}

			return <>???</>;
		}
		return undefined;
	}
	function getBuffText (stat: BuffEffect, level?: number): preact.VNode {
		if ("_comment" in stat)
			return <>#{ stat._comment }</>;
		else if ("off" in stat) {
			if (typeof stat.off === "string") {
				return <Locale raw={ false } k="BUFFEFFECT_OFF" p={ [<span class="badge bg-warning text-dark">
					<span data-type="buff-uid" class="badge bg-dark ms-1">
						{ getBuffUid(props.uid, stat.off) }
					</span>

					<Locale raw={ false } k={ stat.off } />
				</span>] } />;
			} else if (typeof stat.off === "number")
				return <Locale raw={ false } k="BUFFEFFECT_OFF" p={ [<Locale raw={ false } k={ `BUFFEFFECT_ATTR_${stat.off}` } />] } />;
			else if ("target" in stat.off)
				return <Locale raw={ false } k="BUFFEFFECT_OFF" p={ [getBuffEffectTypeText(stat.off.type, stat.off.target)] } />;

			return <Locale raw={ false } k="BUFFEFFECT_OFF" p={ [getBuffEffectTypeText(stat.off.type, BUFF_ATTR_TYPE.NO_MATTER)] } />;
		} else if ("attack" in stat) {
			if (stat.attack.base === 0 && stat.attack.per === 0)
				if (IsDev)
					return <small class="text-secondary">Placeholder</small>; // Placeholder 버프
				else
					return <></>;

			return <Locale raw={ false } k="BUFFEFFECT_ATK" p={ [signedValue(stat.attack, level)] } />;
		} else if ("defense" in stat) {
			if (stat.defense.base === 0 && stat.defense.per === 0)
				if (IsDev)
					return <small class="text-secondary">Placeholder</small>; // Placeholder 버프
				else
					return <></>;

			return <Locale raw={ false } k="BUFFEFFECT_DEF" p={ [signedValue(stat.defense, level)] } />;
		} else if ("hp" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_HP" p={ [signedValue(stat.hp, level)] } />;
		else if ("accuracy" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_ACC" p={ [signedValue(stat.accuracy, level)] } />;
		else if ("critical" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_CRIT" p={ [signedValue(stat.critical, level)] } />;
		else if ("evade" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_EVA" p={ [signedValue(stat.evade, level)] } />;
		else if ("turnSpeed" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_SPD" p={ [signedValue(stat.turnSpeed, level)] } />;
		else if ("ap" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_AP" p={ [signedValue(stat.ap, level)] } />;
		else if ("ap_set" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_AP_SET" p={ [signedValue(stat.ap_set, level)] } />;
		else if ("resist" in stat) {
			if ("elem" in stat.resist) {
				switch (stat.resist.elem) {
					case "fire":
						if ("min" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_FIRE_RES_MIN" p={ [signedValue(stat.resist.min, level)] } />
							</>;
						}
						if ("fix" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_FIRE_RES_FIX" p={ [signedValue(stat.resist.fix, level)] } />
							</>;
						}
						if ("reverse" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_FIRE_RES_REVERSE" />
							</>;
						}
						return <>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_FIRE_RES" p={ [signedValue(stat.resist.value, level)] } />
						</>;
					case "ice":
						if ("min" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_ICE_RES_MIN" p={ [signedValue(stat.resist.min, level)] } />
							</>;
						}
						if ("fix" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_ICE_RES_FIX" p={ [signedValue(stat.resist.fix, level)] } />
							</>;
						}
						if ("reverse" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_ICE_RES_REVERSE" />
							</>;
						}
						return <>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_ICE_RES" p={ [signedValue(stat.resist.value, level)] } />
						</>;
					case "lightning":
						if ("min" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_THUNDER_RES_MIN" p={ [signedValue(stat.resist.min, level)] } />
							</>;
						}
						if ("fix" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_THUNDER_RES_FIX" p={ [signedValue(stat.resist.fix, level)] } />
							</>;
						}
						if ("reverse" in stat.resist) {
							return <>
								<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
								<Locale raw={ false } k="BUFFEFFECT_THUNDER_RES_REVERSE" />
							</>;
						}
						return <>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_THUNDER_RES" p={ [signedValue(stat.resist.value, level)] } />
						</>;
				}
			}

			switch (stat.resist.type) {
				case "debuff_rateup":
					return <Locale raw={ false } k="BUFFEFFECT_RES_DEBUFF_RATEUP" p={ [signedValue(stat.resist.value, level)] } />;
				case "debuff_perdown":
					return <Locale raw={ false } k="BUFFEFFECT_RES_DEBUFF_PERDOWN" p={ [signedValue(stat.resist.value, level)] } />;
				case "off":
					return <Locale raw={ false } k="BUFFEFFECT_RES_OFF" p={ [signedValue(stat.resist.value, level)] } />;
			}
		} else if ("ap_stop" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_STUN" />;
		else if ("scout" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_SCOUT" />;
		else if ("counter" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_COUNTER" p={ [nsignedValue(stat.counter, level)] } />;
		else if ("damage_immune" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_DMG_IMMUNE" p={ [nsignedInteger(stat.damage_immune, level)] } />;
		else if ("damage_minimize" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_DMG_MINIMIZE" p={ [nsignedInteger(stat.damage_minimize, level)] } />;
		else if ("damage_reduce" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_GET_DMG_DOWN" p={ [nsignedValue(stat.damage_reduce, level)] } />;
		else if ("damage_increase" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_GET_DMG_UP" p={ [nsignedValue(stat.damage_increase, level)] } />;
		else if ("damage" in stat) {
			if ("elem" in stat.damage) {
				switch (stat.damage.elem) {
					case "fire":
						return <>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_ADDDMG_FIRE" p={ [nsignedValue(stat.damage.damage, level)] } />
						</>;
					case "ice":
						return <>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_ADDDMG_ICE" p={ [nsignedValue(stat.damage.damage, level)] } />
						</>;
					case "lightning":
						return <>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_ADDDMG_THUNDER" p={ [nsignedValue(stat.damage.damage, level)] } />
						</>;
				}
			}
			return <Locale raw={ false } k="BUFFEFFECT_ADDDMG_PHYSICS" p={ [nsignedValue(stat.damage, level)] } />;
		} else if ("damage_multiply" in stat) {
			switch (stat.damage_multiply.target) {
				case "light":
					return <Locale raw={ false } k="BUFFEFFECT_ANTI_LIGHT" p={ [signedValue(stat.damage_multiply.value, level)] } />;
				case "air":
					return <Locale raw={ false } k="BUFFEFFECT_ANTI_MOBILITY" p={ [signedValue(stat.damage_multiply.value, level)] } />;
				case "heavy":
					return <Locale raw={ false } k="BUFFEFFECT_ANTI_HEAVY" p={ [signedValue(stat.damage_multiply.value, level)] } />;
			}
		} else if ("damage_by_hp" in stat) {
			const target = stat.damage_by_hp.target === "target"
				? <Locale raw={ false } k="BUFFTARGET_TARGET" />
				: <Locale raw={ false } k="BUFFTARGET_SELF" />;
			return <Locale raw={ false } k="BUFFEFFECT_DMG_BY_HP" p={ [target, nsignedValue(stat.damage_by_hp.damage, level)] } />;
		} else if ("damage_add" in stat) {
			if ("elem" in stat.damage_add) {
				switch (stat.damage_add.elem) {
					case "fire":
						return <>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_DMG_FIRE" p={ [signedValue(stat.damage_add.damage, level)] } />
						</>;
					case "ice":
						return <>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_DMG_ICE" p={ [signedValue(stat.damage_add.damage, level)] } />
						</>;
					case "lightning":
						return <>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale raw={ false } k="BUFFEFFECT_DMG_THUNDER" p={ [signedValue(stat.damage_add.damage, level)] } />
						</>;
				}
			}
			return <Locale raw={ false } k="BUFFEFFECT_DMG" p={ [signedValue(stat.damage_add, level)] } />;
		} else if ("barrier" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_BARRIER" p={ [signedValue(stat.barrier, level)] } />;
		else if ("guard" in stat) {
			switch (stat.guard) {
				case "col":
					return <Locale raw={ false } k="BUFFEFFECT_BLOCK_COLUMN" />;
				case "row":
					return <Locale raw={ false } k="BUFFEFFECT_BLOCK_ROW" />;
				case "target":
					return <Locale raw={ false } k="BUFFEFFECT_BLOCK_TARGET" />;
			}
		} else if ("position" in stat) {
			switch (stat.position.type) {
				case "pull":
					return <Locale raw={ false } k="BUFFEFFECT_PULL" p={ [nsignedInteger(stat.position.range, level)] } />;
				case "push":
					return <Locale raw={ false } k="BUFFEFFECT_PUSH" p={ [nsignedInteger(stat.position.range, level)] } />;
			}
		} else if ("next_crit" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_CRIT_NEXT" p={ [signedValue(stat.next_crit, level)] } />;
		else if ("range" in stat) {
			if ("skill" in stat)
				return <Locale raw={ false } k="BUFFEFFECT_RANGE_SKILL" p={ [stat.skill, signedInteger(stat.range, level)] } />;
			return <Locale raw={ false } k="BUFFEFFECT_RANGE" p={ [signedInteger(stat.range, level)] } />;
		} else if ("penetration" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_DEFPIERCE" p={ [signedValue(stat.penetration, level)] } />;
		else if ("metamolphosis" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_TRANSFORM" />;
		else if ("fixed_damage" in stat) {
			if ("elem" in stat.fixed_damage) {
				switch (stat.fixed_damage.elem) {
					case "fire":
						return <Locale
							raw={ false }
							k={ isRatioValue(stat.fixed_damage.damage, "1", "") ? "BUFFEFFECT_DOT_FIRE_RATIO" : "BUFFEFFECT_DOT_FIRE" }
							p={ [
								nsignedValue(stat.fixed_damage.damage, level),
								<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
							] }
						/>;
					case "ice":
						return <Locale raw={ false } k={ isRatioValue(stat.fixed_damage.damage, "1", "") ? "BUFFEFFECT_DOT_ICE_RATIO" : "BUFFEFFECT_DOT_ICE" } p={ [
							nsignedValue(stat.fixed_damage.damage, level),
							<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
						] } />;
					case "lightning":
						return <Locale
							raw={ false }
							k={ isRatioValue(stat.fixed_damage.damage, "1", "") ? "BUFFEFFECT_DOT_THUNDER_RATIO" : "BUFFEFFECT_DOT_THUNDER" }
							p={ [
								nsignedValue(stat.fixed_damage.damage, level),
								<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
							] }
						/>;
				}
			}
			return <Locale raw={ false } k={ isRatioValue(stat.fixed_damage, "1", "") ? "BUFFEFFECT_DOT_PHYSICS_RATIO" : "BUFFEFFECT_DOT_PHYSICS" } p={ [
				nsignedValue(stat.fixed_damage, level),
				<ElemIcon elem={ SKILL_ATTR.PHYSICS } class="me-1 mb-0" />,
			] } />;
		} else if ("provoke" in stat) {
			if (stat.provoke === "self")
				return <Locale raw={ false } k="BUFFEFFECT_PROVOKE" />;
			return <Locale raw={ false } k="BUFFEFFECT_PROVOKE_TARGET" />;
		} else if ("stun" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_STUN" />;
		else if ("attack_support" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_SUPPORT_ATK" p={ [nsignedValue(stat.attack_support, level)] } />;
		else if ("immovable" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_SNARE" />;
		else if ("skill_disable" in stat) {
			switch (stat.skill_disable) {
				case 0:
					return <Locale raw={ false } k="BUFFEFFECT_SEAL_PASSIVE" />;
				case 1:
				case 2:
					return <Locale raw={ false } k="BUFFEFFECT_SEAL_ACTIVE" p={ [stat.skill_disable] } />;
				case true:
					return <Locale raw={ false } k="BUFFEFFECT_SEAL" />;
			}
		} else if ("revive" in stat) {
			if (typeof stat.revive.base === "string")
				return <Locale raw={ false } k="BUFFEFFECT_RESURRECT_MAXIMUM" p={ [nsignedValue(stat.revive, level)] } />;
			return <Locale raw={ false } k="BUFFEFFECT_RESURRECT" p={ [nsignedValue(stat.revive, level)] } />;
		} else if ("attack_target" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_MARKING" />;
		else if ("invokeChance" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_EFFECT_RATE" p={ [signedValue(stat.invokeChance, level)] } />;
		else if ("summon_remove" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_REMOVE_SUMMON" />;
		else if ("penetration_force" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_BARRIER_PIERCE" />;
		else if ("exp" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_EXP" p={ [signedValue(stat.exp, level)] } />;
		else if ("debuff_immune" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_DEBUFF_IMMUNE" p={ [getBuffEffectTypeText(stat.debuff_immune, BUFF_ATTR_TYPE.DEBUFF)] } />;
		else if ("collaborate" in stat) {
			const uid = convertBuffToUid(stat.collaborate.with);

			if (stat.collaborate.with.startsWith("MOB_")) {
				const enemyKey = `enemy/${uid}`;
				JsonLoaderCore(CurrentDB, enemyKey)
					.then(() => {
						const detail = GetJson<Enemy>(enemyKey);
						if (!detail) return;

						setReferencedEnemy(detail);
					});

				if (!ReferencedEnemy) return <></>;

				return <Locale raw={ false } k="BUFFEFFECT_COOP" p={ [
					<strong>
						<Locale k={ `ENEMY_${uid}` } />
					</strong>,
					<span class="text-danger">#{ stat.collaborate.skill }</span>,
					<span class="text-danger">
						<Locale raw={ false } k={ ReferencedEnemy.skills[stat.collaborate.skill - 1].key } />
					</span>,
				] } />;
			}

			return <Locale raw={ false } k="BUFFEFFECT_COOP" p={ [
				<UnitLink uid={ convertChar(stat.collaborate.with) } />, // convertBuff(stat.collaborate.with, "primary"),
				<span class="text-danger">#{ stat.collaborate.skill }</span>,
				<span class="text-danger">
					{ [
						<Locale raw={ false } k={ `UNIT_SKILL_${uid}_${stat.collaborate.skill}` } />,
						!(`UNIT_SKILL_${uid}_F${stat.collaborate.skill}` in loc)
							? <></>
							: [" / ", <Locale raw={ false } k={ `UNIT_SKILL_${uid}_F${stat.collaborate.skill}` } />],
					] }
				</span>,
			] } />;
		} else if ("max_hp" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_MAXHP" p={ [signedValue(stat.max_hp, level)] } />;
		else if ("skill_ratio" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_SKILL_RATIO" p={ [signedValue(stat.skill_ratio, level)] } />;
		else if ("less_target" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_LESS_TARGET" p={ [signedValue(stat.less_target, level)] } />;
		else if ("disperse" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_DISPERSE" p={ [nsignedValue(stat.disperse, level)] } />;
		else if ("by" in stat) {
			const forPercent = stat.r ?? false;

			return <Locale raw={ false } k="BUFFEFFECT_BY" p={ [
				<Locale raw={ false } k={ `BUFFTARGET_BY_${stat.by.target.toUpperCase()}` } />,
				<strong class="text-danger">
					<Locale raw={ false } k={ `BUFFEFFECT_BY_${stat.by.by.toUpperCase()}` } />
				</strong>,
				<strong class="text-orange">{ nsignedValue(stat.by, level, forPercent) }</strong>,
				<strong class="text-primary">
					<Locale raw={ false } k={ `BUFFEFFECT_BY_${stat.value.toUpperCase()}` } />
				</strong>,
				<Locale raw={ false } k={ `BUFFTYPE_${stat.by.type.toUpperCase()}` } />,
			] } />;
		}
		else if ("act_count" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_ACT_COUNT" p={ [stat.act_count > 0 ? `+${stat.act_count}` : stat.act_count] } />;
		else if ("guardpierce_apply" in stat) {
			if (stat.guardpierce_apply)
				return <Locale raw={ false } k="BUFFEFFECT_GUARDPIERCE_APPLY" />;
			return <Locale raw={ false } k="BUFFEFFECT_GUARDPIERCE_NO_APPLY" />;
		}
		else if ("buff_disallow" in stat)
			return <Locale raw={ false } k="BUFFEFFECT_BUFF_DISALLOW" />;
		else if ("wide" in stat) {
			return <Locale
				raw={ false }
				k={ `BUFFEFFECT_WIDE_${stat.wide.type.toUpperCase()}_RATIO` }
				p={ [signedValue(stat.wide, level)] }
			/>;
		} else if ("reuse_skill" in stat) {
			return <Locale raw={ false } k="BUFFEFFECT_REUSE_SKILL" />;
		} else if ("min_resist" in stat) {
			let elem = <>???</>;

			switch (stat.min_resist) {
				case "fire":
					elem = <>
						<ElemIcon elem="fire" inline />
						<Locale raw={ false } k="COMMON_ELEM_FIRE" />
					</>;
					break;
				case "ice":
					elem = <>
						<ElemIcon elem="ice" inline />
						<Locale raw={ false } k="COMMON_ELEM_ICE" />
					</>;
					break;
				case "lightning":
					elem = <>
						<ElemIcon elem="lightning" inline />
						<Locale raw={ false } k="COMMON_ELEM_ELECTRIC" />
					</>;
					break;
			}
			return <Locale raw={ false } k="BUFFEFFECT_RESIST_CHECK_ATTACK_POWER" p={ [elem] } />;
		}

		return <>{ JSON.stringify(stat) }</>; // "???";
	};
	function getEraseText (erase: BuffErase): preact.VNode {
		if ("trigger" in erase) {
			const trigger = getTriggerText(erase.trigger);
			if (trigger)
				return <Locale raw={ false } k="BUFFERASE_COUNT_TRIGGER" p={ [erase.count, trigger] } />;
			return <Locale raw={ false } k="BUFFERASE_COUNT" p={ [erase.count] } />;
		} else if ("until" in erase) {
			const trigger = getTriggerText(erase.until);
			if (erase.rounds !== undefined)
				return <Locale raw={ false } k="BUFFERASE_ROUND_TRIGGER" p={ [erase.rounds, trigger || <></>] } />;
			return <Locale raw={ false } k="BUFFERASE_TRIGGER" p={ [trigger || <></>] } />;
		} else if ("rounds" in erase) {
			if (erase.rounds === 0) return <></>;
			return <Locale raw={ false } k="BUFFERASE_ROUND" p={ [erase.rounds] } />;
		}
		return <Locale raw={ false } k="BUFFERASE_PERMANENT" />;
	}
	function getTargetText (body: ACTOR_BODY_TYPE[], cls: ACTOR_CLASS[], role: ROLE_TYPE[], target: TARGET_TYPE): preact.VNode {
		const _bodies: preact.VNode[] = [
			<Locale raw={ false } k="BUFFTARGET_BIOROID" />,
			<Locale raw={ false } k="BUFFTARGET_AGS" />,
		];
		const _classes: preact.VNode[] = [
			<Locale raw={ false } k="BUFFTARGET_LIGHT" />,
			<Locale raw={ false } k="BUFFTARGET_HEAVY" />,
			<Locale raw={ false } k="BUFFTARGET_MOBILITY" />,
		];
		const _roles: preact.VNode[] = [
			<Locale raw={ false } k="BUFFTARGET_DEFENDER" />,
			<Locale raw={ false } k="BUFFTARGET_ATTACKER" />,
			<Locale raw={ false } k="BUFFTARGET_SUPPORTER" />,
		];

		const targetSide = target === TARGET_TYPE.SELF
			? <Locale raw={ false } k="BUFFTARGET_SELF" />
			: target === TARGET_TYPE.OUR_ALL
				? props.invert
					? <Locale raw={ false } k="BUFFTARGET_ENEMY_ALL" />
					: <Locale raw={ false } k="BUFFTARGET_TEAM_ALL" />
				: target === TARGET_TYPE.ENEMY_ALL
					? props.invert
						? <Locale raw={ false } k="BUFFTARGET_TEAM_ALL" />
						: <Locale raw={ false } k="BUFFTARGET_ENEMY_ALL" />
					: target === TARGET_TYPE.OUR || target === TARGET_TYPE.OUR_GRID
						? props.invert
							? <Locale raw={ false } k="BUFFTARGET_ENEMY" />
							: <Locale raw={ false } k="BUFFTARGET_TEAM" />
						: props.invert
							? <Locale raw={ false } k="BUFFTARGET_TEAM" />
							: <Locale raw={ false } k="BUFFTARGET_ENEMY" />;

		const b = body.length === 2
			? null
			: _bodies[body[0]];
		const c = cls.length === 3
			? null
			: cls.map(x => _classes[x]).gap("/");
		const r = role.length === 3
			? null
			: role.map(x => _roles[x]).gap("/");

		return <>
			{ [b, c, r].filter(x => x !== null).gap("/") }
			<span> { targetSide }</span>
		</>;
	}

	function formatDesc (
		type: NUM_OUTPUTTYPE,
		template: string,
		value: string,
		per: string | undefined,
		level: number | undefined,
		shortize: number = 0,
	): string {
		if (shortize === 1 || shortize === 2) {
			const regex = /^(.+)([：:].+)$/;
			if (regex.test(template))
				template = template.replace(regex, `$${shortize}`).trim();
			else if (shortize === 2)
				return "";
		}

		if (value.startsWith("Char_")) {
			const key = value.replace(/Char_(.+)_N/, "$1");
			const unit = FilterableUnitDB.find(x => x.uid === key);
			if (!unit) return `${template} - ${key}`;

			return `${template} - ${loc[`UNIT_${unit.uid}`]}`;
		}

		if (type === NUM_OUTPUTTYPE.INTEGER) {
			try {
				const v = Decimal.mul(per || "0", level || 0)
					.add(value)
					.toNumber()
					.toString();
				return template.replace(/\{0\}/g, v);
			} catch {
				return template;
			}
		}

		try {
			const v = Decimal.mul(per || "0", level || 0)
				.add(value)
				.mul(100)
				.toNumber()
				.toString();
			return template.replace(/\{0\}/g, v);
		} catch {
			return template;
		}
	}

	function isStatable (type: BUFFEFFECT_TYPE): boolean {
		switch (type) {
			case BUFFEFFECT_TYPE.STAT_ATK_VALUE:
			case BUFFEFFECT_TYPE.STAT_DEF_VALUE:
			case BUFFEFFECT_TYPE.STAT_HP_VALUE:
			case BUFFEFFECT_TYPE.STAT_RATING_VALUE:
			case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE:
			case BUFFEFFECT_TYPE.STAT_AVOID_VALUE:
				return true;
		}
		return false;
	}

	function toStatablePoint (stat: BuffStatStatic, level: number = 0): preact.VNode {
		if (!level) level = 0;

		function Convert (a: string | number, b: string | number): preact.VNode {
			// const dec = Decimal.div(a, b);
			// const quotient = dec.floor();
			// const remainder = dec.sub(quotient).toFraction(5);

			// return <>
			// 	<span>{ quotient.toNumber() }</span>
			// 	<span class="px-1">+</span>
			// 	<span>{ remainder[0].toNumber() }/{ remainder[1].toNumber() }</span>
			// </>;
			return <>{
				Decimal.div(a, b)
					.toFixed(5)
					.replace(/\.?0+$/, "")
			}</>;
		}

		if ("attack" in stat)
			return Convert(nsignedValue(stat.attack, level), StatPointValue.ATK || 0);

		if ("defense" in stat)
			return Convert(nsignedValue(stat.defense, level), StatPointValue.DEF || 0);

		if ("hp" in stat)
			return Convert(nsignedValue(stat.hp, level), StatPointValue.HP || 0);

		if ("accuracy" in stat)
			return Convert(nsignedValue(stat.accuracy, level).replace("%", ""), StatPointValue.ACC || 0);

		if ("critical" in stat)
			return Convert(nsignedValue(stat.critical, level).replace("%", ""), StatPointValue.CRI || 0);

		if ("evade" in stat)
			return Convert(nsignedValue(stat.evade, level).replace("%", ""), StatPointValue.EVA || 0);

		return <></>;
	}

	function BuffOverlapAvailable (maxStack: number, overlap: BUFF_OVERLAP_TYPE, erase: BuffErase): BUFF_OVERLAP_TYPE | false {
		if ([
			BUFF_OVERLAP_TYPE.INSTANCE,
			BUFF_OVERLAP_TYPE.RENEW,
			BUFF_OVERLAP_TYPE.SINGLE,
		].includes(overlap))
			return overlap;

		if (overlap === BUFF_OVERLAP_TYPE.UPDATE && maxStack === 0)
			return false;

		if ("rounds" in erase && erase.rounds === 0)
			return BUFF_OVERLAP_TYPE.INSTANCE;

		if (maxStack === 0)
			return false;

		return overlap;
	}
	function BuffMaxStackAvailable (maxStack: number, overlap: BUFF_OVERLAP_TYPE, erase: BuffErase): number {
		if ("rounds" in erase && erase.rounds === 0) return 3;
		if (overlap === BUFF_OVERLAP_TYPE.RENEW) return 3;
		if (overlap === BUFF_OVERLAP_TYPE.UPDATE)
			return (maxStack === 0 ? 2 : 0);

		if (maxStack <= 0) return 2;
		if (overlap === BUFF_OVERLAP_TYPE.SINGLE) return 1;
		return 0;
	}

	const stat = props.stat;
	const level = props.level;

	const elems: preact.VNode[] = [];
	const commonCond: preact.VNode[] = [];

	if ("unknown" in stat) { // Unknown
		elems.push(<div class="clearfix text-secondary">
			<small>{ stat.unknown }</small>
		</div>);
	} else if ("buffs" in stat) { // 버프 형식의 수치
		commonCond.push(
			<li class={ BuildClass("list-group-item list-group-item-warning px-2 py-1", style.BuffName) }>
				<strong>
					<span class="badge bg-dark text-bg-dark me-2">
						{ getBuffUid(props.uid, stat.key) }
					</span>
					<Locale raw={ false } k={ stat.key } />

					{ IsDev
						? <small class="ms-2 text-secondary">{ stat.key }</small>
						: <></>
					}
				</strong>
			</li>,
		);

		const target = getTargetText(stat.body, stat.class, stat.role, stat.target);
		const on = getTriggerText(stat.on);
		const apply = (stat.if || [])
			.map(e => getTriggerText(e))
			.filter(e => e)
			.gap(<span class="mx-1 opacity-75">
				<Locale k="BUFFTRIGGER_AND" />
			</span>);
		commonCond.push(<li class="list-group-item list-group-item-warning p-1">
			{ on
				? <span class="badge bg-success ms-1 text-wrap">{ on }</span>
				: <></>
			}
			{ apply
				? <span class="badge bg-danger ms-1 text-wrap">{ apply }</span>
				: <></>
			}
			{ target
				? <span class="badge bg-stat-def ms-1 text-wrap">
					<Locale raw={ false } k="BUFFTARGET_TO" p={ [target] } />
				</span>
				: <></>
			}
		</li>);

		const ext = ImageExtension();
		stat.buffs.forEach(buff => {
			const erase = getEraseText(buff.erase);
			const overlap = BuffOverlapAvailable(stat.maxStack, buff.overlap, buff.erase);

			// title={ formatDesc(buff.desc.type, buff.desc.desc, buff.desc.value, buff.desc.level, level) }
			if (buff.value.chance !== "0%" || props.dummy) {
				const StackTable: Record<BUFF_OVERLAP_TYPE, string> = {
					[BUFF_OVERLAP_TYPE.INSTANCE]: "INSTANCE",
					[BUFF_OVERLAP_TYPE.RENEW]: "RENEW",
					[BUFF_OVERLAP_TYPE.EXTEND]: "EXTEND",
					[BUFF_OVERLAP_TYPE.SINGLE]: "SINGLE",
					[BUFF_OVERLAP_TYPE.UPDATE]: "UPDATE",
				};

				const buffName = (() => {
					const _template = buff.desc.desc in loc
						? formatString(loc[buff.desc.desc] ?? "", "{0}")
						: "";
					const separated = /[：:]/.test(_template);

					const template = separated
						? _template
						: _template.replace(/\{0\}/g, ": {0}");

					return <>
						{ formatDesc(buff.desc.type, template, buff.desc.value, buff.desc.level, level, 1) }
						<small class="ms-2 text-primary">
							{ formatDesc(buff.desc.type, template, buff.desc.value, buff.desc.level, level, 2) }
						</small>
					</>;
				})();

				elems.push(<div class="clearfix">
					<div>
						<BuffIcon class={ cn(style.BuffIcon, "me-1") } inline buff={ buff.icon } />

						<strong class="align-middle">
							{ buffName }

							{ IsDev
								? <small class="ms-2 text-secondary">{ buff.desc.desc }</small>
								: <></>
							}

							{ getChanceText(buff.value.chance) }
						</strong>
						<div class="float-end">
							{ overlap !== false
								? <BootstrapTooltip content={ <span class={ style.OverlapTooltip }>
									<Locale raw={ false } k={ `BUFFOVERLAP_DESC_${StackTable[overlap]}` } />
								</span> }>
									<span class={ `badge bg-orange ms-2 ${style.OverlapBadge}` }>
										<Locale raw={ false } k={ `BUFFOVERLAP_${StackTable[overlap]}` } />
										<Icons.QuestionCircleFill class={ `ms-1 ${style.QuestionIcon}` } />
									</span>
								</BootstrapTooltip>
								: <></>
							}

							<span class="badge bg-substory ms-2 text-wrap">
								<Locale raw={ false } k={ `BUFFEFFECT_ATTR_${buff.attr}` } />
							</span>
						</div>
					</div>

					<div class="ps-3">
						<div class="float-start">
							{ getBuffText(buff.value, level) }
						</div>
						<div class="float-end text-end">
							<span class="badge bg-dark ms-1 text-wrap">
								{ [
									<Locale raw={ false } k="BUFFSTACK" p={ [stat.maxStack] } />,
									<Locale raw={ false } k="BUFFSTACK" p={ [1] } />,
									<Locale raw={ false } k="BUFFSTACK_UNLIMITED" />,
									<></>,
								][BuffMaxStackAvailable(stat.maxStack, buff.overlap, buff.erase)] }
							</span>

							<span class="badge bg-warning text-dark ms-1 text-wrap">{ erase }</span>
						</div>
					</div>
				</div>);
			}
		});
	} else if (Array.isArray(stat)) {
		// 단순 스탯 수치 배열

		stat.forEach(stat => {
			const buff = stat as BuffStatStatic;
			const statType = ((): string => {
				switch (buff.type) {
					case BUFFEFFECT_TYPE.STAT_ATK_RATIO:
					case BUFFEFFECT_TYPE.STAT_ATK_VALUE:
						return "ATK";
					case BUFFEFFECT_TYPE.STAT_DEF_RATIO:
					case BUFFEFFECT_TYPE.STAT_DEF_VALUE:
						return "DEF";
					case BUFFEFFECT_TYPE.STAT_RATING_RATIO:
					case BUFFEFFECT_TYPE.STAT_RATING_VALUE:
						return "ACC";
					case BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO:
					case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE:
						return "CRI";
					case BUFFEFFECT_TYPE.STAT_HP_RATIO:
					case BUFFEFFECT_TYPE.STAT_HP_VALUE:
						return "HP";
					case BUFFEFFECT_TYPE.STAT_AVOID_RATIO:
					case BUFFEFFECT_TYPE.STAT_AVOID_VALUE:
						return "EVA";
					case BUFFEFFECT_TYPE.STAT_SPEED_RATIO:
					case BUFFEFFECT_TYPE.STAT_SPEED_VALUE:
						return "SPD";
				}
				return "";
			})();

			function marginFix (node: preact.VNode): preact.VNode {
				if (node.type === Fragment) {
					const c = node.props.children;
					if (Array.isArray(c)) {
						c.forEach(x => {
							if (x && typeof x === "object" && "props" in x && "class" in x.props) {
								const cls = x.props.class.split(" ");
								const offset = cls.indexOf("mx-1");
								if (offset >= 0) cls.splice(offset, 1, "me-2");
								x.props.class = cls.join(" ");
							}
						});
					} else if (c) {
						const x = c;
						if (x && typeof x === "object" && "props" in x && "class" in x.props) {
							const cls = x.props.class.split(" ");
							const offset = cls.indexOf("mx-1");
							if (offset >= 0) cls.splice(offset, 1, "me-2");
							x.props.class = cls.join(" ");
						}
					}
				}
				return node;
			}

			elems.push(<div class="clearfix">
				<div>
					<div class="float-start">
						{ statType ? <StatIcon stat={ statType } /> : <></> }
						{ marginFix(getBuffText(buff, level)) }
					</div>
					{ isStatable(buff.type)
						? <div class="float-end text-end">
							<span class="badge bg-dark">
								<Locale raw={ false } k="BUFFPOINT" p={ [toStatablePoint(buff, level)] } />
							</span>
						</div>
						: <></>
					}
				</div>
			</div>);
		});
	} else if (stat.chance !== "0%") {
		elems.push(<div class="clearfix">
			<div class="float-start">
				{ getBuffText(stat, level) }
				{ getChanceText(stat.chance) }
			</div>
			{ isStatable(stat.type)
				? <div class="float-end text-end">
					<span class="badge bg-dark">
						<Locale raw={ false } k="BUFFPOINT" p={ [toStatablePoint(stat, level)] } />
					</span>
				</div>
				: <></>
			}
		</div>);
	}

	return <ul class="list-group text-start">
		{ commonCond }
		{ elems.length > 0
			? elems.map(x => <li class="list-group-item">{ x }</li>)
			: <li class="list-group-item text-secondary text-center">
				<Locale k="BUFF_EMPTY" />
			</li>
		}
	</ul>;
};

interface BuffListProps {
	class?: string;

	uid?: string;
	list?: readonly BuffStat[];
	level?: number;
	invert?: boolean;
	dummy?: boolean;
}

const BuffList: FunctionalComponent<BuffListProps> = (props) => {
	return <Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
		const list = props.list || [];
		const level = props.level || 0;
		const dummy = props.dummy || false;

		const staticList = list.filter(x => !("buffs" in x || "unknown" in x));
		const dynamicList = list.filter(x => "buffs" in x || "unknown" in x).map(stat => <BuffRenderer
			uid={ props.uid ?? "" }
			stat={ stat }
			level={ level }
			invert={ props.invert }
			dummy={ dummy }
		/>);
		return <div class={ `${style.BuffList} text-dark ${props.class || ""}` }>
			{ staticList.length > 0
				? <ul class="list-group text-start">
					<BuffRenderer
						uid={ props.uid ?? "" }
						stat={ staticList }
						level={ level }
						invert={ props.invert }
						dummy={ dummy }
					/>
				</ul>
				: <></>
			}
			{ dynamicList }
		</div>;
	}) } />;
};
export default BuffList;
