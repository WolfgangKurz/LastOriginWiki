import Vue, { CreateElement } from "vue";
import { Decimal } from "decimal.js";

import BuffData from "@/json/buffs.json";
import UnitData from "@/libs/DB/Unit";

import { BuffEffect, BuffEffectValue, BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import { BuffTrigger } from "@/libs/Buffs/BuffTrigger";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, BUFF_ATTR_TYPE, NUM_OUTPUTTYPE, ROLE_TYPE, UNIT_POSITION } from "@/libs/Types/Enums";
import { BuffStat } from "@/libs/Buffs/Buffs";
import { BuffErase } from "@/libs/Buffs/BuffErase";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { ArrayUnique } from "@/libs/Functions";

let h: CreateElement | undefined;

/** `<!---->` 노드를 반환합니다. */
export function _e (): JSX.Element {
	return {
		isRootInsert: true,
		isStatic: false,
		isComment: true,
		text: "",
	};
}

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
		const unit = UnitData.find(x => x.uid === key);
		if (!unit) return key;

		return `"${unit.name}"`;
	}

	if (name.startsWith("Effect_BUFF_Flood_N_")) return "침수";
	return (BuffData as Record<string, string>)[name] ||
		name;
}

function getTriggerText (trigger: BuffTrigger) {
	if (typeof trigger === "string") {
		switch (trigger) {
			case "damaged":
				return "피격 시";
			case "attack_success":
				return "공격 적중 시";
			case "team_dead":
				return "아군 사망 시";
			case "self_dead":
				return "사망 시";
			case "enemy_dead":
				return "적 사망 시";
			case "wave":
				return "전투 시작 시";
			case "round":
				return "매 라운드";
			case "attack":
				return "공격 시";
			case "attacked":
				return "공격 받을 시";
			case "wait":
				return "대기 시";
			case "move":
				return "이동 시";
			case "evade":
				return "회피 시";
			case "wave_end":
				return "전투 종료 시";
			case "enemy_killed":
				return "적 처치 시";
			case "criticaled":
				return "치명타 성공 시";
			case "revive":
				return "전투 속행 발동 시";
		}
	} else if (trigger) {
		if ("_comment" in trigger)
			return trigger._comment;
		else if ("after" in trigger) {
			switch (trigger.after) {
				case "counter":
					return "반격 후";
				case "use_skill":
					return "스킬 사용 후";
			}
		} else if ("damaged" in trigger) {
			switch (trigger.damaged) {
				case "fire":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-1 mb-0" />,
						"화염 속성 피격 시",
					];
				case "ice":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-1 mb-0" />,
						"냉기 속성 피격 시",
					];
				case "lightning":
					return [
						<elem-icon elem={ trigger.damaged } class="mr-1 mb-0" />,
						"전기 속성 피격 시",
					];
			}
		} else if ("hp>=" in trigger) {
			if (typeof trigger["hp>="] === "string")
				return "체력 " + trigger["hp>="] + "이상일 때";
			else {
				const target = {
					self: "자신의",
					target: "대상의",
				}[trigger["hp>="].target];
				return target + " 체력이 " + trigger["hp>="].value + "이상일 때";
			}
		} else if ("hp<=" in trigger) {
			if (typeof trigger["hp<="] === "string")
				return "체력 " + trigger["hp<="] + "이하일 때";
			else {
				const target = {
					self: "자신의",
					target: "대상의",
				}[trigger["hp<="].target];
				return target + " 체력이 " + trigger["hp<="].value + "이하일 때";
			}
		} else if ("hp>" in trigger) {
			if (typeof trigger["hp>"] === "string")
				return "체력 " + trigger["hp>"] + "초과일 때";
			else {
				const target = {
					self: "자신의",
					target: "대상의",
				}[trigger["hp>"].target];
				return target + " 체력이 " + trigger["hp>"].value + "초과일 때";
			}
		} else if ("hp<" in trigger) {
			if (typeof trigger["hp<"] === "string")
				return "체력 " + trigger["hp<"] + "미만일 때";
			else {
				const target = {
					self: "자신의",
					target: "대상의",
				}[trigger["hp<"].target];
				return target + " 체력이 " + trigger["hp<"].value + "미만일 때";
			}
		} else if ("in_squad" in trigger) {
			if (typeof trigger.in_squad === "string")
				return "아군에 " + convertBuff(trigger.in_squad) + "이(가) 존재할 때";
			else
				return "아군중에 " + trigger.in_squad.map(convertBuff).join(" 또는 ") + "이(가) 존재할 때";
		} else if ("in_enemy" in trigger) {
			if (typeof trigger.in_enemy === "string")
				return "적에 " + convertBuff(trigger.in_enemy) + "이(가) 존재할 때";
			else
				return "적 중에 " + trigger.in_enemy.map(convertBuff).join(" 또는 ") + "이(가) 존재할 때";
		} else if ("pos" in trigger) {
			if (typeof trigger.pos === "number") {
				switch (trigger.pos) {
					case UNIT_POSITION.FRONT:
						return "전열일 때";
					case UNIT_POSITION.MIDDLE:
						return "중열일 때";
					case UNIT_POSITION.BACK:
						return "후열일 때";
				}
			} else {
				switch (trigger.pos.position) {
					case UNIT_POSITION.FRONT:
						return "대상이 전열일 때";
					case UNIT_POSITION.MIDDLE:
						return "대상이 중열일 때";
					case UNIT_POSITION.BACK:
						return "대상이 후열일 때";
				}
			}
		} else if ("on" in trigger) {
			if ("func" in trigger.on && Array.isArray(trigger.on.select)) {
				const select = typeof trigger.on.select[0] === "string"
					// BuffTrigger_On_BuffKey
					? ArrayUnique((trigger.on.select as string[]).map(x => convertBuff(x)))
					// BuffTrigger_On_BuffEffectType
					: ArrayUnique((trigger.on.select as BUFFEFFECT_TYPE[]).map(x => getBuffEffectTypeText(x, trigger.on.attr)));

				if (select.length === 1) {
					const func = {
						OR: "일 때",
						AND: "일 때",
						UNFILLED: "가 아닐 때",
					}[trigger.on.func];

					return ["\"", select[0], `" ${func}`];
				} else {
					const func = {
						OR: " 중 하나일 때",
						AND: " 모두일 때 때",
						UNFILLED: "가 하나라도 아닐 때",
					}[trigger.on.func];

					const out: Array<string | Array<string | JSX.Element>> = [];
					for (let i = 0; i < select.length; i++) {
						if (i > 0) out.push(", ");
						out.push("\"", select[i], "\"");
					}
					out.push(func);
					return out;
				}
			} else if ("target" in trigger.on && "stack" in trigger.on) {
				const select = ArrayUnique((trigger.on.select as string[]).map(x => convertBuff(x)));

				// BuffTrigger_On_BuffStack
				const target = {
					self: "자신에게",
					target: "대상에게",
				}[trigger.on.target];

				if (select.length === 1)
					return [`${target} "`, select[0], `"가 ${trigger.on.stack}개일 때`];
				else
					return [`${target} "`, select.join(","), `"의 갯수 합이 ${trigger.on.stack}개일 때`];
			} else if ("target" in trigger.on && "func" in trigger.on) {
				const select = typeof trigger.on.select[0] === "string"
					// BuffTrigger_On_BuffExists
					? ArrayUnique((trigger.on.select as string[]).map(x => convertBuff(x)))
					// BuffTrigger_On_BuffTypeExists
					: ArrayUnique((trigger.on.select as BUFFEFFECT_TYPE[]).map(x => getBuffEffectTypeText(x, trigger.on.attr)));

				const target = {
					self: "자신에게",
					target: "대상에게",
				}[trigger.on.target];

				if (select.length === 1) {
					const func = {
						OR: "일 때",
						AND: "일 때",
						UNFILLED: "가 아닐 때",
					}[trigger.on.func];

					return [`${target} "`, select[0], `" ${func}`];
				} else {
					const func = {
						OR: " 중 하나일 때",
						AND: " 모두일 때 때",
						UNFILLED: "가 하나라도 아닐 때",
					}[trigger.on.func];

					if (typeof select[0] === "number") {
						// BuffTrigger_On_BuffTypeExists
						return target + " " + select.join(", ") + func;
					} else {
						// BuffTrigger_On_BuffExists
						return target + " " + select.join(", ") + func;
					}
				}
			}
		} else if ("target" in trigger) {
			if (trigger.target.length === 1)
				return "대상이 " + convertBuff(trigger.target[0]) + "일 때";
			else
				return "대상이 " + trigger.target.map(convertBuff).join(", ") + " 중 하나일 때";
		} else if ("unitCount" in trigger) {
			const filters = typeof trigger.unitCount.filter === "string"
				? [trigger.unitCount.filter]
				: trigger.unitCount.filter;
			const count = trigger.unitCount.count;

			if (filters.includes("all")) {
				if (filters.includes("bioroid"))
					return `아군과 적의 바이오로이드가 ${count}명일 때`;
				else if (filters.includes("ags"))
					return `아군과 적의 AGS가 ${count}기일 때`;
				else
					return `아군과 적이 ${count}체일 때`;
			} else if (filters.includes("squad")) {
				if (filters.includes("bioroid"))
					return `아군의 바이오로이드가 ${count}명일 때`;
				else if (filters.includes("ags"))
					return `아군의 AGS가 ${count}기일 때`;
				else
					return `아군이 ${count}체일 때`;
			} else if (filters.includes("enemy")) {
				if (filters.includes("bioroid"))
					return `적의 바이오로이드가 ${count}명일 때`;
				else if (filters.includes("ags"))
					return `적의 AGS가 ${count}기일 때`;
				else
					return `적이 ${count}체일 때`;
			}
		} else if ("round" in trigger) {
			const round = trigger.round.round;
			switch (trigger.round.operator) {
				case "=":
					return `${round} 라운드일 때`;
				case ">=":
					return `${round} 라운드거나 이후일 때`;
				case "<=":
					return `${round} 라운드거나 이전일 때`;
			}
		} else if ("notInBattle" in trigger)
			return trigger.notInBattle.join(",") + "이(가) 전투에 없을 때";
		else
			return "???";
	}
	return null;
}

