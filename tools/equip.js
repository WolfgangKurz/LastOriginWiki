const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1V_hVRBcvg5tYwPQOLHxcsFxwvDOJrWJYfmZ65AVCd7E",
		range: "Equipment!A3:U",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[4] || row[4] === "__T0") return;

				const available = row[0] === "1";
				const rarity = row[1];
				const type = row[2];
				const key = row[3];
				const fullKey = row[4];

				const name = row[5];
				const desc = row[6];
				const limit = row[7];

				const upgrade = parseInt(row[8], 10);
				const source = !row[9]
					? []
					: (row[9] || "")
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

					limit,
					upgrade,
					source,
					stats: row.filter((x, i) => i >= 10),
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
