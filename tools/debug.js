const cp = require("child_process");
const express = require("express");
const chalk = require("chalk");
const path = require("path");

const app = express();
const port = 5500;

app.all("/*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});
app.use(express.static(path.resolve(__dirname, "..", "external")));
app.listen(port, () => {
	console.log([
		chalk.red("External server listening"),
		" at ",
		chalk.cyan(`http://localhost:${port}`),
	].join(""));

	console.log([
		"run ",
		chalk.cyan("preact watch"),
	].join(""));

	const cmd = "npx.cmd";
	const pr = cp.spawn(cmd, ["preact", "watch"], {
		stdio: "inherit",
		cwd: path.resolve(__dirname, ".."),
	});
	// pr.stdout.on("data", data => console.log(data));
	// pr.stderr.on("data", data => console.log(chalk.red(data)));
	pr.on("error", (err) => console.log(err));
});
