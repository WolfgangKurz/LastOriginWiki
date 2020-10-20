const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1V_hVRBcvg5tYwPQOLHxcsFxwvDOJrWJYfmZ65AVCd7E",
		range: "Equipment!A3:V",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const rarities = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
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
				const rarity = rarities[row[1]];
				const type = types[row[2]];
				const key = row[3];
				const fullKey = row[4];

				const name = row[5];
				const desc = row[6];
				const craftable = !!row[7];
				const limit = row[8];

				const upgrade = parseInt(row[9], 10);
				const source = !row[10]
					? []
					: (row[10] || "")
						.split("\n")
						.map(d => d.split(","));

				ret.push({
					available,
					rarity,
					type,
					key,

					fullKey,
					name,
					desc,
					craftable,

					limit,
					upgrade,
					source,
					stats: row.filter((x, i) => i >= 11),
				});
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "equip.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
