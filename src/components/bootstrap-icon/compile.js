const fs = require("fs");
const path = require("path");

const dir = __dirname;

const source = path.join(dir, "source");
// const icons = path.join(dir, "icons");
const output = path.join(dir, "icons.tsx");

let result = "/* eslint-disable */\n";
result += "export default {\n";

const dirs = fs.readdirSync(source, { encoding: "utf-8" })
	.filter(x => x.endsWith(".svg"));
for (const x of dirs) {
	const base = path.basename(x, ".svg");
	const input = path.join(source, x);

	let content = fs.readFileSync(input, { encoding: "utf-8" });
	content = content.replace(/<\/?svg[^>]*>/g, "");

	if (content.length - content.replaceAll("/>", "").length > 2)
		result += `"${base}": <>${content}</>,\n`;
	else
		result += `"${base}": ${content.trim()},\n`;
}
result += "};\n";

fs.writeFileSync(output, result, { encoding: "utf-8" });
