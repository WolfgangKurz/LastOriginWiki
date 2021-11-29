import fs from "fs";
import path from "path";
import util from "util";
import { defineConfig } from "vite";
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
	const isProd = mode === "production";
	const isDev = !isProd;

	const prependData = `${[
		"@charset \"UTF-8\";",
		"@use \"sass:math\";",
		`$NODE_ENV: "${mode}";`,
		`@import "${path.resolve(__dirname, "src", "themes", "base").replace(/\\/g, "/")}";`,
	].join("\n")}\n`;

	return defineConfig({
		esbuild: {
			jsxFactory: "h",
			jsxFragment: "Fragment",
			// jsxInject: `import { h, Fragment } from "preact";`,
		},
		build: {
			assetsDir: "build",
			polyfillModulePreload: false,
			reportCompressedSize: false,

			minify: isProd,
			sourcemap: isDev,

			rollupOptions: {
				output: {
					inlineDynamicImports: false,
					manualChunks (id) {
						// entry
						if (id.includes("/src/components/app.")) return undefined;

						// vendor
						if (id.includes("/node_modules/bootstrap")) return "vendor.bootstrap";
						if (id.includes("/node_modules/acorn/") || id.includes("/node_modules/react")) return "vendor.ext";
						if (id.includes("/node_modules/")) return "vendor";

						// components/bootstrap-icon/es/*
						if (id.includes("components/bootstrap-icon/es/")) {
							const _ = "components/bootstrap-icon/es/";
							const idx = id.indexOf(_) + _.length;
							const name = id.substr(idx)[0];
							return `components.bootstrap.icon.${name}`;
						}

						// types & libs -> base
						if (id.includes("/src/types/")) return "base";
						if (id.includes("/src/libs/")) return "base";

						// // components
						if (
							id.includes("/src/components/locale/") ||
							id.includes("/src/components/loader/") ||
							id.includes("/src/components/redirect/")
						) return "components.base";
						if (id.includes("/src/components/bootstrap-")) return "components.bootstrap";
						if (id.includes("/src/components/buff-")) return "components.buff";
						if (id.includes("/src/components/drop-")) return "components.drop";
						if (id.includes("/src/components/equip-")) return "components.equip";
						if (id.includes("/src/components/roguelike-")) return "components.roguelike";
						if (id.includes("/src/components/skill-")) return "components.skill";
						if (id.includes("/src/components/unit-")) return "components.unit";
						if (id.includes("/src/components/popup/")) return "components.popup";
						if (id.includes("/src/components/")) return "components";

						// // routes
						if (id.includes("/src/routes/changelog/changelog/")) return "routes.changelog.changelog";
						if (id.includes("/src/routes/changelog/")) return "routes.changelog";

						if (id.includes("/src/routes/bgm/")) return "routes.bgm";
						if (id.includes("/src/routes/calc/")) return "routes.calc";
						if (id.includes("/src/routes/enemies/")) return "routes.enemy";
						if (id.includes("/src/routes/equips/")) return "routes.equip";
						if (id.includes("/src/routes/eternalwar/")) return "routes.ew";
						if (id.includes("/src/routes/facilities/")) return "routes.facility";
						if (id.includes("/src/routes/roguelike/")) return "routes.roguelike";
						if (id.includes("/src/routes/simulator/")) return "routes.simulator";
						if (id.includes("/src/routes/units/")) return "routes.unit";
						if (id.includes("/src/routes/worlds/")) return "routes.worlds";
						if (id.includes("/src/routes/")) return "routes";
					},
				},
			},
		},
		server: {
			fs: {
				allow: [__dirname],
			},
		},
		css: {
			preprocessorOptions: {
				css: {
					charset: false,
				},
				sass: {
					charset: false,
					additionalData: prependData,
				},
				scss: {
					charset: false,
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
