const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { gzip } = require("node-gzip");
const { zip } = require("lodash");

function size (l) {
	let v = l;
	let lv = 0;
	while (v >= 1000) {
		lv++;
		v /= 1024;
	}

	switch (lv) {
		case 1: return `${parseFloat(v.toFixed(2))} KBs`;
		case 2: return `${parseFloat(v.toFixed(2))} MBs`;
		case 3: return `${parseFloat(v.toFixed(2))} GBs`;
		case 4: return `${parseFloat(v.toFixed(2))} TBs`;
		case 5: return `${parseFloat(v.toFixed(2))} PBs`;
		default: return `${v} bytes`;
	}
}

fs.mkdirSync(path.resolve(__dirname, "dist", "bak"), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, "dist", "bak", "css"), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, "dist", "bak", "js"), { recursive: true });

glob.sync(path.resolve(__dirname, "dist", "**", "*.{css,js}"))
	.forEach(async (x) => {
		fs.copyFileSync(x, x.replace(/dist([\\/])/, "dist$1bak$1"));

		const b = fs.readFileSync(x, { encoding: "utf-8" });
		const zipped = await gzip(b);

		const perc = parseFloat((zipped.length / b.length * 100).toFixed(2));
		console.log(`${path.basename(x)}    ${size(b.length)} => ${size(zipped.length)} (${perc}% from)`);

		fs.writeFileSync(
			x,
			zipped,
			{ encoding: "binary" },
		);
	});
