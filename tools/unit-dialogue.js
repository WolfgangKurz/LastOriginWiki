const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitDialogue!A2:H",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0] || row[0].length === 0 || row[0][0] === "#") return;

				const unit = parseInt(row[0], 10);
				const skin = row[1] || "0";
				const type = row[6];
				const dialogue = row[7];

				if (!(unit in ret)) ret[unit] = {};
				if (!(skin in ret[unit])) ret[unit][skin] = {};

				ret[unit][skin][type] = dialogue;
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-dialogue.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("./auth")(process);
