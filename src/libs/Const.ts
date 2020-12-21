import webpChecker from "webp-checker";

export function getScrollbarWidth () {
	const div = document.createElement("div");

	div.style.position = "absolute";
	div.style.top = "-9999px";
	div.style.width = "50px";
	div.style.height = "50px";
	div.style.overflow = "scroll";

	document.body.appendChild(div);
	const scrollbarWidth = div.getBoundingClientRect().width - div.clientWidth;
	document.body.removeChild(div);
	return scrollbarWidth;
}

export const AssetsRoot = process.env.NODE_ENV === "development"
	? "http://localhost:5500/assets"
	: "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com";

let webpAvailable = false;
export async function initWEBP () {
	return new Promise<void>((resolve) => {
		webpChecker({
			disableGlobal: true,
			injectBodyClass: false,
			imgURL: `${AssetsRoot}/webp/test.webp`,
			callback: (s) => {
				webpAvailable = s;
				resolve();
			},
		});
	});
}

export function ImageExtension () {
	return webpAvailable ? "webp" : "png";
}

export const CurrentEvent = "Ev4";
export const CurrentDate = (() => {
	const d = new Date();
	const y = d.getUTCFullYear() % 100;
	const m = d.getUTCMonth() + 1;
	return `${y}/${m}`;
})();

export const WorldNames: Record<string, string> = {
	Story: "메인스토리",
	Ev1: "지고의 저녁식사",
	Ev2: "리오보로스의 유산",
	Ev3: "만월의 야상곡",
	Ev4: "할로윈 파크 패닉",
	Ev5: "세인트 오르카의 비밀작전",
	Ev6: "이상한 나라의 초코 여왕",
	EvA0: "오르카호를 수복하라!",
	Ev7: "요정 마을의 아리아",
	Ev8: "흐린 기억 속의 나라",
	Ev9: "낙원으로부터 온 초대장",
};
export const WorldDescriptions: Record<string, string> = {
	Story: "",
	Ev1: "소완으로 인해 혼란에 빠진 오르카 안에선 무슨 일이?",
	Ev2: "리오보로스의 유산을 찾아 떠나는 모험!",
	Ev3: "마법 소녀들과 함께 뽀끄루 대마왕을 물리쳐주세요!",
	Ev4: "과거에 얽매이지 마. 지금을 즐기는 거야!",
	Ev5: "연말 파티를 준비하는 사령관에게 뻗쳐오는 마수는?",
	Ev6: "티아멧은 '초코 여왕'과 얽힌 멸망 전 인류의 일그러짐과 마주하는데..",
	Ev7: "가벼운 마음으로 요정 마을로 향한 사령관에게...?",
	Ev8: "왓슨, 드디어 대단원이야!",
	Ev9: "당신이 바라는 욕망은 무엇인가요?",
};

export const ApocryphaUnit: Record<string, string> = {
	"S1-1": "AGS_Rampart",
	"S1-2": "3P_ConstantiaS2",
	"S2-1": "3P_Sowan",
	"S5-1": "DS_Faucre",
	"S6-1": "DS_Baekto",
	"S7-1": "3P_Fenrir",
	"S8-1": "PECS_Circe",
	"S9-1": "3P_Hachiko",
	"S10-1": "AGS_Rampart",
	"S11-1": "3P_Aurora",
	"S12-1": "3P_CSPerrault",
};
export const ChallengeStage: Record<string, string> = {
	Cha1: "밀고, 당기고, 불질러!",
	Cha2: "설계자와 피조물",
	Cha3: "실패작의 폭주",
};
