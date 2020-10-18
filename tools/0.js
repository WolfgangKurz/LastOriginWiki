const https = require("https");
const req = async (url) => new Promise((resolve, reject) => {
	https
		.request(url, { method: "GET" }, (res) => {
			const buffer = [];
			res
				.on("data", chunk => buffer.push(chunk))
				.on("end", () => {
					const body = Buffer.concat(buffer).toString();
					resolve(JSON.parse(body.substr(body.indexOf("{"))));
				})
				.on("error", e => reject(e));
		})
		.on("error", e => reject(e))
		.end();
});

(async () => {
	for (let area = 31; area <= 31; area++) {
		const url = "https://lastoriginmap.github.io/data/data-areaEv" + area + ".min.json";

		const json = await req(url);

		json.stage.sort((a0, b0) => {
			const a = a0.name || a0.title;
			const b = b0.name || b0.title;

			if (a.includes("Ex")) {
				if (b.includes("Ex"))
					return b - a;
				return 1;
			} else if (a.includes("B")) {
				if (b.includes("Ex"))
					return -1;
				else if (b.includes("B"))
					return b - a;
				return 1;
			} else {
				if (b.includes("Ex") || b.includes("B"))
					return -1;
				return b - a;
			}
		});

		console.log(
			json.stage.map(z =>
				z.wave.map(x => x.enemylist.filter(y => y.level > 0).reduce((p, c) => p + 1, 0)).join("\t"),
			).join("\n"),
		);
	}
})();