function getChanceText (chance: string | undefined) {
	if (!chance) chance = "100%";

	if (chance === "100%") return _e();
	return <b-badge variant="success" class="ml-3">{ chance } 확률</b-badge>;
}

function getBuffEffectTypeText (type: BUFFEFFECT_TYPE, target: BUFF_ATTR_TYPE) {
	const p = target === BUFF_ATTR_TYPE.BUFF ? " 증가" : target === BUFF_ATTR_TYPE.DEBUFF ? " 감소" : "";
	const n = target === BUFF_ATTR_TYPE.BUFF ? " 감소" : target === BUFF_ATTR_TYPE.DEBUFF ? " 증가" : "";

	switch (type) {
		case BUFFEFFECT_TYPE.STAT_ATK_VALUE: // 0
		case BUFFEFFECT_TYPE.STAT_ATK_RATIO: // 1
			return "공격력" + p;
		case BUFFEFFECT_TYPE.STAT_DEF_VALUE: // 2
		case BUFFEFFECT_TYPE.STAT_DEF_RATIO: // 3
			return "방어력" + p;
		case BUFFEFFECT_TYPE.STAT_HP_VALUE: // 4
		case BUFFEFFECT_TYPE.STAT_HP_RATIO: // 5
			return "HP" + p;
		case BUFFEFFECT_TYPE.STAT_RATING_VALUE: // 6
		case BUFFEFFECT_TYPE.STAT_RATING_RATIO: // 7
			return "적중" + p;
		case BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE: // 8
		case BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO: // 9
			return "치명타" + p;
		case BUFFEFFECT_TYPE.STAT_AVOID_VALUE: // 10
		case BUFFEFFECT_TYPE.STAT_AVOID_RATIO: // 11
			return "회피" + p;
		case BUFFEFFECT_TYPE.STAT_SPEED_VALUE: // 12
		case BUFFEFFECT_TYPE.STAT_SPEED_RATIO: // 13
			return "행동력" + p;
		case BUFFEFFECT_TYPE.STAT_RESFIRE_VALUE: // 14
		case BUFFEFFECT_TYPE.STAT_RESFIRE_RATIO: // 15
			return [
				<elem-icon elem="fire" class="mr-1" />,
				"화염 저항" + p,
			];
		case BUFFEFFECT_TYPE.STAT_RESICE_VALUE: // 16
		case BUFFEFFECT_TYPE.STAT_RESICE_RATIO: // 17
			return [
				<elem-icon elem="ice" class="mr-1" />,
				"냉기 저항" + p,
			];
		case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_VALUE: // 18
		case BUFFEFFECT_TYPE.STAT_RESLIGHTNING_RATIO: // 19
			return [
				<elem-icon elem="lightning" class="mr-1" />,
				"전기 저항" + p,
			];
		case BUFFEFFECT_TYPE.STAGE_AP_VALUE: // 20
		case BUFFEFFECT_TYPE.STAGE_AP_SHIFT: // 21
			return "AP" + p;
		case BUFFEFFECT_TYPE.STAGE_AP_STOP: // 22
			return "행동 불능";
		case BUFFEFFECT_TYPE.UI_INFO_NEXTENEMY: // 23
			return "정찰";
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
			return "반격"; // 피격자가 물리 반격
		case BUFFEFFECT_TYPE.STAGE_REFLECTFIRE_RATIO_DEFENDER: // 30
			return "STAGE_REFLECTFIRE_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_REFLECTICE_RATIO_DEFENDER: // 31
			return "STAGE_REFLECTICE_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER: // 32
			return "STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_TIME: // 33
			return "피해 무효화"; // 피해 무효화
		case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE: // 34
			return "피해 최소화"; // value 이하 피해 1로 적용
		case BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE_LIMITED: // 35
			return "STAGE_SHIELD_VALUE_LIMITED" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO: // 36
			return "받는 피해 감소"; // 받는 피해 감소
		case BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO_LIMITED: // 37
			return "STAGE_SHIELD_RATIO_LIMITED" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_VALUE: // 38
			return "방어막"; // 방어막
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO: // 39
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_VALUE: // 40
			return "추가 물리 피해";
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO: // 41
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_VALUE: // 42
			return "추가 화염 피해";
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO: // 43
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_VALUE: // 44
			return "추가 냉기 피해";
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO: // 45
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_VALUE: // 46
			return "추가 전기 피해";
		case BUFFEFFECT_TYPE.STAGE_LOCKON01_TIME: // 47
			return "STAGE_LOCKON01_TIME" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_RATIO: // 48
			return "받는 피해 증가"; // 받는 피해 증가 %
		case BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_VALUE: // 49
			return "STAGE_ADDDAMAGE_VALUE" + p; // 사용처 없음, 받는 피해 증가 고정값
		case BUFFEFFECT_TYPE.STAGE_BLOCK_LINE: // 50
			return "행 보호"; // 행 보호
		case BUFFEFFECT_TYPE.STAGE_BLOCK_GRID: // 51
			return "격자 보호"; // 사용처 없음, 격자 보호?
		case BUFFEFFECT_TYPE.STAGE_MOVE_BACK: // 52
			return "뒤로 밀기";
		case BUFFEFFECT_TYPE.STAGE_MOVE_FRONT: // 53
			return "앞으로 당기기";
		case BUFFEFFECT_TYPE.STAGE_CRITICAL_NEXTATTACK: // 54
			return "다음 공격까지 치명타" + p;
		case BUFFEFFECT_TYPE.STAT_RANGE_VALUE: // 55
			return "사거리" + p;
		case BUFFEFFECT_TYPE.STAGE_AGRO_VALUE: // 56
			return "STAGE_AGRO_VALUE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_VALUE: // 57
			return "STAGE_DEFPIERCE_VALUE" + p; // 방어 관통 고정값?
		case BUFFEFFECT_TYPE.STAGE_DEFPIERCE_RATIO: // 58
			return "방어 관통" + p;
		case BUFFEFFECT_TYPE.STAGE_GRID_CHANGE: // 59
			return "STAGE_GRID_CHANGE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_TROOPERTYPEDMGBONUS_RATIO: // 60
			return "대경장 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_ARMOREDTYPEDMGBONUS_RATIO: // 61
			return "대중장 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_MOBILITYTYPEDMGBONUS_RATIO: // 62
			return "대기동 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_PERMANENT: // 63
		case BUFFEFFECT_TYPE.STAGE_CHARCHANGE_LIMITED: // 64
			return "변형";
		case BUFFEFFECT_TYPE.STAGE_PHYSICS_DOT: // 65
			return "고정 지속 피해";
		case BUFFEFFECT_TYPE.STAGE_FIRE_DOT: // 66
			return "고정 지속 화염 피해";
		case BUFFEFFECT_TYPE.STAGE_ICE_DOT: // 67
			return "고정 지속 냉기 피해";
		case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DOT: // 68
			return "고정 지속 전기 피해";
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM: // 69
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF: // 88
		case BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF: // 89
		case BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE: // 97
		case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_BUFF: // 99
		case BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_DEBUFF: // 100
			return "해제";
		case BUFFEFFECT_TYPE.STAGE_PHYSICS_DAMAGE_APPLY: // 70
			return "공격력 비례 고정 피해";
		case BUFFEFFECT_TYPE.STAGE_FIRE_DAMAGE_APPLY: // 71
			return "공격력 비례 고정 화염 피해";
		case BUFFEFFECT_TYPE.STAGE_ICE_DAMAGE_APPLY: // 72
			return "공격력 비례 고정 냉기 피해";
		case BUFFEFFECT_TYPE.STAGE_LIGHTNING_DAMAGE_APPLY: // 73
			return "공격력 비례 고정 전기 피해";
		case BUFFEFFECT_TYPE.STAGE_PROVOKE: // 74
			return "도발";
		case BUFFEFFECT_TYPE.STAGE_BLOCK_ROW: // 75
			return "열 보호";
		case BUFFEFFECT_TYPE.STAGE_BLOCK_CHARACTER: // 76
			return "지정 대상 보호";
		case BUFFEFFECT_TYPE.STAGE_SUPPORT_ATTACK: // 77
			return "공격 지원";
		case BUFFEFFECT_TYPE.STAGE_SNARE: // 78
			return "이동 불가";
		case BUFFEFFECT_TYPE.STAGE_SEAL_SKILL: // 79
			return "스킬 사용 불가";
		case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_ME: // 80
			return "HP가 낮을수록 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_OPP: // 81
			return "대상의 HP가 낮을수록 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_RESURRECT: // 82
		case BUFFEFFECT_TYPE.STAGE_RESURRECT_RATIO: // 98
			return "전투 속행";
		case BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO_INS: // 83
			return "피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO_INS: // 84
			return "화염 속성 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO_INS: // 85
			return "냉기 속성 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO_INS: // 86
			return "전기 속성 피해량" + p;
		case BUFFEFFECT_TYPE.STAGE_MARKING: // 87
			return "표식";
		case BUFFEFFECT_TYPE.STAGE_DEBUFF_RATEUP: // 90
		case BUFFEFFECT_TYPE.STAGE_DEBUFF_PERDOWN: // 91
			return "효과 저항" + p;
		case BUFFEFFECT_TYPE.STAGE_BUFFEFFECTRATE_CHANGE: // 92
			return "효과 발동" + p;
		case BUFFEFFECT_TYPE.REMOVE_SUMMON_INSTENV: // 93
			return "소환물 제거";
		case BUFFEFFECT_TYPE.BARRIER_PIERCE: // 94
			return "방어막 / 피해 감소 무시";
		case BUFFEFFECT_TYPE.STAGE_EXP_UP: // 95
			return "경험치" + p;
		case BUFFEFFECT_TYPE.STAGE_ANALYZE: // 96
			return "STAGE_ANALYZE" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_IMMUNITY_DEBUFF: // 101
			return "STAGE_IMMUNITY_DEBUFF" + p; // 사용처 없음, 알 수 없음
		case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1: // 102
		case BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2: // 103
			return "협동 공격";
	}
	return "???";
}

