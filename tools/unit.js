const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitTable!A3:V",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const id = row[0];
				const name = row[1];
				const shortname = row[2];
				const rarity = row[3];
				const type = row[4];
				const role = row[5];
				const body = row[6];
				const group = row[7];
				const shortgroup = row[8];
				const groupkey = row[9];
				const pro = row[10];
				const craftable = row[11];
				const marry = row[12];

				const linkBonus = row[13];
				const flSkill = parseInt(row[14], 10);
				const fl3 = row[15];
				const fl4 = row[16];

				const equip1 = row[17];
				const equip2 = row[18];
				const equip3 = row[19];
				const equip4 = row[20];

				const source = row[21];

				const x = {
					id: parseInt(id, 10),
					rarity,
					type,
					role,
					name,
					body,
					shortname,
					group,
					shortgroup,
					groupkey,
					craftable: !!craftable,
					marry: !!marry,
					linkBonus: {
						per: linkBonus,
						skillPower: flSkill,
						entry3: fl3,
						entry4: fl4,
					},
					equip: [equip1, equip2, equip3, equip4],
					source: !source
						? []
						: source.split("\n").map(d => d.split(",")),
				};
				if (pro)
					x.promotions = pro.split(",");

				ret.push(x);
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitStats!A3:M",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const id = parseInt(row[0], 10);
				const rarity = row[2];
				if (!rarity) return;

				const hp = [parseFloat(row[3]) || 0, parseFloat(row[4]) || 0];
				const atk = [parseFloat(row[5] || 0), parseFloat(row[6]) || 0];
				const def = [parseFloat(row[7] || 0), parseFloat(row[8]) || 0];
				const spd = parseFloat(row[9]) || 0;
				const crit = parseFloat(row[10]) || 0;
				const acc = parseFloat(row[11]) || 0;
				const eva = parseFloat(row[12]) || 0;

				if (!(id in ret)) ret[id] = { id };
				ret[id][rarity] = { hp, atk, def, spd, crit, acc, eva };
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-stats.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnityIDList!A2:C",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const id = parseInt(row[0], 10);
				const uid = row[2];
				if (!uid) return;

				ret[id] = uid;
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-uid.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("./auth")(process);
