const path = require("path");
const os = require("os");

const prependData = [
	`$NODE_ENV: "${process.env.NODE_ENV}";`,
	"@import \"@/theme.scss\";",
].join("\n") + "\n";

module.exports = {
	chainWebpack: config => {
		// import 경로 alias 정의
		config.resolve.alias.set("@", path.resolve(__dirname, "src"));

		// 스크립트 preload, prefetch 태그 삽입 무시
		config.plugins.delete("preload");
		config.plugins.delete("prefetch");

		// 소스맵 형식 (기본값은 cheap-module-eval-source-map)
		if (process.env.NODE_ENV === "development")
			config.set("devtool", "source-map");
		else
			config.set("devtool", "none");

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
			filename: "css/[name].css",
		},
		loaderOptions: {
			sass: {
				// CSS 전역 기본값
				prependData,
			},
		},
	},
};
if (process.env.NODE_ENV === "production")
	module.exports.publicPath = "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com/publish";
