import Vue, { CreateElement } from "vue";
import { Decimal } from "decimal.js";
import { LocaleGet } from "@/libs/Locale";

import BuffData from "@/json/buffs";
// import EnemyNames from "@/json/enemy-names";

import FilterableUnitDB from "@/libs/DB/Unit.Filterable";

import { _e } from "@/libs/VNode";

import { BuffEffect, BuffEffectValue, BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import { BuffTrigger } from "@/libs/Buffs/BuffTrigger";
import { BuffErase } from "@/libs/Buffs/BuffErase";
import { BuffStat, BuffStatStatic } from "@/libs/Buffs/Buffs";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, BUFF_ATTR_TYPE, NUM_OUTPUTTYPE, ROLE_TYPE, SKILL_ATTR, TARGET_TYPE, UNIT_POSITION } from "@/libs/Types/Enums";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { ArrayUnique } from "@/libs/Functions";

import { StatPointValue } from "@/pages/Simulation/Simulation/Stats";

let h: CreateElement | undefined;

function positive (value: BuffEffectValue, level: number = 0) {
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
function literal (value: BuffEffectValue, level: number = 0) {
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
function pinteger (value: BuffEffectValue, level: number = 0) {
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
function integer (value: BuffEffectValue, level: number = 0) {
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
function percent (value: BuffEffectValue, ifTrue: string = "", ifFalse: string = "") {
	const p = typeof value.base === "string" && value.base.endsWith("%") ? "%" : "";
	return p ? ifTrue : ifFalse;
}

function convertBuff (name: string) {
	if (name.startsWith("Char_")) {
		const key = name.replace(/Char_(.+)_N/, "$1");
		const unit = FilterableUnitDB.find(x => x.uid === key);
		if (!unit) return key;

		return <span class="text-primary">
			<locale k={ `UNIT_${unit.uid}` } />
		</span>;
	} else if (name.startsWith("MOB_")) {
		const key = name.replace(/MOB_MP_(.+)/, "$1");

		// const names = EnemyNames as Record<string, string>;

		// const enemy = names[key];
		// if (!enemy) return key;

		return <span class="text-primary">
			<locale k={ `ENEMY_${key}` } />
		</span>;
	}

	return (BuffData as Record<string, string>)[name] ||
		name;
}
function convertBuffUid (name: string) {
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

function getTriggerText (trigger: BuffTrigger) {
	if (typeof trigger === "string") {
		switch (trigger) {
			case "damaged":
				return LocaleGet("BUFFTRIGGER_DAMAGED");
			case "attack_success":
				return LocaleGet("BUFFTRIGGER_ATTACK_SUCCESS");
			case "team_dead":
				return LocaleGet("BUFFTRIGGER_TEAM_DIED");
			case "self_dead":
				return LocaleGet("BUFFTRIGGER_DIED");
			case "enemy_dead":
				return LocaleGet("BUFFTRIGGER_ENEMY_DIED");
			case "wave":
				return LocaleGet("BUFFTRIGGER_BATTLE_START");
			case "round":
				return LocaleGet("BUFFTRIGGER_EVERY_ROUND");
			case "attack":
				return LocaleGet("BUFFTRIGGER_ATTACK");
			case "attacked":
				return LocaleGet("BUFFTRIGGER_ATTACKED");
			case "wait":
				return LocaleGet("BUFFTRIGGER_WAIT");
			case "move":
				return LocaleGet("BUFFTRIGGER_MOVE");
			case "evade":
				return LocaleGet("BUFFTRIGGER_EVADE");
			case "wave_end":
				return LocaleGet("BUFFTRIGGER_END_WAVE");
			case "enemy_killed":
				return LocaleGet("BUFFTRIGGER_KILL");
			case "criticaled":
				return LocaleGet("BUFFTRIGGER_CRITICALED");
			case "revive":
				return LocaleGet("BUFFTRIGGER_RESURRECT");
		}
	} else if (trigger) {
		if ("_comment" in trigger)
			return trigger._comment;
		else if ("after" in trigger) {
			switch (trigger.after) {
				case "counter":
					return LocaleGet("BUFFTRIGGER_AFTER_COUNTER");
				case "use_skill":
					return LocaleGet("BUFFTRIGGER_AFTER_SKILL");
			}
		} else if ("damaged" in trigger) {
			switch (trigger.damaged) {
				case "fire":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-0 mb-0" />,
						LocaleGet("BUFFTRIGGER_DAMAGED_FIRE"),
					];
				case "ice":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-0 mb-0" />,
						LocaleGet("BUFFTRIGGER_DAMAGED_ICE"),
					];
				case "lightning":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-0 mb-0" />,
						LocaleGet("BUFFTRIGGER_DAMAGED_THUNDER"),
					];
			}
		} else if ("hp>=" in trigger) {
			if (typeof trigger["hp>="] === "string") {
				return LocaleGet("BUFFTRIGGER_HP_>=", "", trigger["hp>="])
					.replace("  ", " ")
					.trim();
			} else {
				const target = {
					self: LocaleGet("BUFFTARGET_SELF"),
					target: LocaleGet("BUFFTARGET_TARGET"),
				}[trigger["hp>="].target];
				return LocaleGet("BUFFTRIGGER_HP_>=", target, trigger["hp>="]);
			}
		} else if ("hp<=" in trigger) {
			if (typeof trigger["hp<="] === "string") {
				return LocaleGet("BUFFTRIGGER_HP_<=", "", trigger["hp<="])
					.replace("  ", " ")
					.trim();
			} else {
				const target = {
					self: LocaleGet("BUFFTARGET_SELF"),
					target: LocaleGet("BUFFTARGET_TARGET"),
				}[trigger["hp<="].target];
				return LocaleGet("BUFFTRIGGER_HP_<=", target, trigger["hp<="]);
			}
		} else if ("hp>" in trigger) {
			if (typeof trigger["hp>"] === "string") {
				return LocaleGet("BUFFTRIGGER_HP_>", "", trigger["hp>"])
					.replace("  ", " ")
					.trim();
			} else {
				const target = {
					self: LocaleGet("BUFFTARGET_SELF"),
					target: LocaleGet("BUFFTARGET_TARGET"),
				}[trigger["hp>"].target];
				return LocaleGet("BUFFTRIGGER_HP_>", target, trigger["hp>"]);
			}
		} else if ("hp<" in trigger) {
			if (typeof trigger["hp<"] === "string") {
				return LocaleGet("BUFFTRIGGER_HP_<", "", trigger["hp<"])
					.replace("  ", " ")
					.trim();
			} else {
				const target = {
					self: LocaleGet("BUFFTARGET_SELF"),
					target: LocaleGet("BUFFTARGET_TARGET"),
				}[trigger["hp<"].target];
				return LocaleGet("BUFFTRIGGER_HP_<", target, trigger["hp<"]);
			}
		} else if ("in_squad" in trigger) {
			if (typeof trigger.in_squad === "string")
				return <locale k="BUFFTRIGGER_IN_SQUAD" p0={ convertBuff(trigger.in_squad) } />;
			else {
				return <locale
					k="BUFFTRIGGER_IN_SQUAD"
					p0={ ArrayUnique(trigger.in_squad.map(convertBuff)).join(LocaleGet("BUFFTRIGGER_OR")) }
				/>;
			}
		} else if ("in_enemy" in trigger) {
			if (typeof trigger.in_enemy === "string")
				return <locale k="BUFFTRIGGER_IN_ENEMY" p0={ convertBuff(trigger.in_enemy) } />;
			else {
				return <locale
					k="BUFFTRIGGER_IN_ENEMY"
					p0={ ArrayUnique(trigger.in_enemy.map(convertBuff)).join(LocaleGet("BUFFTRIGGER_OR")) }
				/>;
			}
		} else if ("pos" in trigger) {
			if (typeof trigger.pos === "number") {
				switch (trigger.pos) {
					case UNIT_POSITION.FRONT:
						return LocaleGet("BUFFTRIGGER_POS_FRONTROW");
					case UNIT_POSITION.MIDDLE:
						return LocaleGet("BUFFTRIGGER_POS_MIDROW");
					case UNIT_POSITION.BACK:
						return LocaleGet("BUFFTRIGGER_POS_BACKROW");
				}
			} else {
				switch (trigger.pos.position) {
					case UNIT_POSITION.FRONT:
						return LocaleGet("BUFFTRIGGER_POS_TARGET_FRONTROW");
					case UNIT_POSITION.MIDDLE:
						return LocaleGet("BUFFTRIGGER_POS_TARGET_MIDROW");
					case UNIT_POSITION.BACK:
						return LocaleGet("BUFFTRIGGER_POS_TARGET_BACKROW");
				}
			}
		} else if ("on" in trigger) {
			if ("func" in trigger.on && Array.isArray(trigger.on.select)) {
				const select = typeof trigger.on.select[0] === "string"
					// BuffTrigger_On_BuffKey
					? ArrayUnique((trigger.on.select as string[]).map(convertBuff))
					// BuffTrigger_On_BuffEffectType
					: ArrayUnique((trigger.on.select as BUFFEFFECT_TYPE[])
						.map(x => <span class="text-info">{ getBuffEffectTypeText(x, trigger.on.attr) }</span>));

				if (select.length === 1)
					return <locale k={ `BUFFTRIGGER_ON_SINGLE_${trigger.on.func}` } p0={ select[0] } />;
				else {
					const out: Array<string | JSX.Element> = [];
					for (let i = 0; i < select.length; i++) {
						if (i > 0) out.push(", ");
						out.push(select[i]);
					}
					return <locale k={ `BUFFTRIGGER_ON_MULTIPLE_${trigger.on.func}` } p0={ out } />;
				}
			} else if ("target" in trigger.on && "stack" in trigger.on) {
				const select = ArrayUnique((trigger.on.select as string[]).map(convertBuff));

				// BuffTrigger_On_BuffStack
				const target = LocaleGet(`BUFFTARGET_${trigger.on.target.toUpperCase()}`);

				const out: Array<string | JSX.Element> = [];
				for (let i = 0; i < select.length; i++) {
					if (i > 0) out.push(", ");
					out.push(select[i]);
				}

				if (select.length === 1)
					return <locale k="BUFFTRIGGER_ON_STACK_TARGET_SINGLE" p0={ target } p1={ out } p2={ trigger.on.stack } />;
				else
					return <locale k="BUFFTRIGGER_ON_STACK_TARGET_MULTIPLE" p0={ target } p1={ out } p2={ trigger.on.stack } />;
			} else if ("target" in trigger.on && "func" in trigger.on) {
				const select = typeof trigger.on.select[0] === "string"
					// BuffTrigger_On_BuffExists
					? ArrayUnique((trigger.on.select as string[]).map(convertBuff))
					// BuffTrigger_On_BuffTypeExists
					: ArrayUnique((trigger.on.select as BUFFEFFECT_TYPE[]).map(x => getBuffEffectTypeText(x, trigger.on.attr)));

				const target = LocaleGet(`BUFFTARGET_${trigger.on.target.toUpperCase()}`);

				if (select.length === 1)
					return <locale k={ `BUFFTRIGGER_ON_TARGET_SINGLE_${trigger.on.func}` } p0={ target } p1={ select[0] } />;
				else {
					const out: Array<string | JSX.Element> = [];
					for (let i = 0; i < select.length; i++) {
						if (i > 0) out.push(", ");

						const el = select[i];
						if (Array.isArray(el))
							out.push(...el);
						else
							out.push(el);
					}

					if (typeof select[0] === "number") {
						// BuffTrigger_On_BuffTypeExists
						return <locale k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p0={ target } p1={ out } />;
					} else {
						// BuffTrigger_On_BuffExists
						return <locale k={ `BUFFTRIGGER_ON_TARGET_MULTIPLE_${trigger.on.func}` } p0={ target } p1={ out } />;
					}
				}
			}
		} else if ("target" in trigger) {
			if (trigger.target.length === 1)
				return <locale k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p0={ convertBuff(trigger.target[0]) } />;
			else {
				const list = ArrayUnique(trigger.target.map(convertBuff));
				const out: Array<string | JSX.Element> = [];
				for (let i = 0; i < list.length; i++) {
					if (i > 0) out.push(", ");
					out.push(list[i]);
				}
				return <locale k="BUFFTRIGGER_ON_TARGET_SINGLE_OR" p0={ out } />;
			}
		} else if ("unitCount" in trigger) {
			const filters = typeof trigger.unitCount.filter === "string"
				? [trigger.unitCount.filter]
				: trigger.unitCount.filter;
			const count = trigger.unitCount.count;
			const type = trigger.unitCount.type;

			const _classes = [
				LocaleGet("COMMON_UNIT_TYPE_LIGHT"),
				LocaleGet("COMMON_UNIT_TYPE_HEAVY"),
				LocaleGet("COMMON_UNIT_TYPE_MOBILITY"),
			];
			const typeText = type.length === 3
				? ""
				: type.map(x => _classes[x]).join("/");

			if (filters.includes("all")) {
				if (filters.includes("bioroid"))
					return LocaleGet("BUFFTRIGGER_UNIT_BIOROID", typeText, count);
				else if (filters.includes("ags"))
					return LocaleGet("BUFFTRIGGER_UNIT_AGS", typeText, count);
				else if (typeText)
					return LocaleGet("BUFFTRIGGER_UNIT_TYPE", typeText, count);
				else
					return LocaleGet("BUFFTRIGGER_UNIT_ALL", count);
			} else if (filters.includes("squad")) {
				if (filters.includes("bioroid"))
					return LocaleGet("BUFFTRIGGER_TEAM_BIOROID", typeText, count);
				else if (filters.includes("ags"))
					return LocaleGet("BUFFTRIGGER_TEAM_AGS", typeText, count);
				else if (typeText)
					return LocaleGet("BUFFTRIGGER_TEAM_TYPE", typeText, count);
				else
					return LocaleGet("BUFFTRIGGER_TEAM_ALL", count);
			} else if (filters.includes("enemy")) {
				if (filters.includes("bioroid"))
					return LocaleGet("BUFFTRIGGER_ENEMY_BIOROID", typeText, count);
				else if (filters.includes("ags"))
					return LocaleGet("BUFFTRIGGER_ENEMY_AGS", typeText, count);
				else if (typeText)
					return LocaleGet("BUFFTRIGGER_ENEMY_TYPE", typeText, count);
				else
					return LocaleGet("BUFFTRIGGER_ENEMY_ALL", count);
			}
		} else if ("round" in trigger)
			return LocaleGet(`BUFFTRIGGER_ROUND_${trigger.round.operator}`, trigger.round.round);
		else if ("notInBattle" in trigger)
			return LocaleGet("BUFFTRIGGER_NOT_IN_BATTLE", trigger.notInBattle.join(","));
		else
			return "???";
	}
	return null;
}

function getChanceText (chance: string | undefined) {
	if (!chance) chance = "100%";

	if (chance === "100%") return _e();
	return <b-badge variant="success" class="ml-3">
		<locale k="BUFFCHANCE" p0={ chance } />
	</b-badge>;
}

function getBuffEffectTypeText (type: BUFFEFFECT_TYPE, target: BUFF_ATTR_TYPE) {
	const tUP = LocaleGet("BUFFTYPE_UP");
	const tDOWN = LocaleGet("BUFFTYPE_DOWN");
	const p = target === BUFF_ATTR_TYPE.BUFF ? tUP : target === BUFF_ATTR_TYPE.DEBUFF ? tDOWN : "";
	const n = target === BUFF_ATTR_TYPE.BUFF ? tDOWN : target === BUFF_ATTR_TYPE.DEBUFF ? tUP : "";

	switch (type) {
		case BUFFEFFECT_TYPE.STAT_ATK_VALUE: // 0
		case BUFFEFFECT_TYPE.STAT_ATK_RATIO: // 1
			return LocaleGet("BUFFTYPE_ATK", p);
		case BUFFEFFECT_TYPE.STAT_DEF_VALUE: // 2
		case BUFFEFFECT_TYPE.STAT_DEF_RATIO: // 3
			return LocaleGet("BUFFTYPE_DEF", p);
		case BUFFEFFECT_TYPE.STAT_HP_VALUE: // 4
		case BUFFEFFECT_TYPE.STAT_HP_RATIO: // 5
			return LocaleGet("BUFFTYPE_HP", p);
		case BUFFEFFECT_TYPE.STAT_RATING_VALUE: // 6
		case BUFFEFFECT_TYPE.STAT_RATING_RATIO: // 7
			return LocaleGet("BUFFTYPE_ACC", p);
		case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE: // 8
		case BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO: // 9
			return LocaleGet("BUFFTYPE_CRIT", p);
		case BUFFEFFECT_TYPE.STAT_AVOID_VALUE: // 10
		case BUFFEFFECT_TYPE.STAT_AVOID_RATIO: // 11
			return LocaleGet("BUFFTYPE_EVA", p);
		case BUFFEFFECT_TYPE.STAT_SPEED_VALUE: // 12
		case BUFFEFFECT_TYPE.STAT_SPEED_RATIO: // 13
			return LocaleGet("BUFFTYPE_SPD", p);
		case BUFFEFFECT_TYPE.STAT_RESFIRE_VALUE: // 14
		case BUFFEFFECT_TYPE.STAT_RESFIRE_RATIO: // 15
			return [
				<elem-icon elem="fire" class="mr-0 mb-0" />,
				LocaleGet("BUFFTYPE_FIRE_RES", p),
			];
		case BUFFEFFECT_TYPE.STAT_RESICE_VALUE: // 16
		case BUFFEFFECT_TYPE.STAT_RESICE_RATIO: // 17
			return [
				<elem-icon elem="ice" class="mr-0 mb-0" />,
				LocaleGet("BUFFTYPE_ICE_RES", p),
			];
		case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_VALUE: // 18
		case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_RATIO: // 19
			return [
				<elem-icon elem="lightning" class="mr-0 mb-0" />,
				LocaleGet("BUFFTYPE_THUNDER_RES", p),
			];
		case BUFFEFFECT_TYPE.STAGE_AP_VALUE: // 20
		case BUFFEFFECT_TYPE.STAGE_AP_SHIFT: // 21
			return LocaleGet("BUFFTYPE_AP", p);
		case BUFFEFFECT_TYPE.STAGE_AP_STOP: // 22
			return LocaleGet("BUFFTYPE_STUN");
		case BUFFEFFECT_TYPE.UI_INFO_NEXTENEMY: // 23
			return LocaleGet("BUFFTYPE_SCOUT");
		case BUFFEFFECT_TYPE.STAGE_THORNS_RATIO: // 24
			return "STAGE_THORNS_RATIO" + p; // 사용처 없음, 알 수 없음 (이름으로 보아, 공격 시 공격 일부가 반사되는 것으로 보임)
		case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_VALUE: // 25
			return "STAGE_REFLECTPHYSICS_VALUE" + p; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 물리 속성으로)
		case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_VALUE: // 26
			return "STAGE_REFLECTFIRE_VALUE" + p; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 화염 속성으로)
		case BUFFEFFECT_TYPE.STAGE_REFLECTICE_VALUE: // 27
			return "STAGE_REFLECTICE_VALUE" + p; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 냉기 속성으로)
		case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_VALUE: // 28
			return "STAGE_REFLECTLIGHTNIG_VALUE" + p; // 사용처 없음, 알 수 없음 (위와 동일하게 반사되는 것으로 보임, 전기 속성으로)
		case BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_RATIO_DEFENDER: // 29
			return LocaleGet("BUFFTYPE_COUNT"); // 피격자가 물리 반격
		case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_RATIO_DEFENDER: // 30
			return "STAGE_REFLECTFIRE_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_REFLECTICE_RATIO_DEFENDER: // 31
			return "STAGE_REFLECTICE_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER: // 32
			return "STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_TIME: // 33
			return LocaleGet("BUFFTYPE_DMG_IMMUNE"); // 피해 무효화
		case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE: // 34
			return LocaleGet("BUFFTYPE_DMG_MINIMIZE"); // value 이하 피해 1로 적용
		case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE_LIMITED: // 35
			return "STAGE_SHIELD_VALUE_LIMITED" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO: // 36
			return LocaleGet("BUFFTYPE_GET_DMG_DOWN"); // 받는 피해 감소
		case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO_LIMITED: // 37
			return "STAGE_SHIELD_RATIO_LIMITED" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_VALUE: // 38
			return LocaleGet("BUFFTYPE_BARRIER"); // 방어막
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO: // 39
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_VALUE: // 40
			return LocaleGet("BUFFTYPE_ADDDMG_PHYSICS");
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO: // 41
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_VALUE: // 42
			return LocaleGet("BUFFTYPE_ADDDMG_FIRE");
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO: // 43
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_VALUE: // 44
			return LocaleGet("BUFFTYPE_ADDDMG_ICE");
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO: // 45
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_VALUE: // 46
			return LocaleGet("BUFFTYPE_ADDDMG_THUNDER");
		case BUFFEFFECT_TYPE.STAGE_LOCKON01_TIME: // 47
			return "STAGE_LOCKON01_TIME" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_RATIO: // 48
			return LocaleGet("BUFFTYPE_GET_DMG_UP"); // 받는 피해 증가 %
		case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_VALUE: // 49
			return "STAGE_ADDDAMAGE_VALUE" + p; // 사용처 없음, 받는 피해 증가 고정값
		case BUFFEFFECT_TYPE.STAGE_BLOCK_COLUMN: // 50
			return LocaleGet("BUFFTYPE_BLOCK_COLUMN"); // 행 보호
		case BUFFEFFECT_TYPE.STAGE_BLOCK_GRID: // 51
			return "격자 보호"; // 사용처 없음, 격자 보호?
		case BUFFEFFECT_TYPE.STAGE_MOVE_BACK: // 52
			return LocaleGet("BUFFTYPE_PUSH");
		case BUFFEFFECT_TYPE.STAGE_MOVE_FRONT: // 53
			return LocaleGet("BUFFTYPE_PULL");
		case BUFFEFFECT_TYPE.STAGE_CRITICAL_NEXTATTACK: // 54
			return LocaleGet("BUFFTYPE_CRIT_NEXT", p);
		case BUFFEFFECT_TYPE.STAT_RANGE_VALUE: // 55
			return LocaleGet("BUFFTYPE_RANGE", p);
		case BUFFEFFECT_TYPE.STAGE_AGRO_VALUE: // 56
			return "STAGE_AGRO_VALUE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_VALUE: // 57
			return "STAGE_DEFPIERCE_VALUE" + p; // 방어 관통 고정값?
		case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_RATIO: // 58
			return LocaleGet("DEF_PIERCE", p);
		case BUFFEFFECT_TYPE.STAGE_GRID_CHANGE: // 59
			return "STAGE_GRID_CHANGE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_TROOPERTYPEDMGBONUS_RATIO: // 60
			return LocaleGet("BUFFTYPE_ANTI_LIGHT_DMG", p);
		case BUFFEFFECT_TYPE.STAGE_ARMOREDTYPEDMGBONUS_RATIO: // 61
			return LocaleGet("BUFFTYPE_ANTI_HEAVY_DMG", p);
		case BUFFEFFECT_TYPE.STAGE_MOBILITYTYPEDMGBONUS_RATIO: // 62
			return LocaleGet("BUFFTYPE_ANTI_MOBILITY_DMG", p);
		case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT: // 63
		case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_LIMITED: // 64
			return LocaleGet("BUFFTYPE_TRANSFORM");
		case BUFFEFFECT_TYPE.STAGE_PHYSICS_DOT: // 65
			return LocaleGet("BUFFTYPE_DOT_PHYSICS");
		case BUFFEFFECT_TYPE.STAGE_FIRE_DOT: // 66
			return LocaleGet("BUFFTYPE_DOT_FIRE");
		case BUFFEFFECT_TYPE.STAGE_ICE_DOT: // 67
			return LocaleGet("BUFFTYPE_DOT_ICE");
		case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DOT: // 68
			return LocaleGet("BUFFTYPE_DOT_THUNDER");
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM: // 69
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF: // 88
		case BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF: // 89
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE: // 97
		case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_BUFF: // 99
		case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_DEBUFF: // 100
			return LocaleGet("BUFFTYPE_OFF");
		case BUFFEFFECT_TYPE.STAGE_PHYSICS_DAMAGE_APPLY: // 70
			return LocaleGet("BUFFTYPE_DMG_PHYSICS_BY_HP");
		case BUFFEFFECT_TYPE.STAGE_FIRE_DAMAGE_APPLY: // 71
			return LocaleGet("BUFFTYPE_DMG_FIRE_BY_HP");
		case BUFFEFFECT_TYPE.STAGE_ICE_DAMAGE_APPLY: // 72
			return LocaleGet("BUFFTYPE_DMG_ICE_BY_HP");
		case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DAMAGE_APPLY: // 73
			return LocaleGet("BUFFTYPE_DMG_THUNDER_BY_HP");
		case BUFFEFFECT_TYPE.STAGE_PROVOKE: // 74
			return LocaleGet("BUFFTYPE_PROVOKE");
		case BUFFEFFECT_TYPE.STAGE_BLOCK_ROW: // 75
			return LocaleGet("BUFFTYPE_BLOCK_ROW");
		case BUFFEFFECT_TYPE.STAGE_BLOCK_CHARACTER: // 76
			return LocaleGet("BUFFTYPE_BLOCK_CHAR");
		case BUFFEFFECT_TYPE.STAGE_SUPPORT_ATTACK: // 77
			return LocaleGet("BUFFTYPE_SUPPORT_ATK");
		case BUFFEFFECT_TYPE.STAGE_SNARE: // 78
			return LocaleGet("BUFFTYPE_SNARE");
		case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL: // 79
			return LocaleGet("BUFFTYPE_SEAL");
		case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_ME: // 80
			return LocaleGet("BUFFTYPE_DMG_UP_BY_HP", p);
		case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_OPP: // 81
			return LocaleGet("BUFFTYPE_DMG_UP_BY_TARGET_HP", p);
		case BUFFEFFECT_TYPE.STAGE_RESURRECT: // 82
		case BUFFEFFECT_TYPE.STAGE_RESURRECT_RATIO: // 98
			return LocaleGet("BUFFTYPE_RESURRECT");
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO_INS: // 83
			return LocaleGet("BUFFTYPE_DMG", p);
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO_INS: // 84
			return LocaleGet("BUFFTYPE_DMG_FIRE", p);
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO_INS: // 85
			return LocaleGet("BUFFTYPE_DMG_ICE", p);
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO_INS: // 86
			return LocaleGet("BUFFTYPE_DMG_THUNDER", p);
		case BUFFEFFECT_TYPE.STAGE_MARKING: // 87
			return LocaleGet("BUFFTYPE_MARKING");
		case BUFFEFFECT_TYPE.STAGE_DEBUFF_RATEUP: // 90
		case BUFFEFFECT_TYPE.STAGE_DEBUFF_PERDOWN: // 91
			return LocaleGet("BUFFTYPE_RES_DEBUFF", p);
		case BUFFEFFECT_TYPE.STAGE_BUFFEFFECTRATE_CHANGE: // 92
			return LocaleGet("BUFFTYPE_EFFECT_RATE", p);
		case BUFFEFFECT_TYPE.REMOVE_SUMMON_INSTENV: // 93
			return LocaleGet("BUFFTYPE_SUMMON_INSTENV");
		case BUFFEFFECT_TYPE.BARRIER_PIERCE: // 94
			return LocaleGet("BUFFTYPE_BARRIER_PIERCE");
		case BUFFEFFECT_TYPE.STAGE_EXP_UP: // 95
			return LocaleGet("BUFFTYPE_EXP", p);
		case BUFFEFFECT_TYPE.STAGE_ANALYZE: // 96
			return "STAGE_ANALYZE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNITY_DEBUFF: // 101
			return LocaleGet("BUFFTYPE_DEBUFF_IMMUNE", p); // 효과 면역
		case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1: // 102
		case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2: // 103
			return LocaleGet("BUFFTYPE_TOGETHER");
	}
	return "???";
}

