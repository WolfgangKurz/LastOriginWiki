import { render, h } from "preact";

import App from "@/app";

import "bootstrap/scss/bootstrap.scss";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";

import { GetJson, JsonLoaderCore } from "@/components/loader";
import buildtime from "@/buildtime";
import OldStore from "@/oldstore";

Extend();

const buildtimeJson = `!/buildtime.json?_=${Date.now()}`;
JsonLoaderCore("!", buildtimeJson)
	.then(() => {
		const latestBuildNo = GetJson<number>(buildtimeJson);
		const currentBuildNo = buildtime.build;

		if (latestBuildNo !== currentBuildNo)
			OldStore.Actions().markAsRequireReload();
	});

render(h(App, {}), document.getElementById("page")!);
