const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1FD4jLqxdPGCg-YBYl30hI7NPnX2OosCXK_Ex6b4xCNg",
		range: "AI!A2:B",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0] || !row[1]) return;

				const [key, data] = row;
				const pattern = [];
				const j = data.split("\n");
				j.forEach(x => {
					try {
						pattern.push(JSON.parse(x));
					} catch (err) {
						console.error(x);
						throw err;
					}
				});
				ret.push({
					ai: key,
					pattern,
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "ai.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
