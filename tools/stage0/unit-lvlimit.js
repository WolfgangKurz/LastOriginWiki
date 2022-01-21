const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const Decimal = require("decimal.js").Decimal;

function process (auth) {
	const targetDBs = require("../targets");
	targetDBs.forEach(targetDB => {
		const sheets = google.sheets({ version: "v4", auth });
		sheets.spreadsheets.values.get({
			spreadsheetId: targetDB === "korea"
				? require("../STAGING") === true
					? "1EbGKc68ysZkoV_rurGKQ-tezAm3WW3AAH3KAM-XcSkA"
					: "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
				: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
			range: "UnitLevelLimit!A2:C",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const rows = res.data.values;
			if (rows && rows.length) {
				const ret = [];

				rows.map((row) => {
					if (!row[0]) return;

					const group = row[0];
					const level = parseInt(row[1], 10);
					const items = row[2];

					ret.push({
						group,
						level,
						items: JSON.parse(items),
					});
				});

				fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "db", targetDB, "unit-lvlimit.json"),
					JSON.stringify(ret, null, 2),
				);
			} else
				console.log("No data found.");
		});
	});
}

require("../dbsheet/auth")(process);
