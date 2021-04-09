const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "Quest!A2:J",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key, no, title, desc,
					grade,
					objType, objTypeSub, value,
					reward,
				] = row;

				ret.push({
					key,
					no: parseInt(no, 10),
					grade: parseInt(grade, 10),

					objType: parseInt(objType, 10),
					objTypeSub: parseInt(objTypeSub, 10),
					value: parseInt(value, 10),
					reward: JSON.parse(reward),
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "quest.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "Nodes!A2:P",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					icon,
					name, desc,
					type, grade,
					hp, trapCount, trapDamage,
					reqItem,
					reqRogueItem,
					rewardItem,
					rewardRogueItem,
					reqEssences,
					rewardEssences,

					effects,
				] = row;

				ret.push({
					key,
					icon: icon.substr(7),

					type: parseInt(type, 10),
					grade: parseInt(grade, 10),

					hp: parseFloat(hp),
					trapCount: parseInt(trapCount, 10),
					trapDamage: parseInt(trapDamage, 10),

					reqItem,
					reqRogueItem,
					reqEssences: parseInt(reqEssences, 10),
					rewardItem: JSON.parse(rewardItem),
					rewardRogueItem,
					rewardEssences: parseInt(rewardEssences, 10),

					effects: (effects || "").split("\n").filter(x => x),
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "node.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "LimitEffects!A2:N",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					name,
					category, categoryName,
					type, value,
					grade,
					stacks,
					cond,
					condValue,
					imgName,
					showType,
					descCond,
					desc,
				] = row;

				ret.push({
					key,

					category: parseInt(category, 10),
					type: parseInt(type, 10),
					value,

					grade: parseInt(grade, 10),

					stacks: parseInt(stacks, 10),
					cond: parseInt(cond, 10),
					condValue: parseInt(condValue, 10),

					img: imgName,
					showType: parseInt(showType, 10),
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "limiteffects.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "RogueItem!A2:X",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					name,
					description,
					detail,
					type,
					consumableKey,
					consumableCount,
					limitEffect,
					packageKey,
					packageCount,
					grade,
					countLimit,
					useType,
					invenUse,
					needType,
					needPrice,
					imgName,
					typeImgName,
					acquireTitle,
					acquireDesc,
					useTitle,
					useDesc,
					lostTitle,
					lostDesc,
				] = row;

				ret.push({
					key,
					// name,
					// description,
					// detail,
					type: parseInt(type, 10),
					consumableKey,
					consumableCount: parseInt(consumableCount, 10),
					limitEffect,
					packageKey: packageKey.split("\n"),
					packageCount: packageCount.split("\n").map(x => parseInt(x, 10)),
					grade: parseInt(grade, 10),
					countLimit: parseInt(countLimit, 10),
					useType: parseInt(useType, 10),
					invenUse: parseInt(invenUse, 10),
					needType: parseInt(needType, 10),
					needPrice: parseInt(needPrice, 10),
					imgName,
					typeImgName,
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "item.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "RogueBuffEffect!A2:C",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					name,
					json,
				] = row;

				ret.push(JSON.parse(json));
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "buffeffects.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});

	sheets.spreadsheets.values.get({
		spreadsheetId: "1BvfL43BllyVcoQONDWSzMOPVdaJYaxvMKR4UDO4kcHg",
		range: "RogueEffect!A2:I",
	}, (err, res) => {
		if (err) return console.log(`The API returned an error: ${err}`);

		const ret = [];
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [
					key,
					name,
					type,
					overlap,
					grade,
					condDesc,
					buffIndex,
					imgName,
					descDetail,
				] = row;

				ret.push({
					key,
					type: parseInt(type, 10),
					overlap: parseInt(overlap, 10),
					grade: parseInt(grade, 10),
					buffIndex: buffIndex.split("\n"),
					imgName,
				});
			});

			fs.mkdirSync(path.resolve(__dirname, "..", "..", "external", "json", "roguelike"), { recursive: true });
			fs.writeFileSync(
				path.resolve(__dirname, "..", "..", "external", "json", "roguelike", "effects.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("../dbsheet/auth")(process);
