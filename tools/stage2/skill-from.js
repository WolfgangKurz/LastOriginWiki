const fs = require("fs");
const path = require("path");

const targetDBs = require("../targets");
targetDBs.forEach(targetDB => {
	const sourceDir = path.resolve(__dirname, "..", "..", "db", targetDB);
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", targetDB);

	(async () => {
		const table = {};

		const units = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "unit-skill.json"), { encoding: "utf-8" }));
		const enemies = JSON.parse(fs.readFileSync(path.resolve(sourceDir, "enemy.json"), { encoding: "utf-8" }));

		Object.keys(units).forEach(char => {
			Object.keys(units[char]).forEach(sk => {
				table[`Skill_${char}_N_${sk}`] = char;
			});
		});
		enemies.forEach(e => {
			e.skills.forEach(sk => {
				table[sk.key] = e.id;
			});
		});

		fs.writeFileSync(
			path.join(targetDir, "skill-from.json"),
			JSON.stringify(table),
			"utf-8" ,
		);
	})();
});
