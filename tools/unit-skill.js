const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const unitData = require("../src/json/unit.json");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "14OedgRcIIyF772ak-r5U5A9Nu5y58deGgCp6x_mqqiE",
		range: "UnitSkill!A2:L",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				const unit = row[0];
				const slot = row[1];
				const type = row[2];

				const key = `${type}${slot}`;
				if (!(unit in ret)) ret[unit] = {};

				ret[unit][key] = {
					key,
					name: row[3],
					icon: row[4],
					range: parseInt(row[5], 10),
					ap: /^[0-9]+$/.test(row[6]) ? parseInt(row[6], 10) : row[6],
					target: row[7],
					bound: row[8],
					buffRate: row[9].split(",").map(x => parseFloat(x)),
					buffs: row[10],
					desc: (row[11] || "").split("\n"),
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

	sheets.spreadsheets.values.get({
		spreadsheetId: "14OedgRcIIyF772ak-r5U5A9Nu5y58deGgCp6x_mqqiE",
		range: "BuffNames!A2:B",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				ret[row[0]] = row[1];
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "buffs.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
