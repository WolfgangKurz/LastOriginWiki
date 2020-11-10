const path = require("path");
const os = require("os");
const fs = require("fs");

const prependData = [
	`$NODE_ENV: "${process.env.NODE_ENV}";`,
	"@import \"@/theme.scss\";",
	"@import \"@/theme/_base\";",
].join("\n") + "\n";

fs.writeFileSync(
	path.resolve(__dirname, "src", "buildtime.ts"),
	(() => {
		const pad = (x, y) => x.toString().padStart(y, "0");

		const dt = new Date();
		const y = dt.getUTCFullYear();
		const m = dt.getUTCMonth() + 1;
		const d = dt.getUTCDate();
		const h = dt.getUTCHours();
		const i = dt.getUTCMinutes();
		const s = dt.getUTCSeconds();
		return `export default "UTC ${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)} ${pad(h, 2)}:${pad(i, 2)}:${pad(s, 2)}";\n`;
	})(),
	{ encoding: "utf-8" },
);

module.exports = {
	configureWebpack: {
		devServer: {
			disableHostCheck: true,
		},
	},
	chainWebpack: config => {
		// import 경로 alias 정의
		config.resolve.alias.set("@", path.resolve(__dirname, "src"));

		// 스크립트 preload, prefetch 태그 삽입 무시
		config.plugins.delete("preload");
		config.plugins.delete("prefetch");
		config.plugins.delete("preload-app");
		config.plugins.delete("prefetch-app");

		// 소스맵 형식 (기본값은 cheap-module-eval-source-map)
		if (process.env.NODE_ENV === "development")
			config.set("devtool", "source-map");
		else
			config.set("devtool", "none");

		// Cache-Group 설정
		// if (false) {
		// 	config.optimization.splitChunks({
		// 		cacheGroups: {
		// 		// default: false,
		// 		/*
		// 			components: {
		// 				name: "components",
		// 				chunks: "all",
		// 				test: /[\\/]src[\\/]components[\\/]/,
		// 				reuseExistingChunk: true,
		// 				enforce: true,
		// 			},
		// 			vendors: {
		// 				name: "vendors",
		// 				chunks: "all",
		// 				test: /[\\/]node_modules[\\/]/,
		// 				enforce: true,
		// 				reuseExistingChunk: true,
		// 			},
		// 			*/
		// 			db: {
		// 				name: "db",
		// 				chunks: "all",
		// 				test: /[\\/]src[\\/]json[\\/]/,
		// 				reuseExistingChunk: true,
		// 				enforce: true,
		// 			},
		// 		/*
		// 			common: {
		// 				name: "common",
		// 				chunks: "all",
		// 				minChunks: 40,
		// 				reuseExistingChunk: true,
		// 				enforce: true,
		// 			},
		// 			*/
		// 		},
		// 		automaticNameDelimiter: "-",
		// 	});
		// }

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
					args[0].memoryLimit = 2048;
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
if (process.env.NODE_ENV === "production")
	module.exports.publicPath = "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com/publish";
