const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const Decimal = require("decimal.js").Decimal;

function process (auth) {
	const targetDBs = require("../targets");
	targetDBs.forEach(targetDB => {
		const sheets = google.sheets({ version: "v4", auth });
		sheets.spreadsheets.values.get({
			spreadsheetId: targetDB === "korea"
				? require("../STAGING") === true
					? "1EbGKc68ysZkoV_rurGKQ-tezAm3WW3AAH3KAM-XcSkA"
					: "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
				: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
			range: "UnitStats!A3:O",
		}, (err, res) => {
			if (err) return console.log(`The API returned an error: ${err}`);

			const rarityTable = {
				B: 2,
				A: 3,
				S: 4,
				SS: 5,
			};

			const stats = [];
			const rows = res.data.values;
			if (rows && rows.length) {
				rows.map((row) => {
					if (!row[0]) return;

					const id = parseInt(row[0], 10);
					const rarity = row[1];

					const HP = [parseFloat(row[2]), parseFloat(row[3])];
					const ATK = [parseFloat(row[4]), parseFloat(row[5])];
					const DEF = [parseFloat(row[6]), parseFloat(row[7])];
					const SPD = parseFloat(row[8]);
					const CRI = parseFloat(row[9]);
					const ACC = parseFloat(row[10]);
					const EVA = parseFloat(row[11]);
					const Resist = {
						fire: parseFloat(row[12]),
						ice: parseFloat(row[13]),
						lightning: parseFloat(row[14]),
					};

					if (!(id in stats)) stats[id] = [];

					stats[id].push({
						id,
						rarity: rarityTable[rarity],

						HP,
						ATK,
						DEF,
						SPD,
						CRI,
						ACC,
						EVA,
						Resist,
					});
				});

				sheets.spreadsheets.values.get({
					spreadsheetId: targetDB === "korea"
						? require("../STAGING") === true
							? "1EbGKc68ysZkoV_rurGKQ-tezAm3WW3AAH3KAM-XcSkA"
							: "11IxebdUQ_VHbaP79sN8KxZ87n3c5rG42DL8TQOK9h1k"
						: "1ohSOKdl1IZq8aOsWPJ74yX01Ave7FkSrUFG5MSbfZN8",
					range: "Unit!A2:AJ",
				}, (err, res) => {
					if (err) return console.log(`The API returned an error: ${err}`);

					const gradeTable = {
						B: 2,
						A: 3,
						S: 4,
						SS: 5,
					};
					const typeTable = {
						Light: 0,
						Heavy: 1,
						Flying: 2,
					};
					const roleTable = {
						Defender: 0,
						Attacker: 1,
						Supporter: 2,
					};
					const bodyTable = {
						Bioroid: 0,
						AGS: 1,
					};
					const equipTable = {
						Chip: 0,
						System: 1,
						Sub: 2,
					};

					const rarityTable = {
						B: 2,
						A: 3,
						S: 4,
						SS: 5,
					};

					const ret = [];
					const rows = res.data.values;
					if (rows && rows.length) {
						rows.map((row) => {
							if (!row[1]) return;

							const [
								id, uid,
								rarity, type, role, body,
								group,
								height, weight, weapon1, weapon2,
								pro, craftable,
								favor1, favor2, favor3, favor4,
								marry,
								lb1, lb2, lb3, lb4,
								fl1, fl2, fl3, fl4, fl5,
								equip1, equip2, equip3, equip4,
								cost, research, lvlimit,
								source, source1,
							] = row;

							const lb = [lb1, lb2, lb3, lb4];
							const fl = [fl1, fl2, fl3, fl4, fl5];
							const favor = {
								present: new Decimal(favor1).toNumber(),
								clear: new Decimal(favor2).toNumber(),
								death: new Decimal(favor3).toNumber(),
								assistant: new Decimal(favor4).toNumber(),
							};

							const x = {
								id: parseInt(id, 10),
								uid,

								rarity: gradeTable[rarity],
								type: typeTable[type],
								role: roleTable[role],
								body: bodyTable[body],

								lvlimit,

								group,

								height,
								weight,
								weapon1,
								weapon2,

								stat: stats[id],

								craftable: !craftable ? false : parseInt(craftable, 10),
								favor,
								marry: !!marry,

								linkBonus: lb,
								fullLinkBonus: fl,
								equip: [
									equipTable[equip1],
									equipTable[equip2],
									equipTable[equip3],
									equipTable[equip4],
								],
								source: [
									...(!source
										? []
										: source.split("\n").map(d => d.split(","))
									),
									...(!source1
										? []
										: source1.split("\n").map(d => d.split(","))
									),
								],

								cost: cost ? JSON.parse(cost) : undefined,
								research: research ? JSON.parse(research) : undefined,
							};
							if (pro)
								x.promotions = pro.split(",").map(y => rarityTable[y]);

							// fs.writeFileSync(
							// 	path.resolve(__dirname, "..", "..", "db", "unit", `${x.uid}.json`),
							// 	JSON.stringify(x, null, 2),
							// );

							ret.push(x);
						});
					} else
						console.log("No data found.");

					fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", targetDB), { recursive: true });
					fs.writeFileSync(
						path.resolve(__dirname, "..", "..", "db", targetDB, "unit.json"),
						JSON.stringify(ret, null, 2),
					);
				});
			} else
				console.log("No data found.");
		});
	});
}

require("../dbsheet/auth")(process);
