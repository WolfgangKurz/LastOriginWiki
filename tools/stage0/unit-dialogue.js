const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "UnitDialogue!A2:G",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const typeTable = {
			획득: "Join",

			편성: "SquadJoin",
			"리더 지정": "Leader",
			"스쿼드 선택": "SortiePick",
			"전투 시작": "StageStart",
			퇴각: "Retreat",
			"탐색 시작": "SearchStart",
			"탐색 완료": "SearchEnd",

			"전투 내 선택": "BattleFocus",
			"전투 지시": "ActionApprove",
			"액티브 스킬": "SpSkill",
			"액티브 스킬 (1)": "SpSkill_1",
			"액티브 스킬 (2)": "SpSkill_2",
			"액티브 스킬 (3)": "SpSkill_3",
			"액티브 스킬 (4)": "SpSkill_4",
			"액티브 스킬 (5)": "SpSkill_5",
			"액티브 스킬 (6)": "SpSkill_6",
			"액티브 스킬 (7)": "SpSkill_7",
			"액티브 스킬 (8)": "SpSkill_8",
			"액티브 스킬 (9)": "SpSkill_9",
			"전투 불능": "Retire",
			수복: "Repair",
			"전투원 강화": "Reinforce",
			"장비 장착": "ItemEquip",
			"코어 링크": "CoreLink",
			선물: "PresentGet",

			접속: "Login",
			"일반 터치 (1)": "Idle_01_01",
			"일반 터치 (2)": "Idle_01_02",
			"일반 터치 (3)": "Idle_01_03",
			"특정 터치": "SPIdle_01_01",
			"일반 터치 ♥40": "Idle_02_01",
			"일반 터치 ♥70": "Idle_03_01",
			"일반 터치 ♥100": "Idle_04_01",
			"특정 터치 ♥100": "SPIdle_02_01",

			서약: "Oath",
			"서약 후 터치": "OathIdle_01",
			"전투 MVP": "MVP",
		};

		const ret = {
			ko: {},
			jp: {},
		};
		const rows = res.data.values;
		if (rows.length) {
			["ko", "jp"].forEach(lang => {
				rows.map((row) => {
					if (!row[0] || row[0].length === 0 || row[0][0] === "#") return;

					const unit = row[0];
					const skin = row[2] || "0";
					const type = typeTable[row[4]];
					const dialogue = row[lang === "ko" ? 5 : 6];

					if (!(unit in ret[lang])) ret[lang][unit] = {};
					if (!(skin in ret[lang][unit])) ret[lang][unit][skin] = {};

					ret[lang][unit][skin][type] = dialogue || "";
				});

				fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "dialogue"), { recursive: true });
				fs.writeFileSync(
					path.resolve(__dirname, "..", "..", "db", "dialogue", `${lang}.json`),
					JSON.stringify(ret[lang], null, 2),
				);
			});
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);