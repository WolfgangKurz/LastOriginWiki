const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const { default: Decimal } = require("decimal.js");

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
					let area_;

					try {
						area_ = fs.readFileSync(
							path.join(
								__dirname,
								"area",
								id === "Story"
									? map + ".json"
									: `${id.toLowerCase()}-${map}.json`,
							),
							{ encoding: "utf-8" },
						);
					} catch {
						area_ = "";
					}

					if (area_) {
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

						x.wave = [];
						node.wave.forEach((wave, widx) => {
							x.wave.push({
								exp: x.exp[widx],
								enemy: wave.enemylist.map(e => {
									if (!e.index || e.level === 0) return null;

									const enemy = enemies.find(z => z.id === e.index);
									if (enemy) return { id: e.index, lv: e.level };

									const t = et.find(p => p.id === e.index);
									if (!t) throw new Error(`${id} ${map} ${x.text} ${e.index}`);

									const f = enemies.find(z => {
										if (z.id.includes("_EW")) return false; // 영전 적은 아니기 때문에

										if (z.name !== t.name) return false;
										// if (z.desc !== t.info.replace(/<br>/g, "\n")) return false;

										const check = (bi, bp) => {
											// Base 값 같은 경우
											if (Math.floor(bi.base) === Math.floor(bp[0])) return true;

											// Base와 Base+Per*lv 같은 경우
											if (
												Math.floor(bi.base) ===
												Decimal.add(bp[0], Decimal.mul(bp[1], e.level - 1)).floor()
													.toNumber()
											) return true;

											// Base와 Base+[Per]*lv 같은 경우
											if (
												Math.floor(bi.base) ===
												Decimal.add(bp[0], Decimal.floor(bp[1]).mul(e.level - 1))
													.floor()
													.toNumber()
											) return true;

											// Base+Inc*lv와 Base+Per*lv 같은 경우
											if (
												Decimal.add(bi.base, Decimal.mul(bi.increment, e.level - 1))
													.floor()
													.toNumber() ===
												Decimal.add(bp[0], Decimal.mul(bp[1], e.level - 1))
													.floor()
													.toNumber()
											) return true;

											// Base+[Inc]*lv와 Base+[Per]*lv 같은 경우
											if (
												Decimal.add(bi.base, Decimal.floor(bi.increment).mul(e.level - 1))
													.floor()
													.toNumber() ===
												Decimal.add(bp[0], Decimal.mul(bp[1], e.level - 1))
													.floor()
													.toNumber()
											) return true;

											return false;
										};

										if (!check(t.HP, z.hp)) return false;
										if (!check(t.ATK, z.atk)) return false;
										if (!check(t.DEF, z.def)) return false;

										if (z.spd !== t.AGI) return false;
										if (z.cri !== t.CRT) return false;
										if (z.acc !== t.HIT) return false;
										if (z.eva !== t.DOD) return false;

										// if (z.res.fire !== t.resist[0]) return false;
										// if (z.res.chill !== t.resist[1]) return false;
										// if (z.res.thunder !== t.resist[2]) return false;

										return true;
									});
									if (!f) return { id: e.index, lv: e.level };
									return { id: f.id, lv: e.level };
								}),
								drops: x.drops[widx],
							});
						});
						delete x.exp;
						delete x.drops;
					} else {
						x.wave = [];
						x.drops.forEach((wave, widx) => {
							x.wave.push({
								exp: x.exp[widx],
								enemy: [],
								drops: x.drops[widx],
							});
						});
						delete x.exp;
						delete x.drops;
					}
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
