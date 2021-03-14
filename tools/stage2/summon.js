const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");

const sourceDir = path.resolve(__dirname, "..", "..", "db");
const targetDir = path.resolve(__dirname, "..", "..", "external", "json", "summon");

(async () => {
	const summons = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "summon.json"), { encoding: "utf-8" }));
	const ais = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "ai.json"), { encoding: "utf-8" }));

	await rmfr(targetDir);
	fs.mkdirSync(targetDir, { recursive: true });

	summons.forEach(char => {
		let ai = ais.find(y => y.ai === char.ai);
		if (!ai) ai = [];
		else ai = ai.pattern;

		fs.writeFileSync(
			path.join(targetDir, `${char.id}.json`),
			JSON.stringify({
				uid: char.id,
				icon: char.icon,

				rarity: char.rarity,
				type: char.type,
				role: char.role,

				use: char.use,

				summonType: char.summonType,
				pos: char.pos,
				overlap: char.overlap,
				turn: char.turn,
				deflv: char.deflv,
				lifecycle: char.lifecycle,
				shelter: char.shelter,

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
				ai: ai || [],
			}),
			{ encoding: "utf-8" },
		);
	});
	// console.log(units);
})();
