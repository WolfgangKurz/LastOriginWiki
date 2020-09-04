const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const unit = require("../src/json/unit.json");
const equip = require("../src/json/equip.json");

class EntitySource {
	constructor (source) {
		this.normalPostfix = "";
		this.sidePostfix = "B";
		this.exPostfix = "Ex";
		this.clgPostfix = "C";

		this.source = source;
	}

	get Parts () {
		return this.source.split(":");
	}

	// -------------- 교환소
	/** 교환소 교환 획득 여부 */
	get IsExchange () {
		return this.Parts.includes("Exc");
	}

	/** 월간 교환소 획득 여부 (전투원/장비 탭) */
	get IsMonthly () {
		return this.IsExchange && this.Parts.length === 3;
	}

	/** 월간 교환소 정보 (전투원/장비 탭) */
	get MonthlyData () {
		if (!this.IsMonthly) return null;

		return {
			year: parseInt(this.Parts[1], 10),
			month: parseInt(this.Parts[2], 10),
		};
	}

	/** 이벤트 교환소 교환에 필요한 자원 및 수량 */
	get ExchangePrice () {
		if (!this.IsEvent || !this.IsExchange) return null;

		const offset = this.Parts.findIndex(x => x === "Exc");
		return {
			item: this.Parts[offset + 1],
			value: parseInt(this.Parts[offset + 2], 10),
		};
	}

	get ExchangeItemName () {
		const exc = this.ExchangePrice;
		if (!exc) return "";

		switch (exc.item) {
			case "FixMat": return "수복 자재";
			case "FixTool": return "수복 공구";
			case "WorldTreeSeed": return "세계수의 씨앗";
			case "WorldTreeTwig": return "세계수의 가지";
			case "WorldTreeLeaf": return "세계수의 잎";
		}
		return "???";
	}
	// -------------- 교환소

	// -------------- 이벤트
	/** 이벤트 획득 여부 */
	get IsEvent () {
		return this.Parts[0] === "Ev";
	}

	/** 이벤트 이름 */
	get EventName () {
		if (!this.IsEvent) return "";

		switch (this.Parts[1]) {
			case "OrcaFix":
				return "오르카호를 수복하라!";
			case "FairyAria":
				return "요정 마을의 아리아";
		}
		return this.Parts[1];
	}

	/** 부수를 포함한 이벤트 이름 */
	get FullEventName () {
		if (!this.IsEvent) return "";

		const part = this.Parts[2];
		if (part) return `${this.EventName} (${part}부)`;
		return this.EventName; // 부수가 없으면 이벤트 이름 그대로
	}
	// -------------- 이벤트

	// -------------- 맵
	get IsSideMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes(this.sidePostfix);
		else
			return this.Parts[0].includes(this.sidePostfix);
	}

	get IsExMap () {
		if (!this.IsMap) return false;
		if (this.IsEvent) // 이벤트 맵인 경우는 지역이 4번째에 위치
			return this.Parts[3].includes(this.exPostfix);
		else
			return this.Parts[0].includes(this.exPostfix);
	}

	get IsMap () {
		return !this.IsEternalWar && !this.IsApocrypha && !this.IsExchange;
	}

	get IsReward () {
		if (this.IsEvent)
			return this.Parts[3][0] === "*";
		return this.Parts[0][0] === "*";
	}

	get Map () {
		const index = this.IsEvent ? 3 : 0;
		return this.IsReward ? this.Parts[index].substr(1) : this.Parts[index];
	}
	// -------------- 맵

	// -------------- 외전
	get IsApocrypha () {
		return this.Parts[0] === "Apo";
	}

	get ApocryphaUnit () {
		if (!this.IsApocrypha) return 0;
		return parseInt(this.Parts[1], 10);
	}

	get ApocryphaNumber () {
		if (!this.IsApocrypha) return 0;
		if (!this.Parts[2]) return 0;
		return parseInt(this.Parts[2], 10);
	}
	// -------------- 외전

	// -------------- 영전
	get IsEternalWar () {
		return this.Parts[0] === "EternalWar";
	}

	get EternalWarPrice () {
		if (!this.IsEternalWar) return 0;
		return parseInt(this.Parts[1], 10);
	}
	// -------------- 영전

	// -------------- 한정
	get IsLimited () {
		return this.Parts[0] === "Limited";
	}
	// -------------- 한정

	setNormalPostfix (postfix) {
		if (postfix) this.normalPostfix = postfix;
	}

	setSidePostfix (postfix) {
		if (postfix) this.sidePostfix = postfix;
	}

	setExPostfix (postfix) {
		if (postfix) this.exPostfix = postfix;
	}

	setChallengePostfix (postfix) {
		if (postfix) this.clgPostfix = postfix;
	}

	toString () {
		let output = "";

		if (this.IsLimited)
			output += "Limit";

		if (this.IsEternalWar)
			output += "EW";
		else if (this.IsApocrypha)
			output += "Apo";
		else if (this.IsExchange) {
			if (this.IsMonthly)
				output += "MExc";
			else if (this.IsEvent)
				output += "EExc";
			else
				output = "Exc"; // ???
		} else if (this.IsEvent) {
			if (this.IsReward)
				output += "*Ev";
			else
				output += "Ev";

			output += this.Map;
		} else
			output += this.Map;

		return output;
	}
}

