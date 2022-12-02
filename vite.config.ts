import fs from "fs";
import path from "path";
import util from "util";

import glob from "glob";
import hash from "hash.js";
import deepmerge from "deepmerge";

import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

// buildtime
(() => {
	const dest = path.resolve(__dirname, "src", "buildtime.ts");
	const destJson = path.resolve(__dirname, "external", "json", "buildtime.json");

	const code = fs.readFileSync(dest, { encoding: "utf-8" })
		.toString()
		.replace("export default ", "return ");
	const prev = new Function(code)();
	const buildNo = prev.build + 1;

	fs.writeFileSync(
		dest,
		(() => {
			const dt = new Date();
			return `// eslint-disable-next-line\nexport default ${JSON.stringify({
				time: dt.getTime(),
				build: buildNo,
			})}`;
		})(),
		"utf-8",
	);
	fs.writeFileSync(
		destJson,
		JSON.stringify(buildNo),
		"utf-8",
	);
})();

// json hash
(() => {
	interface DBHashType {
		[K: string]: string | DBHashType;
	}

	const jsonDir = path.resolve(__dirname, "external", "json");
	const list = (() => {
		const baseDir = path.resolve(__dirname, "external", "json");
		const globPath = path.join(baseDir, "**", "*.json");

		return glob.sync(globPath.replace(/\\/g, "/"))
			.filter(f => !f.endsWith("/buildtime.json"))
			.map(f => {
				const rel = path.relative(baseDir, f).replace(/\\/g, "/");
				return `!/${rel.substring(0, rel.length - 5)}`;
			});
	})();

	let outs: DBHashType = {};
	list.forEach(item => {
		const _item = item.substring(2);
		const file = path.resolve(jsonDir, `${_item}.json`);
		if (!fs.existsSync(file)) return;

		const tree = ((value: string) => {
			const parts = _item.split("/");
			const root: DBHashType = {};
			let target = root;

			for (let i = 0; i < parts.length; i++) {
				const p = parts[i];

				if (i === parts.length - 1) // end of parts
					target[p] = value;
				else
					target = target[p] = {};
			}

			return root;
		})(
			hash.sha1()
				.update(fs.readFileSync(file, "utf-8"))
				.digest("hex")
				.substring(0, 8),
		);

		outs = deepmerge(outs, tree);
	});

	const output = [
		"// Content automatically generated",
		"export interface DBHashType { [K: string]: string | DBHashType; }",
		`export default ${JSON.stringify(outs, undefined, "\t")} as DBHashType;`,
	].join("\n");

	fs.writeFileSync(
		path.resolve(__dirname, "src", "components", "loader", "hash.ts"),
		output,
		"utf-8",
	);
})();

export default ({ mode }) => {
	const viteEnv = loadEnv(mode, process.cwd());

	const isProd = mode === "production";
	const isDev = !isProd;

	const prependData = `${[
		"@charset \"UTF-8\";",
		"@use \"sass:math\";",
		"@use \"sass:list\";",
		"@use \"sass:map\";",
		`$NODE_ENV: "${mode}";`,
		`$LOCALHOST: "${viteEnv.VITE_LOCALHOST || ""}:${viteEnv.VITE_ASSET_PORT}";`,
		`@import "${path.resolve(__dirname, "src", "themes", "base").replace(/\\/g, "/")}";`,
	].join("\n")}\n`;

	return defineConfig({
		esbuild: {
			jsxFactory: "h",
			jsxFragment: "Fragment",
			// jsxInject: `import { h, Fragment } from "preact";`,
			logOverride: {
				"this-is-undefined-in-esm": "silent",
			},
		},
		build: {
			assetsDir: "build",
			reportCompressedSize: false,
			modulePreload: { polyfill: false },

			minify: isProd,
			sourcemap: isDev,

			rollupOptions: {
				output: {
					inlineDynamicImports: false,
					manualChunks (id) {
						// entry
						if (
							id.includes("/src/components/app.") ||
							id.includes("/src/components/dynamic-route/")
						) return undefined;

						// three.js vendor
						// if (id.includes("/node_modules/three/src/core/")) return "vendor.three.core";
						// if (id.includes("/node_modules/three/src/math/")) return "vendor.three.math";
						// if (id.includes("/node_modules/three/src/materials/")) return "vendor.three.mat";
						// if (id.includes("/node_modules/three/src/geometries/")) return "vendor.three.geo";
						// if (id.includes("/node_modules/three/src/objects/")) return "vendor.three.obj";
						// if (id.includes("/node_modules/three/src/textures/")) return "vendor.three.tex";
						// if (id.includes("/node_modules/three/src/renderers/")) return "vendor.three.ren";
						// if (id.includes("/node_modules/three/examples/")) return "vendor.three.ext";
						if (id.includes("/node_modules/three/")) return "vendor.three";

						// vendor
						if (id.includes("/node_modules/preact-transition")) return "vendor.transition";
						if (id.includes("/node_modules/html2canvas/")) return "vendor.html2canvas";
						if (id.includes("/node_modules/bootstrap")) return "vendor.bootstrap";
						if (id.includes("/node_modules/react")) return "vendor.react";
						if (id.includes("/node_modules/@esotericsoftware/")) return "vendor.spine";
						if (id.includes("/node_modules/@popperjs/")) return "vendor.popperjs";
						if (id.includes("/node_modules/graphlib/")) return "vendor.graphlib";
						if (id.includes("/node_modules/lodash/")) return "vendor.lodash";
						if (id.includes("/node_modules/mermaid/")) return "vendor.mermaid";
						if (id.includes("/node_modules/dagre")) return "vendor.mermaid.dagre";
						if (id.includes("/node_modules/d3")) return "vendor.mermaid.d3";
						if (id.includes("/node_modules/")) return "vendor";

						// components/bootstrap-icon/es/*
						if (id.includes("/components/bootstrap-icon/es/")) {
							const _ = "/components/bootstrap-icon/es/";
							const idx = id.indexOf(_) + _.length;
							const name = id.substring(idx)[0];
							// return `components.bootstrap.icon.${name}`;
							return `cbi.${name}`;
						}

						// types & libs & loader hash -> base
						if (id.includes("/src/types/")) return "base";
						if (id.includes("/src/libs/")) return "base";
						if (id.includes("/src/components/loader/hash")) return "base";

						// external -> each file
						if (id.includes("/src/external/")) {
							const _ = "/src/external/";
							const idx = id.indexOf(_) + _.length;
							const name = id.substring(idx, id.indexOf("/", idx));
							return `external.${name}`;
						}

						// components
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
						if (id.includes("/src/routes/changelog/changelog/")) {
							const y = id.replace(/.*\/src\/routes\/changelog\/changelog\/([0-9]+).*/g, "$1");
							return `routes.changelog.${y}`;
						}
						if (id.includes("/src/routes/changelog/")) return "routes.changelog";

						if (id.includes("/src/routes/")) {
							const y = id.replace(/.*\/src\/routes\/([^/]+)\/?.*/g, "$1");
							return `routes.${y}`;
						}
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
				react: "preact/compat",
				"react-dom": "preact/compat",
			},
		},
	});
};