function getBuffText (stat: BuffEffect, level?: number) {
	if ("_comment" in stat)
		return stat._comment;
	else if ("off" in stat) {
		if (typeof stat.off === "string")
			return stat.off + " 해제";
		else if (typeof stat.off === "number") {
			const target = {
				0: "이로운",
				1: "해로운",
				2: "스킬 버프",
				3: "기타",
				4: "모든",
			}[stat.off];
			return target + " 효과 해제";
		} else if ("target" in stat.off) {
			return [
				getBuffEffectTypeText(stat.off.type, stat.off.target),
				" 해제",
			];
		} else
			return getBuffEffectTypeText(stat.off.type, BUFF_ATTR_TYPE.NO_MATTER) + " 해제";
	} else if ("attack" in stat)
		return "공격력 " + positive(stat.attack, level);
	else if ("defense" in stat)
		return "방어력 " + positive(stat.defense, level);
	else if ("hp" in stat)
		return "체력 " + positive(stat.hp, level);
	else if ("accuracy" in stat)
		return "명중률 " + positive(stat.accuracy, level);
	else if ("critical" in stat)
		return "치명타 " + positive(stat.critical, level);
	else if ("evade" in stat)
		return "회피 " + positive(stat.evade, level);
	else if ("turnSpeed" in stat)
		return "행동력 " + positive(stat.turnSpeed, level);
	else if ("ap" in stat)
		return "AP " + positive(stat.ap, level);
	else if ("ap_set" in stat)
		return "AP " + positive(stat.ap_set, level) + "로 변경";
	else if ("resist" in stat) {
		if ("elem" in stat.resist) {
			switch (stat.resist.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.resist.elem } class="mr-1" />,
						"화염 저항 " + positive(stat.resist.value, level),
					];
				case "ice":
					return [
						<elem-icon elem={ stat.resist.elem } class="mr-1" />,
						"냉기 저항 " + positive(stat.resist.value, level),
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.resist.elem } class="mr-1" />,
						"전기 저항 " + positive(stat.resist.value, level),
					];
			}
		} else {
			switch (stat.resist.type) {
				case "debuff":
					return "효과 저항 " + positive(stat.resist.value, level);
			}
		}
	} else if ("ap_stop" in stat)
		return "행동 불능";
	else if ("scout" in stat)
		return "정찰 활성화";
	else if ("counter" in stat)
		return `${literal(stat.counter, level)} 위력으로 반격`;
	else if ("damage_immune" in stat)
		return `${integer(stat.damage_immune, level)} 이하 피해 무효`;
	else if ("damage_minimize" in stat)
		return `${integer(stat.damage_minimize, level)} 이하 피해 최소화`;
	else if ("damage_reduce" in stat)
		return `받는 피해 ${literal(stat.damage_reduce, level)} 감소`;
	else if ("damage_increase" in stat)
		return `받는 피해 ${literal(stat.damage_increase, level)} 증가`;
	else if ("damage" in stat) {
		if ("elem" in stat.damage) {
			switch (stat.damage.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-1" />,
						`추가 화염 피해 ${literal(stat.damage.damage, level)}`,
					];
				case "ice":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-1" />,
						`추가 냉기 피해 ${literal(stat.damage.damage, level)}`,
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.damage.elem } class="mr-1" />,
						`추가 번개 피해 ${literal(stat.damage.damage, level)}`,
					];
			}
		} else
			return `추가 피해 ${literal(stat.damage, level)}`;
	} else if ("damage_multiply" in stat) {
		switch (stat.damage_multiply.target) {
			case "light":
				return `대경장 피해량 ${positive(stat.damage_multiply.value, level)}`;
			case "air":
				return `대기동 피해량 ${positive(stat.damage_multiply.value, level)}`;
			case "heavy":
				return `대중장 피해량 ${positive(stat.damage_multiply.value, level)}`;
		}
	} else if ("damage_by_hp" in stat) {
		const target = (stat.damage_by_hp.target === "target" ? "대상" : "자신");
		return `${target}의 HP가 낮을 수록 피해량 ${literal(stat.damage_by_hp.damage, level)} 증가`;
	} else if ("damage_add" in stat) {
		if ("elem" in stat.damage_add) {
			switch (stat.damage_add.elem) {
				case "fire":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-1" />,
						`화염 속성 피해량 ${positive(stat.damage_add.damage, level)}`,
					];
				case "ice":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-1" />,
						`냉기 속성 피해량 ${positive(stat.damage_add.damage, level)}`,
					];
				case "lightning":
					return [
						<elem-icon elem={ stat.damage_add.elem } class="mr-1" />,
						`전기 속성 피해량 ${positive(stat.damage_add.damage, level)}`,
					];
			}
		} else
			return `피해량 ${positive(stat.damage_add, level)}`;
	} else if ("barrier" in stat)
		return `방어막 ${positive(stat.barrier, level)}`;
	else if ("guard" in stat) {
		switch (stat.guard) {
			case "col":
				return "행 보호";
			case "row":
				return "열 보호";
			case "target":
				return "지정 대상 보호";
		}
	} else if ("position" in stat) {
		switch (stat.position.type) {
			case "pull":
				return `${integer(stat.position.range, level)}칸 당기기`;
			case "push":
				return `${integer(stat.position.range, level)}칸 밀기`;
		}
	} else if ("next_crit" in stat)
		return `다음 공격까지 치명타 ${positive(stat.next_crit, level)}`;
	else if ("range" in stat)
		return `사거리 ${pinteger(stat.range, level)}`;
	else if ("penetration" in stat)
		return `방어 관통 ${positive(stat.penetration, level)}`;
	else if ("metamolphosis" in stat)
		return "변신";
	else if ("fixed_damage" in stat) {
		if ("elem" in stat.fixed_damage) {
			switch (stat.fixed_damage.elem) {
				case "fire":
					return [
						`${percent(stat.fixed_damage.damage, "공격력 ", "")}${literal(stat.fixed_damage.damage, level)} 지속`,
						<elem-icon elem={ stat.fixed_damage.elem } class="mr-1" />,
						"화염 피해",
					];
				case "ice":
					return [
						`${percent(stat.fixed_damage.damage, "공격력 ", "")}${literal(stat.fixed_damage.damage, level)} 지속`,
						<elem-icon elem={ stat.fixed_damage.elem } class="mr-1" />,
						"냉기 피해",
					];
				case "lightning":
					return [
						`${percent(stat.fixed_damage.damage, "공격력 ", "")}${literal(stat.fixed_damage.damage, level)} 지속`,
						<elem-icon elem={ stat.fixed_damage.elem } class="mr-1" />,
						"전기 피해",
					];
			}
		} else
			return `${percent(stat.fixed_damage, "공격력 ", "")}${literal(stat.fixed_damage, level)} 지속 고정 피해`;
	} else if ("provoke" in stat)
		return "도발";
	else if ("stun" in stat)
		return "행동 불능";
	else if ("attack_support" in stat)
		return `${literal(stat.attack_support, level)} 확률로 공격 지원`;
	else if ("immovable" in stat)
		return "이동 불가";
	else if ("skill_disable" in stat)
		return "스킬 사용 불가";
	else if ("revive" in stat) {
		if (typeof stat.revive.base === "string")
			return `최대 HP의 ${literal(stat.revive, level)}로 전투 속행`;
		else
			return `${literal(stat.revive, level)}HP로 전투 속행`;
	} else if ("attack_target" in stat)
		return "표식 지정";
	else if ("invokeChance" in stat)
		return `효과 발동 ${positive(stat.invokeChance, level)}`;
	else if ("summon_remove" in stat)
		return "소환물 제거";
	else if ("penetration_force" in stat)
		return "방어막 / 피해 감소 무시";
	else if ("exp" in stat)
		return `획득 경험치 ${positive(stat.exp, level)}`;
	else if ("collaborate" in stat)
		return `협동 공격 : ${convertBuff(stat.collaborate.with)}의 ${stat.collaborate.skill}번째 액티브 스킬`;

	return JSON.stringify(stat); // "???";
}

