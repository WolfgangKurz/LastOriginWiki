const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });

	const ret = {
		KR: {},
		JP: {},
		// EN: {},
		// TC: {},
		// SC: {},
	};
	const dialogueList = ["KR", "JP", "EN", "TC", "SC"];
	function procLang (rows) {
		const typeTable = {
			소개: "Intro",
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

		let log = "";

		rows
			.filter(row => {
				if (!row[0] || row[0].length === 0 || row[0][0] === "#") return false;

				const unit = row[0];
				const skin = row[2] || "0";
				const type = typeTable[row[4]] || row[4];

				const name = skin === "0"
					? `${unit}_${type}`
					: skin === "M"
						? `${unit}_Marriage_${type}`
						: `${unit}_NS${skin}_${type}`;

				return fs.existsSync(path.resolve(
					__dirname, "..", "..", "external", "assets",
					"audio", `voice-ko`,
					`${name}.mp3`,
				));
			})
			.map((row) => {
				const unit = row[0];
				const skin = row[2] || "0";
				const type = typeTable[row[4]] || row[4];

				for (let idx = 5; idx < 5 + dialogueList.length; idx++) {
					const lang = dialogueList[idx - 5];
					const dialogue = row[idx];

					if (!(lang in ret)) continue;
					if (!(unit in ret[lang])) ret[lang][unit] = {};
					if (!(skin in ret[lang][unit])) ret[lang][unit][skin] = {};

					ret[lang][unit][skin][type] = (dialogue || "").trim();
				}
			});

		// Object.keys(ret).forEach(klang => {
		// 	Object.keys(ret[klang]).forEach(kunit => {
		// 		Object.keys(ret[klang][kunit]).forEach(kskin => {
		// 			if (Object.values(ret[klang][kunit][kskin]).every(t => t === ""))
		// 				delete ret[klang][kunit][kskin];
		// 		});

		// 		if (Object.keys(ret[klang]).length === 0)
		// 			delete ret[klang][kunit];
		// 	});
		// });
	}

	new Promise((resolve, reject) => {
		sheets.spreadsheets.values.get({
			spreadsheetId: "1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00",
			range: "대사(Quotes)!A2:J",
		}, (err, res) => {
			if (err) {
				console.log(`The API returned an error: ${err}`);
				return reject();
			}

			const rows = res.data.values;
			if (rows.length)
				procLang(rows);
			else {
				console.log("No data found.");
				return reject();
			}
			resolve();
		});
	}).then(() => {
		fs.mkdirSync(path.resolve(__dirname, "..", "..", "db", "dialogue"), { recursive: true });
		dialogueList.forEach(lang => {
			if (!ret[lang]) return;

			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "dialogue", `${lang}.json`),
				JSON.stringify(ret[lang], null, 2),
			);
		});
	});
}

require("../dbsheet/auth")(process);
