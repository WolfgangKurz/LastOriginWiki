const fs = require("fs");
const path = require("path");
const glob = require("glob");

const locale_ = JSON.parse(fs.readFileSync("D:/Develop/lo-tactical/external/json/locale/KR.json", "utf-8"));
const locale = {};

Object.keys(locale_)
	.filter(k => k.startsWith("UNIT_"))
	.forEach(k => {
		locale[k] = locale_[k];
		locale[k.toUpperCase()] = locale_[k];
	});

const inputDir = "D:/Develop/lo-tactical/external/assets/webm/HD";
const outDir = "D:/Develop/라투디";

locale["PECS_ElvenForestMaker"] = locale["PECS_ElvenForestmaker"];

function fix (str) {
	return str.replace(/[<>?:/]/g, p0 => {
		switch (p0) {
			case "<": return "＜";
			case ">": return "＞";
			case "?": return "？";
			case ":": return "：";
			case "/": return "／";

			default:
				return p0;
		}
	});
}

glob.sync(path.join(inputDir, "*.webm"))
	.forEach(x => {
		try {
			const name = path.basename(x, path.extname(x));

			const uid = name.replace(/^([^_]+_[^_]+).+$/, "$1");
			const after = name.substring(uid.length + 1);

			const skinid = after.replace(/^([0-9]+).+/, "$1");
			const onestore = after.includes("_O");
			const damaged = after.includes("_D");
			const simple = after.includes("_S");

			const outname = fix(locale[`UNIT_${uid.toUpperCase()}`]);
			const skin = skinid > 0
				? " - " + fix(locale[`UNIT_SKIN_${uid.toUpperCase()}_${skinid}`])
				: "";

			const file = path.join(
				outDir,
				outname,
				onestore ? "원스토어" : "구글",
				damaged
					? simple
						? `[${skinid}] ${outname}${skin} - 중파, 소품 가리기`
						: `[${skinid}] ${outname}${skin} - 중파`
					: simple
						? `[${skinid}] ${outname}${skin} - 소품 가리기`
						: `[${skinid}] ${outname}${skin}`,
			) + ".webm";
			const dir = path.dirname(file);

			if (!fs.existsSync(dir))
				fs.mkdirSync(dir, { recursive: true });

			if (fs.existsSync(file))
				return;

			fs.copyFileSync(x, file);
		} catch (e) {
			console.log(x);
			throw e;
		}
	});
