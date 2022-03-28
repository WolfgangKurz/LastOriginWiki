const process = require("process");
const fs = require("fs");
const path = require("path");

const mode = process.argv[2];

const staging = mode === "dev";

console.log("Set STAGING ", staging);
fs.writeFileSync(path.resolve(__dirname, "STAGING.js"), `module.exports = ${staging ? "true" : "false"};`, "utf-8");
