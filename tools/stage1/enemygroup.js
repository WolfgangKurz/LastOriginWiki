const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const { default: Decimal } = require("decimal.js");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "EnemyGroup!A2:D",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [id, exp, drops, grid] = row;

				ret[id] = {
					id,
					exp: parseInt(exp, 10),
					drops: JSON.parse(drops),
					grid: JSON.parse(grid),
				};
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "enemygroup.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
