import fs from "node:fs";
import path from "node:path";

const files = fs.readdirSync(path.resolve(
	__dirname, "..", "..",
	"external", "assets",
	"skin", "banners"
)).map(r => path.basename(r, path.extname(r)));

const content = `// This file has automatically generated from template script
export const SkinBanners: string[] = ${JSON.stringify(files, undefined, 4)};
`;

fs.writeFileSync(
	path.resolve(__dirname, "Const.SkinBanners.ts"),
	content,
	"utf-8",
);
