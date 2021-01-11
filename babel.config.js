// process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
module.exports = {
	presets: [
		"@vue/cli-plugin-babel/preset",
	],
	plugins: ["@babel/plugin-syntax-dynamic-import"],
	ignore: ["src/json"],
};
