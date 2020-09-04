import webpChecker from "webp-checker";
import { Dictionary } from "@/libs/Interface";

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

export const CurrentEvent = "FairyAria";
export const CurrentDate = (() => {
	const d = new Date();
	const y = d.getUTCFullYear() % 100;
	const m = d.getUTCMonth() + 1;
	return `${y}/${m}`;
})();

export const WorldNames: Dictionary<string> = {
	Story: "메인스토리",
	SupremeDinner: "지고의 저녁식사",
	Rioboros: "리오보로스의 유산",
	OrcaFix: "오르카호를 수복하라!",
	FairyAria: "요정 마을의 아리아",
};
