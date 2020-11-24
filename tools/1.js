const fs = require("fs");
const path = require("path");

const https = require("https");
const req = async (url) => new Promise((resolve, reject) => {
	https
		.request(url, { method: "GET" }, (res) => {
			const buffer = [];
			res
				.on("data", chunk => buffer.push(chunk))
				.on("end", () => {
					try {
						const body = Buffer.concat(buffer).toString();
						resolve(JSON.parse(body.substr(body.indexOf("{"))));
					} catch (e) {
						reject(e);
					}
				})
				.on("error", e => reject(e));
		})
		.on("error", e => reject(e))
		.end();
});

(async () => {
	for (let area = 1; area <= 8; area++) {
		const url = "https://lastoriginmap.github.io/data/data-area" + area + ".min.json";

		const json = await req(url);
		fs.writeFileSync(
			path.join(__dirname, "area", area + ".json"),
			JSON.stringify(json, undefined, 4),
			{ encoding: "utf-8" },
		);
	}
})();

(async () => {
	for (let ev = 1; ev <= 8; ev++) {
		for (let area = 1; area <= 3; area++) {
			const url = "https://lastoriginmap.github.io/data/data-areaEv" + ev + area + ".min.json";

			try {
				const json = await req(url);
				fs.writeFileSync(
					path.join(__dirname, "area", `ev${ev}-${area}.json`),
					JSON.stringify(json, undefined, 4),
					{ encoding: "utf-8" },
				);
			} catch { }
		}
	}
})();

(async () => {
	const url = "https://lastoriginmap.github.io/data/data-enemy.min.json";

	try {
		const json = await req(url);
		fs.writeFileSync(
			path.join(__dirname, "area", "enemy.json"),
			JSON.stringify(json, undefined, 4),
			{ encoding: "utf-8" },
		);
	} catch { }
})();
