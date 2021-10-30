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
			range: "Equip!A3:Y",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const rarities = {
				B: 2,
				A: 3,
				S: 4,
				SS: 5,
				SSS: 6,
			};
			const types = {
				Chip: 0,
				System: 1,
				Sub: 2,
			};

			const ret = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[4] || row[4] === "__T0") return;

					const available = row[0] === "1";
					const roguelike = row[1] === "1";
					const rarity = rarities[row[2]];
					const type = types[row[3]];
					const key = row[4];
					const fullKey = row[5];

					const icon = row[6];
					const craftable = !row[7] ? false : parseInt(row[7], 10);
					const limit = row[8] ? row[8].split(",").filter(f => f) : null;

					const upgrade = JSON.parse(row[9]);

					const source = [
						...(!row[21]
							? []
							: (row[21] || "")
								.split("\n")
								.map(d => d.split(","))
						),
						...(!row[22]
							? []
							: (row[22] || "")
								.split("\n")
								.map(d => d.split(","))
						),
					];

					const o = {
						available,
						roguelike,
						rarity,
						type,
						key,

						fullKey,
						icon,
						craftable,

						limit,
						upgrade,
						source,
						stats: row.filter((x, i) => i >= 10 && i <= 20).map(x => JSON.parse(x)),
					};
					ret.push(o);
				});
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "equip.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
