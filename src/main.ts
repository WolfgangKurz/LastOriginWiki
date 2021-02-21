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

const getCookie = (name: string) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return (parts.pop() as string)
			.split(";")
			.shift();
	}
};
const LangValidation = (name: string | undefined) => {
	const list = ["KR", "EN", "JP"];
	if (!name || !list.includes(name)) return "KR";
	return name as "KR" | "EN" | "JP";
};

window.GLOBAL_LANG = LangValidation(getCookie("LO_LANG"));

const router = Router;
initWEBP().then(() => {
	new Vue({
		router,
		render: h => h(App),
	}).$mount("#app");
});
