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
			range: "Summon!A3:AC",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const gradeTable = {
				B: 2,
				A: 3,
				S: 4,
				SS: 5,
			};
			const classTable = {
				Light: 0,
				Heavy: 1,
				Flying: 2,
			};
			const roleTable = {
				Defender: 0,
				Attacker: 1,
				Supporter: 2,
			};
			const typeTable = {
				Install: 0,
				Environment: 1,
				Auto: 2,
			};
			const posTable = {
				Team: 0,
				Enemy: 1,
			};
			const d = (v) => parseFloat(v);

			const ret = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[1]) return;

					const [
						id, icon,
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
						// name,
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
			} else
				console.log("No data found.");

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", targetDB, "summon.json"),
				JSON.stringify(ret, null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