const BuildDrops = (name, id, map, node, type, postfix) => {
	const reward = {
		units: [],
		equips: [],
	};
	const units = [];
	const equips = [];

	unit.forEach(x => {
		x.source.forEach(y => {
			y.forEach(z => {
				const source = new EntitySource(z);
				if (type === "N") source.setNormalPostfix(postfix);
				else if (type === "B") source.setSidePostfix(postfix);
				else if (type === "Ex") source.setExPostfix(postfix);
				else if (type === "C") source.setChallengePostfix(postfix);

				if (!source.IsMap) return;

				if (type === "N" && (source.IsSideMap || source.IsExMap)) return;
				if (type === "B" && !source.IsSideMap) return;
				if (type === "Ex" && !source.IsExMap) return;

				if (source.Map !== name) return;

				if (source.IsEvent) {
					if (source.Parts[1] !== id) return; // 다른 이벤트

					if (source.IsReward)
						reward.units.push(x.id);
					else
						units.push(x.id);
				} else {
					if (source.IsReward)
						reward.units.push(x.id);
					else
						units.push(x.id);
				}
			});
		});
	});
	equip.forEach(x => {
		x.source.forEach(y => {
			y.forEach(z => {
				const source = new EntitySource(z);
				if (type === "N") source.setNormalPostfix(postfix);
				else if (type === "B") source.setSidePostfix(postfix);
				else if (type === "Ex") source.setExPostfix(postfix);
				else if (type === "C") source.setChallengePostfix(postfix);

				if (!source.IsMap) return;

				if (type === "N" && (source.IsSideMap || source.IsExMap)) return;
				if (type === "B" && !source.IsSideMap) return;
				if (type === "Ex" && !source.IsExMap) return;
				if (type === "C") return; // 챌린지는 드랍 없다고 가정

				if (source.Map !== name) return;

				if (source.IsEvent) {
					if (source.Parts[1] !== id) return; // 다른 이벤트

					if (source.IsReward)
						reward.equips.push(x.name);
					else
						equips.push(x.name);
				} else {
					if (source.IsReward)
						reward.equips.push(x.name);
					else
						equips.push(x.name);
				}
			});
		});
	});

	const r = {
		SS: 0,
		S: 1,
		A: 2,
		B: 3,
		ss: 0,
		s: 1,
		a: 2,
		b: 3,
	};
	return {
		reward: {
			...reward,
			units: reward.units.sort((x, y) => r[unit[x].rarity] - r[unit[y].rarity]),
		},
		units: units.sort((x, y) =>
			r[unit.find(_ => _.id === x).rarity] -
			r[unit.find(_ => _.id === y).rarity],
		),
		equips: equips.sort((a, b) => {
			const _a = a.substr(a.lastIndexOf("_") + 1);
			const _b = b.substr(b.lastIndexOf("_") + 1);
			return r[_a] - r[_b];
		}),
	};
};

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
						drops: BuildDrops(`${prefix}-${i + 1}${postfix[0]}`, id, map, i, "N", postfix[0]),
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
									drops: BuildDrops(`${prefix}-${i}${postfix[1]}`, id, map, i, "B", postfix[1]),
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
								drops: BuildDrops(`${prefix}-${x}${postfix[1]}`, id, map, x, "B", postfix[1]),
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
							let p = x.split("~");
							let base;

							if (p[0].includes(">")) {
								base = parseInt(p[0].substr(p[0].indexOf(">") + 1));
								p = p.map(_ => _.includes(">") ? parseInt(_.substr(0, _.indexOf(">"))) : parseInt(_, 10));
							} else {
								p = p.map(_ => parseInt(_, 10));
								base = p[0];
							}

							for (let i = p[0]; i <= p[1]; i++) {
								ret[id][map].push({
									type: "Ex",
									name: `${prefix}-${i}${postfix[2]}`,
									pos: [base + (i - p[0]) - 1, 2],
									prev: i > p[0]
										? ret[id][map][
											ret[id][map].length - 1
										].pos
										: undefined,
									drops: BuildDrops(`${prefix}-${i}${postfix[2]}`, id, map, i, "Ex", postfix[2]),
								});
							}
						} else {
							let p;
							let base;
							if (x.includes(">")) {
								base = parseInt(x.substr(x.indexOf(">") + 1), 10);
								p = x.substr(0, x.indexOf(">"));
							} else {
								p = parseInt(x, 10);
								base = p;
							}

							ret[id][map].push({
								type: "Ex",
								name: `${prefix}-${x}${postfix[2]}`,
								pos: [base - 1, 2],
								drops: BuildDrops(`${prefix}-${p}${postfix[2]}`, id, map, x, "Ex", postfix[2]),
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
							drops: BuildDrops(`${prefix}-${p[0]}${postfix[3]}`, id, map, p[0], "C", postfix[3]),
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
