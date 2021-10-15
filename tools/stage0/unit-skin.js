const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const targetDBs = require("../targets");
	targetDBs.forEach(targetDB => {
		const sheets = google.sheets({ version: "v4", auth });
		sheets.spreadsheets.values.get({
			spreadsheetId: targetDB === "korea"
				? "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
				: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
			range: "UnitSkin!A2:V",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (row.every(x => !x || x.length === 0)) return;

					const uid = row[0];
					const skin = row[1];
					const skinId = parseInt(row[2], 10);
					const price = /^[0-9]+$/.test(row[3]) ? parseInt(row[3], 10) : undefined;
					const Pro = parseInt(row[4], 10) === 1;
					const V = parseInt(row[5], 10) === 1;
					const G = parseInt(row[6], 10) === 1;
					const E = parseInt(row[7], 10) === 1;
					const M = parseInt(row[8], 10) === 1;
					const A = parseInt(row[9], 10) === 1;
					const Stage = parseInt(row[10], 10) === 1;
					const D = parseInt(row[11], 10) === 1;
					const S = parseInt(row[12], 10) === 1;
					const X = parseInt(row[13], 10) === 1;
					const Pre = parseInt(row[14], 10) === 1;
					const artist = row[15];
					const offset = {
						n: parseInt(row[16] || "0", 10),
						d: parseInt(row[17] || "0", 10),
						s: parseInt(row[18] || "0", 10),
						x: parseInt(row[19] || "0", 10),
					};
					const AV = parseInt(row[20], 10) === 1;
					const AVG = parseInt(row[21], 10) === 1;

					const info = { G, V, E, M, A, Stage, D, S, X, Pre, AV, AVG };
					const base = { sid: skinId, artist, offset, price, ...info };

					if (!(uid in ret))
						ret[uid] = { ...base };
					else if (Pro)
						ret[uid].P = { ...base };
					else {
						if (!("skins" in ret[uid]))
							ret[uid].skins = [];

						ret[uid].skins.push({ ...base });
					}
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "unit-skin.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
