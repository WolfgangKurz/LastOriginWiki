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
			range: "Gacha!A2:F",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const [key, category, price, type, icon, data] = row;
					ret.push({
						key,
						category: parseInt(category, 10),
						price: parseInt(price, 10),
						type: parseInt(type, 10),
						icon,
						data: JSON.parse(data),
					});
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", targetDB, "gacha.json"),
				JSON.stringify(ret),
			);
		});
	});
}

require("../dbsheet/auth")(process);
