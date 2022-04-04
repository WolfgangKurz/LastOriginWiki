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

	const maps = (() => {
		const ret = {};

		fs.readdirSync(path.join(targetDir, "map"))
			.forEach(x => {
				ret[path.basename(x, path.extname(x))] = JSON.parse(
					fs.readFileSync(path.join(targetDir, "map", x), { encoding: "utf-8" })
						.replace(/export default /, "")
						.replace(/;$/, ""),
				);
			});
		return ret;
	})();
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

				// _map : World (Story, Ev1, ...)
				// x : Map (1, 2 -> Ev1, Ev2, ...)
				// y : Node (1-1, Ev3-3, ...)
				Object.keys(maps).forEach(_map => {
					const map = maps[_map];
					ret[_map] = [];

					Object.keys(map).forEach(x => {
						map[x].list.forEach(y =>
							y.wave && y.wave.forEach(w => w.forEach(i => {
								if (i.e && i.e.enemy.some(e => e && e.id === _.id)) {
									if (_map === "Story")
										ret[_map].push(y.text);
									else if (_map === "Cha")
										ret[_map].push(`Cha${x}-${y.text.replace(/Cha[0-9]*-(.+)/, "$1")}`);
									else if (_map === "Sub")
										ret[_map].push(`${_map}:${y.text}`);
									else
										ret[_map].push(`Ev:${_map}:${y.text}`);
								}
							})),
						);
					});

					ret[_map] = ret[_map].reduce((p, c) => p.includes(c) ? p : [...p, c], []);
					if (ret[_map].length === 0)
						delete ret[_map];
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
