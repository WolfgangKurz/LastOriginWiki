const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Facilities!A3:AD",
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
				const requireRes = [];
				const requireWorker = {
					type: row[10],
					level: row[11].split(",").map(x => parseInt(x, 10)),
					count: parseInt(row[12], 10),
				};
				const workingTime = parseInt(row[17], 10) || 0;
				const upgradeTime = parseInt(row[22], 10) || 0;
				const upgradeRes = {
					Resins: parseInt(row[23], 10),
					Paint: parseInt(row[24], 10),
					Metal: parseInt(row[25], 10),
					Material: null,
				};
				const result = !row[29]
					? []
					: row[29]
						.replace(/\r/g, "")
						.split("\n")
						.map(x => x.split(","));

				for (let i = 4; i < 9; i += 2) {
					if (row[i]) {
						requireRes.push({
							type: row[i],
							value: parseInt(row[i + 1], 10) || 0,
						});
					}
				}
				if (row[26]) {
					upgradeRes.Material = {
						type: row[26],
						grade: row[27],
						value: parseInt(row[28], 10) || 0,
					};
				}

				if (!ret[id]) {
					ret[id] = {
						name,
						size,
						duration: workingTime,
						list: [],
					};
				}

				ret[id].list[level - 1] = {
					level,
					requireRes,
					requireWorker,
					upgradeTime,
					upgradeRes,
					result,
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
