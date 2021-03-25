let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// import * as glob from "glob";
// import * as path from "path";
const glob = require("glob");
const path = require("path");
const fs = require("fs");

const load = (name: string) => {
	const target = ["facility", "map"].includes(name)
		? "external/json"
		: "db";

	return fs.readFileSync(path.resolve(__dirname, "..", target, `${name}.json`), { encoding: "utf-8" })
		.replace("export default ", "")
		.replace(/;$/, "");
};

const Unit = JSON.parse(load("unit"));
const Equip = JSON.parse(load("equip"));
const Enemy = JSON.parse(load("enemy"));
const Facility = JSON.parse(load("facility"));
const MapData = JSON.parse(load("map"));
// import Unit from "../src/json/unit";
// import Equip from "../src/json/equip";
// import Enemy from "../src/json/enemy";
// import Facility from "../src/json/facility";
// import MapData from "../src/json/map";
// const { WorldNames } = require("../src/libs/Const");

const WorldNames: Record<string, string> = {
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
	Ev10: "누군가 바랐던 소원",
};
const skin = glob.sync(
	path.resolve(__dirname, "..", "external", "assets", "png", "full", "*.png"),
).map((x: any) => path.basename(x));

const AssetsRoot = "https://lo.swaytwig.com/assets";
// "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com";
const ext = "png";

xml += "<url><loc>https://lo.swaytwig.com/units</loc></url>\n";
Unit.forEach((x: any) => {
	const content = [
		`<loc>https://lo.swaytwig.com/units/${x.uid}</loc>`,
	];

	skin
		.filter((y: string) => y.startsWith(x.uid))
		.forEach((y: string) => {
			content.push(`<image:image><image:loc>${AssetsRoot}/${ext}/full/${y}</image:loc></image:image>`);
		});

	xml += `<url>${content.join("")}</url>\n`;
});

xml += "<url><loc>https://lo.swaytwig.com/equips</loc></url>\n";
Equip.forEach((x: any) => {
	xml += `<url><loc>https://lo.swaytwig.com/equips/${x.fullKey}</loc><image:image><image:loc>${AssetsRoot}/${ext}/item/UI_Icon_Equip_${x.fullKey}.${ext}</image:loc></image:image></url>\n`;
});

xml += "<url><loc>https://lo.swaytwig.com/enemies</loc></url>\n";
Enemy.forEach((x: any) => {
	xml += `<url><loc>https://lo.swaytwig.com/enemies/${x.id}</loc><image:image><image:loc>${AssetsRoot}/${ext}/tbar/TbarIcon_${x.id}.${ext}</image:loc></image:image></url>\n`;
});

xml += "<url><loc>https://lo.swaytwig.com/facilities</loc></url>\n";
Object.keys(Facility)
	.forEach(key => {
		xml += `<url><loc>https://lo.swaytwig.com/facilities/${key}</loc></url>\n`;
	});

xml += "<url><loc>https://lo.swaytwig.com/worlds</loc></url>\n";
Object.keys(WorldNames)
	.filter(x => !x.startsWith("EvA"))
	.forEach(key => {
		xml += `<url><loc>https://lo.swaytwig.com/worlds/${key}</loc></url>\n`;

		const map = (MapData as any)[key];
		Object.keys(map).forEach(y => {
			xml += `<url><loc>https://lo.swaytwig.com/worlds/${key}/${y}</loc></url>\n`;
			xml += `<url><loc>https://lo.swaytwig.com/story/${key}/${y}</loc></url>\n`;
		});
	});

xml += `<url><loc>https://lo.swaytwig.com/changelog</loc></url>
<url><loc>https://lo.swaytwig.com/exp</loc></url>
<url><loc>https://lo.swaytwig.com/bgm</loc></url>
<url><loc>https://lo.swaytwig.com/eapi</loc></url>
</urlset>`;

// console.log(xml);
fs.writeFileSync(
	path.resolve(__dirname, "..", "src", "assets", "sitemap.xml"),
	xml,
	{ encoding: "utf-8" },
);
