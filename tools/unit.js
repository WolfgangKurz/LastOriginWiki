const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitTable!A3:Z",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const [id, name, shortname, uid, rarity, type, role, body, group, shortgroup, groupkey, pro, craftable, marry, ..._] = row;

				const resists = {
					fire: parseInt(row[14], 10),
					chill: parseInt(row[15], 10),
					thunder: parseInt(row[16], 10),
				};

				const [linkBonus, flSkill_, fl3, fl4, equip1, equip2, equip3, equip4, source] = row.slice(17);
				const flSkill = parseInt(flSkill_, 10);

				const x = {
					id: parseInt(id, 10),
					uid,
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
					resists,
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
				JSON.stringify(ret, null, 2),
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
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Reference!D4:AM39",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row, idx) => {
				row = row.map(x => parseInt(x, 10));
				const role = ["attacker", "defender", "supporter"][idx % 3];
				const type = ["light", "air", "heavy"][Math.floor(idx / 3) % 3];
				const rarity = ["B", "A", "S", "SS"][Math.floor(idx / 9)];

				ret[`${rarity}_${type}_${role}`] = {
					bio: {
						components: row.slice(0, 6),
						nutritions: row.slice(6, 12),
						power: row.slice(12, 18),
					},
					ags: {
						components: row.slice(18, 24),
						nutritions: row.slice(24, 30),
						power: row.slice(30, 36),
					},
				};
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "unit-cost.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
