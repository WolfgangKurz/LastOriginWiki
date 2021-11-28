const fs = require("fs");
const path = require("path");

const acorn = require("acorn");
const jsx = require("acorn-jsx");
const astring = require("astring");
const astringJSX = require("./jsx");

const babel = require("@babel/core");

function toCamelCase (str) {
	return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const generate = (ast, options) => {
	return astring.generate(ast, Object.assign({
		generator: Object.assign(
			{},
			astring.GENERATOR,
			astringJSX,
		),
		options,
	}));
};

const parsed = acorn.Parser.extend(jsx())
	.parse(fs.readFileSync(path.resolve(__dirname, "..", "..", "src", "components", "bootstrap-icon", "icons.old.tsx"), "utf-8"), {
		ecmaVersion: "latest",
		sourceType: "module",
	});

const imports = [];
parsed
	.body[1]
	.declaration
	.properties
	.forEach(prop => {
		const k = prop.key.value;
		// console.log(`- ${k}`);
		const _v = `import { h, Fragment } from "preact";\nexport default ${generate(prop.value)}`;
		const v = babel.transformSync(_v, {
			plugins: [
				["@babel/plugin-transform-react-jsx", {
					pragma: "h",
					pragmaFrag: "Fragment",

					throwIfNamespace: false, // defaults to true
					// runtime: "automatic", // defaults to classic
					// importSource: "preact" // defaults to react
				}],
			],
		}).code;
		imports.push(`import ${toCamelCase(k)} from "./es/${k}";`);
		prop.value = acorn.parse(toCamelCase(k)/*`import("./es/${k}")`*/, { ecmaVersion: "latest" }).body[0].expression;

		fs.writeFileSync(
			path.resolve(__dirname, "..", "..", "src", "components", "bootstrap-icon", "es", `${k}.ts`),
			`${v}\n`,
			"utf-8",
		);
	});
// console.log(generate(parsed));
fs.writeFileSync(
	path.resolve(__dirname, "..", "..", "src", "components", "bootstrap-icon", "icons2.ts"),
	imports.join("\n") + generate(parsed),
	"utf-8",
);
