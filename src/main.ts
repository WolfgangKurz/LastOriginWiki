import Vue from "vue";

import "./plugins/bootstrap-vue";
import "./plugins/lazydata";
import "./plugins/mixin";
import "./plugins/locale";
import "./plugins/raw";

import { initWEBP } from "@/libs/Const";

import Router from "./Router";
import App from "./App.vue";

import "@/libs/Meta";

Vue.config.productionTip = false;

window.GLOBAL_LANG = "EN";

const router = Router;
initWEBP().then(() => {
	new Vue({
		router,
		render: h => h(App),
	}).$mount("#app");
});
