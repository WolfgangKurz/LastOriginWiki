const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "EXP!A2:T",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			const ret = {
				map: {},
				table: [],
			};

			rows.map((row) => {
				if (!row[1]) return;

				const [type, world, map] = row;

				const wave = row.slice(3, 3 + 8);
				const enemies = row.slice(3 + 8, 3 + 8 + 8);

				if (!(world in ret.map))
					ret.map[world] = { type };

				ret.map[world][map] = wave
					.filter(x => x)
					.map((x, i) => ({
						exp: parseInt(x, 10),
						enemies: parseInt(enemies[i], 10),
					}));
			});
			rows.map((row) => {
				if (!row[3 + 8 + 8]) return;

				ret.table.push(
					parseInt(row[3 + 8 + 8], 10),
				);
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "exp.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
