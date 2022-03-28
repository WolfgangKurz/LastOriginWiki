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
			range: "PassiveSkills!A2:G",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			// const names = {};
			const ret = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const [
						key, desc, lvCost,
						activate, slot,
						unlock,
						skillData,
					] = row;

					const o = {
						key,
						desc: JSON.parse(desc),
						lvCost: lvCost ? JSON.parse(lvCost) : undefined,
						activate: parseInt(activate, 10),
						slot: parseInt(slot, 10),
						unlock: unlock ? JSON.parse(unlock) : undefined,
						skill: JSON.parse(skillData),
					};
					ret.push(o);
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "ext-passive.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
