import $ from "jquery";
import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/bootstrap-vue";

import "./plugins/mixin";

import { initWEBP } from "@/libs/Const";
import Checkbox from "@/components/Checkbox.vue";

import Router from "./Router";
import App from "./App.vue";

import "@/libs/Meta";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.component("checkbox", Checkbox);

const router = Router;
initWEBP().then(() => {
	new Vue({
		router,
		render: h => h(App),
	}).$mount("#app");
});