function getBuffText (stat: BuffEffect, level?: number) {
	if ("_comment" in stat)
		return stat._comment;
	else if ("off" in stat) {
		if (typeof stat.off === "string")
			return LocaleGet("BUFFEFFECT_OFF", stat.off);
		else if (typeof stat.off === "number") {
			const target = {
				0: LocaleGet("BUFFEFFECT_OFF_TYPE_0"),
				1: LocaleGet("BUFFEFFECT_OFF_TYPE_1"),
				2: LocaleGet("BUFFEFFECT_OFF_TYPE_2"),
				3: LocaleGet("BUFFEFFECT_OFF_TYPE_3"),
				4: LocaleGet("BUFFEFFECT_OFF_TYPE_4"),
			}[stat.off];
			return LocaleGet("BUFFEFFECT_OFF", target);
		} else if ("target" in stat.off)
			return <locale k="BUFFEFFECT_OFF" p0={ getBuffEffectTypeText(stat.off.type, stat.off.target) } />;
		else
			return <locale k="BUFFEFFECT_OFF" p0={ getBuffEffectTypeText(stat.off.type, BUFF_ATTR_TYPE.NO_MATTER) } />;
	} else if ("attack" in stat)
		return LocaleGet("BUFFEFFECT_ATK", positive(stat.attack, level));
	else if ("defense" in stat)
		return LocaleGet("BUFFEFFECT_DEF", positive(stat.defense, level));
	else if ("hp" in stat)
		return LocaleGet("BUFFEFFECT_HP", positive(stat.hp, level));
	else if ("accuracy" in stat)
		return LocaleGet("BUFFEFFECT_ACC", positive(stat.accuracy, level));
	else if ("critical" in stat)
		return LocaleGet("BUFFEFFECT_CRIT", positive(stat.critical, level));
	else if ("evade" in stat)
		return LocaleGet("BUFFEFFECT_EVA", positive(stat.evade, level));
	else if ("turnSpeed" in stat)
		return LocaleGet("BUFFEFFECT_SPD", positive(stat.turnSpeed, level));
	else if ("ap" in stat)
		return LocaleGet("BUFFEFFECT_AP", positive(stat.ap, level));
	else if ("ap_set" in stat)
		return LocaleGet("BUFFEFFECT_AP_SET", positive(stat.ap_set, level));
	else if ("resist" in stat) {
		if ("elem" in stat.resist) {
			switch (stat.resist.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.resist.elem } class="mx-1 mb-0" />,
						LocaleGet("BUFFEFFECT_FIRE_RES", positive(stat.resist.value, level)),
					];
				case "ice":
					return [
						<elem-icon elem={ stat.resist.elem } class="mx-1 mb-0" />,
						LocaleGet("BUFFEFFECT_ICE_RES", positive(stat.resist.value, level)),
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.resist.elem } class="mx-1 mb-0" />,
						LocaleGet("BUFFEFFECT_THUNDER_RES", positive(stat.resist.value, level)),
					];
			}
		} else {
			switch (stat.resist.type) {
				case "debuff":
					return LocaleGet("BUFFEFFECT_RES_DEBUFF", positive(stat.resist.value, level));
			}
		}
	} else if ("ap_stop" in stat)
		return LocaleGet("BUFFEFFECT_STUN");
	else if ("scout" in stat)
		return LocaleGet("BUFFEFFECT_SCOUT");
	else if ("counter" in stat)
		return LocaleGet("BUFFEFFECT_COUNTER", literal(stat.counter, level));
	else if ("damage_immune" in stat)
		return LocaleGet("BUFFEFFECT_DMG_IMMUNE", integer(stat.damage_immune, level));
	else if ("damage_minimize" in stat)
		return LocaleGet("BUFFEFFECT_DMG_MINIMIZE", integer(stat.damage_minimize, level));
	else if ("damage_reduce" in stat)
		return LocaleGet("BUFFEFFECT_GET_DMG_DOWN", literal(stat.damage_reduce, level));
	else if ("damage_increase" in stat)
		return LocaleGet("BUFFEFFECT_GET_DMG_UP", literal(stat.damage_increase, level));
	else if ("damage" in stat) {
		if ("elem" in stat.damage) {
			switch (stat.damage.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_ADDDMG_FIRE", literal(stat.damage.damage, level)),
					];
				case "ice":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_ADDDMG_ICE", literal(stat.damage.damage, level)),
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_ADDDMG_THUNDER", literal(stat.damage.damage, level)),
					];
			}
		} else
			return LocaleGet("BUFFEFFECT_ADDDMG_PHYSICS", literal(stat.damage, level));
	} else if ("damage_multiply" in stat) {
		switch (stat.damage_multiply.target) {
			case "light":
				return LocaleGet("BUFFEFFECT_ANTI_LIGHT", positive(stat.damage_multiply.value, level));
			case "air":
				return LocaleGet("BUFFEFFECT_ANTI_MOBILITY", positive(stat.damage_multiply.value, level));
			case "heavy":
				return LocaleGet("BUFFEFFECT_ANTI_HEAVY", positive(stat.damage_multiply.value, level));
		}
	} else if ("damage_by_hp" in stat) {
		const target = stat.damage_by_hp.target === "target"
			? LocaleGet("BUFFTARGET_TARGET")
			: LocaleGet("BUFFTARGET_SELF");
		return LocaleGet("BUFFEFFECT_DMG_BY_HP", target, literal(stat.damage_by_hp.damage, level));
	} else if ("damage_add" in stat) {
		if ("elem" in stat.damage_add) {
			switch (stat.damage_add.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_DMG_FIRE", positive(stat.damage_add.damage, level)),
					];
				case "ice":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_DMG_ICE", positive(stat.damage_add.damage, level)),
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-0 mb-0" />,
						LocaleGet("BUFFEFFECT_DMG_THUNDER", positive(stat.damage_add.damage, level)),
					];
			}
		} else
			return LocaleGet("BUFFEFFECT_DMG", positive(stat.damage_add, level));
	} else if ("barrier" in stat)
		return LocaleGet("BUFFEFFECT_BARRIER", positive(stat.barrier, level));
	else if ("guard" in stat) {
		switch (stat.guard) {
			case "col":
				return LocaleGet("BUFFEFFECT_BLOCK_COLUMN");
			case "row":
				return LocaleGet("BUFFEFFECT_BLOCK_ROW");
			case "target":
				return LocaleGet("BUFFEFFECT_BLOCK_TARGET");
		}
	} else if ("position" in stat) {
		switch (stat.position.type) {
			case "pull":
				return LocaleGet("BUFFEFFECT_PULL", integer(stat.position.range, level));
			case "push":
				return LocaleGet("BUFFEFFECT_PUSH", integer(stat.position.range, level));
		}
	} else if ("next_crit" in stat)
		return LocaleGet("BUFFEFFECT_CRIT_NEXT", positive(stat.next_crit, level));
	else if ("range" in stat)
		return LocaleGet("BUFFEFFECT_RANGE", pinteger(stat.range, level));
	else if ("penetration" in stat)
		return LocaleGet("BUFFEFFECT_DEFPIERCE", positive(stat.penetration, level));
	else if ("metamolphosis" in stat)
		return LocaleGet("BUFFEFFECT_TRANSFORM");
	else if ("fixed_damage" in stat) {
		if ("elem" in stat.fixed_damage) {
			switch (stat.fixed_damage.elem) {
				case "fire":
					return <locale
						k="BUFFEFFECT_DOT_FIRE"
						p0={ literal(stat.fixed_damage.damage, level) }
						p1={ <elem-icon elem={ stat.fixed_damage.elem } class="mr-0 mb-0" /> }
					/>;
				case "ice":
					return <locale
						k="BUFFEFFECT_DOT_ICE"
						p0={ literal(stat.fixed_damage.damage, level) }
						p1={ <elem-icon elem={ stat.fixed_damage.elem } class="mr-0 mb-0" /> }
					/>;
				case "lightning":
					return <locale
						k="BUFFEFFECT_DOT_THUNDER"
						p0={ literal(stat.fixed_damage.damage, level) }
						p1={ <elem-icon elem={ stat.fixed_damage.elem } class="mr-0 mb-0" /> }
					/>;
			}
		} else {
			return <locale
				k="BUFFEFFECT_DOT_PHYSICS"
				p0={ literal(stat.fixed_damage, level) }
				p1={ <elem-icon elem={ SKILL_ATTR.PHYSICS } class="mr-0 mb-0" /> }
			/>;
		}
	} else if ("provoke" in stat)
		return LocaleGet("BUFFEFFECT_PROVOKE");
	else if ("stun" in stat)
		return LocaleGet("BUFFEFFECT_STUN");
	else if ("attack_support" in stat)
		return LocaleGet("BUFFEFFECT_SUPPORT_ATK", literal(stat.attack_support, level));
	else if ("immovable" in stat)
		return LocaleGet("BUFFEFFECT_SNARE");
	else if ("skill_disable" in stat)
		return LocaleGet("BUFFEFFECT_");
	else if ("revive" in stat) {
		if (typeof stat.revive.base === "string")
			return LocaleGet("BUFFEFFECT_RESURRECT_MAXIMUM", literal(stat.revive, level));
		else
			return LocaleGet("BUFFEFFECT_RESURRECT", literal(stat.revive, level));
	} else if ("attack_target" in stat)
		return LocaleGet("BUFFEFFECT_MARKING");
	else if ("invokeChance" in stat)
		return LocaleGet("BUFFEFFECT_EFFECT_RATE", positive(stat.invokeChance, level));
	else if ("summon_remove" in stat)
		return LocaleGet("BUFFEFFECT_REMOVE_SUMMON");
	else if ("penetration_force" in stat)
		return LocaleGet("BUFFEFFECT_BARRIER_PIERCE");
	else if ("exp" in stat)
		return LocaleGet("BUFFEFFECT_EXP", positive(stat.exp, level));
	else if ("debuff_immune" in stat)
		return LocaleGet("BUFFEFFECT_DEBUFF_IMMUNE", getBuffEffectTypeText(stat.debuff_immune, BUFF_ATTR_TYPE.DEBUFF));
	else if ("collaborate" in stat) {
		return <locale
			k="BUFFEFFECT_TOGETHER"
			p0={ convertBuff(stat.collaborate.with) }
			p1={ <span class="text-danger">
				{ LocaleGet(`UNIT_SKILL_active${stat.collaborate.skill}_${convertBuffUid(stat.collaborate.with)}`) }
			</span> }
		/>;
	}
	return JSON.stringify(stat); // "???";
}

