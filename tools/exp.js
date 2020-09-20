const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "EXP!A2:L",
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
				if (!row[0]) return;

				const [world, map, ...wave] = row;
				if (wave.length > 9) wave.pop();
				const enemies = parseInt(wave.pop(), 10);

				if (!(world in ret.map)) ret.map[world] = {};
				ret.map[world][map] = {
					waves: wave
						.filter(x => x)
						.map(x => parseInt(x, 10)),
					enemies,
				};
			});
			rows.map((row) => {
				if (!row[11]) return;

				ret.table.push(
					parseInt(row[11], 10),
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

require("./auth")(process);
