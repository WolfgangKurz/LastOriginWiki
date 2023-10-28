import { Plugin } from "vite";

const pixiUrlPatch = (): Plugin[] => {
	const moduleId = "virtual:pixi-url-placeholder";

	function convert (code: string): string {
		return code.replace(
			/from "url"/g,
			`from "virtual:pixi-url-placeholder"`,
		);
	}

	return [
		{
			name: "pixiUrlPlaceholder",
			resolveId (id) {
				if (id === moduleId)
					return moduleId;
			},
			load (id) {
				if (id === moduleId) {
					return ["parse", "format", "resolve"]
						.map(r => `export function ${r}(...args) {};`)
						.join("\n");
				}
			}
		},
		{
			name: "pixiUrlPatch",
			apply (config, { command }) {
				return command === "build" && !config.build?.ssr;
			},

			transform (code, id, options) {
				if (!id.includes("/@pixi/"))
					return { code };

				if (!code.includes(`from "url"`))
					return { code };

				return {
					code: convert(code),
				};
			},
		},
	];
};
export default pixiUrlPatch;
