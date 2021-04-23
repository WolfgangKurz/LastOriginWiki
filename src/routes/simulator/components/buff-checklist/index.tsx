import { Fragment, FunctionalComponent, h } from "preact";
import Decimal from "decimal.js";
import render from "preact-render-to-string";

import { BuffEffectValue, BUFFEFFECT_TYPE, BuffEffect } from "@/types/BuffEffect";
import { BuffStat, BuffStatBuff } from "@/types/Buffs";
import { BuffErase } from "@/types/BuffErase";
import { BuffTrigger } from "@/types/BuffTrigger";
import { UNIT_POSITION, BUFF_ATTR_TYPE, SKILL_ATTR, ACTOR_BODY_TYPE, ACTOR_CLASS, ROLE_TYPE, TARGET_TYPE, NUM_OUTPUTTYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import ElemIcon from "@/components/elem-icon";
import { BuffRenderer } from "@/components/buff-list";

import style from "./style.scss";

interface BuffRendererProps {
	idx: number;
	stat: BuffStatBuff | BuffStatBuff[];
	level?: number;

	enabled: string[];
	stacks: Record<string, number>;

	onUpdate?: (key: string, checked: boolean) => void;
	onStack?: (key: string, value: number) => void;
}

const CheckableBuffRenderer: FunctionalComponent<BuffRendererProps> = (props) => {
	const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

	const VNodeUnique = (entity: preact.VNode): string => render(entity);

	function signedValue (value: BuffEffectValue, level: number = 0): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = p
			? new Decimal(base_.substr(0, base_.length - 1)).toNumber()
			: new Decimal(base_).toNumber();

		const per = p
			? new Decimal(per_.substr(0, per_.length - 1)).toNumber()
			: new Decimal(per_).toNumber();

		const val = Decimal.mul(per, level)
			.add(base)
			.toNumber();
		if (val > 0) return `+${val}${p}`;
		return val + p;
	}
	function nsignedValue (value: BuffEffectValue, level: number = 0): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = p
			? new Decimal(base_.substr(0, base_.length - 1)).toNumber()
			: new Decimal(base_).toNumber();
		const per = p
			? new Decimal(per_.substr(0, per_.length - 1)).toNumber()
			: new Decimal(per_).toNumber();
		const val = Decimal.mul(per, level)
			.add(base)
			.toNumber();
		return val + p;
	}
	function signedInteger (value: BuffEffectValue, level: number = 0): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = p
			? new Decimal(base_.substr(0, base_.length - 1)).toNumber()
			: new Decimal(base_).toNumber();
		const per = p
			? new Decimal(per_.substr(0, per_.length - 1)).toNumber()
			: new Decimal(per_).toNumber();
		const val = Decimal.mul(per, level)
			.add(base)
			.floor()
			.toNumber();
		if (val > 0) return `+${val}${p}`;
		return val + p;
	}
	function nsignedInteger (value: BuffEffectValue, level: number = 0): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";

		const base_ = value.base.toString();
		const per_ = value.per.toString();

		const base = p
			? new Decimal(base_.substr(0, base_.length - 1)).toNumber()
			: new Decimal(base_).toNumber();
		const per = p
			? new Decimal(per_.substr(0, per_.length - 1)).toNumber()
			: new Decimal(per_).toNumber();
		const val = Decimal.mul(per, level)
			.add(base)
			.floor()
			.toNumber();
		return val + p;
	}
	function isRatioValue (value: BuffEffectValue, ifTrue: string = "", ifFalse: string = ""): string {
		const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";
		return p ? ifTrue : ifFalse;
	}

	function convertBuff (name: string): preact.VNode {
		if (name.startsWith("Char_")) {
			const key = name.replace(/Char_(.+)_N/, "$1");
			const unit = FilterableUnitDB.find(x => x.uid === key);
			if (!unit) return <Fragment>{ key }</Fragment>;

			return <span class={ `on-subbadge ${style["on-subbadge"]}` }>
				<Locale plain k={ `UNIT_${unit.uid}` } />
			</span>;
		} else if (name.startsWith("MOB_")) {
			const key = name.replace(/MOB_MP_(.+)/, "$1");
			return <span class={ `on-subbadge ${style["on-subbadge"]}` }>
				<Locale plain k={ `ENEMY_${key}` } />
			</span>;
		}
		return <span class={ `on-subbadge ${style["on-subbadge"]}` }>
			<Locale plain k={ name } />
		</span>;
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

	function getChanceText (chance: string | undefined): preact.VNode {
		if (!chance) chance = "100%";
		if (chance === "100%") return <Fragment />;

		return <span class="badge bg-success ms-3">
			<Locale plain k="BUFFCHANCE" p={ [chance] } />
		</span>;
	}
	function getBuffEffectTypeText (type: BUFFEFFECT_TYPE, target: BUFF_ATTR_TYPE): preact.VNode {
		const tUP = <Locale plain k="BUFFTYPE_UP" />;
		const tDOWN = <Locale plain k="BUFFTYPE_DOWN" />;
		const p = target === BUFF_ATTR_TYPE.BUFF ? tUP : target === BUFF_ATTR_TYPE.DEBUFF ? tDOWN : "";
		const n = target === BUFF_ATTR_TYPE.BUFF ? tDOWN : target === BUFF_ATTR_TYPE.DEBUFF ? tUP : "";

		switch (type) {
			case BUFFEFFECT_TYPE.STAT_ATK_VALUE: // 0
			case BUFFEFFECT_TYPE.STAT_ATK_RATIO: // 1
				return <Locale plain k="BUFFTYPE_ATK" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_DEF_VALUE: // 2
			case BUFFEFFECT_TYPE.STAT_DEF_RATIO: // 3
				return <Locale plain k="BUFFTYPE_DEF" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_HP_VALUE: // 4
			case BUFFEFFECT_TYPE.STAT_HP_RATIO: // 5
				return <Locale plain k="BUFFTYPE_HP" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_RATING_VALUE: // 6
			case BUFFEFFECT_TYPE.STAT_RATING_RATIO: // 7
				return <Locale plain k="BUFFTYPE_ACC" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE: // 8
			case BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO: // 9
				return <Locale plain k="BUFFTYPE_CRIT" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_AVOID_VALUE: // 10
			case BUFFEFFECT_TYPE.STAT_AVOID_RATIO: // 11
				return <Locale plain k="BUFFTYPE_EVA" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_SPEED_VALUE: // 12
			case BUFFEFFECT_TYPE.STAT_SPEED_RATIO: // 13
				return <Locale plain k="BUFFTYPE_SPD" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_RESFIRE_VALUE: // 14
			case BUFFEFFECT_TYPE.STAT_RESFIRE_RATIO: // 15
				return <Fragment>
					<ElemIcon elem="fire" class="me-1 mb-0" />
					<Locale plain k="BUFFTYPE_FIRE_RES" p={ [p] } />
				</Fragment>;
			case BUFFEFFECT_TYPE.STAT_RESICE_VALUE: // 16
			case BUFFEFFECT_TYPE.STAT_RESICE_RATIO: // 17
				return <Fragment>
					<ElemIcon elem="ice" class="me-1 mb-0" />
					<Locale plain k="BUFFTYPE_ICE_RES" p={ [p] } />
				</Fragment>;
			case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_VALUE: // 18
			case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_RATIO: // 19
				return <Fragment>
					<ElemIcon elem="lightning" class="me-1 mb-0" />
					<Locale plain k="BUFFTYPE_THUNDER_RES" p={ [p] } />
				</Fragment>;
			case BUFFEFFECT_TYPE.STAGE_AP_VALUE: // 20
			case BUFFEFFECT_TYPE.STAGE_AP_SHIFT: // 21
				return <Locale plain k="BUFFTYPE_AP" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_AP_STOP: // 22
				return <Locale plain k="BUFFTYPE_STUN" />;
			case BUFFEFFECT_TYPE.UI_INFO_NEXTENEMY: // 23
				return <Locale plain k="BUFFTYPE_SCOUT" />;
			case BUFFEFFECT_TYPE.STAGE_THORNS_RATIO: // 24
				return <Fragment>STAGE_THORNS_RATIO{ p }</Fragment>; // 사용처 없음, 알 수 없음 (이름으로 보아, 공격 시 공격 일부가 반사되는 것으로 보임)
			case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_VALUE: // 25
				return <Fragment>STAGE_REFLECTPHYSICS_VALUE{ p }</Fragment>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 물리 속성으로)
			case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_VALUE: // 26
				return <Fragment>STAGE_REFLECTFIRE_VALUE{ p }</Fragment>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 화염 속성으로)
			case BUFFEFFECT_TYPE.STAGE_REFLECTICE_VALUE: // 27
				return <Fragment>STAGE_REFLECTICE_VALUE{ p }</Fragment>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 냉기 속성으로)
			case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_VALUE: // 28
				return <Fragment>STAGE_REFLECTLIGHTNIG_VALUE{ p }</Fragment>; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 전기 속성으로)
			case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_RATIO_DEFENDER: // 29
				return <Locale plain k="BUFFTYPE_COUNT" />; // 피격자가 물리 반격
			case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_RATIO_DEFENDER: // 30
				return <Fragment>STAGE_REFLECTFIRE_RATIO_DEFENDER{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_REFLECTICE_RATIO_DEFENDER: // 31
				return <Fragment>STAGE_REFLECTICE_RATIO_DEFENDER{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER: // 32
				return <Fragment>STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_TIME: // 33
				return <Locale plain k="BUFFTYPE_DMG_IMMUNE" />; // 피해 무효화
			case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE: // 34
				return <Locale plain k="BUFFTYPE_DMG_MINIMIZE" />; // value 이하 피해 1로 적용
			case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE_LIMITED: // 35
				return <Fragment>STAGE_SHIELD_VALUE_LIMITED{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO: // 36
				return <Locale plain k="BUFFTYPE_GET_DMG_DOWN" />; // 받는 피해 감소
			case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO_LIMITED: // 37
				return <Fragment>STAGE_SHIELD_RATIO_LIMITED{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_VALUE: // 38
				return <Locale plain k="BUFFTYPE_BARRIER" />; // 방어막
			case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO: // 39
			case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_VALUE: // 40
				return <Locale plain k="BUFFTYPE_ADDDMG_PHYSICS" />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO: // 41
			case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_VALUE: // 42
				return <Locale plain k="BUFFTYPE_ADDDMG_FIRE" />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO: // 43
			case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_VALUE: // 44
				return <Locale plain k="BUFFTYPE_ADDDMG_ICE" />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO: // 45
			case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_VALUE: // 46
				return <Locale plain k="BUFFTYPE_ADDDMG_THUNDER" />;
			case BUFFEFFECT_TYPE.STAGE_LOCKON01_TIME: // 47
				return <Fragment>STAGE_LOCKON01_TIME{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_RATIO: // 48
				return <Locale plain k="BUFFTYPE_GET_DMG_UP" />; // 받는 피해 증가 %
			case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_VALUE: // 49
				return <Fragment>STAGE_ADDDAMAGE_VALUE{ p }</Fragment>; // 사용처 없음, 받는 피해 증가 고정값
			case BUFFEFFECT_TYPE.STAGE_BLOCK_COLUMN: // 50
				return <Locale plain k="BUFFTYPE_BLOCK_COLUMN" />; // 행 보호
			case BUFFEFFECT_TYPE.STAGE_BLOCK_GRID: // 51
				return <Fragment>STAGE_BLOCK_GRID{ p }</Fragment>; // 사용처 없음, 격자 보호?
			case BUFFEFFECT_TYPE.STAGE_MOVE_BACK: // 52
				return <Locale plain k="BUFFTYPE_PUSH" />;
			case BUFFEFFECT_TYPE.STAGE_MOVE_FRONT: // 53
				return <Locale plain k="BUFFTYPE_PULL" />;
			case BUFFEFFECT_TYPE.STAGE_CRITICAL_NEXTATTACK: // 54
				return <Locale plain k="BUFFTYPE_CRIT_NEXT" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAT_RANGE_VALUE: // 55
				return <Locale plain k="BUFFTYPE_RANGE" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_AGRO_VALUE: // 56
				return <Fragment>STAGE_AGRO_VALUE{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_VALUE: // 57
				return <Fragment>STAGE_DEFPIERCE_VALUE{ p }</Fragment>; // 방어 관통 고정값?
			case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_RATIO: // 58
				return <Locale plain k="DEF_PIERCE" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_GRID_CHANGE: // 59
				return <Fragment>STAGE_GRID_CHANGE{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_TROOPERTYPEDMGBONUS_RATIO: // 60
				return <Locale plain k="BUFFTYPE_ANTI_LIGHT_DMG" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_ARMOREDTYPEDMGBONUS_RATIO: // 61
				return <Locale plain k="BUFFTYPE_ANTI_HEAVY_DMG" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_MOBILITYTYPEDMGBONUS_RATIO: // 62
				return <Locale plain k="BUFFTYPE_ANTI_MOBILITY_DMG" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT: // 63
			case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_LIMITED: // 64
				return <Locale plain k="BUFFTYPE_TRANSFORM" />;
			case BUFFEFFECT_TYPE.STAGE_PHYSICS_DOT: // 65
				return <Locale plain k="BUFFTYPE_DOT_PHYSICS" />;
			case BUFFEFFECT_TYPE.STAGE_FIRE_DOT: // 66
				return <Locale plain k="BUFFTYPE_DOT_FIRE" />;
			case BUFFEFFECT_TYPE.STAGE_ICE_DOT: // 67
				return <Locale plain k="BUFFTYPE_DOT_ICE" />;
			case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DOT: // 68
				return <Locale plain k="BUFFTYPE_DOT_THUNDER" />;
			case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM: // 69
			case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF: // 88
			case BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF: // 89
			case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE: // 97
			case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_BUFF: // 99
			case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_DEBUFF: // 100
				return <Locale plain k="BUFFTYPE_OFF" />;
			case BUFFEFFECT_TYPE.STAGE_PHYSICS_DAMAGE_APPLY: // 70
				return <Locale plain k="BUFFTYPE_DMG_PHYSICS_BY_HP" />;
			case BUFFEFFECT_TYPE.STAGE_FIRE_DAMAGE_APPLY: // 71
				return <Locale plain k="BUFFTYPE_DMG_FIRE_BY_HP" />;
			case BUFFEFFECT_TYPE.STAGE_ICE_DAMAGE_APPLY: // 72
				return <Locale plain k="BUFFTYPE_DMG_ICE_BY_HP" />;
			case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DAMAGE_APPLY: // 73
				return <Locale plain k="BUFFTYPE_DMG_THUNDER_BY_HP" />;
			case BUFFEFFECT_TYPE.STAGE_PROVOKE: // 74
				return <Locale plain k="BUFFTYPE_PROVOKE" />;
			case BUFFEFFECT_TYPE.STAGE_BLOCK_ROW: // 75
				return <Locale plain k="BUFFTYPE_BLOCK_ROW" />;
			case BUFFEFFECT_TYPE.STAGE_BLOCK_CHARACTER: // 76
				return <Locale plain k="BUFFTYPE_BLOCK_CHAR" />;
			case BUFFEFFECT_TYPE.STAGE_SUPPORT_ATTACK: // 77
				return <Locale plain k="BUFFTYPE_SUPPORT_ATK" />;
			case BUFFEFFECT_TYPE.STAGE_SNARE: // 78
				return <Locale plain k="BUFFTYPE_SNARE" />;
			case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL: // 79
				return <Locale plain k="BUFFTYPE_SEAL" />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_ME: // 80
				return <Locale plain k="BUFFTYPE_DMG_UP_BY_HP" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_OPP: // 81
				return <Locale plain k="BUFFTYPE_DMG_UP_BY_TARGET_HP" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_RESURRECT: // 82
			case BUFFEFFECT_TYPE.STAGE_RESURRECT_RATIO: // 98
				return <Locale plain k="BUFFTYPE_RESURRECT" />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO_INS: // 83
				return <Locale plain k="BUFFTYPE_DMG" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO_INS: // 84
				return <Locale plain k="BUFFTYPE_DMG_FIRE" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO_INS: // 85
				return <Locale plain k="BUFFTYPE_DMG_ICE" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO_INS: // 86
				return <Locale plain k="BUFFTYPE_DMG_THUNDER" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_MARKING: // 87
				return <Locale plain k="BUFFTYPE_MARKING" />;
			case BUFFEFFECT_TYPE.STAGE_DEBUFF_RATEUP: // 90
			case BUFFEFFECT_TYPE.STAGE_DEBUFF_PERDOWN: // 91
				return <Locale plain k="BUFFTYPE_RES_DEBUFF" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_BUFFEFFECTRATE_CHANGE: // 92
				return <Locale plain k="BUFFTYPE_EFFECT_RATE" p={ [p] } />;
			case BUFFEFFECT_TYPE.REMOVE_SUMMON_INSTENV: // 93
				return <Locale plain k="BUFFTYPE_SUMMON_INSTENV" />;
			case BUFFEFFECT_TYPE.BARRIER_PIERCE: // 94
				return <Locale plain k="BUFFTYPE_BARRIER_PIERCE" />;
			case BUFFEFFECT_TYPE.STAGE_EXP_UP: // 95
				return <Locale plain k="BUFFTYPE_EXP" p={ [p] } />;
			case BUFFEFFECT_TYPE.STAGE_ANALYZE: // 96
				return <Fragment>STAGE_ANALYZE{ p }</Fragment>; // 사용처 없음, 알 수 없음
			case BUFFEFFECT_TYPE.STAGE_IMMUNITY_DEBUFF: // 101
				return <Locale plain k="BUFFTYPE_DEBUFF_IMMUNE" p={ [p] } />; // 효과 면역
			case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1: // 102
			case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2: // 103
				return <Locale plain k="BUFFTYPE_TOGETHER" />;
			case BUFFEFFECT_TYPE.STAT_MAXHP_VALUE: // 104
			case BUFFEFFECT_TYPE.STAT_MAXHP_RATIO: // 105
				return <Locale plain k="BUFFTYPE_MAXHP" p={ [p] } />;
		}
		return <Fragment>???</Fragment>;
	}
	function getTriggerText (trigger: BuffTrigger): preact.VNode {
		if (typeof trigger === "string") {
			switch (trigger) {
				case "damaged":
					return <Locale plain k="BUFFTRIGGER_DAMAGED" />;
				case "attack_success":
					return <Locale plain k="BUFFTRIGGER_ATTACK_SUCCESS" />;
				case "team_dead":
					return <Locale plain k="BUFFTRIGGER_TEAM_DIED" />;
				case "self_dead":
					return <Locale plain k="BUFFTRIGGER_DIED" />;
				case "enemy_dead":
					return <Locale plain k="BUFFTRIGGER_ENEMY_DIED" />;
				case "wave":
					return <Locale plain k="BUFFTRIGGER_BATTLE_START" />;
				case "round":
					return <Locale plain k="BUFFTRIGGER_EVERY_ROUND" />;
				case "attack":
					return <Locale plain k="BUFFTRIGGER_ATTACK" />;
				case "attacked":
					return <Locale plain k="BUFFTRIGGER_ATTACKED" />;
				case "wait":
					return <Locale plain k="BUFFTRIGGER_WAIT" />;
				case "move":
					return <Locale plain k="BUFFTRIGGER_MOVE" />;
				case "evade":
					return <Locale plain k="BUFFTRIGGER_EVADE" />;
				case "wave_end":
					return <Locale plain k="BUFFTRIGGER_END_WAVE" />;
				case "enemy_killed":
					return <Locale plain k="BUFFTRIGGER_KILL" />;
				case "criticaled":
					return <Locale plain k="BUFFTRIGGER_CRITICALED" />;
				case "revive":
					return <Locale plain k="BUFFTRIGGER_RESURRECT" />;
			}
		} else if (trigger) {
			if ("_comment" in trigger)
				return <Fragment>{ trigger._comment }</Fragment>;
			else if ("after" in trigger) {
				switch (trigger.after) {
					case "counter":
						return <Locale plain k="BUFFTRIGGER_AFTER_COUNTER" />;
					case "use_skill":
						return <Locale plain k="BUFFTRIGGER_AFTER_SKILL" />;
				}
			} else if ("damaged" in trigger) {
				switch (trigger.damaged) {
					case "fire":
						return <Fragment>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale plain k="BUFFTRIGGER_DAMAGED_FIRE" />
						</Fragment>;
					case "ice":
						return <Fragment>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale plain k="BUFFTRIGGER_DAMAGED_ICE" />
						</Fragment>;
					case "lightning":
						return <Fragment>
							<ElemIcon elem={ trigger.damaged } class="me-1 mb-0" />
							<Locale plain k="BUFFTRIGGER_DAMAGED_THUNDER" />
						</Fragment>;
				}
			} else if ("hp>=" in trigger) {
				if (typeof trigger["hp>="] === "string")
					return <Locale plain k="BUFFTRIGGER_HP_>=" p={ ["", trigger["hp>="]] } />;

				const target = {
					self: <Locale plain k="BUFFTARGET_SELF" />,
					target: <Locale plain k="BUFFTARGET_TARGET" />,
				}[trigger["hp>="].target];
				return <Locale plain k="BUFFTRIGGER_HP_>=" p={ [target, trigger["hp>="].value] } />;
			} else if ("hp<=" in trigger) {
				if (typeof trigger["hp<="] === "string")
					return <Locale plain k="BUFFTRIGGER_HP_<=" p={ ["", trigger["hp<="]] } />;

				const target = {
					self: <Locale plain k="BUFFTARGET_SELF" />,
					target: <Locale plain k="BUFFTARGET_TARGET" />,
				}[trigger["hp<="].target];
				return <Locale plain k="BUFFTRIGGER_HP_<=" p={ [target, trigger["hp<="].value] } />;
			} else if ("hp>" in trigger) {
				if (typeof trigger["hp>"] === "string")
					return <Locale plain k="BUFFTRIGGER_HP_>" p={ ["", trigger["hp>"]] } />;

				const target = {
					self: <Locale plain k="BUFFTARGET_SELF" />,
					target: <Locale plain k="BUFFTARGET_TARGET" />,
				}[trigger["hp>"].target];
				return <Locale plain k="BUFFTRIGGER_HP_>" p={ [target, trigger["hp>"].value] } />;
			} else if ("hp<" in trigger) {
				if (typeof trigger["hp<"] === "string")
					return <Locale plain k="BUFFTRIGGER_HP_<" p={ ["", trigger["hp<"]] } />;

				const target = {
					self: <Locale plain k="BUFFTARGET_SELF" />,
					target: <Locale plain k="BUFFTARGET_TARGET" />,
				}[trigger["hp<"].target];
				return <Locale plain k="BUFFTRIGGER_HP_<" p={ [target, trigger["hp<"].value] } />;
			} else if ("in_squad" in trigger) {
				if (typeof trigger.in_squad === "string")
					return <Locale plain k="BUFFTRIGGER_IN_SQUAD" p={ [convertBuff(trigger.in_squad)] } />;

				const src = trigger.in_squad
					.map(convertBuff)
					.unique(VNodeUnique);
				return <Locale plain k="BUFFTRIGGER_IN_SQUAD" p={ [
					<Fragment>{ src.gap(<Locale plain k="BUFFTRIGGER_OR" />) }</Fragment>,
				] } />;
			} else if ("in_enemy" in trigger) {
				if (typeof trigger.in_enemy === "string")
					return <Locale plain k="BUFFTRIGGER_IN_ENEMY" p={ [convertBuff(trigger.in_enemy)] } />;

				const src = trigger.in_enemy
					.map(convertBuff)
					.unique(VNodeUnique);
				return <Locale plain k="BUFFTRIGGER_IN_ENEMY" p={ [
					<Fragment>{ src.gap(<Locale plain k="BUFFTRIGGER_OR" />) }</Fragment>,
				] } />;
			} else if ("pos" in trigger) {
				if (typeof trigger.pos === "number") {
					switch (trigger.pos) {
						case UNIT_POSITION.FRONT:
							return <Locale plain k="BUFFTRIGGER_POS_FRONTROW" />;
						case UNIT_POSITION.MIDDLE:
							return <Locale plain k="BUFFTRIGGER_POS_MIDROW" />;
						case UNIT_POSITION.BACK:
							return <Locale plain k="BUFFTRIGGER_POS_BACKROW" />;
					}
				}
				switch (trigger.pos.position) {
					case UNIT_POSITION.FRONT:
						return <Locale plain k="BUFFTRIGGER_POS_TARGET_FRONTROW" />;
					case UNIT_POSITION.MIDDLE:
						return <Locale plain k="BUFFTRIGGER_POS_TARGET_MIDROW" />;
					case UNIT_POSITION.BACK:
						return <Locale plain k="BUFFTRIGGER_POS_TARGET_BACKROW" />;
				}
			} else if ("on" in trigger) {
				if ("func" in trigger.on && Array.isArray(trigger.on.select)) {
					const select: preact.VNode[] = typeof trigger.on.select[0] === "string"
						// BuffTrigger_On_BuffKey
						? (trigger.on.select as string[])
							.map(convertBuff)
							.unique(VNodeUnique)
						// BuffTrigger_On_BuffEffectType
						: (trigger.on.select as BUFFEFFECT_TYPE[])
							.map(x => <span class={ `on-subbadge ${style["on-subbadge"]}` }>
								{ getBuffEffectTypeText(x, trigger.on.attr) }
							</span>)
							.unique(VNodeUnique);

					if (select.length === 1)
						return <Locale plain k={ `BUFFTRIGGER_ON_SINGLE_${trigger.on.func}` } p={ [select[0]] } />;

					return <Locale plain k={ `BUFFTRIGGER_ON_MULTIPLE_${trigger.on.func}` } p={ [
						<Fragment>{ select.gap(", ") }</Fragment>,
					] } />;
				} else if ("target" in trigger.on && "stack" in trigger.on) {
					const select = (trigger.on.select as string[])
						.map(convertBuff)
						.unique(VNodeUnique);

					// BuffTrigger_On_BuffStack
					const target = <Locale plain k={ `BUFFTARGET_${trigger.on.target.toUpperCase()}` } />;
					const params = [
						target,
						<Fragment>{ select.gap(", ") }</Fragment>,
						trigger.on.stack,
					];
					return <Locale plain k={ `BUFFTRIGGER_ON_STACK_TARGET_${select.length === 1 ? "SINGLE" : "MULTIPLE"}` } p={ params } />;
				} else if ("target" in trigger.on && "func" in trigger.on) {
					const select = typeof trigger.on.select[0] === "string"
						// BuffTrigger_On_BuffExists
						? (trigger.on.select as string[])
							.map(convertBuff)
							.unique(VNodeUnique)
						// BuffTrigger_On_BuffTypeExists
						: (trigger.on.select as BUFFEFFECT_TYPE[])
							.map(x => getBuffEffectTypeText(x, trigger.on.attr))
							.unique(VNodeUnique);

					const target = <Locale plain k={ `BUFFTARGET_${trigger.on.target.toUpperCase()}` } />;

					if (select.length === 1)
						return <Locale plain k={ `BUFFTRIGGER_ON_TARGET_SINGLE_${trigger.on.func}` } p={ [target, select[0]] } />;

					const out = select.gap(", ").flat();
					if (typeof select[0] === "number") {
						// BuffTrigger_On_BuffTypeExists
						return <Locale plain k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p={ [
							target,
							<Fragment>{ out }</Fragment>,
						] } />;
					}

					// BuffTrigger_On_BuffExists
					return <Locale plain k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p={ [
						target,
						<Fragment>{ out }</Fragment>,
					] } />;
				}
			} else if ("target" in trigger) {
				if (trigger.target.length === 1)
					return <Locale plain k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p={ [convertBuff(trigger.target[0])] } />;

				const list = trigger.target
					.map(convertBuff)
					.unique(VNodeUnique);
				return <Locale plain k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p={ [
					<Fragment>{ list.gap(", ") }</Fragment>,
				] } />;
			} else if ("unitCount" in trigger) {
				const filters = typeof trigger.unitCount.filter === "string"
					? [trigger.unitCount.filter]
					: trigger.unitCount.filter;
				const count = trigger.unitCount.count;
				const type = trigger.unitCount.type;

				const _classes = [
					<Locale plain k="COMMON_UNIT_TYPE_LIGHT" />,
					<Locale plain k="COMMON_UNIT_TYPE_HEAVY" />,
					<Locale plain k="COMMON_UNIT_TYPE_MOBILITY" />,
				];
				const typeText = type.length === 3
					? [<Fragment />]
					: type.map(x => _classes[x]).gap("/");

				const typeCountParams = [
					<Fragment>{ typeText }</Fragment>,
					<Fragment>{ typeof count === "number" ? count : count.gap("/") }</Fragment>,
				];
				const countParams = [<Fragment>{ count }</Fragment>];

				if (filters.includes("all")) {
					if (filters.includes("bioroid"))
						return <Locale plain k="BUFFTRIGGER_UNIT_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale plain k="BUFFTRIGGER_UNIT_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale plain k="BUFFTRIGGER_UNIT_TYPE" p={ typeCountParams } />;
					return <Locale plain k="BUFFTRIGGER_UNIT_ALL" p={ countParams } />;
				} else if (filters.includes("squad")) {
					if (filters.includes("bioroid"))
						return <Locale plain k="BUFFTRIGGER_TEAM_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale plain k="BUFFTRIGGER_TEAM_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale plain k="BUFFTRIGGER_TEAM_TYPE" p={ typeCountParams } />;
					return <Locale plain k="BUFFTRIGGER_TEAM_ALL" p={ countParams } />;
				} else if (filters.includes("enemy")) {
					if (filters.includes("bioroid"))
						return <Locale plain k="BUFFTRIGGER_ENEMY_BIOROID" p={ typeCountParams } />;
					else if (filters.includes("ags"))
						return <Locale plain k="BUFFTRIGGER_ENEMY_AGS" p={ typeCountParams } />;
					else if (typeText)
						return <Locale plain k="BUFFTRIGGER_ENEMY_TYPE" p={ typeCountParams } />;
					return <Locale plain k="BUFFTRIGGER_ENEMY_ALL" p={ countParams } />;
				}
			} else if ("round" in trigger)
				return <Locale plain k={ `BUFFTRIGGER_ROUND_${trigger.round.operator}` } p={ [trigger.round.round] } />;
			else if ("notInBattle" in trigger)
				return <Locale plain k="BUFFTRIGGER_NOT_IN_BATTLE" p={ [trigger.notInBattle.join(",")] } />;
			return <Fragment>???</Fragment>;
		}
		return <Fragment />;
	}
	function getBuffText (stat: BuffEffect, level?: number): preact.VNode {
		if ("_comment" in stat)
			return <Fragment>{ stat._comment }</Fragment>;
		else if ("off" in stat) {
			if (typeof stat.off === "string")
				return <Locale plain k="BUFFEFFECT_OFF" p={ [stat.off] } />;
			else if (typeof stat.off === "number") {
				const target = {
					0: <Locale plain k="BUFFEFFECT_OFF_TYPE_0" />,
					1: <Locale plain k="BUFFEFFECT_OFF_TYPE_1" />,
					2: <Locale plain k="BUFFEFFECT_OFF_TYPE_2" />,
					3: <Locale plain k="BUFFEFFECT_OFF_TYPE_3" />,
					4: <Locale plain k="BUFFEFFECT_OFF_TYPE_4" />,
				}[stat.off];
				return <Locale plain k="BUFFEFFECT_OFF" p={ [target] } />;
			} else if ("target" in stat.off)
				return <Locale plain k="BUFFEFFECT_OFF" p={ [getBuffEffectTypeText(stat.off.type, stat.off.target)] } />;

			return <Locale plain k="BUFFEFFECT_OFF" p={ [getBuffEffectTypeText(stat.off.type, BUFF_ATTR_TYPE.NO_MATTER)] } />;
		} else if ("attack" in stat)
			return <Locale plain k="BUFFEFFECT_ATK" p={ [signedValue(stat.attack, level)] } />;
		else if ("defense" in stat)
			return <Locale plain k="BUFFEFFECT_DEF" p={ [signedValue(stat.defense, level)] } />;
		else if ("hp" in stat)
			return <Locale plain k="BUFFEFFECT_HP" p={ [signedValue(stat.hp, level)] } />;
		else if ("accuracy" in stat)
			return <Locale plain k="BUFFEFFECT_ACC" p={ [signedValue(stat.accuracy, level)] } />;
		else if ("critical" in stat)
			return <Locale plain k="BUFFEFFECT_CRIT" p={ [signedValue(stat.critical, level)] } />;
		else if ("evade" in stat)
			return <Locale plain k="BUFFEFFECT_EVA" p={ [signedValue(stat.evade, level)] } />;
		else if ("turnSpeed" in stat)
			return <Locale plain k="BUFFEFFECT_SPD" p={ [signedValue(stat.turnSpeed, level)] } />;
		else if ("ap" in stat)
			return <Locale plain k="BUFFEFFECT_AP" p={ [signedValue(stat.ap, level)] } />;
		else if ("ap_set" in stat)
			return <Locale plain k="BUFFEFFECT_AP_SET" p={ [signedValue(stat.ap_set, level)] } />;
		else if ("resist" in stat) {
			if ("elem" in stat.resist) {
				switch (stat.resist.elem) {
					case "fire":
						return <Fragment>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale plain k="BUFFEFFECT_FIRE_RES" p={ [signedValue(stat.resist.value, level)] } />
						</Fragment>;
					case "ice":
						return <Fragment>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale plain k="BUFFEFFECT_ICE_RES" p={ [signedValue(stat.resist.value, level)] } />
						</Fragment>;
					case "lightning":
						return <Fragment>
							<ElemIcon elem={ stat.resist.elem } class="mx-1 mb-0" />
							<Locale plain k="BUFFEFFECT_THUNDER_RES" p={ [signedValue(stat.resist.value, level)] } />
						</Fragment>;
				}
			}

			switch (stat.resist.type) {
				case "debuff":
					return <Locale plain k="BUFFEFFECT_RES_DEBUFF" p={ [signedValue(stat.resist.value, level)] } />;
			}
		} else if ("ap_stop" in stat)
			return <Locale plain k="BUFFEFFECT_STUN" />;
		else if ("scout" in stat)
			return <Locale plain k="BUFFEFFECT_SCOUT" />;
		else if ("counter" in stat)
			return <Locale plain k="BUFFEFFECT_COUNTER" p={ [nsignedValue(stat.counter, level)] } />;
		else if ("damage_immune" in stat)
			return <Locale plain k="BUFFEFFECT_DMG_IMMUNE" p={ [nsignedInteger(stat.damage_immune, level)] } />;
		else if ("damage_minimize" in stat)
			return <Locale plain k="BUFFEFFECT_DMG_MINIMIZE" p={ [nsignedInteger(stat.damage_minimize, level)] } />;
		else if ("damage_reduce" in stat)
			return <Locale plain k="BUFFEFFECT_GET_DMG_DOWN" p={ [nsignedValue(stat.damage_reduce, level)] } />;
		else if ("damage_increase" in stat)
			return <Locale plain k="BUFFEFFECT_GET_DMG_UP" p={ [nsignedValue(stat.damage_increase, level)] } />;
		else if ("damage" in stat) {
			if ("elem" in stat.damage) {
				switch (stat.damage.elem) {
					case "fire":
						return <Fragment>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_ADDDMG_FIRE" p={ [nsignedValue(stat.damage.damage, level)] } />
						</Fragment>;
					case "ice":
						return <Fragment>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_ADDDMG_ICE" p={ [nsignedValue(stat.damage.damage, level)] } />
						</Fragment>;
					case "lightning":
						return <Fragment>
							<ElemIcon elem={ stat.damage.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_ADDDMG_THUNDER" p={ [nsignedValue(stat.damage.damage, level)] } />
						</Fragment>;
				}
			}
			return <Locale plain k="BUFFEFFECT_ADDDMG_PHYSICS" p={ [nsignedValue(stat.damage, level)] } />;
		} else if ("damage_multiply" in stat) {
			switch (stat.damage_multiply.target) {
				case "light":
					return <Locale plain k="BUFFEFFECT_ANTI_LIGHT" p={ [signedValue(stat.damage_multiply.value, level)] } />;
				case "air":
					return <Locale plain k="BUFFEFFECT_ANTI_MOBILITY" p={ [signedValue(stat.damage_multiply.value, level)] } />;
				case "heavy":
					return <Locale plain k="BUFFEFFECT_ANTI_HEAVY" p={ [signedValue(stat.damage_multiply.value, level)] } />;
			}
		} else if ("damage_by_hp" in stat) {
			const target = stat.damage_by_hp.target === "target"
				? <Locale plain k="BUFFTARGET_TARGET" />
				: <Locale plain k="BUFFTARGET_SELF" />;
			return <Locale plain k="BUFFEFFECT_DMG_BY_HP" p={ [target, nsignedValue(stat.damage_by_hp.damage, level)] } />;
		} else if ("damage_add" in stat) {
			if ("elem" in stat.damage_add) {
				switch (stat.damage_add.elem) {
					case "fire":
						return <Fragment>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_DMG_FIRE" p={ [signedValue(stat.damage_add.damage, level)] } />
						</Fragment>;
					case "ice":
						return <Fragment>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_DMG_ICE" p={ [signedValue(stat.damage_add.damage, level)] } />
						</Fragment>;
					case "lightning":
						return <Fragment>
							<ElemIcon elem={ stat.damage_add.elem } class="me-1 mb-0" />
							<Locale plain k="BUFFEFFECT_DMG_THUNDER" p={ [signedValue(stat.damage_add.damage, level)] } />
						</Fragment>;
				}
			}
			return <Locale plain k="BUFFEFFECT_DMG" p={ [signedValue(stat.damage_add, level)] } />;
		} else if ("barrier" in stat)
			return <Locale plain k="BUFFEFFECT_BARRIER" p={ [signedValue(stat.barrier, level)] } />;
		else if ("guard" in stat) {
			switch (stat.guard) {
				case "col":
					return <Locale plain k="BUFFEFFECT_BLOCK_COLUMN" />;
				case "row":
					return <Locale plain k="BUFFEFFECT_BLOCK_ROW" />;
				case "target":
					return <Locale plain k="BUFFEFFECT_BLOCK_TARGET" />;
			}
		} else if ("position" in stat) {
			switch (stat.position.type) {
				case "pull":
					return <Locale plain k="BUFFEFFECT_PULL" p={ [nsignedInteger(stat.position.range, level)] } />;
				case "push":
					return <Locale plain k="BUFFEFFECT_PUSH" p={ [nsignedInteger(stat.position.range, level)] } />;
			}
		} else if ("next_crit" in stat)
			return <Locale plain k="BUFFEFFECT_CRIT_NEXT" p={ [signedValue(stat.next_crit, level)] } />;
		else if ("range" in stat)
			return <Locale plain k="BUFFEFFECT_RANGE" p={ [signedInteger(stat.range, level)] } />;
		else if ("penetration" in stat)
			return <Locale plain k="BUFFEFFECT_DEFPIERCE" p={ [signedValue(stat.penetration, level)] } />;
		else if ("metamolphosis" in stat)
			return <Locale plain k="BUFFEFFECT_TRANSFORM" />;
		else if ("fixed_damage" in stat) {
			if ("elem" in stat.fixed_damage) {
				switch (stat.fixed_damage.elem) {
					case "fire":
						return <Locale plain k={ isRatioValue(stat.fixed_damage.damage) ? "BUFFEFFECT_DOT_FIRE_RATIO" : "BUFFEFFECT_DOT_FIRE" } p={ [
							nsignedValue(stat.fixed_damage.damage, level),
							<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
						] } />;
					case "ice":
						return <Locale plain k={ isRatioValue(stat.fixed_damage.damage) ? "BUFFEFFECT_DOT_ICE_RATIO" : "BUFFEFFECT_DOT_ICE" } p={ [
							nsignedValue(stat.fixed_damage.damage, level),
							<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
						] } />;
					case "lightning":
						return <Locale
							plain
							k={ isRatioValue(stat.fixed_damage.damage) ? "BUFFEFFECT_DOT_THUNDER_RATIO" : "BUFFEFFECT_DOT_THUNDER" }
							p={ [
								nsignedValue(stat.fixed_damage.damage, level),
								<ElemIcon elem={ stat.fixed_damage.elem } class="me-1 mb-0" />,
							] }
						/>;
				}
			}
			return <Locale plain k={ isRatioValue(stat.fixed_damage) ? "BUFFEFFECT_DOT_PHYSICS_RATIO" : "BUFFEFFECT_DOT_PHYSICS" } p={ [
				nsignedValue(stat.fixed_damage, level),
				<ElemIcon elem={ SKILL_ATTR.PHYSICS } class="me-1 mb-0" />,
			] } />;
		} else if ("provoke" in stat)
			return <Locale plain k="BUFFEFFECT_PROVOKE" />;
		else if ("stun" in stat)
			return <Locale plain k="BUFFEFFECT_STUN" />;
		else if ("attack_support" in stat)
			return <Locale plain k="BUFFEFFECT_SUPPORT_ATK" p={ [nsignedValue(stat.attack_support, level)] } />;
		else if ("immovable" in stat)
			return <Locale plain k="BUFFEFFECT_SNARE" />;
		else if ("skill_disable" in stat)
			return <Locale plain k="BUFFEFFECT_SEAL" />;
		else if ("revive" in stat) {
			if (typeof stat.revive.base === "string")
				return <Locale plain k="BUFFEFFECT_RESURRECT_MAXIMUM" p={ [nsignedValue(stat.revive, level)] } />;
			return <Locale plain k="BUFFEFFECT_RESURRECT" p={ [nsignedValue(stat.revive, level)] } />;
		} else if ("attack_target" in stat)
			return <Locale plain k="BUFFEFFECT_MARKING" />;
		else if ("invokeChance" in stat)
			return <Locale plain k="BUFFEFFECT_EFFECT_RATE" p={ [signedValue(stat.invokeChance, level)] } />;
		else if ("summon_remove" in stat)
			return <Locale plain k="BUFFEFFECT_REMOVE_SUMMON" />;
		else if ("penetration_force" in stat)
			return <Locale plain k="BUFFEFFECT_BARRIER_PIERCE" />;
		else if ("exp" in stat)
			return <Locale plain k="BUFFEFFECT_EXP" p={ [signedValue(stat.exp, level)] } />;
		else if ("debuff_immune" in stat)
			return <Locale plain k="BUFFEFFECT_DEBUFF_IMMUNE" p={ [getBuffEffectTypeText(stat.debuff_immune, BUFF_ATTR_TYPE.DEBUFF)] } />;
		else if ("collaborate" in stat) {
			return <Locale plain k="BUFFEFFECT_TOGETHER" p={ [
				convertBuff(stat.collaborate.with),
				<span class="text-danger">
					<Locale plain k={ `UNIT_SKILL_active${stat.collaborate.skill}_${convertBuffToUid(stat.collaborate.with)}` } />
				</span>,
			] } />;
		} else if ("max_hp" in stat)
			return <Locale plain k="BUFFEFFECT_MAXHP" p={ [signedValue(stat.max_hp, level)] } />;

		return <Fragment>{ JSON.stringify(stat) }</Fragment>; // "???";
	}
	function getEraseText (erase: BuffErase): preact.VNode {
		if ("trigger" in erase) {
			const trigger = getTriggerText(erase.trigger);
			if (trigger)
				return <Locale plain k="BUFFERASE_COUNT_TRIGGER" p={ [erase.count, trigger] } />;
			return <Locale plain k="BUFFERASE_COUNT" p={ [erase.count] } />;
		} else if ("until" in erase) {
			const trigger = getTriggerText(erase.until);
			if (erase.rounds !== undefined)
				return <Locale plain k="BUFFERASE_ROUND_TRIGGER" p={ [erase.rounds, trigger] } />;
			return <Locale plain k="BUFFERASE_TRIGGER" p={ [trigger] } />;
		} else if ("rounds" in erase) {
			if (erase.rounds === 0) return <Fragment />;
			return <Locale plain k="BUFFERASE_ROUND" p={ [erase.rounds] } />;
		}
		return <Locale plain k="BUFFERASE_PERMANENT" />;
	}
	function getTargetText (body: ACTOR_BODY_TYPE[], cls: ACTOR_CLASS[], role: ROLE_TYPE[], target: TARGET_TYPE): preact.VNode {
		const _bodies: preact.VNode[] = [
			<Locale plain k="BUFFTARGET_BIOROID" />,
			<Locale plain k="BUFFTARGET_AGS" />,
		];
		const _classes: preact.VNode[] = [
			<Locale plain k="BUFFTARGET_LIGHT" />,
			<Locale plain k="BUFFTARGET_HEAVY" />,
			<Locale plain k="BUFFTARGET_MOBILITY" />,
		];
		const _roles: preact.VNode[] = [
			<Locale plain k="BUFFTARGET_DEFENDER" />,
			<Locale plain k="BUFFTARGET_ATTACKER" />,
			<Locale plain k="BUFFTARGET_SUPPORTER" />,
		];

		const targetSide = target === TARGET_TYPE.SELF
			? <Locale plain k="BUFFTARGET_SELF" />
			: target === TARGET_TYPE.OUR || target === TARGET_TYPE.OUR_GRID
				? <Locale plain k="BUFFTARGET_TEAM" />
				: <Locale plain k="BUFFTARGET_ENEMY" />;

		const b = body.length === 2
			? null
			: _bodies[body[0]];
		const c = cls.length === 3
			? null
			: cls.map(x => _classes[x]).gap("/");
		const r = role.length === 3
			? null
			: role.map(x => _roles[x]).gap("/");

		return <Fragment>
			{ [b, c, r].filter(x => x !== null).gap("/") }
			<span> { targetSide }</span>
		</Fragment>;
	}

	function formatDesc (type: NUM_OUTPUTTYPE, template: string, value: string, shortize: boolean = false): string {
		if (shortize)
			template = template.replace(/:.+$/, "").trim();

		if (value.startsWith("Char_")) {
			const key = value.replace(/Char_(.+)_N/, "$1");
			const unit = FilterableUnitDB.find(x => x.uid === key);
			if (!unit) return `${template} - ${key}`;

			return `${template} - ${LocaleGet(`UNIT_${unit.uid}`)}`;
		}

		if (type === NUM_OUTPUTTYPE.INTEGER) {
			const v = new Decimal(value)
				.toNumber()
				.toString();
			return template.replace(/\{0\}/g, v);
		}

		const v = Decimal.mul(value, 100)
			.toNumber()
			.toString();
		return template.replace(/\{0\}/g, v);
	}

	const stat = props.stat;
	const level = props.level;

	const elems: preact.VNode[] = [];
	if ("buffs" in stat) { // 버프 형식의 수치
		const ext = ImageExtension();
		stat.buffs.forEach((buff, buffIdx) => {
			const erase = getEraseText(buff.erase);
			const target = getTargetText(stat.body, stat.class, stat.role, stat.target);
			const on = getTriggerText(stat.on);
			const apply = getTriggerText(stat.if);

			if (buff.value.chance !== "0%") {
				const force = [
					stat.on === "round" || stat.on === "wave",
					!buff.value.chance || buff.value.chance === "100%",
					stat.if === false,
				].every(x => x);
				const key = `${props.idx}_${buffIdx}`;

				elems.push(<div class="clearfix" title={ formatDesc(buff.desc.type, buff.desc.desc, buff.desc.value) }>
					<div class="clearfix">
						<img class="me-1" width="25" src={ `${AssetsRoot}/${ext}/buff/${buff.icon}.${ext}` } />
						<strong class="align-middle">
							<Locale plain k={ stat.key } />
						</strong>

						<div class="float-end buff-checkbox">
							{ stat.maxStack > 0
								? <div class="input-group d-inline-flex w-auto me-2">
									<button class="btn btn-sm btn-secondary" onClick={ (): void => {
										let v = (props.stacks[key] || 1) - 1;
										if (v < 1) v = 1;
										if (v > stat.maxStack) v = stat.maxStack;
										if (props.onStack)
											props.onStack(key, v);
									} }>
										<Icon icon="dash" />
									</button>
									<input
										class="form-control buff-stack-input"
										type="text"
										value={ props.stacks[key] || 1 }
										readonly
									/>
									<div class="position-relative">
										<span>
											<Locale plain k="SIMULATOR_BUFF_STACK" />
										</span>
									</div>
									<button class="btn btn-sm btn-secondary" onClick={ (): void => {
										let v = (props.stacks[key] || 1) + 1;
										if (v < 1) v = 1;
										if (v > stat.maxStack) v = stat.maxStack;
										if (props.onStack)
											props.onStack(key, v);
									} }>
										<Icon icon="plus" />
									</button>
								</div>
								: <Fragment />
							}
							<input
								class="form-check-input"
								type="checkbox"
								checked={ force || props.enabled.includes(key) }
								onInput={ (e): void => {
									if (props.onUpdate)
										props.onUpdate(key, (e.target as HTMLInputElement).checked);
								} }
								disabled={ force }
							/>
						</div>
					</div>

					<div class="ps-3">
						<div class="float-start">
							{ getBuffText(buff.value, level) }
							{ getChanceText(buff.value.chance) }
						</div>
						<div class="float-end text-end">
							{ on
								? <span class="badge bg-success ms-1 text-wrap">{ on }</span>
								: <Fragment />
							}
							{ target
								? <span class="badge bg-stat-def ms-1 text-wrap">
									<Locale plain k="BUFFTARGET_TO" p={ [target] } />
								</span>
								: <Fragment />
							}
							{ apply
								? <span class="badge bg-danger ms-1 text-wrap">{ apply }</span>
								: <Fragment />
							}
							{ erase
								? <span class="badge bg-warning text-dark ms-1 text-wrap">{ erase }</span>
								: <Fragment />
							}
							{ stat.maxStack > 0
								? <span class="badge bg-dark ms-1 text-wrap">
									<Locale plain k="BUFFSTACK" p={ [stat.maxStack] } />
								</span>
								: <Fragment />
							}
						</div>
					</div>
				</div >);
			}
		});
	}

	return <Fragment>{ elems.map(x => <li class="list-group-item">{ x }</li>) }</Fragment>;
};

interface BuffListProps {
	class?: string;

	level?: number;
	list?: BuffStat[];
	buffTable: Record<string, number>;

	onUpdate?: (key: string, checked: boolean) => void;
	onStack?: (key: string, value: number) => void;
}

const BuffChecklist: FunctionalComponent<BuffListProps> = (props) =>
	<Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
		const list = props.list || [];
		const level = props.level || 0;

		const staticList = list.filter(x => !("buffs" in x)) as BuffStat[];
		const buffs = list
			.filter(x => "buffs" in x)
			.map((stat, si) => {
				const x = stat as BuffStatBuff;
				const enabled = x.buffs
					.map((_, i) => `${si}_${i}`)
					.filter(y => y in props.buffTable);
				return <CheckableBuffRenderer
					idx={ si }
					stat={ x }
					level={ level }
					enabled={ enabled }
					stacks={ props.buffTable }
					onUpdate={ (key, checked): void => {
						if (props.onUpdate)
							props.onUpdate(key, checked);
					} }
					onStack={ (key, value): void => {
						if (props.onStack)
							props.onStack(key, value);
					} }
				/>;
			});

		return <div class={ `buff-checklist text-dark ${props.class || ""}` }>
			{ staticList.length > 0
				? <ul class="list-group text-start">
					<BuffRenderer stat={ staticList } level={ level } />
				</ul>
				: <Fragment />
			}
			{ buffs.map(stats => <ul class="list-group text-start">{ stats }</ul>) }
		</div>;
	}) }
	/>;
export default BuffChecklist;
