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
	fs.readFileSync(path.resolve(__dirname, "..", "..", "src", "json", "unit.ts"), { encoding: "utf-8" })
		.replace(/export default /, "")
		.replace(/;$/, ""),
);
const skill = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, "..", "..", "src", "json", "unit-skill.ts"), { encoding: "utf-8" })
		.replace(/export default /, "")
		.replace(/;$/, ""),
);

function isPositiveBuffEffectValue (v) {
	if (typeof v.base === "number") return v.base >= 0;
	return !v.base.startsWith("-");
}
function v (target, stat) {
	if (stat.chance === "0%") return undefined;

	const p = (target, t, value) => ({
		target,
		type: t,
		positive: value ? isPositiveBuffEffectValue(value) : false,
	});

	if ("attack" in stat)
		return p(target, stat.type, stat.attack);
	if ("defense" in stat)
		return p(target, stat.type, stat.defense);
	if ("hp" in stat)
		return p(target, stat.type, stat.hp);
	if ("accuracy" in stat)
		return p(target, stat.type, stat.accuracy);
	if ("critical" in stat)
		return p(target, stat.type, stat.critical);
	if ("evade" in stat)
		return p(target, stat.type, stat.evade);

	if ("turnSpeed" in stat)
		return p(target, stat.type, stat.turnSpeed);
	if ("ap" in stat)
		return p(target, stat.type, stat.ap);

	if ("resist" in stat)
		return p(target, stat.type, stat.resist.value);
	if ("damage_multiply" in stat)
		return p(target, stat.type, stat.damage_multiply.value);
	if ("damage_by_hp" in stat)
		return p(target, stat.type, stat.damage_by_hp.damage);

	if ("damage_add" in stat) {
		if ("elem" in stat.damage_add)
			return p(target, stat.type, stat.damage_add.damage);
		else
			return p(target, stat.type, stat.damage_add);
	}
	if ("range" in stat)
		return p(target, stat.type, stat.range);
	if ("penetration" in stat)
		return p(target, stat.type, stat.penetration);
	if ("invokeChance" in stat)
		return p(target, stat.type, stat.invokeChance);
	if ("exp" in stat)
		return p(target, stat.type, stat.exp);

	return p(target, stat.type, undefined);
}

let reta = [];
input.forEach((x) => {
	const se = (() => {
		const ret = {};
		Object.keys(skill[x.uid])
			.filter(k => ["active1", "active2", "Factive1", "Factive2"].includes(k))
			.map(k => [k, skill[x.uid][k]])
			.forEach(([k, s]) => (ret[k] = {
				elem: s.buffs.data[0].type,
				grid: s.buffs.data[0].target_ground,
				guard: s.buffs.data[0].dismiss_guard,
			}));
		return ret;
	})();

	const s = Object.keys(skill[x.uid])
		.map(k => skill[x.uid][k])
		.map((s) => {
			// const target = s.target;
			const buffs = s.buffs;

			const b = {
				// elem: buffs.data[0].type,
				effects: (() => {
					const output = [];

					buffs.data.forEach(d =>
						d.buffs.forEach(bs => {
							const ret = {
								target: "",
								list: [],
							};

							if ("target" in bs) {
								ret.target = bs.target === 0 /* TARGET_TYPE.SELF */
									? "self"
									: bs.target === 1 /* TARGET_TYPE.OUR */ || bs.target === 2 /* TARGET_TYPE.OUR_GRID */
										? "team"
										: "enemy";
							}

							if ("type" in bs)
								ret.list.push(v(ret.target, bs));
							else
								ret.list.push(...bs.buffs.map(b => v(ret.target, b.value)));

							ret.list
								.filter(_ => _)
								.forEach(c => {
									if (output.some((z) => z.target === c.target && z.type === c.type && z.positive === c.positive)) return;
									output.push(c);
								});
						}));
					return output;
				})(),
			};
			// return b;
			return b.effects;
		});

	reta.push({
		uid: x.uid,
		no: x.id,

		rarity: x.rarity,
		promo: x.promotions,

		name: x.name,
		shortname: x.shortname,

		groupKey: x.groupkey,
		group: x.group,
		shortgroup: x.shortgroup,

		type: x.type,
		role: x.role,
		body: x.body,
		craft: x.craftable,

		buffs: s,
		skills: se,
	});
});

fs.writeFileSync(
	path.resolve(__dirname, "..", "..", "src", "json", "unit-filterable.ts"),
	`export default ${JSON.stringify(reta, undefined, 2)};`,
	{ encoding: "utf-8" },
);

reta = [];