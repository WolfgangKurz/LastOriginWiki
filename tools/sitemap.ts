let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">`;

const Unit = require("../src/json/unit.json");
const Equip = require("../src/json/equip.json");
const Enemy = require("../src/json/enemy.json");
const Facility = require("../src/json/facility.json");
const MapData = require("../src/json/map.json");
const { WorldNames } = require("../src/libs/Const");

xml += "<url><loc>http://lo.swaytwig.com/units</loc></url>";
Unit.forEach((x: any) => {
	xml += `<url><loc>http://lo.swaytwig.com/units/${x.uid}</loc></url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/equips</loc></url>";
Equip.forEach((x: any) => {
	xml += `<url><loc>http://lo.swaytwig.com/units/${x.fullKey}</loc></url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/enemy</loc></url>";
Enemy.forEach((x: any) => {
	xml += `<url><loc>http://lo.swaytwig.com/enemy/${x.id}</loc></url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/facilities</loc></url>";
Object.keys(Facility)
	.forEach(key => {
		xml += `<url><loc>http://lo.swaytwig.com/facilities/${key}</loc></url>`;
	});

xml += "<url><loc>http://lo.swaytwig.com/worlds</loc></url>";
Object.keys(WorldNames)
	.filter(x => !x.startsWith("EvA"))
	.forEach(key => {
		xml += `<url><loc>http://lo.swaytwig.com/worlds/${key}</loc></url>`;

		const map = (MapData as any)[key];
		Object.keys(map).forEach(y => {
			xml += `<url><loc>http://lo.swaytwig.com/worlds/${key}/${y}</loc></url>`;
			xml += `<url><loc>http://lo.swaytwig.com/story/${key}/${y}</loc></url>`;
		});
	});

xml += `<url><loc>http://lo.swaytwig.com/changelog</loc></url>
<url><loc>http://lo.swaytwig.com/exp</loc></url>
<url><loc>http://lo.swaytwig.com/bgm</loc></url>
<url><loc>http://lo.swaytwig.com/eapi</loc></url>
</urlset>`;

console.log(xml);
