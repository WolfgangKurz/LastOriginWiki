const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "World!A2:H",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [id, map, prefix, postf, maps, B, Ex, C] = row;
				const postfix = postf.split(",");
				while (postfix.length < 4) postfix.push(""); // 기본, B, Ex, C

				if (!(id in ret)) ret[id] = {};

				ret[id][map] = [];
				for (let i = 0; i < maps; i++) {
					ret[id][map].push({
						type: "N",
						name: `${prefix}-${i + 1}${postfix[0]}`,
						pos: [i, 1],
						prev: i > 0 ? ret[id][map][i - 1].pos : undefined,
					});
				}

				((B) => { // B
					const bs = B.split(",").filter(x => x);
					bs.forEach(x => {
						let sep;
						if (x[0] === "*") {
							sep = 1;
							x = x.substr(1);
						}

						if (x.includes("~")) {
							const p = x.split("~").map(_ => parseInt(_));
							for (let i = p[0]; i <= p[1]; i++) {
								ret[id][map].push({
									type: "B",
									name: `${prefix}-${i}${postfix[1]}`,
									pos: [i - 1, 0],
									prev: i > p[0]
										? ret[id][map][
											ret[id][map].length - 1
										].pos
										: sep
											? undefined
											: ret[id][map][
												ret[id][map].findIndex(y => y.type === "N" && y.name === `${prefix}-${i}${postfix[0]}`)
											].pos,
								});
							}
						} else {
							ret[id][map].push({
								type: "B",
								name: `${prefix}-${x}${postfix[1]}`,
								pos: [parseInt(x) - 1, 0],
								prev: sep
									? undefined
									: ret[id][map][
										ret[id][map].findIndex(y => y.type === "N" && y.name === `${prefix}-${x}${postfix[0]}`)
									].pos,
							});
						}
					});
				})(B || "");

				((Ex) => { // Ex
					const exs = Ex.split(",").filter(x => x);
					exs.forEach(x => {
						let sep;
						if (x[0] === "*") {
							sep = 1;
							x = x.substr(1);
						}

						if (x.includes("~")) {
							const p = x.split("~").map(_ => parseInt(_));
							for (let i = p[0]; i <= p[1]; i++) {
								ret[id][map].push({
									type: "Ex",
									name: `${prefix}-${i}${postfix[2]}`,
									pos: [i - 1, 2],
									prev: i > p[0]
										? ret[id][map][
											ret[id][map].length - 1
										].pos
										: undefined,
								});
							}
						} else {
							ret[id][map].push({
								type: "Ex",
								name: `${prefix}-${x}${postfix[2]}`,
								pos: [parseInt(x) - 1, 2],
							});
						}
					});
				})(Ex || "");

				((C) => { // C
					const cs = C.split(",").filter(x => x);
					cs.forEach(x => {
						const p = x.split("_").map(_ => parseInt(_));
						if (p.length !== 3) return;

						ret[id][map].push({
							type: "C",
							name: `${prefix}-${p[0]}${postfix[3]}`,
							pos: p.slice(1),
						});
					});
				})(C || "");
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "map.json"),
				JSON.stringify(ret),
			);
		} else
			console.log("No data found.");
	});
}

require("./auth")(process);
