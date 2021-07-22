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
		fs.readFileSync(path.resolve(__dirname, "..", "..", "db", targetDB, "equip.json"), { encoding: "utf-8" })
			.replace(/export default /, "")
			.replace(/;$/, ""),
	);

	function isPositiveBuffEffectValue (v) {
		if (typeof v.base === "number") return v.base >= 0;
		return !v.base.startsWith("-");
	}
	function v (stat) {
		if (stat.chance === "0%") return undefined;

		const p = (t, value) => ({
			type: t,
			positive: value ? isPositiveBuffEffectValue(value) : false,
		});

		if ("attack" in stat)
			return p(stat.type, stat.attack);
		if ("defense" in stat)
			return p(stat.type, stat.defense);
		if ("hp" in stat)
			return p(stat.type, stat.hp);
		if ("accuracy" in stat)
			return p(stat.type, stat.accuracy);
		if ("critical" in stat)
			return p(stat.type, stat.critical);
		if ("evade" in stat)
			return p(stat.type, stat.evade);

		if ("turnSpeed" in stat)
			return p(stat.type, stat.turnSpeed);
		if ("ap" in stat)
			return p(stat.type, stat.ap);

		if ("resist" in stat)
			return p(stat.type, stat.resist.value);
		if ("damage_multiply" in stat)
			return p(stat.type, stat.damage_multiply.value);
		if ("damage_by_hp" in stat)
			return p(stat.type, stat.damage_by_hp.damage);

		if ("damage_add" in stat) {
			if ("elem" in stat.damage_add)
				return p(stat.type, stat.damage_add.damage);
			return p(stat.type, stat.damage_add);
		}
		if ("range" in stat)
			return p(stat.type, stat.range);
		if ("penetration" in stat)
			return p(stat.type, stat.penetration);
		if ("invokeChance" in stat)
			return p(stat.type, stat.invokeChance);
		if ("exp" in stat)
			return p(stat.type, stat.exp);

		return p(stat.type, undefined);
	}

	const reta = [];
	input.forEach((x) => {
		reta.push({
			available: x.available,
			roguelike: x.roguelike,

			rarity: x.rarity,
			type: x.type,
			key: x.key,

			fullKey: x.fullKey,
			name: x.name,
			desc: x.desc,
			icon: x.icon,
			craft: x.craftable,

			limit: x.limit,
			source: x.source,
			upgrade: x.upgrade,

			effects: (() => {
				const output = [];

				x.stats.forEach(d => d.forEach(bs => {
					const ret = [];

					if ("buffs" in bs) {
						if ("type" in bs)
							ret.push(v(bs));
						else
							ret.push(...bs.buffs.map(b => v(b.value)));

						ret
							.filter(_ => _)
							.forEach(c => {
								if (output.some((z) => z.target === c.target && z.type === c.type && z.positive === c.positive)) return;
								output.push(c);
							});
					} else {
						ret.push(v(bs));

						ret.filter(_ => _)
							.forEach(c => {
								if (output.some((z) => z.target === c.target && z.type === c.type && z.positive === c.positive)) return;
								output.push(c);
							});
					}
				}));
				return output;
			})(),
		});
	});

	fs.mkdirSync(targetDir, { recursive: true });
	fs.writeFileSync(
		path.join(targetDir, "filterable.equip.json"),
		JSON.stringify(reta),
		{ encoding: "utf-8" },
	);
});
