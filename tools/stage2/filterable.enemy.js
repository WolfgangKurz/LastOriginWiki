// import * as fs from "fs";
// import * as path from "path";
const fs = require("fs");
const path = require("path");

// import input from "../../src/json/unit";
// import skill from "../../src/json/unit-skill";

// import { SkillEntity } from "../../src/libs/DB/Skill";
// import { BuffEffect, BuffEffectValue, BUFFEFFECT_TYPE } from "../../src/libs/Buffs/BuffEffect";
// import { TARGET_TYPE } from "../../src/libs/Types/Enums";

const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB);

	const input = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "..", "..", "db", targetDB, "enemy.json"), { encoding: "utf-8" })
			.replace(/export default /, "")
			.replace(/;$/, ""),
	);
	const map = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB, "map.json"), { encoding: "utf-8" })
			.replace(/export default /, "")
			.replace(/;$/, ""),
	);

	const reta = [];
	input.forEach((_) => {
		reta.push({
			..._,

			ai: undefined,
			hp: undefined,
			atk: undefined,
			def: undefined,
			spd: undefined,
			cri: undefined,
			acc: undefined,
			eva: undefined,
			res: undefined,
			skills: undefined,

			used: (() => {
				const ret = {};
				Object.keys(map).forEach(x => {
					ret[x] = [];
					Object.keys(map[x]).forEach(y =>
						map[x][y].forEach(z =>
							z.wave && z.wave.forEach(w => w.forEach(i => {
								if (i.e && i.e.enemy.some(e => e && e.id === _.id)) {
									if (x === "Story")
										ret[x].push(z.text);
									else if (x === "Cha")
										ret[x].push(`Cha${y}-${z.text.replace(/Cha[0-9]*-(.+)/, "$1")}`);
									else if (x === "Sub")
										ret[x].push(`${x}:${z.text}`);
									else
										ret[x].push(`Ev:${x}:${z.text}`);
								}
							})),
						),
					);
					ret[x] = ret[x].reduce((p, c) => p.includes(c) ? p : [...p, c], []);
					if (ret[x].length === 0)
						delete ret[x];
				});
				return ret;
			})(),
		});
	});

	fs.mkdirSync(targetDir, { recursive: true });
	fs.writeFileSync(
		path.join(targetDir, "filterable.enemy.json"),
		JSON.stringify(reta),
		{ encoding: "utf-8" },
	);
});
