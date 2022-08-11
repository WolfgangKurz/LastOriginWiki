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
					? "1R2gKu8s3Cxb9rqo5mqwin15PZvRbf8tjDdsKcmDOj18"
					: "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
				: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
			range: "Mission!A2:E",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const [key, objectType, objectValue, triggerType, triggerValue] = row;
					ret.push({
						key,
						objectType: parseInt(objectType, 10),
						objectValue,
						triggerType: parseInt(triggerType, 10),
						triggerValue,
					});
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", targetDB, "mission.json"),
				JSON.stringify(ret),
			);
		});
	});
}

require("../dbsheet/auth")(process);
