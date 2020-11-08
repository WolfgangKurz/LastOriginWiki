const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitSkin!A2:P",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.every(x => !x || x.length === 0)) return;

				const uid = row[0];
				const skin = row[2];
				const skinId = parseInt(row[3], 10);
				const artist = row[4];
				const offsets = row[5];
				const price = /^[0-9]+$/.test(row[6]) ? parseInt(row[6], 10) : undefined;
				const V = !!row[7];
				const P = !!row[8];
				const A = !!row[9];
				const D = !!row[10];
				const S = !!row[11];
				const X = !!row[12];
				const G = !!row[13];
				const name = row[14];
				const desc = row[15];

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

				if (!(uid in ret))
					ret[uid] = { sid: skinId, artist, offset, price, V, A, D, S, X, G, name, desc };
				else if (P)
					ret[uid].P = { sid: skinId, t: skin, artist, offset, price, V, A, D, S, X, G, name, desc };
				else {
					if (!("skins" in ret[uid]))
						ret[uid].skins = [];

					ret[uid].skins.push({ sid: skinId, t: skin, artist, offset, price, V, A, D, S, X, G, name, desc });
				}
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-skin.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
