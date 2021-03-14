const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1V_hVRBcvg5tYwPQOLHxcsFxwvDOJrWJYfmZ65AVCd7E",
		range: "Equipment!A3:Y",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const rarities = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
			SSS: 6,
		};
		const types = {
			Chip: 0,
			OS: 1,
			Item: 2,
		};

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[4] || row[4] === "__T0") return;

				const available = row[0] === "1";
				const roguelike = row[1] === "1";
				const rarity = rarities[row[2]];
				const type = types[row[3]];
				const key = row[4];
				const fullKey = row[5];

				const name = row[6];
				const desc = row[7];
				const icon = row[8];
				const craftable = !row[9] ? false : parseInt(row[9], 10);
				const limit = row[10] ? row[10].split(",").filter(f => f) : null;

				const upgrade = parseInt(row[11], 10);
				const source = [
					...(!row[12]
						? []
						: (row[12] || "")
							.split("\n")
							.map(d => d.split(","))
					),
					...(!row[13]
						? []
						: (row[13] || "")
							.split("\n")
							.map(d => d.split(","))
					),
				];

				const o = {
					available,
					roguelike,
					rarity,
					type,
					key,

					fullKey,
					// name,
					desc,
					icon,
					craftable,

					limit,
					upgrade,
					source,
					stats: row.filter((x, i) => i >= 14).map(x => JSON.parse(x)),
				};
				ret.push(o);

				// fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "equip"), { recursive: true });
				// fs.writeFileSync(
				// 	path.resolve(__dirname, "..", "..", "db", "equip", `${fullKey}.json`),
				// 	JSON.stringify(o.stats, null, 2),
				// );
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "equip.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