function getEraseText (erase: BuffErase) {
	if ("trigger" in erase) {
		const trigger = getTriggerText(erase.trigger);
		if (trigger)
			return `${erase.count}회, ${trigger} 감소`;
		else
			return `${erase.count}회`;
	} else if ("until" in erase) {
		const trigger = getTriggerText(erase.until);
		if (erase.rounds !== undefined)
			return `${erase.rounds} 라운드 지속, ${trigger} 즉시 삭제`;
		else
			return `${trigger} 삭제`;
	} else if ("rounds" in erase) {
		if (erase.rounds === 0) return null;
		return `${erase.rounds} 라운드 지속`;
	} else
		return "영구";
}

function getTargetText (body: ACTOR_BODY_TYPE[], cls: ACTOR_CLASS[], role: ROLE_TYPE[]) {
	const _bodies = ["바이오로이드", "AGS"];
	const _classes = ["경장형", "중장형", "기동형"];
	const _roles = ["보호기", "공격기", "지원기"];

	const b = body.length === 2 ? "" : _bodies[body[0]];
	const c = cls.length === 3 ? "" : cls.map(x => _classes[x]).join("/");
	const r = role.length === 3 ? "" : role.map(x => _roles[x]).join("/");

	return [b, c, r].filter(x => x).join(", ");
}

