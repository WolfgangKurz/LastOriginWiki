import fs from "fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

// buildtime
(() => {
	const dest = path.resolve(__dirname, "src", "buildtime.ts");

	const code = fs.readFileSync(dest, { encoding: "utf-8" })
		.toString()
		.replace("export default ", "return ");
	const prev = new Function(code)();

	fs.writeFileSync(
		dest,
		(() => {
			const dt = new Date();
			return `// eslint-disable-next-line\nexport default ${JSON.stringify({
				time: dt.getTime(),
				build: prev.build + 1,
			})}`;
		})(),
		"utf-8",
	);
})();

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	const prependData = `${[
		"@use \"sass:math\";",
		`$NODE_ENV: "${process.env.PROD ? "production" : "development"}";`,
		`@import "${path.resolve(__dirname, "src", "themes", "base").replace(/\\/g, "/")}";`,
	].join("\n")}\n`;

	return defineConfig({
		server: {
			fs: {
				allow: [__dirname],
			},
		},
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: prependData,
				},
				scss: {
					additionalData: prependData,
				},
			},
		},
		plugins: [preact()],
		resolve: {
			alias: {
				"@/": `${path.resolve(__dirname, "src")}/`,
			},
		},
	});
};
