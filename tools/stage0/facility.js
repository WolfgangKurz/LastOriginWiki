const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

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
			range: "Facility!A3:AA",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const id = row[0];
					// const name = row[1];
					const image = row[1];
					const size = parseInt(row[2], 10);
					const level = parseInt(row[3], 10);
					const cost = [
						parseInt(row[4], 10),
						parseInt(row[5], 10),
						parseInt(row[6], 10),
					];
					const requiredCombatant = {
						type: row[7],
						level: parseInt(row[8], 10),
						count: parseInt(row[9], 10),
					};
					const produceTime = parseInt(row[14], 10) || 0;
					const upgradeTime = parseInt(row[19], 10) || 0;
					const upgradeRequired = {
						Wood: parseInt(row[20], 10),
						Stone: parseInt(row[21], 10),
						Iron: parseInt(row[22], 10),
						Material: null,
					};
					const produceItem = JSON.parse(row[26]);

					if (row[23]) {
						upgradeRequired.Material = {
							type: row[23],
							grade: row[24],
							value: parseInt(row[25], 10) || 0,
						};
					}

					if (!ret[id]) {
						ret[id] = {
							// name,
							image,
							size,
							duration: produceTime,
							list: [],
						};
					}

					ret[id].list[level - 1] = {
						level,
						cost,
						requiredCombatant,
						upgradeTime,
						upgradeRequired,
						produceItem,
					};
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "facility.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
