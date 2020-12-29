const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { gzip } = require("node-gzip");

fs.mkdirSync(path.resolve(__dirname, "dist", "bak"), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, "dist", "bak", "css"), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, "dist", "bak", "js"), { recursive: true });

glob.sync(path.resolve(__dirname, "dist", "**", "*.{css,js}"))
	.forEach(async (x) => {
		fs.copyFileSync(x, x.replace(/dist([\\/])/, "dist$1bak$1"));

		const b = fs.readFileSync(x, { encoding: "utf-8" });
		const zipped = await gzip(b);

		fs.writeFileSync(
			x,
			zipped,
			{ encoding: "binary" },
		);
	});
