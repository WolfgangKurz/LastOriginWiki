const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const { default: Decimal } = require("decimal.js");

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
			range: "EW!A3:ZZ",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const [cid, sid, mr, mm, rmr, rmm, rewards, ...waves] = row;

					if (!(cid in ret)) ret[cid] = {};

					ret[cid][sid] = {
						reward: {
							mineral: {
								regen: parseInt(mr, 10),
								max: parseInt(mm, 10),
							},
							refined: {
								regen: parseInt(rmr, 10),
								max: parseInt(rmm, 10),
							},
						},
						rewards: JSON.parse(rewards),
						waves: waves.map(w => JSON.parse(w)),
					};
				});

				fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "external", "json", targetDB, "ew.json"),
					JSON.stringify(ret),
				);
			} else
				console.log("No data found.");
		});
	});
}

require("../dbsheet/auth")(process);
