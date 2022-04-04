const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");


const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const dotDir = path.resolve(__dirname, "..", "..", "external", "dot");
	const sourceDir = path.resolve(__dirname, "..", "..", "db", targetDB);
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB, "enemy");

	(async () => {
		const enemies = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "enemy.json"), { encoding: "utf-8" }));
		// const ais = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "ai.json"), { encoding: "utf-8" }));

		await rmfr(targetDir);
		fs.mkdirSync(targetDir, { recursive: true });

		enemies.forEach(char => {
			// let ai = ais.find(y => y.ai === char.ai);
			// if (!ai) ai = [];
			// else ai = ai.pattern;
			const ai = char.ai;
			const _ai = fs.existsSync(path.resolve(dotDir, `${ai}.dot`));

			fs.writeFileSync(
				path.join(targetDir, `${char.id}.json`),
				JSON.stringify({
					uid: char.id,

					rarity: char.rarity,
					type: char.type,
					role: char.role,

					isBoss: char.isBoss,

					stat: {
						hp: char.hp,
						atk: char.atk,
						def: char.def,
						spd: char.spd,
						cri: char.cri,
						acc: char.acc,
						eva: char.eva,
						res: char.res,
					},

					skills: char.skills,
					// ai: ai || [],
					ai: _ai ? ai : undefined,
				}),
				{ encoding: "utf-8" },
			);
		});
		// console.log(units);
	})();
});
