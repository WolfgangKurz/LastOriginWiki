const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function run (cmd) {
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(stdout);
		});
	});
}

const list =
	[
		...[
			"ai", "enemy",
			"equip",
			"facility",
			"summon",
			"unit", "unit-dialogue", "unit-skill", "unit-skin",
		].map(x => `stage0/${x}`),
	];

(async () => {
	for (const x of list) {
		console.log(x);
		await run(`node ${x}`);
	}
})();

// Stage0 : SpreadSheet -> json (raw)
// Stage1 : SpreadSheet -> single json
// Stage2 : json (raw) -> per json