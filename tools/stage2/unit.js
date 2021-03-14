const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");

const sourceDir = path.resolve(__dirname, "..", "..", "db");
const targetDir = path.resolve(__dirname, "..", "..", "external", "json", "unit");

(async () => {
	const units = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit.json"), { encoding: "utf-8" }));
	const equips = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "equip.json"), { encoding: "utf-8" }));
	const dialogues = {
		ko: JSON.parse(fs.readFileSync(path.resolve(sourceDir, "dialogue", "ko.json"), { encoding: "utf-8" })),
		jp: JSON.parse(fs.readFileSync(path.resolve(sourceDir, "dialogue", "jp.json"), { encoding: "utf-8" })),
	};
	const skins = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit-skin.json"), { encoding: "utf-8" }));

	await rmfr(targetDir);
	fs.mkdirSync(targetDir, { recursive: true });

	units.forEach(char => {
		const skills = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "skill", `${char.uid}.json`), { encoding: "utf-8" }));

		fs.writeFileSync(
			path.join(targetDir, `${char.uid}.json`),
			JSON.stringify({
				id: char.id,
				uid: char.uid,
				// name: char.name,
				group: char.group,
				shortgroup: char.shortgroup,

				rarity: char.rarity,
				type: char.type,
				role: char.role,
				body: char.body,
				slots: char.equip,
				promotions: char.promotions,

				height: char.height,
				weight: char.weight,
				weapon1: char.weapon1,
				weapon2: char.weapon2,

				marriageVoice: char.marry,
				favor: char.favor,

				linkBonus: char.linkBonus,
				fullLinkBonus: char.fullLinkBonus,

				craft: char.craftable,
				equips: equips.filter(y => y.limit && y.limit.some(z => z === char.uid)).map(y => y.fullKey),

				stat: char.stat.map(x => ({
					...x,
					id: undefined,
					rarity: undefined,
				})),
				source: char.source,
				skills,
				dialogue: {
					ko: dialogues.ko[char.uid],
					jp: dialogues.jp[char.uid],
				},
				skins: skins[char.uid],
			}),
			{ encoding: "utf-8" },
		);
	});
	// console.log(units);
})();
