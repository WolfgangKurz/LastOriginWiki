const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

function process (auth) {
	const sheets = google.sheets({ version: "v4", auth });
	sheets.spreadsheets.values.get({
		spreadsheetId: "1cKeoYE0gvY5o5g2SzEkMZi1bUKiVHHc27ctAPFjPbL4",
		range: "World!A2:I",
	}, (err, res) => {
		if (err) return console.log("The API returned an error: " + err);

		const enemies = JSON.parse(
			fs.readFileSync(
				path.join(__dirname, "..", "src", "json", "enemy.json"),
				{ encoding: "utf-8" },
			).toString(),
		);
		const et = (() => {
			const _ = JSON.parse(
				fs.readFileSync(
					path.join(__dirname, "area", "enemy.json"),
					{ encoding: "utf-8" },
				).toString(),
			);
			return Object.keys(_).map(p => ({ id: p, ..._[p] }));
		})();

		const ret = {};
		const rows = res.data.values;
		if (rows.length) {
			rows.map((row) => {
				if (!row[0]) return;

				const [id, map, title, rawdata] = row;

				if (!(id in ret)) ret[id] = {};

				const data = JSON.parse(rawdata);
				data.forEach(x => {
					const area_ = fs.readFileSync(
						path.join(
							__dirname,
							"area",
							id === "Story"
								? map + ".json"
								: `${id.toLowerCase()}-${map}.json`,
						),
						{ encoding: "utf-8" },
					);
					const area = JSON.parse(area_.toString());
					const node = area.stage.find(y => {
						let v = x.text.replace(/Ev([0-9]*)-(.+)/, "$1-$2");
						if (v.startsWith("-")) v = "1" + v;

						if (y.title === id + v) return true;
						return y.name
							? y.name === x.text
							: y.title === x.text;
					});
					if (!node) throw new Error(`${id}-${map} ${x.text}`);

					x.enemy = [];
					node.wave.forEach(wave => {
						x.enemy.push(
							wave.enemylist.map(e => {
								if (!e.index || e.level === 0) return null;

								const enemy = enemies.find(z => z.id === e.index);
								if (enemy) return { id: e.index, lv: e.level };

								const t = et.find(p => p.id === e.index);
								if (!t) throw new Error(`${id} ${map} ${x.text} ${e.index}`);

								const f = enemies.find(z => {
									if (z.name !== t.name) return false;
									// if (z.desc !== t.info.replace(/<br>/g, "\n")) return false;

									if (z.hp[0] !== t.HP.base) return false;
									if (z.atk[0] !== t.ATK.base) return false;
									if (z.def[0] !== t.DEF.base) return false;
									if (z.spd !== t.AGI) return false;
									if (z.cri !== t.CRT) return false;
									if (z.acc !== t.HIT) return false;
									if (z.eva !== t.DOD) return false;

									if (z.res.fire !== t.resist[0]) return false;
									if (z.res.chill !== t.resist[1]) return false;
									if (z.res.thunder !== t.resist[2]) return false;

									return true;
								});
								if (!f) return { id: e.index, lv: e.level };
								return { id: f.id, lv: e.level };
							}),
						);
					});
				});

				ret[id][map] = {
					title: title || `${map} 구역`,
					list: data,
				};
			});

			fs.writeFileSync(
				path.resolve(__dirname, "..", "src", "json", "map.json"),
				JSON.stringify(ret, null, 2),
			);
		} else
			console.log("No data found.");
	});
}

require("./dbsheet/auth")(process);
