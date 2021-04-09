const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "RogueSkill!A2:J",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					unit,
					grade,
					type,
					count,
					name,
					desc,
					icon,
					limitEffect,
					items,
				] = row;

				ret.push({
					key,
					unit,
					grade: parseInt(grade, 10),
					type: parseInt(type, 10),
					count: parseInt(count, 10),
					icon,
					limitEffect: limitEffect || "",
					items: (items || "").split("\n").filter(x => x),
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "db"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "db", "roguelike-skill.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
