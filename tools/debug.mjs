import path from "path";
import cp from "child_process";
import { fileURLToPath } from "url";

import chalk from "chalk";

import express from "express";
import cors from "cors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = 5500;
const runCommand = "yarn vite";
express()
	.use(cors())
	.use(express.static(path.resolve(__dirname, "..", "external")))
	.listen(port, () => {
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
