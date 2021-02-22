const path = require("path");
const os = require("os");
const fs = require("fs");
const requireFromString = require("require-from-string");

const prependData = [
	`$NODE_ENV: "${process.env.NODE_ENV}";`,
	"@import \"@/theme.scss\";",
	"@import \"@/theme/_base\";",
].join("\n") + "\n";

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

module.exports = {
	configureWebpack: {
		devServer: {
			disableHostCheck: true,
		},
	},
	chainWebpack: config => {
		// import 경로 alias 정의
		config.resolve.alias.set("@", path.resolve(__dirname, "src"));
		config.resolve.alias.set("@@", path.resolve(__dirname, "node_modules"));

		config.output.chunkFilename("js/[name].[chunkhash:8].js");

		// 스크립트 preload, prefetch 태그 삽입 무시
		config.plugins.delete("preload");
		config.plugins.delete("prefetch");
		config.plugins.delete("preload-app");
		config.plugins.delete("prefetch-app");

		// 컴파일시 결과에 포함하지 않을 라이브러리 관리
		config.externals({
			vue: "Vue",
			bootstrap: "bootstrap",
			"bootstrap-vue": "window.BootstrapVue",
		});

		// 소스맵 형식 (기본값은 cheap-module-eval-source-map)
		if (process.env.NODE_ENV === "development")
			config.set("devtool", "source-map");
		else
			config.set("devtool", "none");

		// Cache-Group 설정
		const dbCacheGroups = (() => {
			const ret = {};
			fs.readdirSync(path.join(__dirname, "src", "json"))
				.filter(f => f.endsWith(".ts"))
				.forEach(f => {
					const k = path.basename(f, path.extname(f));
					ret[`db_${k.replace(/-/g, "_")}`] = {
						name: `chunk-db-${k}`,
						test: new RegExp(`[\\\\/]src[\\\\/]json[\\\\/]${f.replace(/\./g, "\\.")}`),
						chunks: "all",
						priority: -5,
						minChunks: 1,
						reuseExistingChunk: true,
						enforce: true,
					};
				});
			// fs.readdirSync(path.join(__dirname, "src", "pages"))
			// 	.filter(f => f.endsWith(".ts") || f.endsWith(".tsx") || f.endsWith(".vue"))
			// 	.forEach(f => {
			// 		const k = path.basename(f, path.extname(f));
			// 		ret[`page_${k}`] = {
			// 			name: `chunk-page-${k}`,
			// 			test: new RegExp(`[\\\\/]src[\\\\/]pages[\\\\/]${f.replace(/(\..+)$/g, "\\.?")}`),
			// 			chunks: "async",
			// 			priority: -5,
			// 			minChunks: 1,
			// 			reuseExistingChunk: true,
			// 			enforce: true,
			// 		};
			// 	});
			return ret;
		})();
		config.optimization.splitChunks({
			automaticNameDelimiter: "-",
			cacheGroups: {
				vendors: {
					name: "chunk-vendors",
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: "initial",
					reuseExistingChunk: true,
				},
				common: {
					name: "chunk-common",
					minChunks: 1,
					priority: -20,
					chunks: "initial",
					reuseExistingChunk: true,
				},
				components: {
					name: "chunk-components",
					test: /[\\/]src[\\/]components[\\/]/,
					priority: -10,
					chunks: "all",
					reuseExistingChunk: true,
					enforce: true,
				},
				libs: {
					name: "chunk-libs",
					test: /[\\/]src[\\/]libs[\\/]/,
					priority: -10,
					chunks: "all",
					reuseExistingChunk: true,
					enforce: true,
				},
				// bootstrap: {
				// 	name: "chunk-bootstrap",
				// 	test: /[\\/]src[\\/]vbootstrap[\\/]/,
				// 	priority: -10,
				// 	chunks: "all",
				// 	reuseExistingChunk: true,
				// 	enforce: true,
				// },
				locale: {
					name: "chunk-locale",
					test: /[\\/]src[\\/]locale/,
					priority: -10,
					chunks: "all",
					reuseExistingChunk: true,
					enforce: true,
				},
				...dbCacheGroups,
			},
		});
		config.plugin("html-app").tap((args) => {
			args[0].chunks.push(
				"chunk-components",
				"chunk-libs",
				"chunk-locale",
				...Object.keys(dbCacheGroups).map(x => dbCacheGroups[x].name),
			);
			return args;
		});

		// Webpack entrypoint size 워닝 무시
		config.performance.hints(false);

		// MiniCssExtractPlugin Order 워닝 무시
		config
			.plugin("extract-css")
			.tap(args => {
				if (args.length > 0) args[0].ignoreOrder = true;
				return args;
			});

		// fork-ts-checker-webpack-plugin 에 있는 memoryLimit 내용 수정
		// 참고링크 https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
		config
			.plugin("fork-ts-checker")
			.tap(args => {
				if (args.length > 0) {
					args[0].workers = Math.floor(os.cpus().length / 4);
					args[0].memoryLimit = 4096;
				}
				return args;
			});
	},

	pages: {
		app: {
			filename: "index.html",
			entry: path.resolve(__dirname, "src", "main.ts"),
		},
	},

	// CSS
	css: {
		requireModuleExtension: true,
		extract: {
			filename: "css/[name].[contenthash:12].css",
		},
		loaderOptions: {
			sass: {
				// CSS 전역 기본값
				additionalData: prependData,
			},
		},
	},
};
if (process.env.NODE_ENV === "production") {
	// module.exports.publicPath = "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com/publish";
	module.exports.publicPath = "/";
}
