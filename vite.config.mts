import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

import { cyan, gray, lightMagenta, yellow } from "kolorist";

import YAML from "yaml";

import glob from "fast-glob";
import { createJiti } from "jiti";

import { defineConfig, loadEnv, type SassPreprocessorOptions, type UserConfig } from "vite";
import preact from "@preact/preset-vite";

import pixiUrlPatch from "./plugins/pixi-url-patch";

console.log(cyan("* preparing..."));
export default defineConfig(async ({ mode }) => {
	const viteEnv = loadEnv(mode, process.cwd());

	const isProd = mode === "production";
	const isDev = !isProd;

	// template scripts
	console.log(lightMagenta("  + preprocessing template scripts..."));
	{
		const jiti = createJiti(import.meta.url);
		const templateScripts = await glob(
			path.resolve(__dirname, "src", "**", "*.t.ts").replace(/\\/g, "/"),
			{ cwd: __dirname, absolute: true },
		);
		for (const sc of templateScripts) {
			console.log(yellow(`    - ${path.basename(sc)}`));
			await jiti.import(sc);
		}
	}

	// buildtime
	console.log(lightMagenta("  + buildtime updating..."));
	{
		const dest = path.resolve(__dirname, "src", "buildtime.ts");
		const destYaml = path.resolve(__dirname, "external", "yaml", "buildtime.yml");

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
			destYaml,
			YAML.stringify(buildNo),
			"utf-8",
		);
	}

	// yaml hash
	if (isProd) {
		console.log(lightMagenta("  + yaml hash updating..."));

		interface DBHashType {
			[K: string]: string | DBHashType;
		}

		const yamlDir = path.resolve(__dirname, "external", "yaml");
		const list = (await glob(path.join(yamlDir, "**", "*.yml").replace(/\\/g, "/")))
			.filter(f => !/[/\\]buildtime.yml$/.test(f));
		list.sort();

		function strip_ext (p: string): string {
			return p.substring(0, p.length - path.extname(p).length);
		}

		const outs: DBHashType = {};
		await Promise.all(list.map(async filePath => {
			const name = strip_ext(path.relative(yamlDir, filePath).replace(/\\/g, "/"));
			const hash = crypto.createHash("sha1")
				.update(fs.readFileSync(filePath, "utf-8"))
				.digest("hex")
				.substring(0, 8);

			const parts = name.split("/");
			let cursor = outs;
			for (let i = 0; i < parts.length; i++) {
				if (i === parts.length - 1)
					cursor[parts[i]] = hash;
				else {
					cursor[parts[i]] ||= {};
					cursor = cursor[parts[i]] as DBHashType;
				}
			}
		}));

		const output = [
			"// Content automatically generated",
			"export interface DBHashType { [K: string]: string | DBHashType; }",
			`export default ${JSON.stringify(outs, undefined, "\t")} as DBHashType;`,
		].join("\n");

		fs.writeFileSync(
			path.resolve(__dirname, "src", "libs", "Loader", "hash.ts"),
			output,
			"utf-8",
		);
	} else
		console.log(gray(`  + skip hash update - on ${mode}`));

	const prependData = `${[
		"@use \"sass:color\";",
		"@use \"sass:math\";",
		"@use \"sass:list\";",
		"@use \"sass:map\";",
		`$NODE_ENV: "${mode}";`,
		`$LOCALHOST: "${viteEnv.VITE_LOCALHOST || ""}:${viteEnv.VITE_ASSET_PORT}";`,
		`@import "${path.resolve(__dirname, "src", "themes", "base").replace(/\\/g, "/")}";`,
	].join("\n")}\n`;
	const cssOption: SassPreprocessorOptions = {
		additionalData: prependData,
		silenceDeprecations: [
			"import",
			"color-functions",
			"global-builtin",
			"if-function",
		] as any[],
	};

	//#region Split Chunk config
	interface SplitChunkGroup {
		/**
		 * `null` will be `undefined` return.
		 * 
		 * For function type, `undefined` return will make test to next group
		 */
		name: string | ((mid: string) => string | null | undefined) | null;
		/** Module id's path separator is always `/` */
		test: string | RegExp;
	}
	const splitChunkGroups: SplitChunkGroup[] = [
		// entry
		{ name: null, test: /\/src\/(index\.|app\/)/ },

		// vendor
		{ name: "vendor.bootstrap", test: "/node_modules/bootstrap" },
		{ name: "vendor.react", test: "/node_modules/react" },
		{ name: "vendor.spine", test: "/node_modules/@esotericsoftware/" },
		{ name: "vendor.popperjs", test: "/node_modules/@popperjs/" },
		{ name: "vendor.graphlib", test: "/node_modules/graphlib/" },
		{ name: "vendor.lodash", test: "/node_modules/lodash/" },
		{ name: "vendor.opentype", test: "/node_modules/opentype.js/" },

		{ name: "vendor.pixi", test: /\/node_modules\/@?pixi[-.]?/ },
		{ name: "vendor.flow", test: /\/node_modules\/@?(reactflow\/|tisoap\/|dagrejs\/|d3-|pathfinding\/)/ },

		{ name: "vendor", test: "/node_modules/" },

		// components/bootstrap-icon/
		{ name: "components.icon", test: "/src/components/bootstrap-icon/" },

		// types & libs & loader hash -> base
		{ name: "base", test: /\/src\/(types|libs)\// },

		// external -> each file
		{
			name: (mid) => {
				const name = /\/src\/external\/([^./]+)/.exec(mid);
				if (name) return `external.${name[1].replace(/[^a-zA-Z0-9_-]/g, "_")}`;
			},
			test: "/src/external/",
		},

		// components
		{ name: "components.base", test: /\/src\/components\/(locale|Loader|redirect)/ },
		{ name: "components.bootstrap", test: "/src/components/bootstrap-" },
		{ name: "components.buff", test: "/src/components/buff-" },
		{ name: "components.drop", test: "/src/components/drop-" },
		{ name: "components.equip", test: "/src/components/equip-" },
		{ name: "components.roguelike", test: "/src/components/roguelike-" },
		{ name: "components.skill", test: "/src/components/skill-" },
		{ name: "components.unit", test: "/src/components/unit-" },
		{ name: "components.popup", test: "/src/components/popup-" },
		{ name: "components", test: "/src/components/" },

		// routes
		{
			name: (mid) => {
				const ym = /\/changelog\/changelog\/([0-9]+)/.exec(mid);
				if (ym) return `routes.changelog.${ym[1]}`;
			},
			test: /\/src\/routes\/changelog\/changelog\/[0-9]+/,
		},
		{ name: "routes.changelog", test: "/src/routes/changelog/" },

		{
			name: (mid) => {
				const name = /\/src\/routes\/([^/]+)/.exec(mid);
				if (name) return `routes.${name[1]}`;
			},
			test: "/src/routes/",
		},
	];
	//#endregion

	console.log(cyan("* vite building..."));
	return {
		esbuild: {
			jsxFactory: "h",
			jsxFragment: "Fragment",
			// @ts-ignore
			logOverride: {
				"this-is-undefined-in-esm": "silent",
			},
		},
		optimizeDeps: {
			include: [],
		},
		build: {
			assetsDir: "build",
			reportCompressedSize: false,
			modulePreload: { polyfill: false },

			minify: isProd,
			sourcemap: isDev,

			rollupOptions: {
				onLog (_level, log, _handler) {
					if (log.code === "CIRCULAR_DEPENDENCY")
						return; // Ignore circular dependency warnings
				},
				output: {
					inlineDynamicImports: false,
					manualChunks (id) {
						const mid = id.replace(/\\/g, "/");
						for (const g of splitChunkGroups) {
							if (typeof g.test === "string" ? mid.includes(g.test) : g.test.test(mid)) {
								if (g.name === null) return undefined;

								const r = typeof g.name === "string"
									? g.name
									: g.name(mid);
								if (r === null) return undefined;
								if (r === undefined) continue;
								return r;
							}
						}
						return "chunk";
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
				sass: cssOption,
				scss: cssOption,
			},
		},
		plugins: [
			preact(),
			pixiUrlPatch(),
		],
		resolve: {
			alias: [
				{
					find: "@/",
					replacement: `${path.resolve(__dirname, "src")}/`,
				},
				{
					find: "!/",
					replacement: `${path.resolve(__dirname, "node_modules")}/`,
				},
				{
					find: "react",
					replacement: "preact/compat",
				},
				{
					find: "react-dom",
					replacement: "preact/compat",
				},
			],
		},
	} satisfies UserConfig as UserConfig; // to suppress return type error
});
