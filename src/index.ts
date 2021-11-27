import { render, h } from "preact";

import { Store } from "unistore";
import { Provider } from "unistore/preact";
import store from "@/store";

import App from "@/components/app";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";

Extend();
render(h(App, {}), document.getElementById("app")!);
