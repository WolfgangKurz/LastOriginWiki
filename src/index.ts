import { h } from "preact";

import { Provider } from "unistore/preact";
import store from "@/store";

import App from "@/components/app";

import "@/themes/index.scss";
import "@/themes/patch.scss";

import { Extend } from "@/libs/Functions";
import { Store } from "unistore";

Extend();
export default (): preact.VNode => h(Provider, { store: store as Store<unknown> }, h(App, {}));
