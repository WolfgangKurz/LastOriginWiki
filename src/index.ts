import { render, h } from "preact";

import * as YAML from "@/external/yaml";

import App from "@/app";

import "@/themes/index.scss";

import { Extend } from "@/libs/Functions";
import { SetupLibraries } from "@/libs/Setup";

import { GetJson, JsonLoaderCore } from "@/libs/Loader";
import buildtime from "@/buildtime";
import Store from "@/store";

Extend();

SetupLibraries();

YAML.ensure().then(() => {
	const verCheck = () => {
		const buildtimeYaml = "!/buildtime.yml";
		JsonLoaderCore("!", buildtimeYaml)
			.then(() => {
				const latestBuildNo = GetJson<number>(buildtimeYaml);
				const currentBuildNo = buildtime.build;

				console.log("server:" + latestBuildNo, "client:" + currentBuildNo);
				if (latestBuildNo !== currentBuildNo)
					Store.requireReload.value = true;
			});
	};

	setInterval(verCheck, 5 * 60 * 1000); // every 5min
	verCheck();

	if (typeof window !== "undefined") { // is on browser...?
		["pageonloading", "pageonerror", "pagemayexpired"].forEach(e => {
			const el = document.querySelector(`#${e}`);
			if (el) {
				const parent = el.parentNode;
				if (parent)
					parent.removeChild(el);
			}
		});
	}

	render(h(App, {}), document.getElementById("page")!);
});
