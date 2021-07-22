const zlib = require("zlib");
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
			range: "UnitSkill!A2:H",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const ret = {};
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (row.some(x => !x || x.length === 0)) return;

					const unit = row[0];
					const slot = row[1];
					const fchange = parseInt(row[2], 10);
					const icon = row[3];
					const target = row[4];
					const data = row[5];
					const values = row[6];

					const key = `${fchange ? "F" : ""}${slot}`;
					if (!(unit in ret)) ret[unit] = {};

					const buffs = (() => {
						const row6 = zlib.gunzipSync(Buffer.from(data, "base64"), { level: 9 }).toString("utf-8");
						if (row6.startsWith("{")) {
							return {
								index: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
								data: [JSON.parse(row6)],
							};
						}

						const store = [];
						const indices = [];

						const levels = row6.split("\n");
						levels.forEach(x => {
							const range = x.replace(/^([^:]+):.+$/, "$1");

							const [from, to] = (() => {
								if (range.includes("~")) {
									return [
										parseInt(range.replace(/(.+)~.+/, "$1"), 10),
										parseInt(range.replace(/.+~(.+)/, "$1"), 10),
									];
								} return [parseInt(range, 10), parseInt(range, 10)];
							})();

							const body = x.replace(/^[^:]+:(.+)$/, "$1");

							for (let i = from; i <= to; i++) {
								const index = store.indexOf(body);
								if (index >= 0) {
									indices.push(index);
									continue;
								}

								indices.push(store.length);
								store.push(body);
							}
						});

						return {
							index: indices,
							data: store.map(x => JSON.parse(x)),
						};
					})();

					ret[unit][key] = {
						key,
						icon,
						target,
						buffs,
						values,
					};
				});
			} else
				console.log("No data found.");

			Object.keys(ret).forEach(u => {
				fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB, "skill"), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "db", targetDB, "skill", `${u}.json`),
					JSON.stringify(ret[u], null, 2),
				);
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "unit-skill.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
