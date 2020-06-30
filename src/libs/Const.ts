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
