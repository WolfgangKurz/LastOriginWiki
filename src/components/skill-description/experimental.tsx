import { CurrentLocale } from "@/libs/Locale";

import SkillDescription, { SectionProps } from ".";

interface BuffNameReturn {
	text: string;
	sections: Record<string, FunctionalComponent<SectionProps>[]>;
}
function BuffName (text: string): BuffNameReturn {
	// https://arca.live/b/lastorigin/81694084

	if (CurrentLocale !== "KR") return { text, sections: {} };

	type BuffReg = [from: RegExp, icon: string | string[], desc: ((substring: string, ...args: any[]) => string)];
	type BuffText = [from: string, icon: string | string[], desc: string];
	type Buff = BuffReg | BuffText;
	function isTextBuff (b: Buff): b is BuffText {
		return typeof b[0] === "string";
	}

	const list: Buff[] = [
		// 기본 스테이터스 관련
		[/공격 강화 ([1-5])/, "ATK_UP", (_, p1) => `공격력 +${p1 * 10}%`],
		["공격 강화", "ATK_UP", "공격력 증가"],
		[/공격 약화 ([1-5])/, "ATK_DOWN", (_, p1) => `공격력 -${p1 * 10}%`],
		["공격 약화", "ATK_DOWN", "공격력 감소"],

		[/방어 강화 ([1-5])/, "DEF_UP", (_, p1) => `방어력 +${p1 * 10}%`],
		["방어 강화 X", "DEF_UP", "방어력 +500%"],
		["방어 강화", "DEF_UP", "방어력 증가"],
		[/방어 약화 ([1-5])/, "DEF_DOWN", (_, p1) => `방어력 -${p1 * 10}%`],
		["방어 약화", "DEF_DOWN", "방어력 감소"],

		[/적중 강화 ([1-5])/, "ACCURACY_UP", (_, p1) => `적중 +${p1 * 10}%`],
		["적중 강화", "ACCURACY_UP", "적중 증가"],
		[/적중 약화 ([1-5])/, "ACCURACY_DOWN", (_, p1) => `적중 -${p1 * 10}%`],
		["적중 약화", "ACCURACY_DOWN", "적중 감소"],

		[/회피 강화 ([1-5])/, "EVADE_UP", (_, p1) => `회피 +${p1 * 10}%`],
		["회피 강화 X", "EVADE_UP", "회피 +500%"],
		["회피 강화", "EVADE_UP", "회피 증가"],
		[/회피 약화 ([1-5])/, "EVADE_DOWN", (_, p1) => `회피 -${p1 * 10}%`],
		["회피 약화", "EVADE_DOWN", "회피 감소"],

		[/치명 강화 ([1-5])/, "CRITICAL_UP", (_, p1) => `치명타 +${p1 * 10}%`],
		["치명 강화", "CRITICAL_UP", "치명타 증가"],
		[/치명 약화 ([1-5])/, "CRITICAL_DOWN", (_, p1) => `치명타 -${p1 * 10}%`],
		["치명 약화", "CRITICAL_DOWN", "치명타 감소"],
		[/치명타 강화 ([1-5])/, "CRITICAL_UP", (_, p1) => `치명타 +${p1 * 10}%`],
		["치명타 강화", "CRITICAL_UP", "치명타 증가"],
		[/치명타 약화 ([1-5])/, "CRITICAL_DOWN", (_, p1) => `치명타 -${p1 * 10}%`],
		["치명타 약화", "CRITICAL_DOWN", "치명타 감소"],

		["차지", "CRITICAL_UP", "다음 공격 확정 치명타"],

		// 속성 저항 관련
		[/내열 강화 ([1-5])/, "FIRERES_UP", (_, p1) => `화염 저항 +${p1 * 10}%`],
		["내열 강화", "FIRERES_UP", "화염 저항 증가"],
		[/내열 약화 ([1-5])/, "FIRERES_DOWN", (_, p1) => `화염 저항 -${p1 * 10}%`],
		["내열 약화", "FIRERES_DOWN", "화염 저항 감소"],

		[/방한 강화 ([1-5])/, "ICERES_UP", (_, p1) => `냉기 저항 +${p1 * 10}%`],
		["방한 강화", "ICERES_UP", "냉기 저항 증가"],
		[/방한 약화 ([1-5])/, "ICERES_DOWN", (_, p1) => `냉기 저항 -${p1 * 10}%`],
		["방한 약화", "ICERES_DOWN", "냉기 저항 감소"],

		[/절연 강화 ([1-5])/, "LIGHTNINGRES_UP", (_, p1) => `전기 저항 +${p1 * 10}%`],
		["절연 강화", "LIGHTNINGRES_UP", "전기 저항 증가"],
		[/절연 약화 ([1-5])/, "LIGHTNINGRES_DOWN", (_, p1) => `전기 저항 -${p1 * 10}%`],
		["절연 약화", "LIGHTNINGRES_DOWN", "전기 저항 감소"],

		["화염 반작용", "FireRes_Value_Reverse", "화염 저항 반전"],
		["냉기 반작용", "IceRes_Value_Reverse", "냉기 저항 반전"],
		["전기 반작용", "LightningRes_Value_Reverse", "전기 저항 반전"],

		[/화염 적응 ([1-5])/, "FIRERES_UP", (_, p1) => `화염 저항 하한 ${p1 * 20}%`],
		["화염 적응", "FIRERES_UP", "화염 저항 하한"],
		[/냉기 적응 ([1-5])/, "ICERES_UP", (_, p1) => `냉기 저항 하한 ${p1 * 20}%`],
		["냉기 적응", "ICERES_UP", "냉기 저항 하한"],
		[/전기 적응 ([1-5])/, "LIGHTNINGRES_UP", (_, p1) => `전기 저항 하한 ${p1 * 20}%`],
		["전기 적응", "LIGHTNINGRES_UP", "전기 저항 하한"],

		// 행동 관련
		[/행동 강화 ([1-5])/, "AP_UP", (_, p1) => `행동력 +${p1 * 10}%`],
		["행동 강화", "AP_UP", "행동력 증가"],
		[/행동 약화 ([1-5])/, "AP_DOWN", (_, p1) => `행동력 -${p1 * 10}%`],
		["행동 약화", "AP_DOWN", "행동력 감소"],

		[/가속 ([1-5])/, "AP_UP", (_, p1) => `AP +${p1}`],
		["가속", "AP_UP", "AP 증가"],
		[/감속 ([1-5])/, "AP_DOWN", (_, p1) => `AP -${p1}`],
		["감속", "AP_DOWN", "AP 감소"],

		["침묵", "SEAL_SKILL", "스킬 사용 불가"],
		["행동 불가", "STUN", "행동 불가"],

		[/신속 ([1-5])/, "Action_Number_Change_Up", (_, p1) => `최대 행동 횟수 +${p1}`],
		["신속", "Action_Number_Change_Up", "최대 행동 횟수 증가"],

		// 데미지 증감 관련
		[/위력 강화 ([1-5])/, "SKILL_UP", (_, p1) => `스킬 위력 +${p1 * 10}%`],
		["위력 강화", "SKILL_UP", "스킬 위력 증가"],
		[/위력 약화 ([1-5])/, "SKILL_DOWN", (_, p1) => `스킬 위력 -${p1 * 10}%`],
		["위력 약화", "SKILL_DOWN", "스킬 위력 감소"],

		[/전략 수립 \(경장\) ([1-5])/, "TROOPER_DMG_UP", (_, p1) => `대 경장형 피해량 +${p1 * 10}%`],
		[/전략 수립\(경장\) ([1-5])/, "TROOPER_DMG_UP", (_, p1) => `대 경장형 피해량 +${p1 * 10}%`],
		["전략 수립 (경장)", "TROOPER_DMG_UP", "대 경장형 피해량 증가"],
		["전략 수립(경장)", "TROOPER_DMG_UP", "대 경장형 피해량 증가"],
		[/전략 방해 \(경장\) ([1-5])/, "TROOPER_DMG_DOWN", (_, p1) => `대 경장형 피해량 -${p1 * 10}%`],
		[/전략 방해\(경장\) ([1-5])/, "TROOPER_DMG_DOWN", (_, p1) => `대 경장형 피해량 -${p1 * 10}%`],
		["전략 방해 (경장)", "TROOPER_DMG_DOWN", "대 경장형 피해량 감소"],
		["전략 방해(경장)", "TROOPER_DMG_DOWN", "대 경장형 피해량 감소"],

		[/전략 수립 \(기동\) ([1-5])/, "MOBILITY_DMG_UP", (_, p1) => `대 기동형 피해량 +${p1 * 10}%`],
		[/전략 수립\(기동\) ([1-5])/, "MOBILITY_DMG_UP", (_, p1) => `대 기동형 피해량 +${p1 * 10}%`],
		["전략 수립 (기동)", "MOBILITY_DMG_UP", "대 기동형 피해량 증가"],
		["전략 수립(기동)", "MOBILITY_DMG_UP", "대 기동형 피해량 증가"],
		[/전략 방해 \(기동\) ([1-5])/, "MOBILITY_DMG_DOWN", (_, p1) => `대 기동형 피해량 -${p1 * 10}%`],
		[/전략 방해\(기동\) ([1-5])/, "MOBILITY_DMG_DOWN", (_, p1) => `대 기동형 피해량 -${p1 * 10}%`],
		["전략 방해 (기동)", "MOBILITY_DMG_DOWN", "대 기동형 피해량 감소"],
		["전략 방해(기동)", "MOBILITY_DMG_DOWN", "대 기동형 피해량 감소"],

		[/전략 수립 \(중장\) ([1-5])/, "ARMORED_DMG_UP", (_, p1) => `대 중장형 피해량 +${p1 * 10}%`],
		[/전략 수립\(중장\) ([1-5])/, "ARMORED_DMG_UP", (_, p1) => `대 중장형 피해량 +${p1 * 10}%`],
		["전략 수립 (중장)", "ARMORED_DMG_UP", "대 중장형 피해량 증가"],
		["전략 수립(중장)", "ARMORED_DMG_UP", "대 중장형 피해량 증가"],
		[/전략 방해 \(중장\) ([1-5])/, "ARMORED_DMG_DOWN", (_, p1) => `대 중장형 피해량 -${p1 * 10}%`],
		[/전략 방해\(중장\) ([1-5])/, "ARMORED_DMG_DOWN", (_, p1) => `대 중장형 피해량 -${p1 * 10}%`],
		["전략 방해 (중장)", "ARMORED_DMG_DOWN", "대 중장형 피해량 감소"],
		["전략 방해(중장)", "ARMORED_DMG_DOWN", "대 중장형 피해량 감소"],

		[/피해 감쇄 ([1-5])/, "DAMAGE_REDUCE", (_, p1) => `받는 피해 감소 ${p1 * 10}%`],
		["피해 감쇄", "DAMAGE_REDUCE", "받는 피해 감소"],
		[/피해 증폭 ([1-5])/, "VULNERABLE", (_, p1) => `받는 피해 증가 ${p1 * 10}%`],
		["피해 증폭", "VULNERABLE", "받는 피해 증가"],

		[
			/회심 ([1-5])/,
			["PhyATK_UP", "FireATK_UP", "IceATK_UP", "LightningATK_UP"],
			(_, p1) => `물리/속성 피해량 +${p1 * 20}`,
		],
		[
			"회심",
			["PhyATK_UP", "FireATK_UP", "IceATK_UP", "LightningATK_UP"],
			"물리/속성 피해량 증가",
		],

		[/배수진 ([1-5])/, "DamageAmp_Me", (_, p1) => `자신의 HP가 낮을수록 피해량 +${p1 * 10}%`],
		["배수진", "DamageAmp_Me", "자신의 HP가 낮을수록 피해량 증가"],
		[/마무리 ([1-5])/, "DamageAmp_Opp", (_, p1) => `대상의 HP가 낮을수록 피해량 +${p1 * 10}%`],
		["마무리", "DamageAmp_Opp", "대상의 HP가 낮을수록 피해량 증가"],

		[/집속 ([1-5])/, "ATK_UP", (_, p1) => `광역 피해량 +${p1 * 20}%`],
		["집속", "ATK_UP", "광역 피해량 증가"],
		[/산개 ([1-5])/, "DEF_UP", (_, p1) => `광역 피해량 -${p1 * 20}%`],
		["산개", "DEF_UP", "광역 피해량 감소"],

		[/피해 흡수 ([1-5])/, "BARRIER", (_, p1) => `방어막 ${p1 * 1000}`],
		["피해 흡수", "BARRIER", "방어막"],

		[/도탄 ([1-5])/, "DAMAGE_REDUCE", (_, p1) => `${p1 * 1000} 이하 피해 최소화`],
		["도탄 X", "DAMAGE_REDUCE", "모든 피해 최소화"],
		["도탄", "DAMAGE_REDUCE", "피해 최소화"],

		[/철벽 ([1-5])/, "DEF_All", (_, p1) => `피해 무효화 ${p1}회`],
		["철벽", "DEF_All", "피해 무효화"],

		// 보호 관련
		["열 보호", "DEF_Side", "열 보호"],
		["행 보호", "DEF_Line", "행 보호"],
		["지정 보호", "DEF_Char", "지정 보호"],

		["우회", "Guardpierce_Apply", "보호 무시 활성화"],
		["차폐", "Guardpierce_No_Apply", "보호 무시 비활성화"],

		// 효과 관련
		[/내성 강화 ([1-5])/, "DEBUFF_PERDOWN", (_, p1) => `효과 저항 +${p1 * 20}%`],
		["내성 강화", "DEBUFF_PERDOWN", "효과 저항 증가"],
		[/내성 약화 ([1-5])/, "DEBUFF_RATEUP", (_, p1) => `효과 저항 -${p1 * 20}%`],
		["내성 약화", "DEBUFF_RATEUP", "효과 저항 감소"],

		[/초 내성 강화 ([1-5])/, "Remove_Buff_Resist", (_, p1) => `강화 해제 저항 +${p1 * 20}%`],
		["초 내성 강화", "Remove_Buff_Resist", "강화 해제 저항 증가"],

		// 특정 효과 해제 → ~ 해제 (Ex. 적중 증가 해제 → 적중 강화 해제)

		["무장 해제", "REMOVE_BUFF", "모든 강화 효과 해제"],
		["중화", "REMOVE_DEBUFF", "모든 해로운 효과 해제"],

		// 특정 효과 면역 → ~ 면역 (Ex. 공격력 감소 효과 면역 → 공격 약화 면역)

		["봉쇄", "Disallow", "강화 불가"],

		["돌파", "BARRIER_PIERCE", "방어막/피해 감소 무시"],

		[/예리 ([1-5])/, "DEF_PIERCE_UP", (_, p1) => `방어 관통 +${p1 * 10}%`],
		["예리", "DEF_PIERCE_UP", "방어 관통 증가"],
		[/둔탁 ([1-5])/, "DEF_PIERCE_DOWN", (_, p1) => `방어 관통 -${p1 * 10}%`],
		["둔탁", "DEF_PIERCE_DOWN", "방어 관통 감소"],
		[/관통 내성 ([1-5])/, "DEF_UP", (_, p1) => `방어 관통 저항 +${p1 * 10}%`],
		["관통 내성", "DEF_UP", "방어 관통 저항 증가"],

		// 지속 피해 관련
		[/손상 ([1-5])/, "phyDMG_DOT", (_, p1) => `지속 물리 피해 ${p1 * 200}`],
		["손상", "phyDMG_DOT", "지속 물리 피해"],

		[/점화 ([1-5])/, "FireDMG_DOT", (_, p1) => `지속 화염 피해 ${p1 * 200}`],
		["점화", "FireDMG_DOT", "지속 화염 피해"],

		[/동결 ([1-5])/, "IceDMG_DOT", (_, p1) => `지속 냉기 피해 ${p1 * 200}`],
		["동결", "IceDMG_DOT", "지속 냉기 피해"],

		[/감전 ([1-5])/, "LightningDMG_DOT", (_, p1) => `지속 전기 피해 ${p1 * 200}`],
		["감전", "LightningDMG_DOT", "지속 전기 피해"],

		// 기타
		["도발", "PROVOKE", "도발"],
		["표식", "MARKING", "표식"],
		["이동 불가", "SNARE", "이동 불가"],
		["공격 지원", "SUPPORT_ATTACK", "공격 지원"],

		[/역공 ([1-5])/, "COUNTER", (_, p1) => `${p1 * 20}% 위력으로 반격`],
		["역공", "COUNTER", "반격"],

		[/넉백 ([1-2])/, "Push", (_, p1) => `뒤로 ${p1}칸 밀기`],
		["넉백", "Push", "뒤로 밀기"],
		[/풀링 ([1-2])/, "Pull", (_, p1) => `앞으로 ${p1}칸 당기기`],
		["풀링", "Pull", "앞으로 당기기"],

		[/조준 보조 ([1-5])/, "RANGE_UP", (_, p1) => `사거리 +${p1}`],
		["조준 보조", "RANGE_UP", "사거리 증가"],
		[/조준 방해 ([1-5])/, "RANGE_DOWN", (_, p1) => `사거리 -${p1}`],
		["조준 방해", "RANGE_DOWN", "사거리 감소"],

		[/임시 복원 ([1-5])/, "DEF_RESSURRECT", (_, p1) => `${p1 * 100} HP로 전투 속행`],
		["임시 복원", "DEF_RESSURRECT", "전투 속행"],
		[/급속 복원 ([1-5])/, "DEF_RESSURRECT", (_, p1) => `${p1 * 20}% HP로 전투 속행`],
		["급속 복원", "DEF_RESSURRECT", "전투 속행"],
	];

	const affix: BuffNameReturn["sections"] = {};
	let affixCounter = 0;
	function pushAffix (icon: string | string[], content: string): string {
		affixCounter++;

		const name = `EXPERIMENTAL_BUFFNAME_${affixCounter}`;
		const _icon = Array.isArray(icon)
			? icon.map(c => `<buff typ="${c}" />`).join("")
			: `<buff typ="${icon}" />`;
		const _content = `${_icon} ${content}`;

		affix[name] = [
			() => <SkillDescription
				text={ _content }
				level={ 1 }
				buffBonus={ false }
				skillBonus={ 0 }
				favorBonus={ false }
			/>,
		];
		return name;
	}

	const wrap = (x: string, r: boolean = false): string => r
		? `<sec typ="note">(${x})</sec>`
		: `<sec typ="note">${x}</sec>`;
	list.forEach(b => {
		if (isTextBuff(b)) {
			const key = wrap(b[0]);
			if (text.includes(key)) {
				text = text.replaceAll(
					key,
					// $$ = $
					wrap(`<cmt t="${b[0].replace(/"/g, "&quot;")}">$$$$${pushAffix(b[1], b[2])}:?$</cmt>`),
				);
			}
		} else {
			const reg = new RegExp(wrap(b[0].source, true), "g");
			text = text.replace(
				reg,
				(p, p1, ...pp) => wrap(`<cmt t="${p1}">$$${pushAffix(b[1], b[2](p, ...pp))}:?$</cmt>`),
			);
		}
	});

	return {
		text,
		sections: affix,
	};
}

export default {
	BuffName,
};
