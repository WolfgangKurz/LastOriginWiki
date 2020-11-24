const fs = require("fs");
const path = require("path");
const { google, plus_v1 } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitTable!A3:AG",
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
			"체력 +15%": "HP_15",
			"체력 +20%": "HP_20",
			"체력 +25%": "HP_25",
			"체력 +30%": "HP_30",
			"체력 +35%": "HP_35",
			"체력 +40%": "HP_40",
			"체력 +45%": "HP_45",
			"체력 +50%": "HP_50",
			"공격력 +10%": "ATK_10",
			"공격력 +15%": "ATK_15",
			"공격력 +20%": "ATK_20",
			"공격력 +25%": "ATK_25",
			"공격력 +30%": "ATK_30",
			"방어력 +3%": "DEF_3",
			"방어력 +5%": "DEF_10",
			"방어력 +10%": "DEF_15",
			"방어력 +20%": "DEF_20",
			"방어력 +30%": "DEF_25",
			"적중률 +7%": "ACC_5",
			"적중률 +10%": "ACC_10",
			"적중률 +25%": "ACC_25",
			"적중률 +50%": "ACC_50",
			"적중률 +75%": "ACC_75",
			"회피 +2%": "EV_3",
			"회피 +10%": "EV_10",
			"회피 +15%": "EV_15",
			"회피 +20%": "EV_20",
			"회피 +25%": "EV_25",
			"회피 +30%": "EV_30",
			"회피 +40%": "EV_40",
			"회피 +50%": "EV_50",
			"행동력 +0.02": "SPD_2",
			"행동력 +0.03": "SPD_3",
			"행동력 +0.04": "SPD_4",
			"행동력 +0.1": "SPD_10",
			"행동력 +0.15": "SPD_15",
			"행동력 +0.2": "SPD_20",
			"행동력 +0.25": "SPD_25",
			"행동력 +0.3": "SPD_30",
			"치명타 +2%": "Cri_2",
			"치명타 +3%": "Cri_3",
			"치명타 +5%": "Cri_5",
			"치명타 +10%": "Cri_10",
			"치명타 +15%": "Cri_15",
			"치명타 +20%": "Cri_20",
			"치명타 +25%": "Cri_25",
			"치명타 +30%": "Cri_30",
			"사거리 +1": "Range_1",
			"버프/디버프 효과 Lv+1": "Buff_1",
			"버프/디버프 효과 Lv+2": "Buff_2",
			"버프/디버프 효과 Lv+3": "Buff_3",
			"경험치 +4%": "Exp_5",
			"경험치 +10%": "Exp_10",
			"스킬 위력 +2%": "Skill_2",
			"스킬 위력 +5%": "Skill_5",
			"스킬 위력 +10%": "Skill_10",
			"스킬 위력 +15%": "Skill_15",
			"스킬 위력 +20%": "Skill_20",
			"스킬 위력 +25%": "Skill_25",
			"스킬 위력 +30%": "Skill_30",
			"스킬 위력 +35%": "Skill_35",
			"출격 비용 -20%": "Cost_20",
			"출격 비용 -25%": "Cost_25",
			"출격 비용 -30%": "Cost_30",
			"출격 비용 -35%": "Cost_35",
		};

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

				const [
					id,
					name, shortname, uid,
					rarity, type, role, body,
					group, shortgroup, groupkey,
					pro, craftable,
					favor1, favor2, favor3, favor4,
					marry,
					lb1, lb2, lb3, lb4,
					fl1, fl2, fl3, fl4, fl5,
					equip1, equip2, equip3, equip4,
					source, source1,
				] = row;

				const lb = [lb1, lb2, lb3, lb4];
				const fl = [fl1, fl2, fl3, fl4, fl5];
				const favor = {
					present: parseInt(favor1, 10),
					clear: parseInt(favor2, 10),
					death: parseInt(favor3, 10),
					assistant: parseInt(favor4, 10),
				};

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

					craftable: !craftable ? false : parseInt(craftable, 10),
					favor,
					marry: !!marry,

					linkBonus: lb.map(lb => linkBonusTable[lb]),
					fullLinkBonus: fl.map(fl => linkBonusTable[fl]),
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
				};
				if (pro)
					x.promotions = pro.split(",").map(y => rarityTable[y]);

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
				if (!row[0]) return;

				const id = parseInt(row[1], 10);
				const rarity = row[2];

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
}

require("./dbsheet/auth")(process);
