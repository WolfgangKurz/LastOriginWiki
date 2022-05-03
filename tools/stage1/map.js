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
					? "1R2gKu8s3Cxb9rqo5mqwin15PZvRbf8tjDdsKcmDOj18"
					: "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
				: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
			range: "World!A2:ZZ",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const ret2 = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB, "map"), { recursive: true });

				rows.forEach((row) => {
					if (!row[0]) return;

					const [id, map, hardcoded, rawdata, substory, ...nodes] = row;

					if (!(id in ret)) ret[id] = {};
					if (!(id in ret2)) ret2[id] = {};

					const n = nodes.map(x => JSON.parse(x));
					const data = JSON.parse(rawdata);
					data.forEach(x => {
						x.wave = n.find(y => y.key === x.text).data;
					});

					ret[id][map] = {
						substory: substory && JSON.parse(substory) || [],
						list: data,
					};
					ret2[id][map] = hardcoded === "1";
				});

				Object.keys(ret)
					.forEach(id => {
						fs.writeFileSync(
							path.resolve(__dirname, "..", "..", "external", "json", targetDB, "map", `${id}.json`),
							JSON.stringify(ret[id]),
						);
					});

				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "external", "json", targetDB, "maps.json"),
					JSON.stringify(ret2),
				);
			} else
				console.log("No data found.");
		});
	});
}

require("../dbsheet/auth")(process);
