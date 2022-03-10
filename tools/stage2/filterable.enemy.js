// import * as fs from "fs";
// import * as path from "path";
const fs = require("fs");
const path = require("path");
const { emitWarning } = require("process");

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

	const maps = fs.readdirSync(path.join(targetDir, "map"))
		.map(x => JSON.parse(
			fs.readFileSync(path.join(targetDir, "map", x), { encoding: "utf-8" })
				.replace(/export default /, "")
				.replace(/;$/, ""),
		));
	const ew = JSON.parse(
		fs.readFileSync(path.resolve(targetDir, "ew.json"), { encoding: "utf-8" })
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
				maps.forEach(map => {
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
				});

				ret.NEW = [];
				Object.keys(ew).forEach(x => {
					Object.keys(ew[x]).forEach(y => {
						const z = ew[x][y];
						if (z.waves) {
							z.waves.forEach(w => w.forEach(i => {
								if (i.e.some(e => e && e.id === _.id))
									ret.NEW.push(`NewEternalWar:${x}`);
							}));
						}
					});
				});
				ret.NEW = ret.NEW.reduce((p, c) => p.includes(c) ? p : [...p, c], []);
				if (ret.NEW.length === 0)
					delete ret.NEW;
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
