const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "Map!A2:ZZ",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows && rows.length) {
			fs.mkdirSync(
				path.resolve(__dirname, "..", "..", "..", "LastOrigin-Roguelike-Map", "src", "assets", "json"),
				{ recursive: true },
			);

			rows.map((row) => {
				if (!row[0]) return;

				const [floor, count, ...data] = row;

				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "..", "LastOrigin-Roguelike-Map", "src", "assets", "json", `${floor}.json`),
					JSON.stringify({
						count: parseInt(count, 10),
						list: data.map(x => {
							const d = x.split("/");
							return {
								size: [parseInt(d[0], 10), parseInt(d[1], 10)],
								data: d.slice(2),
							};
						}),
					}),
				);
			});
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