function formatDesc (type: NUM_OUTPUTTYPE, template: string, value: string, shortize: boolean = false) {
	if (shortize)
		template = template.replace(/:.+$/, "").trim();

	if (value.startsWith("Char_")) {
		const key = value.replace(/Char_(.+)_N/, "$1");
		const unit = UnitData.find(x => x.uid === key);
		if (!unit) return `${template} - ${key}`;

		return `${template} - ${unit.name}`;
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

export default function BuffStatus (context: Vue, stat: BuffStat, level?: number): JSX.Element[] {
	if (!h) h = context.$createElement;

	const elems: JSX.Element[] = [];

	if ("buffs" in stat) { // 버프 형식의 수치
		const ext = ImageExtension();
		stat.buffs.forEach(buff => {
			const erase = getEraseText(buff.erase);
			const target = getTargetText(stat.body, stat.class, stat.role);
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
						<div class="float-right">
							{ target ? <b-badge variant="stat-def" class="ml-1">{ target }</b-badge> : _e() }
							{ on ? <b-badge variant="danger" class="ml-1">{ on }</b-badge> : _e() }
							{ apply ? <b-badge variant="danger" class="ml-1">{ apply }</b-badge> : _e() }
							{ erase ? <b-badge variant="warning" class="ml-1">{ erase }</b-badge> : _e() }
							{ stat.maxStack > 0 ? <b-badge variant="dark" class="ml-1">최대 { stat.maxStack } 중첩</b-badge> : _e() }
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
			</div>);
		}
	}

	return elems;
}
