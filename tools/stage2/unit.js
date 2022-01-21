const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");

const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const sourceDir = path.resolve(__dirname, "..", "..", "db", targetDB);
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB, "unit");

	(async () => {
		const units = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit.json"), { encoding: "utf-8" }));
		const equips = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "equip.json"), { encoding: "utf-8" }));
		const dialogues = {
			ko: JSON.parse(fs.readFileSync(path.resolve(sourceDir, "..", "dialogue", "ko.json"), { encoding: "utf-8" })),
			jp: JSON.parse(fs.readFileSync(path.resolve(sourceDir, "..", "dialogue", "jp.json"), { encoding: "utf-8" })),
			jpdmm: JSON.parse(fs.readFileSync(path.resolve(sourceDir, "..", "dialogue", "jpdmm.json"), { encoding: "utf-8" })),
		};
		const skins = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit-skin.json"), { encoding: "utf-8" }));
		const lvlimits = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit-lvlimit.json"), { encoding: "utf-8" }));
		// const roguelikeSkills = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "roguelike-skill.json"), { encoding: "utf-8" }));

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
					// shortgroup: char.shortgroup,

					rarity: char.rarity,
					type: char.type,
					role: char.role,
					body: char.body,
					slots: char.equip,
					promotions: char.promotions,

					lvLimits: lvlimits
						.filter(x => x.group === char.lvlimit)
						.sort((a, b) => a.level - b.level)
						.map(x => ({ level: x.level, items: x.items })),

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

					stat: (char.stat || []).map(x => ({
						...x,
						id: undefined,
						rarity: undefined,
					})),
					source: char.source,
					research: char.research,
					skills,
					dialogue: {
						ko: dialogues.ko[char.uid],
						jp: dialogues.jp[char.uid],
						jpdmm: dialogues.jpdmm[char.uid],
					},
					skins: skins[char.uid],

					// roguelike: roguelikeSkills.filter(y => y.unit === `Char_${char.uid}_N`),
				}),
				{ encoding: "utf-8" },
			);
		});
		// console.log(units);
	})();
});
