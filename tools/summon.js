const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "Summon!A3:AC",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const gradeTable = {
			B: 2,
			A: 3,
			S: 4,
			SS: 5,
		};
		const classTable = {
			경장: 0,
			중장: 1,
			기동: 2,
		};
		const roleTable = {
			보호기: 0,
			공격기: 1,
			지원기: 2,
		};
		const typeTable = {
			설치: 0,
			환경: 1,
			자동: 2,
		};
		const posTable = {
			아군: 0,
			적군: 1,
		};
		function d (v) {
			return parseFloat(v);
		}

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[1]) return;

				const [
					id, name, icon,
					use, type, pos,
					overlap, turn,
					cls, role, rarity,
					deflv, lifecycle, shelter,
					ai,
					hp, hpPer,
					atk, atkPer,
					def, defPer,
					spd,
					cri,
					acc,
					eva,
					resFire,
					resIce,
					resThunder,
					skillData,
				] = row;

				const x = {
					id,
					name,
					icon,

					rarity: gradeTable[rarity],
					type: classTable[cls],
					role: roleTable[role],

					use: use === "1",
					summonType: typeTable[type],
					pos: posTable[pos],
					overlap: parseInt(overlap, 10),
					turn: parseInt(turn, 10),

					deflv: parseInt(deflv, 10),
					lifecycle: parseInt(lifecycle, 10),
					shelter: shelter === "1",
					ai,

					hp: [d(hp), d(hpPer)],
					atk: [d(atk), d(atkPer)],
					def: [d(def), d(defPer)],
					spd: d(spd),
					cri: d(cri),
					acc: d(acc),
					eva: d(eva),
					res: {
						fire: d(resFire),
						chill: d(resIce),
						thunder: d(resThunder),
					},

					skills: JSON.parse(skillData),
				};

				ret.push(x);
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "summon.ts"),
				`export default ${JSON.stringify(ret, null, 2)};`,
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
