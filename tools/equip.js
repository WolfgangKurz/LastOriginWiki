const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Equipment!D3:Q",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0] || row[0] === "__") return;

				const id = row[0];
				const limit = row[1];
				const source = !row[2]
					? []
					: row[2].split("\n").map(d => d.split(","));

				if (limit) {
					ret.push({
						name: id,
						limit,
						source,
						stats: row.filter((x, i) => i >= 3),
					});
				} else {
					ret.push({
						name: id,
						source,
						stats: row.filter((x, i) => i >= 3),
					});
				}
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "equip.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "EquipName!A2:B",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				ret[row[0]] = row[1];
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "equip-names.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("./auth")(process);
