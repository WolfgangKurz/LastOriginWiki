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
	? "/assets"
	: "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com";

let webpAvailable = false;
export async function initWEBP () {
	return new Promise((resolve) => {
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

export const CurrentEvent = "BlurryMemory";
export const CurrentDate = (() => {
	const d = new Date();
	const y = d.getUTCFullYear() % 100;
	const m = d.getUTCMonth() + 1;
	return `${y}/${m}`;
})();

export const WorldNames: Record<string, string> = {
	Story: "메인스토리",
	SupremeDinner: "지고의 저녁식사",
	Rioboros: "리오보로스의 유산",
	FullMoonNocturne: "만월의 야상곡",
	HalloweenPanic: "할로윈 파크 패닉",
	SaintOrca: "세인트 오르카의 비밀작전",
	ChocolateQueen: "이상한 나라의 초코 여왕",
	OrcaFix: "오르카호를 수복하라!",
	FairyAria: "요정 마을의 아리아",
	BlurryMemory: "흐린 기억 속의 나라",
};
export const WorldDescriptions: Record<string, string> = {
	Story: "",
	SupremeDinner: "소완으로 인해 혼란에 빠진 오르카 안에선 무슨 일이?",
	Rioboros: "리오보로스의 유산을 찾아 떠나는 모험!",
	FullMoonNocturne: "마법 소녀들과 함께 뽀끄루 대마왕을 물리쳐주세요!",
	HalloweenPanic: "과거에 얽매이지 마. 지금을 즐기는 거야!",
	SaintOrca: "연말 파티를 준비하는 사령관에게 뻗쳐오는 마수는?",
	ChocolateQueen: "티아멧은 '초코 여왕'과 얽힌 멸망 전 인류의 일그러짐과 마주하는데..",
	FairyAria: "가벼운 마음으로 요정 마을로 향한 사령관에게...?",
	BlurryMemory: "왓슨, 드디어 대단원이야!",
};
