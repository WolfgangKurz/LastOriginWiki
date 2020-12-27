const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const { default: Decimal } = require("decimal.js");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "World!A2:ZZ",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [id, map, title, rawdata, ...nodes] = row;

				if (!(id in ret)) ret[id] = {};

				const n = nodes.map(x => JSON.parse(x));
				const data = JSON.parse(rawdata);
				data.forEach(x => {
					x.wave = n.find(y => y.key === x.text).data;
				});

				ret[id][map] = {
					title: title || `${map} 구역`,
					list: data,
				};
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "map.ts"),
				`export default ${JSON.stringify(ret, null, 2)};`,
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