function getEraseText (erase: BuffErase) {
	if ("trigger" in erase) {
		const trigger = getTriggerText(erase.trigger);
		if (trigger)
			return LocaleGet("BUFFERASE_COUNT_TRIGGER", erase.count, trigger);
		else
			return LocaleGet("BUFFERASE_COUNT", erase.count);
	} else if ("until" in erase) {
		const trigger = getTriggerText(erase.until);
		if (erase.rounds !== undefined)
			return LocaleGet("BUFFERASE_ROUND_TRIGGER", erase.rounds, trigger);
		else
			return LocaleGet("BUFFERASE_TRIGGER", trigger);
	} else if ("rounds" in erase) {
		if (erase.rounds === 0) return null;
		return LocaleGet("BUFFERASE_ROUND", erase.rounds);
	} else
		return LocaleGet("BUFFERASE_PERMANENT");
}

function getTargetText (body: ACTOR_BODY_TYPE[], cls: ACTOR_CLASS[], role: ROLE_TYPE[], target: TARGET_TYPE) {
	const _bodies = [
		LocaleGet("BUFFTARGET_BIOROID"),
		LocaleGet("BUFFTARGET_AGS"),
	];
	const _classes = [
		LocaleGet("BUFFTARGET_LIGHT"),
		LocaleGet("BUFFTARGET_HEAVY"),
		LocaleGet("BUFFTARGET_MOBILITY"),
	];
	const _roles = [
		LocaleGet("BUFFTARGET_DEFENDER"),
		LocaleGet("BUFFTARGET_ATTACKER"),
		LocaleGet("BUFFTARGET_SUPPORTER"),
	];

	const targetSide = target === TARGET_TYPE.SELF
		? LocaleGet("BUFFTARGET_SELF")
		: target === TARGET_TYPE.OUR || target === TARGET_TYPE.OUR_GRID
			? LocaleGet("BUFFTARGET_TEAM")
			: LocaleGet("BUFFTARGET_ENEMY");

	const b = body.length === 2 ? "" : _bodies[body[0]];
	const c = cls.length === 3 ? "" : cls.map(x => _classes[x]).join("/");
	const r = role.length === 3 ? "" : role.map(x => _roles[x]).join("/");

	return [b, c, r].filter(x => x).join("/") + ` ${targetSide}`;
}

