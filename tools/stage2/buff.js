const fs = require("fs");
const path = require("path");
const rmfr = require("rmfr");

const sourceDir = path.resolve(__dirname, "..", "..", "db");
const targetDir = path.resolve(__dirname, "..", "..", "external", "json");

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(
	path.join(sourceDir, "buffs.json"),
	path.join(targetDir, "buffs.json"),
);
