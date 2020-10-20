const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitTable!A3:W",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const gradeTable = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
		};
		const typeTable = {
			경장: 0,
			중장: 1,
			기동: 2,
		};
		const roleTable = {
			보호기: 0,
			공격기: 1,
			지원기: 2,
		};
		const bodyTable = {
			바이오: 0,
			로봇: 1,
		};
		const equipTable = {
			칩: 0,
			OS: 1,
			보조: 2,
		};
		const linkBonusTable = {
			"스킬 위력": "Skill",
			적중: "ACC",
			치명타: "Cri",
			행동력: "SPD",
			방어력: "DEF",
			회피: "EV",
			HP: "HP",
		};
		const fullLinkBonusTable = {
			HP: "HP",
			"버프/디버프": "Buff",
			사거리: "Range",
			적중: "ACC",
			치명타: "Cri",
			회피: "EV",
		};

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const [
					id,
					name, shortname, uid,
					rarity, type, role, body,
					group, shortgroup, groupkey,
					pro, craftable, marry,
					linkBonus, flSkill_, fl3, fl4,
					equip1, equip2, equip3, equip4,
					source,
				] = row;
				const flSkill = parseInt(flSkill_, 10);

				const x = {
					id: parseInt(id, 10),
					uid,

					rarity: gradeTable[rarity],
					type: typeTable[type],
					role: roleTable[role],
					body: bodyTable[body],

					name,
					shortname,

					group,
					shortgroup,
					groupkey,

					craftable: !!craftable,
					marry: !!marry,

					linkBonus: linkBonusTable[linkBonus],
					fullLinkBonus: {
						bonus2: flSkill,
						bonus3: fullLinkBonusTable[fl3],
						bonus4: fullLinkBonusTable[fl4],
					},
					equip: [
						equipTable[equip1],
						equipTable[equip2],
						equipTable[equip3],
						equipTable[equip4],
					],
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
		range: "UnitStats!A3:P",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const rarityTable = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
		};

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const id = parseInt(row[0], 10);
				const rarity = row[2];
				if (!rarity) return;

				const HP = [parseFloat(row[3]), parseFloat(row[4])];
				const ATK = [parseFloat(row[5]), parseFloat(row[6])];
				const DEF = [parseFloat(row[7]), parseFloat(row[8])];
				const SPD = parseFloat(row[9]);
				const Cri = parseFloat(row[10]);
				const ACC = parseFloat(row[11]);
				const EV = parseFloat(row[12]);
				const Resist = {
					fire: parseFloat(row[13]),
					ice: parseFloat(row[14]),
					lightning: parseFloat(row[15]),
				};

				ret.push({
					id,
					rarity: rarityTable[rarity],

					HP,
					ATK,
					DEF,
					SPD,
					Cri,
					ACC,
					EV,
					Resist,
				});
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
