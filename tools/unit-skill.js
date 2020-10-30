const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const unitData = require("../src/json/unit.json");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitSkill!A2:K",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				const unit = unitData.find(y => y.id === parseInt(row[1], 10)).uid;
				const slot = row[2];
				const type = row[3];

				const key = `${type}${slot}`;
				if (!(unit in ret)) ret[unit] = {};

				ret[unit][key] = {
					key,
					name: row[4],
					icon: row[5],
					range: parseInt(row[6], 10),
					ap: /^[0-9]+$/.test(row[7]) ? parseInt(row[7], 10) : row[7],
					target: row[8],
					bound: row[9],
					desc: row[10].split("\n"),
					// effect: row[11].split("\n"),
				};
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-skill.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
