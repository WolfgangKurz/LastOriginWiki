const fs = require("fs");
const requireFromString = require("require-from-string");
import path from "path";

const prependData = `${[
	`$NODE_ENV: "${process.env.NODE_ENV}";`,
	"@import \"@/themes/base\";",
].join("\n")}\n`;

(() => {
	const dest = path.resolve(__dirname, "src", "buildtime.ts");

	let prev = requireFromString(
		fs.readFileSync(dest, { encoding: "utf-8" })
			.toString()
			.replace("export default ", "module.exports = "),
	);
	if (typeof prev === "string")
		prev = { time: prev, build: 0 };

	if (isNaN(prev.build)) prev.build = 0;

	fs.writeFileSync(
		dest,
		(() => {
			const dt = new Date();
			return `// eslint-disable-next-line\nexport default ${JSON.stringify({
				time: dt.getTime(),
				build: prev.build + 1,
			})}`;
		})(),
		{ encoding: "utf-8" },
	);
})();

export default {
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	webpack (config, env, helpers, options) {
		config.output.chunkFilename = "[name].js";

		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "src"),
		};

		if ("style" in config.resolve.alias) delete config.resolve.alias.style;

		config.externals = {
			...config.externals,
			bootstrap: "bootstrap",
		};

		const cssRule = config.module.rules.find(x => x.enforce === "pre" && x.test.toString() === "/\\.s[ac]ss$/");
		if (cssRule)
			cssRule.use[0].options.options.additionalData = prependData;
	},
};
