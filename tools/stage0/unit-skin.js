const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitSkin!A2:T",
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
				const Pro = !!row[7];
				const G = !!row[8];
				const V = !!row[9];
				const E = !!row[10];
				const M = !!row[11];
				const A = !!row[12];
				const Stage = !!row[13];
				const D = !!row[14];
				const S = !!row[15];
				const X = !!row[16];
				const Pre = !!row[17];
				const name = row[18];
				const desc = row[19];

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

				const info = { G, V, E, M, A, Stage, D, S, X, Pre };
				const base = { sid: skinId, artist, offset, price, ...info, name, desc };

				if (!(uid in ret))
					ret[uid] = { ...base };
				else if (Pro)
					ret[uid].P = { t: skin, ...base };
				else {
					if (!("skins" in ret[uid]))
						ret[uid].skins = [];

					ret[uid].skins.push({ t: skin, ...base });
				}
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "unit-skin.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
