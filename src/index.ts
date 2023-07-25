import { render, h } from "preact";

import App from "@/app";

import "@/themes/index.scss";

import { Extend } from "@/libs/Functions";

import { GetJson, JsonLoaderCore } from "@/components/loader";
import buildtime from "@/buildtime";
import Store from "@/store";

Extend();

{
	const verCheck = () => {
		const buildtimeYaml = `!/buildtime.yml?_=${Date.now()}`;
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
}

render(h(App, {}), document.getElementById("page")!);
