const fs = require("fs");
const path = require("path");

const dir = __dirname;

const source = path.join(dir, "source");
const icons = path.join(dir, "icons");

const dirs = fs.readdirSync(source, { encoding: "utf-8" })
	.filter(x => x.endsWith(".svg"));
for (const x of dirs) {
	const input = path.join(source, x);
	const output = path.join(icons, `${path.basename(x, ".svg")}.tsx`);
	let content = fs.readFileSync(input, { encoding: "utf-8" });
	content = content.replace(/<\/?svg[^>]*>/g, "");
	content = `/* eslint-disable */\nimport { Fragment, h } from "preact";\nconst Icon = <Fragment>${content}</Fragment>;\nexport default Icon;`;
	fs.writeFileSync(output, content, { encoding: "utf-8" });
}
