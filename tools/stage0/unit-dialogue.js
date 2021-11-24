const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });

	const ret = {
		ko: {},
		jp: {},
		jpdmm: {},
	};
	function procLang (lang, rows) {
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

		rows.map((row) => {
			if (!row[0] || row[0].length === 0 || row[0][0] === "#") return;

			const unit = row[0];
			const skin = row[2] || "0";
			const type = typeTable[row[4]];
			const dialogue = row[5];

			if (!(unit in ret[lang])) ret[lang][unit] = {};
			if (!(skin in ret[lang][unit])) ret[lang][unit][skin] = {};

			ret[lang][unit][skin][type] = (dialogue || "").trim();
		});
	}

	Promise.all([
		new Promise((resolve, reject) => {
			sheets.spreadsheets.values.get({
				spreadsheetId: "1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00",
				range: "UnitDialogue (KR)!A3:F",
			}, (err, res) => {
				if (err) {
					console.log(`The API returned an error: ${err}`);
					return reject();
				}

				const rows = res.data.values;
				if (rows.length)
					procLang("ko", rows);
				else {
					console.log("No data found.");
					return reject();
				}
				resolve();
			});
		}),
		new Promise((resolve, reject) => {
			sheets.spreadsheets.values.get({
				spreadsheetId: "1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00",
				range: "UnitDialogue (JP)!A3:F",
			}, (err, res) => {
				if (err) {
					console.log(`The API returned an error: ${err}`);
					return reject();
				}

				const rows = res.data.values;
				if (rows.length)
					procLang("jp", rows);
				else {
					console.log("No data found.");
					return reject();
				}
				resolve();
			});
		}),
		new Promise((resolve, reject) => {
			sheets.spreadsheets.values.get({
				spreadsheetId: "1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00",
				range: "UnitDialogue (JPDMM)!A3:F",
			}, (err, res) => {
				if (err) {
					console.log(`The API returned an error: ${err}`);
					return reject();
				}

				const rows = res.data.values;
				if (rows.length)
					procLang("jpdmm", rows);
				else {
					console.log("No data found.");
					return reject();
				}
				resolve();
			});
		}),
	]).then(() => {
		fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "dialogue"), { recursive: true });
		["ko", "jp", "jpdmm"].forEach(lang => {
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "dialogue", `${lang}.json`),
				JSON.stringify(ret[lang], null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
