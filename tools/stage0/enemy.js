const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Enemy!A3:W",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const rarities = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
		};
		const typeTable = {
			경장: 0,
			중장: 1,
			기동: 2,
		};
		const roleTable = {
			보호기: 0,
			공격기: 1,
			지원기: 2,
		};

		function d (v) {
			return parseFloat(v);
		}

		// const names = {};
		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					id,
					name,
					rarity,
					cls,
					role,
					isBoss,
					icon,
					ai,
					desc,
					hp, hpPer,
					atk, atkPer,
					def, defPer,
					spd,
					cri,
					acc,
					eva,
					resFire,
					resIce,
					resThunder,
					skillData,
				] = row;

				const o = {
					id,
					// name,
					// desc,
					icon,
					ai,

					rarity: rarities[rarity],
					type: typeTable[cls],
					role: roleTable[role],
					isBoss: isBoss === "1",

					hp: [d(hp), d(hpPer)],
					atk: [d(atk), d(atkPer)],
					def: [d(def), d(defPer)],
					spd: d(spd),
					cri: d(cri),
					acc: d(acc),
					eva: d(eva),
					res: {
						fire: d(resFire),
						chill: d(resIce),
						thunder: d(resThunder),
					},

					skills: JSON.parse(skillData),
				};
				ret.push(o);

				// fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "enemy"), { recursive: true });
				// fs.writeFileSync(
				// 	path.resolve(__dirname, "..", "..", "db", "enemy", `${id}.json`),
				// 	JSON.stringify(o, null, 2),
				// );

				// names[id] = name;
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "enemy.json"),
				JSON.stringify(ret, null, 2),
			);
			// fs.writeFileSync(
			// 	path.resolve(__dirname, "..", "..", "db", "enemy-names.json"),
			// 	JSON.stringify(names, null, 2),
			// );
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
