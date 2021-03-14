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
		if (env.isProd)
			config.devtool = false; // disable sourcemaps

		config.performance.hints = false;

		config.output.publicPath = "./";
		config.output.filename = "js/[name].[contenthash:5].js";
		config.output.chunkFilename = "js/chunk.[name].[contenthash:5].js";

		const removes = [];
		config.plugins.forEach((c, i) => {
			if ("location_" in c) { // PrerenderDataExtractPlugin
				removes.splice(0, 0, i);
				return;
			}

			if ("config" in c && "swSrc" in c.config) {
				removes.splice(0, 0, i);
				return;
			}

			if ("options" in c) {
				if ("filename" in c.options && "chunkFilename" in c.options) {
					c.options.filename = "css/[name].[contenthash:5].css";
					c.options.chunkFilename = "css/chunk.[name].[contenthash:5].css";
					return;
				}
				if ("favicon" in c.options && c.options.filename.endsWith("200.html")) { // HtmlWebpackPlugin
					removes.splice(0, 0, i);
					return;
				}
			}
		});
		removes.forEach(i => config.plugins.splice(i, 1));

		// console.log(config);
		// throw "";

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
