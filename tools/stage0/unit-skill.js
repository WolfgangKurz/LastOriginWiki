const zlib = require("zlib");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "14OedgRcIIyF772ak-r5U5A9Nu5y58deGgCp6x_mqqiE",
		range: "UnitSkill!A2:H",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${  err}`);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				const unit = row[0];
				const slot = row[1];
				const type = row[2];

				const key = `${type}${slot}`;
				if (!(unit in ret)) ret[unit] = {};

				const buffs = (() => {
					const row6 = zlib.gunzipSync(Buffer.from(row[6], "base64"), { level: 9 }).toString("utf-8");
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
					// name: row[3],
					icon: row[4],
					target: row[5],
					buffs,
					// desc: (row[7] || "").split("\n"),
					// effect: row[11].split("\n"),
				};
			});

			Object.keys(ret).forEach(u => {
				fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "skill"), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "db", "skill", `${u}.json`),
					JSON.stringify(ret[u], null, 2),
				);
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "unit-skill.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "14OedgRcIIyF772ak-r5U5A9Nu5y58deGgCp6x_mqqiE",
		range: "BuffNames!A2:B",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${  err}`);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (row.some(x => !x || x.length === 0)) return;

				ret[row[0]] = row[1];
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "buffs.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