function formatDesc (type: NUM_OUTPUTTYPE, template: string, value: string, shortize: boolean = false) {
	if (shortize)
		template = template.replace(/:.+$/, "").trim();

	if (value.startsWith("Char_")) {
		const key = value.replace(/Char_(.+)_N/, "$1");
		const unit = FilterableUnitDB.find(x => x.uid === key);
		if (!unit) return `${template} - ${key}`;

		return `${template} - ${LocaleGet(`UNIT_${unit.uid}`)}`;
	} else {
		if (type === NUM_OUTPUTTYPE.INTEGER) {
			return template.replace(
				/\{0\}/g,
				new Decimal(value)
					.toNumber()
					.toString(),
			);
		} else {
			return template.replace(
				/\{0\}/g,
				Decimal.mul(value, 100)
					.toNumber()
					.toString(),
			);
		}
	}
}

function isStatable (type: BUFFEFFECT_TYPE) {
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

function toStatablePoint (stat: BuffStatStatic, level: number = 0) {
	if (!level) level = 0;

	if ("attack" in stat) {
		return Decimal.div(literal(stat.attack, level), StatPointValue.ATK)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	if ("defense" in stat) {
		return Decimal.div(literal(stat.defense, level), StatPointValue.DEF)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	if ("hp" in stat) {
		return Decimal.div(literal(stat.hp, level), StatPointValue.HP)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	if ("accuracy" in stat) {
		return Decimal.div(literal(stat.accuracy, level).replace("%", ""), StatPointValue.ACC)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	if ("critical" in stat) {
		return Decimal.div(literal(stat.critical, level).replace("%", ""), StatPointValue.Cri)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	if ("evade" in stat) {
		return Decimal.div(literal(stat.evade, level).replace("%", ""), StatPointValue.EV)
			.toFixed(5)
			.replace(/\.?0+$/, "");
	}
	return "";
}

export default function BuffStatus (context: Vue, stat: BuffStat, level?: number): JSX.Element[] {
	if (!h) h = context.$createElement;

	const elems: JSX.Element[] = [];

	if ("buffs" in stat) { // 버프 형식의 수치
		const ext = ImageExtension();
		stat.buffs.forEach(buff => {
			const erase = getEraseText(buff.erase);
			const target = getTargetText(stat.body, stat.class, stat.role, stat.target);
			const on = getTriggerText(stat.on);
			const apply = getTriggerText(stat.if);

			if (buff.value.chance !== "0%") {
				elems.push(<div class="clearfix" title={ formatDesc(buff.desc.type, buff.desc.desc, buff.desc.value) }>
					<div>
						<img class="mr-1" width="25" src={ `${AssetsRoot}/${ext}/buff/${buff.icon}.${ext}` } />
						<strong class="align-middle">{ formatDesc(buff.desc.type, buff.desc.desc, buff.desc.value, true) }</strong>
					</div>

					<div class="pl-3">
						<div class="float-left">
							{ getBuffText(buff.value, level) }
							{ getChanceText(buff.value.chance) }
						</div>
						<div class="float-right text-right">
							{ target ? <b-badge variant="stat-def" class="ml-1 text-wrap">{ target }</b-badge> : _e() }
							{ on ? <b-badge variant="danger" class="ml-1 text-wrap">{ on }</b-badge> : _e() }
							{ apply ? <b-badge variant="danger" class="ml-1 text-wrap">{ apply }</b-badge> : _e() }
							{ erase ? <b-badge variant="warning" class="ml-1 text-wrap">{ erase }</b-badge> : _e() }
							{ stat.maxStack > 0 ? <b-badge variant="dark" class="ml-1 text-wrap">
								<locale k="BUFFSTACK" p0={ stat.maxStack } />
							</b-badge> : _e() }
						</div>
					</div>
				</div>);
			}
		});
	} else {
		if (stat.chance !== "0%") {
			elems.push(<div class="clearfix">
				<div class="float-left">
					{ getBuffText(stat, level) }
					{ getChanceText(stat.chance) }
				</div>
				{ isStatable(stat.type) ? <div class="float-right text-right">
					<b-badge variant="dark">
						<locale k="BUFFPOINT" p0={ toStatablePoint(stat, level) } />
					</b-badge>
				</div> : _e() }
			</div>);
		}
	}

	return elems;
}
