const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "source");
const icons = path.join(__dirname, "icons");
const template = fs.readFileSync(path.join(__dirname, "_template.tsx"), "utf-8");

const list = [];
fs.readdirSync(source, { encoding: "utf-8" })
	.filter(x => x.endsWith(".svg"))
	.forEach(x => {
		const input = path.join(source, x);

		const baseName = path.basename(x, ".svg");
		const pascalName = baseName
			.replace(/(\w)(\w*)/g, (p0, p1, p2) => p1.toUpperCase() + p2.toLowerCase())
			.replace(/-/g, "");

		let content = fs.readFileSync(input, { encoding: "utf-8" });
		content = content.replace(/<\/?svg[^>]*>/g, "");

		fs.writeFileSync(
			path.join(icons, pascalName + ".tsx"),
			template.replace(/%content%/g, content)
				.replace(/%icon%/g, baseName)
				.replace(/%icon-pascal%/g, pascalName),
			"utf-8",
		);
		list.push(pascalName);
	});

fs.writeFileSync(
	path.join(__dirname, "index.tsx"),
	`${list.map(x => `import Icon${x} from "./icons/${x}";`).join("\n")}

export {
${list.map(x => `\tIcon${x}`).join(",\n")}
};
`,
	"utf-8",
);
