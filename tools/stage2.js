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
			"summon",
			"filterable.unit",
			"filterable.equip",
			"filterable.enemy",
			"filterable.facility",
			"unit",
			"equip",
			"enemy",
			"facility",
		].map(x => `stage2/${x}`),
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
