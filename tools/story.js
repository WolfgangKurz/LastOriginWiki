const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "157bUt9DvleYvOsliq2ixpn0-50Xs87EiMHFB2m-KW3w",
		range: "Story!A2:H",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [area, map, loc, spec, title, face, bg, desc] = row;
				const specs = spec.split(",");

				ret.push({
					area,
					map: parseInt(map, 10),
					loc: parseInt(loc, 10),
					spec: (specs.includes("OP") ? 1 : 0) | (specs.includes("ED") ? 2 : 0),
					title,
					face: parseInt(face, 10),
					bg,
					desc,
				});
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "story.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./story/auth")(process);
