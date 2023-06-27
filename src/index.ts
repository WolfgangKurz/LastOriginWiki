import { render, h } from "preact";

import App from "@/app";

import "bootstrap/scss/bootstrap.scss";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";

import { GetJson, JsonLoaderCore } from "@/components/loader";
import buildtime from "@/buildtime";
import Store from "@/store";

Extend();

{
	const verCheck = () => {
		const buildtimeJson = `!/buildtime.json?_=${Date.now()}`;
		JsonLoaderCore("!", buildtimeJson)
			.then(() => {
				const latestBuildNo = GetJson<number>(buildtimeJson);
				const currentBuildNo = buildtime.build;

				console.log(latestBuildNo, currentBuildNo);
				if (latestBuildNo !== currentBuildNo)
					Store.requireReload.value = true;
			});
	};

	setInterval(verCheck, 5 * 60 * 1000); // every 5min
	verCheck();
}

render(h(App, {}), document.getElementById("page")!);
