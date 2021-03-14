const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");

const sourceDir = path.resolve(__dirname, "..", "..", "db");
const targetDir = path.resolve(__dirname, "..", "..", "external", "json", "equip");

(async () => {
	const equips = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "equip.json"), { encoding: "utf-8" }));

	await rmfr(targetDir);
	fs.mkdirSync(targetDir, { recursive: true });

	equips.forEach(equip => {
		fs.writeFileSync(
			path.join(targetDir, `${equip.fullKey}.json`),
			JSON.stringify({
				uid: equip.fullKey,

				type: equip.type,
				key: equip.key,
				rarity: equip.rarity,

				craft: equip.craftable,
				upgrade: equip.upgrade,

				limit: equip.limit,
				source: equip.source,
				stats: equip.stats,
			}),
			{ encoding: "utf-8" },
		);
	});
	// console.log(units);
})();
