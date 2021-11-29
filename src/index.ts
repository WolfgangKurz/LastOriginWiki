import { render, h } from "preact";

import App from "@/components/app";

import "bootstrap/scss/bootstrap.scss";
// import "bootstrap";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";

Extend();
render(h(App, {}), document.getElementById("page")!);
