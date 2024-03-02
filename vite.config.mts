import fs from "fs";
import path from "path";

import YAML from "yaml";

import { globSync } from "glob";
import hash from "hash.js";
import deepmerge from "deepmerge";

import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

import pixiUrlPatch from "./plugins/pixi-url-patch";

console.log("building...");
export default ({ mode }) => {
    const viteEnv = loadEnv(mode, process.cwd());

    const isProd = mode === "production";
    const isDev = !isProd;

    // buildtime
    if (mode !== "optimize") {
        console.log("buildtime updating...");
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
    } else
        console.log("skip buildtime update - on optimize");

    // yaml hash
    if (isProd) {
        (() => {
            console.log("yaml hash updating...");
            interface DBHashType {
                [K: string]: string | DBHashType;
            }

            const yamlDir = path.resolve(__dirname, "external", "yaml");
            const list = (() => {
                const baseDir = path.resolve(__dirname, "external", "yaml");
                const globPath = path.join(baseDir, "**", "*.yml");

                return globSync(globPath.replace(/\\/g, "/"))
                    .filter(f => !/[/\\]buildtime.yml$/.test(f))
                    .map(f => {
                        const rel = path.relative(baseDir, f).replace(/\\/g, "/");
                        return `!/${rel.substring(0, rel.length - 4)}`;
                    });
            })();

            let outs: DBHashType = {};
            list.forEach(item => {
                const _item = item.substring(2);
                const file = path.resolve(yamlDir, `${_item}.yml`);
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

            const keys: string[] = [];
            JSON.stringify(outs, (k, v) => (keys.push(k), v), "\t");
            keys.sort();

            const output = [
                "// Content automatically generated",
                "export interface DBHashType { [K: string]: string | DBHashType; }",
                `export default ${JSON.stringify(outs, keys, "\t")} as DBHashType;`,
            ].join("\n");

            fs.writeFileSync(
                path.resolve(__dirname, "src", "libs", "Loader", "hash.ts"),
                output,
                "utf-8",
            );
        })();
    } else
        console.log(`skip hash update - on ${mode}`);

    const prependData = `${[
        "@charset \"UTF-8\";",
        "@use \"sass:color\";",
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
                output: {
                    inlineDynamicImports: false,
                    manualChunks (id) {
                        // entry
                        if (
                            id.includes("/src/index.") ||
                            id.includes("/src/app/")
                        ) return undefined;

                        // vendor
                        if (id.includes("/node_modules/bootstrap")) return "vendor.bootstrap";
                        if (id.includes("/node_modules/react")) return "vendor.react";
                        if (id.includes("/node_modules/@esotericsoftware/")) return "vendor.spine";
                        if (id.includes("/node_modules/@popperjs/")) return "vendor.popperjs";
                        if (id.includes("/node_modules/graphlib/")) return "vendor.graphlib";
                        if (id.includes("/node_modules/lodash/")) return "vendor.lodash";

                        // not used anymore
                        if (id.includes("/node_modules/swiper/")) return "vendor.swiper";
                        if (id.includes("/node_modules/chart.js/")) return "vendor.chart";

                        if (
                            id.includes("/node_modules/pixi") ||
                            id.includes("/node_modules/@pixi/") ||
                            id.includes("/node_modules/@turf/")
                        ) return "vendor.pixi";
                        if (
                            id.includes("/node_modules/@reactflow/") ||
                            id.includes("/node_modules/@tisoap/") ||
                            id.includes("/node_modules/@dagrejs/") ||
                            id.includes("/node_modules/d3-") ||
                            id.includes("/node_modules/pathfinding/")
                        ) return "vendor.flow";

                        if (
                            id.includes("/html2canvas/") ||
                            id.includes("/node_modules/css-line-break/") ||
                            id.includes("/node_modules/text-segmentation/")
                        ) return "vendor.html2canvas";

                        if (id.includes("/node_modules/")) return "vendor";

                        // components/bootstrap-icon/
                        if (id.includes("/src/components/bootstrap-icon/")) return "components.icon";

                        // types & libs & loader hash -> base
                        if (id.includes("/src/types/")) return "base";
                        if (id.includes("/src/libs/")) return "base";

                        // external -> each file
                        if (id.includes("/src/external/")) {
                            const _ = "/src/external/";
                            const idx = id.indexOf(_) + _.length;
                            const _name = id.substring(idx);
                            if (_name.indexOf("/") >= 0)
                                return `external.${_name.substring(0, _name.indexOf("/"))}`;
                            else
                                return `external.${_name.substring(0, _name.lastIndexOf("."))}`;
                        }

                        // components
                        if (
                            id.includes("/src/components/locale/") ||
                            id.includes("/src/components/Loader/") ||
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
                    find: "react",
                    replacement: "preact/compat",
                },
                {
                    find: "react-dom",
                    replacement: "preact/compat",
                },
            ],
        },
    });
};
