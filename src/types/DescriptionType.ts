import { SKILL_ATTR } from "./Enums";

export type BuffIconType = "ACCURACY_DOWN" | "ACCURACY_UP" | "AP_DOWN" | "AP_SHIFT" | "AP_UP" | "ARMORED_DMG_UP" | "ATK_DOWN" | "ATK_UP" |
	"BARRIER" | "BARRIER_PIERCE" | "BUFFEFFECTRATE_CHANGE" |
	"CHANGE_CHAR" | "CHANGE_GRID" | "charge" | "COUNTER" | "CRITICAL_DOWN" | "CRITICAL_UP" |
	"DamageAmp_Me" | "DamageAmp_Opp" | "DAMAGE_ABSORB" | "DAMAGE_REDUCE" | "DEBUFF_PERDOWN" | "DEBUFF_RATEUP" |
	"DEF_All" | "DEF_Char" | "DEF_DOWN" | "DEF_Line" | "DEF_PIERCE_UP" | "DEF_RESSURRECT" | "DEF_Side" | "DEF_UP" |
	"EVADE_DOWN" | "EVADE_UP" | "EXP_UP" |
	"FireATK_UP" | "FireDMG_DOT" | "FIRERES_DOWN" | "FIRERES_UP" |
	"HP_DOWN" | "HP_UP" |
	"IceATK_UP" | "IceDMG_DOT" | "ICERES_DOWN" | "ICERES_UP" | "IMMUNITY_DEBUFF" | "INVINCIBLE" |
	"LightningATK_UP" | "LightningDMG_DOT" | "LIGHTNINGRES_DOWN" | "LIGHTNINGRES_UP" |
	"MARKING" | "MOBILITY_DMG_UP" |
	"PhyATK_UP" | "phyDMG_DOT" | "PROVOKE" | "Pull" | "Push" |
	"RANGE_DOWN" | "RANGE_UP" | "REMOVE_BUFF" | "REMOVE_DEBUFF" |
	"SCOUTING" | "SEAL_SKILL" | "SNARE" | "Speed_DOWN" | "Speed_UP" | "STUN" | "SUMMON_INSTENV" | "SUPPORT_ATTACK" |
	"TOGETHER_ATTACK" | "TROOPER_DMG_UP" |
	"VULNERABLE" |
	"White";
export const BuffIconTypes: BuffIconType[] = [
	"ACCURACY_DOWN", "ACCURACY_UP", "AP_DOWN", "AP_SHIFT", "AP_UP", "ARMORED_DMG_UP", "ATK_DOWN", "ATK_UP",
	"BARRIER", "BARRIER_PIERCE", "BUFFEFFECTRATE_CHANGE",
	"CHANGE_CHAR", "CHANGE_GRID", "charge", "COUNTER", "CRITICAL_DOWN", "CRITICAL_UP",
	"DamageAmp_Me", "DamageAmp_Opp", "DAMAGE_ABSORB", "DAMAGE_REDUCE", "DEBUFF_PERDOWN", "DEBUFF_RATEUP",
	"DEF_All", "DEF_Char", "DEF_DOWN", "DEF_Line", "DEF_PIERCE_UP", "DEF_RESSURRECT", "DEF_Side", "DEF_UP",
	"EVADE_DOWN", "EVADE_UP", "EXP_UP",
	"FireATK_UP", "FireDMG_DOT", "FIRERES_DOWN", "FIRERES_UP",
	"HP_DOWN", "HP_UP",
	"IceATK_UP", "IceDMG_DOT", "ICERES_DOWN", "ICERES_UP", "IMMUNITY_DEBUFF", "INVINCIBLE",
	"LightningATK_UP", "LightningDMG_DOT", "LIGHTNINGRES_DOWN", "LIGHTNINGRES_UP",
	"MARKING", "MOBILITY_DMG_UP",
	"PhyATK_UP", "phyDMG_DOT", "PROVOKE", "Pull", "Push",
	"RANGE_DOWN", "RANGE_UP", "REMOVE_BUFF", "REMOVE_DEBUFF",
	"SCOUTING", "SEAL_SKILL", "SNARE", "Speed_DOWN", "Speed_UP", "STUN", "SUMMON_INSTENV", "SUPPORT_ATTACK",
	"TOGETHER_ATTACK", "TROOPER_DMG_UP",
	"VULNERABLE",
	"White",
];

export type ElemType = "fire" | "ice" | "lightning" | "physics" | SKILL_ATTR;
export const ElemTypes: ElemType[] = ["physics", "fire", "ice", "lightning"];

export type SectionType = undefined | "dmg" | "note" | "buff" | "important" | "attr" | "cond" | "chance" | "ref";
export const SectionTypes: SectionType[] = [undefined, "dmg", "note", "buff", "important", "attr", "cond", "chance", "ref"];
