const Decimal = require("decimal.js");

let prev = 0;
let prevly = "";
const input = `[00:00.00]Title - Singer
[00:00.00]

`
	.split(/[\r\n]/).filter(x => x)
	.map(r => {
		const reg = /^\[([0-9]{2}):([0-9]{2})\.([0-9]{2})\](.*)$/;
		const v = reg.exec(r);
		if (!v) console.log(r);
		const t = Math.max(
			0,
			Decimal.sub(
				Decimal.mul(v[1], 60).add(v[2]).add(`0.${v[3]}`),
				0.76
			).toNumber()
		);
		const ly = v[4];

		if (t - prev > 8 && prevly) {
			const pprev = prev;
			prev = t;
			prevly = ly;
			return [
				{ time: pprev + 5, text: "" },
				{ time: t, text: ly },
			];
		}

		prev = t;
		prevly = ly;
		return { time: t, text: ly };
	}).flat()
	.map(r => JSON.stringify(r));

console.log(input.join(",\n").replace(/"time"/g, "time").replace(/"text"/g, "text"));
