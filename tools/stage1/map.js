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
			range: "World!A2:ZZ",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB, "map"), { recursive: true });

				rows.map((row) => {
					if (!row[0]) return;

					const [id, map, rawdata, substory, ...nodes] = row;

					if (!(id in ret)) ret[id] = {};

					const n = nodes.map(x => JSON.parse(x));
					const data = JSON.parse(rawdata);
					data.forEach(x => {
						x.wave = n.find(y => y.key === x.text).data;
					});

					ret[id][map] = {
						substory: substory && JSON.parse(substory) || [],
						list: data,
					};
				});

				Object.keys(ret)
					.forEach(id => {
						fs.writeFileSync(
							path.resolve(__dirname, "..", "..", "external", "json", targetDB, "map", `${id}.json`),
							JSON.stringify(ret[id]),
						);
					});
			} else
				console.log("No data found.");
		});
	});
}

require("../dbsheet/auth")(process);
