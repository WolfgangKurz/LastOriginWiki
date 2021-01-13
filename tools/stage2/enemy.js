// import * as fs from "fs";
// import * as path from "path";
const fs = require("fs");
const path = require("path");

// import input from "../../src/json/unit";
// import skill from "../../src/json/unit-skill";

// import { SkillEntity } from "../../src/libs/DB/Skill";
// import { BuffEffect, BuffEffectValue, BUFFEFFECT_TYPE } from "../../src/libs/Buffs/BuffEffect";
// import { TARGET_TYPE } from "../../src/libs/Types/Enums";

const input = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, "..", "..", "src", "json", "enemy.ts"), { encoding: "utf-8" })
		.replace(/export default /, "")
		.replace(/;$/, ""),
);
const map = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, "..", "..", "src", "json", "map.ts"), { encoding: "utf-8" })
		.replace(/export default /, "")
		.replace(/;$/, ""),
);

let reta = [];
input.forEach((_) => {
	reta.push({
		..._,

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
					map[x][y].list.forEach(z =>
						z.wave && z.wave.forEach(w => w.forEach(i => {
							if (i.e.enemy.some(e => e && e.id === _.id)) {
								if (x === "Story" || x === "Cha")
									ret[x].push(z.text);
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

fs.writeFileSync(
	path.resolve(__dirname, "..", "..", "src", "json", "enemy-filterable.ts"),
	`export default ${JSON.stringify(reta, undefined, 2)};`,
	{ encoding: "utf-8" },
);

reta = [];
