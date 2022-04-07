import { render, h, Fragment } from "preact";

import App from "@/components/app";

import "bootstrap/scss/bootstrap.scss";
// import "bootstrap";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";
import { IsAprilFool } from "@/libs/Const";

Extend();
render(h(App, {}), document.getElementById("page")!);

if (IsAprilFool) {
	const link = document.querySelector<HTMLLinkElement>("link[rel=\"icon\"][type=\"image/x-icon\"]");
	if (link) link.href = "/favicon2.ico";
}
