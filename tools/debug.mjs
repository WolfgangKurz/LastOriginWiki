import path from "path";
import cp from "child_process";
import { fileURLToPath } from "url";

import chalk from "chalk";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5500;

const runCommand = "vite";

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
		chalk.cyan(runCommand),
	].join(""));

	const cmd = "npx.cmd";
	const pr = cp.spawn(cmd, runCommand.split(" "), {
		stdio: "inherit",
		cwd: path.resolve(__dirname, ".."),
	});
	// pr.stdout.on("data", data => console.log(data));
	// pr.stderr.on("data", data => console.log(chalk.red(data)));
	pr.on("error", (err) => console.log(err));
});
