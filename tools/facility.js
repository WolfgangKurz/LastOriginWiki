const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Facilities의 사본!A3:AA",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const id = row[0];
				const name = row[1];
				const size = parseInt(row[2], 10);
				const level = parseInt(row[3], 10);
				const cost = [
					parseInt(row[4], 10),
					parseInt(row[5], 10),
					parseInt(row[6], 10),
				];
				const requiredCombatant = {
					type: row[7],
					level: parseInt(row[8], 10),
					count: parseInt(row[9], 10),
				};
				const produceTime = parseInt(row[14], 10) || 0;
				const upgradeTime = parseInt(row[19], 10) || 0;
				const upgradeRequired = {
					Wood: parseInt(row[20], 10),
					Stone: parseInt(row[21], 10),
					Iron: parseInt(row[22], 10),
					Material: null,
				};
				const produceItem = JSON.parse(row[26]);

				if (row[23]) {
					upgradeRequired.Material = {
						type: row[23],
						grade: row[24],
						value: parseInt(row[25], 10) || 0,
					};
				}

				if (!ret[id]) {
					ret[id] = {
						name,
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

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "facility.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
