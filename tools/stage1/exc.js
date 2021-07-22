const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const ret = [];

function process (auth) {
	const targetDBs = require("../targets");
	targetDBs.forEach(targetDB => {
		const sheets = google.sheets({ version: "v4", auth });
		Promise.all([
			new Promise((resolve) => {
				sheets.spreadsheets.values.get({
					spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
					range: "MonthlyExc!A2:G",
				}, (err, res) => {
					if (err) return console.log(`The API returned an error: ${err}`);

					const rows = res.data.values;
					if (rows && rows.length) {
						for (const row of rows) {
							if (!row[0]) continue;

							const [category, group, note, reward, count, req1, req2] = row;
							ret.push({
								category,
								group,
								reward,
								count: parseInt(count, 10),
								requires: [req1, req2].filter(x => x),
								note,
							});
						}

						resolve();
					}
				});
			}),
			new Promise((resolve) => {
				sheets.spreadsheets.values.get({
					spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
					range: "EventExc!A2:G",
				}, (err, res) => {
					if (err) return console.log(`The API returned an error: ${err}`);

					const rows = res.data.values;
					if (rows && rows.length) {
						for (const row of rows) {
							if (!row[0]) break;

							const [category, group, note, reward, count, req1, req2] = row;
							ret.push({
								category,
								group,
								reward,
								count: parseInt(count, 10),
								requires: [req1, req2].filter(x => x),
								note,
							});
						}

						resolve();
					} else
						console.log("No data found.");
				});
			}),
		])
			.then(() => {
				fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "external", "json", targetDB, "exchange.json"),
					JSON.stringify(ret),
				);
			});
	});
}

require("../dbsheet/auth")(process);
