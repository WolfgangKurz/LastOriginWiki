const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const ret = [];
let doneCount = 0;
function done () {
	if (doneCount < 2) return;

	fs.writeFileSync(
		path.resolve(__dirname, "..", "src", "json", "exchange.ts"),
		`export default ${JSON.stringify(ret, null, 2)};`,
	);
}

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "MonthlyExc!A2:G",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const rows = res.data.values;
		if (rows.length) {
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

			doneCount++;
			done();

			sheets.spreadsheets.values.get({
				spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
				range: "EventExc!A2:G",
			}, (err, res) => {
				if (err) return console.log("The API returned an error: " + err);

				const rows = res.data.values;
				if (rows.length) {
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

					doneCount++;
					done();
				} else
					console.log("No data found.");
			});
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
