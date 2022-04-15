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
			range: "UnitSkin!A3:AE",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (row.every(x => !x || x.length === 0)) return;

					const uid = row[0];
					// const skin = row[1];
					const skinId = parseInt(row[2], 10);
					const price = /^[0-9]+$/.test(row[3]) ? parseInt(row[3], 10) : undefined;
					const category = row[4].split(",");

					const Pro = parseInt(row[5], 10) === 1;
					const G = parseInt(row[6], 10) === 1;

					const parts = parseInt(row[7], 10);
					const stage = parseInt(row[8], 10) === 1;

					// const A = Parts & (1 << 1) > 0;
					// const V = Parts & (1 << 2) > 0;
					// const E = Parts & (1 << 3) > 0;
					// const M = Parts & (1 << 4) > 0;
					// const B = Parts & (1 << 5) > 0;
					// const D = Parts & (1 << 6) > 0;

					const list = new Array(8).fill(0).map((_, i) => i);

					const subset = list.map(i => parseInt(row[9 + i], 10) === 1);

					const artist = row[17];

					const offsets = list.map(i => parseInt(row[18 + i], 10));

					const anim = new Array(4)
						.fill(0)
						.map((_, i) => parseInt(row[26 + i], 10) === 1);

					const facelist = (row[30] || "")
						.split(",")
						.filter(x => x !== "")
						.map(x => parseInt(x, 10));

					const info = { G, parts, stage, subset, anim, category, facelist };
					const base = { sid: skinId, artist, offsets, price, ...info };

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
