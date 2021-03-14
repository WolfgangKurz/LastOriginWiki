const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Facilities!A3:AB",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const id = row[0];
				const name = row[1];
				const image = row[2];
				const size = parseInt(row[3], 10);
				const level = parseInt(row[4], 10);
				const cost = [
					parseInt(row[5], 10),
					parseInt(row[6], 10),
					parseInt(row[7], 10),
				];
				const requiredCombatant = {
					type: row[8],
					level: parseInt(row[9], 10),
					count: parseInt(row[10], 10),
				};
				const produceTime = parseInt(row[15], 10) || 0;
				const upgradeTime = parseInt(row[20], 10) || 0;
				const upgradeRequired = {
					Wood: parseInt(row[21], 10),
					Stone: parseInt(row[22], 10),
					Iron: parseInt(row[23], 10),
					Material: null,
				};
				const produceItem = JSON.parse(row[27]);

				if (row[24]) {
					upgradeRequired.Material = {
						type: row[24],
						grade: row[25],
						value: parseInt(row[26], 10) || 0,
					};
				}

				if (!ret[id]) {
					ret[id] = {
						name,
						image,
						size,
						duration: produceTime,
						list: [],
					};
				}

				ret[id].list[level - 1] = {
					level,
					cost,
					requiredCombatant,
					upgradeTime,
					upgradeRequired,
					produceItem,
				};
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "facility.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
