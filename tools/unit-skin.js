const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitSkin!A2:N",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.every(x => !x || x.length === 0)) return;

				const unit = row[0];
				const skin = row[2];
				const artist = row[3];
				const offsets = row[4];
				const price = /^[0-9]+$/.test(row[5]) ? parseInt(row[5], 10) : undefined;
				const P = !!row[6];
				const A = !!row[7];
				const D = !!row[8];
				const S = !!row[9];
				const X = !!row[10];
				const G = !!row[11];
				const name = row[12];
				const desc = row[13];

				const offset = ((x) => {
					const output = {
						normal: { n: 0, d: 0, s: 0, x: 0 },
						google: { n: 0, d: 0, s: 0, x: 0 },
					};

					const keys = ["normal", "google"];
					const cols = ["n", "d", "s", "x"];

					const lines = (x || "").split("\n");
					lines.forEach((y, i) => {
						const target = output[keys[i]];
						y.split(",")
							.forEach((z, j) => {
								if (!z) z = 0;
								target[cols[j]] = z;
							});
					});

					if (lines.length === 1)
						output.google = output.normal;

					return output;
				})(offsets);

				if (!(unit in ret))
					ret[unit] = { artist, offset, price, A, D, S, X, G, name, desc };
				else if (P)
					ret[unit].P = { t: skin, artist, offset, price, A, D, S, X, G, name, desc };
				else {
					if (!("skins" in ret[unit]))
						ret[unit].skins = [];

					ret[unit].skins.push({ t: skin, artist, offset, price, A, D, S, X, G, name, desc });
				}
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-skin.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("./auth")(process);
