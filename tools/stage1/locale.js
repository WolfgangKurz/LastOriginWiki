const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");
const { google } = require("googleapis");

async function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });

	const spreadsheetId = "1Q2tpfQntZxmI0Xbx9HZo0vjBY7kQGZGmH1MBGTzrnvo";

	const types = (await sheets.spreadsheets.get({ spreadsheetId }))
		.data.sheets
		.map(x => x.properties.title);

	const data = {};

	for (const type of types) {
		console.log(type);
		await new Promise((resolve, reject) => {
			sheets.spreadsheets.values.get({
				spreadsheetId,
				range: `${type}!A1:ZZ`,
			}, (err, res) => {
				if (err) {
					console.log("The API returned an error: " + err);
					reject(err);
				}

				const rows = res.data.values;
				if (rows.length) {
					const locales = rows[0].slice(1).filter(x => x);
					locales.forEach((x, i) => {
						if (!(x in data)) data[x] = {};
					});

					rows.forEach((row) => {
						if (!row[0]) return;

						locales.forEach((x, i) => {
							data[x][row[0]] = row[i + 1] || row[1];
						});
					});
				} else
					console.log("No data found.");

				resolve();
			});
		});
	}

	// fs.writeFileSync(
	// 	path.resolve(__dirname, "..", "..", "db", "locale.json"),
	// 	JSON.stringify(data),
	// );
	const targetDir = path.resolve(__dirname, "..", "..", "external", "json", "locale");
	await rmfr(targetDir);
	fs.mkdirSync(targetDir, { recursive: true });

	Object.keys(data).forEach(k => {
		fs.writeFileSync(
			path.join(targetDir, `${k}.json`),
			JSON.stringify(data[k]),
		);
	});
}

require("../dbsheet/auth")(process);